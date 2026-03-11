/* PTE Write-It-Right — Guided Writing Data */

// 1. ESSAY STRUCTURE — PTE uses 4-paragraph structure
var ESSAY_STRUCTURE = {
  intro: {
    label: 'Introduction',
    color: '#2c5f8a',
    colorLight: '#e8f0f8',
    role: 'Hook the reader, state the topic, give your thesis (position).',
    target: '40-60 words',
    starters: [
      'In recent years, there has been considerable debate about whether [topic]. I [firmly/strongly] believe that [your position].',
      'It is widely acknowledged that [general statement about topic]. However, the question of whether [specific debate] remains controversial. I contend that [position].',
      '[Topic] has become one of the most pressing issues in contemporary society. This essay will argue that [position], supported by [brief preview of arguments].',
      'The question of whether [topic] has generated significant discussion. While some argue that [opposing view], I maintain that [your view] for the following reasons.'
    ],
    tips: [
      'Never copy the question word-for-word — paraphrase it.',
      'State your position clearly in the introduction.',
      'Keep it 2-3 sentences. Don\'t give evidence here.',
      'Use academic hedging: "tend to", "may", "it appears that".'
    ]
  },
  body1: {
    label: 'Body Paragraph 1',
    color: '#27ae60',
    colorLight: '#e8f8ef',
    role: 'Present your STRONGEST argument with evidence and explanation.',
    target: '60-80 words',
    starters: [
      'One of the primary reasons for this view is that [argument]. For example, [evidence/example]. This demonstrates that [explanation linking back to thesis].',
      'Firstly, [argument]. Research has shown that [evidence]. As a result, [consequence], which supports the view that [link to thesis].',
      'The most compelling argument in favour of [position] is [argument]. A notable example of this is [specific case], where [what happened]. This clearly illustrates that [link].',
      'To begin with, [argument]. This is evidenced by [evidence], which suggests that [interpretation]. Consequently, [link to thesis].'
    ],
    tips: [
      'Start with a clear topic sentence stating your argument.',
      'Include at least one specific example or piece of evidence.',
      'Always EXPLAIN how your evidence supports your thesis.',
      'Use linking words: Firstly, For example, As a result, Therefore.'
    ]
  },
  body2: {
    label: 'Body Paragraph 2',
    color: '#e67e22',
    colorLight: '#fdf0e0',
    role: 'Present a second argument OR acknowledge the opposing view and counter it.',
    target: '60-80 words',
    starters: [
      'Furthermore, [second argument]. [Evidence/example]. This further supports the notion that [link to thesis].',
      'Admittedly, some may argue that [opposing view]. However, this perspective fails to account for [counter-evidence]. In reality, [your response], demonstrating that [link].',
      'In addition to [brief reference to Body 1], [second argument]. For instance, [example]. This serves to reinforce the argument that [link to thesis].',
      'While it is true that [concession], [counter-argument]. Evidence suggests that [counter-evidence], which ultimately supports the view that [link].'
    ],
    tips: [
      'Choose: second supporting argument OR concession + rebuttal.',
      'The concession approach (Admittedly... However...) scores higher for balance.',
      'Don\'t repeat arguments from Body 1.',
      'Use linking words: Furthermore, However, In addition, Nevertheless.'
    ]
  },
  conclusion: {
    label: 'Conclusion',
    color: '#8e44ad',
    colorLight: '#f3e8f9',
    role: 'Restate your position, summarise key points, end with a forward-looking statement.',
    target: '30-50 words',
    starters: [
      'In conclusion, [restatement of thesis]. As discussed, [brief summary of key arguments]. [Forward-looking statement].',
      'To sum up, the evidence clearly supports the view that [thesis]. Both [argument 1 reference] and [argument 2 reference] demonstrate this. It is therefore recommended that [suggestion/outlook].',
      'In light of the arguments presented, it is clear that [thesis]. Moving forward, [what should happen] to ensure [desired outcome].',
      'Taking all factors into consideration, [restatement]. Only through [action] can [positive outcome] be achieved.'
    ],
    tips: [
      'NEVER introduce new arguments in the conclusion.',
      'Keep it short — 2-3 sentences maximum.',
      'Restate your thesis using DIFFERENT words from the introduction.',
      'End with a call to action or future-looking statement.'
    ]
  }
};

// 2. ESSAY JIGSAW — scrambled paragraphs to arrange
var ESSAY_JIGSAW = [
  {
    topic: 'Should university education be free?',
    paragraphs: [
      { text: 'In recent years, the cost of university education has become a major concern for students and families worldwide. I firmly believe that university education should be free, as the long-term benefits to society far outweigh the costs.', role: 'I', color: '#2c5f8a' },
      { text: 'The most compelling argument for free university education is that it promotes social equality. Students from disadvantaged backgrounds are often unable to afford tuition fees, which prevents them from accessing higher education. For example, countries like Germany and Norway, where university education is free, have significantly higher rates of social mobility.', role: 'B1', color: '#27ae60' },
      { text: 'Admittedly, some argue that free education would be too expensive for governments. However, the economic returns of a well-educated workforce — including higher tax revenues, reduced unemployment, and greater innovation — far outweigh the initial investment. Research by the OECD has consistently shown that investment in education yields positive returns for national economies.', role: 'B2', color: '#e67e22' },
      { text: 'In conclusion, making university education free would create a more equitable society and generate long-term economic benefits. Governments should prioritise education funding to ensure that every citizen has the opportunity to reach their full potential.', role: 'C', color: '#8e44ad' }
    ]
  },
  {
    topic: 'Does technology improve or harm education?',
    paragraphs: [
      { text: 'The integration of technology into education has been a subject of heated debate. While there are concerns about its potential drawbacks, I strongly believe that technology, when used effectively, significantly enhances the learning experience.', role: 'I', color: '#2c5f8a' },
      { text: 'One of the primary advantages of educational technology is its ability to personalise learning. Adaptive software can identify each student\'s strengths and weaknesses, tailoring content accordingly. For instance, platforms like Khan Academy allow students to learn at their own pace, ensuring that no one is left behind or held back.', role: 'B1', color: '#27ae60' },
      { text: 'Furthermore, technology bridges geographical barriers to education. Students in remote areas can access world-class courses through online platforms, which would otherwise be impossible. Massive Open Online Courses (MOOCs) have already provided free education to millions of learners in developing countries, demonstrating technology\'s democratising potential.', role: 'B2', color: '#e67e22' },
      { text: 'In light of these arguments, it is evident that technology is a powerful tool for improving education. To maximise its benefits, educators and policymakers should focus on training teachers to integrate technology effectively and ensuring equitable access for all students.', role: 'C', color: '#8e44ad' }
    ]
  }
];

// 3. ERROR SPOTTING EXERCISES — find and fix Chinese-speaker errors
var ERROR_EXERCISES = [
  {
    id: 'err1', category: 'Articles',
    sentence: 'Education is very important for the economic development of the country.',
    error: 'the economic development',
    corrected: 'Education is very important for economic development of a country.',
    explanation: 'When talking about concepts in general, don\'t use "the". "Economic development" as a general concept needs no article. Also, "the country" implies one specific country — use "a country" for any country.',
    hint: 'Look at the articles (a, an, the).'
  },
  {
    id: 'err2', category: 'Articles',
    sentence: 'The social media has changed how the people communicate with each other.',
    error: 'The social media... the people',
    corrected: 'Social media has changed how people communicate with each other.',
    explanation: '"Social media" is uncountable and used in a general sense — no article needed. "People" in general also takes no article.',
    hint: 'Are these nouns general or specific?'
  },
  {
    id: 'err3', category: 'Subject-Verb Agreement',
    sentence: 'The number of students who choose to study abroad have increased dramatically.',
    error: 'have increased',
    corrected: 'The number of students who choose to study abroad has increased dramatically.',
    explanation: '"The number of" is the subject (singular), not "students". Compare: "A number of students have..." (here "students" is effectively the subject).',
    hint: 'What is the real subject of this sentence?'
  },
  {
    id: 'err4', category: 'Run-on Sentence',
    sentence: 'Technology has many benefits it helps people communicate more efficiently it also improves productivity.',
    error: 'Run-on: three sentences joined without connectors',
    corrected: 'Technology has many benefits. It helps people communicate more efficiently, and it also improves productivity.',
    explanation: 'This is a run-on sentence — three independent clauses with no punctuation or connectors. Use periods, semicolons, or conjunctions to separate them.',
    hint: 'How many complete thoughts are in this sentence?'
  },
  {
    id: 'err5', category: 'Although...But',
    sentence: 'Although technology is useful, but it can also cause problems.',
    error: 'Although... but',
    corrected: 'Although technology is useful, it can also cause problems.',
    explanation: 'In English, "although" and "but" cannot be used together. Choose one: "Although X, Y" or "X, but Y".',
    hint: 'Can you use "although" and "but" together?'
  },
  {
    id: 'err6', category: 'Tense Consistency',
    sentence: 'Last year, the government announces a new education policy and it affects millions of students.',
    error: 'announces... affects',
    corrected: 'Last year, the government announced a new education policy and it affected millions of students.',
    explanation: '"Last year" signals past tense. All verbs describing this event must be in past tense: announced, affected.',
    hint: 'When did this happen?'
  },
  {
    id: 'err7', category: 'Word Order',
    sentence: 'I very much agree with the view that education should be free.',
    error: 'very much agree',
    corrected: 'I strongly agree with the view that education should be free.',
    explanation: '"Very much agree" sounds like a direct translation from Chinese (非常同意). In English, we say "strongly agree" or "wholeheartedly agree".',
    hint: 'Is this a natural English collocation?'
  },
  {
    id: 'err8', category: 'Prepositions',
    sentence: 'The impact of technology to our daily life is significant.',
    error: 'impact... to',
    corrected: 'The impact of technology on our daily life is significant.',
    explanation: '"Impact" takes the preposition "on", not "to". This is a common error for Chinese speakers because 对...的影响 translates literally as "to...impact".',
    hint: 'Which preposition goes with "impact"?'
  },
  {
    id: 'err9', category: 'Plural/Singular',
    sentence: 'There are many advantage of studying abroad, such as cultural exposure.',
    error: 'many advantage',
    corrected: 'There are many advantages of studying abroad, such as cultural exposure.',
    explanation: '"Many" requires a plural noun. "Many advantage" should be "many advantages".',
    hint: 'After "many", should the noun be singular or plural?'
  },
  {
    id: 'err10', category: 'Direct Translation',
    sentence: 'With the development of technology, our life becomes more convenient.',
    error: 'With the development of technology',
    corrected: 'As technology has advanced, our lives have become more convenient.',
    explanation: '"With the development of..." (随着...的发展) is a common Chinese-English pattern that sounds unnatural. Use "As X has developed/advanced" instead. Also: "lives" (plural) and "have become" (present perfect).',
    hint: 'Does this opening sound natural in English?'
  },
  {
    id: 'err11', category: 'Passive Voice Overuse',
    sentence: 'It is believed by many people that education is considered to be important by society.',
    error: 'Double passive',
    corrected: 'Many people believe that education is essential for society.',
    explanation: 'Too many passive constructions make sentences awkward. Use active voice when the subject is clear: "Many people believe" instead of "It is believed by many people".',
    hint: 'Can you simplify this sentence?'
  },
  {
    id: 'err12', category: 'Pronoun Reference',
    sentence: 'Students should ask their teachers for help because they have more experience.',
    error: 'Unclear "they"',
    corrected: 'Students should ask their teachers for help because the teachers have more experience.',
    explanation: '"They" is ambiguous — does it refer to students or teachers? Replace the pronoun with the noun to make it clear.',
    hint: 'Who does "they" refer to?'
  }
];

// 4. SWT TEMPLATES — guided single-sentence construction
var SWT_GUIDE = {
  structure: '[Main idea] + [connecting element] + [supporting detail or consequence].',
  templates: [
    { label: 'Cause-Effect', pattern: '[Main finding], which [has led to / results in] [consequence].', example: 'Urbanization has accelerated globally, which has led to increased demand for sustainable infrastructure and public services.' },
    { label: 'Addition', pattern: '[Main idea], and [additional key point], [resulting in / suggesting] [implication].', example: 'Social media has transformed global communication, and its widespread adoption among younger demographics has raised significant concerns about mental health and privacy.' },
    { label: 'Contrast', pattern: 'Although [one perspective/finding], [contrasting point], [suggesting/demonstrating] [conclusion].', example: 'Although renewable energy costs have decreased significantly, the transition away from fossil fuels remains slow due to infrastructure limitations and political resistance.' },
    { label: 'Complex', pattern: '[Topic/study/article] [discusses/reveals/demonstrates] that [main point], [with/while] [qualifying detail], [which/thereby] [implication].', example: 'The article discusses how artificial intelligence is transforming healthcare diagnostics, with machine learning algorithms achieving accuracy rates comparable to experienced physicians, which could significantly improve access to medical care in underserved regions.' }
  ],
  checklist: [
    'Is it ONE single sentence? (Only one period at the end)',
    'Is it between 5 and 75 words?',
    'Does it capture the MAIN idea of the passage?',
    'Does it include at least one key supporting detail?',
    'Have you used a connecting word (which, while, although, and)?',
    'Is the grammar correct? (Check subject-verb agreement)',
    'Have you used your OWN words? (Don\'t copy phrases from the passage)'
  ]
};

// 5. PARAGRAPH QUALITY SAMPLES — for grading exercise
var PARAGRAPH_SAMPLES = [
  {
    grade: 'A',
    text: 'One of the most significant advantages of renewable energy is its potential to mitigate climate change. Unlike fossil fuels, which release harmful greenhouse gases into the atmosphere, solar and wind power generate electricity without producing carbon emissions. For instance, Denmark\'s ambitious wind energy program has enabled the country to meet approximately 50% of its electricity needs from wind power alone, resulting in a substantial reduction in national carbon emissions. This compelling evidence demonstrates that widespread adoption of renewable energy sources is not only feasible but essential for addressing the global climate crisis.',
    feedback: 'Clear topic sentence, specific evidence (Denmark example), strong explanation linking back to the argument. Academic vocabulary used naturally.'
  },
  {
    grade: 'C',
    text: 'Renewable energy is good for the environment. It doesn\'t cause pollution. Many countries use solar and wind power now. This is better than using coal and oil because they are bad for the planet.',
    feedback: 'Has a point but lacks specific evidence. Vocabulary is basic ("good", "bad"). No linking words to connect ideas. Needs more explanation and academic language.'
  },
  {
    grade: 'E',
    text: 'I think renewable energy is important. Because it is good. Many people think so. The government should do something about it.',
    feedback: 'Very vague — no specific argument, no evidence, no explanation. "Because it is good" is not a reason. Sentence fragments. No academic vocabulary.'
  }
];

// 6. ACADEMIC WORD LIST — key terms to detect in student writing
var PTE_KEY_TERMS = [
  'furthermore', 'moreover', 'consequently', 'nevertheless', 'however',
  'therefore', 'additionally', 'significantly', 'demonstrate', 'indicate',
  'suggest', 'argue', 'contend', 'maintain', 'assert',
  'evidence', 'substantial', 'considerable', 'fundamental', 'crucial',
  'essential', 'beneficial', 'detrimental', 'facilitate', 'contribute',
  'enhance', 'diminish', 'impact', 'influence', 'perspective',
  'acknowledge', 'admittedly', 'compelling', 'prevalent', 'inevitable',
  'comprehensive', 'implementation', 'predominantly', 'conversely', 'whereas',
  'despite', 'although', 'ultimately', 'advocate', 'emphasize',
  'illustrate', 'evaluate', 'analyse', 'implication', 'correlation'
];

// 7. CONNECTIVES ORGANIZED BY FUNCTION
var PTE_CONNECTIVES = {
  adding: { label: 'Adding Ideas', color: '#27ae60', words: ['Furthermore', 'Moreover', 'In addition', 'Additionally', 'Besides', 'Not only... but also'] },
  contrast: { label: 'Contrasting', color: '#e67e22', words: ['However', 'Nevertheless', 'On the other hand', 'Conversely', 'In contrast', 'Despite this', 'Although', 'While'] },
  cause: { label: 'Cause & Effect', color: '#2c5f8a', words: ['Therefore', 'Consequently', 'As a result', 'Thus', 'Hence', 'This leads to', 'Due to', 'Owing to'] },
  example: { label: 'Giving Examples', color: '#8e44ad', words: ['For example', 'For instance', 'Such as', 'Specifically', 'In particular', 'A case in point is'] },
  concluding: { label: 'Concluding', color: '#c0392b', words: ['In conclusion', 'To sum up', 'In summary', 'Taking everything into account', 'Ultimately', 'All things considered'] },
  conceding: { label: 'Conceding', color: '#7f8c8d', words: ['Admittedly', 'It is true that', 'Granted', 'While it may be argued', 'Despite the fact that', 'Notwithstanding'] }
};

// 8. TOPIC ANALYSIS — how to decode PTE essay questions
var TOPIC_TYPES = [
  { type: 'Agree/Disagree', signal: 'To what extent do you agree or disagree?', strategy: 'State your position clearly. Give 2 arguments supporting your view. You can acknowledge the other side briefly.', example: 'Some people believe that zoos are cruel. To what extent do you agree or disagree?' },
  { type: 'Discuss Both Views', signal: 'Discuss both views and give your opinion.', strategy: 'Present one side, then the other, then give YOUR opinion. The opinion paragraph is crucial.', example: 'Some people prefer to work from home, while others prefer working in an office. Discuss both views and give your opinion.' },
  { type: 'Problem/Solution', signal: 'What are the causes/problems? What solutions can be suggested?', strategy: 'Paragraph 1: describe problems/causes. Paragraph 2: suggest solutions. Be specific.', example: 'Traffic congestion is a growing problem in many cities. What are the causes and what solutions can you suggest?' },
  { type: 'Advantages/Disadvantages', signal: 'Do the advantages outweigh the disadvantages?', strategy: 'Discuss advantages, then disadvantages. State which you think outweigh the other.', example: 'Online learning has become increasingly common. Do the advantages outweigh the disadvantages?' }
];
