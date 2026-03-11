/* ============================================================
   Grammar & Sentence Structure Data
   For PTE Write It Right - Module 8: Sentence Structure & Grammar
   ============================================================ */

// ── 1. SENTENCE TYPES ─────────────────────────────────────────
// Four sentence types with visual formulas and examples
var SENTENCE_TYPES = [
  {
    id: 'simple',
    title: 'Simple Sentence',
    formula: 'S + V (+ O/C)',
    color: '#2c5f8a',
    description: 'One independent clause with a single subject-verb pair. The foundation of all English sentences.',
    components: ['Subject', 'Verb', 'Object or Complement'],
    examples: [
      { text: 'Education improves society.', parts: [{w:'Education',r:'Subject'},{w:'improves',r:'Verb'},{w:'society.',r:'Object'}] },
      { text: 'Technology is essential.', parts: [{w:'Technology',r:'Subject'},{w:'is',r:'Linking Verb'},{w:'essential.',r:'Complement'}] },
      { text: 'Many students study abroad every year.', parts: [{w:'Many students',r:'Subject'},{w:'study',r:'Verb'},{w:'abroad',r:'Adverb'},{w:'every year.',r:'Time'}] }
    ],
    tips: ['Every sentence MUST have a subject and a verb.', 'Use "it" or "there" as dummy subjects when needed.', 'Keep simple sentences clear — avoid run-ons.'],
    exercises: [
      { q: 'Identify the subject: "The quality of education determines economic growth."', a: ['The quality of education', 'education', 'economic growth'], ans: 0, exp: 'The full subject includes the prepositional phrase modifier.' },
      { q: 'Is this a simple sentence? "She studied hard and passed the exam."', a: ['Yes — one subject, two verbs', 'No — it has two clauses'], ans: 0, exp: 'Compound verbs (study + pass) sharing one subject = still a simple sentence.' },
      { q: 'Fix: "Very important to consider all options."', a: ['It is very important to consider all options.', 'Is very important to consider all options.', 'Important, consider all options.'], ans: 0, exp: 'English requires a subject. Add "It is" as a dummy subject.' }
    ]
  },
  {
    id: 'compound',
    title: 'Compound Sentence',
    formula: 'IC + , FANBOYS + IC',
    color: '#27ae60',
    description: 'Two independent clauses joined by a coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So).',
    components: ['Independent Clause 1', 'Comma + FANBOYS', 'Independent Clause 2'],
    examples: [
      { text: 'Technology creates jobs, and it boosts productivity.', parts: [{w:'Technology creates jobs',r:'IC1'},{w:', and',r:'Conjunction'},{w:'it boosts productivity.',r:'IC2'}] },
      { text: 'Education is costly, but it is a worthwhile investment.', parts: [{w:'Education is costly',r:'IC1'},{w:', but',r:'Conjunction'},{w:'it is a worthwhile investment.',r:'IC2'}] },
      { text: 'Governments must act now, or the crisis will worsen.', parts: [{w:'Governments must act now',r:'IC1'},{w:', or',r:'Conjunction'},{w:'the crisis will worsen.',r:'IC2'}] }
    ],
    tips: ['FANBOYS: For, And, Nor, But, Or, Yet, So.', 'Always place a COMMA before the conjunction.', 'Both clauses must be complete sentences on their own.', 'You can also use a semicolon (;) instead of comma + FANBOYS.'],
    exercises: [
      { q: 'Which is a correct compound sentence?', a: ['The cost is high, but the benefits are clear.', 'The cost is high but the benefits are clear.', 'The cost is high. But the benefits are clear.'], ans: 0, exp: 'Compound sentences need a comma before the FANBOYS conjunction.' },
      { q: 'Join: "Online learning is flexible. It lacks social interaction."', a: ['Online learning is flexible, yet it lacks social interaction.', 'Online learning is flexible yet it lacks social interaction.', 'Although online learning is flexible, it lacks social interaction.'], ans: 0, exp: 'Use comma + "yet" (contrast conjunction) to form a compound sentence.' },
      { q: 'What does FANBOYS stand for?', a: ['For, And, Nor, But, Or, Yet, So', 'First, And, Next, But, Or, Yet, Since', 'For, Also, Nor, But, Or, Yes, So'], ans: 0, exp: 'FANBOYS = For, And, Nor, But, Or, Yet, So — the 7 coordinating conjunctions.' }
    ]
  },
  {
    id: 'complex',
    title: 'Complex Sentence',
    formula: 'DC + , + IC  or  IC + DC',
    color: '#e67e22',
    description: 'One independent clause + one or more dependent clauses (starting with subordinating conjunctions or relative pronouns).',
    components: ['Independent Clause', 'Dependent Clause (with subordinator)'],
    examples: [
      { text: 'Although technology has benefits, it can also be distracting.', parts: [{w:'Although technology has benefits',r:'Dependent Clause'},{w:', ',r:'Comma'},{w:'it can also be distracting.',r:'Independent Clause'}] },
      { text: 'Education is essential because it promotes equality.', parts: [{w:'Education is essential',r:'Independent Clause'},{w:'because it promotes equality.',r:'Dependent Clause'}] },
      { text: 'Students who study regularly tend to achieve higher grades.', parts: [{w:'Students',r:'Subject'},{w:'who study regularly',r:'Relative Clause'},{w:'tend to achieve higher grades.',r:'Predicate'}] }
    ],
    tips: ['If the dependent clause comes FIRST, use a comma after it.', 'If the independent clause comes first, usually NO comma is needed.', 'Common subordinators: because, although, while, since, if, when, before, after, unless, whereas.', 'Relative pronouns (who, which, that, whose) also create dependent clauses.'],
    exercises: [
      { q: 'Which word makes a clause dependent?', a: ['Although', 'And', 'Therefore'], ans: 0, exp: '"Although" is a subordinating conjunction that makes a clause dependent — it cannot stand alone.' },
      { q: 'Where does the comma go? "Because education is important governments invest in it."', a: ['After "important" — dependent clause comes first', 'After "Because" — separating the conjunction', 'No comma needed'], ans: 0, exp: 'When a dependent clause comes first, put a comma between the two clauses.' },
      { q: 'Identify the dependent clause: "Technology, which has transformed communication, is now essential."', a: ['which has transformed communication', 'Technology is now essential', 'is now essential'], ans: 0, exp: '"which has transformed communication" is a non-restrictive relative clause (dependent).' }
    ]
  },
  {
    id: 'compound-complex',
    title: 'Compound-Complex Sentence',
    formula: 'IC + , FANBOYS + IC + DC  (or variations)',
    color: '#8e44ad',
    description: 'At least two independent clauses AND at least one dependent clause. Shows the highest level of writing sophistication.',
    components: ['Independent Clause 1', 'Conjunction', 'Independent Clause 2', 'Dependent Clause'],
    examples: [
      { text: 'Although costs are high, governments should invest in education, and they must ensure equal access.', parts: [{w:'Although costs are high',r:'Dependent'},{w:', governments should invest in education',r:'IC1'},{w:', and',r:'Conjunction'},{w:'they must ensure equal access.',r:'IC2'}] },
      { text: 'Technology improves efficiency, but it can lead to unemployment if workers lack training.', parts: [{w:'Technology improves efficiency',r:'IC1'},{w:', but',r:'Conjunction'},{w:'it can lead to unemployment',r:'IC2'},{w:'if workers lack training.',r:'Dependent'}] },
      { text: 'When evidence is considered, the benefits outweigh the costs, so the policy should be adopted.', parts: [{w:'When evidence is considered',r:'Dependent'},{w:', the benefits outweigh the costs',r:'IC1'},{w:', so',r:'Conjunction'},{w:'the policy should be adopted.',r:'IC2'}] }
    ],
    tips: ['Use 1-2 per essay to show writing sophistication.', 'Do NOT overuse — too many make writing hard to follow.', 'Always check that each clause has its own subject and verb.', 'Great for conclusion paragraphs and concession arguments.'],
    exercises: [
      { q: 'How many clauses does a compound-complex sentence need minimum?', a: ['3 (2 independent + 1 dependent)', '2 (1 independent + 1 dependent)', '4 (2 independent + 2 dependent)'], ans: 0, exp: 'Compound-complex = at least 2 independent + at least 1 dependent clause.' },
      { q: 'Which is compound-complex?', a: ['Although results vary, most studies agree, and experts recommend action.', 'Technology is helpful, and it saves time.', 'Because education matters, governments invest in it.'], ans: 0, exp: 'It has a dependent clause (Although...) + two independent clauses joined by "and".' },
      { q: 'Should you use compound-complex sentences frequently in PTE essays?', a: ['No — use 1-2 per essay for variety', 'Yes — use them in every paragraph', 'Never — they are too complicated'], ans: 0, exp: 'Use sparingly for sophistication. Too many make your writing hard to read.' }
    ]
  }
];

// ── 2. SENTENCE BUILDING BLOCKS ──────────────────────────────
// Core grammar components for constructing sentences
var BUILDING_BLOCKS = [
  {
    id: 'bb-subjects',
    title: 'Subjects',
    icon: '\uD83D\uDCCC',
    color: '#2c5f8a',
    desc: 'Who or what the sentence is about',
    patterns: [
      { name: 'Noun phrase', example: 'The rapid growth of technology has changed society.', highlight: 'The rapid growth of technology' },
      { name: 'Gerund phrase', example: 'Investing in education benefits the economy.', highlight: 'Investing in education' },
      { name: 'It + infinitive', example: 'It is important to consider all perspectives.', highlight: 'It' },
      { name: 'There + be', example: 'There are several reasons to support this view.', highlight: 'There' },
      { name: 'What-clause', example: 'What we need is comprehensive reform.', highlight: 'What we need' },
      { name: 'Whether-clause', example: 'Whether this policy succeeds depends on public support.', highlight: 'Whether this policy succeeds' }
    ]
  },
  {
    id: 'bb-verbs',
    title: 'Verb Phrases',
    icon: '\u26A1',
    color: '#c0392b',
    desc: 'The action or state — the engine of the sentence',
    patterns: [
      { name: 'Active voice', example: 'Governments should implement stricter regulations.', highlight: 'should implement' },
      { name: 'Passive voice', example: 'Stricter regulations should be implemented by governments.', highlight: 'should be implemented' },
      { name: 'Modal + verb', example: 'Education can transform communities.', highlight: 'can transform' },
      { name: 'Linking verb', example: 'The situation remains critical.', highlight: 'remains' },
      { name: 'Phrasal verb (formal)', example: 'The government carried out extensive reforms.', highlight: 'carried out' },
      { name: 'Reporting verb + that', example: 'Research suggests that early intervention is effective.', highlight: 'suggests that' }
    ]
  },
  {
    id: 'bb-objects',
    title: 'Objects & Complements',
    icon: '\uD83C\uDFAF',
    color: '#27ae60',
    desc: 'What receives the action or completes the meaning',
    patterns: [
      { name: 'Direct object', example: 'Technology improves efficiency.', highlight: 'efficiency' },
      { name: 'That-clause object', example: 'Studies indicate that exercise reduces stress.', highlight: 'that exercise reduces stress' },
      { name: 'Adjective complement', example: 'The policy is effective.', highlight: 'effective' },
      { name: 'Noun complement', example: 'She became a researcher.', highlight: 'a researcher' },
      { name: 'Infinitive object', example: 'Governments need to invest in infrastructure.', highlight: 'to invest in infrastructure' },
      { name: 'Gerund object', example: 'Many people enjoy working from home.', highlight: 'working from home' }
    ]
  },
  {
    id: 'bb-modifiers',
    title: 'Modifiers & Adverbials',
    icon: '\uD83D\uDD27',
    color: '#e67e22',
    desc: 'Add detail: when, where, how, why, how much',
    patterns: [
      { name: 'Prepositional phrase', example: 'In recent years, technology has advanced rapidly.', highlight: 'In recent years' },
      { name: 'Adverb of degree', example: 'This approach significantly reduces costs.', highlight: 'significantly' },
      { name: 'Participle phrase', example: 'Having considered the evidence, the committee made its decision.', highlight: 'Having considered the evidence' },
      { name: 'Purpose infinitive', example: 'Countries invest in education to improve competitiveness.', highlight: 'to improve competitiveness' },
      { name: 'Relative clause', example: 'Students who study regularly achieve better results.', highlight: 'who study regularly' },
      { name: 'Appositive', example: 'Education, a fundamental right, should be accessible to all.', highlight: 'a fundamental right' }
    ]
  }
];

// ── 3. SENTENCE COMBINING EXERCISES ──────────────────────────
// Practice joining simple sentences into compound/complex ones
var COMBINING_EXERCISES = [
  {
    id: 'comb1',
    simple: ['Technology is helpful.', 'Technology can be distracting.'],
    techniques: [
      { method: 'Compound (but)', result: 'Technology is helpful, but it can be distracting.' },
      { method: 'Complex (although)', result: 'Although technology is helpful, it can be distracting.' },
      { method: 'Complex (while)', result: 'While technology is helpful, it can also be distracting.' }
    ]
  },
  {
    id: 'comb2',
    simple: ['Education is important.', 'Education promotes equality.'],
    techniques: [
      { method: 'Complex (because)', result: 'Education is important because it promotes equality.' },
      { method: 'Complex (as)', result: 'As education promotes equality, it is considered important.' },
      { method: 'Relative clause', result: 'Education, which promotes equality, is of paramount importance.' }
    ]
  },
  {
    id: 'comb3',
    simple: ['Pollution damages health.', 'Governments must take action.'],
    techniques: [
      { method: 'Complex (since)', result: 'Since pollution damages health, governments must take action.' },
      { method: 'Compound (so)', result: 'Pollution damages health, so governments must take action.' },
      { method: 'Compound-complex', result: 'Pollution damages health, so governments must take action, and they should do so urgently.' }
    ]
  },
  {
    id: 'comb4',
    simple: ['Students use social media.', 'Social media affects their mental health.'],
    techniques: [
      { method: 'Relative clause', result: 'Students use social media, which affects their mental health.' },
      { method: 'Complex (when)', result: 'When students use social media excessively, it affects their mental health.' },
      { method: 'Gerund subject', result: 'Using social media excessively affects students\' mental health.' }
    ]
  },
  {
    id: 'comb5',
    simple: ['The government increased taxes.', 'Citizens protested.', 'The policy was eventually reversed.'],
    techniques: [
      { method: 'Complex (when + result)', result: 'When the government increased taxes, citizens protested, leading to the policy being reversed.' },
      { method: 'Compound-complex', result: 'The government increased taxes, but citizens protested, so the policy was eventually reversed.' },
      { method: 'Participle phrase', result: 'Having faced widespread protests after increasing taxes, the government eventually reversed the policy.' }
    ]
  },
  {
    id: 'comb6',
    simple: ['Remote work increases flexibility.', 'Remote work reduces commuting time.', 'Some workers feel isolated.'],
    techniques: [
      { method: 'Compound + concession', result: 'Remote work increases flexibility and reduces commuting time, yet some workers feel isolated.' },
      { method: 'Complex (although)', result: 'Although remote work increases flexibility and reduces commuting time, some workers feel isolated.' },
      { method: 'Despite + gerund', result: 'Despite increasing flexibility and reducing commuting time, remote work can leave some workers feeling isolated.' }
    ]
  },
  {
    id: 'comb7',
    simple: ['Exercise improves physical health.', 'Exercise boosts mental well-being.'],
    techniques: [
      { method: 'Not only...but also', result: 'Exercise not only improves physical health but also boosts mental well-being.' },
      { method: 'Both...and', result: 'Exercise improves both physical health and mental well-being.' },
      { method: 'In addition to', result: 'In addition to improving physical health, exercise boosts mental well-being.' }
    ]
  },
  {
    id: 'comb8',
    simple: ['Climate change is accelerating.', 'Many species are facing extinction.'],
    techniques: [
      { method: 'Complex (as)', result: 'As climate change accelerates, many species are facing extinction.' },
      { method: 'Cause-effect', result: 'Climate change is accelerating, resulting in many species facing extinction.' },
      { method: 'Which-clause', result: 'Climate change is accelerating, which is causing many species to face extinction.' }
    ]
  }
];

// ── 4. GRAMMAR QUICK RULES ───────────────────────────────────
// Condensed grammar rules for quick reference and drilling
var GRAMMAR_QUICK_RULES = [
  {
    category: 'Articles',
    icon: '\uD83D\uDCD6',
    color: '#2c5f8a',
    rules: [
      { id: 'gq-a1', rule: 'No article for general uncountable nouns', ok: 'Education is important.', no: 'The education is important.', trap: 'Chinese has no articles, so this is the #1 error for Chinese speakers.' },
      { id: 'gq-a2', rule: 'No article for general plural nouns', ok: 'Computers have changed our lives.', no: 'The computers have changed our lives.', trap: 'General statements about a category use bare plural nouns.' },
      { id: 'gq-a3', rule: '"The" + of-phrase', ok: 'The role of technology is debated.', no: 'Role of technology is debated.', trap: 'If a noun has "of..." after it, it almost always needs "the".' },
      { id: 'gq-a4', rule: 'First mention = a/an, second = the', ok: 'I read a report. The report was useful.', no: 'I read the report. A report was useful.', trap: 'Track your nouns: introduce with a/an, refer back with the.' },
      { id: 'gq-a5', rule: '"A/an" for professions', ok: 'She is a teacher.', no: 'She is teacher.', trap: 'English always requires an article before job titles.' },
      { id: 'gq-a6', rule: '"The" for unique things', ok: 'The internet has changed everything.', no: 'Internet has changed everything.', trap: 'The sun, the government, the internet — unique things need "the".' },
      { id: 'gq-a7', rule: 'No article for fixed expressions', ok: 'She goes to school by bus.', no: 'She goes to the school by the bus.', trap: 'go to school/bed/work, at home, by car/bus — fixed phrases.' },
      { id: 'gq-a8', rule: '"An" before vowel SOUNDS', ok: 'An honest man. A university.', no: 'A honest man. An university.', trap: 'It depends on SOUND, not spelling. "Hour" = an, "university" = a.' }
    ]
  },
  {
    category: 'Subject-Verb Agreement',
    icon: '\uD83E\uDD1D',
    color: '#27ae60',
    rules: [
      { id: 'gq-sv1', rule: 'Verb agrees with head noun, not "of" phrase', ok: 'The list of items is long.', no: 'The list of items are long.', trap: 'Find the real subject before the "of" phrase.' },
      { id: 'gq-sv2', rule: 'Uncountable nouns = singular verb', ok: 'The news is alarming.', no: 'The news are alarming.', trap: 'news, information, advice, research, evidence = always singular.' },
      { id: 'gq-sv3', rule: 'There is/are agrees with following noun', ok: 'There are many reasons.', no: 'There is many reasons.', trap: 'Check the noun after "there is/are" to pick the right form.' },
      { id: 'gq-sv4', rule: 'Each/every + singular verb', ok: 'Each student has a textbook.', no: 'Each student have a textbook.', trap: '"Each" and "every" always take singular verbs.' },
      { id: 'gq-sv5', rule: 'Neither...nor — verb matches nearest', ok: 'Neither the teacher nor the students were ready.', no: 'Neither the teacher nor the students was ready.', trap: 'The verb agrees with the noun closest to it.' }
    ]
  },
  {
    category: 'Tenses',
    icon: '\u23F0',
    color: '#e67e22',
    rules: [
      { id: 'gq-t1', rule: 'Present simple for general truths', ok: 'Technology plays a key role.', no: 'Technology is playing a key role. (for general statements)', trap: 'Default to present simple for essay claims and general facts.' },
      { id: 'gq-t2', rule: 'Simple past + specific time marker', ok: 'She graduated in 2020.', no: 'She has graduated in 2020.', trap: 'If you see "last year," "in 2020," etc., use simple past.' },
      { id: 'gq-t3', rule: 'Present perfect for continuing situations', ok: 'She has worked here for 10 years. (still works)', no: 'She worked here for 10 years. (implies she left)', trap: 'Use present perfect with "for/since" for ongoing situations.' },
      { id: 'gq-t4', rule: 'No "will" in if-clauses', ok: 'If it rains, we will cancel.', no: 'If it will rain, we will cancel.', trap: 'After "if," use present tense even for future meaning.' },
      { id: 'gq-t5', rule: 'No "will" in time clauses', ok: 'When she arrives, we will start.', no: 'When she will arrive, we will start.', trap: 'After when/before/after/until, use present tense for future.' },
      { id: 'gq-t6', rule: 'Present simple for citing research', ok: 'Research shows that...', no: 'Research has been showing that...', trap: 'Use "studies show/suggest/indicate" for current findings.' }
    ]
  },
  {
    category: 'Clauses & Connectors',
    icon: '\uD83D\uDD17',
    color: '#8e44ad',
    rules: [
      { id: 'gq-c1', rule: 'Never use "although" + "but"', ok: 'Although it is costly, it is worthwhile.', no: 'Although it is costly, but it is worthwhile.', trap: 'Pick ONE: "although...," OR "..., but..." Never combine.' },
      { id: 'gq-c2', rule: '"Despite/in spite of" + noun only', ok: 'Despite the rain, we continued.', no: 'Despite it rained, we continued.', trap: 'After despite, use a noun or -ing, never a full clause.' },
      { id: 'gq-c3', rule: '"Who" for people, "which" for things', ok: 'Teachers who inspire are valued.', no: 'Teachers which inspire are valued.', trap: 'Always use "who" when referring to people.' },
      { id: 'gq-c4', rule: 'No double pronoun in relative clauses', ok: 'The policy which was introduced...', no: 'The policy which it was introduced...', trap: 'The relative pronoun replaces the pronoun — do not keep both.' },
      { id: 'gq-c5', rule: '"So that" + modal for purpose', ok: 'We study so that we can succeed.', no: 'We study so that we succeed.', trap: 'After "so that," include a modal: can, will, may.' },
      { id: 'gq-c6', rule: '"Whether" in formal positions, not "if"', ok: 'Whether this works depends on effort.', no: 'If this works depends on effort.', trap: 'Use "whether" as subject or after prepositions.' },
      { id: 'gq-c7', rule: 'Non-restrictive = commas + which/who', ok: 'The policy, which was introduced in 2020, works.', no: 'The policy, that was introduced in 2020, works.', trap: 'Extra-info clauses (with commas) use which/who, never that.' },
      { id: 'gq-c8', rule: '"Whose" for possession', ok: 'Countries whose economies struggle...', no: 'Countries that their economies struggle...', trap: 'Replace "that their" with "whose" in relative clauses.' }
    ]
  },
  {
    category: 'Word Order & Form',
    icon: '\uD83D\uDCDD',
    color: '#1a8a7d',
    rules: [
      { id: 'gq-w1', rule: 'S-V-O word order is mandatory', ok: 'Technology brings many benefits.', no: 'Many benefits technology brings.', trap: 'English has strict Subject-Verb-Object order.' },
      { id: 'gq-w2', rule: 'Every sentence needs a subject', ok: 'It is important to study.', no: 'Very important to study.', trap: 'Add "It is" or "There is" as dummy subject.' },
      { id: 'gq-w3', rule: 'Linking verbs take adjectives', ok: 'The food tastes good.', no: 'The food tastes well.', trap: 'After be/seem/look/feel/taste, use adjective not adverb.' },
      { id: 'gq-w4', rule: 'Passive: be + past participle', ok: 'The essay was written by a student.', no: 'The essay was wrote by a student.', trap: 'Always use the past participle form in passive voice.' },
      { id: 'gq-w5', rule: 'No plural for uncountable nouns', ok: 'She gave me much advice.', no: 'She gave me many advices.', trap: 'advice, information, equipment, furniture = no -s ever.' },
      { id: 'gq-w6', rule: 'Parallel structure in lists', ok: 'She likes reading, writing, and swimming.', no: 'She likes reading, to write, and swimming.', trap: 'All items in a list must use the same grammatical form.' }
    ]
  },
  {
    category: 'Common Chinese Speaker Errors',
    icon: '\uD83C\uDDE8\uD83C\uDDF3',
    color: '#c0392b',
    rules: [
      { id: 'gq-cn1', rule: 'Add articles (Chinese has none)', ok: 'The government should invest in education.', no: 'Government should invest in education.', trap: 'Chinese does not have articles. Always check: does this noun need a/an/the?' },
      { id: 'gq-cn2', rule: 'Add plural -s (Chinese has no plurals)', ok: 'Many students study abroad.', no: 'Many student study abroad.', trap: 'After many/several/few/most/some + plural noun.' },
      { id: 'gq-cn3', rule: 'Use correct tense (Chinese has no tenses)', ok: 'She graduated last year.', no: 'She graduate last year.', trap: 'Chinese does not conjugate verbs. Always mark tense in English.' },
      { id: 'gq-cn4', rule: 'Do not omit "be" in passive/continuous', ok: 'The project is being reviewed.', no: 'The project being reviewed.', trap: 'Chinese omits "be" — English requires it for passive and continuous.' },
      { id: 'gq-cn5', rule: 'Use "it" or "there" as dummy subject', ok: 'It is necessary to act.', no: 'Is necessary to act.', trap: 'Chinese allows subjectless sentences. English does not.' },
      { id: 'gq-cn6', rule: 'Do not translate "although...but..."', ok: 'Although it rains, we go.', no: 'Although it rains, but we go.', trap: 'In Chinese, "although" always pairs with "but." In English, pick one.' },
      { id: 'gq-cn7', rule: 'Use relative pronouns (Chinese uses none)', ok: 'People who work hard succeed.', no: 'People work hard succeed.', trap: 'Chinese relative clauses do not use "who/which." English requires them.' },
      { id: 'gq-cn8', rule: 'Subject-verb agreement', ok: 'He goes to school every day.', no: 'He go to school every day.', trap: 'Chinese verbs do not change form. English third person singular needs -s/-es.' }
    ]
  }
];

// ── 5. CLAUSE IDENTIFICATION EXERCISES ───────────────────────
// Identify clause types in real sentences
var CLAUSE_EXERCISES = [
  { id: 'clx1', sentence: 'Education is the most powerful weapon which you can use to change the world.', clauses: [{text:'Education is the most powerful weapon',type:'Independent'},{text:'which you can use to change the world',type:'Relative (Dependent)'}], sentenceType: 'Complex' },
  { id: 'clx2', sentence: 'Technology creates new opportunities, and it also presents new challenges.', clauses: [{text:'Technology creates new opportunities',type:'Independent'},{text:'it also presents new challenges',type:'Independent'}], sentenceType: 'Compound' },
  { id: 'clx3', sentence: 'Although the initial costs are high, the long-term benefits are substantial.', clauses: [{text:'Although the initial costs are high',type:'Dependent (Adverbial)'},{text:'the long-term benefits are substantial',type:'Independent'}], sentenceType: 'Complex' },
  { id: 'clx4', sentence: 'Governments must invest in education, or future generations will suffer.', clauses: [{text:'Governments must invest in education',type:'Independent'},{text:'future generations will suffer',type:'Independent'}], sentenceType: 'Compound' },
  { id: 'clx5', sentence: 'Research shows that regular exercise reduces the risk of chronic diseases.', clauses: [{text:'Research shows',type:'Independent (Main)'},{text:'that regular exercise reduces the risk of chronic diseases',type:'Dependent (Noun clause)'}], sentenceType: 'Complex' },
  { id: 'clx6', sentence: 'While technology has benefits, it can also be harmful, so we must use it wisely.', clauses: [{text:'While technology has benefits',type:'Dependent (Adverbial)'},{text:'it can also be harmful',type:'Independent'},{text:'we must use it wisely',type:'Independent'}], sentenceType: 'Compound-Complex' },
  { id: 'clx7', sentence: 'Students who participate in extracurricular activities develop better social skills, and they perform better academically.', clauses: [{text:'Students develop better social skills',type:'Independent'},{text:'who participate in extracurricular activities',type:'Dependent (Relative)'},{text:'they perform better academically',type:'Independent'}], sentenceType: 'Compound-Complex' },
  { id: 'clx8', sentence: 'The policy was implemented successfully.', clauses: [{text:'The policy was implemented successfully',type:'Independent'}], sentenceType: 'Simple' }
];

// ── 6. GRAMMAR DRILL QUESTIONS ───────────────────────────────
// Mixed grammar drill for quick practice
var GRAMMAR_DRILL_QUESTIONS = [
  { id: 'gd1', q: '___ education is widely regarded as essential for economic development.', options: ['Education (no article)', 'The education', 'An education'], ans: 0, cat: 'Articles', exp: 'General uncountable nouns take no article.' },
  { id: 'gd2', q: 'The impact of ___ climate change ___ becoming more apparent.', options: ['no article...is', 'the...is', 'no article...are'], ans: 0, cat: 'Articles', exp: '"Climate change" is general (no article). "Impact" is singular (is).' },
  { id: 'gd3', q: 'If the government ___ more in education, unemployment will decrease.', options: ['invests', 'will invest', 'invested'], ans: 0, cat: 'Tenses', exp: 'In if-clauses about the future, use present tense.' },
  { id: 'gd4', q: 'The number of students ___ increased significantly.', options: ['has', 'have', 'are'], ans: 0, cat: 'Agreement', exp: '"The number of" is singular — use "has."' },
  { id: 'gd5', q: 'Although the policy is expensive, ___ it has proven effective.', options: ['(no conjunction needed)', 'but', 'however'], ans: 0, cat: 'Connectors', exp: '"Although" already provides contrast — do not add "but."' },
  { id: 'gd6', q: 'Students ___ study regularly tend to achieve higher grades.', options: ['who', 'which', 'they'], ans: 0, cat: 'Clauses', exp: 'Use "who" for people in relative clauses.' },
  { id: 'gd7', q: 'Despite ___, the project was completed on time.', options: ['the difficulties', 'it was difficult', 'difficult'], ans: 0, cat: 'Connectors', exp: '"Despite" must be followed by a noun phrase, not a clause.' },
  { id: 'gd8', q: '___ is widely acknowledged that technology improves healthcare.', options: ['It', 'This', 'That'], ans: 0, cat: 'Structure', exp: '"It is + adjective/pp + that" is the impersonal construction.' },
  { id: 'gd9', q: 'She has been working here ___ 2019.', options: ['since', 'for', 'from'], ans: 0, cat: 'Tenses', exp: 'Use "since" with a specific point in time.' },
  { id: 'gd10', q: 'The research ___ that exercise reduces stress.', options: ['shows', 'is showing', 'has shown'], ans: 0, cat: 'Tenses', exp: 'Use present simple when citing current research findings.' },
  { id: 'gd11', q: 'Countries ___ economies depend on tourism face challenges.', options: ['whose', 'which their', 'that their'], ans: 0, cat: 'Clauses', exp: '"Whose" replaces possessive pronouns in relative clauses.' },
  { id: 'gd12', q: 'The government needs to invest more, ___ the economy will decline.', options: ['or', 'and', 'but'], ans: 0, cat: 'Connectors', exp: '"Or" introduces the negative alternative/consequence.' },
  { id: 'gd13', q: 'Many ___ believe that online learning is effective.', options: ['researchers', 'researcher', 'research'], ans: 0, cat: 'Agreement', exp: '"Many" requires a plural countable noun.' },
  { id: 'gd14', q: 'The policy, ___ was introduced last year, has been successful.', options: ['which', 'that', 'what'], ans: 0, cat: 'Clauses', exp: 'Non-restrictive clauses (with commas) use "which," not "that."' },
  { id: 'gd15', q: 'She gave me a lot of useful ___.', options: ['advice', 'advices', 'advise'], ans: 0, cat: 'Word Form', exp: '"Advice" is uncountable — no plural -s. "Advise" is a verb.' },
  { id: 'gd16', q: 'We must act now ___ future generations can benefit.', options: ['so that', 'so', 'because'], ans: 0, cat: 'Connectors', exp: '"So that" expresses purpose (followed by can/will/may).' },
  { id: 'gd17', q: 'The food tastes ___.', options: ['good', 'well', 'goodly'], ans: 0, cat: 'Word Form', exp: '"Taste" is a linking verb — use adjective "good," not adverb "well."' },
  { id: 'gd18', q: '___ to consider all options before making a decision.', options: ['It is important', 'Is important', 'Important'], ans: 0, cat: 'Structure', exp: 'Every English sentence needs a subject. Add "It is" as dummy subject.' },
  { id: 'gd19', q: 'When she ___ back, we will start the meeting.', options: ['comes', 'will come', 'is coming'], ans: 0, cat: 'Tenses', exp: 'Time clauses (when/before/after) use present tense for future meaning.' },
  { id: 'gd20', q: 'The essay was ___ by a talented student.', options: ['written', 'wrote', 'writing'], ans: 0, cat: 'Word Form', exp: 'Passive voice uses be + past participle: "was written."' }
];
