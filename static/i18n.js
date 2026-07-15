// LWS Coal Burn Calculator — i18n dictionary + runtime.
//
// KR terminology sourced from:
//   - [[06-season-2-frozen]] KR ↔ EN table (석탄, 고열 화로, 오버드라이브, 눈보라, 얼음 상태...)
//   - [[15-glossary]] (fallbacks for terms not season-specific)
//
// Rule: every visible string in index.html has a data-i18n or data-i18n-placeholder
// attribute. No hardcoded English/Korean in the DOM.

(function () {
  'use strict';

  var I18N = {
    en: {
      // Chrome
      brandSub: 'LWS Suite',
      langToggle: '한국어',
      footerCred: 'Powered by the LWS Knowledge Base',
      footerHome: 'r5tools.io',

      // Page
      title: 'Coal Burn Calculator',
      lede: 'How much Coal does every member need stockpiled to survive the Week-4 -70 °C blizzard with the High-Heat Furnace in Overdrive for the full 3-hour window? Answer it before the storm — not after, when teleport, rally, and relocation are all disabled.',

      // Single-member card
      singleHeading: 'Single member',
      singleDesc: 'Enter your High-Heat Furnace level and current coal. Get a green / yellow / red verdict.',
      furnaceLevel: 'Furnace level',
      furnaceLevelHint: '1 – 30',
      coalStock: 'Coal in stock',
      coalStockHint: 'Your current stockpile',
      duration: 'Blizzard duration (hours)',
      durationHint: 'Default 3 (Week 1-4+)',
      blizzardDrop: 'Blizzard drop (°C)',
      blizzardDropHint: 'W1-2: -30 · W3: -50 · W4+: -70',
      overdrive: 'Overdrive (4× burn)',
      overdriveHint: 'Recommended for -70 °C',
      calculate: 'Calculate',
      reset: 'Reset',

      // Single-member result
      verdictGreen: 'GREEN — you have enough coal',
      verdictYellow: 'YELLOW — cutting it close',
      verdictRed: 'RED — you will freeze mid-blizzard',
      resFurnaceLevel: 'Furnace level',
      resBurnPerMin: 'Burn rate',
      resNeed: 'Coal needed',
      resStock: 'You have',
      resDelta: 'Delta',
      unitPerMin: 'coal / min',
      unitCoal: 'coal',
      estimate: '± estimate',
      estimateNote: 'Per-level burn rate L2–L29 is not yet KB-verified — v0.1 linearly interpolates between L1 and L30 anchors. Cross-check against your in-game meter before betting your alliance on this number.',

      // Batch card
      batchHeading: 'Batch (R5 mode)',
      batchDesc: 'Paste your alliance roster CSV. Columns: name,rank,hq_level,total_power,notes,furnace_level,coal_stock. First row = headers. Same CSV format as the Hive Planner + extra furnace_level and coal_stock columns.',
      batchPlaceholder: 'name,rank,hq_level,total_power,notes,furnace_level,coal_stock\nEvan,R5,30,120000000,,28,180000\nBrittany,R4,29,95000000,,24,120000\n...',
      batchRun: 'Run batch',
      batchExportCsv: 'Export CSV',
      batchExportPng: 'Export PNG',
      batchExportHelp: 'Alliance-help text',

      // Batch table
      colName: 'Name',
      colRank: 'Rank',
      colLevel: 'Furnace',
      colStock: 'Stock',
      colNeed: 'Need',
      colDelta: 'Delta',
      colStatus: 'Status',

      // Summary
      summaryOf: 'of',
      summaryShort: 'members short',
      summaryDeficit: 'Total deficit:',
      summaryReady: 'Every listed member has enough coal.',

      // Errors
      errFurnaceRange: 'Furnace level must be 1–30.',
      errCoalNegative: 'Coal stockpile cannot be negative.',
      errDuration: 'Duration must be a positive number.',
      errBatchEmpty: 'Paste at least one member row.',
      errBatchHeaders: "Missing required column. Need 'name', 'furnace_level', 'coal_stock' at minimum.",
      errNetwork: "Couldn't reach the server. Try again in a moment.",
    },
    ko: {
      // Chrome
      brandSub: 'LWS 스위트',
      langToggle: 'EN',
      footerCred: 'LWS 지식 베이스에서 지원',
      footerHome: 'r5tools.io',

      // Page
      title: '석탄 소모 계산기',
      lede: '4주차 -70 °C 눈보라를 고열 화로 오버드라이브로 3시간 동안 버티려면 각 멤버가 얼마나 많은 석탄을 비축해야 할까요? 순간이동·집결·재배치가 모두 막히는 폭풍 중이 아니라, 폭풍 전에 답을 확인하세요.',

      // Single-member card
      singleHeading: '개인 (단일 멤버)',
      singleDesc: '고열 화로 레벨과 현재 석탄량을 입력하세요. 초록 / 노랑 / 빨강으로 판정합니다.',
      furnaceLevel: '화로 레벨',
      furnaceLevelHint: '1 – 30',
      coalStock: '보유 석탄',
      coalStockHint: '현재 비축량',
      duration: '눈보라 지속 시간 (시간)',
      durationHint: '기본 3시간 (1-4주차 이상)',
      blizzardDrop: '눈보라 온도 강하 (°C)',
      blizzardDropHint: '1-2주: -30 · 3주: -50 · 4주 이상: -70',
      overdrive: '오버드라이브 (4배 연소)',
      overdriveHint: '-70 °C 시 권장',
      calculate: '계산',
      reset: '초기화',

      // Single-member result
      verdictGreen: '초록 — 석탄이 충분합니다',
      verdictYellow: '노랑 — 아슬아슬합니다',
      verdictRed: '빨강 — 눈보라 중에 얼어붙습니다',
      resFurnaceLevel: '화로 레벨',
      resBurnPerMin: '연소율',
      resNeed: '필요 석탄',
      resStock: '보유량',
      resDelta: '차이',
      unitPerMin: '석탄 / 분',
      unitCoal: '석탄',
      estimate: '± 추정',
      estimateNote: '레벨 2–29의 석탄 소모율은 아직 지식 베이스에서 검증되지 않았습니다 — v0.1은 L1과 L30 기준값 사이를 선형 보간합니다. 연맹 전략을 결정하기 전에 인게임 수치와 대조해 확인하세요.',

      // Batch card
      batchHeading: '일괄 처리 (R5 모드)',
      batchDesc: '연맹 명단 CSV를 붙여넣으세요. 컬럼: name,rank,hq_level,total_power,notes,furnace_level,coal_stock. 첫 행은 헤더. 하이브 플래너와 동일한 CSV 형식에 furnace_level·coal_stock 컬럼이 추가됩니다.',
      batchPlaceholder: 'name,rank,hq_level,total_power,notes,furnace_level,coal_stock\nEvan,R5,30,120000000,,28,180000\nBrittany,R4,29,95000000,,24,120000\n...',
      batchRun: '일괄 계산',
      batchExportCsv: 'CSV 내보내기',
      batchExportPng: 'PNG 내보내기',
      batchExportHelp: '동맹 지원 요청 텍스트',

      // Batch table
      colName: '이름',
      colRank: '계급',
      colLevel: '화로',
      colStock: '보유',
      colNeed: '필요',
      colDelta: '차이',
      colStatus: '상태',

      // Summary
      summaryOf: '중',
      summaryShort: '명이 부족',
      summaryDeficit: '총 부족량:',
      summaryReady: '모든 멤버의 석탄이 충분합니다.',

      // Errors
      errFurnaceRange: '화로 레벨은 1–30 사이여야 합니다.',
      errCoalNegative: '석탄 비축량은 음수일 수 없습니다.',
      errDuration: '지속 시간은 양수여야 합니다.',
      errBatchEmpty: '최소 한 명의 멤버를 붙여넣으세요.',
      errBatchHeaders: "필수 컬럼이 없습니다. 최소한 'name', 'furnace_level', 'coal_stock'이 필요합니다.",
      errNetwork: '서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.',
    },
  };

  var initialLang = (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';

  window.LWSI18N = {
    dict: I18N,
    lang: initialLang,

    t: function (key) {
      var d = I18N[this.lang] || I18N.en;
      if (d[key] !== undefined) return d[key];
      if (I18N.en[key] !== undefined) return I18N.en[key];
      return key;
    },

    apply: function () {
      var self = this;
      document.documentElement.lang = self.lang;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        el.textContent = self.t(k);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-placeholder');
        el.placeholder = self.t(k);
      });
      document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        var k = el.getAttribute('data-i18n-title');
        el.title = self.t(k);
      });
    },

    toggle: function () {
      this.lang = (this.lang === 'en') ? 'ko' : 'en';
      this.apply();
    },
  };
})();
