/* ══════════════════════════════════════════════════════════════
   NEON NEXUS 2077 — Core Application Logic
   ══════════════════════════════════════════════════════════════ */

const PRODUCTS = [
    { id: 1, name: "Anti-Gravity Boots", price: 500, image: "ag_boots.png", desc: "Walk on ceilings. Confuse your coworkers." },
    { id: 2, name: "Digital Brain Cloud", price: 1200, image: "brain_cloud.png", desc: "Upload your mind. Download wisdom." },
    { id: 3, name: "Instant-Pizza Rehydrator", price: 300, image: "pizza_rehydrator.png", desc: "Just add dark matter. Pizza in 3 seconds." },
    { id: 4, name: "Pet Robot Raptor", price: 2500, image: "robo_raptor.png", desc: "Loyal. Terrifying. House-trained." },
    { id: 5, name: "Oxygen Tank", price: 150, image: "oxygen_tank.png", desc: "Premium air from 2024. Vintage blend." },
    { id: 6, name: "Time-Travel Insurance", price: 9999, image: "time_insurance.png", desc: "Because accidents happen… before they happen." },
    { id: 7, name: "Cybernetic Eye Implant", price: 3200, image: "eye_implant.png", desc: "See the world in 16K resolution with thermal vision." },
    { id: 8, name: "Quantum Hoverboard", price: 1800, image: "hoverboard.png", desc: "Defy gravity. Look cool doing it." },
    { id: 9, name: "Neon Plasma Blade", price: 850, image: "plasma_blade.png", desc: "Slice through blast doors like butter." },
    { id: 10, name: "Neural Link Cable", price: 120, image: "neural_link.png", desc: "Direct plug-and-play for your frontal lobe." }
];

// ── State ──
const S = { cart: [], muted: false, hacker: false, vip: false, lang: 'en', flashbang: false };

// ── i18n Dictionary ──
const dictMK = {
    "Home": "Дома", "Shop": "Продавница", "About": "За Нас", "Contact": "Контакт",
    "NEON": "НЕОН", "NEXUS": "НЕКСУС", "NEON NEXUS": "НЕОН НЕКСУС",
    "ENTER THE NEXUS": "ВЛЕЗИ ВО НЕКСУСОТ",
    "YEAR 2077 · NEURAL COMMERCE PLATFORM": "ГОДИНА 2077 · НЕВРАЛНА ПЛАТФОРМА",
    "The galaxy's premier marketplace for tomorrow's essentials.": "Најдобрата галаксиска продавница за намирници од иднината.",
    "We Build The Future.": "Ја Градиме Иднината.",
    "You Live In It.": "Ти Живееш Во Неа.",
    "Neural Commerce": "Неврална Комерција",
    "Quantum Logistics": "Квантна Логистика",
    "Timeline Security": "Временска Безбедност",
    "The Nexus Storefront": "Продавница Нексус",
    "Ready to Shop": "Спремни За Купување",
    "BROWSE THE NEXUS": "РАЗГЛЕДАЈ ГО НЕКСУС",
    "Premium tech for the discerning post-human consumer": "Премиум технологија за пребирливиот пост-хуман потрошувач",
    "TOTAL": "ВКУПНО", "CHECKOUT": "НАПЛАТА", "GALACTIC CART": "ГАЛАКТИЧКА КОЛИЧКА",
    "BUY": "КУПИ", "✓ ADDED": "✓ ДОДАДЕНО",
    "Your cart is empty, citizen.": "Твојата количка е празна, граѓанину.",
    "Anti-Gravity Boots": "Анти-Гравитациски Чизми",
    "Digital Brain Cloud": "Обалк За Дигитален Мозок",
    "Instant-Pizza Rehydrator": "Рехидратор На Инстант Пица",
    "Pet Robot Raptor": "Роботско Милениче Раптор",
    "Oxygen Tank": "Боца Кислород",
    "Time-Travel Insurance": "Осигурување За Временско Патување",
    "Cybernetic Eye Implant": "Кибернетски Очен Имплант",
    "Quantum Hoverboard": "Квантен Ховерборд",
    "Neon Plasma Blade": "Неонско Плазма Сечило",
    "Neural Link Cable": "Неврален Кабел За Поврзување",
    "Designation (Name)": "Обзнака (Име)",
    "Timeline / Sector": "Временска Линија / Сектор",
    "Transmission Data": "Податоци За Трансмисија",
    "SEND TRANSMISSION": "ИСПРАТИ ТРАНСМИСИЈА",
    "TRANSMITTING...": "СЕ ИСПРАЌА...",
    "TRANSMISSION SENT ✓": "ТРАНСМИСИЈАТА Е ИСПРАТЕНА ✓",
    "SYSTEM INTRUSION DETECTED": "ДЕТЕКТИРАНА СИСТЕМСКА ИНТРУЗИЈА",
    "// NEURAL LINK OVERRIDE // PREPARE FOR DOWNLOAD": "// НАДМИНУВАЊЕ НА НЕВРАЛНА ВРСКА // ПОДГОТВЕТЕ СЕ ЗА ПРЕЗЕМАЊЕ",
    "Verify functionality": "Провери функционалност",
    "Neural Customers": "Неврални Клиенти",
    "Timelines Served": "Временски линии опслужени",
    "Paradox-Free": "Без Парадокси",
    "Est. (Retroactively)": "Основано (Ретроактивно)",
    "Verified Experiences": "Потврдени Искуства",
    "Our Vision": "Нашата Визија",
    "The Technology": "Технологијата",
    "Timeline Guarantee": "Временска Гаранција",
    "Executive Board": "Извршен Одбор",
    "CEO & Supreme Overlord": "Генерален Директор и Врховен Владетел",
    "Head of Customer Service": "Главен За Корисничка Поддршка",
    "HQ Coordinates": "HQ Координати",
    "Subspace Frequency": "Потпросторна Фреквенција",
    "Cyber-Pigeon": "Сајбер-гулаб",
    "Neon Nexus was founded in 2077 with a simple goal: to make traversing time and space as easy as ordering a pizza. We believe the future is not something you wait for; it's something you buy.": "Неон Нексус е основан во 2077 година со едноставна цел: да го направиме патувањето низ времето и просторот лесно како нарачување пица. Веруваме дека иднината не е нешто што се чека, туку нешто што се купува.",
    "Powered by a triad of Quantum Processors, Dark Matter Engines, and a slightly modified microwave, our servers exist simultaneously across all timelines to ensure 99.9% uptime.": "Подвижени од тријада Квантни Процесори, Мотори на Темна Материја и малку модифицирана микробранова печка, нашите сервери постојат симултано преку сите временски линии за да гарантираат активност од 99.9%.",
    "If your purchase accidentally erases your grandfather from existence, our Timeline Security™ team will retroactively ensure he met your grandmother. Your existence is our priority.": "Ако твоето купување случајно го избрише твојот дедо од постоењето, нашиот тим за Временска Безбедност™ ретроактивно ќе гарантира дека тој ја запознал твојата баба. Твоето постоење е наш приоритет.",
    "Sector 4, Neon Alley (Behind the noodle stand next to the reality tear). Knock 3 times. Don't look at the cat.": "Сектор 4, Неонска Уличка (Зад штандот за нудли покрај кинењето на реалноста). Тропни 3 пати. Не гледај во мачката.",
    "*Warning: May cause mild temporal displacement.*": "*Предупредување: Може да предизвика благо временско поместување.*",
    "Just throw a USB drive out your window. Our cyber-pigeons are always watching.": "Само фрли УСБ преку прозорецот. Нашите сајбер-гулаби секогаш гледаат.",
    "e.g. Kira Node": "пр. Кира Нод",
    "e.g. Sector 7G": "пр. Сектор 7Г",
    "Enter your message here...": "Внеси ја твојата порака тука...",
    "Enter neural-ID or email": "Внеси неврален-ID или е-пошта",
    "Subscribe to receive neural updates on new post-human tech drops.": "Претплати се за да добиваш неврални ажурирања за нови пост-хумани технолошки новости.",
    "SYNC COMM-LINK": "СИНХРОНИЗИРАЈ КОМ-ВРСКА",
    "SYNC": "СИНХР",
    "Nexus delivered my quantum drive yesterday, even though I ordered it tomorrow. 10/10 timeline bending.": "Нексус го достави мојот квантен погон вчера, иако го нарачав утре. 10/10 виткање на временската линија.",
    "Their synapse-link API is flawless. I thought about a new cyber-arm, and it materialized on my doorstep.": "Нивното АПИ за синапса-врска е беспрекорно. Помислив на нова сајбер-рака, и се материјализираше пред мојата врата.",
    "Direct mind-to-cart integration. Our patented synapse-link API connects desires to wallet — no clicks required.": "Директна интеграција ум-до-количка. Нашето патентирано АПИ за синапса-врска ги поврзува желбите со паричникот — не се потребни кликови.",
    "Q-Forge replicators materialize orders anywhere in the solar system within 4.7 nanoseconds.": "Q-Forge репликаторите материјализираат нарачки каде било во сончевиот систем во рок од 4.7 наносекунди.",
    "Retroactive inventory. If you change the past, your items change with you. Only at Nexus.": "Ретроактивен инвентар. Ако го промените минатото, вашите предмети се менуваат со вас. Само кај Нексус.",
    "Timeline Policy": "Полиса за Временска Линија",
    "Terms of Existence": "Услови на Постоење",
    "Paradox Guidelines": "Насоки за Парадокс",
    "Privacy Protocol": "Протокол за Приватност",
    "Neural Support": "Неврална Поддршка",
    "About Us": "За Нас",
    "Storefront": "Продавница",
    "Home Portal": "Почетен Портал",
    "NEXUS LINKS": "НЕКСУС ЛИНКОВИ",
    "LEGAL": "ПРАВНО",
    ">> INCOMING TRANSMISSION: \"Wake up... I mean, valued customer. The Matrix has you.\"": ">> ДОЈДОВНА ТРАНСМИСИЈА: \"Разбуди се... мислам, почитуван кориснику. Матриксот те има.\""
};

const alienChars = "⎍⎎⍜⏃⌿⌇⎅⎎☌⊑⟊☍⌰⋉☊⎐⏚⋏⋔⌖⍙⍀⍾";

function t(text) {
    if (!text) return text;
    if (S.lang === 'en') return text;
    if (S.lang === 'alien') {
        return text.replace(/[a-zA-Z]/g, () => alienChars[Math.floor(Math.random() * alienChars.length)]);
    }
    if (S.lang === 'mk') {
        const trimmed = text.trim();
        if (dictMK[trimmed]) return text.replace(trimmed, dictMK[trimmed]);
        return text;
    }
    return text;
}

const staticTextNodes = [];
const staticPlaceholders = [];
function extractTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const val = node.nodeValue;
        if (val.trim() && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) {
            staticTextNodes.push({ node, en: val });
        }
    } else {
        if (node.tagName && node.placeholder) {
            staticPlaceholders.push({ node, en: node.placeholder });
        }
        node.childNodes.forEach(extractTextNodes);
    }
}

// ── DOM refs ──
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ────────────────────────────────────────────────────────────
// PARTICLES — Canvas Background
// ────────────────────────────────────────────────────────────
function initParticles() {
    const cvs = $('particle-canvas'), ctx = cvs.getContext('2d');
    let W, H, particles = [], comets = [];
    const resize = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight; };
    resize(); window.addEventListener('resize', resize);

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class P {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 1.5 + .3;
            this.vx = (Math.random() - .5) * .15;
            this.vy = (Math.random() - .5) * .15;
            this.a = Math.random() * .5 + .1;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,229,255,${this.a})`;
            ctx.fill();
        }
    }

    class Comet {
        constructor() { this.reset(true); }
        reset(randomX = false) {
            // Comets should appear mostly in top half (banner area)
            this.y = Math.random() * (H * 0.7);
            this.x = randomX ? Math.random() * W : (Math.random() < 0.5 ? -100 : W + 100);

            // Speed and direction
            let speedX = Math.random() * 5 + 3;
            if (this.x > W / 2) speedX = -speedX; // If starting on right, go left

            this.vx = speedX;
            this.vy = (Math.random() - 0.5) * 2;
            this.length = Math.random() * 80 + 50;
            this.thickness = Math.random() * 1.5 + 1;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.escaping = false;
        }
        update() {
            // Check distance to mouse
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 200 && !this.escaping) {
                this.escaping = true;
                playSound('comet');
                // fly away aggressively
                const angle = Math.atan2(dy, dx);
                this.vx = Math.cos(angle) * 18;
                this.vy = Math.sin(angle) * 18;
                this.opacity = 1;
                this.length = 150; // Stretch out when zooming away
            }

            this.x += this.vx;
            this.y += this.vy;

            // Reset if way out of bounds
            if (this.x < -300 || this.x > W + 300 || this.y < -300 || this.y > H + 300) {
                this.reset();
            }
        }
        draw() {
            // The tail stretches opposite to current velocity vector
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy) || 1;
            const tailX = this.x - (this.vx / speed) * this.length;
            const tailY = this.y - (this.vy / speed) * this.length;

            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(0, 229, 255, ${this.opacity})`); // Cyan head
            gradient.addColorStop(1, `rgba(255, 45, 117, 0)`); // Pinkish transparent tail

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.thickness;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Draw bright head
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.thickness * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity + 0.2})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 120; i++) particles.push(new P());
    for (let i = 0; i < 8; i++) comets.push(new Comet());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });

        // draw lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0,229,255,${.08 * (1 - dist / 120)})`;
                    ctx.stroke();
                }
            }
        }

        comets.forEach(c => { c.update(); c.draw(); });
        requestAnimationFrame(loop);
    }
    loop();
}

// ────────────────────────────────────────────────────────────
// NAVIGATION / SPA Routing
// ────────────────────────────────────────────────────────────
function switchPage(name) {
    $$('.page').forEach(p => p.classList.remove('active'));
    $(`page-${name}`).classList.add('active');
    $$('.nav__link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ────────────────────────────────────────────────────────────
// PRODUCTS
// ────────────────────────────────────────────────────────────
function renderProducts() {
    const grid = $('product-grid');
    grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-card__scanline"></div>
      <div class="product-card__visual"><img src="${p.image}" class="product-card__image" alt="${p.name}"></div>
      <div class="product-card__body">
        <span class="product-card__tag">// ID_${String(p.id).padStart(3, '0')}</span>
        <div class="product-card__name">${t(p.name)}</div>
        <p class="product-card__desc">${t(p.desc)}</p>
        <div class="product-card__footer">
          <span class="product-card__price" data-base="${p.price}">${p.price.toLocaleString()} ₡</span>
          <button class="product-card__buy" data-id="${p.id}">${t('BUY')}</button>
        </div>
      </div>
    </div>
  `).join('');

    // Tilt
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const rx = -((e.clientY - r.top) / r.height - .5) * 12;
            const ry = ((e.clientX - r.left) / r.width - .5) * 12;
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        });
    });

    // Buy clicks
    grid.querySelectorAll('.product-card__buy').forEach(btn => {
        btn.addEventListener('click', () => addToCart(+btn.dataset.id));
    });
}

// ────────────────────────────────────────────────────────────
// CART
// ────────────────────────────────────────────────────────────
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    const ex = S.cart.find(x => x.id === id);
    if (ex) ex.qty++; else S.cart.push({ ...p, qty: 1 });
    if (p.name === 'Time-Travel Insurance') setVIP(true);
    updateCart(); openCart(); playSound('buy');
    // flash button
    const btn = document.querySelector(`.product-card__buy[data-id="${id}"]`);
    if (btn) { btn.textContent = t('✓ ADDED'); btn.classList.add('added'); setTimeout(() => { btn.textContent = t('BUY'); btn.classList.remove('added'); }, 800); }
}

function removeFromCart(id) {
    S.cart = S.cart.filter(x => x.id !== id);
    if (!S.cart.some(x => x.name === 'Time-Travel Insurance')) setVIP(false);
    updateCart();
}

function updateCart() {
    const count = S.cart.reduce((s, i) => s + i.qty, 0);
    const badge = $('cart-badge');
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';

    const body = $('cart-body');
    if (!S.cart.length) {
        body.innerHTML = `<p class="cart__empty">${t('Your cart is empty, citizen.')}</p>`;
        $('cart-total-val').textContent = '0 ₡';
        return;
    }
    body.innerHTML = S.cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" class="cart-item__image" alt="${i.name}">
      <div class="cart-item__info">
        <div class="cart-item__name">${t(i.name)}</div>
        <div class="cart-item__qty">QTY: ${i.qty}</div>
      </div>
      <span class="cart-item__price">${(i.price * i.qty).toLocaleString()} ₡</span>
      <button class="cart-item__rm" data-id="${i.id}">✕</button>
    </div>
  `).join('');
    body.querySelectorAll('.cart-item__rm').forEach(b => b.addEventListener('click', () => removeFromCart(+b.dataset.id)));

    const total = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
    const final = S.hacker ? Math.floor(total * .5) : total;
    $('cart-total-val').textContent = `${final.toLocaleString()} ₡`;
}

function openCart() { $('cart-sidebar').classList.add('open'); $('cart-overlay').classList.add('open'); }
function closeCart() { $('cart-sidebar').classList.remove('open'); $('cart-overlay').classList.remove('open'); }

// ────────────────────────────────────────────────────────────
// TERMINAL
// ────────────────────────────────────────────────────────────
function initTerminal() {
    const term = $('terminal'), bar = $('terminal-bar'), input = $('terminal-input'), output = $('terminal-body');
    let dx = 0, dy = 0, dragging = false;

    bar.addEventListener('mousedown', e => { dragging = true; dx = e.clientX - term.offsetLeft; dy = e.clientY - term.offsetTop; });
    document.addEventListener('mousemove', e => { if (!dragging) return; term.style.left = (e.clientX - dx) + 'px'; term.style.top = (e.clientY - dy) + 'px'; term.style.bottom = 'auto'; });
    document.addEventListener('mouseup', () => dragging = false);

    input.addEventListener('keydown', e => {
        if (e.key !== 'Enter' || !input.value.trim()) return;
        const cmd = input.value.trim(); input.value = '';
        addLine(`> ${cmd}`);
        const c = cmd.toLowerCase();
        if (c === '/help') addLine('Commands: /status, /hacker, /clear, /about', true);
        else if (c === '/hacker') { S.hacker = true; document.body.classList.add('hacker'); addLine('⚡ SYSTEM OVERRIDE — 50% DISCOUNT APPLIED', true); updateCart(); updatePrices(); }
        else if (c === '/status') addLine('✅ All systems nominal. Neural-link stable.', true);
        else if (c === '/about') addLine('Neon Nexus 2077 — Built for the future.', true);
        else if (c === '/clear') { output.innerHTML = ''; return; }
        else addLine(`ERR: Unknown command "${cmd}"`, true);
    });

    function addLine(text, sys) {
        const d = document.createElement('div');
        d.className = 'tl' + (sys ? ' sys' : '');
        d.textContent = text;
        output.appendChild(d);
        output.scrollTop = output.scrollHeight;
    }
}

function updatePrices() {
    document.querySelectorAll('.product-card__price').forEach(el => {
        const base = +el.dataset.base;
        const price = S.hacker ? Math.floor(base * .5) : base;
        el.textContent = price.toLocaleString() + ' ₡';
    });
}

// ────────────────────────────────────────────────────────────
// SPECIAL MODES
// ────────────────────────────────────────────────────────────
function setVIP(on) {
    S.vip = on;
    document.body.classList.toggle('vip', on);
    const badges = $('mode-badges');
    const existing = badges.querySelector('.mode-badge.vip');
    if (on && !existing) {
        const b = document.createElement('div'); b.className = 'mode-badge vip'; b.textContent = '👑 VIP TIMELINE STATUS';
        badges.appendChild(b);
    } else if (!on && existing) existing.remove();
}

// ────────────────────────────────────────────────────────────
// AUDIO
// ────────────────────────────────────────────────────────────
let audioCtx;
function getAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); return audioCtx; }
function playSound(type) {
    if (S.muted) return;
    try {
        const ctx = getAudio(), now = ctx.currentTime;
        if (type === 'buy') {
            [523, 659, 784].forEach((f, i) => {
                const o = ctx.createOscillator(), g = ctx.createGain();
                o.connect(g); g.connect(ctx.destination);
                o.type = 'sine'; o.frequency.value = f;
                const t = now + i * .08;
                g.gain.setValueAtTime(.08, t);
                g.gain.exponentialRampToValueAtTime(.001, t + .15);
                o.start(t); o.stop(t + .15);
            });
        } else if (type === 'comet') {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.type = 'sine'; o.frequency.setValueAtTime(1400, now);
            o.frequency.exponentialRampToValueAtTime(400, now + .25);
            g.gain.setValueAtTime(.015, now);
            g.gain.exponentialRampToValueAtTime(.0001, now + .25);
            o.start(now); o.stop(now + .25);
        } else {
            const o = ctx.createOscillator(), g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.type = 'square'; o.frequency.setValueAtTime(880, now);
            o.frequency.exponentialRampToValueAtTime(440, now + .05);
            g.gain.setValueAtTime(.08, now);
            g.gain.exponentialRampToValueAtTime(.001, now + .08);
            o.start(); o.stop(now + .08);
        }
    } catch (e) { }
}

// ────────────────────────────────────────────────────────────
// SCROLL EFFECTS
// ────────────────────────────────────────────────────────────
function initScrollObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in-view'); });
    }, { threshold: .15 });
    $$('.feature-card, .stat, .product-card').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity .6s ease, transform .6s ease';
        obs.observe(el);
    });
}
// CSS class applied by observer
const style = document.createElement('style');
style.textContent = '.in-view{opacity:1!important;transform:none!important}';
document.head.appendChild(style);

// ────────────────────────────────────────────────────────────
// NAV SCROLL
// ────────────────────────────────────────────────────────────
function initNavScroll() {
    const nav = $('navbar');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));
}

// ────────────────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Load preferences
    const savedLang = localStorage.getItem('nexus_lang');
    if (savedLang) {
        S.lang = savedLang;
        const selector = $('lang-switcher');
        if (selector) selector.value = savedLang;
    }
    const savedTheme = localStorage.getItem('nexus_flashbang');
    if (savedTheme === 'true') {
        S.flashbang = true;
        document.body.classList.add('flashbang');
        const themeIcon = $('theme-icon');
        if (themeIcon) themeIcon.textContent = '😎';
    }

    initParticles();

    // Init translations
    extractTextNodes(document.body);

    function applyTranslations() {
        staticTextNodes.forEach(item => {
            if (item.node.parentElement && !item.node.parentElement.closest('.product-card') && !item.node.parentElement.closest('.cart')) {
                item.node.nodeValue = t(item.en);
            }
        });
        staticPlaceholders.forEach(item => {
            if (item.node.placeholder !== undefined) {
                item.node.placeholder = t(item.en);
            }
        });
    }

    if (S.lang !== 'en') applyTranslations();

    renderProducts();
    updateCart();
    initTerminal();
    initScrollObserver();
    initNavScroll();

    // Glitch effect on load
    setTimeout(() => {
        const glitch = $('intro-glitch');
        if (glitch) {
            glitch.style.opacity = '0';
            setTimeout(() => glitch.remove(), 500);
            playSound();
        }
    }, 1200);

    // Switchers
    $('lang-switcher').addEventListener('change', e => {
        S.lang = e.target.value;
        localStorage.setItem('nexus_lang', S.lang);
        applyTranslations();
        renderProducts();
        updateCart();
    });

    $('theme-toggle').addEventListener('click', () => {
        S.flashbang = !S.flashbang;
        localStorage.setItem('nexus_flashbang', S.flashbang);
        document.body.classList.toggle('flashbang', S.flashbang);
        $('theme-icon').textContent = S.flashbang ? '😎' : '🕶️';
        if (S.flashbang) {
            playSound('buy');
            // Flash effect
            const f = document.createElement('div');
            f.style.cssText = 'position:fixed;inset:0;background:#fff;z-index:9999;transition:opacity 0.8s ease-out;pointer-events:none;';
            document.body.appendChild(f);
            setTimeout(() => f.style.opacity = '0', 50);
            setTimeout(() => f.remove(), 850);
        }
    });

    // Nav links
    $$('.nav__link').forEach(l => l.addEventListener('click', e => { e.preventDefault(); switchPage(l.dataset.page); }));
    $('nav-logo').addEventListener('click', () => switchPage('landing'));
    $('btn-enter').addEventListener('click', () => switchPage('shop'));
    $('btn-enter2').addEventListener('click', () => switchPage('shop'));

    // Cart
    $('cart-btn').addEventListener('click', openCart);
    $('cart-close').addEventListener('click', closeCart);
    $('cart-overlay').addEventListener('click', closeCart);

    // Terminal
    $('terminal-fab').addEventListener('click', () => {
        $('terminal').style.display = 'flex';
        $('terminal-input').focus();

        if (!$('terminal-fab').dataset.opened) {
            $('terminal-fab').dataset.opened = 'true';
            setTimeout(() => {
                const output = $('terminal-body');
                const d = document.createElement('div');
                d.className = 'tl sys';
                d.style.color = 'var(--c-pink)';
                d.textContent = '>> INCOMING TRANSMISSION: "Wake up... I mean, valued customer. The Matrix has you."';
                output.appendChild(d);
                output.scrollTop = output.scrollHeight;
                playSound('comet');
            }, 600);
        }
    });
    $('terminal-close').addEventListener('click', () => $('terminal').style.display = 'none');

    // Sound toggle
    $('sound-toggle').addEventListener('click', () => {
        S.muted = !S.muted;
        $('sound-icon').textContent = S.muted ? '🔇' : '🔊';
    });
});

