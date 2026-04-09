// CCL Practice Trainer — Data File
// 19 dialogues across 12 domains, 364+ vocabulary items

const CCL_DOMAINS = {
  'Community': { label: 'Community', color: '#4caf50' },
  'Consumer Affairs': { label: 'Consumer Affairs', color: '#ff9800' },
  'Education': { label: 'Education', color: '#2196f3' },
  'Employment': { label: 'Employment', color: '#9c27b0' },
  'Financial': { label: 'Financial', color: '#f44336' },
  'Social Services': { label: 'Social Services', color: '#00bcd4' },
  'Health': { label: 'Health', color: '#e91e63' },
  'Legal': { label: 'Legal', color: '#795548' },
  'Immigration': { label: 'Immigration', color: '#607d8b' },
  'Housing': { label: 'Housing', color: '#ff5722' },
  'Insurance': { label: 'Insurance', color: '#3f51b5' },
  'Business': { label: 'Business', color: '#009688' }
};

const CCL_DIALOGUES = [
  {
    id: 'community',
    domain: 'Community',
    title: 'Animal Protection - Neighbour\'s Dog',
    scenario: 'This dialogue is a phone conversation between a resident and an English-speaking staff member of the animal protection centre. The resident is calling the animal protection centre to discuss the welfare of their neighbour\'s dog.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Hello. This is the animal protection society. I\'m Harry. How can I help you today?',
        translation: '你好。这里是动物保护协会。我是哈利。今天我能帮您什么？',
        wordCount: 15,
        keyTerms: ['animal protection society', 'help']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '您好，我觉得我的邻居在虐待他们的狗。我不知道该怎么办。',
        translation: 'Hello. I think my neighbours are mistreating their dog. I\'m not sure what to do.',
        wordCount: 15,
        keyTerms: ['虐待', '邻居', '狗']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'It\'s good that you have called us. Could you tell me why you think the dog is being mistreated?',
        translation: '您打电话给我们做得很对。您能告诉我为什么觉得那条狗被虐待了吗？',
        wordCount: 19,
        keyTerms: ['mistreated', 'called']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '它一直在叫。我想可能是狗不听话。但是当我从围墙上看邻居的后院时，我发现狗根本没有水喝。',
        translation: 'It barks all the time. I thought it was behaving badly. But I looked over the fence into the back yard, and I saw it didn\'t have any water to drink.',
        wordCount: 31,
        keyTerms: ['叫', '围墙', '后院', '水喝']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'I see. That\'s not good. Dogs need to have drinking water available all the time. Have you noticed anything else wrong?',
        translation: '我明白了。这不太好。狗需要随时有饮用水。您还注意到其他什么问题吗？',
        wordCount: 21,
        keyTerms: ['drinking water', 'noticed', 'wrong']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '是的。那条狗很大，但是很瘦。我还能看到它身上的肋骨。狗毛暗淡无光，并缠在一起。我觉得狗很不健康。',
        translation: 'Yes. The dog is quite big, but it\'s very thin. I can see its ribs. Its coat is dull and matted. I don\'t think it looks healthy.',
        wordCount: 27,
        keyTerms: ['肋骨', '狗毛', '暗淡无光', '不健康']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'You shouldn\'t be able to see its ribs. It doesn\'t sound like it is in good condition. You might be right.',
        translation: '正常情况下不应该看到它的肋骨。听起来它的状况不太好。您可能是对的。',
        wordCount: 21,
        keyTerms: ['ribs', 'good condition']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我的邻居从来不去遛狗。我本想去敲他们的门，跟他们说一下，可又担心他们可能会不高兴。',
        translation: 'My neighbours never take it for a walk either. I was going to knock on their door, but I thought they might get angry at me.',
        wordCount: 26,
        keyTerms: ['遛狗', '敲门', '不高兴']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'It\'s best not to approach your neighbours. I will write up a report on what you have told me, and our protection officers will visit them.',
        translation: '您最好不要去找您的邻居。我会根据您告诉我的情况写一份报告，我们的保护工作人员会去拜访他们。',
        wordCount: 26,
        keyTerms: ['approach', 'report', 'protection officers']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '我不想让他们有什么麻烦，但是我确实担心那条狗。',
        translation: 'I don\'t want them to get into trouble, but I am worried about the dog.',
        wordCount: 15,
        keyTerms: ['麻烦', '担心']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Don\'t worry. If they are not mistreating the dog, they won\'t get into trouble. We will help them if they need more information on how to take care of the dog.',
        translation: '不用担心。如果他们没有虐待那条狗，就不会有麻烦。如果他们需要更多关于如何照顾狗的信息，我们会帮助他们。',
        wordCount: 31,
        keyTerms: ['mistreating', 'take care of']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '这听起来很好。我希望动物保护工作人员能够尽快来看看。我很高兴跟您打了电话，万一那狗真的需要帮助。',
        translation: 'That sounds good. I hope the protection officers will visit them soon. I\'m glad I called you, in case the dog does need help.',
        wordCount: 24,
        keyTerms: ['保护工作人员', '尽快']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'I\'m sure they will come in the next few days. If you notice the situation getting worse in the meantime, call us back.',
        translation: '我相信他们几天内就会去的。如果在此期间您发现情况恶化，请再打电话给我们。',
        wordCount: 23,
        keyTerms: ['situation', 'getting worse', 'call us back']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '我会的。谢谢您接听我的电话。',
        translation: 'I will. Thank you for listening to me.',
        wordCount: 8,
        keyTerms: ['接听', '电话']
      }
    ],
    totalWords: 302
  },
  {
    id: 'consumer-affairs',
    domain: 'Consumer Affairs',
    title: 'Tree Trimming Company Complaint',
    scenario: 'In this dialogue, a customer has paid a tree trimming company to remove six trees from their back yard. Simon, the English-speaking owner of the company, cut down four of the trees. He has not returned to complete the work. The customer calls Simon on the telephone to ask him to remove the last two trees.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. This is Simon from the tree trimming company. How can I help you?',
        translation: '早上好。我是修剪树木公司的西蒙。有什么可以帮您的？',
        wordCount: 15,
        keyTerms: ['tree trimming company']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '西蒙，您好。三周前，您在我房子的后院砍了四棵大树。',
        translation: 'Hello Simon. Three weeks ago, you cut down four large trees in the back yard of my house.',
        wordCount: 18,
        keyTerms: ['后院', '砍', '大树']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Yes, I remember cutting down those trees. That was a hard job because the trees were so close to the fence.',
        translation: '是的，我记得砍了那些树。那是一项很难的工作，因为那些树离围墙太近了。',
        wordCount: 21,
        keyTerms: ['cutting down', 'fence']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我付给您的钱是砍六棵树的。这个工作没完成，我不满意。',
        translation: 'I paid you to cut down six trees. I\'m unhappy the job isn\'t finished.',
        wordCount: 14,
        keyTerms: ['付钱', '不满意', '没完成']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'The job took much longer than I expected. I could only remove four trees.',
        translation: '这项工作花的时间比我预想的要长得多。我只能移除四棵树。',
        wordCount: 14,
        keyTerms: ['remove', 'longer than expected']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '您答应会告诉我您什么时候回来完成这项工作。我一直在等您的电话。',
        translation: 'You agreed to let me know when you could return to finish the work. I\'ve been waiting for your telephone call.',
        wordCount: 21,
        keyTerms: ['完成', '工作', '等您的电话']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'I\'m sorry that I didn\'t call you. We\'ve been very busy. Let me look at my diary. I can come to your house in four weeks.',
        translation: '抱歉我没有给您打电话。我们一直很忙。让我看看我的日程安排。我可以四周后去您家。',
        wordCount: 26,
        keyTerms: ['diary', 'four weeks']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我不想等那么久。我希望这项工作能在冬天到来之前完成。',
        translation: 'I would prefer not to wait that long. I had hoped this work would be completed before the start of winter.',
        wordCount: 21,
        keyTerms: ['不想等', '冬天', '完成']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Yes, I know. But the trees will be hard to remove because they are near the fence. It will take longer to do the work.',
        translation: '是的，我知道。但这些树很难移除，因为它们靠近围墙。完成这项工作需要更长时间。',
        wordCount: 25,
        keyTerms: ['fence', 'longer to do']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '我知道。但是最近有暴风雨。我担心如果风更大的话，树枝会掉到我的房子上。',
        translation: 'I understand. But we\'ve had some storms recently. I\'m worried that the branches will fall on my house if we have more strong wind.',
        wordCount: 24,
        keyTerms: ['暴风雨', '树枝', '房子']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Storms are forecasted next week. If the trees are unsafe, I will remove them before then.',
        translation: '下周预报有暴风雨。如果那些树不安全，我会在那之前把它们移除。',
        wordCount: 16,
        keyTerms: ['storms', 'forecasted', 'unsafe']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '我想确保我的房子安全，不受损害。您这个星期什么时候过来都行，周末也可以。',
        translation: 'I want to make sure my house is safe from damage. You can come any time this week or on the weekend.',
        wordCount: 22,
        keyTerms: ['安全', '损害', '周末']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'I\'ll come on Saturday from 2 p.m. to 5 p.m. If I don\'t finish the work, I\'ll need to return early next week.',
        translation: '我星期六下午2点到5点过来。如果工作没完成，我需要下周初再来。',
        wordCount: 25,
        keyTerms: ['Saturday', 'finish the work', 'return']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '会不会从我邻居的后院能更容易够得到树呢？我可以问问看是否您可以到她的院子。',
        translation: 'Would it be easier to reach the trees from my neighbour\'s back yard? I could ask if you could go into her yard.',
        wordCount: 23,
        keyTerms: ['邻居', '后院', '够得到']
      },
      {
        number: 15,
        speaker: 'ENGLISH',
        text: 'That\'s a good idea! I apologise for the delay. I\'ll see you on Saturday at 2 p.m.',
        translation: '这是个好主意！我为延迟道歉。星期六下午2点见。',
        wordCount: 18,
        keyTerms: ['apologise', 'delay', 'Saturday']
      }
    ],
    totalWords: 303
  },
  {
    id: 'education-1',
    domain: 'Education',
    title: 'School Enrolment for Daughter',
    scenario: 'This dialogue is an interview between a mother and a school Principal, Ms Karen Black. The mother is seeking information on how to process her daughter\'s enrolment at the school.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good afternoon. I am Karen Black, the Principal. Thank you for your interest in enrolling your daughter at our school.',
        translation: '下午好。我是校长凯伦·布莱克。感谢您有兴趣让您的女儿在我们学校注册。',
        wordCount: 20,
        keyTerms: ['Principal', 'enrolling', 'school']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '下午好，布莱克女士！非常感谢你安排这次面试！我们刚到澳洲几个月，我希望我女儿可以尽快开始上学。',
        translation: 'Good afternoon, Ms Black. Thank you very much for this interview. We arrived in Australia a few months ago and I would like my daughter to start school as soon as possible.',
        wordCount: 32,
        keyTerms: ['面试', '澳洲', '上学']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'We can help you with the enrolment. Firstly, does your child have any health or medical conditions, such as allergies, that we need to be aware of?',
        translation: '我们可以帮助您办理注册。首先，您的孩子有没有任何健康或医疗状况，比如过敏，是我们需要了解的？',
        wordCount: 27,
        keyTerms: ['enrolment', 'health', 'allergies']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '没有，我女儿很健康，她已经接种了按她的年龄该接种的所有疫苗。她很聪明，已经懂一些英文了。',
        translation: 'No. My daughter is healthy and has received all the vaccines for her age. She is very intelligent and already understands some English.',
        wordCount: 23,
        keyTerms: ['疫苗', '接种', '英文']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'That is great! She will need to do a proficiency test in English to assess whether she may need language support.',
        translation: '太好了！她需要做一个英语能力测试，以评估她是否需要语言支持。',
        wordCount: 21,
        keyTerms: ['proficiency test', 'language support']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '她的写作仍然不太好。测试是什么样的？如果她的英文不好，她是不是不会被学校录取？她还很小。',
        translation: 'She still can\'t write well. What will the test be like? Would she not be accepted if she doesn\'t perform well in English? She is still very young.',
        wordCount: 28,
        keyTerms: ['写作', '测试', '录取']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Don\'t worry. The test is suitable for her age. It will assess her understanding of English and basic literacy skills according to the year she will be enrolled in.',
        translation: '别担心。这个测试适合她的年龄。它会根据她将要就读的年级来评估她的英语理解能力和基本读写技能。',
        wordCount: 29,
        keyTerms: ['literacy skills', 'enrolled']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我还想知道她注册需要哪些文件。我不想让她再缺课了。我担心她会跟不上。',
        translation: 'I would also like to know what documents are necessary for her enrolment. I don\'t want her to miss any more classes. I\'m worried that she will lag behind her classmates.',
        wordCount: 31,
        keyTerms: ['注册', '文件', '缺课', '跟不上']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'We need proof of residential address, such as a utility bill, as well as the child\'s birth certificate and immunisation records. We will also need parents\' details, visa status and passport copies.',
        translation: '我们需要居住地址证明，比如水电费账单，以及孩子的出生证明和免疫接种记录。我们还需要家长的详细信息、签证状态和护照复印件。',
        wordCount: 32,
        keyTerms: ['residential address', 'birth certificate', 'immunisation records', 'visa status']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '好。我会把这些文件准备好，这周晚些时候拿过来。我很高兴她能在这学期开始上课。',
        translation: 'Ok. I am going to organise those documents and I will bring them later this week. I\'m very happy that she can start classes this semester.',
        wordCount: 26,
        keyTerms: ['文件', '准备好', '学期']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Is there anything else that you would like to know? Please feel free to contact us if you think of anything else later.',
        translation: '还有其他您想了解的吗？如果您之后想到其他问题，请随时联系我们。',
        wordCount: 23,
        keyTerms: ['contact us', 'anything else']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '没有了，就这些。非常感谢您，布莱克女士！',
        translation: 'No, that\'s all for now. Thank you very much, Ms Black.',
        wordCount: 11,
        keyTerms: ['感谢', '布莱克女士']
      }
    ],
    totalWords: 303
  },
  {
    id: 'education-2',
    domain: 'Education',
    title: 'College Computer Course Enrolment',
    scenario: 'This dialogue is a conversation between Tony an English-speaking employee of a local college and a student who has been accepted on a Computer course. The student is speaking with Tony regards the start date of the course and how to pay the fees.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Welcome to the college. I\'m Tony. How can I help you this morning?',
        translation: '欢迎来到学院。我是托尼。今天上午有什么可以帮您的？',
        wordCount: 13,
        keyTerms: ['college']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '您好，托尼。我刚被贵校的电脑课程录取。我有一些问题想问一下。',
        translation: 'Hello Tony. I have just been accepted into a computer course here at the college. I have some questions about it.',
        wordCount: 21,
        keyTerms: ['电脑课程', '录取', '问题']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Well done on being accepted! I\'m sure you will enjoy completing the course. What would you like to know?',
        translation: '恭喜您被录取！我相信您会喜欢完成这门课程的。您想了解什么？',
        wordCount: 19,
        keyTerms: ['accepted', 'completing the course']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我收到一个电子邮件，里边有一个注册表格的链接。但是在表格上有两个不同的开学日期。我不知道哪一个日期是正确的。',
        translation: 'I received an email with a link to the enrollment form. But there are two different start dates on the form. I don\'t know which date is correct.',
        wordCount: 28,
        keyTerms: ['注册表格', '开学日期']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'If you tell me the name of the course, I can check the start date for you. You don\'t want to miss the first day!',
        translation: '如果您告诉我课程名称，我可以帮您查一下开学日期。您可不想错过第一天！',
        wordCount: 25,
        keyTerms: ['start date', 'first day']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '我非常盼望参加这个课程的学习。要是错过了开学日，那真是太糟糕了。这是一个初级电脑和信息技术支持课程。',
        translation: 'It would be awful to miss the first day, especially as I\'m looking forward to it so much. It\'s the basic computer and IT support course.',
        wordCount: 26,
        keyTerms: ['盼望', '开学日', '信息技术']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'There are two classes in that course, a full time class and a part time class. That\'s why there are different start dates.',
        translation: '这门课有两个班，一个全日制班和一个非全日制班。所以才会有不同的开学日期。',
        wordCount: 23,
        keyTerms: ['full time class', 'part time class', 'start dates']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '哦，我现在明白了！我是被全日制课程录取了。谢谢。',
        translation: 'Oh I understand now! I have been accepted into the full time class. Thank you.',
        wordCount: 15,
        keyTerms: ['全日制', '课程']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'You\'re very welcome. It\'s confusing when there are two classes on the form. Tell me what else you need to know.',
        translation: '不客气。表格上有两个班确实容易混淆。告诉我您还需要了解什么。',
        wordCount: 21,
        keyTerms: ['confusing', 'two classes']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '我还想了解一些学费的问题。我可以分期付款吗？',
        translation: 'I also wanted to ask about fees. Can I pay the course fees in installments?',
        wordCount: 15,
        keyTerms: ['学费', '分期付款']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Yes, you can. Once you have filled in the enrollment form, you can speak to our finance office to set up a payment plan.',
        translation: '可以的。填好注册表格后，您可以联系我们的财务办公室来设置付款计划。',
        wordCount: 24,
        keyTerms: ['enrollment form', 'finance office', 'payment plan']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '这太好了。分期付款比一次性付清要容易多了，因为我是在学习期间做兼职工作。',
        translation: 'That\'s great. It will be much easier to pay for the course in installments rather than all at once. I\'m only working part time while I study.',
        wordCount: 27,
        keyTerms: ['分期付款', '兼职工作']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'When your enrollment is processed, you will have a student account. You can pay fees through the account and your course information will be listed there too.',
        translation: '注册处理完成后，您会有一个学生账户。您可以通过该账户缴纳学费，您的课程信息也会列在上面。',
        wordCount: 27,
        keyTerms: ['student account', 'course information']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '这听起来很容易。我现在就填写注册表。谢谢您的帮助，托尼。我真希望早点上课！',
        translation: 'That sounds very easy. I will fill in the enrollment form now. Thank you for your help Tony. I can\'t wait to start my course!',
        wordCount: 25,
        keyTerms: ['注册表', '帮助']
      }
    ],
    totalWords: 309
  },
  {
    id: 'employment-1',
    domain: 'Employment',
    title: 'Job Search at JobActive',
    scenario: 'This dialogue is an interview between Jack, a job search case manager, and a job seeker. The interview takes place in Jack\'s office at JobActive.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Hello, I\'m Jack. Thank you for coming in.',
        translation: '你好，我是杰克。感谢您的到来。',
        wordCount: 8,
        keyTerms: ['Jack', 'coming in']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '早上好，杰克！很高兴见到您！上次跟我见面的是穆琳，她是不是今天不在呢？',
        translation: 'Good morning Jack. Nice to meet you. Last time I spoke with Maureen. Isn\'t she in today?',
        wordCount: 17,
        keyTerms: ['杰克', '穆琳']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'She\'s on holidays, but I have already looked at your file and just need to discuss a few things with you.',
        translation: '她在休假，但我已经看过您的档案了，只需要跟您讨论几件事。',
        wordCount: 21,
        keyTerms: ['holidays', 'file', 'discuss']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '好的，您想讨论些什么？我对没工作这件事越来越担心！每周上两次英语课让我没机会好好找工作。',
        translation: 'OK. What needs to be discussed? I\'m getting more worried about not having a job. English classes twice a week doesn\'t give me a chance to properly look for work.',
        wordCount: 30,
        keyTerms: ['没工作', '担心', '英语课', '找工作']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'I understand. However, you need to look for 10 jobs a month to continue receiving Centrelink payments. Our network connects job seekers with employers, and we\'ll try to help you.',
        translation: '我理解。但是，您每月需要找10份工作才能继续领取Centrelink的补贴。我们的网络将求职者与雇主联系起来，我们会尽力帮助您。',
        wordCount: 30,
        keyTerms: ['Centrelink payments', 'job seekers', 'employers']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '我已经在网上开始找工作了，但要做回我的本行，我需要提高英语口语。',
        translation: 'I\'ve already started looking for jobs online. But to continue in my profession, I need to speak better English.',
        wordCount: 19,
        keyTerms: ['网上', '找工作', '英语口语']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'What work did you do before coming to Australia?',
        translation: '您来澳洲之前做什么工作？',
        wordCount: 9,
        keyTerms: ['work', 'Australia']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我以前是计算机技术人员，负责系统管理和编程。',
        translation: 'I worked as a computer technician and was responsible for systems administration and programming.',
        wordCount: 14,
        keyTerms: ['计算机技术人员', '系统管理', '编程']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'You should try other areas until you\'re stronger in English. Your previous experience may be useful. Some companies offer training in areas where you may not need 100% English fluency.',
        translation: '在英语提高之前，您应该尝试其他领域。您以前的经验可能会有用。一些公司提供培训，在某些岗位上您可能不需要百分之百流利的英语。',
        wordCount: 32,
        keyTerms: ['English fluency', 'training', 'previous experience']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '如果您可以安排让我去 IT 公司面试就太好了！这样我就有机会继续留在计算机这一行业。',
        translation: 'It would be fantastic if you could arrange interviews for me with IT organisations. I\'d have the opportunity to continue in the field of computing.',
        wordCount: 25,
        keyTerms: ['IT 公司', '面试', '计算机']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'We\'ll see. You must prepare a résumé. We can help you write one.',
        translation: '我们看看吧。您必须准备一份简历。我们可以帮您写。',
        wordCount: 13,
        keyTerms: ['resume', 'write one']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '谢谢。您能帮助我使用寻工服务和网上招工列表吗？',
        translation: 'Thank you. Can you also help me use the Job Services and the online job listing?',
        wordCount: 16,
        keyTerms: ['寻工服务', '招工列表']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'Definitely. You can also use the job search tools in the Centrelink computers. We\'ll schedule another interview for next week and finalise the finer points.',
        translation: '当然可以。您还可以使用Centrelink电脑上的求职工具。我们会安排下周再面谈一次，确定细节。',
        wordCount: 25,
        keyTerms: ['Centrelink computers', 'job search tools', 'schedule']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '我感到更有希望、更乐观了！我要去买一件初次面试时穿的新衬衫。我要赶快走了，上课要迟到了。再见！',
        translation: 'I\'m more hopeful and more optimistic! I\'ll even buy a new shirt for the first interview. I need to run now not to be late for my class. Bye!',
        wordCount: 29,
        keyTerms: ['乐观', '面试', '衬衫']
      },
      {
        number: 15,
        speaker: 'ENGLISH',
        text: 'We\'ll select available jobs and next time we may have good news and you\'ll be able to wear your new shirt. Bye!',
        translation: '我们会挑选合适的工作，下次也许会有好消息，您就能穿上新衬衫了。再见！',
        wordCount: 22,
        keyTerms: ['available jobs', 'good news', 'new shirt']
      }
    ],
    totalWords: 310
  },
  {
    id: 'employment-2',
    domain: 'Employment',
    title: 'Part-time Campus Job Inquiry',
    scenario: 'This dialogue is a conversation between a university student and Mark, an English-speaking Student advisor at the student centre about jobs. The student would like to get a part time job on campus to help pay for expenses.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Hi, welcome to the university student centre. My name is Mark. How can I help you today?',
        translation: '你好，欢迎来到大学学生中心。我叫马克。今天有什么可以帮您的？',
        wordCount: 17,
        keyTerms: ['student centre', 'Mark']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好，马克。我想询问一下关于学生找工作的事情。我的朋友说在校园内可能有工作。',
        translation: 'Hi Mark. I\'m enquiring about jobs for students. A friend mentioned that there may be work available on campus.',
        wordCount: 19,
        keyTerms: ['找工作', '校园', '工作']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'The university has an employment website which lists all job vacancies on campus. There are full time and part time jobs available.',
        translation: '大学有一个就业网站，列出了校园内所有的职位空缺。有全职和兼职工作可供选择。',
        wordCount: 22,
        keyTerms: ['employment website', 'job vacancies', 'campus']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我在找兼职的工作。我觉得我无法应付全职工作，我的课程非常繁重。',
        translation: 'I am looking for a part time job. I don\'t think I would be able to manage a full time job. My course is very demanding.',
        wordCount: 26,
        keyTerms: ['兼职', '全职', '课程繁重']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'I understand. I know it\'s very hard for students to work full time and study. That\'s why part time jobs on campus are so popular.',
        translation: '我理解。我知道学生同时做全职工作和学习非常辛苦。所以校园内的兼职工作才这么受欢迎。',
        wordCount: 25,
        keyTerms: ['part time jobs', 'campus', 'popular']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '兼职工作多吗？我想尽快找到工作来帮补生活开支。我在多个领域有工作经验。',
        translation: 'Are there many part time jobs available? I would like to find work as soon as possible to help with my living expenses. I have experience in several areas.',
        wordCount: 29,
        keyTerms: ['兼职工作', '生活开支', '工作经验']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'The university is currently taking applications for waiters and kitchen staff to work in the function centre. Have you had any experience working at cafes or restaurants?',
        translation: '大学目前正在招聘活动中心的服务员和厨房工作人员。您有在咖啡厅或餐厅工作的经验吗？',
        wordCount: 27,
        keyTerms: ['waiters', 'kitchen staff', 'function centre']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我在一家咖啡厅当过服务员。我也做过厨房帮工。你能提供更详细的信息吗？或者我应该浏览一下大学的网站？',
        translation: 'I have had some experience as a waiter in a cafe. I have also worked as a kitchenhand. Do you have more information, or should I look on the university website?',
        wordCount: 31,
        keyTerms: ['服务员', '厨房帮工', '咖啡厅']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'I can give you some information, but you will need to look at the website for all the details. You also apply for jobs on the website.',
        translation: '我可以给您一些信息，但您需要在网站上查看所有详情。您也可以在网站上申请工作。',
        wordCount: 27,
        keyTerms: ['website', 'apply for jobs']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '那太好了。今天晚些时候我会浏览一下网站，顺便申请适合我的工作。',
        translation: 'That\'s great. I will look at the website later today and put in an application for any jobs that are suitable.',
        wordCount: 21,
        keyTerms: ['浏览', '网站', '申请']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Good luck. If you miss out on getting a job at the function centre this time, keep checking the website. New jobs are listed regularly.',
        translation: '祝你好运。如果这次没能在活动中心找到工作，请继续关注网站。新的职位会定期发布。',
        wordCount: 25,
        keyTerms: ['function centre', 'keep checking', 'listed regularly']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '我会这么做的。希望不久我就能找到新工作。感谢你的帮助！',
        translation: 'I will do that. I\'m hoping it won\'t be long before I have a new job. Thank you for helping me!',
        wordCount: 21,
        keyTerms: ['新工作', '帮助']
      }
    ],
    totalWords: 290
  },
  {
    id: 'financial',
    domain: 'Financial',
    title: 'Home Loan Application at Bank',
    scenario: 'This dialogue takes place between Mr Wilson, a loan manager at a Sydney Bank and a client who has made an appointment to see him. The client wants to purchase a property and is enquiring about how to apply for a loan.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Hello, my name is Justin Wilson. I understand you are booked in with me today to discuss a loan, is that right?',
        translation: '你好，我叫贾斯汀·威尔逊。我了解您今天预约了跟我讨论贷款的事，对吗？',
        wordCount: 22,
        keyTerms: ['loan', 'booked in']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '没错!我终于找到了一间价格合理的公寓，我想买下来，所以我有几个问题。',
        translation: 'Yes, that\'s right. I finally found an apartment for a decent price and I\'m thinking of buying it, so I have a few questions.',
        wordCount: 24,
        keyTerms: ['公寓', '价格合理', '买']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'You\'ve come to the right place. How can I help?',
        translation: '您来对地方了。我能怎么帮您？',
        wordCount: 10,
        keyTerms: ['right place']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我想知道如何获得贷款，利率是多少，需要多少首付。',
        translation: 'I would like to know how to obtain financing, what is the interest rate and how much deposit is needed.',
        wordCount: 20,
        keyTerms: ['贷款', '利率', '首付']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'I can certainly assist you with all that. How about we start by talking about the property you are interested in?',
        translation: '这些我都可以帮您。我们先从您感兴趣的房产说起怎么样？',
        wordCount: 21,
        keyTerms: ['assist', 'property']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '好啊。',
        translation: 'Yes, perfect.',
        wordCount: 2,
        keyTerms: ['好啊']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'What caught your eye in this property? And how much is it valued at?',
        translation: '这套房产有什么吸引您的地方？它的估价是多少？',
        wordCount: 14,
        keyTerms: ['property', 'valued at']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '是一套非常小的两卧室公寓。地板是最近翻新的，位置很不错，靠近我需要的一切。',
        translation: 'It is a very small two-bedroom apartment. The floor has been recently renovated and the location is great, near everything I need.',
        wordCount: 23,
        keyTerms: ['两卧室', '公寓', '翻新', '位置']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Fantastic. Do you have the financial details for the property, such as the price and rates?',
        translation: '太好了。您有这套房产的财务详情吗，比如价格和费率？',
        wordCount: 16,
        keyTerms: ['financial details', 'price', 'rates']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '房地产中介的女士说，业主会考虑接受 60 万以上的出价。这有点超出我的预算，但这套公寓很难得。',
        translation: 'The lady from the real estate agency said the owner is accepting offers above $600,000. It is a little over what I had planned, but it is a great find.',
        wordCount: 33,
        keyTerms: ['房地产中介', '出价', '预算']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Certainly. We need to work out if you have enough savings for the deposit and whether you can borrow the rest.',
        translation: '当然。我们需要计算一下您是否有足够的存款来支付首付，以及您是否能借到剩余的部分。',
        wordCount: 21,
        keyTerms: ['savings', 'deposit', 'borrow']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '这套房子需要多少首付？',
        translation: 'And how much would the deposit for this property be?',
        wordCount: 10,
        keyTerms: ['首付']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'You need at least 10% of the total value, plus enough to cover other rates and expenses.',
        translation: '您至少需要总价值的10%，再加上足够支付其他费用和杂费的资金。',
        wordCount: 18,
        keyTerms: ['10%', 'total value', 'rates and expenses']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '好的，跟我想的差不多。我有 7 万块存款可以用来付首付和杂费。那银行会借给我剩下的部分吗？',
        translation: 'Ok, that is what I figured. I already have $70,000 saved to cover the deposit and fees. Will the bank lend me the rest?',
        wordCount: 26,
        keyTerms: ['存款', '首付', '杂费']
      },
      {
        number: 15,
        speaker: 'ENGLISH',
        text: 'Let\'s use our loan calculator to work out how much you can borrow. I need to ask you some personal questions in order to assess your income.',
        translation: '让我们用贷款计算器来算一下您能借多少。我需要问您一些个人问题来评估您的收入。',
        wordCount: 27,
        keyTerms: ['loan calculator', 'borrow', 'income']
      },
      {
        number: 16,
        speaker: 'MANDARIN',
        text: '当然可以！我今天把所有文件都带来了，这样我们马上就可以开始。',
        translation: 'Of course. I gathered all my documents and brought them with me today so that we can get started straight away.',
        wordCount: 21,
        keyTerms: ['文件', '开始']
      }
    ],
    totalWords: 308
  },
  {
    id: 'social-services',
    domain: 'Social Services',
    title: 'Centrelink Youth Allowance',
    scenario: 'This dialogue takes place over the phone between a mother and a Centrelink Social Worker, Melinda. Melinda wants to discuss the son\'s application for Youth Allowance. The son has told Melinda that he cannot live with his Mum and is applying for the Living Away from Home Allowance because of conflict in the home.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Hello, my name is Melinda, I\'m a social worker at Centrelink. Do you have a minute to talk about your son?',
        translation: '你好，我叫梅琳达，是Centrelink的社会工作者。您有时间聊聊您儿子的事吗？',
        wordCount: 21,
        keyTerms: ['social worker', 'Centrelink', 'son']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '我正准备去超市，但可以等下再去。我儿子怎么了？',
        translation: 'I was just about to go to the supermarket but it can wait. Has something happened to my son?',
        wordCount: 19,
        keyTerms: ['超市', '儿子']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Everything is fine. Your son has applied for Youth Allowance and I need to speak to you about his circumstances. He said that you had an argument and you told him to leave the house.',
        translation: '一切都好。您儿子申请了青年津贴，我需要跟您谈谈他的情况。他说你们吵了一架，您让他离开家。',
        wordCount: 35,
        keyTerms: ['Youth Allowance', 'argument', 'leave the house']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '是的，我们吵了一架。我告诉他，住在我家里时，必须规矩点，不要再跟他的一些朋友见面。我听说他们跟毒品有关。',
        translation: 'Yes, we had an argument and I told him that while he is living under my roof he has to behave and stop seeing some of his friends. I heard they are involved with drugs.',
        wordCount: 35,
        keyTerms: ['吵架', '规矩', '朋友', '毒品']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Well, your son told me a slightly different story. He said that he wasn\'t allowed to return home, so I was considering granting him Youth Allowance at the Living Away from Home rate.',
        translation: '嗯，您儿子跟我说的有些不同。他说他不被允许回家，所以我在考虑按离家生活的标准给他发放青年津贴。',
        wordCount: 33,
        keyTerms: ['Living Away from Home', 'Youth Allowance']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '只有他不规矩时才不让他回家！我是单身，还有另外两个孩子要照顾。生活虽然很艰难，但我的门总是对他敞开着。我只是希望他安全。',
        translation: 'Only if he doesn\'t behave! I\'m on my own with another 2 children to look after. Life\'s tough right now but my door is always open for him. I just want him to be safe.',
        wordCount: 35,
        keyTerms: ['不规矩', '单身', '孩子', '照顾']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'It sounds like it\'s been hard for you bringing up 3 children on your own. Would you like to come into the office to discuss a few options on how we could help you?',
        translation: '听起来您一个人抚养3个孩子很不容易。您愿意来办公室讨论一下我们怎么帮助您吗？',
        wordCount: 34,
        keyTerms: ['bringing up', 'children', 'options']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我没时间去你们办公室。我每天工作几个小时，还要去学校接孩子。',
        translation: 'I don\'t have time to go to the office. I work a few hours every day and then I have to pick up my children from school.',
        wordCount: 27,
        keyTerms: ['办公室', '工作', '接孩子']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'How about over the phone? I can refer you to some services, like mediation, parent support groups and community organisations.',
        translation: '电话沟通怎么样？我可以为您转介一些服务，比如调解、家长支持小组和社区组织。',
        wordCount: 20,
        keyTerms: ['mediation', 'parent support groups', 'community organisations']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '好的，我们可以预约后天，在我去学校接完孩子以后。',
        translation: 'OK, we can make an appointment for the day after tomorrow after I pick up the kids from school.',
        wordCount: 19,
        keyTerms: ['预约', '后天', '接孩子']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'How does 3.30 sound?',
        translation: '3点30分怎么样？',
        wordCount: 5,
        keyTerms: ['3.30']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '3:30可以。这样我有时间为孩子们准备点心，他们到家时总是觉得饿。',
        translation: '3:30 is OK. That gives me time to make a snack for the kids; they are always starving when they get home!',
        wordCount: 23,
        keyTerms: ['3:30', '点心', '饿']
      }
    ],
    totalWords: 306
  },
  {
    id: 'health-1',
    domain: 'Health',
    title: 'GP Visit - Food Poisoning',
    scenario: 'This dialogue is a consultation between a patient and their GP, Dr Smith. The patient has come to the clinic complaining of stomach pain, vomiting, and diarrhoea after eating takeaway food the previous night.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. I\'m Dr Smith. Please take a seat. What brings you in today?',
        translation: '早上好。我是史密斯医生。请坐。您今天来看什么问题？',
        wordCount: 14,
        keyTerms: ['Dr Smith', 'take a seat']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '医生您好。我昨天晚上吃了外卖之后就一直肚子痛，还呕吐了好几次，拉肚子也很严重。',
        translation: 'Hello doctor. I\'ve had stomach pain since eating takeaway last night. I\'ve vomited several times and the diarrhoea has been quite severe.',
        wordCount: 22,
        keyTerms: ['外卖', '肚子痛', '呕吐', '拉肚子']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I\'m sorry to hear that. Can you tell me what you ate and roughly what time you had the meal?',
        translation: '很遗憾听到这个情况。您能告诉我您吃了什么，大概什么时间吃的吗？',
        wordCount: 20,
        keyTerms: ['ate', 'time', 'meal']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '大概晚上七点左右，我点了一份炒饭和一份糖醋鸡。吃完大概两个小时就开始不舒服了。',
        translation: 'Around seven in the evening, I ordered fried rice and sweet and sour chicken. About two hours after eating, I started feeling unwell.',
        wordCount: 23,
        keyTerms: ['炒饭', '糖醋鸡', '不舒服']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'That does sound like it could be food poisoning. Have you been able to keep any fluids down since then?',
        translation: '听起来确实像食物中毒。从那以后您能喝进去水吗？',
        wordCount: 20,
        keyTerms: ['food poisoning', 'fluids']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '我试着喝了一些水，但是大部分都吐出来了。今天早上稍微好了一点，能喝几口水了。',
        translation: 'I tried drinking some water but most of it came back up. This morning it\'s slightly better and I can manage a few sips.',
        wordCount: 24,
        keyTerms: ['喝水', '吐出来', '好一点']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'It\'s important to stay hydrated. Do you have any allergies to medications that I should know about before I prescribe anything?',
        translation: '保持水分摄入很重要。在我开药之前，您有对任何药物过敏的情况需要我了解的吗？',
        wordCount: 21,
        keyTerms: ['hydrated', 'allergies', 'medications']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我对青霉素过敏，其他的药物应该没有问题。我以前也没有什么大的健康问题。',
        translation: 'I\'m allergic to penicillin, but I should be fine with other medications. I haven\'t had any major health issues before.',
        wordCount: 20,
        keyTerms: ['青霉素', '过敏', '健康问题']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Thank you for letting me know. I\'ll note that down. Have you noticed any blood in your vomit or stools? And do you have a fever?',
        translation: '谢谢您告诉我。我记下来了。您有没有注意到呕吐物或大便中有血？您有发烧吗？',
        wordCount: 26,
        keyTerms: ['blood', 'vomit', 'stools', 'fever']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '没有看到血，但是我昨晚量了一下体温，有三十八度二。今天早上好像退了一些。',
        translation: 'I haven\'t noticed any blood, but I checked my temperature last night and it was 38.2 degrees. It seems to have come down a bit this morning.',
        wordCount: 27,
        keyTerms: ['血', '体温', '三十八度']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'A mild fever is common with food poisoning. I\'ll prescribe an anti-nausea medication and oral rehydration sachets. Stick to bland foods like toast and crackers for a couple of days.',
        translation: '轻微发烧在食物中毒中很常见。我给您开一些止吐药和口服补液盐。这几天请吃清淡的食物，比如吐司和饼干。',
        wordCount: 30,
        keyTerms: ['anti-nausea medication', 'rehydration sachets', 'bland foods']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '好的，谢谢医生。我需要请假在家休息吗？大概多久才能好？',
        translation: 'Thank you, doctor. Should I take time off work to rest at home? How long will it take to recover?',
        wordCount: 20,
        keyTerms: ['请假', '休息', '多久']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'I\'d recommend at least two days off work. Most food poisoning clears up within three to five days. If symptoms worsen or you develop a high fever, come back or visit emergency.',
        translation: '我建议您至少请两天假。大多数食物中毒在三到五天内就会好。如果症状加重或出现高烧，请回来或去急诊。',
        wordCount: 32,
        keyTerms: ['two days off', 'food poisoning', 'emergency']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '明白了。如果需要的话，您能帮我开一个病假条吗？我需要交给公司。',
        translation: 'I understand. Could you write me a medical certificate if needed? I need to give one to my employer.',
        wordCount: 19,
        keyTerms: ['病假条', '公司']
      }
    ],
    totalWords: 318
  },
  {
    id: 'health-2',
    domain: 'Health',
    title: 'Hospital - Child Vaccination',
    scenario: 'This dialogue takes place at a community health centre where a parent has brought their child for routine vaccinations. The nurse explains the vaccines being administered, possible side effects, and the consent process.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. I\'m Nurse Jennifer. I understand you\'ve brought your child in for their scheduled vaccinations today. Can you confirm the child\'s name and date of birth?',
        translation: '早上好。我是护士珍妮弗。我了解您今天带孩子来打预定的疫苗。能确认一下孩子的姓名和出生日期吗？',
        wordCount: 27,
        keyTerms: ['Nurse', 'vaccinations', 'date of birth']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '早上好。我女儿叫李美琳，出生日期是二零二二年三月十五号。她今天要打四岁的常规疫苗。',
        translation: 'Good morning. My daughter\'s name is Li Meilin, born on the fifteenth of March 2022. She\'s here for her four-year-old routine vaccinations.',
        wordCount: 22,
        keyTerms: ['女儿', '出生日期', '常规疫苗']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Thank you. Today she\'ll be receiving two vaccines. The first is a combined vaccine for diphtheria, tetanus, whooping cough, and polio. The second is for measles, mumps, and rubella.',
        translation: '谢谢。今天她要接种两种疫苗。第一种是白喉、破伤风、百日咳和小儿麻痹症的联合疫苗。第二种是麻疹、腮腺炎和风疹疫苗。',
        wordCount: 29,
        keyTerms: ['diphtheria', 'tetanus', 'whooping cough', 'measles']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '好的。这些疫苗有什么副作用吗？上次打针之后她手臂肿了好几天，我有点担心。',
        translation: 'I see. Are there any side effects from these vaccines? Last time after her injection her arm was swollen for several days and I\'m a bit worried.',
        wordCount: 27,
        keyTerms: ['副作用', '手臂', '肿']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Some swelling and redness at the injection site is normal and usually goes away within a few days. She may also have a mild fever. You can give her children\'s paracetamol if needed.',
        translation: '注射部位出现一些红肿是正常的，通常几天内就会消退。她也可能会轻微发烧。如果需要，您可以给她吃儿童扑热息痛。',
        wordCount: 33,
        keyTerms: ['swelling', 'redness', 'injection site', 'paracetamol']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '如果出现比较严重的反应怎么办？比如高烧或者过敏反应？',
        translation: 'What should I do if she has a more serious reaction? For example, a high fever or an allergic reaction?',
        wordCount: 20,
        keyTerms: ['严重的反应', '高烧', '过敏反应']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Serious reactions are very rare. However, if she develops a high fever, a rash all over her body, or has difficulty breathing, take her to the nearest emergency department immediately.',
        translation: '严重的反应非常罕见。但是，如果她出现高烧、全身皮疹或呼吸困难，请立即带她去最近的急诊室。',
        wordCount: 30,
        keyTerms: ['serious reactions', 'rash', 'difficulty breathing', 'emergency department']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '明白了。打完针之后我们需要在这里等一会儿吗？',
        translation: 'I understand. Do we need to wait here for a while after the injection?',
        wordCount: 14,
        keyTerms: ['打针', '等一会儿']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Yes, we ask that you stay in the waiting area for fifteen minutes after the vaccination so we can monitor for any immediate reactions. Before we proceed, I need you to sign a consent form.',
        translation: '是的，我们要求您在接种后在候诊区等待十五分钟，以便我们观察是否有即时反应。在开始之前，我需要您签一份同意书。',
        wordCount: 35,
        keyTerms: ['waiting area', 'fifteen minutes', 'consent form']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '没问题。请问这些疫苗是免费的吗？还是我们需要付费？',
        translation: 'No problem. Are these vaccines free of charge or do we need to pay?',
        wordCount: 14,
        keyTerms: ['免费', '付费']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'All childhood vaccinations on the National Immunisation Program schedule are free. The record will be updated on the Australian Immunisation Register, and you can access it through your myGov account.',
        translation: '国家免疫计划中所有儿童疫苗都是免费的。记录将更新到澳大利亚免疫登记册上，您可以通过myGov账户查看。',
        wordCount: 30,
        keyTerms: ['National Immunisation Program', 'Australian Immunisation Register', 'myGov']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '太好了。那我现在就签同意书吧。打完针之后回家有什么需要注意的吗？',
        translation: 'That\'s great. I\'ll sign the consent form now then. Is there anything I should look out for when we get home after the injection?',
        wordCount: 24,
        keyTerms: ['同意书', '注意']
      }
    ],
    totalWords: 305
  },
  {
    id: 'health-3',
    domain: 'Health',
    title: 'Mental Health Counselling - Work Stress and Anxiety',
    scenario: 'This dialogue is a session between a worker and a mental health counsellor. The worker is experiencing anxiety, trouble sleeping, and stress from work overload. The counsellor discusses coping strategies and possible referral options.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good afternoon. I\'m David, a counsellor here at the community health centre. How are you feeling today?',
        translation: '下午好。我是大卫，社区健康中心的心理咨询师。您今天感觉怎么样？',
        wordCount: 17,
        keyTerms: ['counsellor', 'community health centre']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好。说实话，我最近压力很大。工作上的事情让我喘不过气来，晚上也睡不好觉。',
        translation: 'Hello. To be honest, I\'ve been under a lot of stress lately. Work has been overwhelming and I can\'t sleep well at night.',
        wordCount: 23,
        keyTerms: ['压力', '工作', '睡不好']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I appreciate you sharing that with me. Can you tell me a bit more about what\'s been happening at work?',
        translation: '感谢您跟我分享。您能多告诉我一些工作上发生了什么吗？',
        wordCount: 20,
        keyTerms: ['sharing', 'happening at work']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我在一家会计事务所工作，最近公司裁员了，走了好几个同事，他们的工作全部压到了我身上。我每天都加班到很晚。',
        translation: 'I work at an accounting firm. Recently the company had layoffs and several colleagues left. All their work has been piled onto me. I work overtime every day until very late.',
        wordCount: 31,
        keyTerms: ['会计事务所', '裁员', '加班']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'That sounds like a very stressful situation. How long has this been going on, and have you noticed any other symptoms besides trouble sleeping?',
        translation: '听起来压力非常大。这种情况持续多久了？除了失眠，您还注意到其他症状吗？',
        wordCount: 24,
        keyTerms: ['stressful', 'symptoms', 'trouble sleeping']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '大概有两三个月了。我经常感到心跳加速，有时候手会发抖。早上起来的时候特别焦虑，不想去上班。',
        translation: 'It\'s been about two to three months. I often feel my heart racing and sometimes my hands shake. I feel especially anxious in the morning and don\'t want to go to work.',
        wordCount: 32,
        keyTerms: ['心跳加速', '手发抖', '焦虑']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Those are common symptoms of anxiety. Have you spoken to your GP about how you\'ve been feeling? It might be helpful to get a medical assessment as well.',
        translation: '这些都是焦虑的常见症状。您有跟您的家庭医生谈过您的感受吗？做一个医学评估可能也会有帮助。',
        wordCount: 28,
        keyTerms: ['anxiety', 'GP', 'medical assessment']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '还没有。我一直觉得自己应该能撑过去。在我们的文化里，看心理医生好像有点不好意思。',
        translation: 'Not yet. I\'ve always thought I should be able to push through it. In our culture, seeing a mental health professional can feel a bit embarrassing.',
        wordCount: 26,
        keyTerms: ['撑过去', '心理医生', '文化']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'There\'s absolutely no shame in seeking help. I\'d recommend seeing your GP and asking about a Mental Health Treatment Plan under Medicare. This gives you up to ten subsidised sessions with a psychologist each year.',
        translation: '寻求帮助完全不丢人。我建议您去看家庭医生，咨询Medicare下的心理健康治疗计划。这样您每年最多可以享受十次有补贴的心理咨询。',
        wordCount: 35,
        keyTerms: ['Mental Health Treatment Plan', 'Medicare', 'psychologist']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '这个我没听说过。看心理医生的费用会全部由Medicare报销吗？',
        translation: 'I haven\'t heard of that before. Will the cost of seeing a psychologist be fully covered by Medicare?',
        wordCount: 18,
        keyTerms: ['心理医生', 'Medicare', '报销']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Medicare will cover part of the cost. Some psychologists bulk bill, which means there\'s no out-of-pocket cost for you. I can give you a list of bulk-billing psychologists in the area.',
        translation: 'Medicare会承担部分费用。一些心理医生提供批量结算服务，这意味着您不需要自己掏钱。我可以给您一份本地区提供批量结算的心理医生名单。',
        wordCount: 31,
        keyTerms: ['bulk bill', 'out-of-pocket cost', 'psychologists']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '那太好了。在等待预约的这段时间，有什么我自己可以做的来缓解焦虑吗？',
        translation: 'That would be great. While I\'m waiting for an appointment, is there anything I can do on my own to manage the anxiety?',
        wordCount: 23,
        keyTerms: ['预约', '焦虑', '缓解']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'Yes, there are several things. Try deep breathing exercises, limit caffeine, and set a regular sleep routine. Even a short daily walk can help. I\'ll give you a brochure on relaxation techniques.',
        translation: '有的，有几个方法。试试深呼吸练习，减少咖啡因摄入，建立规律的睡眠习惯。每天散一小会儿步也有帮助。我给您一本关于放松技巧的小册子。',
        wordCount: 32,
        keyTerms: ['deep breathing', 'caffeine', 'sleep routine', 'relaxation techniques']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '谢谢你，这些建议都很实用。我会先去找我的家庭医生，然后按照你说的方法试试看。',
        translation: 'Thank you, these suggestions are very practical. I\'ll see my GP first and then try the methods you\'ve mentioned.',
        wordCount: 19,
        keyTerms: ['家庭医生', '建议', '方法']
      }
    ],
    totalWords: 359
  },
  {
    id: 'legal-1',
    domain: 'Legal',
    title: 'Police Report - Burglary',
    scenario: 'This dialogue is between a resident and a police officer at the local police station. The resident is reporting a burglary that occurred at their home while they were at work.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good afternoon. I\'m Senior Constable Williams. I understand you\'d like to report a break-in. Can you tell me what happened?',
        translation: '下午好。我是高级警员威廉姆斯。我了解您要报告一起入室盗窃案。您能告诉我发生了什么吗？',
        wordCount: 20,
        keyTerms: ['Senior Constable', 'break-in', 'report']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '是的，警官。我今天下午五点左右下班回家，发现后门的玻璃被打碎了，家里被翻得乱七八糟。',
        translation: 'Yes, officer. When I got home from work around five this afternoon, I found the glass on the back door had been smashed and the house was a complete mess.',
        wordCount: 30,
        keyTerms: ['下班', '后门', '玻璃', '打碎']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I\'m sorry to hear that. Before we go further, can I confirm you haven\'t touched or moved anything inside? It\'s important to preserve the scene for forensics.',
        translation: '很遗憾听到这件事。在继续之前，我能确认一下您没有触碰或移动屋内任何东西吗？保留现场对法医取证非常重要。',
        wordCount: 27,
        keyTerms: ['forensics', 'preserve the scene']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我进去之后发现情况不对就马上出来了，没有碰任何东西。我站在门口打的电话报警。',
        translation: 'I went in and realised something was wrong, so I came straight back out without touching anything. I called the police from the doorway.',
        wordCount: 24,
        keyTerms: ['情况不对', '报警', '没有碰']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'That was the right thing to do. Can you tell me what items appear to be missing or stolen?',
        translation: '您做得对。您能告诉我有哪些物品似乎丢失或被盗了吗？',
        wordCount: 19,
        keyTerms: ['missing', 'stolen']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '我的笔记本电脑不见了，还有放在卧室抽屉里的一些现金，大概有五百澳元。我太太的几件首饰好像也被拿走了。',
        translation: 'My laptop is missing, along with some cash that was in the bedroom drawer, about five hundred dollars. Some of my wife\'s jewellery also appears to have been taken.',
        wordCount: 29,
        keyTerms: ['笔记本电脑', '现金', '首饰']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Do you have the serial number for the laptop or any receipts for the jewellery? That information would help us if the items are recovered.',
        translation: '您有笔记本电脑的序列号或首饰的收据吗？如果物品被找回，这些信息会很有帮助。',
        wordCount: 25,
        keyTerms: ['serial number', 'receipts', 'recovered']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '笔记本电脑的序列号我应该在保修单上能找到。首饰的话，我太太可能有购买收据，我回去找一下。',
        translation: 'I should be able to find the serial number for the laptop on the warranty card. As for the jewellery, my wife might have the purchase receipts. I\'ll look for them.',
        wordCount: 31,
        keyTerms: ['序列号', '保修单', '购买收据']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'That would be very helpful. Do you have any security cameras or know of any CCTV in the area that might have captured something?',
        translation: '那会非常有帮助。您家有安装监控摄像头吗？或者您知道附近有没有可能拍到什么的闭路电视？',
        wordCount: 24,
        keyTerms: ['security cameras', 'CCTV']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '我家没有装监控摄像头。但是我对面邻居的门口好像有一个摄像头，也许能拍到什么。',
        translation: 'I don\'t have any security cameras at my house. But my neighbour across the street seems to have a camera at their front door which might have captured something.',
        wordCount: 29,
        keyTerms: ['监控摄像头', '摄像头']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'We\'ll speak to your neighbour about that. Did any of your neighbours see or hear anything unusual during the day?',
        translation: '我们会跟您的邻居谈谈这件事。白天有邻居看到或听到什么异常情况吗？',
        wordCount: 20,
        keyTerms: ['neighbours', 'see or hear', 'unusual']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '我还没来得及问。不过隔壁的张太太白天一般都在家，她可能注意到了什么可疑的情况。',
        translation: 'I haven\'t had a chance to ask yet. But Mrs Zhang next door is usually home during the day, so she might have noticed something suspicious.',
        wordCount: 26,
        keyTerms: ['张太太', '可疑']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'We\'ll follow up with her too. I\'ll send a forensic team to check for fingerprints and evidence. I\'ll also prepare a report and give you an event number for your insurance claim.',
        translation: '我们也会跟进她的情况。我会派法医团队去检查指纹和证据。我还会准备一份报告，给您一个事件编号用于保险理赔。',
        wordCount: 32,
        keyTerms: ['forensic team', 'fingerprints', 'insurance claim', 'event number']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '谢谢警官。我需要这个事件编号来向保险公司报案。请问大概多久能有调查结果？',
        translation: 'Thank you, officer. I need that event number to lodge a claim with my insurance company. How long will the investigation take approximately?',
        wordCount: 23,
        keyTerms: ['事件编号', '保险公司', '调查结果']
      }
    ],
    totalWords: 359
  },
  {
    id: 'legal-2',
    domain: 'Legal',
    title: 'Legal Aid - Domestic Violence Support',
    scenario: 'This dialogue takes place at a Legal Aid office. A person has contacted Legal Aid seeking help regarding a violent partner. The lawyer explains the Apprehended Violence Order (AVO) process, available support services, and temporary accommodation options.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. I\'m Sarah, a solicitor with Legal Aid. Everything you tell me today is confidential. How can I help you?',
        translation: '早上好。我是萨拉，法律援助的律师。您今天告诉我的一切都是保密的。我能怎么帮您？',
        wordCount: 21,
        keyTerms: ['solicitor', 'Legal Aid', 'confidential']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好。我丈夫最近对我越来越暴力。上周他打了我，我的手臂上还有淤青。我很害怕，不知道该怎么办。',
        translation: 'Hello. My husband has become increasingly violent towards me recently. Last week he hit me and I still have bruises on my arm. I\'m very scared and don\'t know what to do.',
        wordCount: 32,
        keyTerms: ['暴力', '打', '淤青', '害怕']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I\'m very sorry you\'re going through this. You\'ve done the right thing by coming here. Your safety is the priority. Are you currently living with your husband?',
        translation: '我很抱歉您正在经历这些。您来这里做得很对。您的安全是最重要的。您目前还和丈夫住在一起吗？',
        wordCount: 27,
        keyTerms: ['safety', 'priority', 'living with']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '是的，我们还住在一起。我想离开，但是我没有其他地方可以去。我在澳洲也没有什么家人。',
        translation: 'Yes, we still live together. I want to leave but I have nowhere else to go. I don\'t have any family in Australia either.',
        wordCount: 24,
        keyTerms: ['住在一起', '离开', '家人']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'There are safe options for you. We can help you apply for an Apprehended Violence Order, or AVO. This is a court order that prevents your husband from contacting or approaching you.',
        translation: '有安全的选择可以帮到您。我们可以帮您申请暴力禁制令，也叫AVO。这是一项法院命令，禁止您的丈夫联系或接近您。',
        wordCount: 32,
        keyTerms: ['Apprehended Violence Order', 'AVO', 'court order']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '申请这个保护令需要多长时间？在等待期间他会不会对我更加暴力？我真的很担心自己的安全。',
        translation: 'How long does it take to apply for this protection order? Will he become more violent towards me while I\'m waiting? I\'m really worried about my safety.',
        wordCount: 27,
        keyTerms: ['保护令', '暴力', '安全']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'If you\'re in immediate danger, police can issue a provisional AVO on the spot, which takes effect straight away. We can also arrange emergency accommodation at a women\'s refuge.',
        translation: '如果您面临紧急危险，警方可以当场发出临时暴力禁制令，立即生效。我们也可以为您安排妇女庇护所的紧急住所。',
        wordCount: 29,
        keyTerms: ['provisional AVO', 'emergency accommodation', 'women\'s refuge']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我有一个五岁的女儿。她也能跟我一起去庇护所吗？我不想把她留在那个环境里。',
        translation: 'I have a five-year-old daughter. Can she come with me to the refuge? I don\'t want to leave her in that environment.',
        wordCount: 22,
        keyTerms: ['女儿', '庇护所', '环境']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Absolutely. Your daughter can stay with you at the refuge. The refuge also provides counselling and support services for both you and your child.',
        translation: '当然可以。您的女儿可以和您一起住在庇护所。庇护所还为您和您的孩子提供心理咨询和支持服务。',
        wordCount: 24,
        keyTerms: ['refuge', 'counselling', 'support services']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '我的签证是跟我丈夫绑定的。如果我离开他，会不会影响我的签证身份？',
        translation: 'My visa is tied to my husband. If I leave him, will it affect my visa status?',
        wordCount: 17,
        keyTerms: ['签证', '丈夫', '签证身份']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'If you\'re on a partner visa, there are special provisions for family violence situations. You may still be eligible to stay in Australia. I can refer you to an immigration lawyer for help.',
        translation: '如果您持的是配偶签证，针对家庭暴力情况有特殊条款。您可能仍然有资格留在澳洲。我可以为您转介一位移民律师来帮助您。',
        wordCount: 33,
        keyTerms: ['partner visa', 'family violence', 'immigration lawyer']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '这让我放心多了。除了法律帮助，还有其他什么支持服务可以帮助我吗？',
        translation: 'That\'s a great relief. Apart from legal assistance, are there any other support services that can help me?',
        wordCount: 18,
        keyTerms: ['法律帮助', '支持服务']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'Yes. I can connect you with a domestic violence support worker who speaks Mandarin. There\'s also a national helpline called 1800RESPECT that operates around the clock. They can help with safety planning and emotional support.',
        translation: '有的。我可以为您联系一位会说普通话的家庭暴力支持工作者。还有一个全国热线叫1800RESPECT，全天候运作。他们可以帮助制定安全计划并提供情感支持。',
        wordCount: 35,
        keyTerms: ['domestic violence support worker', 'Mandarin', '1800RESPECT', 'safety planning']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '谢谢你。我想尽快申请那个保护令，也想了解一下去庇护所的安排。',
        translation: 'Thank you. I\'d like to apply for the protection order as soon as possible and also find out about the arrangements for the refuge.',
        wordCount: 24,
        keyTerms: ['保护令', '庇护所', '安排']
      }
    ],
    totalWords: 365
  },
  {
    id: 'immigration-1',
    domain: 'Immigration',
    title: 'Citizenship Application - Interview',
    scenario: 'This dialogue takes place at the Department of Home Affairs during a citizenship interview. An officer interviews an applicant about their residency, character requirements, knowledge of Australia, and explains the citizenship ceremony process.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. I\'m James, a citizenship officer with the Department of Home Affairs. Thank you for attending your citizenship interview today. Can I see your identification, please?',
        translation: '早上好。我是詹姆斯，内政部的公民身份官员。感谢您今天来参加公民身份面试。请出示您的身份证件。',
        wordCount: 27,
        keyTerms: ['citizenship officer', 'Department of Home Affairs', 'identification']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '早上好。这是我的护照和永居签证的确认信。我已经期待这一天很久了。',
        translation: 'Good morning. Here is my passport and the confirmation letter for my permanent residency visa. I\'ve been looking forward to this day for a long time.',
        wordCount: 26,
        keyTerms: ['护照', '永居签证', '确认信']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Thank you. I can see from your records that you were granted permanent residency in January 2022. Can you confirm how long you have been living in Australia?',
        translation: '谢谢。从您的记录中我可以看到您于2022年1月获得了永久居留权。您能确认一下您在澳洲居住了多长时间吗？',
        wordCount: 28,
        keyTerms: ['permanent residency', 'living in Australia']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我是二零二一年七月来到澳洲的，到现在已经住了差不多四年半了。这段时间我只出过两次国，每次大概两个星期。',
        translation: 'I arrived in Australia in July 2021, so I\'ve been living here for about four and a half years. During this time, I\'ve only been overseas twice, for about two weeks each time.',
        wordCount: 33,
        keyTerms: ['澳洲', '四年半', '出国']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'That\'s fine. The residency requirement is that you\'ve lived in Australia for at least four years, with at least one year as a permanent resident. You appear to meet that requirement.',
        translation: '没问题。居住要求是您在澳洲至少居住了四年，其中至少一年是永久居民身份。您看起来符合这项要求。',
        wordCount: 31,
        keyTerms: ['residency requirement', 'permanent resident']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '太好了。我一直在悉尼生活和工作，也在这里交了很多朋友。我的两个孩子都在本地的学校上学。',
        translation: 'That\'s great. I\'ve been living and working in Sydney and have made many friends here. Both of my children attend local schools.',
        wordCount: 22,
        keyTerms: ['悉尼', '生活', '工作', '学校']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'That\'s wonderful. Now I need to ask about the character requirement. Have you had any criminal convictions or any issues with the law in Australia or overseas?',
        translation: '很好。现在我需要问一下品格要求方面的问题。您在澳洲或海外有任何犯罪记录或法律问题吗？',
        wordCount: 27,
        keyTerms: ['character requirement', 'criminal convictions']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '没有，我从来没有违反过法律。我有一份稳定的工作，一直按时纳税，也没有任何犯罪记录。',
        translation: 'No, I have never broken the law. I have a stable job, I\'ve always paid my taxes on time, and I have no criminal record.',
        wordCount: 25,
        keyTerms: ['违反', '法律', '纳税', '犯罪记录']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Very good. I can see you\'ve already passed the citizenship test, which covers knowledge of Australia, including its democratic values, history, and national symbols. Congratulations on that.',
        translation: '非常好。我看到您已经通过了公民考试，考试内容涵盖澳洲知识，包括民主价值观、历史和国家标志。恭喜您。',
        wordCount: 27,
        keyTerms: ['citizenship test', 'democratic values', 'national symbols']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '谢谢。我为那个考试准备了很长时间，学到了很多关于澳洲历史和政府体系的知识。请问接下来的流程是什么？',
        translation: 'Thank you. I prepared for that test for a long time and learned a lot about Australian history and the system of government. What is the next step in the process?',
        wordCount: 31,
        keyTerms: ['考试', '澳洲历史', '政府体系']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Your application will now go through a final assessment. If approved, you\'ll receive an invitation to attend a citizenship ceremony where you\'ll make the Australian citizenship pledge. This usually takes place within a few months.',
        translation: '您的申请现在将进入最终审核。如果获批，您会收到参加入籍仪式的邀请，届时您将宣读澳大利亚公民宣誓。这通常在几个月内举行。',
        wordCount: 35,
        keyTerms: ['final assessment', 'citizenship ceremony', 'citizenship pledge']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '非常感谢您的详细解释。我全家都非常期待入籍仪式。成为澳大利亚公民对我们来说意义重大。',
        translation: 'Thank you very much for the detailed explanation. My whole family is looking forward to the ceremony. Becoming an Australian citizen means a great deal to us.',
        wordCount: 27,
        keyTerms: ['入籍仪式', '澳大利亚公民']
      }
    ],
    totalWords: 339
  },
  {
    id: 'immigration-2',
    domain: 'Immigration',
    title: 'Visa Extension — Student Visa',
    scenario: 'This dialogue is a phone conversation between a student and a registered migration agent. The student is calling to ask about extending their student visa, which is due to expire soon. The migration agent explains the requirements, documents needed, and warns about the consequences of letting the visa expire.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. This is Sarah from Migration Solutions. How can I assist you today?',
        translation: '早上好。我是移民解决方案公司的萨拉。今天有什么可以帮您的？',
        wordCount: 14,
        keyTerms: ['Migration Solutions', 'assist']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好，我是留学生，我的学生签证下个月到期，想咨询续签的事。',
        translation: 'Hello, I am an international student. My student visa expires next month and I want to ask about renewing it.',
        wordCount: 20,
        keyTerms: ['学生签证', '到期', '续签']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'Of course. What course are you enrolled in and have you received a new Confirmation of Enrolment?',
        translation: '当然。您在读什么课程？您收到新的注册确认书了吗？',
        wordCount: 17,
        keyTerms: ['Confirmation of Enrolment', 'course']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我在悉尼大学读会计硕士，还有一个学期毕业。学校已经发了新的注册确认书。',
        translation: 'I am studying a Master of Accounting at the University of Sydney with one semester left. The university has issued a new Confirmation of Enrolment.',
        wordCount: 25,
        keyTerms: ['会计硕士', '悉尼大学', '注册确认书']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Good. You need to lodge a new student visa application before your current visa expires. You must also show evidence of financial capacity.',
        translation: '好的。您需要在现有签证到期前递交新的学生签证申请。您还必须提供经济能力的证明。',
        wordCount: 23,
        keyTerms: ['student visa application', 'visa expires', 'financial capacity']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '经济能力证明需要什么？银行存款证明吗？需要多少钱？',
        translation: 'What is needed for proof of financial capacity? A bank statement? How much money is required?',
        wordCount: 16,
        keyTerms: ['经济能力证明', '银行存款']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'You need enough funds for tuition, living expenses, and a return airfare. For living costs, roughly twenty-one thousand dollars a year is required.',
        translation: '您需要有足够的资金来支付学费、生活费和往返机票。生活费方面，每年大约需要两万一千澳元。',
        wordCount: 23,
        keyTerms: ['tuition', 'living expenses', 'return airfare']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '好的，我父母可以担保。另外，我的海外学生健康保险快到期了，需要续吗？',
        translation: 'OK, my parents can sponsor me. Also, my Overseas Student Health Cover is about to expire. Do I need to renew it?',
        wordCount: 22,
        keyTerms: ['担保', '海外学生健康保险']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Yes. Your health insurance must cover the full duration of the new visa. You cannot lodge the application without valid cover.',
        translation: '是的。您的健康保险必须覆盖新签证的整个有效期。没有有效保险您无法递交申请。',
        wordCount: 21,
        keyTerms: ['health insurance', 'valid cover', 'lodge']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '如果签证在新申请批下来之前过期了怎么办？我会变成非法滞留吗？',
        translation: 'What if my visa expires before the new application is approved? Will I become an unlawful non-citizen?',
        wordCount: 17,
        keyTerms: ['签证过期', '非法滞留']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'If you lodge the application before your visa expires, you will automatically receive a bridging visa. This lets you stay in Australia while the application is processed.',
        translation: '如果您在签证到期前递交申请，您将自动获得一个过桥签证。这让您可以在申请处理期间继续留在澳洲。',
        wordCount: 27,
        keyTerms: ['bridging visa', 'lodge', 'application processed']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '过桥签证期间我还能工作吗？我目前每两周工作不超过四十八小时。',
        translation: 'Can I still work on the bridging visa? I currently work no more than forty-eight hours per fortnight.',
        wordCount: 18,
        keyTerms: ['过桥签证', '工作', '四十八小时']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'Yes, the bridging visa usually has the same work conditions. I recommend you lodge the application as soon as possible to avoid complications.',
        translation: '是的，过桥签证通常有相同的工作条件。我建议您尽快递交申请，以避免出现问题。',
        wordCount: 23,
        keyTerms: ['bridging visa', 'work conditions', 'lodge']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '非常感谢。我会尽快准备材料，然后预约来递交申请。',
        translation: 'Thank you very much. I will prepare the documents quickly and make an appointment to lodge the application.',
        wordCount: 18,
        keyTerms: ['准备材料', '预约', '递交申请']
      }
    ],
    totalWords: 284
  },
  {
    id: 'housing-1',
    domain: 'Housing',
    title: 'Rental Application & Inspection',
    scenario: 'This dialogue is a conversation between a prospective tenant and a real estate agent during a rental property inspection. The tenant asks about the lease terms, bond, rent, property condition, and maintenance responsibilities.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good afternoon. Welcome to Ray White real estate. Are you here for the apartment inspection?',
        translation: '下午好。欢迎来到Ray White房地产。您是来看公寓的吗？',
        wordCount: 15,
        keyTerms: ['Ray White', 'real estate', 'apartment inspection']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '是的，我在网上看到了广告，想来实地看看。请问每周租金是多少？',
        translation: 'Yes, I saw the listing online and wanted to have a look in person. How much is the weekly rent?',
        wordCount: 20,
        keyTerms: ['广告', '实地', '租金']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'The rent is five hundred and fifty dollars per week, payable fortnightly. The lease is twelve months with an option to renew.',
        translation: '租金是每周五百五十澳元，每两周支付一次。租约为十二个月，可以续签。',
        wordCount: 22,
        keyTerms: ['rent', 'fortnightly', 'lease', 'twelve months']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '押金是多少？新州最近改了规定，最多只能收四周租金作为押金，对吗？',
        translation: 'How much is the bond? New South Wales recently changed the rules so the maximum bond is four weeks of rent, correct?',
        wordCount: 22,
        keyTerms: ['押金', '新州', '四周租金']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Correct. The bond is four weeks of rent, which is two thousand two hundred dollars. It is lodged with NSW Fair Trading.',
        translation: '没错。押金是四周租金，也就是两千两百澳元。押金由新州公平交易署保管。',
        wordCount: 22,
        keyTerms: ['bond', 'NSW Fair Trading']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '搬进来之前需要做物业状况报告吗？如果有已存在的损坏，我不想被追究责任。',
        translation: 'Is a property condition report done before moving in? I do not want to be responsible for pre-existing damage.',
        wordCount: 19,
        keyTerms: ['物业状况报告', '损坏', '责任']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Yes. We provide a condition report with photos. You have seven days to check it and note any issues before returning it.',
        translation: '是的。我们会提供带有照片的物业状况报告。您有七天时间检查并记录任何问题，然后交还给我们。',
        wordCount: 22,
        keyTerms: ['condition report', 'photos', 'seven days']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我注意到厨房水龙头在滴水，浴室排气扇也不正常。搬进来前能修好吗？',
        translation: 'I noticed the kitchen tap is dripping and the bathroom exhaust fan is not working. Can these be fixed before I move in?',
        wordCount: 23,
        keyTerms: ['水龙头', '滴水', '排气扇']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Yes, the landlord is responsible for repairs. We will arrange a plumber and electrician before the lease starts.',
        translation: '是的，房东负责维修。我们会在租约开始前安排水管工和电工来修理。',
        wordCount: 18,
        keyTerms: ['landlord', 'repairs', 'plumber', 'electrician']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '住进去以后如果热水器或空调坏了，应该联系谁？',
        translation: 'After moving in, if the hot water system or air conditioning breaks down, who should I contact?',
        wordCount: 17,
        keyTerms: ['热水器', '空调']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Contact our office to submit a maintenance request. For urgent issues like burst pipes or no hot water, we have a twenty-four-hour emergency line.',
        translation: '请联系我们办公室提交维修申请。对于水管爆裂或没有热水等紧急情况，我们有二十四小时紧急联系电话。',
        wordCount: 24,
        keyTerms: ['maintenance request', 'emergency line', 'burst pipes']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '这套公寓可以养宠物吗？我有一只小猫。新州法律现在允许租客养宠物了吧？',
        translation: 'Can I keep a pet in this apartment? I have a small cat. New South Wales law now allows tenants to keep pets, right?',
        wordCount: 24,
        keyTerms: ['宠物', '小猫', '法律']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'Yes, pets are allowed under the new legislation. However, you need written consent from the landlord before bringing an animal onto the property.',
        translation: '是的，根据新的法律规定，允许养宠物。但是，在带动物入住前，您需要获得房东的书面同意。',
        wordCount: 23,
        keyTerms: ['pets', 'legislation', 'written consent']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '太好了，我很满意这套公寓。请问申请流程是什么？需要提供哪些材料？',
        translation: 'Great, I am very happy with this place. What is the application process and what documents do I need to provide?',
        wordCount: 21,
        keyTerms: ['满意', '申请流程', '材料']
      }
    ],
    totalWords: 292
  },
  {
    id: 'housing-2',
    domain: 'Housing',
    title: 'Utilities Dispute — Electricity Bill',
    scenario: 'This dialogue is a phone conversation between a resident and a customer service representative at an electricity provider. The resident is calling to dispute an unusually high electricity bill and to understand the charges. The representative explains possible causes and offers solutions.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Thank you for calling Energy Australia. My name is Lisa. How may I help you today?',
        translation: '感谢致电Energy Australia。我叫丽莎。今天有什么可以帮您的？',
        wordCount: 16,
        keyTerms: ['Energy Australia']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好，我刚收到这个季度的电费账单，金额比上个季度高了快一倍，我觉得不太正常。',
        translation: 'Hello, I just received my quarterly electricity bill and the amount is nearly double last quarter. I think something is wrong.',
        wordCount: 21,
        keyTerms: ['电费账单', '季度', '一倍']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I understand your concern. Could you please give me your account number so I can look into this for you?',
        translation: '我理解您的担忧。请您提供一下账号，我帮您查一下。',
        wordCount: 20,
        keyTerms: ['account number', 'look into']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我的账号是五五三七八二一。这次九百多块，上个季度只有五百左右。我用电习惯没变。',
        translation: 'My account number is five five three seven eight two one. This bill is over nine hundred dollars while last quarter was around five hundred. My usage has not changed.',
        wordCount: 30,
        keyTerms: ['账号', '九百多块', '用电习惯']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'I can see your account. Last quarter was based on an estimated reading, not an actual one. This quarter includes a catch-up adjustment.',
        translation: '我能看到您的账户了。上个季度的账单是基于估算读数，不是实际读数。这个季度包含了一个补缴调整。',
        wordCount: 23,
        keyTerms: ['estimated reading', 'actual', 'catch-up adjustment']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '什么是估算读数？为什么没人来抄电表？我一直在家，没见过任何人来。',
        translation: 'What is an estimated reading? Why did no one come to read the meter? I was home the whole time and never saw anyone.',
        wordCount: 24,
        keyTerms: ['估算读数', '抄电表']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Sometimes meter readers cannot access the property if it is locked or there is a dog in the yard. We can arrange a special reading if you request one.',
        translation: '有时候抄表员无法进入物业，可能是门锁着或者院子里有狗。如果您提出要求，我们可以安排一次专门的抄表。',
        wordCount: 29,
        keyTerms: ['meter readers', 'access', 'special reading']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '我没有狗，电表在前院很容易进入。不管怎样，这个账单我一次付不起，能分期吗？',
        translation: 'I have no dog and the meter is in the front yard with easy access. Regardless, I cannot pay this all at once. Can I pay in instalments?',
        wordCount: 28,
        keyTerms: ['电表', '前院', '分期']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Yes, we offer payment plans. I can set up a plan where you pay a fixed amount each fortnight until the balance is cleared.',
        translation: '是的，我们提供分期付款计划。我可以为您设置一个方案，每两周支付固定金额，直到余额付清。',
        wordCount: 24,
        keyTerms: ['payment plans', 'fixed amount', 'fortnightly']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '请帮我设一个分期计划。另外你们有省电的建议吗？我不想以后再收到这么高的账单。',
        translation: 'Please set up a plan for me. Also, do you have any energy-saving tips? I do not want to receive such a high bill again.',
        wordCount: 25,
        keyTerms: ['分期计划', '省电']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'You could consider switching to a time-of-use tariff which charges less during off-peak hours. Running appliances like washing machines and dryers at night can reduce your costs significantly.',
        translation: '您可以考虑转换到分时电价，在非高峰时段收费更低。在晚上使用洗衣机和烘干机等电器可以显著降低您的费用。',
        wordCount: 30,
        keyTerms: ['time-of-use tariff', 'off-peak hours', 'appliances']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '谢谢你的建议，我会试试看。请把分期付款的详细信息发到我的邮箱，我确认一下就可以开始了。',
        translation: 'Thank you for the advice, I will give it a try. Please send the detailed payment plan information to my email and I will confirm it.',
        wordCount: 25,
        keyTerms: ['建议', '分期付款', '邮箱']
      }
    ],
    totalWords: 283
  },
  {
    id: 'insurance-1',
    domain: 'Insurance',
    title: 'Car Accident Insurance Claim',
    scenario: 'This dialogue is a phone conversation between a driver and an insurance company representative. The driver is calling to report a minor car accident and lodge an insurance claim. The representative asks about the details of the incident and explains the claims process.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. NRMA Insurance claims department. My name is David. How can I help?',
        translation: '早上好。NRMA保险理赔部。我叫大卫。有什么可以帮您的？',
        wordCount: 14,
        keyTerms: ['NRMA Insurance', 'claims department']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '你好，我昨天下午在停车场发生了一起小车祸，想报保险理赔。',
        translation: 'Hello, I had a minor car accident in a car park yesterday afternoon and I would like to make a claim.',
        wordCount: 21,
        keyTerms: ['车祸', '停车场', '保险理赔']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'I am sorry to hear that. Is anyone injured? Can you tell me what happened?',
        translation: '很遗憾听到这件事。有人受伤吗？您能告诉我发生了什么吗？',
        wordCount: 15,
        keyTerms: ['injured', 'what happened']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '没有人受伤。我在Westfield停车场倒车时，另一辆车从后面撞到了我车的右侧。',
        translation: 'No one was injured. I was reversing in the Westfield car park when another car hit the right side of my vehicle from behind.',
        wordCount: 24,
        keyTerms: ['倒车', 'Westfield', '停车场', '右侧']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Did you exchange details with the other driver? I need their name, phone number, registration plate, and insurance details.',
        translation: '您和对方司机交换了信息吗？我需要对方的姓名、电话号码、车牌号和保险信息。',
        wordCount: 19,
        keyTerms: ['exchange details', 'registration plate', 'insurance details']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '是的，对方叫约翰·史密斯，车牌号DFG-234。但他说没有买保险。',
        translation: 'Yes, the other driver is John Smith with registration plate DFG-234. But he said he does not have insurance.',
        wordCount: 19,
        keyTerms: ['约翰', '车牌号', '没有买保险']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'That is fine. We can still process your claim. Did you take photos of the damage and the accident scene?',
        translation: '没关系。我们仍然可以处理您的理赔。您有拍损坏情况和事故现场的照片吗？',
        wordCount: 20,
        keyTerms: ['process your claim', 'photos', 'damage']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '拍了很多照片。我车门上有大凹痕，右后视镜碎了。对方前保险杠也有刮痕。',
        translation: 'I took many photos. There is a large dent on my door and the right mirror is smashed. The other car has scratches on the front bumper.',
        wordCount: 27,
        keyTerms: ['凹痕', '后视镜', '保险杠', '刮痕']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'Good, photos are very helpful. Did you report the accident to the police?',
        translation: '好的，照片非常有帮助。您有向警方报告这起事故吗？',
        wordCount: 13,
        keyTerms: ['photos', 'police']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '没有报警，因为没人受伤，损失也不太严重。需要报警吗？',
        translation: 'I did not call the police because no one was hurt and the damage was not serious. Do I need to report it?',
        wordCount: 23,
        keyTerms: ['没报警', '没人受伤']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'For minor accidents with no injuries, a police report is not required. But I suggest you report it online for your records. Let me explain the claims process.',
        translation: '对于没有人员受伤的轻微事故，不需要警方报告。但我建议您在网上报备以留存记录。让我来解释一下理赔流程。',
        wordCount: 28,
        keyTerms: ['minor accidents', 'police report', 'claims process']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '好的，请说。我需要先垫付修理费吗？',
        translation: 'OK, please go ahead. Do I need to pay for repairs upfront?',
        wordCount: 12,
        keyTerms: ['修理费', '垫付']
      },
      {
        number: 13,
        speaker: 'ENGLISH',
        text: 'You need to pay the excess, which is your contribution towards the claim. Your policy has a basic excess of eight hundred dollars. We will send an assessor to inspect your car.',
        translation: '您需要支付免赔额，这是您对理赔的自付部分。您的保单基本免赔额是八百澳元。我们会派一位评估员来检查您的车。',
        wordCount: 32,
        keyTerms: ['excess', 'contribution', 'assessor', 'inspect']
      },
      {
        number: 14,
        speaker: 'MANDARIN',
        text: '八百块免赔额，明白了。如果查明是对方全责，免赔额能退给我吗？',
        translation: 'Eight hundred dollars excess, I understand. If the other driver is found fully at fault, can the excess be refunded?',
        wordCount: 20,
        keyTerms: ['免赔额', '全责', '退']
      }
    ],
    totalWords: 287
  },
  {
    id: 'business-1',
    domain: 'Business',
    title: 'Small Business — Export Inquiry',
    scenario: 'This dialogue is a conversation between a small business owner and an Austrade trade officer. The business owner is seeking advice about exporting Australian skincare products to China. The trade officer explains export regulations, tariffs, labelling requirements, and government support programs.',
    segments: [
      {
        number: 1,
        speaker: 'ENGLISH',
        text: 'Good morning. Welcome to Austrade. I am James, a trade officer. I understand you are interested in exporting to China.',
        translation: '早上好。欢迎来到澳大利亚贸易投资委员会。我是詹姆斯，一名贸易官员。我了解您有兴趣向中国出口。',
        wordCount: 20,
        keyTerms: ['Austrade', 'trade officer', 'exporting']
      },
      {
        number: 2,
        speaker: 'MANDARIN',
        text: '是的，我经营一家小型护肤品公司，产品在澳洲卖得很好，现在想拓展中国市场。',
        translation: 'Yes, I run a small skincare company. Our products sell well in Australia and we want to expand into the Chinese market.',
        wordCount: 22,
        keyTerms: ['护肤品', '公司', '中国市场']
      },
      {
        number: 3,
        speaker: 'ENGLISH',
        text: 'That is a great opportunity. Australian skincare products are highly regarded in China. However, exporting cosmetics requires meeting specific regulations in both countries.',
        translation: '这是一个很好的机会。澳洲护肤品在中国享有很高的声誉。不过，出口化妆品需要满足两国的特定法规。',
        wordCount: 23,
        keyTerms: ['skincare products', 'regulations']
      },
      {
        number: 4,
        speaker: 'MANDARIN',
        text: '我对出口法规不太了解。产品需要在中国注册吗？大概要多长时间？',
        translation: 'I do not know much about export regulations. Do my products need to be registered in China? How long does it take?',
        wordCount: 22,
        keyTerms: ['出口法规', '注册', '时间']
      },
      {
        number: 5,
        speaker: 'ENGLISH',
        text: 'Yes, cosmetics must be registered with the National Medical Products Administration in China. For ordinary cosmetics, the process takes three to six months.',
        translation: '是的，化妆品必须在中国国家药品监督管理局注册。对于普通化妆品，这个过程需要三到六个月。',
        wordCount: 23,
        keyTerms: ['National Medical Products Administration', 'registered', 'cosmetics']
      },
      {
        number: 6,
        speaker: 'MANDARIN',
        text: '关税方面呢？中国对澳洲护肤品的进口关税是多少？中澳自贸协定有帮助吗？',
        translation: 'What about tariffs? What is the import duty on Australian skincare products in China? Does the China-Australia Free Trade Agreement help?',
        wordCount: 21,
        keyTerms: ['关税', '进口关税', '自贸协定']
      },
      {
        number: 7,
        speaker: 'ENGLISH',
        text: 'Under the Free Trade Agreement, tariffs on many Australian goods have been reduced or eliminated. For cosmetics, the tariff may be as low as five per cent.',
        translation: '根据自由贸易协定，许多澳洲商品的关税已经降低或取消。对于化妆品，关税可能低至百分之五。',
        wordCount: 27,
        keyTerms: ['Free Trade Agreement', 'tariffs', 'five per cent']
      },
      {
        number: 8,
        speaker: 'MANDARIN',
        text: '那很好。产品标签有特殊要求吗？我知道中国对进口产品标签要求很严格。',
        translation: 'That is good. Are there special labelling requirements? I know China has strict labelling rules for imported products.',
        wordCount: 18,
        keyTerms: ['产品标签', '要求', '严格']
      },
      {
        number: 9,
        speaker: 'ENGLISH',
        text: 'All products need Chinese language labels showing ingredients, manufacturer details, expiry date, and the name of the Chinese importer. Labels must meet national standards.',
        translation: '所有产品都需要中文标签，标明成分、生产商信息、保质期以及中国进口商的名称。标签必须符合国家标准。',
        wordCount: 24,
        keyTerms: ['Chinese language labels', 'ingredients', 'expiry date', 'national standards']
      },
      {
        number: 10,
        speaker: 'MANDARIN',
        text: '听起来很复杂。政府有支持计划帮助小企业出口吗？补贴或培训都行。',
        translation: 'That sounds complicated. Does the government have programs to help small businesses export? Grants or training would be helpful.',
        wordCount: 19,
        keyTerms: ['支持计划', '小企业', '补贴']
      },
      {
        number: 11,
        speaker: 'ENGLISH',
        text: 'Yes. The Export Market Development Grant reimburses up to fifty per cent of eligible export expenses. We also offer free workshops and can arrange trade missions to China.',
        translation: '有的。出口市场开发补助金可以报销高达百分之五十的合格出口费用。我们还提供免费研讨会，也可以安排赴中国的贸易考察团。',
        wordCount: 28,
        keyTerms: ['Export Market Development Grant', 'workshops', 'trade missions']
      },
      {
        number: 12,
        speaker: 'MANDARIN',
        text: '太好了，这正是我需要的。能预约一个详细的咨询吗？我想尽快开始准备。',
        translation: 'That is exactly what I need. Can I book a detailed consultation? I want to start preparing as soon as possible.',
        wordCount: 21,
        keyTerms: ['咨询', '准备']
      }
    ],
    totalWords: 268
  }
];

const CCL_VOCABULARY = [
  { id: 'comm-001', english: 'animal protection society', mandarin: '动物保护协会', pinyin: 'dòngwù bǎohù xiéhuì', domain: 'community' },
  { id: 'comm-002', english: 'mistreat', mandarin: '虐待', pinyin: 'nüèdài', domain: 'community' },
  { id: 'comm-003', english: 'neighbour', mandarin: '邻居', pinyin: 'línjū', domain: 'community' },
  { id: 'comm-004', english: 'bark (dog)', mandarin: '叫', pinyin: 'jiào', domain: 'community' },
  { id: 'comm-005', english: 'fence', mandarin: '围墙', pinyin: 'wéiqiáng', domain: 'community' },
  { id: 'comm-006', english: 'back yard', mandarin: '后院', pinyin: 'hòuyuàn', domain: 'community' },
  { id: 'comm-007', english: 'ribs', mandarin: '肋骨', pinyin: 'lèigǔ', domain: 'community' },
  { id: 'comm-008', english: 'coat (fur)', mandarin: '狗毛', pinyin: 'gǒumáo', domain: 'community' },
  { id: 'comm-009', english: 'dull and matted', mandarin: '暗淡无光，并缠在一起', pinyin: 'àndàn wúguāng, bìng chán zài yīqǐ', domain: 'community' },
  { id: 'comm-010', english: 'healthy', mandarin: '健康', pinyin: 'jiànkāng', domain: 'community' },
  { id: 'comm-011', english: 'walk the dog', mandarin: '遛狗', pinyin: 'liùgǒu', domain: 'community' },
  { id: 'comm-012', english: 'protection officer', mandarin: '保护工作人员', pinyin: 'bǎohù gōngzuò rényuán', domain: 'community' },
  { id: 'comm-013', english: 'get into trouble', mandarin: '有麻烦', pinyin: 'yǒu máfan', domain: 'community' },
  { id: 'comm-014', english: 'take care of', mandarin: '照顾', pinyin: 'zhàogù', domain: 'community' },
  { id: 'comm-015', english: 'drinking water', mandarin: '水喝', pinyin: 'shuǐ hē', domain: 'community' },
  { id: 'cons-001', english: 'tree trimming company', mandarin: '修剪树木公司', pinyin: 'xiūjiǎn shùmù gōngsī', domain: 'consumer-affairs' },
  { id: 'cons-002', english: 'cut down', mandarin: '砍', pinyin: 'kǎn', domain: 'consumer-affairs' },
  { id: 'cons-003', english: 'back yard', mandarin: '后院', pinyin: 'hòuyuàn', domain: 'consumer-affairs' },
  { id: 'cons-004', english: 'finish the work', mandarin: '完成这项工作', pinyin: 'wánchéng zhè xiàng gōngzuò', domain: 'consumer-affairs' },
  { id: 'cons-005', english: 'unsatisfied / unhappy', mandarin: '不满意', pinyin: 'bù mǎnyì', domain: 'consumer-affairs' },
  { id: 'cons-006', english: 'storm', mandarin: '暴风雨', pinyin: 'bàofēngyǔ', domain: 'consumer-affairs' },
  { id: 'cons-007', english: 'branches', mandarin: '树枝', pinyin: 'shùzhī', domain: 'consumer-affairs' },
  { id: 'cons-008', english: 'damage', mandarin: '损害', pinyin: 'sǔnhài', domain: 'consumer-affairs' },
  { id: 'cons-009', english: 'forecast', mandarin: '预报', pinyin: 'yùbào', domain: 'consumer-affairs' },
  { id: 'cons-010', english: 'delay', mandarin: '延迟', pinyin: 'yánchí', domain: 'consumer-affairs' },
  { id: 'cons-011', english: 'apologise', mandarin: '道歉', pinyin: 'dàoqiàn', domain: 'consumer-affairs' },
  { id: 'cons-012', english: 'weekend', mandarin: '周末', pinyin: 'zhōumò', domain: 'consumer-affairs' },
  { id: 'cons-013', english: 'safe from damage', mandarin: '安全，不受损害', pinyin: 'ānquán, bù shòu sǔnhài', domain: 'consumer-affairs' },
  { id: 'edu1-001', english: 'principal', mandarin: '校长', pinyin: 'xiàozhǎng', domain: 'education-1' },
  { id: 'edu1-002', english: 'enrolment', mandarin: '注册/录取', pinyin: 'zhùcè/lùqǔ', domain: 'education-1' },
  { id: 'edu1-003', english: 'interview', mandarin: '面试', pinyin: 'miànshì', domain: 'education-1' },
  { id: 'edu1-004', english: 'vaccine / immunisation', mandarin: '疫苗/接种', pinyin: 'yìmiáo/jiēzhǒng', domain: 'education-1' },
  { id: 'edu1-005', english: 'proficiency test', mandarin: '能力测试', pinyin: 'nénglì cèshì', domain: 'education-1' },
  { id: 'edu1-006', english: 'language support', mandarin: '语言支持', pinyin: 'yǔyán zhīchí', domain: 'education-1' },
  { id: 'edu1-007', english: 'literacy skills', mandarin: '读写能力', pinyin: 'dúxiě nénglì', domain: 'education-1' },
  { id: 'edu1-008', english: 'birth certificate', mandarin: '出生证明', pinyin: 'chūshēng zhèngmíng', domain: 'education-1' },
  { id: 'edu1-009', english: 'proof of residential address', mandarin: '居住地址证明', pinyin: 'jūzhù dìzhǐ zhèngmíng', domain: 'education-1' },
  { id: 'edu1-010', english: 'utility bill', mandarin: '水电费账单', pinyin: 'shuǐdiànfèi zhàngdān', domain: 'education-1' },
  { id: 'edu1-011', english: 'visa status', mandarin: '签证状态', pinyin: 'qiānzhèng zhuàngtài', domain: 'education-1' },
  { id: 'edu1-012', english: 'passport copies', mandarin: '护照复印件', pinyin: 'hùzhào fùyìnjiàn', domain: 'education-1' },
  { id: 'edu1-013', english: 'lag behind classmates', mandarin: '跟不上', pinyin: 'gēn bù shàng', domain: 'education-1' },
  { id: 'edu1-014', english: 'semester', mandarin: '学期', pinyin: 'xuéqī', domain: 'education-1' },
  { id: 'edu2-001', english: 'college', mandarin: '学院', pinyin: 'xuéyuàn', domain: 'education-2' },
  { id: 'edu2-002', english: 'computer course', mandarin: '电脑课程', pinyin: 'diànnǎo kèchéng', domain: 'education-2' },
  { id: 'edu2-003', english: 'enrollment form', mandarin: '注册表格', pinyin: 'zhùcè biǎogé', domain: 'education-2' },
  { id: 'edu2-004', english: 'start date', mandarin: '开学日期', pinyin: 'kāixué rìqī', domain: 'education-2' },
  { id: 'edu2-005', english: 'full time class', mandarin: '全日制课程', pinyin: 'quánrìzhì kèchéng', domain: 'education-2' },
  { id: 'edu2-006', english: 'part time class', mandarin: '兼职课程', pinyin: 'jiānzhí kèchéng', domain: 'education-2' },
  { id: 'edu2-007', english: 'course fees', mandarin: '学费', pinyin: 'xuéfèi', domain: 'education-2' },
  { id: 'edu2-008', english: 'installments', mandarin: '分期付款', pinyin: 'fēnqī fùkuǎn', domain: 'education-2' },
  { id: 'edu2-009', english: 'payment plan', mandarin: '付款计划', pinyin: 'fùkuǎn jìhuà', domain: 'education-2' },
  { id: 'edu2-010', english: 'finance office', mandarin: '财务办公室', pinyin: 'cáiwù bàngōngshì', domain: 'education-2' },
  { id: 'edu2-011', english: 'student account', mandarin: '学生账户', pinyin: 'xuéshēng zhànghù', domain: 'education-2' },
  { id: 'edu2-012', english: 'IT support', mandarin: '信息技术支持', pinyin: 'xìnxī jìshù zhīchí', domain: 'education-2' },
  { id: 'emp1-001', english: 'case manager', mandarin: '个案经理', pinyin: 'gè\'àn jīnglǐ', domain: 'employment-1' },
  { id: 'emp1-002', english: 'job seeker', mandarin: '求职者', pinyin: 'qiúzhí zhě', domain: 'employment-1' },
  { id: 'emp1-003', english: 'Centrelink payments', mandarin: 'Centrelink 补贴', pinyin: 'Centrelink bǔtiē', domain: 'employment-1' },
  { id: 'emp1-004', english: 'English classes', mandarin: '英语课', pinyin: 'yīngyǔ kè', domain: 'employment-1' },
  { id: 'emp1-005', english: 'profession', mandarin: '本行', pinyin: 'běnháng', domain: 'employment-1' },
  { id: 'emp1-006', english: 'computer technician', mandarin: '计算机技术人员', pinyin: 'jìsuànjī jìshù rényuán', domain: 'employment-1' },
  { id: 'emp1-007', english: 'systems administration', mandarin: '系统管理', pinyin: 'xìtǒng guǎnlǐ', domain: 'employment-1' },
  { id: 'emp1-008', english: 'programming', mandarin: '编程', pinyin: 'biānchéng', domain: 'employment-1' },
  { id: 'emp1-009', english: 'résumé', mandarin: '简历', pinyin: 'jiǎnlì', domain: 'employment-1' },
  { id: 'emp1-010', english: 'job listing', mandarin: '招工列表', pinyin: 'zhāogōng lièbiǎo', domain: 'employment-1' },
  { id: 'emp1-011', english: 'English fluency', mandarin: '英语流利', pinyin: 'yīngyǔ liúlì', domain: 'employment-1' },
  { id: 'emp1-012', english: 'optimistic', mandarin: '乐观', pinyin: 'lèguān', domain: 'employment-1' },
  { id: 'emp2-001', english: 'student centre', mandarin: '学生中心', pinyin: 'xuéshēng zhōngxīn', domain: 'employment-2' },
  { id: 'emp2-002', english: 'job vacancies', mandarin: '工作空缺', pinyin: 'gōngzuò kōngquē', domain: 'employment-2' },
  { id: 'emp2-003', english: 'part time job', mandarin: '兼职工作', pinyin: 'jiānzhí gōngzuò', domain: 'employment-2' },
  { id: 'emp2-004', english: 'full time job', mandarin: '全职工作', pinyin: 'quánzhí gōngzuò', domain: 'employment-2' },
  { id: 'emp2-005', english: 'living expenses', mandarin: '生活开支', pinyin: 'shēnghuó kāizhī', domain: 'employment-2' },
  { id: 'emp2-006', english: 'waiter', mandarin: '服务员', pinyin: 'fúwùyuán', domain: 'employment-2' },
  { id: 'emp2-007', english: 'kitchenhand', mandarin: '厨房帮工', pinyin: 'chúfáng bānggōng', domain: 'employment-2' },
  { id: 'emp2-008', english: 'function centre', mandarin: '活动中心', pinyin: 'huódòng zhōngxīn', domain: 'employment-2' },
  { id: 'emp2-009', english: 'application', mandarin: '申请', pinyin: 'shēnqǐng', domain: 'employment-2' },
  { id: 'emp2-010', english: 'demanding course', mandarin: '繁重的课程', pinyin: 'fánzhòng de kèchéng', domain: 'employment-2' },
  { id: 'fin-001', english: 'loan', mandarin: '贷款', pinyin: 'dàikuǎn', domain: 'financial' },
  { id: 'fin-002', english: 'deposit', mandarin: '首付', pinyin: 'shǒufù', domain: 'financial' },
  { id: 'fin-003', english: 'interest rate', mandarin: '利率', pinyin: 'lìlǜ', domain: 'financial' },
  { id: 'fin-004', english: 'property', mandarin: '房产', pinyin: 'fángchǎn', domain: 'financial' },
  { id: 'fin-005', english: 'apartment', mandarin: '公寓', pinyin: 'gōngyù', domain: 'financial' },
  { id: 'fin-006', english: 'real estate agency', mandarin: '房地产中介', pinyin: 'fángdìchǎn zhōngjiè', domain: 'financial' },
  { id: 'fin-007', english: 'renovated', mandarin: '翻新', pinyin: 'fānxīn', domain: 'financial' },
  { id: 'fin-008', english: 'savings', mandarin: '存款', pinyin: 'cúnkuǎn', domain: 'financial' },
  { id: 'fin-009', english: 'borrow', mandarin: '借', pinyin: 'jiè', domain: 'financial' },
  { id: 'fin-010', english: 'loan calculator', mandarin: '贷款计算器', pinyin: 'dàikuǎn jìsuànqì', domain: 'financial' },
  { id: 'fin-011', english: 'income', mandarin: '收入', pinyin: 'shōurù', domain: 'financial' },
  { id: 'fin-012', english: 'budget', mandarin: '预算', pinyin: 'yùsuàn', domain: 'financial' },
  { id: 'fin-013', english: 'rates and expenses', mandarin: '杂费', pinyin: 'záfèi', domain: 'financial' },
  { id: 'fin-014', english: 'two-bedroom', mandarin: '两卧室', pinyin: 'liǎng wòshì', domain: 'financial' },
  { id: 'soc-001', english: 'social worker', mandarin: '社会工作者', pinyin: 'shèhuì gōngzuò zhě', domain: 'social-services' },
  { id: 'soc-002', english: 'Youth Allowance', mandarin: '青年津贴', pinyin: 'qīngnián jīntiē', domain: 'social-services' },
  { id: 'soc-003', english: 'Living Away from Home', mandarin: '离家生活', pinyin: 'lí jiā shēnghuó', domain: 'social-services' },
  { id: 'soc-004', english: 'argument', mandarin: '吵架', pinyin: 'chǎojià', domain: 'social-services' },
  { id: 'soc-005', english: 'behave', mandarin: '规矩', pinyin: 'guījǔ', domain: 'social-services' },
  { id: 'soc-006', english: 'drugs', mandarin: '毒品', pinyin: 'dúpǐn', domain: 'social-services' },
  { id: 'soc-007', english: 'mediation', mandarin: '调解', pinyin: 'tiáojiě', domain: 'social-services' },
  { id: 'soc-008', english: 'parent support group', mandarin: '家长支持小组', pinyin: 'jiāzhǎng zhīchí xiǎozǔ', domain: 'social-services' },
  { id: 'soc-009', english: 'community organisation', mandarin: '社区组织', pinyin: 'shèqū zǔzhī', domain: 'social-services' },
  { id: 'soc-010', english: 'appointment', mandarin: '预约', pinyin: 'yùyuē', domain: 'social-services' },
  { id: 'soc-011', english: 'single parent', mandarin: '单身', pinyin: 'dānshēn', domain: 'social-services' },
  { id: 'soc-012', english: 'pick up children', mandarin: '接孩子', pinyin: 'jiē háizi', domain: 'social-services' },
  { id: 'soc-013', english: 'circumstances', mandarin: '情况', pinyin: 'qíngkuàng', domain: 'social-services' },
  { id: 'soc-014', english: 'snack', mandarin: '点心', pinyin: 'diǎnxin', domain: 'social-services' },
  { id: 'health-1-001', english: 'food poisoning', mandarin: '食物中毒', pinyin: 'shíwù zhòngdú', domain: 'health-1' },
  { id: 'health-1-002', english: 'general practitioner (GP)', mandarin: '全科医生', pinyin: 'quánkē yīshēng', domain: 'health-1' },
  { id: 'health-1-003', english: 'specialist', mandarin: '专科医生', pinyin: 'zhuānkē yīshēng', domain: 'health-1' },
  { id: 'health-1-004', english: 'referral', mandarin: '转介信', pinyin: 'zhuǎnjiè xìn', domain: 'health-1' },
  { id: 'health-1-005', english: 'Medicare', mandarin: '国民医疗保险', pinyin: 'guómín yīliáo bǎoxiǎn', domain: 'health-1' },
  { id: 'health-1-006', english: 'Medicare card', mandarin: '医疗保险卡', pinyin: 'yīliáo bǎoxiǎn kǎ', domain: 'health-1' },
  { id: 'health-1-007', english: 'bulk billing', mandarin: '批量结算', pinyin: 'pīliàng jiésuàn', domain: 'health-1' },
  { id: 'health-1-008', english: 'prescription', mandarin: '处方', pinyin: 'chǔfāng', domain: 'health-1' },
  { id: 'health-1-009', english: 'pharmacy / chemist', mandarin: '药房', pinyin: 'yàofáng', domain: 'health-1' },
  { id: 'health-1-010', english: 'medication', mandarin: '药物', pinyin: 'yàowù', domain: 'health-1' },
  { id: 'health-1-011', english: 'dosage', mandarin: '剂量', pinyin: 'jìliàng', domain: 'health-1' },
  { id: 'health-1-012', english: 'side effects', mandarin: '副作用', pinyin: 'fùzuòyòng', domain: 'health-1' },
  { id: 'health-1-013', english: 'allergic reaction', mandarin: '过敏反应', pinyin: 'guòmǐn fǎnyìng', domain: 'health-1' },
  { id: 'health-1-014', english: 'symptom', mandarin: '症状', pinyin: 'zhèngzhuàng', domain: 'health-1' },
  { id: 'health-1-015', english: 'diagnosis', mandarin: '诊断', pinyin: 'zhěnduàn', domain: 'health-1' },
  { id: 'health-1-016', english: 'blood test', mandarin: '验血', pinyin: 'yàn xuè', domain: 'health-1' },
  { id: 'health-1-017', english: 'X-ray', mandarin: 'X光', pinyin: 'X guāng', domain: 'health-1' },
  { id: 'health-1-018', english: 'emergency department', mandarin: '急诊室', pinyin: 'jízhěnshì', domain: 'health-1' },
  { id: 'health-1-019', english: 'ambulance', mandarin: '救护车', pinyin: 'jiùhùchē', domain: 'health-1' },
  { id: 'health-1-020', english: 'waiting room', mandarin: '候诊室', pinyin: 'hòuzhěnshì', domain: 'health-1' },
  { id: 'health-1-021', english: 'medical certificate', mandarin: '医疗证明', pinyin: 'yīliáo zhèngmíng', domain: 'health-1' },
  { id: 'health-1-022', english: 'patient', mandarin: '患者', pinyin: 'huànzhě', domain: 'health-1' },
  { id: 'health-1-023', english: 'out-of-pocket expense', mandarin: '自费部分', pinyin: 'zìfèi bùfen', domain: 'health-1' },
  { id: 'health-1-024', english: 'Pharmaceutical Benefits Scheme (PBS)', mandarin: '药物福利计划', pinyin: 'yàowù fúlì jìhuà', domain: 'health-1' },
  { id: 'health-1-025', english: 'concession card', mandarin: '优惠卡', pinyin: 'yōuhuì kǎ', domain: 'health-1' },
  { id: 'health-2-001', english: 'fever', mandarin: '发烧', pinyin: 'fāshāo', domain: 'health-2' },
  { id: 'health-2-002', english: 'cough', mandarin: '咳嗽', pinyin: 'késou', domain: 'health-2' },
  { id: 'health-2-003', english: 'headache', mandarin: '头痛', pinyin: 'tóutòng', domain: 'health-2' },
  { id: 'health-2-004', english: 'diarrhoea', mandarin: '腹泻', pinyin: 'fùxiè', domain: 'health-2' },
  { id: 'health-2-005', english: 'vomiting', mandarin: '呕吐', pinyin: 'ǒutù', domain: 'health-2' },
  { id: 'health-2-006', english: 'nausea', mandarin: '恶心', pinyin: 'ěxīn', domain: 'health-2' },
  { id: 'health-2-007', english: 'sore throat', mandarin: '喉咙痛', pinyin: 'hóulóng tòng', domain: 'health-2' },
  { id: 'health-2-008', english: 'chest pain', mandarin: '胸痛', pinyin: 'xiōngtòng', domain: 'health-2' },
  { id: 'health-2-009', english: 'shortness of breath', mandarin: '呼吸困难', pinyin: 'hūxī kùnnan', domain: 'health-2' },
  { id: 'health-2-010', english: 'high blood pressure', mandarin: '高血压', pinyin: 'gāo xuèyā', domain: 'health-2' },
  { id: 'health-2-011', english: 'diabetes', mandarin: '糖尿病', pinyin: 'tángniàobìng', domain: 'health-2' },
  { id: 'health-2-012', english: 'asthma', mandarin: '哮喘', pinyin: 'xiàochuǎn', domain: 'health-2' },
  { id: 'health-2-013', english: 'fracture', mandarin: '骨折', pinyin: 'gǔzhé', domain: 'health-2' },
  { id: 'health-2-014', english: 'sprain', mandarin: '扭伤', pinyin: 'niǔshāng', domain: 'health-2' },
  { id: 'health-2-015', english: 'wound / injury', mandarin: '伤口', pinyin: 'shāngkǒu', domain: 'health-2' },
  { id: 'health-2-016', english: 'infection', mandarin: '感染', pinyin: 'gǎnrǎn', domain: 'health-2' },
  { id: 'health-2-017', english: 'antibiotic', mandarin: '抗生素', pinyin: 'kàngshēngsù', domain: 'health-2' },
  { id: 'health-2-018', english: 'painkiller', mandarin: '止痛药', pinyin: 'zhǐtòng yào', domain: 'health-2' },
  { id: 'health-2-019', english: 'ultrasound', mandarin: '超声波', pinyin: 'chāoshēngbō', domain: 'health-2' },
  { id: 'health-2-020', english: 'surgery / operation', mandarin: '手术', pinyin: 'shǒushù', domain: 'health-2' },
  { id: 'health-2-021', english: 'anaesthesia', mandarin: '麻醉', pinyin: 'mázuì', domain: 'health-2' },
  { id: 'health-2-022', english: 'ward (hospital)', mandarin: '病房', pinyin: 'bìngfáng', domain: 'health-2' },
  { id: 'health-2-023', english: 'discharge (from hospital)', mandarin: '出院', pinyin: 'chūyuàn', domain: 'health-2' },
  { id: 'health-2-024', english: 'follow-up appointment', mandarin: '复诊', pinyin: 'fùzhěn', domain: 'health-2' },
  { id: 'health-2-025', english: 'private health insurance', mandarin: '私人医疗保险', pinyin: 'sīrén yīliáo bǎoxiǎn', domain: 'health-2' },
  { id: 'health-3-001', english: 'mental health', mandarin: '心理健康', pinyin: 'xīnlǐ jiànkāng', domain: 'health-3' },
  { id: 'health-3-002', english: 'depression', mandarin: '抑郁症', pinyin: 'yìyùzhèng', domain: 'health-3' },
  { id: 'health-3-003', english: 'anxiety', mandarin: '焦虑症', pinyin: 'jiāolǜzhèng', domain: 'health-3' },
  { id: 'health-3-004', english: 'counsellor', mandarin: '心理咨询师', pinyin: 'xīnlǐ zīxúnshī', domain: 'health-3' },
  { id: 'health-3-005', english: 'psychologist', mandarin: '心理学家', pinyin: 'xīnlǐ xuéjiā', domain: 'health-3' },
  { id: 'health-3-006', english: 'psychiatrist', mandarin: '精神科医生', pinyin: 'jīngshénkē yīshēng', domain: 'health-3' },
  { id: 'health-3-007', english: 'Mental Health Care Plan', mandarin: '心理健康护理计划', pinyin: 'xīnlǐ jiànkāng hùlǐ jìhuà', domain: 'health-3' },
  { id: 'health-3-008', english: 'stress', mandarin: '压力', pinyin: 'yālì', domain: 'health-3' },
  { id: 'health-3-009', english: 'insomnia', mandarin: '失眠', pinyin: 'shīmián', domain: 'health-3' },
  { id: 'health-3-010', english: 'appetite loss', mandarin: '食欲不振', pinyin: 'shíyù bùzhèn', domain: 'health-3' },
  { id: 'health-3-011', english: 'fatigue', mandarin: '疲劳', pinyin: 'píláo', domain: 'health-3' },
  { id: 'health-3-012', english: 'substance abuse', mandarin: '药物滥用', pinyin: 'yàowù lànyòng', domain: 'health-3' },
  { id: 'health-3-013', english: 'rehabilitation', mandarin: '康复', pinyin: 'kāngfù', domain: 'health-3' },
  { id: 'health-3-014', english: 'therapy session', mandarin: '治疗课程', pinyin: 'zhìliáo kèchéng', domain: 'health-3' },
  { id: 'health-3-015', english: 'confidentiality', mandarin: '保密性', pinyin: 'bǎomìxìng', domain: 'health-3' },
  { id: 'health-3-016', english: 'support group', mandarin: '互助小组', pinyin: 'hùzhù xiǎozǔ', domain: 'health-3' },
  { id: 'health-3-017', english: 'crisis helpline', mandarin: '危机求助热线', pinyin: 'wēijī qiúzhù rèxiàn', domain: 'health-3' },
  { id: 'health-3-018', english: 'domestic violence', mandarin: '家庭暴力', pinyin: 'jiātíng bàolì', domain: 'health-3' },
  { id: 'health-3-019', english: 'child protection', mandarin: '儿童保护', pinyin: 'értóng bǎohù', domain: 'health-3' },
  { id: 'health-3-020', english: 'interpreter service', mandarin: '口译服务', pinyin: 'kǒuyì fúwù', domain: 'health-3' },
  { id: 'health-3-021', english: 'consent form', mandarin: '同意书', pinyin: 'tóngyìshū', domain: 'health-3' },
  { id: 'health-3-022', english: 'vaccination record', mandarin: '疫苗接种记录', pinyin: 'yìmiáo jiēzhǒng jìlù', domain: 'health-3' },
  { id: 'legal-1-001', english: 'Apprehended Violence Order (AVO)', mandarin: '暴力禁制令', pinyin: 'bàolì jìnzhì lìng', domain: 'legal-1' },
  { id: 'legal-1-002', english: 'magistrate', mandarin: '地方法官', pinyin: 'dìfāng fǎguān', domain: 'legal-1' },
  { id: 'legal-1-003', english: 'bail', mandarin: '保释', pinyin: 'bǎoshì', domain: 'legal-1' },
  { id: 'legal-1-004', english: 'Legal Aid', mandarin: '法律援助', pinyin: 'fǎlǜ yuánzhù', domain: 'legal-1' },
  { id: 'legal-1-005', english: 'witness statement', mandarin: '证人陈述', pinyin: 'zhèngrén chénshù', domain: 'legal-1' },
  { id: 'legal-1-006', english: 'restraining order', mandarin: '限制令', pinyin: 'xiànzhì lìng', domain: 'legal-1' },
  { id: 'legal-1-007', english: 'defendant', mandarin: '被告', pinyin: 'bèigào', domain: 'legal-1' },
  { id: 'legal-1-008', english: 'plaintiff', mandarin: '原告', pinyin: 'yuángào', domain: 'legal-1' },
  { id: 'legal-1-009', english: 'solicitor / lawyer', mandarin: '律师', pinyin: 'lǜshī', domain: 'legal-1' },
  { id: 'legal-1-010', english: 'court hearing', mandarin: '法庭听证', pinyin: 'fǎtíng tīngzhèng', domain: 'legal-1' },
  { id: 'legal-1-011', english: 'local court', mandarin: '地方法院', pinyin: 'dìfāng fǎyuàn', domain: 'legal-1' },
  { id: 'legal-1-012', english: 'guilty plea', mandarin: '认罪', pinyin: 'rènzuì', domain: 'legal-1' },
  { id: 'legal-1-013', english: 'not guilty plea', mandarin: '不认罪', pinyin: 'bù rènzuì', domain: 'legal-1' },
  { id: 'legal-1-014', english: 'fine', mandarin: '罚款', pinyin: 'fákuǎn', domain: 'legal-1' },
  { id: 'legal-1-015', english: 'community service order', mandarin: '社区服务令', pinyin: 'shèqū fúwù lìng', domain: 'legal-1' },
  { id: 'legal-1-016', english: 'criminal record', mandarin: '犯罪记录', pinyin: 'fànzuì jìlù', domain: 'legal-1' },
  { id: 'legal-1-017', english: 'charge', mandarin: '指控', pinyin: 'zhǐkòng', domain: 'legal-1' },
  { id: 'legal-1-018', english: 'evidence', mandarin: '证据', pinyin: 'zhèngjù', domain: 'legal-1' },
  { id: 'legal-1-019', english: 'assault', mandarin: '袭击', pinyin: 'xíjī', domain: 'legal-1' },
  { id: 'legal-1-020', english: 'theft / stealing', mandarin: '盗窃', pinyin: 'dàoqiè', domain: 'legal-1' },
  { id: 'legal-1-021', english: 'victim', mandarin: '受害者', pinyin: 'shòuhài zhě', domain: 'legal-1' },
  { id: 'legal-1-022', english: 'police report', mandarin: '报警记录', pinyin: 'bàojǐng jìlù', domain: 'legal-1' },
  { id: 'legal-1-023', english: 'duty solicitor', mandarin: '值班律师', pinyin: 'zhíbān lǜshī', domain: 'legal-1' },
  { id: 'legal-1-024', english: 'adjourn', mandarin: '休庭', pinyin: 'xiūtíng', domain: 'legal-1' },
  { id: 'legal-1-025', english: 'sentence', mandarin: '判决', pinyin: 'pànjué', domain: 'legal-1' },
  { id: 'legal-2-001', english: 'family court', mandarin: '家庭法院', pinyin: 'jiātíng fǎyuàn', domain: 'legal-2' },
  { id: 'legal-2-002', english: 'custody', mandarin: '监护权', pinyin: 'jiānhùquán', domain: 'legal-2' },
  { id: 'legal-2-003', english: 'child support', mandarin: '子女抚养费', pinyin: 'zǐnǚ fǔyǎng fèi', domain: 'legal-2' },
  { id: 'legal-2-004', english: 'divorce', mandarin: '离婚', pinyin: 'líhūn', domain: 'legal-2' },
  { id: 'legal-2-005', english: 'property settlement', mandarin: '财产分割', pinyin: 'cáichǎn fēngē', domain: 'legal-2' },
  { id: 'legal-2-006', english: 'parenting order', mandarin: '育儿令', pinyin: 'yù\'ér lìng', domain: 'legal-2' },
  { id: 'legal-2-007', english: 'mediation (legal)', mandarin: '法律调解', pinyin: 'fǎlǜ tiáojiě', domain: 'legal-2' },
  { id: 'legal-2-008', english: 'consent order', mandarin: '同意令', pinyin: 'tóngyì lìng', domain: 'legal-2' },
  { id: 'legal-2-009', english: 'affidavit', mandarin: '宣誓书', pinyin: 'xuānshìshū', domain: 'legal-2' },
  { id: 'legal-2-010', english: 'subpoena', mandarin: '传票', pinyin: 'chuánpiào', domain: 'legal-2' },
  { id: 'legal-2-011', english: 'power of attorney', mandarin: '授权委托书', pinyin: 'shòuquán wěituōshū', domain: 'legal-2' },
  { id: 'legal-2-012', english: 'guardianship', mandarin: '监护', pinyin: 'jiānhù', domain: 'legal-2' },
  { id: 'legal-2-013', english: 'will / testament', mandarin: '遗嘱', pinyin: 'yízhǔ', domain: 'legal-2' },
  { id: 'legal-2-014', english: 'negligence', mandarin: '疏忽', pinyin: 'shūhu', domain: 'legal-2' },
  { id: 'legal-2-015', english: 'compensation', mandarin: '赔偿', pinyin: 'péicháng', domain: 'legal-2' },
  { id: 'legal-2-016', english: 'tribunal', mandarin: '仲裁庭', pinyin: 'zhòngcáitíng', domain: 'legal-2' },
  { id: 'legal-2-017', english: 'dispute resolution', mandarin: '纠纷解决', pinyin: 'jiūfēn jiějué', domain: 'legal-2' },
  { id: 'legal-2-018', english: 'contract', mandarin: '合同', pinyin: 'hétong', domain: 'legal-2' },
  { id: 'legal-2-019', english: 'breach of contract', mandarin: '违反合同', pinyin: 'wéifǎn hétong', domain: 'legal-2' },
  { id: 'legal-2-020', english: 'statutory declaration', mandarin: '法定声明', pinyin: 'fǎdìng shēngmíng', domain: 'legal-2' },
  { id: 'legal-2-021', english: 'notarise', mandarin: '公证', pinyin: 'gōngzhèng', domain: 'legal-2' },
  { id: 'legal-2-022', english: 'lodge a complaint', mandarin: '提出投诉', pinyin: 'tíchū tóusù', domain: 'legal-2' },
  { id: 'immi-1-001', english: 'visa subclass', mandarin: '签证子类', pinyin: 'qiānzhèng zǐlèi', domain: 'immigration-1' },
  { id: 'immi-1-002', english: 'bridging visa', mandarin: '过桥签证', pinyin: 'guòqiáo qiānzhèng', domain: 'immigration-1' },
  { id: 'immi-1-003', english: 'migration agent', mandarin: '移民代理', pinyin: 'yímín dàilǐ', domain: 'immigration-1' },
  { id: 'immi-1-004', english: 'citizenship', mandarin: '公民身份', pinyin: 'gōngmín shēnfèn', domain: 'immigration-1' },
  { id: 'immi-1-005', english: 'permanent residency', mandarin: '永久居留权', pinyin: 'yǒngjiǔ jūliúquán', domain: 'immigration-1' },
  { id: 'immi-1-006', english: 'skills assessment', mandarin: '技能评估', pinyin: 'jìnéng pínggū', domain: 'immigration-1' },
  { id: 'immi-1-007', english: 'points test', mandarin: '打分测试', pinyin: 'dǎfēn cèshì', domain: 'immigration-1' },
  { id: 'immi-1-008', english: 'Expression of Interest (EOI)', mandarin: '意向书', pinyin: 'yìxiàngshū', domain: 'immigration-1' },
  { id: 'immi-1-009', english: 'sponsor', mandarin: '担保人', pinyin: 'dānbǎo rén', domain: 'immigration-1' },
  { id: 'immi-1-010', english: 'visa application', mandarin: '签证申请', pinyin: 'qiānzhèng shēnqǐng', domain: 'immigration-1' },
  { id: 'immi-1-011', english: 'visa conditions', mandarin: '签证条件', pinyin: 'qiānzhèng tiáojiàn', domain: 'immigration-1' },
  { id: 'immi-1-012', english: 'visa expiry date', mandarin: '签证到期日', pinyin: 'qiānzhèng dàoqī rì', domain: 'immigration-1' },
  { id: 'immi-1-013', english: 'visa cancellation', mandarin: '签证取消', pinyin: 'qiānzhèng qǔxiāo', domain: 'immigration-1' },
  { id: 'immi-1-014', english: 'overstay', mandarin: '逾期滞留', pinyin: 'yúqī zhìliú', domain: 'immigration-1' },
  { id: 'immi-1-015', english: 'detention centre', mandarin: '拘留中心', pinyin: 'jūliú zhōngxīn', domain: 'immigration-1' },
  { id: 'immi-1-016', english: 'deportation', mandarin: '驱逐出境', pinyin: 'qūzhú chūjìng', domain: 'immigration-1' },
  { id: 'immi-1-017', english: 'passport', mandarin: '护照', pinyin: 'hùzhào', domain: 'immigration-1' },
  { id: 'immi-1-018', english: 'travel document', mandarin: '旅行证件', pinyin: 'lǚxíng zhèngjiàn', domain: 'immigration-1' },
  { id: 'immi-1-019', english: 'Department of Home Affairs', mandarin: '内政部', pinyin: 'nèizhèng bù', domain: 'immigration-1' },
  { id: 'immi-1-020', english: 'character requirement', mandarin: '品格要求', pinyin: 'pǐngé yāoqiú', domain: 'immigration-1' },
  { id: 'immi-1-021', english: 'health examination', mandarin: '体检', pinyin: 'tǐjiǎn', domain: 'immigration-1' },
  { id: 'immi-1-022', english: 'police clearance certificate', mandarin: '无犯罪记录证明', pinyin: 'wú fànzuì jìlù zhèngmíng', domain: 'immigration-1' },
  { id: 'immi-1-023', english: 'work rights', mandarin: '工作权利', pinyin: 'gōngzuò quánlì', domain: 'immigration-1' },
  { id: 'immi-1-024', english: 'student visa', mandarin: '学生签证', pinyin: 'xuéshēng qiānzhèng', domain: 'immigration-1' },
  { id: 'immi-1-025', english: 'partner visa', mandarin: '配偶签证', pinyin: 'pèi\'ǒu qiānzhèng', domain: 'immigration-1' },
  { id: 'immi-2-001', english: 'citizenship ceremony', mandarin: '入籍仪式', pinyin: 'rùjí yíshì', domain: 'immigration-2' },
  { id: 'immi-2-002', english: 'citizenship test', mandarin: '入籍考试', pinyin: 'rùjí kǎoshì', domain: 'immigration-2' },
  { id: 'immi-2-003', english: 'naturalisation', mandarin: '归化入籍', pinyin: 'guīhuà rùjí', domain: 'immigration-2' },
  { id: 'immi-2-004', english: 'residency requirement', mandarin: '居住要求', pinyin: 'jūzhù yāoqiú', domain: 'immigration-2' },
  { id: 'immi-2-005', english: 'English language requirement', mandarin: '英语语言要求', pinyin: 'yīngyǔ yǔyán yāoqiú', domain: 'immigration-2' },
  { id: 'immi-2-006', english: 'IELTS', mandarin: '雅思考试', pinyin: 'yǎsī kǎoshì', domain: 'immigration-2' },
  { id: 'immi-2-007', english: 'qualifications recognition', mandarin: '学历认证', pinyin: 'xuélì rènzhèng', domain: 'immigration-2' },
  { id: 'immi-2-008', english: 'TAFE', mandarin: '技术与继续教育学院', pinyin: 'jìshù yǔ jìxù jiàoyù xuéyuàn', domain: 'immigration-2' },
  { id: 'immi-2-009', english: 'skilled occupation list', mandarin: '技术职业清单', pinyin: 'jìshù zhíyè qīngdān', domain: 'immigration-2' },
  { id: 'immi-2-010', english: 'nomination', mandarin: '提名', pinyin: 'tímíng', domain: 'immigration-2' },
  { id: 'immi-2-011', english: 'state sponsorship', mandarin: '州政府担保', pinyin: 'zhōu zhèngfǔ dānbǎo', domain: 'immigration-2' },
  { id: 'immi-2-012', english: 'visa grant', mandarin: '签证批准', pinyin: 'qiānzhèng pīzhǔn', domain: 'immigration-2' },
  { id: 'immi-2-013', english: 'visa refusal', mandarin: '签证拒签', pinyin: 'qiānzhèng jùqiān', domain: 'immigration-2' },
  { id: 'immi-2-014', english: 'appeal', mandarin: '上诉', pinyin: 'shàngsù', domain: 'immigration-2' },
  { id: 'immi-2-015', english: 'Administrative Appeals Tribunal (AAT)', mandarin: '行政上诉仲裁庭', pinyin: 'xíngzhèng shàngsù zhòngcáitíng', domain: 'immigration-2' },
  { id: 'immi-2-016', english: 'refugee', mandarin: '难民', pinyin: 'nànmín', domain: 'immigration-2' },
  { id: 'immi-2-017', english: 'asylum seeker', mandarin: '寻求庇护者', pinyin: 'xúnqiú bìhù zhě', domain: 'immigration-2' },
  { id: 'immi-2-018', english: 'protection visa', mandarin: '保护签证', pinyin: 'bǎohù qiānzhèng', domain: 'immigration-2' },
  { id: 'immi-2-019', english: 'family reunion', mandarin: '家庭团聚', pinyin: 'jiātíng tuánjù', domain: 'immigration-2' },
  { id: 'immi-2-020', english: 'migration review', mandarin: '移民审查', pinyin: 'yímín shěnchá', domain: 'immigration-2' },
  { id: 'immi-2-021', english: 'Confirmation of Enrolment (CoE)', mandarin: '入学确认书', pinyin: 'rùxué quèrènshū', domain: 'immigration-2' },
  { id: 'immi-2-022', english: 'genuine temporary entrant (GTE)', mandarin: '真正临时入境者', pinyin: 'zhēnzhèng línshí rùjìng zhě', domain: 'immigration-2' },
  { id: 'hous-1-001', english: 'bond / security deposit', mandarin: '押金', pinyin: 'yājīn', domain: 'housing-1' },
  { id: 'hous-1-002', english: 'lease / tenancy agreement', mandarin: '租赁合同', pinyin: 'zūlìn hétong', domain: 'housing-1' },
  { id: 'hous-1-003', english: 'tenant', mandarin: '租客', pinyin: 'zūkè', domain: 'housing-1' },
  { id: 'hous-1-004', english: 'landlord', mandarin: '房东', pinyin: 'fángdōng', domain: 'housing-1' },
  { id: 'hous-1-005', english: 'property condition report', mandarin: '房屋状况报告', pinyin: 'fángwū zhuàngkuàng bàogào', domain: 'housing-1' },
  { id: 'hous-1-006', english: 'strata', mandarin: '分层管理', pinyin: 'fēncéng guǎnlǐ', domain: 'housing-1' },
  { id: 'hous-1-007', english: 'utilities', mandarin: '水电煤气费', pinyin: 'shuǐ diàn méiqì fèi', domain: 'housing-1' },
  { id: 'hous-1-008', english: 'rent', mandarin: '房租', pinyin: 'fángzū', domain: 'housing-1' },
  { id: 'hous-1-009', english: 'rent increase', mandarin: '涨房租', pinyin: 'zhǎng fángzū', domain: 'housing-1' },
  { id: 'hous-1-010', english: 'real estate agent', mandarin: '房产经纪人', pinyin: 'fángchǎn jīngjìrén', domain: 'housing-1' },
  { id: 'hous-1-011', english: 'inspection', mandarin: '房屋检查', pinyin: 'fángwū jiǎnchá', domain: 'housing-1' },
  { id: 'hous-1-012', english: 'maintenance / repair', mandarin: '维修', pinyin: 'wéixiū', domain: 'housing-1' },
  { id: 'hous-1-013', english: 'eviction notice', mandarin: '驱逐通知', pinyin: 'qūzhú tōngzhī', domain: 'housing-1' },
  { id: 'hous-1-014', english: 'notice to vacate', mandarin: '搬迁通知', pinyin: 'bānqiān tōngzhī', domain: 'housing-1' },
  { id: 'hous-1-015', english: 'break lease', mandarin: '提前解约', pinyin: 'tíqián jiěyuē', domain: 'housing-1' },
  { id: 'hous-1-016', english: 'rental application', mandarin: '租房申请', pinyin: 'zūfáng shēnqǐng', domain: 'housing-1' },
  { id: 'hous-1-017', english: 'rental history', mandarin: '租房记录', pinyin: 'zūfáng jìlù', domain: 'housing-1' },
  { id: 'hous-1-018', english: 'reference (rental)', mandarin: '推荐人', pinyin: 'tuījiàn rén', domain: 'housing-1' },
  { id: 'hous-1-019', english: 'furnished', mandarin: '带家具的', pinyin: 'dài jiājù de', domain: 'housing-1' },
  { id: 'hous-1-020', english: 'unfurnished', mandarin: '不带家具的', pinyin: 'bù dài jiājù de', domain: 'housing-1' },
  { id: 'hous-1-021', english: 'shared accommodation', mandarin: '合租', pinyin: 'hézū', domain: 'housing-1' },
  { id: 'hous-1-022', english: 'body corporate', mandarin: '业主委员会', pinyin: 'yèzhǔ wěiyuánhuì', domain: 'housing-1' },
  { id: 'hous-2-001', english: 'public housing', mandarin: '公共住房', pinyin: 'gōnggòng zhùfáng', domain: 'housing-2' },
  { id: 'hous-2-002', english: 'social housing', mandarin: '社会住房', pinyin: 'shèhuì zhùfáng', domain: 'housing-2' },
  { id: 'hous-2-003', english: 'Housing NSW', mandarin: '新州住房局', pinyin: 'xīnzhōu zhùfáng jú', domain: 'housing-2' },
  { id: 'hous-2-004', english: 'waiting list', mandarin: '等候名单', pinyin: 'děnghòu míngdān', domain: 'housing-2' },
  { id: 'hous-2-005', english: 'priority housing', mandarin: '优先住房', pinyin: 'yōuxiān zhùfáng', domain: 'housing-2' },
  { id: 'hous-2-006', english: 'rental assistance', mandarin: '租房补贴', pinyin: 'zūfáng bǔtiē', domain: 'housing-2' },
  { id: 'hous-2-007', english: 'Commonwealth Rent Assistance', mandarin: '联邦租房补助', pinyin: 'liánbāng zūfáng bǔzhù', domain: 'housing-2' },
  { id: 'hous-2-008', english: 'homelessness', mandarin: '无家可归', pinyin: 'wú jiā kě guī', domain: 'housing-2' },
  { id: 'hous-2-009', english: 'emergency accommodation', mandarin: '紧急住宿', pinyin: 'jǐnjí zhùsù', domain: 'housing-2' },
  { id: 'hous-2-010', english: 'refuge / shelter', mandarin: '庇护所', pinyin: 'bìhùsuǒ', domain: 'housing-2' },
  { id: 'hous-2-011', english: 'mould', mandarin: '霉菌', pinyin: 'méijūn', domain: 'housing-2' },
  { id: 'hous-2-012', english: 'plumbing', mandarin: '水管', pinyin: 'shuǐguǎn', domain: 'housing-2' },
  { id: 'hous-2-013', english: 'electrician', mandarin: '电工', pinyin: 'diàngōng', domain: 'housing-2' },
  { id: 'hous-2-014', english: 'air conditioning', mandarin: '空调', pinyin: 'kōngtiáo', domain: 'housing-2' },
  { id: 'hous-2-015', english: 'smoke alarm', mandarin: '烟雾报警器', pinyin: 'yānwù bàojǐngqì', domain: 'housing-2' },
  { id: 'hous-2-016', english: 'pest control', mandarin: '害虫防治', pinyin: 'hàichóng fángzhì', domain: 'housing-2' },
  { id: 'hous-2-017', english: 'Tenants Advice Service', mandarin: '租客咨询服务', pinyin: 'zūkè zīxún fúwù', domain: 'housing-2' },
  { id: 'hous-2-018', english: 'NSW Civil and Administrative Tribunal (NCAT)', mandarin: '新州民事与行政仲裁庭', pinyin: 'xīnzhōu mínshì yǔ xíngzhèng zhòngcáitíng', domain: 'housing-2' },
  { id: 'hous-2-019', english: 'bond refund', mandarin: '退还押金', pinyin: 'tuìhuán yājīn', domain: 'housing-2' },
  { id: 'hous-2-020', english: 'wear and tear', mandarin: '正常磨损', pinyin: 'zhèngcháng mósǔn', domain: 'housing-2' },
  { id: 'hous-2-021', english: 'subletting', mandarin: '转租', pinyin: 'zhuǎnzū', domain: 'housing-2' },
  { id: 'hous-2-022', english: 'lease renewal', mandarin: '续租', pinyin: 'xùzū', domain: 'housing-2' },
  { id: 'ins-1-001', english: 'insurance premium', mandarin: '保险费', pinyin: 'bǎoxiǎn fèi', domain: 'insurance-1' },
  { id: 'ins-1-002', english: 'excess', mandarin: '免赔额', pinyin: 'miǎnpéi\'é', domain: 'insurance-1' },
  { id: 'ins-1-003', english: 'insurance claim', mandarin: '保险索赔', pinyin: 'bǎoxiǎn suǒpéi', domain: 'insurance-1' },
  { id: 'ins-1-004', english: 'third party insurance', mandarin: '第三方保险', pinyin: 'dì sān fāng bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-005', english: 'comprehensive insurance', mandarin: '综合保险', pinyin: 'zōnghé bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-006', english: 'no-claim bonus', mandarin: '无索赔优惠', pinyin: 'wú suǒpéi yōuhuì', domain: 'insurance-1' },
  { id: 'ins-1-007', english: 'policy holder', mandarin: '投保人', pinyin: 'tóubǎo rén', domain: 'insurance-1' },
  { id: 'ins-1-008', english: 'insurance policy', mandarin: '保险单', pinyin: 'bǎoxiǎn dān', domain: 'insurance-1' },
  { id: 'ins-1-009', english: 'contents insurance', mandarin: '财产保险', pinyin: 'cáichǎn bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-010', english: 'building insurance', mandarin: '建筑保险', pinyin: 'jiànzhù bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-011', english: 'car insurance', mandarin: '汽车保险', pinyin: 'qìchē bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-012', english: 'life insurance', mandarin: '人寿保险', pinyin: 'rénshòu bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-013', english: 'travel insurance', mandarin: '旅行保险', pinyin: 'lǚxíng bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-014', english: 'cover / coverage', mandarin: '保障范围', pinyin: 'bǎozhàng fànwéi', domain: 'insurance-1' },
  { id: 'ins-1-015', english: 'exclusion', mandarin: '除外条款', pinyin: 'chúwài tiáokuǎn', domain: 'insurance-1' },
  { id: 'ins-1-016', english: 'renewal', mandarin: '续保', pinyin: 'xùbǎo', domain: 'insurance-1' },
  { id: 'ins-1-017', english: 'assessor', mandarin: '评估员', pinyin: 'pínggū yuán', domain: 'insurance-1' },
  { id: 'ins-1-018', english: 'liability', mandarin: '责任', pinyin: 'zérèn', domain: 'insurance-1' },
  { id: 'ins-1-019', english: 'flood damage', mandarin: '洪水损失', pinyin: 'hóngshuǐ sǔnshī', domain: 'insurance-1' },
  { id: 'ins-1-020', english: 'fire damage', mandarin: '火灾损失', pinyin: 'huǒzāi sǔnshī', domain: 'insurance-1' },
  { id: 'ins-1-021', english: 'CTP (Compulsory Third Party)', mandarin: '强制第三方保险', pinyin: 'qiángzhì dì sān fāng bǎoxiǎn', domain: 'insurance-1' },
  { id: 'ins-1-022', english: 'green slip', mandarin: '绿色保险单', pinyin: 'lǜsè bǎoxiǎn dān', domain: 'insurance-1' },
  { id: 'ins-1-023', english: 'claim form', mandarin: '索赔表格', pinyin: 'suǒpéi biǎogé', domain: 'insurance-1' },
  { id: 'ins-1-024', english: 'insured value', mandarin: '投保金额', pinyin: 'tóubǎo jīn\'é', domain: 'insurance-1' },
  { id: 'ins-1-025', english: 'underinsured', mandarin: '保额不足', pinyin: 'bǎo\'é bùzú', domain: 'insurance-1' },
  { id: 'biz-1-001', english: 'Australian Business Number (ABN)', mandarin: '澳大利亚商业号码', pinyin: 'àodàlìyà shāngyè hàomǎ', domain: 'business-1' },
  { id: 'biz-1-002', english: 'Goods and Services Tax (GST)', mandarin: '商品及服务税', pinyin: 'shāngpǐn jí fúwù shuì', domain: 'business-1' },
  { id: 'biz-1-003', english: 'Business Activity Statement (BAS)', mandarin: '商业活动报表', pinyin: 'shāngyè huódòng bàobiǎo', domain: 'business-1' },
  { id: 'biz-1-004', english: 'Tax File Number (TFN)', mandarin: '税号', pinyin: 'shuìhào', domain: 'business-1' },
  { id: 'biz-1-005', english: 'invoice', mandarin: '发票', pinyin: 'fāpiào', domain: 'business-1' },
  { id: 'biz-1-006', english: 'wholesale', mandarin: '批发', pinyin: 'pīfā', domain: 'business-1' },
  { id: 'biz-1-007', english: 'retail', mandarin: '零售', pinyin: 'língshòu', domain: 'business-1' },
  { id: 'biz-1-008', english: 'export', mandarin: '出口', pinyin: 'chūkǒu', domain: 'business-1' },
  { id: 'biz-1-009', english: 'import', mandarin: '进口', pinyin: 'jìnkǒu', domain: 'business-1' },
  { id: 'biz-1-010', english: 'import duty / tariff', mandarin: '进口关税', pinyin: 'jìnkǒu guānshuì', domain: 'business-1' },
  { id: 'biz-1-011', english: 'customs', mandarin: '海关', pinyin: 'hǎiguān', domain: 'business-1' },
  { id: 'biz-1-012', english: 'quarantine', mandarin: '检疫', pinyin: 'jiǎnyì', domain: 'business-1' },
  { id: 'biz-1-013', english: 'sole trader', mandarin: '个体经营者', pinyin: 'gètǐ jīngyíng zhě', domain: 'business-1' },
  { id: 'biz-1-014', english: 'partnership', mandarin: '合伙企业', pinyin: 'héhuǒ qǐyè', domain: 'business-1' },
  { id: 'biz-1-015', english: 'company registration', mandarin: '公司注册', pinyin: 'gōngsī zhùcè', domain: 'business-1' },
  { id: 'biz-1-016', english: 'tax return', mandarin: '报税', pinyin: 'bàoshuì', domain: 'business-1' },
  { id: 'biz-1-017', english: 'accountant', mandarin: '会计师', pinyin: 'kuàijìshī', domain: 'business-1' },
  { id: 'biz-1-018', english: 'bookkeeping', mandarin: '记账', pinyin: 'jìzhàng', domain: 'business-1' },
  { id: 'biz-1-019', english: 'superannuation', mandarin: '养老金', pinyin: 'yǎnglǎojīn', domain: 'business-1' },
  { id: 'biz-1-020', english: 'payroll', mandarin: '工资单', pinyin: 'gōngzī dān', domain: 'business-1' },
  { id: 'biz-1-021', english: 'profit and loss', mandarin: '损益', pinyin: 'sǔnyì', domain: 'business-1' },
  { id: 'biz-1-022', english: 'business plan', mandarin: '商业计划', pinyin: 'shāngyè jìhuà', domain: 'business-1' },
  { id: 'biz-1-023', english: 'franchise', mandarin: '特许经营', pinyin: 'tèxǔ jīngyíng', domain: 'business-1' },
  { id: 'biz-1-024', english: 'work cover / workers compensation', mandarin: '工伤保险', pinyin: 'gōngshāng bǎoxiǎn', domain: 'business-1' },
  { id: 'biz-1-025', english: 'fair trading', mandarin: '公平交易', pinyin: 'gōngpíng jiāoyì', domain: 'business-1' }
];
