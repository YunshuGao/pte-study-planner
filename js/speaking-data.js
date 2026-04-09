// =============================================================================
// PTE Academic Speaking Trainer — Complete Practice Data
// Target: 69 → 88 in 14 days
// =============================================================================

// -----------------------------------------------------------------------------
// 1. READ ALOUD TEXTS (60 items)
// -----------------------------------------------------------------------------
const READ_ALOUD_TEXTS = [
  {
    id: 'ra-001',
    text: 'Climate change represents one of the most significant challenges facing humanity in the twenty-first century. Rising global temperatures have led to increasingly severe weather events, including droughts, floods, and hurricanes. Scientists warn that without immediate and coordinated international action, the consequences for ecosystems and human populations will be catastrophic and potentially irreversible.',
    stressWords: ['significant', 'challenges', 'temperatures', 'severe', 'immediate', 'coordinated', 'catastrophic', 'irreversible'],
    wordCount: 52,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-002',
    text: 'Artificial intelligence has rapidly transformed numerous industries, from healthcare diagnostics to financial trading. Machine learning algorithms can now analyse vast datasets with remarkable speed and accuracy, often surpassing human capabilities in pattern recognition. However, ethical concerns regarding privacy, bias, and employment displacement continue to generate vigorous debate among policymakers and technologists alike.',
    stressWords: ['transformed', 'diagnostics', 'algorithms', 'analyse', 'surpassing', 'ethical', 'privacy', 'displacement'],
    wordCount: 53,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-003',
    text: 'The expansion of renewable energy sources has accelerated dramatically over the past decade. Solar and wind power installations have become increasingly cost-effective, making them viable alternatives to fossil fuels in many regions. Governments around the world are investing heavily in green infrastructure to reduce carbon emissions and achieve their climate targets by the middle of this century.',
    stressWords: ['expansion', 'renewable', 'accelerated', 'cost-effective', 'viable', 'alternatives', 'infrastructure', 'emissions'],
    wordCount: 57,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-004',
    text: 'Biodiversity loss is occurring at an unprecedented rate across the globe. Habitat destruction, pollution, and overexploitation of natural resources have pushed thousands of species towards extinction. Conservation biologists argue that preserving biological diversity is essential not only for ecological stability but also for maintaining the ecosystem services upon which human societies fundamentally depend.',
    stressWords: ['unprecedented', 'destruction', 'pollution', 'overexploitation', 'extinction', 'preserving', 'ecological', 'fundamentally'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'science'
  },
  {
    id: 'ra-005',
    text: 'Urbanisation continues to reshape the demographic landscape of developing nations. As rural populations migrate to cities in search of economic opportunities, metropolitan areas face mounting pressure on housing, transportation, and public services. Urban planners must develop innovative strategies to accommodate this growth while ensuring sustainable and equitable development for all residents.',
    stressWords: ['urbanisation', 'demographic', 'migrate', 'economic', 'metropolitan', 'innovative', 'sustainable', 'equitable'],
    wordCount: 51,
    difficulty: 'hard',
    topic: 'sociology'
  },
  {
    id: 'ra-006',
    text: 'Higher education institutions are increasingly adopting online learning platforms to reach broader student populations. Digital technologies enable universities to offer flexible courses that accommodate diverse schedules and learning preferences. Research suggests that blended learning approaches, which combine online and face-to-face instruction, can be as effective as traditional classroom teaching when properly implemented.',
    stressWords: ['institutions', 'adopting', 'platforms', 'flexible', 'diverse', 'blended', 'effective', 'implemented'],
    wordCount: 51,
    difficulty: 'medium',
    topic: 'education'
  },
  {
    id: 'ra-007',
    text: 'Global trade patterns have shifted considerably following recent geopolitical developments. Supply chain disruptions during the pandemic exposed vulnerabilities in international commerce that many economists had previously underestimated. Countries are now reassessing their trade relationships and exploring strategies to diversify supply sources and strengthen domestic manufacturing capabilities.',
    stressWords: ['shifted', 'geopolitical', 'disruptions', 'vulnerabilities', 'commerce', 'reassessing', 'diversify', 'manufacturing'],
    wordCount: 47,
    difficulty: 'hard',
    topic: 'economics'
  },
  {
    id: 'ra-008',
    text: 'The study of human psychology has evolved significantly since its early beginnings in the nineteenth century. Modern psychological research employs rigorous experimental methods and advanced brain imaging technology to understand the complex mechanisms underlying human behaviour. Cognitive psychology, in particular, has provided valuable insights into memory, perception, decision-making, and language processing.',
    stressWords: ['evolved', 'significantly', 'rigorous', 'experimental', 'mechanisms', 'behaviour', 'cognitive', 'perception'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'psychology'
  },
  {
    id: 'ra-009',
    text: 'Public health systems worldwide have been tested by the emergence of new infectious diseases. Vaccination programmes remain the most effective tool for preventing widespread illness and reducing mortality rates. International cooperation and information sharing between healthcare agencies are critical to detecting outbreaks early and mounting rapid responses to protect vulnerable populations.',
    stressWords: ['emergence', 'infectious', 'vaccination', 'effective', 'preventing', 'mortality', 'cooperation', 'vulnerable'],
    wordCount: 50,
    difficulty: 'medium',
    topic: 'health'
  },
  {
    id: 'ra-010',
    text: 'The ancient civilisations of Mesopotamia made remarkable contributions to human knowledge. They developed writing systems, mathematical concepts, and agricultural techniques that formed the foundation of subsequent cultural achievements. Historians regard these early societies as pivotal in the transition from nomadic lifestyles to settled communities, which ultimately enabled the growth of complex social structures.',
    stressWords: ['civilisations', 'remarkable', 'contributions', 'mathematical', 'foundation', 'pivotal', 'transition', 'complex'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'history'
  },
  {
    id: 'ra-011',
    text: 'Water scarcity has become a pressing global concern, affecting billions of people across multiple continents. Agricultural irrigation accounts for approximately seventy per cent of freshwater consumption worldwide, creating significant competition between farming and urban water needs. Innovative water management strategies, including desalination and wastewater recycling, offer promising solutions to this growing crisis.',
    stressWords: ['scarcity', 'pressing', 'irrigation', 'approximately', 'consumption', 'competition', 'desalination', 'recycling'],
    wordCount: 51,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-012',
    text: 'Neuroscience research has revealed that the human brain continues to develop well into early adulthood. The prefrontal cortex, responsible for decision-making and impulse control, does not fully mature until the mid-twenties. This finding has important implications for education policy, juvenile justice systems, and our understanding of adolescent risk-taking behaviour.',
    stressWords: ['neuroscience', 'revealed', 'prefrontal', 'cortex', 'decision-making', 'mature', 'implications', 'adolescent'],
    wordCount: 50,
    difficulty: 'hard',
    topic: 'science'
  },
  {
    id: 'ra-013',
    text: 'The digital economy has created new forms of employment that were unimaginable just two decades ago. Freelance platforms, the gig economy, and remote working arrangements have fundamentally altered the relationship between employers and workers. Economists debate whether these changes represent greater flexibility and opportunity or contribute to increased job insecurity and reduced worker protections.',
    stressWords: ['digital', 'unimaginable', 'freelance', 'fundamentally', 'altered', 'flexibility', 'insecurity', 'protections'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'economics'
  },
  {
    id: 'ra-014',
    text: 'Space exploration has entered an exciting new phase with the involvement of private companies alongside government agencies. Reusable rocket technology has dramatically reduced launch costs, making space more accessible than ever before. Scientists anticipate that within the coming decades, permanent human settlements on the Moon and Mars could transition from science fiction to reality.',
    stressWords: ['exploration', 'involvement', 'reusable', 'dramatically', 'reduced', 'accessible', 'permanent', 'settlements'],
    wordCount: 52,
    difficulty: 'medium',
    topic: 'science'
  },
  {
    id: 'ra-015',
    text: 'Social media platforms have profoundly influenced political discourse and public opinion formation. The rapid spread of information through digital networks enables citizens to engage with political issues in unprecedented ways. Critics argue, however, that algorithmic content curation creates filter bubbles that reinforce existing beliefs and contribute to increasing political polarisation within democratic societies.',
    stressWords: ['profoundly', 'influenced', 'discourse', 'unprecedented', 'algorithmic', 'curation', 'reinforce', 'polarisation'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'sociology'
  },
  {
    id: 'ra-016',
    text: 'The global population is expected to reach approximately ten billion by the middle of this century. This growth will place enormous demands on food production systems, requiring significant improvements in agricultural efficiency. Experts suggest that sustainable farming practices, combined with technological innovation, will be essential to feeding the world without further degrading the natural environment.',
    stressWords: ['population', 'approximately', 'enormous', 'demands', 'production', 'efficiency', 'sustainable', 'degrading'],
    wordCount: 54,
    difficulty: 'medium',
    topic: 'science'
  },
  {
    id: 'ra-017',
    text: 'Mental health awareness has grown considerably in recent years, leading to reduced stigma and greater access to treatment. Research consistently demonstrates that early intervention for conditions such as anxiety and depression produces significantly better outcomes. Employers are increasingly recognising the importance of workplace mental health programmes in maintaining productivity and employee wellbeing.',
    stressWords: ['awareness', 'considerably', 'stigma', 'intervention', 'anxiety', 'depression', 'significantly', 'productivity'],
    wordCount: 50,
    difficulty: 'medium',
    topic: 'health'
  },
  {
    id: 'ra-018',
    text: 'Archaeological discoveries continue to reshape our understanding of ancient human migration patterns. Advanced genetic analysis techniques now allow researchers to trace population movements across continents over thousands of years. These findings have challenged previously held assumptions about the origins and spread of early civilisations, revealing a far more complex picture of human history.',
    stressWords: ['archaeological', 'discoveries', 'migration', 'genetic', 'researchers', 'continents', 'assumptions', 'civilisations'],
    wordCount: 51,
    difficulty: 'hard',
    topic: 'history'
  },
  {
    id: 'ra-019',
    text: 'The transition to electric vehicles is accelerating as battery technology improves and costs decline. Major automotive manufacturers have announced plans to phase out internal combustion engines within the next two decades. However, challenges remain regarding charging infrastructure, electricity grid capacity, and the environmental impact of battery production and disposal.',
    stressWords: ['transition', 'electric', 'accelerating', 'manufacturers', 'combustion', 'infrastructure', 'capacity', 'environmental'],
    wordCount: 49,
    difficulty: 'medium',
    topic: 'technology'
  },
  {
    id: 'ra-020',
    text: 'Income inequality has widened substantially in many developed nations over the past four decades. The concentration of wealth among a small proportion of the population has raised concerns about social cohesion and political stability. Proposed solutions range from progressive taxation and minimum wage increases to universal basic income programmes, though consensus remains elusive among economists.',
    stressWords: ['inequality', 'substantially', 'concentration', 'proportion', 'cohesion', 'stability', 'progressive', 'consensus'],
    wordCount: 54,
    difficulty: 'hard',
    topic: 'economics'
  },
  {
    id: 'ra-021',
    text: 'Coral reefs support approximately twenty-five per cent of all marine species despite covering less than one per cent of the ocean floor. Rising sea temperatures and ocean acidification pose severe threats to these delicate ecosystems. Marine biologists emphasise that protecting coral reefs is crucial for maintaining ocean biodiversity and supporting the livelihoods of coastal communities worldwide.',
    stressWords: ['approximately', 'marine', 'species', 'acidification', 'severe', 'delicate', 'ecosystems', 'biodiversity'],
    wordCount: 55,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-022',
    text: 'Early childhood education plays a critical role in cognitive and social development. Studies have shown that children who participate in quality preschool programmes demonstrate better academic performance and higher graduation rates in later years. Investment in early learning is therefore considered one of the most cost-effective strategies for reducing educational inequality across socioeconomic groups.',
    stressWords: ['critical', 'cognitive', 'participate', 'demonstrate', 'academic', 'performance', 'investment', 'inequality'],
    wordCount: 52,
    difficulty: 'medium',
    topic: 'education'
  },
  {
    id: 'ra-023',
    text: 'Quantum computing represents a paradigm shift in computational capability that could revolutionise multiple fields. Unlike classical computers that process information in binary digits, quantum computers utilise quantum mechanical phenomena to perform calculations at extraordinary speeds. While still in early stages of development, this technology holds enormous potential for drug discovery, cryptography, and complex systems modelling.',
    stressWords: ['quantum', 'paradigm', 'revolutionise', 'mechanical', 'phenomena', 'extraordinary', 'cryptography', 'modelling'],
    wordCount: 53,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-024',
    text: 'The Industrial Revolution fundamentally transformed European societies during the eighteenth and nineteenth centuries. Mechanised production replaced traditional craft industries, leading to massive urban migration and the emergence of a new working class. Historians continue to debate whether the rapid industrialisation ultimately improved or diminished the quality of life for ordinary citizens during this period.',
    stressWords: ['fundamentally', 'transformed', 'mechanised', 'replaced', 'migration', 'emergence', 'industrialisation', 'diminished'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'history'
  },
  {
    id: 'ra-025',
    text: 'Antibiotic resistance has been identified by the World Health Organisation as one of the greatest threats to global health. The overuse of antibiotics in both human medicine and agriculture has accelerated the evolution of resistant bacterial strains. Without effective antibiotics, routine surgical procedures and cancer treatments could become significantly more dangerous in the coming decades.',
    stressWords: ['resistance', 'identified', 'Organisation', 'overuse', 'accelerated', 'evolution', 'resistant', 'significantly'],
    wordCount: 53,
    difficulty: 'hard',
    topic: 'health'
  },
  {
    id: 'ra-026',
    text: 'The role of sleep in maintaining physical and cognitive health is increasingly well understood by medical researchers. Studies indicate that chronic sleep deprivation impairs memory consolidation, weakens immune function, and increases the risk of cardiovascular disease. Health professionals recommend that adults obtain between seven and nine hours of quality sleep each night for optimal wellbeing.',
    stressWords: ['cognitive', 'researchers', 'chronic', 'deprivation', 'consolidation', 'immune', 'cardiovascular', 'optimal'],
    wordCount: 54,
    difficulty: 'medium',
    topic: 'health'
  },
  {
    id: 'ra-027',
    text: 'International migration has become a defining feature of the contemporary world, with more people living outside their country of birth than at any previous point in history. Migration flows are driven by economic disparities, political instability, and environmental factors. Managing migration effectively requires balancing humanitarian obligations with domestic economic and security considerations.',
    stressWords: ['migration', 'defining', 'contemporary', 'disparities', 'instability', 'environmental', 'humanitarian', 'obligations'],
    wordCount: 51,
    difficulty: 'hard',
    topic: 'sociology'
  },
  {
    id: 'ra-028',
    text: 'Deforestation in tropical regions continues at an alarming rate despite international conservation efforts. The Amazon rainforest alone has lost an area equivalent to several European countries over the past fifty years. Scientists warn that continued forest loss not only threatens biodiversity but also reduces the planet\'s capacity to absorb carbon dioxide from the atmosphere.',
    stressWords: ['deforestation', 'tropical', 'alarming', 'conservation', 'equivalent', 'biodiversity', 'capacity', 'atmosphere'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-029',
    text: 'Behavioural economics challenges the traditional assumption that individuals always make rational decisions. Research by psychologists and economists has demonstrated that cognitive biases systematically influence financial choices and consumer behaviour. Understanding these biases has practical applications in policy design, marketing strategies, and personal financial planning.',
    stressWords: ['behavioural', 'challenges', 'assumption', 'rational', 'demonstrated', 'cognitive', 'biases', 'systematically'],
    wordCount: 44,
    difficulty: 'hard',
    topic: 'economics'
  },
  {
    id: 'ra-030',
    text: 'The development of autonomous vehicles promises to transform urban transportation systems within the next few decades. Self-driving technology could reduce traffic accidents, lower emissions, and improve mobility for elderly and disabled populations. However, significant regulatory, ethical, and technical challenges must be addressed before widespread adoption can occur safely and effectively.',
    stressWords: ['autonomous', 'transform', 'transportation', 'technology', 'accidents', 'emissions', 'regulatory', 'adoption'],
    wordCount: 49,
    difficulty: 'medium',
    topic: 'technology'
  },
  {
    id: 'ra-031',
    text: 'Language acquisition in young children occurs through a remarkably efficient natural process. By the age of five, most children have mastered the fundamental grammatical structures of their native language without formal instruction. Linguists believe that this rapid acquisition is supported by an innate capacity for language learning that is unique to the human species.',
    stressWords: ['acquisition', 'remarkably', 'efficient', 'mastered', 'fundamental', 'grammatical', 'innate', 'capacity'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'psychology'
  },
  {
    id: 'ra-032',
    text: 'The oceans play a vital role in regulating the Earth\'s climate by absorbing heat and carbon dioxide from the atmosphere. Marine ecosystems also provide essential food sources for billions of people worldwide. Scientists are increasingly concerned that ocean warming, acidification, and plastic pollution are threatening the delicate balance of these critical ecological systems.',
    stressWords: ['vital', 'regulating', 'absorbing', 'ecosystems', 'essential', 'acidification', 'pollution', 'ecological'],
    wordCount: 52,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-033',
    text: 'The concept of lifelong learning has gained prominence in response to the rapidly changing demands of the modern labour market. Workers are increasingly expected to acquire new skills throughout their careers to remain competitive. Educational institutions and employers must collaborate to provide accessible and relevant training programmes that support continuous professional development.',
    stressWords: ['lifelong', 'prominence', 'demands', 'labour', 'acquire', 'competitive', 'collaborate', 'accessible'],
    wordCount: 50,
    difficulty: 'medium',
    topic: 'education'
  },
  {
    id: 'ra-034',
    text: 'Genetic engineering technologies, particularly CRISPR gene editing, have opened extraordinary possibilities in medicine and agriculture. Scientists can now precisely modify DNA sequences to correct genetic disorders and develop disease-resistant crop varieties. Nevertheless, the ethical implications of altering the human genome remain a subject of intense scholarly and public debate worldwide.',
    stressWords: ['genetic', 'engineering', 'extraordinary', 'precisely', 'modify', 'disorders', 'ethical', 'implications'],
    wordCount: 49,
    difficulty: 'hard',
    topic: 'science'
  },
  {
    id: 'ra-035',
    text: 'Tourism is a major contributor to the global economy, generating employment and revenue for communities around the world. However, the rapid growth of mass tourism has raised concerns about environmental degradation, cultural erosion, and overcrowding in popular destinations. Sustainable tourism practices aim to balance economic benefits with the preservation of natural and cultural heritage.',
    stressWords: ['contributor', 'generating', 'employment', 'revenue', 'degradation', 'erosion', 'sustainable', 'preservation'],
    wordCount: 52,
    difficulty: 'medium',
    topic: 'economics'
  },
  {
    id: 'ra-036',
    text: 'The human microbiome, comprising trillions of microorganisms living within the body, has emerged as a significant area of medical research. Studies suggest that gut bacteria influence not only digestive health but also immune function, mental health, and metabolic processes. This growing field of study could lead to revolutionary approaches in treating a wide range of chronic diseases.',
    stressWords: ['microbiome', 'comprising', 'trillions', 'microorganisms', 'influence', 'digestive', 'immune', 'revolutionary'],
    wordCount: 55,
    difficulty: 'hard',
    topic: 'health'
  },
  {
    id: 'ra-037',
    text: 'Democracy faces numerous challenges in the contemporary era, including declining voter participation and growing public distrust of political institutions. The spread of misinformation through social media platforms has further complicated the relationship between citizens and their elected representatives. Strengthening democratic processes requires investing in civic education and ensuring transparency in government operations.',
    stressWords: ['democracy', 'declining', 'participation', 'distrust', 'misinformation', 'complicated', 'civic', 'transparency'],
    wordCount: 50,
    difficulty: 'hard',
    topic: 'sociology'
  },
  {
    id: 'ra-038',
    text: 'The discovery of penicillin by Alexander Fleming in nineteen twenty-eight marked a turning point in the history of medicine. Antibiotics transformed the treatment of bacterial infections, saving countless millions of lives throughout the twentieth century. This breakthrough demonstrated how accidental observations in scientific research can lead to discoveries with profound and lasting impact on humanity.',
    stressWords: ['discovery', 'penicillin', 'transformed', 'treatment', 'bacterial', 'infections', 'breakthrough', 'profound'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'history'
  },
  {
    id: 'ra-039',
    text: 'Emotional intelligence, defined as the ability to recognise, understand, and manage one\'s own emotions and those of others, has become a valued competency in modern workplaces. Research indicates that individuals with high emotional intelligence tend to be more effective leaders and collaborators. Many organisations now incorporate emotional intelligence assessments into their recruitment and professional development processes.',
    stressWords: ['emotional', 'intelligence', 'recognise', 'competency', 'effective', 'leaders', 'collaborators', 'assessments'],
    wordCount: 54,
    difficulty: 'medium',
    topic: 'psychology'
  },
  {
    id: 'ra-040',
    text: 'The advancement of three-dimensional printing technology has disrupted traditional manufacturing processes across numerous industries. Complex components that previously required multiple production stages can now be fabricated in a single step, reducing both costs and waste. Experts predict that additive manufacturing will continue to expand its applications in aerospace, medical devices, construction, and consumer products.',
    stressWords: ['advancement', 'three-dimensional', 'disrupted', 'manufacturing', 'fabricated', 'reducing', 'additive', 'applications'],
    wordCount: 51,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-041',
    text: 'The regulation of artificial intelligence has become a pressing concern for governments worldwide. The European Union introduced the AI Act in 2024, establishing a comprehensive framework that classifies AI systems according to risk levels. Critics argue that excessive regulation could stifle innovation, while proponents maintain that safeguards are essential to protect citizens from algorithmic discrimination and surveillance.',
    stressWords: ['regulation', 'artificial', 'comprehensive', 'classifies', 'innovation', 'safeguards', 'algorithmic', 'discrimination'],
    wordCount: 55,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-042',
    text: 'Climate adaptation strategies are gaining prominence as communities recognise that some degree of environmental change is now unavoidable. Coastal cities are investing in sea walls and flood barriers, while agricultural regions are developing drought-resistant crop varieties. These measures complement ongoing mitigation efforts and reflect a pragmatic approach to managing the consequences of a warming planet.',
    stressWords: ['adaptation', 'prominence', 'unavoidable', 'investing', 'drought-resistant', 'complement', 'mitigation', 'pragmatic'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'environment'
  },
  {
    id: 'ra-043',
    text: 'Space exploration has entered a new era characterised by increased private sector involvement. Companies such as SpaceX and Blue Origin have significantly reduced the cost of launching payloads into orbit. This commercial competition has accelerated technological development and renewed public interest in missions to the Moon, Mars, and beyond.',
    stressWords: ['exploration', 'characterised', 'involvement', 'significantly', 'payloads', 'commercial', 'accelerated', 'missions'],
    wordCount: 48,
    difficulty: 'medium',
    topic: 'science'
  },
  {
    id: 'ra-044',
    text: 'Digital health technologies are transforming the delivery of medical services in both developed and developing nations. Telemedicine platforms allow patients to consult with specialists remotely, reducing the need for travel and improving access in rural areas. Wearable devices that monitor heart rate, blood glucose, and sleep patterns provide clinicians with continuous data to inform treatment decisions.',
    stressWords: ['transforming', 'delivery', 'telemedicine', 'specialists', 'remotely', 'wearable', 'continuous', 'clinicians'],
    wordCount: 54,
    difficulty: 'hard',
    topic: 'health'
  },
  {
    id: 'ra-045',
    text: 'Demographic shifts in many industrialised countries present significant economic challenges. Ageing populations and declining birth rates are reducing the proportion of working-age citizens who support social welfare systems. Policymakers are exploring options such as immigration reform, retirement age adjustments, and automation to address potential labour shortages in critical sectors.',
    stressWords: ['demographic', 'industrialised', 'proportion', 'welfare', 'policymakers', 'immigration', 'adjustments', 'automation'],
    wordCount: 47,
    difficulty: 'hard',
    topic: 'sociology'
  },
  {
    id: 'ra-046',
    text: 'Urban planning in the twenty-first century increasingly prioritises the concept of the fifteen-minute city. This model proposes that all essential amenities, including workplaces, schools, healthcare facilities, and recreational spaces, should be accessible within a short walk or bicycle ride. Advocates argue that such designs reduce carbon emissions, improve public health, and strengthen community connections.',
    stressWords: ['prioritises', 'concept', 'amenities', 'accessible', 'recreational', 'advocates', 'emissions', 'strengthen'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'sociology'
  },
  {
    id: 'ra-047',
    text: 'The global transition from fossil fuels to renewable energy sources has accelerated dramatically following the energy crises of recent years. Governments are investing unprecedented sums in solar farms, offshore wind installations, and battery storage infrastructure. While the pace of adoption varies significantly between regions, the economic case for clean energy has become increasingly compelling.',
    stressWords: ['transition', 'accelerated', 'dramatically', 'unprecedented', 'offshore', 'infrastructure', 'adoption', 'compelling'],
    wordCount: 51,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-048',
    text: 'Educational technology has undergone rapid evolution since the pandemic accelerated the adoption of online learning platforms. Artificial intelligence is now being integrated into classrooms to provide personalised learning pathways tailored to individual student needs. However, researchers caution that technology should supplement rather than replace effective human instruction and meaningful student-teacher interaction.',
    stressWords: ['undergone', 'evolution', 'accelerated', 'integrated', 'personalised', 'tailored', 'supplement', 'meaningful'],
    wordCount: 49,
    difficulty: 'hard',
    topic: 'education'
  },
  {
    id: 'ra-049',
    text: 'Biodiversity conservation efforts have intensified following the Kunming-Montreal Global Biodiversity Framework adopted in late 2022. The agreement commits participating nations to protecting thirty per cent of the planet\'s land and ocean areas by 2030. Scientists emphasise that preserving genetic diversity within ecosystems is crucial for maintaining resilience against disease, climate change, and other environmental pressures.',
    stressWords: ['conservation', 'intensified', 'framework', 'commits', 'participating', 'genetic', 'resilience', 'environmental'],
    wordCount: 53,
    difficulty: 'hard',
    topic: 'environment'
  },
  {
    id: 'ra-050',
    text: 'Post-pandemic economic recovery has been uneven across different sectors and regions of the global economy. While technology and healthcare industries have thrived, hospitality and traditional retail sectors continue to face significant challenges. Economists note that inflationary pressures, supply chain realignment, and changing consumer behaviour patterns are reshaping the fundamental structure of international commerce.',
    stressWords: ['pandemic', 'recovery', 'thrived', 'hospitality', 'inflationary', 'realignment', 'fundamental', 'commerce'],
    wordCount: 50,
    difficulty: 'hard',
    topic: 'economics'
  },
  {
    id: 'ra-051',
    text: 'Large language models have sparked widespread debate about the future of knowledge work and creative industries. These systems can generate text, translate languages, and summarise complex documents with impressive fluency. Nevertheless, concerns about accuracy, intellectual property, and the potential for misuse remain central to discussions around the responsible deployment of generative artificial intelligence.',
    stressWords: ['widespread', 'creative', 'generate', 'summarise', 'fluency', 'intellectual', 'deployment', 'generative'],
    wordCount: 51,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-052',
    text: 'Water scarcity is emerging as one of the most critical resource challenges of the coming decades. Population growth, industrial demand, and changing rainfall patterns are placing enormous strain on freshwater supplies in many regions. Desalination technology and water recycling programmes offer partial solutions, but experts stress that conservation and efficient usage must remain the highest priorities.',
    stressWords: ['scarcity', 'emerging', 'critical', 'enormous', 'freshwater', 'desalination', 'recycling', 'conservation'],
    wordCount: 54,
    difficulty: 'medium',
    topic: 'environment'
  },
  {
    id: 'ra-053',
    text: 'The rise of remote and hybrid working arrangements has fundamentally altered the relationship between employees and their workplaces. Many organisations now offer flexible schedules that allow staff to divide their time between home and office environments. Research suggests that while remote work can enhance productivity and job satisfaction, it may also diminish opportunities for spontaneous collaboration and mentorship.',
    stressWords: ['fundamentally', 'altered', 'organisations', 'flexible', 'environments', 'enhance', 'diminish', 'spontaneous'],
    wordCount: 55,
    difficulty: 'medium',
    topic: 'sociology'
  },
  {
    id: 'ra-054',
    text: 'Nuclear fusion research has achieved several important milestones in recent years, raising hopes for a virtually limitless source of clean energy. Scientists at the National Ignition Facility demonstrated net energy gain from a fusion reaction for the first time in late 2022. Although commercial fusion power remains decades away, continued investment in this technology could ultimately transform the global energy landscape.',
    stressWords: ['fusion', 'milestones', 'limitless', 'demonstrated', 'reaction', 'commercial', 'investment', 'transform'],
    wordCount: 57,
    difficulty: 'hard',
    topic: 'science'
  },
  {
    id: 'ra-055',
    text: 'Mental health awareness has increased substantially across educational institutions and corporate environments. Employers are recognising that providing psychological support services contributes to improved staff retention, reduced absenteeism, and higher overall productivity. Schools are similarly implementing wellbeing programmes designed to build emotional resilience and equip young people with strategies for managing stress and anxiety.',
    stressWords: ['substantially', 'institutions', 'psychological', 'retention', 'absenteeism', 'implementing', 'resilience', 'strategies'],
    wordCount: 49,
    difficulty: 'hard',
    topic: 'health'
  },
  {
    id: 'ra-056',
    text: 'Autonomous vehicles represent a significant technological advancement that could reshape urban transportation systems within the next decade. Self-driving cars equipped with sensors, cameras, and artificial intelligence can navigate complex traffic conditions with increasing reliability. Proponents argue that widespread adoption would reduce road accidents, ease congestion, and improve mobility for elderly and disabled individuals.',
    stressWords: ['autonomous', 'advancement', 'reshape', 'equipped', 'navigate', 'reliability', 'widespread', 'congestion'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-057',
    text: 'The circular economy model challenges the traditional linear approach of producing, consuming, and discarding goods. Instead, it promotes designing products for longevity, reuse, and recyclability, thereby minimising waste and reducing demand for raw materials. Businesses that adopt circular principles often discover cost savings alongside environmental benefits, creating a compelling case for systemic change.',
    stressWords: ['circular', 'challenges', 'consuming', 'discarding', 'longevity', 'recyclability', 'minimising', 'systemic'],
    wordCount: 50,
    difficulty: 'medium',
    topic: 'economics'
  },
  {
    id: 'ra-058',
    text: 'Quantum computing has progressed from a theoretical curiosity to a technology with practical applications in cryptography, drug discovery, and materials science. Unlike classical computers that process information in binary bits, quantum computers use qubits that can exist in multiple states simultaneously. This fundamental difference enables them to solve certain complex problems exponentially faster than conventional machines.',
    stressWords: ['quantum', 'progressed', 'theoretical', 'cryptography', 'binary', 'qubits', 'simultaneously', 'exponentially'],
    wordCount: 52,
    difficulty: 'hard',
    topic: 'technology'
  },
  {
    id: 'ra-059',
    text: 'Indigenous knowledge systems are increasingly recognised as valuable sources of insight for addressing contemporary environmental challenges. Traditional ecological practices developed over thousands of years often align with principles of sustainability and biodiversity preservation. Collaborations between indigenous communities and scientific researchers have yielded innovative approaches to land management, water conservation, and climate resilience.',
    stressWords: ['indigenous', 'recognised', 'contemporary', 'ecological', 'sustainability', 'preservation', 'collaborations', 'innovative'],
    wordCount: 48,
    difficulty: 'hard',
    topic: 'environment'
  },
  {
    id: 'ra-060',
    text: 'The global food system faces mounting pressure to feed a growing population while reducing its environmental footprint. Agricultural innovations such as vertical farming, precision agriculture, and lab-grown proteins offer promising alternatives to conventional practices. Experts argue that a combination of technological solutions and dietary shifts will be necessary to achieve food security without further degrading natural ecosystems.',
    stressWords: ['mounting', 'environmental', 'footprint', 'innovations', 'precision', 'alternatives', 'dietary', 'degrading'],
    wordCount: 53,
    difficulty: 'medium',
    topic: 'science'
  }
];

// -----------------------------------------------------------------------------
// 2. REPEAT SENTENCES (120 items)
// -----------------------------------------------------------------------------
const REPEAT_SENTENCES = [
  // EASY (8-10 words) — 27 items
  { id: 'rs-001', text: 'The university library closes at ten o\'clock tonight.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-002', text: 'Students must submit their assignments before the deadline.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-003', text: 'The lecture will be held in the main auditorium.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-004', text: 'Please remember to bring your student identification card.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-005', text: 'The exam results will be published next Friday afternoon.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-006', text: 'You can borrow up to five books at a time.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-007', text: 'The campus bookshop is located near the main entrance.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-008', text: 'All tutorials have been moved to the new building.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-009', text: 'The registration period ends at the end of this week.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-010', text: 'Group projects are worth thirty per cent of the grade.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-011', text: 'The professor will hold office hours on Wednesday morning.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-012', text: 'International students can apply for financial assistance online.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-013', text: 'The seminar room has been reserved for the conference.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-014', text: 'Please make sure to turn off your mobile phones.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-015', text: 'The canteen offers a variety of vegetarian meal options.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-016', text: 'Classes will resume after the mid-semester break on Monday.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-017', text: 'The bus stop is right outside the university gates.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-018', text: 'Students are expected to attend all scheduled laboratory sessions.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-019', text: 'The parking permit must be displayed on your dashboard.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-020', text: 'You need to complete the online enrolment form first.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-021', text: 'The research paper is due at the end of term.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-022', text: 'There are several computer labs available for student use.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-023', text: 'The scholarship application requires two academic references.', wordCount: 7, difficulty: 'easy' },
  { id: 'rs-024', text: 'Morning lectures start at nine and finish at noon.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-025', text: 'The student union organises social events every weekend.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-026', text: 'Library resources can be accessed through the online portal.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-027', text: 'The department head will address students at the orientation.', wordCount: 9, difficulty: 'easy' },

  // MEDIUM (11-13 words) — 27 items
  { id: 'rs-028', text: 'The university library has recently extended its opening hours for students during exams.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-029', text: 'Climate change is considered one of the most pressing issues of our time.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-030', text: 'The research team published their findings in a leading international scientific journal.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-031', text: 'Students who participate in group discussions tend to achieve higher grades overall.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-032', text: 'The new laboratory equipment will enable more accurate analysis of chemical compounds.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-033', text: 'Economic growth in developing countries has been driven primarily by industrial expansion.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-034', text: 'The government has introduced new regulations to reduce carbon emissions from factories.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-035', text: 'Archaeological evidence suggests that early humans migrated out of Africa approximately two million years ago.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-036', text: 'The presentation should include a brief overview of the methodology and key findings.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-037', text: 'Effective communication skills are essential for success in both academic and professional settings.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-038', text: 'The museum exhibition features artefacts from several ancient Mediterranean civilisations.', wordCount: 9, difficulty: 'medium' },
  { id: 'rs-039', text: 'Renewable energy sources now account for a significant proportion of electricity generation worldwide.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-040', text: 'The professor emphasised the importance of critical thinking in academic writing and research.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-041', text: 'Public transportation systems in major cities are being modernised to reduce environmental impact.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-042', text: 'The survey results indicate that most respondents support increased funding for education.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-043', text: 'Technological innovation has fundamentally changed the way people communicate and access information.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-044', text: 'The biology department offers a specialised course in marine ecology and conservation.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-045', text: 'Historical analysis requires careful examination of primary sources and contextual evidence.', wordCount: 10, difficulty: 'medium' },
  { id: 'rs-046', text: 'The conference attracted researchers from more than forty countries around the world.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-047', text: 'Access to clean drinking water remains a major challenge in many developing regions.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-048', text: 'The study revealed a strong correlation between physical exercise and improved mental health.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-049', text: 'Universities are increasingly offering interdisciplinary programmes that combine science and humanities subjects.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-050', text: 'The documentary explores the social and economic consequences of rapid industrialisation.', wordCount: 10, difficulty: 'medium' },
  { id: 'rs-051', text: 'Student accommodation is available both on campus and in the surrounding residential areas.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-052', text: 'The academic calendar has been revised to include an additional reading week in spring.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-053', text: 'Peer review is an essential part of the scientific publication process worldwide.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-054', text: 'The field trip to the geological site has been rescheduled due to severe weather.', wordCount: 13, difficulty: 'medium' },

  // HARD (14-16 words) — 26 items
  { id: 'rs-055', text: 'The longitudinal study examined the relationship between socioeconomic status and educational attainment over a twenty-year period.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-056', text: 'Researchers have identified several genetic markers that may be associated with increased susceptibility to certain diseases.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-057', text: 'The implementation of sustainable agricultural practices requires significant investment in both technology and farmer education programmes.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-058', text: 'International collaboration is essential for addressing global challenges such as climate change, poverty, and infectious disease outbreaks.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-059', text: 'The archaeological excavation uncovered evidence of an advanced civilisation that had previously been unknown to modern historians.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-060', text: 'Psychological research suggests that individuals who practise mindfulness meditation experience lower levels of stress and anxiety.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-061', text: 'The committee recommended that the university increase its investment in renewable energy infrastructure across all campus facilities.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-062', text: 'Advances in biotechnology have made it possible to develop personalised treatments based on individual genetic profiles.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-063', text: 'The decline in biodiversity threatens the stability of ecosystems that provide essential services to human populations worldwide.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-064', text: 'Urban planning strategies must consider the social, economic, and environmental dimensions of sustainable community development.', wordCount: 13, difficulty: 'hard' },
  { id: 'rs-065', text: 'The philosophical debate about the nature of consciousness has implications for artificial intelligence research and cognitive science.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-066', text: 'Demographic projections indicate that the proportion of elderly citizens will increase significantly in most developed countries.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-067', text: 'The integration of technology into classroom teaching has produced mixed results according to recent educational research studies.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-068', text: 'Monetary policy decisions by central banks have far-reaching consequences for employment rates, inflation, and economic growth.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-069', text: 'The preservation of indigenous languages is crucial for maintaining cultural diversity and protecting traditional ecological knowledge systems.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-070', text: 'Students are required to demonstrate critical analytical skills through a combination of written examinations and research assignments.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-071', text: 'The development of high-speed rail networks has the potential to significantly reduce domestic air travel and carbon emissions.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-072', text: 'Epidemiological evidence suggests that dietary habits established during childhood have lasting effects on adult health outcomes.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-073', text: 'The transition from a manufacturing-based economy to a knowledge-based economy has created both opportunities and challenges for workers.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-074', text: 'Contemporary architectural design increasingly incorporates principles of environmental sustainability and energy efficiency into building construction.', wordCount: 13, difficulty: 'hard' },
  { id: 'rs-075', text: 'The regulation of emerging technologies requires a careful balance between encouraging innovation and protecting public safety and privacy.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-076', text: 'Comparative analysis of educational systems across different countries reveals significant variations in curriculum design and assessment methods.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-077', text: 'The increasing prevalence of antibiotic-resistant bacteria poses a serious threat to global public health and modern medical practice.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-078', text: 'Globalisation has led to greater economic interdependence among nations, making international cooperation more important than ever before.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-079', text: 'The exploration of deep ocean environments has revealed previously unknown species and ecosystems with unique biological characteristics.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-080', text: 'Effective leadership in organisations requires not only strategic vision but also the ability to inspire and motivate team members.', wordCount: 16, difficulty: 'hard' },
  // EASY (8-10 words) — additional items
  { id: 'rs-081', text: 'The assignment is due by the end of term.', wordCount: 10, difficulty: 'easy' },
  { id: 'rs-082', text: 'Students should check the notice board for updates.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-083', text: 'The workshop will take place in room twelve.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-084', text: 'Online resources are available through the student portal.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-085', text: 'The science laboratory opens at eight thirty each morning.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-086', text: 'Please bring a calculator to the statistics tutorial.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-087', text: 'The guest speaker will arrive at two o\'clock today.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-088', text: 'Parking on campus is limited during peak hours.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-089', text: 'The course outline was distributed at the first lecture.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-090', text: 'Students can access free tutoring at the learning centre.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-091', text: 'The field trip has been postponed until further notice.', wordCount: 9, difficulty: 'easy' },
  { id: 'rs-092', text: 'Attendance records are kept for all practical sessions.', wordCount: 8, difficulty: 'easy' },
  { id: 'rs-093', text: 'The new semester starts on the first of March.', wordCount: 9, difficulty: 'easy' },
  // MEDIUM (11-13 words) — additional items
  { id: 'rs-094', text: 'Renewable energy sources are becoming more affordable for developing countries around the world.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-095', text: 'The government has announced new policies to reduce carbon emissions by twenty per cent.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-096', text: 'Remote working has become a permanent feature of many modern organisations.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-097', text: 'Artificial intelligence is being used to diagnose diseases earlier and more accurately.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-098', text: 'The library database provides access to thousands of peer-reviewed academic journals.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-099', text: 'Urban populations continue to grow as people move from rural areas to cities.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-100', text: 'Electric vehicles are expected to dominate the automotive market within the next decade.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-101', text: 'Climate scientists have warned that sea levels could rise significantly this century.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-102', text: 'The research team published their findings in a leading international journal last month.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-103', text: 'Mental health services in universities have expanded considerably over recent years.', wordCount: 11, difficulty: 'medium' },
  { id: 'rs-104', text: 'Data privacy regulations require companies to obtain consent before collecting personal information.', wordCount: 12, difficulty: 'medium' },
  { id: 'rs-105', text: 'The cost of solar panels has decreased by more than eighty per cent.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-106', text: 'Biodiversity loss threatens the stability of ecosystems that humans depend upon for survival.', wordCount: 13, difficulty: 'medium' },
  { id: 'rs-107', text: 'Online education platforms have made learning accessible to millions of people worldwide.', wordCount: 12, difficulty: 'medium' },
  // HARD (14-16 words) — additional items
  { id: 'rs-108', text: 'The implementation of large-scale renewable energy projects requires careful consideration of environmental and social impacts on local communities.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-109', text: 'Demographic changes in industrialised nations are creating unprecedented challenges for pension systems and healthcare provision.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-110', text: 'Advances in gene editing technology have raised important ethical questions about the boundaries of human intervention in nature.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-111', text: 'The circular economy model aims to eliminate waste by designing products that can be reused, repaired, or recycled.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-112', text: 'Space agencies around the world are collaborating on missions to establish a permanent human presence on the Moon.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-113', text: 'Digital literacy has become an essential skill for students and professionals across virtually all fields of employment.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-114', text: 'The development of autonomous vehicles could fundamentally transform urban transportation systems and reduce traffic-related fatalities significantly.', wordCount: 14, difficulty: 'hard' },
  { id: 'rs-115', text: 'Quantum computing technology promises to solve complex problems that would take classical computers millions of years to process.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-116', text: 'International cooperation is essential for addressing global challenges such as climate change, pandemic preparedness, and food security.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-117', text: 'The growing influence of social media on political discourse has prompted calls for greater regulation of online platforms.', wordCount: 16, difficulty: 'hard' },
  { id: 'rs-118', text: 'Sustainable agriculture practices can help to reduce greenhouse gas emissions while maintaining food production for growing populations.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-119', text: 'Research into brain-computer interfaces has opened new possibilities for treating neurological conditions and restoring lost motor functions.', wordCount: 15, difficulty: 'hard' },
  { id: 'rs-120', text: 'The rapid expansion of artificial intelligence raises fundamental questions about employment, privacy, and the distribution of economic benefits.', wordCount: 16, difficulty: 'hard' }
];

// -----------------------------------------------------------------------------
// 3. DESCRIBE IMAGE ITEMS (55 items)
// -----------------------------------------------------------------------------
const DESCRIBE_IMAGE_ITEMS = [
  {
    id: 'di-001',
    type: 'bar',
    title: 'Global Renewable Energy Capacity by Source (2015-2023)',
    description: 'A grouped bar chart showing renewable energy capacity in gigawatts for solar, wind, hydropower, and biomass across 2015, 2018, 2021, and 2023. Solar shows the steepest growth from 230 GW to 1,420 GW. Wind grows from 430 GW to 980 GW. Hydropower remains relatively stable at around 1,100-1,300 GW. Biomass grows modestly from 110 GW to 180 GW.',
    keyPoints: [
      'Solar energy experienced the most dramatic increase, rising from 230 GW in 2015 to 1,420 GW in 2023.',
      'Wind power capacity more than doubled over the period.',
      'Hydropower remained the largest single source but showed minimal growth.',
      'Overall renewable capacity approximately tripled between 2015 and 2023.',
      'Biomass showed the smallest absolute growth among all four sources.'
    ],
    sampleResponse: 'This grouped bar chart illustrates global renewable energy capacity measured in gigawatts across four sources from 2015 to 2023. The most striking trend is the remarkable growth of solar energy, which surged from approximately 230 gigawatts in 2015 to 1,420 gigawatts by 2023, making it the fastest-growing renewable source. Wind power also expanded significantly, more than doubling from 430 to 980 gigawatts. Hydropower, while remaining the single largest source at around 1,300 gigawatts, showed relatively stable capacity throughout the period. Biomass grew modestly. Overall, the data demonstrates a clear global shift towards solar and wind energy as the primary drivers of renewable capacity expansion.',
    dataDetails: 'Solar: 230→580→1,050→1,420 GW; Wind: 430→590→780→980 GW; Hydro: 1,100→1,170→1,230→1,300 GW; Biomass: 110→130→155→180 GW'
  },
  {
    id: 'di-002',
    type: 'line',
    title: 'Average Global Temperature Anomaly (1960-2023)',
    description: 'A line graph showing the average global temperature anomaly relative to the 1951-1980 baseline. The line fluctuates near zero from 1960 to 1980, then shows a clear upward trend reaching approximately +0.3 degrees C by 1990, +0.6 degrees C by 2005, and +1.2 degrees C by 2023. The trend accelerates noticeably after 2000.',
    keyPoints: [
      'Temperatures were relatively stable around the baseline from 1960 to 1980.',
      'A consistent warming trend began in the early 1980s.',
      'The rate of warming accelerated after 2000.',
      'By 2023, the anomaly reached approximately 1.2 degrees Celsius above the baseline.',
      'The sharpest single-decade increase occurred between 2013 and 2023.'
    ],
    sampleResponse: 'This line graph depicts the average global temperature anomaly from 1960 to 2023, measured against the 1951 to 1980 baseline period. The data shows a clear warming trend over the six decades examined. Between 1960 and 1980, temperatures remained relatively stable, fluctuating close to the baseline. However, from the early 1980s onwards, a consistent upward trend emerged, with the anomaly reaching approximately 0.3 degrees by 1990 and 0.6 degrees by 2005. The most concerning feature is the accelerating rate of warming after 2000, with the anomaly reaching approximately 1.2 degrees Celsius by 2023. This pattern strongly supports the scientific consensus on global warming.',
    dataDetails: '1960: +0.02; 1970: -0.01; 1980: +0.08; 1990: +0.30; 2000: +0.45; 2010: +0.72; 2020: +1.05; 2023: +1.20 degrees C'
  },
  {
    id: 'di-003',
    type: 'pie',
    title: 'Global Energy Consumption by Source (2023)',
    description: 'A pie chart showing the distribution of global energy consumption. Oil accounts for 31%, coal 27%, natural gas 24%, renewables 12%, and nuclear 6%. Fossil fuels collectively represent 82% of total energy consumption.',
    keyPoints: [
      'Fossil fuels (oil, coal, natural gas) collectively account for 82% of global energy.',
      'Oil is the single largest energy source at 31%.',
      'Renewables represent only 12% of the total energy mix.',
      'Nuclear energy accounts for the smallest share at 6%.',
      'Coal and natural gas together make up over half of consumption.'
    ],
    sampleResponse: 'This pie chart presents the breakdown of global energy consumption by source in 2023. The most notable finding is that fossil fuels continue to dominate, collectively accounting for 82 per cent of total consumption. Oil is the largest individual source at 31 per cent, followed closely by coal at 27 per cent and natural gas at 24 per cent. Renewable energy sources represent just 12 per cent of the global energy mix, while nuclear power accounts for the smallest share at only 6 per cent. The data highlights the ongoing global dependence on fossil fuels despite the growth in renewable capacity, suggesting that the energy transition still has a considerable way to go.',
    dataDetails: 'Oil: 31%; Coal: 27%; Natural gas: 24%; Renewables: 12%; Nuclear: 6%'
  },
  {
    id: 'di-004',
    type: 'table',
    title: 'Top 10 Countries by GDP Per Capita (2023)',
    description: 'A table listing the top 10 countries by GDP per capita in US dollars: Luxembourg ($126,000), Ireland ($104,000), Switzerland ($98,000), Norway ($95,000), Singapore ($84,000), United States ($80,000), Iceland ($75,000), Denmark ($68,000), Australia ($65,000), Netherlands ($63,000). The table also shows annual growth rates ranging from 1.2% to 4.8%.',
    keyPoints: [
      'Luxembourg has the highest GDP per capita at $126,000.',
      'European countries dominate the top 10, holding seven of the ten positions.',
      'The gap between the highest and lowest on the list is approximately $63,000.',
      'Singapore is the only Asian country represented.',
      'Australia ranks ninth with a GDP per capita of $65,000.'
    ],
    sampleResponse: 'This table presents the top ten countries ranked by GDP per capita in 2023, measured in US dollars. Luxembourg leads significantly with 126,000 dollars, followed by Ireland at 104,000 and Switzerland at 98,000. European countries clearly dominate this ranking, occupying seven of the ten positions, which reflects the generally high living standards across Western and Northern Europe. Singapore, the only Asian representative at 84,000 dollars, ranks fifth. The United States follows closely in sixth position at 80,000 dollars. Australia appears in ninth position at 65,000 dollars. The considerable gap of approximately 63,000 dollars between the highest and lowest entries illustrates substantial economic disparity even among the wealthiest nations.',
    dataDetails: 'Luxembourg: $126k; Ireland: $104k; Switzerland: $98k; Norway: $95k; Singapore: $84k; US: $80k; Iceland: $75k; Denmark: $68k; Australia: $65k; Netherlands: $63k'
  },
  {
    id: 'di-005',
    type: 'process',
    title: 'The Water Cycle',
    description: 'A diagram illustrating the water cycle with six stages: evaporation from oceans and lakes, transpiration from plants, condensation forming clouds, precipitation as rain or snow, surface runoff flowing into rivers and streams, and infiltration into groundwater. Arrows connect each stage in a continuous cycle.',
    keyPoints: [
      'The cycle begins with evaporation from water bodies and transpiration from vegetation.',
      'Water vapour rises and condenses to form clouds.',
      'Precipitation falls as rain, snow, or hail depending on temperature.',
      'Water returns to oceans through surface runoff and underground infiltration.',
      'The cycle is continuous with no defined start or end point.'
    ],
    sampleResponse: 'This diagram illustrates the water cycle, which is a continuous natural process involving six key stages. First, evaporation occurs as heat from the sun causes water from oceans, lakes, and rivers to transform into water vapour. Simultaneously, transpiration releases moisture from plants into the atmosphere. As this water vapour rises, it cools and undergoes condensation, forming clouds. When sufficient moisture accumulates, precipitation occurs in the form of rain, snow, or hail. The water then follows two main pathways back to water bodies: surface runoff flows directly into rivers and streams, while infiltration allows water to seep into the ground, replenishing groundwater supplies. This cycle is continuous and essential for sustaining all life on Earth.',
    dataDetails: 'Six stages: evaporation, transpiration, condensation, precipitation, surface runoff, infiltration. Continuous cycle driven by solar energy.'
  },
  {
    id: 'di-006',
    type: 'bar',
    title: 'University Student Enrolment by Faculty (2018 vs 2023)',
    description: 'A comparative bar chart showing student enrolment in six faculties for 2018 and 2023. Business: 12,000 to 14,500; Engineering: 8,500 to 11,200; Arts: 9,800 to 7,600; Science: 7,200 to 8,900; Health Sciences: 5,600 to 9,300; IT: 4,200 to 8,800. Business remains the largest faculty, but Health Sciences and IT show the most dramatic growth.',
    keyPoints: [
      'Business remains the most popular faculty despite modest growth of 21%.',
      'Health Sciences and IT experienced the largest increases, nearly doubling.',
      'Arts was the only faculty to decline, dropping from 9,800 to 7,600 students.',
      'Engineering grew steadily by approximately 32%.',
      'The data suggests a shift towards STEM and health-related disciplines.'
    ],
    sampleResponse: 'This comparative bar chart displays student enrolment figures across six university faculties in 2018 and 2023. The most striking trends are the rapid growth in Health Sciences, which surged from 5,600 to 9,300 students, and Information Technology, which more than doubled from 4,200 to 8,800. Business remains the largest faculty with 14,500 students in 2023, though its growth of 21 per cent was relatively modest. Engineering also grew steadily to 11,200 students. Notably, Arts was the only faculty to experience a decline, dropping from 9,800 to 7,600 students. Overall, the data indicates a clear shift in student preferences towards STEM and health-related disciplines, possibly reflecting changing job market demands.',
    dataDetails: 'Business: 12,000 to 14,500 (+21%); Engineering: 8,500 to 11,200 (+32%); Arts: 9,800 to 7,600 (-22%); Science: 7,200 to 8,900 (+24%); Health: 5,600 to 9,300 (+66%); IT: 4,200 to 8,800 (+110%)'
  },
  {
    id: 'di-007',
    type: 'line',
    title: 'Internet Users Worldwide (2000-2023)',
    description: 'A line graph showing the growth of internet users from 400 million in 2000 to 5.4 billion in 2023. The growth is roughly S-shaped: slow until 2005, rapid from 2005 to 2018, then gradually levelling off as penetration approaches 67% of the global population.',
    keyPoints: [
      'Internet users grew from 400 million to 5.4 billion over 23 years.',
      'The most rapid growth period was between 2005 and 2018.',
      'Growth has begun to plateau as global penetration approaches saturation.',
      'By 2023, approximately 67% of the world population had internet access.',
      'The growth curve follows a typical technology adoption S-curve.'
    ],
    sampleResponse: 'This line graph tracks the growth of internet users worldwide from 2000 to 2023. The data shows a dramatic increase from approximately 400 million users at the turn of the millennium to 5.4 billion by 2023. The growth pattern follows a characteristic S-curve of technology adoption. Growth was relatively slow between 2000 and 2005, when the user base reached about 1 billion. The most rapid expansion occurred between 2005 and 2018, driven by the proliferation of smartphones and improved infrastructure in developing nations. After 2018, growth began to level off as internet penetration approached approximately 67 per cent of the global population. This suggests that remaining growth will increasingly depend on connecting populations in underserved regions.',
    dataDetails: '2000: 400M; 2005: 1.0B; 2010: 2.0B; 2015: 3.2B; 2018: 4.2B; 2020: 4.7B; 2023: 5.4B; Penetration: ~67%'
  },
  {
    id: 'di-008',
    type: 'map',
    title: 'Global Distribution of Coral Reefs',
    description: 'A world map showing the distribution of coral reefs, concentrated in tropical regions between approximately 30 degrees N and 30 degrees S latitude. Major reef systems are highlighted: Great Barrier Reef (Australia), Mesoamerican Reef (Caribbean), Red Sea reefs, Coral Triangle (Southeast Asia), and Indian Ocean reefs. A colour scale indicates reef health from green (healthy) to red (severely degraded).',
    keyPoints: [
      'Coral reefs are concentrated in tropical waters between 30 degrees N and 30 degrees S latitude.',
      'The Coral Triangle in Southeast Asia has the highest reef biodiversity.',
      'The Great Barrier Reef is the largest single reef system.',
      'Many reefs, particularly in the Caribbean, are shown in degraded condition.',
      'Water temperature and depth are the primary factors determining reef distribution.'
    ],
    sampleResponse: 'This map illustrates the global distribution of coral reefs, with colour coding indicating their health status. Coral reefs are concentrated in tropical waters between approximately 30 degrees north and south of the equator. The map highlights five major reef regions: the Great Barrier Reef off Australia, which is the largest single system; the Coral Triangle in Southeast Asia, known for the highest biodiversity; the Mesoamerican Reef in the Caribbean; reefs along the Red Sea coast; and those scattered across the Indian Ocean. The colour coding reveals a concerning pattern, with many reefs, particularly in the Caribbean region, shown in degraded condition. The healthiest reefs tend to be in more remote locations with less human activity. This distribution reflects the requirement for warm, shallow, clear waters that coral organisms need to thrive.',
    dataDetails: 'Great Barrier Reef: 2,300 km; Coral Triangle: 6 countries, 30% of world reefs; Caribbean reefs: 60% degraded; Global reef area: ~284,000 sq km'
  },
  {
    id: 'di-009',
    type: 'pie',
    title: 'Household Water Usage Distribution',
    description: 'A pie chart showing typical household water usage breakdown: toilet flushing 30%, shower/bath 25%, laundry 20%, kitchen/drinking 10%, garden/outdoor 10%, other 5%.',
    keyPoints: [
      'Toilet flushing accounts for the largest share of household water use at 30%.',
      'Bathing and showering represent the second largest use at 25%.',
      'Laundry consumes approximately 20% of household water.',
      'Kitchen and drinking water use is relatively small at only 10%.',
      'Over half of household water is used for sanitation purposes (toilet and bathing combined).'
    ],
    sampleResponse: 'This pie chart presents the typical distribution of household water usage across six categories. The largest proportion of water is consumed by toilet flushing, which accounts for 30 per cent of total usage. Showering and bathing represent the second largest category at 25 per cent. When combined, these two sanitation-related activities consume over half of all household water. Laundry is the third largest consumer at 20 per cent. Kitchen and drinking water, perhaps surprisingly, account for only 10 per cent, equal to garden and outdoor use. Other miscellaneous uses make up the remaining 5 per cent. This data suggests that the most effective strategies for reducing household water consumption should focus on improving toilet and shower efficiency.',
    dataDetails: 'Toilet: 30%; Shower/bath: 25%; Laundry: 20%; Kitchen/drinking: 10%; Garden: 10%; Other: 5%'
  },
  {
    id: 'di-010',
    type: 'bar',
    title: 'Air Pollution Levels in Major Cities (PM2.5 micrograms per cubic metre)',
    description: 'A horizontal bar chart showing annual average PM2.5 concentrations: Delhi (98), Dhaka (78), Beijing (38), Jakarta (34), Cairo (30), Mexico City (22), London (12), Sydney (8), New York (10), Stockholm (6). The WHO guideline of 5 is marked with a vertical line.',
    keyPoints: [
      'Delhi has the highest PM2.5 levels at 98, nearly 20 times the WHO guideline.',
      'All listed cities exceed the WHO recommended guideline of 5.',
      'South and Southeast Asian cities show the worst air quality.',
      'Cities in developed nations have significantly lower pollution levels.',
      'Stockholm has the lowest levels at 6 but still exceeds WHO guidelines.'
    ],
    sampleResponse: 'This horizontal bar chart compares annual average PM2.5 air pollution levels across ten major world cities, with the WHO guideline of 5 micrograms per cubic metre marked for reference. The data reveals stark disparities in air quality globally. Delhi records the highest pollution at 98 micrograms, nearly twenty times the recommended level, followed by Dhaka at 78 micrograms. South and Southeast Asian cities dominate the most polluted end of the spectrum. In contrast, cities in developed nations show considerably lower levels, with Sydney at 8, New York at 10, and Stockholm at 6 micrograms. Importantly, even the least polluted city on the list exceeds the WHO guideline, indicating that air pollution remains a universal urban challenge. The data underscores the urgent need for emission reduction policies, particularly in rapidly developing cities.',
    dataDetails: 'Delhi: 98; Dhaka: 78; Beijing: 38; Jakarta: 34; Cairo: 30; Mexico City: 22; London: 12; New York: 10; Sydney: 8; Stockholm: 6; WHO guideline: 5'
  },
  {
    id: 'di-011',
    type: 'process',
    title: 'How Solar Panels Generate Electricity',
    description: 'A flow diagram showing four stages: (1) Sunlight hits photovoltaic cells made of silicon; (2) Photons knock electrons free from atoms, creating direct current (DC); (3) An inverter converts DC to alternating current (AC); (4) AC electricity is distributed to the household or fed back into the power grid. A meter measures both consumption and export.',
    keyPoints: [
      'Solar panels contain photovoltaic cells made primarily of silicon.',
      'Sunlight photons dislodge electrons to generate direct current electricity.',
      'An inverter is essential for converting DC power to usable AC power.',
      'Excess electricity can be exported to the power grid.',
      'A meter tracks both energy consumption and energy exported.'
    ],
    sampleResponse: 'This flow diagram explains how solar panels generate electricity in four stages. First, sunlight strikes the photovoltaic cells, which are primarily made of silicon semiconductor material. In the second stage, photons from the sunlight knock electrons free from their atoms within the silicon, creating a flow of direct current electricity. Third, since household appliances require alternating current, an inverter device converts the DC power into AC power. Finally, the AC electricity is distributed to the household for immediate use, and any excess energy is fed back into the main power grid. A bidirectional meter monitors both the electricity consumed from the grid and the energy exported to it. This process is entirely clean, producing no emissions during operation, which is why solar energy is considered a key component of sustainable energy solutions.',
    dataDetails: 'Four stages: photon absorption, electron displacement (DC), inverter (DC to AC), distribution/grid export. Efficiency: typical panels 15-22%.'
  },
  {
    id: 'di-012',
    type: 'line',
    title: 'Global Smartphone Sales (2010-2023)',
    description: 'A line graph showing global smartphone unit sales: rapid growth from 300 million in 2010 to a peak of 1.56 billion in 2017, slight decline to 1.38 billion in 2020, partial recovery to 1.42 billion in 2021, then decline to 1.17 billion in 2023. The market appears to have reached saturation.',
    keyPoints: [
      'Smartphone sales grew rapidly from 2010 to 2017, peaking at 1.56 billion units.',
      'Sales have generally declined since the 2017 peak.',
      'The 2020 dip coincides with the global pandemic.',
      'There was a brief recovery in 2021 before continued decline.',
      'The downward trend suggests market saturation and longer replacement cycles.'
    ],
    sampleResponse: 'This line graph tracks global smartphone unit sales from 2010 to 2023. The data reveals a clear narrative of rapid growth followed by market maturity. Sales surged from 300 million units in 2010 to a peak of 1.56 billion in 2017, reflecting the smartphone revolution. Since then, however, sales have generally declined. A notable dip to 1.38 billion occurred in 2020, coinciding with the pandemic, followed by a partial recovery to 1.42 billion in 2021. By 2023, sales had fallen further to 1.17 billion units. This downward trend since the peak suggests the smartphone market has reached saturation in most regions, with consumers holding onto devices longer. The data indicates that the era of explosive smartphone growth has ended, and manufacturers must now focus on innovation to drive replacement purchases.',
    dataDetails: '2010: 300M; 2013: 1.02B; 2015: 1.42B; 2017: 1.56B (peak); 2019: 1.48B; 2020: 1.38B; 2021: 1.42B; 2023: 1.17B'
  },
  {
    id: 'di-013',
    type: 'table',
    title: 'Comparison of Transport Modes: Environmental Impact',
    description: 'A table comparing five transport modes on CO2 emissions per passenger-km, energy efficiency, noise pollution, and land use. Modes: bicycle (0g, highest efficiency, low noise, minimal land), bus (68g, high, medium, low), train (41g, highest, medium, medium), car (170g, lowest, high, highest), aeroplane (255g, low, high at airports, minimal).',
    keyPoints: [
      'Cycling produces zero direct CO2 emissions and has the best overall environmental profile.',
      'Aeroplanes have the highest CO2 emissions per passenger-kilometre at 255g.',
      'Trains offer a strong balance of moderate emissions and high energy efficiency.',
      'Cars have the highest land use requirements due to road and parking infrastructure.',
      'Public transport (bus and train) significantly outperforms private cars on all metrics.'
    ],
    sampleResponse: 'This table compares the environmental impact of five transport modes across four criteria. In terms of CO2 emissions per passenger-kilometre, cycling is the clear winner with zero direct emissions, followed by trains at 41 grams and buses at 68 grams. Private cars produce 170 grams, while aeroplanes are the most polluting at 255 grams per passenger-kilometre. Regarding energy efficiency, trains and bicycles rank highest, while cars are the least efficient. For noise pollution, bicycles have minimal impact, whereas cars and aeroplanes generate the most. Cars also require the greatest land use for roads and parking. Overall, the data strongly supports investment in public transport and cycling infrastructure, as these modes substantially outperform private vehicles and air travel across all environmental measures examined.',
    dataDetails: 'CO2 g/pass-km: Bicycle 0, Train 41, Bus 68, Car 170, Plane 255. Energy efficiency rank: Bicycle=Train > Bus > Plane > Car.'
  },
  {
    id: 'di-014',
    type: 'bar',
    title: 'Average Annual Hours Worked Per Employee (Selected OECD Countries, 2023)',
    description: 'A vertical bar chart: Mexico (2,128 hours), South Korea (1,901), United States (1,791), Japan (1,607), Australia (1,694), United Kingdom (1,532), France (1,511), Germany (1,341), Denmark (1,380), Netherlands (1,417). A horizontal line marks the OECD average of 1,716 hours.',
    keyPoints: [
      'Mexico has the longest working hours at 2,128 hours per year.',
      'Germany and Denmark have the shortest working hours among those listed.',
      'The US is above the OECD average, while most European nations are below.',
      'There is no clear correlation between hours worked and economic productivity.',
      'Australia sits close to the OECD average at 1,694 hours.'
    ],
    sampleResponse: 'This bar chart compares the average annual hours worked per employee across ten OECD countries in 2023. Mexico leads with 2,128 hours, significantly above the OECD average of 1,716 hours, followed by South Korea at 1,901 hours. The United States, at 1,791 hours, also exceeds the average. In contrast, European nations generally work fewer hours, with Germany recording the fewest at just 1,341 hours and Denmark at 1,380 hours. Australia sits near the average at 1,694 hours. Interestingly, some of the most productive economies, such as Germany and Denmark, work the fewest hours, suggesting that longer working hours do not necessarily translate to higher economic output. This challenges the assumption that more hours equate to greater productivity.',
    dataDetails: 'Mexico: 2,128; S. Korea: 1,901; US: 1,791; Australia: 1,694; Japan: 1,607; UK: 1,532; France: 1,511; Netherlands: 1,417; Denmark: 1,380; Germany: 1,341; OECD avg: 1,716'
  },
  {
    id: 'di-015',
    type: 'image',
    title: 'Cross-Section of a Volcano',
    description: 'A labelled cross-section diagram of a stratovolcano showing: magma chamber deep underground, a central conduit rising from the chamber, layers of alternating lava and ash deposits forming the cone shape, a crater at the summit, secondary vents on the flanks, and a cloud of ash and gas erupting from the top.',
    keyPoints: [
      'The magma chamber is the underground reservoir of molten rock.',
      'The central conduit is the main pathway through which magma rises.',
      'Stratovolcanoes are built from alternating layers of lava and volcanic ash.',
      'Secondary vents can form on the flanks, potentially causing lateral eruptions.',
      'Eruptions release ash, gases, and lava from the summit crater.'
    ],
    sampleResponse: 'This diagram presents a labelled cross-section of a stratovolcano, revealing its internal structure. At the base lies the magma chamber, a large underground reservoir of molten rock situated deep beneath the surface. Rising from this chamber is the central conduit, which serves as the primary pathway for magma to reach the surface. The distinctive cone shape of the volcano is formed by alternating layers of solidified lava and volcanic ash deposited during successive eruptions over time. At the summit is the crater, from which the diagram shows ash and volcanic gases being expelled. Notably, secondary vents are visible on the flanks of the volcano, which can produce lateral eruptions. This structure explains why stratovolcanoes can be particularly dangerous, as eruptions may occur from multiple points.',
    dataDetails: 'Key components: magma chamber, central conduit, alternating lava/ash layers, summit crater, secondary flank vents, ash/gas cloud.'
  },
  {
    id: 'di-016',
    type: 'line',
    title: 'World Population Growth Projections (1950-2100)',
    description: 'A line graph with three projection scenarios from the UN. Historical data shows growth from 2.5 billion in 1950 to 8.0 billion in 2023. High variant projects 10.9 billion by 2100, medium variant projects 10.3 billion peaking around 2086, and low variant projects 8.8 billion peaking around 2054 then declining.',
    keyPoints: [
      'World population has more than tripled from 2.5 billion in 1950 to 8 billion in 2023.',
      'The medium projection estimates a peak of approximately 10.3 billion around 2086.',
      'The low variant suggests population could begin declining as early as the 2050s.',
      'All three scenarios show slowing growth compared to the 1950-2000 period.',
      'The range between high and low scenarios by 2100 spans over 2 billion people.'
    ],
    sampleResponse: 'This line graph presents world population growth from 1950 alongside three United Nations projection scenarios extending to 2100. Historical data shows the population more than tripling from 2.5 billion in 1950 to approximately 8 billion by 2023. Looking ahead, the three scenarios diverge significantly. The medium variant, considered most likely, projects growth to approximately 10.3 billion, peaking around 2086 before beginning a gradual decline. The high variant suggests continued growth to 10.9 billion by 2100. Most interestingly, the low variant projects a peak of about 8.8 billion as early as the 2050s, followed by a notable decline. All scenarios show substantially slower growth compared to the second half of the twentieth century. The 2-billion-person range between scenarios by 2100 highlights the significant uncertainty in demographic projections.',
    dataDetails: '1950: 2.5B; 1975: 4.1B; 2000: 6.1B; 2023: 8.0B; 2050 (med): 9.7B; 2086 (med peak): 10.3B; 2100 high: 10.9B; 2100 low: 8.8B'
  },
  {
    id: 'di-017',
    type: 'pie',
    title: 'Causes of Deforestation Worldwide',
    description: 'A pie chart showing the primary drivers of global deforestation: cattle ranching 41%, soybean cultivation 14%, palm oil plantations 12%, logging 10%, small-scale farming 9%, infrastructure and roads 8%, other 6%.',
    keyPoints: [
      'Cattle ranching is the single largest cause of deforestation at 41%.',
      'Agriculture-related activities collectively account for approximately 76% of deforestation.',
      'Palm oil and soybean cultivation together contribute 26%.',
      'Logging accounts for only 10%, less than many people assume.',
      'Infrastructure development, including roads, contributes 8%.'
    ],
    sampleResponse: 'This pie chart breaks down the primary causes of global deforestation. The most significant finding is that cattle ranching alone accounts for 41 per cent of deforestation worldwide, making it by far the leading driver. Agricultural activities collectively are responsible for approximately 76 per cent of forest loss, with soybean cultivation contributing 14 per cent and palm oil plantations 12 per cent. Perhaps surprisingly, commercial logging accounts for only 10 per cent, which is less than many people might assume. Small-scale farming contributes 9 per cent, while infrastructure and road construction make up 8 per cent. The data clearly indicates that addressing deforestation requires fundamental changes in agricultural practices, particularly in the livestock industry, and demonstrates that reducing meat consumption could have a substantial positive impact on global forest preservation.',
    dataDetails: 'Cattle ranching: 41%; Soybean: 14%; Palm oil: 12%; Logging: 10%; Small-scale farming: 9%; Infrastructure: 8%; Other: 6%'
  },
  {
    id: 'di-018',
    type: 'bar',
    title: 'Literacy Rates by World Region (2023)',
    description: 'A bar chart comparing adult literacy rates: Europe 99%, North America 99%, East Asia 97%, Latin America 94%, Southeast Asia 95%, Middle East 83%, South Asia 73%, Sub-Saharan Africa 65%. A horizontal line marks the global average of 87%.',
    keyPoints: [
      'Europe and North America have the highest literacy rates at 99%.',
      'Sub-Saharan Africa has the lowest regional literacy rate at 65%.',
      'The global average literacy rate stands at 87%.',
      'South Asia and Sub-Saharan Africa are the only regions below the global average.',
      'There is a 34-percentage-point gap between the highest and lowest regions.'
    ],
    sampleResponse: 'This bar chart compares adult literacy rates across eight world regions in 2023. Europe and North America lead with rates of 99 per cent, closely followed by East Asia at 97 per cent and Southeast Asia at 95 per cent. Latin America also scores well at 94 per cent. However, significant disparities exist in the lower-performing regions. The Middle East records 83 per cent, while South Asia shows 73 per cent. Sub-Saharan Africa has the lowest rate at just 65 per cent, well below the global average of 87 per cent. The 34-percentage-point gap between the highest and lowest regions highlights persistent educational inequality globally. These disparities are closely linked to factors such as poverty, conflict, gender inequality, and insufficient investment in educational infrastructure.',
    dataDetails: 'Europe: 99%; N. America: 99%; E. Asia: 97%; SE Asia: 95%; Latin America: 94%; Middle East: 83%; S. Asia: 73%; Sub-Saharan Africa: 65%; Global avg: 87%'
  },
  {
    id: 'di-019',
    type: 'process',
    title: 'Steps in the Scientific Method',
    description: 'A circular flow diagram showing six steps: (1) Observation and question, (2) Background research, (3) Hypothesis formulation, (4) Experiment design and testing, (5) Data analysis, (6) Conclusion and communication. An arrow from step 6 leads back to step 1 if the hypothesis is rejected, creating an iterative cycle.',
    keyPoints: [
      'The scientific method begins with observation and asking questions about phenomena.',
      'A hypothesis is an educated prediction that can be tested experimentally.',
      'Experiments must be designed to isolate and test specific variables.',
      'Data analysis determines whether the hypothesis is supported or rejected.',
      'The process is iterative — a rejected hypothesis leads back to new questions.'
    ],
    sampleResponse: 'This circular flow diagram outlines the six steps of the scientific method. The process begins with observation and the formulation of a research question about a natural phenomenon. The second step involves conducting background research to understand what is already known about the topic. Based on this research, a testable hypothesis is formulated in step three. The fourth step involves designing and conducting experiments to test this hypothesis, with careful control of variables. In step five, the collected data is analysed to determine whether it supports or contradicts the hypothesis. Finally, conclusions are drawn and communicated to the scientific community. A key feature of the diagram is the iterative nature of the process — if the hypothesis is rejected, the cycle returns to the beginning with new questions and refined hypotheses, reflecting the self-correcting nature of scientific inquiry.',
    dataDetails: 'Six steps in cycle: Observation, Research, Hypothesis, Experiment, Analysis, Conclusion. Iterative: rejection loops back to step 1.'
  },
  {
    id: 'di-020',
    type: 'table',
    title: 'Comparison of Renewable Energy Sources',
    description: 'A table comparing five renewable sources across cost per kWh, reliability, land use, and environmental impact. Solar: $0.05/kWh, intermittent, moderate land, low impact. Wind: $0.04/kWh, intermittent, large land/offshore, low-moderate impact. Hydro: $0.03/kWh, reliable, large (reservoir), moderate impact. Geothermal: $0.07/kWh, very reliable, small, very low impact. Biomass: $0.08/kWh, reliable, very large, moderate impact.',
    keyPoints: [
      'Hydropower is the cheapest at $0.03/kWh but requires large reservoirs.',
      'Wind and solar are intermittent, requiring energy storage solutions.',
      'Geothermal has the smallest land footprint and lowest environmental impact.',
      'Biomass is the most expensive and requires the most land.',
      'No single source is ideal across all criteria, suggesting a mixed approach is best.'
    ],
    sampleResponse: 'This table provides a detailed comparison of five renewable energy sources across four criteria. In terms of cost, hydropower is the cheapest at 3 cents per kilowatt-hour, followed closely by wind at 4 cents and solar at 5 cents. Geothermal and biomass are more expensive at 7 and 8 cents respectively. Regarding reliability, geothermal and hydropower stand out as the most consistent, while solar and wind are intermittent and require storage solutions. For land use, geothermal requires the smallest area, whereas biomass demands the most. In environmental impact, geothermal again performs best with very low impact, while hydropower can significantly alter river ecosystems. The key takeaway is that no single renewable source excels across all criteria, which suggests that an optimal energy strategy should combine multiple sources to balance cost, reliability, and environmental considerations.',
    dataDetails: 'Cost/kWh: Hydro $0.03, Wind $0.04, Solar $0.05, Geo $0.07, Bio $0.08. Reliability: Geo>Hydro>Bio>Wind=Solar. Land: Geo<Solar<Wind<Hydro<Bio.'
  },
  {
    id: 'di-021',
    type: 'line',
    title: 'Global Carbon Dioxide Emissions (1970-2023)',
    description: 'A line graph showing CO2 emissions rising from 15 billion tonnes in 1970 to 37 billion tonnes in 2023. Growth was steady through the 1990s, accelerated from 2000-2012 (driven by China and India), dipped briefly in 2020 (pandemic), then resumed rising. A dotted line shows the trajectory needed for net zero by 2050.',
    keyPoints: [
      'CO2 emissions have more than doubled from 15 to 37 billion tonnes since 1970.',
      'Emissions growth accelerated significantly from 2000 to 2012.',
      'The 2020 pandemic caused a temporary 6% drop in emissions.',
      'Emissions quickly rebounded after the pandemic dip.',
      'Current trajectory is far above the pathway needed for net zero by 2050.'
    ],
    sampleResponse: 'This line graph tracks global carbon dioxide emissions from 1970 to 2023, alongside the trajectory needed to achieve net zero by 2050. Emissions have more than doubled over the period, rising from approximately 15 billion tonnes in 1970 to 37 billion tonnes in 2023. Growth was relatively steady through the 1990s but accelerated markedly from 2000 to 2012, largely driven by rapid industrialisation in China and India. A notable but temporary decline of approximately 6 per cent occurred in 2020 due to the pandemic, but emissions quickly rebounded in subsequent years. Most critically, the graph shows that current emission levels and trends are dramatically above the downward trajectory required to reach net zero by 2050. This gap highlights the enormous challenge of meeting international climate commitments and the urgent need for accelerated decarbonisation policies.',
    dataDetails: '1970: 15Bt; 1990: 22Bt; 2000: 25Bt; 2012: 34Bt; 2019: 36.7Bt; 2020: 34.4Bt (-6%); 2023: 37Bt. Net-zero target path: ~25Bt by 2030, 0 by 2050.'
  },
  {
    id: 'di-022',
    type: 'map',
    title: 'Global Migration Flows (2020-2023)',
    description: 'A world map with arrows showing major migration routes and their approximate volumes. Major flows: Central America to US (large), North Africa to Europe (large), Middle East to Europe (medium), Southeast Asia to Middle East (medium), Eastern Europe to Western Europe (medium). Colour intensity indicates volume. Origin countries in blue, destination in red.',
    keyPoints: [
      'The largest migration flow is from Central America to the United States.',
      'Europe receives significant migration from both North Africa and the Middle East.',
      'Southeast Asian workers migrate in large numbers to Gulf states.',
      'Eastern European labour migration to Western Europe remains substantial.',
      'Most migration flows move from developing to developed economies.'
    ],
    sampleResponse: 'This map displays the major global migration flows between 2020 and 2023, using arrows of varying thickness to indicate volume. The largest flow is from Central America to the United States, reflecting ongoing economic and security-driven migration. Europe is shown receiving significant inflows from two major directions: North Africa, primarily across the Mediterranean, and the Middle East. A notable flow from Southeast Asia to the Middle East reflects labour migration to Gulf states for construction and service industries. Eastern European migration to Western Europe also remains substantial, facilitated by free movement agreements. The overall pattern demonstrates that migration predominantly flows from developing to developed economies, driven by disparities in income, employment opportunities, and stability. This visualisation underscores the global nature of migration and the need for comprehensive international policies.',
    dataDetails: 'C. America to US: ~2.5M/yr; N. Africa to Europe: ~500K/yr; Middle East to Europe: ~400K/yr; SE Asia to Gulf: ~1.2M/yr; E. to W. Europe: ~600K/yr'
  },
  {
    id: 'di-023',
    type: 'bar',
    title: 'Government Spending on Education as % of GDP (Selected Countries)',
    description: 'A bar chart: Norway 7.6%, Sweden 7.2%, Finland 6.3%, UK 5.5%, Australia 5.1%, US 5.0%, Germany 4.9%, Japan 3.4%, China 3.6%, India 3.1%. The OECD average is marked at 5.0%.',
    keyPoints: [
      'Nordic countries spend the most on education relative to GDP, led by Norway at 7.6%.',
      'Australia spends 5.1%, slightly above the OECD average of 5.0%.',
      'Japan, China, and India spend considerably less than the OECD average.',
      'There is a strong correlation between education spending and PISA scores in many countries.',
      'The gap between the highest and lowest spenders is 4.5 percentage points.'
    ],
    sampleResponse: 'This bar chart compares government education spending as a percentage of GDP across ten countries. The Nordic countries lead significantly, with Norway investing 7.6 per cent, Sweden 7.2 per cent, and Finland 6.3 per cent. These nations are consistently among the highest performers in international education assessments. The United Kingdom spends 5.5 per cent, while Australia and the United States both sit at approximately 5 per cent, right at the OECD average. Germany is slightly below average at 4.9 per cent. Notably, major Asian economies spend considerably less, with Japan at 3.4 per cent, China at 3.6 per cent, and India at 3.1 per cent. The data suggests a broad relationship between education investment and educational outcomes, though other factors such as how efficiently funds are allocated also play a crucial role in determining educational quality.',
    dataDetails: 'Norway: 7.6%; Sweden: 7.2%; Finland: 6.3%; UK: 5.5%; Australia: 5.1%; US: 5.0%; Germany: 4.9%; China: 3.6%; Japan: 3.4%; India: 3.1%; OECD avg: 5.0%'
  },
  {
    id: 'di-024',
    type: 'image',
    title: 'Structure of a Human Cell',
    description: 'A labelled diagram of an animal cell showing: cell membrane (outer boundary), nucleus (containing DNA), mitochondria (energy production), endoplasmic reticulum (protein synthesis), Golgi apparatus (protein packaging), ribosomes, lysosomes (waste digestion), and cytoplasm filling the interior.',
    keyPoints: [
      'The cell membrane controls what enters and exits the cell.',
      'The nucleus contains DNA and controls cell activities.',
      'Mitochondria are known as the powerhouses that produce energy (ATP).',
      'The endoplasmic reticulum and Golgi apparatus work together in protein production and packaging.',
      'Each organelle has a specific function essential to cell survival.'
    ],
    sampleResponse: 'This labelled diagram illustrates the internal structure of a human animal cell, showing its key organelles. The cell membrane forms the outer boundary, controlling the passage of substances in and out. At the centre, the nucleus contains the cell\'s DNA and serves as the control centre, directing all cellular activities. The mitochondria, often called the powerhouses of the cell, produce adenosine triphosphate for energy. The endoplasmic reticulum plays a crucial role in synthesising proteins, which are then packaged and distributed by the Golgi apparatus. Ribosomes, found both free-floating and attached to the endoplasmic reticulum, are the sites of protein assembly. Lysosomes handle waste digestion and cellular recycling. All these organelles are suspended in cytoplasm. The diagram effectively demonstrates how each component has a specialised function that collectively enables the cell to survive and reproduce.',
    dataDetails: 'Key organelles: cell membrane, nucleus (DNA), mitochondria (ATP), endoplasmic reticulum, Golgi apparatus, ribosomes, lysosomes, cytoplasm.'
  },
  {
    id: 'di-025',
    type: 'line',
    title: 'Global Life Expectancy Trends (1950-2023)',
    description: 'A multi-line graph showing life expectancy trends for World Average, Developed Countries, and Developing Countries. World: 46 to 73 years. Developed: 64 to 81 years. Developing: 41 to 70 years. The gap between developed and developing has narrowed from 23 years to 11 years. A slight dip in all lines around 2020 due to the pandemic.',
    keyPoints: [
      'Global average life expectancy has increased from 46 to 73 years since 1950.',
      'Developing countries have made the most dramatic gains, from 41 to 70 years.',
      'The gap between developed and developing nations has narrowed from 23 to 11 years.',
      'The pandemic caused a brief dip in life expectancy around 2020.',
      'Improvements are driven by better nutrition, sanitation, healthcare, and vaccination.'
    ],
    sampleResponse: 'This multi-line graph presents global life expectancy trends from 1950 to 2023 for three categories: the world average, developed countries, and developing countries. The most remarkable trend is the substantial increase across all categories. The world average rose from just 46 years in 1950 to 73 years in 2023. Developed countries improved from 64 to 81 years, while developing countries showed the most dramatic gains, rising from 41 to 70 years. Crucially, the gap between developed and developing nations has narrowed significantly, from 23 years in 1950 to approximately 11 years today. A small but visible dip appears around 2020 across all three lines, reflecting the impact of the pandemic. These improvements have been driven by advances in nutrition, sanitation, healthcare access, and widespread vaccination programmes, though significant inequalities within and between countries persist.',
    dataDetails: 'World: 46 to 73 yrs; Developed: 64 to 81 yrs; Developing: 41 to 70 yrs; Gap: 23 to 11 yrs; 2020 dip: ~1-2 years across categories.'
  },
  {
    id: 'di-026',
    type: 'pie',
    title: 'Global Greenhouse Gas Emissions by Sector',
    description: 'A pie chart: Energy and heat production 25%, transport 16%, industry 21%, agriculture and forestry 24%, buildings 6%, other 8%.',
    keyPoints: [
      'Energy/heat production and agriculture/forestry are the two largest contributors, each around 24-25%.',
      'Industry accounts for 21% of greenhouse gas emissions.',
      'Transport contributes 16%, making it the fourth largest sector.',
      'Buildings account for a relatively small 6% of direct emissions.',
      'The data shows emissions are distributed across multiple sectors, requiring a comprehensive approach.'
    ],
    sampleResponse: 'This pie chart illustrates the distribution of global greenhouse gas emissions by economic sector. The two largest contributors are energy and heat production at 25 per cent and agriculture and forestry at 24 per cent, together accounting for nearly half of all emissions. Industry is the third largest sector at 21 per cent, reflecting emissions from manufacturing, cement production, and chemical processing. Transport contributes 16 per cent, encompassing road vehicles, aviation, shipping, and rail. Buildings account for a relatively modest 6 per cent of direct emissions, with other miscellaneous sources making up the remaining 8 per cent. The fairly even distribution across sectors is significant because it demonstrates that addressing climate change cannot focus on any single sector alone. Effective emission reduction requires comprehensive strategies targeting energy production, agriculture, industry, and transport simultaneously.',
    dataDetails: 'Energy/heat: 25%; Agriculture/forestry: 24%; Industry: 21%; Transport: 16%; Buildings: 6%; Other: 8%'
  },
  {
    id: 'di-027',
    type: 'bar',
    title: 'Languages With the Most Native Speakers (2023)',
    description: 'A horizontal bar chart showing native speaker numbers in millions: Mandarin Chinese (920), Spanish (475), English (373), Hindi (344), Bengali (234), Portuguese (232), Russian (154), Japanese (125), Yue Chinese (85), Vietnamese (85).',
    keyPoints: [
      'Mandarin Chinese has nearly double the native speakers of Spanish, the second-ranked language.',
      'English ranks only third by native speakers despite being the most widely used global lingua franca.',
      'Five of the top ten languages are from Asia.',
      'The top three languages together account for over 1.7 billion native speakers.',
      'There is a large gap between the top three and the remaining languages.'
    ],
    sampleResponse: 'This horizontal bar chart ranks the world\'s ten most spoken languages by number of native speakers in 2023. Mandarin Chinese dominates with approximately 920 million native speakers, nearly double the second-ranked language, Spanish, at 475 million. Interestingly, English ranks only third with 373 million native speakers, despite its status as the global lingua franca used widely in business, science, and diplomacy. Hindi follows closely at 344 million. Notably, five of the top ten languages are Asian, reflecting the continent\'s enormous population. There is a significant gap between the top three languages and the rest, with Bengali at 234 million marking a substantial drop. The data is a useful reminder that English\'s global dominance is driven by second-language speakers rather than native speaker numbers, and that the linguistic landscape of the world is heavily shaped by Asia.',
    dataDetails: 'Mandarin: 920M; Spanish: 475M; English: 373M; Hindi: 344M; Bengali: 234M; Portuguese: 232M; Russian: 154M; Japanese: 125M; Yue Chinese: 85M; Vietnamese: 85M'
  },
  {
    id: 'di-028',
    type: 'process',
    title: 'How Vaccines Work',
    description: 'A four-stage diagram: (1) Vaccine containing weakened/inactive pathogen or mRNA is administered; (2) The immune system recognises the foreign antigen and activates; (3) B-cells produce antibodies while T-cells learn to attack the pathogen; (4) Memory cells remain in the body, providing rapid response if the real pathogen is encountered later.',
    keyPoints: [
      'Vaccines contain weakened, inactive, or synthetic versions of a pathogen.',
      'The immune system is triggered to respond without causing the actual disease.',
      'B-cells produce antibodies that can neutralise the pathogen.',
      'Memory cells provide long-term protection by remembering the pathogen.',
      'Subsequent exposure to the real pathogen triggers a faster, stronger immune response.'
    ],
    sampleResponse: 'This four-stage diagram explains how vaccines protect the body against infectious diseases. In the first stage, a vaccine is administered containing a weakened, inactive, or synthetic form of a pathogen, such as mRNA instructions. In the second stage, the immune system recognises the foreign antigens in the vaccine and activates its defence mechanisms. During the third stage, specialised B-cells produce targeted antibodies to neutralise the pathogen, while T-cells learn to identify and destroy infected cells. The crucial fourth stage involves the creation of memory cells, which remain in the body long after the initial immune response. If the individual is later exposed to the actual pathogen, these memory cells enable a much faster and stronger immune response, typically preventing the disease from developing. This is why vaccination is considered one of the most effective public health interventions in medical history.',
    dataDetails: 'Four stages: vaccine administration, immune recognition, antibody production (B-cells) + T-cell activation, memory cell formation. Provides long-term immunity.'
  },
  {
    id: 'di-029',
    type: 'table',
    title: 'Water Quality Parameters for River Monitoring',
    description: 'A table showing six water quality indicators for three river sections (upstream, midstream, downstream): pH (7.2, 6.8, 6.3), dissolved oxygen mg/L (9.5, 6.2, 3.8), turbidity NTU (5, 22, 48), nitrates mg/L (1.2, 8.5, 15.3), E.coli colonies/100mL (10, 450, 2100), temperature degrees C (14, 17, 21).',
    keyPoints: [
      'Water quality deteriorates progressively from upstream to downstream.',
      'Dissolved oxygen drops from 9.5 to 3.8 mg/L, indicating increasing pollution.',
      'E. coli levels increase dramatically, reaching 2,100 colonies downstream.',
      'Nitrate levels increase twelve-fold, suggesting agricultural runoff contamination.',
      'The downstream section likely fails safe water quality standards for recreation.'
    ],
    sampleResponse: 'This table presents water quality monitoring data across three sections of a river using six key indicators. The data reveals a clear pattern of deteriorating water quality as the river flows downstream. Dissolved oxygen, essential for aquatic life, drops dramatically from 9.5 milligrams per litre upstream to just 3.8 downstream, indicating increasing organic pollution. E. coli bacteria levels surge from a safe 10 colonies upstream to a concerning 2,100 downstream, suggesting sewage contamination. Nitrate levels increase twelve-fold from 1.2 to 15.3 milligrams per litre, likely indicating agricultural runoff. Turbidity nearly increases tenfold, while pH becomes more acidic. The temperature also rises by 7 degrees, possibly due to reduced tree cover and urban heat effects. These measurements collectively suggest that significant pollution sources are entering the river along its course, requiring urgent remediation measures.',
    dataDetails: 'pH: 7.2, 6.8, 6.3; DO: 9.5, 6.2, 3.8 mg/L; Turbidity: 5, 22, 48 NTU; Nitrates: 1.2, 8.5, 15.3 mg/L; E.coli: 10, 450, 2100; Temp: 14, 17, 21 degrees C'
  },
  {
    id: 'di-030',
    type: 'bar',
    title: 'Percentage of Waste Recycled by Material Type (Australia, 2023)',
    description: 'A vertical bar chart showing recycling rates in Australia: metals 90%, paper/cardboard 60%, glass 57%, plastics 13%, organic waste 35%, e-waste 10%, textiles 7%. A target line at 80% marks the 2030 national recycling target.',
    keyPoints: [
      'Metals have the highest recycling rate at 90%, already exceeding the 2030 target.',
      'Plastics recycling is very low at only 13%, far below the target.',
      'E-waste and textiles have the poorest recycling rates at 10% and 7% respectively.',
      'Paper and glass have moderate recycling rates around 57-60%.',
      'Most material categories fall well short of the 80% target for 2030.'
    ],
    sampleResponse: 'This bar chart shows the recycling rates by material type in Australia in 2023, measured against the national 2030 target of 80 per cent. Metals perform exceptionally well at 90 per cent, the only category already exceeding the target. Paper and cardboard achieve a moderate rate of 60 per cent, with glass close behind at 57 per cent. Organic waste is recycled at 35 per cent. However, the data reveals serious shortfalls in several categories. Plastics are recycled at just 13 per cent, electronic waste at only 10 per cent, and textiles at a mere 7 per cent. These three categories represent significant environmental challenges as they often end up in landfill or pollute natural environments. The gap between current performance and the 2030 target highlights the need for substantial investment in recycling infrastructure, improved collection systems, and stronger consumer awareness campaigns.',
    dataDetails: 'Metals: 90%; Paper: 60%; Glass: 57%; Organic: 35%; Plastics: 13%; E-waste: 10%; Textiles: 7%; 2030 target: 80%'
  },
  {
    id: 'di-031',
    type: 'line',
    title: 'Trends in Global Poverty (1990-2023)',
    description: 'A dual-axis line graph. One line shows the percentage of world population living below $2.15/day: declining from 36% in 1990 to 9% in 2023. The second line shows the absolute number: declining from 1.9 billion to 700 million. Both lines show steepest decline between 2000 and 2015.',
    keyPoints: [
      'The proportion of people in extreme poverty fell from 36% to 9% between 1990 and 2023.',
      'In absolute terms, poverty decreased from 1.9 billion to 700 million people.',
      'The steepest decline occurred between 2000 and 2015, driven largely by Chinese economic growth.',
      'Despite impressive proportional decline, 700 million people still live in extreme poverty.',
      'Progress slowed after 2015 and briefly reversed during the 2020 pandemic.'
    ],
    sampleResponse: 'This dual-axis line graph illustrates the decline in global extreme poverty from 1990 to 2023. The data shows remarkable progress: the proportion of the world\'s population living below the 2 dollar 15 cents a day poverty line fell from 36 per cent in 1990 to approximately 9 per cent by 2023. In absolute numbers, this represents a reduction from 1.9 billion to 700 million people. The steepest decline occurred between 2000 and 2015, driven significantly by rapid economic growth in China and other developing nations. However, the graph also reveals concerning trends: progress has slowed noticeably since 2015, and a brief reversal occurred around 2020 due to the pandemic\'s economic impact. While the overall trajectory is positive, the fact that 700 million people still live in extreme poverty reminds us that significant challenges remain, particularly in Sub-Saharan Africa and conflict-affected regions.',
    dataDetails: 'Rate: 36%(1990), 28%(2000), 14%(2010), 10%(2019), 11%(2020), 9%(2023). Absolute: 1.9B, 1.7B, 0.9B, 0.73B, 0.77B, 0.70B.'
  },
  {
    id: 'di-032',
    type: 'image',
    title: 'Diagram of the Human Digestive System',
    description: 'A labelled anatomical diagram showing the digestive tract: mouth, oesophagus, stomach, liver, gallbladder, pancreas, small intestine, large intestine, appendix, and rectum. Arrows indicate the direction of food passage. Key digestive processes are noted at each stage.',
    keyPoints: [
      'Digestion begins in the mouth with mechanical breakdown and enzyme action (amylase).',
      'The stomach uses acid and pepsin to break down proteins.',
      'The small intestine is where most nutrient absorption occurs.',
      'The liver and pancreas produce essential digestive secretions.',
      'The large intestine absorbs water and forms waste for excretion.'
    ],
    sampleResponse: 'This labelled diagram illustrates the human digestive system, tracing the path of food from ingestion to excretion. Digestion begins in the mouth, where food is mechanically broken down by chewing and chemically processed by the enzyme amylase. Food then travels down the oesophagus to the stomach, where hydrochloric acid and the enzyme pepsin break down proteins. The liver and pancreas, shown as accessory organs, produce bile and digestive enzymes that are released into the small intestine. The small intestine is the primary site of nutrient absorption, using its large surface area lined with villi. Remaining material passes into the large intestine, where water is reabsorbed and waste is compacted. The appendix is visible but plays a minimal role in digestion. Finally, waste exits through the rectum. The diagram effectively shows how each organ has a specialised function in the sequential process of digestion.',
    dataDetails: 'Path: mouth, oesophagus, stomach, small intestine, large intestine, rectum. Accessory organs: liver, gallbladder, pancreas. Small intestine: ~6m long, main absorption site.'
  },
  {
    id: 'di-033',
    type: 'bar',
    title: 'Average House Prices in Australian Capital Cities (2023)',
    description: 'A bar chart showing median house prices in AUD: Sydney ($1,400,000), Melbourne ($950,000), Brisbane ($780,000), Canberra ($870,000), Adelaide ($720,000), Perth ($600,000), Hobart ($650,000), Darwin ($530,000). National median marked at $850,000.',
    keyPoints: [
      'Sydney has the highest median house price at $1.4 million, far above the national median.',
      'Darwin is the most affordable capital at $530,000.',
      'The gap between Sydney and Darwin is $870,000.',
      'Melbourne is the second most expensive at $950,000.',
      'Only Sydney and Canberra exceed the national median of $850,000.'
    ],
    sampleResponse: 'This bar chart compares median house prices across Australia\'s eight capital cities in 2023. Sydney stands out as dramatically more expensive than all other capitals, with a median price of 1.4 million Australian dollars, well above the national median of 850,000 dollars. Melbourne follows as the second most expensive at 950,000 dollars. Canberra ranks third at 870,000 dollars, the only other city exceeding the national median. Brisbane and Adelaide sit in the middle range at 780,000 and 720,000 dollars respectively. At the lower end, Hobart records 650,000 dollars, Perth 600,000, and Darwin is the most affordable at 530,000 dollars. The enormous gap of 870,000 dollars between Sydney and Darwin highlights significant regional disparities in housing affordability, which has become a major social and political issue in Australia, particularly for younger generations seeking to enter the property market.',
    dataDetails: 'Sydney: $1.4M; Melbourne: $950K; Canberra: $870K; Brisbane: $780K; Adelaide: $720K; Hobart: $650K; Perth: $600K; Darwin: $530K; National median: $850K'
  },
  {
    id: 'di-034',
    type: 'process',
    title: 'Photosynthesis Process',
    description: 'A diagram showing photosynthesis in two stages. Light-dependent reactions: sunlight hits chlorophyll in the thylakoid membrane, water molecules are split, oxygen is released, and ATP/NADPH are produced. Light-independent reactions (Calvin Cycle): CO2 is fixed using ATP and NADPH to produce glucose in the stroma of the chloroplast.',
    keyPoints: [
      'Photosynthesis occurs in chloroplasts and has two main stages.',
      'Light-dependent reactions require sunlight and occur in the thylakoid membrane.',
      'Water is split to provide electrons and release oxygen as a by-product.',
      'The Calvin Cycle fixes CO2 into glucose using energy from ATP and NADPH.',
      'The overall equation: 6CO2 + 6H2O + light energy produces C6H12O6 + 6O2.'
    ],
    sampleResponse: 'This diagram illustrates the two-stage process of photosynthesis, which occurs within the chloroplasts of plant cells. The first stage, the light-dependent reactions, takes place in the thylakoid membrane. Here, sunlight energy is captured by chlorophyll pigments and used to split water molecules, releasing oxygen as a by-product and generating energy carriers in the form of ATP and NADPH. The second stage, known as the Calvin Cycle or light-independent reactions, occurs in the stroma of the chloroplast. In this stage, carbon dioxide from the atmosphere is captured and combined with the ATP and NADPH produced earlier to synthesise glucose molecules. This glucose serves as the primary energy source for the plant. The overall process can be summarised as six molecules of carbon dioxide plus six molecules of water, in the presence of light, producing one molecule of glucose and six molecules of oxygen.',
    dataDetails: 'Stage 1 (thylakoid): light + H2O produces O2 + ATP + NADPH. Stage 2 (stroma/Calvin): CO2 + ATP + NADPH produces glucose. Overall: 6CO2 + 6H2O + light produces C6H12O6 + 6O2.'
  },
  {
    id: 'di-035',
    type: 'line',
    title: 'Global Electric Vehicle Sales (2015-2023)',
    description: 'A line graph showing rapid exponential growth in EV sales: 0.5 million in 2015, 2.1 million in 2019, 6.6 million in 2021, 10.5 million in 2022, 14.2 million in 2023. A secondary line shows EV market share of total car sales rising from 0.7% to 18%. China accounts for approximately 60% of global EV sales.',
    keyPoints: [
      'EV sales grew from 0.5 million to 14.2 million units between 2015 and 2023.',
      'Growth has been exponential, with sales more than doubling between 2021 and 2023.',
      'EV market share rose from 0.7% to 18% of total car sales.',
      'China dominates the global EV market, accounting for roughly 60% of sales.',
      'The acceleration in growth suggests EVs are reaching mainstream adoption.'
    ],
    sampleResponse: 'This line graph tracks global electric vehicle sales from 2015 to 2023, revealing extraordinary exponential growth. Sales rose from just half a million units in 2015 to 14.2 million in 2023, a remarkable twenty-eight-fold increase over eight years. The secondary line shows the EV market share climbing from 0.7 per cent to 18 per cent of total global car sales over the same period. The growth trajectory has been particularly steep since 2020, with sales more than doubling from 6.6 million in 2021 to 14.2 million in 2023. This acceleration has been driven by improving battery technology, expanding charging infrastructure, government incentives, and growing consumer environmental awareness. Notably, China accounts for approximately 60 per cent of global EV sales, making it the dominant market. The trajectory suggests the automotive industry is undergoing a fundamental transition from internal combustion engines to electric powertrains.',
    dataDetails: '2015: 0.5M (0.7%); 2017: 1.2M (1.5%); 2019: 2.1M (2.5%); 2021: 6.6M (9%); 2022: 10.5M (14%); 2023: 14.2M (18%). China: ~60% of global sales.'
  },
  {
    id: 'di-036',
    type: 'bar',
    title: 'Global AI Market Revenue by Sector (2020-2025)',
    description: 'A grouped bar chart showing AI market revenue in billions of dollars across healthcare, finance, manufacturing, retail, and transportation for 2020, 2022, and 2025 (projected). Healthcare AI grows from $6B to $45B. Finance grows from $8B to $35B. Manufacturing from $5B to $28B. Retail from $4B to $25B. Transportation from $3B to $20B.',
    keyPoints: [
      'Healthcare AI experienced the largest revenue growth, reaching a projected $45 billion by 2025.',
      'Finance was the second-largest AI market, growing from $8 billion to $35 billion.',
      'All five sectors showed significant growth, with total AI revenue more than quadrupling.',
      'The growth rate accelerated between 2022 and 2025 compared to 2020–2022.',
      'Healthcare and finance together account for over half of all AI market revenue.'
    ],
    sampleResponse: 'This grouped bar chart presents global AI market revenue across five sectors from 2020 to 2025, with 2025 figures being projections. The most notable trend is the extraordinary growth across all sectors. Healthcare AI leads with the highest revenue, surging from approximately 6 billion dollars in 2020 to a projected 45 billion by 2025. The finance sector follows closely, growing from 8 billion to 35 billion. Manufacturing, retail, and transportation also show substantial increases. Overall, the data indicates that AI adoption is accelerating across all industries, with healthcare and finance driving the majority of revenue growth.',
    dataDetails: 'Healthcare: $6B→$18B→$45B; Finance: $8B→$20B→$35B; Manufacturing: $5B→$14B→$28B; Retail: $4B→$12B→$25B; Transportation: $3B→$9B→$20B'
  },
  {
    id: 'di-037',
    type: 'pie',
    title: 'Global Greenhouse Gas Emissions by Sector (2024)',
    description: 'A pie chart showing the distribution of global greenhouse gas emissions. Energy production accounts for 35%, transportation 16%, industry 21%, agriculture 10%, buildings 6%, and other sources 12%.',
    keyPoints: [
      'Energy production is the single largest source of emissions at 35%.',
      'Industry contributes 21%, making it the second-largest emitting sector.',
      'Transportation accounts for 16% of total greenhouse gas emissions.',
      'Agriculture generates 10% of emissions, primarily from livestock and land use.',
      'Energy production and industry together account for over half of all emissions.'
    ],
    sampleResponse: 'This pie chart illustrates the breakdown of global greenhouse gas emissions by sector in 2024. Energy production is the dominant source, responsible for 35 per cent of total emissions. Industry is the second-largest contributor at 21 per cent, followed by transportation at 16 per cent. Agriculture accounts for 10 per cent, primarily from livestock and land-use changes. Buildings contribute 6 per cent, while other sources make up the remaining 12 per cent. The data clearly highlights that decarbonising the energy and industrial sectors must be the top priority for achieving meaningful emissions reductions.',
    dataDetails: 'Energy production: 35%; Industry: 21%; Transportation: 16%; Agriculture: 10%; Buildings: 6%; Other: 12%'
  },
  {
    id: 'di-038',
    type: 'line',
    title: 'Global Remote Work Adoption Rate (2019-2025)',
    description: 'A line graph showing the percentage of workers engaged in remote or hybrid work globally. The line begins at 5% in 2019, jumps dramatically to 35% in 2020, stabilises at 28% in 2021, then gradually settles to 22% by 2023 and remains around 20% projected for 2025.',
    keyPoints: [
      'Remote work surged from 5% to 35% during the pandemic in 2020.',
      'The rate declined after the peak but remained far above pre-pandemic levels.',
      'By 2023, approximately 22% of the global workforce worked remotely or in hybrid arrangements.',
      'The projected 2025 rate of 20% suggests remote work is now a permanent feature of employment.',
      'The data indicates a structural shift rather than a temporary trend.'
    ],
    sampleResponse: 'This line graph tracks the global remote work adoption rate from 2019 to 2025. The most dramatic feature is the sharp spike from 5 per cent in 2019 to 35 per cent in 2020, driven by the pandemic. Following this peak, the rate gradually declined as offices reopened, settling at approximately 28 per cent in 2021 and 22 per cent by 2023. The projected rate for 2025 is around 20 per cent. Significantly, this remains four times higher than the pre-pandemic level, indicating that remote and hybrid work has become a permanent structural feature of the global labour market rather than a temporary response to extraordinary circumstances.',
    dataDetails: '2019: 5%; 2020: 35%; 2021: 28%; 2022: 24%; 2023: 22%; 2024: 21%; 2025: 20% (projected)'
  },
  {
    id: 'di-039',
    type: 'bar',
    title: 'Top 10 Countries by Renewable Energy Share of Electricity (2024)',
    description: 'A horizontal bar chart ranking countries by the percentage of electricity generated from renewable sources. Iceland leads at 100%, Norway 98%, Costa Rica 95%, Uruguay 94%, Denmark 84%, Scotland 80%, Portugal 72%, New Zealand 65%, Sweden 62%, and Germany 55%.',
    keyPoints: [
      'Iceland achieves virtually 100% renewable electricity, primarily from geothermal and hydropower.',
      'Nordic countries dominate the top positions due to abundant hydropower and wind resources.',
      'Several developing nations like Costa Rica and Uruguay rank above major European economies.',
      'Germany, despite being a leading investor in renewables, ranks tenth at 55%.',
      'The top five countries all exceed 80% renewable electricity generation.'
    ],
    sampleResponse: 'This horizontal bar chart ranks the top ten countries by their share of renewable electricity generation in 2024. Iceland leads at 100 per cent, drawing almost entirely from geothermal and hydropower sources. Norway follows closely at 98 per cent, and Costa Rica achieves an impressive 95 per cent. An interesting observation is that several smaller or developing nations outperform major industrial economies. For example, Uruguay at 94 per cent and Denmark at 84 per cent both rank ahead of Germany, which sits at 55 per cent despite being a major investor in renewable technology. The data demonstrates that geography, natural resources, and political will all play important roles in the energy transition.',
    dataDetails: 'Iceland: 100%; Norway: 98%; Costa Rica: 95%; Uruguay: 94%; Denmark: 84%; Scotland: 80%; Portugal: 72%; New Zealand: 65%; Sweden: 62%; Germany: 55%'
  },
  {
    id: 'di-040',
    type: 'line',
    title: 'Global Biodiversity Index Score (1970-2024)',
    description: 'A line graph showing the Living Planet Index declining steadily from a baseline of 1.0 in 1970 to approximately 0.31 in 2024, representing a 69% decline in monitored wildlife populations. The decline is steepest in freshwater species (83% decline) followed by terrestrial (69%) and marine (56%).',
    keyPoints: [
      'The overall Living Planet Index has declined by 69% since 1970.',
      'Freshwater species have suffered the greatest losses at 83% decline.',
      'The rate of decline has slowed slightly since 2010 but continues downward.',
      'Latin America and the Caribbean experienced the steepest regional decline.',
      'The data underscores the urgency of global conservation targets.'
    ],
    sampleResponse: 'This line graph presents the Living Planet Index from 1970 to 2024, tracking the health of global biodiversity. Starting from a baseline of 1.0 in 1970, the index has declined steadily to approximately 0.31 by 2024, representing a devastating 69 per cent reduction in monitored wildlife populations. The decline has been most severe among freshwater species, which have decreased by 83 per cent. Terrestrial species have declined by 69 per cent and marine species by 56 per cent. While the rate of decline has shown some moderation since 2010, the overall trajectory remains alarming. This data powerfully illustrates the biodiversity crisis facing the planet and supports the urgency of conservation frameworks such as the 30-by-30 target.',
    dataDetails: '1970: 1.0; 1980: 0.82; 1990: 0.65; 2000: 0.52; 2010: 0.40; 2020: 0.33; 2024: 0.31. Freshwater: -83%; Terrestrial: -69%; Marine: -56%'
  },
  {
    id: 'di-041',
    type: 'pie',
    title: 'Global Water Usage by Sector (2024)',
    description: 'A pie chart showing global freshwater usage distribution. Agriculture accounts for 70%, industry 19%, and domestic use 11%. Within agriculture, irrigation represents 90% of agricultural water use.',
    keyPoints: [
      'Agriculture dominates global water usage at 70% of all freshwater consumption.',
      'Industrial use accounts for 19%, including manufacturing and energy production.',
      'Domestic household use represents only 11% of total freshwater consumption.',
      'Irrigation makes up the vast majority of agricultural water use.',
      'Water scarcity therefore requires primarily agricultural efficiency improvements.'
    ],
    sampleResponse: 'This pie chart displays the distribution of global freshwater usage by sector in 2024. The most striking finding is the overwhelming dominance of agriculture, which accounts for 70 per cent of all freshwater consumption, with irrigation representing 90 per cent of that agricultural use. Industry is the second-largest consumer at 19 per cent, while domestic household use constitutes just 11 per cent of the total. This distribution has important implications for water conservation policies, as it suggests that the most effective strategies for addressing water scarcity must focus on improving agricultural efficiency, particularly irrigation methods, rather than solely targeting household consumption.',
    dataDetails: 'Agriculture: 70% (irrigation 90% of this); Industry: 19%; Domestic: 11%'
  },
  {
    id: 'di-042',
    type: 'bar',
    title: 'Global Space Industry Revenue by Segment (2020 vs 2025)',
    description: 'A grouped bar chart comparing space industry revenue in 2020 and 2025 (projected). Satellite services: $127B→$165B. Ground equipment: $134B→$160B. Launch services: $5.3B→$12B. Space manufacturing: $12B→$22B. Space tourism: $0.3B→$3B.',
    keyPoints: [
      'Satellite services remain the largest revenue segment at $165 billion projected for 2025.',
      'Launch services showed the highest percentage growth, more than doubling to $12 billion.',
      'Space tourism, while still small, grew tenfold from $0.3 billion to $3 billion.',
      'The total space economy is projected to exceed $362 billion by 2025.',
      'Private sector investment is driving growth across all segments.'
    ],
    sampleResponse: 'This grouped bar chart compares global space industry revenue across five segments between 2020 and 2025. Satellite services remain the dominant segment, projected to reach 165 billion dollars by 2025, up from 127 billion. Ground equipment follows at 160 billion. However, the most dynamic growth areas are launch services, which more than doubled to 12 billion, and space tourism, which grew tenfold from 0.3 to 3 billion dollars, albeit from a very small base. Space manufacturing also showed strong growth, reaching a projected 22 billion. Overall, the space economy is expanding rapidly across all segments, driven by increased private sector investment and declining launch costs.',
    dataDetails: 'Satellite services: $127B→$165B; Ground equipment: $134B→$160B; Launch services: $5.3B→$12B; Manufacturing: $12B→$22B; Tourism: $0.3B→$3B'
  },
  {
    id: 'di-043',
    type: 'line',
    title: 'Global Average Internet Speed (2015-2025)',
    description: 'A line graph showing the increase in global average download speed from 5 Mbps in 2015 to 47 Mbps in 2023 and projected 55 Mbps in 2025. Mobile speeds increased from 2 Mbps to 32 Mbps. Fixed broadband increased from 24 Mbps to 85 Mbps over the same period.',
    keyPoints: [
      'Global average download speed has increased nearly tenfold since 2015.',
      'Fixed broadband speeds grew from 24 Mbps to 85 Mbps.',
      'Mobile internet speeds increased sixteenfold, from 2 Mbps to 32 Mbps.',
      'The gap between fixed and mobile speeds has narrowed significantly.',
      '5G deployment is accelerating mobile speed growth in developed countries.'
    ],
    sampleResponse: 'This line graph tracks the growth of global average internet speeds from 2015 to 2025 across three measures: overall average, fixed broadband, and mobile. All three show substantial upward trends. The overall average increased from 5 megabits per second in 2015 to 47 in 2023, with a projection of 55 by 2025. Fixed broadband speeds rose from 24 to 85 megabits per second, while mobile speeds showed the most dramatic relative increase, growing sixteenfold from 2 to 32 megabits per second. The narrowing gap between fixed and mobile speeds reflects the global rollout of 4G and 5G networks. This improvement in connectivity underpins the growth of cloud computing, streaming services, and remote work capabilities.',
    dataDetails: 'Overall: 5→12→25→38→47→55 Mbps; Fixed: 24→35→52→70→85→95 Mbps; Mobile: 2→6→15→25→32→40 Mbps (2015-2025)'
  },
  {
    id: 'di-044',
    type: 'pie',
    title: 'Causes of Global Deforestation (2020-2024)',
    description: 'A pie chart showing the primary drivers of deforestation worldwide. Cattle ranching accounts for 41%, soy cultivation 13%, palm oil 8%, logging 13%, subsistence farming 11%, and other causes 14%.',
    keyPoints: [
      'Cattle ranching is the single largest driver of deforestation at 41%.',
      'Agriculture-related activities collectively account for over 70% of deforestation.',
      'Commercial crops (soy and palm oil) together contribute 21%.',
      'Logging accounts for 13%, primarily in tropical and boreal forests.',
      'South America and Southeast Asia are the most affected regions.'
    ],
    sampleResponse: 'This pie chart illustrates the primary causes of global deforestation between 2020 and 2024. Cattle ranching is by far the largest driver, responsible for 41 per cent of all deforestation, predominantly in the Amazon region. Soy cultivation and logging each contribute 13 per cent, while subsistence farming accounts for 11 per cent. Palm oil production, concentrated in Southeast Asia, drives 8 per cent of forest loss. Other causes make up the remaining 14 per cent. Collectively, agriculture-related activities are responsible for over 70 per cent of deforestation. This data suggests that addressing meat consumption and agricultural expansion practices must be central to any effective strategy for preserving the world\'s remaining forests.',
    dataDetails: 'Cattle ranching: 41%; Soy: 13%; Logging: 13%; Subsistence farming: 11%; Palm oil: 8%; Other: 14%'
  },
  {
    id: 'di-045',
    type: 'bar',
    title: 'Global Mental Health Spending per Capita by Region (2024)',
    description: 'A bar chart comparing mental health expenditure per person across regions. North America: $250, Europe: $120, East Asia: $40, Latin America: $15, South Asia: $3, Sub-Saharan Africa: $0.50.',
    keyPoints: [
      'North America spends $250 per capita on mental health, the highest globally.',
      'There is a 500-fold gap between the highest and lowest spending regions.',
      'Sub-Saharan Africa spends just $0.50 per person despite high need.',
      'Europe spends approximately half of North America per capita.',
      'The data highlights extreme inequality in global mental health provision.'
    ],
    sampleResponse: 'This bar chart presents global mental health expenditure per capita across six regions in 2024. The disparities are stark. North America leads with approximately 250 dollars per person, followed by Europe at 120 dollars. East Asia spends 40 dollars per capita, while Latin America allocates just 15 dollars. The most alarming figures come from South Asia at 3 dollars and Sub-Saharan Africa at merely 50 cents per person. This represents a 500-fold gap between the highest and lowest spending regions. The data reveals profound inequality in mental health provision globally, with the regions that often face the greatest psychosocial stressors receiving the least investment in mental health services.',
    dataDetails: 'North America: $250; Europe: $120; East Asia: $40; Latin America: $15; South Asia: $3; Sub-Saharan Africa: $0.50'
  },
  {
    id: 'di-046',
    type: 'line',
    title: 'Global Plastic Waste Generation (2000-2025)',
    description: 'A line graph showing plastic waste generation rising from 156 million tonnes in 2000 to 380 million tonnes in 2023 and projected 400 million tonnes in 2025. Only 9% is recycled, 12% incinerated, and 79% accumulates in landfills or the natural environment.',
    keyPoints: [
      'Plastic waste has more than doubled from 156 million to 380 million tonnes since 2000.',
      'Only 9% of all plastic ever produced has been recycled.',
      'The vast majority (79%) ends up in landfills or the natural environment.',
      'Growth shows no sign of slowing, with 400 million tonnes projected for 2025.',
      'Single-use plastics account for approximately 40% of all plastic production.'
    ],
    sampleResponse: 'This line graph tracks global plastic waste generation from 2000 to 2025. The trend is concerning, with waste more than doubling from 156 million tonnes in 2000 to 380 million tonnes in 2023, with a projected 400 million tonnes by 2025. The graph is accompanied by data showing that only 9 per cent of plastic waste is recycled, while 12 per cent is incinerated and a staggering 79 per cent accumulates in landfills or the natural environment. The continued upward trajectory, despite growing environmental awareness, highlights the failure of current waste management approaches. This data supports calls for a global plastics treaty and a fundamental shift from single-use to circular plastic economies.',
    dataDetails: '2000: 156Mt; 2005: 200Mt; 2010: 245Mt; 2015: 300Mt; 2020: 340Mt; 2023: 380Mt; 2025: 400Mt (proj). Recycled: 9%; Incinerated: 12%; Landfill/environment: 79%'
  },
  {
    id: 'di-047',
    type: 'bar',
    title: 'Student Enrolment in STEM vs Non-STEM Degrees (2015-2024)',
    description: 'A grouped bar chart showing university enrolment trends. STEM enrolment grew from 22% to 34% of total enrolment. Non-STEM declined from 78% to 66%. Computer science saw the largest individual growth, tripling from 5% to 15% of total enrolment.',
    keyPoints: [
      'STEM enrolment increased from 22% to 34% of total university enrolment.',
      'Computer science saw the most dramatic growth, tripling its share.',
      'Non-STEM subjects declined proportionally but still represent the majority.',
      'Engineering and health sciences also showed significant growth.',
      'The shift reflects changing labour market demands and government incentives.'
    ],
    sampleResponse: 'This grouped bar chart compares university enrolment in STEM versus non-STEM degree programmes from 2015 to 2024. The data reveals a clear shift towards STEM fields, with their share of total enrolment growing from 22 to 34 per cent. Computer science experienced the most dramatic increase, tripling from 5 to 15 per cent of all enrolments. Engineering and health sciences also showed significant growth. Conversely, non-STEM enrolment declined proportionally from 78 to 66 per cent, though these fields still represent the majority. This trend reflects evolving labour market demands, particularly in technology and healthcare, as well as government incentives and scholarship programmes designed to address skills shortages in STEM industries.',
    dataDetails: 'STEM total: 22%→26%→30%→34%; Computer Science: 5%→8%→12%→15%; Engineering: 8%→9%→10%→11%; Health Sci: 5%→6%→7%→8%; Non-STEM: 78%→74%→70%→66%'
  },
  {
    id: 'di-048',
    type: 'pie',
    title: 'Global Energy Storage Capacity by Technology (2024)',
    description: 'A pie chart showing the breakdown of grid-scale energy storage capacity. Lithium-ion batteries account for 58%, pumped hydro 32%, flow batteries 4%, compressed air 3%, and other technologies 3%.',
    keyPoints: [
      'Lithium-ion batteries dominate grid-scale storage at 58% of installed capacity.',
      'Pumped hydro remains significant at 32%, being the oldest storage technology.',
      'Emerging technologies like flow batteries and compressed air represent small but growing shares.',
      'Lithium-ion share has increased rapidly from under 20% in 2018.',
      'Battery storage is essential for integrating intermittent renewable energy sources.'
    ],
    sampleResponse: 'This pie chart shows the distribution of global grid-scale energy storage capacity by technology in 2024. Lithium-ion batteries have become the dominant technology, accounting for 58 per cent of total installed capacity, up from under 20 per cent just six years ago. Pumped hydroelectric storage, the oldest grid storage technology, maintains a significant 32 per cent share. Emerging technologies including flow batteries at 4 per cent and compressed air at 3 per cent represent small but growing segments. The rapid rise of lithium-ion technology reflects declining battery costs and the urgent need for storage solutions to support the integration of intermittent renewable energy sources like solar and wind into electricity grids.',
    dataDetails: 'Lithium-ion: 58%; Pumped hydro: 32%; Flow batteries: 4%; Compressed air: 3%; Other: 3%'
  },
  {
    id: 'di-049',
    type: 'bar',
    title: 'Global Telemedicine Usage Before and After the Pandemic (2019 vs 2024)',
    description: 'A bar chart comparing telemedicine usage across specialties. General practice: 8%→42%. Mental health: 12%→58%. Dermatology: 5%→35%. Chronic disease management: 10%→48%. Paediatrics: 6%→30%. Overall: 7%→40%.',
    keyPoints: [
      'Overall telemedicine usage increased nearly sixfold from 7% to 40% of consultations.',
      'Mental health services saw the highest adoption rate at 58%.',
      'Chronic disease management reached 48% telehealth adoption.',
      'Even traditionally in-person specialties like dermatology reached 35%.',
      'The shift appears permanent, with usage stabilising well above pre-pandemic levels.'
    ],
    sampleResponse: 'This bar chart compares telemedicine usage rates across medical specialties between 2019 and 2024. The data reveals a dramatic and lasting shift in healthcare delivery. Overall, telehealth consultations increased nearly sixfold from 7 to 40 per cent. Mental health services saw the highest adoption at 58 per cent, reflecting the convenience and reduced stigma of remote psychological consultations. Chronic disease management reached 48 per cent, and general practice 42 per cent. Even dermatology, traditionally requiring physical examination, reached 35 per cent telehealth adoption. The uniformly high post-pandemic rates across all specialties suggest that telemedicine has become a permanent and fundamental feature of modern healthcare delivery.',
    dataDetails: 'General practice: 8%→42%; Mental health: 12%→58%; Dermatology: 5%→35%; Chronic disease: 10%→48%; Paediatrics: 6%→30%; Overall: 7%→40%'
  },
  {
    id: 'di-050',
    type: 'line',
    title: 'Global Carbon Dioxide Concentration in the Atmosphere (1960-2025)',
    description: 'A line graph showing atmospheric CO2 levels rising from 317 ppm in 1960 to 425 ppm in 2024, with the rate of increase accelerating from about 0.9 ppm per year in the 1960s to over 2.5 ppm per year currently. The iconic Keeling Curve shows an unbroken upward trend.',
    keyPoints: [
      'CO2 levels have risen from 317 ppm to 425 ppm since 1960.',
      'The rate of increase has nearly tripled over the period.',
      'There has been no single year of decline despite climate agreements.',
      'The 400 ppm threshold was crossed permanently in 2016.',
      'Current levels are the highest in at least 800,000 years.'
    ],
    sampleResponse: 'This line graph presents the Keeling Curve, tracking atmospheric carbon dioxide concentration from 1960 to 2025. The data shows an unbroken upward trend, rising from 317 parts per million in 1960 to 425 ppm in 2024. Perhaps most alarming is the accelerating rate of increase, which has nearly tripled from approximately 0.9 ppm per year in the 1960s to over 2.5 ppm per year currently. The graph also reveals seasonal oscillations caused by vegetation cycles, but the underlying trend shows no reversal at any point. The 400 ppm threshold, considered symbolic by climate scientists, was permanently exceeded in 2016. Current levels are the highest in at least 800,000 years, underscoring the unprecedented nature of anthropogenic climate change.',
    dataDetails: '1960: 317 ppm; 1970: 326; 1980: 339; 1990: 354; 2000: 369; 2010: 390; 2020: 414; 2024: 425 ppm. Rate: 0.9→1.2→1.5→1.8→2.0→2.4→2.5 ppm/year'
  },
  {
    id: 'di-051',
    type: 'bar',
    title: 'Global Cybersecurity Spending by Category (2023)',
    description: 'A bar chart showing cybersecurity spending in billions. Network security: $22B, cloud security: $18B, endpoint security: $15B, identity management: $14B, application security: $10B, data security: $9B, security services: $65B.',
    keyPoints: [
      'Security services is the largest category at $65 billion, reflecting outsourcing trends.',
      'Network security and cloud security are the top product categories.',
      'Cloud security grew fastest, at 28% year-over-year growth.',
      'Total global cybersecurity spending exceeds $153 billion annually.',
      'The rapid growth reflects increasing cyber threats and regulatory requirements.'
    ],
    sampleResponse: 'This bar chart presents global cybersecurity spending by category in 2023. Security services dominates at 65 billion dollars, reflecting the widespread trend of organisations outsourcing their cybersecurity operations. Among product categories, network security leads at 22 billion, followed by cloud security at 18 billion, and endpoint security at 15 billion. Identity management and application security contribute 14 and 10 billion respectively. Total global spending exceeds 153 billion dollars annually. Cloud security showed the fastest growth at 28 per cent year-over-year, driven by the ongoing migration of enterprise infrastructure to cloud platforms. The substantial and growing investment across all categories underscores the escalating sophistication of cyber threats and tightening regulatory requirements worldwide.',
    dataDetails: 'Security services: $65B; Network security: $22B; Cloud security: $18B; Endpoint: $15B; Identity: $14B; Application: $10B; Data security: $9B. Total: $153B'
  },
  {
    id: 'di-052',
    type: 'pie',
    title: 'World Population Distribution by Continent (2025)',
    description: 'A pie chart showing the global population distribution. Asia: 59.4%, Africa: 18.2%, Europe: 9.3%, Latin America and Caribbean: 8.2%, Northern America: 4.6%, Oceania: 0.5%.',
    keyPoints: [
      'Asia contains nearly 60% of the world population with approximately 4.8 billion people.',
      'Africa is the second most populous continent at 18.2% and growing fastest.',
      'Europe\'s share has declined and now represents under 10%.',
      'Africa is projected to account for over 25% by 2050.',
      'Oceania has the smallest population share at 0.5%.'
    ],
    sampleResponse: 'This pie chart illustrates the distribution of the world\'s population across continents in 2025. Asia dominates overwhelmingly with 59.4 per cent of the global population, housing approximately 4.8 billion people. Africa is the second-largest at 18.2 per cent, and notably is the fastest-growing continent, projected to exceed 25 per cent by 2050. Europe accounts for 9.3 per cent, a share that continues to decline due to low birth rates and ageing populations. Latin America and the Caribbean represent 8.2 per cent, Northern America 4.6 per cent, and Oceania just 0.5 per cent. These figures highlight the demographic weight of Asia and the rapid rise of Africa as a population centre.',
    dataDetails: 'Asia: 59.4% (4.8B); Africa: 18.2% (1.5B); Europe: 9.3% (750M); Latin America: 8.2% (660M); North America: 4.6% (375M); Oceania: 0.5% (46M)'
  },
  {
    id: 'di-053',
    type: 'line',
    title: 'Global Smartphone Penetration Rate (2010-2025)',
    description: 'A line graph showing smartphone adoption rising from 10% of the global population in 2010 to 55% in 2020 and 72% in 2025 (projected). Developed nations reached 85% by 2020, while developing nations moved from 20% to 62% by 2025.',
    keyPoints: [
      'Global smartphone penetration has grown from 10% to 72% in fifteen years.',
      'Developed nations lead at 85% but growth has plateaued.',
      'Developing nations show the fastest growth trajectory.',
      'The digital divide is narrowing but remains significant in Sub-Saharan Africa and South Asia.',
      'Over 6 billion people now own a smartphone globally.'
    ],
    sampleResponse: 'This line graph tracks global smartphone penetration from 2010 to 2025. The adoption curve shows remarkable growth, from just 10 per cent of the global population in 2010 to a projected 72 per cent by 2025. The graph separates developed and developing nations, revealing distinct patterns. Developed countries reached 85 per cent by 2020 but have since plateaued, while developing nations show continued rapid growth, rising from 20 per cent to a projected 62 per cent by 2025. This narrowing of the digital divide is significant, though notable gaps remain in Sub-Saharan Africa and South Asia. With over 6 billion smartphones now in use globally, mobile connectivity has become the primary gateway to the internet for most of the world\'s population.',
    dataDetails: 'Global: 10%→25%→40%→55%→65%→72%; Developed: 30%→55%→75%→85%→87%→88%; Developing: 5%→15%→30%→45%→55%→62% (2010-2025)'
  },
  {
    id: 'di-054',
    type: 'bar',
    title: 'Average Annual Teacher Salaries by Country (2024 USD)',
    description: 'A bar chart comparing average secondary school teacher salaries. Luxembourg: $105,000, Germany: $73,000, Australia: $65,000, USA: $62,000, Japan: $55,000, UK: $48,000, South Korea: $52,000, Brazil: $18,000, India: $8,000, Indonesia: $6,000.',
    keyPoints: [
      'Luxembourg has the highest teacher salary at $105,000 USD.',
      'There is a 17-fold gap between the highest and lowest paying countries.',
      'Australian teachers earn approximately $65,000, above the OECD average.',
      'Developing nations pay significantly less, with Indonesia at only $6,000.',
      'Salary levels correlate broadly with national income but not perfectly.'
    ],
    sampleResponse: 'This bar chart compares average annual secondary school teacher salaries across ten countries in 2024 US dollars. Luxembourg leads significantly at 105,000 dollars, followed by Germany at 73,000 and Australia at 65,000. The United States and Japan are in the mid-range at 62,000 and 55,000 respectively. The most striking feature is the enormous gap between developed and developing nations. While the United Kingdom pays approximately 48,000 dollars, Brazil pays just 18,000, India 8,000, and Indonesia only 6,000 — a seventeen-fold difference from the highest to the lowest. These disparities have significant implications for teacher recruitment, retention, and ultimately educational quality across different nations.',
    dataDetails: 'Luxembourg: $105K; Germany: $73K; Australia: $65K; USA: $62K; Japan: $55K; South Korea: $52K; UK: $48K; Brazil: $18K; India: $8K; Indonesia: $6K'
  },
  {
    id: 'di-055',
    type: 'pie',
    title: 'Global Food Waste by Stage of Supply Chain (2024)',
    description: 'A pie chart showing where food is wasted globally. Household consumption: 42%, food service and restaurants: 26%, retail: 13%, processing and packaging: 11%, production and harvest: 8%.',
    keyPoints: [
      'Household consumption is the largest source of food waste at 42%.',
      'Food service and restaurants contribute 26% of total waste.',
      'Post-consumer stages (households and restaurants) account for 68% combined.',
      'Retail waste at 13% includes unsold perishable goods.',
      'Approximately 1.3 billion tonnes of food is wasted globally each year.'
    ],
    sampleResponse: 'This pie chart presents the distribution of global food waste across the supply chain in 2024. Household consumption is the single largest contributor at 42 per cent, followed by food service and restaurants at 26 per cent. Together, these post-consumer stages account for 68 per cent of all food waste. Retail contributes 13 per cent, primarily from unsold perishable goods, while processing and packaging accounts for 11 per cent. Production and harvest losses represent 8 per cent. With approximately 1.3 billion tonnes of food wasted annually worldwide, the data clearly indicates that consumer behaviour and food service practices must be the primary focus of waste reduction strategies, alongside improved storage and distribution infrastructure.',
    dataDetails: 'Household: 42%; Food service: 26%; Retail: 13%; Processing: 11%; Production/harvest: 8%. Total: ~1.3 billion tonnes/year'
  }
];

// -----------------------------------------------------------------------------
// 4. RETELL LECTURE ITEMS (40 items)
// -----------------------------------------------------------------------------
const RETELL_LECTURE_ITEMS = [
  {
    id: 'rl-001',
    title: 'The Economics of Happiness',
    topic: 'economics',
    transcript: 'For many decades, economists measured national progress almost exclusively through GDP growth. However, research by Richard Easterlin revealed a fascinating paradox: beyond a certain income threshold, further increases in wealth do not significantly improve life satisfaction. This discovery prompted economists to develop alternative measures such as the Genuine Progress Indicator and the World Happiness Report. These newer metrics account for factors like social support, personal freedom, health outcomes, and environmental quality. Countries like Bhutan have even adopted Gross National Happiness as their primary development indicator, prioritising citizen wellbeing over pure economic growth.',
    keyPoints: [
      'GDP has traditionally been the primary measure of national progress.',
      'The Easterlin Paradox shows that above a certain income level, more wealth does not increase happiness.',
      'Alternative measures now include social, environmental, and wellbeing factors.',
      'Bhutan uses Gross National Happiness as its key development indicator.',
      'The shift reflects growing recognition that economic growth alone is insufficient.'
    ],
    sampleRetell: 'The lecture discussed how economists have moved beyond GDP as the sole measure of progress. The speaker explained the Easterlin Paradox, which found that increased wealth beyond a certain threshold does not significantly improve life satisfaction. This led to the development of alternative metrics such as the Genuine Progress Indicator and the World Happiness Report, which consider factors like social support, freedom, and health. The speaker highlighted Bhutan as an example of a country that prioritises Gross National Happiness over economic growth, reflecting a broader shift towards measuring overall wellbeing rather than just financial prosperity.',
    wordCount: 122
  },
  {
    id: 'rl-002',
    title: 'The Gut-Brain Connection',
    topic: 'science',
    transcript: 'Scientists have recently discovered that the relationship between our gut and brain is far more complex than previously understood. The gut contains approximately five hundred million neurons connected to the brain through the vagus nerve, forming what researchers call the gut-brain axis. The trillions of bacteria in our digestive system produce neurotransmitters including serotonin, approximately ninety per cent of which is manufactured in the gut rather than the brain. This means that the composition of gut bacteria may directly influence our mood, anxiety levels, and even cognitive function. Clinical trials are now investigating whether modifying gut bacteria through probiotics could help treat depression and anxiety disorders.',
    keyPoints: [
      'The gut contains 500 million neurons connected to the brain via the vagus nerve.',
      'Approximately 90% of serotonin is produced in the gut, not the brain.',
      'Gut bacteria may directly influence mood, anxiety, and cognitive function.',
      'The gut-brain connection is known as the gut-brain axis.',
      'Researchers are investigating probiotics as potential treatments for depression.'
    ],
    sampleRetell: 'The lecture explored the gut-brain connection, which is more complex than scientists previously thought. The speaker explained that the gut has about five hundred million neurons linked to the brain through the vagus nerve, forming the gut-brain axis. Remarkably, around ninety per cent of serotonin is produced in the gut, not the brain. The trillions of bacteria in our digestive system can influence mood, anxiety, and cognitive function through these neurotransmitters. The lecture concluded by noting that clinical trials are now examining whether probiotics could be used to treat mental health conditions like depression and anxiety.',
    wordCount: 118
  },
  {
    id: 'rl-003',
    title: 'The Rise of Megacities',
    topic: 'sociology',
    transcript: 'A megacity is defined as a metropolitan area with a population exceeding ten million people. In nineteen fifty, there were only two megacities in the world: New York and Tokyo. Today, there are over thirty-five, and the United Nations projects this number will reach forty-three by twenty-thirty. Most new megacities are emerging in Asia and Africa, driven by rural-to-urban migration and natural population growth. These rapidly growing cities face enormous challenges in providing adequate housing, clean water, sanitation, and transportation for their expanding populations. Urban planners argue that smart city technology and sustainable infrastructure design are essential for managing this unprecedented urban growth.',
    keyPoints: [
      'Megacities are metropolitan areas with populations over 10 million.',
      'The number grew from 2 in 1950 to over 35 today, projected to reach 43 by 2030.',
      'Most new megacities are emerging in Asia and Africa.',
      'Rapid growth creates challenges for housing, water, sanitation, and transport.',
      'Smart city technology is considered essential for managing growth.'
    ],
    sampleRetell: 'The lecture focused on the rapid growth of megacities — metropolitan areas with over ten million inhabitants. The speaker noted that in 1950, only New York and Tokyo qualified as megacities, but today there are more than thirty-five, with projections reaching forty-three by 2030. Most new megacities are forming in Asia and Africa due to rural-to-urban migration and population growth. These cities face significant challenges in providing housing, clean water, sanitation, and transportation infrastructure. The speaker concluded that smart city technology and sustainable urban planning are crucial for managing this unprecedented growth effectively.',
    wordCount: 102
  },
  {
    id: 'rl-004',
    title: 'The History of Writing Systems',
    topic: 'history',
    transcript: 'The invention of writing approximately five thousand years ago in ancient Mesopotamia marked one of the most transformative developments in human history. The earliest writing system, cuneiform, was created by the Sumerians primarily for record-keeping purposes — tracking grain stores and commercial transactions. Independently, the Egyptians developed hieroglyphics, and the Chinese created their own character-based system. The critical breakthrough came with the Phoenicians, who developed the first alphabet around twelve hundred BCE. This simplified system, using symbols to represent sounds rather than objects or ideas, dramatically increased literacy rates and enabled more complex forms of written communication, ultimately leading to the alphabets we use today.',
    keyPoints: [
      'Writing was invented approximately 5,000 years ago in Mesopotamia.',
      'Cuneiform, the earliest system, was used primarily for commercial record-keeping.',
      'Multiple civilisations developed writing independently (Sumer, Egypt, China).',
      'The Phoenician alphabet (c. 1200 BCE) was a critical breakthrough using sound-based symbols.',
      'The shift to alphabetic writing greatly increased literacy and communication complexity.'
    ],
    sampleRetell: 'The lecture traced the history of writing systems from their origins about five thousand years ago. The speaker explained that the Sumerians in Mesopotamia created cuneiform, the first writing system, mainly for record-keeping and tracking commercial transactions. Hieroglyphics and Chinese characters were developed independently by other civilisations. The most significant breakthrough came with the Phoenician alphabet around 1200 BCE, which used symbols to represent sounds rather than objects or ideas. This simplification made writing much more accessible, dramatically increased literacy rates, and enabled more complex communication. The speaker noted that modern alphabets trace their origins directly to this Phoenician innovation.',
    wordCount: 110
  },
  {
    id: 'rl-005',
    title: 'Artificial Photosynthesis',
    topic: 'science',
    transcript: 'Scientists are working to develop artificial photosynthesis — a technology that mimics the natural process plants use to convert sunlight into energy. While solar panels convert light directly into electricity, artificial photosynthesis aims to use sunlight to split water molecules into hydrogen and oxygen, producing clean hydrogen fuel. The efficiency of natural photosynthesis is actually quite low, around one to two per cent, so researchers believe they can create artificial systems that are significantly more efficient. Several research teams have already achieved efficiencies above ten per cent in laboratory conditions. If successfully scaled up, artificial photosynthesis could provide a virtually limitless source of clean fuel while simultaneously removing carbon dioxide from the atmosphere.',
    keyPoints: [
      'Artificial photosynthesis mimics how plants convert sunlight into energy.',
      'It aims to use sunlight to split water into hydrogen (fuel) and oxygen.',
      'Natural photosynthesis is only 1-2% efficient; artificial systems aim higher.',
      'Lab results have already exceeded 10% efficiency.',
      'The technology could provide clean fuel while removing CO2 from the atmosphere.'
    ],
    sampleRetell: 'The lecture discussed artificial photosynthesis, a technology that replicates how plants convert sunlight into energy. Unlike solar panels that produce electricity directly, artificial photosynthesis uses sunlight to split water molecules into hydrogen fuel and oxygen. The speaker noted that natural photosynthesis is only about one to two per cent efficient, so researchers aim to create significantly more efficient artificial systems. Laboratory experiments have already achieved efficiencies above ten per cent. If this technology can be scaled up successfully, it could provide a virtually limitless source of clean hydrogen fuel while also capturing carbon dioxide from the atmosphere, addressing two major environmental challenges simultaneously.',
    wordCount: 107
  },
  {
    id: 'rl-006',
    title: 'The Placebo Effect in Medicine',
    topic: 'health',
    transcript: 'The placebo effect is one of the most fascinating phenomena in medicine. When patients receive an inert treatment — a sugar pill, saline injection, or sham procedure — many experience genuine improvements in their condition. Brain imaging studies have shown that placebos can trigger real physiological changes, including the release of endorphins and dopamine. The strength of the placebo effect varies significantly between conditions; it is particularly strong for pain, depression, and nausea. Interestingly, recent research has shown that placebos can work even when patients know they are receiving them, a phenomenon called open-label placebo. This challenges our fundamental understanding of the relationship between belief and healing.',
    keyPoints: [
      'Placebos (inert treatments) can produce genuine physiological improvements.',
      'Brain imaging shows placebos trigger real changes including endorphin release.',
      'The effect is strongest for pain, depression, and nausea.',
      'Open-label placebos work even when patients know the treatment is inert.',
      'This challenges our understanding of the belief-healing relationship.'
    ],
    sampleRetell: 'The lecture explored the placebo effect, where patients experience genuine health improvements from inert treatments like sugar pills or saline injections. The speaker explained that brain imaging has confirmed placebos trigger real physiological changes, including the release of endorphins and dopamine. The effect is particularly strong for conditions such as pain, depression, and nausea. Most surprisingly, recent research has demonstrated that open-label placebos — where patients know the treatment is inactive — can still produce beneficial effects. The speaker argued that this phenomenon fundamentally challenges our understanding of how belief and expectation influence the healing process.',
    wordCount: 100
  },
  {
    id: 'rl-007',
    title: 'The Tragedy of the Commons',
    topic: 'economics',
    transcript: 'In nineteen sixty-eight, ecologist Garrett Hardin published an influential paper describing what he called the tragedy of the commons. He argued that when a shared resource is available to everyone, individuals acting in their own self-interest will inevitably deplete or destroy that resource, even though it serves no one\'s long-term interest to do so. Classic examples include overfishing in international waters and overgrazing of shared pastureland. However, Nobel laureate Elinor Ostrom later challenged this view by demonstrating that communities can successfully manage common resources through collaborative governance arrangements without government regulation or privatisation. Her research identified eight design principles for successful collective resource management.',
    keyPoints: [
      'Garrett Hardin described the tragedy of the commons in 1968.',
      'Shared resources tend to be overexploited when individuals act in self-interest.',
      'Examples include overfishing and overgrazing.',
      'Elinor Ostrom showed communities can manage commons through collaborative governance.',
      'Ostrom identified eight principles for successful collective resource management.'
    ],
    sampleRetell: 'The lecture covered the tragedy of the commons, a concept introduced by Garrett Hardin in 1968. Hardin argued that shared resources inevitably get depleted when individuals act in self-interest, using examples like overfishing and overgrazing. However, the speaker then discussed Nobel laureate Elinor Ostrom\'s important counter-argument. Ostrom demonstrated through extensive research that communities can successfully manage common resources through collaborative governance, without needing government regulation or privatisation. She identified eight design principles for effective collective management. This contrasting perspective shows that cooperation, rather than competition, can provide sustainable solutions for managing shared resources.',
    wordCount: 102
  },
  {
    id: 'rl-008',
    title: 'Sleep and Memory Consolidation',
    topic: 'psychology',
    transcript: 'Sleep plays a critical role in memory consolidation — the process by which short-term memories are transformed into long-term ones. During slow-wave sleep, the brain replays experiences from the day, strengthening neural connections associated with important information. REM sleep, characterised by rapid eye movements and dreaming, appears particularly important for consolidating procedural and emotional memories. Studies have shown that students who sleep after studying retain significantly more information than those who stay awake for the same period. Sleep deprivation, conversely, impairs the hippocampus, the brain region essential for forming new memories. This research has important implications for education, suggesting that study sessions followed by adequate sleep produce better learning outcomes.',
    keyPoints: [
      'Memory consolidation transforms short-term memories into long-term ones during sleep.',
      'Slow-wave sleep strengthens neural connections through experience replay.',
      'REM sleep is important for procedural and emotional memory consolidation.',
      'Students who sleep after studying retain more information.',
      'Sleep deprivation impairs the hippocampus, hindering new memory formation.'
    ],
    sampleRetell: 'The lecture explained how sleep is essential for memory consolidation — converting short-term memories into long-term ones. The speaker described two key sleep phases: slow-wave sleep, during which the brain replays daily experiences and strengthens neural connections, and REM sleep, which is particularly important for consolidating procedural and emotional memories. Research shows that students who sleep after studying retain significantly more information than those who remain awake. The speaker also noted that sleep deprivation damages the hippocampus, the brain region responsible for forming new memories. These findings have significant implications for education, supporting the practice of adequate sleep after study sessions.',
    wordCount: 105
  },
  {
    id: 'rl-009',
    title: 'The Circular Economy Model',
    topic: 'economics',
    transcript: 'The traditional linear economy follows a take-make-dispose model, where raw materials are extracted, manufactured into products, used, and then discarded as waste. The circular economy offers a fundamentally different approach. In this model, products and materials are kept in use for as long as possible through repair, reuse, refurbishment, and recycling. When products reach the end of their life, their components are recovered and fed back into the production cycle. Companies like Patagonia and Interface have pioneered circular practices, with Interface creating carpet tiles that can be completely recycled into new ones. The Ellen MacArthur Foundation estimates that transitioning to a circular economy could generate four trillion dollars in economic benefits by twenty-thirty.',
    keyPoints: [
      'The linear economy follows a take-make-dispose model.',
      'The circular economy keeps products and materials in use as long as possible.',
      'Strategies include repair, reuse, refurbishment, and recycling.',
      'Companies like Patagonia and Interface are pioneers of circular practices.',
      'The transition could generate $4 trillion in economic benefits by 2030.'
    ],
    sampleRetell: 'The lecture contrasted the traditional linear economy, which follows a take-make-dispose model, with the circular economy approach. In the circular model, products and materials are kept in use as long as possible through strategies like repair, reuse, refurbishment, and recycling. When products reach end of life, components are recovered and reintegrated into production. The speaker cited companies like Patagonia and Interface as pioneers, noting that Interface produces carpet tiles that can be completely recycled into new products. According to the Ellen MacArthur Foundation, transitioning to a circular economy could generate four trillion dollars in economic benefits by 2030.',
    wordCount: 104
  },
  {
    id: 'rl-010',
    title: 'The Great Barrier Reef Ecosystem',
    topic: 'science',
    transcript: 'The Great Barrier Reef, stretching over two thousand three hundred kilometres along Australia\'s northeast coast, is the world\'s largest coral reef system. It supports an extraordinary diversity of life, including over one thousand five hundred species of fish, four hundred types of coral, and numerous species of whales, dolphins, and sea turtles. The reef system is actually comprised of nearly three thousand individual reef structures. However, it faces unprecedented threats from climate change. Mass bleaching events, caused by elevated ocean temperatures, have affected over ninety per cent of the reef since twenty-sixteen. When water temperatures rise, corals expel the algae that provide them with food and colour, turning white. If conditions persist, the coral dies.',
    keyPoints: [
      'The Great Barrier Reef is 2,300 km long and the world\'s largest coral reef system.',
      'It supports over 1,500 fish species and 400 types of coral.',
      'The system comprises nearly 3,000 individual reef structures.',
      'Mass bleaching since 2016 has affected over 90% of the reef.',
      'Bleaching occurs when corals expel algae due to elevated water temperatures.'
    ],
    sampleRetell: 'The lecture focused on Australia\'s Great Barrier Reef, the world\'s largest coral reef system, extending over 2,300 kilometres. The speaker described its extraordinary biodiversity, including over 1,500 fish species and 400 types of coral across nearly 3,000 individual reef structures. However, the main concern raised was the threat from climate change. Since 2016, mass bleaching events caused by rising ocean temperatures have affected more than ninety per cent of the reef. The speaker explained that when water temperatures increase, corals expel the symbiotic algae that provide their food and colour, causing them to turn white and potentially die if conditions continue.',
    wordCount: 108
  },
  {
    id: 'rl-011',
    title: 'The Psychology of Procrastination',
    topic: 'psychology',
    transcript: 'Procrastination is not simply a matter of laziness or poor time management. Psychological research reveals it is fundamentally an emotional regulation problem. When faced with a task that triggers negative emotions such as boredom, anxiety, or self-doubt, the brain seeks immediate relief by switching to a more pleasant activity. Brain imaging studies show that procrastinators have larger amygdalae, the brain region responsible for processing emotions, and weaker connections to the prefrontal cortex, which handles self-regulation. Research also indicates that self-compassion, rather than self-criticism, is more effective in overcoming procrastination. Forgiving yourself for past procrastination reduces the negative emotions associated with the task, making it easier to begin.',
    keyPoints: [
      'Procrastination is an emotional regulation problem, not laziness.',
      'Negative emotions like anxiety and boredom trigger the urge to procrastinate.',
      'Procrastinators show larger amygdalae and weaker prefrontal cortex connections.',
      'Self-compassion is more effective than self-criticism in overcoming procrastination.',
      'Forgiving past procrastination reduces negative emotions associated with tasks.'
    ],
    sampleRetell: 'The lecture challenged the common belief that procrastination is simply laziness, explaining instead that it is fundamentally an emotional regulation problem. When a task triggers negative feelings like anxiety or boredom, the brain seeks immediate relief by switching to more pleasant activities. Brain imaging research has found that procrastinators typically have larger amygdalae and weaker connections to the prefrontal cortex, which manages self-regulation. An important finding discussed was that self-compassion is actually more effective than self-criticism for overcoming procrastination, because forgiving yourself reduces the negative emotions associated with the task, making it easier to start working on it.',
    wordCount: 102
  },
  {
    id: 'rl-012',
    title: 'The History of Vaccination',
    topic: 'history',
    transcript: 'The story of vaccination began in seventeen ninety-six when English physician Edward Jenner observed that milkmaids who had contracted cowpox seemed immune to the far deadlier smallpox. He tested this by inoculating a young boy with cowpox material, then exposing him to smallpox — the boy did not develop the disease. This experiment laid the foundation for modern immunology. Over the following two centuries, vaccines were developed for numerous diseases including polio, measles, and tuberculosis. The World Health Organisation declared smallpox officially eradicated in nineteen eighty, the only human disease to have been completely eliminated. Today, vaccines are estimated to prevent two to three million deaths annually worldwide.',
    keyPoints: [
      'Edward Jenner pioneered vaccination in 1796 using cowpox to protect against smallpox.',
      'His experiment on a boy proved that cowpox exposure provided immunity to smallpox.',
      'Vaccines were subsequently developed for polio, measles, tuberculosis, and more.',
      'Smallpox was declared eradicated by the WHO in 1980.',
      'Vaccines currently prevent 2-3 million deaths annually.'
    ],
    sampleRetell: 'The lecture traced the history of vaccination from Edward Jenner\'s pioneering experiment in 1796. Jenner noticed that milkmaids exposed to cowpox appeared immune to smallpox, so he inoculated a boy with cowpox material and found that the boy was indeed protected against smallpox. This groundbreaking experiment established the foundation for modern immunology. Over the next two centuries, vaccines were developed for many diseases, including polio, measles, and tuberculosis. The speaker highlighted that smallpox was officially declared eradicated by the WHO in 1980, making it the only human disease ever completely eliminated. Today, vaccines prevent an estimated two to three million deaths each year.',
    wordCount: 110
  },
  {
    id: 'rl-013',
    title: 'Blockchain Technology Beyond Cryptocurrency',
    topic: 'technology',
    transcript: 'While blockchain technology gained fame as the foundation of Bitcoin and other cryptocurrencies, its potential applications extend far beyond digital currency. At its core, blockchain is a distributed, immutable ledger that records transactions across multiple computers, making data extremely difficult to tamper with. In supply chain management, blockchain enables companies to track products from origin to consumer, ensuring authenticity and reducing fraud. In healthcare, it can secure patient medical records while allowing authorised sharing between providers. Land registries in countries like Sweden and Georgia are being moved onto blockchain to prevent corruption and disputes. Smart contracts on blockchain platforms can automatically execute agreements when predetermined conditions are met, potentially transforming legal and financial services.',
    keyPoints: [
      'Blockchain is a distributed, immutable ledger resistant to tampering.',
      'Supply chain applications enable product tracking from origin to consumer.',
      'Healthcare uses include secure medical record sharing.',
      'Countries like Sweden and Georgia use blockchain for land registries.',
      'Smart contracts automatically execute when conditions are met.'
    ],
    sampleRetell: 'The lecture examined blockchain technology beyond its famous association with cryptocurrency. The speaker explained that blockchain is essentially a distributed, immutable ledger that records transactions across multiple computers, making data very difficult to tamper with. Several applications were discussed. In supply chain management, blockchain enables product tracking from origin to consumer to ensure authenticity. In healthcare, it can secure patient records while allowing authorised sharing between providers. Countries like Sweden and Georgia are implementing blockchain-based land registries to prevent corruption. The speaker also mentioned smart contracts, which automatically execute agreements when predetermined conditions are met, potentially transforming legal and financial services.',
    wordCount: 108
  },
  {
    id: 'rl-014',
    title: 'The Impact of Music on the Brain',
    topic: 'psychology',
    transcript: 'Neuroscience research has revealed that listening to music activates more areas of the brain simultaneously than almost any other activity. When we hear music, the auditory cortex processes sound, the motor cortex responds to rhythm, the frontal lobe interprets structure, and the limbic system processes emotion. Musicians\' brains show measurable structural differences, including a larger corpus callosum connecting the two hemispheres. Music therapy has shown remarkable results in treating conditions ranging from Parkinson\'s disease to stroke rehabilitation. Patients with severe memory loss from Alzheimer\'s can often still recognise and respond emotionally to music from their past. These findings suggest that music is not merely entertainment but a fundamental aspect of human cognitive architecture.',
    keyPoints: [
      'Music activates more brain areas simultaneously than almost any other activity.',
      'Multiple brain regions process different aspects: sound, rhythm, structure, emotion.',
      'Musicians have measurably different brain structures, including a larger corpus callosum.',
      'Music therapy helps with Parkinson\'s, stroke rehabilitation, and Alzheimer\'s.',
      'Music appears to be a fundamental aspect of human cognitive architecture.'
    ],
    sampleRetell: 'The lecture explored how music affects the brain according to neuroscience research. The speaker explained that listening to music activates more brain areas simultaneously than almost any other activity, with different regions processing sound, rhythm, structure, and emotion. Musicians\' brains actually develop structural differences, including a larger corpus callosum connecting the brain\'s two hemispheres. The lecture also highlighted the therapeutic applications of music, noting its effectiveness in treating Parkinson\'s disease and aiding stroke rehabilitation. Remarkably, patients with severe Alzheimer\'s-related memory loss can still recognise and respond to familiar music. The speaker concluded that music is not just entertainment but a fundamental part of human cognitive architecture.',
    wordCount: 112
  },
  {
    id: 'rl-015',
    title: 'Ocean Acidification',
    topic: 'science',
    transcript: 'Ocean acidification, sometimes called climate change\'s equally evil twin, occurs when the ocean absorbs carbon dioxide from the atmosphere. The ocean currently absorbs approximately thirty per cent of human-produced CO2, which reacts with seawater to form carbonic acid, lowering the pH. Since the Industrial Revolution, ocean acidity has increased by approximately thirty per cent. This poses a severe threat to marine organisms that build shells or skeletons from calcium carbonate, including corals, molluscs, and some plankton species. As the water becomes more acidic, it becomes harder for these organisms to form and maintain their structures. Since many of these species form the base of marine food chains, the consequences for ocean ecosystems and the fishing industry could be devastating.',
    keyPoints: [
      'The ocean absorbs about 30% of human-produced CO2.',
      'CO2 reacts with seawater to form carbonic acid, lowering pH.',
      'Ocean acidity has increased by 30% since the Industrial Revolution.',
      'Shell-building organisms (corals, molluscs, plankton) are most vulnerable.',
      'Impacts could cascade through marine food chains, affecting fisheries globally.'
    ],
    sampleRetell: 'The lecture addressed ocean acidification, which the speaker described as climate change\'s equally evil twin. It occurs because the ocean absorbs approximately thirty per cent of human-produced carbon dioxide. This CO2 reacts with seawater to form carbonic acid, which has increased ocean acidity by about thirty per cent since the Industrial Revolution. The speaker explained that this threatens marine organisms that build shells or skeletons from calcium carbonate, including corals, molluscs, and certain plankton species, as the increasingly acidic water makes it harder for them to form their structures. Since these organisms often form the base of marine food chains, the consequences for ocean ecosystems and global fisheries could be devastating.',
    wordCount: 115
  },
  {
    id: 'rl-016',
    title: 'The Sharing Economy',
    topic: 'business',
    transcript: 'The sharing economy, also called collaborative consumption, represents a fundamental shift in how people access goods and services. Rather than owning assets, individuals share access to them through digital platforms. Companies like Airbnb, Uber, and TaskRabbit have disrupted traditional industries by connecting people who have underutilised assets with those who need them. Proponents argue that the sharing economy reduces waste, lowers costs for consumers, and creates flexible income opportunities. Critics, however, point to concerns about worker exploitation, tax avoidance, and the erosion of established regulatory frameworks designed to protect consumers. The sharing economy is estimated to grow from approximately three hundred billion to nearly eight hundred billion dollars by twenty-thirty.',
    keyPoints: [
      'The sharing economy involves accessing rather than owning goods and services via platforms.',
      'Companies like Airbnb and Uber connect asset owners with users.',
      'Benefits include reduced waste, lower costs, and flexible income opportunities.',
      'Critics cite worker exploitation, tax avoidance, and regulatory erosion.',
      'The sector is projected to grow from $300B to nearly $800B by 2030.'
    ],
    sampleRetell: 'The lecture discussed the sharing economy, a model where people share access to goods and services through digital platforms rather than owning assets themselves. Companies like Airbnb, Uber, and TaskRabbit exemplify this approach by connecting people with underutilised assets to those who need them. The speaker noted several benefits, including reduced waste, lower consumer costs, and flexible income opportunities. However, critics raise concerns about worker exploitation, tax avoidance, and the undermining of regulatory frameworks that protect consumers. The sharing economy is projected to nearly triple in value, growing from about three hundred billion to eight hundred billion dollars by 2030.',
    wordCount: 104
  },
  {
    id: 'rl-017',
    title: 'Neuroplasticity and Brain Recovery',
    topic: 'science',
    transcript: 'Until the late twentieth century, scientists believed the adult brain was essentially fixed and unable to change. We now know this is incorrect. Neuroplasticity refers to the brain\'s remarkable ability to reorganise itself by forming new neural connections throughout life. This capacity is particularly important in recovery from brain injuries such as strokes. After a stroke damages part of the brain, neighbouring regions can sometimes take over the functions of the damaged area through intensive rehabilitation. London taxi drivers, who must memorise the city\'s complex street layout, have been found to have significantly larger hippocampi than average. Mindfulness meditation has also been shown to physically alter brain structure, increasing grey matter density in areas associated with memory and emotional regulation.',
    keyPoints: [
      'Neuroplasticity is the brain\'s ability to reorganise by forming new neural connections.',
      'This overturns the old belief that adult brains cannot change.',
      'After stroke, neighbouring brain regions can take over lost functions through rehabilitation.',
      'London taxi drivers develop larger hippocampi from memorising street layouts.',
      'Meditation physically alters brain structure, increasing grey matter density.'
    ],
    sampleRetell: 'The lecture focused on neuroplasticity — the brain\'s ability to reorganise itself by forming new neural connections, overturning the old belief that adult brains are fixed. The speaker explained that this capacity is crucial for stroke recovery, as neighbouring brain regions can take over the functions of damaged areas through intensive rehabilitation. Two compelling examples were provided: London taxi drivers who memorise complex street layouts develop significantly larger hippocampi, and mindfulness meditation has been shown to physically increase grey matter density in areas linked to memory and emotional regulation. These findings demonstrate that the brain remains remarkably adaptable throughout life.',
    wordCount: 102
  },
  {
    id: 'rl-018',
    title: 'The Green Revolution in Agriculture',
    topic: 'history',
    transcript: 'The Green Revolution of the nineteen-sixties and seventies transformed agriculture in developing countries. Led by American agronomist Norman Borlaug, who later received the Nobel Peace Prize, the revolution introduced high-yield crop varieties, modern irrigation techniques, and synthetic fertilisers to countries in Latin America and South Asia. Wheat yields in India tripled between nineteen-sixty-five and nineteen-eighty, and the country went from famine to food self-sufficiency. Borlaug is credited with saving over a billion lives from starvation. However, the Green Revolution also had negative consequences, including soil degradation, water pollution from fertiliser runoff, loss of traditional crop varieties, and increased economic inequality between farmers who could and could not afford the new technologies.',
    keyPoints: [
      'The Green Revolution introduced high-yield crops, irrigation, and fertilisers to developing nations.',
      'Norman Borlaug led the revolution and received the Nobel Peace Prize.',
      'India\'s wheat yields tripled between 1965 and 1980.',
      'Borlaug is credited with saving over a billion lives from starvation.',
      'Negative effects included soil degradation, water pollution, and increased inequality.'
    ],
    sampleRetell: 'The lecture covered the Green Revolution of the 1960s and 70s, led by Norman Borlaug, who received the Nobel Peace Prize for his work. The revolution introduced high-yield crop varieties, modern irrigation, and synthetic fertilisers to developing countries, particularly in Latin America and South Asia. India\'s wheat yields tripled between 1965 and 1980, transforming the country from facing famine to achieving food self-sufficiency. Borlaug is estimated to have saved over a billion lives. However, the speaker also noted significant drawbacks, including soil degradation, water pollution from fertiliser runoff, loss of traditional crop varieties, and increased economic inequality between farmers.',
    wordCount: 106
  },
  {
    id: 'rl-019',
    title: 'The Psychology of First Impressions',
    topic: 'psychology',
    transcript: 'Research shows that humans form first impressions within just seven seconds of meeting someone. These snap judgements are remarkably persistent and can influence our behaviour towards that person for months or even years. Psychologist Alexander Todorov demonstrated that people make reliable judgements about trustworthiness and competence from faces alone in as little as one-tenth of a second. The halo effect means that a positive first impression in one area tends to colour our perception of unrelated qualities. For example, physically attractive people are often perceived as more intelligent and trustworthy. Understanding these biases is particularly important in professional contexts such as job interviews, where research shows that many hiring decisions are effectively made within the first few minutes.',
    keyPoints: [
      'First impressions are formed within approximately seven seconds.',
      'Judgements about trustworthiness can be made in as little as one-tenth of a second.',
      'First impressions are remarkably persistent and influence long-term behaviour.',
      'The halo effect means a positive impression in one area affects perception of unrelated qualities.',
      'Hiring decisions are often effectively made within the first few minutes of an interview.'
    ],
    sampleRetell: 'The lecture examined the psychology behind first impressions. Research shows that we form initial judgements within just seven seconds of meeting someone, and these impressions can persist for months or years. The speaker cited psychologist Alexander Todorov\'s finding that people assess trustworthiness and competence from faces in as little as one-tenth of a second. The halo effect was also discussed, where a positive impression in one area, such as physical attractiveness, leads us to assume positive qualities in unrelated areas like intelligence. The speaker emphasised the practical importance of this in professional contexts, noting that hiring decisions are often effectively made within the first few minutes of an interview.',
    wordCount: 112
  },
  {
    id: 'rl-020',
    title: 'Deep Sea Mining Controversy',
    topic: 'science',
    transcript: 'The deep ocean floor contains vast deposits of polymetallic nodules rich in manganese, cobalt, nickel, and copper — metals essential for batteries and renewable energy technology. As demand for these metals increases, companies are seeking permission to mine the ocean floor at depths of four to six kilometres. Proponents argue that deep sea mining could reduce dependence on environmentally destructive land-based mining and help meet growing demand for clean energy materials. Opponents warn that we know very little about deep sea ecosystems, which may take decades or centuries to recover from mining disturbance. Sediment plumes from mining operations could affect marine life over vast areas. The International Seabed Authority is currently developing regulations, but many scientists argue that a moratorium is needed until the environmental risks are better understood.',
    keyPoints: [
      'The deep ocean floor contains valuable metals needed for batteries and clean energy.',
      'Mining would occur at depths of 4-6 kilometres.',
      'Proponents say it could reduce harmful land-based mining.',
      'Opponents warn about poorly understood deep sea ecosystems and slow recovery times.',
      'Many scientists call for a moratorium until environmental risks are better assessed.'
    ],
    sampleRetell: 'The lecture discussed the controversy surrounding deep sea mining. The ocean floor contains valuable deposits of metals like manganese, cobalt, nickel, and copper, which are essential for batteries and renewable energy technology. As demand grows, companies want to mine at depths of four to six kilometres. Supporters argue this could reduce reliance on destructive land-based mining operations. However, opponents highlight that deep sea ecosystems are poorly understood and may take decades or centuries to recover from mining disturbance. Sediment plumes could also affect marine life across vast areas. While the International Seabed Authority is developing regulations, many scientists argue for a moratorium until environmental risks are properly assessed.',
    wordCount: 112
  },
  {
    id: 'rl-021',
    title: 'The Rosetta Stone and Deciphering Hieroglyphics',
    topic: 'history',
    transcript: 'The Rosetta Stone, discovered by French soldiers in Egypt in seventeen ninety-nine, proved to be the key to deciphering ancient Egyptian hieroglyphics, a writing system that had been unreadable for over a thousand years. The stone contained the same text written in three scripts: hieroglyphics, Demotic script, and ancient Greek. Since scholars could read Greek, they could use it as a reference to decode the other two scripts. The breakthrough came from French scholar Jean-Francois Champollion in eighteen twenty-two, who realised that hieroglyphics were not purely symbolic but represented sounds. This single discovery unlocked access to three thousand years of Egyptian history, literature, and scientific knowledge that had previously been completely inaccessible.',
    keyPoints: [
      'The Rosetta Stone was discovered in Egypt in 1799 by French soldiers.',
      'It contained the same text in three scripts: hieroglyphics, Demotic, and Greek.',
      'Greek provided the reference for decoding the other scripts.',
      'Champollion\'s 1822 breakthrough: hieroglyphics represent sounds, not just symbols.',
      'This unlocked 3,000 years of previously inaccessible Egyptian history.'
    ],
    sampleRetell: 'The lecture told the story of the Rosetta Stone, discovered by French soldiers in Egypt in 1799. The stone was crucial because it contained the same text in three scripts: hieroglyphics, Demotic, and ancient Greek. Since scholars could already read Greek, it provided the key to decoding the other two scripts. The major breakthrough came from Jean-Francois Champollion in 1822, who discovered that hieroglyphics represented sounds rather than being purely symbolic. This single discovery unlocked access to three thousand years of Egyptian history, literature, and scientific knowledge that had been completely unreadable for over a millennium.',
    wordCount: 100
  },
  {
    id: 'rl-022',
    title: 'The Attention Economy',
    topic: 'business',
    transcript: 'In today\'s digital world, the scarcest resource is not information but human attention. Technology companies have built entire business models around capturing and monetising our attention. Social media platforms, streaming services, and news apps employ sophisticated algorithms designed to maximise the time users spend on their platforms. Techniques such as infinite scrolling, autoplay, and personalised notifications exploit psychological vulnerabilities to keep users engaged. Former Google design ethicist Tristan Harris has described this as a race to the bottom of the brainstem. The economic implications are significant: the global attention economy was valued at approximately six hundred billion dollars in twenty-twenty. Critics argue that this model contributes to shortened attention spans, increased anxiety, and the spread of sensationalised content.',
    keyPoints: [
      'Human attention, not information, is the scarcest resource in the digital age.',
      'Tech companies monetise attention through algorithms maximising engagement time.',
      'Infinite scrolling, autoplay, and notifications exploit psychological vulnerabilities.',
      'The global attention economy was valued at approximately $600 billion in 2020.',
      'Critics link it to shortened attention spans, anxiety, and sensationalised content.'
    ],
    sampleRetell: 'The lecture discussed the attention economy, arguing that in today\'s digital world, human attention — not information — is the scarcest resource. Technology companies have built business models around capturing our attention through sophisticated algorithms. The speaker described techniques like infinite scrolling, autoplay, and personalised notifications that exploit psychological vulnerabilities to keep users engaged. Former Google ethicist Tristan Harris called this a race to the bottom of the brainstem. The attention economy was valued at approximately 600 billion dollars in 2020. Critics argue this model has significant negative consequences, including shortened attention spans, increased anxiety, and the proliferation of sensationalised content designed to grab attention.',
    wordCount: 105
  },
  {
    id: 'rl-023',
    title: 'Epigenetics: Beyond DNA',
    topic: 'science',
    transcript: 'Epigenetics is the study of changes in gene expression that do not involve alterations to the DNA sequence itself. Environmental factors such as diet, stress, and exposure to toxins can chemically modify DNA in ways that turn genes on or off without changing the underlying genetic code. These modifications can be passed from one generation to the next, meaning that your grandparents\' experiences could literally affect your gene expression today. A landmark study of children born during the Dutch Hunger Winter of nineteen forty-four showed that prenatal famine exposure led to increased rates of obesity and cardiovascular disease not only in those individuals but also in their children. This field challenges the traditional nature-versus-nurture debate by showing that nurture can actually alter nature.',
    keyPoints: [
      'Epigenetics involves changes in gene expression without altering the DNA sequence.',
      'Environmental factors like diet and stress can turn genes on or off.',
      'These modifications can be inherited across generations.',
      'The Dutch Hunger Winter study showed famine effects passed to subsequent generations.',
      'Epigenetics challenges the traditional nature versus nurture distinction.'
    ],
    sampleRetell: 'The lecture introduced epigenetics, which studies how gene expression can change without altering the DNA sequence itself. Environmental factors such as diet, stress, and toxin exposure can chemically modify DNA, turning genes on or off. Crucially, the speaker explained that these modifications can be passed across generations, meaning grandparents\' experiences may affect their grandchildren\'s gene expression. The speaker cited the Dutch Hunger Winter study of 1944, which found that prenatal famine exposure led to increased obesity and cardiovascular disease not just in those individuals but also in their children. This field fundamentally challenges the nature versus nurture debate by demonstrating that environmental experiences can actually alter genetic expression.',
    wordCount: 108
  },
  {
    id: 'rl-024',
    title: 'The Future of Work',
    topic: 'business',
    transcript: 'The nature of work is undergoing a profound transformation driven by automation, artificial intelligence, and changing worker expectations. The World Economic Forum estimates that by twenty-twenty-seven, sixty per cent of workers will need significant reskilling, and eighty-three million jobs may be displaced while sixty-nine million new ones are created. The pandemic accelerated the shift to remote and hybrid working models, with surveys showing that over seventy per cent of knowledge workers now prefer flexible arrangements. The rise of the gig economy means that by twenty-thirty, nearly half of the workforce in developed countries may be engaged in some form of freelance or contract work. Successful adaptation will require massive investment in education and training systems, stronger social safety nets, and new approaches to employment regulation.',
    keyPoints: [
      'The WEF estimates 60% of workers will need reskilling by 2027.',
      '83 million jobs may be displaced but 69 million new ones created.',
      'Over 70% of knowledge workers prefer flexible/remote arrangements.',
      'Nearly half the workforce in developed nations may freelance by 2030.',
      'Adaptation requires investment in education, safety nets, and new regulations.'
    ],
    sampleRetell: 'The lecture examined how work is being transformed by automation, AI, and changing expectations. The World Economic Forum projects that by 2027, sixty per cent of workers will need significant reskilling, with eighty-three million jobs potentially displaced but sixty-nine million new ones created. The pandemic accelerated remote working, and over seventy per cent of knowledge workers now prefer flexible arrangements. The speaker also noted the growing gig economy, predicting that nearly half of workers in developed countries may be freelancing by 2030. To adapt successfully, the speaker argued that massive investment is needed in education and training systems, stronger social safety nets, and updated employment regulations.',
    wordCount: 108
  },
  {
    id: 'rl-025',
    title: 'Biomimicry in Design',
    topic: 'science',
    transcript: 'Biomimicry is the practice of drawing inspiration from nature\'s designs and processes to solve human engineering challenges. Nature has had nearly four billion years of evolution to optimise its designs, and engineers are increasingly recognising the value of learning from biological systems. The bullet train in Japan was redesigned based on the kingfisher\'s beak to reduce noise when exiting tunnels. Velcro was invented after Swiss engineer George de Mestral noticed how burrs attached to his dog\'s fur. Shark skin has inspired swimsuit designs and antimicrobial hospital surfaces. The Eastgate Centre building in Zimbabwe uses a ventilation system modelled on termite mounds, reducing energy consumption by ninety per cent compared to conventional buildings. These examples demonstrate that sustainable solutions often already exist in the natural world.',
    keyPoints: [
      'Biomimicry draws inspiration from nature\'s designs to solve engineering problems.',
      'Japan\'s bullet train was redesigned based on the kingfisher\'s beak shape.',
      'Velcro was inspired by burrs attaching to fabric and fur.',
      'The Eastgate Centre in Zimbabwe uses termite-mound-inspired ventilation, saving 90% energy.',
      'Nature has had 4 billion years of evolutionary optimisation to learn from.'
    ],
    sampleRetell: 'The lecture discussed biomimicry — the practice of using nature\'s designs to solve human engineering challenges. The speaker emphasised that nature has had nearly four billion years of evolution to optimise its solutions. Several examples were provided: Japan\'s bullet train was redesigned based on the kingfisher\'s beak to reduce tunnel noise, Velcro was inspired by burrs attaching to fur, and shark skin has influenced both swimsuit design and antimicrobial surfaces. The most impressive example was the Eastgate Centre in Zimbabwe, which uses a ventilation system modelled on termite mounds and consumes ninety per cent less energy than conventional buildings. These cases demonstrate that sustainable engineering solutions can often be found by studying the natural world.',
    wordCount: 116
  },
  {
    id: 'rl-026',
    title: 'The AI Regulation Landscape',
    topic: 'technology',
    transcript: 'The regulation of artificial intelligence is developing rapidly but unevenly across the globe. The European Union led with the AI Act in 2024, which classifies AI systems into risk categories — from minimal risk applications like spam filters to high-risk systems used in healthcare, law enforcement, and employment decisions. The United States has taken a more sector-specific approach, issuing executive orders rather than comprehensive legislation. China has implemented regulations targeting specific AI applications, particularly deepfakes and recommendation algorithms. Meanwhile, many developing nations lack the institutional capacity to regulate AI effectively. The challenge is finding the right balance: too much regulation stifles innovation and drives companies overseas, while too little leaves citizens vulnerable to algorithmic bias, privacy violations, and job displacement.',
    keyPoints: [
      'The EU AI Act classifies AI by risk level, from minimal to high-risk applications.',
      'The US takes a sector-specific approach rather than comprehensive legislation.',
      'China focuses regulations on specific applications like deepfakes.',
      'Developing nations often lack capacity for effective AI regulation.',
      'The core challenge is balancing innovation with citizen protection.'
    ],
    sampleRetell: 'The lecture examined the global landscape of AI regulation. The speaker explained that the European Union has taken the lead with the AI Act of 2024, which categorises AI systems according to risk levels. The United States has adopted a different approach, using executive orders and sector-specific guidelines rather than comprehensive legislation. China has focused on regulating specific applications like deepfakes and recommendation algorithms. The speaker noted that many developing nations lack the resources to regulate AI effectively. The central challenge discussed was finding the right balance between encouraging innovation and protecting citizens from risks such as algorithmic bias and privacy violations.',
    wordCount: 118
  },
  {
    id: 'rl-027',
    title: 'Climate Adaptation in Coastal Cities',
    topic: 'environment',
    transcript: 'Coastal cities around the world are facing an existential threat from rising sea levels. By 2050, over 800 million people in more than 570 coastal cities could be exposed to flooding from sea level rise of at least half a metre. Cities are responding with a range of adaptation strategies. Rotterdam in the Netherlands uses an innovative system of water plazas and floating structures that can absorb floodwater during heavy rainfall. Miami is investing four billion dollars in raising roads and improving stormwater systems. Jakarta has undertaken an ambitious plan to build a giant sea wall. However, some experts argue that in the most vulnerable areas, managed retreat — the planned relocation of communities away from the coast — may ultimately be the only viable long-term solution, despite its enormous social and economic costs.',
    keyPoints: [
      'Over 800 million people in 570 coastal cities face flooding risks by 2050.',
      'Rotterdam uses innovative water plazas and floating structures.',
      'Miami is investing $4 billion in infrastructure adaptation.',
      'Jakarta is building a giant sea wall to protect the city.',
      'Managed retreat may be necessary in the most vulnerable areas despite high costs.'
    ],
    sampleRetell: 'The lecture focused on how coastal cities are adapting to rising sea levels. The speaker stated that over 800 million people in more than 570 cities could face serious flooding by 2050. Several adaptation strategies were discussed. Rotterdam uses innovative water plazas and floating structures, Miami is investing four billion dollars in raising roads and improving drainage, and Jakarta is building a massive sea wall. However, the speaker also raised the controversial concept of managed retreat, where communities are relocated away from coastlines. While socially and economically costly, this may be the only viable long-term solution for the most vulnerable areas.',
    wordCount: 105
  },
  {
    id: 'rl-028',
    title: 'The Microbiome Revolution',
    topic: 'science',
    transcript: 'The human microbiome — the trillions of microorganisms living in and on our bodies — has become one of the most exciting frontiers in medical science. Research has shown that these microbial communities play crucial roles far beyond digestion. They influence our immune system, mental health, and even body weight. Studies have linked imbalances in gut bacteria to conditions ranging from depression and anxiety to autoimmune diseases and certain cancers. The concept of the gut-brain axis has revealed that microorganisms in the digestive system can communicate with the brain through the vagus nerve and chemical signalling. This has led to the development of psychobiotics — probiotics specifically designed to improve mental health. Faecal microbiota transplantation has proven remarkably effective for treating recurrent Clostridioides difficile infections, with cure rates exceeding ninety per cent.',
    keyPoints: [
      'The human microbiome consists of trillions of microorganisms with wide-ranging health effects.',
      'Gut bacteria influence the immune system, mental health, and body weight.',
      'The gut-brain axis allows communication between gut microbes and the brain.',
      'Psychobiotics are probiotics designed specifically for mental health improvement.',
      'Faecal transplantation has over 90% cure rates for C. difficile infections.'
    ],
    sampleRetell: 'The lecture explored the microbiome revolution in medical science. The speaker explained that trillions of microorganisms living in our bodies play crucial roles beyond digestion, influencing the immune system, mental health, and body weight. Research has linked gut bacteria imbalances to depression, autoimmune diseases, and certain cancers. The gut-brain axis was discussed as a key discovery, showing that gut microbes communicate with the brain through the vagus nerve. This has led to the development of psychobiotics, which are probiotics designed specifically for mental health benefits. The speaker also highlighted faecal microbiota transplantation, which achieves cure rates exceeding ninety per cent for recurrent C. difficile infections.',
    wordCount: 110
  },
  {
    id: 'rl-029',
    title: 'The Future of Work and Automation',
    topic: 'economics',
    transcript: 'The relationship between automation and employment is more nuanced than popular narratives suggest. While it is true that machines and AI systems are replacing certain tasks, history shows that technological revolutions consistently create more jobs than they destroy. The key distinction is between task automation and job automation. Most jobs consist of many different tasks, and technology typically automates some tasks while leaving others — particularly those requiring creativity, empathy, and complex judgement — to humans. The World Economic Forum estimates that by 2025, automation will displace 85 million jobs globally but create 97 million new ones. However, the challenge lies in the transition: displaced workers often lack the skills needed for new roles. This skills mismatch could exacerbate inequality unless governments invest heavily in retraining programmes and education reform.',
    keyPoints: [
      'Automation replaces tasks within jobs, not necessarily entire jobs.',
      'Historical evidence shows technology creates more jobs than it destroys.',
      'The WEF estimates 85 million jobs displaced but 97 million created by 2025.',
      'The main challenge is the skills mismatch during the transition period.',
      'Government investment in retraining is essential to prevent increased inequality.'
    ],
    sampleRetell: 'The lecture addressed the relationship between automation and employment. The speaker argued that the impact is more nuanced than popular fears suggest, emphasising the important distinction between task automation and job automation. Most jobs involve multiple tasks, and technology typically automates only some while leaving creative and empathetic tasks to humans. The World Economic Forum estimates 85 million jobs will be displaced but 97 million new ones created. However, the critical challenge is the skills mismatch — displaced workers often cannot fill the new roles being created. The speaker concluded that government investment in retraining programmes and education reform is essential to prevent rising inequality during this transition.',
    wordCount: 108
  },
  {
    id: 'rl-030',
    title: 'Space Debris and Orbital Sustainability',
    topic: 'science',
    transcript: 'The problem of space debris has reached a critical tipping point. There are currently over 36,000 objects larger than ten centimetres orbiting Earth, along with an estimated 130 million fragments smaller than one centimetre. These objects travel at speeds exceeding 28,000 kilometres per hour, meaning even a tiny fleck of paint can damage a spacecraft. The Kessler Syndrome, first proposed by NASA scientist Donald Kessler in 1978, describes a scenario where the density of objects in low Earth orbit becomes so high that collisions generate more debris, creating a cascading chain reaction. This could eventually render certain orbital zones unusable. With companies like SpaceX launching thousands of satellites for mega-constellations, the urgency has intensified. Proposed solutions include active debris removal using robotic arms, nets, and lasers, as well as international agreements requiring satellites to deorbit within twenty-five years of their mission ending.',
    keyPoints: [
      'Over 36,000 tracked objects and 130 million small fragments orbit Earth.',
      'Debris travels at over 28,000 km/h, making tiny fragments dangerous.',
      'The Kessler Syndrome describes a cascading collision chain reaction.',
      'Mega-constellations of satellites are intensifying the debris problem.',
      'Solutions include robotic removal, nets, lasers, and mandatory deorbit rules.'
    ],
    sampleRetell: 'The lecture discussed the growing crisis of space debris. The speaker explained that over 36,000 objects larger than ten centimetres and 130 million smaller fragments currently orbit Earth at speeds exceeding 28,000 kilometres per hour. The Kessler Syndrome was described as a scenario where collision debris creates a cascading chain reaction, potentially making orbital zones unusable. The problem has intensified with companies launching thousands of satellites for mega-constellations. Several solutions were proposed, including active debris removal using robotic arms, nets, and lasers, as well as international agreements requiring satellites to deorbit within twenty-five years of their mission completion.',
    wordCount: 100
  },
  {
    id: 'rl-031',
    title: 'The Psychology of Misinformation',
    topic: 'psychology',
    transcript: 'Understanding why people believe and share misinformation has become one of the most important research questions in modern psychology. The phenomenon is driven by several cognitive biases. Confirmation bias leads people to accept information that aligns with their existing beliefs while dismissing contradictory evidence. The illusory truth effect means that repeated exposure to a false claim increases the likelihood of believing it — even when people initially knew it was wrong. Social identity plays a powerful role: people are far more likely to share information from their in-group without verifying its accuracy. Research by Gordon Pennycook at the University of Regina found that the primary reason people share misinformation is not that they believe it, but rather that social media platforms do not encourage them to think about accuracy before sharing. Simple interventions, such as asking users to rate the accuracy of a headline before sharing, have been shown to reduce the spread of false information by up to twenty-five per cent.',
    keyPoints: [
      'Confirmation bias causes people to accept information matching their existing beliefs.',
      'The illusory truth effect means repetition increases perceived credibility of false claims.',
      'In-group loyalty drives sharing of unverified information.',
      'People often share misinformation not because they believe it but because platforms do not prompt accuracy thinking.',
      'Simple accuracy prompts can reduce misinformation sharing by up to 25%.'
    ],
    sampleRetell: 'The lecture examined the psychology behind why people believe and share misinformation. The speaker identified several cognitive biases at work, including confirmation bias, which leads people to accept information matching their existing views, and the illusory truth effect, where repeated exposure to false claims increases their perceived credibility. Social identity was highlighted as a powerful factor, with people more likely to share unverified information from their in-group. Research by Gordon Pennycook found that people often share misinformation not because they believe it, but because social media does not prompt them to think about accuracy. The speaker noted that simple interventions, such as asking users to rate headline accuracy before sharing, can reduce misinformation spread by twenty-five per cent.',
    wordCount: 118
  },
  {
    id: 'rl-032',
    title: 'Vertical Farming and Food Security',
    topic: 'technology',
    transcript: 'Vertical farming represents a radical reimagining of food production for an urbanising world. These indoor facilities grow crops in stacked layers using hydroponic or aeroponic systems that require no soil. LED lighting tuned to specific wavelengths provides optimal photosynthesis conditions, and climate-controlled environments allow year-round production regardless of external weather. The advantages are remarkable: vertical farms use up to ninety-five per cent less water than conventional agriculture, eliminate the need for pesticides, and can be located within or near cities, dramatically reducing transportation emissions and food miles. A single hectare of vertical farm space can produce the equivalent of ten to twenty hectares of conventional farmland. However, the technology faces significant challenges. Energy costs remain high, and the initial capital investment can exceed fifty million dollars for a large-scale facility. Currently, vertical farms are commercially viable mainly for leafy greens, herbs, and strawberries — not staple crops like wheat or rice.',
    keyPoints: [
      'Vertical farms grow crops in stacked layers using hydroponic or aeroponic systems.',
      'They use 95% less water and eliminate the need for pesticides.',
      'One hectare can produce the equivalent of 10-20 hectares of conventional farmland.',
      'High energy costs and capital investment (over $50 million) are major challenges.',
      'Currently viable mainly for leafy greens and herbs, not staple crops.'
    ],
    sampleRetell: 'The lecture explored vertical farming as a solution for food security in an urbanising world. These indoor facilities grow crops in stacked layers using hydroponic systems with LED lighting and climate control. The speaker highlighted impressive advantages: ninety-five per cent less water usage, no pesticides, and the ability to produce year-round near urban centres. A single hectare can match ten to twenty hectares of conventional farmland. However, significant challenges were noted, including high energy costs and initial capital investments exceeding fifty million dollars. The speaker concluded that vertical farming is currently commercially viable mainly for leafy greens and herbs, not staple crops like wheat or rice.',
    wordCount: 105
  },
  {
    id: 'rl-033',
    title: 'The Demographic Dividend in Africa',
    topic: 'sociology',
    transcript: 'Africa stands at a demographic crossroads that could determine the continent\'s economic trajectory for decades to come. By 2050, Africa\'s working-age population will increase by roughly 740 million people — more than the current combined workforce of Europe and North America. If sufficient jobs, education, and healthcare are provided, this youth bulge could drive unprecedented economic growth, a phenomenon economists call the demographic dividend. East Asian countries experienced exactly this between 1965 and 1990, when declining fertility rates and a growing labour force contributed to annual GDP growth rates exceeding seven per cent. However, the dividend is not automatic. Without adequate investment in education and job creation, the same demographic trend could lead to mass unemployment, social instability, and increased migration pressures. Currently, Africa creates only three million formal jobs annually for the twelve million young people entering the labour market.',
    keyPoints: [
      'Africa\'s working-age population will grow by 740 million by 2050.',
      'The demographic dividend could drive unprecedented economic growth if jobs are created.',
      'East Asian nations achieved 7%+ GDP growth through a similar demographic transition.',
      'The dividend requires investment in education, healthcare, and job creation.',
      'Currently only 3 million formal jobs are created for 12 million new workers annually.'
    ],
    sampleRetell: 'The lecture discussed Africa\'s demographic crossroads. The speaker explained that by 2050, the continent\'s working-age population will grow by approximately 740 million people. If sufficient jobs and education are provided, this youth bulge could create a demographic dividend of unprecedented economic growth, similar to what East Asian countries experienced between 1965 and 1990 with GDP growth exceeding seven per cent annually. However, the speaker cautioned that this outcome is not automatic. Without adequate investment, the same demographic trend could result in mass unemployment and social instability. A concerning statistic was highlighted: Africa currently creates only three million formal jobs for twelve million young people entering the labour market each year.',
    wordCount: 112
  },
  {
    id: 'rl-034',
    title: 'CRISPR and the Gene Editing Revolution',
    topic: 'science',
    transcript: 'The development of CRISPR-Cas9 gene editing technology has been described as one of the most significant scientific breakthroughs of the twenty-first century. This molecular tool, originally discovered as a bacterial defence mechanism against viruses, allows scientists to precisely cut and modify DNA sequences at specific locations. The implications are vast. In medicine, CRISPR is being used to develop treatments for genetic diseases such as sickle cell disease and beta-thalassemia. The first CRISPR-based therapy, Casgevy, was approved by regulators in the UK and US in late 2023. In agriculture, gene-edited crops that are drought-resistant or more nutritious could help address food security challenges. However, the technology raises profound ethical questions. The case of He Jiankui, who created gene-edited babies in China in 2018, highlighted the risks of applying the technology to human embryos. Most countries have banned germline editing, but the technology is advancing faster than regulatory frameworks can adapt.',
    keyPoints: [
      'CRISPR-Cas9 allows precise cutting and modification of DNA sequences.',
      'Casgevy became the first approved CRISPR therapy in late 2023 for sickle cell disease.',
      'Gene-edited crops could address food security through drought resistance and improved nutrition.',
      'He Jiankui\'s creation of gene-edited babies in 2018 raised major ethical concerns.',
      'Technology is advancing faster than regulatory frameworks can keep pace.'
    ],
    sampleRetell: 'The lecture examined the CRISPR-Cas9 gene editing revolution. The speaker described how this technology, originally discovered as a bacterial defence mechanism, allows scientists to precisely modify DNA sequences. In medicine, CRISPR is being used to treat genetic diseases, and the first approved therapy, Casgevy, received regulatory approval in the UK and US in late 2023 for sickle cell disease. In agriculture, gene-edited crops offer potential solutions to food security challenges. However, the speaker raised serious ethical concerns, citing the case of He Jiankui, who controversially created gene-edited babies in China in 2018. The lecture concluded that while most countries have banned germline editing, the technology is advancing faster than regulatory frameworks can adapt.',
    wordCount: 112
  },
  {
    id: 'rl-035',
    title: 'The Economics of Renewable Energy Transition',
    topic: 'economics',
    transcript: 'The economics of energy have fundamentally shifted in favour of renewables. The cost of solar electricity has fallen by ninety per cent since 2010, making it the cheapest source of new electricity generation in most parts of the world. Wind power costs have dropped by seventy per cent over the same period. This transformation has been driven by manufacturing economies of scale, improved technology, and supportive government policies. However, the transition creates significant economic disruption. Communities dependent on fossil fuel industries face job losses and declining tax revenues. In the United States alone, approximately 80,000 coal jobs have disappeared since 2012. A concept known as the just transition has emerged, advocating for targeted support — including retraining programmes, economic diversification initiatives, and transitional income support — for workers and communities affected by the shift away from fossil fuels.',
    keyPoints: [
      'Solar costs have fallen 90% since 2010, making it the cheapest new electricity source.',
      'Wind power costs decreased by 70% over the same period.',
      'The transition is driven by economies of scale, technology, and government policy.',
      'Fossil fuel communities face significant economic disruption and job losses.',
      'The just transition concept advocates targeted support for affected workers and communities.'
    ],
    sampleRetell: 'The lecture focused on the economics of the renewable energy transition. The speaker highlighted that solar electricity costs have fallen by ninety per cent since 2010, making it the cheapest source of new power generation globally. Wind power costs have dropped by seventy per cent. These dramatic reductions have been driven by manufacturing scale, improved technology, and government support. However, the speaker also addressed the economic disruption caused by this transition. Approximately 80,000 coal jobs have disappeared in the United States since 2012. The concept of a just transition was introduced, which advocates for targeted support including retraining programmes and economic diversification for workers and communities affected by the decline of fossil fuel industries.',
    wordCount: 110
  },
  {
    id: 'rl-036',
    title: 'Digital Currencies and Central Bank Innovation',
    topic: 'economics',
    transcript: 'Central banks around the world are exploring digital currencies as the next evolution of money. Over 130 countries, representing ninety-eight per cent of global GDP, are now investigating central bank digital currencies, known as CBDCs. China has already launched a digital yuan pilot programme involving over 260 million users. The motivations vary: some central banks want to improve financial inclusion for unbanked populations, others seek to modernise payment systems, and many are responding to the competitive threat posed by private cryptocurrencies and stablecoins. Unlike Bitcoin or Ethereum, CBDCs would be issued and backed by central banks, maintaining government control over monetary policy. However, privacy advocates worry about the surveillance potential of government-issued digital currencies that could track every transaction. There are also concerns about the impact on commercial banks, which could lose deposits if citizens hold digital currency directly with the central bank.',
    keyPoints: [
      'Over 130 countries are investigating central bank digital currencies.',
      'China\'s digital yuan pilot has over 260 million users.',
      'Motivations include financial inclusion, payment modernisation, and competition with crypto.',
      'CBDCs differ from cryptocurrencies by being government-issued and centrally controlled.',
      'Privacy concerns and potential disruption to commercial banks are major challenges.'
    ],
    sampleRetell: 'The lecture discussed central bank digital currencies, or CBDCs. The speaker noted that over 130 countries, representing ninety-eight per cent of global GDP, are exploring this technology. China has already launched a digital yuan pilot with over 260 million users. The motivations include improving financial inclusion, modernising payment systems, and responding to the competitive threat of private cryptocurrencies. Unlike Bitcoin, CBDCs would be government-issued and centrally controlled. However, the speaker raised two significant concerns: the surveillance potential of tracking every transaction, and the risk that commercial banks could lose deposits if citizens hold currency directly with central banks. The lecture highlighted the tension between innovation and privacy in monetary policy.',
    wordCount: 112
  },
  {
    id: 'rl-037',
    title: 'Neuroplasticity and Adult Learning',
    topic: 'psychology',
    transcript: 'For much of the twentieth century, neuroscientists believed that the adult brain was essentially fixed — that neural connections established during childhood remained largely unchanged throughout life. This view has been comprehensively overturned by research into neuroplasticity, which demonstrates that the brain continues to form new neural pathways and reorganise existing ones well into old age. London taxi drivers, who spend years memorising the city\'s complex street network, show measurably larger hippocampi — the brain region associated with spatial memory — than bus drivers who follow fixed routes. Musicians who practise regularly develop enhanced connections between the auditory and motor cortices. The implications for education are profound. Adults can learn new skills and languages at any age, though the process may require more deliberate practice and different strategies compared to childhood learning. Techniques such as spaced repetition, interleaved practice, and retrieval practice have been shown to enhance adult learning by leveraging the brain\'s natural plasticity.',
    keyPoints: [
      'Neuroplasticity shows the adult brain continues forming new neural pathways.',
      'London taxi drivers develop measurably larger hippocampi from memorising streets.',
      'Musicians show enhanced auditory-motor cortex connections from regular practice.',
      'Adults can learn new skills at any age with deliberate practice.',
      'Spaced repetition, interleaving, and retrieval practice enhance adult learning.'
    ],
    sampleRetell: 'The lecture explored neuroplasticity and its implications for adult learning. The speaker explained that the longstanding belief that adult brains are fixed has been overturned by modern research. Studies of London taxi drivers showed measurably larger hippocampi from memorising complex street networks, while musicians develop enhanced neural connections through regular practice. The key message was that adults can learn new skills and languages at any age, although the process requires more deliberate strategies. The speaker recommended specific techniques including spaced repetition, interleaved practice, and retrieval practice, which leverage the brain\'s natural plasticity to enhance learning outcomes for adults.',
    wordCount: 98
  },
  {
    id: 'rl-038',
    title: 'Ocean Acidification',
    topic: 'environment',
    transcript: 'While most climate discussions focus on atmospheric warming, the oceans are experiencing an equally alarming transformation. The ocean has absorbed approximately thirty per cent of the carbon dioxide emitted by human activities since the industrial revolution. This absorption has caused ocean pH to decrease by 0.1 units — a thirty per cent increase in acidity. This may sound small, but the pH scale is logarithmic, so the change is actually quite significant. The consequences for marine life are severe. Coral reefs, which support roughly twenty-five per cent of all marine species, are particularly vulnerable because acidification makes it harder for organisms to build calcium carbonate shells and skeletons. Pteropods — tiny sea snails that form the base of many marine food chains — are already showing shell dissolution in Antarctic waters. Scientists project that if current trends continue, ocean acidity could increase by one hundred and fifty per cent by 2100, threatening fisheries that provide protein for over three billion people worldwide.',
    keyPoints: [
      'The ocean has absorbed 30% of human-emitted CO2 since the industrial revolution.',
      'Ocean pH has decreased by 0.1 units, representing a 30% increase in acidity.',
      'Coral reefs supporting 25% of marine species are severely threatened.',
      'Pteropod shells are already dissolving in Antarctic waters.',
      'Ocean acidity could increase by 150% by 2100, threatening fisheries feeding 3 billion people.'
    ],
    sampleRetell: 'The lecture addressed the often-overlooked issue of ocean acidification. The speaker explained that the ocean has absorbed approximately thirty per cent of human carbon dioxide emissions, causing a thirty per cent increase in acidity. Coral reefs, which support twenty-five per cent of marine species, are particularly vulnerable because acidification impairs the formation of calcium carbonate shells. Pteropods, tiny sea snails at the base of food chains, are already showing shell dissolution in Antarctic waters. The speaker warned that if current trends continue, ocean acidity could increase by one hundred and fifty per cent by 2100, threatening fisheries that provide protein for over three billion people. This represents a major but underreported dimension of the climate crisis.',
    wordCount: 112
  },
  {
    id: 'rl-039',
    title: 'Smart Cities and Urban Data',
    topic: 'technology',
    transcript: 'The concept of smart cities — urban areas that use sensors, data analytics, and connected devices to improve services and quality of life — is being implemented worldwide with varying degrees of success. Singapore is often cited as the leading example, using a comprehensive sensor network to manage traffic, monitor air quality, and optimise energy use. Barcelona has deployed twelve thousand smart sensors across the city, saving over seventy-five million euros annually in water management, lighting, and parking. Seoul uses real-time data to adjust bus routes dynamically based on demand. However, the smart city model raises important concerns about privacy and surveillance. The Sidewalk Labs project in Toronto was cancelled after residents objected to the extensive data collection planned for their neighbourhood. Critics argue that without strong governance frameworks and citizen consent, smart city technologies risk creating environments of pervasive surveillance rather than genuinely improving urban life.',
    keyPoints: [
      'Smart cities use sensors and data analytics to improve urban services.',
      'Singapore leads with comprehensive sensor networks for traffic and energy.',
      'Barcelona saves €75 million annually through 12,000 smart sensors.',
      'The Toronto Sidewalk Labs project was cancelled over privacy concerns.',
      'Strong governance frameworks are needed to prevent surveillance overreach.'
    ],
    sampleRetell: 'The lecture examined the implementation of smart cities around the world. The speaker described how urban areas are using sensors and data analytics to improve services. Singapore was highlighted as a leading example, with comprehensive networks managing traffic and energy. Barcelona has deployed twelve thousand smart sensors, saving over seventy-five million euros annually. Seoul dynamically adjusts bus routes using real-time data. However, the speaker also raised concerns about privacy and surveillance. The Toronto Sidewalk Labs project was cancelled after residents objected to extensive data collection plans. The lecture concluded that without strong governance frameworks and genuine citizen consent, smart city technologies risk creating surveillance environments rather than improving urban life.',
    wordCount: 108
  },
  {
    id: 'rl-040',
    title: 'The Science of Sleep and Performance',
    topic: 'health',
    transcript: 'Sleep science has undergone a revolution in recent years, fundamentally changing our understanding of how rest affects cognitive performance, physical health, and emotional regulation. Research by Matthew Walker at the University of California, Berkeley, has demonstrated that even moderate sleep deprivation — getting six hours instead of eight — can reduce cognitive function by up to thirty per cent and impair decision-making abilities comparable to mild alcohol intoxication. During deep sleep, the brain activates its glymphatic system, essentially flushing out toxic waste products including beta-amyloid, a protein linked to Alzheimer\'s disease. Sleep is also critical for memory consolidation: information learned during the day is replayed and strengthened during specific sleep stages. Despite this evidence, modern society continues to undervalue sleep. One in three adults regularly gets fewer than seven hours, and the economic cost of sleep deprivation in the United States alone is estimated at over four hundred billion dollars annually in lost productivity, healthcare costs, and accidents.',
    keyPoints: [
      'Six hours of sleep instead of eight reduces cognitive function by up to 30%.',
      'The glymphatic system flushes toxic waste including Alzheimer\'s-linked proteins during deep sleep.',
      'Memory consolidation occurs during specific sleep stages.',
      'One in three adults regularly sleeps fewer than seven hours.',
      'Sleep deprivation costs the US over $400 billion annually.'
    ],
    sampleRetell: 'The lecture presented recent findings in sleep science. The speaker cited research by Matthew Walker showing that even moderate sleep deprivation, such as getting six instead of eight hours, reduces cognitive function by up to thirty per cent. During deep sleep, the brain\'s glymphatic system flushes out toxic waste products including beta-amyloid, which is linked to Alzheimer\'s disease. Sleep is also essential for memory consolidation, as information is replayed and strengthened during specific sleep stages. Despite this evidence, one in three adults regularly sleeps fewer than seven hours. The speaker noted that sleep deprivation costs the United States over four hundred billion dollars annually through lost productivity, healthcare costs, and accidents.',
    wordCount: 108
  }
];

// -----------------------------------------------------------------------------
// 5. ASQ QUESTIONS (410 items)
// -----------------------------------------------------------------------------
const ASQ_QUESTIONS = [
  // SCIENCE (30)
  { id: 'asq-001', question: 'What do we call the study of stars and planets?', answer: 'Astronomy', category: 'science' },
  { id: 'asq-002', question: 'What is the chemical symbol for gold?', answer: 'Au', category: 'science' },
  { id: 'asq-003', question: 'What gas do plants absorb from the atmosphere during photosynthesis?', answer: 'Carbon dioxide', category: 'science' },
  { id: 'asq-004', question: 'What is the closest star to Earth?', answer: 'The Sun', category: 'science' },
  { id: 'asq-005', question: 'How many chromosomes do humans have?', answer: 'Forty-six', category: 'science' },
  { id: 'asq-006', question: 'What is the hardest natural substance on Earth?', answer: 'Diamond', category: 'science' },
  { id: 'asq-007', question: 'What do we call the process of water changing from liquid to gas?', answer: 'Evaporation', category: 'science' },
  { id: 'asq-008', question: 'What planet is known as the Red Planet?', answer: 'Mars', category: 'science' },
  { id: 'asq-009', question: 'What is the chemical formula for water?', answer: 'H2O', category: 'science' },
  { id: 'asq-010', question: 'What force keeps us on the ground?', answer: 'Gravity', category: 'science' },
  { id: 'asq-011', question: 'What is the boiling point of water in degrees Celsius?', answer: 'One hundred degrees', category: 'science' },
  { id: 'asq-012', question: 'What organ pumps blood through the body?', answer: 'The heart', category: 'science' },
  { id: 'asq-013', question: 'What do we call animals that eat only plants?', answer: 'Herbivores', category: 'science' },
  { id: 'asq-014', question: 'What is the largest organ in the human body?', answer: 'The skin', category: 'science' },
  { id: 'asq-015', question: 'What type of energy does the Sun primarily provide?', answer: 'Solar energy', category: 'science' },
  { id: 'asq-016', question: 'What gas makes up most of the Earth\'s atmosphere?', answer: 'Nitrogen', category: 'science' },
  { id: 'asq-017', question: 'What do we call a scientist who studies fossils?', answer: 'Palaeontologist', category: 'science' },
  { id: 'asq-018', question: 'What is the process by which plants make their own food using sunlight?', answer: 'Photosynthesis', category: 'science' },
  { id: 'asq-019', question: 'What part of the cell contains genetic information?', answer: 'The nucleus', category: 'science' },
  { id: 'asq-020', question: 'How many bones does an adult human body have?', answer: 'Two hundred and six', category: 'science' },
  { id: 'asq-021', question: 'What do we call a substance that speeds up a chemical reaction?', answer: 'A catalyst', category: 'science' },
  { id: 'asq-022', question: 'What is the smallest unit of life?', answer: 'A cell', category: 'science' },
  { id: 'asq-023', question: 'What do we call the change of state from solid to liquid?', answer: 'Melting', category: 'science' },
  { id: 'asq-024', question: 'Which planet is the largest in our solar system?', answer: 'Jupiter', category: 'science' },
  { id: 'asq-025', question: 'What is the study of living organisms called?', answer: 'Biology', category: 'science' },
  { id: 'asq-026', question: 'What element do all organic compounds contain?', answer: 'Carbon', category: 'science' },
  { id: 'asq-027', question: 'What is the speed of light approximately in kilometres per second?', answer: 'Three hundred thousand', category: 'science' },
  { id: 'asq-028', question: 'What do we call the outermost layer of the Earth?', answer: 'The crust', category: 'science' },
  { id: 'asq-029', question: 'What is the study of weather and climate called?', answer: 'Meteorology', category: 'science' },
  { id: 'asq-030', question: 'What part of the blood carries oxygen?', answer: 'Red blood cells', category: 'science' },

  // GEOGRAPHY (25)
  { id: 'asq-031', question: 'What is the longest river in the world?', answer: 'The Nile', category: 'geography' },
  { id: 'asq-032', question: 'What is the largest continent by area?', answer: 'Asia', category: 'geography' },
  { id: 'asq-033', question: 'What is the capital city of Australia?', answer: 'Canberra', category: 'geography' },
  { id: 'asq-034', question: 'How many continents are there?', answer: 'Seven', category: 'geography' },
  { id: 'asq-035', question: 'What is the largest ocean on Earth?', answer: 'The Pacific Ocean', category: 'geography' },
  { id: 'asq-036', question: 'What is the driest continent on Earth?', answer: 'Antarctica', category: 'geography' },
  { id: 'asq-037', question: 'What is the capital of the United Kingdom?', answer: 'London', category: 'geography' },
  { id: 'asq-038', question: 'What is the highest mountain in the world?', answer: 'Mount Everest', category: 'geography' },
  { id: 'asq-039', question: 'Which country has the largest population in the world?', answer: 'India', category: 'geography' },
  { id: 'asq-040', question: 'What imaginary line divides the Earth into Northern and Southern Hemispheres?', answer: 'The Equator', category: 'geography' },
  { id: 'asq-041', question: 'What is the smallest country in the world?', answer: 'Vatican City', category: 'geography' },
  { id: 'asq-042', question: 'What is the largest desert in the world?', answer: 'The Sahara', category: 'geography' },
  { id: 'asq-043', question: 'On which continent is Brazil located?', answer: 'South America', category: 'geography' },
  { id: 'asq-044', question: 'What is the largest island in the world?', answer: 'Greenland', category: 'geography' },
  { id: 'asq-045', question: 'What is the capital of Japan?', answer: 'Tokyo', category: 'geography' },
  { id: 'asq-046', question: 'Which ocean lies between Africa and Australia?', answer: 'The Indian Ocean', category: 'geography' },
  { id: 'asq-047', question: 'What is the capital of Canada?', answer: 'Ottawa', category: 'geography' },
  { id: 'asq-048', question: 'What country is known as the Land of the Rising Sun?', answer: 'Japan', category: 'geography' },
  { id: 'asq-049', question: 'What is the largest country by land area?', answer: 'Russia', category: 'geography' },
  { id: 'asq-050', question: 'On which continent is Egypt located?', answer: 'Africa', category: 'geography' },
  { id: 'asq-051', question: 'What is the deepest ocean trench?', answer: 'The Mariana Trench', category: 'geography' },
  { id: 'asq-052', question: 'What river flows through London?', answer: 'The Thames', category: 'geography' },
  { id: 'asq-053', question: 'Which Australian state is the largest by area?', answer: 'Western Australia', category: 'geography' },
  { id: 'asq-054', question: 'What is the capital of New Zealand?', answer: 'Wellington', category: 'geography' },
  { id: 'asq-055', question: 'What mountain range separates Europe from Asia?', answer: 'The Ural Mountains', category: 'geography' },

  // ACADEMIC (25)
  { id: 'asq-056', question: 'What is the person who leads a university called?', answer: 'Vice-chancellor or chancellor', category: 'academic' },
  { id: 'asq-057', question: 'What do you call the list of books and sources at the end of an academic paper?', answer: 'Bibliography or references', category: 'academic' },
  { id: 'asq-058', question: 'What is a summary of a research paper called?', answer: 'An abstract', category: 'academic' },
  { id: 'asq-059', question: 'What do you call the formal ceremony where students receive their degrees?', answer: 'Graduation or commencement', category: 'academic' },
  { id: 'asq-060', question: 'What is a PhD thesis defence called?', answer: 'A viva', category: 'academic' },
  { id: 'asq-061', question: 'What do we call a required course that students must take?', answer: 'A compulsory or mandatory course', category: 'academic' },
  { id: 'asq-062', question: 'What is a student who has completed their first degree called?', answer: 'A graduate or alumnus', category: 'academic' },
  { id: 'asq-063', question: 'What do we call it when you quote someone else\'s work without giving credit?', answer: 'Plagiarism', category: 'academic' },
  { id: 'asq-064', question: 'What is the person who supervises a PhD student called?', answer: 'A supervisor or adviser', category: 'academic' },
  { id: 'asq-065', question: 'What do we call a preliminary version of an essay or paper?', answer: 'A draft', category: 'academic' },
  { id: 'asq-066', question: 'What is the study of human societies and cultures called?', answer: 'Anthropology', category: 'academic' },
  { id: 'asq-067', question: 'What do we call a class taught by a university professor to a large group?', answer: 'A lecture', category: 'academic' },
  { id: 'asq-068', question: 'What is a small discussion-based class called?', answer: 'A seminar or tutorial', category: 'academic' },
  { id: 'asq-069', question: 'What degree is higher: a masters or a doctorate?', answer: 'A doctorate', category: 'academic' },
  { id: 'asq-070', question: 'What do we call the academic year period between terms?', answer: 'A break or recess', category: 'academic' },
  { id: 'asq-071', question: 'What do we call the published collection of academic research articles?', answer: 'A journal', category: 'academic' },
  { id: 'asq-072', question: 'What is the term for the range of subjects offered by a school or university?', answer: 'Curriculum', category: 'academic' },
  { id: 'asq-073', question: 'What type of degree is a BA?', answer: 'Bachelor of Arts', category: 'academic' },
  { id: 'asq-074', question: 'What do you call a financial award to a student based on academic merit?', answer: 'A scholarship', category: 'academic' },
  { id: 'asq-075', question: 'What is the term for enrolling in a university course?', answer: 'Registration or enrolment', category: 'academic' },
  { id: 'asq-076', question: 'What do you call the period when a professor is available to see students?', answer: 'Office hours or consultation hours', category: 'academic' },
  { id: 'asq-077', question: 'What is a hypothesis?', answer: 'A testable prediction or educated guess', category: 'academic' },
  { id: 'asq-078', question: 'What does peer review mean in academic publishing?', answer: 'Evaluation by other experts in the field', category: 'academic' },
  { id: 'asq-079', question: 'What is the study of the mind and behaviour called?', answer: 'Psychology', category: 'academic' },
  { id: 'asq-080', question: 'What do we call an extended piece of writing on a particular subject for a degree?', answer: 'A thesis or dissertation', category: 'academic' },

  // EVERYDAY (25)
  { id: 'asq-081', question: 'What do you call the meal you eat in the middle of the day?', answer: 'Lunch', category: 'everyday' },
  { id: 'asq-082', question: 'What is the opposite of cheap?', answer: 'Expensive', category: 'everyday' },
  { id: 'asq-083', question: 'What do you call a person who prepares food in a restaurant?', answer: 'A chef or cook', category: 'everyday' },
  { id: 'asq-084', question: 'If you have an appointment at three-fifteen, what time should you arrive?', answer: 'Before three-fifteen', category: 'everyday' },
  { id: 'asq-085', question: 'What do we call the money you pay to live in a rented house?', answer: 'Rent', category: 'everyday' },
  { id: 'asq-086', question: 'What do you call the person who delivers letters to your home?', answer: 'A postman or mail carrier', category: 'everyday' },
  { id: 'asq-087', question: 'What is the day before today called?', answer: 'Yesterday', category: 'everyday' },
  { id: 'asq-088', question: 'What do you call the place where you go to borrow books?', answer: 'A library', category: 'everyday' },
  { id: 'asq-089', question: 'What colour do you get when you mix red and white?', answer: 'Pink', category: 'everyday' },
  { id: 'asq-090', question: 'What do you call a piece of furniture where you keep your clothes?', answer: 'A wardrobe', category: 'everyday' },
  { id: 'asq-091', question: 'What is the opposite of to remember?', answer: 'To forget', category: 'everyday' },
  { id: 'asq-092', question: 'How many months are in a year?', answer: 'Twelve', category: 'everyday' },
  { id: 'asq-093', question: 'What do you call a vehicle with two wheels that you pedal?', answer: 'A bicycle', category: 'everyday' },
  { id: 'asq-094', question: 'What do you call the room in a house where you cook food?', answer: 'A kitchen', category: 'everyday' },
  { id: 'asq-095', question: 'If something is not artificial, what is it?', answer: 'Natural', category: 'everyday' },
  { id: 'asq-096', question: 'What do you use to cut paper?', answer: 'Scissors', category: 'everyday' },
  { id: 'asq-097', question: 'What do you call the person who flies an aeroplane?', answer: 'A pilot', category: 'everyday' },
  { id: 'asq-098', question: 'What is the last month of the year?', answer: 'December', category: 'everyday' },
  { id: 'asq-099', question: 'What do you call a doctor who performs operations?', answer: 'A surgeon', category: 'everyday' },
  { id: 'asq-100', question: 'What do we call the money you earn from working?', answer: 'Salary or wages', category: 'everyday' },
  { id: 'asq-101', question: 'What is the opposite of increase?', answer: 'Decrease', category: 'everyday' },
  { id: 'asq-102', question: 'What do you call a ten-year period?', answer: 'A decade', category: 'everyday' },
  { id: 'asq-103', question: 'What do you call a shop that sells medicine?', answer: 'A pharmacy or chemist', category: 'everyday' },
  { id: 'asq-104', question: 'If today is Wednesday, what day is the day after tomorrow?', answer: 'Friday', category: 'everyday' },
  { id: 'asq-105', question: 'What is a hundred-year period called?', answer: 'A century', category: 'everyday' },

  // MEASUREMENT (20)
  { id: 'asq-106', question: 'What unit do we use to measure temperature?', answer: 'Degrees Celsius or Fahrenheit', category: 'measurement' },
  { id: 'asq-107', question: 'How many centimetres are in a metre?', answer: 'One hundred', category: 'measurement' },
  { id: 'asq-108', question: 'How many grams are in a kilogram?', answer: 'One thousand', category: 'measurement' },
  { id: 'asq-109', question: 'What instrument do we use to measure temperature?', answer: 'A thermometer', category: 'measurement' },
  { id: 'asq-110', question: 'How many millilitres are in a litre?', answer: 'One thousand', category: 'measurement' },
  { id: 'asq-111', question: 'What unit is used to measure electrical current?', answer: 'Amperes or amps', category: 'measurement' },
  { id: 'asq-112', question: 'How many metres are in a kilometre?', answer: 'One thousand', category: 'measurement' },
  { id: 'asq-113', question: 'What do we use to measure weight?', answer: 'Scales', category: 'measurement' },
  { id: 'asq-114', question: 'What unit measures the loudness of sound?', answer: 'Decibels', category: 'measurement' },
  { id: 'asq-115', question: 'What instrument measures atmospheric pressure?', answer: 'A barometer', category: 'measurement' },
  { id: 'asq-116', question: 'How many weeks are in a year?', answer: 'Fifty-two', category: 'measurement' },
  { id: 'asq-117', question: 'What unit measures the frequency of sound waves?', answer: 'Hertz', category: 'measurement' },
  { id: 'asq-118', question: 'How many minutes are in an hour?', answer: 'Sixty', category: 'measurement' },
  { id: 'asq-119', question: 'What instrument measures wind speed?', answer: 'An anemometer', category: 'measurement' },
  { id: 'asq-120', question: 'How many days are in a leap year?', answer: 'Three hundred and sixty-six', category: 'measurement' },
  { id: 'asq-121', question: 'What unit measures electrical resistance?', answer: 'Ohms', category: 'measurement' },
  { id: 'asq-122', question: 'How many seconds are in a minute?', answer: 'Sixty', category: 'measurement' },
  { id: 'asq-123', question: 'What do we call the scale used to measure earthquakes?', answer: 'The Richter scale', category: 'measurement' },
  { id: 'asq-124', question: 'How many hours are in a day?', answer: 'Twenty-four', category: 'measurement' },
  { id: 'asq-125', question: 'What unit is used to measure energy in food?', answer: 'Calories or kilojoules', category: 'measurement' },

  // TIME (15)
  { id: 'asq-126', question: 'What do we call the period of time from Monday to Friday?', answer: 'Weekdays', category: 'time' },
  { id: 'asq-127', question: 'What do AM and PM stand for in telling time?', answer: 'Ante meridiem and post meridiem', category: 'time' },
  { id: 'asq-128', question: 'What do we call the time of day when the sun goes down?', answer: 'Sunset or dusk', category: 'time' },
  { id: 'asq-129', question: 'Which month has the fewest days?', answer: 'February', category: 'time' },
  { id: 'asq-130', question: 'What season comes after winter?', answer: 'Spring', category: 'time' },
  { id: 'asq-131', question: 'How many days are there in September?', answer: 'Thirty', category: 'time' },
  { id: 'asq-132', question: 'What do we call twelve o\'clock in the day?', answer: 'Noon or midday', category: 'time' },
  { id: 'asq-133', question: 'What do we call twelve o\'clock at night?', answer: 'Midnight', category: 'time' },
  { id: 'asq-134', question: 'How many seasons are there in a year?', answer: 'Four', category: 'time' },
  { id: 'asq-135', question: 'What is a period of one thousand years called?', answer: 'A millennium', category: 'time' },
  { id: 'asq-136', question: 'What day of the week comes before Friday?', answer: 'Thursday', category: 'time' },
  { id: 'asq-137', question: 'In which month does the Australian financial year begin?', answer: 'July', category: 'time' },
  { id: 'asq-138', question: 'What do we call the time when the sun first appears in the morning?', answer: 'Sunrise or dawn', category: 'time' },
  { id: 'asq-139', question: 'How often does a biannual event occur?', answer: 'Twice a year', category: 'time' },
  { id: 'asq-140', question: 'How many days are in a fortnight?', answer: 'Fourteen', category: 'time' },

  // LANGUAGE (15)
  { id: 'asq-141', question: 'What is the opposite of synonym?', answer: 'Antonym', category: 'language' },
  { id: 'asq-142', question: 'How many letters are in the English alphabet?', answer: 'Twenty-six', category: 'language' },
  { id: 'asq-143', question: 'What do we call a word that sounds the same as another but has a different meaning?', answer: 'A homophone', category: 'language' },
  { id: 'asq-144', question: 'What do we call a person who speaks two languages fluently?', answer: 'Bilingual', category: 'language' },
  { id: 'asq-145', question: 'What type of word is "quickly" — a noun, verb, or adverb?', answer: 'An adverb', category: 'language' },
  { id: 'asq-146', question: 'What do we call the dots and marks used in writing to separate sentences?', answer: 'Punctuation', category: 'language' },
  { id: 'asq-147', question: 'What is a brief account of someone\'s life story called?', answer: 'A biography', category: 'language' },
  { id: 'asq-148', question: 'What do we call a word that means the same as another word?', answer: 'A synonym', category: 'language' },
  { id: 'asq-149', question: 'What is a word made from the first letters of other words called?', answer: 'An acronym', category: 'language' },
  { id: 'asq-150', question: 'What type of word describes a noun?', answer: 'An adjective', category: 'language' },
  { id: 'asq-151', question: 'What do we call a comparison using "like" or "as"?', answer: 'A simile', category: 'language' },
  { id: 'asq-152', question: 'What do we call the study of the origin of words?', answer: 'Etymology', category: 'language' },
  { id: 'asq-153', question: 'What do we call a story that is made up and not true?', answer: 'Fiction', category: 'language' },
  { id: 'asq-154', question: 'What part of speech is the word "beautiful"?', answer: 'An adjective', category: 'language' },
  { id: 'asq-155', question: 'What do we call a person who writes for a newspaper?', answer: 'A journalist or reporter', category: 'language' },

  // HEALTH (20)
  { id: 'asq-156', question: 'What do we call a doctor who specialises in children\'s health?', answer: 'A paediatrician', category: 'health' },
  { id: 'asq-157', question: 'What is the normal body temperature in degrees Celsius?', answer: 'Thirty-seven degrees', category: 'health' },
  { id: 'asq-158', question: 'What do we call a doctor who specialises in teeth?', answer: 'A dentist', category: 'health' },
  { id: 'asq-159', question: 'What vitamin do you get from sunlight?', answer: 'Vitamin D', category: 'health' },
  { id: 'asq-160', question: 'What is the recommended number of hours of sleep for adults?', answer: 'Seven to nine hours', category: 'health' },
  { id: 'asq-161', question: 'What do we call a medical professional who helps patients recover from injuries?', answer: 'A physiotherapist', category: 'health' },
  { id: 'asq-162', question: 'What do we call the condition when a person cannot see distant objects clearly?', answer: 'Short-sightedness or myopia', category: 'health' },
  { id: 'asq-163', question: 'What is the main function of white blood cells?', answer: 'Fighting infection', category: 'health' },
  { id: 'asq-164', question: 'What is the medical term for high blood pressure?', answer: 'Hypertension', category: 'health' },
  { id: 'asq-165', question: 'What do we call a substance that causes an allergic reaction?', answer: 'An allergen', category: 'health' },
  { id: 'asq-166', question: 'What is the medical term for a heart attack?', answer: 'Myocardial infarction', category: 'health' },
  { id: 'asq-167', question: 'What do we call a doctor who specialises in the eyes?', answer: 'An ophthalmologist', category: 'health' },
  { id: 'asq-168', question: 'What is the medical term for sugar in the blood?', answer: 'Blood glucose', category: 'health' },
  { id: 'asq-169', question: 'What mineral strengthens bones and teeth?', answer: 'Calcium', category: 'health' },
  { id: 'asq-170', question: 'What do we call a rapid spread of a disease across many countries?', answer: 'A pandemic', category: 'health' },
  { id: 'asq-171', question: 'What does BMI stand for?', answer: 'Body Mass Index', category: 'health' },
  { id: 'asq-172', question: 'What fruit is a good source of potassium?', answer: 'Banana', category: 'health' },
  { id: 'asq-173', question: 'What do we call a doctor who specialises in the brain and nervous system?', answer: 'A neurologist', category: 'health' },
  { id: 'asq-174', question: 'What is the name of the disease caused by a deficiency of insulin?', answer: 'Diabetes', category: 'health' },
  { id: 'asq-175', question: 'What type of exercise strengthens the heart and lungs?', answer: 'Cardiovascular or aerobic exercise', category: 'health' },

  // TECHNOLOGY (20)
  { id: 'asq-176', question: 'What does "www" stand for in a website address?', answer: 'World Wide Web', category: 'technology' },
  { id: 'asq-177', question: 'What does CPU stand for?', answer: 'Central Processing Unit', category: 'technology' },
  { id: 'asq-178', question: 'What do we call unwanted email messages?', answer: 'Spam', category: 'technology' },
  { id: 'asq-179', question: 'What does USB stand for?', answer: 'Universal Serial Bus', category: 'technology' },
  { id: 'asq-180', question: 'What do we call software designed to harm a computer?', answer: 'Malware or a virus', category: 'technology' },
  { id: 'asq-181', question: 'What does Wi-Fi stand for?', answer: 'Wireless Fidelity', category: 'technology' },
  { id: 'asq-182', question: 'What do we call the practice of storing data on remote servers via the internet?', answer: 'Cloud computing', category: 'technology' },
  { id: 'asq-183', question: 'What does PDF stand for?', answer: 'Portable Document Format', category: 'technology' },
  { id: 'asq-184', question: 'What do we call a program that searches the internet for information?', answer: 'A search engine', category: 'technology' },
  { id: 'asq-185', question: 'What does AI stand for?', answer: 'Artificial Intelligence', category: 'technology' },
  { id: 'asq-186', question: 'What do we call the unique address that identifies a device on a network?', answer: 'IP address', category: 'technology' },
  { id: 'asq-187', question: 'What does GPS stand for?', answer: 'Global Positioning System', category: 'technology' },
  { id: 'asq-188', question: 'What do we call the secret word or phrase used to access a computer system?', answer: 'A password', category: 'technology' },
  { id: 'asq-189', question: 'What does RAM stand for?', answer: 'Random Access Memory', category: 'technology' },
  { id: 'asq-190', question: 'What do we call a website where people write regular entries about their lives or interests?', answer: 'A blog', category: 'technology' },
  { id: 'asq-191', question: 'What does HTML stand for?', answer: 'HyperText Markup Language', category: 'technology' },
  { id: 'asq-192', question: 'What do we call a small program that runs on a smartphone?', answer: 'An app or application', category: 'technology' },
  { id: 'asq-193', question: 'What does URL stand for?', answer: 'Uniform Resource Locator', category: 'technology' },
  { id: 'asq-194', question: 'What do we call the process of converting data into a code for security?', answer: 'Encryption', category: 'technology' },
  { id: 'asq-195', question: 'What is the name for a network of connected devices in a home or building?', answer: 'A local area network or LAN', category: 'technology' },

  // EDUCATION (20)
  { id: 'asq-196', question: 'What is the first year of primary school in Australia called?', answer: 'Kindergarten or Prep', category: 'education' },
  { id: 'asq-197', question: 'What do you call the teacher in charge of a school?', answer: 'The principal or headmaster', category: 'education' },
  { id: 'asq-198', question: 'What is the final year of secondary school in Australia?', answer: 'Year twelve', category: 'education' },
  { id: 'asq-199', question: 'What do we call the mark or percentage a student receives for their work?', answer: 'A grade or score', category: 'education' },
  { id: 'asq-200', question: 'What do we call the subjects a student studies at school?', answer: 'The curriculum or syllabus', category: 'education' },
  { id: 'asq-201', question: 'What is the term for learning that takes place outside a traditional classroom?', answer: 'Distance learning or online learning', category: 'education' },
  { id: 'asq-202', question: 'What do we call a test given at the end of a course?', answer: 'A final exam or examination', category: 'education' },
  { id: 'asq-203', question: 'What type of school charges fees for attendance?', answer: 'A private or independent school', category: 'education' },
  { id: 'asq-204', question: 'What do we call extra help given to a student outside regular classes?', answer: 'Tutoring', category: 'education' },
  { id: 'asq-205', question: 'What do you call a student who has not yet completed their degree?', answer: 'An undergraduate', category: 'education' },
  { id: 'asq-206', question: 'What is a school term or semester break used for student rest called?', answer: 'A holiday or vacation', category: 'education' },
  { id: 'asq-207', question: 'What do we call a table showing the times of lessons during the week?', answer: 'A timetable or schedule', category: 'education' },
  { id: 'asq-208', question: 'What does STEM stand for in education?', answer: 'Science, Technology, Engineering, and Mathematics', category: 'education' },
  { id: 'asq-209', question: 'What do you call work that students do at home?', answer: 'Homework', category: 'education' },
  { id: 'asq-210', question: 'What is the highest academic degree a person can obtain?', answer: 'A doctorate or PhD', category: 'education' },
  { id: 'asq-211', question: 'What do we call a teacher at a university?', answer: 'A lecturer or professor', category: 'education' },
  { id: 'asq-212', question: 'What is an educational trip outside the school called?', answer: 'A field trip or excursion', category: 'education' },
  { id: 'asq-213', question: 'What do we call a student studying for a second degree?', answer: 'A postgraduate student', category: 'education' },
  { id: 'asq-214', question: 'What certificate do students in NSW receive at the end of Year 12?', answer: 'The HSC or Higher School Certificate', category: 'education' },
  { id: 'asq-215', question: 'What do you call the practice of grouping students by ability?', answer: 'Streaming or tracking', category: 'education' },

  // ARTS (15)
  { id: 'asq-216', question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci', category: 'arts' },
  { id: 'asq-217', question: 'What do you call a person who performs in plays or films?', answer: 'An actor or actress', category: 'arts' },
  { id: 'asq-218', question: 'What instrument has black and white keys?', answer: 'A piano', category: 'arts' },
  { id: 'asq-219', question: 'What do you call a person who creates sculptures?', answer: 'A sculptor', category: 'arts' },
  { id: 'asq-220', question: 'What is the art of designing buildings called?', answer: 'Architecture', category: 'arts' },
  { id: 'asq-221', question: 'What do we call a group of musicians who play together?', answer: 'A band or orchestra', category: 'arts' },
  { id: 'asq-222', question: 'What famous building in Sydney is known for its performing arts?', answer: 'The Sydney Opera House', category: 'arts' },
  { id: 'asq-223', question: 'What do you call a person who writes music?', answer: 'A composer', category: 'arts' },
  { id: 'asq-224', question: 'What type of painting shows natural scenery like mountains and rivers?', answer: 'A landscape', category: 'arts' },
  { id: 'asq-225', question: 'What art form involves dancing with a partner to music?', answer: 'Ballroom dance', category: 'arts' },
  { id: 'asq-226', question: 'What do you call a collection of artworks displayed for the public?', answer: 'An exhibition or gallery', category: 'arts' },
  { id: 'asq-227', question: 'What is a self-portrait?', answer: 'A picture an artist paints or draws of themselves', category: 'arts' },
  { id: 'asq-228', question: 'What is the art of beautiful handwriting called?', answer: 'Calligraphy', category: 'arts' },
  { id: 'asq-229', question: 'What do you call a book of maps?', answer: 'An atlas', category: 'arts' },
  { id: 'asq-230', question: 'What is a dramatic work set to music called?', answer: 'An opera', category: 'arts' },

  // BUSINESS (20)
  { id: 'asq-231', question: 'What do we call the total value of goods and services a country produces in a year?', answer: 'GDP or Gross Domestic Product', category: 'business' },
  { id: 'asq-232', question: 'What is a general increase in prices over time called?', answer: 'Inflation', category: 'business' },
  { id: 'asq-233', question: 'What do we call the person who starts and runs a new business?', answer: 'An entrepreneur', category: 'business' },
  { id: 'asq-234', question: 'What is the stock market?', answer: 'A place where shares of companies are bought and sold', category: 'business' },
  { id: 'asq-235', question: 'What do we call money borrowed from a bank that must be repaid with interest?', answer: 'A loan', category: 'business' },
  { id: 'asq-236', question: 'What is the abbreviation CEO short for?', answer: 'Chief Executive Officer', category: 'business' },
  { id: 'asq-237', question: 'What do we call money paid to the government from income or purchases?', answer: 'Tax', category: 'business' },
  { id: 'asq-238', question: 'What is the term for the amount of money a company makes after all expenses?', answer: 'Profit', category: 'business' },
  { id: 'asq-239', question: 'What do we call a plan that outlines a company\'s goals and strategies?', answer: 'A business plan', category: 'business' },
  { id: 'asq-240', question: 'What is the economic term for a period of negative economic growth?', answer: 'A recession', category: 'business' },
  { id: 'asq-241', question: 'What do we call the practice of buying shares to make a profit?', answer: 'Investing or trading', category: 'business' },
  { id: 'asq-242', question: 'What does the term "supply and demand" refer to?', answer: 'The relationship between product availability and consumer desire', category: 'business' },
  { id: 'asq-243', question: 'What do we call a company owned by shareholders?', answer: 'A corporation or public company', category: 'business' },
  { id: 'asq-244', question: 'What is the term for the money a business spends to operate?', answer: 'Expenses or overheads', category: 'business' },
  { id: 'asq-245', question: 'What do we call a document showing a company\'s income and expenses?', answer: 'A financial statement or income statement', category: 'business' },
  { id: 'asq-246', question: 'What is the practice of promoting products and services to customers called?', answer: 'Marketing', category: 'business' },
  { id: 'asq-247', question: 'What do we call the exclusive right to produce and sell an invention?', answer: 'A patent', category: 'business' },
  { id: 'asq-248', question: 'What does ROI stand for in business?', answer: 'Return on Investment', category: 'business' },
  { id: 'asq-249', question: 'What do we call it when two companies combine to form one?', answer: 'A merger', category: 'business' },
  { id: 'asq-250', question: 'What is the opposite of a surplus in economics?', answer: 'A deficit', category: 'business' },
  // SCIENCE — additional (30)
  { id: 'asq-251', question: 'What is the powerhouse of the cell?', answer: 'Mitochondria', category: 'science' },
  { id: 'asq-252', question: 'What type of rock is formed from cooled lava or magma?', answer: 'Igneous', category: 'science' },
  { id: 'asq-253', question: 'What do we call animals that eat both plants and meat?', answer: 'Omnivores', category: 'science' },
  { id: 'asq-254', question: 'What is the study of fossils called?', answer: 'Palaeontology', category: 'science' },
  { id: 'asq-255', question: 'What element does the symbol Fe represent?', answer: 'Iron', category: 'science' },
  { id: 'asq-256', question: 'What type of energy is stored in a battery?', answer: 'Chemical energy', category: 'science' },
  { id: 'asq-257', question: 'What is the name of the layer of gas that surrounds the Earth?', answer: 'The atmosphere', category: 'science' },
  { id: 'asq-258', question: 'What instrument is used to measure atmospheric pressure?', answer: 'A barometer', category: 'science' },
  { id: 'asq-259', question: 'What is the boiling point of water in degrees Celsius?', answer: 'One hundred', category: 'science' },
  { id: 'asq-260', question: 'What do we call the change of state from solid to liquid?', answer: 'Melting', category: 'science' },
  { id: 'asq-261', question: 'What is the largest organ of the human body?', answer: 'The skin', category: 'science' },
  { id: 'asq-262', question: 'How many bones are in the adult human body?', answer: 'Two hundred and six', category: 'science' },
  { id: 'asq-263', question: 'What planet has the most moons in our solar system?', answer: 'Saturn', category: 'science' },
  { id: 'asq-264', question: 'What is the chemical symbol for sodium?', answer: 'Na', category: 'science' },
  { id: 'asq-265', question: 'What do we call a scientist who studies weather?', answer: 'A meteorologist', category: 'science' },
  { id: 'asq-266', question: 'What gas makes up the majority of Earth\'s atmosphere?', answer: 'Nitrogen', category: 'science' },
  { id: 'asq-267', question: 'What is the process by which plants make food using sunlight?', answer: 'Photosynthesis', category: 'science' },
  { id: 'asq-268', question: 'What is the smallest unit of matter?', answer: 'An atom', category: 'science' },
  { id: 'asq-269', question: 'What type of blood vessel carries blood away from the heart?', answer: 'An artery', category: 'science' },
  { id: 'asq-270', question: 'What do we call the study of the mind and behaviour?', answer: 'Psychology', category: 'science' },
  // GEOGRAPHY — additional (20)
  { id: 'asq-271', question: 'What is the capital city of Canada?', answer: 'Ottawa', category: 'geography' },
  { id: 'asq-272', question: 'Which continent has the most countries?', answer: 'Africa', category: 'geography' },
  { id: 'asq-273', question: 'What is the driest continent on Earth?', answer: 'Antarctica', category: 'geography' },
  { id: 'asq-274', question: 'What is the largest desert in the world?', answer: 'The Sahara', category: 'geography' },
  { id: 'asq-275', question: 'In which country is the Great Barrier Reef located?', answer: 'Australia', category: 'geography' },
  { id: 'asq-276', question: 'What ocean lies between Africa and Australia?', answer: 'The Indian Ocean', category: 'geography' },
  { id: 'asq-277', question: 'What is the capital of South Korea?', answer: 'Seoul', category: 'geography' },
  { id: 'asq-278', question: 'Which river flows through London?', answer: 'The Thames', category: 'geography' },
  { id: 'asq-279', question: 'What is the smallest country in the world by area?', answer: 'Vatican City', category: 'geography' },
  { id: 'asq-280', question: 'On which continent is the Amazon Rainforest?', answer: 'South America', category: 'geography' },
  { id: 'asq-281', question: 'What is the capital of New Zealand?', answer: 'Wellington', category: 'geography' },
  { id: 'asq-282', question: 'Which mountain range separates Europe from Asia?', answer: 'The Ural Mountains', category: 'geography' },
  { id: 'asq-283', question: 'What is the most populous country in Africa?', answer: 'Nigeria', category: 'geography' },
  { id: 'asq-284', question: 'Which strait separates Asia from North America?', answer: 'The Bering Strait', category: 'geography' },
  { id: 'asq-285', question: 'What is the capital of Brazil?', answer: 'Brasilia', category: 'geography' },
  { id: 'asq-286', question: 'What is the largest lake in Africa?', answer: 'Lake Victoria', category: 'geography' },
  { id: 'asq-287', question: 'Which country has the longest coastline in the world?', answer: 'Canada', category: 'geography' },
  { id: 'asq-288', question: 'What is the capital of Turkey?', answer: 'Ankara', category: 'geography' },
  { id: 'asq-289', question: 'Which ocean is the deepest?', answer: 'The Pacific Ocean', category: 'geography' },
  { id: 'asq-290', question: 'What is the capital city of Switzerland?', answer: 'Bern', category: 'geography' },
  // ACADEMIC — additional (20)
  { id: 'asq-291', question: 'What is the list of books and sources at the end of an academic paper called?', answer: 'A bibliography', category: 'academic' },
  { id: 'asq-292', question: 'What do we call a preliminary version of a piece of writing?', answer: 'A draft', category: 'academic' },
  { id: 'asq-293', question: 'What is a short summary at the beginning of a research paper called?', answer: 'An abstract', category: 'academic' },
  { id: 'asq-294', question: 'What do we call copying someone else\'s work and presenting it as your own?', answer: 'Plagiarism', category: 'academic' },
  { id: 'asq-295', question: 'What is the person who supervises a PhD student called?', answer: 'A supervisor', category: 'academic' },
  { id: 'asq-296', question: 'What do we call the academic qualification above a bachelor\'s degree?', answer: 'A master\'s degree', category: 'academic' },
  { id: 'asq-297', question: 'What is a formal academic discussion between two opposing sides called?', answer: 'A debate', category: 'academic' },
  { id: 'asq-298', question: 'What do we call the main argument or claim in an essay?', answer: 'A thesis', category: 'academic' },
  { id: 'asq-299', question: 'What is a small group discussion led by a tutor at university called?', answer: 'A tutorial', category: 'academic' },
  { id: 'asq-300', question: 'What do we call the notes at the bottom of a page in a book?', answer: 'Footnotes', category: 'academic' },
  { id: 'asq-301', question: 'What is the oral examination for a doctoral degree called?', answer: 'A viva', category: 'academic' },
  { id: 'asq-302', question: 'What do we call a long essay submitted for a university degree?', answer: 'A dissertation', category: 'academic' },
  { id: 'asq-303', question: 'What is the period between academic terms called?', answer: 'A break or recess', category: 'academic' },
  { id: 'asq-304', question: 'What do we call a table showing class times and locations?', answer: 'A timetable', category: 'academic' },
  { id: 'asq-305', question: 'What is the process of enrolling in a university course called?', answer: 'Registration', category: 'academic' },
  { id: 'asq-306', question: 'What do we call a published collection of academic papers on a topic?', answer: 'A journal', category: 'academic' },
  { id: 'asq-307', question: 'What is the highest academic degree a university can award?', answer: 'A doctorate', category: 'academic' },
  { id: 'asq-308', question: 'What do we call a grant given to a student to fund their education?', answer: 'A scholarship', category: 'academic' },
  { id: 'asq-309', question: 'What is the introductory course for new university students called?', answer: 'Orientation', category: 'academic' },
  { id: 'asq-310', question: 'What do we call the formal ceremony at which degrees are awarded?', answer: 'Graduation', category: 'academic' },
  // EVERYDAY — additional (15)
  { id: 'asq-311', question: 'What do we call the meal eaten in the middle of the day?', answer: 'Lunch', category: 'everyday' },
  { id: 'asq-312', question: 'What is the person who delivers letters and packages called?', answer: 'A postman or mail carrier', category: 'everyday' },
  { id: 'asq-313', question: 'What do you call the machine that washes dishes automatically?', answer: 'A dishwasher', category: 'everyday' },
  { id: 'asq-314', question: 'What is the place where aeroplanes take off and land?', answer: 'An airport', category: 'everyday' },
  { id: 'asq-315', question: 'What do we call the written instructions for preparing a meal?', answer: 'A recipe', category: 'everyday' },
  { id: 'asq-316', question: 'What is the person who puts out fires called?', answer: 'A firefighter', category: 'everyday' },
  { id: 'asq-317', question: 'What do we call the glass part of a window?', answer: 'A pane', category: 'everyday' },
  { id: 'asq-318', question: 'What is the day after today called?', answer: 'Tomorrow', category: 'everyday' },
  { id: 'asq-319', question: 'What do we call a person who serves food in a restaurant?', answer: 'A waiter', category: 'everyday' },
  { id: 'asq-320', question: 'What is the machine that keeps food cold at home?', answer: 'A refrigerator', category: 'everyday' },
  { id: 'asq-321', question: 'What do we call a building where people go to watch films?', answer: 'A cinema', category: 'everyday' },
  { id: 'asq-322', question: 'What is the person who treats sick animals called?', answer: 'A veterinarian', category: 'everyday' },
  { id: 'asq-323', question: 'What do we call the piece of furniture used for sleeping?', answer: 'A bed', category: 'everyday' },
  { id: 'asq-324', question: 'What is the room in a house where food is prepared?', answer: 'A kitchen', category: 'everyday' },
  { id: 'asq-325', question: 'What do we call the document needed to travel internationally?', answer: 'A passport', category: 'everyday' },
  // MEASUREMENT — additional (15)
  { id: 'asq-326', question: 'How many millilitres are in a litre?', answer: 'One thousand', category: 'measurement' },
  { id: 'asq-327', question: 'What unit is used to measure the frequency of sound?', answer: 'Hertz', category: 'measurement' },
  { id: 'asq-328', question: 'How many seconds are in an hour?', answer: 'Three thousand six hundred', category: 'measurement' },
  { id: 'asq-329', question: 'What is the metric unit for measuring weight?', answer: 'Kilogram', category: 'measurement' },
  { id: 'asq-330', question: 'How many days are in a leap year?', answer: 'Three hundred and sixty-six', category: 'measurement' },
  { id: 'asq-331', question: 'What unit is used to measure electrical current?', answer: 'Ampere', category: 'measurement' },
  { id: 'asq-332', question: 'How many metres are in a kilometre?', answer: 'One thousand', category: 'measurement' },
  { id: 'asq-333', question: 'What unit is used to measure the intensity of sound?', answer: 'Decibel', category: 'measurement' },
  { id: 'asq-334', question: 'How many weeks are in a year?', answer: 'Fifty-two', category: 'measurement' },
  { id: 'asq-335', question: 'What is the unit of measurement for computer storage capacity?', answer: 'Byte', category: 'measurement' },
  { id: 'asq-336', question: 'How many zeros are in one million?', answer: 'Six', category: 'measurement' },
  { id: 'asq-337', question: 'What unit is used to measure the power of an engine?', answer: 'Horsepower', category: 'measurement' },
  { id: 'asq-338', question: 'How many centimetres are in a metre?', answer: 'One hundred', category: 'measurement' },
  { id: 'asq-339', question: 'What temperature scale is used in the United States?', answer: 'Fahrenheit', category: 'measurement' },
  { id: 'asq-340', question: 'How many grams are in a kilogram?', answer: 'One thousand', category: 'measurement' },
  // TIME & CALENDAR — additional (10)
  { id: 'asq-341', question: 'What is the last month of the year?', answer: 'December', category: 'time' },
  { id: 'asq-342', question: 'How many hours are in a day?', answer: 'Twenty-four', category: 'time' },
  { id: 'asq-343', question: 'What do we call the period of one hundred years?', answer: 'A century', category: 'time' },
  { id: 'asq-344', question: 'What day comes after Thursday?', answer: 'Friday', category: 'time' },
  { id: 'asq-345', question: 'What do we call the period of ten years?', answer: 'A decade', category: 'time' },
  { id: 'asq-346', question: 'What is the seventh month of the year?', answer: 'July', category: 'time' },
  { id: 'asq-347', question: 'How many minutes are in half an hour?', answer: 'Thirty', category: 'time' },
  { id: 'asq-348', question: 'What do we call the period of one thousand years?', answer: 'A millennium', category: 'time' },
  { id: 'asq-349', question: 'What season comes after winter in the southern hemisphere?', answer: 'Spring', category: 'time' },
  { id: 'asq-350', question: 'How many months have thirty-one days?', answer: 'Seven', category: 'time' },
  // HEALTH — additional (15)
  { id: 'asq-351', question: 'What is the medical term for high blood pressure?', answer: 'Hypertension', category: 'health' },
  { id: 'asq-352', question: 'What organ pumps blood through the body?', answer: 'The heart', category: 'health' },
  { id: 'asq-353', question: 'What do we call a doctor who specialises in children\'s health?', answer: 'A paediatrician', category: 'health' },
  { id: 'asq-354', question: 'What vitamin is produced when skin is exposed to sunlight?', answer: 'Vitamin D', category: 'health' },
  { id: 'asq-355', question: 'What do we call the inability to sleep?', answer: 'Insomnia', category: 'health' },
  { id: 'asq-356', question: 'What is the medical term for sugar in the blood?', answer: 'Blood glucose', category: 'health' },
  { id: 'asq-357', question: 'What do we call a healthcare professional who dispenses medication?', answer: 'A pharmacist', category: 'health' },
  { id: 'asq-358', question: 'What is the recommended number of hours of sleep for adults?', answer: 'Seven to nine', category: 'health' },
  { id: 'asq-359', question: 'What do we call the test that uses X-rays to check for broken bones?', answer: 'An X-ray', category: 'health' },
  { id: 'asq-360', question: 'What is the disease caused by a deficiency of insulin?', answer: 'Diabetes', category: 'health' },
  { id: 'asq-361', question: 'What do we call the study of disease outbreaks in populations?', answer: 'Epidemiology', category: 'health' },
  { id: 'asq-362', question: 'What type of doctor performs operations?', answer: 'A surgeon', category: 'health' },
  { id: 'asq-363', question: 'What organ is responsible for filtering blood and producing urine?', answer: 'The kidney', category: 'health' },
  { id: 'asq-364', question: 'What is the most common blood type?', answer: 'O positive', category: 'health' },
  { id: 'asq-365', question: 'What do we call the medical procedure that uses a needle to deliver medicine?', answer: 'An injection', category: 'health' },
  // TECHNOLOGY — additional (15)
  { id: 'asq-366', question: 'What does AI stand for?', answer: 'Artificial intelligence', category: 'technology' },
  { id: 'asq-367', question: 'What do we call the unique address of a website?', answer: 'A URL', category: 'technology' },
  { id: 'asq-368', question: 'What technology allows devices to connect to the internet without cables?', answer: 'Wi-Fi', category: 'technology' },
  { id: 'asq-369', question: 'What do we call malicious software designed to harm computers?', answer: 'Malware', category: 'technology' },
  { id: 'asq-370', question: 'What does GPS stand for?', answer: 'Global Positioning System', category: 'technology' },
  { id: 'asq-371', question: 'What is the name for a self-contained application on a phone?', answer: 'An app', category: 'technology' },
  { id: 'asq-372', question: 'What do we call the practice of storing data on remote servers accessed via the internet?', answer: 'Cloud computing', category: 'technology' },
  { id: 'asq-373', question: 'What does USB stand for?', answer: 'Universal Serial Bus', category: 'technology' },
  { id: 'asq-374', question: 'What is the small, portable device used to store digital files called?', answer: 'A USB drive', category: 'technology' },
  { id: 'asq-375', question: 'What do we call a digital image of a printed document?', answer: 'A scan', category: 'technology' },
  { id: 'asq-376', question: 'What is the technology behind Bitcoin and other cryptocurrencies?', answer: 'Blockchain', category: 'technology' },
  { id: 'asq-377', question: 'What does PDF stand for?', answer: 'Portable Document Format', category: 'technology' },
  { id: 'asq-378', question: 'What do we call a virtual meeting held over the internet?', answer: 'A video conference', category: 'technology' },
  { id: 'asq-379', question: 'What is the process of converting data into a secret code for security?', answer: 'Encryption', category: 'technology' },
  { id: 'asq-380', question: 'What does HTML stand for?', answer: 'Hypertext Markup Language', category: 'technology' },
  // EDUCATION — additional (10)
  { id: 'asq-381', question: 'What do we call a student who has completed their first degree and is studying further?', answer: 'A postgraduate', category: 'education' },
  { id: 'asq-382', question: 'What is the educational approach where students learn at their own pace called?', answer: 'Self-paced learning', category: 'education' },
  { id: 'asq-383', question: 'What do we call the subjects a student must complete to earn their degree?', answer: 'The curriculum', category: 'education' },
  { id: 'asq-384', question: 'What is the study of teaching methods called?', answer: 'Pedagogy', category: 'education' },
  { id: 'asq-385', question: 'What do we call a class conducted online in real time?', answer: 'A webinar or live class', category: 'education' },
  { id: 'asq-386', question: 'What is the term for learning that takes place outside the classroom?', answer: 'Extracurricular', category: 'education' },
  { id: 'asq-387', question: 'What do we call the official record of a student\'s academic performance?', answer: 'A transcript', category: 'education' },
  { id: 'asq-388', question: 'What is a school for children aged three to five called?', answer: 'A kindergarten', category: 'education' },
  { id: 'asq-389', question: 'What do we call an exam taken at the end of a semester?', answer: 'A final exam', category: 'education' },
  { id: 'asq-390', question: 'What is the term for education delivered through television, radio, or the internet?', answer: 'Distance learning', category: 'education' },
  // ARTS & CULTURE — additional (10)
  { id: 'asq-391', question: 'What do we call a person who writes novels?', answer: 'A novelist', category: 'arts' },
  { id: 'asq-392', question: 'What is a building where art is displayed for the public called?', answer: 'A gallery', category: 'arts' },
  { id: 'asq-393', question: 'What do we call a musical composition for a full orchestra?', answer: 'A symphony', category: 'arts' },
  { id: 'asq-394', question: 'What is the art of making pots and dishes from clay?', answer: 'Pottery or ceramics', category: 'arts' },
  { id: 'asq-395', question: 'What do we call a play set to music in which most dialogue is sung?', answer: 'An opera', category: 'arts' },
  { id: 'asq-396', question: 'What is the term for a painting of a person\'s face?', answer: 'A portrait', category: 'arts' },
  { id: 'asq-397', question: 'What do we call the written text of a film?', answer: 'A screenplay', category: 'arts' },
  { id: 'asq-398', question: 'What is the art of beautiful handwriting called?', answer: 'Calligraphy', category: 'arts' },
  { id: 'asq-399', question: 'What do we call a collection of poems published together?', answer: 'An anthology', category: 'arts' },
  { id: 'asq-400', question: 'What is the Italian term for singing without instrumental accompaniment?', answer: 'A cappella', category: 'arts' },
  // BUSINESS — additional (10)
  { id: 'asq-401', question: 'What do we call the total value of goods and services produced by a country?', answer: 'GDP', category: 'business' },
  { id: 'asq-402', question: 'What is the term for a general increase in prices over time?', answer: 'Inflation', category: 'business' },
  { id: 'asq-403', question: 'What do we call a person who starts a new business?', answer: 'An entrepreneur', category: 'business' },
  { id: 'asq-404', question: 'What is the financial statement that shows a company\'s revenues and expenses?', answer: 'An income statement', category: 'business' },
  { id: 'asq-405', question: 'What do we call the money a company receives from selling its products?', answer: 'Revenue', category: 'business' },
  { id: 'asq-406', question: 'What is the term for spreading investments across different assets to reduce risk?', answer: 'Diversification', category: 'business' },
  { id: 'asq-407', question: 'What do we call the difference between a company\'s revenue and its costs?', answer: 'Profit', category: 'business' },
  { id: 'asq-408', question: 'What is the market where previously issued shares are bought and sold?', answer: 'The stock exchange', category: 'business' },
  { id: 'asq-409', question: 'What does CEO stand for?', answer: 'Chief Executive Officer', category: 'business' },
  { id: 'asq-410', question: 'What is the term for money owed by a company or individual?', answer: 'Debt', category: 'business' }
];

// -----------------------------------------------------------------------------
// 6. FOURTEEN DAY PLAN
// -----------------------------------------------------------------------------
const FOURTEEN_DAY_PLAN = [
  {
    day: 1,
    focus: 'Foundation — Fluency Assessment & Read Aloud Basics',
    tasks: [
      { type: 'Read Aloud', count: 10, timeMin: 30 },
      { type: 'Repeat Sentence', count: 15, timeMin: 20 },
      { type: 'Answer Short Question', count: 30, timeMin: 15 },
      { type: 'Review Speaking Tips', count: 1, timeMin: 15 }
    ],
    tips: [
      'Record yourself reading aloud and listen back — identify rushed words and flat intonation.',
      'Focus on natural pacing: pause at commas and full stops.',
      'Mark stress words before reading — emphasise content words, not function words.',
      'Speak at 75% of your natural speed today to build clarity habits.'
    ],
    targetMinutes: 80
  },
  {
    day: 2,
    focus: 'Foundation — Repeat Sentence Intensive & Pronunciation',
    tasks: [
      { type: 'Repeat Sentence', count: 25, timeMin: 35 },
      { type: 'Read Aloud', count: 8, timeMin: 25 },
      { type: 'Answer Short Question', count: 30, timeMin: 15 },
      { type: 'Pronunciation Drill', count: 1, timeMin: 15 }
    ],
    tips: [
      'For Repeat Sentence: focus on catching the beginning and end of each sentence.',
      'Use chunking — break long sentences into 3-4 word phrases in your mind.',
      'Practise shadow reading: read along with audio at the same time to build rhythm.',
      'Work on commonly mispronounced sounds: /th/, /r/, /l/, /v/, /w/.'
    ],
    targetMinutes: 90
  },
  {
    day: 3,
    focus: 'Foundation — Read Aloud Mastery & Intonation',
    tasks: [
      { type: 'Read Aloud', count: 12, timeMin: 35 },
      { type: 'Repeat Sentence', count: 20, timeMin: 30 },
      { type: 'Answer Short Question', count: 25, timeMin: 10 },
      { type: 'Intonation Practice', count: 1, timeMin: 15 }
    ],
    tips: [
      'Practise rising intonation for lists and falling intonation for statements.',
      'Use the "newsreader technique" — read texts as if presenting news on television.',
      'Time yourself: aim for a natural pace of 130-150 words per minute.',
      'Record and compare with native speaker examples to identify intonation gaps.'
    ],
    targetMinutes: 90
  },
  {
    day: 4,
    focus: 'Foundation — Describe Image Introduction & Structure',
    tasks: [
      { type: 'Describe Image', count: 8, timeMin: 35 },
      { type: 'Read Aloud', count: 6, timeMin: 20 },
      { type: 'Repeat Sentence', count: 15, timeMin: 20 },
      { type: 'Answer Short Question', count: 20, timeMin: 10 }
    ],
    tips: [
      'Learn the Describe Image template: introduction, main trend, key details, conclusion.',
      'Always start with: "This [chart type] shows/illustrates/compares..."',
      'Mention specific numbers and data points to score higher on content.',
      'Practise using comparison language: "whereas", "in contrast", "similarly".'
    ],
    targetMinutes: 85
  },
  {
    day: 5,
    focus: 'Task Mastery — Describe Image All Types',
    tasks: [
      { type: 'Describe Image', count: 12, timeMin: 45 },
      { type: 'Retell Lecture', count: 5, timeMin: 25 },
      { type: 'Repeat Sentence', count: 10, timeMin: 15 },
      { type: 'Answer Short Question', count: 20, timeMin: 10 }
    ],
    tips: [
      'Practise all image types: bar, line, pie, table, map, process, and photograph.',
      'For process diagrams: use sequential language — "first", "next", "then", "finally".',
      'For maps: describe location using compass directions and spatial relationships.',
      'Keep talking for the full 40 seconds — silence at the end costs marks.'
    ],
    targetMinutes: 95
  },
  {
    day: 6,
    focus: 'Task Mastery — Retell Lecture Focus',
    tasks: [
      { type: 'Retell Lecture', count: 10, timeMin: 45 },
      { type: 'Describe Image', count: 6, timeMin: 25 },
      { type: 'Read Aloud', count: 5, timeMin: 15 },
      { type: 'Answer Short Question', count: 20, timeMin: 10 }
    ],
    tips: [
      'Take notes during the lecture using abbreviations and symbols.',
      'Capture the main topic in the first 10 seconds of your retelling.',
      'Use your notes as triggers, not scripts — maintain natural delivery.',
      'Structure: "The lecture was about... The speaker mentioned... Additionally... In conclusion..."'
    ],
    targetMinutes: 95
  },
  {
    day: 7,
    focus: 'Task Mastery — Note-Taking & Retell Lecture Advanced',
    tasks: [
      { type: 'Retell Lecture', count: 8, timeMin: 40 },
      { type: 'Describe Image', count: 8, timeMin: 30 },
      { type: 'Repeat Sentence', count: 15, timeMin: 20 },
      { type: 'Answer Short Question', count: 20, timeMin: 10 }
    ],
    tips: [
      'Develop a personal shorthand system for faster note-taking.',
      'Focus on capturing keywords, numbers, names, and relationships.',
      'Practise retelling without looking at your notes after the first sentence.',
      'Time pressure: start speaking immediately when the microphone opens.'
    ],
    targetMinutes: 100
  },
  {
    day: 8,
    focus: 'Task Mastery — Speed & Timing Drills',
    tasks: [
      { type: 'Read Aloud', count: 10, timeMin: 25 },
      { type: 'Describe Image', count: 10, timeMin: 35 },
      { type: 'Retell Lecture', count: 5, timeMin: 25 },
      { type: 'Answer Short Question', count: 30, timeMin: 15 }
    ],
    tips: [
      'Simulate exam timing: 30-35 seconds prep for Read Aloud, 25 seconds for DI prep.',
      'Practise transitioning between question types without losing focus.',
      'For ASQ: respond instantly — hesitation costs marks even if the answer is correct.',
      'Record a full mock speaking section and review for timing issues.'
    ],
    targetMinutes: 100
  },
  {
    day: 9,
    focus: 'Task Mastery — Weak Area Intensive',
    tasks: [
      { type: 'Weakest Task Type', count: 15, timeMin: 45 },
      { type: 'Second Weakest Task', count: 10, timeMin: 30 },
      { type: 'Answer Short Question', count: 25, timeMin: 10 },
      { type: 'Full Mock Section', count: 1, timeMin: 15 }
    ],
    tips: [
      'Identify your two weakest speaking tasks and dedicate extra time to them.',
      'If Repeat Sentence is weak: practise memory chunking with 4-word groups.',
      'If Describe Image is weak: memorise 5 template sentences for each graph type.',
      'Review recordings from previous days to track improvement.'
    ],
    targetMinutes: 100
  },
  {
    day: 10,
    focus: 'Integration — Full Mock Speaking Test 1',
    tasks: [
      { type: 'Full Mock Speaking Section', count: 1, timeMin: 50 },
      { type: 'Review & Self-Assessment', count: 1, timeMin: 20 },
      { type: 'Targeted Practice on Errors', count: 1, timeMin: 30 }
    ],
    tips: [
      'Complete a full speaking mock under timed exam conditions.',
      'Score yourself honestly: content, fluency, pronunciation on a 1-5 scale.',
      'Note any recurring errors in pronunciation or grammar.',
      'Focus the rest of the session on fixing the specific mistakes you identified.'
    ],
    targetMinutes: 100
  },
  {
    day: 11,
    focus: 'Integration — Full Mock Speaking Test 2 & Advanced Strategies',
    tasks: [
      { type: 'Full Mock Speaking Section', count: 1, timeMin: 50 },
      { type: 'Describe Image Speed Drill', count: 8, timeMin: 25 },
      { type: 'Repeat Sentence', count: 15, timeMin: 20 }
    ],
    tips: [
      'Aim for improvement over yesterday\'s mock — compare your recordings.',
      'Focus on smooth transitions: avoid "uh", "um", and long pauses.',
      'Practise controlled breathing before each response to stay calm.',
      'For 88+ score: every word must be clearly articulated with natural rhythm.'
    ],
    targetMinutes: 95
  },
  {
    day: 12,
    focus: 'Integration — Final Intensive & Error Elimination',
    tasks: [
      { type: 'Read Aloud', count: 8, timeMin: 20 },
      { type: 'Repeat Sentence', count: 20, timeMin: 25 },
      { type: 'Describe Image', count: 8, timeMin: 25 },
      { type: 'Retell Lecture', count: 5, timeMin: 20 },
      { type: 'Answer Short Question', count: 30, timeMin: 10 }
    ],
    tips: [
      'This is your last intensive practice day — give maximum effort.',
      'Focus on eliminating any remaining pronunciation errors.',
      'Practise all five task types to maintain balance.',
      'Record everything and do a final review of areas still needing work.'
    ],
    targetMinutes: 100
  },
  {
    day: 13,
    focus: 'Polish — Light Review & Confidence Building',
    tasks: [
      { type: 'Read Aloud', count: 5, timeMin: 15 },
      { type: 'Repeat Sentence', count: 10, timeMin: 15 },
      { type: 'Describe Image', count: 5, timeMin: 15 },
      { type: 'Answer Short Question', count: 20, timeMin: 10 },
      { type: 'Review Best Recordings', count: 1, timeMin: 15 }
    ],
    tips: [
      'Reduce intensity today — the goal is confidence, not exhaustion.',
      'Listen to your best recordings from the past 12 days to build self-assurance.',
      'Review the speaking tips one final time.',
      'Visualise yourself performing well in the exam — mental rehearsal works.'
    ],
    targetMinutes: 70
  },
  {
    day: 14,
    focus: 'Polish — Exam Eve Preparation',
    tasks: [
      { type: 'Light Read Aloud Warm-Up', count: 3, timeMin: 10 },
      { type: 'Quick Repeat Sentence', count: 5, timeMin: 10 },
      { type: 'ASQ Quick Review', count: 20, timeMin: 10 },
      { type: 'Relaxation & Confidence', count: 1, timeMin: 15 }
    ],
    tips: [
      'Keep practice very light today — do not exhaust your voice.',
      'Go to bed early and ensure 7-8 hours of quality sleep.',
      'Prepare everything for exam day: ID, directions, water bottle.',
      'Trust your preparation — you have practised hundreds of questions over 14 days.',
      'On exam day: speak clearly, stay calm, and maintain natural pacing throughout.'
    ],
    targetMinutes: 45
  }
];

// -----------------------------------------------------------------------------
// 7. SPEAKING TIPS
// -----------------------------------------------------------------------------
const SPEAKING_TIPS = {
  general: [
    'Speak at a natural, moderate pace — not too fast, not too slow. Aim for 130-150 words per minute.',
    'Maintain consistent volume throughout your response. Trailing off at the end of sentences costs marks.',
    'Avoid filler words like "um", "uh", "you know", and "like". Brief pauses are perfectly acceptable.',
    'Practise with a microphone and headset similar to what you will use in the test centre.',
    'Record yourself daily and compare with native speaker models to identify gaps.',
    'Focus on the three pillars of PTE Speaking scoring: content, oral fluency, and pronunciation.',
    'Manage your time and energy — speaking is the first section, so arrive well-rested and warmed up.',
    'Warm up your voice before the exam by reading aloud for 5-10 minutes at home.'
  ],
  readAloud: [
    'Use the preparation time (30-40 seconds) to scan for difficult words and plan your stress patterns.',
    'Stress content words (nouns, verbs, adjectives, adverbs) and reduce function words (the, a, of, to).',
    'Pause naturally at commas, full stops, and between clauses — do not read in one continuous stream.',
    'If you mispronounce a word, do not go back to correct it. Continue fluently to the end.',
    'Match your intonation to the meaning: rise slightly for lists, fall at the end of statements.',
    'Practise reading academic texts daily from sources like The Economist, BBC, or academic abstracts.',
    'Group words into meaningful phrases of 3-5 words rather than reading word by word.'
  ],
  repeatSentence: [
    'Listen to the entire sentence before you start speaking — do not begin repeating mid-sentence.',
    'Focus on understanding the meaning, not memorising individual words. Meaning aids memory.',
    'Use chunking: break the sentence into 3-4 word groups in your mind as you listen.',
    'Pay special attention to the first and last few words — these are easiest to lose.',
    'If you cannot remember the exact words, paraphrase with similar vocabulary to still earn content marks.',
    'Practise with progressively longer sentences to build your auditory memory capacity.',
    'Shadow practice: repeat sentences from podcasts and audiobooks to build the habit of quick repetition.'
  ],
  describeImage: [
    'Always begin with an overview sentence: "This [type] shows/illustrates/compares [topic]."',
    'Mention specific data: numbers, percentages, years, and units add to your content score.',
    'Use a consistent structure: overview, main trend, supporting details, brief conclusion.',
    'For bar and line charts: identify the highest, lowest, and any notable changes or trends.',
    'For pie charts: start with the largest segment and mention 2-3 others for comparison.',
    'For process diagrams: use sequential markers — "first", "next", "following this", "finally".',
    'Keep talking for the full 40 seconds. If you finish early, add a summary sentence.',
    'Practise transition phrases: "Moving on to...", "It is also worth noting that...", "In contrast..."'
  ],
  retellLecture: [
    'Take notes using keywords, arrows, and abbreviations — do not write full sentences.',
    'Capture the main topic within the first 5 words of your notes.',
    'Structure your retelling: topic, main point, supporting details, conclusion.',
    'Begin immediately when the microphone opens — "The lecture discussed/explained/focused on..."',
    'Include specific details from your notes: names, numbers, examples mentioned by the speaker.',
    'Aim for 5-6 sentences in your 40-second retelling. Quality over quantity.',
    'Practise note-taking with TED Talks and university lecture recordings available on YouTube.'
  ],
  answerShortQuestion: [
    'Respond immediately with the answer — do not repeat the question or add unnecessary words.',
    'If you are unsure, give your best answer quickly. Silence scores zero; a guess might score.',
    'Speak clearly and at a normal volume. Short answers still need good pronunciation.',
    'Familiarise yourself with common ASQ categories: science, geography, academic terms, measurements.',
    'Many questions test everyday vocabulary that educated English speakers would know.',
    'If a question has multiple acceptable answers, give the most common or standard one.',
    'Review measurement units, country capitals, academic terminology, and common abbreviations regularly.'
  ]
};
