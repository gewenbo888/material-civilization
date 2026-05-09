// ===== Material Civilization — interactions =====
(() => {
  const html = document.documentElement;

  // ---- Bilingual / theme toggles ----
  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    try { localStorage.setItem("mc-lang", lang); } catch(_) {}
  };
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  try { const s = localStorage.getItem("mc-lang"); if (s) setLang(s); } catch(_) {}

  const setTheme = (t) => {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-toggle button").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
    try { localStorage.setItem("mc-theme", t); } catch(_) {}
  };
  document.querySelectorAll(".theme-toggle button").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
  try { const s = localStorage.getItem("mc-theme"); if (s) setTheme(s); } catch(_) {}

  // ===== Ages timeline =====
  const agesEl = document.getElementById("ages-timeline");
  if (agesEl && window.AGES) {
    agesEl.innerHTML = window.AGES.map((a, i) => `
      <div class="age-row">
        <div class="age-num"><span class="swatch" style="background: ${a.color}"></span>${String(i+1).padStart(2,'0')}</div>
        <div class="age-meta">
          <h3><span lang="en">${a.en}</span><span lang="zh">${a.zh}</span></h3>
          <div class="when"><span lang="en">${a.when_en}</span><span lang="zh">${a.zh_when}</span></div>
          <div class="material"><span lang="en">${a.en_material}</span><span lang="zh">${a.zh_material}</span></div>
        </div>
        <div class="age-body">
          <p><strong><span lang="en">Breakthrough</span><span lang="zh">突破</span></strong>
             <span lang="en">${a.en_breakthrough}</span><span lang="zh">${a.zh_breakthrough}</span></p>
          <p><strong><span lang="en">Civilizational consequence</span><span lang="zh">文明后果</span></strong>
             <span lang="en">${a.en_civ}</span><span lang="zh">${a.zh_civ}</span></p>
        </div>
      </div>
    `).join("");
  }

  // ===== Crystal/atomic SVG: 6-step zoom-out narrative =====
  const cry = document.getElementById("crystal-canvas");
  if (cry) {
    const W = 1200, H = 380;
    const tlabel = (en, zh, attrs) => `<text ${attrs} lang="en">${en}</text><text ${attrs} lang="zh">${zh}</text>`;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

    s += `<defs>
      <radialGradient id="atomG" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#d8814a" stop-opacity="0.95"/>
        <stop offset="60%" stop-color="#d8814a" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#d8814a" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="atomB" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#7ec8d4" stop-opacity="0.95"/>
        <stop offset="60%" stop-color="#7ec8d4" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#7ec8d4" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

    // Six panels evenly spaced
    const panels = [
      { x: 100,  cx: 100,  cy: 200, label_en: "Atom",         label_zh: "原子",     scale_en: "~0.1 nm",   scale_zh: "约 0.1 nm" },
      { x: 300,  cx: 300,  cy: 200, label_en: "Molecule",     label_zh: "分子",     scale_en: "~1 nm",     scale_zh: "约 1 nm" },
      { x: 500,  cx: 500,  cy: 200, label_en: "Crystal",      label_zh: "晶格",     scale_en: "~10 nm",    scale_zh: "约 10 nm" },
      { x: 700,  cx: 700,  cy: 200, label_en: "Defect",       label_zh: "缺陷",     scale_en: "~100 nm",   scale_zh: "约 100 nm" },
      { x: 900,  cx: 900,  cy: 200, label_en: "Microstructure", label_zh: "微结构", scale_en: "~10 µm",    scale_zh: "约 10 µm" },
      { x: 1100, cx: 1100, cy: 200, label_en: "Bulk",         label_zh: "块体",     scale_en: "~1 m",      scale_zh: "约 1 m" }
    ];

    // Connector ladder
    panels.forEach((p, i) => {
      if (i < panels.length - 1) {
        const next = panels[i + 1];
        s += `<line x1="${p.cx + 65}" y1="${p.cy}" x2="${next.cx - 65}" y2="${next.cy}" stroke="var(--copper)" stroke-width="0.8" opacity="0.5" stroke-dasharray="3 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="${2.5 + i*0.2}s" repeatCount="indefinite"/>
        </line>`;
      }
    });

    // Panel 1: Single atom (proton+neutron core, electron orbits)
    s += `<g transform="translate(${panels[0].cx}, ${panels[0].cy})">`;
    s += `<circle r="60" fill="url(#atomG)"/>`;
    s += `<ellipse cx="0" cy="0" rx="44" ry="14" fill="none" stroke="#d8814a" stroke-width="0.8" opacity="0.6" transform="rotate(-15)"/>`;
    s += `<ellipse cx="0" cy="0" rx="44" ry="14" fill="none" stroke="#d8814a" stroke-width="0.8" opacity="0.6" transform="rotate(45)"/>`;
    s += `<ellipse cx="0" cy="0" rx="44" ry="14" fill="none" stroke="#d8814a" stroke-width="0.8" opacity="0.6" transform="rotate(105)"/>`;
    s += `<circle r="9" fill="#d8814a"/>`;
    s += `<circle r="3" cx="34" cy="-12" fill="#7ec8d4"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/></circle>`;
    s += `</g>`;

    // Panel 2: Molecule (3 atoms bonded)
    s += `<g transform="translate(${panels[1].cx}, ${panels[1].cy})">`;
    s += `<circle r="55" fill="url(#atomB)" opacity="0.5"/>`;
    s += `<line x1="-22" y1="-12" x2="22" y2="-12" stroke="#7ec8d4" stroke-width="2" opacity="0.7"/>`;
    s += `<line x1="-22" y1="-12" x2="0" y2="20" stroke="#7ec8d4" stroke-width="2" opacity="0.7"/>`;
    s += `<line x1="22" y1="-12" x2="0" y2="20" stroke="#7ec8d4" stroke-width="2" opacity="0.7"/>`;
    s += `<circle cx="-22" cy="-12" r="10" fill="#d8814a"/>`;
    s += `<circle cx="22" cy="-12" r="10" fill="#7ec8d4"/>`;
    s += `<circle cx="0" cy="20" r="10" fill="#e8c84a"/>`;
    s += `</g>`;

    // Panel 3: Crystal lattice (3x3 grid)
    s += `<g transform="translate(${panels[2].cx}, ${panels[2].cy})">`;
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        const x = c * 22, y = r * 22;
        s += `<circle cx="${x}" cy="${y}" r="6" fill="#7ec8d4" opacity="0.85"/>`;
        if (c < 1) s += `<line x1="${x}" y1="${y}" x2="${x + 22}" y2="${y}" stroke="#7ec8d4" stroke-width="0.8" opacity="0.5"/>`;
        if (r < 1) s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 22}" stroke="#7ec8d4" stroke-width="0.8" opacity="0.5"/>`;
      }
    }
    s += `</g>`;

    // Panel 4: Defect — same lattice but with one atom missing + one substituted
    s += `<g transform="translate(${panels[3].cx}, ${panels[3].cy})">`;
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        const x = c * 22, y = r * 22;
        if (c === 0 && r === 0) continue; // vacancy
        const isDopant = (c === 1 && r === -1);
        s += `<circle cx="${x}" cy="${y}" r="6" fill="${isDopant ? '#e8c84a' : '#7ec8d4'}" opacity="0.85"/>`;
      }
    }
    // Mark vacancy with dashed circle
    s += `<circle cx="0" cy="0" r="7" fill="none" stroke="#c45e2e" stroke-width="1.4" stroke-dasharray="2 2"/>`;
    s += tlabel("V", "空", `x="0" y="3" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#c45e2e"`);
    s += `</g>`;

    // Panel 5: Microstructure — irregular grain boundaries
    s += `<g transform="translate(${panels[4].cx}, ${panels[4].cy})">`;
    s += `<rect x="-50" y="-40" width="100" height="80" fill="none" stroke="var(--line-2)" stroke-width="0.6"/>`;
    s += `<path d="M -50 -10 Q -20 -30 0 -10 Q 25 0 50 -20" stroke="var(--rust)" stroke-width="1" fill="none" opacity="0.7"/>`;
    s += `<path d="M -30 40 Q -10 10 15 25 Q 35 35 50 20" stroke="var(--rust)" stroke-width="1" fill="none" opacity="0.7"/>`;
    s += `<circle cx="-25" cy="-25" r="3" fill="#7ec8d4" opacity="0.6"/>`;
    s += `<circle cx="20" cy="-30" r="3" fill="#d8814a" opacity="0.6"/>`;
    s += `<circle cx="-15" cy="20" r="3" fill="#e8c84a" opacity="0.6"/>`;
    s += `<circle cx="30" cy="10" r="3" fill="#7ec8d4" opacity="0.6"/>`;
    s += `<circle cx="0" cy="-5" r="3" fill="#7ec8d4" opacity="0.6"/>`;
    s += `</g>`;

    // Panel 6: Bulk — abstract object/skyscraper outline
    s += `<g transform="translate(${panels[5].cx}, ${panels[5].cy})">`;
    s += `<rect x="-30" y="-50" width="60" height="100" fill="none" stroke="var(--copper)" stroke-width="1.5" rx="2"/>`;
    s += `<rect x="-22" y="-42" width="44" height="6" fill="var(--copper)" opacity="0.55"/>`;
    s += `<rect x="-22" y="-30" width="44" height="6" fill="var(--copper)" opacity="0.45"/>`;
    s += `<rect x="-22" y="-18" width="44" height="6" fill="var(--copper)" opacity="0.55"/>`;
    s += `<rect x="-22" y="-6"  width="44" height="6" fill="var(--copper)" opacity="0.45"/>`;
    s += `<rect x="-22" y="6"   width="44" height="6" fill="var(--copper)" opacity="0.55"/>`;
    s += `<rect x="-22" y="18"  width="44" height="6" fill="var(--copper)" opacity="0.45"/>`;
    s += `<rect x="-22" y="30"  width="44" height="6" fill="var(--copper)" opacity="0.55"/>`;
    s += `</g>`;

    // Labels under each panel
    panels.forEach(p => {
      s += tlabel(p.label_en, p.label_zh,
        `x="${p.cx}" y="${p.cy + 90}" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="14" font-weight="700" fill="var(--ink)" letter-spacing="-0.005em"`);
      s += tlabel(p.scale_en, p.scale_zh,
        `x="${p.cx}" y="${p.cy + 110}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--copper)" letter-spacing="1"`);
    });

    // Heading
    s += tlabel("scale ladder · atomic → bulk", "尺度阶梯 · 原子 → 块体",
      `x="40" y="40" font-family="JetBrains Mono, monospace" font-size="11" fill="var(--copper)" letter-spacing="2"`);

    s += `</svg>`;
    cry.innerHTML = s;
  }

  // ===== Card grid render helper =====
  const renderCards = (id, dataset, classes = []) => {
    const el = document.getElementById(id);
    if (!el || !dataset) return;
    el.innerHTML = dataset.map((d, i) => {
      const cls = classes[i % classes.length] || "copper";
      return `<div class="card ${cls}">
        <div class="meta">▸ ${id.replace(/-grid$/, '')}</div>
        <h3><span lang="en">${d.en}</span><span lang="zh">${d.zh}</span></h3>
        <p lang="en">${d.en_desc}</p>
        <p lang="zh">${d.zh_desc}</p>
      </div>`;
    }).join("");
  };

  renderCards("structures-grid", window.STRUCTURES, ["copper","crystal","silicon","rust","carbon","copper"]);
  renderCards("empires-grid",    window.EMPIRES,    ["copper","rust","carbon","crystal","uranium","silicon"]);
  renderCards("silicon-grid",    window.SILICON,    ["silicon","crystal","silicon","crystal","silicon","copper"]);
  renderCards("body-grid",       window.BODY,       ["uranium","rust","carbon","silicon"]);
  renderCards("arch-grid",       window.ARCH,       ["carbon","copper","crystal","carbon","crystal","silicon"]);
  renderCards("warfare-grid",    window.WARFARE,    ["copper","rust","carbon","crystal","uranium","silicon"]);
  renderCards("future-grid",     window.FUTURE,     ["carbon","crystal","silicon","uranium","copper","carbon"]);
  renderCards("philosophy-grid", window.PHILOSOPHY, ["copper","uranium","silicon","crystal"]);

  // ===== Energy table =====
  const enBody = document.getElementById("energy-body");
  if (enBody && window.ENERGY) {
    enBody.innerHTML = window.ENERGY.map(e => `
      <tr>
        <td><span lang="en">${e.en}</span><span lang="zh">${e.zh}</span></td>
        <td class="density">${e.en_density}</td>
        <td><span lang="en">${e.en_role}</span><span lang="zh">${e.zh_role}</span></td>
      </tr>
    `).join("");
  }

  // ===== Simulator =====
  // Inputs (per the meta-model): material extraction, energy density, manufacturing precision,
  //   information processing, structural complexity, coordination scale
  // Outputs: civilization capability, technological frontier, geopolitical leverage, fragility
  const sim = document.getElementById("simulator");
  if (sim) {
    const ctrls = {
      extract:    document.getElementById("ctrl-extract"),
      energy:     document.getElementById("ctrl-energy"),
      precision:  document.getElementById("ctrl-precision"),
      info:       document.getElementById("ctrl-info"),
      structure:  document.getElementById("ctrl-structure"),
      coordinate: document.getElementById("ctrl-coordinate"),
    };
    const update = () => {
      const v = Object.fromEntries(Object.entries(ctrls).map(([k,c]) => [k, parseFloat(c.value)/100]));
      Object.keys(ctrls).forEach(k => {
        const lbl = document.querySelector(`[data-val="${k}"]`);
        if (lbl) lbl.textContent = ctrls[k].value;
      });

      const capability = clamp01(0.2*v.extract + 0.2*v.energy + 0.18*v.precision + 0.18*v.info + 0.12*v.structure + 0.12*v.coordinate - 0.05);
      const frontier   = clamp01(0.3*v.precision + 0.25*v.info + 0.2*v.energy + 0.15*v.extract + 0.1*v.structure - 0.1);
      const leverage   = clamp01(0.3*v.extract + 0.25*v.energy + 0.2*v.info + 0.15*v.precision + 0.1*v.coordinate - 0.05);
      const fragility  = clamp01(0.3*Math.abs(v.extract - v.coordinate) + 0.25*Math.abs(v.energy - v.info) + 0.2*(1 - v.structure) + 0.15*(1 - v.precision) + 0.1);

      const set = (id, val) => {
        const fill = document.querySelector(`[data-meter="${id}"] .bar-fill`);
        const num  = document.querySelector(`[data-meter="${id}"] .num`);
        if (fill) fill.style.width = (val*100).toFixed(0) + "%";
        if (num)  num.textContent  = (val*100).toFixed(0);
      };
      set("capability", capability);
      set("frontier", frontier);
      set("leverage", leverage);
      set("fragility", fragility);

      const summaryEn = document.getElementById("sim-summary-en");
      const summaryZh = document.getElementById("sim-summary-zh");
      let label_en, label_zh;
      if (capability > .8 && frontier > .75 && leverage > .65 && fragility < .45) {
        label_en = `Frontier-industrial regime — comparable to the United States ~1955-2000 or the leading semiconductor states today. High extraction, high energy density, high precision, high information processing. The configuration in which a civilization sets the technological boundary the rest must follow.`;
        label_zh = `前沿工业体制——可比 1955—2000 年的美国，或今日领先的半导体国家。高提取、高能量密度、高精度、高信息处理。这是一个文明设定其余者必须追随的技术边界的配置。`;
      } else if (v.extract > .7 && v.energy > .65 && v.precision < .35) {
        label_en = `Heavy-industrial regime — Soviet Union 1960-1985, contemporary mid-tier industrial states. High extraction and energy throughput, but precision-manufacturing trails. The civilization can build dams and mass armies; it cannot fab a frontier chip.`;
        label_zh = `重工业体制——1960—1985 年的苏联、当代中等工业国。提取与能量吞吐高，但精密制造落后。该文明能造水坝和庞大军队；却无法生产前沿芯片。`;
      } else if (v.precision > .8 && v.info > .8 && v.extract < .35) {
        label_en = `Post-industrial design economy — 21st-century Netherlands, Switzerland, Taiwan. The civilization makes the precision tools others use to extract. Massive leverage per capita; deep dependence on global supply chains.`;
        label_zh = `后工业设计经济——21 世纪的荷兰、瑞士、台湾。该文明制造他人用以提取的精密工具。人均杠杆巨大；对全球供应链深度依赖。`;
      } else if (v.energy < .3 && v.extract > .6) {
        label_en = `Resource-export trap — high extraction, low value-add. Saudi Arabia 1960-1990 before Vision 2030, contemporary lithium-belt countries. The civilization sells the planet's molecules and imports the molecules' refined form back.`;
        label_zh = `资源出口陷阱——高提取、低增值。1960—1990 年的沙特阿拉伯（愿景 2030 之前），当代锂带国家。该文明出售行星之分子，再以精炼形式将其购回。`;
      } else if (v.info > .85 && v.precision > .7 && v.coordinate > .7) {
        label_en = `Cognitive-civilization frontier — late-stage configuration where information processing is the bottleneck and material throughput is amplified by it. AI labs, modern fab megaprojects, hyperscale data centres.`;
        label_zh = `认知文明前沿——信息处理为瓶颈、物质吞吐由之放大的晚期配置。AI 实验室、现代大型晶圆厂、超大规模数据中心。`;
      } else if (fragility > .7) {
        label_en = `High-fragility configuration — components mismatched, supply chain too narrow, or extraction outrunning structural complexity. Most civilization-collapse cases in the historical record show this profile in their last decade.`;
        label_zh = `高脆弱配置——组件不匹配、供应链过窄、提取超越结构复杂度。历史记录中多数文明崩溃案例在最后十年显示此画像。`;
      } else {
        label_en = `Mixed profile — adjust the dials toward a target regime: bronze-state, iron-republic, coal-empire, oil-superpower, semiconductor-hegemony, or the speculative quantum-materials configuration.`;
        label_zh = `混合画像——调整旋钮以对准目标体制：青铜国、铁器共和、煤帝国、石油超级大国、半导体霸权，或推测性的量子材料配置。`;
      }
      if (summaryEn) summaryEn.textContent = label_en;
      if (summaryZh) summaryZh.textContent = label_zh;
    };
    Object.values(ctrls).forEach(c => c && c.addEventListener("input", update));
    update();
  }

  function clamp01(x){ return Math.max(0, Math.min(1, x)); }
})();
