// ===== Material Civilization — original analytical synthesis =====

// ===== Nine ages of material civilization =====
window.AGES = [
  {
    id: "stone", en: "Stone Age 石器时代", zh: "石器时代",
    when_en: "~3,300,000 — 5000 BCE", zh_when: "约 330 万年前 — 公元前 5000 年",
    en_material: "Flint, obsidian, bone, wood, fibre",
    zh_material: "燧石、黑曜石、骨、木、纤维",
    en_breakthrough: "Conchoidal fracture — the discovery that a struck flint produces a predictable cutting edge. The first time matter was reshaped on purpose.",
    zh_breakthrough: "贝壳状断裂——人发现以一定方式敲击燧石可得到可预测的切刃。这是第一次有意重塑物质。",
    en_civ: "Tool-making becomes cumulative. Knowledge passes between generations as physical artefacts. Cooking, shelter, and burial appear as material practices.",
    zh_civ: "工具制造开始累积。知识以物质器物的形式代代相传。烹饪、居所、埋葬皆作为物质实践出现。",
    color: "#9b9893"
  },
  {
    id: "copper", en: "Copper Age 铜石并用", zh: "铜石并用",
    when_en: "~5000 — 3300 BCE", zh_when: "约公元前 5000 — 前 3300 年",
    en_material: "Native copper, then smelted copper",
    zh_material: "天然铜，后为冶炼铜",
    en_breakthrough: "Smelting — heating malachite ore in a charcoal fire reduces it to metallic copper. The first chemistry humans performed deliberately.",
    zh_breakthrough: "冶炼——在炭火中加热孔雀石矿，将其还原为金属铜。这是人类首次有意进行的化学。",
    en_civ: "The Balkans, Anatolia, the Near East. Copper jewellery and small tools spread through trade. The first long-distance metal supply chains.",
    zh_civ: "巴尔干、安纳托利亚、近东。铜饰与小工具经贸易扩散。第一条长距离金属供应链。",
    color: "#c87843"
  },
  {
    id: "bronze", en: "Bronze Age 青铜时代", zh: "青铜时代",
    when_en: "~3300 — 1200 BCE", zh_when: "约公元前 3300 — 前 1200 年",
    en_material: "Bronze (copper + 10% tin)",
    zh_material: "青铜（铜 + 10% 锡）",
    en_breakthrough: "Alloying — combining two metals produces a third with properties neither possessed alone. Bronze is harder, sharper, and casts more cleanly than copper.",
    zh_breakthrough: "合金——两种金属结合产出第三种，其性能为单一者所无。青铜较铜更硬、更锐、更易铸。",
    en_civ: "Sumer, Egypt, Shang, Indus, Minoan, Mycenae. Tin's scarcity creates the first international metal trade — Cornwall to Mesopotamia. Bronze weapons let chariot armies dominate. The first systemic globalisation.",
    zh_civ: "苏美尔、埃及、商、印度河、米诺斯、迈锡尼。锡之稀缺催生首个国际金属贸易——康沃尔至美索不达米亚。青铜兵器使战车军主导战场。第一次系统性全球化。",
    color: "#cd9356"
  },
  {
    id: "iron", en: "Iron Age 铁器时代", zh: "铁器时代",
    when_en: "~1200 BCE — ~500 CE", zh_when: "约公元前 1200 — 公元 500 年",
    en_material: "Wrought iron, then carbon steel",
    zh_material: "熟铁，后为碳钢",
    en_breakthrough: "Bloomery furnace — iron ore is far more abundant than tin or copper, but harder to smelt. Hittite metallurgists, then everyone, learn how. Iron democratises sharp tools.",
    zh_breakthrough: "块炼炉——铁矿远比锡或铜丰富，却更难冶炼。赫梯冶金师率先掌握，随后扩散至各地。铁使锋利工具得以普及。",
    en_civ: "Greek hoplites, Roman legions, Han iron-monopoly state, Indian wootz steel. The agricultural plough gets cheap. Empire becomes affordable.",
    zh_civ: "希腊重步兵、罗马军团、汉代盐铁专营、印度乌兹钢。铁犁变得便宜。帝国成本下降至可负担。",
    color: "#7a5946"
  },
  {
    id: "steel", en: "Steel Civilization 钢铁文明", zh: "钢铁文明",
    when_en: "1856 — present", zh_when: "1856 年至今",
    en_material: "Bessemer / open-hearth steel, then alloy steels",
    zh_material: "贝塞麦法 / 平炉钢，后为合金钢",
    en_breakthrough: "Bessemer process (1856) — air blown through molten pig iron burns off carbon. Steel becomes producible by the ton, not the kilogram. Cost drops by an order of magnitude in a decade.",
    zh_breakthrough: "贝塞麦法（1856 年）——空气吹入熔铁，碳被烧除。钢由公斤级跃升至吨级生产，成本在十年内下降一个数量级。",
    en_civ: "Railways, dreadnoughts, skyscrapers, structural concrete reinforcement. The 19th-century industrial empire is, structurally, a steel artefact. World steel output is the single best proxy for industrial-era state power.",
    zh_civ: "铁路、无畏舰、摩天楼、混凝土钢筋。19 世纪工业帝国在结构上即一钢铁器物。世界钢产量是工业时代国家力量的最佳代理。",
    color: "#6a737a"
  },
  {
    id: "oil", en: "Oil & Plastic Era 石油塑料时代", zh: "石油塑料时代",
    when_en: "~1900 — present", zh_when: "约 1900 年至今",
    en_material: "Hydrocarbons — petroleum derivatives, polymers, synthetic fibres",
    zh_material: "碳氢化合物——石油衍生物、聚合物、合成纤维",
    en_breakthrough: "Fractional distillation + polymer chemistry. A barrel of crude becomes fuel, lubricant, plastic, fertilizer, pharmaceutical. One feedstock, hundreds of derived materials.",
    zh_breakthrough: "分馏 + 高分子化学。一桶原油化为燃料、润滑剂、塑料、化肥、药物。一种原料，衍生数百种材料。",
    en_civ: "The internal combustion engine, the petrochemical industry, suburbia, the highway, plastic packaging, the green revolution. Geopolitics in the 20th century is largely about who controls oil.",
    zh_civ: "内燃机、石油化工、郊区、高速公路、塑料包装、绿色革命。20 世纪地缘政治大半关乎谁掌控石油。",
    color: "#3a6b8a"
  },
  {
    id: "silicon", en: "Semiconductor Age 半导体时代", zh: "半导体时代",
    when_en: "1947 — present", zh_when: "1947 年至今",
    en_material: "Doped silicon, gallium arsenide, photoresist, copper interconnect",
    zh_material: "掺杂硅、砷化镓、光刻胶、铜互连",
    en_breakthrough: "Doped silicon's bandgap — adding parts-per-million boron or phosphorus to ultrapure silicon makes it conduct on demand. Lithography then patterns billions of these switches onto a single die.",
    zh_breakthrough: "掺杂硅的能带——在超纯硅中加入百万分之一的硼或磷，使其按需导电。光刻继而将数十亿这种开关图案化于单一芯片之上。",
    en_civ: "Computers, satellites, mobile phones, the internet. Moore's Law as economic regularity. The information economy is, materially, a story about how cheap a transistor became.",
    zh_civ: "计算机、卫星、手机、互联网。摩尔定律作为经济规律。信息经济在物质上即是'晶体管变得多便宜'的故事。",
    color: "#8a78c4"
  },
  {
    id: "ai-chip", en: "AI Chip Era AI 芯片时代", zh: "AI 芯片时代",
    when_en: "~2017 — present", zh_when: "约 2017 年至今",
    en_material: "Custom accelerator silicon, HBM stacks, advanced packaging, copper-via TSVs",
    zh_material: "定制加速器硅、HBM 堆栈、先进封装、铜 TSV 通孔",
    en_breakthrough: "Architecture-specific lithography. The same lithographic tools that printed a CPU now print arrays of multiply-add units, with on-die memory wide enough to feed them. Compute per dollar continues to halve every ~2 years for matrix workloads.",
    zh_breakthrough: "面向架构的光刻。同样的光刻工具如今印刷的是乘加单元阵列，并配以可饱和喂养它们的片上内存。每美元算力在矩阵工作负载上继续每两年减半。",
    en_civ: "Frontier AI training requires 10⁴–10⁵ chips. The semiconductor supply chain becomes a strategic chokepoint. Three nations and ten firms hold the world's frontier compute capacity.",
    zh_civ: "前沿 AI 训练需 10⁴ — 10⁵ 颗芯片。半导体供应链成为战略要道。三国十家公司掌握全球前沿算力。",
    color: "#7ec8d4"
  },
  {
    id: "quantum", en: "Quantum Materials Era 量子材料时代", zh: "量子材料时代",
    when_en: "Emerging — 2020s onward", zh_when: "涌现中——2020 年代起",
    en_material: "Topological insulators, 2D materials (graphene, MoS₂), high-Tc superconductors, room-temperature candidates, metamaterials",
    zh_material: "拓扑绝缘体、二维材料（石墨烯、MoS₂）、高温超导体、室温候选材料、超材料",
    en_breakthrough: "Materials whose macroscopic properties are dictated by quantum phase, not chemistry alone. A topological insulator conducts on its surface and not in its bulk by symmetry. Graphene is a one-atom-thick sheet stronger than steel.",
    zh_breakthrough: "宏观性质由量子相而非化学决定的材料。拓扑绝缘体由对称性决定其表面导电而内部绝缘。石墨烯是一原子厚、强度超钢的薄片。",
    en_civ: "Speculative but consequential. If room-temperature superconductors materialise, the energy and computing economies are rewritten. If they don't, the sector still outputs metamaterials, ultra-thin sensors, and quantum-computing substrates over the next two decades.",
    zh_civ: "推测性但影响深远。若室温超导成立，能源与计算经济被重写。若不成立，该领域在未来二十年仍将产出超材料、超薄传感器、量子计算基底。",
    color: "#e8c84a"
  }
];

// ===== Crystal-structure / atomic-scale narrative =====
window.STRUCTURES = [
  { en: "Atom", zh: "原子",
    en_desc: "A nucleus of protons and neutrons; electrons in shells. Element identity = proton count. Almost all of an atom's volume is empty.",
    zh_desc: "由质子与中子构成的核，外有电子壳层。元素身份由质子数决定。原子体积的绝大部分为空。" },
  { en: "Molecule", zh: "分子",
    en_desc: "Two or more atoms held together by shared electrons. Water, CO₂, glucose, DNA. Most of chemistry's complexity comes from how molecules fold and react.",
    zh_desc: "由共享电子结合的两个或多个原子。水、二氧化碳、葡萄糖、DNA。化学的多数复杂性源自分子的折叠与反应。" },
  { en: "Crystal lattice", zh: "晶格",
    en_desc: "Atoms locked into a repeating geometric pattern. The lattice geometry plus the bond chemistry is what determines whether you have a metal, a ceramic, or a semiconductor.",
    zh_desc: "原子被锁入重复的几何阵列。晶格几何与键合化学共同决定其为金属、陶瓷或半导体。" },
  { en: "Defect / dopant", zh: "缺陷 / 掺杂",
    en_desc: "Real materials are not perfect. Dislocations, vacancies, and substitutional atoms (boron in silicon, carbon in iron) are how engineering happens — controlled imperfection, not purity.",
    zh_desc: "真实材料并不完美。位错、空位与置换原子（硅中之硼、铁中之碳）正是工程之所在——受控的不完美，而非纯净。" },
  { en: "Microstructure", zh: "微观结构",
    en_desc: "Grains, phases, boundaries — the structure visible at micrometer scale. Steel's hardness, concrete's compressive strength, and a chip's transistor density are all microstructural properties.",
    zh_desc: "晶粒、相、晶界——微米尺度可见的结构。钢之硬度、混凝土之抗压、芯片之晶体管密度，皆为微观结构属性。" },
  { en: "Bulk material", zh: "块体材料",
    en_desc: "What you actually hold or build with. A skyscraper, a chip, a battery cell. Every macroscopic property — strength, conductivity, transparency — is the integral of every layer beneath.",
    zh_desc: "你真正握持或用于建造之物。摩天楼、芯片、电池。每一宏观性质——强度、导电、透明——皆是其下每一层的积分。" }
];

// ===== Materials & empires =====
window.EMPIRES = [
  { en: "Bronze charioteers", zh: "青铜战车民",
    en_desc: "Hittite, New Kingdom Egypt, Shang. Whoever controlled tin (a scarce element) controlled bronze, which controlled cavalry-class warfare for ~1500 years.",
    zh_desc: "赫梯、新王国埃及、商。谁控制锡（稀有元素），即控制青铜，即在约 1500 年间控制骑兵级战争。" },
  { en: "Iron republics", zh: "铁器共和",
    en_desc: "Roman legions, Greek hoplites, Han state monopoly, Mauryan India. Iron's abundance let citizen-soldiers be armed at scale. The political form changes when the metal becomes cheap.",
    zh_desc: "罗马军团、希腊重步兵、汉代盐铁专营、孔雀印度。铁之丰饶使大规模武装公民兵成为可能。金属变便宜，政治形态随之改变。" },
  { en: "Coal-steam empire", zh: "煤气帝国",
    en_desc: "Britain 1750–1900. Coal + iron + steam engine = the first industrial state. The Royal Navy's coaling stations were the strategic infrastructure. Geopolitics followed the seam.",
    zh_desc: "1750—1900 年的英国。煤 + 铁 + 蒸汽机 = 首个工业国家。皇家海军的加煤站是战略基础设施。地缘政治随煤层而行。" },
  { en: "Steel-and-railway state", zh: "钢铁铁路国家",
    en_desc: "Germany 1871, the United States after 1865, Imperial Russia, Meiji Japan. National unification expressed as a steel rail network. The first measurable index of state power was track-mileage and pig-iron output.",
    zh_desc: "1871 年德意志、1865 年后美国、沙俄、明治日本。国家统一以钢铁铁路网络呈现。早期的国家力量指标即铁路里程与生铁产量。" },
  { en: "Oil-fuelled superpower", zh: "石油超级大国",
    en_desc: "United States 20th century, USSR, post-1971 OPEC. The internal combustion engine and air force run on hydrocarbons. The Cold War's strategic geometry centred on the Persian Gulf, the Caucasus, and the Volga.",
    zh_desc: "20 世纪美国、苏联、1971 年后 OPEC。内燃机与空军以碳氢化合物为食。冷战战略几何以波斯湾、高加索、伏尔加为中心。" },
  { en: "Semiconductor hegemony", zh: "半导体霸权",
    en_desc: "United States, with Taiwan / Netherlands / Japan / South Korea as load-bearing partners. Frontier-chip supply chain has roughly the strategic profile that oil supply chains had in 1970. Export controls have already followed.",
    zh_desc: "美国为主，台湾、荷兰、日本、韩国为关键合作方。前沿芯片供应链在战略上大致相当于 1970 年的石油供应链。出口管制已随之而至。" }
];

// ===== Energy ↔ material flow =====
window.ENERGY = [
  { en: "Wood / biomass", zh: "薪柴 / 生物质",
    en_density: "~16 MJ/kg",
    en_role: "Pre-industrial primary fuel. Cooking, smelting, ceramics. Renewable on biological time scales but biome-bounded.",
    zh_density: "约 16 MJ/kg",
    zh_role: "前工业时代的主要燃料。烹饪、冶炼、陶瓷。在生物时间尺度上可再生，但受生态域限制。" },
  { en: "Coal", zh: "煤",
    en_density: "~24 MJ/kg",
    en_role: "Fossilised carbon. Powered the Industrial Revolution. Still ~30% of global electricity in 2024.",
    zh_density: "约 24 MJ/kg",
    zh_role: "化石碳。驱动了工业革命。2024 年仍占全球发电约 30%。" },
  { en: "Oil", zh: "石油",
    en_density: "~42 MJ/kg",
    en_role: "Liquid hydrocarbon — high energy density per kilogram and per litre. Indispensable for aviation, shipping, and chemistry feedstock.",
    zh_density: "约 42 MJ/kg",
    zh_role: "液态碳氢化合物——质量与体积能量密度皆高。航空、航运、化工原料离不开。" },
  { en: "Uranium-235", zh: "铀-235",
    en_density: "~80,000,000 MJ/kg",
    en_role: "Six orders of magnitude denser than coal. A 1-kg fuel rod equates to ~3,000 tonnes of coal. Politically constrained more than physically.",
    zh_density: "约 8×10⁷ MJ/kg",
    zh_role: "比煤密六个数量级。1 公斤燃料棒约等于 3000 吨煤。约束多在政治，而非物理。" },
  { en: "Lithium (battery)", zh: "锂（电池）",
    en_density: "~0.3–1 MJ/kg",
    en_role: "Storage, not production. Lithium does not produce energy — it stores it. Demand grew ~10× from 2015 to 2025; supply chains rival oil's complexity.",
    zh_density: "约 0.3–1 MJ/kg",
    zh_role: "储能，非产能。锂不产生能量——它存储能量。2015–2025 年需求增长约十倍；供应链复杂度可比石油。" },
  { en: "Rare earths", zh: "稀土",
    en_density: "—",
    en_role: "Not fuel — components. Neodymium magnets, dysprosium for high-temp motors, europium for displays. Strategic because no near substitutes exist for many uses, and China processes ~85% of world supply.",
    zh_density: "—",
    zh_role: "非燃料——而是元件。钕磁铁、镝用于高温电机、铕用于显示。其战略性源于多数用途无近替代，且中国处理全球约 85% 供应。" },
  { en: "Silicon (compute)", zh: "硅（算力）",
    en_density: "—",
    en_role: "Not energy — information. The energy required to manufacture a chip is enormous; the energy required to operate one is small. Silicon turns electricity into information.",
    zh_density: "—",
    zh_role: "非能源——信息。制造一颗芯片所需能量巨大；运行一颗芯片所耗能量微小。硅把电力转化为信息。" }
];

// ===== Silicon civilization deep dive =====
window.SILICON = [
  { en: "Element & ore", zh: "元素与矿石",
    en_desc: "Silicon is the second most abundant element in the Earth's crust. Quartz sand is its everywhere-ore. The chip industry, materially, is sand reorganised at angstrom precision.",
    zh_desc: "硅是地壳中第二丰富元素。石英砂是其无处不在的矿源。芯片工业在物质上就是被以埃米精度重新组织的沙。" },
  { en: "Ultra-purity", zh: "超纯",
    en_desc: "Electronic-grade silicon is 99.9999999% pure — nine nines. Achieved by repeatedly zone-refining a polysilicon rod until impurities drift to the ends. Without this purity, no transistor works.",
    zh_desc: "电子级硅达 99.9999999%——九个九的纯度。通过对多晶硅棒反复区域熔炼使杂质向两端漂移而达成。无此纯度，晶体管无法工作。" },
  { en: "Single crystal", zh: "单晶",
    en_desc: "Czochralski process — a tiny seed crystal is dipped into molten silicon and slowly withdrawn. Atoms align onto the seed's lattice. The result is a single 200-kg cylinder of perfect silicon, sliced into wafers.",
    zh_desc: "切克劳斯基法——将小颗种晶浸入熔融硅中并缓慢提拉。原子按种晶之晶格对齐。最终为一根 200 公斤的完美硅晶柱，切成晶圆。" },
  { en: "Lithography", zh: "光刻",
    en_desc: "EUV light at 13.5 nm wavelength patterns features at 3-7 nm resolution. The machine that does this — ASML's TWINSCAN NXE — is one of the most complex objects humans have ever manufactured.",
    zh_desc: "波长 13.5 nm 的 EUV 光刻在 3—7 nm 分辨率下图案化特征。其执行机器——ASML 的 TWINSCAN NXE——是人类制造过的最复杂的物体之一。" },
  { en: "Doping", zh: "掺杂",
    en_desc: "Boron (one less electron than Si) makes p-type. Phosphorus (one more) makes n-type. A p–n junction is a one-way valve for electrons. Stack billions of these and you have a CPU.",
    zh_desc: "硼（比硅少一电子）形成 p 型。磷（多一）形成 n 型。p—n 结即电子的单向阀门。堆叠数十亿之，即得 CPU。" },
  { en: "Packaging", zh: "封装",
    en_desc: "A bare die is fragile and unaddressable. Advanced packaging — TSMC's CoWoS, Intel's EMIB, AMD's chiplet stacks — connects multiple dies + HBM into a single high-bandwidth package. The frontier 2024+ is here, not in lithography.",
    zh_desc: "裸芯片脆弱且无可寻址。先进封装——台积电 CoWoS、英特尔 EMIB、AMD 小芯片堆叠——将多颗裸芯 + HBM 连为单一高带宽封装。2024 年后的前沿在此，而非光刻。" }
];

// ===== Materials & body =====
window.BODY = [
  { en: "Calcium hydroxyapatite", zh: "羟基磷灰石钙",
    en_desc: "The mineral matrix of bone and tooth enamel. Bones are a composite — collagen for tension, calcium phosphate for compression. Reverse-engineered, this is reinforced concrete a billion years before the Romans.",
    zh_desc: "骨与齿釉的矿物基质。骨是一种复合材料——胶原承张力，磷酸钙承压力。反向工程之，这是比罗马早十亿年的钢筋混凝土。" },
  { en: "Iron in haemoglobin", zh: "血红蛋白中的铁",
    en_desc: "Each red blood cell carries ~280 million haemoglobin molecules; each holds 4 iron atoms; each iron binds 1 O₂ molecule. Your respiratory system is a precision iron chemistry the body builds and rebuilds constantly.",
    zh_desc: "每个红细胞携带约 2.8 亿血红蛋白分子；每分子含 4 个铁原子；每铁原子结合 1 个 O₂ 分子。呼吸系统即身体不断建造与重建的精密铁化学。" },
  { en: "Carbon backbone", zh: "碳之骨架",
    en_desc: "Every protein, every fat, every nucleic acid is a carbon chain. Carbon's four-bond geometry plus the oxidation states it allows are why life on Earth is what it is. Silicon could in principle play the same role; in practice it does not on this planet.",
    zh_desc: "每一种蛋白质、脂肪、核酸皆为碳链。碳四键的几何与可允许的氧化态，是地球生命所是的原因。硅原则上可担同角色，实际上在本星球上不行。" },
  { en: "Neural conductivity", zh: "神经导电",
    en_desc: "The action potential is a Na⁺ / K⁺ ion exchange across a lipid membrane — a biochemical capacitor that fires and resets in milliseconds. Cognition is, materially, ion physics.",
    zh_desc: "动作电位是脂膜两侧的 Na⁺ / K⁺ 离子交换——一个以毫秒计的生化电容。认知在物质上即离子物理。" }
];

// ===== Architecture & megastructures =====
window.ARCH = [
  { en: "Megalithic stone", zh: "巨石建筑",
    en_desc: "Stonehenge, Göbekli Tepe, the Egyptian pyramids. Limited by the largest piece you can quarry, transport, and lift. The pyramids' precision is the constraint of the available stone made visible.",
    zh_desc: "巨石阵、哥贝克力石阵、埃及金字塔。受限于可开采、运输、举升的最大石块。金字塔的精度，即可用石材所给约束的可见呈现。" },
  { en: "Roman concrete", zh: "罗马混凝土",
    en_desc: "Volcanic ash + lime + seawater — opus caementicium. The Pantheon's dome is a 2000-year-old concrete shell still standing. Roman concrete cures harder over centuries because of seawater-driven mineral growth, a property modern Portland cement does not share.",
    zh_desc: "火山灰 + 石灰 + 海水——'opus caementicium'。万神殿穹顶是历经两千年仍屹立的混凝土壳。罗马混凝土因海水驱动的矿物生长而越久越硬，此性质现代波特兰水泥所无。" },
  { en: "Steel skyscraper", zh: "钢构摩天楼",
    en_desc: "Bessemer steel + the Otis safety elevator (1853) + the steel I-beam (1880s). The skyscraper is not one invention — it is three converging materials. Without any one, cities stay below six storeys.",
    zh_desc: "贝塞麦钢 + 奥的斯安全电梯（1853）+ 钢工字梁（1880 年代）。摩天楼非单一发明，而是三种材料的汇合。缺其一，城市便止于六层。" },
  { en: "Reinforced concrete", zh: "钢筋混凝土",
    en_desc: "Steel rebar takes tension; concrete takes compression. Together they outperform either alone by an order of magnitude. The 20th-century city — every garage, every bridge, every dam — is reinforced concrete.",
    zh_desc: "钢筋承张力，混凝土承压力。合用比单一者强一个数量级。20 世纪的城市——每一座停车场、桥梁、水坝——皆为钢筋混凝土。" },
  { en: "Glass curtain wall", zh: "玻璃幕墙",
    en_desc: "Low-iron float glass + aluminium-frame mullions. The post-1950 office tower is a glass façade hung from a steel skeleton. Energy economics are bad; the aesthetic is what sold them.",
    zh_desc: "低铁浮法玻璃 + 铝框竖梃。1950 年后的办公塔楼是悬于钢骨架之外的玻璃幕墙。能耗经济差；卖出它的是美学。" },
  { en: "Carbon-fibre composite", zh: "碳纤维复合",
    en_desc: "Strong as steel at one-fifth the weight. Used in aerospace and high-end sport since the 1980s. Civil-scale carbon-fibre is held back by cost — if it falls, an entirely new architectural language becomes possible.",
    zh_desc: "强度比肩钢，重量仅为五分之一。1980 年代起用于航空与高端运动。土建尺度的碳纤维受成本制约——成本一降，则全新建筑语言成为可能。" }
];

// ===== Warfare ↔ materials =====
window.WARFARE = [
  { en: "Bronze edge", zh: "青铜锋刃",
    en_desc: "A bronze sword cuts cleaner than copper, holds an edge longer than iron at first. The chariot-and-bronze coalition dominated Eurasia for ~1500 years.",
    zh_desc: "青铜剑较铜利落，初期持锋甚于铁。战车—青铜联盟在欧亚主导约 1500 年。" },
  { en: "Iron mass army", zh: "铁器集体军",
    en_desc: "Iron is harder to forge but ten times more abundant. Once metallurgy spreads, every infantryman can be armed. The phalanx, the legion, the qin army.",
    zh_desc: "铁虽较难锻，丰度却为铜十倍。一旦冶金扩散，每名步兵皆可武装。希腊方阵、罗马军团、秦军。" },
  { en: "Steel battleship", zh: "钢制战列舰",
    en_desc: "An armoured-steel hull resists the same explosive charge that would split iron. The 1880–1945 navies were a continuous arms race in steel composition and thickness.",
    zh_desc: "装甲钢船壳能抗同等炸药——若为铁则裂。1880—1945 年间的海军是钢材成分与厚度的持续竞赛。" },
  { en: "Aluminium aircraft", zh: "铝制飞机",
    en_desc: "Duralumin alloy makes flight at scale possible. WWII air power was, materially, an aluminium war. Strategic bombing assumes you can afford to lose the metal in the airframe.",
    zh_desc: "硬铝合金使大规模飞行成为可能。二战空权在物质上即一场铝之战。战略轰炸假设你负担得起机身损失。" },
  { en: "Uranium / plutonium weapon", zh: "铀 / 钚武器",
    en_desc: "A fissile-isotope state can deliver, in one warhead, the explosive energy of a city. The 1945–1991 strategic balance was the geometry of fissile-material supply chains.",
    zh_desc: "拥有易裂同位素的国家可在一枚弹头中投递一城之炸药当量。1945—1991 年的战略平衡即裂变材料供应链的几何。" },
  { en: "Composite drone", zh: "复合材料无人机",
    en_desc: "Carbon-fibre frame + commodity electronics + lithium-ion + a $4 GPS chip. A $2,000 drone can disable a $10M tank. The 2020s' material revolution is in low-cost composites + cheap silicon, not new metals.",
    zh_desc: "碳纤机身 + 商品电子 + 锂电 + 4 美元 GPS 芯片。一架 2000 美元无人机可使一千万美元坦克失能。2020 年代的物质革命在于廉价复合材料 + 廉价硅，而非新金属。" }
];

// ===== Future materials =====
window.FUTURE = [
  { en: "Graphene", zh: "石墨烯",
    en_desc: "Single-atom-thick carbon sheet, ~200× stronger than steel, ~1000× more conductive than copper. Bulk synthesis at scale remains the unsolved problem; sheets exist, kilometres of usable sheet do not.",
    zh_desc: "单原子厚的碳薄片，强度约钢的 200 倍，导电率约铜的 1000 倍。规模化批量合成仍是未解之题——薄片有，可用的公里级薄膜没有。" },
  { en: "Room-temperature superconductor", zh: "室温超导体",
    en_desc: "A material that conducts electricity with zero resistance at ambient temperature and pressure. Several 2023 claims have been retracted; the search continues. If found, it rewrites the energy economy.",
    zh_desc: "在常温常压下电阻为零的材料。2023 年几项声明已被撤回；研究持续。若被发现，能源经济将被重写。" },
  { en: "Metamaterial optics", zh: "超材料光学",
    en_desc: "Engineered nanostructures whose refractive index is anything you want — including negative. Cloaking, ultra-thin lenses, perfect absorbers. Already commercial in radar applications; consumer optics still emerging.",
    zh_desc: "经工程的纳米结构，其折射率可为任何值——包括负值。隐身、超薄镜头、完美吸收器。在雷达应用上已商用；消费级光学仍在涌现。" },
  { en: "Programmable matter", zh: "可编程物质",
    en_desc: "Materials whose macroscopic shape, stiffness, or colour can be reprogrammed on demand by external signal. Demonstrations exist at lab scale (4D-printed polymers, magnetic microparticles). Economics not yet there.",
    zh_desc: "宏观形状、刚度、颜色可由外部信号按需重编程的材料。实验室级演示已存在（4D 打印聚合物、磁性微粒）。经济性尚未达。" },
  { en: "Molecular manufacturing", zh: "分子制造",
    en_desc: "The long-promised assembly of macroscopic objects atom-by-atom. Current consensus is that the proposed mechanism (mechanosynthesis) is physically possible but engineering-unsolved. Time horizon: decades, not years.",
    zh_desc: "长久许诺的'按原子组装宏观物体'。目前共识：提出的机理（机械合成）在物理上可能，工程上未解。时间尺度：数十年，非数年。" },
  { en: "Bio-fabricated structural", zh: "生物制造结构材",
    en_desc: "Mycelium composites, lab-grown leather, engineered wood, mineralised bacterial concrete. Already at small commercial scale. The most plausible near-term replacement for hydrocarbons in some structural and packaging applications.",
    zh_desc: "菌丝复合、实验室皮革、工程木材、矿化细菌混凝土。已小规模商用。在某些结构与包装应用中，是近期最现实的碳氢化合物替代。" }
];

// ===== Material philosophy =====
window.PHILOSOPHY = [
  { en: "Matter ↔ information",  zh: "物质↔信息",
    en_desc: "A bit, ultimately, is a configuration of physical state — a magnetic domain, a charge, a phonon. Information is not separate from matter; it is the structure that matter takes when arranged.",
    zh_desc: "一个比特最终是物理状态的一种构型——一磁畴、一电荷、一声子。信息并非独立于物质；它是物质被排列后所呈之结构。" },
  { en: "Entropy as constraint", zh: "熵作为约束",
    en_desc: "The second law sets the long-run direction. Civilisations that organise matter against entropy — cities, computers, ecosystems — pay an energy price proportional to the order they create.",
    zh_desc: "热力学第二定律决定长期方向。逆熵组织物质的文明——城市、计算机、生态——为其创造的有序付出与之成正比的能量代价。" },
  { en: "Computation as material", zh: "计算作为物质过程",
    en_desc: "Every computation is a physical process. Landauer's principle gives the lower bound: erasing one bit at temperature T dissipates kT·ln(2) of heat. Silicon civilisation runs into this limit eventually.",
    zh_desc: "每一次计算都是一个物理过程。兰道尔原理给出下限：在温度 T 下擦除一个比特耗散 kT·ln(2) 的热。硅基文明终将触及此限。" },
  { en: "Self-organising matter", zh: "自组织物质",
    en_desc: "From crystallisation to autocatalysis to evolution to civilisation — matter has, in this region of the universe, repeatedly arranged itself into more complex forms. The constraint is energy + entropy + chemistry; the rest emerges.",
    zh_desc: "从结晶到自催化到演化到文明——在宇宙这一区域，物质一再将自身组织为更复杂的形态。约束是能量 + 熵 + 化学；其余涌现而出。" }
];
