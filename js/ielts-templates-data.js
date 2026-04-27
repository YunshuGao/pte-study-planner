/* IELTS Templates & Band 7-8 Strategies — Yunshu Gao
   Target: L 8.5→9, R 8.5→9, S 7→8, W 7→8 by Dec 2026 */

var IELTS_TEMPLATES = {

  /* ═══════════ BAND 7 → 8 GAP ═══════════ */
  bandGap: {
    speaking: {
      band7: 'Speaks at length though may show loss of coherence at times. Uses range of connectives flexibly. Uses vocabulary resource flexibly to discuss variety of topics. Uses some less common vocabulary. Uses range of complex structures with some flexibility. Uses range of pronunciation features with mixed control.',
      band8: 'Speaks fluently with only occasional repetition or self-correction. Hesitation is content-related, not language-related. Uses wide vocabulary resource readily and flexibly. Uses less common and idiomatic vocabulary skilfully. Uses wide range of structures flexibly with majority of sentences error-free.',
      criticalDifferences: [
        {
          area: 'Fluency & Coherence',
          b7: 'Uses connectives correctly but sometimes mechanically (firstly, secondly, in conclusion).',
          b8: 'Uses cohesion naturally and flexibly. Hesitation only when thinking about IDEAS, not words.',
          strategy: 'Drill 1-minute monologues on random topics daily. Record yourself. If you pause to find a word, mark that word — review and replace with a synonym you can use automatically.'
        },
        {
          area: 'Lexical Resource',
          b7: 'Uses adequate vocabulary with some less common items but with imprecise use.',
          b8: 'Uses idiomatic vocabulary skilfully. Wide collocation range. Precise word choice.',
          strategy: 'Build a "topic word bank" of 10 expressions per common topic (work, family, technology, environment). Learn collocations, not single words: "raise concerns" not "concerns", "deeply ingrained" not "ingrained".'
        },
        {
          area: 'Grammatical Range',
          b7: 'Uses mix of complex structures but with errors that rarely impede communication.',
          b8: 'Uses wide range of structures flexibly. Most sentences error-free.',
          strategy: 'Master 5 advanced structures: (1) cleft sentences "What I find fascinating is...", (2) conditionals "Had I known...", (3) inversion "Not only does..., but also...", (4) participle phrases "Having considered both sides...", (5) nominalisation "the implementation of policies".'
        },
        {
          area: 'Pronunciation',
          b7: 'Some control of pronunciation features. Mixed effect on listener.',
          b8: 'Uses wide range of pronunciation features. Sustained, easy to understand throughout.',
          strategy: 'Focus areas for Mandarin speakers: TH (think/this), V vs W (very/we), L vs R (light/right), final consonants (worked, sixths), word stress (PHOtograph vs phoTOgrapher), sentence intonation rises on questions.'
        }
      ],
      commonMistakes: [
        'Memorised phrases that sound rehearsed (examiners detect this immediately)',
        'Over-using "very" — replace with "extraordinarily, remarkably, exceptionally"',
        'Starting every Part 1 answer with "Yes/No, I do/don\'t" — vary your openings',
        'Saying "I think" repeatedly — vary with "I\'d argue, in my view, to my mind, from my standpoint"',
        'Speaking too fast to seem fluent — band 8 prefers controlled pace with natural pauses',
        'Direct translations from Chinese (e.g. "I very like" instead of "I really enjoy")'
      ],
      breakthroughTechniques: [
        'Shadow native speakers (BBC, ABC News, podcasts) for 15 min daily — repeat each sentence within 1 second',
        'Self-record once a week on the same topic — track improvement over months',
        'Use the "expand 3 times" rule: any answer must contain Point + Reason + Example',
        'Pause for thinking is FINE at band 8 — use "That\'s an interesting question, let me think...", "That\'s something I haven\'t considered before..."'
      ]
    },
    writing: {
      band7: 'Addresses all parts of task with clear position. Logically organises with clear progression. Uses cohesive devices effectively though may be over/under-used. Has sufficient vocabulary range. Uses variety of complex structures with frequent error-free sentences.',
      band8: 'Sufficiently addresses all parts of the task. Presents well-developed response with relevant, extended ideas. Sequences information and ideas logically. Uses cohesion well — neither mechanical nor faulty. Skilful use of less common vocabulary. Wide range of structures, majority error-free.',
      criticalDifferences: [
        {
          area: 'Task Response',
          b7: 'Addresses all parts but some parts more fully covered than others.',
          b8: 'Sufficiently addresses all parts of task. Well-developed response with extended ideas.',
          strategy: 'Spend 5 min PLANNING. For Discussion+Opinion essays, allocate equal space to BOTH views before adding your stance. Band 7 candidates often rush past one view.'
        },
        {
          area: 'Coherence & Cohesion',
          b7: 'Cohesive devices used effectively though sometimes over/under-used. Paragraphing not always logical.',
          b8: 'Cohesion well-used; reference and substitution flexibly handled. Each paragraph has clear central topic.',
          strategy: 'Use referencing pronouns (this, these, such, the latter) to avoid repetition. Reduce mechanical "Firstly, Secondly, In conclusion". Use "the former / the latter" for previous mention; "this" / "these" to track ideas across sentences.'
        },
        {
          area: 'Lexical Resource',
          b7: 'Sufficient range with some less common vocabulary. Awareness of style and collocation though some inappropriate use.',
          b8: 'Skilful use of less common items though minor inaccuracies. Produces rare errors in word choice/collocation.',
          strategy: 'Replace generic words: very important → critical, paramount, instrumental. very bad → detrimental, deleterious. people → individuals, citizens, residents. things → factors, elements, phenomena. Use noun phrases: "the implementation of stricter regulations" not "implementing stricter regulations".'
        },
        {
          area: 'Grammatical Range',
          b7: 'Uses mix of complex and simple structures. Frequent error-free sentences.',
          b8: 'Wide range with full flexibility. Majority of sentences error-free; only rare errors.',
          strategy: 'Master 5 band-8 structures and use them strategically: (1) Conditionals with mixed time references "If we had invested earlier, we would not be facing this crisis today". (2) Inversion for emphasis "Not only does this approach reduce costs, but it also...". (3) Concessive clauses "Although critics argue X, the evidence suggests Y". (4) Cleft sentences "What is often overlooked is...". (5) Reduced relative clauses "Policies designed to address inequality must...".'
        }
      ],
      commonMistakes: [
        'Memorised template phrases that don\'t fit (examiners deduct for "with the development of society" type clichés)',
        'Word count below 250 (Task 2) or 150 (Task 1) — heavy penalty',
        'Going off-topic — every sentence must support the central question',
        'Listing too many ideas without development — depth beats breadth at band 8',
        'Article errors (a/an/the/zero article) — Chinese-speaker weakness',
        'Mixing tenses within paragraphs without clear marker',
        'Vague pronouns: "this" without clear referent'
      ],
      breakthroughTechniques: [
        'Plan EVERY essay for 5 min before writing — band 8 essays are PLANNED, not improvised',
        'Write 2 essays per week, then REWRITE essays from week 1 with band 8 vocabulary substitutions — see your own improvement',
        'Read The Economist or The Guardian opinion pieces. Note 5 phrases per article. Build a personal "vault" of 200 phrases.',
        'Self-edit using band descriptors as checklist: did I show flexibility? Did I use 3+ less common words? Are my complex sentences error-free?'
      ]
    }
  },

  /* ═══════════ WRITING TASK 1 (NEW for IELTS) ═══════════ */
  writingTask1: {
    overview: 'Academic Task 1: Describe a chart, graph, table, diagram, map, or process in 150+ words within 20 minutes. Worth 1/3 of writing score. The OVERVIEW paragraph (paragraph 2) is critical for band 7+ — without a clear overview, you cannot get above band 6.',
    structure: {
      intro: {
        template: 'The [chart/graph/table/diagram] [illustrates/shows/depicts/presents] [WHAT] [for/over/across/between] [TIME/CATEGORIES].',
        alternatives: [
          'The [chart] provides information about [WHAT] in [TIME/PLACE].',
          'Information about [WHAT] is presented in the [chart], spanning [PERIOD].',
          'Given is a [chart] that depicts [WHAT] from [START] to [END].'
        ],
        example: 'The bar chart illustrates the proportion of household waste recycled in four major Australian cities between 2010 and 2022.',
        tip: 'NEVER copy the question verbatim. Paraphrase the action verb (shows→illustrates, depicts→presents) and the topic noun phrase.'
      },
      overview: {
        template: 'Overall, it is [clear/evident/apparent] that [MAIN TREND 1]. In addition, [MAIN TREND 2 or KEY COMPARISON]. [Optional: most-least extremes].',
        alternatives: [
          'A general overview reveals that [TREND 1], while [TREND 2].',
          'It is immediately clear that [TREND 1]. Furthermore, [SECONDARY TREND].',
          'The most striking feature of the data is that [TREND]. Additionally, [TREND].'
        ],
        example: 'Overall, it is evident that recycling rates increased substantially across all four cities over the period. In addition, Sydney consistently maintained the highest rate, while Adelaide showed the most dramatic improvement.',
        tip: 'NO numbers in overview. Just identify 2-3 BIG patterns. This paragraph alone determines whether you reach band 7.'
      },
      body1: {
        template: 'Looking at [GROUP A] more closely, [SPECIFIC TREND with figures]. For instance, [DATA POINT]. By [TIME], [DATA POINT].',
        alternatives: [
          'Turning to [GROUP A] in detail, the data reveals that [TREND].',
          'A more detailed examination of [GROUP A] shows [TREND].',
          'In terms of [GROUP A], [TREND with comparison].'
        ],
        example: 'Looking at Sydney and Melbourne more closely, both cities saw recycling rates climb steadily. In Sydney, the figure rose from 35% in 2010 to a peak of 62% in 2022, while Melbourne experienced a more gradual increase from 30% to 55% over the same period.',
        tip: 'Group similar data points. Use a mix of percentages, raw numbers, and comparative language ("twice as much", "less than half").'
      },
      body2: {
        template: 'In contrast, [GROUP B]. [DATA WITH COMPARISON].',
        alternatives: [
          'Conversely, [GROUP B] showed a different pattern.',
          'On the other hand, [GROUP B] demonstrated [TREND].',
          'When it comes to [GROUP B], the picture is somewhat different.'
        ],
        example: 'In contrast, Adelaide and Brisbane started from lower baselines. Adelaide\'s recycling rate, beginning at just 18% in 2010, surged to 48% by 2022 — the most dramatic improvement of all four cities. Brisbane, meanwhile, rose modestly from 25% to 40%.',
        tip: 'Body 2 should compare/contrast with Body 1. Avoid simply listing all remaining data — show RELATIONSHIPS.'
      }
    },
    chartTypes: [
      {
        type: 'bar',
        template: 'The bar chart [illustrates/compares] [WHAT] across [CATEGORIES/PERIODS]. Overall, [BIG TREND]. In addition, [SECONDARY OBSERVATION]. [Body 1: highest/main category with figures]. [Body 2: contrasting category with figures].',
        example: 'The bar chart compares the average daily screen time of teenagers in five countries during 2023. Overall, screen time was substantially higher in developed nations, with Singapore and South Korea topping the list. In addition, the gap between the highest and lowest countries was over four hours. Specifically, Singaporean teenagers spent an average of 8.5 hours per day on screens, closely followed by South Korea at 8.1 hours. In contrast, teenagers in Vietnam recorded just 4.2 hours, while Indonesian teenagers averaged 5 hours daily, indicating a clear divide between high-income and emerging economies.',
        vocabulary: ['compares', 'topping the list', 'closely followed by', 'in contrast', 'averaged', 'gap of', 'twice as much', 'a clear divide']
      },
      {
        type: 'line',
        template: 'The line graph illustrates changes in [WHAT] from [START] to [END]. Overall, [main trajectory — upward/downward/fluctuating/stable]. In addition, [comparison between trends if multiple lines]. [Body 1: starting point + key turning point with figures]. [Body 2: end of period + relationship between lines].',
        example: 'The line graph illustrates changes in CO2 emissions per capita in three countries between 1990 and 2020. Overall, while emissions in the United States and Australia declined, China experienced a dramatic increase, eventually surpassing both. Initially, the USA and Australia had per-capita emissions of around 19 and 16 tonnes respectively, with China at just 2 tonnes. By the year 2000, China had begun a steep climb. The crossover came around 2015, when Chinese emissions reached 8 tonnes — overtaking Australia\'s declining 14-tonne figure. By 2020, all three converged near 9-12 tonnes.',
        vocabulary: ['surpassing', 'crossover', 'overtaking', 'steep climb', 'declined', 'plateaued', 'converged', 'fluctuated']
      },
      {
        type: 'pie',
        template: 'The pie chart [shows/displays] the proportion of [WHAT] in [CONTEXT]. Overall, [DOMINANT category] accounts for the largest share, while [SMALLEST] makes up the smallest. [Body 1: largest segments with percentages and fractions]. [Body 2: smaller segments and what they represent collectively].',
        example: 'The pie chart shows the breakdown of household electricity consumption in Australia in 2023. Overall, heating and cooling accounted for the largest share of usage, while lighting consumed the least. Specifically, heating and cooling made up 38% of total household electricity — over a third of all consumption. This was followed by hot water at 21% and major appliances such as refrigerators at 18%. The remaining 23% was divided among lighting (5%), entertainment electronics (10%), and other miscellaneous uses (8%), suggesting that climate control dominates household energy demand.',
        vocabulary: ['accounted for', 'breakdown', 'made up', 'over a third', 'remaining', 'divided among', 'a fraction of', 'dominates']
      },
      {
        type: 'table',
        template: 'The table presents [WHAT] across [CATEGORIES/PERIODS]. Overall, [BIG PATTERN]. In addition, [SECONDARY PATTERN]. [Body 1: highest values, key comparisons]. [Body 2: lowest values, exceptions, contrasts].',
        example: 'The table presents data on enrolment numbers across five university faculties at three Australian universities in 2023. Overall, the Faculty of Business consistently attracted the largest cohort, while Performing Arts had the smallest. The University of Sydney had the highest total enrolment. Specifically, Sydney enrolled 12,400 Business students, considerably more than UNSW (10,200) or Monash (9,800). Engineering followed a similar pattern. By contrast, Performing Arts struggled across all three institutions, with figures ranging from 480 at Monash to just 390 at UNSW, suggesting limited demand for arts subjects.',
        vocabulary: ['consistently', 'attracted', 'cohort', 'considerably more', 'followed a similar pattern', 'by contrast', 'ranging from']
      },
      {
        type: 'process',
        template: 'The diagram [illustrates/depicts] the process of [WHAT]. Overall, the process consists of [N] main stages, beginning with [START] and ending with [END]. The process commences with [step 1]. [Step 2]. Following this, [step 3]. [Step 4]. Finally, [step N], [outcome].',
        example: 'The diagram illustrates the process by which paper is recycled into new paper products. Overall, the process consists of seven main stages, beginning with the collection of waste paper and ending with the production of fresh paper rolls. Initially, used paper is collected and transported to a recycling facility, where it is sorted by grade. The sorted paper is then mixed with water and chemicals in a large pulper, breaking down the fibres into a slurry. Subsequently, contaminants such as ink and staples are removed through a screening process. The cleaned pulp is then bleached, dried, and pressed into thin sheets. Finally, the rolls are cut to size and dispatched for commercial use, completing the recycling cycle.',
        vocabulary: ['commences with', 'consists of', 'is transported to', 'is then mixed with', 'subsequently', 'is removed through', 'is dispatched', 'completing the cycle']
      },
      {
        type: 'map',
        template: 'The two maps illustrate the changes in [PLACE] between [TIME 1] and [TIME 2]. Overall, the area underwent significant transformation, with [BIG CHANGE]. In [TIME 1], [features]. By [TIME 2], [transformations].',
        example: 'The two maps illustrate the changes in a coastal town in southern Australia between 1990 and 2023. Overall, the area underwent significant transformation, shifting from a small fishing village to a busy tourist destination. In 1990, the town consisted primarily of a small harbour, a handful of cottages along the coastline, and surrounding farmland. By 2023, the harbour had been expanded into a marina, the cottages had been replaced by hotels and restaurants, and the farmland had given way to residential developments. A new road was constructed to link the town to the highway, and a tourist information centre had been built near the marina, indicating the area\'s shift towards a service-based economy.',
        vocabulary: ['underwent transformation', 'shifted from', 'consisted primarily of', 'had been expanded', 'had been replaced by', 'gave way to', 'was constructed', 'shift towards']
      },
      {
        type: 'mixed',
        template: '[For mixed charts: introduce both visuals separately] The first chart shows [WHAT 1], while the second illustrates [WHAT 2]. Overall, [PATTERN linking both]. [Body 1: data from chart 1]. [Body 2: data from chart 2 + relationship to chart 1].',
        example: 'The first chart shows the percentage of adults exercising regularly in five age groups in 2023, while the second illustrates the average weekly exercise hours by these groups. Overall, both charts reveal a clear pattern: exercise participation peaks in young adults and declines with age, but those who do exercise in older age groups tend to spend more time per session. Specifically, 78% of adults aged 18-24 exercised regularly, dropping to just 32% in the 65+ group. However, the second chart reveals that older active adults (65+) averaged 6 hours per week — more than the 4.5 hours of the 18-24 group — suggesting that fewer older people exercise, but those who do are more committed.',
        vocabulary: ['reveal a pattern', 'peaks in', 'declines with', 'tend to spend', 'more committed', 'dropping to', 'averaged', 'suggesting that']
      }
    ],
    vocabularyByFunction: {
      sharpIncrease: ['surged', 'soared', 'rocketed', 'shot up', 'climbed sharply', 'rose dramatically', 'skyrocketed'],
      gradualIncrease: ['rose steadily', 'climbed gradually', 'grew modestly', 'edged up', 'inched higher', 'crept up'],
      sharpDecrease: ['plummeted', 'plunged', 'collapsed', 'fell dramatically', 'dropped sharply', 'tumbled'],
      gradualDecrease: ['declined gradually', 'fell steadily', 'edged down', 'dipped slightly', 'tapered off'],
      stability: ['remained stable', 'plateaued', 'hovered around', 'levelled off', 'stayed constant', 'showed little change'],
      fluctuation: ['fluctuated between', 'oscillated', 'wavered', 'see-sawed', 'showed an erratic pattern'],
      peak: ['peaked at', 'reached a peak of', 'hit a high of', 'topped out at', 'reached its zenith'],
      trough: ['hit a low of', 'bottomed out at', 'reached its nadir', 'dipped to a low of'],
      comparison: ['twice as much', 'three times higher than', 'a fraction of', 'considerably more than', 'a far cry from'],
      proportion: ['a quarter', 'a third', 'half', 'two-thirds', 'three-quarters', 'a majority', 'a small minority']
    },
    band8Tips: [
      'Spend 3 minutes ANALYSING the data before writing — identify the 2-3 BIG patterns',
      'Always include an overview paragraph (paragraph 2) — without it, max band is 6',
      'Mix figures with words: "from 25% (a quarter) to 50% (half)"',
      'Use perfect tenses for completed changes: "had risen by", "has fallen since"',
      'Group data logically — by similarity, time, magnitude — never copy the chart in linear order',
      'Vary your language for trends: never use "increase" twice in the same paragraph',
      'For maps, master passive past forms: "had been built", "was demolished", "was relocated"',
      'For processes, use sequence markers: initially → subsequently → following this → ultimately'
    ]
  },

  /* ═══════════ WRITING TASK 2 ═══════════ */
  writingTask2: {
    overview: 'Task 2: 250+ word essay in 40 minutes. Worth 2/3 of writing score. Identify the question type FIRST — wrong type identification = lower task response score even with good English.',
    questionTypes: [
      {
        type: 'Opinion (Agree/Disagree)',
        identifier: 'To what extent do you agree or disagree? / Do you agree or disagree?',
        structure: '4-paragraph structure:\n• Para 1: Paraphrase question + clear thesis (state your position)\n• Para 2: Reason 1 with evidence/example\n• Para 3: Reason 2 with evidence/example\n• Para 4: Restate position + broader implication\n\nKey: Be DECISIVE. "I completely agree", "I largely agree", "I strongly disagree". Avoid "I partly agree" — too weak.',
        example: 'Q: "Some people believe that universities should focus on academic subjects rather than vocational skills. To what extent do you agree?"\n\nThesis: I largely disagree, as universities serve a broader purpose than purely intellectual development.\n\nPara 2: Vocational skills are increasingly demanded by employers. Example: tech companies hiring graduates with practical coding ability rather than pure computer science theory.\n\nPara 3: Academic-only education ignores diverse student needs. Example: a student passionate about hospitality benefits more from culinary arts than philosophy.\n\nPara 4: While theoretical knowledge has value, universities must adapt to prepare students for real careers, not merely produce scholars.'
      },
      {
        type: 'Discussion + Opinion',
        identifier: 'Discuss both views and give your own opinion.',
        structure: '4-paragraph structure (best approach):\n• Para 1: Paraphrase + brief preview of both sides + state your position\n• Para 2: Discuss view 1 (the one you DON\'T fully agree with) — explain its merit\n• Para 3: Discuss view 2 (the one you DO support) — explain why this is stronger\n• Para 4: Restate your position + concession to the other side\n\nKey: Cover BOTH views FAIRLY. Many band 7 candidates rush past one view. Each body paragraph needs equal depth.',
        example: 'Q: "Some people think children should start school at age 4. Others think 7 is more appropriate. Discuss both views and give your opinion."\n\nThesis: While early starts have benefits, I believe age 7 is more developmentally appropriate.\n\nPara 2 (early starts): Acknowledges that early formal schooling builds literacy and numeracy faster, citing Nordic countries.\n\nPara 3 (age 7 better): Argues children under 6 develop better through play, with stronger long-term outcomes per Finnish model.\n\nPara 4: Restate that 7 is preferable while acknowledging value in early structured learning environments.'
      },
      {
        type: 'Discussion only',
        identifier: 'Discuss both views.',
        structure: '4-paragraph structure:\n• Para 1: Paraphrase + neutral preview of both views\n• Para 2: Discuss view 1 with reasons/examples\n• Para 3: Discuss view 2 with reasons/examples\n• Para 4: Summarise that both have merit, situational application\n\nKey: NO personal opinion required. Stay neutral. Many candidates incorrectly add their opinion — penalty for not following instructions.',
        example: 'Q: "Some believe museums should be free; others say they should charge entry. Discuss both views."\n\nPara 2 (free): Public funding ensures access for all, especially low-income families and schools, citing UK\'s national museums.\n\nPara 3 (paid): Charges fund maintenance and special exhibitions; nominal fees rarely deter genuine visitors, citing the Louvre.\n\nPara 4: Both approaches reflect different cultural priorities; the optimal model depends on funding context.'
      },
      {
        type: 'Problem-Solution',
        identifier: 'What problems does this cause? What solutions can be implemented?',
        structure: '4-paragraph structure:\n• Para 1: Paraphrase + state that the issue causes serious problems requiring action\n• Para 2: Two main problems with explanations\n• Para 3: Two corresponding solutions with feasibility\n• Para 4: Summarise problems and emphasise that solutions are achievable\n\nKey: Problems and solutions should be LINKED. If a problem is "obesity in children", a matching solution is "school nutrition programs", not "tax junk food".',
        example: 'Q: "Many cities suffer from traffic congestion. What problems does this cause? What solutions exist?"\n\nProblems: 1) Economic loss through productivity decrease 2) Health impact through air pollution\n\nSolutions: 1) Invest in public transport infrastructure 2) Implement congestion pricing zones (London model)\n\nPara 4: Both problems are interconnected, and integrated transport policy can address them simultaneously.'
      },
      {
        type: 'Two-part question',
        identifier: 'Why is this happening? What can be done about it?',
        structure: '4-paragraph structure:\n• Para 1: Paraphrase + briefly preview both questions\n• Para 2: Answer question 1 (causes) with 2 main reasons\n• Para 3: Answer question 2 (solutions/effects) with 2 main points\n• Para 4: Summary linking both answers\n\nKey: Two questions = two body paragraphs. Don\'t mix them. Each paragraph addresses ONE question.',
        example: 'Q: "Why are obesity rates rising in developed countries? What measures can governments take?"\n\nPara 2 (causes): Sedentary lifestyles + processed food availability\n\nPara 3 (solutions): Public health campaigns + sugar taxes + school nutrition standards\n\nPara 4: Multifaceted causes require multifaceted government intervention.'
      },
      {
        type: 'Advantages/Disadvantages',
        identifier: 'Do the advantages outweigh the disadvantages? / What are the advantages and disadvantages?',
        structure: '4-paragraph structure:\n• Para 1: Paraphrase + state your position (whether advantages outweigh OR present neutrally)\n• Para 2: Advantages with examples\n• Para 3: Disadvantages with examples\n• Para 4: Reaffirm whether advantages outweigh disadvantages\n\nKey: For "outweigh" version, be DECISIVE. For "what are" version, stay neutral.',
        example: 'Q: "More people work from home. Do the advantages outweigh the disadvantages?"\n\nThesis: Advantages outweigh disadvantages, particularly for skilled professionals.\n\nAdvantages: Work-life balance, eliminated commute, productivity gains\n\nDisadvantages: Social isolation, blurred work-life boundaries, infrastructure dependence\n\nPara 4: While drawbacks exist, the autonomy and time savings of remote work make it net-positive for most knowledge workers.'
      }
    ],
    coherenceMarkers: {
      addition: ['Furthermore', 'Moreover', 'In addition', 'What is more', 'Coupled with this', 'Beyond this'],
      contrast: ['However', 'Nevertheless', 'Conversely', 'On the other hand', 'In contrast', 'Yet', 'That said'],
      cause: ['As a result', 'Consequently', 'Therefore', 'Accordingly', 'Hence', 'For this reason'],
      effect: ['leads to', 'results in', 'gives rise to', 'brings about', 'triggers'],
      conclusion: ['To summarise', 'In summary', 'Ultimately', 'On balance', 'All things considered'],
      example: ['For instance', 'A case in point is', 'To illustrate', 'A telling example is', 'Take... for example'],
      hedging: ['tends to', 'is likely to', 'in many cases', 'generally speaking', 'arguably', 'one could argue']
    },
    band8Tips: [
      'Spend 5 minutes PLANNING — outline thesis, two main points, examples, conclusion',
      'Word count: 270-290 ideal (under 250 = penalty, over 320 = wasted time)',
      'Use ONE complex example with depth, not three shallow ones',
      'Vary sentence length: short punchy sentence after a complex one for impact',
      'Avoid "in conclusion" + "in my opinion" + "I think" — replace with "to summarise", "to my mind", "I would argue"',
      'Each paragraph: topic sentence + 2-3 supporting sentences + 1 example sentence + transition',
      'Aim for at least 3 less common words per paragraph (e.g. "ubiquitous", "exacerbate", "instrumental")',
      'Use 1-2 conditional sentences and 1 inversion structure for grammatical range'
    ]
  },

  /* ═══════════ SPEAKING ═══════════ */
  speaking: {
    overview: '11-14 minutes total, 3 parts. Part 1 (4-5 min): personal introduction questions. Part 2 (3-4 min): 1-min prep + 1-2 min monologue on cue card topic. Part 3 (4-5 min): abstract discussion linked to Part 2 topic. Speak as much as possible — the examiner cannot give marks for what you don\'t say.',
    part1: {
      strategy: 'Aim for 2-3 sentences per answer. Show range of vocabulary, use complex structures, sound natural — not rehearsed. Examiners rotate questions through 3 topic clusters in 4-5 minutes.',
      commonTopics: [
        {
          topic: 'Hometown / Where you live',
          questions: [
            'Where do you live?',
            'Have you lived there long?',
            'What do you like about your area?',
            'Is there anything you would change about it?',
            'Would you recommend it to tourists?'
          ],
          sampleAnswers: [
            'I currently live in Parramatta, which is a vibrant suburb in western Sydney. It\'s often described as Sydney\'s second CBD, given how rapidly it\'s developing.',
            'I\'ve been there for around two years now. Before that, I was based in Shanghai for most of my life, so it\'s been quite a transition.',
            'What I appreciate most is the cultural diversity. There\'s a fantastic range of food, particularly Chinese, Lebanese, and Indian, all within walking distance of where I live.',
            'If I could change one thing, it would be the weekend traffic. The roads can become quite congested, particularly near the shopping centres on Saturday afternoons.',
            'Absolutely. I\'d recommend visitors check out the riverside walk and the Rosehill Gardens area — they offer a glimpse of historic Sydney that many tourists miss.'
          ],
          vocabulary: ['vibrant', 'second CBD', 'transition', 'cultural diversity', 'within walking distance', 'congested', 'glimpse']
        },
        {
          topic: 'Work / Study',
          questions: [
            'Do you work or study?',
            'Why did you choose this profession?',
            'What do you enjoy most about it?',
            'Are there any challenging aspects?',
            'Do you see yourself doing this in 10 years?'
          ],
          sampleAnswers: [
            'I work as a secondary school teacher in Sydney. I teach Technology and IST to students in Years 7 to 10.',
            'I chose teaching because I genuinely enjoy working with young people and watching them develop new skills. There\'s something incredibly rewarding about seeing a student grasp a difficult concept.',
            'What I enjoy most is the creative side — designing engaging lessons that connect with teenagers. Each class is different, so I\'m never bored.',
            'The most challenging aspect is probably classroom management with energetic Year 8 students. It takes patience and consistency.',
            'I\'d like to remain in education, though perhaps in a leadership role or curriculum development position. I\'m also considering combining teaching with creating educational resources online.'
          ],
          vocabulary: ['secondary school', 'genuinely', 'incredibly rewarding', 'grasp a concept', 'creative side', 'patience and consistency', 'leadership role']
        },
        {
          topic: 'Hobbies / Free time',
          questions: [
            'What do you do in your free time?',
            'How long have you had this hobby?',
            'Do you prefer doing it alone or with others?',
            'Do you think hobbies are important?',
            'What hobby would you like to try?'
          ],
          sampleAnswers: [
            'In my free time, I tend to read non-fiction, particularly books on philosophy and psychology. I\'m also into long walks around the local parks on weekends.',
            'I\'ve been an avid reader since my university days, so it\'s been over a decade now. It\'s become an integral part of my routine.',
            'I generally prefer reading alone since it requires concentration, but I love discussing ideas with friends afterwards. Walking, on the other hand, is something I enjoy doing with my partner.',
            'Absolutely. Hobbies provide a counterbalance to work — they help with mental wellbeing and offer a sense of identity beyond your job title.',
            'I\'d love to try pottery. There\'s something appealing about working with your hands and creating something tangible, especially as a counter to screen time.'
          ],
          vocabulary: ['avid reader', 'integral part', 'requires concentration', 'counterbalance', 'mental wellbeing', 'sense of identity', 'tangible']
        },
        {
          topic: 'Food',
          questions: [
            'What is your favourite food?',
            'Do you cook at home often?',
            'Has your diet changed since you were a child?',
            'Do you think people eat healthier today than in the past?',
            'What kind of food is popular in your country?'
          ],
          sampleAnswers: [
            'My all-time favourite would have to be Sichuan cuisine, particularly mapo tofu. The combination of numbing peppercorns and spicy chilli is something I never tire of.',
            'I cook at home most weeknights, mainly Chinese-style stir-fries because they\'re quick and nutritious. On weekends, I experiment more.',
            'Significantly. As a child in China, my diet was almost entirely rice and vegetable-based. Now, living in Australia, I\'ve incorporated a much wider range — Mediterranean, Indian, and even Mexican.',
            'In some ways, yes — there\'s more awareness of nutrition. But the rise of fast food and ultra-processed snacks has cancelled some of that out, especially among young people.',
            'In China, regional variation is enormous. In the south where I grew up, we ate a lot of rice and seafood, while northern Chinese food is more wheat-based — noodles and dumplings dominate.'
          ],
          vocabulary: ['all-time favourite', 'numbing peppercorns', 'never tire of', 'most weeknights', 'incorporated', 'ultra-processed', 'regional variation', 'wheat-based']
        },
        {
          topic: 'Music',
          questions: [
            'What kind of music do you like?',
            'Do you play any musical instruments?',
            'Has your taste in music changed?',
            'Do you think music education is important in schools?',
            'How do you usually listen to music?'
          ],
          sampleAnswers: [
            'I lean towards instrumental music — classical pieces by Chopin and Debussy especially. There\'s something soothing about piano music when you need to focus.',
            'I played the erhu, a traditional Chinese string instrument, throughout my school years. I\'m a bit rusty now, but I still pick it up occasionally.',
            'Definitely. As a teenager I was obsessed with pop music — Mandopop and K-pop in particular. As I\'ve grown older, my taste has shifted towards more contemplative styles.',
            'I think it\'s underrated. Music develops cognitive skills, patience, and emotional expression. In Australia, it\'s often the first subject cut when budgets tighten — which is unfortunate.',
            'Mostly through Spotify on my commute. I have several curated playlists for different moods, plus podcasts on history and language.'
          ],
          vocabulary: ['lean towards', 'soothing', 'a bit rusty', 'pick it up occasionally', 'obsessed with', 'contemplative', 'underrated', 'curated playlists']
        },
        {
          topic: 'Travel',
          questions: [
            'Do you enjoy travelling?',
            'What was your last trip?',
            'Do you prefer travelling alone or with others?',
            'Has travel changed since you were younger?',
            'Where would you most like to visit?'
          ],
          sampleAnswers: [
            'Travel is one of my biggest passions. I find that exposure to different cultures genuinely changes how you see the world.',
            'My last proper trip was to Tasmania last summer — a road trip through Hobart, Cradle Mountain, and the Bay of Fires. The landscape was breathtaking.',
            'Honestly, both have their merits. I love solo travel for the freedom and reflection, but travelling with my partner means shared memories and someone to navigate with.',
            'Considerably. Twenty years ago, you needed paper maps and travel agents. Now smartphones do most of the planning. It\'s more convenient but somewhat less adventurous.',
            'I\'d love to spend a month in Japan, specifically Kyoto and rural areas. The blend of tradition and modernity fascinates me, and I\'ve heard the slow-paced countryside is unforgettable.'
          ],
          vocabulary: ['biggest passions', 'exposure to', 'breathtaking', 'have their merits', 'navigate with', 'somewhat less adventurous', 'blend of tradition and modernity']
        },
        {
          topic: 'Reading',
          questions: [
            'Do you read often?',
            'What kind of books do you prefer?',
            'Do you read paper books or e-books?',
            'How do reading habits compare across generations?',
            'Should children be encouraged to read more?'
          ],
          sampleAnswers: [
            'I read every day, usually for an hour before bed. It\'s become a non-negotiable part of my evening routine.',
            'I gravitate towards non-fiction — biographies, philosophy, and books about psychology. Recently I\'ve been working through Daniel Kahneman\'s "Thinking, Fast and Slow".',
            'I prefer paper books for the tactile experience, but I use Kindle when travelling because it\'s practical. There\'s something irreplaceable about turning physical pages.',
            'Significantly. My parents\' generation read newspapers daily and full-length novels, whereas younger people often prefer short articles or social media. The depth of attention has diminished.',
            'Absolutely. Reading expands vocabulary, develops empathy, and builds focus — all critical for both academic and personal development. Schools should make it a daily ritual.'
          ],
          vocabulary: ['non-negotiable', 'gravitate towards', 'tactile experience', 'irreplaceable', 'depth of attention', 'expands vocabulary', 'daily ritual']
        },
        {
          topic: 'Weather / Seasons',
          questions: [
            'What\'s the weather like in your country?',
            'What\'s your favourite season?',
            'Has the weather changed in recent years?',
            'Do you prefer hot or cold weather?',
            'How does weather affect your mood?'
          ],
          sampleAnswers: [
            'In Sydney, the climate is fairly temperate — warm but not extreme summers, mild winters. It\'s quite different from where I grew up in Shanghai, which has bitter winters.',
            'Autumn is my favourite, hands down. The temperatures are perfect for outdoor activities, and the changing colours make even ordinary streets look spectacular.',
            'There has been a noticeable shift, even just in the past decade. Summers feel more intense, with bushfire seasons starting earlier and the heat being harder to escape.',
            'I\'d definitely choose mild weather — somewhere around 22 degrees with a gentle breeze. Both extremes are draining, though I\'d cope better with cold than scorching heat.',
            'Considerably. A grey, overcast day genuinely affects my energy and motivation, while a bright sunny morning lifts my mood almost instantly. I\'ve realised I\'m quite weather-sensitive.'
          ],
          vocabulary: ['temperate', 'bitter winters', 'hands down', 'noticeable shift', 'bushfire seasons', 'gentle breeze', 'draining', 'overcast', 'weather-sensitive']
        },
        {
          topic: 'Technology / Phones',
          questions: [
            'How often do you use your phone?',
            'What apps do you use most?',
            'Has technology improved your life?',
            'What concerns do you have about phone use?',
            'Could you live without your phone?'
          ],
          sampleAnswers: [
            'Far more than I\'d like to admit — probably four to five hours daily. As a teacher, I rely on it for communication, lesson planning, and tracking student progress.',
            'My most-used apps would be WeChat for keeping in touch with family in China, Notion for organising lessons, and a meditation app called Headspace.',
            'Largely yes. I can speak to my parents in real time across continents, access medical information instantly, and learn new skills from anywhere. The benefits outweigh the drawbacks.',
            'My main concern is the constant interruption — notifications fragment your attention. I\'ve also noticed students struggling with sustained focus, which is concerning for their learning.',
            'For a few days, possibly. For longer than that, I\'d genuinely struggle — work communications, navigation, banking — modern life is built around it. That dependence itself is troubling.'
          ],
          vocabulary: ['far more than I\'d like to admit', 'lesson planning', 'tracking progress', 'across continents', 'outweigh the drawbacks', 'fragment your attention', 'sustained focus', 'troubling']
        }
      ]
    },
    part2: {
      strategy: '1 minute preparation, 1-2 minute monologue. Use the prep time to write 5-6 keyword notes (NOT full sentences). Cover all 4 bullet points but spend most time on the LAST one ("explain why...") — that\'s where you show range and depth.',
      universalTemplate: {
        title: 'Universal Cue Card 4-Paragraph Framework',
        para1: 'WHO/WHAT (introduction, ~30 seconds): Name the subject. Give 1-2 specific identifying details. Hook the listener.',
        para2: 'WHEN/WHERE/HOW (context, ~30 seconds): Set the scene. Time, place, circumstances.',
        para3: 'DETAIL (key features/events, ~45 seconds): The meat of your answer. 2-3 specific details with vivid description.',
        para4: 'WHY/IMPACT (significance, reflection, ~15 seconds): Why memorable. How it changed you. Broader meaning.'
      },
      timingDrill: 'Practice with a stopwatch. If you finish before 1:30, you don\'t have enough detail. If you go past 2:00, the examiner will cut you off — you\'re missing the impact paragraph.',
      band8Techniques: [
        'Use SPECIFIC details: not "a beautiful place" but "a small fishing village called Bermagui on the NSW south coast"',
        'Use SENSORY language: what you saw, heard, smelt, felt — paints a picture',
        'Use NARRATIVE TENSES: past simple for events, past continuous for backdrop, past perfect for prior context',
        'Use 3-5 idiomatic expressions: "out of the blue", "second to none", "a stone\'s throw away", "in a class of its own"',
        'Use EMOTIONAL language: not "I was happy" but "I was over the moon / utterly delighted / moved beyond words"',
        'PERSONALISE: examiners hear the same cue cards 50 times — your specific story stands out'
      ]
    },
    part3: {
      strategy: 'Part 3 is abstract discussion linked to Part 2 topic. This is where band 7 vs 8 is decided. Examiners ask 4-6 increasingly difficult questions. Aim for 30-45 second answers with PEEL structure.',
      answerStructure: 'PEEL: Point (direct answer) + Explanation (reasoning) + Example (real or hypothetical) + Link (broader implication or counter-perspective)',
      questionTypes: [
        'Compare/contrast (e.g. "Are families today different from those in the past?")',
        'Predict the future (e.g. "How will work change in the next 20 years?")',
        'Evaluate causes (e.g. "Why do some people change careers frequently?")',
        'Discuss problems (e.g. "What problems do single parents face?")',
        'Generalise (e.g. "Are children today more pressured than before?")',
        'Hypothesise (e.g. "If you could change one thing about education, what would it be?")'
      ],
      band8Techniques: [
        'Use HEDGING: "I would argue", "It seems to me", "There\'s a tendency for", "In many cases", "Arguably"',
        'Show RANGE OF PERSPECTIVE: "From a sociological standpoint... but economically...", "On one hand... on the other..."',
        'Give SPECIFIC examples even for abstract questions: "Take Australia, for instance, where..."',
        'Use HYPOTHETICALS: "Were governments to invest more in...", "If I had to choose between..."',
        'Use NOMINALISATIONS: "the prevalence of digital devices" rather than "many digital devices"',
        'CONCEDE then COUNTER: "While that\'s certainly true to some extent, one could equally argue that..."'
      ],
      sampleQuestions: [
        {
          question: 'Do you think children today have a better childhood than 20 years ago?',
          modelAnswer: 'That\'s a genuinely complex question. From a material standpoint, today\'s children certainly have more opportunities — better healthcare, education, and access to information that previous generations could only dream of. However, when it comes to wellbeing, the picture is murkier. The pressure of constant comparison through social media, the decline of unstructured outdoor play, and the academic competitiveness many face suggest that childhood has become more anxious and less playful. So I\'d argue that while children today are better resourced, they may be paying a real psychological cost for those advantages.',
          tip: 'Concession structure (yes...however/but) shows nuanced thinking — band 8 hallmark.'
        },
        {
          question: 'Why do some people prefer to live in big cities while others prefer rural areas?',
          modelAnswer: 'I think it really comes down to what people prioritise at different life stages. Cities offer career advancement, cultural diversity, and access to specialised services — that\'s why young professionals typically gravitate towards them. Rural areas, on the other hand, offer space, community, and a slower pace of life — qualities that often appeal to families with children or retirees. Of course, technology has blurred the boundaries somewhat. With remote work becoming mainstream, more people can enjoy rural lifestyles without sacrificing urban-level employment, which I think will continue to reshape these preferences over coming decades.',
          tip: 'Notice the prediction at the end — Part 3 rewards forward-looking analysis.'
        },
        {
          question: 'How does technology affect the way young people learn?',
          modelAnswer: 'In my experience as a teacher, the impact is genuinely two-sided. On the positive side, technology gives students unprecedented access to knowledge — tutorials on YouTube, interactive simulations, language apps. A motivated learner can essentially self-educate today. The flip side is that the same devices fragment attention. I see students struggling with sustained reading, with the discipline of working through difficult material without immediate dopamine hits. So while technology amplifies what motivated learners can achieve, it can equally widen the gap for those who lack focus skills.',
          tip: 'Personal expertise (as a teacher) adds authenticity — but DON\'T fabricate credentials you don\'t have.'
        },
        {
          question: 'Should governments fund the arts?',
          modelAnswer: 'I\'d argue that government funding for the arts is essential, though it requires careful thought. Without public support, much creative output would be driven entirely by commercial appeal — meaning experimental, niche, or culturally significant work might never see daylight. Take Australian indigenous art programs, for example: these wouldn\'t survive on market forces alone, yet they preserve invaluable cultural heritage. That said, taxpayer money should be allocated thoughtfully — supporting genuine artistic merit and broad access rather than vanity projects. So yes, public funding, but with accountability.',
          tip: 'Strong opinion + nuanced qualifier shows band 8 depth without sounding wishy-washy.'
        },
        {
          question: 'In what ways will work change in the next 20 years?',
          modelAnswer: 'Several major shifts seem inevitable. Firstly, AI and automation will reshape what humans do — routine cognitive tasks will be increasingly automated, pushing workers towards roles requiring creativity, empathy, and complex judgement. Secondly, the traditional 9-to-5 office model will likely continue eroding, with hybrid and remote arrangements becoming standard. Thirdly, lifelong learning will become non-negotiable — the idea of one career for life is already obsolete. If I had to make a bold prediction, I\'d say that by 2045, most people will have had at least three distinct careers, and the boundaries between work, learning, and leisure will be far more fluid than today.',
          tip: 'Use enumerators (firstly, secondly, thirdly) sparingly — fine for predictive answers, avoid in personal answers.'
        }
      ]
    }
  },

  /* ═══════════ READING ═══════════ */
  reading: {
    overview: '60 minutes, 3 passages (~900 words each), 40 questions. To reach band 9 you need 39-40 correct. With 8.5 you\'re at 35-37, so the gap is in 2-4 trickiest questions per test.',
    questionTypes: [
      {
        type: 'True/False/Not Given',
        strategy: 'Critical: Not Given means information is ABSENT, not contradicted. False means the passage contradicts the statement. Most candidates confuse these. If the statement\'s content isn\'t in the passage at all, it\'s NOT GIVEN.',
        commonMistakes: ['Marking "Not Given" as "False" when info isn\'t mentioned', 'Marking "True" based on logical inference rather than explicit statement'],
        band9Tip: 'Underline the EXACT phrase in the passage that confirms True or False. If you can\'t locate it, the answer is Not Given. Never infer.'
      },
      {
        type: 'Yes/No/Not Given',
        strategy: 'Same logic as True/False, but applied to the WRITER\'S OPINION/CLAIM (not facts). Yes = the writer\'s claim matches the statement. No = writer\'s claim contradicts. Not Given = writer doesn\'t express a view.',
        commonMistakes: ['Confusing factual statements with opinion claims', 'Reading your own opinion into the writer\'s'],
        band9Tip: 'Look for opinion markers: "argues", "claims", "believes", "suggests", "in the view of". These tell you the writer\'s stance.'
      },
      {
        type: 'Matching headings',
        strategy: 'Match each paragraph to a heading from a list. The list always has MORE headings than paragraphs (so some are distractors). Read the FIRST and LAST sentences of each paragraph first — these usually contain the main idea.',
        commonMistakes: ['Matching based on a single keyword that also appears in a wrong heading', 'Choosing a heading that captures only ONE detail of the paragraph'],
        band9Tip: 'A correct heading captures the WHOLE paragraph\'s focus, not just one sentence. Read the entire paragraph if first/last sentence doesn\'t make it obvious.'
      },
      {
        type: 'Matching information',
        strategy: 'Find which paragraph contains a specific piece of information. Different from headings — you\'re finding ONE detail, not the main idea. Each paragraph can be used MORE THAN ONCE or NOT AT ALL.',
        commonMistakes: ['Stopping at the first paragraph that seems to match', 'Missing that "any paragraph can be used more than once"'],
        band9Tip: 'Use process of elimination. Read all paragraphs and tag each one with what it contains, then match.'
      },
      {
        type: 'Sentence completion',
        strategy: 'Complete sentences using NO MORE THAN [N] WORDS from the passage. Words must be from the passage, not your own. Word limit is strict — 3 words means EXACTLY 3 or fewer.',
        commonMistakes: ['Adding extra words beyond the limit (auto-wrong)', 'Paraphrasing the answer instead of using passage wording', 'Wrong word form (using verb when noun is required)'],
        band9Tip: 'Identify the grammatical role required (noun? adjective? verb?) BEFORE searching the passage. This narrows the candidate words.'
      },
      {
        type: 'Summary completion',
        strategy: 'Fill gaps in a summary using either (a) words from the passage or (b) options from a word list. The summary follows the order of the passage. Read the gap sentence and predict what type of word fits.',
        commonMistakes: ['Choosing a word that\'s grammatically wrong (e.g. plural where singular is needed)', 'Choosing a word that\'s topically related but doesn\'t fit the gap meaning'],
        band9Tip: 'Always check both grammatical fit AND meaning fit. The right answer satisfies both.'
      },
      {
        type: 'Multiple choice',
        strategy: 'Each question has 4 options (sometimes 5). Only ONE is correct. Distractors usually contain words from the passage but the meaning is twisted, or they are too broad/too narrow.',
        commonMistakes: ['Choosing the option with most familiar passage words', 'Picking the most general/abstract option when a specific one is correct'],
        band9Tip: 'Eliminate 2 obvious wrongs first. Then carefully compare the remaining 2 with the passage — find the EXACT phrase that supports your answer.'
      },
      {
        type: 'Short answer',
        strategy: 'Answer questions in NO MORE THAN [N] WORDS. Same word-limit rules as sentence completion. Usually fact-based with answers found explicitly in the passage.',
        commonMistakes: ['Including articles or prepositions that push you over the word limit', 'Paraphrasing instead of using passage words'],
        band9Tip: 'Use the EXACT phrase from the passage. Don\'t add "the" or "a" unnecessarily — they count as words.'
      }
    ],
    skimAndScan: 'For each passage: (1) skim entire passage in 2 minutes — main idea per paragraph, (2) read questions, (3) scan for specific answers. DON\'T read passage word-by-word first. Time per passage: 18-20 min.',
    band9Strategies: [
      'Identify PARAPHRASING patterns — IELTS rarely uses the same words as the passage. Train yourself to spot synonyms and rewrites.',
      'Manage time strictly: 18-20 min per passage. If you\'re stuck on a question past 2 min, mark it and move on. Return at the end.',
      'NEVER leave answers blank. There\'s no penalty for wrong answers — guess if you must.',
      'Watch for negative qualifiers: "rarely", "seldom", "few", "almost never" — these can flip the meaning.',
      'For Yes/No/Not Given, always identify the WRITER\'S CLAIM, not just facts in the passage.',
      'Practice with The Economist articles — IELTS reading style closely mirrors UK quality press.',
      'Build vocabulary in academic fields: psychology, history, biology, technology, environment.',
      'Spelling MUST be perfect for short answer / sentence completion. One letter wrong = answer wrong.'
    ]
  },

  /* ═══════════ LISTENING ═══════════ */
  listening: {
    overview: '30 min audio + 10 min transfer time, 4 sections, 40 questions. Audio plays ONCE only. Most band 8.5 candidates lose points in Section 4 (academic lecture) and on spelling/plurals. To reach band 9 you need 39-40/40.',
    sections: [
      {
        section: 'Section 1',
        topic: 'Conversation in a social context (e.g. enquiring about accommodation, booking a course, opening a bank account)',
        strategy: 'Easiest section. 2 speakers in everyday context. Watch for: numbers, dates, addresses, names that need spelling. Names are usually spelt out — write each letter as you hear it.'
      },
      {
        section: 'Section 2',
        topic: 'Monologue in a social context (e.g. tour guide, radio announcement, museum description)',
        strategy: 'One speaker giving information. Often features a map/plan question. Practice with maps: directions like "turn right", "opposite the cafe", "behind the bus stop". Visualise as you listen.'
      },
      {
        section: 'Section 3',
        topic: 'Conversation in an educational context (2-4 speakers, e.g. tutorial discussion, group project meeting)',
        strategy: 'Multiple speakers, often students discussing assignments with a tutor. Listen for who agrees/disagrees and final decisions. Speakers often change their mind — the LAST stated answer is usually correct.'
      },
      {
        section: 'Section 4',
        topic: 'Academic monologue (e.g. university lecture)',
        strategy: 'HARDEST section. One speaker delivering a structured lecture. Listen for signposting: "I\'ll cover three main points", "moving on to my second point", "to summarise". Take notes in shorthand. NO break in middle of section 4 — sustain attention for full 10 minutes.'
      }
    ],
    accents: ['British (most common)', 'Australian', 'New Zealand', 'American', 'Canadian'],
    band9Strategies: [
      'PREDICT before listening — read the questions during the 30-second preview. What kind of word fits the gap? Number? Noun? Adjective?',
      'Spell carefully. Common spelling traps: "accommodation" (2 c\'s, 2 m\'s), "Wednesday", "necessary" (1 c, 2 s\'s), "definitely".',
      'Watch plurals/articles: "a meeting" vs "meetings" — IELTS counts these as different.',
      'For map questions, ORIENT yourself first: where\'s north? where\'s the start point? Then track speaker as they describe directions.',
      'Section 4: take rough notes during listening. Don\'t try to write neatly — write keywords, draw arrows, abbreviate.',
      'Listen for SIGNPOST language: "however", "on the other hand", "the most important point" — these signal answer changes.',
      'Train with native podcasts at 1.25x speed — IELTS audio feels slower after that.',
      'Multiple choice with long stems: read the QUESTION first, then the options. Match what you hear to the question topic.',
      'If you miss an answer, don\'t panic — keep listening. The next question is coming.',
      'Capital letters, full stops are NOT counted in word limit. "12.5 km" is one number, "twelve and a half kilometres" is five words.'
    ]
  },

  /* ═══════════ 8-MONTH STUDY CALENDAR ═══════════ */
  studyCalendar: {
    today: '27 April 2026',
    pteExam: '3 May 2026',
    targetCompletion: '31 December 2026',
    phase1: {
      name: 'Phase 1: Foundation (May 4 – Jul 31, 13 weeks)',
      goal: 'Push Speaking and Writing from 7 to 7.5. Build daily habit. Master Task 1 (new for IELTS).',
      weeklySchedule: [
        { day: 'Monday', focus: 'Writing Task 2', minutes: 60, activities: ['Pick essay from bank (5 min)', 'Plan: thesis + 2 main points + examples (5 min)', 'Write essay (40 min)', 'Self-edit using band 8 checklist (10 min)'] },
        { day: 'Tuesday', focus: 'Speaking Part 2', minutes: 30, activities: ['Pick 2 cue cards from bank', '1 min prep + 2 min monologue per card (record)', 'Self-review: identify 3 vocab gaps + 2 grammar issues'] },
        { day: 'Wednesday', focus: 'Writing Task 1', minutes: 45, activities: ['Pick chart type (rotate weekly)', 'Use template: intro + overview + body 1 + body 2', 'Write 150+ words in 20 min', 'Compare to model answer'] },
        { day: 'Thursday', focus: 'Speaking Part 3', minutes: 30, activities: ['Pick Part 3 question set (5)', 'PEEL structure for each (30-45 sec answers)', 'Record + identify hesitation words to replace'] },
        { day: 'Friday', focus: 'Writing Task 2 rewrite', minutes: 45, activities: ['Take Monday\'s essay', 'Upgrade with band 8 vocabulary (10 less common words)', 'Add 1 conditional + 1 inversion structure', 'Compare original vs revised'] },
        { day: 'Saturday', focus: 'Reading + Listening', minutes: 90, activities: ['One full Reading passage timed (20 min)', 'Review answers + identify question type weaknesses', 'One full Listening section (10 min)', 'Build vocabulary from passages'] },
        { day: 'Sunday', focus: 'Review + planning', minutes: 30, activities: ['Review week\'s Speaking recordings', 'Update vocabulary log', 'Plan next week\'s 2 cue cards + 2 essays'] }
      ],
      weeklyTotal: '5 hours',
      milestones: [
        'Week 4 (May 25): 8 cue cards completed, 4 Task 2 essays, 4 Task 1 reports',
        'Week 8 (Jun 22): 16 cue cards, 8 essays, 8 Task 1, first mock test',
        'Week 13 (Jul 26): 26 cue cards, 13 essays, 13 Task 1, second mock test'
      ]
    },
    phase2: {
      name: 'Phase 2: Refinement (Aug 1 – Oct 31, 13 weeks)',
      goal: 'Reach band 8 in Speaking and Writing. Address specific weaknesses identified in Phase 1.',
      weeklySchedule: [
        { day: 'Monday', focus: 'Writing Task 2 (advanced)', minutes: 60, activities: ['Pick complex question type (Two-part, Problem-Solution)', 'Write essay focusing on idea DEPTH not breadth', 'Use 5 advanced grammar structures'] },
        { day: 'Tuesday', focus: 'Speaking fluency drill', minutes: 45, activities: ['10 random cue cards — 1 min prep, 2 min talk each', 'Goal: zero hesitation for language reasons', 'Record best 3, analyse against band 8 descriptors'] },
        { day: 'Wednesday', focus: 'Writing self-edit', minutes: 45, activities: ['Take Phase 1 essay', 'Rewrite as if you were band 9', 'Compare differences — what changed?'] },
        { day: 'Thursday', focus: 'Pronunciation drill', minutes: 30, activities: ['TH sounds (think/this/breathe)', 'V/W (very/we/wave)', 'Word stress (PHOto vs phoTOgrapher)', 'Sentence intonation on questions'] },
        { day: 'Friday', focus: 'Mock Speaking', minutes: 60, activities: ['Full 14-min mock interview (Parts 1+2+3)', 'Self-record', 'Score yourself against band descriptors', 'List specific improvements for next week'] },
        { day: 'Saturday', focus: 'Mock test', minutes: 180, activities: ['Full Reading test (60 min)', 'Full Listening test (40 min)', 'Full Writing tests (60 min)', 'Score, error log'] },
        { day: 'Sunday', focus: 'Error log review + planning', minutes: 45, activities: ['Categorise errors by type', 'Pick top 3 weaknesses for week ahead', 'Vocabulary expansion in weak topic areas'] }
      ],
      weeklyTotal: '7 hours',
      milestones: [
        'Week 4 (Aug 30): Book real IELTS test for late October',
        'Week 8 (Sep 27): Mock test scores reach 7.5+ in Speaking and Writing',
        'Week 13 (Oct 25): Real IELTS test taken — establishes baseline for Phase 3'
      ]
    },
    phase3: {
      name: 'Phase 3: Polish (Nov 1 – Dec 31, 9 weeks)',
      goal: 'Lock in band 8 Speaking and Writing. Push Reading and Listening from 8.5 to 9.',
      weeklySchedule: [
        { day: 'Monday', focus: 'Reading band 9 drills', minutes: 60, activities: ['Tricky question types (T/F/NG, matching headings)', 'Identify paraphrasing patterns', 'Build academic vocabulary in weak topics'] },
        { day: 'Tuesday', focus: 'Listening band 9 drills', minutes: 60, activities: ['Section 4 lectures (academic monologues)', 'Spelling practice — common traps', 'Map/plan questions with directions'] },
        { day: 'Wednesday', focus: 'Speaking maintenance', minutes: 30, activities: ['1-minute monologue on random topics', 'Vocabulary refresh: top 100 collocations'] },
        { day: 'Thursday', focus: 'Writing maintenance', minutes: 45, activities: ['One Task 2 essay (timed)', 'Self-edit + compare to past attempts', 'Note improvement over months'] },
        { day: 'Friday', focus: 'Mock Reading + Listening', minutes: 100, activities: ['Full Reading test (60 min)', 'Full Listening test (40 min)', 'Score: aiming for 39-40/40'] },
        { day: 'Saturday', focus: 'Full mock test', minutes: 180, activities: ['Complete 4-skill mock', 'Simulate real exam conditions', 'Score against latest IELTS rubric'] },
        { day: 'Sunday', focus: 'Review + rest', minutes: 30, activities: ['Light review only', 'Visualise exam day', 'Rest is part of preparation'] }
      ],
      weeklyTotal: '8 hours',
      milestones: [
        'Week 4 (Nov 28): Mock Reading + Listening at 9.0',
        'Week 8 (Dec 20): Final mock test before real exam',
        'Week 9 (Dec 31): Real IELTS test — TARGET: L9 R9 S8 W8'
      ]
    }
  }
};
