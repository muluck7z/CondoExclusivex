(function () {
  'use strict';

  var LANG_KEY = 'rc2_lang';

  /* ── Sound ─────────────────────────────────────────── */
  var audio = null;
  function playClick() {
    try {
      if (!audio) {
        audio = new Audio('/click-sound.mp3');
        audio.volume = 0.5;
      }
      audio.currentTime = 0;
      audio.play().catch(function () {});
    } catch (e) {}
  }

  /* ── Styles ────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = `
    #rc-lang-overlay {
      position: fixed;
      inset: 0;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      font-family: 'Inter', sans-serif;
      padding: 20px;
    }
    #rc-lang-overlay.rc-hidden {
      display: none;
    }
    .rc-card {
      background: #111;
      border: 1px solid #333;
      border-radius: 24px;
      padding: 40px;
      width: 100%;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      animation: rc-fadeIn 0.3s ease-out;
    }
    @keyframes rc-fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes rc-fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(10px); }
    }
    .rc-icon {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
    }
    .rc-icon svg {
      width: 40px;
      height: 40px;
      color: #dc2626; /* Red-600 */
    }
    .rc-title {
      color: #fff;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 8px;
    }
    .rc-subtitle {
      color: #888;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 32px;
    }
    .rc-btn-container {
      display: flex;
      flex-col: column;
      gap: 12px;
      flex-direction: column;
    }
    .rc-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 12px;
      padding: 14px 20px;
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .rc-btn:hover {
      background: #dc2626; /* Red-600 */
      border-color: #dc2626;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
    }
    .rc-flag {
      font-size: 18px;
    }
    #rc-token-warning {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #1c2028;
      border: 1px solid #ef4444;
      color: #fca5a5;
      font-size: 13px;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 12px;
      z-index: 9999999;
      white-space: nowrap;
      box-shadow: 0 4px 20px rgba(0,0,0,.6);
      font-family: 'Inter', sans-serif;
    }
  `;
  document.head.appendChild(style);

  /* ── Overlay Injection ─────────────────────────────── */
  function injectOverlay() {
    if (localStorage.getItem(LANG_KEY)) return;

    var overlay = document.createElement('div');
    overlay.id = 'rc-lang-overlay';
    overlay.innerHTML = `
      <div class="rc-card">
        <div class="rc-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 10h8L11 22l2-10H5Z"/></svg>
        </div>
        <div class="rc-title">QUAL LÍNGUA VOCÊ FALA?</div>
        <div class="rc-subtitle">CHOOSE YOUR LANGUAGE</div>
        <div class="rc-btn-container">
          <button class="rc-btn" data-lang="pt"><span class="rc-flag">🇧🇷</span> PORTUGUÊS (BRASIL)</button>
          <button class="rc-btn" data-lang="en"><span class="rc-flag">🇺🇸</span> ENGLISH</button>
          <button class="rc-btn" data-lang="es"><span class="rc-flag">🇪🇸</span> ESPAÑOL</button>
          <button class="rc-btn" data-lang="ru"><span class="rc-flag">🇷🇺</span> РУССКИЙ</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelectorAll('.rc-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playClick();
        var lang = btn.getAttribute('data-lang');
        localStorage.setItem(LANG_KEY, lang);
        overlay.style.animation = 'rc-fadeOut 0.2s ease forwards';
        setTimeout(function () {
          overlay.classList.add('rc-hidden');
        }, 210);
      });
    });
  }

  /* ── Token enforcement ─────────────────────────────── */
  var tokenGeneratedInSession = false;
  var WARN_MSGS = {
    en: 'Generate a token first to access the game.',
    es: 'Genera un token primero para acceder al juego.',
    pt: 'Gere um token primeiro para acessar o jogo.',
    ru: 'Сначала создайте токен, чтобы войти в игру.',
  };

  function showWarning() {
    var lang = localStorage.getItem(LANG_KEY) || 'en';
    var msg = WARN_MSGS[lang] || WARN_MSGS.en;
    var existing = document.getElementById('rc-token-warning');
    if (existing) return;
    var warn = document.createElement('div');
    warn.id = 'rc-token-warning';
    warn.textContent = msg;
    document.body.appendChild(warn);
    setTimeout(function () { warn.remove(); }, 2800);
  }

  /* ── MutationObserver ──────────────────────────────── */
  var observer = new MutationObserver(function () {
    /* Sound on all buttons and links */
    document.querySelectorAll('button:not([data-rc-s]), a:not([data-rc-s])').forEach(function (el) {
      el.setAttribute('data-rc-s', '1');
      el.addEventListener('click', playClick);
    });

    /* Enforce token before Access Game */
    document.querySelectorAll('[data-testid="button-access-game"]:not([data-rc-e])').forEach(function (el) {
      el.setAttribute('data-rc-e', '1');
      el.addEventListener('click', function (e) {
        if (!tokenGeneratedInSession) {
          e.preventDefault();
          e.stopImmediatePropagation();
          showWarning();
        }
      }, true);
    });

    /* Track when token is generated */
    document.querySelectorAll('[data-testid="button-generate-token"]:not([data-rc-t])').forEach(function (el) {
      el.setAttribute('data-rc-t', '1');
      el.addEventListener('click', function () {
        tokenGeneratedInSession = true;
      });
    });
  });

  /* Reset token state when a modal closes */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t) return;
    if (t.tagName === 'BUTTON' && t.dataset && t.dataset.testid === 'button-close-modal') {
      tokenGeneratedInSession = false;
    }
  }, true);

  /* ── Initialize ────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectOverlay);
  } else {
    injectOverlay();
  }
  observer.observe(document.body, { childList: true, subtree: true });

})();
