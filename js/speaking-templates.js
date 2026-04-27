/* ═══════════════════════════════════════════════════════════════════════════════
 * PTE Speaking Templates & Repeat Sentence Practice
 * 万能模板 + 复述句子练习库
 *
 * Target: Speaking 88+ (maintain current 90)
 * Audience: Chinese-speaking teacher (bilingual explanations)
 * ES5 only — no const/let, no arrow functions, no template literals
 * Australian English spelling throughout
 * ═══════════════════════════════════════════════════════════════════════════════ */

var SPEAKING_TEMPLATES = {

  // ═══════════════════════════════════════════════════════════════════════════
  //  READ ALOUD (RA) — 朗读
  // ═══════════════════════════════════════════════════════════════════════════
  readAloud: {
    strategy: "Read Aloud contributes to both Speaking and Reading scores. You have 30-40 seconds to prepare and 40 seconds to read. During preparation: silently identify difficult words, mark natural pauses, and note content words to stress. Speak clearly at a moderate pace. Never rush. It is better to read fluently with one small error than to stumble trying to be perfect.",
    strategyCN: "朗读同时影响口语和阅读分数。你有30-40秒准备和40秒朗读。准备时：默读找出难词，标记自然停顿，标出需要重读的实词。以中等语速清晰朗读。绝不要赶。流畅地读但有一个小错误，比磕磕绊绊地追求完美要好得多。",
    tips: [
      { tip: "Read the entire passage silently during preparation time. Do NOT start reading aloud early.", tipCN: "在准备时间内默读全文。不要提前开始朗读。" },
      { tip: "Identify words you are unsure about and decide on pronunciation before you start.", tipCN: "找出你不确定的词，开始前决定好发音。" },
      { tip: "Maintain a steady pace. If you make an error, do NOT go back — continue forward smoothly.", tipCN: "保持稳定的语速。如果读错了，不要回头——继续往前流畅地读。" },
      { tip: "Use falling intonation at the end of statements and rising intonation for questions.", tipCN: "陈述句句末用降调，疑问句用升调。" },
      { tip: "Project your voice clearly. The microphone needs to pick up every word.", tipCN: "声音要清晰。麦克风需要捕捉到每一个词。" },
      { tip: "Group words into meaningful phrases — do not read word by word.", tipCN: "把词组成有意义的短语来读——不要一个词一个词地读。" }
    ],
    stressPatterns: [
      {
        pattern: "Content words (nouns, verbs, adjectives, adverbs) are stressed. Function words (the, a, is, are, to, of) are unstressed.",
        patternCN: "实词重读（名词、动词、形容词、副词），虚词轻读（the, a, is, are, to, of）",
        examples: [
          "The RAPID DEVELOPMENT of ARTIFICIAL INTELLIGENCE has FUNDAMENTALLY TRANSFORMED the way people LIVE and WORK.",
          "RECENT STUDIES SUGGEST that CLIMATE CHANGE is AFFECTING AGRICULTURAL PRODUCTION across the GLOBE.",
          "The UNIVERSITY has INTRODUCED NEW POLICIES to ADDRESS the GROWING DEMAND for ONLINE EDUCATION."
        ]
      },
      {
        pattern: "In compound nouns, stress the FIRST word. In adjective + noun combinations, stress the NOUN.",
        patternCN: "复合名词重读第一个词。形容词+名词组合重读名词。",
        examples: [
          "GREENHOUSE gas (compound noun — stress first word)",
          "green HOUSE (adjective + noun — stress noun)",
          "BLACKBOARD vs black BOARD, LAPTOP vs large SCREEN"
        ]
      },
      {
        pattern: "Contrast and new information receive extra stress.",
        patternCN: "对比信息和新信息需要额外重读。",
        examples: [
          "The study found that WOMEN were more likely than MEN to participate.",
          "While PREVIOUS research focused on adults, THIS study examines CHILDREN."
        ]
      }
    ],
    pauseRules: [
      {
        rule: "Pause at commas, after introductory phrases, and between clauses.",
        ruleCN: "在逗号处、引导短语后、从句之间停顿",
        example: "However, | recent studies suggest | that this relationship | is more complex | than previously thought."
      },
      {
        rule: "Pause before conjunctions (and, but, or) that join independent clauses.",
        ruleCN: "在连接独立从句的连词（and, but, or）前停顿",
        example: "The economy has been growing steadily, | but unemployment | remains a significant concern."
      },
      {
        rule: "Pause after long subjects before the main verb.",
        ruleCN: "在长主语之后、主要动词之前停顿",
        example: "The professor of environmental science at the university | has published | a groundbreaking study."
      },
      {
        rule: "Pause before and after parenthetical phrases.",
        ruleCN: "在插入语前后停顿",
        example: "The results, | which were published last month, | have generated significant interest."
      }
    ],
    commonDifficultWords: [
      { word: "phenomenon", phonetic: "/fɪˈnɒmɪnən/", tipCN: "注意重音在第二个音节" },
      { word: "particularly", phonetic: "/pəˈtɪkjələli/", tipCN: "四个音节，重音在第二个" },
      { word: "entrepreneurial", phonetic: "/ˌɒntrəprəˈnɜːriəl/", tipCN: "五个音节，重音在第四个" },
      { word: "simultaneously", phonetic: "/ˌsɪməlˈteɪniəsli/", tipCN: "五个音节，重音在第三个" },
      { word: "infrastructure", phonetic: "/ˈɪnfrəstrʌktʃə/", tipCN: "四个音节，重音在第一个" },
      { word: "archaeological", phonetic: "/ˌɑːkiəˈlɒdʒɪkəl/", tipCN: "六个音节，重音在第四个" },
      { word: "hierarchy", phonetic: "/ˈhaɪərɑːki/", tipCN: "三个音节，重音在第一个" },
      { word: "deterioration", phonetic: "/dɪˌtɪəriəˈreɪʃən/", tipCN: "六个音节，重音在第五个" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  REPEAT SENTENCE (RS) — 复述句子
  // ═══════════════════════════════════════════════════════════════════════════
  repeatSentence: {
    strategy: "Repeat Sentence is the HIGHEST-VALUE speaking item. It cross-scores into both Speaking AND Listening. You must develop instant memory techniques. Each sentence is 3-9 seconds long. You hear it once only and must repeat it immediately. Scoring rewards: content (keywords), pronunciation, and oral fluency. Even partial recall with good fluency scores well.",
    strategyCN: "复述句子是价值最高的口语题型。它同时影响口语和听力分数。你必须练习即时记忆技巧。每个句子3-9秒长。你只听一次，必须立即复述。评分看：内容（关键词）、发音和口语流利度。即使只记住部分内容，流利度好也能得高分。",

    chunkingGuide: {
      title: "Chunking Strategy (分块记忆法)",
      titleCN: "分块记忆法",
      steps: [
        { step: "Listen for the FIRST 3-4 words and LAST 3-4 words. These are easiest to remember.", stepCN: "记住前3-4个词和后3-4个词，这些最容易记住。" },
        { step: "For the MIDDLE, listen for key content words and reconstruct the grammar around them.", stepCN: "中间部分听关键实词，然后用语法重构。" },
        { step: "If you miss words, fill in with grammatically correct alternatives. Never leave gaps.", stepCN: "如果漏听了词，用语法正确的替代词填充。绝对不要留空白。" },
        { step: "Speak at a natural pace. Do NOT rush. Maintain smooth intonation.", stepCN: "以自然语速说。不要赶。保持流畅的语调。" },
        { step: "Start speaking IMMEDIATELY after the audio ends. Do not wait or hesitate.", stepCN: "音频结束后立即开始说。不要等待或犹豫。" }
      ],
      memoryTechniques: [
        { technique: "Shadow the speaker mentally as they talk — form the words in your mouth silently", techniqueCN: "默默跟读——在心里同步形成每个词" },
        { technique: "Visualise the scene the sentence describes", techniqueCN: "在脑海中想象句子描述的场景" },
        { technique: "Group words by meaning: WHO did WHAT WHERE WHEN", techniqueCN: "按意义分组：谁+做了什么+在哪里+什么时候" },
        { technique: "Use your short-term phonological loop — repeat the sounds, not the meaning", techniqueCN: "利用短时语音环——复述声音，而不是意义" },
        { technique: "For numbers and proper nouns, write them down quickly on your erasable board", techniqueCN: "对于数字和专有名词，快速写在可擦写板上" }
      ]
    },

    difficultyProgression: [
      {
        level: "Level 1: Short (5-7 words)",
        levelCN: "第一级：短句（5-7个词）",
        examples: [
          "The library opens at nine.",
          "Students must submit their assignments online.",
          "The lecture has been cancelled today.",
          "Please bring your textbook to class.",
          "The exam results will be posted Friday."
        ]
      },
      {
        level: "Level 2: Medium (8-10 words)",
        levelCN: "第二级：中等（8-10个词）",
        examples: [
          "The assignment is due at the end of this week.",
          "International students should attend the orientation session on Monday.",
          "The research findings were published in a leading scientific journal.",
          "Climate change has significantly affected agricultural production in many regions.",
          "The new campus building will be completed by the end of next year."
        ]
      },
      {
        level: "Level 3: Long (11-14 words)",
        levelCN: "第三级：长句（11-14个词）",
        examples: [
          "The professor explained that the theory was developed in the nineteenth century.",
          "Students who have not registered for the course will not be able to attend lectures.",
          "The government has introduced new policies to address the housing affordability crisis in major cities.",
          "Research shows that regular physical exercise can significantly reduce the risk of developing chronic diseases.",
          "The university has established partnerships with several international institutions to promote academic collaboration."
        ]
      }
    ],

    // ═══════════════════════════════════════════════════════════════════════
    //  200 REPEAT SENTENCE PRACTICE ITEMS
    //  Distribution: 50 easy (5-7 words) | 80 medium (8-10 words) | 70 hard (11-14 words)
    // ═══════════════════════════════════════════════════════════════════════
    practiceBank: [
      // ─────────────────────────────────────────────────────────────────────
      //  EASY — 50 sentences (5-7 words) — rsp001 to rsp050
      // ─────────────────────────────────────────────────────────────────────
      { id: "rsp001", text: "The library closes at ten tonight.", wordCount: 6, difficulty: "easy", chunks: "The library | closes at | ten tonight", topic: "campus" },
      { id: "rsp002", text: "Please submit your essay by Friday.", wordCount: 6, difficulty: "easy", chunks: "Please submit | your essay | by Friday", topic: "campus" },
      { id: "rsp003", text: "The seminar begins at two o'clock.", wordCount: 6, difficulty: "easy", chunks: "The seminar | begins at | two o'clock", topic: "campus" },
      { id: "rsp004", text: "Water boils at one hundred degrees.", wordCount: 6, difficulty: "easy", chunks: "Water boils | at one hundred | degrees", topic: "science" },
      { id: "rsp005", text: "The test results are available online.", wordCount: 6, difficulty: "easy", chunks: "The test results | are available | online", topic: "campus" },
      { id: "rsp006", text: "Regular exercise improves mental health significantly.", wordCount: 5, difficulty: "easy", chunks: "Regular exercise | improves | mental health significantly", topic: "health" },
      { id: "rsp007", text: "The lecture hall is on the ground floor.", wordCount: 8, difficulty: "easy", chunks: "The lecture hall | is on | the ground floor", topic: "campus" },
      { id: "rsp008", text: "Students can borrow up to ten books.", wordCount: 7, difficulty: "easy", chunks: "Students can borrow | up to | ten books", topic: "campus" },
      { id: "rsp009", text: "The deadline has been extended by a week.", wordCount: 8, difficulty: "easy", chunks: "The deadline | has been extended | by a week", topic: "campus" },
      { id: "rsp010", text: "Recycling reduces waste in landfill sites.", wordCount: 6, difficulty: "easy", chunks: "Recycling reduces | waste in | landfill sites", topic: "environment" },
      { id: "rsp011", text: "The tutorial is optional this semester.", wordCount: 6, difficulty: "easy", chunks: "The tutorial | is optional | this semester", topic: "campus" },
      { id: "rsp012", text: "Antibiotics cannot treat viral infections.", wordCount: 5, difficulty: "easy", chunks: "Antibiotics | cannot treat | viral infections", topic: "health" },
      { id: "rsp013", text: "The professor cancelled the morning lecture.", wordCount: 6, difficulty: "easy", chunks: "The professor | cancelled | the morning lecture", topic: "campus" },
      { id: "rsp014", text: "Solar energy is a renewable resource.", wordCount: 6, difficulty: "easy", chunks: "Solar energy | is a | renewable resource", topic: "environment" },
      { id: "rsp015", text: "The campus bookshop closes at five.", wordCount: 6, difficulty: "easy", chunks: "The campus bookshop | closes | at five", topic: "campus" },
      { id: "rsp016", text: "Inflation affects the cost of living.", wordCount: 6, difficulty: "easy", chunks: "Inflation affects | the cost | of living", topic: "economics" },
      { id: "rsp017", text: "The experiment confirmed the initial hypothesis.", wordCount: 6, difficulty: "easy", chunks: "The experiment | confirmed | the initial hypothesis", topic: "science" },
      { id: "rsp018", text: "Global temperatures are rising steadily.", wordCount: 5, difficulty: "easy", chunks: "Global temperatures | are rising | steadily", topic: "environment" },
      { id: "rsp019", text: "The assignment must be typed double-spaced.", wordCount: 6, difficulty: "easy", chunks: "The assignment | must be typed | double-spaced", topic: "campus" },
      { id: "rsp020", text: "Vaccination prevents the spread of disease.", wordCount: 6, difficulty: "easy", chunks: "Vaccination prevents | the spread | of disease", topic: "health" },
      { id: "rsp021", text: "The museum opens daily except Mondays.", wordCount: 6, difficulty: "easy", chunks: "The museum | opens daily | except Mondays", topic: "society" },
      { id: "rsp022", text: "Students must register before classes begin.", wordCount: 6, difficulty: "easy", chunks: "Students must register | before | classes begin", topic: "campus" },
      { id: "rsp023", text: "The internet has transformed modern communication.", wordCount: 6, difficulty: "easy", chunks: "The internet | has transformed | modern communication", topic: "technology" },
      { id: "rsp024", text: "The exam covers chapters one through eight.", wordCount: 7, difficulty: "easy", chunks: "The exam covers | chapters one | through eight", topic: "campus" },
      { id: "rsp025", text: "Deforestation threatens biodiversity in tropical regions.", wordCount: 6, difficulty: "easy", chunks: "Deforestation threatens | biodiversity | in tropical regions", topic: "environment" },
      { id: "rsp026", text: "The Industrial Revolution began in Britain.", wordCount: 6, difficulty: "easy", chunks: "The Industrial Revolution | began | in Britain", topic: "history" },
      { id: "rsp027", text: "Breakfast is the most important meal.", wordCount: 6, difficulty: "easy", chunks: "Breakfast is | the most important | meal", topic: "health" },
      { id: "rsp028", text: "The scholarship application is due tomorrow.", wordCount: 6, difficulty: "easy", chunks: "The scholarship application | is due | tomorrow", topic: "campus" },
      { id: "rsp029", text: "Unemployment rates vary across different countries.", wordCount: 6, difficulty: "easy", chunks: "Unemployment rates | vary across | different countries", topic: "economics" },
      { id: "rsp030", text: "The printer on level three is broken.", wordCount: 7, difficulty: "easy", chunks: "The printer | on level three | is broken", topic: "campus" },
      { id: "rsp031", text: "Plants convert sunlight into chemical energy.", wordCount: 6, difficulty: "easy", chunks: "Plants convert | sunlight into | chemical energy", topic: "science" },
      { id: "rsp032", text: "Online learning has become increasingly popular.", wordCount: 6, difficulty: "easy", chunks: "Online learning | has become | increasingly popular", topic: "education" },
      { id: "rsp033", text: "The parking lot is behind the library.", wordCount: 7, difficulty: "easy", chunks: "The parking lot | is behind | the library", topic: "campus" },
      { id: "rsp034", text: "Supply and demand determine market prices.", wordCount: 6, difficulty: "easy", chunks: "Supply and demand | determine | market prices", topic: "economics" },
      { id: "rsp035", text: "The lab report is due next Wednesday.", wordCount: 7, difficulty: "easy", chunks: "The lab report | is due | next Wednesday", topic: "campus" },
      { id: "rsp036", text: "Coral reefs are declining around the world.", wordCount: 7, difficulty: "easy", chunks: "Coral reefs | are declining | around the world", topic: "environment" },
      { id: "rsp037", text: "The conference starts at nine o'clock sharp.", wordCount: 7, difficulty: "easy", chunks: "The conference | starts at | nine o'clock sharp", topic: "campus" },
      { id: "rsp038", text: "Literacy rates have improved dramatically worldwide.", wordCount: 6, difficulty: "easy", chunks: "Literacy rates | have improved | dramatically worldwide", topic: "education" },
      { id: "rsp039", text: "The cafeteria serves lunch until two.", wordCount: 6, difficulty: "easy", chunks: "The cafeteria | serves lunch | until two", topic: "campus" },
      { id: "rsp040", text: "Smoking is a leading cause of cancer.", wordCount: 7, difficulty: "easy", chunks: "Smoking is | a leading cause | of cancer", topic: "health" },
      { id: "rsp041", text: "The textbook is available at the bookshop.", wordCount: 7, difficulty: "easy", chunks: "The textbook | is available | at the bookshop", topic: "campus" },
      { id: "rsp042", text: "Artificial intelligence is rapidly advancing technology.", wordCount: 6, difficulty: "easy", chunks: "Artificial intelligence | is rapidly | advancing technology", topic: "technology" },
      { id: "rsp043", text: "The Great Wall was built over centuries.", wordCount: 7, difficulty: "easy", chunks: "The Great Wall | was built | over centuries", topic: "history" },
      { id: "rsp044", text: "Poverty remains a global challenge today.", wordCount: 6, difficulty: "easy", chunks: "Poverty remains | a global challenge | today", topic: "society" },
      { id: "rsp045", text: "The group project requires five members.", wordCount: 6, difficulty: "easy", chunks: "The group project | requires | five members", topic: "campus" },
      { id: "rsp046", text: "Electric vehicles produce zero direct emissions.", wordCount: 6, difficulty: "easy", chunks: "Electric vehicles | produce | zero direct emissions", topic: "technology" },
      { id: "rsp047", text: "The lecture notes are posted on Blackboard.", wordCount: 7, difficulty: "easy", chunks: "The lecture notes | are posted | on Blackboard", topic: "campus" },
      { id: "rsp048", text: "Fresh water makes up three per cent.", wordCount: 7, difficulty: "easy", chunks: "Fresh water | makes up | three per cent", topic: "environment" },
      { id: "rsp049", text: "The essay should include a reference list.", wordCount: 7, difficulty: "easy", chunks: "The essay | should include | a reference list", topic: "campus" },
      { id: "rsp050", text: "Sleep deprivation affects cognitive performance badly.", wordCount: 6, difficulty: "easy", chunks: "Sleep deprivation | affects | cognitive performance badly", topic: "health" },

      // ─────────────────────────────────────────────────────────────────────
      //  MEDIUM — 80 sentences (8-10 words) — rsp051 to rsp130
      // ─────────────────────────────────────────────────────────────────────
      { id: "rsp051", text: "The assignment is due at the end of this week.", wordCount: 10, difficulty: "medium", chunks: "The assignment is due | at the end | of this week", topic: "campus" },
      { id: "rsp052", text: "International students should attend the orientation session on Monday.", wordCount: 8, difficulty: "medium", chunks: "International students | should attend | the orientation session on Monday", topic: "campus" },
      { id: "rsp053", text: "The research findings were published in a leading journal.", wordCount: 9, difficulty: "medium", chunks: "The research findings | were published | in a leading journal", topic: "science" },
      { id: "rsp054", text: "Climate change has significantly affected agricultural production in many regions.", wordCount: 9, difficulty: "medium", chunks: "Climate change | has significantly affected | agricultural production in many regions", topic: "environment" },
      { id: "rsp055", text: "The new campus building will be completed next year.", wordCount: 9, difficulty: "medium", chunks: "The new campus building | will be completed | next year", topic: "campus" },
      { id: "rsp056", text: "Students are required to submit a written proposal first.", wordCount: 9, difficulty: "medium", chunks: "Students are required | to submit | a written proposal first", topic: "campus" },
      { id: "rsp057", text: "The population of the world continues to grow rapidly.", wordCount: 9, difficulty: "medium", chunks: "The population of the world | continues to grow | rapidly", topic: "society" },
      { id: "rsp058", text: "Renewable energy sources are becoming more cost effective over time.", wordCount: 9, difficulty: "medium", chunks: "Renewable energy sources | are becoming | more cost effective over time", topic: "environment" },
      { id: "rsp059", text: "The tutorial group meets every Thursday at three o'clock.", wordCount: 8, difficulty: "medium", chunks: "The tutorial group | meets every Thursday | at three o'clock", topic: "campus" },
      { id: "rsp060", text: "The central bank raised interest rates for the third time.", wordCount: 10, difficulty: "medium", chunks: "The central bank | raised interest rates | for the third time", topic: "economics" },
      { id: "rsp061", text: "Peer review is an essential part of academic publishing.", wordCount: 9, difficulty: "medium", chunks: "Peer review is | an essential part | of academic publishing", topic: "education" },
      { id: "rsp062", text: "The laboratory equipment must be handled with extreme care.", wordCount: 9, difficulty: "medium", chunks: "The laboratory equipment | must be handled | with extreme care", topic: "science" },
      { id: "rsp063", text: "Access to clean drinking water remains a serious global issue.", wordCount: 10, difficulty: "medium", chunks: "Access to clean drinking water | remains | a serious global issue", topic: "society" },
      { id: "rsp064", text: "The documentary explored the impact of technology on employment.", wordCount: 9, difficulty: "medium", chunks: "The documentary explored | the impact of technology | on employment", topic: "technology" },
      { id: "rsp065", text: "Critical thinking skills are developed through practice and reflection.", wordCount: 9, difficulty: "medium", chunks: "Critical thinking skills | are developed through | practice and reflection", topic: "education" },
      { id: "rsp066", text: "The survey results indicate a shift in public opinion.", wordCount: 9, difficulty: "medium", chunks: "The survey results | indicate a shift | in public opinion", topic: "society" },
      { id: "rsp067", text: "Greenhouse gas emissions have reached an all-time high this year.", wordCount: 10, difficulty: "medium", chunks: "Greenhouse gas emissions | have reached | an all-time high this year", topic: "environment" },
      { id: "rsp068", text: "The health system is under increasing pressure from an ageing population.", wordCount: 10, difficulty: "medium", chunks: "The health system is | under increasing pressure | from an ageing population", topic: "health" },
      { id: "rsp069", text: "The student union organises social events throughout the semester.", wordCount: 8, difficulty: "medium", chunks: "The student union | organises social events | throughout the semester", topic: "campus" },
      { id: "rsp070", text: "Biodiversity loss is one of the greatest environmental threats.", wordCount: 9, difficulty: "medium", chunks: "Biodiversity loss is | one of the greatest | environmental threats", topic: "environment" },
      { id: "rsp071", text: "The lecturer recommended several additional readings for the course.", wordCount: 8, difficulty: "medium", chunks: "The lecturer recommended | several additional readings | for the course", topic: "campus" },
      { id: "rsp072", text: "Automation has fundamentally changed the nature of many jobs.", wordCount: 9, difficulty: "medium", chunks: "Automation has fundamentally | changed the nature | of many jobs", topic: "technology" },
      { id: "rsp073", text: "The thesis must be submitted electronically by the due date.", wordCount: 10, difficulty: "medium", chunks: "The thesis must | be submitted electronically | by the due date", topic: "campus" },
      { id: "rsp074", text: "Early childhood education plays a crucial role in development.", wordCount: 9, difficulty: "medium", chunks: "Early childhood education | plays a crucial role | in development", topic: "education" },
      { id: "rsp075", text: "The Roman Empire collapsed in the fifth century.", wordCount: 8, difficulty: "medium", chunks: "The Roman Empire | collapsed | in the fifth century", topic: "history" },
      { id: "rsp076", text: "Public transport usage has increased in major Australian cities.", wordCount: 9, difficulty: "medium", chunks: "Public transport usage | has increased | in major Australian cities", topic: "society" },
      { id: "rsp077", text: "The experiment was conducted under strictly controlled laboratory conditions.", wordCount: 8, difficulty: "medium", chunks: "The experiment was conducted | under strictly controlled | laboratory conditions", topic: "science" },
      { id: "rsp078", text: "Digital literacy is now considered a fundamental skill.", wordCount: 8, difficulty: "medium", chunks: "Digital literacy | is now considered | a fundamental skill", topic: "technology" },
      { id: "rsp079", text: "The government has allocated additional funding for public healthcare.", wordCount: 8, difficulty: "medium", chunks: "The government has allocated | additional funding | for public healthcare", topic: "health" },
      { id: "rsp080", text: "Students should cite all sources used in their research papers.", wordCount: 9, difficulty: "medium", chunks: "Students should cite | all sources used | in their research papers", topic: "campus" },
      { id: "rsp081", text: "The stock market experienced significant volatility last quarter.", wordCount: 8, difficulty: "medium", chunks: "The stock market | experienced significant volatility | last quarter", topic: "economics" },
      { id: "rsp082", text: "Archaeological evidence suggests the site was occupied for centuries.", wordCount: 8, difficulty: "medium", chunks: "Archaeological evidence suggests | the site was occupied | for centuries", topic: "history" },
      { id: "rsp083", text: "Obesity rates among children have doubled in the past decade.", wordCount: 10, difficulty: "medium", chunks: "Obesity rates among children | have doubled | in the past decade", topic: "health" },
      { id: "rsp084", text: "The course requires a minimum of eighty per cent attendance.", wordCount: 9, difficulty: "medium", chunks: "The course requires | a minimum of | eighty per cent attendance", topic: "campus" },
      { id: "rsp085", text: "Wind farms are a growing source of electricity in Australia.", wordCount: 10, difficulty: "medium", chunks: "Wind farms are | a growing source of electricity | in Australia", topic: "environment" },
      { id: "rsp086", text: "The printing press revolutionised the spread of information in Europe.", wordCount: 9, difficulty: "medium", chunks: "The printing press | revolutionised the spread | of information in Europe", topic: "history" },
      { id: "rsp087", text: "The university provides free counselling services for all students.", wordCount: 8, difficulty: "medium", chunks: "The university provides | free counselling services | for all students", topic: "campus" },
      { id: "rsp088", text: "Globalisation has created both opportunities and challenges for developing nations.", wordCount: 9, difficulty: "medium", chunks: "Globalisation has created | both opportunities and challenges | for developing nations", topic: "economics" },
      { id: "rsp089", text: "The research grant was awarded to the biology department.", wordCount: 9, difficulty: "medium", chunks: "The research grant | was awarded to | the biology department", topic: "campus" },
      { id: "rsp090", text: "Exposure to secondhand smoke increases the risk of lung disease.", wordCount: 10, difficulty: "medium", chunks: "Exposure to secondhand smoke | increases the risk | of lung disease", topic: "health" },
      { id: "rsp091", text: "The assessment criteria are outlined in the course handbook.", wordCount: 8, difficulty: "medium", chunks: "The assessment criteria | are outlined | in the course handbook", topic: "campus" },
      { id: "rsp092", text: "Ocean acidification is a direct consequence of carbon dioxide emissions.", wordCount: 9, difficulty: "medium", chunks: "Ocean acidification is | a direct consequence | of carbon dioxide emissions", topic: "environment" },
      { id: "rsp093", text: "The philosopher argued that knowledge is based on experience.", wordCount: 9, difficulty: "medium", chunks: "The philosopher argued | that knowledge is based | on experience", topic: "education" },
      { id: "rsp094", text: "Robots are increasingly being used in manufacturing and healthcare.", wordCount: 9, difficulty: "medium", chunks: "Robots are increasingly | being used in | manufacturing and healthcare", topic: "technology" },
      { id: "rsp095", text: "The GDP of the country grew by three per cent.", wordCount: 10, difficulty: "medium", chunks: "The GDP of the country | grew by | three per cent", topic: "economics" },
      { id: "rsp096", text: "The library database provides access to thousands of academic journals.", wordCount: 9, difficulty: "medium", chunks: "The library database | provides access to | thousands of academic journals", topic: "campus" },
      { id: "rsp097", text: "Malaria remains one of the deadliest diseases in tropical regions.", wordCount: 10, difficulty: "medium", chunks: "Malaria remains | one of the deadliest diseases | in tropical regions", topic: "health" },
      { id: "rsp098", text: "The French Revolution fundamentally altered European political structures.", wordCount: 8, difficulty: "medium", chunks: "The French Revolution | fundamentally altered | European political structures", topic: "history" },
      { id: "rsp099", text: "Social media has changed the way people consume news information.", wordCount: 10, difficulty: "medium", chunks: "Social media has changed | the way people consume | news information", topic: "technology" },
      { id: "rsp100", text: "The dissertation committee will meet to review your progress.", wordCount: 9, difficulty: "medium", chunks: "The dissertation committee | will meet to review | your progress", topic: "campus" },
      { id: "rsp101", text: "Urbanisation is one of the defining trends of modern society.", wordCount: 10, difficulty: "medium", chunks: "Urbanisation is | one of the defining trends | of modern society", topic: "society" },
      { id: "rsp102", text: "The periodic table organises elements by their atomic number.", wordCount: 8, difficulty: "medium", chunks: "The periodic table | organises elements | by their atomic number", topic: "science" },
      { id: "rsp103", text: "Developing countries face unique challenges in providing quality education.", wordCount: 8, difficulty: "medium", chunks: "Developing countries | face unique challenges | in providing quality education", topic: "education" },
      { id: "rsp104", text: "The data was collected through a series of structured interviews.", wordCount: 9, difficulty: "medium", chunks: "The data was collected | through a series | of structured interviews", topic: "science" },
      { id: "rsp105", text: "Trade agreements between nations promote economic growth and stability.", wordCount: 8, difficulty: "medium", chunks: "Trade agreements between nations | promote | economic growth and stability", topic: "economics" },
      { id: "rsp106", text: "The ozone layer protects life on Earth from ultraviolet radiation.", wordCount: 10, difficulty: "medium", chunks: "The ozone layer | protects life on Earth | from ultraviolet radiation", topic: "environment" },
      { id: "rsp107", text: "Mental health awareness has increased significantly in recent years.", wordCount: 8, difficulty: "medium", chunks: "Mental health awareness | has increased significantly | in recent years", topic: "health" },
      { id: "rsp108", text: "The guest lecturer will speak about sustainable urban planning.", wordCount: 8, difficulty: "medium", chunks: "The guest lecturer | will speak about | sustainable urban planning", topic: "campus" },
      { id: "rsp109", text: "Quantum computing has the potential to solve complex problems.", wordCount: 9, difficulty: "medium", chunks: "Quantum computing | has the potential | to solve complex problems", topic: "technology" },
      { id: "rsp110", text: "The ancient Egyptians built the pyramids over four thousand years ago.", wordCount: 10, difficulty: "medium", chunks: "The ancient Egyptians | built the pyramids | over four thousand years ago", topic: "history" },
      { id: "rsp111", text: "Higher education enrolment has increased across all demographic groups.", wordCount: 8, difficulty: "medium", chunks: "Higher education enrolment | has increased | across all demographic groups", topic: "education" },
      { id: "rsp112", text: "The sample size was too small to draw definitive conclusions.", wordCount: 10, difficulty: "medium", chunks: "The sample size was | too small to draw | definitive conclusions", topic: "science" },
      { id: "rsp113", text: "Income inequality has widened in many developed nations recently.", wordCount: 8, difficulty: "medium", chunks: "Income inequality | has widened | in many developed nations recently", topic: "economics" },
      { id: "rsp114", text: "Plastic pollution poses a serious threat to marine ecosystems.", wordCount: 9, difficulty: "medium", chunks: "Plastic pollution poses | a serious threat | to marine ecosystems", topic: "environment" },
      { id: "rsp115", text: "The student orientation programme runs for the first two weeks.", wordCount: 9, difficulty: "medium", chunks: "The student orientation programme | runs for | the first two weeks", topic: "campus" },
      { id: "rsp116", text: "Antibiotic resistance is a growing concern in modern medicine.", wordCount: 9, difficulty: "medium", chunks: "Antibiotic resistance is | a growing concern | in modern medicine", topic: "health" },
      { id: "rsp117", text: "The discovery of penicillin transformed the treatment of bacterial infections.", wordCount: 9, difficulty: "medium", chunks: "The discovery of penicillin | transformed the treatment | of bacterial infections", topic: "science" },
      { id: "rsp118", text: "Cultural diversity enriches society and promotes greater understanding between groups.", wordCount: 9, difficulty: "medium", chunks: "Cultural diversity enriches society | and promotes | greater understanding between groups", topic: "society" },
      { id: "rsp119", text: "Students should check the timetable for any changes to room allocations.", wordCount: 10, difficulty: "medium", chunks: "Students should check | the timetable for | any changes to room allocations", topic: "campus" },
      { id: "rsp120", text: "Drought conditions are worsening in many parts of the continent.", wordCount: 10, difficulty: "medium", chunks: "Drought conditions | are worsening | in many parts of the continent", topic: "environment" },
      { id: "rsp121", text: "Blockchain technology is disrupting traditional financial systems worldwide.", wordCount: 8, difficulty: "medium", chunks: "Blockchain technology | is disrupting | traditional financial systems worldwide", topic: "technology" },
      { id: "rsp122", text: "The Cold War shaped international relations for nearly five decades.", wordCount: 9, difficulty: "medium", chunks: "The Cold War shaped | international relations | for nearly five decades", topic: "history" },
      { id: "rsp123", text: "Teachers play a vital role in shaping future generations.", wordCount: 9, difficulty: "medium", chunks: "Teachers play | a vital role | in shaping future generations", topic: "education" },
      { id: "rsp124", text: "Consumer spending accounts for a large share of economic activity.", wordCount: 10, difficulty: "medium", chunks: "Consumer spending accounts | for a large share | of economic activity", topic: "economics" },
      { id: "rsp125", text: "The campus clinic provides free health checks for students.", wordCount: 8, difficulty: "medium", chunks: "The campus clinic | provides free health checks | for students", topic: "campus" },
      { id: "rsp126", text: "Genetic engineering has opened new possibilities in agriculture and medicine.", wordCount: 9, difficulty: "medium", chunks: "Genetic engineering | has opened new possibilities | in agriculture and medicine", topic: "science" },
      { id: "rsp127", text: "Volunteering helps develop transferable skills and community connections.", wordCount: 8, difficulty: "medium", chunks: "Volunteering helps develop | transferable skills | and community connections", topic: "society" },
      { id: "rsp128", text: "The final examination will cover all topics from this semester.", wordCount: 9, difficulty: "medium", chunks: "The final examination | will cover all topics | from this semester", topic: "campus" },
      { id: "rsp129", text: "Dehydration can lead to headaches and reduced concentration levels.", wordCount: 8, difficulty: "medium", chunks: "Dehydration can lead to | headaches and | reduced concentration levels", topic: "health" },
      { id: "rsp130", text: "The Renaissance marked a rebirth of art and learning in Europe.", wordCount: 10, difficulty: "medium", chunks: "The Renaissance marked | a rebirth of art and learning | in Europe", topic: "history" },

      // ─────────────────────────────────────────────────────────────────────
      //  HARD — 70 sentences (11-14 words) — rsp131 to rsp200
      // ─────────────────────────────────────────────────────────────────────
      { id: "rsp131", text: "The professor explained that the theory was developed in the late nineteenth century.", wordCount: 13, difficulty: "hard", chunks: "The professor explained | that the theory was developed | in the late nineteenth century", topic: "education" },
      { id: "rsp132", text: "Students who have not registered for the course will not be permitted to attend.", wordCount: 14, difficulty: "hard", chunks: "Students who have not registered | for the course | will not be permitted to attend", topic: "campus" },
      { id: "rsp133", text: "The government has introduced new policies to address the housing affordability crisis.", wordCount: 12, difficulty: "hard", chunks: "The government has introduced | new policies to address | the housing affordability crisis", topic: "economics" },
      { id: "rsp134", text: "Research shows that regular physical exercise can significantly reduce the risk of chronic diseases.", wordCount: 13, difficulty: "hard", chunks: "Research shows that | regular physical exercise can | significantly reduce the risk of chronic diseases", topic: "health" },
      { id: "rsp135", text: "The university has established partnerships with several international institutions to promote collaboration.", wordCount: 11, difficulty: "hard", chunks: "The university has established partnerships | with several international institutions | to promote collaboration", topic: "campus" },
      { id: "rsp136", text: "Advances in medical technology have significantly increased the average human life expectancy worldwide.", wordCount: 12, difficulty: "hard", chunks: "Advances in medical technology | have significantly increased | the average human life expectancy worldwide", topic: "health" },
      { id: "rsp137", text: "The researchers concluded that further studies are needed to confirm the preliminary findings.", wordCount: 12, difficulty: "hard", chunks: "The researchers concluded that | further studies are needed | to confirm the preliminary findings", topic: "science" },
      { id: "rsp138", text: "Urban planning must consider both economic development and environmental sustainability in equal measure.", wordCount: 11, difficulty: "hard", chunks: "Urban planning must consider | both economic development | and environmental sustainability in equal measure", topic: "environment" },
      { id: "rsp139", text: "The scholarship programme is open to students from all faculties who demonstrate academic excellence.", wordCount: 13, difficulty: "hard", chunks: "The scholarship programme is open | to students from all faculties | who demonstrate academic excellence", topic: "campus" },
      { id: "rsp140", text: "It is widely accepted that education is one of the most important factors in economic growth.", wordCount: 14, difficulty: "hard", chunks: "It is widely accepted that | education is one of the most important factors | in economic growth", topic: "education" },
      { id: "rsp141", text: "The debate over nuclear energy continues to divide opinion among scientists and policymakers.", wordCount: 12, difficulty: "hard", chunks: "The debate over nuclear energy | continues to divide opinion | among scientists and policymakers", topic: "environment" },
      { id: "rsp142", text: "Students are expected to complete a minimum of forty hours of independent study each week.", wordCount: 14, difficulty: "hard", chunks: "Students are expected to complete | a minimum of forty hours | of independent study each week", topic: "campus" },
      { id: "rsp143", text: "The economic impact of the pandemic was felt most severely by small businesses and casual workers.", wordCount: 14, difficulty: "hard", chunks: "The economic impact of the pandemic | was felt most severely | by small businesses and casual workers", topic: "economics" },
      { id: "rsp144", text: "Artificial intelligence is expected to transform numerous industries over the coming decades.", wordCount: 11, difficulty: "hard", chunks: "Artificial intelligence is expected | to transform numerous industries | over the coming decades", topic: "technology" },
      { id: "rsp145", text: "The archaeological excavation uncovered artefacts dating back to the early Bronze Age.", wordCount: 11, difficulty: "hard", chunks: "The archaeological excavation | uncovered artefacts dating back | to the early Bronze Age", topic: "history" },
      { id: "rsp146", text: "Students must ensure that all references are correctly formatted according to the style guide.", wordCount: 12, difficulty: "hard", chunks: "Students must ensure | that all references are correctly formatted | according to the style guide", topic: "campus" },
      { id: "rsp147", text: "The gap between the wealthy and the poor continues to widen in many developed economies.", wordCount: 14, difficulty: "hard", chunks: "The gap between | the wealthy and the poor | continues to widen in many developed economies", topic: "economics" },
      { id: "rsp148", text: "Marine biologists have discovered several previously unknown species in the deep ocean floor.", wordCount: 12, difficulty: "hard", chunks: "Marine biologists have discovered | several previously unknown species | in the deep ocean floor", topic: "science" },
      { id: "rsp149", text: "The development of writing systems was a turning point in the history of human civilisation.", wordCount: 14, difficulty: "hard", chunks: "The development of writing systems | was a turning point | in the history of human civilisation", topic: "history" },
      { id: "rsp150", text: "Remote working has become a permanent feature of employment for millions of people worldwide.", wordCount: 13, difficulty: "hard", chunks: "Remote working has become | a permanent feature of employment | for millions of people worldwide", topic: "society" },
      { id: "rsp151", text: "The study found a strong correlation between parental education levels and children's academic outcomes.", wordCount: 12, difficulty: "hard", chunks: "The study found | a strong correlation between | parental education levels and children's academic outcomes", topic: "education" },
      { id: "rsp152", text: "Sustainable agriculture practices are essential for feeding the growing global population without destroying ecosystems.", wordCount: 13, difficulty: "hard", chunks: "Sustainable agriculture practices are essential | for feeding the growing global population | without destroying ecosystems", topic: "environment" },
      { id: "rsp153", text: "The lecturer explained that plagiarism is taken very seriously and will result in academic penalties.", wordCount: 13, difficulty: "hard", chunks: "The lecturer explained that | plagiarism is taken very seriously | and will result in academic penalties", topic: "campus" },
      { id: "rsp154", text: "Three-dimensional printing technology is being increasingly used in the medical field for prosthetics.", wordCount: 12, difficulty: "hard", chunks: "Three-dimensional printing technology | is being increasingly used | in the medical field for prosthetics", topic: "technology" },
      { id: "rsp155", text: "The World Health Organisation recommends at least one hundred and fifty minutes of exercise per week.", wordCount: 14, difficulty: "hard", chunks: "The World Health Organisation recommends | at least one hundred and fifty minutes | of exercise per week", topic: "health" },
      { id: "rsp156", text: "International trade agreements have been instrumental in shaping the modern global economy.", wordCount: 11, difficulty: "hard", chunks: "International trade agreements | have been instrumental | in shaping the modern global economy", topic: "economics" },
      { id: "rsp157", text: "The migration of peoples throughout history has significantly influenced cultural exchange and development.", wordCount: 11, difficulty: "hard", chunks: "The migration of peoples | throughout history has significantly | influenced cultural exchange and development", topic: "history" },
      { id: "rsp158", text: "The research team collected data from over five thousand participants across twelve different countries.", wordCount: 12, difficulty: "hard", chunks: "The research team collected data | from over five thousand participants | across twelve different countries", topic: "science" },
      { id: "rsp159", text: "Students who wish to defer their examination must apply in writing to the faculty office.", wordCount: 14, difficulty: "hard", chunks: "Students who wish to defer | their examination must apply | in writing to the faculty office", topic: "campus" },
      { id: "rsp160", text: "The rise of social media has raised important questions about privacy and data protection.", wordCount: 13, difficulty: "hard", chunks: "The rise of social media | has raised important questions | about privacy and data protection", topic: "technology" },
      { id: "rsp161", text: "Childhood vaccination programmes have been responsible for the eradication of several dangerous diseases.", wordCount: 11, difficulty: "hard", chunks: "Childhood vaccination programmes | have been responsible for | the eradication of several dangerous diseases", topic: "health" },
      { id: "rsp162", text: "The introduction of compulsory education in the nineteenth century transformed social mobility in Europe.", wordCount: 12, difficulty: "hard", chunks: "The introduction of compulsory education | in the nineteenth century | transformed social mobility in Europe", topic: "education" },
      { id: "rsp163", text: "Rising sea levels threaten to displace millions of people living in low-lying coastal areas.", wordCount: 13, difficulty: "hard", chunks: "Rising sea levels threaten | to displace millions of people | living in low-lying coastal areas", topic: "environment" },
      { id: "rsp164", text: "The central bank uses monetary policy to maintain price stability and control inflation rates.", wordCount: 12, difficulty: "hard", chunks: "The central bank uses | monetary policy to maintain | price stability and control inflation rates", topic: "economics" },
      { id: "rsp165", text: "The peer review process ensures that published research meets the required standards of quality.", wordCount: 13, difficulty: "hard", chunks: "The peer review process ensures | that published research meets | the required standards of quality", topic: "science" },
      { id: "rsp166", text: "Indigenous Australians have the oldest continuous culture in the world dating back over sixty thousand years.", wordCount: 14, difficulty: "hard", chunks: "Indigenous Australians have | the oldest continuous culture in the world | dating back over sixty thousand years", topic: "history" },
      { id: "rsp167", text: "Self-driving vehicles have the potential to dramatically reduce road accidents caused by human error.", wordCount: 13, difficulty: "hard", chunks: "Self-driving vehicles have the potential | to dramatically reduce road accidents | caused by human error", topic: "technology" },
      { id: "rsp168", text: "The seminar will examine the relationship between economic growth and environmental degradation in detail.", wordCount: 12, difficulty: "hard", chunks: "The seminar will examine | the relationship between economic growth | and environmental degradation in detail", topic: "campus" },
      { id: "rsp169", text: "A balanced diet rich in fruits and vegetables is essential for maintaining good health.", wordCount: 13, difficulty: "hard", chunks: "A balanced diet | rich in fruits and vegetables | is essential for maintaining good health", topic: "health" },
      { id: "rsp170", text: "The rapid expansion of cities poses significant challenges for infrastructure and public service delivery.", wordCount: 12, difficulty: "hard", chunks: "The rapid expansion of cities | poses significant challenges | for infrastructure and public service delivery", topic: "society" },
      { id: "rsp171", text: "The analysis of large data sets requires advanced statistical methods and computing resources.", wordCount: 11, difficulty: "hard", chunks: "The analysis of large data sets | requires advanced statistical methods | and computing resources", topic: "science" },
      { id: "rsp172", text: "Free trade can benefit consumers through lower prices but may harm domestic industries.", wordCount: 12, difficulty: "hard", chunks: "Free trade can benefit consumers | through lower prices | but may harm domestic industries", topic: "economics" },
      { id: "rsp173", text: "Language learning in early childhood is associated with improved cognitive flexibility and problem-solving skills.", wordCount: 12, difficulty: "hard", chunks: "Language learning in early childhood | is associated with improved | cognitive flexibility and problem-solving skills", topic: "education" },
      { id: "rsp174", text: "Deforestation in the Amazon Basin has accelerated at an alarming rate over the past decade.", wordCount: 14, difficulty: "hard", chunks: "Deforestation in the Amazon Basin | has accelerated at an alarming rate | over the past decade", topic: "environment" },
      { id: "rsp175", text: "The lecture series will cover major developments in European history from the medieval period onwards.", wordCount: 13, difficulty: "hard", chunks: "The lecture series will cover | major developments in European history | from the medieval period onwards", topic: "campus" },
      { id: "rsp176", text: "Stress and anxiety have been linked to a wide range of physical health problems.", wordCount: 13, difficulty: "hard", chunks: "Stress and anxiety | have been linked to | a wide range of physical health problems", topic: "health" },
      { id: "rsp177", text: "Cybersecurity threats are becoming more sophisticated and pose significant risks to organisations and individuals.", wordCount: 12, difficulty: "hard", chunks: "Cybersecurity threats are becoming | more sophisticated and pose | significant risks to organisations and individuals", topic: "technology" },
      { id: "rsp178", text: "The abolition of slavery in the nineteenth century was a landmark moment in human rights history.", wordCount: 14, difficulty: "hard", chunks: "The abolition of slavery | in the nineteenth century | was a landmark moment in human rights history", topic: "history" },
      { id: "rsp179", text: "The university library offers workshops on academic writing and research skills throughout the year.", wordCount: 12, difficulty: "hard", chunks: "The university library offers workshops | on academic writing and research skills | throughout the year", topic: "campus" },
      { id: "rsp180", text: "Gender equality in the workplace remains an important social and economic issue in many countries.", wordCount: 13, difficulty: "hard", chunks: "Gender equality in the workplace | remains an important social and economic issue | in many countries", topic: "society" },
      { id: "rsp181", text: "The theory of evolution by natural selection was proposed by Charles Darwin in the nineteenth century.", wordCount: 14, difficulty: "hard", chunks: "The theory of evolution | by natural selection was proposed | by Charles Darwin in the nineteenth century", topic: "science" },
      { id: "rsp182", text: "Effective time management is one of the most important skills for university students to develop.", wordCount: 13, difficulty: "hard", chunks: "Effective time management is | one of the most important skills | for university students to develop", topic: "education" },
      { id: "rsp183", text: "The report highlighted the need for greater investment in renewable energy infrastructure globally.", wordCount: 11, difficulty: "hard", chunks: "The report highlighted | the need for greater investment | in renewable energy infrastructure globally", topic: "environment" },
      { id: "rsp184", text: "Interest rate changes by the central bank have a direct impact on consumer borrowing and spending.", wordCount: 14, difficulty: "hard", chunks: "Interest rate changes by the central bank | have a direct impact | on consumer borrowing and spending", topic: "economics" },
      { id: "rsp185", text: "The discovery of DNA structure by Watson and Crick revolutionised the field of molecular biology.", wordCount: 13, difficulty: "hard", chunks: "The discovery of DNA structure | by Watson and Crick | revolutionised the field of molecular biology", topic: "science" },
      { id: "rsp186", text: "Ageing populations in developed countries are placing increasing demands on healthcare and pension systems.", wordCount: 12, difficulty: "hard", chunks: "Ageing populations in developed countries | are placing increasing demands | on healthcare and pension systems", topic: "society" },
      { id: "rsp187", text: "The assignment requires students to critically evaluate at least ten peer-reviewed academic sources.", wordCount: 11, difficulty: "hard", chunks: "The assignment requires students | to critically evaluate | at least ten peer-reviewed academic sources", topic: "campus" },
      { id: "rsp188", text: "Cloud computing has enabled businesses to scale their operations more efficiently and at lower cost.", wordCount: 14, difficulty: "hard", chunks: "Cloud computing has enabled businesses | to scale their operations | more efficiently and at lower cost", topic: "technology" },
      { id: "rsp189", text: "The construction of the Suez Canal in the nineteenth century transformed global maritime trade routes.", wordCount: 13, difficulty: "hard", chunks: "The construction of the Suez Canal | in the nineteenth century | transformed global maritime trade routes", topic: "history" },
      { id: "rsp190", text: "Regular physical activity has been shown to improve both mental wellbeing and academic performance.", wordCount: 12, difficulty: "hard", chunks: "Regular physical activity | has been shown to improve | both mental wellbeing and academic performance", topic: "health" },
      { id: "rsp191", text: "The curriculum has been redesigned to better prepare students for the demands of the modern workforce.", wordCount: 14, difficulty: "hard", chunks: "The curriculum has been redesigned | to better prepare students | for the demands of the modern workforce", topic: "education" },
      { id: "rsp192", text: "Microplastics have been found in drinking water sources across every continent including Antarctica.", wordCount: 11, difficulty: "hard", chunks: "Microplastics have been found | in drinking water sources | across every continent including Antarctica", topic: "environment" },
      { id: "rsp193", text: "The academic integrity policy applies to all forms of assessment including group work and presentations.", wordCount: 13, difficulty: "hard", chunks: "The academic integrity policy applies | to all forms of assessment | including group work and presentations", topic: "campus" },
      { id: "rsp194", text: "Developing nations often face a difficult choice between economic growth and environmental protection.", wordCount: 11, difficulty: "hard", chunks: "Developing nations often face | a difficult choice between | economic growth and environmental protection", topic: "economics" },
      { id: "rsp195", text: "The space race between the United States and the Soviet Union defined the era of the Cold War.", wordCount: 14, difficulty: "hard", chunks: "The space race between | the United States and the Soviet Union | defined the era of the Cold War", topic: "history" },
      { id: "rsp196", text: "Wearable technology is increasingly being used to monitor patient health in real time.", wordCount: 12, difficulty: "hard", chunks: "Wearable technology is increasingly | being used to monitor | patient health in real time", topic: "technology" },
      { id: "rsp197", text: "The growing prevalence of diabetes is closely linked to sedentary lifestyles and poor dietary choices.", wordCount: 13, difficulty: "hard", chunks: "The growing prevalence of diabetes | is closely linked to | sedentary lifestyles and poor dietary choices", topic: "health" },
      { id: "rsp198", text: "Collaborative learning has been shown to improve student engagement and deepen understanding of complex topics.", wordCount: 12, difficulty: "hard", chunks: "Collaborative learning has been shown | to improve student engagement | and deepen understanding of complex topics", topic: "education" },
      { id: "rsp199", text: "Social inequality affects access to education, healthcare, and employment opportunities in significant ways.", wordCount: 11, difficulty: "hard", chunks: "Social inequality affects access | to education, healthcare, | and employment opportunities in significant ways", topic: "society" },
      { id: "rsp200", text: "The transition to a carbon-neutral economy will require unprecedented levels of investment and international cooperation.", wordCount: 13, difficulty: "hard", chunks: "The transition to a carbon-neutral economy | will require unprecedented levels | of investment and international cooperation", topic: "environment" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DESCRIBE IMAGE (DI) — 描述图片
  // ═══════════════════════════════════════════════════════════════════════════
  describeImage: {
    strategy: "You have 25 seconds to study the image and 40 seconds to speak. Use a clear template for each image type. During preparation, identify: (1) what the image shows, (2) the most striking feature, (3) two specific details, (4) a contrast or comparison, (5) an overall conclusion. Speak continuously — silence costs more than filler words.",
    strategyCN: "25秒看图，40秒说。每种图表类型用固定模板。准备时识别：(1)图表展示什么，(2)最突出的特征，(3)两个具体细节，(4)对比或比较，(5)总体结论。持续说话——沉默比填充词扣分更多。",
    templates: [
      {
        type: "bar",
        typeCN: "柱状图",
        template: "This bar chart illustrates [WHAT] measured in [UNIT] across [TIME/CATEGORIES]. The most notable trend is [HIGHEST/BIGGEST CHANGE]. Specifically, [DETAIL 1]. Furthermore, [DETAIL 2]. In contrast, [LOWEST/OPPOSITE TREND]. Overall, the data suggests that [CONCLUSION].",
        templateCN: "这个柱状图展示了[什么内容]，以[单位]为衡量标准，横跨[时间/类别]。最显著的趋势是[最高/最大变化]。具体来说，[细节1]。此外，[细节2]。相比之下，[最低/相反趋势]。总的来说，数据表明[结论]。",
        example: "This bar chart illustrates global smartphone sales measured in millions of units across five major brands from 2020 to 2023. The most notable trend is the significant growth of Brand A, which increased from 200 million to 350 million units. Specifically, Brand A overtook Brand B as the market leader in 2022. Furthermore, Brand C maintained steady growth throughout the period. In contrast, Brand D experienced a decline from 150 to 90 million units. Overall, the data suggests that the smartphone market is becoming increasingly consolidated among fewer dominant brands.",
        keywords: ["illustrates", "measured in", "most notable trend", "specifically", "furthermore", "in contrast", "overall", "suggests"]
      },
      {
        type: "line",
        typeCN: "折线图",
        template: "This line graph shows [WHAT] over a period from [START] to [END]. The most significant trend is [KEY TREND]. Initially, [STARTING POINT]. Between [TIME 1] and [TIME 2], there was a [sharp/gradual] [increase/decrease]. After [TIME], [WHAT HAPPENED]. Overall, the graph reveals [CONCLUSION].",
        templateCN: "这个折线图展示了[什么]在[起始]到[结束]期间的变化。最显著的趋势是[关键趋势]。最初，[起始点]。在[时间1]和[时间2]之间，出现了[急剧/缓慢]的[增加/减少]。在[时间]之后，[发生了什么]。总体而言，图表揭示了[结论]。",
        example: "This line graph shows the average global temperature anomaly over a period from 1950 to 2023. The most significant trend is a consistent upward trajectory, particularly after 1980. Initially, temperatures fluctuated around the baseline with minimal deviation. Between 1980 and 2000, there was a sharp increase of approximately 0.5 degrees Celsius. After 2000, the rate of warming accelerated further. Overall, the graph reveals a clear pattern of global warming that has intensified in recent decades.",
        keywords: ["shows", "over a period", "most significant trend", "initially", "between", "sharp/gradual increase/decrease", "after", "overall", "reveals"]
      },
      {
        type: "pie",
        typeCN: "饼图",
        template: "This pie chart displays the distribution of [WHAT] in [CONTEXT]. The largest segment is [CATEGORY] at [PERCENTAGE], accounting for [FRACTION] of the total. The second largest is [CATEGORY] at [PERCENTAGE]. [CATEGORY] and [CATEGORY] represent smaller proportions at [PERCENTAGE] and [PERCENTAGE] respectively. Overall, [CONCLUSION].",
        templateCN: "这个饼图展示了[什么]在[背景]中的分布。最大的部分是[类别]，占[百分比]，占总数的[比例]。第二大是[类别]，占[百分比]。[类别]和[类别]分别占较小比例，为[百分比]和[百分比]。总体而言，[结论]。",
        example: "This pie chart displays the distribution of household energy consumption by source in Australia. The largest segment is electricity at 42 per cent, accounting for nearly half of total consumption. The second largest is natural gas at 28 per cent. Solar and wind represent smaller proportions at 18 and 8 per cent respectively. Overall, fossil fuel-based energy still dominates Australian household consumption, though renewable sources are gaining ground.",
        keywords: ["displays", "distribution", "largest segment", "accounting for", "second largest", "represent", "respectively", "overall"]
      },
      {
        type: "table",
        typeCN: "表格",
        template: "This table presents data on [WHAT] across [CATEGORIES/YEARS]. The key finding is [MAIN POINT]. Looking at [COLUMN/ROW], [HIGHEST VALUE] has the highest value at [NUMBER], while [LOWEST] has the lowest at [NUMBER]. Comparing [ITEM 1] and [ITEM 2], [COMPARISON]. Overall, the data indicates [CONCLUSION].",
        templateCN: "这个表格展示了[什么]在[类别/年份]中的数据。关键发现是[主要观点]。看[列/行]，[最高值]最高，为[数字]，而[最低]最低，为[数字]。比较[项目1]和[项目2]，[对比]。总体而言，数据表明[结论]。",
        example: "This table presents data on unemployment rates across six countries in 2023. The key finding is that significant variations exist between developed and developing nations. Looking at the data, Country A has the highest unemployment rate at 12.5 per cent, while Country F has the lowest at 3.2 per cent. Comparing the European countries and Asian countries, Asian nations generally report lower unemployment rates. Overall, the data indicates that economic structure and government policies significantly influence employment outcomes.",
        keywords: ["presents", "key finding", "looking at", "highest/lowest value", "comparing", "generally", "overall", "indicates"]
      },
      {
        type: "process",
        typeCN: "流程图",
        template: "This diagram illustrates the process of [WHAT]. The process begins with [FIRST STEP]. Following this, [SECOND STEP]. The next stage involves [THIRD STEP]. Subsequently, [FOURTH STEP]. Finally, [LAST STEP]. Overall, this is a [simple/complex] [NUMBER]-stage process that [SUMMARY].",
        templateCN: "这个图表展示了[什么]的过程。过程从[第一步]开始。接着，[第二步]。下一个阶段涉及[第三步]。随后，[第四步]。最后，[最后一步]。总体而言，这是一个[简单/复杂]的[数量]阶段过程，[总结]。",
        example: "This diagram illustrates the process of water purification in a treatment plant. The process begins with the collection of raw water from rivers and reservoirs. Following this, the water undergoes screening to remove large debris. The next stage involves chemical treatment where coagulants are added to remove suspended particles. Subsequently, the water passes through sand filters and activated carbon filters. Finally, chlorine is added for disinfection before the water is distributed to households. Overall, this is a complex five-stage process that ensures safe drinking water reaches consumers.",
        keywords: ["illustrates", "process begins with", "following this", "next stage involves", "subsequently", "finally", "overall"]
      },
      {
        type: "map",
        typeCN: "地图",
        template: "This map shows [WHAT] in [LOCATION/CONTEXT]. In the [north/south/east/west], [FEATURE]. The [central/eastern/western] region shows [FEATURE]. Notably, [KEY OBSERVATION]. Compared to [AREA], [AREA] has [COMPARISON]. Overall, the map illustrates [CONCLUSION].",
        templateCN: "这张地图展示了[什么]在[位置/背景]中的情况。在[方向]，[特征]。[中部/东部/西部]地区显示[特征]。值得注意的是，[关键观察]。与[区域]相比，[区域]有[对比]。总体而言，地图说明了[结论]。",
        example: "This map shows population density across Australian states and territories. In the south-east, New South Wales and Victoria display the highest population concentrations, particularly around Sydney and Melbourne. The central and western regions show extremely low population density. Notably, over 85 per cent of the population lives within 50 kilometres of the coastline. Compared to the eastern states, Western Australia and the Northern Territory have vast areas with fewer than one person per square kilometre. Overall, the map illustrates Australia's highly concentrated coastal settlement pattern.",
        keywords: ["shows", "in the north/south/east/west", "region shows", "notably", "compared to", "overall", "illustrates"]
      },
      {
        type: "mixed",
        typeCN: "组合图",
        template: "This chart combines [CHART TYPE 1] and [CHART TYPE 2] to show [WHAT]. The [first type] indicates [FINDING 1], while the [second type] shows [FINDING 2]. The most striking observation is [KEY POINT]. Additionally, [DETAIL]. Overall, the combined data reveals [CONCLUSION].",
        templateCN: "这个图表结合了[图表类型1]和[图表类型2]来展示[什么]。[第一种]表明[发现1]，而[第二种]显示[发现2]。最显著的观察是[要点]。此外，[细节]。总体而言，综合数据揭示了[结论]。",
        example: "This chart combines a bar chart and a line graph to show smartphone sales volume and profit margins across five major companies. The bar chart indicates that Company A has the highest sales volume at 350 million units, while the line graph shows that Company C has the highest profit margin at 28 per cent. The most striking observation is that high sales volume does not necessarily correlate with high profit margins. Additionally, Company B maintains a balanced performance in both metrics. Overall, the combined data reveals different competitive strategies among the major players.",
        keywords: ["combines", "indicates", "while", "most striking observation", "does not necessarily", "additionally", "overall", "reveals"]
      }
    ],
    universalPhrases: {
      title: "Universal DI Phrases (万能描述短语)",
      opening: [
        { en: "This [chart type] illustrates/shows/presents/displays...", cn: "这个[图表类型]展示了..." },
        { en: "The [chart type] provides information about...", cn: "这个[图表类型]提供了关于...的信息" },
        { en: "The [chart type] compares/contrasts...", cn: "这个[图表类型]比较了/对比了..." }
      ],
      trends: [
        { en: "increased significantly/dramatically/steadily/gradually", cn: "显著/急剧/稳定/缓慢增长" },
        { en: "decreased sharply/slightly/consistently", cn: "急剧/轻微/持续下降" },
        { en: "remained relatively stable/constant/unchanged", cn: "保持相对稳定/不变" },
        { en: "fluctuated between [X] and [Y]", cn: "在[X]和[Y]之间波动" },
        { en: "peaked at [VALUE] in [YEAR]", cn: "在[年份]达到峰值[数值]" },
        { en: "reached its lowest point at [VALUE]", cn: "达到最低点[数值]" },
        { en: "experienced a sharp upturn/downturn", cn: "经历了急剧的上升/下降" },
        { en: "showed a marked improvement/decline", cn: "显示了明显的改善/下降" }
      ],
      comparison: [
        { en: "In contrast to...", cn: "与...相比" },
        { en: "While [A] showed growth, [B] declined.", cn: "[A]增长的同时，[B]下降了" },
        { en: "[A] was significantly higher/lower than [B].", cn: "[A]明显高于/低于[B]" },
        { en: "The most striking difference is between...", cn: "最显著的差异在于..." },
        { en: "[A] outperformed [B] by a considerable margin.", cn: "[A]以相当大的差距超过了[B]" },
        { en: "There is a notable disparity between...", cn: "...之间存在显著差距" }
      ],
      conclusion: [
        { en: "Overall, the data suggests/indicates/reveals that...", cn: "总体而言，数据表明/揭示了..." },
        { en: "In summary, there is a clear trend of...", cn: "总之，有一个明显的...趋势" },
        { en: "To conclude, [MAIN FINDING].", cn: "总结来说，[主要发现]。" },
        { en: "The data paints a clear picture of...", cn: "数据清楚地描绘了..." }
      ],
      numbers: [
        { en: "approximately / roughly / around [NUMBER]", cn: "大约[数字]" },
        { en: "just over / just under [NUMBER]", cn: "刚好超过/刚好低于[数字]" },
        { en: "a twofold/threefold increase", cn: "两倍/三倍增长" },
        { en: "doubled / tripled / quadrupled", cn: "翻倍/三倍/四倍" },
        { en: "the majority / a minority of", cn: "大多数/少数" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  RETELL LECTURE (RL) — 复述讲座
  // ═══════════════════════════════════════════════════════════════════════════
  retellLecture: {
    strategy: "Listen for 60-90 seconds, take keyword notes, then speak for 40 seconds using a template. The key is capturing the MAIN IDEA and 2-3 SUPPORTING DETAILS. You do NOT need to remember everything. Focus on the topic, the speaker's main argument, and a few examples or evidence points. Use your template to organise what you remember into a coherent response.",
    strategyCN: "听60-90秒，记关键词笔记，然后用模板说40秒。关键是抓住主要观点和2-3个支撑细节。你不需要记住所有内容。专注于话题、演讲者的主要论点，以及几个例子或证据。用模板把你记住的内容组织成连贯的回答。",
    template: {
      title: "Universal RL Template (万能复述模板)",
      structure: [
        {
          part: "Opening (5 seconds)",
          partCN: "开头（5秒）",
          template: "The lecture discussed/explained/focused on [MAIN TOPIC].",
          templateCN: "讲座讨论了/解释了/聚焦于[主要话题]。",
          alternatives: [
            "The speaker talked about [TOPIC].",
            "The lecture was about [TOPIC].",
            "According to the speaker, [MAIN POINT].",
            "The main focus of the lecture was [TOPIC]."
          ]
        },
        {
          part: "Main Point (10 seconds)",
          partCN: "主要观点（10秒）",
          template: "The speaker explained that [KEY FINDING/ARGUMENT]. This is significant because [REASON].",
          templateCN: "演讲者解释说[关键发现/论点]。这很重要因为[原因]。",
          alternatives: [
            "The main point was that [IDEA].",
            "The speaker highlighted that [KEY POINT].",
            "According to the research presented, [FINDING].",
            "The key argument was that [CLAIM]."
          ]
        },
        {
          part: "Supporting Details (15 seconds)",
          partCN: "支撑细节（15秒）",
          template: "Furthermore, the speaker mentioned that [DETAIL 1]. Additionally, [DETAIL 2]. The speaker also pointed out that [DETAIL 3].",
          templateCN: "此外，演讲者提到[细节1]。另外，[细节2]。演讲者还指出[细节3]。",
          connectors: [
            "Furthermore",
            "Additionally",
            "Moreover",
            "The speaker also mentioned",
            "Another key point was",
            "It was also noted that",
            "To support this point",
            "For example",
            "As evidence of this"
          ]
        },
        {
          part: "Conclusion (10 seconds)",
          partCN: "结论（10秒）",
          template: "In conclusion, the lecture emphasised that [SUMMARY OF MAIN IDEA] and its implications for [BROADER CONTEXT].",
          templateCN: "总之，讲座强调了[主要观点总结]及其对[更广泛背景]的影响。",
          alternatives: [
            "Overall, the lecture provided valuable insights into [TOPIC].",
            "To summarise, the speaker argued that [CONCLUSION].",
            "In summary, the lecture highlighted the importance of [TOPIC].",
            "The lecture concluded by emphasising [FINAL POINT]."
          ]
        }
      ]
    },
    noteTaking: {
      title: "Note-Taking Strategy (记笔记策略)",
      tips: [
        { tip: "Use abbreviations: govt, edu, env, dev, inc, dec, approx, sig, diff", tipCN: "用缩写：govt=政府，edu=教育，env=环境，dev=发展，inc=增加，dec=减少" },
        { tip: "Draw arrows: ↑ increase, ↓ decrease, → leads to, = equals, ≠ not equal, ∴ therefore", tipCN: "画箭头：↑增加，↓减少，→导致，=等于，≠不等于，∴因此" },
        { tip: "Write ONLY keywords, never full sentences — you will reconstruct using your template", tipCN: "只写关键词，绝不写完整句子——你会用模板重建句子" },
        { tip: "Number your points: 1. 2. 3. for easy recall when speaking", tipCN: "给要点编号：1. 2. 3. 方便说的时候回忆" },
        { tip: "Listen for signal words: importantly, significantly, however, therefore, in fact, research shows", tipCN: "注意信号词：importantly, significantly, however, therefore, in fact, research shows" },
        { tip: "Circle or star the MAIN IDEA — this is what your opening sentence will be about", tipCN: "圈出或标星主要观点——这是你开头句子的内容" },
        { tip: "Write numbers and names immediately — these are hard to reconstruct from memory", tipCN: "立刻写下数字和名字——这些很难从记忆中重建" }
      ]
    },
    commonTopics: [
      {
        topic: "Science/Research",
        topicCN: "科学/研究",
        usefulPhrases: [
          "The research demonstrates that...",
          "According to the findings...",
          "The study was conducted by...",
          "The results indicate that...",
          "The evidence suggests that..."
        ]
      },
      {
        topic: "History/Society",
        topicCN: "历史/社会",
        usefulPhrases: [
          "Historically, this has been...",
          "This development can be traced back to...",
          "The impact on society was...",
          "This led to significant changes in...",
          "The consequences of this event included..."
        ]
      },
      {
        topic: "Environment",
        topicCN: "环境",
        usefulPhrases: [
          "The environmental impact includes...",
          "This poses a threat to...",
          "Sustainable solutions involve...",
          "The ecological consequences are...",
          "Conservation efforts have focused on..."
        ]
      },
      {
        topic: "Education/Psychology",
        topicCN: "教育/心理学",
        usefulPhrases: [
          "Research in this field shows...",
          "This has implications for learning...",
          "The theory proposes that...",
          "Educational outcomes are affected by...",
          "Cognitive development is influenced by..."
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  ANSWER SHORT QUESTION (ASQ) — 简答题
  // ═══════════════════════════════════════════════════════════════════════════
  asq: {
    strategy: "Answer in 1-3 words ONLY. Do not make a sentence. Answer immediately — hesitation loses points. If you do not know, give your best guess. Silence scores zero. This item type has low individual value but there are many of them, and they cross-score into Speaking and Listening.",
    strategyCN: "只回答1-3个词。不要造句。立即回答——犹豫会丢分。如果不知道，给出最好的猜测。沉默得零分。这种题型单个分值低但数量多，同时影响口语和听力分数。",
    commonCategories: [
      {
        cat: "Academic/Education",
        catCN: "学术/教育",
        examples: [
          { q: "What do you call the list of books at the end of an essay?", a: "Bibliography / Reference list" },
          { q: "What is the person who leads a university department called?", a: "Dean / Head of department" },
          { q: "What do you call a student who has completed a first degree?", a: "Graduate" },
          { q: "What is the formal talk given to a large group of students called?", a: "Lecture" },
          { q: "What do you call the written work submitted for a doctoral degree?", a: "Thesis / Dissertation" },
          { q: "What do you call the period between two academic terms?", a: "Break / Vacation / Recess" }
        ]
      },
      {
        cat: "Science/Nature",
        catCN: "科学/自然",
        examples: [
          { q: "What is H2O commonly known as?", a: "Water" },
          { q: "What organ pumps blood around the body?", a: "Heart" },
          { q: "What do you call animals that eat only plants?", a: "Herbivores" },
          { q: "What gas do plants absorb from the atmosphere?", a: "Carbon dioxide" },
          { q: "What do you call the study of living organisms?", a: "Biology" },
          { q: "What force keeps us on the ground?", a: "Gravity" },
          { q: "What planet is closest to the sun?", a: "Mercury" },
          { q: "What is the hardest natural substance?", a: "Diamond" }
        ]
      },
      {
        cat: "Calendar/Time/Numbers",
        catCN: "日历/时间/数字",
        examples: [
          { q: "How many days are there in a leap year?", a: "366" },
          { q: "What is the last month of the year?", a: "December" },
          { q: "How many sides does a triangle have?", a: "Three" },
          { q: "What century are we in now?", a: "Twenty-first" },
          { q: "How many weeks are there in a year?", a: "52" },
          { q: "What do you call a period of ten years?", a: "Decade" },
          { q: "What do you call a period of one hundred years?", a: "Century" }
        ]
      },
      {
        cat: "Geography/Places",
        catCN: "地理/地点",
        examples: [
          { q: "What is the largest continent?", a: "Asia" },
          { q: "What is the longest river in the world?", a: "Nile / Amazon" },
          { q: "What is the capital of Australia?", a: "Canberra" },
          { q: "What do you call a piece of land surrounded by water?", a: "Island" },
          { q: "Which ocean is between Africa and Australia?", a: "Indian Ocean" },
          { q: "What is the driest continent?", a: "Antarctica / Australia" }
        ]
      },
      {
        cat: "Daily Life/General",
        catCN: "日常生活/常识",
        examples: [
          { q: "What do you call someone who treats sick animals?", a: "Veterinarian / Vet" },
          { q: "What instrument do you use to measure temperature?", a: "Thermometer" },
          { q: "Where do you go to borrow books?", a: "Library" },
          { q: "What do you call the person who flies an aeroplane?", a: "Pilot" },
          { q: "What do you call the meal eaten in the middle of the day?", a: "Lunch" },
          { q: "What colour do you get when you mix red and blue?", a: "Purple" }
        ]
      },
      {
        cat: "Health/Medicine",
        catCN: "健康/医学",
        examples: [
          { q: "What do you call the doctor who operates on patients?", a: "Surgeon" },
          { q: "What do you call the condition of being overweight?", a: "Obesity" },
          { q: "What do you call the injection that prevents disease?", a: "Vaccination / Vaccine" },
          { q: "What organ is protected by the skull?", a: "Brain" }
        ]
      }
    ],
    speedDrill: {
      title: "ASQ Speed Drill (快速反应训练)",
      titleCN: "快速反应训练",
      instruction: "Read the question, say the answer out loud within 2 seconds. If you hesitate, mark it for review.",
      instructionCN: "读题，2秒内大声说出答案。如果犹豫了，标记复习。",
      tips: [
        { tip: "Listen for the question word (what, where, who, when, how) to anticipate the answer type", tipCN: "听问题词（what, where, who, when, how）来预判答案类型" },
        { tip: "If the answer has two possible words, say the more common one", tipCN: "如果答案有两个可能的词，说更常见的那个" },
        { tip: "Do NOT start with 'I think' or 'Maybe' — just say the answer directly", tipCN: "不要以'I think'或'Maybe'开头——直接说答案" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  SCORING GUIDE — 评分说明
  // ═══════════════════════════════════════════════════════════════════════════
  scoringGuide: {
    title: "Speaking Score Breakdown (口语评分说明)",
    titleCN: "口语评分说明",
    components: [
      {
        name: "Oral Fluency",
        nameCN: "口语流利度",
        weight: "High",
        description: "Smooth, natural speech with appropriate phrasing and rhythm. No hesitations, false starts, or unnatural pauses.",
        descriptionCN: "流畅自然的说话，有恰当的分句和节奏。没有犹豫、错误开始或不自然的停顿。",
        tips: [
          "Speak at a steady, moderate pace — not too fast, not too slow",
          "Never stop and restart a sentence — if you make a mistake, continue forward",
          "Use natural pauses at phrase boundaries, not in the middle of a phrase",
          "Practice speaking in long, flowing phrases rather than word by word"
        ],
        tipsCN: [
          "以稳定的中等语速说话——不要太快也不要太慢",
          "绝不要停下来重新开始一个句子——如果说错了，继续往前说",
          "在短语边界处自然停顿，不要在短语中间停顿",
          "练习用长的、流畅的短语说话，而不是逐词说"
        ]
      },
      {
        name: "Pronunciation",
        nameCN: "发音",
        weight: "High",
        description: "Clear articulation of vowels and consonants. Correct word stress and sentence stress. Natural intonation patterns.",
        descriptionCN: "清晰的元音和辅音发音。正确的单词重音和句子重音。自然的语调模式。",
        tips: [
          "Focus on vowel sounds — these are where most Chinese speakers make errors",
          "Pay attention to word endings: -ed, -s, -tion, -ment",
          "Stress content words and reduce function words",
          "Use rising intonation for questions and falling intonation for statements"
        ],
        tipsCN: [
          "专注于元音——这是大多数中国人说英语时最容易出错的地方",
          "注意词尾：-ed, -s, -tion, -ment",
          "重读实词，轻读虚词",
          "疑问句用升调，陈述句用降调"
        ]
      },
      {
        name: "Content",
        nameCN: "内容",
        weight: "Varies by item type",
        description: "For RA: all words read correctly. For RS: keywords matched. For DI/RL: key information covered. For ASQ: correct answer.",
        descriptionCN: "RA：所有词读对。RS：关键词匹配。DI/RL：关键信息覆盖。ASQ：正确答案。",
        tips: [
          "For Repeat Sentence: even 50% of the words with good fluency scores well",
          "For Describe Image: cover opening, key details, and conclusion — do not leave dead air",
          "For Retell Lecture: mention the topic and 2-3 specific details from the lecture",
          "For Read Aloud: if unsure of a word, say something — skipping a word is worse"
        ],
        tipsCN: [
          "复述句子：即使只记住50%的词，流利度好也能得高分",
          "描述图片：涵盖开头、关键细节和结论——不要留空白",
          "复述讲座：提到话题和讲座中的2-3个具体细节",
          "朗读：如果不确定一个词怎么读，说点什么——跳过一个词更差"
        ]
      }
    ],
    crossScoring: {
      title: "Cross-Scoring Impact (交叉评分影响)",
      titleCN: "交叉评分影响",
      explanation: "Some speaking items contribute to other skill scores. This is why Repeat Sentence is so valuable — it affects both Speaking AND Listening scores.",
      explanationCN: "一些口语题型会影响其他技能的分数。这就是为什么复述句子这么重要——它同时影响口语和听力分数。",
      matrix: [
        { item: "Read Aloud", speaking: true, reading: true, listening: false, writing: false },
        { item: "Repeat Sentence", speaking: true, reading: false, listening: true, writing: false },
        { item: "Describe Image", speaking: true, reading: false, listening: false, writing: false },
        { item: "Retell Lecture", speaking: true, reading: false, listening: true, writing: false },
        { item: "Answer Short Question", speaking: true, reading: false, listening: true, writing: false }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  CHINESE SPEAKER PRONUNCIATION GUIDE — 中国人发音难点
  // ═══════════════════════════════════════════════════════════════════════════
  pronunciationGuide: {
    title: "Common Pronunciation Challenges for Chinese Speakers (中国人常见发音难点)",
    titleCN: "中国人常见发音难点",
    challenges: [
      {
        sound: "/θ/ and /ð/ (th sounds)",
        soundCN: "th音",
        problem: "Chinese speakers often substitute /s/ or /z/ for th sounds.",
        problemCN: "中国人经常用/s/或/z/替代th音。",
        tip: "Place your tongue between your teeth. For /θ/ (think, three), blow air gently. For /ð/ (the, this), add voicing.",
        tipCN: "把舌头放在牙齿之间。/θ/（think, three）轻轻吹气。/ð/（the, this）加上声带振动。",
        practiceWords: ["think", "three", "through", "the", "this", "that", "their", "those", "mathematics", "method"]
      },
      {
        sound: "/v/ vs /w/",
        soundCN: "v和w的区别",
        problem: "Some Chinese speakers confuse /v/ and /w/ because /v/ does not exist in Mandarin.",
        problemCN: "一些中国人混淆/v/和/w/因为普通话中没有/v/音。",
        tip: "For /v/: bite your lower lip gently and push air through. For /w/: round your lips without touching teeth.",
        tipCN: "/v/：轻咬下唇，推气通过。/w/：嘴唇圆起但不接触牙齿。",
        practiceWords: ["very", "west", "village", "water", "vowel", "wave", "vine", "wine", "vest", "wrist"]
      },
      {
        sound: "/l/ and /r/",
        soundCN: "l和r的区别",
        problem: "The English /r/ is very different from the Chinese r. English /l/ at the end of words (dark l) is often dropped.",
        problemCN: "英语的/r/和中文的r很不同。词尾的/l/（dark l）经常被省略。",
        tip: "For /r/: curl your tongue back without touching the roof. For final /l/: touch the tongue tip to the ridge behind upper teeth.",
        tipCN: "/r/：舌头卷回但不接触上颚。词尾/l/：舌尖触碰上齿龈。",
        practiceWords: ["right", "light", "read", "lead", "real", "lull", "rural", "little", "world", "girl"]
      },
      {
        sound: "Word-final consonant clusters",
        soundCN: "词尾辅音连缀",
        problem: "Chinese speakers often add a vowel sound after final consonants or drop consonants entirely.",
        problemCN: "中国人经常在词尾辅音后加元音，或者完全省略辅音。",
        tip: "Practice saying the final consonant crisply without adding any vowel. Pay special attention to -ts, -ks, -ps, -ths, -lds.",
        tipCN: "练习清晰地发词尾辅音，不加任何元音。特别注意-ts, -ks, -ps, -ths, -lds。",
        practiceWords: ["students", "tasks", "helped", "months", "worlds", "asked", "texts", "next", "sixths", "strengths"]
      },
      {
        sound: "Past tense -ed endings",
        soundCN: "过去式-ed词尾",
        problem: "The -ed ending has three pronunciations: /t/, /d/, and /ɪd/. Chinese speakers often default to /ɪd/ for all.",
        problemCN: "-ed词尾有三种发音：/t/、/d/和/ɪd/。中国人经常全部发成/ɪd/。",
        tip: "/t/ after voiceless consonants (walked, stopped). /d/ after voiced sounds (played, learned). /ɪd/ after t or d (started, needed).",
        tipCN: "清辅音后发/t/（walked, stopped）。浊音后发/d/（played, learned）。t或d后发/ɪd/（started, needed）。",
        practiceWords: ["walked", "played", "started", "stopped", "learned", "needed", "watched", "organised", "graduated", "collected"]
      },
      {
        sound: "Vowel length and quality",
        soundCN: "元音长度和质量",
        problem: "Chinese speakers often do not distinguish between long and short vowels, or tense and lax vowels.",
        problemCN: "中国人经常不区分长短元音或紧松元音。",
        tip: "Practice minimal pairs: ship/sheep, bit/beat, full/fool, pull/pool. The long vowels need more jaw and lip movement.",
        tipCN: "练习最小对立组：ship/sheep, bit/beat, full/fool, pull/pool。长元音需要更大的嘴巴和嘴唇动作。",
        practiceWords: ["ship", "sheep", "bit", "beat", "full", "fool", "pull", "pool", "live", "leave"]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DAILY PRACTICE ROUTINE — 每日练习计划
  // ═══════════════════════════════════════════════════════════════════════════
  dailyPractice: {
    title: "Daily Speaking Practice Routine (每日口语练习计划)",
    titleCN: "每日口语练习计划",
    targetMinutes: 45,
    routine: [
      {
        activity: "Warm-up: Read Aloud Practice",
        activityCN: "热身：朗读练习",
        minutes: 10,
        description: "Read 2-3 passages aloud. Focus on stress, intonation, and smooth delivery. Record yourself and listen back.",
        descriptionCN: "朗读2-3段文字。专注于重音、语调和流畅表达。录音并回听。"
      },
      {
        activity: "Repeat Sentence Drills",
        activityCN: "复述句子训练",
        minutes: 15,
        description: "Use the practice bank. Start with 5 easy, then 5 medium, then 5 hard. Focus on chunking and immediate recall.",
        descriptionCN: "使用练习库。先练5个简单的，再5个中等，最后5个困难。专注于分块和即时回忆。"
      },
      {
        activity: "Describe Image Practice",
        activityCN: "描述图片练习",
        minutes: 10,
        description: "Practice with 2-3 images. Use your template. Time yourself to 40 seconds. Aim for continuous speech with no pauses longer than 2 seconds.",
        descriptionCN: "练习2-3张图片。使用你的模板。计时40秒。目标是连续说话，停顿不超过2秒。"
      },
      {
        activity: "Pronunciation Focus",
        activityCN: "发音专项",
        minutes: 5,
        description: "Pick one sound challenge from the pronunciation guide. Practice 10 words with that sound. Record and compare.",
        descriptionCN: "从发音指南中选一个发音难点。练习10个含有该发音的词。录音并对比。"
      },
      {
        activity: "ASQ Speed Drill",
        activityCN: "简答快速练习",
        minutes: 5,
        description: "Go through 20 ASQ questions. Answer within 2 seconds each. Mark any you hesitate on for review.",
        descriptionCN: "过20道简答题。每题2秒内回答。标记犹豫的题目复习。"
      }
    ],
    weeklyGoals: [
      { goal: "Complete all 200 RS sentences at least once", goalCN: "完成所有200个复述句子至少一次" },
      { goal: "Master all 6 DI templates so you can use them without thinking", goalCN: "掌握所有6个DI模板，能不假思索地使用" },
      { goal: "Reduce pronunciation errors on your top 3 problem sounds", goalCN: "减少你前3个发音问题的错误" },
      { goal: "Record and review at least 5 full speaking responses", goalCN: "录音并回顾至少5个完整的口语回答" }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Get practice sentences filtered by difficulty
 * @param {string} difficulty - "easy", "medium", or "hard"
 * @returns {Array} Filtered sentences
 */
function getRepeatSentencesByDifficulty(difficulty) {
  return SPEAKING_TEMPLATES.repeatSentence.practiceBank.filter(function(item) {
    return item.difficulty === difficulty;
  });
}

/**
 * Get practice sentences filtered by topic
 * @param {string} topic - e.g. "campus", "science", "health", etc.
 * @returns {Array} Filtered sentences
 */
function getRepeatSentencesByTopic(topic) {
  return SPEAKING_TEMPLATES.repeatSentence.practiceBank.filter(function(item) {
    return item.topic === topic;
  });
}

/**
 * Get a random set of practice sentences
 * @param {number} count - How many sentences to return
 * @param {string} [difficulty] - Optional difficulty filter
 * @returns {Array} Random selection of sentences
 */
function getRandomRepeatSentences(count, difficulty) {
  var pool = difficulty
    ? getRepeatSentencesByDifficulty(difficulty)
    : SPEAKING_TEMPLATES.repeatSentence.practiceBank;

  var shuffled = pool.slice();
  var i, j, temp;
  for (i = shuffled.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get the DI template for a specific chart type
 * @param {string} chartType - "bar", "line", "pie", "table", "process", "map", "mixed"
 * @returns {Object|null} The template object or null
 */
function getDITemplate(chartType) {
  var templates = SPEAKING_TEMPLATES.describeImage.templates;
  for (var i = 0; i < templates.length; i++) {
    if (templates[i].type === chartType) {
      return templates[i];
    }
  }
  return null;
}

/**
 * Get all available topics in the RS practice bank
 * @returns {Array} List of unique topics
 */
function getAvailableTopics() {
  var topics = {};
  var bank = SPEAKING_TEMPLATES.repeatSentence.practiceBank;
  for (var i = 0; i < bank.length; i++) {
    topics[bank[i].topic] = true;
  }
  return Object.keys(topics);
}

/**
 * Get practice bank statistics
 * @returns {Object} Counts by difficulty and topic
 */
function getPracticeBankStats() {
  var bank = SPEAKING_TEMPLATES.repeatSentence.practiceBank;
  var stats = {
    total: bank.length,
    byDifficulty: { easy: 0, medium: 0, hard: 0 },
    byTopic: {}
  };

  for (var i = 0; i < bank.length; i++) {
    stats.byDifficulty[bank[i].difficulty]++;
    if (!stats.byTopic[bank[i].topic]) {
      stats.byTopic[bank[i].topic] = 0;
    }
    stats.byTopic[bank[i].topic]++;
  }

  return stats;
}
