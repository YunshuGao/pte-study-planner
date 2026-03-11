/* PTE 语料库 — Sentence Corpus & Idea Bank
   100 memorizable sentences + 100 essay ideas for PTE writing
   Organised by function (sentences) and topic (ideas)         */

// ═══════════════════════════════════════════════════
// SENTENCE CORPUS — 100 plug-and-play academic sentences
// Each: id, text, category, position (intro/body/conc/any)
// [TOPIC] = replace with your essay topic
// ═══════════════════════════════════════════════════

var SENTENCE_CORPUS = [

  // ── INTRODUCTION OPENERS (1-20) ────────────────────
  { id: 's1',  cat: 'intro', text: 'In recent years, the issue of [TOPIC] has attracted considerable public attention.', pos: 'intro' },
  { id: 's2',  cat: 'intro', text: 'It is widely acknowledged that [TOPIC] plays a significant role in contemporary society.', pos: 'intro' },
  { id: 's3',  cat: 'intro', text: 'The question of whether [TOPIC] has been the subject of heated debate among scholars and policymakers alike.', pos: 'intro' },
  { id: 's4',  cat: 'intro', text: '[TOPIC] has become one of the most pressing issues facing the modern world.', pos: 'intro' },
  { id: 's5',  cat: 'intro', text: 'There is growing concern about the impact of [TOPIC] on individuals and society as a whole.', pos: 'intro' },
  { id: 's6',  cat: 'intro', text: 'While opinions on [TOPIC] vary considerably, I firmly believe that the benefits outweigh the drawbacks.', pos: 'intro' },
  { id: 's7',  cat: 'intro', text: 'The rapid development of [TOPIC] has fundamentally transformed the way people live and work.', pos: 'intro' },
  { id: 's8',  cat: 'intro', text: 'Although [TOPIC] remains a contentious issue, there are compelling reasons to support this development.', pos: 'intro' },
  { id: 's9',  cat: 'intro', text: 'This essay will argue that [POSITION], drawing on evidence from both social research and practical experience.', pos: 'intro' },
  { id: 's10', cat: 'intro', text: 'The extent to which [TOPIC] benefits society depends largely on how it is managed and regulated.', pos: 'intro' },
  { id: 's11', cat: 'intro', text: 'In an increasingly interconnected world, the significance of [TOPIC] cannot be overstated.', pos: 'intro' },
  { id: 's12', cat: 'intro', text: 'Both proponents and critics of [TOPIC] present persuasive arguments, yet a careful analysis reveals a clear direction.', pos: 'intro' },
  { id: 's13', cat: 'intro', text: 'Over the past decade, [TOPIC] has undergone a dramatic transformation, raising important questions about its long-term implications.', pos: 'intro' },
  { id: 's14', cat: 'intro', text: 'As societies continue to evolve, the role of [TOPIC] in shaping our future has never been more critical.', pos: 'intro' },
  { id: 's15', cat: 'intro', text: 'The ongoing debate surrounding [TOPIC] reflects deeper tensions between economic progress and social well-being.', pos: 'intro' },
  { id: 's16', cat: 'intro', text: 'Few topics generate as much controversy as [TOPIC], which touches on fundamental aspects of human life.', pos: 'intro' },
  { id: 's17', cat: 'intro', text: 'Despite the widespread popularity of [TOPIC], there remain legitimate concerns that deserve careful consideration.', pos: 'intro' },
  { id: 's18', cat: 'intro', text: 'The increasing prevalence of [TOPIC] has prompted governments and organisations worldwide to re-evaluate their policies.', pos: 'intro' },
  { id: 's19', cat: 'intro', text: 'It is often argued that [COMMON VIEW], but a closer examination suggests that the reality is more nuanced.', pos: 'intro' },
  { id: 's20', cat: 'intro', text: 'This essay contends that [POSITION], supported by evidence from education, economics, and social science.', pos: 'intro' },

  // ── BODY — TOPIC SENTENCES (21-35) ─────────────────
  { id: 's21', cat: 'argument', text: 'One of the primary reasons for supporting [POSITION] is its positive impact on economic development.', pos: 'body' },
  { id: 's22', cat: 'argument', text: 'The most compelling argument in favour of [POSITION] relates to its ability to promote social equality.', pos: 'body' },
  { id: 's23', cat: 'argument', text: 'From an educational perspective, [TOPIC] offers significant advantages that should not be overlooked.', pos: 'body' },
  { id: 's24', cat: 'argument', text: 'A further consideration is the potential of [TOPIC] to enhance the quality of life for individuals and communities.', pos: 'body' },
  { id: 's25', cat: 'argument', text: 'Another significant benefit of [TOPIC] is its contribution to technological innovation and scientific progress.', pos: 'body' },
  { id: 's26', cat: 'argument', text: 'Perhaps the strongest argument against [TOPIC] concerns its negative effects on the environment and public health.', pos: 'body' },
  { id: 's27', cat: 'argument', text: 'The relationship between [TOPIC] and economic growth is well documented in academic literature.', pos: 'body' },
  { id: 's28', cat: 'argument', text: 'It is essential to recognise that [TOPIC] affects different segments of society in different ways.', pos: 'body' },
  { id: 's29', cat: 'argument', text: 'A key factor that supports this view is the overwhelming evidence from recent international studies.', pos: 'body' },
  { id: 's30', cat: 'argument', text: 'The importance of [TOPIC] becomes evident when one considers its long-term implications for future generations.', pos: 'body' },
  { id: 's31', cat: 'argument', text: 'From a practical standpoint, [POSITION] offers a more sustainable and cost-effective solution.', pos: 'body' },
  { id: 's32', cat: 'argument', text: 'What makes this issue particularly significant is its direct connection to individual rights and freedoms.', pos: 'body' },
  { id: 's33', cat: 'argument', text: 'The evidence strongly suggests that [TOPIC] is not merely a trend but a fundamental shift in how we approach [AREA].', pos: 'body' },
  { id: 's34', cat: 'argument', text: 'Central to this debate is the question of whether [TOPIC] should be seen as a right or a privilege.', pos: 'body' },
  { id: 's35', cat: 'argument', text: 'One cannot discuss [TOPIC] without addressing its profound influence on social structures and cultural norms.', pos: 'body' },

  // ── BODY — EVIDENCE & EXAMPLES (36-55) ─────────────
  { id: 's36', cat: 'evidence', text: 'For example, a recent study published by the World Health Organisation found that [EVIDENCE].', pos: 'body' },
  { id: 's37', cat: 'evidence', text: 'This is clearly demonstrated by the case of [COUNTRY/ORGANISATION], where [WHAT HAPPENED].', pos: 'body' },
  { id: 's38', cat: 'evidence', text: 'Research conducted by leading universities has consistently shown that [FINDING].', pos: 'body' },
  { id: 's39', cat: 'evidence', text: 'A notable example of this can be seen in Scandinavian countries, which have successfully implemented [POLICY].', pos: 'body' },
  { id: 's40', cat: 'evidence', text: 'According to recent statistics, approximately [NUMBER]% of the population has been affected by this issue.', pos: 'body' },
  { id: 's41', cat: 'evidence', text: 'The experience of countries such as Japan and Germany illustrates that [LESSON].', pos: 'body' },
  { id: 's42', cat: 'evidence', text: 'For instance, the implementation of [POLICY] in Australia resulted in a significant improvement in [OUTCOME].', pos: 'body' },
  { id: 's43', cat: 'evidence', text: 'This phenomenon is particularly evident in developing nations, where [OBSERVATION].', pos: 'body' },
  { id: 's44', cat: 'evidence', text: 'Numerous case studies have confirmed that [FINDING], reinforcing the validity of this argument.', pos: 'body' },
  { id: 's45', cat: 'evidence', text: 'The OECD data reveals a strong correlation between [FACTOR A] and [FACTOR B] across member countries.', pos: 'body' },
  { id: 's46', cat: 'evidence', text: 'Historical evidence suggests that societies which embraced [CHANGE] experienced greater prosperity and stability.', pos: 'body' },
  { id: 's47', cat: 'evidence', text: 'A survey of over 10,000 respondents indicated that the majority supported [POSITION], with [X]% expressing strong agreement.', pos: 'body' },
  { id: 's48', cat: 'evidence', text: 'In the context of [COUNTRY], this policy has proven remarkably effective, reducing [PROBLEM] by over [X]%.', pos: 'body' },
  { id: 's49', cat: 'evidence', text: 'The success of [INITIATIVE] serves as a powerful reminder that meaningful change is achievable when stakeholders collaborate.', pos: 'body' },
  { id: 's50', cat: 'evidence', text: 'Real-world examples from both developed and developing nations confirm that [FINDING] holds true across diverse contexts.', pos: 'body' },
  { id: 's51', cat: 'evidence', text: 'This trend is supported by longitudinal data spanning more than two decades of systematic observation.', pos: 'body' },
  { id: 's52', cat: 'evidence', text: 'Experts in the field of [AREA] have consistently argued that [EXPERT VIEW], lending credibility to this perspective.', pos: 'body' },
  { id: 's53', cat: 'evidence', text: 'The World Bank estimates that [STATISTIC], underscoring the urgency of addressing this issue.', pos: 'body' },
  { id: 's54', cat: 'evidence', text: 'In my own experience, [PERSONAL OBSERVATION], which aligns with the broader research findings.', pos: 'body' },
  { id: 's55', cat: 'evidence', text: 'The effectiveness of this approach is evidenced by its widespread adoption in over 30 countries globally.', pos: 'body' },

  // ── BODY — EXPLANATION & ANALYSIS (56-70) ──────────
  { id: 's56', cat: 'explain', text: 'This clearly demonstrates that [CONCLUSION], which directly supports the central thesis of this essay.', pos: 'body' },
  { id: 's57', cat: 'explain', text: 'As a result, it becomes evident that [TOPIC] is not only beneficial but essential for societal progress.', pos: 'body' },
  { id: 's58', cat: 'explain', text: 'This evidence suggests that the advantages of [TOPIC] significantly outweigh any potential disadvantages.', pos: 'body' },
  { id: 's59', cat: 'explain', text: 'The implication of this finding is that governments should invest more resources in [AREA] to maximise these benefits.', pos: 'body' },
  { id: 's60', cat: 'explain', text: 'Consequently, it is reasonable to conclude that [TOPIC] plays a crucial role in addressing contemporary challenges.', pos: 'body' },
  { id: 's61', cat: 'explain', text: 'This connection between [A] and [B] highlights the need for a more comprehensive approach to [ISSUE].', pos: 'body' },
  { id: 's62', cat: 'explain', text: 'The significance of this cannot be underestimated, as it directly affects millions of people worldwide.', pos: 'body' },
  { id: 's63', cat: 'explain', text: 'Such outcomes reinforce the argument that [POSITION] is not merely desirable but imperative.', pos: 'body' },
  { id: 's64', cat: 'explain', text: 'Therefore, it is clear that addressing [TOPIC] requires a multifaceted strategy involving education, legislation, and public awareness.', pos: 'body' },
  { id: 's65', cat: 'explain', text: 'This analysis reveals a fundamental truth: sustainable progress depends on balancing economic growth with social responsibility.', pos: 'body' },
  { id: 's66', cat: 'explain', text: 'The underlying reason for this trend can be attributed to rapid urbanisation and changing social dynamics.', pos: 'body' },
  { id: 's67', cat: 'explain', text: 'What this illustrates is that superficial measures are insufficient; systemic reform is necessary to achieve lasting change.', pos: 'body' },
  { id: 's68', cat: 'explain', text: 'These findings collectively point to the conclusion that [POSITION] is supported by both theoretical and empirical evidence.', pos: 'body' },
  { id: 's69', cat: 'explain', text: 'The broader implications of this trend extend beyond individual well-being to encompass national productivity and global competitiveness.', pos: 'body' },
  { id: 's70', cat: 'explain', text: 'In other words, without proactive intervention, the negative consequences of [TOPIC] will continue to escalate.', pos: 'body' },

  // ── CONCESSION & COUNTER (71-82) ───────────────────
  { id: 's71', cat: 'concession', text: 'Admittedly, opponents of this view raise a valid point when they argue that [OPPOSING VIEW].', pos: 'body' },
  { id: 's72', cat: 'concession', text: 'While it is true that [CONCESSION], this does not negate the overwhelming evidence in favour of [POSITION].', pos: 'body' },
  { id: 's73', cat: 'concession', text: 'Nevertheless, this concern can be effectively addressed through proper regulation and oversight.', pos: 'body' },
  { id: 's74', cat: 'concession', text: 'Despite these valid criticisms, the overall trajectory of [TOPIC] suggests a predominantly positive outcome.', pos: 'body' },
  { id: 's75', cat: 'concession', text: 'It must be acknowledged that [DRAWBACK] remains a legitimate concern, yet the benefits far exceed the risks.', pos: 'body' },
  { id: 's76', cat: 'concession', text: 'Those who oppose [TOPIC] often cite [REASON], but this argument overlooks several critical factors.', pos: 'body' },
  { id: 's77', cat: 'concession', text: 'Granted, there are potential risks associated with [TOPIC], but these can be mitigated through careful planning and implementation.', pos: 'body' },
  { id: 's78', cat: 'concession', text: 'However, this perspective fails to account for the long-term benefits that [TOPIC] brings to society.', pos: 'body' },
  { id: 's79', cat: 'concession', text: 'On the other hand, some scholars maintain that [COUNTER VIEW], which presents a thought-provoking alternative.', pos: 'body' },
  { id: 's80', cat: 'concession', text: 'While the short-term costs of [TOPIC] may appear significant, the long-term returns justify the initial investment.', pos: 'body' },
  { id: 's81', cat: 'concession', text: 'Critics may argue that [CRITICISM], yet empirical evidence consistently contradicts this assumption.', pos: 'body' },
  { id: 's82', cat: 'concession', text: 'Although this counterargument has some merit, it ultimately fails to undermine the central thesis presented here.', pos: 'body' },

  // ── CONCLUSION SENTENCES (83-95) ───────────────────
  { id: 's83', cat: 'conclusion', text: 'In conclusion, the evidence presented in this essay strongly supports the view that [THESIS RESTATEMENT].', pos: 'conc' },
  { id: 's84', cat: 'conclusion', text: 'Taking all factors into consideration, it is clear that [POSITION] offers the most viable path forward.', pos: 'conc' },
  { id: 's85', cat: 'conclusion', text: 'To sum up, both the theoretical arguments and practical evidence demonstrate that [THESIS].', pos: 'conc' },
  { id: 's86', cat: 'conclusion', text: 'In light of the arguments presented above, I firmly maintain that [POSITION] is essential for future progress.', pos: 'conc' },
  { id: 's87', cat: 'conclusion', text: 'Ultimately, addressing [TOPIC] requires the collective effort of governments, institutions, and individuals.', pos: 'conc' },
  { id: 's88', cat: 'conclusion', text: 'It is therefore imperative that stakeholders act decisively to ensure that [DESIRED OUTCOME] is achieved.', pos: 'conc' },
  { id: 's89', cat: 'conclusion', text: 'Only through sustained commitment and collaborative action can society fully realise the potential of [TOPIC].', pos: 'conc' },
  { id: 's90', cat: 'conclusion', text: 'Moving forward, policymakers should prioritise [ACTION] to maximise the benefits while minimising the risks.', pos: 'conc' },
  { id: 's91', cat: 'conclusion', text: 'The time has come for a paradigm shift in how we approach [TOPIC], one that balances progress with responsibility.', pos: 'conc' },
  { id: 's92', cat: 'conclusion', text: 'In summary, [TOPIC] represents both a challenge and an opportunity, and it is our collective responsibility to manage it wisely.', pos: 'conc' },
  { id: 's93', cat: 'conclusion', text: 'All things considered, the advantages of [POSITION] clearly outweigh any associated drawbacks.', pos: 'conc' },
  { id: 's94', cat: 'conclusion', text: 'As the world continues to change, the importance of [TOPIC] will only grow, making proactive engagement essential.', pos: 'conc' },
  { id: 's95', cat: 'conclusion', text: 'This essay has demonstrated that [TOPIC] is not merely an abstract concept but a practical necessity for modern society.', pos: 'conc' },

  // ── UNIVERSAL CONNECTORS & TRANSITIONS (96-100) ────
  { id: 's96',  cat: 'transition', text: 'Having examined the advantages, it is equally important to consider the potential challenges associated with [TOPIC].', pos: 'any' },
  { id: 's97',  cat: 'transition', text: 'This brings us to the second key argument, which centres on the social implications of [TOPIC].', pos: 'any' },
  { id: 's98',  cat: 'transition', text: 'Building on this point, it is worth noting that [RELATED OBSERVATION] further strengthens this position.', pos: 'any' },
  { id: 's99',  cat: 'transition', text: 'With these considerations in mind, let us now turn to the practical applications of [TOPIC].', pos: 'any' },
  { id: 's100', cat: 'transition', text: 'The preceding discussion highlights a broader pattern that warrants further examination.', pos: 'any' }
];

// Category metadata for display
var CORPUS_CATEGORIES = {
  intro:      { label: 'Introduction Openers', color: '#2c5f8a', icon: '1', count: 20 },
  argument:   { label: 'Topic Sentences',      color: '#27ae60', icon: '2', count: 15 },
  evidence:   { label: 'Evidence & Examples',   color: '#e67e22', icon: '3', count: 20 },
  explain:    { label: 'Explanation & Analysis', color: '#8e44ad', icon: '4', count: 15 },
  concession: { label: 'Concession & Counter',  color: '#c0392b', icon: '5', count: 12 },
  conclusion: { label: 'Conclusion Sentences',  color: '#1a8a7d', icon: '6', count: 13 },
  transition: { label: 'Transitions',           color: '#7f8c8d', icon: '7', count: 5 }
};


// ═══════════════════════════════════════════════════
// IDEA BANK — 100 essay arguments by PTE topic
// Each: id, topic, idea (a single argument point)
// ═══════════════════════════════════════════════════

var IDEA_BANK = [

  // ── EDUCATION (1-14) ───────────────────────────────
  { id: 'i1',  topic: 'Education', idea: 'Free university education promotes social mobility and reduces income inequality across generations.' },
  { id: 'i2',  topic: 'Education', idea: 'Practical skills such as financial literacy and critical thinking should be taught alongside traditional academic subjects.' },
  { id: 'i3',  topic: 'Education', idea: 'Online learning offers flexibility but lacks the social interaction essential for developing communication skills.' },
  { id: 'i4',  topic: 'Education', idea: 'Standardised testing fails to measure creativity, collaboration, and other vital 21st-century skills.' },
  { id: 'i5',  topic: 'Education', idea: 'Early childhood education has a lasting positive impact on cognitive development and academic achievement.' },
  { id: 'i6',  topic: 'Education', idea: 'Teachers should be among the highest-paid professionals because they shape the future of society.' },
  { id: 'i7',  topic: 'Education', idea: 'Studying abroad broadens cultural awareness and enhances employability in the global job market.' },
  { id: 'i8',  topic: 'Education', idea: 'Arts and humanities education develops empathy and ethical reasoning, which are crucial for democratic societies.' },
  { id: 'i9',  topic: 'Education', idea: 'The digital divide means that technology in education can widen existing inequalities rather than reduce them.' },
  { id: 'i10', topic: 'Education', idea: 'Lifelong learning is becoming essential as rapid technological change makes many traditional skills obsolete.' },
  { id: 'i11', topic: 'Education', idea: 'Smaller class sizes allow for more personalised attention and lead to better learning outcomes.' },
  { id: 'i12', topic: 'Education', idea: 'Vocational training is just as valuable as university education and should receive equal funding and respect.' },
  { id: 'i13', topic: 'Education', idea: 'Bilingual education enhances cognitive flexibility and opens doors to multicultural understanding.' },
  { id: 'i14', topic: 'Education', idea: 'Homework in moderation reinforces learning, but excessive homework causes stress and reduces family time.' },

  // ── TECHNOLOGY (15-28) ─────────────────────────────
  { id: 'i15', topic: 'Technology', idea: 'Artificial intelligence has the potential to revolutionise healthcare by enabling faster and more accurate diagnoses.' },
  { id: 'i16', topic: 'Technology', idea: 'Social media connects people globally but can contribute to mental health issues such as anxiety and depression.' },
  { id: 'i17', topic: 'Technology', idea: 'Automation will displace many jobs but will also create new roles that require higher-level skills.' },
  { id: 'i18', topic: 'Technology', idea: 'Personal data privacy is increasingly threatened as companies collect and monetise user information.' },
  { id: 'i19', topic: 'Technology', idea: 'Screen time limits for children are necessary to protect their physical health and cognitive development.' },
  { id: 'i20', topic: 'Technology', idea: 'Technological innovation drives economic growth and improves living standards across developed and developing nations.' },
  { id: 'i21', topic: 'Technology', idea: 'The spread of misinformation online undermines democratic processes and erodes public trust in institutions.' },
  { id: 'i22', topic: 'Technology', idea: 'Remote work enabled by technology improves work-life balance but can lead to isolation and blurred boundaries.' },
  { id: 'i23', topic: 'Technology', idea: 'Cashless payment systems improve convenience and reduce crime but exclude vulnerable populations without digital access.' },
  { id: 'i24', topic: 'Technology', idea: 'Space exploration, though expensive, yields technological breakthroughs that benefit everyday life on Earth.' },
  { id: 'i25', topic: 'Technology', idea: 'Governments should regulate technology companies to prevent monopolistic practices and protect consumer rights.' },
  { id: 'i26', topic: 'Technology', idea: 'E-books and digital libraries make knowledge more accessible but cannot fully replace the experience of physical reading.' },
  { id: 'i27', topic: 'Technology', idea: 'Cybersecurity threats are growing, and both governments and individuals must invest in digital protection measures.' },
  { id: 'i28', topic: 'Technology', idea: 'Telemedicine expands healthcare access to rural areas but cannot replace the value of in-person medical consultations.' },

  // ── ENVIRONMENT (29-40) ────────────────────────────
  { id: 'i29', topic: 'Environment', idea: 'Renewable energy sources such as solar and wind power are essential for reducing carbon emissions and combating climate change.' },
  { id: 'i30', topic: 'Environment', idea: 'Individuals have a responsibility to adopt sustainable habits, but systemic change requires government intervention.' },
  { id: 'i31', topic: 'Environment', idea: 'Deforestation for agricultural purposes threatens biodiversity and accelerates global warming.' },
  { id: 'i32', topic: 'Environment', idea: 'Carbon taxes incentivise businesses to reduce emissions while generating revenue for green initiatives.' },
  { id: 'i33', topic: 'Environment', idea: 'Plastic pollution in oceans poses a severe threat to marine ecosystems and, ultimately, human food chains.' },
  { id: 'i34', topic: 'Environment', idea: 'Urban green spaces improve mental health, air quality, and community well-being in densely populated cities.' },
  { id: 'i35', topic: 'Environment', idea: 'International cooperation is essential for addressing environmental challenges that transcend national borders.' },
  { id: 'i36', topic: 'Environment', idea: 'Sustainable agriculture practices can feed growing populations without depleting natural resources.' },
  { id: 'i37', topic: 'Environment', idea: 'Electric vehicles reduce air pollution but their environmental benefit depends on how the electricity is generated.' },
  { id: 'i38', topic: 'Environment', idea: 'Water scarcity is an emerging global crisis that requires immediate investment in conservation and purification technologies.' },
  { id: 'i39', topic: 'Environment', idea: 'Eco-tourism raises awareness of environmental issues while providing economic benefits to local communities.' },
  { id: 'i40', topic: 'Environment', idea: 'Fast fashion contributes significantly to environmental degradation through waste, water pollution, and carbon emissions.' },

  // ── HEALTH (41-52) ─────────────────────────────────
  { id: 'i41', topic: 'Health', idea: 'Universal healthcare ensures that all citizens can access medical treatment regardless of their financial situation.' },
  { id: 'i42', topic: 'Health', idea: 'Preventive medicine is more cost-effective than treating diseases after they develop.' },
  { id: 'i43', topic: 'Health', idea: 'Mental health should receive the same level of funding and public attention as physical health.' },
  { id: 'i44', topic: 'Health', idea: 'Taxing unhealthy foods such as sugary drinks can reduce obesity rates and generate revenue for public health programmes.' },
  { id: 'i45', topic: 'Health', idea: 'Regular physical exercise improves not only physical health but also cognitive function and emotional well-being.' },
  { id: 'i46', topic: 'Health', idea: 'The ageing population places increasing pressure on healthcare systems and pension funds in developed countries.' },
  { id: 'i47', topic: 'Health', idea: 'Smoking bans in public places protect non-smokers from second-hand smoke and encourage healthier lifestyles.' },
  { id: 'i48', topic: 'Health', idea: 'Access to clean water and sanitation remains the most fundamental public health issue in developing nations.' },
  { id: 'i49', topic: 'Health', idea: 'Genetic engineering offers the potential to eliminate hereditary diseases but raises profound ethical questions.' },
  { id: 'i50', topic: 'Health', idea: 'Work-related stress is a growing public health concern that affects productivity and quality of life.' },
  { id: 'i51', topic: 'Health', idea: 'Vaccination programmes are one of the most effective public health interventions in human history.' },
  { id: 'i52', topic: 'Health', idea: 'Sleep deprivation among young people is linked to poor academic performance, obesity, and mental health disorders.' },

  // ── SOCIETY & CULTURE (53-64) ──────────────────────
  { id: 'i53', topic: 'Society', idea: 'Globalisation enriches cultures through exchange but can also threaten local traditions and languages.' },
  { id: 'i54', topic: 'Society', idea: 'Gender equality in the workplace benefits not only women but also improves organisational performance and innovation.' },
  { id: 'i55', topic: 'Society', idea: 'Multiculturalism strengthens societies by promoting tolerance, creativity, and a broader range of perspectives.' },
  { id: 'i56', topic: 'Society', idea: 'Volunteer work builds community cohesion and develops valuable skills in young people.' },
  { id: 'i57', topic: 'Society', idea: 'The widening gap between rich and poor undermines social stability and democratic participation.' },
  { id: 'i58', topic: 'Society', idea: 'Preserving cultural heritage is important for maintaining national identity in an increasingly homogenised world.' },
  { id: 'i59', topic: 'Society', idea: 'Urbanisation offers economic opportunities but creates challenges such as housing shortages and overcrowding.' },
  { id: 'i60', topic: 'Society', idea: 'Language learning should begin at an early age when the brain is most receptive to acquiring new languages.' },
  { id: 'i61', topic: 'Society', idea: 'The elderly population deserves greater respect and integration into community life, not isolation in care facilities.' },
  { id: 'i62', topic: 'Society', idea: 'Sports participation teaches teamwork, discipline, and resilience — qualities that benefit all areas of life.' },
  { id: 'i63', topic: 'Society', idea: 'Public libraries remain essential community resources that promote literacy and lifelong learning.' },
  { id: 'i64', topic: 'Society', idea: 'Immigration brings economic benefits through labour force growth and cultural diversity, despite short-term adjustment costs.' },

  // ── GOVERNMENT & POLICY (65-76) ────────────────────
  { id: 'i65', topic: 'Government', idea: 'Governments have a responsibility to regulate industries that pose risks to public health and environmental safety.' },
  { id: 'i66', topic: 'Government', idea: 'Investing in public transport reduces traffic congestion, air pollution, and dependence on fossil fuels.' },
  { id: 'i67', topic: 'Government', idea: 'Freedom of speech is fundamental to democracy but should be balanced with protections against hate speech.' },
  { id: 'i68', topic: 'Government', idea: 'Foreign aid programmes should focus on building local capacity rather than creating dependency.' },
  { id: 'i69', topic: 'Government', idea: 'Transparent governance and anti-corruption measures are essential for economic development and public trust.' },
  { id: 'i70', topic: 'Government', idea: 'Compulsory voting ensures higher democratic participation but may compromise the quality of voter decision-making.' },
  { id: 'i71', topic: 'Government', idea: 'Censorship of the internet restricts individual freedoms and hinders the free flow of information in society.' },
  { id: 'i72', topic: 'Government', idea: 'Public funding for the arts enriches society and makes cultural experiences accessible to all income levels.' },
  { id: 'i73', topic: 'Government', idea: 'A universal basic income could reduce poverty and provide security in an era of increasing automation.' },
  { id: 'i74', topic: 'Government', idea: 'National service programmes develop civic responsibility and bridge social divides among young people.' },
  { id: 'i75', topic: 'Government', idea: 'Privacy rights must be protected even as governments expand surveillance in the name of national security.' },
  { id: 'i76', topic: 'Government', idea: 'Decentralisation of government services improves responsiveness to local needs and promotes regional development.' },

  // ── ECONOMY & WORK (77-88) ─────────────────────────
  { id: 'i77', topic: 'Economy', idea: 'A minimum wage ensures a basic standard of living but may increase unemployment if set too high.' },
  { id: 'i78', topic: 'Economy', idea: 'Entrepreneurship drives innovation, creates jobs, and is essential for a dynamic and competitive economy.' },
  { id: 'i79', topic: 'Economy', idea: 'Globalisation has lifted millions out of poverty but has also widened inequality within countries.' },
  { id: 'i80', topic: 'Economy', idea: 'Work-life balance is essential for employee well-being and actually increases long-term productivity.' },
  { id: 'i81', topic: 'Economy', idea: 'The gig economy offers flexibility but often lacks job security, benefits, and legal protections for workers.' },
  { id: 'i82', topic: 'Economy', idea: 'Women\'s economic empowerment contributes to national GDP growth and improves outcomes for families and communities.' },
  { id: 'i83', topic: 'Economy', idea: 'Tourism generates significant revenue but can damage local environments and displace traditional communities.' },
  { id: 'i84', topic: 'Economy', idea: 'Small and medium enterprises are the backbone of most economies and deserve targeted government support.' },
  { id: 'i85', topic: 'Economy', idea: 'Consumer spending drives economic growth, but excessive consumerism leads to debt and environmental harm.' },
  { id: 'i86', topic: 'Economy', idea: 'Investing in infrastructure creates jobs in the short term and boosts productivity in the long term.' },
  { id: 'i87', topic: 'Economy', idea: 'Trade agreements benefit participating nations through specialisation but may harm uncompetitive domestic industries.' },
  { id: 'i88', topic: 'Economy', idea: 'Financial literacy education reduces personal debt and improves economic decision-making across all age groups.' },

  // ── MEDIA & CRIME (89-100) ─────────────────────────
  { id: 'i89',  topic: 'Media', idea: 'Traditional media maintains higher journalistic standards than social media, where anyone can publish unverified information.' },
  { id: 'i90',  topic: 'Media', idea: 'Advertising influences consumer behaviour and can promote unrealistic body image and materialistic values.' },
  { id: 'i91',  topic: 'Media', idea: 'Media literacy education helps citizens critically evaluate information sources and resist manipulation.' },
  { id: 'i92',  topic: 'Media', idea: 'Streaming services have democratised entertainment but threaten the economic viability of traditional cinema and music.' },
  { id: 'i93',  topic: 'Crime', idea: 'Rehabilitation programmes are more effective than harsh punishment in reducing recidivism and reintegrating offenders.' },
  { id: 'i94',  topic: 'Crime', idea: 'Poverty and lack of education are root causes of crime, and addressing them is more effective than increasing policing.' },
  { id: 'i95',  topic: 'Crime', idea: 'Surveillance cameras deter crime in public spaces but raise concerns about privacy and civil liberties.' },
  { id: 'i96',  topic: 'Crime', idea: 'Cybercrime is growing rapidly and requires international cooperation and updated legislation to combat effectively.' },
  { id: 'i97',  topic: 'Crime', idea: 'Drug legalisation and regulation may reduce crime and improve public health outcomes compared to prohibition.' },
  { id: 'i98',  topic: 'Crime', idea: 'Youth crime prevention through community programmes and mentoring is more cost-effective than incarceration.' },
  { id: 'i99',  topic: 'Crime', idea: 'Restorative justice, which focuses on healing rather than punishment, benefits both victims and offenders.' },
  { id: 'i100', topic: 'Crime', idea: 'Gun control legislation reduces firearm-related deaths, as demonstrated by countries such as Australia and Japan.' }
];

// Topic metadata for display
var IDEA_TOPICS = {
  Education:   { color: '#2c5f8a', icon: '📚' },
  Technology:  { color: '#8e44ad', icon: '💻' },
  Environment: { color: '#27ae60', icon: '🌍' },
  Health:      { color: '#c0392b', icon: '🏥' },
  Society:     { color: '#e67e22', icon: '👥' },
  Government:  { color: '#1a8a7d', icon: '🏛' },
  Economy:     { color: '#2c5f8a', icon: '📊' },
  Media:       { color: '#8e44ad', icon: '📱' },
  Crime:       { color: '#7f8c8d', icon: '⚖' }
};
