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

      // Season-inactive banner
      inactiveHeading: "Coal burn doesn't apply this season",
      inactiveHint: 'Switch the warzone selector above to a warzone running Season 2 Polar Storm, or use the change link to override the season for planning.',

      // Errors
      errFurnaceRange: 'Furnace level must be 1–30.',
      errCoalNegative: 'Coal stockpile cannot be negative.',
      errDuration: 'Duration must be a positive number.',
      errBatchEmpty: 'Paste at least one member row.',
      errBatchHeaders: "Missing required column. Need 'name', 'furnace_level', 'coal_stock' at minimum.",
      errNetwork: "Couldn't reach the server. Try again in a moment.",

      // Season-variant banner (shown when non-S2 but a variant is implemented)
      variantBannerPrefix: 'Planning for',
      variantBannerConnector: '—',

      // ---- S1 Crimson Plague (placeholder-only) ----
      s1PlaceholderTitle: "Season 1 doesn't use resource-window budgeting",
      s1PlaceholderBody: "Crimson Plague has no ambient-cost mechanic like Season 2 coal. Its resource pressure is Virus Resistance for Corruptor fights (KB [[05-season-1-crimson-plague]] §16.3), which isn't a stockpile metric. For S1 planning, use the Season Timeline for Doomsday cycles or the (upcoming) Corruptor VR calculator.",

      // ---- S3 Golden Kingdom — Spice Budget Calculator ----
      s3ToolTitle: 'Spice Budget Calculator',
      s3Lede: 'How much Spice will your alliance have banked by Capitol War (W7D7)? Factors in city production 100–600/hr by level (KB [[07-future-seasons]] §S3), Spice Wars plunder exposure (30% steal cap per battle), and Capitol/Cannon bonuses (+10M / +5M).',
      s3CityCount: 'Cities held',
      s3CityCountHint: '0 – 8 (per alliance cap)',
      s3AvgLevel: 'Avg. city level',
      s3AvgLevelHint: '1 – 6',
      s3SpiceStock: 'Spice in stock',
      s3SpiceStockHint: 'Your current stockpile',
      s3DaysToCapitol: 'Days to Capitol War',
      s3DaysToCapitolHint: 'W7D7 = end target',
      s3DefensiveMode: 'Show plunder exposure (30% per Spice War)',
      s3DefensiveModeHint: 'Keep stockpile ≤ target × 1.43 so 30% loss still leaves target intact.',

      // ---- S4 Evernight Isle — Copper Stockpile Planner ----
      s4ToolTitle: 'Copper Stockpile Planner',
      s4Lede: 'How much Copper will you finish Season 4 with? Factors in production 100–600/hr by city level (KB [[07-future-seasons]] §S4), Copper Wars 15%-cap plunder exposure across up to 8 rounds (W4–W7 Wed/Sat), and ranking-group tier prediction.',
      s4CopperCities: 'Copper cities held (max 6)',
      s4CopperCitiesHint: '0 – 6',
      s4AvgCityLevel: 'Avg. city level',
      s4AvgCityLevelHint: '1 – 6',
      s4DigStrongholds: 'Digging Strongholds held (max 6)',
      s4DigStrongholdsHint: 'Stone side-loop 100–200/hr',
      s4AvgStrongholdLevel: 'Avg. Stronghold level',
      s4AvgStrongholdLevelHint: '1 – 6',
      s4CopperStock: 'Copper in stock',
      s4CopperStockHint: 'Your current stockpile',
      s4DaysRemaining: 'Days remaining',
      s4DaysRemainingHint: 'to end of season',
      s4WarsMode: 'Show Copper Wars plunder exposure (15% cap/round × 8 rounds)',
      s4BloodNightHint: 'Blood Night reminder: 3× 30-min windows/day drain 18k power/min (~1.62M/day)',

      // ---- S5 Wild West — Bank & CrystalGold Planner ----
      s5ToolTitle: 'Bank & CrystalGold Planner',
      s5Lede: 'How much CrystalGold will your alliance finish Season 5 with? Factors in Bank capture cadence (2/day, Wed+Sat only), deposit math (up to 15 × 5-day terms), and the High Noon 15k/day cap from Week 3.',
      s5BanksHeld: 'Banks held (max 4, up to 12 with cities)',
      s5BanksHeldHint: 'Default cap 4; +1 per city, max 12',
      s5CitiesHeld: 'Cities held (each unlocks +1 Bank cap)',
      s5CitiesHeldHint: '0 – 8',
      s5CrystalGoldStock: 'CrystalGold in stock',
      s5CrystalGoldStockHint: 'Your current stockpile',
      s5ActiveDeposits: 'Active deposits (max 15)',
      s5ActiveDepositsHint: '5-day terms, 3/day cap',
      s5InterestRate: 'Interest rate per 5-day term (%)',
      s5InterestUnverified: 'Interest rate is NOT published in KB — enter your server\'s observed rate. Default 5% is a placeholder.',
      s5DaysRemaining: 'Days remaining',
      s5DaysRemainingHint: 'to end of season',
      s5TargetL10: 'Targeting L10 Banks (needs 39,900 Virus Resistance)',

      // ---- S6 Shadow Rainforest — Hero Awakening Shard Planner ----
      s6ToolTitle: 'Hero Awakening Shard Planner',
      s6Lede: 'Will you fully Awaken your target hero this Season 6? Bundles are permanently removed mid-season (KB [[07-future-seasons]] §S6) — this is F2P-shard math only. Unlock = 50 shards. Full 3-star = 1,190 shards (50 + 130 + 330 + 680).',
      s6TargetHero: 'Target hero (rotation: W1 Kimberly, W3 D.Va, W6 Tesla)',
      s6TargetHeroHint: 'Awakening rotation is fixed per season',
      s6CurrentShards: 'Current named-hero shards',
      s6CurrentShardsHint: 'From event drops, quests, milestones',
      s6WeeklyDropRate: 'Estimated shards/week (F2P — enter your server\'s rate)',
      s6WeeklyDropRateHint: 'KB doesn\'t publish this — observed rate only',
      s6WeeksRemaining: 'Weeks remaining',
      s6WeeksRemainingHint: 'to season end',
      s6DropRateUnverified: 'F2P shard drop rate isn\'t published in KB — enter your server\'s observed rate.',
      s6ThresholdUnlock: 'Unlock: 50 shards',
      s6ThresholdStar1: '1★: +130 (180 total)',
      s6ThresholdStar2: '2★: +330 (510 total)',
      s6ThresholdStar3: '3★: +680 (1,190 total)',
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

      // Season-inactive banner
      inactiveHeading: '이번 시즌에는 석탄 소모 계산이 적용되지 않습니다',
      inactiveHint: '위 전쟁구역 선택기를 시즌 2 폴라 스톰이 진행 중인 전쟁구역으로 전환하거나, "change" 링크로 시즌 오버라이드를 지정해 계획을 세우세요.',

      // Errors
      errFurnaceRange: '화로 레벨은 1–30 사이여야 합니다.',
      errCoalNegative: '석탄 비축량은 음수일 수 없습니다.',
      errDuration: '지속 시간은 양수여야 합니다.',
      errBatchEmpty: '최소 한 명의 멤버를 붙여넣으세요.',
      errBatchHeaders: "필수 컬럼이 없습니다. 최소한 'name', 'furnace_level', 'coal_stock'이 필요합니다.",
      errNetwork: '서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.',

      // Season-variant banner
      variantBannerPrefix: '계획 시즌:',
      variantBannerConnector: '—',

      // ---- S1 Crimson Plague (placeholder-only) ----
      s1PlaceholderTitle: '시즌 1은 자원-창구 예산 계산이 필요하지 않습니다',
      s1PlaceholderBody: '크림슨 플레이그는 시즌 2 석탄처럼 지속 소모 메커니즘이 없습니다. 자원 압박은 커럽터 전투를 위한 바이러스 저항력이며 (KB [[05-season-1-crimson-plague]] §16.3), 이는 비축 지표가 아닙니다. S1 계획에는 시즌 타임라인 또는 향후 커럽터 VR 계산기를 사용하세요.',

      // ---- S3 Golden Kingdom ----
      s3ToolTitle: '향신료 예산 계산기',
      s3Lede: '카피톨 전쟁(W7D7)까지 연맹은 얼마나 많은 향신료를 확보할까요? 도시 등급별 시간당 생산량 100–600 (KB [[07-future-seasons]] §S3), 향신료 전쟁 약탈 노출 (전투당 30% 상한), 카피톨/캐논 보너스(+10M/+5M)를 반영합니다.',
      s3CityCount: '보유 도시 수',
      s3CityCountHint: '0 – 8 (연맹 상한)',
      s3AvgLevel: '평균 도시 등급',
      s3AvgLevelHint: '1 – 6',
      s3SpiceStock: '보유 향신료',
      s3SpiceStockHint: '현재 비축량',
      s3DaysToCapitol: '카피톨 전쟁까지 남은 일수',
      s3DaysToCapitolHint: 'W7D7 = 목표일',
      s3DefensiveMode: '약탈 노출 표시 (향신료 전쟁당 30%)',
      s3DefensiveModeHint: '비축량을 목표 × 1.43 이하로 유지하면 30% 손실 후에도 목표 유지.',

      // ---- S4 Evernight Isle ----
      s4ToolTitle: '코퍼 비축 계획기',
      s4Lede: '시즌 4가 끝날 때 코퍼는 얼마나 남을까요? 도시 등급별 시간당 100–600 생산 (KB [[07-future-seasons]] §S4), 코퍼 전쟁 최대 8라운드(W4–W7 수/토)의 15% 상한 약탈 노출, 순위 그룹 티어 예측을 반영합니다.',
      s4CopperCities: '보유 코퍼 도시 (최대 6)',
      s4CopperCitiesHint: '0 – 6',
      s4AvgCityLevel: '평균 도시 등급',
      s4AvgCityLevelHint: '1 – 6',
      s4DigStrongholds: '보유 굴착 요새 (최대 6)',
      s4DigStrongholdsHint: '스톤 부수적 100–200/시',
      s4AvgStrongholdLevel: '평균 요새 등급',
      s4AvgStrongholdLevelHint: '1 – 6',
      s4CopperStock: '보유 코퍼',
      s4CopperStockHint: '현재 비축량',
      s4DaysRemaining: '남은 일수',
      s4DaysRemainingHint: '시즌 종료까지',
      s4WarsMode: '코퍼 전쟁 약탈 노출 표시 (라운드당 15% 상한 × 8라운드)',
      s4BloodNightHint: '블러드 나이트 알림: 일 3회 30분 창에서 분당 18k 파워 소모 (~일 162만)',

      // ---- S5 Wild West ----
      s5ToolTitle: '은행 & 크리스탈골드 계획기',
      s5Lede: '시즌 5 종료 시 연맹의 크리스탈골드는 얼마일까요? 은행 점령 리듬(일 2회, 수/토만), 예치 계산(최대 15개 × 5일), 3주차부터 하이 눈 일일 15k 상한을 반영합니다.',
      s5BanksHeld: '보유 은행 (기본 4, 도시 포함 최대 12)',
      s5BanksHeldHint: '기본 상한 4; 도시당 +1, 최대 12',
      s5CitiesHeld: '보유 도시 (각 은행 상한 +1 해금)',
      s5CitiesHeldHint: '0 – 8',
      s5CrystalGoldStock: '보유 크리스탈골드',
      s5CrystalGoldStockHint: '현재 비축량',
      s5ActiveDeposits: '활성 예치 (최대 15)',
      s5ActiveDepositsHint: '5일 기간, 일 3개 상한',
      s5InterestRate: '5일 기간당 이자율 (%)',
      s5InterestUnverified: '이자율은 지식 베이스에 미공개 — 서버의 관측치를 입력하세요. 기본 5%는 임시값.',
      s5DaysRemaining: '남은 일수',
      s5DaysRemainingHint: '시즌 종료까지',
      s5TargetL10: 'L10 은행 목표 (바이러스 저항력 39,900 필요)',

      // ---- S6 Shadow Rainforest ----
      s6ToolTitle: '영웅 각성 조각 계획기',
      s6Lede: '이번 시즌 6에 목표 영웅을 완전히 각성시킬 수 있을까요? 각성 번들이 시즌 중반 영구 삭제되었습니다 (KB [[07-future-seasons]] §S6) — 무과금 조각 계산만 가능합니다. 해금 = 50 조각. 3성 완성 = 1,190 조각 (50 + 130 + 330 + 680).',
      s6TargetHero: '목표 영웅 (로테이션: W1 킴벌리, W3 D.Va, W6 테슬라)',
      s6TargetHeroHint: '각성 로테이션은 시즌별 고정',
      s6CurrentShards: '현재 지정 영웅 조각',
      s6CurrentShardsHint: '이벤트 드랍/퀘스트/마일스톤',
      s6WeeklyDropRate: '주당 예상 조각 (무과금 — 서버 관측치 입력)',
      s6WeeklyDropRateHint: '지식 베이스에 미공개 — 관측치만',
      s6WeeksRemaining: '남은 주 수',
      s6WeeksRemainingHint: '시즌 종료까지',
      s6DropRateUnverified: '무과금 조각 드랍률은 지식 베이스에 미공개 — 서버 관측치를 입력하세요.',
      s6ThresholdUnlock: '해금: 50 조각',
      s6ThresholdStar1: '1★: +130 (누적 180)',
      s6ThresholdStar2: '2★: +330 (누적 510)',
      s6ThresholdStar3: '3★: +680 (누적 1,190)',
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
