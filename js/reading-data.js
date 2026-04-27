/*
 * PTE Reading Exercise Data
 * 105 exercises total: 40 R&W FIB, 30 Reading FIB, 20 MCMA, 15 MCSA
 * ES5 compatible - no const/let, no arrow functions, no template literals
 * Australian English spelling
 */

var PTE_READING = {

  /* ========================================================================
   * 1. READ & WRITE FILL IN THE BLANKS (rwFib) - 40 exercises
   * Each blank has 4 dropdown options; answer = index of correct option
   * ====================================================================== */
  rwFib: [
    {
      id: "rw001",
      passage: "The rapid advancement of artificial intelligence has ___(1) significant debate among researchers and policymakers. While some experts argue that AI will ___(2) economic growth and improve living standards, others caution that it may ___(3) existing inequalities if its benefits are not distributed equitably across society.",
      blanks: [
        { pos: 1, options: ["sparked", "ignited", "launched", "fired"], answer: 0 },
        { pos: 2, options: ["accelerate", "speed", "quicken", "rush"], answer: 0 },
        { pos: 3, options: ["worsen", "exacerbate", "deteriorate", "aggravate"], answer: 1 }
      ],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rw002",
      passage: "Climate change poses an unprecedented ___(1) to global food security. Rising temperatures and unpredictable weather patterns have already begun to ___(2) crop yields in many regions, particularly in developing countries that lack the resources to ___(3) to these rapidly changing conditions.",
      blanks: [
        { pos: 1, options: ["threat", "danger", "hazard", "peril"], answer: 0 },
        { pos: 2, options: ["diminish", "reduce", "lessen", "shrink"], answer: 1 },
        { pos: 3, options: ["adjust", "adapt", "conform", "acclimatise"], answer: 1 }
      ],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rw003",
      passage: "Universal access to quality education remains a ___(1) objective for governments worldwide. Research consistently demonstrates that investment in early childhood education ___(2) substantial long-term benefits, including higher earning potential and improved social ___(3). Nevertheless, funding disparities between urban and rural communities continue to ___(4) progress towards this goal.",
      blanks: [
        { pos: 1, options: ["fundamental", "basic", "elementary", "primary"], answer: 0 },
        { pos: 2, options: ["yields", "produces", "generates", "creates"], answer: 0 },
        { pos: 3, options: ["outcomes", "results", "consequences", "effects"], answer: 0 },
        { pos: 4, options: ["hamper", "block", "prevent", "stop"], answer: 0 }
      ],
      topic: "Education",
      difficulty: "hard"
    },
    {
      id: "rw004",
      passage: "The human immune system is a remarkably ___(1) network of cells, tissues and organs that work in concert to defend the body against disease. When a pathogen ___(2) the body, specialised white blood cells rapidly identify and ___(3) the invader, often before any symptoms appear.",
      blanks: [
        { pos: 1, options: ["complex", "complicated", "intricate", "elaborate"], answer: 0 },
        { pos: 2, options: ["enters", "invades", "penetrates", "infiltrates"], answer: 1 },
        { pos: 3, options: ["neutralise", "destroy", "eliminate", "eradicate"], answer: 0 }
      ],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rw005",
      passage: "Urbanisation is one of the most ___(1) trends of the twenty-first century. As populations migrate from rural areas to cities in search of economic opportunities, the demand for housing, transport and public services has ___(2) dramatically. City planners must therefore ___(3) innovative strategies to accommodate this growth while maintaining quality of life for all residents.",
      blanks: [
        { pos: 1, options: ["significant", "important", "notable", "remarkable"], answer: 0 },
        { pos: 2, options: ["increased", "risen", "grown", "escalated"], answer: 0 },
        { pos: 3, options: ["devise", "create", "formulate", "construct"], answer: 0 }
      ],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rw006",
      passage: "Renewable energy sources such as solar and wind power have experienced ___(1) growth over the past decade. Government subsidies and declining manufacturing costs have made these technologies increasingly ___(2) with traditional fossil fuels. However, the intermittent nature of renewable energy ___(3) challenges for grid operators who must ensure a stable electricity supply.",
      blanks: [
        { pos: 1, options: ["remarkable", "extraordinary", "exceptional", "outstanding"], answer: 0 },
        { pos: 2, options: ["competitive", "comparable", "equivalent", "parallel"], answer: 0 },
        { pos: 3, options: ["poses", "presents", "creates", "generates"], answer: 0 }
      ],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rw007",
      passage: "The global economy has become increasingly ___(1) over the past several decades, with trade agreements and technological advances facilitating the movement of goods, services and capital across borders. While globalisation has ___(2) millions out of poverty, it has also ___(3) concerns about job displacement in developed nations and the exploitation of labour in developing countries.",
      blanks: [
        { pos: 1, options: ["interconnected", "linked", "joined", "attached"], answer: 0 },
        { pos: 2, options: ["lifted", "raised", "pulled", "elevated"], answer: 0 },
        { pos: 3, options: ["raised", "sparked", "generated", "provoked"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw008",
      passage: "Marine biodiversity is ___(1) at an alarming rate due to ocean acidification, overfishing and pollution. Coral reefs, which ___(2) approximately one quarter of all marine species, are particularly vulnerable to rising sea temperatures. Scientists warn that without immediate and ___(3) action, many reef ecosystems could collapse within the next few decades.",
      blanks: [
        { pos: 1, options: ["declining", "decreasing", "diminishing", "reducing"], answer: 0 },
        { pos: 2, options: ["support", "sustain", "harbour", "shelter"], answer: 0 },
        { pos: 3, options: ["decisive", "determined", "resolute", "firm"], answer: 0 }
      ],
      topic: "Environment",
      difficulty: "hard"
    },
    {
      id: "rw009",
      passage: "The discovery of antibiotics in the early twentieth century ___(1) one of the greatest achievements in the history of medicine. However, the widespread and often ___(2) use of these drugs has led to the emergence of antibiotic-resistant bacteria, which now ___(3) a serious public health threat. Researchers are urgently seeking new approaches to ___(4) this growing crisis.",
      blanks: [
        { pos: 1, options: ["represented", "constituted", "comprised", "formed"], answer: 0 },
        { pos: 2, options: ["indiscriminate", "careless", "reckless", "thoughtless"], answer: 0 },
        { pos: 3, options: ["pose", "present", "constitute", "form"], answer: 2 },
        { pos: 4, options: ["address", "tackle", "confront", "handle"], answer: 0 }
      ],
      topic: "Health",
      difficulty: "hard"
    },
    {
      id: "rw010",
      passage: "Social media platforms have fundamentally ___(1) the way people communicate and access information. While these platforms offer unprecedented opportunities for connection and self-expression, they have also been ___(2) for spreading misinformation and contributing to political polarisation. Governments around the world are now ___(3) with how to regulate these powerful technologies without infringing on freedom of speech.",
      blanks: [
        { pos: 1, options: ["transformed", "changed", "altered", "modified"], answer: 0 },
        { pos: 2, options: ["criticised", "blamed", "condemned", "reproached"], answer: 0 },
        { pos: 3, options: ["grappling", "struggling", "wrestling", "contending"], answer: 0 }
      ],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rw011",
      passage: "The field of behavioural economics has ___(1) valuable insights into how people make financial decisions. Traditional economic models assumed that individuals act rationally to ___(2) their own self-interest. However, research has shown that cognitive biases and emotional factors frequently ___(3) decision-making, leading to choices that may not align with an individual's long-term objectives.",
      blanks: [
        { pos: 1, options: ["provided", "offered", "supplied", "delivered"], answer: 0 },
        { pos: 2, options: ["maximise", "optimise", "enhance", "advance"], answer: 0 },
        { pos: 3, options: ["influence", "affect", "impact", "shape"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw012",
      passage: "Access to clean water is widely ___(1) as a fundamental human right, yet billions of people around the world still lack reliable access to safe drinking water. Contaminated water sources ___(2) to the spread of waterborne diseases, particularly among children in developing nations. International organisations have ___(3) significant resources to addressing this crisis, but progress remains uneven.",
      blanks: [
        { pos: 1, options: ["recognised", "acknowledged", "accepted", "regarded"], answer: 0 },
        { pos: 2, options: ["contribute", "lead", "give rise", "result"], answer: 0 },
        { pos: 3, options: ["dedicated", "devoted", "committed", "allocated"], answer: 2 }
      ],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rw013",
      passage: "Quantum computing represents a ___(1) shift in computational capability. Unlike classical computers, which process information in binary bits, quantum computers use quantum bits, or qubits, which can exist in multiple states ___(2). This property enables quantum computers to solve certain problems exponentially faster than their classical ___(3), with potential applications in cryptography, drug discovery and materials science.",
      blanks: [
        { pos: 1, options: ["paradigm", "fundamental", "radical", "revolutionary"], answer: 0 },
        { pos: 2, options: ["simultaneously", "concurrently", "together", "jointly"], answer: 0 },
        { pos: 3, options: ["counterparts", "equivalents", "alternatives", "rivals"], answer: 0 }
      ],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "rw014",
      passage: "The growing prevalence of remote work has ___(1) traditional notions of the workplace. Employees now have greater flexibility to ___(2) their professional and personal lives, while employers benefit from access to a global talent pool. However, this shift has also raised questions about productivity, workplace culture and the long-term ___(3) for urban commercial property markets.",
      blanks: [
        { pos: 1, options: ["challenged", "questioned", "disputed", "contested"], answer: 0 },
        { pos: 2, options: ["balance", "manage", "reconcile", "harmonise"], answer: 0 },
        { pos: 3, options: ["implications", "consequences", "ramifications", "repercussions"], answer: 0 }
      ],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rw015",
      passage: "Deforestation in tropical regions continues to ___(1) at an alarming rate despite international efforts to curb it. The clearing of forests for agriculture and logging not only destroys vital habitats but also ___(2) large quantities of carbon dioxide into the atmosphere, thereby ___(3) to global warming. Reforestation programmes offer some hope, but they cannot fully ___(4) the ecological damage already done.",
      blanks: [
        { pos: 1, options: ["accelerate", "proceed", "advance", "progress"], answer: 0 },
        { pos: 2, options: ["releases", "emits", "discharges", "expels"], answer: 0 },
        { pos: 3, options: ["contributing", "leading", "adding", "causing"], answer: 0 },
        { pos: 4, options: ["reverse", "undo", "overturn", "negate"], answer: 0 }
      ],
      topic: "Environment",
      difficulty: "hard"
    },
    {
      id: "rw016",
      passage: "The ageing population in many developed nations presents both challenges and opportunities for healthcare systems. As life expectancy ___(1), the demand for aged care services and chronic disease management has grown substantially. Policymakers must ___(2) innovative solutions to ensure that healthcare remains accessible and ___(3) for an increasingly elderly population.",
      blanks: [
        { pos: 1, options: ["increases", "rises", "grows", "advances"], answer: 0 },
        { pos: 2, options: ["develop", "devise", "formulate", "conceive"], answer: 0 },
        { pos: 3, options: ["affordable", "economical", "cost-effective", "reasonable"], answer: 0 }
      ],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rw017",
      passage: "Space exploration has entered a new era characterised by the ___(1) involvement of private companies. Organisations such as SpaceX and Blue Origin have significantly reduced the ___(2) of launching payloads into orbit, making space more accessible than ever before. This commercialisation of space travel has ___(3) a renewed interest in lunar and Martian exploration among both scientists and the general public.",
      blanks: [
        { pos: 1, options: ["growing", "increasing", "expanding", "rising"], answer: 0 },
        { pos: 2, options: ["cost", "expense", "price", "charge"], answer: 0 },
        { pos: 3, options: ["generated", "sparked", "stimulated", "prompted"], answer: 1 }
      ],
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "rw018",
      passage: "The digital divide refers to the gap between those who have access to modern information and communication technologies and those who do not. This disparity ___(1) affects educational outcomes, as students without reliable internet access are increasingly ___(2) in a world where digital literacy is essential. Governments must ___(3) this issue by investing in broadband infrastructure and providing subsidised devices to disadvantaged communities.",
      blanks: [
        { pos: 1, options: ["significantly", "considerably", "substantially", "markedly"], answer: 0 },
        { pos: 2, options: ["disadvantaged", "marginalised", "handicapped", "hindered"], answer: 0 },
        { pos: 3, options: ["address", "tackle", "resolve", "remedy"], answer: 0 }
      ],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rw019",
      passage: "International trade agreements play a ___(1) role in shaping the global economic landscape. By reducing tariffs and eliminating barriers to commerce, these agreements ___(2) the flow of goods and services between nations. Critics, however, argue that such agreements disproportionately ___(3) large multinational corporations at the expense of small businesses and workers in developing economies.",
      blanks: [
        { pos: 1, options: ["crucial", "vital", "critical", "essential"], answer: 0 },
        { pos: 2, options: ["facilitate", "enable", "promote", "encourage"], answer: 0 },
        { pos: 3, options: ["benefit", "favour", "advantage", "assist"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw020",
      passage: "The human brain ___(1) approximately 86 billion neurons, each forming thousands of connections with other neurons. This vast neural network is ___(2) for every aspect of human cognition, from basic sensory perception to complex abstract reasoning. Recent advances in neuroimaging technology have ___(3) researchers to study brain activity in unprecedented detail, revealing new insights into how memory, language and emotion are processed.",
      blanks: [
        { pos: 1, options: ["contains", "comprises", "encompasses", "holds"], answer: 0 },
        { pos: 2, options: ["responsible", "accountable", "liable", "answerable"], answer: 0 },
        { pos: 3, options: ["enabled", "allowed", "permitted", "empowered"], answer: 0 }
      ],
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "rw021",
      passage: "The concept of sustainable development ___(1) meeting the needs of the present without compromising the ability of future generations to meet their own needs. Achieving this balance requires a ___(2) approach that integrates environmental protection, economic growth and social equity. Many nations have ___(3) ambitious sustainability targets, but translating these commitments into concrete action remains a significant challenge.",
      blanks: [
        { pos: 1, options: ["entails", "involves", "requires", "demands"], answer: 0 },
        { pos: 2, options: ["holistic", "comprehensive", "integrated", "unified"], answer: 0 },
        { pos: 3, options: ["adopted", "embraced", "endorsed", "ratified"], answer: 0 }
      ],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rw022",
      passage: "Vaccination programmes have been instrumental in ___(1) the global burden of infectious disease. The eradication of smallpox and the near-elimination of polio stand as ___(2) to the power of widespread immunisation. Despite this success, vaccine hesitancy has ___(3) in recent years, driven by misinformation and declining public trust in health authorities, potentially ___(4) decades of progress.",
      blanks: [
        { pos: 1, options: ["reducing", "decreasing", "lowering", "diminishing"], answer: 0 },
        { pos: 2, options: ["testaments", "tributes", "evidence", "proof"], answer: 0 },
        { pos: 3, options: ["emerged", "arisen", "surfaced", "appeared"], answer: 0 },
        { pos: 4, options: ["undermining", "threatening", "jeopardising", "endangering"], answer: 2 }
      ],
      topic: "Health",
      difficulty: "hard"
    },
    {
      id: "rw023",
      passage: "The creative industries, encompassing fields such as design, media and the performing arts, ___(1) a substantial contribution to the economies of many nations. In Australia, the cultural sector ___(2) hundreds of thousands of workers and generates billions of dollars in revenue annually. Government funding for the arts, however, has been ___(3) declining, raising concerns about the long-term viability of the sector.",
      blanks: [
        { pos: 1, options: ["make", "provide", "offer", "deliver"], answer: 0 },
        { pos: 2, options: ["employs", "hires", "recruits", "engages"], answer: 0 },
        { pos: 3, options: ["steadily", "consistently", "continuously", "progressively"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw024",
      passage: "Genetic engineering has opened up new possibilities in agriculture, enabling scientists to develop crop varieties that are more ___(1) to drought, pests and disease. These genetically modified organisms, or GMOs, have the ___(2) to significantly increase food production and reduce the need for chemical pesticides. However, concerns about the long-term environmental and health ___(3) of GMOs continue to fuel public debate.",
      blanks: [
        { pos: 1, options: ["resistant", "resilient", "immune", "tolerant"], answer: 0 },
        { pos: 2, options: ["potential", "capacity", "ability", "capability"], answer: 0 },
        { pos: 3, options: ["effects", "impacts", "consequences", "implications"], answer: 2 }
      ],
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "rw025",
      passage: "Mental health disorders ___(1) a significant proportion of the global disease burden, yet they remain widely stigmatised and underfunded. Depression and anxiety alone ___(2) for millions of lost working days each year, imposing a heavy economic toll on societies. Experts argue that integrating mental health services into primary healthcare could ___(3) improve early detection and treatment outcomes.",
      blanks: [
        { pos: 1, options: ["account for", "represent", "constitute", "comprise"], answer: 1 },
        { pos: 2, options: ["account", "contribute", "lead", "result"], answer: 0 },
        { pos: 3, options: ["substantially", "significantly", "considerably", "markedly"], answer: 1 }
      ],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rw026",
      passage: "The transition to a circular economy, in which resources are reused and recycled rather than discarded, is gaining ___(1) as a strategy for sustainable development. Traditional linear economic models, based on a take-make-dispose approach, have ___(2) enormous waste and environmental degradation. By redesigning products and processes to minimise waste, businesses can ___(3) costs while also reducing their ecological footprint.",
      blanks: [
        { pos: 1, options: ["momentum", "traction", "support", "popularity"], answer: 0 },
        { pos: 2, options: ["generated", "produced", "created", "caused"], answer: 0 },
        { pos: 3, options: ["reduce", "lower", "cut", "decrease"], answer: 1 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw027",
      passage: "Indigenous Australians possess one of the oldest continuous cultures on Earth, ___(1) back more than 65,000 years. Their traditional knowledge systems, which encompass sophisticated understandings of ecology, astronomy and land management, are increasingly being ___(2) by scientists as valuable sources of insight. Efforts to preserve and revitalise Indigenous languages and cultural practices are ___(3) important in an era of rapid globalisation.",
      blanks: [
        { pos: 1, options: ["dating", "stretching", "reaching", "extending"], answer: 0 },
        { pos: 2, options: ["recognised", "acknowledged", "appreciated", "valued"], answer: 0 },
        { pos: 3, options: ["particularly", "especially", "notably", "remarkably"], answer: 0 }
      ],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rw028",
      passage: "The proliferation of plastic waste has become one of the most ___(1) environmental challenges of our time. An estimated eight million tonnes of plastic ___(2) the world's oceans each year, threatening marine life and contaminating the food chain. While recycling programmes have expanded, they alone cannot ___(3) a problem of this magnitude; a fundamental shift in production and consumption patterns is required.",
      blanks: [
        { pos: 1, options: ["pressing", "urgent", "critical", "acute"], answer: 0 },
        { pos: 2, options: ["enters", "reaches", "pollutes", "contaminates"], answer: 0 },
        { pos: 3, options: ["solve", "resolve", "address", "rectify"], answer: 0 }
      ],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rw029",
      passage: "Standardised testing has long been a ___(1) topic in education. Proponents argue that such assessments provide an objective measure of student achievement and help to ___(2) accountability within school systems. Critics, however, contend that excessive reliance on standardised tests narrows the curriculum and fails to ___(3) the full range of student abilities, including creativity and critical thinking.",
      blanks: [
        { pos: 1, options: ["contentious", "controversial", "divisive", "debatable"], answer: 0 },
        { pos: 2, options: ["ensure", "maintain", "guarantee", "establish"], answer: 0 },
        { pos: 3, options: ["capture", "measure", "assess", "evaluate"], answer: 0 }
      ],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rw030",
      passage: "The development of autonomous vehicles ___(1) to transform the transportation industry in the coming decades. Self-driving cars could potentially reduce traffic accidents caused by human error, which currently ___(2) for the vast majority of road fatalities. However, significant technical, legal and ethical ___(3) must be overcome before fully autonomous vehicles can be widely ___(4) on public roads.",
      blanks: [
        { pos: 1, options: ["promises", "aims", "seeks", "endeavours"], answer: 0 },
        { pos: 2, options: ["account", "contribute", "lead", "add"], answer: 0 },
        { pos: 3, options: ["hurdles", "obstacles", "barriers", "challenges"], answer: 3 },
        { pos: 4, options: ["deployed", "implemented", "introduced", "released"], answer: 0 }
      ],
      topic: "Technology",
      difficulty: "hard"
    },
    {
      id: "rw031",
      passage: "Sleep deprivation has been ___(1) as a significant public health concern in modern societies. Research indicates that chronic lack of sleep is ___(2) with an increased risk of cardiovascular disease, obesity and cognitive impairment. Despite growing awareness of its harmful effects, many people continue to ___(3) sleep in favour of work or social activities.",
      blanks: [
        { pos: 1, options: ["identified", "recognised", "classified", "designated"], answer: 0 },
        { pos: 2, options: ["associated", "connected", "linked", "correlated"], answer: 0 },
        { pos: 3, options: ["sacrifice", "forgo", "neglect", "compromise"], answer: 0 }
      ],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rw032",
      passage: "Cryptocurrency has ___(1) as a disruptive force in the global financial system. Built on blockchain technology, digital currencies offer a decentralised alternative to traditional banking, enabling peer-to-peer transactions without the need for ___(2). While advocates praise the transparency and security of blockchain, regulators have expressed ___(3) about its potential use in money laundering and tax evasion.",
      blanks: [
        { pos: 1, options: ["emerged", "appeared", "arisen", "surfaced"], answer: 0 },
        { pos: 2, options: ["intermediaries", "agents", "brokers", "mediators"], answer: 0 },
        { pos: 3, options: ["concerns", "worries", "anxieties", "apprehensions"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rw033",
      passage: "The Great Barrier Reef, one of the world's most remarkable natural wonders, is facing an ___(1) threat from climate change. Successive mass bleaching events, ___(2) by rising ocean temperatures, have caused widespread coral death across the reef system. Marine biologists warn that without urgent global action to ___(3) greenhouse gas emissions, the reef may suffer irreversible damage within the coming decades.",
      blanks: [
        { pos: 1, options: ["existential", "imminent", "immediate", "extreme"], answer: 0 },
        { pos: 2, options: ["triggered", "caused", "induced", "provoked"], answer: 0 },
        { pos: 3, options: ["reduce", "curb", "limit", "restrict"], answer: 1 }
      ],
      topic: "Environment",
      difficulty: "hard"
    },
    {
      id: "rw034",
      passage: "Inclusive education, which ___(1) the integration of students with disabilities into mainstream classrooms, has gained widespread support in recent decades. Research suggests that inclusive settings benefit all students by fostering empathy, tolerance and respect for ___(2). However, implementing truly inclusive practices requires significant investment in teacher training, specialised resources and ___(3) classroom design.",
      blanks: [
        { pos: 1, options: ["advocates", "promotes", "supports", "encourages"], answer: 0 },
        { pos: 2, options: ["diversity", "difference", "variety", "plurality"], answer: 0 },
        { pos: 3, options: ["accessible", "adapted", "modified", "adjusted"], answer: 0 }
      ],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rw035",
      passage: "The Internet of Things refers to the growing network of physical devices ___(1) with sensors, software and connectivity that enables them to collect and exchange data. From smart home appliances to industrial monitoring systems, IoT technology is ___(2) transforming how people interact with their environment. Security experts, however, have ___(3) concerns about the vulnerability of these devices to cyberattacks.",
      blanks: [
        { pos: 1, options: ["equipped", "fitted", "installed", "furnished"], answer: 0 },
        { pos: 2, options: ["rapidly", "quickly", "swiftly", "hastily"], answer: 0 },
        { pos: 3, options: ["raised", "voiced", "expressed", "articulated"], answer: 0 }
      ],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rw036",
      passage: "Income inequality has widened ___(1) in many advanced economies over the past four decades. The share of national income going to the wealthiest individuals has increased substantially, while wages for middle and lower-income workers have ___(2). Economists disagree on the primary causes of this trend, with some pointing to globalisation and technological change, while others ___(3) policy decisions that favour capital over labour.",
      blanks: [
        { pos: 1, options: ["considerably", "significantly", "substantially", "markedly"], answer: 0 },
        { pos: 2, options: ["stagnated", "plateaued", "stabilised", "levelled"], answer: 0 },
        { pos: 3, options: ["emphasise", "highlight", "stress", "underscore"], answer: 0 }
      ],
      topic: "Economics",
      difficulty: "hard"
    },
    {
      id: "rw037",
      passage: "Stem cell research holds enormous ___(1) for the treatment of a wide range of diseases and injuries. These remarkable cells have the ability to ___(2) into specialised cell types, offering hope for conditions such as Parkinson's disease, spinal cord injuries and diabetes. Despite significant scientific advances, ethical ___(3) surrounding the use of embryonic stem cells continue to ___(4) progress in some jurisdictions.",
      blanks: [
        { pos: 1, options: ["promise", "potential", "prospect", "possibility"], answer: 0 },
        { pos: 2, options: ["differentiate", "develop", "transform", "evolve"], answer: 0 },
        { pos: 3, options: ["concerns", "objections", "reservations", "issues"], answer: 0 },
        { pos: 4, options: ["impede", "hinder", "obstruct", "restrict"], answer: 1 }
      ],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "rw038",
      passage: "Public transport systems in major cities around the world are undergoing significant ___(1). Investment in high-speed rail, electric buses and expanded metro networks aims to reduce congestion and lower carbon emissions from the transport sector. Research demonstrates that cities with well-developed public transport networks ___(2) higher levels of economic productivity and social ___(3) than those that remain car-dependent.",
      blanks: [
        { pos: 1, options: ["transformation", "modernisation", "improvement", "renovation"], answer: 0 },
        { pos: 2, options: ["experience", "enjoy", "achieve", "attain"], answer: 0 },
        { pos: 3, options: ["cohesion", "integration", "harmony", "unity"], answer: 0 }
      ],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rw039",
      passage: "The concept of lifelong learning has become increasingly ___(1) in a rapidly changing labour market. As automation and artificial intelligence ___(2) traditional job roles, workers must continuously update their skills to remain employable. Educational institutions are responding by offering more flexible learning pathways, including online courses and micro-credentials, that ___(3) individuals to acquire new competencies throughout their careers.",
      blanks: [
        { pos: 1, options: ["relevant", "important", "significant", "pertinent"], answer: 0 },
        { pos: 2, options: ["displace", "replace", "supplant", "supersede"], answer: 0 },
        { pos: 3, options: ["enable", "allow", "permit", "empower"], answer: 0 }
      ],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rw040",
      passage: "The ethical implications of gene editing technology, particularly CRISPR-Cas9, have ___(1) intense debate among scientists, ethicists and policymakers. While this technology offers remarkable potential for ___(2) genetic diseases, concerns about unintended consequences and the possibility of so-called designer babies have led many to call for strict ___(3) oversight. The international scientific community continues to ___(4) guidelines for the responsible use of gene editing in human subjects.",
      blanks: [
        { pos: 1, options: ["provoked", "generated", "stimulated", "prompted"], answer: 0 },
        { pos: 2, options: ["treating", "curing", "eliminating", "eradicating"], answer: 2 },
        { pos: 3, options: ["regulatory", "legislative", "governmental", "supervisory"], answer: 0 },
        { pos: 4, options: ["develop", "formulate", "establish", "draft"], answer: 0 }
      ],
      topic: "Science",
      difficulty: "hard"
    }
  ],

  /* ========================================================================
   * 2. READING FILL IN THE BLANKS (readFib) - 30 exercises
   * Word bank with extra distractors; answer is the correct word string
   * ====================================================================== */
  readFib: [
    {
      id: "rf001",
      passage: "The phenomenon of urbanisation has ___(1) the social fabric of communities worldwide. As rural populations migrate to cities in search of economic opportunity, traditional social structures are ___(2) disrupted. The resulting cultural ___(3) can be both enriching and challenging for urban residents.",
      blanks: [
        { pos: 1, answer: "transformed" },
        { pos: 2, answer: "increasingly" },
        { pos: 3, answer: "diversity" }
      ],
      wordBank: ["transformed", "increasingly", "diversity", "converted", "gradually", "uniformity"],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rf002",
      passage: "Ocean acidification, caused by the absorption of excess carbon dioxide from the atmosphere, poses a ___(1) threat to marine ecosystems. Shellfish and coral are particularly ___(2) because the acidic conditions dissolve the calcium carbonate structures they depend on. Scientists have observed ___(3) declines in shell thickness across multiple species in affected regions.",
      blanks: [
        { pos: 1, answer: "serious" },
        { pos: 2, answer: "vulnerable" },
        { pos: 3, answer: "measurable" }
      ],
      wordBank: ["serious", "vulnerable", "measurable", "minor", "resilient", "negligible"],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rf003",
      passage: "The introduction of compulsory education in the nineteenth century was a ___(1) moment in social history. By ensuring that all children, regardless of background, had access to ___(2) instruction, governments laid the foundation for more equitable societies. The long-term economic ___(3) of universal education have been extensively documented by researchers.",
      blanks: [
        { pos: 1, answer: "pivotal" },
        { pos: 2, answer: "formal" },
        { pos: 3, answer: "benefits" }
      ],
      wordBank: ["pivotal", "formal", "benefits", "marginal", "informal", "drawbacks", "conventional"],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rf004",
      passage: "Nanotechnology involves the manipulation of matter at the ___(1) scale, typically between one and one hundred nanometres. At this scale, materials can exhibit ___(2) different properties compared to their bulk counterparts. The potential applications of nanotechnology in medicine, electronics and environmental ___(3) are vast and continue to expand as research progresses.",
      blanks: [
        { pos: 1, answer: "molecular" },
        { pos: 2, answer: "remarkably" },
        { pos: 3, answer: "remediation" }
      ],
      wordBank: ["molecular", "remarkably", "remediation", "atomic", "slightly", "contamination", "prevention"],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "rf005",
      passage: "Global supply chains have become ___(1) complex in recent decades, with components for a single product often sourced from dozens of countries. This interconnectedness, while ___(2) in terms of cost efficiency, creates significant vulnerabilities. The COVID-19 pandemic ___(3) the fragility of these systems when disruptions cascaded across industries worldwide.",
      blanks: [
        { pos: 1, answer: "increasingly" },
        { pos: 2, answer: "beneficial" },
        { pos: 3, answer: "exposed" }
      ],
      wordBank: ["increasingly", "beneficial", "exposed", "marginally", "detrimental", "concealed", "highlighted"],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rf006",
      passage: "The Mediterranean diet, characterised by high consumption of fruits, vegetables, whole grains and olive oil, has been ___(1) linked to improved cardiovascular health. Studies involving thousands of participants have ___(2) that adherence to this dietary pattern reduces the risk of heart disease and stroke. Health professionals increasingly ___(3) the Mediterranean diet as a model for healthy eating.",
      blanks: [
        { pos: 1, answer: "consistently" },
        { pos: 2, answer: "demonstrated" },
        { pos: 3, answer: "recommend" }
      ],
      wordBank: ["consistently", "demonstrated", "recommend", "occasionally", "suggested", "discourage"],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rf007",
      passage: "Artificial intelligence systems are now capable of ___(1) complex patterns in data that would be impossible for humans to detect. In healthcare, machine learning algorithms can ___(2) diseases from medical images with accuracy rivalling that of experienced clinicians. However, the lack of ___(3) in how these systems reach their conclusions remains a significant concern for medical practitioners.",
      blanks: [
        { pos: 1, answer: "identifying" },
        { pos: 2, answer: "diagnose" },
        { pos: 3, answer: "transparency" }
      ],
      wordBank: ["identifying", "diagnose", "transparency", "generating", "treat", "complexity", "reliability"],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rf008",
      passage: "The preservation of endangered languages is a matter of ___(1) cultural importance. When a language disappears, the unique knowledge systems and worldviews it ___(2) are lost forever. Linguists estimate that approximately half of the world's 7,000 languages are at risk of extinction by the end of this century, making ___(3) efforts essential.",
      blanks: [
        { pos: 1, answer: "profound" },
        { pos: 2, answer: "embodies" },
        { pos: 3, answer: "conservation" }
      ],
      wordBank: ["profound", "embodies", "conservation", "minimal", "expresses", "elimination", "documentation"],
      topic: "Society",
      difficulty: "hard"
    },
    {
      id: "rf009",
      passage: "Soil degradation affects approximately one third of the planet's arable land, ___(1) threatening global food production. Intensive farming practices, including excessive use of chemical fertilisers, have ___(2) the natural nutrient balance of soils in many agricultural regions. Sustainable farming methods, such as crop rotation and organic composting, can help ___(3) soil health over time.",
      blanks: [
        { pos: 1, answer: "directly" },
        { pos: 2, answer: "disrupted" },
        { pos: 3, answer: "restore" }
      ],
      wordBank: ["directly", "disrupted", "restore", "indirectly", "maintained", "deplete", "monitor"],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rf010",
      passage: "The rise of e-commerce has ___(1) reshaped the retail landscape in Australia and globally. Traditional brick-and-mortar stores have faced ___(2) competition from online retailers offering greater convenience and competitive pricing. This shift has had significant ___(3) for employment in the retail sector, with many physical stores reducing staff or closing entirely.",
      blanks: [
        { pos: 1, answer: "fundamentally" },
        { pos: 2, answer: "intense" },
        { pos: 3, answer: "implications" }
      ],
      wordBank: ["fundamentally", "intense", "implications", "marginally", "minimal", "advantages", "consequences"],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rf011",
      passage: "Photosynthesis is the ___(1) process by which plants convert sunlight, water and carbon dioxide into glucose and oxygen. This biochemical reaction is ___(2) for sustaining virtually all life on Earth, as it forms the base of most food chains. The efficiency of photosynthesis varies ___(3) among different plant species, with some adapted to thrive in low-light conditions.",
      blanks: [
        { pos: 1, answer: "fundamental" },
        { pos: 2, answer: "essential" },
        { pos: 3, answer: "considerably" }
      ],
      wordBank: ["fundamental", "essential", "considerably", "secondary", "optional", "minimally", "crucial"],
      topic: "Science",
      difficulty: "easy"
    },
    {
      id: "rf012",
      passage: "Teacher wellbeing has emerged as a ___(1) concern in education systems worldwide. High workloads, administrative burdens and challenging classroom behaviours contribute to elevated levels of stress and burnout among educators. Schools that ___(2) supportive professional environments tend to experience lower staff turnover and ___(3) student outcomes.",
      blanks: [
        { pos: 1, answer: "critical" },
        { pos: 2, answer: "foster" },
        { pos: 3, answer: "improved" }
      ],
      wordBank: ["critical", "foster", "improved", "negligible", "undermine", "diminished", "promote"],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rf013",
      passage: "The gut microbiome, comprising trillions of microorganisms residing in the digestive tract, plays a ___(1) role in human health. Research has revealed that the composition of gut bacteria can ___(2) everything from immune function to mental wellbeing. Maintaining a ___(3) microbiome through a balanced diet rich in fibre and fermented foods is increasingly recognised as important for overall health.",
      blanks: [
        { pos: 1, answer: "vital" },
        { pos: 2, answer: "influence" },
        { pos: 3, answer: "diverse" }
      ],
      wordBank: ["vital", "influence", "diverse", "minor", "restrict", "uniform", "healthy"],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rf014",
      passage: "Three-dimensional printing technology has ___(1) from a niche prototyping tool to a versatile manufacturing method used across numerous industries. Engineers can now ___(2) complex components that would be impossible to create using traditional manufacturing techniques. The ability to produce customised parts on demand has ___(3) reduced waste and shortened production timelines.",
      blanks: [
        { pos: 1, answer: "evolved" },
        { pos: 2, answer: "fabricate" },
        { pos: 3, answer: "significantly" }
      ],
      wordBank: ["evolved", "fabricate", "significantly", "declined", "disassemble", "marginally", "construct"],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rf015",
      passage: "The concept of emotional intelligence, first ___(1) by psychologists in the 1990s, refers to the ability to recognise, understand and manage one's own emotions and those of others. Individuals with high emotional intelligence tend to ___(2) in leadership roles, as they can navigate complex interpersonal dynamics with greater skill. Educational programmes that ___(3) emotional intelligence have shown positive effects on student behaviour and academic performance.",
      blanks: [
        { pos: 1, answer: "popularised" },
        { pos: 2, answer: "excel" },
        { pos: 3, answer: "cultivate" }
      ],
      wordBank: ["popularised", "excel", "cultivate", "dismissed", "struggle", "neglect", "develop"],
      topic: "Education",
      difficulty: "hard"
    },
    {
      id: "rf016",
      passage: "Water scarcity is projected to ___(1) millions of additional people in the coming decades as climate change alters precipitation patterns. Regions that currently enjoy ___(2) water supplies may face shortages, while already arid areas could become virtually uninhabitable. Investment in water recycling technologies and ___(3) infrastructure is essential to mitigate the impact of this growing crisis.",
      blanks: [
        { pos: 1, answer: "affect" },
        { pos: 2, answer: "adequate" },
        { pos: 3, answer: "desalination" }
      ],
      wordBank: ["affect", "adequate", "desalination", "benefit", "excessive", "irrigation", "purification"],
      topic: "Environment",
      difficulty: "hard"
    },
    {
      id: "rf017",
      passage: "The sharing economy, exemplified by platforms such as ride-sharing and accommodation-sharing services, has ___(1) traditional business models in several industries. By enabling individuals to ___(2) underutilised assets, these platforms have created new sources of income for millions of people. Regulatory frameworks have struggled to keep ___(3) with the rapid growth of these services.",
      blanks: [
        { pos: 1, answer: "disrupted" },
        { pos: 2, answer: "monetise" },
        { pos: 3, answer: "pace" }
      ],
      wordBank: ["disrupted", "monetise", "pace", "strengthened", "abandon", "track", "step"],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rf018",
      passage: "The theory of plate tectonics ___(1) a unifying framework for understanding the dynamic processes that shape the Earth's surface. Continental drift, volcanic activity and earthquakes can all be explained by the movement of large ___(2) plates across the planet's semi-fluid mantle. This theory, which gained widespread ___(3) in the 1960s, remains one of the cornerstones of modern geology.",
      blanks: [
        { pos: 1, answer: "provides" },
        { pos: 2, answer: "lithospheric" },
        { pos: 3, answer: "acceptance" }
      ],
      wordBank: ["provides", "lithospheric", "acceptance", "undermines", "atmospheric", "resistance", "recognition"],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "rf019",
      passage: "Childhood obesity rates have risen ___(1) in many developed countries over the past three decades. Sedentary lifestyles, combined with easy access to energy-dense processed foods, are widely ___(2) as primary contributing factors. Public health campaigns that promote physical activity and ___(3) eating habits have shown promise in reversing this troubling trend.",
      blanks: [
        { pos: 1, answer: "sharply" },
        { pos: 2, answer: "regarded" },
        { pos: 3, answer: "nutritious" }
      ],
      wordBank: ["sharply", "regarded", "nutritious", "modestly", "dismissed", "indulgent", "balanced"],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rf020",
      passage: "Bilingual education programmes have gained ___(1) recognition for their cognitive and social benefits. Research indicates that students who learn through two languages develop enhanced ___(2) flexibility and superior problem-solving skills. Furthermore, bilingualism has been associated with ___(3) onset of cognitive decline in later life, suggesting lasting neurological advantages.",
      blanks: [
        { pos: 1, answer: "increasing" },
        { pos: 2, answer: "cognitive" },
        { pos: 3, answer: "delayed" }
      ],
      wordBank: ["increasing", "cognitive", "delayed", "declining", "physical", "accelerated", "gradual"],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rf021",
      passage: "Dark matter, which constitutes approximately twenty-seven per cent of the universe's total mass and energy, remains one of the most ___(1) mysteries in modern physics. Despite decades of research, scientists have been unable to ___(2) observe this elusive substance. Its existence is inferred solely from its gravitational ___(3) on visible matter, galaxies and the large-scale structure of the universe.",
      blanks: [
        { pos: 1, answer: "enduring" },
        { pos: 2, answer: "directly" },
        { pos: 3, answer: "effects" }
      ],
      wordBank: ["enduring", "directly", "effects", "fleeting", "indirectly", "absence", "influence"],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "rf022",
      passage: "The gig economy has ___(1) the nature of work for millions of people worldwide. Freelance workers and independent contractors now make up a ___(2) portion of the workforce in many countries, offering their services through digital platforms. While this model provides flexibility, it often lacks the job security and ___(3) that traditional employment arrangements offer.",
      blanks: [
        { pos: 1, answer: "altered" },
        { pos: 2, answer: "substantial" },
        { pos: 3, answer: "benefits" }
      ],
      wordBank: ["altered", "substantial", "benefits", "preserved", "negligible", "restrictions", "protections"],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "rf023",
      passage: "Noise pollution in urban environments has been ___(1) identified as a significant risk factor for cardiovascular disease. Prolonged exposure to traffic noise and industrial sounds can elevate stress hormones and ___(2) sleep quality. City planners are increasingly incorporating noise reduction strategies, such as green buffer zones and improved building ___(3), into urban design.",
      blanks: [
        { pos: 1, answer: "increasingly" },
        { pos: 2, answer: "diminish" },
        { pos: 3, answer: "insulation" }
      ],
      wordBank: ["increasingly", "diminish", "insulation", "rarely", "enhance", "ventilation", "demolition"],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rf024",
      passage: "Cyber security threats have grown in both ___(1) and sophistication as organisations become more reliant on digital systems. Data breaches affecting millions of users have become ___(2) common, exposing sensitive personal and financial information. Organisations must invest in robust security ___(3) and employee training to protect themselves against these evolving threats.",
      blanks: [
        { pos: 1, answer: "frequency" },
        { pos: 2, answer: "alarmingly" },
        { pos: 3, answer: "protocols" }
      ],
      wordBank: ["frequency", "alarmingly", "protocols", "severity", "reassuringly", "software", "measures"],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "rf025",
      passage: "Microplastics have been detected in virtually every ___(1) on Earth, from the deepest ocean trenches to remote mountain peaks. These tiny particles, which ___(2) from the breakdown of larger plastic items, are ingested by marine organisms and can accumulate in the food chain. The potential health ___(3) for humans consuming seafood contaminated with microplastics are still being investigated.",
      blanks: [
        { pos: 1, answer: "ecosystem" },
        { pos: 2, answer: "originate" },
        { pos: 3, answer: "consequences" }
      ],
      wordBank: ["ecosystem", "originate", "consequences", "continent", "emerge", "benefits", "implications"],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "rf026",
      passage: "The concept of universal basic income, whereby every citizen receives a regular unconditional payment from the government, has gained ___(1) traction in policy debates. Proponents argue that it could ___(2) poverty and provide a safety net in an era of increasing automation. Critics counter that such a scheme would be prohibitively ___(3) and could reduce incentives to work.",
      blanks: [
        { pos: 1, answer: "considerable" },
        { pos: 2, answer: "alleviate" },
        { pos: 3, answer: "expensive" }
      ],
      wordBank: ["considerable", "alleviate", "expensive", "minimal", "exacerbate", "affordable", "sustainable"],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "rf027",
      passage: "Project-based learning has emerged as a ___(1) pedagogical approach that engages students through real-world problem solving. Unlike traditional instruction, which often relies on rote memorisation, project-based learning requires students to ___(2) knowledge and skills to authentic challenges. Research suggests that this approach can deepen understanding and improve student ___(3) in academic work.",
      blanks: [
        { pos: 1, answer: "promising" },
        { pos: 2, answer: "apply" },
        { pos: 3, answer: "engagement" }
      ],
      wordBank: ["promising", "apply", "engagement", "outdated", "memorise", "disinterest", "motivation"],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "rf028",
      passage: "Volcanic eruptions, while devastating in their immediate impact, play an ___(1) role in shaping the Earth's geology and atmosphere. The minerals and nutrients deposited by volcanic ash can ___(2) surrounding soils, making them exceptionally fertile for agriculture. Throughout history, many of the world's most productive farming regions have been ___(3) near active or dormant volcanoes.",
      blanks: [
        { pos: 1, answer: "important" },
        { pos: 2, answer: "enrich" },
        { pos: 3, answer: "located" }
      ],
      wordBank: ["important", "enrich", "located", "insignificant", "deplete", "abandoned", "established"],
      topic: "Science",
      difficulty: "easy"
    },
    {
      id: "rf029",
      passage: "The rise of telehealth services has ___(1) access to medical care for patients in remote and underserved communities. Video consultations enable patients to receive ___(2) advice without the need for lengthy and costly travel. While telehealth cannot fully replace in-person examinations, it serves as a valuable ___(3) to traditional healthcare delivery.",
      blanks: [
        { pos: 1, answer: "expanded" },
        { pos: 2, answer: "professional" },
        { pos: 3, answer: "complement" }
      ],
      wordBank: ["expanded", "professional", "complement", "restricted", "informal", "substitute", "alternative"],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "rf030",
      passage: "Migration patterns have ___(1) shifted in response to economic globalisation, conflict and climate change. Host countries face the challenge of ___(2) newcomers into their social and economic systems while preserving social cohesion. Successful integration policies typically combine language training, employment support and ___(3) programmes that facilitate cultural exchange between migrant and host communities.",
      blanks: [
        { pos: 1, answer: "significantly" },
        { pos: 2, answer: "integrating" },
        { pos: 3, answer: "community" }
      ],
      wordBank: ["significantly", "integrating", "community", "marginally", "isolating", "corporate", "settlement"],
      topic: "Society",
      difficulty: "medium"
    }
  ],

  /* ========================================================================
   * 3. MULTIPLE CHOICE MULTIPLE ANSWER (mcma) - 20 exercises
   * answers = array of indices of correct options (0-based)
   * ====================================================================== */
  mcma: [
    {
      id: "mc001",
      passage: "The development of renewable energy technologies has accelerated dramatically in recent years. Solar panel efficiency has more than doubled over the past decade, while the cost of wind turbines has fallen by approximately forty per cent. Battery storage technology has also improved significantly, addressing one of the key limitations of intermittent energy sources. Many nations now generate a substantial portion of their electricity from renewable sources, with some achieving over fifty per cent renewable generation on peak days. However, the transition away from fossil fuels remains uneven, with developing nations often lacking the capital investment needed to build renewable infrastructure at scale.",
      question: "Which of the following statements are supported by the passage?",
      options: [
        "Solar panel efficiency has improved considerably in the last ten years.",
        "All countries now generate most of their electricity from renewable sources.",
        "Wind turbine costs have decreased substantially.",
        "Developing nations face challenges in funding renewable energy infrastructure.",
        "Battery storage technology has stagnated in recent years."
      ],
      answers: [0, 2, 3],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "mc002",
      passage: "Australia's Great Barrier Reef, stretching over 2,300 kilometres along the Queensland coast, is the world's largest coral reef system and a UNESCO World Heritage site. The reef supports an extraordinarily diverse ecosystem, including over 1,500 species of fish, 400 types of coral and numerous species of marine mammals. In recent decades, the reef has experienced severe bleaching events linked to rising ocean temperatures. The Australian government has committed billions of dollars to reef protection programmes, including water quality improvement and crown-of-thorns starfish control. Despite these efforts, scientists warn that global action on climate change is essential for the reef's long-term survival.",
      question: "According to the passage, which statements about the Great Barrier Reef are correct?",
      options: [
        "It extends for more than two thousand kilometres.",
        "It is home to over 1,500 coral species.",
        "Bleaching events have been connected to warmer ocean temperatures.",
        "The Australian government has invested in reef protection.",
        "Scientists believe local conservation alone will save the reef."
      ],
      answers: [0, 2, 3],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "mc003",
      passage: "Early childhood education has been shown to yield significant long-term benefits for individuals and society. Children who attend quality preschool programmes demonstrate higher levels of school readiness and are more likely to complete secondary education. Longitudinal studies have found that participants in early childhood programmes earn higher incomes as adults and are less likely to engage in criminal behaviour. The Perry Preschool Project, one of the most cited studies in this field, followed participants for over forty years and found a return of approximately seven dollars for every dollar invested. Critics, however, note that the quality of programmes varies widely and that poorly designed interventions may produce minimal benefits.",
      question: "Which of the following are identified as outcomes of quality early childhood education?",
      options: [
        "Greater school readiness among participants.",
        "Guaranteed elimination of criminal behaviour.",
        "Higher adult earnings for programme participants.",
        "Increased likelihood of completing secondary school.",
        "Uniform results regardless of programme quality."
      ],
      answers: [0, 2, 3],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "mc004",
      passage: "The human microbiome, the collection of trillions of microorganisms living in and on the human body, has become a major focus of medical research. Scientists have discovered that these microbial communities play crucial roles in digestion, immune function and even mental health. The composition of an individual's microbiome is influenced by factors including diet, antibiotic use, mode of birth and environmental exposures. Research has linked disruptions to the microbiome with conditions such as inflammatory bowel disease, obesity and depression. Faecal microbiota transplantation has emerged as a promising treatment for certain gut infections, though its broader therapeutic applications are still being explored.",
      question: "Based on the passage, which statements about the human microbiome are accurate?",
      options: [
        "It consists of trillions of microorganisms.",
        "Diet is one factor that can affect its composition.",
        "It has no connection to mental health conditions.",
        "Disruptions to it have been linked to obesity.",
        "Faecal microbiota transplantation is used for some gut infections."
      ],
      answers: [0, 1, 3, 4],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "mc005",
      passage: "The concept of smart cities has gained considerable attention from urban planners and technology companies. Smart cities use interconnected digital technologies, including sensors, data analytics and the Internet of Things, to improve urban services and quality of life. Traffic management systems can optimise signal timing in real time, reducing congestion and emissions. Smart grids enable more efficient distribution of electricity, while digital platforms can enhance citizen engagement in local governance. Privacy advocates, however, have raised concerns about the vast amounts of personal data collected by these systems and the potential for surveillance overreach.",
      question: "Which of the following are described as features or concerns associated with smart cities?",
      options: [
        "Use of sensors and data analytics to improve services.",
        "Complete elimination of traffic congestion.",
        "More efficient electricity distribution through smart grids.",
        "Concerns about personal data collection and privacy.",
        "Enhanced citizen participation in governance via digital platforms."
      ],
      answers: [0, 2, 3, 4],
      topic: "Technology",
      difficulty: "medium"
    },
    {
      id: "mc006",
      passage: "Income inequality has become a defining challenge of the twenty-first century. The gap between the wealthiest and poorest segments of society has widened in many nations, driven by factors including globalisation, technological change and tax policies that favour capital income. Research by the World Inequality Lab shows that the top one per cent of earners now capture more than twenty per cent of global income. This concentration of wealth has been associated with reduced social mobility, poorer health outcomes and increased political instability. Some economists advocate for progressive taxation and strengthened social safety nets, while others argue that economic growth, rather than redistribution, is the most effective path to reducing poverty.",
      question: "According to the passage, which of the following are consequences or features of income inequality?",
      options: [
        "Reduced social mobility in affected societies.",
        "The top one per cent earning over twenty per cent of global income.",
        "Universal agreement on progressive taxation as the solution.",
        "Poorer health outcomes linked to wealth concentration.",
        "Increased political instability."
      ],
      answers: [0, 1, 3, 4],
      topic: "Economics",
      difficulty: "hard"
    },
    {
      id: "mc007",
      passage: "The discovery of penicillin by Alexander Fleming in 1928 marked the beginning of the antibiotic era and transformed the practice of medicine. Before antibiotics, even minor infections could prove fatal, and surgical procedures carried enormous risks. The widespread availability of antibiotics after World War Two led to dramatic reductions in mortality from infectious diseases. However, the overuse and misuse of antibiotics in both human medicine and animal agriculture has accelerated the development of resistant bacterial strains. The World Health Organisation has declared antimicrobial resistance one of the top ten global public health threats, warning that a post-antibiotic era could make common infections lethal once again.",
      question: "Which of the following points are supported by the passage?",
      options: [
        "Penicillin was discovered in the early twentieth century.",
        "Antibiotics became widely available after the Second World War.",
        "Antibiotic resistance is partly caused by overuse in agriculture.",
        "The WHO considers antimicrobial resistance a minor concern.",
        "Prior to antibiotics, minor infections could be deadly."
      ],
      answers: [0, 1, 2, 4],
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "mc008",
      passage: "Social isolation among elderly people has been identified as a growing public health concern in ageing societies. Research consistently demonstrates that loneliness and lack of social connection are associated with increased risks of depression, cognitive decline and premature mortality. The risk is particularly acute for those living alone, especially following the death of a spouse. Community programmes that facilitate regular social interaction, such as group activities, volunteer opportunities and intergenerational projects, have shown positive effects on the mental and physical health of older adults. Technology, including video calling and social media, can also help bridge the gap, although digital literacy remains a barrier for many elderly individuals.",
      question: "Which of the following are mentioned as effects of or responses to social isolation in the elderly?",
      options: [
        "Increased risk of cognitive decline.",
        "Community programmes with group activities and volunteering.",
        "Guaranteed prevention of depression through technology use.",
        "Higher risk of premature mortality.",
        "Digital literacy as a barrier to using technology for social connection."
      ],
      answers: [0, 1, 3, 4],
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "mc009",
      passage: "Desertification, the process by which fertile land becomes desert, threatens the livelihoods of hundreds of millions of people worldwide. Overgrazing, deforestation and unsustainable farming practices are primary drivers of this phenomenon, which is further exacerbated by climate change. The Sahel region of Africa is among the most severely affected areas, with advancing desert conditions displacing communities and reducing agricultural output. The United Nations Convention to Combat Desertification coordinates international efforts to address this issue, promoting sustainable land management practices and supporting affected communities. The Great Green Wall initiative, which aims to restore degraded landscapes across the width of Africa, represents one of the most ambitious responses to date.",
      question: "According to the passage, which statements about desertification are correct?",
      options: [
        "It is driven partly by overgrazing and unsustainable farming.",
        "Climate change has no effect on the process.",
        "The Sahel region in Africa is severely affected.",
        "The Great Green Wall aims to restore landscapes across Africa.",
        "It threatens hundreds of millions of livelihoods globally."
      ],
      answers: [0, 2, 3, 4],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "mc010",
      passage: "The Finnish education system is frequently cited as one of the most successful in the world. Finland consistently ranks near the top in international assessments such as PISA, despite students spending fewer hours in school than their counterparts in many other countries. Key features of the system include highly qualified teachers who hold master's degrees, minimal standardised testing before the age of sixteen, and a strong emphasis on equity and student wellbeing. Finnish schools provide free meals, health services and learning support, ensuring that socioeconomic background has minimal impact on educational outcomes. Critics note, however, that Finland's relatively small and homogeneous population makes direct comparisons with larger, more diverse nations problematic.",
      question: "Which of the following are identified as features of the Finnish education system?",
      options: [
        "Teachers are required to hold master's degrees.",
        "Students undergo frequent standardised testing from an early age.",
        "Free meals and health services are provided in schools.",
        "The system places strong emphasis on equity.",
        "Finland's small population makes comparisons with larger nations difficult."
      ],
      answers: [0, 2, 3, 4],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "mc011",
      passage: "Epigenetics is the study of heritable changes in gene expression that do not involve alterations to the underlying DNA sequence. Environmental factors such as diet, stress and exposure to toxins can trigger epigenetic modifications that switch genes on or off. Remarkably, some of these changes can be passed from one generation to the next, meaning that a parent's experiences may influence the health of their offspring. This field has opened new avenues for understanding diseases such as cancer, diabetes and mental health disorders. Researchers are investigating whether epigenetic therapies could one day reverse harmful modifications, offering a novel approach to treating chronic conditions.",
      question: "Based on the passage, which of the following statements about epigenetics are true?",
      options: [
        "Epigenetic changes involve alterations to the DNA sequence itself.",
        "Environmental factors can trigger epigenetic modifications.",
        "Some epigenetic changes may be inherited by future generations.",
        "The field has implications for understanding cancer and diabetes.",
        "Researchers are exploring epigenetic therapies for chronic conditions."
      ],
      answers: [1, 2, 3, 4],
      topic: "Science",
      difficulty: "hard"
    },
    {
      id: "mc012",
      passage: "The housing affordability crisis affects major cities across Australia and many other developed nations. Rapid population growth, limited land supply in desirable locations, and favourable tax treatment for property investors have contributed to house prices rising far faster than wages. This trend has significant social consequences: younger generations are increasingly unable to enter the property market, and rising rents consume a growing share of household income. Some economists advocate for increased public housing construction and changes to negative gearing policies, while others argue that relaxing planning regulations to increase housing supply would be more effective. The COVID-19 pandemic briefly disrupted the market but prices quickly recovered and, in many cities, reached new highs.",
      question: "Which factors or consequences of the housing affordability crisis are mentioned in the passage?",
      options: [
        "House prices have risen faster than wages.",
        "Tax policies have contributed to rising property prices.",
        "Younger generations struggle to enter the property market.",
        "The COVID-19 pandemic permanently reduced housing prices.",
        "Rising rents take up a larger share of household income."
      ],
      answers: [0, 1, 2, 4],
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "mc013",
      passage: "Artificial intelligence is increasingly being deployed in the criminal justice system, from predictive policing algorithms to risk assessment tools used in sentencing decisions. Proponents argue that these technologies can improve efficiency and reduce human bias in decision-making. However, multiple studies have found that AI systems can perpetuate and even amplify existing racial and socioeconomic biases present in the training data. The lack of transparency in many algorithmic systems, often described as the 'black box' problem, makes it difficult to challenge decisions made by AI. Civil liberties organisations have called for strict regulation, independent auditing and greater transparency in the use of AI within the justice system.",
      question: "According to the passage, which of the following concerns about AI in criminal justice are identified?",
      options: [
        "AI systems may perpetuate existing biases.",
        "AI always produces fairer outcomes than human judges.",
        "The 'black box' problem limits transparency.",
        "Civil liberties groups have demanded regulation and auditing.",
        "AI is used in both policing and sentencing contexts."
      ],
      answers: [0, 2, 3, 4],
      topic: "Technology",
      difficulty: "hard"
    },
    {
      id: "mc014",
      passage: "Physical inactivity has been identified as the fourth leading risk factor for global mortality, contributing to approximately 3.2 million deaths annually. Sedentary behaviour increases the risk of heart disease, type 2 diabetes, certain cancers and musculoskeletal disorders. The World Health Organisation recommends that adults engage in at least 150 minutes of moderate-intensity physical activity per week. Despite widespread awareness of these guidelines, a large proportion of the global population remains insufficiently active. Workplace wellness programmes, active transport infrastructure and school-based physical education initiatives are among the strategies recommended to increase population-level physical activity.",
      question: "Which of the following are stated or implied in the passage?",
      options: [
        "Physical inactivity contributes to millions of deaths each year.",
        "Sedentary behaviour is linked to an increased risk of certain cancers.",
        "Most of the global population meets WHO physical activity guidelines.",
        "Workplace wellness programmes may help increase activity levels.",
        "The WHO recommends at least 150 minutes of moderate activity weekly."
      ],
      answers: [0, 1, 3, 4],
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "mc015",
      passage: "The rise of nationalism and populism in many democracies has raised concerns about the stability of the post-war international order. Populist leaders have challenged multilateral institutions such as the United Nations and the European Union, advocating instead for national sovereignty and protectionist economic policies. Immigration has become a particularly divisive issue, with populist movements often framing it as a threat to national identity and economic security. Political scientists note that populism tends to flourish during periods of economic disruption and social change, when established institutions appear unable to address citizens' concerns. The long-term consequences of this trend for democratic governance and international cooperation remain uncertain.",
      question: "Which of the following are described in the passage as features or effects of populism?",
      options: [
        "Challenges to multilateral institutions.",
        "Advocacy for protectionist economic policies.",
        "Strengthening of international cooperation.",
        "Using immigration as a politically divisive issue.",
        "Tendency to emerge during economic disruption."
      ],
      answers: [0, 1, 3, 4],
      topic: "Society",
      difficulty: "hard"
    },
    {
      id: "mc016",
      passage: "Biodiversity loss is occurring at a rate unprecedented in human history, with current extinction rates estimated to be between one hundred and one thousand times higher than the natural background rate. Habitat destruction, driven primarily by agricultural expansion, is the single greatest threat to species worldwide. Climate change, pollution and the introduction of invasive species also contribute significantly to biodiversity decline. The Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services has warned that approximately one million species are currently at risk of extinction. Conservation strategies, including the establishment of protected areas, habitat restoration and international agreements such as the Convention on Biological Diversity, aim to halt and reverse this trend.",
      question: "According to the passage, which of the following are accurate statements about biodiversity loss?",
      options: [
        "Current extinction rates far exceed the natural background rate.",
        "Agricultural expansion is the primary driver of habitat destruction.",
        "Approximately one million species face extinction risk.",
        "Conservation efforts have successfully reversed biodiversity decline.",
        "Invasive species contribute to the loss of biodiversity."
      ],
      answers: [0, 1, 2, 4],
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "mc017",
      passage: "The STEM skills shortage in many developed nations has prompted governments to invest heavily in science, technology, engineering and mathematics education. In Australia, federal and state programmes aim to increase participation in STEM subjects, particularly among girls and students from disadvantaged backgrounds. Industry partnerships with schools and universities help to ensure that curricula remain relevant to workforce needs. Despite these initiatives, research indicates that student interest in STEM subjects often declines during the middle years of secondary schooling. Engaging pedagogies, hands-on learning experiences and positive role models have been identified as key factors in sustaining student motivation in STEM.",
      question: "Which of the following are mentioned in the passage regarding STEM education?",
      options: [
        "Governments have invested in increasing STEM participation.",
        "Student interest in STEM tends to decline in middle secondary school.",
        "Girls and disadvantaged students are specific targets of participation programmes.",
        "All Australian students are now highly engaged in STEM subjects.",
        "Industry partnerships help align curricula with workforce needs."
      ],
      answers: [0, 1, 2, 4],
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "mc018",
      passage: "The development of mRNA vaccine technology, which gained global attention during the COVID-19 pandemic, represents a breakthrough in immunology. Unlike traditional vaccines, which use weakened or inactivated pathogens, mRNA vaccines instruct cells to produce a protein that triggers an immune response. This approach allows for faster vaccine development, as the manufacturing process can be adapted rapidly to target new variants or entirely different diseases. Researchers are now exploring mRNA technology for potential vaccines against influenza, malaria, HIV and various cancers. Clinical trials are underway, though significant challenges remain in ensuring stability, distribution and equitable global access to these advanced therapies.",
      question: "Based on the passage, which statements about mRNA vaccine technology are correct?",
      options: [
        "It instructs cells to produce proteins that trigger immune responses.",
        "It uses weakened pathogens like traditional vaccines.",
        "It allows for faster vaccine development and adaptation.",
        "Researchers are investigating its use against cancer.",
        "Equitable global access remains a challenge."
      ],
      answers: [0, 2, 3, 4],
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "mc019",
      passage: "The platform economy, dominated by a small number of technology giants, has raised significant antitrust concerns worldwide. Companies such as those operating major search engines, social media networks and e-commerce marketplaces wield enormous market power, enabling them to set terms for millions of businesses and billions of consumers. Critics argue that these firms engage in anti-competitive practices, including acquiring potential rivals, preferencing their own products in search results and using vast data advantages to maintain dominance. Regulatory bodies in the European Union, the United States and Australia have launched investigations and, in some cases, imposed substantial fines. The debate over whether existing competition law is adequate to address the unique challenges posed by digital platforms continues.",
      question: "Which of the following concerns about the platform economy are raised in the passage?",
      options: [
        "A small number of companies hold enormous market power.",
        "Acquisition of potential competitors is identified as anti-competitive.",
        "Digital platforms have strengthened traditional small businesses.",
        "Regulators in multiple jurisdictions have taken action.",
        "There is debate about whether current competition law is sufficient."
      ],
      answers: [0, 1, 3, 4],
      topic: "Economics",
      difficulty: "hard"
    },
    {
      id: "mc020",
      passage: "Urban green spaces, including parks, gardens and urban forests, provide a wide range of benefits to city residents. Research has demonstrated that access to green spaces is associated with reduced levels of stress, anxiety and depression. These areas also contribute to physical health by encouraging outdoor exercise and recreation. From an environmental perspective, urban vegetation helps to mitigate the heat island effect, improve air quality and support biodiversity within cities. Despite these documented benefits, urban green spaces are often unequally distributed, with wealthier neighbourhoods typically enjoying greater access than disadvantaged communities. Addressing this inequity is increasingly recognised as a matter of environmental justice.",
      question: "Which of the following benefits or issues related to urban green spaces are discussed in the passage?",
      options: [
        "Reduction in stress and mental health problems.",
        "Mitigation of the urban heat island effect.",
        "Equal distribution across all socioeconomic areas.",
        "Support for urban biodiversity.",
        "Recognition of unequal access as an environmental justice issue."
      ],
      answers: [0, 1, 3, 4],
      topic: "Society",
      difficulty: "medium"
    }
  ],

  /* ========================================================================
   * 4. MULTIPLE CHOICE SINGLE ANSWER (mcsa) - 15 exercises
   * answer = index of the single correct option (0-based)
   * ====================================================================== */
  mcsa: [
    {
      id: "ms001",
      passage: "The invention of the printing press by Johannes Gutenberg in the mid-fifteenth century is widely regarded as one of the most transformative events in human history. Before its development, books were painstakingly copied by hand, making them expensive and accessible only to the wealthy elite. The printing press dramatically reduced the cost of producing written materials, enabling the rapid dissemination of ideas across Europe. This technological revolution played a crucial role in the Protestant Reformation, the Scientific Revolution and the Enlightenment. By making knowledge available to a much broader audience, the printing press laid the groundwork for modern democratic societies and the concept of an informed citizenry.",
      question: "What is the main idea of the passage?",
      options: [
        "The printing press was primarily responsible for the Protestant Reformation.",
        "The printing press transformed society by making knowledge widely accessible.",
        "Gutenberg invented the printing press to reduce the cost of books.",
        "Books were only available to wealthy people before the fifteenth century."
      ],
      answer: 1,
      topic: "History",
      difficulty: "easy"
    },
    {
      id: "ms002",
      passage: "Coral bleaching occurs when corals expel the symbiotic algae living in their tissues due to environmental stress, primarily caused by elevated water temperatures. These algae, known as zooxanthellae, provide corals with up to ninety per cent of their energy through photosynthesis and give them their vibrant colours. When expelled, the coral turns white and, if conditions do not improve within a few weeks, may starve and die. Mass bleaching events have become more frequent and severe since the 1980s, correlating closely with rising global sea surface temperatures. While some corals can recover from mild bleaching if temperatures return to normal, repeated events weaken their resilience and reduce the capacity for recovery.",
      question: "According to the passage, what is the primary cause of coral bleaching?",
      options: [
        "Ocean acidification dissolving coral structures.",
        "Overfishing removing species that protect coral.",
        "Elevated water temperatures causing corals to expel symbiotic algae.",
        "Pollution from agricultural runoff entering reef ecosystems."
      ],
      answer: 2,
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "ms003",
      passage: "Metacognition, often described as 'thinking about thinking', refers to an individual's awareness and understanding of their own cognitive processes. In educational settings, students with strong metacognitive skills are better able to plan their approach to learning tasks, monitor their comprehension during study and evaluate the effectiveness of their strategies after completing an assignment. Research has consistently shown that explicit instruction in metacognitive strategies can significantly improve academic performance across subject areas and age groups. Importantly, these skills are particularly beneficial for lower-achieving students, who often lack the self-regulation strategies that higher-achieving peers employ intuitively.",
      question: "What can be inferred from the passage about metacognitive instruction?",
      options: [
        "It is only effective for students in specific subject areas.",
        "It primarily benefits already high-achieving students.",
        "It can help close the gap between lower and higher-achieving students.",
        "It replaces the need for subject-specific content instruction."
      ],
      answer: 2,
      topic: "Education",
      difficulty: "medium"
    },
    {
      id: "ms004",
      passage: "The placebo effect, in which patients experience real improvements in their condition after receiving an inert treatment, has long fascinated medical researchers. Studies have shown that placebos can produce measurable physiological changes, including the release of endorphins and alterations in brain activity. The strength of the placebo effect varies depending on factors such as the patient's expectations, the therapeutic context and even the appearance of the treatment. Some researchers argue that the placebo effect should be harnessed as a complementary tool in clinical practice, while others caution that relying on placebos could delay patients from receiving evidence-based treatments for serious conditions.",
      question: "What is the author's primary purpose in this passage?",
      options: [
        "To argue that placebos should replace conventional medical treatments.",
        "To explain the placebo effect and present differing perspectives on its use.",
        "To prove that the placebo effect is purely psychological with no physical basis.",
        "To criticise medical professionals who dismiss the placebo effect entirely."
      ],
      answer: 1,
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "ms005",
      passage: "The Industrial Revolution, which began in Britain in the late eighteenth century, fundamentally altered the economic and social structures of the Western world. The transition from agrarian economies to industrial manufacturing was driven by innovations in steam power, textile production and iron smelting. Factories drew millions of workers from rural areas to rapidly expanding cities, creating both unprecedented wealth and severe social problems, including overcrowding, pollution and exploitative labour practices. The long-term consequences of industrialisation included the rise of the middle class, the development of trade unions and eventually the establishment of modern welfare states designed to mitigate the worst excesses of industrial capitalism.",
      question: "Which statement best summarises the passage's view of the Industrial Revolution?",
      options: [
        "It was entirely beneficial, creating wealth and opportunity for all social classes.",
        "It was a destructive process that primarily harmed working-class communities.",
        "It brought both significant economic progress and serious social challenges.",
        "It was driven mainly by the desire to improve the lives of rural workers."
      ],
      answer: 2,
      topic: "History",
      difficulty: "medium"
    },
    {
      id: "ms006",
      passage: "The deep ocean, covering more than sixty per cent of the Earth's surface, remains one of the least explored environments on the planet. Advances in submersible technology and remotely operated vehicles have enabled scientists to study deep-sea ecosystems in unprecedented detail. These explorations have revealed an astonishing diversity of life forms adapted to extreme conditions, including crushing pressures, near-freezing temperatures and complete darkness. Hydrothermal vents, discovered in 1977, support thriving communities of organisms that derive energy from chemical reactions rather than sunlight, challenging fundamental assumptions about the conditions necessary for life. Deep-sea mining, however, poses a growing threat to these fragile ecosystems.",
      question: "What is the main point of the passage?",
      options: [
        "Deep-sea mining is the greatest threat facing ocean ecosystems today.",
        "Hydrothermal vents are the most important discovery in marine biology.",
        "The deep ocean harbours remarkable biodiversity that is both poorly understood and increasingly threatened.",
        "Submersible technology has made deep-sea exploration safe and routine."
      ],
      answer: 2,
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "ms007",
      passage: "Behavioural nudges, a concept popularised by economists Richard Thaler and Cass Sunstein, refer to subtle changes in the way choices are presented that can influence people's decisions without restricting their freedom. Governments worldwide have adopted nudge-based policies in areas such as retirement savings, organ donation and healthy eating. For example, making enrolment in pension schemes automatic rather than opt-in has dramatically increased savings rates in several countries. Critics argue, however, that nudges can be manipulative, particularly when used by commercial entities to encourage excessive consumption, and that they may distract from the need for more substantial structural reforms.",
      question: "According to the passage, what is a key criticism of behavioural nudges?",
      options: [
        "They have been shown to be completely ineffective in practice.",
        "They violate individual freedom by restricting available choices.",
        "They may be manipulative and divert attention from deeper structural reforms.",
        "They are too complex for governments to implement successfully."
      ],
      answer: 2,
      topic: "Economics",
      difficulty: "medium"
    },
    {
      id: "ms008",
      passage: "The Rosetta Stone, discovered by French soldiers in Egypt in 1799, proved instrumental in deciphering ancient Egyptian hieroglyphics. The stone bears the same text in three scripts: hieroglyphic, Demotic and ancient Greek. Because scholars could already read Greek, they used it as a key to unlock the meanings of the other two scripts. The breakthrough came in 1822 when Jean-Francois Champollion demonstrated that hieroglyphics represented both sounds and ideas, rather than being purely symbolic as previously assumed. This achievement opened an entirely new field of study, enabling scholars to read thousands of previously incomprehensible inscriptions and reconstruct the history, culture and beliefs of ancient Egypt.",
      question: "What was Champollion's key insight about hieroglyphics?",
      options: [
        "They were identical to the Demotic script on the Rosetta Stone.",
        "They represented both phonetic sounds and conceptual meanings.",
        "They could only be understood by comparison with ancient Greek.",
        "They were purely symbolic and had no phonetic component."
      ],
      answer: 1,
      topic: "History",
      difficulty: "medium"
    },
    {
      id: "ms009",
      passage: "The concept of herd immunity, also known as community immunity, describes the indirect protection from infectious disease that occurs when a sufficient proportion of a population becomes immune, either through vaccination or prior infection. When herd immunity is achieved, the chain of transmission is disrupted because the pathogen cannot find enough susceptible hosts to sustain its spread. The threshold for herd immunity varies by disease; measles, for example, requires approximately ninety-five per cent immunity due to its extreme contagiousness, while less transmissible diseases may require lower thresholds. Herd immunity is particularly important for protecting individuals who cannot be vaccinated, such as newborns and immunocompromised patients.",
      question: "Why does measles require a higher herd immunity threshold than many other diseases?",
      options: [
        "Because the measles vaccine is less effective than other vaccines.",
        "Because measles primarily affects immunocompromised individuals.",
        "Because measles is extremely contagious and spreads very easily.",
        "Because there is no effective treatment available for measles."
      ],
      answer: 2,
      topic: "Health",
      difficulty: "medium"
    },
    {
      id: "ms010",
      passage: "The phenomenon known as brain drain refers to the emigration of highly skilled and educated individuals from their home countries to nations offering better economic opportunities and working conditions. Developing nations are disproportionately affected, as they invest heavily in educating professionals who subsequently leave to work abroad. The healthcare sector is particularly impacted, with many countries in sub-Saharan Africa facing severe shortages of doctors and nurses who have relocated to wealthier nations. While remittances sent home by emigrant workers provide some economic benefit, they cannot compensate for the loss of human capital that is essential for national development.",
      question: "What is the author's central argument about brain drain?",
      options: [
        "Remittances fully compensate developing nations for the loss of skilled workers.",
        "Brain drain primarily affects the technology sector in developing nations.",
        "The emigration of skilled professionals undermines the development capacity of their home countries.",
        "Wealthy nations should prohibit the immigration of professionals from developing countries."
      ],
      answer: 2,
      topic: "Society",
      difficulty: "medium"
    },
    {
      id: "ms011",
      passage: "Citizen science, the involvement of non-professional volunteers in scientific research, has expanded dramatically with the proliferation of smartphones and online platforms. Projects such as bird-counting surveys, water quality monitoring and galaxy classification have engaged millions of participants worldwide, generating vast datasets that would be impossible for professional scientists to collect alone. Research has shown that, with appropriate training and quality control measures, citizen science data can be of comparable reliability to professionally collected data. Critics, however, note that participant bias and inconsistent methodology can compromise data quality in some projects, necessitating careful design and oversight.",
      question: "What does the passage suggest about the reliability of citizen science data?",
      options: [
        "It is always inferior to data collected by professional scientists.",
        "It can match professional data quality when proper training and controls are in place.",
        "It is unreliable due to inherent participant bias in all projects.",
        "It is only useful for simple observational tasks like bird counting."
      ],
      answer: 1,
      topic: "Science",
      difficulty: "medium"
    },
    {
      id: "ms012",
      passage: "The concept of food miles, which measures the distance food travels from producer to consumer, has been widely used as an indicator of environmental impact. However, recent research suggests that food miles alone provide an incomplete picture of a product's carbon footprint. The method of production, including energy use, fertiliser application and land management practices, often accounts for a far greater proportion of total emissions than transportation. For example, locally produced beef may have a significantly higher carbon footprint than vegetables shipped from overseas, due to the inherently emissions-intensive nature of livestock farming. A more comprehensive approach, known as life cycle assessment, considers all stages of production from farm to fork.",
      question: "What is the passage's main argument about food miles?",
      options: [
        "Food miles are the most accurate measure of environmental impact.",
        "Consumers should always choose locally produced food to reduce emissions.",
        "Food miles alone are an insufficient indicator of a product's true environmental impact.",
        "Life cycle assessment has proven that transportation is the primary source of food emissions."
      ],
      answer: 2,
      topic: "Environment",
      difficulty: "medium"
    },
    {
      id: "ms013",
      passage: "The growth of online learning platforms has made higher education accessible to millions of people who might otherwise have been excluded by geographic, financial or social barriers. Massive open online courses, or MOOCs, offered by prestigious universities attract hundreds of thousands of enrolments each year. Despite their popularity, completion rates for MOOCs remain remarkably low, typically ranging from five to fifteen per cent. Researchers have identified several factors contributing to this attrition, including lack of personalised support, insufficient motivation without the structure of a traditional classroom, and the perception among some learners that free courses carry less value than paid programmes.",
      question: "According to the passage, what is a significant challenge facing MOOCs?",
      options: [
        "They are only offered by a small number of universities.",
        "Their completion rates are very low due to several contributing factors.",
        "They are too expensive for most potential learners to access.",
        "They do not attract sufficient numbers of enrolments to be viable."
      ],
      answer: 1,
      topic: "Education",
      difficulty: "easy"
    },
    {
      id: "ms014",
      passage: "Central bank independence has long been considered a cornerstone of sound monetary policy. The rationale is that separating monetary decisions from political interference allows central banks to pursue long-term price stability without being swayed by short-term electoral pressures. Empirical evidence from the latter half of the twentieth century largely supports this view, showing that countries with more independent central banks experienced lower and more stable inflation rates. However, the unprecedented monetary interventions following the 2008 financial crisis and the COVID-19 pandemic have blurred the boundary between monetary and fiscal policy, reigniting debate about the appropriate scope of central bank authority and accountability.",
      question: "What does the passage identify as a recent challenge to central bank independence?",
      options: [
        "Political parties have successfully abolished central banks in several countries.",
        "Inflation has become impossible to control regardless of institutional arrangements.",
        "Extraordinary monetary interventions have blurred the line between monetary and fiscal policy.",
        "Empirical evidence no longer supports the link between independence and price stability."
      ],
      answer: 2,
      topic: "Economics",
      difficulty: "hard"
    },
    {
      id: "ms015",
      passage: "The Voyager 1 spacecraft, launched by NASA in 1977, has become the most distant human-made object in space, having crossed the boundary of the heliosphere into interstellar space in 2012. Despite being over forty-five years old, Voyager 1 continues to transmit data back to Earth using a radio transmitter with roughly the power of a refrigerator light bulb. The spacecraft's golden record, a phonograph record containing sounds and images representing life on Earth, was included as a message to any extraterrestrial civilisation that might one day encounter it. Voyager 1's extraordinary journey has provided invaluable data about the outer planets and the nature of the space between stars, far exceeding the expectations of its original mission designers.",
      question: "What can be inferred about the original expectations for Voyager 1's mission?",
      options: [
        "NASA intended the spacecraft to reach interstellar space from the outset.",
        "The mission was designed specifically to communicate with extraterrestrial life.",
        "The spacecraft's longevity and discoveries have surpassed what was initially anticipated.",
        "Voyager 1 was expected to orbit Jupiter and return data for only a few years."
      ],
      answer: 2,
      topic: "Science",
      difficulty: "medium"
    }
  ]

};
