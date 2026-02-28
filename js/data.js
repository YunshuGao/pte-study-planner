/* ============================================================
   PTE + IELTS 42-Day Study Planner - Data File
   Period: Feb 28 - Apr 10, 2026 (Exam: Apr 10)
   ============================================================ */

// ── Start date anchor ──────────────────────────────────────
const START_DATE = new Date(2026, 1, 28); // Feb 28, 2026 (Saturday)

// ── 1. PHASES ──────────────────────────────────────────────
const PHASES = {
  foundation: { name: 'Foundation', color: '#3b82f6', scaffold: 'full', range: [1, 10] },
  intensive:  { name: 'Intensive',  color: '#f59e0b', scaffold: 'partial', range: [11, 28] },
  simulation: { name: 'Simulation', color: '#ef4444', scaffold: 'minimal', range: [29, 37] },
  taper:      { name: 'Taper',      color: '#22c55e', scaffold: 'none', range: [38, 41] },
  exam:       { name: 'Exam Day',   color: '#8b5cf6', scaffold: 'none', range: [42, 42] }
};

// ── 2. ESSAY_TOPICS ────────────────────────────────────────
const ESSAY_TOPICS = [
  // Real PTE prediction topics from 萤火虫 v8.06 Essay Bank
  { id: 1, ref: '#101001', topic: 'It is argued that getting married before finishing school or getting a job is foolish. To what extent do you agree or disagree?', category: 'Society',
    hints: { agree: ['negative impact on academic performance', 'financial burden', 'higher divorce rate'], disagree: ['stronger sense of responsibility', 'better coping with stress', 'mental health benefits'] } },
  { id: 2, ref: '#101002', topic: 'Some people think their success and accomplishments were influenced by the places where they grew up. Do you think the environment does or does not affect people\'s accomplishments?', category: 'Society',
    hints: { yes: ['adequate capital resources', 'sufficient educational resources', 'social networks and connections'], no: ['individual efforts overcome barriers', 'personality traits are innate', 'globalisation overcomes geographical barriers'] } },
  { id: 3, ref: '#101003', topic: 'Some people think human behaviors can be limited by laws, others think laws have little effect. What is your opinion?', category: 'Law',
    hints: { canLimit: ['severe punishments deter crime', 'laws shape values and ethics', 'people assume social responsibilities'], cannotLimit: ['people exploit loopholes', 'laws lack enforcement', 'crime rates remain high'] } },
  { id: 4, ref: '#101004', topic: 'In some companies, employers involve employees in the decision-making process of products and services. What are the advantages and disadvantages?', category: 'Business',
    hints: { advantages: ['increased employee loyalty', 'better business performance', 'meeting client demands'], disadvantages: ['conflicts between staff and management', 'decreased working efficiency', 'complex negotiation procedures'] } },
  { id: 5, ref: '#101005', topic: 'The formal written examination can be a valid method to assess students\' learning. To what extent do you agree or disagree?', category: 'Education',
    hints: { agree: ['clear measurement of knowledge mastery', 'removal of subjectivity in grading', 'comprehensive understanding of learning outcomes'], disagree: ['cannot assess practical ability', 'distorted results under pressure', 'neglects the learning process'] } },
  { id: 6, ref: '#101006', topic: 'The value of travel has been overrated. Do you think travel is a necessary component of a quality education?', category: 'Education',
    hints: { necessary: ['new approaches to academic research', 'effective language acquisition', 'deeper understanding of knowledge'], notNecessary: ['heavy financial burdens', 'reduced learning efficiency', 'online learning can substitute'] } },
  { id: 7, ref: '#101007', topic: 'For a less developed country, the disadvantages of tourism are as great as the advantages. Please discuss.', category: 'Tourism',
    hints: { advantages: ['generates employment', 'boosts consumption and GDP', 'promotes cultural exchange', 'develops infrastructure'], disadvantages: ['environmental pollution', 'erodes traditional customs', 'increases crime rate', 'financial burden on government'] } },
  { id: 8, ref: '#101008', topic: 'What are the advantages and disadvantages of extreme or adventure sports?', category: 'Sports',
    hints: { advantages: ['psychological satisfaction and thrill', 'broadens horizons', 'promotes physical fitness', 'relieves stress'], disadvantages: ['high risk of injury/death', 'not affordable for everyone', 'time-consuming', 'can dent confidence'] } },
  { id: 9, ref: '#101009', topic: 'The information revolution by modern mass communication has both positive and negative consequences for individuals and for society. To what extent do you agree?', category: 'Technology',
    hints: { positive: ['fast information transmission', 'fosters closer relationships', 'convenient communication'], negative: ['increase in cybercrime', 'decline in work performance', 'distractions from study'] } },
  { id: 10, ref: '#101010', topic: 'The mass media, including TV, radio and newspapers, influences our society and shapes our opinions and characters. What is your opinion?', category: 'Media',
    hints: { influencesSociety: ['strengthens social cohesion', 'stimulates consumption', 'can increase crime rates'], influencesIndividuals: ['makes people more objective', 'develops critical thinking', 'can cause wrong decisions'] } },
  { id: 11, ref: '#101011', topic: 'Mass media have a great influence on humans, particularly on the younger generation. It has a pivotal role in shaping people\'s opinions. Discuss.', category: 'Media',
    hints: { agree: ['fosters critical perspectives', 'broadens perspectives', 'diverse content shapes views'], disagree: ['can cause biased opinions', 'misleading political opinions', 'one-sided information'] } },
  { id: 12, ref: '#101012', topic: 'Climate change is a concerning global issue. Who should take the responsibilities: governments, big companies or individuals?', category: 'Environment',
    hints: { governments: ['effective climate governance', 'policy enforcement', 'financial resources allocation'], companies: ['emission control', 'green technology R&D', 'enhances public environmental awareness'], individuals: ['active participation enforces regulations', 'lifestyle choices reduce carbon', 'personal engagement matters'] } },
  { id: 13, ref: '#101087', topic: 'The Internet has made young people less willing to communicate with others face-to-face. To what extent do you agree?', category: 'Technology',
    hints: { agree: ['online socialising replaces face-to-face', 'social media addiction', 'reduced interpersonal skills'], disagree: ['internet facilitates long-distance communication', 'online communities build connections', 'digital tools enhance collaboration'] } },
  { id: 14, ref: '#101091', topic: 'Schools are focusing too much on examinations rather than education itself. To what extent do you agree?', category: 'Education',
    hints: { agree: ['exam-oriented learning ignores creativity', 'students memorise rather than understand', 'pressure harms mental health'], disagree: ['exams motivate study', 'standardised assessment is fair', 'exams prepare for competitive job market'] } },
  { id: 15, ref: '#101095', topic: 'After finishing high school, should young people find a job or go to university? Discuss both views.', category: 'Education',
    hints: { university: ['higher qualifications lead to better jobs', 'broader knowledge and skills', 'networking opportunities'], work: ['practical experience is valuable', 'financial independence earlier', 'avoid student debt'] } },
  { id: 16, ref: '#101096', topic: 'Technology has made our lives more interesting. Do you agree or disagree?', category: 'Technology',
    hints: { agree: ['entertainment and leisure options expanded', 'easier access to information', 'global connections possible'], disagree: ['screen addiction reduces real experiences', 'technology creates stress', 'loss of traditional activities'] } },
  { id: 17, ref: '#101099', topic: 'Human activities have caused the rising temperature. What can governments and individuals do to combat climate change?', category: 'Environment',
    hints: { governments: ['invest in renewable energy', 'enforce emission regulations', 'fund green infrastructure'], individuals: ['reduce carbon footprint', 'use public transport', 'adopt sustainable lifestyle'] } },
  { id: 18, ref: '#101100', topic: 'Nature versus nurture: which factor more influences people\'s personality and behaviour?', category: 'Psychology',
    hints: { nature: ['genetic traits determine temperament', 'innate talents and abilities', 'biological predispositions'], nurture: ['environment shapes behaviour', 'education develops character', 'cultural influences are powerful'] } },
  { id: 19, ref: '#101104', topic: 'Schools should use computers to replace books. To what extent do you agree?', category: 'Education',
    hints: { agree: ['interactive learning more engaging', 'access to vast digital resources', 'reduces paper waste'], disagree: ['screen time harms eyesight', 'digital distractions', 'not all students have equal access'] } },
  { id: 20, ref: '#101105', topic: 'Should everyone be required to learn a foreign language? Discuss.', category: 'Education',
    hints: { yes: ['broadens cultural understanding', 'improves career prospects', 'enhances cognitive abilities'], no: ['not everyone needs it professionally', 'time better spent on other skills', 'translation technology is improving'] } },
  { id: 21, ref: '#101106', topic: 'Who benefits most from globalisation: developed or developing countries? Discuss.', category: 'Economy',
    hints: { developed: ['access to cheaper labour', 'expanded markets', 'intellectual property advantages'], developing: ['foreign investment creates jobs', 'technology transfer', 'infrastructure development'] } },
  { id: 22, ref: '#101108', topic: 'Should countries host large international events such as the Olympics? Discuss advantages and disadvantages.', category: 'Society',
    hints: { advantages: ['boosts tourism and economy', 'improves infrastructure', 'national pride and unity'], disadvantages: ['enormous costs', 'displacement of local residents', 'facilities may be underused after'] } },
  { id: 23, ref: '#101116', topic: 'University education is a necessary condition for career success. Do you agree or disagree?', category: 'Education',
    hints: { agree: ['specialised knowledge is essential', 'degree opens doors', 'develops critical thinking'], disagree: ['many successful people lack degrees', 'practical skills matter more', 'entrepreneurship values experience'] } },
  { id: 24, ref: '#101117', topic: 'Should children attend after-school tutoring or spend time playing? Discuss.', category: 'Education',
    hints: { tutoring: ['academic improvement', 'competitive advantage', 'structured learning reinforcement'], playing: ['physical and mental development', 'creativity and social skills', 'prevents burnout'] } },
  { id: 25, ref: '#101119', topic: 'Professional athletes deserve higher salaries than other workers. Do you agree?', category: 'Sports',
    hints: { agree: ['short career span', 'exceptional talent and dedication', 'generate massive revenue'], disagree: ['essential workers underpaid by comparison', 'creates wrong values in society', 'salary should reflect social contribution'] } },
  { id: 26, ref: '#101125', topic: 'Teachers and nurses should be paid higher salaries. Do you agree?', category: 'Society',
    hints: { agree: ['essential roles in society', 'heavy workload and responsibility', 'attract better talent'], disagree: ['limited government budgets', 'job satisfaction not solely about money', 'market determines salary'] } },
  { id: 27, ref: '#101133', topic: 'Should schools require students to wear uniforms? Discuss both views.', category: 'Education',
    hints: { yes: ['reduces social inequality', 'promotes sense of belonging', 'fewer distractions'], no: ['limits self-expression', 'additional cost for families', 'does not improve academic performance'] } },
  { id: 28, ref: '#101142', topic: 'Is excessive competition beneficial or harmful for individuals and society? Discuss.', category: 'Society',
    hints: { beneficial: ['drives innovation and progress', 'motivates self-improvement', 'leads to better products/services'], harmful: ['mental health issues', 'unethical behaviour', 'widens inequality'] } },
  { id: 29, ref: '#101143', topic: 'Since AI can translate languages, is it still necessary to learn a foreign language? Discuss.', category: 'Technology',
    hints: { stillNecessary: ['cultural understanding requires language', 'AI cannot capture nuance and emotion', 'cognitive benefits of language learning'], notNecessary: ['AI translation is increasingly accurate', 'time better spent on other skills', 'real-time translation removes barriers'] } },
  { id: 30, ref: '#101144', topic: 'What impact has space travel had on modern life? Discuss.', category: 'Science',
    hints: { positive: ['technological spin-offs (GPS, materials)', 'scientific understanding expanded', 'inspires innovation'], negative: ['enormous costs diverted from Earth problems', 'environmental impact of launches', 'benefits limited to wealthy nations'] } }
];

// ── 3. IELTS_SPEAKING_TOPICS ───────────────────────────────
const IELTS_SPEAKING_TOPICS = [
  // Day 1
  {
    day: 1,
    part2Topic: 'Describe a place with a lot of trees that you would like to visit.',
    part2Prompts: [
      'Where it is',
      'How did you know this place',
      'What it is like',
      'Why you would like to visit it'
    ],
    part3Questions: [
      'Why do you think people enjoy spending time in nature?',
      'Do you think urban areas need more green spaces? Why or why not?',
      'How has deforestation affected communities in your country?',
      'What role should governments play in preserving forests?'
    ],
    part1Questions: [
      'Do you like spending time outdoors?',
      'Are there many parks or green spaces near your home?',
      'How often do you visit natural places?'
    ]
  },
  // Day 2
  {
    day: 2,
    part2Topic: 'Describe a natural talent you want to improve.',
    part2Prompts: [
      'What it is',
      'When you discovered it',
      'How you want to improve it',
      'How you feel about it'
    ],
    part3Questions: [
      'Do you believe talent is more important than hard work?',
      'Why do some people give up on developing their talents?',
      'Should schools focus more on identifying students\' natural abilities?',
      'How has the internet made it easier to develop skills?'
    ],
    part1Questions: [
      'Do you have any hobbies or special skills?',
      'Is there something you are naturally good at?',
      'Do you prefer learning new things alone or with others?'
    ]
  },
  // Day 3
  {
    day: 3,
    part2Topic: 'Describe a time when you told your friend an important truth.',
    part2Prompts: [
      'Who your friend is',
      'What the truth was',
      'What your friend\'s reaction was',
      'Why it was important'
    ],
    part3Questions: [
      'Is honesty always the best policy in friendships?',
      'Why do people sometimes avoid telling the truth?',
      'How can honest feedback strengthen relationships?',
      'Are there situations where a white lie is acceptable?'
    ],
    part1Questions: [
      'How important is honesty to you?',
      'Do you find it easy to express your opinions to friends?',
      'Have you ever received honest feedback that helped you?'
    ]
  },
  // Day 4
  {
    day: 4,
    part2Topic: 'Describe a puzzle you have played.',
    part2Prompts: [
      'What it is like',
      'How easy or difficult it is',
      'How long it takes you to solve',
      'How you feel about it'
    ],
    part3Questions: [
      'Why do people enjoy solving puzzles?',
      'Do you think puzzles help develop intelligence?',
      'How have digital games changed the way people engage with puzzles?',
      'Should problem-solving games be part of school curricula?'
    ],
    part1Questions: [
      'Do you enjoy playing games in your free time?',
      'What kinds of games are popular in your country?',
      'Do you prefer mental games or physical games?'
    ]
  },
  // Day 5
  {
    day: 5,
    part2Topic: 'Describe a person who helps to protect the environment.',
    part2Prompts: [
      'Who this person is',
      'When this person does this',
      'What has the person done',
      'Why this person does this'
    ],
    part3Questions: [
      'What motivates people to protect the environment?',
      'Should environmental education be mandatory in schools?',
      'Can individual actions really make a difference to the environment?',
      'How can governments encourage more people to be environmentally conscious?'
    ],
    part1Questions: [
      'Do you recycle at home?',
      'Are people in your country concerned about the environment?',
      'What simple things can people do to help the planet?'
    ]
  },
  // Day 6
  {
    day: 6,
    part2Topic: 'Describe a sport that you really like.',
    part2Prompts: [
      'What it is',
      'How often you do it',
      'How you learned to do it',
      'Why you like it'
    ],
    part3Questions: [
      'Why is physical activity important for health?',
      'Do you think professional athletes are paid too much?',
      'How has technology changed the way we watch and play sports?',
      'Should governments invest more in sports facilities?'
    ],
    part1Questions: [
      'Do you exercise regularly?',
      'What sports are most popular in your country?',
      'Did you play any sports when you were a child?'
    ]
  },
  // Day 7
  {
    day: 7,
    part2Topic: 'Describe someone who is willing to openly share things with you.',
    part2Prompts: [
      'Who this person is',
      'How you knew this person',
      'What this person openly shares',
      'How you feel about the sharing'
    ],
    part3Questions: [
      'Why is sharing important in building relationships?',
      'Do you think people share too much on social media?',
      'How does a culture of sharing benefit a community?',
      'Is there a downside to being too open with personal information?'
    ],
    part1Questions: [
      'Do you often share things with friends or family?',
      'What kinds of things do people typically share in your culture?',
      'Do you think children should be taught to share from a young age?'
    ]
  },
  // Day 8
  {
    day: 8,
    part2Topic: 'Describe a TV series you like.',
    part2Prompts: [
      'What is the name',
      'When you watched it',
      'What it is about',
      'Why you like it'
    ],
    part3Questions: [
      'How has streaming changed the way people watch television?',
      'Do you think TV series can have educational value?',
      'Why are international TV shows becoming more popular?',
      'Is binge-watching harmful or just a form of entertainment?'
    ],
    part1Questions: [
      'How often do you watch TV?',
      'Do you prefer movies or TV series?',
      'What type of programmes do you usually watch?'
    ]
  },
  // Day 9
  {
    day: 9,
    part2Topic: 'Describe a plan that you had to change recently.',
    part2Prompts: [
      'When this happened',
      'What made you change',
      'What the new plan was',
      'How you felt about the change'
    ],
    part3Questions: [
      'Why is flexibility important in life?',
      'Do you think people plan too much or too little?',
      'How do unexpected changes affect people\'s mental health?',
      'Is it better to have a detailed plan or to be spontaneous?'
    ],
    part1Questions: [
      'Do you usually make plans in advance?',
      'How do you react when plans change suddenly?',
      'Do you prefer a structured routine or a flexible one?'
    ]
  },
  // Day 10
  {
    day: 10,
    part2Topic: 'Describe an interesting building.',
    part2Prompts: [
      'Where it is',
      'What it looks like',
      'What function it has',
      'Why you think it is interesting'
    ],
    part3Questions: [
      'How has architecture changed in your country over the years?',
      'Should old buildings be preserved or replaced with modern ones?',
      'What makes a building truly iconic?',
      'How do buildings reflect the culture of a society?'
    ],
    part1Questions: [
      'Do you live in a house or an apartment?',
      'What kind of buildings do you find attractive?',
      'Have you ever visited a famous building?'
    ]
  },
  // Day 11
  {
    day: 11,
    part2Topic: 'Describe a foreign country you would like to visit.',
    part2Prompts: [
      'What it is',
      'What you know about it',
      'Who you would go with',
      'Why you would like to visit'
    ],
    part3Questions: [
      'Why do people enjoy travelling to foreign countries?',
      'How does international travel broaden a person\'s perspective?',
      'What are the negative effects of mass tourism on local communities?',
      'Should governments make it easier or harder for tourists to visit?'
    ],
    part1Questions: [
      'Do you enjoy travelling?',
      'Have you been to any foreign countries?',
      'What do you usually do when you travel?'
    ]
  },
  // Day 12
  {
    day: 12,
    part2Topic: 'Describe a positive change in your daily routine.',
    part2Prompts: [
      'What the change is',
      'How you changed',
      'Why it is positive',
      'How you feel about it'
    ],
    part3Questions: [
      'Why is it difficult for people to change their habits?',
      'Do you think daily routines are important for success?',
      'How does technology influence people\'s daily routines?',
      'What role does discipline play in maintaining healthy habits?'
    ],
    part1Questions: [
      'What does your typical day look like?',
      'Have you changed any habits recently?',
      'Do you prefer a fixed routine or a varied schedule?'
    ]
  },
  // Day 13
  {
    day: 13,
    part2Topic: 'Describe a rule that is important at school or work.',
    part2Prompts: [
      'What it is about',
      'What happens when broken',
      'Why it is important',
      'How you feel about it'
    ],
    part3Questions: [
      'Why are rules necessary in society?',
      'Do you think there are too many rules in modern workplaces?',
      'How should rule-breakers be dealt with in schools?',
      'Can too many rules stifle creativity?'
    ],
    part1Questions: [
      'Were there strict rules at your school?',
      'Do you think rules are always fair?',
      'Are you someone who follows rules carefully?'
    ]
  },
  // Day 14
  {
    day: 14,
    part2Topic: 'Describe an area of science you are interested in.',
    part2Prompts: [
      'Which area',
      'When you came to know it',
      'How you get information about it',
      'Why you are interested'
    ],
    part3Questions: [
      'Why is scientific research important for society?',
      'Should governments spend more money on science education?',
      'How has science changed everyday life in recent decades?',
      'Do you think the public understands enough about science?'
    ],
    part1Questions: [
      'Did you enjoy science at school?',
      'Do you follow any science news or channels?',
      'What scientific discovery do you find most fascinating?'
    ]
  },
  // Day 15
  {
    day: 15,
    part2Topic: 'Describe a piece of equipment that is important in your home.',
    part2Prompts: [
      'What it is',
      'How often you use it',
      'With whom you use it',
      'Why it is important'
    ],
    part3Questions: [
      'How has household technology changed over the past 20 years?',
      'Do people rely too much on technology at home?',
      'What household inventions have had the biggest impact on family life?',
      'Will smart home devices replace traditional appliances?'
    ],
    part1Questions: [
      'Do you use many electronic devices at home?',
      'What device could you not live without?',
      'Do you think technology makes housework easier?'
    ]
  },
  // Day 16
  {
    day: 16,
    part2Topic: 'Describe a time you made a promise to someone.',
    part2Prompts: [
      'What the promise was',
      'To whom you made it',
      'Whether it was easy or difficult to keep',
      'Why you made it'
    ],
    part3Questions: [
      'Why is keeping promises important in relationships?',
      'Do you think people today take promises less seriously?',
      'How does breaking a promise affect trust?',
      'Should children be taught the importance of keeping promises?'
    ],
    part1Questions: [
      'Do you always keep your promises?',
      'Has anyone ever broken a promise to you?',
      'Do you think promises are important in friendships?'
    ]
  },
  // Day 17
  {
    day: 17,
    part2Topic: 'Describe an energetic person that you know.',
    part2Prompts: [
      'Who this person is',
      'How you knew them',
      'Why you think they are energetic',
      'How you feel about them'
    ],
    part3Questions: [
      'What makes some people more energetic than others?',
      'Do you think lifestyle choices affect a person\'s energy levels?',
      'How important is enthusiasm in the workplace?',
      'Can being too energetic be a disadvantage?'
    ],
    part1Questions: [
      'Do you consider yourself an energetic person?',
      'What do you do when you feel tired or low on energy?',
      'Do you prefer to be around calm or energetic people?'
    ]
  },
  // Day 18
  {
    day: 18,
    part2Topic: 'Describe a line from a poem or song you remember.',
    part2Prompts: [
      'What it is',
      'Which song or poem it is from',
      'How you knew it',
      'How you feel about it'
    ],
    part3Questions: [
      'Why do some songs or poems stay in our memory for years?',
      'Do you think poetry is less appreciated today than in the past?',
      'How does music influence people\'s emotions?',
      'Should literature and poetry have a bigger role in education?'
    ],
    part1Questions: [
      'Do you enjoy listening to music?',
      'Have you ever read poetry for pleasure?',
      'Do you have a favourite song or poem?'
    ]
  },
  // Day 19
  {
    day: 19,
    part2Topic: 'Describe one of your grandparents\' jobs.',
    part2Prompts: [
      'What it was',
      'How long they did it',
      'How they got the job',
      'What skills were needed'
    ],
    part3Questions: [
      'How have jobs changed between your grandparents\' generation and yours?',
      'Do you think traditional jobs are disappearing?',
      'What values can younger generations learn from older workers?',
      'How has technology affected employment opportunities?'
    ],
    part1Questions: [
      'Are you close to your grandparents?',
      'Do you know what your grandparents did for a living?',
      'Do you think work was harder in the past than it is now?'
    ]
  },
  // Day 20
  {
    day: 20,
    part2Topic: 'Describe an important decision that you made.',
    part2Prompts: [
      'What it was',
      'How you made it',
      'What the results were',
      'Why it was important'
    ],
    part3Questions: [
      'Why do some people find it difficult to make decisions?',
      'Should important decisions be made quickly or slowly?',
      'How do cultural values influence decision-making?',
      'Do you think people rely too much on others\' opinions when deciding?'
    ],
    part1Questions: [
      'Are you good at making decisions?',
      'Do you ask for advice before making big decisions?',
      'What was the last important decision you made?'
    ]
  },
  // Day 21
  {
    day: 21,
    part2Topic: 'Describe a job that is useful to society.',
    part2Prompts: [
      'What job it is',
      'How you know about it',
      'What types of people do this job',
      'Why it is useful to society'
    ],
    part3Questions: [
      'Why are some essential jobs poorly paid?',
      'How should society recognise the contributions of essential workers?',
      'Do you think all jobs contribute equally to society?',
      'What jobs will be most important in the future?'
    ],
    part1Questions: [
      'What do you do for work or study?',
      'What job did you want when you were a child?',
      'Do you think your job makes a difference to others?'
    ]
  },
  // Day 22
  {
    day: 22,
    part2Topic: 'Describe a place you recommend others to live.',
    part2Prompts: [
      'Where it is',
      'What it is like',
      'When you visited it',
      'Why you recommend it'
    ],
    part3Questions: [
      'What factors do people consider when choosing a place to live?',
      'Do you think city life is better than country life?',
      'How does the cost of living affect where people choose to live?',
      'Will remote work change where people choose to settle?'
    ],
    part1Questions: [
      'Do you like the area where you live?',
      'Have you ever thought about moving to a different city?',
      'What is the most important thing about a neighbourhood?'
    ]
  },
  // Day 23
  {
    day: 23,
    part2Topic: 'Describe a countryside you have been to.',
    part2Prompts: [
      'Where it is',
      'When and why you went there',
      'Who you went with',
      'How you felt about it'
    ],
    part3Questions: [
      'Why do city people enjoy visiting the countryside?',
      'What are the challenges of living in rural areas?',
      'How can governments improve life in the countryside?',
      'Do you think rural tourism can help local economies?'
    ],
    part1Questions: [
      'Do you prefer the city or the countryside?',
      'Have you ever lived in a rural area?',
      'What do you like most about the countryside?'
    ]
  },
  // Day 24
  {
    day: 24,
    part2Topic: 'Describe an invention useful in your daily life.',
    part2Prompts: [
      'What it is',
      'What it can do',
      'How popular it is and whether it is easy to use',
      'Why it is useful in your daily life'
    ],
    part3Questions: [
      'What invention has had the biggest impact on daily life?',
      'Do you think people are too dependent on modern inventions?',
      'How does innovation drive economic growth?',
      'Should governments fund more research and development?'
    ],
    part1Questions: [
      'Do you enjoy using new technology?',
      'What gadget do you use most often?',
      'Is there a device you think everyone should have?'
    ]
  },
  // Day 25
  {
    day: 25,
    part2Topic: 'Describe a time someone asked for your opinion.',
    part2Prompts: [
      'Who asked you',
      'Why they wanted your opinion',
      'What you said',
      'How you felt about being asked'
    ],
    part3Questions: [
      'Why do people value others\' opinions?',
      'Is it important to consider different perspectives before making decisions?',
      'How has social media changed the way people share opinions?',
      'Should experts\' opinions carry more weight than the general public\'s?'
    ],
    part1Questions: [
      'Do people often ask for your advice?',
      'Whose opinion do you trust the most?',
      'Do you find it easy to give honest opinions?'
    ]
  },
  // Day 26
  {
    day: 26,
    part2Topic: 'Describe a difficult decision with a good result.',
    part2Prompts: [
      'What it was',
      'When you made it',
      'Why it was difficult',
      'How you felt about the result'
    ],
    part3Questions: [
      'Why are difficult decisions often the most rewarding?',
      'Do people learn more from successes or failures?',
      'How can people develop better decision-making skills?',
      'Should important life decisions be based on logic or emotion?'
    ],
    part1Questions: [
      'Do you think you are a decisive person?',
      'What do you do when you face a difficult choice?',
      'Have you ever regretted a decision?'
    ]
  },
  // Day 27
  {
    day: 27,
    part2Topic: 'Describe a time you used your phone for something important.',
    part2Prompts: [
      'What happened',
      'When it was',
      'How important the phone was in that situation',
      'How you felt about it'
    ],
    part3Questions: [
      'How have smartphones changed the way we communicate?',
      'Do you think people are too reliant on their phones?',
      'What are the advantages and disadvantages of mobile technology?',
      'How might phones evolve in the next decade?'
    ],
    part1Questions: [
      'How often do you use your phone?',
      'What do you mainly use your phone for?',
      'Do you think children should have smartphones?'
    ]
  },
  // Day 28
  {
    day: 28,
    part2Topic: 'Describe a way that helps you save a lot of time.',
    part2Prompts: [
      'What it is',
      'How you implement it',
      'How difficult it was to adopt',
      'How you feel about it'
    ],
    part3Questions: [
      'Why is time management important in modern life?',
      'Do you think technology saves or wastes more time?',
      'How do different cultures view the concept of time?',
      'What are the consequences of poor time management?'
    ],
    part1Questions: [
      'Do you feel you manage your time well?',
      'What takes up most of your time each day?',
      'Do you use any tools or apps to manage your schedule?'
    ]
  },
  // Day 29
  {
    day: 29,
    part2Topic: 'Describe a friend you like to talk with.',
    part2Prompts: [
      'Who this person is',
      'What you usually talk about',
      'Why you like talking with them',
      'How you feel when you talk with them'
    ],
    part3Questions: [
      'What makes a good conversationalist?',
      'How has technology affected face-to-face communication?',
      'Do you think people communicate differently online versus in person?',
      'Why is active listening important in conversations?'
    ],
    part1Questions: [
      'Do you enjoy talking with friends?',
      'How do you usually keep in touch with friends?',
      'Do you prefer phone calls or text messages?'
    ]
  },
  // Day 30
  {
    day: 30,
    part2Topic: 'Describe a time you were stuck in a traffic jam.',
    part2Prompts: [
      'When it happened',
      'Where you were going',
      'What you did while waiting',
      'How you felt about it'
    ],
    part3Questions: [
      'What are the main causes of traffic congestion in cities?',
      'How can governments reduce traffic problems?',
      'Do you think public transport is the best solution to traffic?',
      'Will self-driving cars reduce traffic congestion?'
    ],
    part1Questions: [
      'How do you usually travel to work or school?',
      'Is traffic a big problem in your city?',
      'Do you prefer driving or taking public transport?'
    ]
  },
  // Day 31
  {
    day: 31,
    part2Topic: 'Describe positive advice about your work or study.',
    part2Prompts: [
      'Who gave you the advice',
      'What they said',
      'How it affected you',
      'How you felt about the advice'
    ],
    part3Questions: [
      'Why is mentorship important in professional development?',
      'Do people prefer advice from experienced people or peers?',
      'How has the way people seek advice changed with technology?',
      'Should advice be given only when asked for?'
    ],
    part1Questions: [
      'Do you often seek advice from others?',
      'Who do you usually go to for advice?',
      'Have you ever given advice that helped someone?'
    ]
  },
  // Day 32
  {
    day: 32,
    part2Topic: 'Describe a contest you would like to participate in.',
    part2Prompts: [
      'What it is',
      'Where it takes place',
      'When it happens',
      'Why you would like to participate'
    ],
    part3Questions: [
      'Why do people enjoy competing?',
      'Do competitions bring out the best or worst in people?',
      'How can competitions be made fairer?',
      'Should children be encouraged to participate in contests?'
    ],
    part1Questions: [
      'Have you ever entered a competition?',
      'Do you consider yourself a competitive person?',
      'What kind of competitions are popular in your country?'
    ]
  },
  // Day 33
  {
    day: 33,
    part2Topic: 'Describe a time you were very busy.',
    part2Prompts: [
      'When it was',
      'Where you were',
      'What you were doing',
      'Why you were so busy'
    ],
    part3Questions: [
      'Is being busy a sign of success in modern society?',
      'How can people balance work and leisure?',
      'Why do some people enjoy being busy while others find it stressful?',
      'What are the health risks of being constantly busy?'
    ],
    part1Questions: [
      'Do you have a busy lifestyle?',
      'How do you relax when you are busy?',
      'Do you prefer being busy or having free time?'
    ]
  },
  // Day 34
  {
    day: 34,
    part2Topic: 'Describe a popular person in your country.',
    part2Prompts: [
      'Who this person is',
      'What they have done',
      'Why they are popular',
      'How you feel about them'
    ],
    part3Questions: [
      'What qualities make someone popular in today\'s society?',
      'Do celebrities have a responsibility to be role models?',
      'How has social media changed the concept of fame?',
      'Is it healthy for young people to idolise celebrities?'
    ],
    part1Questions: [
      'Do you follow any celebrities or public figures?',
      'Who is the most famous person from your hometown?',
      'Do you think fame brings happiness?'
    ]
  },
  // Day 35
  {
    day: 35,
    part2Topic: 'Describe an invention that changed the world positively.',
    part2Prompts: [
      'What it is',
      'What benefits it has brought',
      'How it influences different age groups',
      'How it has changed people\'s lives'
    ],
    part3Questions: [
      'What invention has had the greatest impact on human history?',
      'Do all inventions lead to positive outcomes?',
      'How should society deal with inventions that have negative side effects?',
      'Will future inventions solve current global problems?'
    ],
    part1Questions: [
      'Do you enjoy learning about inventions?',
      'What recent invention impressed you the most?',
      'Do you think there are still important things left to invent?'
    ]
  },
  // Day 36
  {
    day: 36,
    part2Topic: 'Describe a traditional product in your country.',
    part2Prompts: [
      'What it is',
      'When you first tried or used it',
      'What it is made of',
      'How you feel about it'
    ],
    part3Questions: [
      'Why is it important to preserve traditional products and crafts?',
      'How can traditional products compete with modern alternatives?',
      'Do younger generations show enough interest in traditions?',
      'How does globalisation affect traditional industries?'
    ],
    part1Questions: [
      'Are there traditional products that are popular in your area?',
      'Do you prefer traditional or modern products?',
      'Have you ever bought a traditional product as a gift?'
    ]
  },
  // Day 37
  {
    day: 37,
    part2Topic: 'Describe something you do to concentrate on work or study.',
    part2Prompts: [
      'What you do',
      'How it helps you concentrate',
      'When you started doing it',
      'How you feel about it'
    ],
    part3Questions: [
      'Why do some people find it harder to concentrate than others?',
      'How does the modern world affect our ability to focus?',
      'What strategies can help improve concentration?',
      'Should workplaces do more to help employees focus?'
    ],
    part1Questions: [
      'Do you find it easy to concentrate?',
      'What distracts you the most when working or studying?',
      'Do you prefer working in silence or with background noise?'
    ]
  },
  // Day 38
  {
    day: 38,
    part2Topic: 'Describe a special day out that cost little money.',
    part2Prompts: [
      'When it was',
      'Where you went',
      'How much you spent',
      'How you felt about it'
    ],
    part3Questions: [
      'Do you think people need to spend a lot of money to have fun?',
      'How can communities provide affordable leisure activities?',
      'Why are some of the best experiences in life free?',
      'Has consumerism changed what people expect from a day out?'
    ],
    part1Questions: [
      'What do you like to do on weekends?',
      'Do you enjoy free outdoor activities?',
      'What is a fun activity that doesn\'t cost much?'
    ]
  },
  // Day 39
  {
    day: 39,
    part2Topic: 'Describe an occasion you lost something in public.',
    part2Prompts: [
      'What you lost',
      'When and where it happened',
      'What you did about it',
      'How you felt'
    ],
    part3Questions: [
      'Why do people sometimes lose things in public places?',
      'What can be done to help people recover lost items?',
      'Do you think people are honest enough to return found items?',
      'How has technology helped with tracking lost belongings?'
    ],
    part1Questions: [
      'Do you often lose things?',
      'Have you ever found something that belonged to someone else?',
      'What would you do if you found a wallet on the street?'
    ]
  },
  // Day 40
  {
    day: 40,
    part2Topic: 'Describe something you do to keep fit and healthy.',
    part2Prompts: [
      'What you do',
      'When you started doing it',
      'Who you do it with',
      'Why it is important and how it helps you'
    ],
    part3Questions: [
      'Why is maintaining health becoming more difficult in modern life?',
      'Should governments do more to promote healthy lifestyles?',
      'How does mental health relate to physical fitness?',
      'What role does diet play compared to exercise in staying healthy?'
    ],
    part1Questions: [
      'Do you exercise regularly?',
      'What do you do to stay healthy?',
      'Do you think people in your country are health-conscious?'
    ]
  },
  // Day 41
  {
    day: 41,
    part2Topic: 'Describe a family member you want to work with.',
    part2Prompts: [
      'Who the person is',
      'What kind of work you would do together',
      'Why you want to work with them',
      'How you think it would go'
    ],
    part3Questions: [
      'What are the advantages and disadvantages of working with family?',
      'Do family businesses tend to be more successful?',
      'How can family members maintain professional boundaries at work?'
    ],
    part1Questions: [
      'Are you close to your family members?',
      'Does anyone in your family work in the same field as you?',
      'Do you think working with family is a good idea?'
    ]
  },
  // Day 42 (Exam Day)
  {
    day: 42,
    part2Topic: 'Describe something that surprised you and made you happy.',
    part2Prompts: [
      'What it was',
      'When it happened',
      'Who was involved',
      'Why it made you happy'
    ],
    part3Questions: [
      'Why are surprises important in life?',
      'Do people appreciate small pleasures enough?',
      'How can unexpected events lead to personal growth?'
    ],
    part1Questions: [
      'Do you enjoy surprises?',
      'What was the last thing that made you really happy?',
      'Do you think happiness comes from small or big events?'
    ]
  }
];

// ── 4. GRAMMAR_TOPICS ──────────────────────────────────────
const GRAMMAR_TOPICS = [
  {
    id: 1,
    title: 'Subject-Verb Agreement',
    explanation: 'The verb must agree in number with its subject. Singular subjects take singular verbs; plural subjects take plural verbs.',
    examples: [
      { wrong: 'The list of items are on the desk.', correct: 'The list of items is on the desk.' },
      { wrong: 'Each of the students have a book.', correct: 'Each of the students has a book.' },
      { wrong: 'The news are shocking.', correct: 'The news is shocking.' }
    ]
  },
  {
    id: 2,
    title: 'Articles (a, an, the)',
    explanation: 'Use "a/an" for general references and first mentions. Use "the" for specific references and shared knowledge between speaker and listener.',
    examples: [
      { wrong: 'She is a honest person.', correct: 'She is an honest person.' },
      { wrong: 'I went to the university in 2020. (general)', correct: 'I went to a university in 2020.' },
      { wrong: 'Sun rises in east.', correct: 'The sun rises in the east.' }
    ]
  },
  {
    id: 3,
    title: 'Verb Tenses',
    explanation: 'Choose the correct tense to match the time frame. Present perfect links past to present; past simple is for completed actions.',
    examples: [
      { wrong: 'I have visited Paris last year.', correct: 'I visited Paris last year.' },
      { wrong: 'She is working here since 2019.', correct: 'She has been working here since 2019.' },
      { wrong: 'By the time he arrived, I leave.', correct: 'By the time he arrived, I had left.' }
    ]
  },
  {
    id: 4,
    title: 'Preposition Collocations',
    explanation: 'Certain words always pair with specific prepositions. These must be memorised as fixed expressions.',
    examples: [
      { wrong: 'She is interested on science.', correct: 'She is interested in science.' },
      { wrong: 'He depends of his parents.', correct: 'He depends on his parents.' },
      { wrong: 'They are responsible of the project.', correct: 'They are responsible for the project.' }
    ]
  },
  {
    id: 5,
    title: 'Complex Sentences (Relative Clauses)',
    explanation: 'Use "who" for people, "which" for things, and "that" for both in defining clauses. Non-defining clauses use commas.',
    examples: [
      { wrong: 'The man which called you is here.', correct: 'The man who called you is here.' },
      { wrong: 'My car who is red needs repairs.', correct: 'My car, which is red, needs repairs.' },
      { wrong: 'The book, that I borrowed, is good.', correct: 'The book that I borrowed is good.' }
    ]
  },
  {
    id: 6,
    title: 'Connectors and Transitions',
    explanation: 'Use appropriate connectors to link ideas. "However" contrasts; "furthermore" adds; "therefore" shows result.',
    examples: [
      { wrong: 'He studied hard, moreover he failed.', correct: 'He studied hard; however, he failed.' },
      { wrong: 'She is talented. But also hardworking.', correct: 'She is talented and, furthermore, hardworking.' },
      { wrong: 'It rained, so that we stayed home.', correct: 'It rained; therefore, we stayed home.' }
    ]
  },
  {
    id: 7,
    title: 'Common PTE Spelling',
    explanation: 'PTE scores are affected by spelling errors. Pay attention to commonly misspelled academic words.',
    examples: [
      { wrong: 'The goverment announced new policies.', correct: 'The government announced new policies.' },
      { wrong: 'This is a seperate issue.', correct: 'This is a separate issue.' },
      { wrong: 'The enviroment needs protection.', correct: 'The environment needs protection.' }
    ]
  },
  {
    id: 8,
    title: 'Plural and Singular Agreement',
    explanation: 'Ensure nouns, demonstratives, and quantifiers agree in number. Uncountable nouns never take plural forms.',
    examples: [
      { wrong: 'He gave me many advices.', correct: 'He gave me a lot of advice.' },
      { wrong: 'These informations are useful.', correct: 'This information is useful.' },
      { wrong: 'She bought new furnitures.', correct: 'She bought new furniture.' }
    ]
  },
  {
    id: 9,
    title: 'Passive Voice',
    explanation: 'Use passive voice when the action is more important than the actor, or when the actor is unknown. Form: be + past participle.',
    examples: [
      { wrong: 'The cake was eat by the children.', correct: 'The cake was eaten by the children.' },
      { wrong: 'The report has been wrote.', correct: 'The report has been written.' },
      { wrong: 'The window was break during the storm.', correct: 'The window was broken during the storm.' }
    ]
  },
  {
    id: 10,
    title: 'Conditional Sentences',
    explanation: 'First conditional (real future): if + present, will + base. Second conditional (unreal present): if + past, would + base. Third conditional (unreal past): if + past perfect, would have + past participle.',
    examples: [
      { wrong: 'If I will see her, I will tell her.', correct: 'If I see her, I will tell her.' },
      { wrong: 'If I was rich, I will buy a house.', correct: 'If I were rich, I would buy a house.' },
      { wrong: 'If he had studied, he will have passed.', correct: 'If he had studied, he would have passed.' }
    ]
  }
];

// ── 5. SCAFFOLD_INSTRUCTIONS ──────────────────────────────
const SCAFFOLD_INSTRUCTIONS = {
  full: {
    essay: 'Full scaffold: Use the IBBE template provided. Follow the sentence starters word-for-word. Focus on building the habit of structured writing. Aim for 200-300 words. You may use the connector bank below the template.',
    swt: 'Full scaffold: Read the passage once for gist, then re-read for key ideas. Use the formula: "[Main topic] [main finding/argument], which [supporting detail], and [implication/conclusion]." Keep it to ONE sentence, 5-75 words. Use connectors like "which," "while," "and," "although."',
    wfd: 'Full scaffold: Listen to each sentence twice. On the first listen, note keywords. On the second listen, fill in grammar words (articles, prepositions). Write the sentence from memory. Check subject-verb agreement and spelling.',
    speaking: 'Full scaffold: Use the PEEL framework for each Part 2 answer. Write brief notes for each bullet point (P-E-E-L). Practise aloud with a 1-minute timer. For Part 3, aim for 3-4 sentences per answer using a clear position + reason + example structure.'
  },
  partial: {
    essay: 'Partial scaffold: Template structure visible but sentence starters are removed. Write your own introduction and topic sentences. Use the connector bank only if stuck. Aim for 200-300 words with at least 2 complex sentences per paragraph.',
    swt: 'Partial scaffold: No formula shown. Read the passage, identify the single most important idea, and write it in one sentence. Self-check: Is it one sentence? Is it 5-75 words? Does it capture the main point?',
    wfd: 'Partial scaffold: Listen once only. Write immediately from memory. Then listen a second time to check. Focus on accuracy of every word including articles and prepositions.',
    speaking: 'Partial scaffold: PEEL labels shown but no examples. Create your own notes and speak for 1-2 minutes. For Part 3, extend answers with reasons and examples without prompts.'
  },
  minimal: {
    essay: 'Minimal scaffold: No template visible. Plan and write from memory. Time yourself: 2 minutes planning, 15 minutes writing. Self-assess against the PTE criteria: content, form, grammar, vocabulary, spelling, linguistic range.',
    swt: 'Minimal scaffold: Read and write with no guidance. Self-check against PTE criteria: content (does it capture the main idea?), form (one sentence, 5-75 words?), grammar, vocabulary.',
    wfd: 'Minimal scaffold: Single listen. Write immediately. No second chance. Focus on word-for-word accuracy.',
    speaking: 'Minimal scaffold: No framework shown. Speak naturally for 2 minutes. Record yourself and listen back. Self-assess fluency, pronunciation, and content.'
  },
  none: {
    essay: 'No scaffold: Simulate exam conditions. Plan, write, and review entirely on your own within the time limit. Trust your internalised structure.',
    swt: 'No scaffold: Full exam simulation. Read once, write once, move on. Trust your preparation.',
    wfd: 'No scaffold: Exam-speed dictation. One listen, write, move on. Trust your ear and your grammar instincts.',
    speaking: 'No scaffold: Speak as you would in the exam. No notes, no framework visible. Rely on your practised habits.'
  }
};

// ── 6. WRITING_TIPS ────────────────────────────────────────
const WRITING_TIPS = [
  // Days 1-10: Foundation basics
  'Always plan before writing. Spend 2 minutes outlining your IBBE structure: Introduction, Body 1, Body 2, Conclusion.',
  'Use the 3-sentence introduction formula: background statement + thesis + outline of your essay\'s direction.',
  'Each body paragraph needs ONE clear topic sentence. If a paragraph discusses two ideas, split it into two paragraphs.',
  'Use specific examples rather than vague claims. Instead of "many people," write "a significant proportion of urban professionals."',
  'Check every sentence for subject-verb agreement before moving on. This is the most common grammar error in PTE essays.',
  'Use at least two complex sentences per paragraph. Combine ideas with "which," "although," "while," or "because."',
  'Vary your sentence length. Alternate between short (8-12 words) and long (18-25 words) sentences for rhythm.',
  'Avoid contractions in formal writing. Write "do not" instead of "don\'t," and "cannot" instead of "can\'t."',
  'End your essay with a clear restatement of your position. Avoid introducing new ideas in the conclusion.',
  'Proofread for spelling by reading your essay backwards, word by word. This forces you to see each word in isolation.',

  // Days 11-20: Building complexity
  'Use topic-specific vocabulary instead of generic words. Replace "good" with "beneficial," "advantageous," or "constructive."',
  'Link paragraphs with transition sentences. The last sentence of one paragraph should connect to the first of the next.',
  'Master the "concession + rebuttal" pattern: "While some argue X, the evidence suggests Y because Z."',
  'Collocations matter for PTE scoring. Learn fixed phrases: "pose a threat," "raise awareness," "draw a conclusion."',
  'For Summarize Written Text, always identify the main clause before adding subordinate information.',
  'Practise using semicolons correctly. They join two related independent clauses: "Education opens doors; it transforms lives."',
  'Use the passive voice strategically for objectivity: "It is widely believed that..." or "Research has been conducted on..."',
  'Strengthen your vocabulary range by replacing "because" with "owing to," "due to," "as a result of," or "given that."',
  'Check word count targets: PTE Essay 200-300 words, SWT 5-75 words. Exceeding limits costs marks.',
  'Use parallel structure in lists: "The policy aims to reduce emissions, promote sustainability, and protect biodiversity."',

  // Days 21-30: Advanced techniques
  'Develop your "language of evaluation": "significant," "marginal," "compelling," "questionable," "insufficient."',
  'In SWT, avoid starting with "This passage discusses..." Instead, name the specific subject directly.',
  'Use conditional structures for sophisticated arguments: "Were governments to invest more, outcomes would improve."',
  'Master the art of hedging: "tends to," "is likely to," "may contribute to" sound more academic than absolutes.',
  'For PTE scoring, grammar accuracy outweighs complexity. A correct simple sentence beats a flawed complex one.',
  'Practise timed writing: 2 minutes planning + 15 minutes writing + 3 minutes proofreading = 20 minutes total.',
  'Use noun phrases for conciseness: "the rapid expansion of urban areas" instead of "urban areas are expanding rapidly."',
  'Check for dangling modifiers: "Walking to school, the rain started" should be "Walking to school, I got caught in the rain."',
  'In your conclusion, use synthesis not summary. Show how your points connect rather than simply repeating them.',
  'Review common PTE spelling traps: "environment" (not enviroment), "government" (not goverment), "separate" (not seperate).',

  // Days 31-37: Simulation refinement
  'Under exam pressure, default to structures you know well rather than attempting unfamiliar constructions.',
  'Read your essay aloud in your head. If a sentence sounds awkward, simplify it. Clarity always wins.',
  'For SWT, use this self-check: Main idea present? One sentence? Between 5-75 words? Grammar correct? If all yes, move on.',
  'Time management strategy: if you are stuck on a word, write a simpler synonym and move on. Do not lose time.',
  'Eliminate filler phrases that add no meaning: "In my opinion, I think that..." becomes "In my opinion,..." or just state the claim.',
  'Check that every pronoun has a clear antecedent. Ambiguous "it" or "they" references lose grammar marks.',
  'Use your final 2 minutes to check articles (a/an/the), prepositions, and plural forms. These small errors cost points.',

  // Days 38-41: Taper confidence
  'Trust your preparation. You have internalised the template. Focus on clear expression over impressive vocabulary.',
  'On exam day, read each essay prompt twice. Underline the key instruction words: "discuss," "agree/disagree," "advantages."',
  'If your mind goes blank, write the IBBE letters on your scratch paper and fill in one keyword for each. The structure will guide you.',
  'Remember: PTE scoring values consistent accuracy over occasional brilliance. Steady, correct writing scores highest.',

  // Day 42: Exam day
  'You are ready. Write with confidence, check with care, and move on with purpose. Trust your 41 days of practice.'
];

// ── 7. PEEL_FRAMEWORK ─────────────────────────────────────
const PEEL_FRAMEWORK = {
  P: {
    label: 'Point',
    explanation: 'State your main point clearly and directly. This is the core idea of your answer.',
    example: 'I believe that regular exercise is essential for maintaining good health.'
  },
  E1: {
    label: 'Explanation',
    explanation: 'Explain why your point is valid. Give a reason that supports your statement.',
    example: 'This is because physical activity helps strengthen the cardiovascular system and improves mental well-being.'
  },
  E2: {
    label: 'Example',
    explanation: 'Provide a specific example or piece of evidence to illustrate your explanation.',
    example: 'For instance, a study by the World Health Organisation found that people who exercise regularly have a 30% lower risk of heart disease.'
  },
  L: {
    label: 'Link',
    explanation: 'Link back to the original question or to your next point. This provides closure and coherence.',
    example: 'Therefore, it is clear that incorporating exercise into daily routines is one of the most effective ways to improve overall health.'
  }
};

// ── 8. ESSAY_TEMPLATE (IBBE) ──────────────────────────────
const ESSAY_TEMPLATE = {
  intro: {
    formula: 'Background statement (general to specific) + Thesis statement + Essay direction',
    starters: [
      'In recent years, there has been a growing debate about...',
      'It is widely acknowledged that...',
      'The question of whether... has generated considerable discussion.',
      'Over the past decade, ... has become a topic of significant concern.',
      'One of the most pressing issues in contemporary society is...'
    ],
    connectors: ['While', 'Although', 'Despite', 'Given that', 'Considering']
  },
  body1: {
    formula: 'Topic sentence (Argument 1) + Explanation + Evidence/Example + Link to thesis',
    starters: [
      'One of the primary arguments in favour of this view is that...',
      'First and foremost, it is important to consider...',
      'A key factor supporting this position is...',
      'To begin with, proponents argue that...',
      'The most compelling reason is that...'
    ],
    connectors: ['Furthermore', 'Moreover', 'In addition', 'As a result', 'Consequently']
  },
  body2: {
    formula: 'Topic sentence (Argument 2 or Counter-argument) + Explanation + Evidence/Example + Link to thesis',
    starters: [
      'On the other hand, it could be argued that...',
      'However, there is also a strong case for...',
      'Conversely, opponents of this view maintain that...',
      'Nevertheless, an alternative perspective suggests that...',
      'Another significant consideration is that...'
    ],
    connectors: ['However', 'Nevertheless', 'In contrast', 'Alternatively', 'Despite this']
  },
  conclusion: {
    formula: 'Restate thesis (paraphrased) + Synthesise key arguments + Final statement/recommendation',
    starters: [
      'In conclusion, while both sides of the argument have merit...',
      'To sum up, the evidence suggests that...',
      'Overall, it can be concluded that...',
      'Taking all factors into consideration...',
      'In light of the arguments presented...'
    ],
    connectors: ['Therefore', 'Thus', 'Ultimately', 'Hence', 'Accordingly']
  }
};

// ── 9. RS_BANK – Repeat Sentence prediction sentences (from 萤火虫 v8.06) ──
const RS_BANK = [
  // Campus
  { text: 'A group meeting will be held tomorrow in the library conference room.', topic: 'Campus' },
  { text: 'A number of students have volunteer jobs.', topic: 'Campus' },
  { text: 'We can all meet at my office after the lecture.', topic: 'Campus' },
  { text: 'You can make an appointment to meet the librarian.', topic: 'Campus' },
  { text: 'Agenda items should be submitted by the end of the day.', topic: 'Campus' },
  { text: 'All students are expected to attend ten lab sessions per semester.', topic: 'Campus' },
  { text: 'The assignments should be submitted to the department office before the deadlines.', topic: 'Campus' },
  { text: 'Before attending classes, you must register online or by post.', topic: 'Campus' },
  { text: 'Assessment tasks are given to students in the first week of each semester.', topic: 'Campus' },
  { text: 'The library has an extensive collection of academic journals.', topic: 'Campus' },
  { text: 'The student who borrowed the bookerta must return it before the holidays.', topic: 'Campus' },
  { text: 'You should always submit your assignment before the due date.', topic: 'Campus' },
  { text: 'Students are expected to attend classes regularly and participate actively.', topic: 'Campus' },
  { text: 'The professor will be available during office hours on Wednesday.', topic: 'Campus' },
  { text: 'The course includes both theoretical lectures and practical work.', topic: 'Campus' },
  { text: 'Students should try to attend all seminars in order to get credits.', topic: 'Campus' },
  { text: 'The scholarship is available for both domestic and international students.', topic: 'Campus' },
  { text: 'The new campus building will open at the beginning of next semester.', topic: 'Campus' },
  { text: 'All essays and papers submitted must be the original work of the student.', topic: 'Campus' },
  { text: 'The results were published in a leading scientific journal.', topic: 'Campus' },
  { text: 'Students who have difficulties should seek help from their tutors.', topic: 'Campus' },
  { text: 'You need to hand in your assignment by the end of this week.', topic: 'Campus' },
  { text: 'The lab is only open to postgraduate students during the summer.', topic: 'Campus' },
  { text: 'The exam will cover all the material from this semester.', topic: 'Campus' },
  { text: 'Please refer to the reading list that has been uploaded online.', topic: 'Campus' },
  { text: 'You are required to complete the project as a group assignment.', topic: 'Campus' },
  { text: 'The lecture will focus on the key issues in contemporary society.', topic: 'Campus' },
  { text: 'Academic integrity is taken very seriously at this university.', topic: 'Campus' },
  { text: 'The tutorial will review the topics covered in the previous lecture.', topic: 'Campus' },
  { text: 'The department requires students to attend a minimum of eighty percent of classes.', topic: 'Campus' },
  // Academic
  { text: 'Climate change is having an enormous impact on the environment.', topic: 'Academic' },
  { text: 'A number of issues were raised during the committee meeting.', topic: 'Academic' },
  { text: 'Statistical analysis is a fundamental part of scientific research.', topic: 'Academic' },
  { text: 'Philosophy is the study of fundamental problems connected with existence.', topic: 'Academic' },
  { text: 'The findings of the research were published in a peer-reviewed journal.', topic: 'Academic' },
  { text: 'The experiment was designed to test the hypothesis under controlled conditions.', topic: 'Academic' },
  { text: 'Science has made enormous progress in the last few decades.', topic: 'Academic' },
  { text: 'The professor gave a detailed presentation of her research findings.', topic: 'Academic' },
  { text: 'A thorough literature review is an essential component of any research project.', topic: 'Academic' },
  { text: 'The study shows a significant correlation between diet and health outcomes.', topic: 'Academic' },
  { text: 'Economic growth in developing countries has increased significantly.', topic: 'Academic' },
  { text: 'The data suggests that the trend will continue for the foreseeable future.', topic: 'Academic' },
  { text: 'Researchers have found a link between exercise and improved mental health.', topic: 'Academic' },
  { text: 'The theory was developed based on a series of experiments.', topic: 'Academic' },
  { text: 'The survey was conducted with a representative sample of the population.', topic: 'Academic' },
  { text: 'Education plays a crucial role in the development of a nation.', topic: 'Academic' },
  { text: 'The methodology used in this study is widely accepted in the field.', topic: 'Academic' },
  { text: 'Critical thinking is an essential skill for academic success.', topic: 'Academic' },
  { text: 'The textbook covers a wide range of topics in modern economics.', topic: 'Academic' },
  { text: 'Qualitative and quantitative methods are both used in social science research.', topic: 'Academic' },
  // Daily Life
  { text: 'Everyone must evacuate the premises during the fire drill.', topic: 'Daily Life' },
  { text: 'The post office will be closed on Monday and Friday afternoons.', topic: 'Daily Life' },
  { text: 'The bus for London will leave ten minutes later than planned.', topic: 'Daily Life' },
  { text: 'Making mistakes is fine as long as you learn from them.', topic: 'Daily Life' },
  { text: 'Radio is a popular form of entertainment throughout the world.', topic: 'Daily Life' },
  { text: 'Politics is not usually a safe topic of conversation.', topic: 'Daily Life' },
  { text: 'Fashion trends help to make peoples life interesting.', topic: 'Daily Life' },
  { text: 'People have been dependent on using phones in their everyday life.', topic: 'Daily Life' },
  { text: 'Heavy snow means no flight could take off or land.', topic: 'Daily Life' },
  { text: 'Social media has grown enormously in recent years.', topic: 'Daily Life' },
  { text: 'Building trust is not something that can be achieved overnight.', topic: 'Daily Life' },
  { text: 'The media plays a significant role in shaping public opinion.', topic: 'Daily Life' },
  { text: 'You must call your doctor to make an appointment.', topic: 'Daily Life' },
  { text: 'Rail transport is becoming more and more popular.', topic: 'Daily Life' },
  { text: 'Parents are financially responsible for their children right up until they reach adulthood.', topic: 'Daily Life' },
  // Health
  { text: 'Fresh drinking water is a basic necessity for human survival.', topic: 'Health' },
  { text: 'Regular exercise helps to keep the body in good physical condition.', topic: 'Health' },
  { text: 'A balanced diet is important for maintaining good health.', topic: 'Health' },
  { text: 'Mental health issues affect a growing number of young people.', topic: 'Health' },
  { text: 'The hospital provides a range of specialist medical services.', topic: 'Health' },
  // Environment
  { text: 'Greenhouse gases are considered a major cause of global warming.', topic: 'Environment' },
  { text: 'Renewable energy sources are essential for sustainable development.', topic: 'Environment' },
  { text: 'Deforestation is a significant threat to biodiversity.', topic: 'Environment' },
  { text: 'Water pollution is a major issue in many developing countries.', topic: 'Environment' },
  { text: 'The recycling program has significantly reduced waste in the city.', topic: 'Environment' },
  // Economy
  { text: 'The economy has shown signs of recovery in the last quarter.', topic: 'Economy' },
  { text: 'International trade plays a vital role in the global economy.', topic: 'Economy' },
  { text: 'Small businesses contribute significantly to employment creation.', topic: 'Economy' },
  { text: 'They were struggling last year to make their service pay.', topic: 'Economy' },
  { text: 'We cannot consider any increase in our price at this stage.', topic: 'Economy' },
  // Technology
  { text: 'The digital revolution has changed the way we read.', topic: 'Technology' },
  { text: 'Artificial intelligence has made significant progress in the last few years.', topic: 'Technology' },
  { text: 'Information technology has changed the way people study today.', topic: 'Technology' },
  { text: 'Technology is no longer a simple tool that we can control.', topic: 'Technology' },
  { text: 'New media has a significant impact on human communications.', topic: 'Technology' },
  { text: 'Technological developments have changed the way we live.', topic: 'Technology' },
  { text: 'The instant availability of information has radically changed peoples lives.', topic: 'Technology' },
  { text: 'New credit cards will soon use fingerprint technology.', topic: 'Technology' },
  // Biology
  { text: 'Animals raised in captivity behave differently than their wild counterparts.', topic: 'Biology' },
  { text: 'Rivers provide habitats for fish and other aquatic species.', topic: 'Biology' },
  { text: 'Cells are the basic building blocks of all animals and plants.', topic: 'Biology' },
  { text: 'Every living thing begins as a single cell.', topic: 'Biology' },
  { text: 'Blue whales are the largest animals that have ever lived.', topic: 'Biology' },
  // Humanities
  { text: 'All writers consciously or unconsciously represent their own culture.', topic: 'Humanities' },
  { text: 'The Industrial Revolution in Europe was driven by steam technology.', topic: 'Humanities' },
  { text: 'There are opportunities to receive grants in most artistic fields.', topic: 'Humanities' },
  { text: 'Art is an expression of creative skills and imagination.', topic: 'Humanities' },
  { text: 'It is generally accepted that language is a part of culture.', topic: 'Humanities' },
  { text: 'Historical cities are financially dependent on tourism as income.', topic: 'Humanities' },
  { text: 'We should never underestimate the power of creative design.', topic: 'Humanities' },
  { text: 'Journalism faces the crisis in the light of the digital revolution.', topic: 'Humanities' },
  { text: 'Our cultural values are dependent on the choices we made.', topic: 'Humanities' },
  { text: 'Many inventors in the engineering sector are inspired by nature.', topic: 'Humanities' }
];

// ── 10. WFD_BANK – Write From Dictation prediction sentences (from 萤火虫 v8.06) ──
const WFD_BANK = [
  // Education
  { text: 'Students are required to attend all scheduled tutorial sessions.', topic: 'Education' },
  { text: 'The course curriculum has been updated to include new research.', topic: 'Education' },
  { text: 'Our view is that educational reforms have been inadequately implemented.', topic: 'Education' },
  { text: 'A minimum attendance of eighty percent is required for all courses.', topic: 'Education' },
  { text: 'University courses should be relevant to students future careers.', topic: 'Education' },
  { text: 'Teaching assistants provide additional support during tutorial hours.', topic: 'Education' },
  // Campus
  { text: 'A group meeting will be held tomorrow in the library conference room.', topic: 'Campus' },
  { text: 'A number of students have volunteer jobs.', topic: 'Campus' },
  { text: 'We can all meet at my office after the lecture.', topic: 'Campus' },
  { text: 'You can make an appointment to meet the librarian.', topic: 'Campus' },
  { text: 'Agenda items should be submitted by the end of the day.', topic: 'Campus' },
  { text: 'All students are expected to attend ten lab sessions per semester.', topic: 'Campus' },
  { text: 'Leaving valuable possessions unattended in public place is risky.', topic: 'Campus' },
  { text: 'The assignments should be submitted to the department office before the deadlines.', topic: 'Campus' },
  { text: 'Before attending classes, you must register online or by post.', topic: 'Campus' },
  // Health
  { text: 'Dietary changes are an essential part of a healthy lifestyle.', topic: 'Health' },
  { text: 'Regular physical activity is important for maintaining good health.', topic: 'Health' },
  { text: 'The hospital provides a wide range of specialist services.', topic: 'Health' },
  { text: 'Mental health is as important as physical health.', topic: 'Health' },
  { text: 'Medical research has made remarkable progress in the last century.', topic: 'Health' },
  // Environment
  { text: 'Climate change is having an enormous impact on the environment.', topic: 'Environment' },
  { text: 'Greenhouse gas emissions must be reduced to prevent global warming.', topic: 'Environment' },
  { text: 'Many food crops require large amounts of water and fertilizer.', topic: 'Environment' },
  { text: 'Farmers need to adapt to the changes in climate.', topic: 'Environment' },
  { text: 'Crops that are nutritious are planted around the world every year.', topic: 'Environment' },
  { text: 'Renewable energy is becoming more affordable and accessible.', topic: 'Environment' },
  { text: 'Coastal communities are particularly vulnerable to rising sea levels.', topic: 'Environment' },
  // Economy
  { text: 'Members should make mandatory contributions to associated operating funds.', topic: 'Economy' },
  { text: 'They were struggling last year to make their service pay.', topic: 'Economy' },
  { text: 'We cannot consider any increase in our price at this stage.', topic: 'Economy' },
  { text: 'Attracting skilled workers to the city with expensive housing is hard.', topic: 'Economy' },
  { text: 'Population has a sharp rise in the recent twenty years.', topic: 'Economy' },
  // Technology
  { text: 'The supposed benefits of space exploration are frequently questioned.', topic: 'Technology' },
  { text: 'The digital revolution has changed the way we read.', topic: 'Technology' },
  { text: 'The software companies design and create new products.', topic: 'Technology' },
  { text: 'New credit cards will soon use fingerprint technology.', topic: 'Technology' },
  { text: 'Information technology has changed the way people study today.', topic: 'Technology' },
  { text: 'Technological developments have changed the way we live.', topic: 'Technology' },
  { text: 'Artificial intelligence has made significant progress in the last few years.', topic: 'Technology' },
  { text: 'Technology is no longer a simple tool that we can control.', topic: 'Technology' },
  { text: 'The instant availability of information has radically changed peoples lives.', topic: 'Technology' },
  { text: 'New media has transcended traditional national boundaries.', topic: 'Technology' },
  { text: 'Computers used to be larger than they are now.', topic: 'Technology' },
  { text: 'The capacity of programming computers is expanding enormously every year.', topic: 'Technology' },
  { text: 'The site is designed to be highly interactive.', topic: 'Technology' },
  { text: 'Technology is changing the way that media is used and studied.', topic: 'Technology' },
  // Humanities
  { text: 'All writers consciously or unconsciously represent their own culture.', topic: 'Humanities' },
  { text: 'An ancient text may hold secrets which were lost centuries ago.', topic: 'Humanities' },
  { text: 'Books for children often contain many bits of illustration.', topic: 'Humanities' },
  { text: 'The Industrial Revolution in Europe was driven by steam technology.', topic: 'Humanities' },
  { text: 'There are opportunities to receive grants in most artistic fields.', topic: 'Humanities' },
  { text: 'Mechanical engineering first became prominent during the Industrial Revolution.', topic: 'Humanities' },
  { text: 'Castles were designed to intimidate both local people and enemies.', topic: 'Humanities' },
  { text: 'Journalism faces the crisis in the light of the digital revolution.', topic: 'Humanities' },
  { text: 'We should never underestimate the power of creative design.', topic: 'Humanities' },
  { text: 'Art and design is a competitive field to work in.', topic: 'Humanities' },
  { text: 'Art is an expression of creative skills and imagination.', topic: 'Humanities' },
  { text: 'It is generally accepted that language is a part of culture.', topic: 'Humanities' },
  { text: 'Our cultural values are dependent on the choices we made.', topic: 'Humanities' },
  { text: 'Historical cities are financially dependent on the tourism as income.', topic: 'Humanities' },
  { text: 'Many inventors in the engineering sector are inspired by nature.', topic: 'Humanities' },
  { text: 'Novelists write about the best things that they know about.', topic: 'Humanities' },
  { text: 'The director of the gallery was grateful for the anonymous donation.', topic: 'Humanities' },
  // Daily Life
  { text: 'Everyone must evacuate the premises during the fire drill.', topic: 'Daily Life' },
  { text: 'The post office will be closed on Monday and Friday afternoons.', topic: 'Daily Life' },
  { text: 'The bus for London will leave ten minutes later than planned.', topic: 'Daily Life' },
  { text: 'Making mistakes is fine as long as you learn from them.', topic: 'Daily Life' },
  { text: 'Radio is a popular form of entertainment throughout the world.', topic: 'Daily Life' },
  { text: 'Politics is not usually a safe topic of conversation.', topic: 'Daily Life' },
  { text: 'People have been dependent on using phones in their everyday life.', topic: 'Daily Life' },
  { text: 'Leave the building immediately if the fire alarm goes off.', topic: 'Daily Life' },
  { text: 'Heavy snow means no flight could take off or land.', topic: 'Daily Life' },
  { text: 'The cafeteria will only serve cold meals on Friday this week.', topic: 'Daily Life' },
  { text: 'Rail transport is becoming more and more popular.', topic: 'Daily Life' },
  { text: 'Parents are financially responsible for their children right up until they reach adulthood.', topic: 'Daily Life' },
  { text: 'Social media has grown enormously in recent years.', topic: 'Daily Life' },
  { text: 'Building trust is not something that can be achieved overnight.', topic: 'Daily Life' },
  { text: 'The media plays a significant role in shaping public opinion.', topic: 'Daily Life' },
  { text: 'You must call your doctor to make an appointment.', topic: 'Daily Life' },
  { text: 'You must change your password every month.', topic: 'Daily Life' },
  { text: 'There is a lot of traffic in the morning.', topic: 'Daily Life' },
  { text: 'The orchestra will be led by a visiting conductor.', topic: 'Daily Life' },
  { text: 'Consumers are better informed today because of the internet.', topic: 'Daily Life' },
  { text: 'Social media has a significant impact on journalism.', topic: 'Daily Life' },
  // Biology
  { text: 'Animals raised in captivity behave differently than their wild counterparts.', topic: 'Biology' },
  { text: 'Despite their differences all forms of life share certain characteristics.', topic: 'Biology' },
  { text: 'Human beings compete with other living things for resources and space.', topic: 'Biology' },
  { text: 'Rivers provide habitats for fish and other aquatic species.', topic: 'Biology' },
  { text: 'The African elephant is the largest living land mammal in the world.', topic: 'Biology' },
  { text: 'Blue whales are the largest animals that have ever lived.', topic: 'Biology' },
  { text: 'Cells are the basic building blocks of all animals and plants.', topic: 'Biology' },
  { text: 'Every living thing begins as a single cell.', topic: 'Biology' },
  { text: 'Plants are able to continue growing throughout their lives.', topic: 'Biology' },
  { text: 'Animal and plant cells have a number of structures in common.', topic: 'Biology' },
  { text: 'The plight of local wildlife has been ignored by developers.', topic: 'Biology' },
  // Society
  { text: 'Increasing population results in an increasing demand in energy.', topic: 'Society' },
  { text: 'Identity theft happens to thousands of people every day.', topic: 'Society' },
  { text: 'Parenting is difficult for parents who have shift work.', topic: 'Society' },
  { text: 'Joining the societies is a great way to meet new people.', topic: 'Society' }
];

// ── 11. PTE_TEMPLATES – Speaking & Writing templates (from 萤火虫 v8.06) ──
var PTE_TEMPLATES = {
  // ── Describe Image templates ──
  di: {
    extremeSingle: 'This [bar/line/pie/table] chart shows information about [title].\nFirstly, the highest number can be found in [largest item], which is around [largest value].\nSecondly, the second-highest number is located in [2nd item], which is about [2nd value].\nThirdly, the lowest figure is for [smallest item], and the number is around [smallest value].\nFurthermore, [other item 1] and [other item 2] also carry important weight in this graph.\nIn summary, this chart uses real data to describe [title].',
    extremeMulti: 'This [bar/line/pie/table] chart shows information about [title].\nIf you look at [category 1], the highest number can be found in [cat1 largest], which is around [cat1 value]. The lowest figure is located in [cat1 smallest], which is about [cat1 value].\nIf you look at [category 2], the highest number is for [cat2 largest], and the number is around [cat2 value].\nFurthermore, [other item 1] and [other item 2] also carry important weight in this graph.\nIn summary, this chart uses real data to describe [title].',
    flow: 'This flow chart shows information about [title].\nAccording to the picture, we can see that:\nFirstly, the process starts from the first stage, which is called [step 1].\nSecondly, it goes to the second stage, which is about [step 2].\nThirdly, it comes to the third stage, which is called [step 3].\nFurthermore, the process comes to the ending point, which is about [last step].\nIn summary, the process shows details about [title].',
    picture: 'This picture shows information about [title].\nIf you look at [area 1], the most obvious information given here is [info].\nNext to it, we can see [info] and [info], and these elements are also quite important.\nIf you look at [area 2], [info] and [info] are also shown in this part, giving a better understanding about this picture.\nFurthermore, we can also see [info] and [info] in this picture as well.\nIn summary, this picture uses different elements to describe [title].'
  },
  // ── Retell Lecture template ──
  rl: 'This lecture is mainly talking about [topic].\nFirstly, the lecture begins by giving an introduction about [point] and [point].\nSecondly, [point] and [point] are mentioned by the speaker, which is tied to the topic.\nThirdly, the speaker provides a lot of details about [point] and [point].\nFurthermore, the lecture argues the point of [point] and [point] to support the main idea.\nIn summary, the lecture covers the topic of [topic].',
  // ── Summarize Group Discussion templates ──
  sgd: {
    byOrder: 'The conversation is about three speakers discussing [topic].\nSpeaker X talked about [point] and [point], and also mentioned [point] and [point].\nThen, Speaker X said [point] and [point], and then discussed [point] and [point].\nAnd then, Speaker X argued [point] and [point], and also referred to [point] and [point].',
    bySpeaker: 'The conversation is about three speakers discussing [topic].\nSpeaker 1 talked about [point] and [point], and also mentioned [point] and [point]. And she/he said [point] and [point], and also referred to [point] and [point].\nThen, Speaker 2 said [point] and [point], and then discussed [point] and [point]. And she/he said [point] and [point], and also talked about [point] and [point].\nAnd then, Speaker 3 argued [point] and [point], and also mentioned [point] and [point]. And she/he said [point] and [point], and also referred to [point] and [point].'
  },
  // ── Respond to a Situation template ──
  rts: {
    greeting: { known: 'Hi / Excuse me, [name].', unknown: 'Hi, excuse me! / Hi, how are you?', voicemail: 'Hi, this is [your name].', formal: 'Hope I am not interrupting you! / May I take a moment of your time?' },
    endings: {
      suggest: { informal: 'I think it will be a good idea if you/we can...', formal: 'I suggest you/we consider...' },
      askAdvice: { informal: 'What do you think about...?', formal: 'Could you provide some advice on...? I would really appreciate your suggestions.' },
      askHelp: { informal: 'Would you help me out with...? Thanks so much!', formal: 'Would it be possible for you/me to...? I would really appreciate your help.' },
      apologize: { informal: 'Sorry about that!', formal: 'I sincerely apologize for...!' },
      thank: { informal: 'Thank you for...!', formal: 'I am deeply grateful for your...!' }
    }
  },
  // ── Summarize Spoken Text (SST) – sentence template ──
  sstSentence: 'The lecture elaborates on the topic of [topic].\nFirstly, the speaker mentioned (that) [key sentence].\nSecondly, the lecturer showed (that) [key sentence].\nIn addition / However, the speaker emphasized (that) [key sentence].\nMoreover, the talk highlighted (that) [key sentence].\n(Template base: 28 words; target: 50-70 words total)',
  // ── Summarize Spoken Text (SST) – word template ──
  sstWord: 'This lecture elaborates on the topic of [topic], which would involve [keyword].\nFirstly, they have mentioned [keyword] and [keyword], related to [keyword] and [keyword] due to [keyword] and [keyword].\nSecondly, they have mentioned [keyword] and [keyword] while elaborating on [keyword] and [keyword].\nTherefore, the underlying issues of [keyword] can be proved by [keyword] and [keyword].\n(Template base: 40 words; target: 50-70 words total)',
  // ── Summarize Written Text (SWT) ──
  swt: 'Formula: [Summary sentence 1], [connector] [summary sentence 2], [connector] [summary sentence 3], [connector] [summary sentence 4].\nConnectors by logic: and (parallel), but (contrast), although (concession), whereas (comparison), because (cause), so (result), while (accompaniment), which means (explanation).\nRules: One sentence only, 5-75 words, ends with one period at the very end. Paraphrase key sentences from each paragraph.',
  // ── Essay 151-word template ──
  essay151: {
    para1: 'There is no doubt that the debate over [keyword] has drawn attention from the general public in the modern world.\nPersonally speaking, I firmly believe that [opinion sentence], which will be supported by the following discussion.',
    para2: 'First and foremost, when it comes to [keyword], the most important [reason/advantage/feature] is that [keyword] can potentially bring about [keyword].\nTo be more specific, [keyword] will generate [keyword], which will consequently result in [keyword].\nFor instance, according to the annual report of [source 1], at least 80% of [related group] have experienced [keyword] because of [keyword].',
    para3: 'On the other hand, in terms of [keyword], another significant [reason/disadvantage/solution] is that [keyword] can possibly cause [keyword].\nTo illustrate, [keyword] can give rise to [keyword], thereby leading to [keyword].\nTo take a recent study from [source 2] as an example, more than 60% of [related group] have faced [keyword] as a result of [keyword].',
    para4: 'With all the points above, it can be concluded that [restate opinion], because [keyword] and [keyword] both play a vital role in this case.\nTherefore, it is of utmost importance that [related group] should devote [resources/time/effort/money] to this.',
    wordCount: 151,
    tips: 'Fill-in keywords must be noun phrases. Opinion sentences must be complete sentences. Source can be: the Australian government, Microsoft, a recent study, or "my own experience" if the prompt asks for personal experience. Target: 200-300 words total.'
  },
  // ── Essay sentence template ──
  essaySentence: {
    para1: 'There is no doubt that [paraphrase the topic/phenomenon from the prompt].\nPersonally speaking, I firmly believe that [opinion sentence], which will be supported by the following discussion.',
    para2: 'First and foremost, the most important [reason/advantage/feature] is that [argument 1].\nTo be more specific, [elaborate argument 1].\nFor instance, according to [source 1], [example supporting argument 1].',
    para3: 'On the other hand, another significant [reason/disadvantage/solution] is that [argument 2].\nTo illustrate, [elaborate argument 2].\nTo take [source 2] as an example, [example supporting argument 2].',
    para4: 'With all the points above, it can be concluded that [restate opinion], because [restate argument 1] and [restate argument 2].\nTherefore, it is of utmost importance that [recommendation].',
    wordCount: 69,
    tips: 'Fill in complete sentences for arguments and examples. Use simple sentence structures. Target: 200-300 words total.'
  }
};

// ── 12. RA_STRATEGY – Read Aloud "One Sentence" method (from 萤火虫) ──
var RA_STRATEGY = {
  method: 'Select 10-15 continuous words from the passage and read ONLY those words clearly. This scores the same as reading the full passage (tested: Speaking 31 both ways).',
  rules: [
    'Words must be continuous (no skipping)',
    'Select 10-15 words (not more, not less)',
    'Do not end on a function word (the, a, of, in, etc.)',
    'If you misread a word, do NOT go back - continue forward',
    'You may skip at most 1 unknown word',
    'Focus on fluency, pronunciation, and natural intonation'
  ],
  qualityMethod: 'Chunk the passage into phrases -> drill hard words -> read chunks smoothly -> read full sentences -> read the passage',
  speedMethod: 'Simulate exam conditions -> review your recording -> identify issues -> improve and retry'
};

// ── 13. FIB_COLLOCATIONS – High-frequency Reading FIB collocations ──
var FIB_COLLOCATIONS = [
  'a boon to', 'a broad stream of', 'abide by', 'accompanied by', 'according to',
  'account for', 'accrue to', 'accustomed to', 'adapt to', 'adhered to',
  'adjacent to', 'agree with', 'aim at', 'allergic to', 'allow for',
  'amount to', 'an array of', 'an abundance of', 'appeal to', 'applicable to',
  'apply to', 'approve of', 'arise from', 'associated with', 'attribute to',
  'based on', 'be committed to', 'be composed of', 'be concerned with', 'be conducive to',
  'be derived from', 'be devoted to', 'be essential to', 'be exposed to', 'be inclined to',
  'be prone to', 'be relevant to', 'be subject to', 'be susceptible to', 'benefit from',
  'bring about', 'capable of', 'characteristic of', 'come up with', 'compared with',
  'compatible with', 'comply with', 'concentrate on', 'concerned about', 'conducive to',
  'consist of', 'contribute to', 'cope with', 'correspond to', 'deal with',
  'depend on', 'derive from', 'devote to', 'differ from', 'dispose of',
  'distinguish between', 'draw on', 'due to', 'dwell on', 'engage in',
  'equivalent to', 'evolve from', 'focus on', 'give rise to', 'in accordance with',
  'in addition to', 'in conjunction with', 'in favour of', 'in light of', 'in spite of',
  'in terms of', 'in the wake of', 'independent of', 'indicative of', 'insist on',
  'interact with', 'interfere with', 'lead to', 'make up for', 'on behalf of',
  'originate from', 'owing to', 'participate in', 'pertain to', 'pose a threat to',
  'prior to', 'prone to', 'provide for', 'put forward', 'regardless of',
  'relate to', 'rely on', 'result from', 'result in', 'set out',
  'stem from', 'strive for', 'subject to', 'subscribe to', 'take into account',
  'turn out', 'with regard to', 'with respect to'
];

// ── 14. Helper Functions ────────────────────────────────────

/**
 * Returns the phase key for a given day number (1-42).
 */
function getPhase(dayNum) {
  for (var key in PHASES) {
    if (PHASES.hasOwnProperty(key)) {
      var r = PHASES[key].range;
      if (dayNum >= r[0] && dayNum <= r[1]) return key;
    }
  }
  return 'exam';
}

/**
 * Returns a Date object for a given day number (Day 1 = Feb 28, 2026).
 */
function getDate(dayNum) {
  var d = new Date(START_DATE);
  d.setDate(d.getDate() + (dayNum - 1));
  return d;
}

/**
 * Returns abbreviated day-of-week string for a given day number.
 */
function getDayOfWeek(dayNum) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[getDate(dayNum).getDay()];
}

/**
 * Returns true if the given day number falls on a Saturday or Sunday.
 */
function isWeekend(dayNum) {
  var dow = getDate(dayNum).getDay();
  return dow === 0 || dow === 6;
}

/**
 * Returns volume counts for Read Aloud (ra), Repeat Sentence (rs),
 * and Write From Dictation (wfd) based on phase and progressive ramp-up.
 */
function getVolume(dayNum) {
  var phase = getPhase(dayNum);
  var weekend = isWeekend(dayNum);
  var base;

  switch (phase) {
    case 'foundation':
      base = { ra: 5, rs: 5, wfd: 5 };
      break;
    case 'intensive':
      // Ramp up through intensive phase
      var progress = (dayNum - 11) / 17; // 0 to 1
      base = {
        ra: Math.round(7 + progress * 3),  // 7 -> 10
        rs: Math.round(7 + progress * 3),  // 7 -> 10
        wfd: Math.round(7 + progress * 5)  // 7 -> 12
      };
      break;
    case 'simulation':
      base = { ra: 10, rs: 10, wfd: 12 };
      break;
    case 'taper':
      base = { ra: 6, rs: 6, wfd: 8 };
      break;
    case 'exam':
      base = { ra: 0, rs: 0, wfd: 0 };
      break;
    default:
      base = { ra: 5, rs: 5, wfd: 5 };
  }

  // Weekend bonus: +3 each
  if (weekend && phase !== 'exam' && phase !== 'taper') {
    base.ra += 3;
    base.rs += 3;
    base.wfd += 3;
  }

  return base;
}

// ── Day assignment maps ────────────────────────────────────
const ESSAY_DAYS = [2, 5, 8, 10, 12, 14, 17, 19, 22, 24, 26, 28, 29, 31, 33, 36];
const SWT_DAYS   = [1, 4, 7, 9, 11, 13, 16, 18, 20, 23, 25, 27, 30, 32, 35];
const GRAMMAR_DAYS = [3, 6, 15, 21, 27, 35, 38];

// ── 10. generateDayPlan(dayNum) ────────────────────────────

/**
 * Generates a complete day plan object for the given day number (1-42).
 */
function generateDayPlan(dayNum) {
  var date = getDate(dayNum);
  var phase = getPhase(dayNum);
  var phaseInfo = PHASES[phase];
  var scaffold = phaseInfo.scaffold;
  var dow = getDayOfWeek(dayNum);
  var weekend = isWeekend(dayNum);
  var vol = getVolume(dayNum);

  // Date string: "Sat, Feb 28"
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var dateStr = dow + ', ' + months[date.getMonth()] + ' ' + date.getDate();

  // Focus label per phase
  var focusLabels = {
    foundation: 'Build habits & learn templates',
    intensive: 'Increase volume & reduce scaffolds',
    simulation: 'Full-length practice under exam conditions',
    taper: 'Light review & confidence building',
    exam: 'Exam Day — you are ready!'
  };

  // ── Exam day: minimal plan ──
  if (phase === 'exam') {
    return {
      dayNum: dayNum,
      date: date,
      dateStr: dateStr,
      dayOfWeek: dow,
      isWeekend: weekend,
      phase: phase,
      phaseLabel: phaseInfo.name,
      phaseColor: phaseInfo.color,
      scaffold: scaffold,
      focusLabel: focusLabels[phase],
      sections: {
        coreDrills: [],
        writingWorkshop: [
          { id: 'exam-prep', cat: 'Prep', label: 'Final equipment check', detail: 'Verify ID, check test centre address, pack water and snacks.', time: 15 },
          { id: 'exam-warm', cat: 'Warm-up', label: 'Light warm-up reading', detail: 'Read one short article aloud to warm up your voice. Do 3 WFD practice sentences.', time: 10 }
        ],
        ieltsSpeaking: {
          part1: IELTS_SPEAKING_TOPICS[dayNum - 1].part1Questions,
          part2: {
            topic: IELTS_SPEAKING_TOPICS[dayNum - 1].part2Topic,
            prompts: IELTS_SPEAKING_TOPICS[dayNum - 1].part2Prompts
          },
          part3: IELTS_SPEAKING_TOPICS[dayNum - 1].part3Questions,
          peelShown: false
        },
        pteSpeaking: [],
        readingListening: [],
        review: [
          { id: 'exam-reflect', cat: 'Reflection', label: 'Confidence visualisation', detail: 'Spend 5 minutes visualising a calm, confident exam performance.', time: 5 }
        ]
      },
      writingTip: WRITING_TIPS[dayNum - 1] || '',
      essayTopic: null,
      swtCount: 0,
      grammarFocus: null
    };
  }

  // ── Assign specific RS & WFD sentences for today ──
  var rsStart = ((dayNum - 1) * 5) % RS_BANK.length;
  var todayRS = [];
  for (var ri = 0; ri < vol.rs; ri++) {
    todayRS.push(RS_BANK[(rsStart + ri) % RS_BANK.length]);
  }
  var wfdStart = ((dayNum - 1) * 5) % WFD_BANK.length;
  var todayWFD = [];
  for (var wi = 0; wi < vol.wfd; wi++) {
    todayWFD.push(WFD_BANK[(wfdStart + wi) % WFD_BANK.length]);
  }

  // Build RS sentence list for detail display
  var rsDetail = 'Practice these prediction sentences:\n';
  for (var rsi = 0; rsi < todayRS.length; rsi++) {
    rsDetail += (rsi + 1) + '. ' + todayRS[rsi].text + '\n';
  }

  // Build WFD sentence list for detail display
  var wfdDetail = SCAFFOLD_INSTRUCTIONS[scaffold].wfd + '\n\nToday\'s prediction sentences:\n';
  for (var wdi = 0; wdi < todayWFD.length; wdi++) {
    wfdDetail += (wdi + 1) + '. ' + todayWFD[wdi].text + '\n';
  }

  // RA strategy detail with one-sentence method
  var raDetail = RA_STRATEGY.method + '\nRules: ' + RA_STRATEGY.rules.join('; ') + '.';

  // ── Core Drills section ──
  var coreDrills = [
    { id: 'ra-' + dayNum, cat: 'Read Aloud', label: 'Read Aloud x' + vol.ra, detail: raDetail, time: vol.ra * 1.5 },
    { id: 'rs-' + dayNum, cat: 'Repeat Sentence', label: 'Repeat Sentence x' + vol.rs, detail: rsDetail, time: vol.rs * 1, sentences: todayRS },
    { id: 'wfd-' + dayNum, cat: 'Write From Dictation', label: 'Write From Dictation x' + vol.wfd, detail: wfdDetail, time: vol.wfd * 1, sentences: todayWFD }
  ];

  if (weekend && phase !== 'taper') {
    // Pick DI template based on day rotation
    var diTemplates = [PTE_TEMPLATES.di.extremeSingle, PTE_TEMPLATES.di.extremeMulti, PTE_TEMPLATES.di.flow, PTE_TEMPLATES.di.picture];
    var diTemplate = diTemplates[(dayNum - 1) % diTemplates.length];
    coreDrills.push({
      id: 'di-' + dayNum, cat: 'Describe Image', label: 'Describe Image x3 (weekend bonus)',
      detail: 'Use this template:\n' + diTemplate,
      time: 10
    });
  }

  // ── Writing Workshop section ──
  var writingWorkshop = [];
  var essayTopic = null;
  var swtCount = 0;

  var essayIdx = ESSAY_DAYS.indexOf(dayNum);
  if (essayIdx !== -1) {
    var topicObj = ESSAY_TOPICS[essayIdx % ESSAY_TOPICS.length];
    // Build hint text from argument hints
    var hintText = '';
    if (topicObj.hints) {
      var hintKeys = Object.keys(topicObj.hints);
      for (var hi = 0; hi < hintKeys.length; hi++) {
        hintText += '\n' + hintKeys[hi].charAt(0).toUpperCase() + hintKeys[hi].slice(1) + ': ' + topicObj.hints[hintKeys[hi]].join('; ');
      }
    }
    essayTopic = {
      topic: topicObj.topic,
      category: topicObj.category,
      ref: topicObj.ref || '',
      hints: topicObj.hints || null,
      scaffoldInstructions: SCAFFOLD_INSTRUCTIONS[scaffold].essay
    };
    // Show 151-word template in Foundation, sentence template in Intensive+
    var templateRef = (scaffold === 'full') ? '\n\nUse the 151-word fill-in template (see Writing section below).' : '';
    writingWorkshop.push({
      id: 'essay-' + dayNum, cat: 'Essay', label: 'PTE Essay: ' + topicObj.category + ' ' + (topicObj.ref || ''),
      detail: SCAFFOLD_INSTRUCTIONS[scaffold].essay + templateRef + '\n\nArgument ideas:' + hintText,
      time: 20
    });
  }

  if (SWT_DAYS.indexOf(dayNum) !== -1) {
    swtCount = phase === 'simulation' ? 3 : (phase === 'intensive' ? 2 : 1);
    var swtTemplateHint = (scaffold === 'full' || scaffold === 'partial') ? '\n\nSWT Template: ' + PTE_TEMPLATES.swt : '';
    writingWorkshop.push({
      id: 'swt-' + dayNum, cat: 'Summarize Written Text', label: 'SWT x' + swtCount,
      detail: SCAFFOLD_INSTRUCTIONS[scaffold].swt + swtTemplateHint,
      time: swtCount * 10
    });
  }

  if (weekend && writingWorkshop.length > 0) {
    writingWorkshop.push({
      id: 'write-review-' + dayNum, cat: 'Review', label: 'Review previous writing',
      detail: 'Re-read and self-assess your last 2 essays or SWT responses. Check for recurring errors.',
      time: 15
    });
  }

  // ── IELTS Speaking section ──
  var speakingData = IELTS_SPEAKING_TOPICS[dayNum - 1];
  var peelShown = (scaffold === 'full' || scaffold === 'partial');

  var ieltsSpeaking = {
    part1: speakingData.part1Questions,
    part2: {
      topic: speakingData.part2Topic,
      prompts: speakingData.part2Prompts
    },
    part3: speakingData.part3Questions,
    peelShown: peelShown
  };

  // ── PTE Speaking section ──
  var pteSpeaking = [
    { id: 'pte-ra-drill-' + dayNum, cat: 'PTE Speaking', label: 'Pronunciation drill', detail: 'Record yourself reading 3 sentences. Listen back and identify mispronounced words. Repeat until smooth.\n\nRA Strategy: ' + RA_STRATEGY.method, time: 10 }
  ];

  if (phase === 'intensive' || phase === 'simulation') {
    var rlDetail = 'Listen to a 60-90 second lecture. Take notes on keywords. Retell in 40 seconds.\n\nRL Template:\n' + PTE_TEMPLATES.rl;
    pteSpeaking.push({
      id: 'pte-rl-' + dayNum, cat: 'PTE Speaking', label: 'Retell Lecture x2',
      detail: rlDetail,
      time: 10
    });
  }

  // Add SGD practice in intensive/simulation
  if ((phase === 'intensive' || phase === 'simulation') && weekend) {
    pteSpeaking.push({
      id: 'pte-sgd-' + dayNum, cat: 'PTE Speaking', label: 'Summarize Group Discussion x1',
      detail: 'Listen to a group discussion and summarize.\n\nSGD Template (by speaker order):\n' + PTE_TEMPLATES.sgd.byOrder,
      time: 10
    });
  }

  // Add RTS practice
  if (phase === 'intensive' || phase === 'simulation') {
    var rtsDetail = 'Respond to a situation prompt. Paraphrase in first person, add details.\n\nRTS Template:\nGreeting: ' + PTE_TEMPLATES.rts.greeting.known + '\nSuggest: ' + PTE_TEMPLATES.rts.endings.suggest.informal + '\nAsk help: ' + PTE_TEMPLATES.rts.endings.askHelp.formal;
    pteSpeaking.push({
      id: 'pte-rts-' + dayNum, cat: 'PTE Speaking', label: 'Respond to a Situation x1',
      detail: rtsDetail,
      time: 5
    });
  }

  if (phase === 'simulation') {
    pteSpeaking.push({
      id: 'pte-asq-' + dayNum, cat: 'PTE Speaking', label: 'Answer Short Question x5',
      detail: 'Practise answering factual questions with 1-2 word responses. Focus on understanding the question quickly.',
      time: 5
    });
  }

  if (weekend && phase !== 'taper') {
    pteSpeaking.push({
      id: 'pte-speak-extra-' + dayNum, cat: 'PTE Speaking', label: 'Extended speaking practice (weekend)',
      detail: 'Record a 2-minute monologue on any topic. Listen back and note filler words, pauses, and pronunciation issues.',
      time: 10
    });
  }

  // ── Reading & Listening section ──
  var readingListening = [];

  if (phase === 'foundation') {
    readingListening.push(
      { id: 'rl-mcq-' + dayNum, cat: 'Reading', label: 'Multiple Choice (Single) x3', detail: 'Read the question first, then skim the passage for the answer. Eliminate obviously wrong options.', time: 10 },
      { id: 'rl-fib-' + dayNum, cat: 'Reading', label: 'Fill in the Blanks x3', detail: 'Use context clues and collocations to select the best word for each blank.', time: 10 }
    );
  } else if (phase === 'intensive') {
    readingListening.push(
      { id: 'rl-mcq-' + dayNum, cat: 'Reading', label: 'Multiple Choice x4', detail: 'Practice both single and multiple-answer questions. Focus on identifying keywords in stems.', time: 12 },
      { id: 'rl-fib-' + dayNum, cat: 'Reading', label: 'R&W Fill in the Blanks x4', detail: 'Read the entire passage before filling blanks. Check grammar and collocation for each choice.', time: 12 },
      { id: 'rl-ro-' + dayNum, cat: 'Reading', label: 'Reorder Paragraphs x2', detail: 'Find the topic sentence (no pronoun reference, introduces a new idea). Build the logical flow from there.', time: 8 }
    );
  } else if (phase === 'simulation') {
    readingListening.push(
      { id: 'rl-full-' + dayNum, cat: 'Reading', label: 'Full Reading Section Practice', detail: 'Complete a timed full reading section (32-41 minutes). Practice all question types in sequence.', time: 35 },
      { id: 'rl-listen-' + dayNum, cat: 'Listening', label: 'Full Listening Section Practice', detail: 'Complete a timed listening section (45-57 minutes). Do not replay any audio.', time: 50 }
    );
  } else if (phase === 'taper') {
    readingListening.push(
      { id: 'rl-light-' + dayNum, cat: 'Reading', label: 'Light reading review x2', detail: 'Do 2 fill-in-the-blank exercises for maintenance. Focus on accuracy, not speed.', time: 8 }
    );
  }

  if (weekend && (phase === 'foundation' || phase === 'intensive')) {
    var sstTemplate = (scaffold === 'full') ? PTE_TEMPLATES.sstWord : PTE_TEMPLATES.sstSentence;
    readingListening.push({
      id: 'rl-extra-' + dayNum, cat: 'Listening', label: 'Summarize Spoken Text x2 (weekend)',
      detail: 'Listen to a 60-90 second audio. Write a 50-70 word summary.\n\nSST Template:\n' + sstTemplate,
      time: 15
    });
  }

  // Add FIB collocation drill (every 3rd day)
  if (dayNum % 3 === 0 && phase !== 'exam') {
    var colStart = ((dayNum / 3 - 1) * 10) % FIB_COLLOCATIONS.length;
    var todayCollocations = [];
    for (var ci = 0; ci < 10; ci++) {
      todayCollocations.push(FIB_COLLOCATIONS[(colStart + ci) % FIB_COLLOCATIONS.length]);
    }
    readingListening.push({
      id: 'fib-col-' + dayNum, cat: 'Reading', label: 'FIB Collocation drill (10 phrases)',
      detail: 'Review and memorise these high-frequency collocations:\n' + todayCollocations.join(', '),
      time: 5
    });
  }

  // ── Review section ──
  var review = [
    { id: 'review-log-' + dayNum, cat: 'Review', label: 'Update error log', detail: 'Record any new errors from today\'s practice. Categorise by type: grammar, spelling, vocabulary, pronunciation.', time: 5 }
  ];

  if (dayNum % 5 === 0) {
    review.push({
      id: 'review-5day-' + dayNum, cat: 'Review', label: '5-day progress check',
      detail: 'Review your error log for the past 5 days. Identify the top 3 recurring errors. Create targeted practice for each.',
      time: 15
    });
  }

  if (weekend) {
    review.push({
      id: 'review-weekend-' + dayNum, cat: 'Review', label: 'Weekly reflection (weekend)',
      detail: 'Write 3 things you improved this week and 3 areas to focus on next week. Adjust your study plan if needed.',
      time: 10
    });
  }

  // ── Grammar Focus ──
  var grammarFocus = null;
  var grammarIdx = GRAMMAR_DAYS.indexOf(dayNum);
  if (grammarIdx !== -1) {
    grammarFocus = GRAMMAR_TOPICS[grammarIdx % GRAMMAR_TOPICS.length];
    review.push({
      id: 'grammar-' + dayNum, cat: 'Grammar', label: 'Grammar focus: ' + grammarFocus.title,
      detail: grammarFocus.explanation + ' Review the examples and find 3 similar errors in your own recent writing.',
      time: 10
    });
  }

  return {
    dayNum: dayNum,
    date: date,
    dateStr: dateStr,
    dayOfWeek: dow,
    isWeekend: weekend,
    phase: phase,
    phaseLabel: phaseInfo.name,
    phaseColor: phaseInfo.color,
    scaffold: scaffold,
    focusLabel: focusLabels[phase],
    sections: {
      coreDrills: coreDrills,
      writingWorkshop: writingWorkshop,
      ieltsSpeaking: ieltsSpeaking,
      pteSpeaking: pteSpeaking,
      readingListening: readingListening,
      review: review
    },
    writingTip: WRITING_TIPS[dayNum - 1] || '',
    essayTopic: essayTopic,
    swtCount: swtCount,
    grammarFocus: grammarFocus,
    // New enrichment fields
    rsSentences: todayRS,
    wfdSentences: todayWFD,
    pteTemplates: PTE_TEMPLATES
  };
}

// ── Pre-generate all 42 day plans ──────────────────────────
const ALL_DAY_PLANS = [];
for (var i = 1; i <= 42; i++) {
  ALL_DAY_PLANS.push(generateDayPlan(i));
}

// ── Summary stats helper ───────────────────────────────────
/**
 * Returns aggregate statistics for the entire 42-day plan.
 */
function getPlanStats() {
  var totalEssays = ESSAY_DAYS.length;
  var totalSWT = 0;
  var totalRA = 0;
  var totalRS = 0;
  var totalWFD = 0;
  var totalMinutes = 0;

  for (var i = 0; i < ALL_DAY_PLANS.length; i++) {
    var plan = ALL_DAY_PLANS[i];
    totalSWT += plan.swtCount;
    var vol = getVolume(plan.dayNum);
    totalRA += vol.ra;
    totalRS += vol.rs;
    totalWFD += vol.wfd;

    // Sum all section times
    var sections = plan.sections;
    var allTasks = [].concat(
      sections.coreDrills,
      sections.writingWorkshop,
      sections.pteSpeaking,
      sections.readingListening,
      sections.review
    );
    for (var j = 0; j < allTasks.length; j++) {
      if (allTasks[j] && allTasks[j].time) {
        totalMinutes += allTasks[j].time;
      }
    }
  }

  return {
    totalDays: 42,
    examDate: 'Apr 10, 2026',
    totalEssays: totalEssays,
    totalSWT: totalSWT,
    totalRA: totalRA,
    totalRS: totalRS,
    totalWFD: totalWFD,
    totalMinutes: Math.round(totalMinutes),
    totalHours: Math.round(totalMinutes / 60),
    grammarDays: GRAMMAR_DAYS.length,
    phases: Object.keys(PHASES).length
  };
}
