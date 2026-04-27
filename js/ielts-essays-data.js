/* IELTS Writing Task 2 Essay Bank — Band 8 Model Answers
   Starter set of 12 essays covering the 6 question types and key categories.
   Use alongside your existing PTE 万能语料库 (102 topics, 527 arguments). */

var IELTS_ESSAYS = [

  /* ─── OPINION (To what extent...) ─── */
  {
    id: 'essay001',
    question: 'Some people believe that universities should focus on academic subjects, while others argue they should also teach practical skills. To what extent do you agree?',
    type: 'Opinion (Agree/Disagree)',
    category: 'Education',
    keywords: ['universities', 'academic', 'practical skills', 'employability'],
    bothSides: {
      forSide: ['Practical skills increase graduate employability', 'Universities should reflect modern labour market needs', 'Pure theory leaves graduates unprepared'],
      againstSide: ['Universities are not vocational schools', 'Critical thinking matters more than narrow skills', 'Practical skills can be learnt elsewhere']
    },
    modelAnswer: 'The role of universities has long been a topic of debate, with some advocating an exclusive focus on academic subjects and others insisting that practical skills must be embedded in higher education. While I recognise the value of intellectual rigour, I largely disagree with the purely academic view, as universities must adapt to serve a broader purpose in modern society.\n\nProponents of academic-only education argue that universities exist to develop critical thinking, original research, and theoretical knowledge — qualities that distinguish higher education from vocational training. There is undoubtedly merit in this position; if universities become merely job factories, the very depth of intellectual exploration that defines them risks being eroded. Disciplines such as philosophy, history, and pure mathematics may not yield immediate employment, yet they cultivate analytical minds that benefit society in the long run.\n\nHowever, I would argue that this view fails to reflect contemporary realities. The cost of higher education has risen dramatically, and graduates increasingly judge their degrees by employment outcomes. Employers, in turn, lament that academic qualifications alone do not prepare graduates for professional environments. Universities that integrate practical components — internships, industry collaboration, project-based learning — produce graduates who are not only intellectually sharp but also workplace-ready. The University of Melbourne\'s industry-embedded engineering programs, for instance, demonstrate how academic depth and practical application can coexist productively.\n\nUltimately, this is not a binary choice. Universities can, and should, deliver rigorous academic content while equipping students with skills that translate beyond the lecture hall. Those that fail to adapt risk producing graduates whose expertise, however profound, leaves them ill-equipped for the world they enter.',
    keyVocabulary: ['intellectual rigour', 'job factories', 'workplace-ready', 'industry-embedded', 'translate beyond', 'binary choice', 'ill-equipped'],
    bandTip: 'For Opinion essays, take a clear stance early ("I largely disagree"). Concede the opposing view fairly, then dismantle it with evidence. Avoid sitting on the fence.'
  },

  {
    id: 'essay002',
    question: 'Some people believe that climate change is the most serious problem facing humanity today, while others argue that economic inequality is more pressing. To what extent do you agree with the former view?',
    type: 'Opinion (Agree/Disagree)',
    category: 'Environment',
    keywords: ['climate change', 'inequality', 'global priorities'],
    bothSides: {
      forSide: ['Climate change is irreversible past tipping points', 'It threatens all human existence equally', 'Mitigation requires immediate action'],
      againstSide: ['Inequality affects billions today', 'Tackling poverty enables climate action', 'Economic justice is a precondition']
    },
    modelAnswer: 'Identifying the most pressing global challenge is far from straightforward, with climate change and economic inequality both demanding urgent attention. While I acknowledge that inequality causes immense daily suffering, I largely agree that climate change represents the single greatest threat to humanity, primarily because of its irreversible and universal consequences.\n\nThose who prioritise inequality have legitimate concerns. Roughly half of the world\'s population lives on less than five US dollars a day, and the gap between the wealthiest and poorest has widened significantly in recent decades. Economic injustice causes preventable deaths, fuels political instability, and limits human potential on a vast scale. Furthermore, addressing inequality could enable more effective climate action, as impoverished nations cannot reasonably be expected to invest in green infrastructure.\n\nHowever, I would argue that climate change is qualitatively different in three critical respects. Firstly, its consequences are largely irreversible — once Antarctic ice sheets collapse or coral reefs die, no human policy can restore them. Secondly, it threatens the very systems on which all economies depend: agriculture, water security, coastal habitation. Thirdly, it disproportionately affects the poorest nations, meaning unchecked climate change will dramatically worsen the inequality that critics rightly highlight. The 2022 Pakistan floods, which displaced over 30 million people, illustrate how environmental disasters compound poverty.\n\nIn summary, while inequality is a profound moral issue requiring sustained attention, climate change represents an existential challenge whose timeline does not permit delay. Were humanity to fail in addressing it, the consequences would render every other priority — including poverty reduction — increasingly unattainable.',
    keyVocabulary: ['preventable deaths', 'qualitatively different', 'irreversible', 'water security', 'compound poverty', 'existential challenge', 'unattainable'],
    bandTip: 'Quantitative claims (numbers, dates) strengthen credibility. Use them sparingly but precisely.'
  },

  /* ─── DISCUSSION + OPINION ─── */
  {
    id: 'essay003',
    question: 'Some people think that children should start school at the age of four or five, while others believe they should not begin formal schooling until age seven. Discuss both views and give your own opinion.',
    type: 'Discussion + Opinion',
    category: 'Education',
    keywords: ['early education', 'school starting age', 'child development'],
    bothSides: {
      forSide: ['Earlier exposure builds literacy and numeracy faster', 'Working parents need childcare', 'Structured learning provides social skills'],
      againstSide: ['Young children learn better through play', 'Long-term outcomes are stronger with later starts', 'Pressure can damage long-term motivation']
    },
    modelAnswer: 'The optimal age for children to begin formal schooling has long divided educators and parents. While some advocate starting around four or five, others maintain that seven is more developmentally appropriate. Although early starts have practical benefits, I believe the evidence favours a later beginning to formal education.\n\nThose in favour of earlier schooling argue that young children possess remarkable language acquisition abilities and that structured learning environments leverage this critical window. Countries such as the United Kingdom and Australia, where formal education begins at four or five, can demonstrate strong literacy outcomes. Furthermore, early enrolment provides essential childcare for working parents and exposes children to social environments beyond the family. From this perspective, formal schooling at four is both pedagogically sound and economically practical.\n\nHowever, those who favour a later start present equally compelling evidence. Research from Cambridge University and Finland — which delays formal schooling until seven — suggests that children educated through play in their early years develop superior long-term academic outcomes, alongside stronger emotional regulation and creativity. The premature introduction of formal instruction can inadvertently damage motivation, particularly in children whose cognitive development is naturally slower. The Finnish education system, which consistently ranks among the world\'s best, suggests that delay does not equal disadvantage.\n\nIn my view, the Finnish model is more aligned with how children genuinely learn at this age. While early formal schooling produces short-term gains in measurable skills, these advantages tend to fade by age ten or eleven, whereas the deeper benefits of play-based early childhood — curiosity, resilience, social ability — persist. To summarise, although both approaches have merit, I believe age seven offers a more sustainable foundation for lifelong learning.',
    keyVocabulary: ['language acquisition', 'critical window', 'pedagogically sound', 'play-based', 'emotional regulation', 'sustainable foundation', 'lifelong learning'],
    bandTip: 'In Discussion+Opinion, give equal weight to both views before stating your opinion. Specific examples (Cambridge, Finland) elevate the argument.'
  },

  {
    id: 'essay004',
    question: 'Some people believe that working from home has more advantages than working in an office, while others disagree. Discuss both views and give your own opinion.',
    type: 'Discussion + Opinion',
    category: 'Work',
    keywords: ['remote work', 'work from home', 'productivity', 'work-life balance'],
    bothSides: {
      forSide: ['Eliminates commute time', 'Greater flexibility and autonomy', 'Wider talent pool for employers'],
      againstSide: ['Reduces collaboration and innovation', 'Blurs work-life boundaries', 'Disadvantages junior employees']
    },
    modelAnswer: 'The shift towards remote work, accelerated dramatically by the pandemic, has sparked ongoing debate about whether home-based or office-based work better serves employees and employers. Both arrangements offer distinct advantages, and in my opinion, neither is universally superior — the optimal model depends on the role, the individual, and the career stage.\n\nProponents of working from home highlight several genuine advantages. The elimination of long commutes returns hours each week to employees, often translating into better health, more family time, and improved well-being. Flexibility allows workers to manage personal responsibilities — caring for children, ageing parents, or chronic illness — without sacrificing professional output. For employers, remote work expands the available talent pool beyond geographic constraints, enabling them to recruit globally rather than locally. Companies such as Atlassian, headquartered in Sydney, have embraced this model and reported sustained productivity.\n\nConversely, critics raise legitimate concerns about the office\'s irreplaceable functions. Spontaneous conversations and informal collaboration — the hallmarks of physical workplaces — generate creative breakthroughs that scheduled video calls rarely replicate. Junior employees, in particular, risk losing the mentorship and observational learning that office environments naturally provide. Furthermore, the boundaries between professional and personal life can erode dramatically when both share the same physical space, leading to burnout that paradoxically undermines the flexibility remote work was meant to deliver.\n\nWeighing both perspectives, I believe a hybrid model offers the most balanced solution. Knowledge workers benefit from focused remote days for deep work and in-office days for collaboration and mentorship. Junior staff likely require more in-person presence early in their careers, while established professionals can manage greater autonomy. To conclude, the future of work lies not in choosing between home and office, but in thoughtfully combining the strengths of both.',
    keyVocabulary: ['talent pool', 'spontaneous conversations', 'creative breakthroughs', 'observational learning', 'paradoxically undermines', 'hybrid model', 'knowledge workers'],
    bandTip: 'Modern, specific examples (Atlassian, pandemic context) signal real-world awareness. The hybrid conclusion shows nuanced thinking — band 8 hallmark.'
  },

  /* ─── DISCUSSION ONLY ─── */
  {
    id: 'essay005',
    question: 'Some people believe that museums should be free to all visitors, while others think they should charge an entry fee. Discuss both views.',
    type: 'Discussion only',
    category: 'Society / Culture',
    keywords: ['museums', 'public access', 'cultural funding'],
    bothSides: {
      forSide: ['Free museums ensure equal access', 'Cultural heritage should not depend on income', 'Funded through taxation, already paid for'],
      againstSide: ['Charges fund maintenance and exhibitions', 'Nominal fees rarely deter genuine visitors', 'Visitors value what they pay for']
    },
    modelAnswer: 'Whether museums should provide free entry or charge admission has been the subject of considerable cultural and political debate. Each position reflects different priorities concerning access, funding, and the role of cultural institutions in modern society.\n\nThose in favour of free admission argue that museums house humanity\'s collective heritage and therefore must remain accessible to all, regardless of financial means. Charging fees, however modest, can deter low-income families, school groups, and tourists on tight budgets — precisely the visitors who would most benefit from cultural exposure. The United Kingdom\'s national museums, including the British Museum and the National Gallery, have operated free of charge for decades, attracting tens of millions of visitors annually and demonstrating that mass access is achievable through public funding. Furthermore, supporters point out that museums are typically funded by taxpayers, who should not have to pay twice — once through taxes and again at the door.\n\nOn the other hand, those who advocate entry fees raise practical concerns about sustainability. Maintaining historic collections, mounting special exhibitions, and conducting ongoing research require substantial resources that public funding alone cannot reliably provide. Charging modest entry fees, particularly to international visitors who pay no domestic taxes, can supplement government grants and reduce reliance on volatile political budgets. The Louvre in Paris, despite charging admission, remains one of the most visited museums in the world, suggesting that genuine cultural enthusiasm is undeterred by reasonable fees. Additionally, some research suggests that visitors value experiences they pay for and engage more thoughtfully with paid exhibits.\n\nUltimately, both arguments reflect legitimate priorities — universal access on one hand, financial sustainability on the other — and the appropriate balance likely depends on each country\'s broader cultural funding landscape.',
    keyVocabulary: ['collective heritage', 'mass access', 'mounting special exhibitions', 'volatile political budgets', 'undeterred by', 'engage thoughtfully', 'cultural funding landscape'],
    bandTip: 'Discussion-only essays must NOT include personal opinion. End with a balanced acknowledgement that both views have merit. This is a frequent band 7 trap — candidates accidentally insert opinion.'
  },

  /* ─── PROBLEM-SOLUTION ─── */
  {
    id: 'essay006',
    question: 'Many cities around the world suffer from severe traffic congestion. What problems does this cause, and what solutions can be implemented?',
    type: 'Problem-Solution',
    category: 'Environment / Government',
    keywords: ['traffic congestion', 'urban planning', 'public transport'],
    bothSides: {
      forSide: ['Productivity loss + air pollution', 'Public transport investment + congestion pricing'],
      againstSide: []
    },
    modelAnswer: 'Traffic congestion has become a defining feature of urban life globally, with cities from Sydney to São Paulo losing billions of dollars annually to gridlock. The problems it creates are wide-ranging, but fortunately several proven solutions exist that, when applied together, can meaningfully reduce its impact.\n\nThe consequences of congestion extend far beyond inconvenience. Most directly, it produces enormous economic losses through reduced productivity — workers who spend two hours daily in traffic contribute less to their organisations and have less time for rest and family. According to OECD estimates, traffic-related productivity losses cost developed economies one to two per cent of GDP annually. Equally serious are the public health impacts. Vehicle emissions, particularly fine particulate matter from diesel engines, have been linked to respiratory disease, cardiovascular illness, and premature death. Children growing up near major roads face measurably worse health outcomes, creating a long-term burden on healthcare systems.\n\nFortunately, several effective solutions have been demonstrated in cities worldwide. The most fundamental is sustained investment in public transport infrastructure — high-frequency metros, light rail, and bus rapid transit systems that genuinely compete with private vehicle use. Singapore and Tokyo, for instance, have built networks so efficient that car ownership is the exception rather than the norm. A second proven measure is congestion pricing, in which drivers pay to enter the busiest areas during peak hours. London introduced this in 2003 and saw vehicle traffic fall by 30 per cent in the charging zone. Finally, city planning that integrates housing, employment, and amenities reduces the need to travel long distances in the first place.\n\nIn summary, while traffic congestion imposes serious economic and health costs, cities that combine public transport investment, congestion pricing, and integrated planning have demonstrated that significant improvement is achievable.',
    keyVocabulary: ['gridlock', 'fine particulate matter', 'measurably worse', 'bus rapid transit', 'congestion pricing', 'integrated planning'],
    bandTip: 'For Problem-Solution essays, make sure the solutions ADDRESS the specific problems. Generic solutions get penalised. Use real case studies (London congestion charge, Singapore transit).'
  },

  {
    id: 'essay007',
    question: 'Mental health issues among teenagers have risen significantly in recent years. What problems does this cause, and what can be done to address it?',
    type: 'Problem-Solution',
    category: 'Health / Society',
    keywords: ['teenage mental health', 'anxiety', 'social media', 'school support'],
    bothSides: {
      forSide: ['Academic decline + social withdrawal + future workforce concerns', 'School-based mental health support + reduced social media + family education'],
      againstSide: []
    },
    modelAnswer: 'The dramatic rise in mental health issues among teenagers — particularly anxiety and depression — has emerged as one of the defining concerns of contemporary education and parenting. The problems caused by this trend are substantial, but several practical solutions, if implemented with sustained commitment, can begin to reverse it.\n\nThe consequences of teenage mental ill-health are deeply troubling. Most immediately, affected students often withdraw socially, lose interest in school, and underperform academically — outcomes that limit their future opportunities. As a teacher, I have seen capable students fall behind not because of intellectual difficulty but because anxiety has become unmanageable. Beyond the individual, the broader social cost is significant: a generation entering adulthood with elevated mental health needs places considerable demands on healthcare systems and may struggle to participate fully in the workforce. The Australian Bureau of Statistics reports that one in seven young people now experience a mental health condition annually — a figure that has roughly doubled in two decades.\n\nFortunately, evidence-based solutions exist at multiple levels. Within schools, embedding mental health professionals — counsellors, psychologists — and integrating wellbeing education into the curriculum can identify struggling students early and equip all students with coping strategies. The NSW government\'s "Wellbeing Framework for Schools" represents a step in this direction. At the family and societal level, addressing the role of social media is essential. Studies, including those by Jonathan Haidt, have linked excessive smartphone use among adolescents to rising anxiety, and several countries are now restricting device access in schools. Finally, parental education about adolescent mental health helps families recognise warning signs rather than dismissing them as moodiness.\n\nIn conclusion, while teenage mental health represents a complex and growing crisis, schools, families, and policymakers all have meaningful interventions available. Addressing this issue requires coordinated effort, but the long-term cost of inaction is far greater.',
    keyVocabulary: ['unmanageable', 'evidence-based', 'embedding professionals', 'coping strategies', 'warning signs', 'coordinated effort', 'cost of inaction'],
    bandTip: 'Personal credibility (as a teacher) is fine if natural and sparing. Real statistics + named frameworks (NSW Wellbeing) signal authentic engagement with the topic.'
  },

  /* ─── TWO-PART QUESTION ─── */
  {
    id: 'essay008',
    question: 'In many countries, the proportion of older people is increasing. Why is this happening, and what effects does it have on society?',
    type: 'Two-part question',
    category: 'Society',
    keywords: ['ageing population', 'demographics', 'birth rates', 'social services'],
    bothSides: {
      forSide: ['Causes: longer life expectancy + declining birth rates', 'Effects: increased healthcare/pension burden + workforce shortages + intergenerational tension'],
      againstSide: []
    },
    modelAnswer: 'Ageing populations have become a defining demographic feature of many developed nations, from Japan and Germany to Australia. The reasons for this shift are well understood, and the effects on society are profound and far-reaching.\n\nThere are two principal causes of population ageing. The first is the dramatic extension of life expectancy made possible by advances in medicine, nutrition, and public health. People in developed countries today routinely live into their eighties — a longevity that was uncommon even fifty years ago. The second, and arguably more significant, cause is declining birth rates. As economies have developed, women have gained access to education and careers, while the cost of raising children has risen substantially. Consequently, families are choosing to have fewer children later in life. Japan\'s fertility rate, for instance, has dropped to around 1.3, well below the 2.1 needed to maintain a stable population. The combination of longer lives and fewer births inevitably skews the age distribution towards older citizens.\n\nThe social effects of this trend are wide-ranging. Most immediately, healthcare and pension systems face mounting financial pressure, as a smaller working-age population must support a growing dependent population. Countries like Italy and South Korea are already grappling with how to fund retirement promises made decades ago when demographics looked very different. Workforce shortages, particularly in sectors such as healthcare, construction, and aged care, have led many nations to reconsider immigration policies. Beyond economics, intergenerational tensions can emerge as younger workers shoulder higher tax burdens to support older citizens, while older citizens may feel marginalised in increasingly youth-oriented digital cultures.\n\nIn summary, ageing is driven by genuine progress in health and women\'s opportunities, yet it places considerable strain on economic and social systems. How nations navigate these challenges over coming decades will significantly shape their long-term prosperity.',
    keyVocabulary: ['longevity', 'fertility rate', 'skews the age distribution', 'mounting financial pressure', 'grappling with', 'shoulder higher tax burdens', 'youth-oriented'],
    bandTip: 'For Two-part questions, allocate one body paragraph to causes and another to effects. Specific country examples (Japan, Italy, Korea) are gold for ageing-population essays.'
  },

  {
    id: 'essay009',
    question: 'Many people prefer to shop online rather than in physical stores. Why is this the case, and is it a positive or negative development?',
    type: 'Two-part question',
    category: 'Technology / Society',
    keywords: ['online shopping', 'e-commerce', 'high street', 'consumer behaviour'],
    bothSides: {
      forSide: ['Reasons: convenience + price comparison + wider selection', 'Mostly positive but with significant trade-offs'],
      againstSide: []
    },
    modelAnswer: 'The growth of online shopping over the past two decades has fundamentally transformed how consumers make purchases. The reasons behind this shift are multifaceted, and while it has brought genuine benefits, the overall impact on society and high streets is more nuanced than is often assumed.\n\nThree main factors explain the popularity of online shopping. Most obviously, it offers unmatched convenience: consumers can browse products at any hour, from anywhere, without travelling to physical stores. For working parents, busy professionals, and people with mobility issues, this convenience is genuinely transformative. Second, online platforms enable instant price comparison across multiple retailers, empowering consumers to find the best deals — something previously requiring hours of in-person searching. Finally, online stores typically offer a far wider product selection than any physical store can stock. Specialist items, international brands, and niche categories are easily accessible online, particularly through global platforms like Amazon and Alibaba.\n\nWhether this development is positive or negative depends on which lens one applies. From a consumer perspective, it is largely positive — lower prices, greater choice, and time saved are concrete improvements to daily life. However, the broader effects raise concerns. Traditional high streets have suffered dramatically, with familiar shops closing across cities worldwide and leaving urban centres less vibrant. Local businesses, lacking the scale to compete on price or speed, often cannot survive against multinational online retailers. Environmental costs are also significant: same-day delivery, returns, and excessive packaging have substantially increased the carbon footprint of retail. Furthermore, as physical retail declines, communities lose informal gathering places, with implications for social connection and high street economic ecosystems.\n\nOn balance, I would describe online shopping as a positive innovation with substantial collateral costs. Maximising its benefits while mitigating its impact on local economies and the environment will require thoughtful regulation alongside consumer awareness.',
    keyVocabulary: ['multifaceted', 'unmatched convenience', 'genuinely transformative', 'instant price comparison', 'collateral costs', 'urban centres less vibrant', 'gathering places'],
    bandTip: 'For "is it positive or negative" questions, take a clear stance with qualification ("largely positive, but..."). The qualification is what separates band 8 from band 7.'
  },

  /* ─── ADVANTAGES / DISADVANTAGES ─── */
  {
    id: 'essay010',
    question: 'In many countries, more people are choosing to live alone rather than with others. Do the advantages of this trend outweigh the disadvantages?',
    type: 'Advantages/Disadvantages',
    category: 'Society',
    keywords: ['living alone', 'single households', 'urbanisation', 'social connection'],
    bothSides: {
      forSide: ['Advantages: independence + privacy + personal growth', 'Disadvantages: loneliness + financial cost + social isolation'],
      againstSide: []
    },
    modelAnswer: 'The rise of solo living has become one of the most striking demographic shifts in recent decades, with one-person households now representing nearly a third of all dwellings in countries like Sweden, Germany, and increasingly Australia. While this lifestyle offers genuine benefits, I would argue that its disadvantages — particularly regarding wellbeing — outweigh the advantages, especially when it becomes a long-term default rather than a deliberate choice.\n\nThe advantages of living alone are tangible and meaningful. Most obviously, it offers complete autonomy over one\'s living space, schedule, and lifestyle decisions. People who live alone can develop a clearer sense of personal identity, free from the compromises that shared living inevitably requires. Privacy enables deeper focus, whether for creative work, study, or simply rest, and many find solo living a powerful environment for self-discovery. For those emerging from difficult relationships or demanding family situations, the freedom can be genuinely restorative.\n\nHowever, the disadvantages are substantial and increasingly well-documented. The most pressing is loneliness, which research now classifies as a serious public health issue comparable to smoking in its long-term health effects. The UK appointed a Minister for Loneliness in 2018 in response to growing evidence of widespread isolation. Beyond emotional wellbeing, solo living is financially inefficient — single households consume more energy per person, pay rent without splitting costs, and miss out on the economies of scale that shared living provides. There are also subtler social costs: people who live alone for extended periods may develop reduced tolerance for compromise, which can complicate future cohabitation, including in relationships and old age.\n\nWeighing both, I believe the disadvantages, while not always immediately apparent, accumulate over time and ultimately outweigh the freedoms gained. To conclude, solo living can be deeply rewarding for short periods, but as a long-term lifestyle, its costs to mental health, finances, and social skills are too significant to dismiss.',
    keyVocabulary: ['demographic shifts', 'solo living', 'autonomy', 'self-discovery', 'restorative', 'economies of scale', 'subtler social costs', 'accumulate over time'],
    bandTip: 'For "advantages outweigh disadvantages" questions, take a clear stance and DEFEND IT. Don\'t hedge with "both have merit". Use precise scale-related language: "marginally outweigh", "significantly outweigh", "narrowly outweigh".'
  },

  /* ─── More OPINION ─── */
  {
    id: 'essay011',
    question: 'Some people think that the government should be responsible for protecting the environment, while others argue that individuals must take primary responsibility. To what extent do you agree with the first view?',
    type: 'Opinion (Agree/Disagree)',
    category: 'Environment / Government',
    keywords: ['environmental responsibility', 'government policy', 'individual action'],
    bothSides: {
      forSide: ['Government has scale and enforcement power', 'Individual action is insufficient alone', 'Markets fail to address environmental costs'],
      againstSide: ['Individual choices drive demand', 'Citizens elect governments', 'Behaviour change starts personally']
    },
    modelAnswer: 'The question of who bears primary responsibility for environmental protection — governments or individuals — is increasingly central to climate policy debates. While individual choices undoubtedly matter, I largely agree that governments must take the leading role, primarily because environmental challenges require coordinated action at a scale that individual effort cannot replicate.\n\nGovernments possess unique capacities that individuals lack. Most fundamentally, they can establish enforceable regulations — emissions standards, plastic bans, protected areas — that apply uniformly across society. Individual recycling efforts, however virtuous, cannot reduce industrial pollution from a power station; only government regulation can. Furthermore, governments can fund large-scale infrastructure such as renewable energy, public transport, and waste management systems that no individual could build. The European Union\'s emissions trading scheme, for instance, has driven significant industrial decarbonisation in ways that consumer choices alone never achieved.\n\nThose who emphasise individual responsibility have legitimate points. Markets respond to consumer demand, and shifts in personal behaviour — buying electric vehicles, reducing meat consumption, supporting sustainable brands — create incentives that can drive industrial change. Moreover, citizens elect governments, so meaningful long-term change requires public values aligned with environmental protection. There is genuine truth in the view that systemic change ultimately depends on cultural change.\n\nHowever, this view risks letting governments and corporations off the hook for problems they are uniquely placed to address. The framing of climate change as a personal responsibility was, notably, popularised by oil companies seeking to deflect attention from their role. While individual action matters and should be encouraged, expecting it to substitute for policy intervention is unrealistic given the scale, speed, and complexity of environmental crises.\n\nIn summary, although individuals have real power as consumers and citizens, government regulation remains the most effective lever for environmental protection. Both must work together, but governments must lead.',
    keyVocabulary: ['enforceable regulations', 'emissions trading scheme', 'industrial decarbonisation', 'consumer demand', 'systemic change', 'off the hook', 'lever for protection'],
    bandTip: 'Acknowledging the rhetorical history of an argument (oil companies popularising "personal responsibility") shows critical thinking — band 8 trait.'
  },

  /* ─── PROBLEM-SOLUTION ─── */
  {
    id: 'essay012',
    question: 'In many countries, traditional foods are being replaced by international fast food. What problems does this cause, and what can be done?',
    type: 'Problem-Solution',
    category: 'Health / Culture',
    keywords: ['fast food', 'traditional cuisine', 'health', 'cultural identity'],
    bothSides: {
      forSide: ['Health decline + cultural erosion + economic pressure on local producers', 'Education + regulation + supporting local food systems'],
      againstSide: []
    },
    modelAnswer: 'The displacement of traditional cuisines by international fast food chains has accelerated dramatically in recent decades, particularly in Asia, Africa, and Latin America. While fast food offers convenience and affordability, this dietary shift causes genuine problems that require coordinated responses across health, education, and economic policy.\n\nThe most pressing problem is public health. Fast food is typically high in saturated fat, sugar, salt, and refined carbohydrates, while being low in fibre and micronutrients. As traditional diets — often rich in vegetables, legumes, and whole grains — are replaced by burgers, fries, and sugary drinks, rates of obesity, type 2 diabetes, and cardiovascular disease have surged. China\'s diabetes rate, for example, has grown from less than one per cent in the 1980s to over twelve per cent today, paralleling the rise of Western fast food chains. A second, often overlooked, problem is cultural erosion. Traditional cuisines embody centuries of agricultural knowledge, regional identity, and social rituals. As young people gravitate towards globalised brands, this heritage risks being lost in a single generation. Finally, the economic impact on local producers can be severe, as small farms and traditional restaurants struggle to compete with multinational supply chains.\n\nFortunately, several effective measures can mitigate these effects. The first is comprehensive education — both in schools and through public health campaigns — about the long-term health consequences of fast food and the value of traditional eating patterns. Mexico, for instance, has introduced front-of-package warning labels on processed foods, helping consumers make informed choices. The second is regulation: taxing sugary drinks (as the UK and Mexico have done), restricting fast food advertising to children, and limiting fast food outlets near schools have demonstrably altered consumption patterns. Finally, supporting local food systems through farmers\' markets, school programmes featuring traditional cuisine, and cultural celebrations preserves both heritage and economic viability.\n\nIn conclusion, while the convenience of fast food is genuinely appealing, the costs to health, culture, and local economies are substantial. With educated populations, smart regulation, and active cultural preservation, communities can enjoy modern conveniences without sacrificing what makes their food traditions valuable.',
    keyVocabulary: ['displacement', 'refined carbohydrates', 'cultural erosion', 'agricultural knowledge', 'globalised brands', 'front-of-package warning', 'demonstrably altered'],
    bandTip: 'Multi-dimensional problems (health + culture + economy) demonstrate range. Make sure each problem connects to a specific solution — band 7 candidates often list problems and solutions separately without linking.'
  }

];
