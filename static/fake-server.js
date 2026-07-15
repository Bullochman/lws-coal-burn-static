/**
 * Fake-server shim for GH Pages static deploy.
 *
 * The Coal Burn Calculator's client (index.html) calls /api/coal/single and
 * /api/coal/batch. On the full-stack version those are Python endpoints in
 * server.py. On GH Pages there's no server, so we monkey-patch window.fetch
 * to intercept those paths and compute the response locally in JS.
 *
 * Kept as a straight port of server.py's math — same KB-cited constants,
 * same status_for thresholds, same green/yellow/red banding. If you tweak
 * numbers in server.py, mirror them here.
 */
(function () {
  'use strict';

  // ---- KB-sourced constants (mirror server.py) ----
  // KB: [[06-season-2-frozen]] "Overdrive coal burn ~= 4x Normal"
  const OVERDRIVE_MULTIPLIER = 4;
  // v0.1 placeholder — TODO: KB gap, verify in-game
  const PERSONAL_BURN_L1_NORMAL = 30;   // coal/min
  const PERSONAL_BURN_L30_NORMAL = 450; // coal/min
  const SAFE_BUFFER_RATIO = 0.20;

  function personalBurnRate(level, overdrive) {
    const lvl = Math.max(1, Math.min(30, parseInt(level, 10) || 1));
    const frac = (lvl - 1) / 29;
    const normal = PERSONAL_BURN_L1_NORMAL + frac * (PERSONAL_BURN_L30_NORMAL - PERSONAL_BURN_L1_NORMAL);
    return overdrive ? normal * OVERDRIVE_MULTIPLIER : normal;
  }

  function coalNeeded(level, durationHours, overdrive) {
    return Math.round(personalBurnRate(level, overdrive) * 60 * parseFloat(durationHours));
  }

  function statusFor(need, stock) {
    if (need <= 0) return 'green';
    const ratio = (stock - need) / need;
    if (ratio >= SAFE_BUFFER_RATIO) return 'green';
    if (ratio >= 0) return 'yellow';
    return 'red';
  }

  function evaluateSingle(furnaceLevel, coalStock, durationHours, overdrive) {
    const lvl = parseInt(furnaceLevel, 10);
    const stock = parseInt(coalStock, 10);
    const hrs = parseFloat(durationHours);
    const od = !!overdrive;
    const need = coalNeeded(lvl, hrs, od);
    return {
      furnace_level: lvl,
      coal_stock: stock,
      duration_hours: hrs,
      overdrive: od,
      burn_per_min: Math.round(personalBurnRate(lvl, od) * 10) / 10,
      coal_needed: need,
      delta: stock - need,
      status: statusFor(need, stock),
      estimate: true,
    };
  }

  function evaluateBatch(members, durationHours, overdrive) {
    const results = [];
    let shortCount = 0;
    let totalDeficit = 0;
    for (const m of members || []) {
      try {
        const row = evaluateSingle(
          m.furnace_level || 1,
          m.coal_stock || 0,
          durationHours,
          overdrive
        );
        row.name = m.name || '';
        row.rank = m.rank || '';
        if (row.delta < 0) {
          shortCount++;
          totalDeficit += -row.delta;
        }
        results.push(row);
      } catch (e) { /* skip malformed row */ }
    }
    return {
      results,
      summary: {
        member_count: results.length,
        short_count: shortCount,
        total_deficit: totalDeficit,
        duration_hours: parseFloat(durationHours),
        overdrive: !!overdrive,
      },
    };
  }

  // ---- fetch monkey-patch ----
  const realFetch = window.fetch.bind(window);

  window.fetch = async function (input, init) {
    let url = typeof input === 'string' ? input : input.url;
    // Only intercept /api/coal/* paths — everything else falls through to real fetch
    if (!url.startsWith('/api/coal/')) {
      return realFetch(input, init);
    }
    let body = {};
    if (init && init.body) {
      try { body = JSON.parse(init.body); } catch (e) {}
    }
    let result;
    if (url === '/api/coal/single') {
      result = evaluateSingle(body.furnace_level, body.coal_stock, body.duration_hours, body.overdrive);
    } else if (url === '/api/coal/batch') {
      result = evaluateBatch(body.members, body.duration_hours, body.overdrive);
    } else {
      // Unknown /api/coal/* — return 404-shaped
      return new Response(JSON.stringify({ error: 'endpoint not found in static build' }), {
        status: 404, headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify(result), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  };

  // Optional: expose the pure functions for debugging in devtools console
  window.__CoalBurn = { personalBurnRate, coalNeeded, statusFor, evaluateSingle, evaluateBatch };
})();
