// =============================================================================
// PTE Academic Writing Trainer — Complete Practice Data
// Target: Maintain Writing 90 while focusing on Speaking
// =============================================================================

// -----------------------------------------------------------------------------
// 1. SUMMARIZE WRITTEN TEXT PASSAGES (40 items)
// -----------------------------------------------------------------------------
const SWT_PASSAGES = [
  {
    id: 'swt-001',
    title: 'The Impact of Social Media on Democracy',
    text: 'Social media platforms have fundamentally altered the landscape of democratic engagement. While these technologies initially promised to democratise information access and facilitate civic participation, recent developments have raised serious concerns about their impact on democratic processes. The rapid spread of misinformation through algorithmic amplification has undermined informed public discourse, with studies showing that false news stories spread six times faster than accurate ones on major platforms. Political polarisation has intensified as filter bubbles reinforce existing beliefs and limit exposure to diverse perspectives. Furthermore, foreign interference campaigns have exploited social media vulnerabilities to manipulate elections in several countries. Despite these challenges, social media continues to serve as a powerful tool for grassroots political organising, enabling marginalised communities to amplify their voices and hold governments accountable. Scholars argue that the solution lies not in restricting these platforms but in developing robust digital literacy programmes, implementing transparent content moderation policies, and establishing regulatory frameworks that balance free expression with the protection of democratic institutions.',
    keyPoints: ['misinformation spreads faster than accurate news', 'algorithmic amplification undermines discourse', 'political polarisation through filter bubbles', 'foreign interference in elections', 'grassroots organising benefits', 'need for regulation and digital literacy'],
    sampleSummary: 'Although social media has democratised information access and enabled grassroots political organising, it has also undermined democratic processes through the rapid spread of misinformation, algorithmic polarisation, and foreign election interference, necessitating digital literacy programmes and regulatory frameworks to protect democratic institutions.',
    topic: 'technology',
    difficulty: 'medium'
  },
  {
    id: 'swt-002',
    title: 'Antibiotic Resistance: A Global Health Crisis',
    text: 'The World Health Organisation has identified antimicrobial resistance as one of the top ten global public health threats facing humanity. The overuse and misuse of antibiotics in both human medicine and agricultural practices have accelerated the evolution of resistant bacterial strains, rendering many commonly used treatments ineffective. Each year, approximately 1.27 million deaths worldwide are directly attributable to antibiotic-resistant infections, with projections suggesting this figure could rise to ten million annually by 2050 if current trends continue. The pharmaceutical industry has largely retreated from antibiotic development due to insufficient financial incentives, creating a critical gap in the therapeutic pipeline. Low- and middle-income countries are disproportionately affected, as limited access to diagnostic tools leads to inappropriate antibiotic prescribing. International efforts to address this crisis include the development of stewardship programmes that promote responsible antibiotic use, investment in rapid diagnostic technologies, and exploration of alternative therapeutic approaches such as bacteriophage therapy and antimicrobial peptides. Coordinated global action involving governments, healthcare providers, the agricultural sector, and pharmaceutical companies is essential to preserve the efficacy of existing antibiotics and develop new treatment options.',
    keyPoints: ['WHO identifies antimicrobial resistance as top health threat', 'overuse in medicine and agriculture accelerates resistance', '1.27 million annual deaths from resistant infections', 'pharmaceutical industry retreat from development', 'disproportionate impact on developing countries', 'stewardship programmes and alternative therapies needed'],
    sampleSummary: 'Antimicrobial resistance, driven by the overuse of antibiotics in human medicine and agriculture, currently causes 1.27 million deaths annually and could reach ten million by 2050, requiring coordinated global action including stewardship programmes, investment in diagnostics, and alternative therapeutic approaches to address the pharmaceutical industry\'s retreat from antibiotic development.',
    topic: 'health',
    difficulty: 'hard'
  },
  {
    id: 'swt-003',
    title: 'The Economics of Renewable Energy Transition',
    text: 'The global transition from fossil fuels to renewable energy sources has reached an economic tipping point that is reshaping energy markets worldwide. Solar photovoltaic costs have declined by approximately 90 percent over the past decade, making solar energy cheaper than coal in most regions. Wind energy has experienced similar cost reductions, with offshore wind farms becoming increasingly competitive. This economic transformation has attracted unprecedented levels of private investment, with global renewable energy investment exceeding 500 billion dollars annually. However, the transition presents significant challenges, including the intermittency of solar and wind power, which requires substantial investment in energy storage technologies and grid modernisation. Communities dependent on fossil fuel industries face economic disruption and require targeted support programmes to facilitate workforce transition. Additionally, the mining of critical minerals needed for batteries and solar panels raises environmental and ethical concerns, particularly in developing nations. Despite these obstacles, most economic analyses conclude that the long-term benefits of renewable energy adoption, including reduced healthcare costs from air pollution and avoided climate change damages, far outweigh the short-term transition costs.',
    keyPoints: ['solar costs declined 90% in a decade', 'renewable energy cheaper than coal in most regions', 'over $500 billion annual investment', 'intermittency challenges require storage solutions', 'fossil fuel communities need transition support', 'long-term benefits outweigh transition costs'],
    sampleSummary: 'The renewable energy transition has reached an economic tipping point, with solar costs declining 90 percent and investment exceeding 500 billion dollars annually; however, challenges including power intermittency, workforce displacement in fossil fuel communities, and critical mineral mining concerns must be addressed, though long-term benefits ultimately outweigh transition costs.',
    topic: 'economics',
    difficulty: 'medium'
  },
  {
    id: 'swt-004',
    title: 'Neuroplasticity and Lifelong Learning',
    text: 'Contemporary neuroscience has overturned the long-held belief that the adult brain is a fixed and immutable organ. Research into neuroplasticity has demonstrated that the brain retains a remarkable capacity to reorganise its neural pathways, form new synaptic connections, and even generate new neurons throughout the lifespan. This discovery has profound implications for education, rehabilitation, and cognitive health. Studies have shown that engaging in intellectually stimulating activities, learning new skills, and maintaining social connections can strengthen neural networks and potentially delay the onset of neurodegenerative diseases such as Alzheimer\'s. Physical exercise has been found to promote neurogenesis in the hippocampus, the brain region crucial for memory formation. The concept of neuroplasticity has also transformed approaches to rehabilitation following brain injuries, with intensive, targeted therapies enabling patients to recover functions previously considered permanently lost. Educational institutions are increasingly incorporating insights from neuroplasticity research into pedagogical practices, emphasising growth mindset approaches and spaced repetition techniques that leverage the brain\'s natural learning mechanisms.',
    keyPoints: ['adult brain can reorganise neural pathways', 'new neurons can be generated throughout life', 'intellectual stimulation delays neurodegenerative diseases', 'exercise promotes neurogenesis in hippocampus', 'transformed rehabilitation approaches', 'educational implications including growth mindset'],
    sampleSummary: 'Research into neuroplasticity has revealed that the adult brain can reorganise neural pathways and generate new neurons throughout life, which has transformed approaches to education through growth mindset pedagogy, improved rehabilitation outcomes for brain injury patients, and demonstrated that intellectual stimulation and physical exercise can delay neurodegenerative diseases.',
    topic: 'science',
    difficulty: 'medium'
  },
  {
    id: 'swt-005',
    title: 'Urban Heat Islands and City Planning',
    text: 'As global temperatures rise, urban heat islands have emerged as a critical challenge for city planners and public health officials. Urban areas typically experience temperatures two to five degrees Celsius higher than surrounding rural regions due to the concentration of heat-absorbing materials such as concrete and asphalt, reduced vegetation cover, and waste heat generated by buildings and vehicles. This temperature differential has significant health consequences, with heat-related mortality in cities increasing by 68 percent between 2000 and 2018. Vulnerable populations, including the elderly, outdoor workers, and low-income communities with limited access to air conditioning, bear a disproportionate burden. Progressive cities are implementing evidence-based strategies to mitigate urban heat, including expanding urban tree canopy coverage, installing cool roofs with reflective materials, creating green corridors that facilitate air circulation, and increasing permeable surfaces to enhance evaporative cooling. Singapore and Melbourne have emerged as global leaders in urban heat mitigation, with comprehensive policies that integrate green infrastructure into building codes and urban development standards. Research indicates that a ten percent increase in urban tree cover can reduce ambient temperatures by up to 1.5 degrees Celsius.',
    keyPoints: ['cities 2-5°C warmer than rural areas', 'heat-absorbing materials and reduced vegetation cause effect', 'heat-related mortality increased 68%', 'vulnerable populations disproportionately affected', 'mitigation strategies include tree cover and cool roofs', '10% tree cover increase reduces temperature by 1.5°C'],
    sampleSummary: 'Urban heat islands, which cause cities to be two to five degrees warmer than rural areas and have increased heat-related mortality by 68 percent, disproportionately affect vulnerable populations, prompting cities like Singapore and Melbourne to implement mitigation strategies such as expanding tree canopy coverage, which can reduce temperatures by up to 1.5 degrees Celsius.',
    topic: 'environment',
    difficulty: 'hard'
  },
  {
    id: 'swt-006',
    title: 'The Gig Economy and Labour Rights',
    text: 'The rapid expansion of the gig economy has fundamentally challenged traditional employment models and labour protections established during the industrial era. Platform-based companies such as ride-sharing services and food delivery applications classify workers as independent contractors rather than employees, effectively denying them access to benefits including minimum wage guarantees, paid leave, health insurance, and superannuation contributions. Globally, an estimated 150 million workers now participate in platform-based gig work, with this figure growing rapidly in both developed and developing economies. Proponents argue that gig work offers valuable flexibility and autonomy, particularly for individuals seeking supplementary income or those unable to commit to traditional employment schedules. However, research consistently demonstrates that most gig workers earn below minimum wage when expenses and unpaid waiting time are factored in, and they face heightened economic insecurity. Several jurisdictions have begun legislating protections for gig workers, with the European Union proposing a directive that would reclassify many platform workers as employees, while California\'s Assembly Bill 5 attempted similar reforms before being partially reversed through industry-sponsored ballot initiatives.',
    keyPoints: ['gig economy challenges traditional labour protections', 'workers classified as contractors deny benefits', '150 million workers globally in gig economy', 'flexibility arguments versus economic insecurity reality', 'most gig workers earn below minimum wage', 'legislative efforts in EU and California'],
    sampleSummary: 'The gig economy, which now involves approximately 150 million workers globally who are classified as independent contractors without access to traditional employment benefits, has prompted legislative responses from jurisdictions including the European Union, as research shows most gig workers earn below minimum wage despite industry claims of flexibility and autonomy.',
    topic: 'economics',
    difficulty: 'medium'
  },
  {
    id: 'swt-007',
    title: 'Artificial Intelligence in Medical Diagnostics',
    text: 'The application of artificial intelligence in medical diagnostics represents one of the most promising developments in contemporary healthcare. Deep learning algorithms trained on millions of medical images have achieved diagnostic accuracy comparable to or exceeding that of experienced specialists in fields including radiology, dermatology, and ophthalmology. A landmark study demonstrated that an AI system could detect breast cancer from mammograms with a 11.5 percent reduction in false negatives compared to human radiologists. In pathology, AI-powered tools can analyse tissue samples and identify cancerous cells with remarkable precision, significantly reducing diagnostic turnaround times. These technologies hold particular promise for underserved regions where specialist physicians are scarce, potentially democratising access to high-quality diagnostic services. However, significant barriers to widespread adoption remain, including concerns about algorithmic bias resulting from training datasets that underrepresent certain demographic groups, the need for regulatory frameworks to evaluate and approve AI diagnostic tools, liability questions when AI-assisted diagnoses prove incorrect, and the substantial infrastructure investments required to implement these systems in resource-limited settings.',
    keyPoints: ['AI matches or exceeds specialist diagnostic accuracy', '11.5% reduction in false negatives for breast cancer', 'AI reduces diagnostic turnaround times', 'promise for underserved regions', 'algorithmic bias from unrepresentative datasets', 'regulatory and liability barriers remain'],
    sampleSummary: 'Artificial intelligence in medical diagnostics has achieved accuracy comparable to experienced specialists, including an 11.5 percent reduction in breast cancer false negatives, and holds promise for underserved regions; however, widespread adoption faces barriers including algorithmic bias, regulatory uncertainty, and infrastructure requirements in resource-limited settings.',
    topic: 'technology',
    difficulty: 'medium'
  },
  {
    id: 'swt-008',
    title: 'Indigenous Knowledge and Environmental Conservation',
    text: 'Growing recognition of the value of indigenous knowledge systems is reshaping approaches to environmental conservation worldwide. Indigenous communities have developed sophisticated ecological management practices over thousands of years, including controlled burning techniques, sustainable harvesting protocols, and biodiversity monitoring systems that are increasingly validated by Western scientific methods. Research demonstrates that indigenous-managed lands contain approximately 80 percent of the world\'s remaining biodiversity, suggesting that traditional stewardship practices are more effective at preserving ecosystems than many conventional conservation approaches. The integration of indigenous knowledge into climate adaptation strategies has proven particularly valuable, as traditional ecological observations often capture long-term environmental patterns that modern monitoring systems miss. However, the incorporation of indigenous knowledge into policy frameworks raises complex questions about intellectual property rights, the appropriate compensation of knowledge holders, and the risk of decontextualising culturally embedded practices. International agreements, including the Convention on Biological Diversity and the Paris Climate Agreement, have begun acknowledging the importance of indigenous contributions, though implementation remains inconsistent across nations.',
    keyPoints: ['indigenous ecological practices validated by science', 'indigenous lands contain 80% of world biodiversity', 'traditional stewardship more effective than conventional conservation', 'valuable for climate adaptation strategies', 'intellectual property and compensation concerns', 'international agreements acknowledge but inconsistently implement'],
    sampleSummary: 'Indigenous knowledge systems, which have managed lands containing approximately 80 percent of global biodiversity through practices increasingly validated by Western science, are being integrated into environmental conservation and climate adaptation strategies, though challenges remain regarding intellectual property rights and inconsistent implementation of international agreements recognising indigenous contributions.',
    topic: 'environment',
    difficulty: 'hard'
  },
  {
    id: 'swt-009',
    title: 'The Psychology of Decision Making Under Uncertainty',
    text: 'Behavioural economics research has revealed systematic cognitive biases that influence human decision-making, particularly under conditions of uncertainty. Daniel Kahneman and Amos Tversky\'s prospect theory demonstrated that individuals evaluate potential losses approximately twice as heavily as equivalent gains, a phenomenon known as loss aversion that significantly impacts financial, medical, and policy decisions. The availability heuristic leads people to overestimate the probability of events that are easily recalled, such as dramatic accidents, while underestimating more common but less memorable risks. Confirmation bias causes individuals to seek information that supports their existing beliefs while disregarding contradictory evidence, a tendency amplified by algorithmic content curation on digital platforms. Anchoring effects show that initial information disproportionately influences subsequent judgements, even when that information is arbitrary or irrelevant. Understanding these biases has practical applications across numerous domains: nudge theory has been employed by governments to improve public policy outcomes, while debiasing techniques are incorporated into medical training to reduce diagnostic errors. Financial regulators increasingly require behavioural disclosures to protect consumers from exploitation of their cognitive limitations.',
    keyPoints: ['loss aversion makes losses feel twice as heavy as gains', 'availability heuristic distorts risk perception', 'confirmation bias reinforced by digital platforms', 'anchoring effects influence judgements', 'nudge theory applied in public policy', 'debiasing techniques used in medical training'],
    sampleSummary: 'Behavioural economics research has identified systematic cognitive biases including loss aversion, availability heuristic, and confirmation bias that distort decision-making under uncertainty, leading to practical applications such as nudge theory in public policy, debiasing techniques in medical training, and behavioural disclosures in financial regulation to protect consumers.',
    topic: 'psychology',
    difficulty: 'hard'
  },
  {
    id: 'swt-010',
    title: 'The Future of Work: Automation and Employment',
    text: 'The accelerating pace of automation and artificial intelligence development is prompting urgent reassessment of the future of employment across all sectors of the economy. Research by the McKinsey Global Institute estimates that between 400 and 800 million workers worldwide could be displaced by automation by 2030, with routine cognitive and physical tasks being most vulnerable to technological substitution. However, historical precedent suggests that technological revolutions ultimately create more jobs than they eliminate, though the transition periods involve significant disruption and inequality. The World Economic Forum projects that 97 million new roles will emerge by 2025, predominantly in areas such as data analysis, artificial intelligence, machine learning, digital marketing, and green energy. The critical challenge lies in equipping workers with the skills required for these new positions, necessitating fundamental reforms to education systems and the development of comprehensive reskilling programmes. Several countries have begun experimenting with universal basic income as a potential safety net during the transition, while others are exploring portable benefits systems that provide social protections independent of traditional employment relationships.',
    keyPoints: ['400-800 million workers could be displaced by 2030', 'routine tasks most vulnerable to automation', 'technology historically creates more jobs than eliminates', '97 million new roles projected by 2025', 'reskilling and education reform essential', 'universal basic income experiments as safety net'],
    sampleSummary: 'While automation could displace 400 to 800 million workers by 2030, the World Economic Forum projects 97 million new roles will emerge, predominantly in technology and green energy sectors, necessitating fundamental education reforms, comprehensive reskilling programmes, and social safety nets such as universal basic income to manage the transition.',
    topic: 'economics',
    difficulty: 'medium'
  },
  {
    id: 'swt-011',
    title: 'Coral Reef Decline and Marine Ecosystems',
    text: 'Coral reefs, often referred to as the rainforests of the sea, support approximately 25 percent of all marine species despite covering less than one percent of the ocean floor. However, these critical ecosystems are experiencing unprecedented decline due to the combined effects of ocean warming, acidification, and human activities. Mass bleaching events, triggered when water temperatures rise just one to two degrees above the seasonal maximum, have become increasingly frequent, with the Great Barrier Reef suffering three major bleaching episodes between 2016 and 2020. Ocean acidification, caused by the absorption of atmospheric carbon dioxide, weakens coral skeletons and inhibits growth. Beyond their ecological significance, coral reefs provide essential services to human communities, including coastal protection from storms, fisheries that sustain over 500 million people, and tourism revenues exceeding 36 billion dollars annually. Conservation strategies range from establishing marine protected areas and reducing local stressors such as pollution and overfishing to more innovative approaches including assisted gene flow, coral gardening, and the development of heat-resistant coral strains through selective breeding programmes.',
    keyPoints: ['reefs support 25% of marine species on 1% of ocean floor', 'warming and acidification drive decline', 'Great Barrier Reef bleached three times 2016-2020', 'sustain 500 million people through fisheries', '$36 billion annual tourism revenue', 'conservation includes gene flow and heat-resistant strains'],
    sampleSummary: 'Coral reefs, which support 25 percent of marine species and sustain over 500 million people through fisheries, are experiencing unprecedented decline from ocean warming and acidification, as evidenced by three major Great Barrier Reef bleaching events between 2016 and 2020, prompting conservation efforts including marine protected areas and the development of heat-resistant coral strains.',
    topic: 'environment',
    difficulty: 'medium'
  },
  {
    id: 'swt-012',
    title: 'The Rise of Telemedicine',
    text: 'The COVID-19 pandemic catalysed a dramatic acceleration in telemedicine adoption that has permanently transformed healthcare delivery models worldwide. Virtual consultations increased by over 3,800 percent in the initial months of the pandemic, with both patients and providers discovering significant advantages in remote care delivery. Telemedicine offers particular benefits for patients in rural and remote areas, those with mobility limitations, and individuals managing chronic conditions requiring frequent monitoring. Studies indicate that telemedicine consultations achieve comparable clinical outcomes to in-person visits for many common conditions, while reducing patient travel time, waiting periods, and exposure to infectious diseases in clinical settings. The technology has also demonstrated potential in addressing healthcare workforce shortages by enabling specialists to serve broader geographical areas. However, the digital divide presents a significant equity concern, as elderly patients, those in low-income households, and residents of areas with inadequate internet infrastructure may face barriers to accessing virtual care. Privacy and data security concerns persist, and many jurisdictions continue to grapple with regulatory frameworks governing cross-border telehealth services, professional licensing requirements, and appropriate reimbursement structures.',
    keyPoints: ['virtual consultations increased 3800% during pandemic', 'benefits for rural and mobility-limited patients', 'comparable clinical outcomes to in-person visits', 'helps address healthcare workforce shortages', 'digital divide creates equity concerns', 'privacy and regulatory challenges remain'],
    sampleSummary: 'The COVID-19 pandemic accelerated telemedicine adoption by over 3,800 percent, revealing comparable clinical outcomes to in-person consultations and benefits for rural patients, though equity concerns related to the digital divide, along with privacy and regulatory challenges, must be addressed to ensure this permanent transformation in healthcare delivery is accessible to all.',
    topic: 'health',
    difficulty: 'medium'
  },
  {
    id: 'swt-013',
    title: 'Space Debris and Orbital Sustainability',
    text: 'The accumulation of space debris in Earth\'s orbit poses an escalating threat to the long-term sustainability of space activities and the satellite infrastructure upon which modern civilisation increasingly depends. Currently, approximately 36,000 objects larger than ten centimetres are tracked in orbit, alongside an estimated 130 million smaller fragments that travel at velocities exceeding 28,000 kilometres per hour, making even millimetre-sized particles capable of damaging spacecraft. The Kessler syndrome, first theorised in 1978, describes a cascading scenario in which collisions between orbiting objects generate increasing amounts of debris, potentially rendering certain orbital altitudes unusable for generations. This concern is heightened by the rapid deployment of mega-constellations of communications satellites, with companies planning to launch tens of thousands of additional satellites in the coming decade. Mitigation strategies include designing satellites for controlled deorbiting at end of life, developing active debris removal technologies such as robotic capture systems and laser-based approaches, and establishing international agreements governing responsible space operations. The United Nations Committee on the Peaceful Uses of Outer Space has issued voluntary guidelines, though legally binding regulations remain absent.',
    keyPoints: ['36,000 tracked objects and 130 million smaller fragments', 'debris travels at 28,000 km/h', 'Kessler syndrome could render orbits unusable', 'mega-constellations exacerbate the problem', 'mitigation includes deorbiting and active removal', 'lack of binding international regulations'],
    sampleSummary: 'The accumulation of approximately 36,000 tracked objects and 130 million smaller fragments in Earth\'s orbit, compounded by mega-constellation deployments, risks triggering the Kessler syndrome that could render orbital altitudes unusable, necessitating controlled deorbiting, active debris removal technologies, and legally binding international regulations beyond current voluntary guidelines.',
    topic: 'science',
    difficulty: 'hard'
  },
  {
    id: 'swt-014',
    title: 'Bilingualism and Cognitive Development',
    text: 'Research in cognitive neuroscience has consistently demonstrated that bilingualism confers significant cognitive advantages beyond mere linguistic competence. Bilingual individuals exhibit enhanced executive function, including superior attentional control, cognitive flexibility, and working memory capacity compared to monolinguals. Neuroimaging studies reveal that managing two language systems simultaneously strengthens the brain\'s executive control network, particularly the prefrontal cortex and anterior cingulate cortex, regions responsible for conflict monitoring and task switching. Remarkably, these cognitive benefits extend across the lifespan, with bilingual children demonstrating earlier development of metalinguistic awareness and bilingual adults showing delayed onset of dementia symptoms by an average of four to five years. However, the so-called bilingual advantage has been subject to scholarly debate, with some researchers failing to replicate certain findings and suggesting that socioeconomic factors may confound results. Despite this controversy, the educational implications are substantial, with evidence supporting early bilingual education programmes that develop both languages simultaneously rather than sequential language learning approaches. Nations with strong bilingual education policies, such as Luxembourg and Singapore, consistently perform well in international educational assessments.',
    keyPoints: ['bilingualism enhances executive function', 'strengthens prefrontal cortex and cognitive control', 'delays dementia onset by 4-5 years', 'children develop earlier metalinguistic awareness', 'some debate about replicability of findings', 'supports early bilingual education programmes'],
    sampleSummary: 'Research demonstrates that bilingualism enhances executive function by strengthening the brain\'s prefrontal cortex and delays dementia onset by four to five years, supporting early bilingual education programmes, although some scholarly debate exists regarding the replicability of findings and the potential confounding influence of socioeconomic factors.',
    topic: 'education',
    difficulty: 'medium'
  },
  {
    id: 'swt-015',
    title: 'Microplastics in the Food Chain',
    text: 'The pervasive contamination of ecosystems with microplastics has emerged as one of the most concerning environmental and public health challenges of the twenty-first century. These synthetic polymer particles, smaller than five millimetres in diameter, originate from the degradation of larger plastic items, synthetic textile fibres released during laundering, and microbeads in personal care products. Research has detected microplastics in virtually every environment examined, from the deepest ocean trenches to Arctic ice cores and atmospheric samples collected at high altitudes. Marine organisms ingest microplastics that accumulate through the food chain via bioaccumulation, ultimately reaching human consumers through seafood, drinking water, and even airborne particles. Studies estimate that humans may ingest approximately five grams of microplastic weekly, roughly equivalent to a credit card. While the full health implications remain under investigation, laboratory studies have demonstrated that microplastics can cause inflammation, oxidative stress, and cellular damage, and may act as vectors for harmful chemical additives and persistent organic pollutants. Regulatory responses have been limited, with only a handful of countries banning microbeads in cosmetics and few addressing the broader sources of microplastic pollution.',
    keyPoints: ['particles smaller than 5mm from plastic degradation', 'found in all environments from ocean trenches to Arctic', 'bioaccumulation through food chain to humans', 'humans ingest approximately 5 grams weekly', 'cause inflammation and oxidative stress', 'limited regulatory response globally'],
    sampleSummary: 'Microplastics, which have been detected in environments ranging from deep ocean trenches to Arctic ice and are consumed by humans at approximately five grams weekly through bioaccumulation in the food chain, pose significant health risks including inflammation and cellular damage, yet regulatory responses addressing their widespread sources remain inadequate globally.',
    topic: 'environment',
    difficulty: 'medium'
  },
  {
    id: 'swt-016',
    title: 'The Digital Divide in Education',
    text: 'The transition to digital learning during the COVID-19 pandemic exposed and exacerbated pre-existing inequalities in educational access, highlighting the critical nature of the digital divide. Approximately 1.3 billion children worldwide lacked internet access at home when schools closed, with the greatest disparities concentrated in sub-Saharan Africa and South Asia. Even in developed nations, significant gaps persisted, with students from low-income households three times less likely to have access to a computer and reliable internet connection compared to their wealthier peers. The consequences extend beyond mere connectivity, encompassing differences in digital literacy skills, parental capacity to support online learning, and the availability of dedicated study spaces. Research indicates that learning losses during the pandemic were three to five times greater for disadvantaged students, potentially widening achievement gaps for a generation. Addressing the digital divide requires multi-faceted interventions, including public investment in broadband infrastructure, device provision programmes, teacher training in digital pedagogy, and the development of offline-capable educational resources. Countries such as Estonia and South Korea, which had invested heavily in educational technology infrastructure prior to the pandemic, experienced significantly less disruption to student learning outcomes.',
    keyPoints: ['1.3 billion children lacked home internet access', 'greatest disparities in sub-Saharan Africa and South Asia', 'low-income students 3x less likely to have computer access', 'learning losses 3-5x greater for disadvantaged students', 'requires broadband infrastructure and device programmes', 'pre-pandemic investment reduced disruption'],
    sampleSummary: 'The COVID-19 pandemic revealed that 1.3 billion children lacked home internet access, causing learning losses three to five times greater for disadvantaged students, which demonstrates the urgent need for public investment in broadband infrastructure, device provision, and digital pedagogy training, as countries with prior technology investments experienced significantly less educational disruption.',
    topic: 'education',
    difficulty: 'medium'
  },
  {
    id: 'swt-017',
    title: 'Gut Microbiome and Mental Health',
    text: 'Emerging research on the gut-brain axis has revealed a surprisingly intimate connection between intestinal microbiota and mental health, challenging the traditional separation of gastroenterology and psychiatry. The human gut harbours approximately 100 trillion microorganisms, collectively producing neurotransmitters including serotonin, dopamine, and gamma-aminobutyric acid that directly influence brain function and emotional regulation. Studies in both animal models and human subjects have demonstrated that alterations in gut microbiome composition are associated with conditions including depression, anxiety, autism spectrum disorder, and schizophrenia. Germ-free mice raised without gut bacteria exhibit heightened stress responses and abnormal social behaviours that can be partially reversed through microbial colonisation. Clinical trials investigating the therapeutic potential of probiotics, termed psychobiotics when targeting mental health outcomes, have shown promising but preliminary results in reducing symptoms of depression and anxiety. Dietary interventions emphasising fibre-rich, fermented, and plant-based foods have been associated with improved microbiome diversity and better mental health outcomes. The Mediterranean diet, in particular, has demonstrated significant protective effects against depression in multiple large-scale epidemiological studies. However, the mechanisms underlying gut-brain communication remain incompletely understood, and the field requires larger, more rigorous clinical trials before microbiome-based therapies can be widely recommended.',
    keyPoints: ['gut contains 100 trillion microorganisms producing neurotransmitters', 'microbiome alterations linked to depression, anxiety, autism', 'germ-free mice show heightened stress responses', 'psychobiotics show preliminary therapeutic promise', 'Mediterranean diet protects against depression', 'mechanisms not fully understood, more trials needed'],
    sampleSummary: 'Research on the gut-brain axis has revealed that the 100 trillion microorganisms in the human gut produce neurotransmitters influencing mental health, with microbiome alterations linked to depression and anxiety, prompting investigation into psychobiotics and dietary interventions such as the Mediterranean diet, though larger clinical trials are needed before widespread therapeutic recommendations.',
    topic: 'health',
    difficulty: 'hard'
  },
  {
    id: 'swt-018',
    title: 'The Economics of Ageing Populations',
    text: 'Demographic shifts towards ageing populations present unprecedented economic challenges for governments worldwide, particularly in developed nations where declining birth rates and increasing life expectancy are dramatically altering dependency ratios. Japan, with 29 percent of its population over 65, exemplifies the fiscal pressures emerging economies will increasingly face, including rising healthcare and pension expenditures, shrinking tax bases, and declining workforce participation. The old-age dependency ratio in OECD countries is projected to increase from 28 percent in 2020 to 53 percent by 2060, meaning fewer working-age individuals will support each retiree. This demographic transition necessitates comprehensive policy responses, including raising retirement ages, reforming pension systems to ensure sustainability, increasing immigration to supplement declining workforces, and investing in automation technologies that enhance labour productivity. Healthcare systems must shift from acute care models to chronic disease management approaches better suited to elderly populations. Several countries have implemented innovative solutions, such as Singapore\'s mandatory savings scheme, Germany\'s long-term care insurance programme, and Denmark\'s flexible retirement system. The economic impact extends beyond fiscal considerations, affecting housing markets, consumption patterns, and innovation dynamics as societies adapt to fundamentally altered demographic structures.',
    keyPoints: ['Japan has 29% of population over 65', 'OECD dependency ratio rising from 28% to 53% by 2060', 'shrinking tax bases and rising pension costs', 'policy responses include retirement age and immigration', 'healthcare shift to chronic disease management', 'innovative solutions in Singapore, Germany, Denmark'],
    sampleSummary: 'Ageing populations in developed nations, exemplified by Japan\'s 29 percent elderly population and the OECD dependency ratio projected to reach 53 percent by 2060, create fiscal pressures requiring comprehensive policy responses including pension reform, increased immigration, healthcare system restructuring, and productivity-enhancing automation to address shrinking workforces and rising expenditures.',
    topic: 'demographics',
    difficulty: 'hard'
  },
  {
    id: 'swt-019',
    title: 'The Role of Museums in Contemporary Society',
    text: 'Museums are undergoing a fundamental transformation in their role, shifting from static repositories of artefacts to dynamic institutions that actively engage with contemporary social issues and diverse communities. This evolution reflects broader cultural debates about representation, accessibility, and the decolonisation of cultural institutions. Many major museums are grappling with calls to repatriate objects acquired during colonial periods, with France pledging to return 26 artefacts to Benin and Germany repatriating the Benin Bronzes to Nigeria. Digital technologies are enabling museums to reach audiences beyond their physical walls, with virtual exhibitions and online collections attracting millions of visitors who might never visit in person. Participatory exhibition models that invite community input and co-creation have demonstrated enhanced visitor engagement and learning outcomes compared to traditional didactic approaches. Museums are also increasingly recognised as valuable resources for addressing social challenges, including community cohesion, mental health support through arts engagement, and environmental education. However, these expanded ambitions often conflict with financial constraints, as many institutions face declining public funding and must balance revenue generation through tourism with their educational and social missions. The International Council of Museums adopted a new definition in 2022 that explicitly recognises museums\' role in promoting diversity, sustainability, and community participation.',
    keyPoints: ['shifting from static repositories to dynamic institutions', 'decolonisation and repatriation of colonial artefacts', 'digital technologies expand audience reach', 'participatory models enhance engagement', 'museums address social challenges including mental health', 'new ICOM definition recognises diversity and sustainability'],
    sampleSummary: 'Museums are transforming from static artefact repositories into dynamic institutions addressing contemporary issues including decolonisation through repatriation of colonial objects, with digital technologies expanding audience reach and participatory models enhancing engagement, as reflected in the International Council of Museums\' 2022 definition recognising their role in promoting diversity, sustainability, and community participation.',
    topic: 'arts',
    difficulty: 'medium'
  },
  {
    id: 'swt-020',
    title: 'Water Scarcity and Global Security',
    text: 'Water scarcity has emerged as one of the most pressing geopolitical challenges of the twenty-first century, with the United Nations warning that by 2025, two-thirds of the global population may face water-stressed conditions. Climate change is intensifying this crisis by altering precipitation patterns, accelerating glacial melt that feeds major river systems, and increasing evaporation rates in arid regions. The agricultural sector, which accounts for approximately 70 percent of global freshwater withdrawals, faces particular pressure as growing populations demand increased food production from diminishing water resources. Transboundary water disputes have intensified, with over 260 river basins shared between two or more nations creating potential flashpoints for conflict, particularly in the Middle East, Central Asia, and the Nile Basin. The Indus Water Treaty between India and Pakistan, once considered a model of water diplomacy, has come under increasing strain. Technological solutions including desalination, wastewater recycling, and precision irrigation offer partial remedies, though desalination remains energy-intensive and produces environmentally harmful brine discharge. Integrated water resource management approaches that combine technological innovation with governance reform, demand management, and ecosystem-based solutions represent the most promising path toward sustainable water security.',
    keyPoints: ['two-thirds of population may face water stress by 2025', 'agriculture uses 70% of freshwater withdrawals', 'climate change alters precipitation and accelerates glacial melt', '260+ transboundary river basins create conflict potential', 'desalination helpful but energy-intensive', 'integrated water management combines technology and governance'],
    sampleSummary: 'Water scarcity, projected to affect two-thirds of the global population by 2025 and intensified by climate change and agricultural demand consuming 70 percent of freshwater, has created geopolitical tensions across 260 transboundary river basins, requiring integrated management approaches that combine technological solutions like desalination with governance reform and ecosystem-based strategies.',
    topic: 'environment',
    difficulty: 'hard'
  },
  {
    id: 'swt-021',
    title: 'The Evolution of Remote Work',
    text: 'The mass adoption of remote work during the COVID-19 pandemic has triggered a permanent restructuring of workplace norms and organisational practices across many industries. Surveys indicate that approximately 30 percent of work in advanced economies can be performed remotely without productivity loss, with knowledge workers in sectors such as technology, finance, and professional services showing the greatest adaptability. Research from Stanford University found that remote workers demonstrated a 13 percent performance increase, attributed to fewer distractions, reduced commuting fatigue, and more comfortable working environments. However, remote work has also revealed significant challenges, including the erosion of organisational culture, reduced opportunities for spontaneous collaboration and mentorship, and the blurring of boundaries between professional and personal life leading to increased burnout. The hybrid model, combining two to three office days with remote work, has emerged as the predominant compromise, adopted by 74 percent of companies planning permanent flexible arrangements. Geographic implications are substantial, with remote work enabling migration from expensive urban centres to regional areas, potentially revitalising smaller communities while placing pressure on metropolitan commercial real estate markets.',
    keyPoints: ['30% of work can be done remotely without productivity loss', 'Stanford study found 13% performance increase', 'challenges include culture erosion and burnout', 'hybrid model adopted by 74% of companies', 'enables migration from urban to regional areas', 'impacts commercial real estate markets'],
    sampleSummary: 'Remote work, which can be performed without productivity loss for approximately 30 percent of roles in advanced economies and has shown a 13 percent performance increase according to Stanford research, has evolved into a predominantly hybrid model adopted by 74 percent of companies, despite challenges including organisational culture erosion and increased employee burnout.',
    topic: 'business',
    difficulty: 'medium'
  },
  {
    id: 'swt-022',
    title: 'Genetic Engineering and Food Security',
    text: 'Advances in genetic engineering, particularly the development of CRISPR-Cas9 gene editing technology, have opened new possibilities for addressing global food security challenges in an era of climate change and population growth. Unlike traditional genetically modified organisms that involve the insertion of foreign genes, CRISPR enables precise modifications to a plant\'s existing genome, creating crops with enhanced drought tolerance, disease resistance, and nutritional profiles. Golden Rice, engineered to produce beta-carotene, has the potential to address vitamin A deficiency that causes blindness and death in hundreds of thousands of children annually in developing countries. Scientists have developed wheat varieties resistant to powdery mildew, rice with enhanced flood tolerance, and bananas resistant to the devastating Panama disease. However, public acceptance remains a significant barrier, particularly in Europe where regulatory frameworks treat gene-edited crops identically to traditional GMOs despite their fundamentally different production methods. Critics raise concerns about potential ecological impacts, corporate control of seed supplies, and the reduction of crop genetic diversity. Proponents argue that the benefits of feeding a projected 9.7 billion people by 2050 necessitate embracing all available technologies, including genetic engineering, alongside traditional breeding and sustainable agricultural practices.',
    keyPoints: ['CRISPR enables precise genome modifications', 'creates drought-tolerant and disease-resistant crops', 'Golden Rice addresses vitamin A deficiency', 'public acceptance barriers especially in Europe', 'concerns about corporate seed control and biodiversity', 'feeding 9.7 billion by 2050 requires all technologies'],
    sampleSummary: 'CRISPR gene editing technology offers precise modifications to create drought-tolerant and disease-resistant crops, including Golden Rice that could address vitamin A deficiency in developing countries; however, public acceptance barriers, particularly strict European regulations, and concerns about corporate seed control and biodiversity reduction must be overcome to help feed a projected 9.7 billion people by 2050.',
    topic: 'science',
    difficulty: 'hard'
  },
  {
    id: 'swt-023',
    title: 'Childhood Obesity: A Growing Epidemic',
    text: 'Childhood obesity rates have tripled globally over the past four decades, creating a public health crisis with profound long-term consequences for individual wellbeing and healthcare systems. The World Health Organisation reports that over 340 million children and adolescents aged five to nineteen are now overweight or obese, with rates rising most rapidly in low- and middle-income countries experiencing nutritional transitions. The causes are multifactorial, encompassing increased consumption of energy-dense, nutrient-poor processed foods, declining physical activity levels associated with sedentary lifestyles and screen time, and the pervasive marketing of unhealthy food products to children. Obese children face elevated risks of developing type 2 diabetes, cardiovascular disease, musculoskeletal disorders, and psychological conditions including depression and low self-esteem, with many of these conditions persisting into adulthood. Economic analyses estimate that obesity-related healthcare costs exceed 170 billion dollars annually in the United States alone. Effective interventions require comprehensive approaches that address multiple determinants simultaneously, including sugar taxes and front-of-package nutritional labelling, restrictions on food advertising to children, school-based nutrition and physical activity programmes, and urban planning that promotes active transportation.',
    keyPoints: ['childhood obesity tripled in four decades', '340 million children overweight or obese globally', 'processed food, sedentary lifestyle, and food marketing as causes', 'increased risk of diabetes, cardiovascular disease, depression', 'US obesity healthcare costs exceed $170 billion annually', 'comprehensive interventions including sugar taxes and advertising restrictions'],
    sampleSummary: 'Childhood obesity has tripled globally in four decades, with over 340 million children now affected and rising rates in developing countries, driven by processed food consumption, sedentary lifestyles, and food marketing to children, requiring comprehensive interventions including sugar taxes, advertising restrictions, and school-based programmes to address the estimated 170 billion dollar annual healthcare burden.',
    topic: 'health',
    difficulty: 'medium'
  },
  {
    id: 'swt-024',
    title: 'Blockchain Beyond Cryptocurrency',
    text: 'While blockchain technology gained prominence through its association with Bitcoin and other cryptocurrencies, its applications extend far beyond digital currencies into areas that could fundamentally transform industries and governance systems. Blockchain\'s core attributes of decentralisation, immutability, and transparency make it particularly suitable for supply chain management, where it enables end-to-end traceability of products from origin to consumer. Major retailers including Walmart and Carrefour have implemented blockchain systems to track food products, reducing the time required to trace contamination sources from weeks to seconds. In healthcare, blockchain-based platforms are being developed to create secure, interoperable patient health records that give individuals control over their medical data while facilitating seamless information sharing between providers. Smart contracts, self-executing agreements coded on blockchain platforms, are automating complex business processes in insurance, real estate, and intellectual property management. Government applications include digital identity systems, transparent voting mechanisms, and tamper-proof land registries that reduce fraud in developing countries. However, scalability limitations, high energy consumption of certain consensus mechanisms, regulatory uncertainty, and the complexity of integrating blockchain with existing systems continue to constrain widespread adoption.',
    keyPoints: ['applications beyond cryptocurrency to supply chain and healthcare', 'supply chain traceability reduces contamination tracking time', 'secure interoperable health records give patients control', 'smart contracts automate business processes', 'government applications in identity and voting', 'scalability and energy consumption constraints'],
    sampleSummary: 'Blockchain technology extends beyond cryptocurrency to transform supply chain management by reducing contamination tracing from weeks to seconds, healthcare through secure patient records, and governance through digital identity and transparent voting systems, though widespread adoption remains constrained by scalability limitations, energy consumption, and regulatory uncertainty.',
    topic: 'technology',
    difficulty: 'medium'
  },
  {
    id: 'swt-025',
    title: 'The Decline of Insect Populations',
    text: 'A growing body of scientific evidence indicates that global insect populations are declining at alarming rates, with potential consequences that extend throughout entire ecosystems. A comprehensive meta-analysis published in the journal Biological Conservation estimated that 40 percent of insect species are declining and one-third are endangered, with total insect biomass decreasing by 2.5 percent annually. The primary drivers of this decline include agricultural intensification and pesticide use, habitat destruction and fragmentation, climate change, light pollution, and the introduction of invasive species. The ecological implications are profound, as insects perform essential ecosystem services including pollination of approximately 75 percent of food crops, decomposition and nutrient cycling, pest control through predation, and serving as a primary food source for birds, fish, and other animals. The economic value of insect pollination alone is estimated at 235 to 577 billion dollars annually. This decline has been characterised as an insect apocalypse by some researchers, though others caution that data gaps and geographic biases in research may overstate the severity. Conservation measures include reducing pesticide use through integrated pest management, restoring habitat connectivity, implementing insect-friendly lighting, and establishing monitoring programmes to track population trends more systematically.',
    keyPoints: ['40% of insect species declining, one-third endangered', 'biomass decreasing 2.5% annually', 'pesticides, habitat loss, climate change as drivers', 'insects pollinate 75% of food crops', 'pollination valued at $235-577 billion annually', 'conservation includes reduced pesticides and habitat restoration'],
    sampleSummary: 'Global insect populations are declining at 2.5 percent annually, with 40 percent of species in decline, driven primarily by agricultural pesticides, habitat destruction, and climate change, threatening essential ecosystem services including the pollination of 75 percent of food crops valued at up to 577 billion dollars, necessitating integrated pest management and habitat restoration measures.',
    topic: 'environment',
    difficulty: 'hard'
  },
  {
    id: 'swt-026',
    title: 'Sleep Deprivation in Modern Society',
    text: 'Sleep deprivation has become a pervasive public health issue in modern industrialised societies, with research revealing far-reaching consequences that extend well beyond simple fatigue. The Centres for Disease Control and Prevention reports that approximately one-third of adults in developed nations regularly obtain less than the recommended seven hours of sleep per night. Chronic sleep insufficiency has been linked to a significantly increased risk of cardiovascular disease, obesity, type 2 diabetes, depression, and impaired immune function, with sleep-deprived individuals demonstrating a 48 percent greater risk of developing coronary heart disease. Cognitive effects are equally concerning, as sleep deprivation impairs attention, decision-making, and emotional regulation, with 24 hours of wakefulness producing cognitive impairment equivalent to a blood alcohol concentration of 0.10 percent. The economic costs are substantial, with sleep deprivation estimated to cost the United States economy over 410 billion dollars annually through reduced productivity, workplace accidents, and healthcare expenditure. Contributing factors include extended working hours, screen exposure before bedtime that suppresses melatonin production, irregular schedules in shift work, and societal attitudes that valorise sleeplessness as a marker of productivity. Evidence-based interventions include workplace policies limiting shift durations, school start time adjustments for adolescents, and public education campaigns promoting sleep hygiene.',
    keyPoints: ['one-third of adults get less than recommended sleep', '48% greater risk of coronary heart disease', '24-hour wakefulness equals 0.10% blood alcohol impairment', 'costs US economy $410 billion annually', 'screen exposure suppresses melatonin production', 'interventions include shift limits and school start time changes'],
    sampleSummary: 'Sleep deprivation affects one-third of adults in developed nations, increasing coronary heart disease risk by 48 percent and producing cognitive impairment equivalent to significant alcohol intoxication after 24 hours of wakefulness, costing the US economy over 410 billion dollars annually and requiring interventions including workplace shift limits and public education on sleep hygiene.',
    topic: 'health',
    difficulty: 'medium'
  },
  {
    id: 'swt-027',
    title: 'The Commercialisation of Outer Space',
    text: 'The commercialisation of outer space has entered a new era characterised by private sector leadership and decreasing launch costs that are democratising access to orbital activities. SpaceX\'s development of reusable rocket technology has reduced launch costs from approximately 54,500 dollars per kilogram to under 2,720 dollars, fundamentally altering the economics of space access. The global space economy is valued at over 400 billion dollars and projected to exceed one trillion by 2040, with satellite services including communications, earth observation, and navigation constituting the largest market segment. Emerging commercial activities include satellite internet constellations aiming to provide global broadband coverage, in-space manufacturing that exploits microgravity conditions to produce advanced materials, and plans for asteroid mining that could access mineral resources worth trillions of dollars. Space tourism has transitioned from concept to reality, with multiple companies offering suborbital and orbital experiences to wealthy individuals. However, the rapid commercialisation raises significant governance challenges, including the inadequacy of the 1967 Outer Space Treaty in addressing property rights and resource extraction, the environmental impact of increased launch frequency on the stratosphere, and the growing problem of space debris from proliferating commercial satellites.',
    keyPoints: ['launch costs reduced from $54,500 to under $2,720 per kg', 'space economy exceeds $400 billion, projected $1 trillion by 2040', 'satellite services dominate the market', 'emerging activities include space tourism and asteroid mining', '1967 Outer Space Treaty inadequate for current challenges', 'environmental and debris concerns from increased launches'],
    sampleSummary: 'The commercialisation of outer space, driven by reusable rocket technology that reduced launch costs from 54,500 to under 2,720 dollars per kilogram, has created a 400 billion dollar economy projected to reach one trillion by 2040, encompassing satellite services, space tourism, and asteroid mining, though governance challenges and the inadequacy of the 1967 Outer Space Treaty require urgent attention.',
    topic: 'science',
    difficulty: 'medium'
  },
  {
    id: 'swt-028',
    title: 'Social Isolation and Its Health Consequences',
    text: 'Social isolation and loneliness have been increasingly recognised as significant public health concerns with measurable impacts on morbidity and mortality. A comprehensive meta-analysis of 148 studies found that individuals with strong social relationships have a 50 percent greater likelihood of survival compared to those with weaker connections, placing the health impact of social isolation on par with smoking 15 cigarettes daily. The neurobiological mechanisms underlying this association include chronic activation of the stress response system, elevated cortisol levels, increased inflammatory markers, and compromised immune function. Loneliness has been associated with a 29 percent increased risk of coronary heart disease, a 32 percent increased risk of stroke, and accelerated cognitive decline in older adults. The problem has been exacerbated by demographic trends including increasing rates of single-person households, geographic mobility that disrupts community ties, and paradoxically, the replacement of face-to-face social interaction with digital communication that may lack the depth of in-person connection. Several countries have recognised the severity of this issue, with Japan appointing a Minister of Loneliness and the United Kingdom establishing a government strategy to address social disconnection. Effective interventions include community-based social prescribing programmes, intergenerational contact initiatives, and urban design that facilitates social interaction.',
    keyPoints: ['strong social relationships increase survival by 50%', 'health impact comparable to smoking 15 cigarettes daily', 'loneliness increases heart disease risk by 29%', 'chronic stress response and immune compromise', 'single-person households and digital communication exacerbate problem', 'Japan and UK have government-level responses'],
    sampleSummary: 'Social isolation reduces survival probability by 50 percent and carries health risks comparable to smoking 15 cigarettes daily, including a 29 percent increased risk of heart disease and accelerated cognitive decline, prompting government responses such as Japan\'s Minister of Loneliness and the UK\'s national strategy, alongside community-based social prescribing programmes.',
    topic: 'sociology',
    difficulty: 'hard'
  },
  {
    id: 'swt-029',
    title: 'Renewable Energy Storage Solutions',
    text: 'The development of effective energy storage technologies represents perhaps the most critical challenge in the transition to a fully renewable electricity system. The intermittent nature of solar and wind generation creates a fundamental mismatch between supply and demand that must be addressed to maintain grid reliability. Lithium-ion battery costs have declined by 97 percent since 1991 and continue to fall, making grid-scale battery storage increasingly economically viable, with installations growing by 60 percent annually. However, lithium-ion technology faces limitations including finite cycle life, degradation at extreme temperatures, and environmental concerns associated with lithium mining. Alternative storage technologies under development include solid-state batteries that promise higher energy density and improved safety, flow batteries suited to long-duration storage applications, compressed air energy storage utilising underground caverns, and green hydrogen produced through electrolysis that can store energy for weeks or months. Pumped hydro storage remains the most widely deployed technology globally, accounting for 95 percent of installed storage capacity, though geographic requirements limit further expansion. The integration of diverse storage technologies at different timescales, from short-duration batteries responding to momentary fluctuations to seasonal hydrogen storage, will be essential for achieving fully decarbonised electricity systems by mid-century.',
    keyPoints: ['intermittency is the key challenge for renewables', 'lithium-ion costs declined 97% since 1991', 'installations growing 60% annually', 'alternative technologies include solid-state and flow batteries', 'pumped hydro accounts for 95% of installed capacity', 'diverse storage technologies needed at different timescales'],
    sampleSummary: 'Effective energy storage is critical for the renewable transition, with lithium-ion battery costs having declined 97 percent since 1991 and installations growing 60 percent annually; however, a diverse portfolio of technologies including solid-state batteries, green hydrogen, and pumped hydro, which currently accounts for 95 percent of installed capacity, will be needed to address intermittency across different timescales.',
    topic: 'science',
    difficulty: 'medium'
  },
  {
    id: 'swt-030',
    title: 'The Ethics of Surveillance Technology',
    text: 'The proliferation of surveillance technologies, from facial recognition systems to digital monitoring tools, has intensified debates about the balance between public safety and individual privacy rights. China\'s extensive surveillance network, incorporating over 600 million cameras with facial recognition capabilities, represents the most comprehensive implementation of these technologies, while Western democracies have adopted surveillance measures at varying scales. Studies demonstrate that facial recognition systems exhibit significant accuracy disparities across demographic groups, with error rates up to 34 times higher for dark-skinned women compared to light-skinned men, raising profound concerns about discriminatory policing and civil liberties violations. Workplace surveillance has expanded dramatically, with employers using keystroke logging, email monitoring, and productivity tracking software that has intensified following the shift to remote work. The European Union\'s General Data Protection Regulation represents the most comprehensive regulatory framework governing surveillance and data collection, establishing principles of purpose limitation, data minimisation, and informed consent. Several cities including San Francisco and Brussels have banned government use of facial recognition, while the European Union has proposed restrictions on real-time biometric surveillance in public spaces. Critics argue that the normalisation of surveillance creates chilling effects on free expression and political dissent, fundamentally altering the relationship between citizens and the state.',
    keyPoints: ['China operates 600 million cameras with facial recognition', 'error rates 34x higher for dark-skinned women', 'workplace surveillance expanded with remote work', 'EU GDPR most comprehensive regulatory framework', 'cities banning government facial recognition use', 'surveillance creates chilling effects on free expression'],
    sampleSummary: 'The proliferation of surveillance technologies including facial recognition systems, which exhibit error rates up to 34 times higher for dark-skinned women, has prompted regulatory responses ranging from the EU\'s GDPR to bans on government facial recognition in San Francisco and Brussels, as critics warn that normalised surveillance creates chilling effects on free expression and fundamentally alters citizen-state relationships.',
    topic: 'politics',
    difficulty: 'hard'
  },
  {
    id: 'swt-031',
    title: 'Circular Economy and Waste Reduction',
    text: 'The concept of a circular economy, which aims to eliminate waste and maximise resource utilisation through continuous cycles of reuse, repair, refurbishment, and recycling, is gaining traction as an alternative to the traditional linear model of production and consumption. The Ellen MacArthur Foundation estimates that transitioning to a circular economy could generate 4.5 trillion dollars in economic benefits by 2030 while significantly reducing environmental degradation. Current global circularity rates remain disturbingly low, with only 8.6 percent of materials entering the economy being recycled or reused, meaning over 90 percent of resources are extracted, used once, and discarded. The fashion industry exemplifies the challenges of linear consumption, producing approximately 92 million tonnes of textile waste annually, with less than one percent recycled into new garments. Legislative initiatives are accelerating the transition, with the European Union implementing Extended Producer Responsibility schemes that require manufacturers to fund end-of-life management of their products. Countries including the Netherlands and Finland have adopted national circular economy strategies with specific targets and timelines. Product-as-a-service business models, in which companies retain ownership and responsibility for products throughout their lifecycle, are emerging across industries from lighting to aviation engines.',
    keyPoints: ['circular economy could generate $4.5 trillion by 2030', 'only 8.6% of materials currently recycled or reused', 'fashion produces 92 million tonnes of textile waste annually', 'EU implementing Extended Producer Responsibility', 'Netherlands and Finland have national strategies', 'product-as-a-service models emerging'],
    sampleSummary: 'The circular economy, which could generate 4.5 trillion dollars in economic benefits by 2030, addresses the fact that only 8.6 percent of materials are currently recycled, with legislative initiatives such as the EU\'s Extended Producer Responsibility and national strategies in the Netherlands and Finland accelerating the transition from linear consumption through product-as-a-service business models.',
    topic: 'economics',
    difficulty: 'medium'
  },
  {
    id: 'swt-032',
    title: 'The Neuroscience of Creativity',
    text: 'Neuroscientific research has challenged popular misconceptions about creativity, revealing it to be a complex cognitive process that involves the coordinated activation of multiple brain networks rather than the exclusive domain of a single cerebral hemisphere. Functional neuroimaging studies have identified three neural networks that interact during creative thinking: the default mode network, which generates spontaneous ideas during mind-wandering; the executive control network, which evaluates and refines creative outputs; and the salience network, which mediates between the other two, determining which ideas merit further attention. This tripartite model explains why creative insights often emerge during relaxed states such as showering or walking, when the default mode network operates with reduced executive oversight. Research has demonstrated that creative capacity is not solely an innate trait but can be cultivated through deliberate practice, environmental design, and specific training interventions. Factors that enhance creativity include exposure to diverse experiences, engagement with multicultural environments, moderate levels of constraint that provide a framework without excessive restriction, and adequate sleep that facilitates memory consolidation and novel associations. Organisational research has found that workplace environments featuring moderate ambient noise, natural elements, and flexible spaces promote creative output, while excessive time pressure and rigid hierarchies tend to suppress it.',
    keyPoints: ['creativity involves multiple brain networks, not one hemisphere', 'three networks: default mode, executive control, salience', 'insights emerge during relaxed states', 'creativity can be cultivated through practice', 'diverse experiences and multiculturalism enhance creativity', 'workspace design affects creative output'],
    sampleSummary: 'Neuroscientific research has revealed that creativity involves the coordinated interaction of three brain networks rather than a single hemisphere, explaining why insights emerge during relaxed states, and has demonstrated that creative capacity can be cultivated through deliberate practice, exposure to diverse experiences, and workspace environments featuring moderate noise and natural elements.',
    topic: 'psychology',
    difficulty: 'medium'
  },
  {
    id: 'swt-033',
    title: 'The Rise of Authoritarian Populism',
    text: 'The global rise of authoritarian populism over the past decade has posed significant challenges to democratic norms and institutions in both established and emerging democracies. Populist leaders, who claim to represent the will of an undifferentiated people against corrupt elites, have gained power in countries spanning multiple continents, including the United States, Brazil, Hungary, the Philippines, India, and Turkey. Scholars identify several common factors driving this trend: economic inequality and the perception that globalisation has benefited elites while leaving ordinary citizens behind; cultural anxiety about immigration and demographic change; declining trust in traditional political institutions and media; and the exploitation of social media for political mobilisation and disinformation. Once in power, populist governments typically seek to weaken institutional checks and balances, including judicial independence, press freedom, and electoral integrity. The consequences for democratic governance have been measurable, with Freedom House reporting fifteen consecutive years of global democratic decline through 2021. However, research also demonstrates that populist movements can have positive democratic effects by mobilising previously disengaged citizens, highlighting genuine grievances, and forcing established parties to address issues of economic fairness and accountability.',
    keyPoints: ['populist leaders gained power across multiple continents', 'driven by inequality, cultural anxiety, institutional distrust', 'social media exploited for mobilisation and disinformation', 'populists weaken checks and balances once in power', '15 consecutive years of global democratic decline', 'populism can mobilise disengaged citizens positively'],
    sampleSummary: 'Authoritarian populism, driven by economic inequality, cultural anxiety about immigration, and declining institutional trust, has spread across multiple continents and contributed to fifteen consecutive years of global democratic decline, as populist governments weaken judicial independence and press freedom, though these movements can also positively mobilise disengaged citizens and highlight genuine grievances.',
    topic: 'politics',
    difficulty: 'hard'
  },
  {
    id: 'swt-034',
    title: 'Precision Agriculture and Food Production',
    text: 'Precision agriculture, which employs data-driven technologies to optimise farming practices at the individual plant or animal level, represents a paradigm shift in food production with significant implications for sustainability and food security. Satellite imagery, drone surveillance, soil sensors, and GPS-guided machinery enable farmers to apply water, fertilisers, and pesticides with unprecedented accuracy, reducing input waste by 15 to 25 percent while maintaining or improving crop yields. Machine learning algorithms analyse data from multiple sources to generate predictive models for pest outbreaks, disease progression, and optimal harvest timing. Variable rate technology allows different amounts of inputs to be applied across a single field based on localised soil conditions and crop requirements. Economic studies indicate that precision agriculture can increase farm profitability by 10 to 15 percent while reducing environmental impact through decreased chemical runoff and greenhouse gas emissions. However, the adoption of these technologies requires substantial capital investment and technical expertise, creating a digital divide between large commercial operations and smallholder farmers who produce the majority of food in developing countries. Addressing this disparity requires targeted policies including technology subsidies, farmer training programmes, and the development of affordable precision agriculture tools adapted to small-scale farming systems.',
    keyPoints: ['data-driven technologies optimise farming at plant level', 'reduces input waste by 15-25%', 'machine learning predicts pest outbreaks and harvest timing', 'increases farm profitability by 10-15%', 'digital divide between commercial and smallholder farms', 'need for affordable tools and farmer training'],
    sampleSummary: 'Precision agriculture employs satellite imagery, sensors, and machine learning to reduce farming input waste by 15 to 25 percent and increase profitability by 10 to 15 percent; however, the substantial capital investment required creates a digital divide that excludes smallholder farmers in developing countries, necessitating technology subsidies and adapted affordable tools.',
    topic: 'science',
    difficulty: 'medium'
  },
  {
    id: 'swt-035',
    title: 'The Psychology of Conspiracy Theories',
    text: 'The proliferation of conspiracy theories in contemporary society has attracted substantial academic attention, with researchers identifying consistent psychological, social, and contextual factors that drive conspiratorial thinking. Studies demonstrate that belief in conspiracy theories is not confined to fringe populations but is widespread, with surveys indicating that approximately 50 percent of Americans endorse at least one conspiracy theory. Three fundamental psychological needs underpin conspiracy belief: epistemic needs for understanding and certainty in a complex world; existential needs for security and control when facing threats; and social needs for maintaining a positive self-image and group identity. Individuals experiencing anxiety, powerlessness, or social marginalisation are particularly susceptible to conspiratorial explanations that offer coherent narratives attributing their circumstances to identifiable agents rather than impersonal systemic forces. The architecture of social media platforms amplifies conspiracy theories through algorithmic recommendation systems that create feedback loops of increasingly extreme content. Research has found that once established, conspiracy beliefs are remarkably resistant to correction, as contradictory evidence is often reinterpreted as further confirmation of the conspiracy. Effective countermeasures include prebunking strategies that inoculate individuals against misinformation techniques before exposure, promoting analytical thinking through media literacy education, and building institutional transparency to address legitimate concerns about accountability.',
    keyPoints: ['50% of Americans endorse at least one conspiracy theory', 'driven by epistemic, existential, and social needs', 'anxiety and powerlessness increase susceptibility', 'social media algorithms create feedback loops', 'beliefs resistant to correction once established', 'prebunking and media literacy as countermeasures'],
    sampleSummary: 'Conspiracy theories, endorsed by approximately 50 percent of Americans, are driven by psychological needs for understanding, security, and positive group identity, with social media algorithms amplifying these beliefs through feedback loops, making them remarkably resistant to correction and requiring countermeasures such as prebunking strategies and media literacy education rather than direct debunking.',
    topic: 'psychology',
    difficulty: 'hard'
  },
  {
    id: 'swt-036',
    title: 'Sustainable Urban Transportation',
    text: 'The transformation of urban transportation systems is increasingly recognised as essential for achieving climate targets, improving air quality, and enhancing livability in rapidly growing cities. Transport accounts for approximately 24 percent of global carbon dioxide emissions, with road vehicles contributing the largest share. Cities worldwide are implementing comprehensive mobility strategies that prioritise public transit, cycling, and walking over private car use. Copenhagen has invested heavily in cycling infrastructure, resulting in 62 percent of residents commuting by bicycle, while cities such as Bogota and Curitiba have developed bus rapid transit systems that provide metro-quality service at a fraction of the cost. The electrification of vehicle fleets represents another critical pathway, with Norway achieving 80 percent electric vehicle market share through a combination of purchase subsidies, tax exemptions, and charging infrastructure investment. However, the transition to sustainable transport faces significant obstacles, including the entrenched dominance of car-centric urban planning, the high upfront costs of public transit infrastructure, and the equity implications of policies that may disproportionately burden lower-income commuters dependent on private vehicles. The concept of the fifteen-minute city, where residents can access all essential services within a short walk or cycle, has gained prominence as an urban planning framework that integrates land use and transportation decisions.',
    keyPoints: ['transport produces 24% of global CO2 emissions', 'Copenhagen achieves 62% cycling commute rate', 'bus rapid transit provides metro service at lower cost', 'Norway achieves 80% electric vehicle market share', 'car-centric planning and equity are obstacles', 'fifteen-minute city concept integrates land use and transport'],
    sampleSummary: 'Urban transportation transformation, essential for addressing the sector\'s 24 percent share of global carbon emissions, is demonstrated by Copenhagen\'s 62 percent cycling commute rate and Norway\'s 80 percent electric vehicle market share, while the fifteen-minute city concept offers an integrative planning framework, though car-centric infrastructure and equity concerns for lower-income commuters remain obstacles.',
    topic: 'urbanisation',
    difficulty: 'medium'
  },
  {
    id: 'swt-037',
    title: 'The Impact of Early Childhood Education',
    text: 'A substantial body of longitudinal research demonstrates that high-quality early childhood education produces significant and lasting benefits for individual development and societal outcomes. The Perry Preschool Project, which followed participants for over fifty years, found that children who received quality early education earned 14 percent more as adults, were 46 percent less likely to have been arrested for violent crimes, and were 26 percent less likely to have received government assistance. Economic analyses consistently show that investment in early childhood education yields returns of seven to thirteen dollars for every dollar spent, making it one of the most cost-effective social interventions available. The mechanisms underlying these effects include enhanced development of cognitive and executive function skills, improved social-emotional competencies, and the establishment of positive learning habits during critical periods of brain development. However, access to quality early childhood programmes remains deeply inequitable, with children from disadvantaged backgrounds, who stand to benefit most, least likely to have access. Quality indicators including educator qualifications, adult-to-child ratios, and curriculum design vary dramatically across and within countries. Universal pre-kindergarten programmes implemented in several jurisdictions have demonstrated that public investment can significantly improve access while maintaining quality standards, though programme design and implementation quality are critical determinants of effectiveness.',
    keyPoints: ['Perry Project shows 14% higher earnings after 50 years', '46% less likely to be arrested for violent crimes', 'returns of $7-13 for every dollar invested', 'critical periods of brain development', 'access inequitable for disadvantaged children', 'universal pre-kindergarten improves access'],
    sampleSummary: 'Longitudinal research, including the Perry Preschool Project that tracked participants for fifty years, demonstrates that high-quality early childhood education yields returns of seven to thirteen dollars per dollar invested through higher adult earnings, reduced crime, and enhanced cognitive development, though access remains inequitable for disadvantaged children who would benefit most.',
    topic: 'education',
    difficulty: 'medium'
  },
  {
    id: 'swt-038',
    title: 'Quantum Computing: Promise and Challenges',
    text: 'Quantum computing represents a fundamental departure from classical computing that has the potential to solve certain categories of problems currently beyond the reach of even the most powerful supercomputers. Unlike classical bits that exist in states of either zero or one, quantum bits or qubits can exist in superposition, simultaneously representing multiple states, while quantum entanglement enables correlated processing that scales exponentially with the number of qubits. These properties make quantum computers theoretically capable of performing specific computations, such as molecular simulation, cryptographic analysis, and optimisation problems, millions of times faster than classical machines. Google\'s demonstration of quantum supremacy in 2019, achieving a computation in 200 seconds that would require 10,000 years on the world\'s fastest supercomputer, marked a significant milestone. Practical applications are emerging in drug discovery, where quantum simulations can model molecular interactions with unprecedented accuracy, and in financial modelling, where quantum algorithms can optimise portfolio management. However, formidable technical challenges remain, including the extreme sensitivity of qubits to environmental interference requiring temperatures near absolute zero, high error rates that necessitate sophisticated error correction protocols, and the limited number of qubits achievable in current systems. Experts estimate that fault-tolerant quantum computers capable of tackling real-world problems at scale remain five to fifteen years away.',
    keyPoints: ['qubits use superposition and entanglement for exponential scaling', 'Google demonstrated quantum supremacy in 2019', 'applications in drug discovery and financial modelling', 'qubits require near absolute zero temperatures', 'high error rates need correction protocols', 'fault-tolerant systems 5-15 years away'],
    sampleSummary: 'Quantum computing, which exploits superposition and entanglement to perform certain computations exponentially faster than classical machines as demonstrated by Google\'s 2019 quantum supremacy achievement, shows promise in drug discovery and financial modelling, though fault-tolerant systems capable of solving real-world problems remain five to fifteen years away due to qubit sensitivity and error correction challenges.',
    topic: 'technology',
    difficulty: 'hard'
  },
  {
    id: 'swt-039',
    title: 'Income Inequality and Social Mobility',
    text: 'Rising income inequality within nations has emerged as one of the defining socioeconomic challenges of the twenty-first century, with significant implications for social cohesion, democratic governance, and intergenerational mobility. The share of income captured by the wealthiest one percent has increased dramatically since the 1980s, reaching approximately 20 percent of national income in the United States and the United Kingdom. Research by Raj Chetty and colleagues has demonstrated that absolute social mobility in America has declined from approximately 90 percent for those born in 1940 to just 50 percent for those born in 1984, meaning half of today\'s young adults will not achieve higher incomes than their parents. The Gatsby Curve illustrates the relationship between inequality and social mobility, revealing that countries with greater income disparities typically exhibit lower intergenerational mobility. The causes of rising inequality are multifaceted, including technological change that disproportionately rewards highly skilled workers, globalisation that suppresses wages for routine tasks, declining trade union membership, tax policy changes favouring capital over labour income, and the increasing concentration of market power among dominant corporations. Nordic countries demonstrate that high levels of equality and mobility are achievable through comprehensive social investment, progressive taxation, strong collective bargaining institutions, and universal access to quality education and healthcare.',
    keyPoints: ['top 1% captures 20% of income in US and UK', 'social mobility declined from 90% to 50% across generations', 'Gatsby Curve links inequality to lower mobility', 'technology, globalisation, and policy drive inequality', 'declining trade union membership a factor', 'Nordic model shows equality is achievable'],
    sampleSummary: 'Rising income inequality, with the wealthiest one percent capturing 20 percent of national income in the US and UK, has reduced absolute social mobility from 90 percent to 50 percent across generations, as demonstrated by the Gatsby Curve linking inequality to lower mobility, though the Nordic model proves that comprehensive social investment and progressive taxation can achieve both equality and intergenerational mobility.',
    topic: 'sociology',
    difficulty: 'hard'
  },
  {
    id: 'swt-040',
    title: 'The Heritage Language Maintenance Challenge',
    text: 'Linguists estimate that approximately half of the world\'s 7,000 languages are at risk of extinction by the end of this century, with one language disappearing approximately every two weeks. This linguistic erosion carries profound cultural, intellectual, and scientific consequences, as each language represents a unique cognitive framework for understanding the world and encodes irreplaceable knowledge about local ecosystems, medicinal practices, and historical experiences. Heritage language maintenance poses particular challenges in immigrant communities, where the dominant language of the host society exerts powerful assimilative pressure on subsequent generations. Research consistently demonstrates a three-generation pattern in which immigrant languages are typically lost by the third generation, regardless of the linguistic vitality of the heritage language globally. However, successful maintenance strategies have been documented, including heritage language schooling programmes, community language centres, digital resources and social media platforms that create virtual speech communities, and family language policies that prioritise heritage language use in the home. Countries such as New Zealand and Wales have demonstrated that revitalisation efforts can reverse language decline, with te reo Maori speakers increasing from 14 percent to 24 percent of the Maori population following comprehensive government intervention. The preservation of linguistic diversity is increasingly framed as a human rights issue, with the United Nations declaring 2022-2032 the International Decade of Indigenous Languages.',
    keyPoints: ['half of 7,000 languages at risk of extinction this century', 'one language disappears every two weeks', 'languages encode irreplaceable cultural and ecological knowledge', 'three-generation pattern of immigrant language loss', 'New Zealand increased Maori speakers from 14% to 24%', 'UN declared 2022-2032 Decade of Indigenous Languages'],
    sampleSummary: 'Approximately half of the world\'s 7,000 languages face extinction by century\'s end, with each loss representing irreplaceable cultural and ecological knowledge, though revitalisation efforts such as New Zealand\'s programme that increased te reo Maori speakers from 14 to 24 percent demonstrate that comprehensive government intervention, heritage language schooling, and digital communities can reverse decline.',
    topic: 'sociology',
    difficulty: 'medium'
  }
];

// -----------------------------------------------------------------------------
// 2. ESSAY TOPICS (50 items)
// -----------------------------------------------------------------------------
const ESSAY_TOPICS = [
  {
    id: 'we-001',
    title: 'University Education Value',
    prompt: 'Some people believe that a university education is essential for success in life, while others argue that practical experience is more valuable. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the debate between formal education and practical experience as pathways to success, then state your position.',
      body1: 'Arguments for university education: critical thinking skills, networking opportunities, specialised knowledge, higher average earnings.',
      body2: 'Arguments for practical experience: real-world skills, entrepreneurial success stories, avoiding student debt, industry-specific training.',
      conclusion: 'While both paths have merit, a combination of academic knowledge and practical application typically yields the best outcomes.'
    },
    keyVocabulary: ['curriculum', 'vocational', 'theoretical', 'entrepreneurial', 'credential', 'pragmatic', 'empirical', 'pedagogical', 'intellectual', 'meritocratic'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-002',
    title: 'Government Surveillance',
    prompt: 'Governments should be allowed to monitor citizens\' online activities to ensure national security. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the tension between national security and privacy rights in the digital age.',
      body1: 'Arguments for surveillance: prevention of terrorism, combating cybercrime, protection of vulnerable individuals, evidence gathering.',
      body2: 'Arguments against: violation of privacy rights, potential for abuse, chilling effect on free speech, slippery slope to authoritarianism.',
      conclusion: 'While limited surveillance may be justified for specific threats, comprehensive monitoring undermines democratic freedoms and requires strict oversight.'
    },
    keyVocabulary: ['surveillance', 'privacy', 'authoritarian', 'transparency', 'accountability', 'jurisdiction', 'encryption', 'proportionate', 'oversight', 'constitutional'],
    difficulty: 'hard',
    category: 'politics'
  },
  {
    id: 'we-003',
    title: 'Climate Change Responsibility',
    prompt: 'Some argue that individuals bear the primary responsibility for addressing climate change, while others believe governments and corporations must lead the effort. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Acknowledge climate change as a collective challenge requiring action at multiple levels.',
      body1: 'Individual responsibility: consumer choices, lifestyle changes, grassroots movements, personal carbon footprint reduction.',
      body2: 'Government and corporate responsibility: policy frameworks, emission regulations, industrial transformation, international agreements.',
      conclusion: 'Systemic change driven by governments and corporations is more impactful, though individual actions create social pressure for broader transformation.'
    },
    keyVocabulary: ['sustainability', 'emissions', 'decarbonisation', 'accountability', 'infrastructure', 'renewable', 'mitigation', 'transition', 'ecological', 'systemic'],
    difficulty: 'medium',
    category: 'environment'
  },
  {
    id: 'we-004',
    title: 'Social Media Age Restrictions',
    prompt: 'Children under 16 should be banned from using social media platforms. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce concerns about children\'s social media use and the debate around age restrictions.',
      body1: 'Agreement: mental health impacts, cyberbullying, privacy risks, attention span reduction, exposure to inappropriate content.',
      body2: 'Disagreement: digital literacy development, social connection, educational resources, difficulty of enforcement, parental responsibility.',
      conclusion: 'Rather than outright bans, a combination of age-appropriate design, parental guidance, and digital literacy education offers a more effective approach.'
    },
    keyVocabulary: ['cyberbullying', 'adolescent', 'vulnerability', 'regulation', 'enforcement', 'digital literacy', 'wellbeing', 'safeguarding', 'autonomous', 'prohibitive'],
    difficulty: 'medium',
    category: 'technology'
  },
  {
    id: 'we-005',
    title: 'Immigration and National Identity',
    prompt: 'Immigration enriches a country\'s culture and economy. To what extent do you agree or disagree with this statement?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present immigration as a complex issue with cultural and economic dimensions.',
      body1: 'Cultural enrichment: diversity of perspectives, culinary traditions, artistic contributions, innovation through varied experiences.',
      body2: 'Economic benefits and challenges: labour market contributions, skill gaps, pressure on services, integration costs.',
      conclusion: 'Immigration broadly enriches nations when accompanied by effective integration policies and equitable resource distribution.'
    },
    keyVocabulary: ['multicultural', 'assimilation', 'integration', 'demographic', 'diaspora', 'pluralistic', 'socioeconomic', 'indigenous', 'cohesion', 'xenophobia'],
    difficulty: 'hard',
    category: 'sociology'
  },
  {
    id: 'we-006',
    title: 'Automation and Employment',
    prompt: 'Automation and artificial intelligence will create more jobs than they destroy. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Contextualise the debate within historical patterns of technological disruption and employment.',
      body1: 'Agreement: historical precedent of technology creating jobs, new industries, increased productivity enabling growth.',
      body2: 'Disagreement: scale and speed of AI disruption, routine task elimination, growing inequality, transition challenges.',
      conclusion: 'While new jobs will emerge, proactive reskilling and social safety nets are essential to manage the transition.'
    },
    keyVocabulary: ['automation', 'displacement', 'reskilling', 'productivity', 'redundancy', 'innovation', 'algorithmic', 'workforce', 'obsolescence', 'entrepreneurial'],
    difficulty: 'medium',
    category: 'economics'
  },
  {
    id: 'we-007',
    title: 'Traditional vs Modern Medicine',
    prompt: 'Traditional medicine should be given equal status to modern scientific medicine in healthcare systems. Discuss the advantages and disadvantages of this approach.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Introduce the coexistence of traditional and modern medicine in global healthcare systems.',
      body1: 'Advantages: holistic approaches, cultural relevance, patient preferences, proven remedies, cost-effectiveness in some contexts.',
      body2: 'Disadvantages: lack of scientific evidence for many treatments, safety concerns, delayed access to proven treatments, standardisation difficulties.',
      conclusion: 'An integrative approach that subjects traditional remedies to scientific evaluation while respecting cultural practices offers the best path forward.'
    },
    keyVocabulary: ['holistic', 'pharmaceutical', 'evidence-based', 'therapeutic', 'indigenous', 'efficacy', 'empirical', 'complementary', 'integrative', 'standardisation'],
    difficulty: 'hard',
    category: 'health'
  },
  {
    id: 'we-008',
    title: 'Space Exploration Priorities',
    prompt: 'Governments should spend money on solving problems on Earth rather than on space exploration. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present the competing priorities of terrestrial challenges and space exploration investment.',
      body1: 'Arguments for Earth priorities: poverty, healthcare, education, infrastructure needs, immediate human suffering.',
      body2: 'Arguments for space exploration: technological innovation, long-term survival, scientific discovery, economic returns, inspiration.',
      conclusion: 'Both priorities are valid; space exploration investment yields practical benefits while addressing Earth\'s challenges remains the primary obligation.'
    },
    keyVocabulary: ['allocation', 'innovation', 'extraterrestrial', 'terrestrial', 'infrastructure', 'sustainability', 'commercialisation', 'frontier', 'expenditure', 'humanitarian'],
    difficulty: 'medium',
    category: 'science'
  },
  {
    id: 'we-009',
    title: 'Gender Pay Gap',
    prompt: 'The gender pay gap is primarily the result of personal choices rather than systemic discrimination. Discuss both perspectives and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the gender pay gap as a persistent issue with multiple contributing factors.',
      body1: 'Personal choice perspective: career preferences, work-life balance decisions, negotiation differences, industry self-selection.',
      body2: 'Systemic discrimination perspective: unconscious bias, glass ceiling, unequal domestic responsibilities, structural barriers.',
      conclusion: 'The pay gap results from an interaction of individual choices shaped by systemic constraints, requiring both cultural and policy interventions.'
    },
    keyVocabulary: ['disparity', 'discrimination', 'systemic', 'negotiation', 'remuneration', 'equitable', 'transparency', 'representation', 'patriarchal', 'legislation'],
    difficulty: 'hard',
    category: 'sociology'
  },
  {
    id: 'we-010',
    title: 'Standardised Testing',
    prompt: 'Standardised testing is an effective measure of student ability and should continue to be used in education systems worldwide. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Contextualise standardised testing as a widespread but controversial assessment method.',
      body1: 'Agreement: objective measurement, comparability, accountability, identifying achievement gaps, university admission tool.',
      body2: 'Disagreement: narrow assessment scope, cultural bias, teaching to the test, stress on students, failure to measure creativity.',
      conclusion: 'Standardised tests should be one component of a comprehensive assessment system that also values diverse forms of intelligence and achievement.'
    },
    keyVocabulary: ['assessment', 'accountability', 'curriculum', 'benchmark', 'objective', 'criterion', 'pedagogy', 'formative', 'summative', 'differentiation'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-011',
    title: 'Nuclear Energy',
    prompt: 'Nuclear energy is the best solution to meet growing energy demands while reducing carbon emissions. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present nuclear energy within the context of the global energy transition and climate goals.',
      body1: 'Agreement: low carbon emissions, reliable baseload power, high energy density, proven technology, small land footprint.',
      body2: 'Disagreement: nuclear waste management, accident risks, high construction costs, proliferation concerns, renewable alternatives.',
      conclusion: 'Nuclear energy should play a complementary role alongside renewables, particularly in regions where intermittent sources cannot meet baseload demands.'
    },
    keyVocabulary: ['baseload', 'emissions', 'radioactive', 'proliferation', 'sustainable', 'decommission', 'reactor', 'renewable', 'intermittent', 'fission'],
    difficulty: 'hard',
    category: 'environment'
  },
  {
    id: 'we-012',
    title: 'Urbanisation Benefits',
    prompt: 'The movement of people from rural areas to cities has more advantages than disadvantages. Discuss.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Introduce urbanisation as a defining global trend with both positive and negative consequences.',
      body1: 'Advantages: economic opportunities, access to services, educational institutions, cultural diversity, innovation hubs.',
      body2: 'Disadvantages: overcrowding, housing affordability, pollution, loss of community, pressure on infrastructure.',
      conclusion: 'Urbanisation offers substantial benefits when managed through inclusive planning, though rural communities require investment to remain viable.'
    },
    keyVocabulary: ['urbanisation', 'metropolitan', 'infrastructure', 'congestion', 'affordable', 'migration', 'agglomeration', 'livability', 'sustainable', 'demographic'],
    difficulty: 'medium',
    category: 'urbanisation'
  },
  {
    id: 'we-013',
    title: 'Vegetarian Diet for All',
    prompt: 'Everyone should adopt a vegetarian diet to help solve environmental and health problems. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the environmental and health arguments for reducing meat consumption.',
      body1: 'Agreement: reduced greenhouse emissions, land and water use, health benefits, animal welfare, food security.',
      body2: 'Disagreement: cultural significance, nutritional needs, economic impact on farming, personal freedom, impracticality.',
      conclusion: 'While universal vegetarianism is impractical, significant reduction in meat consumption, particularly in developed nations, would yield substantial environmental and health benefits.'
    },
    keyVocabulary: ['sustainable', 'consumption', 'emissions', 'nutritional', 'ethical', 'livestock', 'biodiversity', 'dietary', 'agricultural', 'carbon footprint'],
    difficulty: 'medium',
    category: 'environment'
  },
  {
    id: 'we-014',
    title: 'Cashless Society',
    prompt: 'Many countries are moving towards cashless societies where transactions are made electronically. What are the advantages and disadvantages of this trend?',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Describe the global trend toward digital payments and cashless transactions.',
      body1: 'Advantages: convenience, reduced crime, transaction transparency, financial inclusion through mobile banking, efficiency.',
      body2: 'Disadvantages: digital divide, privacy concerns, cybersecurity risks, exclusion of elderly and unbanked, system vulnerability.',
      conclusion: 'A gradual transition that maintains cash as an option while expanding digital infrastructure ensures inclusivity and resilience.'
    },
    keyVocabulary: ['transaction', 'digital', 'infrastructure', 'cybersecurity', 'inclusive', 'monetary', 'cryptocurrency', 'vulnerable', 'surveillance', 'accessible'],
    difficulty: 'medium',
    category: 'economics'
  },
  {
    id: 'we-015',
    title: 'Criminal Rehabilitation vs Punishment',
    prompt: 'The primary purpose of the criminal justice system should be rehabilitation rather than punishment. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present the philosophical debate between rehabilitative and punitive approaches to justice.',
      body1: 'Agreement: reduced recidivism, cost-effectiveness, social reintegration, addressing root causes, humane treatment.',
      body2: 'Disagreement: deterrence value, victim justice, public safety, severity of certain crimes, accountability.',
      conclusion: 'A balanced system that prioritises rehabilitation for non-violent offenders while maintaining appropriate consequences for serious crimes serves society best.'
    },
    keyVocabulary: ['recidivism', 'rehabilitation', 'deterrence', 'incarceration', 'reintegration', 'retribution', 'restorative', 'punitive', 'judicial', 'correctional'],
    difficulty: 'hard',
    category: 'sociology'
  },
  {
    id: 'we-016',
    title: 'Foreign Aid Effectiveness',
    prompt: 'Foreign aid does more harm than good in developing countries. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the debate about the effectiveness of international development assistance.',
      body1: 'Aid does good: emergency relief, infrastructure development, healthcare improvements, educational access.',
      body2: 'Aid does harm: dependency creation, corruption enabling, distorting local markets, political conditions.',
      conclusion: 'Aid effectiveness depends on its design, with targeted, transparent, and locally-driven programmes yielding the best outcomes.'
    },
    keyVocabulary: ['bilateral', 'humanitarian', 'sustainable', 'dependency', 'sovereignty', 'corruption', 'infrastructure', 'conditional', 'multilateral', 'empowerment'],
    difficulty: 'hard',
    category: 'politics'
  },
  {
    id: 'we-017',
    title: 'Compulsory Voting',
    prompt: 'Voting should be compulsory in all democratic countries. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce compulsory voting as practised in countries like Australia and Belgium.',
      body1: 'Agreement: higher participation, representative outcomes, civic duty, reduces influence of extremes, legitimacy.',
      body2: 'Disagreement: personal freedom, uninformed voting, administrative burden, not addressing voter apathy root causes.',
      conclusion: 'Compulsory voting strengthens democratic legitimacy, though it should be accompanied by voter education and accessible polling.'
    },
    keyVocabulary: ['democratic', 'participation', 'compulsory', 'electorate', 'mandate', 'legitimacy', 'franchise', 'abstention', 'representation', 'civic'],
    difficulty: 'medium',
    category: 'politics'
  },
  {
    id: 'we-018',
    title: 'Plastic Packaging Ban',
    prompt: 'Governments should ban all plastic packaging to reduce environmental pollution. What problems and solutions does this present?',
    type: 'problem-solution',
    sampleOutline: {
      intro: 'Describe the scale of plastic pollution and the push for packaging bans.',
      body1: 'Problems with banning: food preservation challenges, cost of alternatives, impact on packaging industry, consumer inconvenience.',
      body2: 'Solutions: phased approach, investment in biodegradable alternatives, extended producer responsibility, consumer education.',
      conclusion: 'A phased ban with investment in alternatives and producer responsibility offers the most practical path to reducing plastic pollution.'
    },
    keyVocabulary: ['biodegradable', 'sustainable', 'contamination', 'packaging', 'regulation', 'decompose', 'recyclable', 'pollutant', 'compostable', 'legislation'],
    difficulty: 'medium',
    category: 'environment'
  },
  {
    id: 'we-019',
    title: 'Working from Home',
    prompt: 'Working from home is more beneficial for both employees and employers than working in an office. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the shift to remote work accelerated by the pandemic.',
      body1: 'Agreement: flexibility, reduced commuting, improved productivity for some, cost savings, work-life balance.',
      body2: 'Disagreement: isolation, blurred boundaries, collaboration challenges, inequitable access, career progression impacts.',
      conclusion: 'A hybrid approach that combines the flexibility of remote work with the collaborative benefits of office presence optimises outcomes for both parties.'
    },
    keyVocabulary: ['productivity', 'flexibility', 'collaboration', 'commuting', 'autonomous', 'infrastructure', 'wellbeing', 'accountability', 'hybrid', 'ergonomic'],
    difficulty: 'medium',
    category: 'business'
  },
  {
    id: 'we-020',
    title: 'Arts Education Funding',
    prompt: 'Schools should prioritise STEM subjects (science, technology, engineering, mathematics) over arts and humanities. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the debate about curriculum priorities in modern education systems.',
      body1: 'Agreement: economic demands, technological advancement, job market alignment, national competitiveness.',
      body2: 'Disagreement: creativity and innovation, critical thinking, cultural preservation, well-rounded education, emotional intelligence.',
      conclusion: 'Both STEM and arts education are essential; the most innovative thinkers combine technical knowledge with creative and humanistic perspectives.'
    },
    keyVocabulary: ['curriculum', 'interdisciplinary', 'innovation', 'competitiveness', 'creativity', 'holistic', 'vocational', 'aesthetic', 'cognitive', 'analytical'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-021',
    title: 'Genetic Testing Ethics',
    prompt: 'Employers and insurance companies should have access to individuals\' genetic test results. Discuss the advantages and disadvantages.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Introduce genetic testing capabilities and the ethical debate about data access.',
      body1: 'Advantages: informed risk assessment, workplace safety, personalised insurance, preventive health measures.',
      body2: 'Disadvantages: genetic discrimination, privacy violations, deterministic misinterpretation, psychological impact, inequality.',
      conclusion: 'Genetic information should be protected from employer and insurer access to prevent discrimination, with legislation like GINA serving as models.'
    },
    keyVocabulary: ['discrimination', 'predisposition', 'confidentiality', 'genetic', 'ethical', 'deterministic', 'legislation', 'consent', 'genomic', 'predatory'],
    difficulty: 'hard',
    category: 'science'
  },
  {
    id: 'we-022',
    title: 'Tourism Impact',
    prompt: 'International tourism creates more problems than benefits for developing countries. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present tourism as a major economic sector in developing nations with complex impacts.',
      body1: 'Problems: environmental degradation, cultural commodification, economic leakage, displacement of locals, seasonal employment.',
      body2: 'Benefits: employment, infrastructure development, cultural exchange, foreign exchange earnings, heritage preservation incentives.',
      conclusion: 'Sustainable tourism management that prioritises local communities and environmental protection can maximise benefits while minimising harm.'
    },
    keyVocabulary: ['sustainable', 'ecotourism', 'commodification', 'infrastructure', 'heritage', 'exploitation', 'revenue', 'degradation', 'authentic', 'indigenous'],
    difficulty: 'medium',
    category: 'economics'
  },
  {
    id: 'we-023',
    title: 'Universal Basic Income',
    prompt: 'Universal basic income is the best way to address poverty and inequality in the 21st century. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Define UBI and contextualise within current poverty and inequality discussions.',
      body1: 'Agreement: poverty floor, freedom to pursue education, entrepreneurial encouragement, simplifies welfare, addresses automation.',
      body2: 'Disagreement: fiscal sustainability, inflation risk, work disincentives, political feasibility, better-targeted alternatives.',
      conclusion: 'While UBI shows promise as a safety net, its effectiveness depends on funding models and complementary social programmes.'
    },
    keyVocabulary: ['redistribution', 'fiscal', 'inflation', 'incentive', 'welfare', 'subsistence', 'equitable', 'bureaucratic', 'universal', 'entrepreneurial'],
    difficulty: 'hard',
    category: 'economics'
  },
  {
    id: 'we-024',
    title: 'Animal Testing',
    prompt: 'Animal testing for medical research should be banned. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the ethical debate surrounding animal testing in medical research.',
      body1: 'For banning: animal suffering, questionable cross-species applicability, availability of alternatives, ethical principles.',
      body2: 'Against banning: historical medical breakthroughs, lack of complete alternatives, human safety priority, regulatory requirements.',
      conclusion: 'Research should progressively reduce animal testing through investment in alternatives while maintaining essential safety testing until viable replacements exist.'
    },
    keyVocabulary: ['ethical', 'vivisection', 'pharmaceutical', 'humane', 'efficacy', 'alternative', 'regulatory', 'sentient', 'bioethics', 'paradigm'],
    difficulty: 'medium',
    category: 'science'
  },
  {
    id: 'we-025',
    title: 'Single-Use Technology',
    prompt: 'Technology companies deliberately design products with short lifespans to increase sales. What problems does this cause and what solutions can you suggest?',
    type: 'problem-solution',
    sampleOutline: {
      intro: 'Introduce planned obsolescence as a business strategy in the technology industry.',
      body1: 'Problems: electronic waste, consumer costs, resource depletion, environmental pollution, unethical practice.',
      body2: 'Solutions: right-to-repair legislation, extended warranty mandates, modular design incentives, e-waste recycling programmes.',
      conclusion: 'Legislative action combined with consumer awareness can shift the industry toward more sustainable product design.'
    },
    keyVocabulary: ['obsolescence', 'sustainable', 'longevity', 'modular', 'consumption', 'legislation', 'warranty', 'recyclable', 'e-waste', 'circular'],
    difficulty: 'medium',
    category: 'technology'
  },
  {
    id: 'we-026',
    title: 'Cultural Heritage Preservation',
    prompt: 'In an era of globalisation, it is more important than ever to preserve cultural heritage and traditions. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Discuss globalisation\'s impact on cultural identity and the importance of heritage preservation.',
      body1: 'Agreement: identity, diversity, historical knowledge, tourism value, intergenerational connection.',
      body2: 'Counterargument: cultures naturally evolve, selective preservation, resource allocation, risk of isolationism.',
      conclusion: 'Preserving cultural heritage enriches global diversity while allowing cultures to naturally evolve and adapt to modern contexts.'
    },
    keyVocabulary: ['heritage', 'globalisation', 'homogenisation', 'indigenous', 'preservation', 'identity', 'intangible', 'assimilation', 'authentic', 'revitalisation'],
    difficulty: 'medium',
    category: 'arts'
  },
  {
    id: 'we-027',
    title: 'Elderly Care Responsibility',
    prompt: 'The responsibility for looking after elderly people should lie with the family, not the government. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the challenge of elderly care in the context of ageing populations.',
      body1: 'Family responsibility: emotional support, cultural expectations, personalised care, strengthening family bonds.',
      body2: 'Government responsibility: professional care quality, financial burden on families, changing family structures, equity of access.',
      conclusion: 'A partnership model where government provides infrastructure and funding while families contribute emotional support and involvement offers the most effective care.'
    },
    keyVocabulary: ['demographic', 'dependency', 'institutional', 'filial', 'subsidise', 'residential', 'gerontology', 'palliative', 'intergenerational', 'welfare'],
    difficulty: 'medium',
    category: 'sociology'
  },
  {
    id: 'we-028',
    title: 'Electric Vehicles',
    prompt: 'Governments should ban the sale of petrol and diesel cars by 2030 to combat climate change. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present the push for electric vehicle adoption and proposed bans on fossil fuel cars.',
      body1: 'Agreement: emission reduction, technological readiness, improving battery technology, public health benefits.',
      body2: 'Disagreement: infrastructure readiness, affordability concerns, manufacturing emissions, grid capacity, rural access.',
      conclusion: 'A phased approach with 2035 targets, accompanied by infrastructure investment and affordability programmes, is more realistic and equitable.'
    },
    keyVocabulary: ['electrification', 'infrastructure', 'emissions', 'sustainable', 'renewable', 'grid', 'subsidise', 'transition', 'feasibility', 'carbon-neutral'],
    difficulty: 'medium',
    category: 'environment'
  },
  {
    id: 'we-029',
    title: 'Privacy in the Digital Age',
    prompt: 'People today have little expectation of privacy, and this is a price worth paying for the benefits of digital technology. Discuss both perspectives.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the trade-off between digital convenience and privacy in modern society.',
      body1: 'Privacy loss is acceptable: personalised services, security improvements, convenience, medical research benefits.',
      body2: 'Privacy must be protected: identity theft, manipulation, surveillance, fundamental right, corporate exploitation.',
      conclusion: 'Privacy is a fundamental right that can coexist with technological benefits through strong data protection laws and informed user consent.'
    },
    keyVocabulary: ['surveillance', 'encryption', 'consent', 'algorithm', 'exploitation', 'transparency', 'anonymity', 'biometric', 'legislation', 'autonomy'],
    difficulty: 'hard',
    category: 'technology'
  },
  {
    id: 'we-030',
    title: 'Online Education Quality',
    prompt: 'Online education can never be as effective as face-to-face learning. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Contextualise the growth of online education and debates about its effectiveness.',
      body1: 'Agreement: lack of social interaction, self-discipline challenges, practical skill limitations, digital fatigue.',
      body2: 'Disagreement: flexibility, accessibility, personalised pacing, technology-enhanced learning, global access to expertise.',
      conclusion: 'Online education can be equally effective for many subjects when well-designed, though certain disciplines benefit from in-person interaction.'
    },
    keyVocabulary: ['pedagogy', 'synchronous', 'asynchronous', 'interactive', 'accessible', 'engagement', 'curriculum', 'autonomous', 'collaborative', 'multimedia'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-031',
    title: 'Wealth Tax',
    prompt: 'Governments should impose a wealth tax on the richest individuals to reduce inequality. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the concept of wealth taxation in the context of rising global inequality.',
      body1: 'Agreement: funding public services, reducing inequality, democratic legitimacy, addressing wealth concentration.',
      body2: 'Disagreement: capital flight, administrative complexity, double taxation, impact on investment, constitutional challenges.',
      conclusion: 'A carefully designed wealth tax with international coordination can help address extreme inequality without significant capital flight.'
    },
    keyVocabulary: ['progressive', 'redistribution', 'fiscal', 'exemption', 'jurisdiction', 'capital', 'inequality', 'revenue', 'compliance', 'equitable'],
    difficulty: 'hard',
    category: 'economics'
  },
  {
    id: 'we-032',
    title: 'Mental Health in Schools',
    prompt: 'Schools should be required to provide mental health education and counselling services to all students. What are the advantages and disadvantages?',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Highlight the growing mental health crisis among young people and schools\' potential role.',
      body1: 'Advantages: early intervention, destigmatisation, improved academic outcomes, peer support development.',
      body2: 'Disadvantages: resource requirements, staff training, privacy concerns, scope of school responsibility, funding.',
      conclusion: 'The benefits of school-based mental health support strongly outweigh the costs, requiring investment in trained professionals and appropriate programmes.'
    },
    keyVocabulary: ['counselling', 'stigma', 'intervention', 'resilience', 'wellbeing', 'therapeutic', 'psychoeducation', 'preventive', 'holistic', 'safeguarding'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-033',
    title: 'Fast Fashion Impact',
    prompt: 'The fashion industry\'s emphasis on fast, cheap clothing causes significant environmental and social harm. What problems does this create and what solutions would you suggest?',
    type: 'problem-solution',
    sampleOutline: {
      intro: 'Describe the scale of the fast fashion industry and its environmental footprint.',
      body1: 'Problems: textile waste, water pollution, exploitative labour, carbon emissions, microplastic pollution.',
      body2: 'Solutions: sustainable fashion incentives, consumer awareness, regulation of labour standards, circular fashion models.',
      conclusion: 'Addressing fast fashion requires both regulatory action on production practices and consumer education to shift purchasing habits toward sustainability.'
    },
    keyVocabulary: ['sustainable', 'exploitation', 'textile', 'ethical', 'biodegradable', 'consumption', 'circular', 'transparency', 'sweatshop', 'microfibre'],
    difficulty: 'medium',
    category: 'environment'
  },
  {
    id: 'we-034',
    title: 'Bilingual Education',
    prompt: 'All children should be required to learn a second language from an early age. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present the cognitive and cultural benefits of early bilingual education.',
      body1: 'Agreement: cognitive development, cultural awareness, career advantages, cognitive flexibility, brain health.',
      body2: 'Disagreement: resource requirements, competing curriculum priorities, teacher availability, potential academic delay.',
      conclusion: 'Early language learning offers significant cognitive and social benefits that justify the investment in qualified teachers and programme development.'
    },
    keyVocabulary: ['bilingual', 'cognitive', 'acquisition', 'immersion', 'proficiency', 'intercultural', 'pedagogy', 'multilingual', 'linguistic', 'competence'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-035',
    title: 'Data Privacy Regulation',
    prompt: 'Strict data privacy laws hinder technological innovation and economic growth. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Introduce the tension between data privacy regulation and technological innovation.',
      body1: 'Regulation hinders innovation: compliance costs, reduced data availability, competitive disadvantage, slower development.',
      body2: 'Regulation supports innovation: consumer trust, fair competition, quality data, sustainable business models.',
      conclusion: 'Well-designed privacy regulations that are proportionate and technology-neutral can protect individuals while fostering responsible innovation.'
    },
    keyVocabulary: ['regulation', 'compliance', 'innovation', 'transparency', 'consent', 'algorithmic', 'proportionate', 'enforceable', 'sovereignty', 'governance'],
    difficulty: 'hard',
    category: 'technology'
  },
  {
    id: 'we-036',
    title: 'Ageing Workforce',
    prompt: 'The retirement age should be raised to 70 in all countries to address the economic challenges of ageing populations. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Contextualise the demographic pressure on pension systems and labour markets.',
      body1: 'Agreement: fiscal sustainability, increased life expectancy, experience retention, reduced dependency ratios.',
      body2: 'Disagreement: health limitations, youth unemployment, physically demanding jobs, inequality of life expectancy.',
      conclusion: 'A flexible approach with gradual retirement options based on occupation type and individual capacity is more equitable than a uniform age increase.'
    },
    keyVocabulary: ['demographic', 'dependency', 'fiscal', 'longevity', 'pension', 'sustainability', 'workforce', 'productivity', 'equitable', 'occupational'],
    difficulty: 'medium',
    category: 'economics'
  },
  {
    id: 'we-037',
    title: 'Free Speech Limits',
    prompt: 'Freedom of speech should have limits to prevent the spread of hate speech and misinformation. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present freedom of speech as a fundamental right with contested boundaries.',
      body1: 'Agreement: protecting vulnerable groups, preventing violence incitement, maintaining social cohesion, democratic health.',
      body2: 'Disagreement: censorship risks, definition challenges, chilling effects, governmental overreach, marketplace of ideas.',
      conclusion: 'Reasonable limits on speech that incites violence or targets protected groups can coexist with robust free expression when governed by transparent, independent institutions.'
    },
    keyVocabulary: ['censorship', 'incitement', 'constitutional', 'defamation', 'misinformation', 'pluralistic', 'democratic', 'jurisprudence', 'proportionate', 'fundamental'],
    difficulty: 'hard',
    category: 'politics'
  },
  {
    id: 'we-038',
    title: 'Organ Donation System',
    prompt: 'All citizens should be considered organ donors unless they explicitly opt out. Discuss the advantages and disadvantages of this system.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Describe the organ shortage crisis and the opt-out donation system proposal.',
      body1: 'Advantages: increased organ availability, saving lives, reduced waiting lists, presumed societal benefit.',
      body2: 'Disadvantages: bodily autonomy concerns, religious objections, family distress, informed consent issues.',
      conclusion: 'Opt-out systems significantly increase donation rates and save lives; when combined with family consultation and education, they can respect autonomy while addressing organ shortages.'
    },
    keyVocabulary: ['consent', 'autonomy', 'ethical', 'transplant', 'presumed', 'legislative', 'mandate', 'altruistic', 'procurement', 'moratorium'],
    difficulty: 'medium',
    category: 'health'
  },
  {
    id: 'we-039',
    title: 'Multinational Corporation Tax',
    prompt: 'Multinational corporations should be required to pay taxes in the countries where they earn their profits, not just where they are headquartered. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Describe the problem of corporate tax avoidance through profit shifting.',
      body1: 'Agreement: fairness, revenue for developing countries, reducing inequality, level playing field for domestic businesses.',
      body2: 'Disagreement: implementation complexity, competitive disadvantage, double taxation, relocation risk.',
      conclusion: 'International coordination through frameworks like the OECD global minimum tax is essential to ensure fair corporate taxation across jurisdictions.'
    },
    keyVocabulary: ['jurisdiction', 'multinational', 'fiscal', 'evasion', 'transparency', 'compliance', 'sovereignty', 'bilateral', 'equitable', 'harmonisation'],
    difficulty: 'hard',
    category: 'economics'
  },
  {
    id: 'we-040',
    title: 'Sport and National Identity',
    prompt: 'International sporting events such as the Olympics bring more benefits than problems to host countries. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce major sporting events and their claimed benefits for host nations.',
      body1: 'Benefits: infrastructure development, tourism, national pride, international visibility, urban regeneration.',
      body2: 'Problems: cost overruns, displacement of communities, white elephant facilities, debt burden, corruption.',
      conclusion: 'Benefits are achievable when host nations plan for legacy use and community impact, though the current model frequently fails to deliver equitable outcomes.'
    },
    keyVocabulary: ['infrastructure', 'regeneration', 'legacy', 'expenditure', 'displacement', 'sustainable', 'procurement', 'prestigious', 'commerce', 'sovereignty'],
    difficulty: 'medium',
    category: 'sociology'
  },
  {
    id: 'we-041',
    title: 'Parental Leave Policy',
    prompt: 'Both parents should receive equal paid parental leave. Discuss the advantages and disadvantages.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Introduce parental leave policies and the push for gender equality in caregiving.',
      body1: 'Advantages: gender equality, child development, reduced career penalty for mothers, shifting cultural norms.',
      body2: 'Disadvantages: business costs, uptake challenges, biological considerations, cultural resistance.',
      conclusion: 'Equal paid parental leave promotes gender equality and benefits children; incentivised policies rather than mandates may encourage greater uptake.'
    },
    keyVocabulary: ['equitable', 'caregiving', 'paternal', 'incentivise', 'discrimination', 'statutory', 'bonding', 'workforce', 'progressive', 'sustainable'],
    difficulty: 'medium',
    category: 'sociology'
  },
  {
    id: 'we-042',
    title: 'Artificial Meat',
    prompt: 'Laboratory-grown meat will solve the environmental problems caused by traditional animal farming. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce lab-grown meat technology and its potential environmental benefits.',
      body1: 'Agreement: reduced emissions, land use, water consumption, animal welfare, scalability potential.',
      body2: 'Disagreement: energy-intensive production, consumer acceptance, economic impact on farmers, nutrition questions.',
      conclusion: 'Lab-grown meat can contribute to environmental goals but should be part of a broader strategy including dietary shifts and sustainable farming practices.'
    },
    keyVocabulary: ['cultivation', 'sustainable', 'scalable', 'emissions', 'cellular', 'conventional', 'palatable', 'regulatory', 'viable', 'transition'],
    difficulty: 'medium',
    category: 'science'
  },
  {
    id: 'we-043',
    title: 'Minimum Wage Debate',
    prompt: 'Raising the minimum wage significantly would do more harm than good to the economy. Discuss both views and give your opinion.',
    type: 'discuss-both',
    sampleOutline: {
      intro: 'Present the ongoing debate about minimum wage levels and economic impacts.',
      body1: 'More harm: job losses, business closures, price increases, reduced hiring, automation incentive.',
      body2: 'More good: reduced poverty, increased consumer spending, reduced inequality, improved productivity, reduced turnover.',
      conclusion: 'Moderate, gradual increases in the minimum wage, indexed to local cost of living, can reduce poverty without significant negative economic effects.'
    },
    keyVocabulary: ['inflation', 'employment', 'productivity', 'subsistence', 'redistribution', 'competitive', 'incremental', 'remuneration', 'equitable', 'fiscal'],
    difficulty: 'medium',
    category: 'economics'
  },
  {
    id: 'we-044',
    title: 'Homework Abolition',
    prompt: 'Homework should be abolished in primary and secondary schools. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce the debate about homework effectiveness and student wellbeing.',
      body1: 'Agreement: stress reduction, family time, limited evidence of effectiveness in primary school, equity issues.',
      body2: 'Disagreement: reinforces learning, develops discipline, preparation for higher education, parental engagement.',
      conclusion: 'Reducing homework in primary school while maintaining meaningful, purposeful assignments in secondary school offers the best balance.'
    },
    keyVocabulary: ['academic', 'autonomous', 'consolidation', 'curriculum', 'differentiated', 'engagement', 'formative', 'intrinsic', 'pedagogy', 'wellbeing'],
    difficulty: 'medium',
    category: 'education'
  },
  {
    id: 'we-045',
    title: 'Water Privatisation',
    prompt: 'Access to clean water is a basic human right, and water services should never be privatised. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present water as both a human right and an economic resource requiring management.',
      body1: 'Agreement: fundamental right, equity concerns, profit motive conflicts, historical failures of privatisation.',
      body2: 'Disagreement: investment needs, efficiency improvements, public sector failures, regulated private provision.',
      conclusion: 'Water as a human right requires public oversight, though regulated private sector involvement can improve service delivery when properly governed.'
    },
    keyVocabulary: ['privatisation', 'infrastructure', 'equitable', 'regulatory', 'commodification', 'municipal', 'sanitation', 'accountability', 'sustainable', 'concession'],
    difficulty: 'hard',
    category: 'politics'
  },
  {
    id: 'we-046',
    title: 'Autonomous Vehicles',
    prompt: 'Self-driving cars will transform urban transportation for the better. Discuss the advantages and disadvantages.',
    type: 'advantages-disadvantages',
    sampleOutline: {
      intro: 'Introduce autonomous vehicle technology and its potential impact on urban mobility.',
      body1: 'Advantages: accident reduction, traffic optimisation, accessibility for disabled, reduced parking needs.',
      body2: 'Disadvantages: job losses, cybersecurity risks, ethical dilemmas, infrastructure costs, liability questions.',
      conclusion: 'Autonomous vehicles offer transformative potential, but realising benefits requires addressing safety, liability, and workforce transition challenges.'
    },
    keyVocabulary: ['autonomous', 'infrastructure', 'algorithm', 'liability', 'cybersecurity', 'accessibility', 'congestion', 'regulation', 'disruptive', 'sustainable'],
    difficulty: 'medium',
    category: 'technology'
  },
  {
    id: 'we-047',
    title: 'Celebrity Influence',
    prompt: 'Celebrities have too much influence on young people today. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Discuss the role of celebrities in shaping youth culture and aspirations.',
      body1: 'Agreement: unrealistic expectations, materialism, risky behaviour promotion, attention over substance.',
      body2: 'Disagreement: positive role models, social cause awareness, inspiration, media literacy can mitigate.',
      conclusion: 'Celebrity influence is neither wholly positive nor negative; media literacy education can help young people critically evaluate celebrity messaging.'
    },
    keyVocabulary: ['aspirational', 'materialistic', 'impressionable', 'endorsement', 'authentic', 'advocacy', 'consumerism', 'parasocial', 'influential', 'susceptible'],
    difficulty: 'medium',
    category: 'sociology'
  },
  {
    id: 'we-048',
    title: 'Endangered Language Preservation',
    prompt: 'Governments should invest heavily in preserving endangered languages, even if only a small number of people speak them. Do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Present language extinction as a cultural and intellectual loss.',
      body1: 'Agreement: cultural heritage, unique knowledge systems, identity, linguistic diversity, scientific value.',
      body2: 'Disagreement: cost effectiveness, natural linguistic evolution, limited speakers, competing priorities.',
      conclusion: 'Preserving endangered languages is a worthwhile investment in human heritage, using cost-effective methods like digital documentation and community programmes.'
    },
    keyVocabulary: ['linguistic', 'revitalisation', 'indigenous', 'heritage', 'documentation', 'assimilation', 'diversity', 'intangible', 'vernacular', 'bilingual'],
    difficulty: 'medium',
    category: 'arts'
  },
  {
    id: 'we-049',
    title: 'Pandemic Preparedness',
    prompt: 'The world is not adequately prepared for the next global pandemic. What problems exist and what solutions would you propose?',
    type: 'problem-solution',
    sampleOutline: {
      intro: 'Reflect on COVID-19 lessons and ongoing pandemic preparedness gaps.',
      body1: 'Problems: underfunded health systems, slow response mechanisms, vaccine inequality, misinformation, political fragmentation.',
      body2: 'Solutions: global surveillance networks, regional stockpiles, equitable vaccine distribution, international cooperation frameworks.',
      conclusion: 'Investing in global health infrastructure and international cooperation now is far cheaper than responding to the next pandemic unprepared.'
    },
    keyVocabulary: ['pandemic', 'surveillance', 'infrastructure', 'equitable', 'vaccination', 'preparedness', 'cooperation', 'resilience', 'quarantine', 'epidemiological'],
    difficulty: 'hard',
    category: 'health'
  },
  {
    id: 'we-050',
    title: 'Happiness as a Policy Goal',
    prompt: 'Governments should measure success by citizens\' happiness rather than economic growth. To what extent do you agree or disagree?',
    type: 'agree-disagree',
    sampleOutline: {
      intro: 'Introduce alternatives to GDP as measures of national success, such as GNH and wellbeing indices.',
      body1: 'Agreement: holistic measurement, policy alignment with citizen needs, environmental sustainability, Bhutan\'s GNH model.',
      body2: 'Disagreement: subjective measurement challenges, economic growth enables wellbeing, cultural variation, implementation difficulty.',
      conclusion: 'Incorporating happiness metrics alongside economic indicators provides a more comprehensive picture of national progress and can guide more humane policies.'
    },
    keyVocabulary: ['subjective', 'holistic', 'indicator', 'sustainable', 'wellbeing', 'quantitative', 'qualitative', 'prosperity', 'utilitarian', 'governance'],
    difficulty: 'medium',
    category: 'politics'
  }
];

// -----------------------------------------------------------------------------
// 3. WRITING TIPS
// -----------------------------------------------------------------------------
const WRITING_TIPS = {
  general: [
    'Read the entire passage or prompt carefully before starting to write — understanding is the foundation of a good response.',
    'Manage your time strictly: allocate the first 2 minutes for reading and planning, and leave 1 minute for review.',
    'Use formal, academic language throughout. Avoid contractions (don\'t, can\'t) and colloquialisms.',
    'Vary your sentence structure by combining simple, compound, and complex sentences.',
    'Always proofread for spelling and grammar errors before submitting — these are easy marks to lose.',
    'Use precise vocabulary rather than vague or general words to demonstrate language range.',
    'Ensure coherence by using linking words and phrases to connect ideas logically.',
    'Write legibly and clearly — in the actual exam, illegible text cannot be scored.',
    'Practise with a timer to build speed and familiarity with time pressure.',
    'Focus on quality over quantity — a concise, well-structured response scores higher than a long, rambling one.'
  ],
  summarizeWrittenText: [
    'Your summary MUST be a single sentence — use semicolons, relative clauses, and participial phrases to combine ideas.',
    'Identify the main idea first, then the 2-3 most important supporting points.',
    'Begin with the main argument or finding of the passage, not with minor details.',
    'Use reporting verbs like "demonstrates", "reveals", "indicates", and "suggests" to introduce ideas.',
    'Stay within 50-75 words for optimal scoring — too short or too long affects your Form score.',
    'Paraphrase the original text; do not copy phrases verbatim from the passage.',
    'Use connectors like "while", "although", "which", "thereby", and "resulting in" to link clauses within your sentence.',
    'Check that your sentence is grammatically complete with a subject, verb, and proper punctuation.',
    'Include key concepts from different parts of the passage, not just the introduction or conclusion.',
    'End with a full stop — forgetting punctuation can cost you marks on Form.'
  ],
  writeEssay: [
    'Structure your essay with a clear introduction (2-3 sentences), two body paragraphs (3-5 sentences each), and a conclusion (2-3 sentences).',
    'State your position clearly in the introduction — the examiner should know your stance from the first paragraph.',
    'Each body paragraph should have a clear topic sentence followed by supporting evidence and examples.',
    'Use specific examples and evidence to support your arguments, not just general statements.',
    'Address the counter-argument in one paragraph to demonstrate balanced thinking and critical analysis.',
    'Write between 200-300 words — going under or over significantly affects your Form score.',
    'Use a range of cohesive devices: moreover, furthermore, however, nevertheless, consequently, in contrast.',
    'Conclude by restating your position and summarising key arguments without introducing new ideas.',
    'Avoid memorised templates that sound unnatural — develop flexible sentence patterns instead.',
    'Use academic vocabulary from the prompt\'s topic area to demonstrate relevant lexical range.'
  ]
};

// -----------------------------------------------------------------------------
// 4. ACADEMIC VOCABULARY (100 items)
// -----------------------------------------------------------------------------
const ACADEMIC_VOCABULARY = [
  { word: 'analyse', definition: 'To examine something in detail in order to understand or explain it', example: 'Researchers analyse data from multiple sources to draw valid conclusions.', synonyms: ['examine', 'investigate', 'evaluate'] },
  { word: 'assess', definition: 'To evaluate or estimate the nature, ability, or quality of something', example: 'Educators must assess student learning through a variety of methods.', synonyms: ['evaluate', 'appraise', 'gauge'] },
  { word: 'constitute', definition: 'To be a part of a whole; to make up or form', example: 'Women constitute approximately 51 percent of the global population.', synonyms: ['comprise', 'compose', 'represent'] },
  { word: 'demonstrate', definition: 'To show clearly by giving proof or evidence', example: 'The experiment demonstrated that the new treatment was more effective.', synonyms: ['illustrate', 'exhibit', 'substantiate'] },
  { word: 'establish', definition: 'To set up on a firm or permanent basis; to prove beyond doubt', example: 'The study aimed to establish a causal relationship between diet and disease.', synonyms: ['found', 'institute', 'verify'] },
  { word: 'facilitate', definition: 'To make an action or process easier or more achievable', example: 'Technology facilitates communication across geographical boundaries.', synonyms: ['enable', 'promote', 'expedite'] },
  { word: 'generate', definition: 'To produce or create something', example: 'Renewable energy sources generate electricity without carbon emissions.', synonyms: ['produce', 'create', 'yield'] },
  { word: 'hypothesise', definition: 'To propose an explanation as a starting point for investigation', example: 'Scientists hypothesised that the compound could inhibit tumour growth.', synonyms: ['theorise', 'postulate', 'conjecture'] },
  { word: 'implement', definition: 'To put a decision, plan, or agreement into effect', example: 'The government plans to implement new environmental regulations next year.', synonyms: ['execute', 'enforce', 'enact'] },
  { word: 'justify', definition: 'To show or prove to be right or reasonable', example: 'The researchers had to justify their methodology to the ethics committee.', synonyms: ['validate', 'substantiate', 'warrant'] },
  { word: 'acknowledge', definition: 'To accept or recognise the existence or truth of something', example: 'The report acknowledged the limitations of the study\'s sample size.', synonyms: ['recognise', 'concede', 'admit'] },
  { word: 'allocate', definition: 'To distribute resources for a particular purpose', example: 'Governments must allocate sufficient funding to public healthcare systems.', synonyms: ['assign', 'distribute', 'designate'] },
  { word: 'attribute', definition: 'To regard something as being caused by a particular factor', example: 'Experts attribute rising sea levels to the melting of polar ice caps.', synonyms: ['ascribe', 'credit', 'assign'] },
  { word: 'coincide', definition: 'To occur at the same time or place', example: 'The economic downturn coincided with a period of political instability.', synonyms: ['correspond', 'concur', 'synchronise'] },
  { word: 'complement', definition: 'To add to something in a way that improves or enhances it', example: 'Online resources complement traditional classroom instruction effectively.', synonyms: ['supplement', 'enhance', 'augment'] },
  { word: 'comprise', definition: 'To consist of; to be made up of', example: 'The committee comprises experts from diverse academic disciplines.', synonyms: ['consist of', 'include', 'encompass'] },
  { word: 'considerable', definition: 'Notably large in size, amount, or extent', example: 'The project required a considerable investment of time and resources.', synonyms: ['substantial', 'significant', 'appreciable'] },
  { word: 'contradict', definition: 'To be in conflict or at variance with something', example: 'New findings contradicted the conclusions of the previous research.', synonyms: ['dispute', 'refute', 'counter'] },
  { word: 'contribute', definition: 'To give something in order to help achieve something or add to something', example: 'Many factors contribute to the development of chronic diseases.', synonyms: ['provide', 'furnish', 'add'] },
  { word: 'controversial', definition: 'Giving rise to disagreement or public debate', example: 'The use of genetically modified organisms remains a controversial topic.', synonyms: ['contentious', 'debatable', 'divisive'] },
  { word: 'conventional', definition: 'Based on or in accordance with general agreement or accepted standards', example: 'Conventional farming methods rely heavily on chemical fertilisers.', synonyms: ['traditional', 'orthodox', 'established'] },
  { word: 'correlate', definition: 'To have a mutual relationship or connection between two things', example: 'Higher education levels strongly correlate with increased earning potential.', synonyms: ['correspond', 'relate', 'associate'] },
  { word: 'criterion', definition: 'A standard by which something is judged or decided', example: 'The primary criterion for selection was academic achievement.', synonyms: ['standard', 'benchmark', 'measure'] },
  { word: 'crucial', definition: 'Of great importance; decisive or critical', example: 'Early intervention is crucial in preventing the escalation of mental health conditions.', synonyms: ['essential', 'vital', 'pivotal'] },
  { word: 'decline', definition: 'To decrease in quantity, quality, or importance', example: 'Biodiversity has declined significantly over the past century.', synonyms: ['decrease', 'diminish', 'deteriorate'] },
  { word: 'derive', definition: 'To obtain something from a specified source', example: 'Many modern medicines are derived from natural plant compounds.', synonyms: ['obtain', 'extract', 'acquire'] },
  { word: 'deteriorate', definition: 'To become progressively worse', example: 'Air quality continues to deteriorate in rapidly industrialising cities.', synonyms: ['decline', 'degrade', 'worsen'] },
  { word: 'diminish', definition: 'To make or become less; to reduce', example: 'Climate change threatens to diminish agricultural productivity worldwide.', synonyms: ['reduce', 'decrease', 'lessen'] },
  { word: 'distinct', definition: 'Recognisably different in nature; separate', example: 'The study identified three distinct patterns of consumer behaviour.', synonyms: ['separate', 'discrete', 'different'] },
  { word: 'distort', definition: 'To give a misleading account or impression of something', example: 'Media coverage can distort public perception of scientific research.', synonyms: ['misrepresent', 'skew', 'falsify'] },
  { word: 'dominate', definition: 'To have a commanding influence on; to be the most important element', example: 'Technology companies dominate the global stock market indices.', synonyms: ['control', 'prevail', 'govern'] },
  { word: 'elaborate', definition: 'To develop or present in detail', example: 'The researcher elaborated on the methodology used in the experiment.', synonyms: ['expand', 'detail', 'elucidate'] },
  { word: 'eliminate', definition: 'To completely remove or get rid of something', example: 'Vaccination programmes have helped eliminate several infectious diseases.', synonyms: ['eradicate', 'remove', 'abolish'] },
  { word: 'emerge', definition: 'To come into view or existence; to become apparent', example: 'New challenges emerge as technology continues to advance rapidly.', synonyms: ['appear', 'surface', 'arise'] },
  { word: 'empirical', definition: 'Based on observation or experience rather than theory', example: 'Empirical evidence supports the effectiveness of early childhood education.', synonyms: ['observational', 'experimental', 'experiential'] },
  { word: 'enhance', definition: 'To intensify, increase, or further improve the quality or value of something', example: 'Regular physical exercise can significantly enhance cognitive function.', synonyms: ['improve', 'augment', 'strengthen'] },
  { word: 'ensure', definition: 'To make certain that something happens or is the case', example: 'Governments must ensure equitable access to quality healthcare.', synonyms: ['guarantee', 'secure', 'safeguard'] },
  { word: 'erode', definition: 'To gradually wear away or diminish', example: 'Public trust in institutions has eroded over the past two decades.', synonyms: ['wear away', 'undermine', 'diminish'] },
  { word: 'evaluate', definition: 'To form an idea of the amount, number, or value of something', example: 'Researchers evaluate the impact of policy interventions using longitudinal data.', synonyms: ['assess', 'appraise', 'judge'] },
  { word: 'evident', definition: 'Plain or obvious; clearly seen or understood', example: 'It is evident that climate change requires immediate global action.', synonyms: ['apparent', 'obvious', 'manifest'] },
  { word: 'exacerbate', definition: 'To make a problem, bad situation, or negative feeling worse', example: 'Income inequality exacerbates social tensions and political instability.', synonyms: ['worsen', 'aggravate', 'intensify'] },
  { word: 'exceed', definition: 'To be greater than a number or quantity', example: 'Global temperatures may exceed the two-degree threshold within decades.', synonyms: ['surpass', 'outstrip', 'transcend'] },
  { word: 'exploit', definition: 'To use a situation or resource in a way that is unfair or to maximum advantage', example: 'Companies that exploit workers face increasing public scrutiny.', synonyms: ['utilise', 'manipulate', 'capitalise on'] },
  { word: 'facilitate', definition: 'To make an action or process easy or easier', example: 'Digital platforms facilitate knowledge sharing across borders.', synonyms: ['enable', 'assist', 'expedite'] },
  { word: 'fluctuate', definition: 'To rise and fall irregularly in number or amount', example: 'Oil prices fluctuate significantly in response to geopolitical events.', synonyms: ['vary', 'oscillate', 'vacillate'] },
  { word: 'formulate', definition: 'To create or devise methodically a strategy or proposal', example: 'Policymakers must formulate evidence-based strategies to address inequality.', synonyms: ['devise', 'develop', 'construct'] },
  { word: 'fundamental', definition: 'Forming a necessary base or core; of central importance', example: 'Access to clean water is a fundamental human right.', synonyms: ['essential', 'basic', 'core'] },
  { word: 'hinder', definition: 'To create difficulties that result in delay or obstruction', example: 'Bureaucratic processes often hinder the implementation of innovative policies.', synonyms: ['impede', 'obstruct', 'hamper'] },
  { word: 'implication', definition: 'The conclusion that can be drawn from something though not explicitly stated', example: 'The findings have significant implications for public health policy.', synonyms: ['consequence', 'ramification', 'significance'] },
  { word: 'impose', definition: 'To force something to be accepted or put in place', example: 'Governments impose regulations to protect consumers from harmful products.', synonyms: ['enforce', 'levy', 'mandate'] },
  { word: 'incentive', definition: 'A thing that motivates or encourages someone to do something', example: 'Tax incentives encourage businesses to invest in renewable energy.', synonyms: ['motivation', 'stimulus', 'inducement'] },
  { word: 'incorporate', definition: 'To include something as part of a whole', example: 'Modern curricula incorporate digital literacy across all subject areas.', synonyms: ['include', 'integrate', 'embed'] },
  { word: 'indicate', definition: 'To point out; to serve as a sign or symptom of', example: 'Research indicates that sleep deprivation impairs cognitive performance.', synonyms: ['suggest', 'signal', 'denote'] },
  { word: 'inevitable', definition: 'Certain to happen; unavoidable', example: 'Technological disruption in the labour market is inevitable.', synonyms: ['unavoidable', 'inescapable', 'certain'] },
  { word: 'infrastructure', definition: 'The basic physical and organisational structures needed for operation', example: 'Investment in transport infrastructure stimulates economic growth.', synonyms: ['framework', 'foundation', 'facilities'] },
  { word: 'inherent', definition: 'Existing as a natural or permanent quality of something', example: 'There are inherent risks in any investment strategy.', synonyms: ['intrinsic', 'innate', 'fundamental'] },
  { word: 'inhibit', definition: 'To hinder, restrain, or prevent an action or process', example: 'Excessive regulation can inhibit entrepreneurial innovation.', synonyms: ['restrain', 'suppress', 'impede'] },
  { word: 'initiate', definition: 'To cause a process or action to begin', example: 'The organisation initiated a comprehensive review of its policies.', synonyms: ['commence', 'launch', 'instigate'] },
  { word: 'innovation', definition: 'The introduction of new ideas, methods, or products', example: 'Innovation in renewable energy technology has accelerated dramatically.', synonyms: ['invention', 'advancement', 'breakthrough'] },
  { word: 'integrate', definition: 'To combine one thing with another to form a whole', example: 'Schools are integrating technology into their teaching methodologies.', synonyms: ['incorporate', 'merge', 'unify'] },
  { word: 'interpret', definition: 'To explain the meaning of information or a situation', example: 'Researchers must interpret statistical data carefully to avoid bias.', synonyms: ['construe', 'explain', 'decipher'] },
  { word: 'intervene', definition: 'To come between so as to modify or prevent an action or development', example: 'Early intervention can prevent minor health issues from becoming serious.', synonyms: ['intercede', 'mediate', 'step in'] },
  { word: 'mitigate', definition: 'To make less severe, serious, or painful', example: 'Urban planning strategies can mitigate the effects of heat islands.', synonyms: ['alleviate', 'reduce', 'lessen'] },
  { word: 'monitor', definition: 'To observe and check the progress or quality of something over time', example: 'Health authorities monitor disease outbreaks through surveillance systems.', synonyms: ['track', 'observe', 'oversee'] },
  { word: 'negate', definition: 'To nullify or make ineffective', example: 'Poor implementation can negate the potential benefits of a well-designed policy.', synonyms: ['invalidate', 'nullify', 'counteract'] },
  { word: 'paradigm', definition: 'A typical example or pattern; a model or framework', example: 'The digital revolution has created a new paradigm for information distribution.', synonyms: ['model', 'framework', 'archetype'] },
  { word: 'perceive', definition: 'To become aware of something through the senses; to interpret', example: 'Consumers perceive organic products as healthier and more ethical.', synonyms: ['recognise', 'discern', 'interpret'] },
  { word: 'persist', definition: 'To continue firmly in an opinion or course of action', example: 'Gender disparities persist in many professional fields despite progress.', synonyms: ['continue', 'endure', 'prevail'] },
  { word: 'phenomenon', definition: 'A fact or situation observed to exist or happen', example: 'Climate change is a global phenomenon with localised effects.', synonyms: ['occurrence', 'event', 'development'] },
  { word: 'precedent', definition: 'An earlier event or action that serves as an example or guide', example: 'The court ruling set an important precedent for future cases.', synonyms: ['example', 'model', 'standard'] },
  { word: 'predominant', definition: 'Present as the strongest or main element', example: 'English is the predominant language in international business communications.', synonyms: ['prevailing', 'dominant', 'principal'] },
  { word: 'preliminary', definition: 'Preceding or done in preparation for something more important', example: 'Preliminary findings suggest a correlation between diet and mental health.', synonyms: ['initial', 'introductory', 'preparatory'] },
  { word: 'prevalent', definition: 'Widespread in a particular area or at a particular time', example: 'Antibiotic-resistant infections are becoming increasingly prevalent.', synonyms: ['widespread', 'common', 'pervasive'] },
  { word: 'prohibit', definition: 'To formally forbid something by law, rule, or authority', example: 'Several countries prohibit the use of certain pesticides in agriculture.', synonyms: ['ban', 'forbid', 'outlaw'] },
  { word: 'promote', definition: 'To support or actively encourage a cause or aim', example: 'Educational programmes promote critical thinking and analytical skills.', synonyms: ['encourage', 'advocate', 'foster'] },
  { word: 'proportion', definition: 'A part, share, or number considered in relation to a whole', example: 'A significant proportion of the population lacks access to clean water.', synonyms: ['ratio', 'percentage', 'fraction'] },
  { word: 'prospect', definition: 'The possibility or likelihood of some future event occurring', example: 'The prospect of widespread automation raises concerns about employment.', synonyms: ['possibility', 'likelihood', 'outlook'] },
  { word: 'pursue', definition: 'To follow or chase; to seek to attain or accomplish', example: 'Many graduates pursue further education to enhance career prospects.', synonyms: ['seek', 'strive for', 'undertake'] },
  { word: 'reinforce', definition: 'To strengthen or support with additional material or resources', example: 'The study reinforces the importance of early childhood nutrition.', synonyms: ['strengthen', 'bolster', 'support'] },
  { word: 'relevant', definition: 'Closely connected or appropriate to the matter at hand', example: 'Candidates must demonstrate relevant experience for the position.', synonyms: ['pertinent', 'applicable', 'appropriate'] },
  { word: 'reluctant', definition: 'Unwilling and hesitant; disinclined', example: 'Many companies are reluctant to invest in long-term sustainability measures.', synonyms: ['hesitant', 'unwilling', 'disinclined'] },
  { word: 'require', definition: 'To need something because it is essential or necessary', example: 'Complex social problems require multifaceted policy responses.', synonyms: ['necessitate', 'demand', 'entail'] },
  { word: 'restrict', definition: 'To put a limit on; to keep under control', example: 'Regulations restrict the amount of pollutants that factories can emit.', synonyms: ['limit', 'constrain', 'curtail'] },
  { word: 'retain', definition: 'To continue to have or hold; to keep possession of', example: 'Bilingual individuals retain cognitive flexibility throughout their lives.', synonyms: ['maintain', 'preserve', 'keep'] },
  { word: 'reveal', definition: 'To make previously unknown information known to others', example: 'The survey revealed widespread dissatisfaction with public transport services.', synonyms: ['disclose', 'uncover', 'expose'] },
  { word: 'scrutinise', definition: 'To examine or inspect closely and thoroughly', example: 'Government expenditure should be scrutinised to ensure public accountability.', synonyms: ['examine', 'inspect', 'investigate'] },
  { word: 'significant', definition: 'Sufficiently great or important to be worthy of attention', example: 'There has been a significant increase in renewable energy investment.', synonyms: ['notable', 'substantial', 'considerable'] },
  { word: 'simulate', definition: 'To imitate the conditions of a situation or process', example: 'Computer models simulate climate patterns to predict future changes.', synonyms: ['replicate', 'emulate', 'model'] },
  { word: 'specify', definition: 'To identify clearly and definitely', example: 'The contract specifies the obligations of both parties.', synonyms: ['define', 'stipulate', 'designate'] },
  { word: 'subsequent', definition: 'Coming after something in time; following', example: 'The initial study and all subsequent research confirmed the hypothesis.', synonyms: ['following', 'ensuing', 'succeeding'] },
  { word: 'substantial', definition: 'Of considerable importance, size, or worth', example: 'Substantial evidence supports the link between exercise and mental health.', synonyms: ['significant', 'considerable', 'appreciable'] },
  { word: 'sufficient', definition: 'Enough; adequate for a particular purpose', example: 'There is sufficient evidence to warrant further investigation.', synonyms: ['adequate', 'ample', 'enough'] },
  { word: 'supplement', definition: 'Something added to complete or enhance something else', example: 'Online resources supplement traditional classroom teaching methods.', synonyms: ['complement', 'augment', 'add to'] },
  { word: 'sustain', definition: 'To support, hold, or bear up from below; to maintain over time', example: 'Current agricultural practices cannot sustain a growing global population.', synonyms: ['maintain', 'support', 'uphold'] },
  { word: 'thereby', definition: 'By that means; as a result of that', example: 'The policy reduces emissions, thereby contributing to climate targets.', synonyms: ['consequently', 'thus', 'accordingly'] },
  { word: 'undermine', definition: 'To erode the base or foundation of; to weaken gradually', example: 'Corruption undermines public trust in democratic institutions.', synonyms: ['weaken', 'subvert', 'compromise'] },
  { word: 'undergo', definition: 'To experience or be subjected to something', example: 'The healthcare system has undergone significant reforms in recent years.', synonyms: ['experience', 'endure', 'sustain'] },
  { word: 'utilise', definition: 'To make practical and effective use of something', example: 'Researchers utilise advanced technology to analyse complex datasets.', synonyms: ['employ', 'use', 'harness'] },
  { word: 'validate', definition: 'To check or prove the validity or accuracy of something', example: 'The experiment was designed to validate the theoretical predictions.', synonyms: ['confirm', 'verify', 'substantiate'] },
  { word: 'whereby', definition: 'By which; by means of which', example: 'The programme introduced a system whereby students received personalised feedback.', synonyms: ['by which', 'through which', 'by means of'] }
];

// -----------------------------------------------------------------------------
// 5. CONNECTORS
// -----------------------------------------------------------------------------
const CONNECTORS = {
  addition: [
    'Furthermore', 'Moreover', 'In addition', 'Additionally', 'What is more',
    'Besides', 'Also', 'Likewise', 'Similarly', 'Not only... but also'
  ],
  contrast: [
    'However', 'Nevertheless', 'On the other hand', 'In contrast', 'Conversely',
    'Although', 'Despite', 'Whereas', 'While', 'Notwithstanding'
  ],
  cause: [
    'Because', 'Since', 'As', 'Due to', 'Owing to',
    'On account of', 'Given that', 'Considering that', 'As a result of', 'Stemming from'
  ],
  effect: [
    'Therefore', 'Consequently', 'As a result', 'Thus', 'Hence',
    'Accordingly', 'For this reason', 'It follows that', 'Leading to', 'Resulting in'
  ],
  example: [
    'For example', 'For instance', 'Such as', 'To illustrate', 'Namely',
    'In particular', 'Specifically', 'As demonstrated by', 'A case in point is', 'To exemplify'
  ],
  emphasis: [
    'Indeed', 'In fact', 'Notably', 'Significantly', 'Particularly',
    'Especially', 'Above all', 'Most importantly', 'It should be noted that', 'Undoubtedly'
  ],
  conclusion: [
    'In conclusion', 'To summarise', 'In summary', 'To conclude', 'Overall',
    'On balance', 'Taking everything into account', 'All things considered', 'Ultimately', 'In the final analysis'
  ],
  sequence: [
    'Firstly', 'Secondly', 'Thirdly', 'Subsequently', 'Following this',
    'Next', 'Finally', 'Lastly', 'To begin with', 'In the first place'
  ],
  comparison: [
    'Similarly', 'In the same way', 'Likewise', 'Equally', 'Correspondingly',
    'In comparison', 'By the same token', 'Analogously', 'Just as', 'Comparable to'
  ]
};
