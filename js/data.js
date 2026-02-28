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
  { id: 1,  topic: 'Education is the most important factor in the development of a country. Do you agree?', category: 'Education' },
  { id: 2,  topic: 'Technology has made our lives too complex. Do you agree or disagree?', category: 'Technology' },
  { id: 3,  topic: 'Climate change is the greatest threat facing humanity today. Discuss both sides.', category: 'Environment' },
  { id: 4,  topic: 'What are the advantages and disadvantages of working from home?', category: 'Society' },
  { id: 5,  topic: 'Governments should spend more on public health than on space exploration. Discuss.', category: 'Health' },
  { id: 6,  topic: 'Television has a greater influence on people than the Internet. Do you agree?', category: 'Technology' },
  { id: 7,  topic: 'University education should be free for all students. Discuss both views.', category: 'Education' },
  { id: 8,  topic: 'Animals should not be used for medical research. Do you agree?', category: 'Science' },
  { id: 9,  topic: 'Computers will soon replace teachers in the classroom. Do you agree?', category: 'Education' },
  { id: 10, topic: 'International tourism has the potential to be harmful. Discuss.', category: 'Society' },
  { id: 11, topic: 'In a cashless society, convenience outweighs the drawbacks. Discuss.', category: 'Technology' },
  { id: 12, topic: 'Parents should be legally responsible for their children\'s actions. Discuss.', category: 'Society' },
  { id: 13, topic: 'Social media does more harm than good. Discuss both views.', category: 'Technology' },
  { id: 14, topic: 'Globalisation has made the world a better place. Do you agree?', category: 'Society' },
  { id: 15, topic: 'Governments should impose a tax on junk food. Discuss.', category: 'Health' },
  { id: 16, topic: 'Learning a foreign language should be compulsory in schools. Discuss.', category: 'Education' },
  { id: 17, topic: 'The arts receive too little government funding. Do you agree?', category: 'Society' },
  { id: 18, topic: 'Space exploration is a waste of money when there are problems on Earth. Discuss.', category: 'Science' },
  { id: 19, topic: 'Traditional customs are being replaced by modern ones. Is this positive or negative?', category: 'Society' },
  { id: 20, topic: 'The rise of remote work will fundamentally change city planning. Discuss.', category: 'Technology' }
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

// ── 9. Helper Functions ────────────────────────────────────

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

  // ── Core Drills section ──
  var coreDrills = [
    { id: 'ra-' + dayNum, cat: 'Read Aloud', label: 'Read Aloud x' + vol.ra, detail: 'Read each passage in one breath group per clause. Focus on stress on content words and smooth linking.', time: vol.ra * 1.5 },
    { id: 'rs-' + dayNum, cat: 'Repeat Sentence', label: 'Repeat Sentence x' + vol.rs, detail: 'Listen once, repeat immediately. Focus on capturing the beginning and end of each sentence.', time: vol.rs * 1 },
    { id: 'wfd-' + dayNum, cat: 'Write From Dictation', label: 'Write From Dictation x' + vol.wfd, detail: SCAFFOLD_INSTRUCTIONS[scaffold].wfd, time: vol.wfd * 1 }
  ];

  if (weekend && phase !== 'taper') {
    coreDrills.push({
      id: 'di-' + dayNum, cat: 'Describe Image', label: 'Describe Image x3 (weekend bonus)',
      detail: 'Practise describing bar charts, line graphs, or pie charts. Use the template: intro sentence + key features + comparison + summary.',
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
    essayTopic = {
      topic: topicObj.topic,
      category: topicObj.category,
      scaffoldInstructions: SCAFFOLD_INSTRUCTIONS[scaffold].essay
    };
    writingWorkshop.push({
      id: 'essay-' + dayNum, cat: 'Essay', label: 'PTE Essay: ' + topicObj.category,
      detail: SCAFFOLD_INSTRUCTIONS[scaffold].essay,
      time: 20
    });
  }

  if (SWT_DAYS.indexOf(dayNum) !== -1) {
    swtCount = phase === 'simulation' ? 3 : (phase === 'intensive' ? 2 : 1);
    writingWorkshop.push({
      id: 'swt-' + dayNum, cat: 'Summarize Written Text', label: 'SWT x' + swtCount,
      detail: SCAFFOLD_INSTRUCTIONS[scaffold].swt,
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
    { id: 'pte-ra-drill-' + dayNum, cat: 'PTE Speaking', label: 'Pronunciation drill', detail: 'Record yourself reading 3 sentences. Listen back and identify mispronounced words. Repeat until smooth.', time: 10 }
  ];

  if (phase === 'intensive' || phase === 'simulation') {
    pteSpeaking.push({
      id: 'pte-rl-' + dayNum, cat: 'PTE Speaking', label: 'Retell Lecture x2',
      detail: 'Listen to a 60-90 second lecture. Take notes on keywords. Retell in 40 seconds covering main idea, supporting points, and conclusion.',
      time: 10
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
    readingListening.push({
      id: 'rl-extra-' + dayNum, cat: 'Listening', label: 'Summarize Spoken Text x2 (weekend)',
      detail: 'Listen to a 60-90 second audio. Write a 50-70 word summary capturing the main points. Check grammar and spelling.',
      time: 15
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
    grammarFocus: grammarFocus
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
