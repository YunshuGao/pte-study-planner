// =============================================================================
// PTE Academic — Re-order Paragraphs Exercise Data
// 80 exercises: 20 Easy (4 sentences), 40 Medium (5 sentences), 20 Hard (5 sentences)
// ES5 JavaScript — var only, no arrow functions, no const/let, no template literals
// Australian English spelling throughout
// =============================================================================

var PTE_REORDER = [];

// =============================================================================
// EASY EXERCISES (4 sentences) — ro001 to ro020
// =============================================================================

PTE_REORDER.push({
  id: "ro001",
  sentences: [
    { label: "A", text: "However, recent studies suggest that this relationship is more complex than previously thought." },
    { label: "B", text: "For decades, scientists believed that increased carbon dioxide levels directly correlated with rising temperatures." },
    { label: "C", text: "These findings have significant implications for climate policy and future environmental predictions." },
    { label: "D", text: "The research indicates that feedback mechanisms in the atmosphere can both amplify and mitigate warming effects." }
  ],
  correctOrder: ["B", "A", "D", "C"],
  topic: "Science",
  difficulty: "easy",
  strategy: "B is the topic sentence (introduces the historical belief with 'For decades'). A follows with 'However' as a direct contrast to that belief. D provides the specific research detail explaining A's claim. C concludes with 'These findings' summarising the broader implications.",
  keyClues: ["'For decades' = historical opener, must come first", "'However' = contrast to B's claim", "'The research indicates' = elaborates on A's mention of 'studies'", "'These findings' = concluding reference to all previous points"]
});

PTE_REORDER.push({
  id: "ro002",
  sentences: [
    { label: "A", text: "This process, known as urbanisation, has accelerated dramatically since the Industrial Revolution." },
    { label: "B", text: "Throughout history, human populations have gradually shifted from rural areas to cities." },
    { label: "C", text: "Today, more than half the world's population resides in urban centres, a figure expected to rise to two-thirds by 2050." },
    { label: "D", text: "As a result, governments worldwide face increasing pressure to develop sustainable urban infrastructure." }
  ],
  correctOrder: ["B", "A", "C", "D"],
  topic: "Sociology",
  difficulty: "easy",
  strategy: "B is the general historical statement introducing the topic. A follows with 'This process' referring directly to the population shift in B. C moves to the present day with 'Today'. D concludes with 'As a result' showing the consequence of C's statistic.",
  keyClues: ["'Throughout history' = broadest time marker, opens the paragraph", "'This process' = refers back to B's description", "'Today' = shifts to present, follows historical context", "'As a result' = cause-effect conclusion"]
});

PTE_REORDER.push({
  id: "ro003",
  sentences: [
    { label: "A", text: "In particular, exposure to natural light has been shown to improve mood and reduce symptoms of depression." },
    { label: "B", text: "A growing body of research highlights the positive effects of spending time in natural environments on mental health." },
    { label: "C", text: "Consequently, many healthcare professionals now recommend regular outdoor activity as part of treatment programmes." },
    { label: "D", text: "Studies conducted across multiple countries have confirmed these benefits in diverse populations." }
  ],
  correctOrder: ["B", "A", "D", "C"],
  topic: "Psychology",
  difficulty: "easy",
  strategy: "B introduces the general topic (nature and mental health). A gives a specific example with 'In particular'. D broadens the evidence with 'Studies conducted across multiple countries' and uses 'these benefits' to refer back. C concludes with 'Consequently' as the practical outcome.",
  keyClues: ["'A growing body of research' = topic introduction", "'In particular' = specific detail following a general claim", "'these benefits' = refers to B and A", "'Consequently' = logical outcome of all previous evidence"]
});

PTE_REORDER.push({
  id: "ro004",
  sentences: [
    { label: "A", text: "The earliest known writing systems emerged in Mesopotamia around 3400 BCE, using cuneiform script on clay tablets." },
    { label: "B", text: "Such innovations eventually led to the development of the printing press, which revolutionised the distribution of knowledge." },
    { label: "C", text: "Over the following millennia, various civilisations developed their own methods of recording information, from papyrus scrolls to bound manuscripts." },
    { label: "D", text: "The history of written communication is one of humanity's most transformative narratives." }
  ],
  correctOrder: ["D", "A", "C", "B"],
  topic: "History",
  difficulty: "easy",
  strategy: "D is the broadest introductory statement about written communication. A provides the first specific historical detail ('earliest known'). C continues the timeline with 'Over the following millennia'. B concludes with 'Such innovations' referring to all the writing methods discussed.",
  keyClues: ["'The history of' = topic sentence framing the entire paragraph", "'earliest known' = first chronological point", "'Over the following millennia' = time progression from A", "'Such innovations' = summarises A and C"]
});

PTE_REORDER.push({
  id: "ro005",
  sentences: [
    { label: "A", text: "Despite its potential, artificial intelligence raises significant ethical concerns about privacy and employment displacement." },
    { label: "B", text: "Artificial intelligence has rapidly evolved from a theoretical concept to a practical tool used across numerous industries." },
    { label: "C", text: "Addressing these challenges will require collaboration between technologists, policymakers, and the wider community." },
    { label: "D", text: "Its applications now range from medical diagnostics to automated customer service and financial analysis." }
  ],
  correctOrder: ["B", "D", "A", "C"],
  topic: "Technology",
  difficulty: "easy",
  strategy: "B introduces AI as the topic with a general statement. D elaborates on B with 'Its applications' (pronoun 'Its' refers to AI in B). A introduces a counterpoint with 'Despite its potential'. C concludes with 'these challenges' referring to A's concerns.",
  keyClues: ["General AI introduction = must come first", "'Its applications' = pronoun ties directly to B's 'Artificial intelligence'", "'Despite its potential' = pivot to concerns after positive points", "'these challenges' = refers to A's ethical concerns"]
});

PTE_REORDER.push({
  id: "ro006",
  sentences: [
    { label: "A", text: "The results demonstrated that students who engaged in regular physical exercise performed significantly better on standardised tests." },
    { label: "B", text: "A landmark study conducted by a leading Australian university examined the relationship between physical fitness and academic achievement." },
    { label: "C", text: "This evidence has prompted several school systems to increase the allocation of time for physical education in their curricula." },
    { label: "D", text: "Researchers tracked over three thousand students across five years, measuring both their fitness levels and academic progress." }
  ],
  correctOrder: ["B", "D", "A", "C"],
  topic: "Education",
  difficulty: "easy",
  strategy: "B introduces the study (topic sentence). D provides methodology details ('Researchers tracked'). A presents the results ('The results demonstrated'). C gives the practical impact with 'This evidence' referring back to A's findings.",
  keyClues: ["'A landmark study' = introduces the research topic", "'Researchers tracked' = methodology follows introduction", "'The results demonstrated' = results follow methodology", "'This evidence' = refers to A's results"]
});

PTE_REORDER.push({
  id: "ro007",
  sentences: [
    { label: "A", text: "This decline is largely attributed to habitat destruction, pesticide use, and the spread of parasitic mites." },
    { label: "B", text: "Without urgent intervention, the collapse of bee populations could trigger widespread food shortages within decades." },
    { label: "C", text: "Global bee populations have experienced a dramatic decline over the past two decades, alarming ecologists worldwide." },
    { label: "D", text: "Bees play a critical role in pollinating approximately seventy-five per cent of the world's flowering plants and food crops." }
  ],
  correctOrder: ["D", "C", "A", "B"],
  topic: "Environment",
  difficulty: "easy",
  strategy: "D provides the background context about why bees matter. C introduces the problem ('dramatic decline'). A explains the causes with 'This decline' referring to C. B concludes with the future warning, following logically from the established problem.",
  keyClues: ["Background importance = sets up why the problem matters", "'have experienced a dramatic decline' = states the problem", "'This decline' = must follow C", "'Without urgent intervention' = warning conclusion"]
});

PTE_REORDER.push({
  id: "ro008",
  sentences: [
    { label: "A", text: "Furthermore, multilingual individuals often demonstrate enhanced cognitive flexibility and superior problem-solving abilities." },
    { label: "B", text: "Learning a second language offers benefits that extend well beyond the ability to communicate with a wider range of people." },
    { label: "C", text: "Research suggests that bilingualism may even delay the onset of dementia by several years." },
    { label: "D", text: "These cognitive advantages make a compelling case for introducing second language education in early childhood." }
  ],
  correctOrder: ["B", "A", "C", "D"],
  topic: "Linguistics",
  difficulty: "easy",
  strategy: "B is the topic sentence introducing second language benefits broadly. A adds to B with 'Furthermore', listing cognitive benefits. C provides additional research evidence building on A. D concludes with 'These cognitive advantages' summarising A and C.",
  keyClues: ["'offers benefits that extend well beyond' = broad opening claim", "'Furthermore' = additive, must follow an initial point", "'Research suggests' = additional evidence layer", "'These cognitive advantages' = summarises previous cognitive points"]
});

PTE_REORDER.push({
  id: "ro009",
  sentences: [
    { label: "A", text: "The Great Barrier Reef, stretching over two thousand three hundred kilometres, is the world's largest coral reef system." },
    { label: "B", text: "Scientists warn that if current trends continue, the reef could lose the majority of its coral cover within thirty years." },
    { label: "C", text: "However, rising ocean temperatures and increased acidification have placed this fragile ecosystem under severe threat." },
    { label: "D", text: "It supports an extraordinary diversity of marine life, including over fifteen hundred species of fish." }
  ],
  correctOrder: ["A", "D", "C", "B"],
  topic: "Environment",
  difficulty: "easy",
  strategy: "A introduces the topic (the Great Barrier Reef). D elaborates on it with 'It supports' (pronoun refers to the reef). C introduces the problem with 'However' contrasting the positive description. B concludes with the future warning.",
  keyClues: ["Proper noun introduction = must come first", "'It supports' = pronoun refers to the reef in A", "'However' = contrast after positive description", "'if current trends continue' = future projection closing the paragraph"]
});

PTE_REORDER.push({
  id: "ro010",
  sentences: [
    { label: "A", text: "The concept of a universal basic income proposes that governments provide all citizens with a regular, unconditional cash payment." },
    { label: "B", text: "Proponents argue that it would reduce poverty, simplify welfare systems, and provide a safety net in an era of increasing automation." },
    { label: "C", text: "Critics, however, contend that such a programme would be prohibitively expensive and could reduce the incentive to work." },
    { label: "D", text: "The debate continues as pilot programmes in several countries attempt to gather empirical evidence on its effects." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Economics",
  difficulty: "easy",
  strategy: "A defines the concept (topic sentence). B presents the arguments in favour ('Proponents argue'). C provides the counterargument with 'Critics, however'. D concludes by noting that the debate is ongoing, referring to both sides.",
  keyClues: ["Definition of the concept = must come first", "'Proponents argue' = supporting view after definition", "'Critics, however' = opposing view follows support", "'The debate continues' = balanced conclusion after both sides"]
});

PTE_REORDER.push({
  id: "ro011",
  sentences: [
    { label: "A", text: "This movement, known as Impressionism, sought to capture fleeting moments of light and colour rather than precise detail." },
    { label: "B", text: "In the late nineteenth century, a group of French painters broke away from the rigid conventions of academic art." },
    { label: "C", text: "Their innovative approach initially met with harsh criticism from established art institutions and the public alike." },
    { label: "D", text: "Today, however, Impressionist works are among the most celebrated and valuable paintings in the world." }
  ],
  correctOrder: ["B", "A", "C", "D"],
  topic: "Art",
  difficulty: "easy",
  strategy: "B sets the historical context ('In the late nineteenth century'). A names the movement with 'This movement' referring to B. C describes the initial reception with 'Their innovative approach'. D contrasts with 'Today, however' showing the change over time.",
  keyClues: ["'In the late nineteenth century' = historical opener", "'This movement' = refers to what B describes", "'Their innovative approach' = refers to the painters in B", "'Today, however' = time contrast with the past"]
});

PTE_REORDER.push({
  id: "ro012",
  sentences: [
    { label: "A", text: "Sleep deprivation has been linked to a wide range of health problems, including cardiovascular disease, obesity, and weakened immune function." },
    { label: "B", text: "Despite this evidence, many adults in industrialised nations consistently fail to achieve the recommended seven to nine hours of sleep per night." },
    { label: "C", text: "Medical research consistently demonstrates that adequate sleep is essential for maintaining both physical and mental well-being." },
    { label: "D", text: "Experts attribute this trend to increased screen time, demanding work schedules, and elevated stress levels." }
  ],
  correctOrder: ["C", "A", "B", "D"],
  topic: "Medicine",
  difficulty: "easy",
  strategy: "C makes the broadest claim about sleep's importance. A provides specific negative consequences of not sleeping, supporting C. B notes the gap between evidence and behaviour with 'Despite this evidence'. D explains B's trend with 'this trend'.",
  keyClues: ["'consistently demonstrates' = broad scientific consensus opener", "'has been linked to' = specific evidence supporting C", "'Despite this evidence' = acknowledges A and C before noting the problem", "'this trend' = refers to B's observation about adults not sleeping enough"]
});

PTE_REORDER.push({
  id: "ro013",
  sentences: [
    { label: "A", text: "Philosophers have long debated whether moral principles are universal or culturally determined." },
    { label: "B", text: "Relativists, on the other hand, maintain that ethical standards are shaped by cultural context and historical circumstance." },
    { label: "C", text: "This ongoing disagreement has profound implications for international law and human rights frameworks." },
    { label: "D", text: "Universalists argue that certain rights and values transcend cultural boundaries and apply to all human beings." }
  ],
  correctOrder: ["A", "D", "B", "C"],
  topic: "Philosophy",
  difficulty: "easy",
  strategy: "A introduces the debate (topic sentence). D presents the first position ('Universalists argue'). B presents the opposing view with 'on the other hand'. C concludes with 'This ongoing disagreement' referring to the debate between D and B.",
  keyClues: ["'have long debated' = introduces the central question", "'Universalists argue' = first side of the debate", "'on the other hand' = must follow a contrasting position", "'This ongoing disagreement' = summarises both sides"]
});

PTE_REORDER.push({
  id: "ro014",
  sentences: [
    { label: "A", text: "Economists have observed that globalisation has simultaneously created wealth and widened inequality between nations." },
    { label: "B", text: "Wealthy nations have generally benefited from expanded markets and cheaper labour, while developing countries often remain trapped in cycles of poverty." },
    { label: "C", text: "This paradox has led to calls for fairer trade agreements and more equitable distribution of economic gains." },
    { label: "D", text: "International organisations such as the World Bank and the IMF have attempted to address this imbalance with varying degrees of success." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Economics",
  difficulty: "easy",
  strategy: "A introduces the general observation about globalisation. B provides the specific contrast between wealthy and developing nations, illustrating A. C refers to this situation as 'This paradox'. D discusses the response from international organisations, referring to 'this imbalance' from B and C.",
  keyClues: ["'have observed' = introduces the general finding", "'Wealthy nations... while developing countries' = illustrates A's claim", "'This paradox' = refers to the simultaneous wealth and inequality", "'this imbalance' = ties to C's paradox"]
});

PTE_REORDER.push({
  id: "ro015",
  sentences: [
    { label: "A", text: "The discovery of antibiotics in the early twentieth century represented one of medicine's greatest breakthroughs." },
    { label: "B", text: "However, the overuse and misuse of these drugs has led to the emergence of antibiotic-resistant bacteria." },
    { label: "C", text: "Health authorities now warn that antimicrobial resistance poses one of the most serious threats to global public health." },
    { label: "D", text: "Infections that were once easily treatable could become deadly if new classes of antibiotics are not developed." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Medicine",
  difficulty: "easy",
  strategy: "A introduces the topic historically ('early twentieth century'). B contrasts with 'However', introducing the problem. C escalates the warning with 'now warn'. D projects the future consequence with 'could become deadly'.",
  keyClues: ["Historical introduction = establishes context", "'However' = direct contrast to A's positive framing", "'now warn' = present-tense escalation", "'could become deadly' = future consequence closing the paragraph"]
});

PTE_REORDER.push({
  id: "ro016",
  sentences: [
    { label: "A", text: "Traditional classroom models typically position the teacher as the primary source of knowledge and students as passive recipients." },
    { label: "B", text: "In contrast, constructivist approaches encourage learners to actively build understanding through exploration and collaboration." },
    { label: "C", text: "Research increasingly supports the effectiveness of student-centred methods in developing critical thinking and deeper comprehension." },
    { label: "D", text: "Debates about the most effective teaching methods have shaped educational theory for over a century." }
  ],
  correctOrder: ["D", "A", "B", "C"],
  topic: "Education",
  difficulty: "easy",
  strategy: "D is the broadest introduction to the debate. A describes the first approach (traditional). B presents the alternative with 'In contrast'. C provides research evidence favouring B's approach.",
  keyClues: ["'Debates about' = frames the whole topic", "'Traditional classroom models' = first approach described", "'In contrast' = signals the alternative to A", "'Research increasingly supports' = evidence following both approaches"]
});

PTE_REORDER.push({
  id: "ro017",
  sentences: [
    { label: "A", text: "The human brain contains approximately eighty-six billion neurons, each forming thousands of connections with other neurons." },
    { label: "B", text: "This remarkable network enables complex functions such as memory, language, abstract thought, and emotional regulation." },
    { label: "C", text: "Neuroscientists continue to map these connections, a project that may ultimately reveal the biological basis of consciousness." },
    { label: "D", text: "Understanding the brain's architecture is widely considered one of the greatest scientific challenges of the twenty-first century." }
  ],
  correctOrder: ["D", "A", "B", "C"],
  topic: "Science",
  difficulty: "easy",
  strategy: "D provides the broadest framing statement. A gives specific factual detail about the brain. B explains the significance with 'This remarkable network' referring to A. C looks forward with 'continue to map these connections', building on B.",
  keyClues: ["'widely considered one of the greatest' = broad topic opener", "'eighty-six billion neurons' = specific fact", "'This remarkable network' = refers to A's neural connections", "'these connections' = ties back to A and B"]
});

PTE_REORDER.push({
  id: "ro018",
  sentences: [
    { label: "A", text: "Indigenous Australians developed sophisticated land management practices, including controlled burning, over tens of thousands of years." },
    { label: "B", text: "These techniques maintained ecological balance and reduced the risk of catastrophic wildfires." },
    { label: "C", text: "In recent years, Australian fire management authorities have increasingly incorporated Indigenous knowledge into their strategies." },
    { label: "D", text: "This collaboration represents a significant shift towards recognising the value of traditional ecological knowledge in modern land management." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Environment",
  difficulty: "easy",
  strategy: "A introduces the historical practice. B explains the benefits with 'These techniques' referring to A's practices. C moves to the present with 'In recent years'. D reflects on the significance with 'This collaboration' referring to C.",
  keyClues: ["'over tens of thousands of years' = historical grounding", "'These techniques' = refers to A's practices", "'In recent years' = time shift to present", "'This collaboration' = refers to C's incorporation of knowledge"]
});

PTE_REORDER.push({
  id: "ro019",
  sentences: [
    { label: "A", text: "Social media platforms have fundamentally altered the way individuals consume news and form opinions about current events." },
    { label: "B", text: "Algorithms designed to maximise engagement tend to promote sensational content, often at the expense of accuracy." },
    { label: "C", text: "This phenomenon has contributed to the spread of misinformation and the polarisation of public discourse." },
    { label: "D", text: "Researchers argue that media literacy education is now essential for enabling citizens to navigate the digital information landscape." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Technology",
  difficulty: "easy",
  strategy: "A introduces the broad topic (social media and news). B explains a specific mechanism (algorithms). C describes the consequence with 'This phenomenon' referring to B. D provides the proposed solution, responding to the problem in C.",
  keyClues: ["Broad social media impact = topic opener", "'Algorithms designed to' = specific mechanism", "'This phenomenon' = consequence of B", "'Researchers argue' = expert response to the problem"]
});

PTE_REORDER.push({
  id: "ro020",
  sentences: [
    { label: "A", text: "Ancient Greek philosophers laid the foundations of Western philosophical thought, establishing methods of logical inquiry that persist to this day." },
    { label: "B", text: "Socrates, in particular, pioneered the dialectical method, using systematic questioning to expose contradictions in his interlocutors' beliefs." },
    { label: "C", text: "His student Plato further developed these ideas, founding the Academy and authoring dialogues that explored justice, beauty, and truth." },
    { label: "D", text: "The intellectual tradition they established influenced not only philosophy but also science, politics, and education for millennia." }
  ],
  correctOrder: ["A", "B", "C", "D"],
  topic: "Philosophy",
  difficulty: "easy",
  strategy: "A introduces the broadest claim about Greek philosophers. B narrows to a specific example with 'in particular'. C continues chronologically with 'His student Plato' (pronoun 'His' refers to Socrates). D concludes with 'they established', referring to the philosophers discussed.",
  keyClues: ["'laid the foundations' = broadest historical claim", "'in particular' = specific example following a general statement", "'His student Plato' = 'His' must refer to Socrates in B", "'they established' = refers to the group of philosophers"]
});

// =============================================================================
// MEDIUM EXERCISES (5 sentences) — ro021 to ro060
// =============================================================================

PTE_REORDER.push({
  id: "ro021",
  sentences: [
    { label: "A", text: "However, recent studies suggest that this relationship is more complex than previously thought." },
    { label: "B", text: "For decades, scientists believed that increased carbon dioxide levels directly correlated with rising temperatures." },
    { label: "C", text: "These findings have significant implications for climate policy and future environmental predictions." },
    { label: "D", text: "The research indicates that feedback mechanisms in the atmosphere can both amplify and mitigate warming effects." },
    { label: "E", text: "This has led to a re-evaluation of existing climate models and their underlying assumptions." }
  ],
  correctOrder: ["B", "A", "D", "E", "C"],
  topic: "Science",
  difficulty: "medium",
  strategy: "B is the topic sentence (historical belief with 'For decades'). A contrasts with 'However'. D provides the specific research detail. E follows with 'This' referring to D's findings about feedback mechanisms. C concludes with 'These findings' summarising all the evidence.",
  keyClues: ["'For decades' = historical opener", "'However' = contrast to B", "'The research indicates' = specific findings", "'This has led to' = consequence of D", "'These findings' = broad summary conclusion"]
});

PTE_REORDER.push({
  id: "ro022",
  sentences: [
    { label: "A", text: "Moreover, the adoption of renewable energy sources has created millions of new jobs in the manufacturing and installation sectors." },
    { label: "B", text: "The transition from fossil fuels to renewable energy represents one of the most significant economic shifts of the twenty-first century." },
    { label: "C", text: "Solar and wind power, once considered prohibitively expensive, are now cost-competitive with coal and natural gas in many regions." },
    { label: "D", text: "Nevertheless, significant challenges remain, including the need for improved energy storage solutions and grid infrastructure." },
    { label: "E", text: "Addressing these obstacles will be crucial for achieving the widespread adoption necessary to meet global emissions targets." }
  ],
  correctOrder: ["B", "C", "A", "D", "E"],
  topic: "Environment",
  difficulty: "medium",
  strategy: "B introduces the broad topic. C provides specific evidence of progress. A adds another positive point with 'Moreover'. D introduces challenges with 'Nevertheless' (contrast after positives). E concludes with 'these obstacles' referring to D.",
  keyClues: ["'represents one of the most significant' = broad topic opener", "'once considered... now' = specific progress", "'Moreover' = additional positive point", "'Nevertheless' = pivot to challenges", "'these obstacles' = refers to D"]
});

PTE_REORDER.push({
  id: "ro023",
  sentences: [
    { label: "A", text: "The experiment involved exposing participants to a series of increasingly difficult cognitive tasks while monitoring their brain activity." },
    { label: "B", text: "Researchers at the University of Melbourne recently conducted an experiment to investigate the effects of stress on decision-making." },
    { label: "C", text: "These results suggest that moderate stress can actually enhance performance, while excessive stress impairs it." },
    { label: "D", text: "Participants who reported moderate stress levels performed significantly better than those with either very low or very high stress." },
    { label: "E", text: "This finding supports the long-established Yerkes-Dodson law, which posits an inverted U-shaped relationship between arousal and performance." }
  ],
  correctOrder: ["B", "A", "D", "C", "E"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "B introduces the study. A describes the methodology ('The experiment involved'). D presents the results. C interprets the results with 'These results suggest'. E connects to broader theory with 'This finding supports'.",
  keyClues: ["'recently conducted an experiment' = study introduction", "'The experiment involved' = methodology follows introduction", "Performance results = follow methodology", "'These results suggest' = interprets D", "'This finding supports' = connects C to established theory"]
});

PTE_REORDER.push({
  id: "ro024",
  sentences: [
    { label: "A", text: "By the mid-twentieth century, nearly every nation on Earth had adopted some form of compulsory primary education." },
    { label: "B", text: "Initially, formal education was a privilege reserved for the wealthy elite and the clergy." },
    { label: "C", text: "The spread of public education is widely regarded as one of the most important developments in modern history." },
    { label: "D", text: "The Industrial Revolution created a demand for a literate workforce, prompting governments to establish public school systems." },
    { label: "E", text: "Today, the focus has shifted from access to quality, as nations seek to ensure that education truly prepares students for the modern economy." }
  ],
  correctOrder: ["C", "B", "D", "A", "E"],
  topic: "Education",
  difficulty: "medium",
  strategy: "C introduces the broad topic (public education as a major development). B goes to the earliest historical period ('Initially'). D explains the catalyst (Industrial Revolution). A moves to mid-twentieth century. E shifts to the present with 'Today'.",
  keyClues: ["'is widely regarded' = broadest framing statement", "'Initially' = earliest time period", "'The Industrial Revolution' = historical catalyst after B", "'By the mid-twentieth century' = chronological progression", "'Today' = most recent time marker"]
});

PTE_REORDER.push({
  id: "ro025",
  sentences: [
    { label: "A", text: "Noam Chomsky's theory of universal grammar proposed that the ability to acquire language is innate to all human beings." },
    { label: "B", text: "The study of how humans acquire language has been a central concern of linguistics since the mid-twentieth century." },
    { label: "C", text: "More recent research, however, has emphasised the role of social interaction and environmental input in language development." },
    { label: "D", text: "This shift has led to more integrated models that consider both biological and social factors in language acquisition." },
    { label: "E", text: "His theory challenged behaviourist views that language was learned entirely through imitation and reinforcement." }
  ],
  correctOrder: ["B", "A", "E", "C", "D"],
  topic: "Linguistics",
  difficulty: "medium",
  strategy: "B introduces the broad field. A presents Chomsky's theory. E follows with 'His theory' (pronoun refers to Chomsky). C introduces a counterpoint with 'however'. D concludes with 'This shift' referring to the change described in C.",
  keyClues: ["'has been a central concern' = broad topic opener", "'Noam Chomsky's theory' = specific theory introduced", "'His theory' = 'His' must refer to Chomsky in A", "'however' = contrast to the previous view", "'This shift' = refers to C's emphasis on social factors"]
});

PTE_REORDER.push({
  id: "ro026",
  sentences: [
    { label: "A", text: "It occurs when people favour information that confirms their existing beliefs while disregarding evidence that contradicts them." },
    { label: "B", text: "Understanding this tendency is particularly important in an era of social media, where algorithmic curation reinforces existing viewpoints." },
    { label: "C", text: "Confirmation bias is one of the most well-documented phenomena in cognitive psychology." },
    { label: "D", text: "Researchers have demonstrated that even highly educated individuals are susceptible to this bias across a range of contexts." },
    { label: "E", text: "Studies have shown that it influences decisions in areas as diverse as medicine, finance, and criminal justice." }
  ],
  correctOrder: ["C", "A", "E", "D", "B"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "C introduces confirmation bias (topic sentence). A defines it with 'It occurs' (pronoun refers to confirmation bias). E shows its breadth with 'it influences'. D emphasises universality with 'even highly educated individuals'. B concludes with broader relevance in the social media era.",
  keyClues: ["'is one of the most well-documented' = topic introduction", "'It occurs when' = definition following introduction", "'it influences' = specific areas affected", "'even highly educated' = emphasises universality", "'this tendency' = summarising reference in conclusion"]
});

PTE_REORDER.push({
  id: "ro027",
  sentences: [
    { label: "A", text: "The Renaissance, which began in Italy in the fourteenth century, marked a profound transformation in European art, science, and thought." },
    { label: "B", text: "Wealthy patrons such as the Medici family in Florence provided crucial financial support for artists and scholars." },
    { label: "C", text: "This patronage system enabled figures like Leonardo da Vinci and Michelangelo to produce works that defined the era." },
    { label: "D", text: "The movement gradually spread across Europe, influencing intellectual and artistic developments in France, England, and the Low Countries." },
    { label: "E", text: "Its legacy can still be observed in contemporary approaches to education, humanism, and scientific inquiry." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "History",
  difficulty: "medium",
  strategy: "A introduces the Renaissance broadly. B provides a specific supporting detail (Medici patronage). C follows with 'This patronage system' directly referring to B. D describes the geographical spread. E concludes with 'Its legacy' looking at lasting impact.",
  keyClues: ["'which began in Italy' = broadest historical introduction", "'Wealthy patrons such as' = specific example", "'This patronage system' = refers to B", "'gradually spread across Europe' = geographical expansion", "'Its legacy' = long-term impact conclusion"]
});

PTE_REORDER.push({
  id: "ro028",
  sentences: [
    { label: "A", text: "The placebo effect demonstrates that a patient's expectations can produce real, measurable physiological changes." },
    { label: "B", text: "In clinical trials, participants who receive an inert substance often report significant improvements in their symptoms." },
    { label: "C", text: "Researchers believe this occurs because the brain releases endorphins and other neurotransmitters in response to the expectation of treatment." },
    { label: "D", text: "This phenomenon has important implications for how medical treatments are evaluated and approved." },
    { label: "E", text: "Consequently, all new pharmaceutical drugs must be tested against placebos in double-blind trials to establish their true efficacy." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Medicine",
  difficulty: "medium",
  strategy: "A introduces the placebo effect. B provides evidence ('In clinical trials'). C explains the mechanism with 'this occurs because'. D states the implications with 'This phenomenon'. E concludes with 'Consequently' describing the practical response.",
  keyClues: ["'The placebo effect demonstrates' = topic introduction", "'In clinical trials' = evidence following the claim", "'this occurs because' = explains the mechanism", "'This phenomenon' = refers to the placebo effect", "'Consequently' = practical outcome"]
});

PTE_REORDER.push({
  id: "ro029",
  sentences: [
    { label: "A", text: "In economics, the term 'market failure' refers to situations where the free market fails to allocate resources efficiently." },
    { label: "B", text: "Common examples include monopolies, externalities, and public goods that private companies have no incentive to provide." },
    { label: "C", text: "When such failures occur, governments may intervene through regulation, taxation, or direct provision of services." },
    { label: "D", text: "However, government intervention itself can lead to inefficiencies, a phenomenon economists call 'government failure'." },
    { label: "E", text: "The challenge for policymakers lies in determining the appropriate balance between market freedom and state regulation." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Economics",
  difficulty: "medium",
  strategy: "A defines the term (topic sentence). B gives examples with 'Common examples include'. C discusses government response with 'such failures'. D introduces the counter-argument with 'However'. E concludes with 'The challenge' summarising the tension.",
  keyClues: ["Definition sentence = must open the paragraph", "'Common examples include' = illustrates A", "'such failures' = refers to B's examples", "'However' = contrasts government intervention with market failure", "'The challenge' = balancing conclusion"]
});

PTE_REORDER.push({
  id: "ro030",
  sentences: [
    { label: "A", text: "Archaeological evidence suggests that ancient civilisations in the Indus Valley had remarkably advanced urban planning." },
    { label: "B", text: "Cities such as Mohenjo-daro featured grid-like street layouts, sophisticated drainage systems, and standardised brick construction." },
    { label: "C", text: "These achievements indicate a level of civic organisation and engineering skill that was unmatched in the ancient world." },
    { label: "D", text: "Despite their sophistication, these civilisations mysteriously declined around 1900 BCE, and the reasons remain a subject of scholarly debate." },
    { label: "E", text: "Theories range from climate change and river shifts to invasion and internal social collapse." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "History",
  difficulty: "medium",
  strategy: "A introduces the broad claim about Indus Valley planning. B provides specific examples ('Cities such as'). C evaluates with 'These achievements'. D introduces the mystery with 'Despite their sophistication'. E lists the theories explaining D's decline.",
  keyClues: ["'suggests that' = broad archaeological claim", "'Cities such as' = specific examples", "'These achievements' = evaluates B's examples", "'Despite their sophistication' = contrast after positive description", "'Theories range from' = explanations for D's mystery"]
});

PTE_REORDER.push({
  id: "ro031",
  sentences: [
    { label: "A", text: "The phenomenon of cognitive dissonance occurs when individuals hold two contradictory beliefs simultaneously." },
    { label: "B", text: "Leon Festinger first described this concept in 1957, following observations of a doomsday cult whose prophecy had failed." },
    { label: "C", text: "Rather than abandoning their beliefs, cult members rationalised the failed prediction, strengthening their commitment to the group." },
    { label: "D", text: "Festinger argued that the discomfort caused by holding conflicting beliefs motivates individuals to reduce the inconsistency." },
    { label: "E", text: "This theory has since been applied to explain behaviours ranging from consumer purchasing decisions to political attitudes." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "A defines cognitive dissonance. B provides historical context with 'this concept' referring to A. C gives the specific example from B's cult observation. D presents Festinger's argument. E concludes with 'This theory has since been applied', showing broader impact.",
  keyClues: ["Definition = opens the paragraph", "'this concept' = refers to A's definition", "'Rather than abandoning' = continues the cult example from B", "'Festinger argued' = theoretical conclusion from observations", "'This theory has since' = broad application conclusion"]
});

PTE_REORDER.push({
  id: "ro032",
  sentences: [
    { label: "A", text: "The concept of sustainability has evolved from a primarily environmental concern to a comprehensive framework encompassing social and economic dimensions." },
    { label: "B", text: "The United Nations' Sustainable Development Goals, adopted in 2015, reflect this broader understanding." },
    { label: "C", text: "They include targets related to poverty reduction, gender equality, and quality education alongside environmental objectives." },
    { label: "D", text: "Critics argue, however, that the goals are overly ambitious and lack enforceable mechanisms for compliance." },
    { label: "E", text: "Supporters counter that even partial achievement of the goals would represent meaningful progress for billions of people worldwide." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Sociology",
  difficulty: "medium",
  strategy: "A introduces the evolution of sustainability. B provides a specific example with 'this broader understanding' referring to A. C elaborates on B's SDGs with 'They include'. D introduces criticism with 'however'. E provides the counter-argument with 'Supporters counter'.",
  keyClues: ["'has evolved from' = topic introduction showing change", "'this broader understanding' = refers to A's evolution", "'They include' = 'They' refers to B's SDGs", "'Critics argue, however' = opposing view", "'Supporters counter' = must follow criticism"]
});

PTE_REORDER.push({
  id: "ro033",
  sentences: [
    { label: "A", text: "Blockchain technology was originally developed as the underlying system for the cryptocurrency Bitcoin." },
    { label: "B", text: "Since then, its potential applications have expanded far beyond digital currencies." },
    { label: "C", text: "Industries including healthcare, supply chain management, and voting systems are exploring blockchain for its transparency and security features." },
    { label: "D", text: "However, significant barriers to widespread adoption remain, including high energy consumption and regulatory uncertainty." },
    { label: "E", text: "Whether blockchain will ultimately fulfil its transformative promise depends on how effectively these challenges are addressed." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Technology",
  difficulty: "medium",
  strategy: "A introduces blockchain's origin. B shows expansion with 'Since then'. C provides specific examples of B's claim. D introduces barriers with 'However'. E concludes with a forward-looking statement about 'these challenges'.",
  keyClues: ["'was originally developed' = historical origin", "'Since then' = time progression from A", "'Industries including' = specific examples of B's expansion", "'However' = pivot to challenges", "'these challenges' = refers to D's barriers"]
});

PTE_REORDER.push({
  id: "ro034",
  sentences: [
    { label: "A", text: "The human microbiome consists of trillions of microorganisms living in and on the human body." },
    { label: "B", text: "Most of these organisms reside in the gut, where they play a crucial role in digestion, immune function, and even mental health." },
    { label: "C", text: "Recent research has revealed that the composition of the gut microbiome can be significantly influenced by diet, antibiotics, and lifestyle factors." },
    { label: "D", text: "This discovery has opened new avenues for treating conditions ranging from inflammatory bowel disease to depression." },
    { label: "E", text: "Scientists are now developing targeted probiotic therapies designed to restore healthy microbial balance in patients." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Medicine",
  difficulty: "medium",
  strategy: "A defines the microbiome. B specifies the gut with 'Most of these organisms'. C adds recent findings about what influences the microbiome. D shows the implications with 'This discovery'. E describes current action with 'are now developing'.",
  keyClues: ["'consists of' = definition sentence", "'Most of these organisms' = narrows A's scope to the gut", "'Recent research has revealed' = new findings", "'This discovery' = refers to C", "'are now developing' = current practical response"]
});

PTE_REORDER.push({
  id: "ro035",
  sentences: [
    { label: "A", text: "Migration has been a defining feature of human civilisation since the earliest Homo sapiens left Africa over seventy thousand years ago." },
    { label: "B", text: "In the modern era, migration patterns are shaped by a complex interplay of economic opportunity, political instability, and environmental change." },
    { label: "C", text: "Host countries often experience both economic benefits, such as a larger labour force, and social challenges, including cultural tensions." },
    { label: "D", text: "Effective immigration policies must therefore balance these competing considerations while respecting fundamental human rights." },
    { label: "E", text: "The growing frequency of climate-related disasters is expected to create millions of additional displaced persons in the coming decades." }
  ],
  correctOrder: ["A", "B", "C", "E", "D"],
  topic: "Sociology",
  difficulty: "medium",
  strategy: "A provides historical context. B shifts to modern patterns. C discusses impacts on host countries. E adds a forward-looking concern about climate migration. D concludes with 'therefore' and 'these competing considerations', summarising all previous points.",
  keyClues: ["'since the earliest' = broadest historical framing", "'In the modern era' = shifts to present", "'Host countries often' = discusses impact", "'is expected to' = future projection", "'must therefore balance' = concluding recommendation"]
});

PTE_REORDER.push({
  id: "ro036",
  sentences: [
    { label: "A", text: "The emergence of remote work, accelerated by the global pandemic, has fundamentally altered traditional workplace structures." },
    { label: "B", text: "Employees report greater flexibility and reduced commuting time as primary advantages of working from home." },
    { label: "C", text: "Employers, meanwhile, have noted potential cost savings from reduced office space and lower overhead expenses." },
    { label: "D", text: "However, concerns about diminished collaboration, employee isolation, and difficulty maintaining company culture have also surfaced." },
    { label: "E", text: "Many organisations are now adopting hybrid models that attempt to capture the benefits of both remote and in-office arrangements." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Economics",
  difficulty: "medium",
  strategy: "A introduces the shift to remote work. B gives employee perspective. C adds employer perspective with 'meanwhile'. D introduces concerns with 'However'. E concludes with the practical response (hybrid models).",
  keyClues: ["'has fundamentally altered' = introduces the change", "'Employees report' = first stakeholder perspective", "'Employers, meanwhile' = second stakeholder, signals parallel structure", "'However' = pivot to negative aspects", "'are now adopting' = current practical response"]
});

PTE_REORDER.push({
  id: "ro037",
  sentences: [
    { label: "A", text: "Jean Piaget's theory of cognitive development describes four distinct stages through which children's thinking evolves." },
    { label: "B", text: "The first stage, the sensorimotor period, spans from birth to approximately two years of age, during which infants learn through physical interaction." },
    { label: "C", text: "Subsequent stages involve increasingly abstract forms of reasoning, culminating in the formal operational stage during adolescence." },
    { label: "D", text: "Although Piaget's framework has been influential, subsequent research has challenged several of its core assumptions." },
    { label: "E", text: "Modern developmental psychologists now recognise that cognitive growth is more continuous and culturally variable than Piaget originally proposed." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "A introduces Piaget's theory. B describes the first stage. C covers the remaining stages with 'Subsequent stages'. D introduces criticism with 'Although'. E provides the modern perspective with 'now recognise'.",
  keyClues: ["'describes four distinct stages' = theory introduction", "'The first stage' = follows introduction of stages", "'Subsequent stages' = continues from B", "'Although... has been influential' = acknowledges before criticising", "'now recognise' = modern update"]
});

PTE_REORDER.push({
  id: "ro038",
  sentences: [
    { label: "A", text: "The widespread adoption of electric vehicles is increasingly viewed as essential to reducing greenhouse gas emissions from the transport sector." },
    { label: "B", text: "Battery technology has improved dramatically in recent years, resulting in longer driving ranges and shorter charging times." },
    { label: "C", text: "Governments around the world are offering incentives such as tax credits, subsidies, and preferential parking to encourage adoption." },
    { label: "D", text: "Despite this progress, challenges persist, including limited charging infrastructure in rural areas and the environmental impact of battery production." },
    { label: "E", text: "Resolving these issues will be critical for ensuring that electric vehicles deliver on their environmental promise." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Technology",
  difficulty: "medium",
  strategy: "A introduces the importance of electric vehicles. B describes technological improvements. C describes government support. D introduces challenges with 'Despite this progress'. E concludes with 'these issues' referring to D.",
  keyClues: ["'is increasingly viewed as essential' = broad topic opener", "'has improved dramatically' = positive progress", "'Governments around the world' = policy response", "'Despite this progress' = acknowledges B and C before pivoting", "'these issues' = refers to D's challenges"]
});

PTE_REORDER.push({
  id: "ro039",
  sentences: [
    { label: "A", text: "Coral reefs are often described as the rainforests of the sea due to their extraordinary biodiversity." },
    { label: "B", text: "They provide habitat for approximately twenty-five per cent of all marine species, despite covering less than one per cent of the ocean floor." },
    { label: "C", text: "Beyond their ecological value, reefs also support the livelihoods of millions of people through fishing and tourism." },
    { label: "D", text: "Climate change, pollution, and destructive fishing practices now threaten the survival of these vital ecosystems." },
    { label: "E", text: "International conservation efforts, including marine protected areas and reef restoration projects, are attempting to reverse the damage." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Environment",
  difficulty: "medium",
  strategy: "A introduces coral reefs. B elaborates with 'They provide habitat'. C expands the value with 'Beyond their ecological value'. D introduces threats. E describes the response to D's threats.",
  keyClues: ["'are often described as' = topic introduction", "'They provide' = pronoun refers to reefs in A", "'Beyond their ecological value' = adds a new dimension", "'now threaten' = introduces the problem", "'are attempting to reverse' = response to D"]
});

PTE_REORDER.push({
  id: "ro040",
  sentences: [
    { label: "A", text: "The theory of plate tectonics explains how the Earth's outer shell is divided into several large plates that move relative to one another." },
    { label: "B", text: "These movements, driven by convection currents in the mantle, are responsible for earthquakes, volcanic eruptions, and the formation of mountain ranges." },
    { label: "C", text: "Alfred Wegener first proposed the idea of continental drift in 1912, but it was not widely accepted until the 1960s." },
    { label: "D", text: "Advances in seafloor mapping and the discovery of mid-ocean ridges provided the evidence needed to validate his hypothesis." },
    { label: "E", text: "Today, plate tectonics is one of the foundational theories of modern geology, informing everything from earthquake prediction to mineral exploration." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Science",
  difficulty: "medium",
  strategy: "A introduces plate tectonics. B explains the consequences with 'These movements'. C provides historical context with Wegener. D describes the evidence with 'his hypothesis' referring to Wegener. E concludes with 'Today' showing current status.",
  keyClues: ["'explains how' = definition/introduction", "'These movements' = refers to A's plate movements", "'first proposed' = historical origin", "'his hypothesis' = refers to Wegener in C", "'Today' = present-day conclusion"]
});

PTE_REORDER.push({
  id: "ro041",
  sentences: [
    { label: "A", text: "The capacity for empathy is widely regarded as a fundamental component of social intelligence." },
    { label: "B", text: "It enables individuals to understand and share the emotional states of others, facilitating cooperation and social bonding." },
    { label: "C", text: "Neuroscience research has identified mirror neurons as a potential biological basis for empathic responses." },
    { label: "D", text: "These specialised brain cells fire both when a person performs an action and when they observe the same action performed by another." },
    { label: "E", text: "The discovery of mirror neurons has generated considerable interest in understanding conditions such as autism, where empathy may be impaired." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "A introduces empathy broadly. B defines it with 'It enables'. C introduces neuroscience findings. D explains mirror neurons with 'These specialised brain cells'. E discusses implications with 'The discovery of mirror neurons'.",
  keyClues: ["'is widely regarded' = topic sentence", "'It enables' = defines empathy from A", "'has identified mirror neurons' = introduces the mechanism", "'These specialised brain cells' = explains C's mirror neurons", "'The discovery of' = refers back to C and D"]
});

PTE_REORDER.push({
  id: "ro042",
  sentences: [
    { label: "A", text: "The invention of the printing press by Johannes Gutenberg around 1440 is widely considered a turning point in human history." },
    { label: "B", text: "Before this innovation, books were painstakingly copied by hand, making them extremely rare and accessible only to the privileged few." },
    { label: "C", text: "The press enabled the rapid and affordable reproduction of texts, dramatically increasing the availability of written knowledge." },
    { label: "D", text: "This democratisation of information contributed directly to the Protestant Reformation, the Scientific Revolution, and the Enlightenment." },
    { label: "E", text: "Some scholars argue that its impact on society was comparable to that of the internet in the modern age." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "History",
  difficulty: "medium",
  strategy: "A introduces the printing press. B provides context before the invention with 'Before this innovation'. C describes the press's effect. D shows broader consequences with 'This democratisation'. E compares to the modern era with 'its impact'.",
  keyClues: ["'is widely considered a turning point' = topic sentence", "'Before this innovation' = historical context preceding A", "'The press enabled' = direct effect of the invention", "'This democratisation' = refers to C's effect", "'its impact' = refers to the press from A"]
});

PTE_REORDER.push({
  id: "ro043",
  sentences: [
    { label: "A", text: "The Sapir-Whorf hypothesis proposes that the language a person speaks fundamentally shapes their perception of reality." },
    { label: "B", text: "In its strongest form, the hypothesis suggests that thought is entirely determined by language." },
    { label: "C", text: "Most contemporary linguists reject this strong version, but accept a weaker form known as linguistic relativity." },
    { label: "D", text: "This weaker version holds that language influences, but does not determine, certain aspects of cognition such as spatial reasoning and colour perception." },
    { label: "E", text: "Experiments comparing speakers of different languages have provided compelling evidence for these subtle cognitive differences." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Linguistics",
  difficulty: "medium",
  strategy: "A introduces the hypothesis. B presents the strong form. C rejects the strong form and introduces the weaker version. D explains the weaker version with 'This weaker version'. E provides evidence with 'these subtle cognitive differences'.",
  keyClues: ["'proposes that' = hypothesis introduction", "'In its strongest form' = elaboration on A", "'Most contemporary linguists reject' = responds to B", "'This weaker version' = explains C's linguistic relativity", "'these subtle cognitive differences' = refers to D"]
});

PTE_REORDER.push({
  id: "ro044",
  sentences: [
    { label: "A", text: "Globalisation has transformed the art world by enabling artists from previously marginalised regions to gain international recognition." },
    { label: "B", text: "Contemporary art fairs, biennales, and online platforms have made it possible for audiences worldwide to engage with diverse artistic traditions." },
    { label: "C", text: "Critics, however, warn that this increased connectivity has also led to a homogenisation of artistic expression." },
    { label: "D", text: "They argue that market forces tend to favour works that appeal to Western collectors, potentially undermining local artistic identities." },
    { label: "E", text: "The tension between global exposure and cultural preservation remains one of the most debated issues in contemporary art criticism." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Art",
  difficulty: "medium",
  strategy: "A introduces globalisation's effect on art. B provides specific examples. C introduces criticism with 'however'. D elaborates on the criticism with 'They argue' (referring to critics). E concludes by framing the ongoing debate.",
  keyClues: ["'has transformed the art world' = broad topic opener", "'Contemporary art fairs' = specific examples", "'Critics, however, warn' = opposing perspective", "'They argue' = 'They' refers to critics in C", "'The tension between' = summarising conclusion"]
});

PTE_REORDER.push({
  id: "ro045",
  sentences: [
    { label: "A", text: "Quantum computing represents a fundamentally different approach to information processing compared to classical computers." },
    { label: "B", text: "While traditional computers use binary bits that exist in a state of either zero or one, quantum computers use qubits that can exist in multiple states simultaneously." },
    { label: "C", text: "This property, known as superposition, theoretically enables quantum computers to solve certain problems exponentially faster than their classical counterparts." },
    { label: "D", text: "Practical quantum computing, however, faces enormous technical obstacles, including the extreme sensitivity of qubits to environmental disturbance." },
    { label: "E", text: "Despite these challenges, major technology companies and governments are investing billions of dollars in quantum research." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Technology",
  difficulty: "medium",
  strategy: "A introduces quantum computing broadly. B explains the key difference (bits vs qubits). C names the property with 'This property' and explains its advantage. D introduces obstacles with 'however'. E responds with 'Despite these challenges'.",
  keyClues: ["'represents a fundamentally different approach' = topic introduction", "'While traditional computers' = comparison structure", "'This property' = refers to B's superposition", "'however, faces' = pivots to challenges", "'Despite these challenges' = responds to D"]
});

PTE_REORDER.push({
  id: "ro046",
  sentences: [
    { label: "A", text: "The concept of emotional intelligence was popularised by psychologist Daniel Goleman in the mid-1990s." },
    { label: "B", text: "Goleman argued that the ability to recognise, understand, and manage emotions is at least as important as traditional cognitive intelligence for success in life." },
    { label: "C", text: "His work drew on earlier research by Peter Salovey and John Mayer, who first defined the term in an academic context." },
    { label: "D", text: "Since then, emotional intelligence has been widely incorporated into leadership training, education, and workplace development programmes." },
    { label: "E", text: "Some researchers, however, question whether emotional intelligence is a distinct, measurable construct or simply a repackaging of existing personality traits." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Psychology",
  difficulty: "medium",
  strategy: "A introduces the concept. B explains Goleman's argument. C references the earlier research with 'His work drew on'. D describes the spread with 'Since then'. E introduces scepticism with 'however'.",
  keyClues: ["'was popularised by' = introduces the concept", "'Goleman argued' = elaborates on A", "'His work drew on' = 'His' refers to Goleman in A/B", "'Since then' = progression from C's historical context", "'Some researchers, however' = critical view at the end"]
});

PTE_REORDER.push({
  id: "ro047",
  sentences: [
    { label: "A", text: "The development of vaccines is widely regarded as one of the greatest achievements in the history of public health." },
    { label: "B", text: "Edward Jenner's pioneering work with cowpox in 1796 laid the foundation for modern immunology." },
    { label: "C", text: "Over the following two centuries, vaccines were developed for diseases including polio, measles, and tuberculosis, saving millions of lives." },
    { label: "D", text: "The rapid development of COVID-19 vaccines demonstrated that modern biotechnology can respond to emerging threats with unprecedented speed." },
    { label: "E", text: "This achievement, however, also highlighted stark global inequities in vaccine access and distribution." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Medicine",
  difficulty: "medium",
  strategy: "A provides the broadest claim. B gives the historical origin. C covers the timeline with 'Over the following two centuries'. D shifts to the modern era with COVID-19. E adds a critical reflection with 'This achievement, however'.",
  keyClues: ["'is widely regarded' = broadest topic statement", "'pioneering work... in 1796' = earliest historical point", "'Over the following two centuries' = chronological expansion from B", "'rapid development of COVID-19' = most recent development", "'This achievement, however' = critical reflection on D"]
});

PTE_REORDER.push({
  id: "ro048",
  sentences: [
    { label: "A", text: "Behavioural economics challenges the classical assumption that individuals always make rational, self-interested decisions." },
    { label: "B", text: "Researchers such as Daniel Kahneman and Amos Tversky demonstrated that human decision-making is systematically influenced by cognitive biases." },
    { label: "C", text: "Their work revealed that people tend to overvalue losses relative to equivalent gains, a phenomenon known as loss aversion." },
    { label: "D", text: "These insights have been applied to public policy through the concept of 'nudging', which uses subtle design changes to guide better decisions." },
    { label: "E", text: "Governments in the United Kingdom and Australia, among others, have established dedicated behavioural insights units to implement such strategies." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Economics",
  difficulty: "medium",
  strategy: "A introduces the field. B names key researchers. C describes their findings with 'Their work'. D discusses applications with 'These insights'. E gives specific government examples of D's approach.",
  keyClues: ["'challenges the classical assumption' = introduces the field", "'Researchers such as' = specific researchers", "'Their work revealed' = 'Their' refers to Kahneman and Tversky", "'These insights have been applied' = practical application", "'such strategies' = refers to D's nudging concept"]
});

PTE_REORDER.push({
  id: "ro049",
  sentences: [
    { label: "A", text: "The role of sleep in memory consolidation has been a major focus of neuroscience research in recent decades." },
    { label: "B", text: "During sleep, the brain replays and reorganises information acquired during waking hours, strengthening neural connections associated with important memories." },
    { label: "C", text: "Studies have shown that individuals who sleep after learning perform significantly better on recall tests than those who remain awake." },
    { label: "D", text: "Furthermore, specific sleep stages appear to serve different memory functions, with deep sleep being particularly important for declarative memory." },
    { label: "E", text: "These findings underscore the importance of adequate sleep for academic performance and highlight the risks of chronic sleep deprivation among students." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Science",
  difficulty: "medium",
  strategy: "A introduces the topic. B explains the mechanism. C provides experimental evidence. D adds further detail with 'Furthermore'. E concludes with 'These findings' summarising all previous points.",
  keyClues: ["'has been a major focus' = topic introduction", "'During sleep, the brain' = mechanism explanation", "'Studies have shown' = experimental evidence", "'Furthermore' = additional detail", "'These findings' = summarising conclusion"]
});

PTE_REORDER.push({
  id: "ro050",
  sentences: [
    { label: "A", text: "The term 'soft power' was coined by political scientist Joseph Nye to describe a nation's ability to influence others through attraction rather than coercion." },
    { label: "B", text: "Unlike military or economic pressure, soft power relies on cultural appeal, political values, and the perceived legitimacy of foreign policy." },
    { label: "C", text: "Countries such as Japan, South Korea, and France have successfully leveraged their cultural exports to enhance their global influence." },
    { label: "D", text: "The rise of social media has further amplified the reach of soft power, enabling cultural content to spread rapidly across borders." },
    { label: "E", text: "Critics, however, argue that soft power is difficult to measure and can be easily undermined by domestic political controversies." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Sociology",
  difficulty: "medium",
  strategy: "A defines the term. B elaborates on what soft power involves with 'Unlike' framing a comparison. C gives specific national examples. D shows modern developments with 'further amplified'. E introduces criticism.",
  keyClues: ["'was coined by' = term definition", "'Unlike military or economic pressure' = comparison, follows definition", "'Countries such as' = specific examples", "'has further amplified' = modern evolution", "'Critics, however' = opposing perspective at the end"]
});

PTE_REORDER.push({
  id: "ro051",
  sentences: [
    { label: "A", text: "The ancient Silk Road was not a single route but a vast network of trade paths connecting East Asia with the Mediterranean." },
    { label: "B", text: "Along these routes, merchants exchanged not only goods such as silk, spices, and precious metals but also ideas, religions, and technologies." },
    { label: "C", text: "The cultural exchanges facilitated by the Silk Road profoundly shaped the development of civilisations across the entire Eurasian continent." },
    { label: "D", text: "Buddhism, for example, spread from India to China and Southeast Asia primarily through Silk Road trading networks." },
    { label: "E", text: "Modern initiatives such as China's Belt and Road project consciously echo this historical legacy of transcontinental connectivity." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "History",
  difficulty: "medium",
  strategy: "A introduces the Silk Road. B describes what was exchanged with 'Along these routes'. C evaluates the cultural impact. D gives a specific example with 'for example'. E connects to the modern era with 'this historical legacy'.",
  keyClues: ["'was not a single route but' = introduces and defines", "'Along these routes' = refers to A's network", "'cultural exchanges facilitated by' = impact statement", "'for example' = illustrates C's claim", "'this historical legacy' = connects to present day"]
});

PTE_REORDER.push({
  id: "ro052",
  sentences: [
    { label: "A", text: "The theory of evolution by natural selection, formulated independently by Charles Darwin and Alfred Russel Wallace, remains the central organising principle of biology." },
    { label: "B", text: "It explains how species change over time through the differential survival and reproduction of individuals with advantageous traits." },
    { label: "C", text: "The discovery of DNA in the twentieth century provided the molecular basis for understanding how these traits are inherited and modified." },
    { label: "D", text: "Modern evolutionary biology integrates genetics, ecology, and palaeontology to construct a comprehensive picture of life's history on Earth." },
    { label: "E", text: "Despite overwhelming scientific consensus, the theory continues to face opposition from certain religious and ideological groups." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Science",
  difficulty: "medium",
  strategy: "A introduces evolution. B explains the mechanism with 'It explains'. C provides the genetic foundation with 'these traits'. D describes modern integration. E concludes with the societal tension.",
  keyClues: ["'remains the central organising principle' = introduces the theory", "'It explains' = 'It' refers to evolution in A", "'these traits' = connects to B's 'advantageous traits'", "'integrates genetics, ecology' = modern synthesis", "'Despite overwhelming scientific consensus' = contrasts science with opposition"]
});

PTE_REORDER.push({
  id: "ro053",
  sentences: [
    { label: "A", text: "The phenomenon of gentrification occurs when wealthier residents move into lower-income urban neighbourhoods, driving up property values and living costs." },
    { label: "B", text: "While this process often leads to improved infrastructure, reduced crime rates, and increased investment, it can also displace long-term residents who can no longer afford rising rents." },
    { label: "C", text: "Community organisations in affected areas frequently argue that development should prioritise the needs of existing residents rather than incoming populations." },
    { label: "D", text: "Some cities have responded by implementing affordable housing mandates, rent control measures, and community land trusts." },
    { label: "E", text: "The effectiveness of these interventions, however, varies considerably depending on local market conditions and political will." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Sociology",
  difficulty: "medium",
  strategy: "A defines gentrification. B presents both positive and negative aspects with 'this process'. C introduces community responses. D describes policy interventions. E evaluates effectiveness with 'these interventions'.",
  keyClues: ["'occurs when' = definition sentence", "'this process' = refers to gentrification in A", "'Community organisations in affected areas' = stakeholder response", "'Some cities have responded' = policy actions", "'these interventions' = refers to D's measures"]
});

PTE_REORDER.push({
  id: "ro054",
  sentences: [
    { label: "A", text: "The field of epigenetics studies how environmental factors can alter gene expression without changing the underlying DNA sequence." },
    { label: "B", text: "Research has shown that experiences such as chronic stress, malnutrition, and exposure to toxins can activate or silence specific genes." },
    { label: "C", text: "Remarkably, some of these epigenetic changes can be passed from one generation to the next." },
    { label: "D", text: "This means that a parent's experiences may influence the biology and health of their children and even grandchildren." },
    { label: "E", text: "The implications of this discovery extend beyond medicine into fields such as sociology and public policy, where intergenerational disadvantage is a pressing concern." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Science",
  difficulty: "medium",
  strategy: "A introduces epigenetics. B provides specific findings. C adds a surprising detail with 'Remarkably' and 'these epigenetic changes'. D explains the significance with 'This means'. E broadens the implications.",
  keyClues: ["'studies how' = field introduction", "'Research has shown' = specific evidence", "'some of these epigenetic changes' = refers to B's findings", "'This means' = consequence of C", "'this discovery' = summarises all preceding research"]
});

PTE_REORDER.push({
  id: "ro055",
  sentences: [
    { label: "A", text: "The concept of free will has been debated by philosophers for thousands of years and remains one of the most contested issues in metaphysics." },
    { label: "B", text: "Determinists argue that every event, including human decisions, is the inevitable result of prior causes governed by natural laws." },
    { label: "C", text: "Libertarians, in this philosophical context, maintain that genuine free will exists and that human beings are capable of making truly independent choices." },
    { label: "D", text: "A third position, known as compatibilism, attempts to reconcile free will with determinism by redefining what it means to act freely." },
    { label: "E", text: "Advances in neuroscience have added new dimensions to this debate, with brain imaging studies raising questions about whether decisions are made before we become conscious of them." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Philosophy",
  difficulty: "medium",
  strategy: "A introduces the debate. B presents the first position (determinism). C presents the second position ('Libertarians, in this philosophical context'). D introduces a third position with 'A third position'. E adds the neuroscience dimension with 'this debate'.",
  keyClues: ["'has been debated' = introduces the longstanding question", "'Determinists argue' = first philosophical position", "'Libertarians... maintain' = second position", "'A third position' = signals a third view", "'this debate' = refers back to the entire discussion"]
});

PTE_REORDER.push({
  id: "ro056",
  sentences: [
    { label: "A", text: "Ocean acidification, caused by the absorption of excess atmospheric carbon dioxide, poses a serious threat to marine ecosystems." },
    { label: "B", text: "When carbon dioxide dissolves in seawater, it forms carbonic acid, which lowers the pH of the ocean." },
    { label: "C", text: "This chemical change makes it more difficult for organisms such as corals, molluscs, and certain plankton to build their calcium carbonate shells and skeletons." },
    { label: "D", text: "The decline of these organisms could have cascading effects throughout the marine food web, ultimately affecting commercial fisheries and coastal communities." },
    { label: "E", text: "Scientists warn that without significant reductions in carbon emissions, ocean acidity could increase by one hundred and fifty per cent by the end of this century." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Environment",
  difficulty: "medium",
  strategy: "A introduces ocean acidification. B explains the chemical process. C describes the biological impact with 'This chemical change'. D projects broader consequences with 'these organisms'. E provides the future warning.",
  keyClues: ["'poses a serious threat' = topic introduction", "'When carbon dioxide dissolves' = explains the process", "'This chemical change' = refers to B", "'these organisms' = refers to C's corals, molluscs, plankton", "'Scientists warn' = future projection conclusion"]
});

PTE_REORDER.push({
  id: "ro057",
  sentences: [
    { label: "A", text: "The Australian education system has undergone significant reform in recent decades, with increased emphasis on standardised assessment and accountability." },
    { label: "B", text: "The introduction of NAPLAN testing in 2008 was a landmark development, providing nationwide data on student literacy and numeracy achievement." },
    { label: "C", text: "Supporters argue that such testing provides valuable information for identifying underperforming schools and targeting resources effectively." },
    { label: "D", text: "Opponents, however, contend that an excessive focus on testing narrows the curriculum and creates unnecessary stress for young students." },
    { label: "E", text: "The ongoing debate reflects a broader global tension between the desire for measurable outcomes and the need for holistic, student-centred education." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Education",
  difficulty: "medium",
  strategy: "A introduces the reform context. B gives the specific example (NAPLAN). C presents supporters' views with 'such testing'. D contrasts with 'Opponents, however'. E frames the broader debate.",
  keyClues: ["'has undergone significant reform' = broad context", "'The introduction of NAPLAN' = specific example", "'such testing' = refers to B's NAPLAN", "'Opponents, however' = counterargument", "'The ongoing debate reflects' = concluding broader reflection"]
});

PTE_REORDER.push({
  id: "ro058",
  sentences: [
    { label: "A", text: "Existentialism emerged as a prominent philosophical movement in the aftermath of the Second World War." },
    { label: "B", text: "Thinkers such as Jean-Paul Sartre and Simone de Beauvoir argued that human existence precedes essence, meaning individuals must create their own meaning in an inherently meaningless universe." },
    { label: "C", text: "This philosophy resonated powerfully with a generation that had witnessed unprecedented destruction and moral failure." },
    { label: "D", text: "Albert Camus, though often associated with existentialism, preferred the label 'absurdism' to describe his exploration of the tension between human desire for meaning and the indifference of the universe." },
    { label: "E", text: "The ideas of these thinkers continue to influence contemporary literature, psychology, and ethical thought." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Philosophy",
  difficulty: "medium",
  strategy: "A introduces existentialism historically. B names key thinkers and their core argument. C explains why it resonated with 'This philosophy'. D adds Camus as a related but distinct figure. E concludes with 'these thinkers' summarising all.",
  keyClues: ["'emerged as' = historical introduction", "'Thinkers such as' = specific philosophers", "'This philosophy' = refers to B's existentialist view", "'though often associated with' = distinguishes Camus", "'these thinkers' = summarises B and D"]
});

PTE_REORDER.push({
  id: "ro059",
  sentences: [
    { label: "A", text: "The digital divide refers to the gap between those who have access to modern information and communication technologies and those who do not." },
    { label: "B", text: "This divide is most pronounced between developed and developing nations, but it also exists within wealthy countries along lines of income, age, and geography." },
    { label: "C", text: "In education, the lack of reliable internet access places disadvantaged students at a significant disadvantage compared to their better-resourced peers." },
    { label: "D", text: "The COVID-19 pandemic dramatically exposed these inequities when schools shifted to online learning, leaving millions of students without adequate access." },
    { label: "E", text: "Governments and organisations are now investing in broadband infrastructure and digital literacy programmes to narrow this gap." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Technology",
  difficulty: "medium",
  strategy: "A defines the digital divide. B elaborates on its scope with 'This divide'. C gives a specific sector (education). D provides a concrete recent example with 'these inequities'. E describes the response with 'this gap'.",
  keyClues: ["'refers to' = definition sentence", "'This divide' = refers to A's concept", "'In education' = specific sector example", "'these inequities' = refers to the divide discussed", "'this gap' = concluding reference, ties to A's definition"]
});

PTE_REORDER.push({
  id: "ro060",
  sentences: [
    { label: "A", text: "The phenomenon of language death occurs when the last native speaker of a language passes away, taking with them an irreplaceable cultural and intellectual heritage." },
    { label: "B", text: "Linguists estimate that roughly half of the world's approximately seven thousand languages are at risk of disappearing within this century." },
    { label: "C", text: "The primary drivers of language death include globalisation, urbanisation, and the dominance of a small number of major languages in education and media." },
    { label: "D", text: "Efforts to preserve endangered languages include documentation projects, immersion schooling programmes, and the development of digital resources." },
    { label: "E", text: "These initiatives, while valuable, face an uphill battle against the powerful economic and social forces that drive communities toward dominant languages." }
  ],
  correctOrder: ["A", "B", "C", "D", "E"],
  topic: "Linguistics",
  difficulty: "medium",
  strategy: "A defines language death. B provides the scale of the problem. C explains the causes. D describes preservation efforts. E evaluates those efforts with 'These initiatives'.",
  keyClues: ["'occurs when' = definition sentence", "'Linguists estimate' = quantifies the problem", "'primary drivers' = explains causes", "'Efforts to preserve' = response to the problem", "'These initiatives' = evaluates D's efforts"]
});

// =============================================================================
// HARD EXERCISES (5 sentences, tricky clues) — ro061 to ro080
// =============================================================================

PTE_REORDER.push({
  id: "ro061",
  sentences: [
    { label: "A", text: "Subsequent experiments confirmed that the effect was reproducible across different laboratory conditions and with varied participant demographics." },
    { label: "B", text: "The initial findings were met with considerable scepticism from the wider scientific community." },
    { label: "C", text: "A team of researchers at a prominent European university published results that appeared to challenge a well-established principle of cognitive psychology." },
    { label: "D", text: "This body of evidence eventually compelled even the most vocal critics to reconsider their position on the matter." },
    { label: "E", text: "Despite the controversy, independent research groups began to replicate the study using larger sample sizes and more rigorous controls." }
  ],
  correctOrder: ["C", "B", "E", "A", "D"],
  topic: "Psychology",
  difficulty: "hard",
  strategy: "C introduces the original publication. B describes the reception ('The initial findings'). E describes the replication attempts with 'Despite the controversy'. A reports the outcomes of E's experiments with 'Subsequent experiments confirmed'. D concludes with 'This body of evidence' referring to all the accumulated research. The trap is that A looks like it follows C, but B must intervene because 'initial findings' and 'scepticism' must precede replication.",
  keyClues: ["'published results' = the originating event", "'The initial findings' = reception of C's results", "'Despite the controversy' = acknowledges B's scepticism", "'Subsequent experiments confirmed' = follows E's replication", "'This body of evidence' = cumulative reference to all studies"]
});

PTE_REORDER.push({
  id: "ro062",
  sentences: [
    { label: "A", text: "The technique involves analysing the ratio of carbon-14 to carbon-12 in organic materials to determine their approximate age." },
    { label: "B", text: "It has since become indispensable in fields as diverse as archaeology, geology, and environmental science." },
    { label: "C", text: "Willard Libby developed the method of radiocarbon dating in 1949, for which he was awarded the Nobel Prize in Chemistry." },
    { label: "D", text: "However, the method has limitations, including a maximum effective range of approximately fifty thousand years and susceptibility to contamination." },
    { label: "E", text: "Calibration techniques using tree-ring data and other independent chronologies have helped to address some of these accuracy concerns." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Science",
  difficulty: "hard",
  strategy: "C introduces radiocarbon dating and its inventor. A explains the technique ('The technique involves'). B shows its spread with 'It has since become'. D introduces limitations with 'However'. E addresses those limitations with 'some of these accuracy concerns'. The trap is that B and D both use pronouns that could follow C, but A must explain the technique before B can praise its spread.",
  keyClues: ["'developed the method' = introduces the topic chronologically", "'The technique involves' = explains what C introduced", "'It has since become' = 'It' and 'since' = progression from A", "'However, the method has' = limitations after positive description", "'some of these accuracy concerns' = refers to D's limitations"]
});

PTE_REORDER.push({
  id: "ro063",
  sentences: [
    { label: "A", text: "What made this approach distinctive was its rejection of the assumption that economic actors always behave rationally." },
    { label: "B", text: "The resulting framework has been adopted by central banks and regulatory bodies worldwide to improve financial stability." },
    { label: "C", text: "Instead, it incorporated findings from psychology to model how actual human behaviour deviates from theoretical predictions." },
    { label: "D", text: "In the early 2000s, a group of economists proposed a novel approach to understanding financial market volatility." },
    { label: "E", text: "By combining economic theory with empirical psychological research, they were able to predict market anomalies that traditional models consistently failed to explain." }
  ],
  correctOrder: ["D", "A", "C", "E", "B"],
  topic: "Economics",
  difficulty: "hard",
  strategy: "D introduces the novel approach. A describes what was distinctive about it with 'this approach'. C elaborates with 'Instead' (contrasts the rejected assumption from A). E describes the outcome with 'they were able to'. B shows the broader adoption with 'The resulting framework'. The trap is that B looks like a natural conclusion for any sentence, but it must follow E because 'The resulting framework' refers to the combined approach in E.",
  keyClues: ["'proposed a novel approach' = introduces the topic", "'this approach' = refers to D's novel approach", "'Instead' = contrasts A's rejection with the alternative", "'they were able to predict' = outcome of C's method", "'The resulting framework' = refers to the complete approach from D-E"]
});

PTE_REORDER.push({
  id: "ro064",
  sentences: [
    { label: "A", text: "The archaeological site revealed artefacts from at least four distinct cultural periods, spanning approximately three thousand years." },
    { label: "B", text: "Of particular significance was the discovery of a previously unknown form of writing, found on ceramic fragments dating to the earliest occupation layer." },
    { label: "C", text: "If the script can be deciphered, it could rewrite our understanding of literacy in the ancient Near East." },
    { label: "D", text: "This potential has attracted international attention and funding from major research institutions." },
    { label: "E", text: "Excavations at a remote location in the highlands of eastern Anatolia have uncovered evidence of a previously undocumented civilisation." }
  ],
  correctOrder: ["E", "A", "B", "C", "D"],
  topic: "History",
  difficulty: "hard",
  strategy: "E introduces the excavation (broadest statement). A describes what was found at the site ('The archaeological site revealed'). B highlights the most significant finding with 'Of particular significance'. C discusses the potential impact with 'If the script can be deciphered'. D refers to 'This potential' from C. The trap is that A and E both seem like openers, but E is broader (mentions location and discovery) while A provides specifics about the site.",
  keyClues: ["'Excavations at a remote location' = broadest introduction of the discovery", "'The archaeological site revealed' = specific findings at E's site", "'Of particular significance' = highlights one finding from A's artefacts", "'If the script can be deciphered' = conditional following B's discovery", "'This potential' = refers to C's possibility"]
});

PTE_REORDER.push({
  id: "ro065",
  sentences: [
    { label: "A", text: "The programme aimed to determine whether early musical training could enhance mathematical reasoning in primary school students." },
    { label: "B", text: "Interestingly, the control group, which received additional visual arts instruction instead, showed comparable improvements in spatial reasoning." },
    { label: "C", text: "A longitudinal educational study spanning five years tracked the academic progress of over two thousand students across twelve schools." },
    { label: "D", text: "These unexpected results suggest that the cognitive benefits may stem from structured creative engagement in general, rather than music specifically." },
    { label: "E", text: "Students who received intensive music education demonstrated significant gains in standardised mathematics assessments compared to their peers." }
  ],
  correctOrder: ["C", "A", "E", "B", "D"],
  topic: "Education",
  difficulty: "hard",
  strategy: "C introduces the study. A describes its aim ('The programme aimed to'). E presents the main results. B introduces the surprising finding with 'Interestingly, the control group'. D interprets with 'These unexpected results'. The trap: E seems like the conclusion because it gives positive results, but B must follow because the control group finding is the unexpected twist that D then interprets.",
  keyClues: ["'A longitudinal educational study' = introduces the research", "'The programme aimed to' = specifies the purpose of C's study", "'Students who received' = main results", "'Interestingly, the control group' = surprising additional finding", "'These unexpected results' = interprets B's surprising finding"]
});

PTE_REORDER.push({
  id: "ro066",
  sentences: [
    { label: "A", text: "The philosopher argued that genuine moral progress requires confronting uncomfortable truths about the gap between professed values and actual behaviour." },
    { label: "B", text: "In a controversial lecture delivered at a major international conference, a prominent ethicist challenged the prevailing consensus on human moral development." },
    { label: "C", text: "She maintained that societies often construct narratives of moral progress that serve to obscure persistent structural injustices." },
    { label: "D", text: "The lecture provoked intense debate, with some scholars praising its intellectual rigour while others dismissed it as needlessly provocative." },
    { label: "E", text: "Regardless of one's position, the arguments raised have since shaped subsequent academic discourse on the relationship between moral philosophy and social policy." }
  ],
  correctOrder: ["B", "C", "A", "D", "E"],
  topic: "Philosophy",
  difficulty: "hard",
  strategy: "B introduces the lecture and the ethicist. C elaborates on her argument with 'She maintained'. A continues the argument with 'The philosopher argued'. D describes the reception with 'The lecture provoked'. E concludes with 'Regardless of one's position'. The trap: A and C both describe the philosopher's arguments, but C must come first because 'She maintained' introduces the core position, while A's 'genuine moral progress' builds on C's 'narratives of moral progress'.",
  keyClues: ["'In a controversial lecture' = event introduction", "'She maintained' = 'She' refers to the ethicist in B", "'The philosopher argued' = continues the argument from C", "'The lecture provoked' = reception follows the content", "'Regardless of one's position' = balanced conclusion"]
});

PTE_REORDER.push({
  id: "ro067",
  sentences: [
    { label: "A", text: "The compound was initially developed as a potential treatment for a rare autoimmune condition." },
    { label: "B", text: "During phase two clinical trials, researchers observed an unexpected but statistically significant reduction in markers associated with neurological inflammation." },
    { label: "C", text: "A pharmaceutical company recently announced a breakthrough in the development of a novel anti-inflammatory compound." },
    { label: "D", text: "This serendipitous finding has prompted the company to initiate a new trial specifically targeting neurodegenerative diseases such as Alzheimer's and Parkinson's." },
    { label: "E", text: "If successful, the drug could represent the first treatment to address the underlying inflammatory mechanisms rather than merely managing symptoms." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Medicine",
  difficulty: "hard",
  strategy: "C announces the breakthrough. A describes the original purpose. B reports the unexpected finding during trials. D follows with 'This serendipitous finding' referring to B. E projects future impact. The trap: A and B both describe stages of development and their order is ambiguous without understanding that original purpose (A) precedes trial observations (B).",
  keyClues: ["'recently announced a breakthrough' = news introduction", "'was initially developed' = original purpose precedes trial results", "'During phase two clinical trials' = chronologically follows A", "'This serendipitous finding' = refers to B's unexpected observation", "'If successful' = future projection following D's new trial"]
});

PTE_REORDER.push({
  id: "ro068",
  sentences: [
    { label: "A", text: "The resulting data revealed patterns that contradicted several widely accepted assumptions about voter behaviour in multicultural democracies." },
    { label: "B", text: "A research team conducted the largest ever cross-national survey of political attitudes, collecting responses from over one hundred thousand participants in thirty-two countries." },
    { label: "C", text: "In particular, the data showed that economic concerns consistently outweighed ethnic and cultural identity as the primary driver of voting preferences." },
    { label: "D", text: "These findings have been challenged by scholars who argue that the survey methodology failed to capture the nuanced ways in which identity influences political behaviour." },
    { label: "E", text: "The ensuing methodological debate has itself become a significant contribution to the field of comparative political science." }
  ],
  correctOrder: ["B", "A", "C", "D", "E"],
  topic: "Sociology",
  difficulty: "hard",
  strategy: "B introduces the research. A presents results with 'The resulting data'. C provides specific detail with 'In particular'. D introduces challenges with 'These findings have been challenged'. E reflects on the debate itself. The trap: C appears to follow A logically, but students might place D before C. The key is that 'In particular' specifies one aspect of A's broad findings, while D challenges the overall findings.",
  keyClues: ["'conducted the largest ever' = introduces the study", "'The resulting data revealed' = results from B's survey", "'In particular' = specific detail from A's patterns", "'These findings have been challenged' = responds to A and C", "'The ensuing methodological debate' = meta-reflection on D"]
});

PTE_REORDER.push({
  id: "ro069",
  sentences: [
    { label: "A", text: "The algorithm analysed millions of protein structures, identifying patterns that had eluded human researchers for decades." },
    { label: "B", text: "Remarkably, the system achieved accuracy levels comparable to experimental methods that require months of laboratory work." },
    { label: "C", text: "In 2020, an artificial intelligence system developed by a British technology company solved one of biology's most challenging problems: predicting the three-dimensional structure of proteins from their amino acid sequences." },
    { label: "D", text: "This achievement has been described as a watershed moment for structural biology and drug discovery." },
    { label: "E", text: "By making its database of predicted structures freely available, the company has enabled researchers worldwide to accelerate their work on diseases from malaria to cancer." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Technology",
  difficulty: "hard",
  strategy: "C introduces the AI achievement. A describes how the algorithm worked. B highlights the remarkable accuracy. D evaluates the significance with 'This achievement'. E shows the broader impact. The trap: D could follow C directly, but A and B provide the evidence that justifies D's evaluation. Students must recognise that the evidence must precede the evaluation.",
  keyClues: ["'In 2020' = specific event introduction", "'The algorithm analysed' = how the system worked", "'Remarkably' = emphasises B as an impressive detail", "'This achievement' = refers to the cumulative success of C, A, B", "'By making its database' = practical consequence of D's watershed moment"]
});

PTE_REORDER.push({
  id: "ro070",
  sentences: [
    { label: "A", text: "What distinguished this intervention from previous attempts was its emphasis on community-led decision-making rather than top-down directives." },
    { label: "B", text: "Participant surveys revealed high levels of satisfaction and a strong desire for the programme to continue beyond its initial funding period." },
    { label: "C", text: "A pilot programme launched in several low-income neighbourhoods sought to reduce health disparities through targeted lifestyle education and improved access to nutritious food." },
    { label: "D", text: "Over a two-year period, participating communities experienced a measurable reduction in rates of obesity, type 2 diabetes, and cardiovascular disease." },
    { label: "E", text: "The success of this model has prompted calls for its expansion to other regions facing similar public health challenges." }
  ],
  correctOrder: ["C", "A", "D", "B", "E"],
  topic: "Medicine",
  difficulty: "hard",
  strategy: "C introduces the programme. A distinguishes it from previous attempts with 'this intervention'. D presents the outcomes over time. B provides participant feedback. E concludes with 'this model' referring to the entire programme. The trap: B could seem to follow D, and it does, but students might place B before D because surveys seem like methodology. However, satisfaction surveys assess the programme's impact, which follows D's health outcomes.",
  keyClues: ["'A pilot programme launched' = introduces the initiative", "'this intervention' = refers to C's programme", "'Over a two-year period' = quantitative outcomes", "'Participant surveys revealed' = qualitative evidence following outcomes", "'this model' = refers to the complete programme"]
});

PTE_REORDER.push({
  id: "ro071",
  sentences: [
    { label: "A", text: "The expedition documented species that were entirely new to science, including a deep-sea fish with bioluminescent organs never before observed in vertebrates." },
    { label: "B", text: "In 2023, a multinational research team conducted the deepest biological survey ever undertaken in the Pacific Ocean's Mariana Trench." },
    { label: "C", text: "The sheer depth at which these organisms were found challenges existing theories about the limits of life in extreme environments." },
    { label: "D", text: "Furthermore, the genetic analysis of these newly discovered species suggests that deep-sea biodiversity may be far greater than current estimates indicate." },
    { label: "E", text: "These revelations have intensified calls for international protections for deep-sea ecosystems, which remain largely unregulated." }
  ],
  correctOrder: ["B", "A", "C", "D", "E"],
  topic: "Science",
  difficulty: "hard",
  strategy: "B introduces the expedition. A describes discoveries with 'The expedition documented'. C discusses implications with 'these organisms'. D adds genetic analysis with 'Furthermore' and 'these newly discovered species'. E concludes with 'These revelations'. The trap: C and D both use 'these' references but serve different functions; C reflects on the depth, D on the genetics.",
  keyClues: ["'In 2023' = sets the scene", "'The expedition documented' = findings from B's survey", "'these organisms' = refers to A's species", "'Furthermore' = additional finding building on C", "'These revelations' = summarises all preceding discoveries"]
});

PTE_REORDER.push({
  id: "ro072",
  sentences: [
    { label: "A", text: "The exhibition featured works that deliberately blurred the boundary between art created by humans and art generated by artificial intelligence." },
    { label: "B", text: "Visitors were asked to identify which pieces were produced by human artists and which by algorithms, and the majority were unable to distinguish between them." },
    { label: "C", text: "A controversial art exhibition at a major European gallery recently reignited the debate over whether machines can produce genuine artistic expression." },
    { label: "D", text: "This inability raised fundamental questions about the nature of creativity and the role of intention in artistic production." },
    { label: "E", text: "Some critics argued that the experiment proved nothing, as the appreciation of art does not depend on knowledge of its origin." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Art",
  difficulty: "hard",
  strategy: "C introduces the exhibition. A describes its content with 'The exhibition featured'. B describes the audience interaction. D interprets B's result with 'This inability'. E provides critical response. The trap: A and C both describe the exhibition, making it hard to determine which comes first. C is broader (names location, describes the debate) while A is specific (describes the works).",
  keyClues: ["'recently reignited the debate' = event introduction", "'The exhibition featured' = specific content of C's exhibition", "'Visitors were asked' = audience experience", "'This inability' = refers to B's failure to distinguish", "'the experiment proved nothing' = critical response"]
});

PTE_REORDER.push({
  id: "ro073",
  sentences: [
    { label: "A", text: "The trial demonstrated that the intervention was not only clinically effective but also significantly more cost-efficient than existing standard-of-care treatments." },
    { label: "B", text: "Following a decade of research, a team of Australian medical scientists developed a novel gene therapy for a rare hereditary condition affecting approximately one in fifty thousand individuals." },
    { label: "C", text: "Regulatory authorities in several countries are now conducting accelerated reviews of the therapy, with approval expected within eighteen months." },
    { label: "D", text: "The treatment was tested in a randomised controlled trial involving three hundred patients across twenty hospitals in six countries." },
    { label: "E", text: "If approved, it would be the first gene therapy available for this condition, offering hope to thousands of patients and their families worldwide." }
  ],
  correctOrder: ["B", "D", "A", "C", "E"],
  topic: "Medicine",
  difficulty: "hard",
  strategy: "B introduces the development. D describes the trial ('The treatment was tested'). A presents the trial results. C describes the regulatory process following A's results. E projects the future impact. The trap: Students may place A before D, thinking results come from research generally. But 'The trial demonstrated' specifically refers to D's randomised controlled trial.",
  keyClues: ["'Following a decade of research' = introduces the timeline", "'The treatment was tested' = describes D's trial of B's therapy", "'The trial demonstrated' = results of D's trial specifically", "'Regulatory authorities are now' = post-trial process", "'If approved' = future conditional following C's review"]
});

PTE_REORDER.push({
  id: "ro074",
  sentences: [
    { label: "A", text: "The researchers hypothesised that prolonged exposure to green spaces would reduce cortisol levels and improve self-reported measures of psychological well-being." },
    { label: "B", text: "Contrary to expectations, participants in the urban park condition showed improvement comparable to those in natural wilderness settings." },
    { label: "C", text: "A carefully designed experiment compared the mental health effects of spending time in three different environments: urban parks, natural wilderness areas, and indoor recreation centres." },
    { label: "D", text: "This finding suggests that proximity to any form of greenery, rather than wilderness specifically, may be the critical factor in nature's therapeutic effects." },
    { label: "E", text: "The implications for urban planning are significant, as they suggest that investing in well-maintained urban green spaces may deliver mental health benefits equivalent to those of wilderness preservation." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Psychology",
  difficulty: "hard",
  strategy: "C introduces the experiment. A states the hypothesis ('The researchers hypothesised'). B reports the surprising finding with 'Contrary to expectations'. D interprets B with 'This finding suggests'. E discusses broader implications. The trap: A and C both seem like opening sentences. C is the opener because it describes the experiment design, while A states the specific hypothesis within that design.",
  keyClues: ["'A carefully designed experiment' = introduces the study design", "'The researchers hypothesised' = hypothesis follows study introduction", "'Contrary to expectations' = surprising result following A's hypothesis", "'This finding suggests' = interprets B's unexpected result", "'The implications for urban planning' = practical consequence"]
});

PTE_REORDER.push({
  id: "ro075",
  sentences: [
    { label: "A", text: "The language, which has no known relatives, features a complex system of spatial reference that encodes precise geographical information within everyday speech." },
    { label: "B", text: "Linguists working with an isolated community in the highlands of Papua New Guinea have documented a previously unrecorded language with remarkable structural properties." },
    { label: "C", text: "The discovery has attracted significant attention from cognitive scientists, who see it as evidence that language and spatial cognition are more deeply intertwined than previously assumed." },
    { label: "D", text: "Speakers of the language reportedly navigate dense forest terrain with extraordinary accuracy, a skill that researchers believe is directly supported by their linguistic framework." },
    { label: "E", text: "This case adds to a growing body of evidence challenging the universalist position that all languages share fundamentally identical cognitive structures." }
  ],
  correctOrder: ["B", "A", "D", "C", "E"],
  topic: "Linguistics",
  difficulty: "hard",
  strategy: "B introduces the discovery. A describes the language's features with 'The language, which has no known relatives'. D connects the language to navigation skills with 'Speakers of the language'. C shows the academic impact with 'The discovery has attracted'. E places it in broader theoretical context. The trap: C seems like it should follow A because both discuss the language's significance, but D must come between them as it provides the concrete evidence that C's cognitive scientists find compelling.",
  keyClues: ["'have documented' = introduces the discovery", "'The language, which has' = describes B's language", "'Speakers of the language' = connects language to behaviour", "'The discovery has attracted' = academic response to A and D", "'This case adds to' = broader theoretical framing"]
});

PTE_REORDER.push({
  id: "ro076",
  sentences: [
    { label: "A", text: "The study found that countries with higher levels of income inequality also tended to have lower levels of social trust and civic participation." },
    { label: "B", text: "A comprehensive cross-national study examined the relationship between economic inequality and social cohesion in forty-seven countries over a twenty-year period." },
    { label: "C", text: "The researchers controlled for numerous confounding variables, including GDP per capita, ethnic diversity, and government spending on social programmes." },
    { label: "D", text: "Even after accounting for these factors, the negative association between inequality and social cohesion remained statistically significant." },
    { label: "E", text: "The authors concluded that reducing economic inequality should be considered not merely an economic objective but a prerequisite for building resilient, cohesive societies." }
  ],
  correctOrder: ["B", "C", "A", "D", "E"],
  topic: "Sociology",
  difficulty: "hard",
  strategy: "B introduces the study. C describes the methodology ('controlled for'). A presents the main finding. D strengthens the finding with 'Even after accounting for these factors'. E states the conclusion. The trap: Students often place A immediately after B, but the methodology (C) must precede the findings (A) in academic writing structure. D's 'these factors' specifically refers to C's confounding variables.",
  keyClues: ["'examined the relationship' = study introduction", "'controlled for numerous confounding variables' = methodology", "'The study found' = findings after methodology", "'Even after accounting for these factors' = 'these factors' = C's variables", "'concluded that' = final conclusion"]
});

PTE_REORDER.push({
  id: "ro077",
  sentences: [
    { label: "A", text: "The project involved training a neural network on thousands of authenticated works spanning the artist's entire career." },
    { label: "B", text: "Art historians and computer scientists collaborated on an ambitious project to determine whether artificial intelligence could reliably distinguish genuine Rembrandt paintings from forgeries." },
    { label: "C", text: "The system subsequently identified two paintings in a private collection that bore all the hallmarks of Rembrandt's technique, despite having been previously dismissed as copies." },
    { label: "D", text: "Physical and chemical analysis of these paintings has since confirmed the AI's assessment, lending credibility to the technology's potential in art authentication." },
    { label: "E", text: "The AI system achieved a ninety-seven per cent accuracy rate when tested against a panel of expert human evaluators." }
  ],
  correctOrder: ["B", "A", "E", "C", "D"],
  topic: "Art",
  difficulty: "hard",
  strategy: "B introduces the project. A describes the training process. E reports the accuracy results. C describes a specific application with 'subsequently'. D confirms C's findings with 'these paintings'. The trap: E and C both report outcomes, but E (general accuracy) must precede C (specific application) because C uses 'subsequently' indicating it happened after the testing phase.",
  keyClues: ["'collaborated on an ambitious project' = introduces the initiative", "'involved training a neural network' = method/process", "'achieved a ninety-seven per cent accuracy' = test results", "'subsequently identified' = application after testing", "'these paintings' = refers specifically to C's two paintings"]
});

PTE_REORDER.push({
  id: "ro078",
  sentences: [
    { label: "A", text: "The simulation modelled the behaviour of a hypothetical economy over a fifty-year period, incorporating variables such as population growth, technological change, and climate disruption." },
    { label: "B", text: "Under most scenarios, the model predicted that economies heavily dependent on fossil fuels would experience significant GDP contraction within two decades." },
    { label: "C", text: "Economists at a leading research institute developed a sophisticated computational model to explore the long-term economic consequences of delayed climate action." },
    { label: "D", text: "Conversely, economies that invested aggressively in renewable energy infrastructure showed sustained growth even under pessimistic climate projections." },
    { label: "E", text: "The model's creators acknowledge its limitations but argue that the directional findings are robust enough to inform policy decisions being made today." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Economics",
  difficulty: "hard",
  strategy: "C introduces the model. A describes the simulation parameters. B presents the negative findings. D contrasts with 'Conversely' showing positive findings. E provides the researchers' own assessment. The trap: B and D both present findings but must be in this order because 'Conversely' in D explicitly contrasts with B's negative projection.",
  keyClues: ["'developed a sophisticated computational model' = introduces the tool", "'The simulation modelled' = describes C's model in detail", "'Under most scenarios' = first set of findings", "'Conversely' = must contrast with B's negative finding", "'The model's creators acknowledge' = reflexive assessment at the end"]
});

PTE_REORDER.push({
  id: "ro079",
  sentences: [
    { label: "A", text: "The initiative was designed to determine whether structured philosophical inquiry could improve reasoning skills and emotional regulation in young children." },
    { label: "B", text: "Teachers reported that students became more reflective, more willing to consider alternative viewpoints, and more skilled at articulating their ideas." },
    { label: "C", text: "An innovative educational programme introduced philosophy classes to primary school students aged six to ten across thirty schools in a major Australian city." },
    { label: "D", text: "Standardised assessments confirmed these observations, showing measurable gains in reading comprehension, logical reasoning, and collaborative problem-solving." },
    { label: "E", text: "The programme's success has led to proposals for its inclusion in the national curriculum, though debates about implementation and teacher training persist." }
  ],
  correctOrder: ["C", "A", "B", "D", "E"],
  topic: "Education",
  difficulty: "hard",
  strategy: "C introduces the programme. A states its aim ('The initiative was designed to determine'). B provides qualitative evidence from teachers. D provides quantitative evidence with 'confirmed these observations'. E discusses the future with 'The programme's success'. The trap: B and D both present evidence, but D must follow B because 'confirmed these observations' refers directly to B's teacher reports.",
  keyClues: ["'introduced philosophy classes' = programme launch", "'The initiative was designed to' = programme purpose", "'Teachers reported' = qualitative evidence", "'confirmed these observations' = 'these' refers to B's reports", "'The programme's success' = overall conclusion"]
});

PTE_REORDER.push({
  id: "ro080",
  sentences: [
    { label: "A", text: "The preserved organisms included soft-bodied creatures whose fossilisation is extremely rare, providing an unprecedented window into the diversity of life during that period." },
    { label: "B", text: "Among the most significant specimens was a complete arthropod with neural tissue intact, allowing researchers to study the earliest known complex nervous system." },
    { label: "C", text: "Palaeontologists have discovered an exceptionally well-preserved fossil assemblage in a remote region of western China, dating to the Cambrian period approximately five hundred and twenty million years ago." },
    { label: "D", text: "This discovery has the potential to fundamentally alter our understanding of how complex animal life evolved and diversified during the Cambrian explosion." },
    { label: "E", text: "The site has been compared to the famous Burgess Shale in Canada, though initial assessments suggest it may contain an even greater variety of species." }
  ],
  correctOrder: ["C", "A", "B", "E", "D"],
  topic: "Science",
  difficulty: "hard",
  strategy: "C introduces the fossil discovery. A describes the preserved organisms. B highlights the most significant specimen with 'Among the most significant'. E compares to the Burgess Shale. D provides the broadest significance statement. The trap: D looks like a concluding sentence that could follow B directly, but E must come before D because E establishes the comparison that amplifies the significance expressed in D. 'This discovery' in D encompasses everything from C through E.",
  keyClues: ["'have discovered' = introduces the finding", "'The preserved organisms included' = describes C's assemblage", "'Among the most significant' = highlights one specimen from A", "'has been compared to the famous Burgess Shale' = contextualises the site", "'This discovery has the potential' = broadest significance, must conclude"]
});
