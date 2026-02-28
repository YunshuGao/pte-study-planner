/* PTE Writing & Grammar Mastery - Data File */
/* 1. GRAMMAR_ACADEMY  2. SWT_PASSAGES  3. MODEL_ESSAYS  4. WRITING_RUBRIC  5. ERROR_CHECKLIST  6. ACADEMIC_VOCAB  7. LINKING_WORDS_BANK */

var GRAMMAR_ACADEMY = {
  articles: {
    title: 'Article Mastery',
    description: 'Master the use of a, an, the, and zero article in academic writing.',
    rules: [
      {
        id: 'art-r1',
        t: 'No article for uncountable nouns in general',
        exp: 'When referring to uncountable nouns in a general sense, do not use any article. Adding "the" implies a specific instance.',
        ok: 'Education is important for economic development.',
        no: 'The education is important for economic development.',
        tip: 'If you mean the concept in general, drop "the" before uncountable nouns.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) The information is useful. B) Information is power. C) Both are correct depending on context.',
          a: ['A) The information is useful.','B) Information is power.','Both are correct depending on context.'],
          ans: 2,
          exp: 'A) refers to specific information; B) refers to information in general.'
        }
      },
      {
        id: 'art-r2',
        t: 'No article for plural nouns in general',
        exp: 'When making general statements about plural countable nouns, no article is needed. Using "the" restricts the meaning to a specific group.',
        ok: 'Computers have changed the way people work.',
        no: 'The computers have changed the way people work.',
        tip: 'For general truths about a category, use bare plural nouns without "the".',
        ex: {
          type: 'correct',
          q: 'Which makes a general statement? A) The students need guidance. B) Students need guidance.',
          a: ['A) The students need guidance.','B) Students need guidance.'],
          ans: 1,
          exp: 'B) refers to students in general, so no article is needed.'
        }
      },
      {
        id: 'art-r3',
        t: '"The" + singular noun for a class (formal)',
        exp: 'In formal writing, "the" with a singular countable noun can represent an entire class. This is a stylistic choice common in academic essays.',
        ok: 'The computer has revolutionized modern communication.',
        no: 'Computer has revolutionized modern communication.',
        tip: 'Use "the + singular noun" for a formal academic tone when discussing a category.',
        ex: {
          type: 'correct',
          q: 'Which is most formal? A) Smartphones are essential. B) The smartphone is essential. C) A smartphone is essential.',
          a: ['A) Smartphones are essential.','B) The smartphone is essential.','C) A smartphone is essential.'],
          ans: 1,
          exp: '"The smartphone" as a class representative is the most formal academic style.'
        }
      },
      {
        id: 'art-r4',
        t: '"A/an" required for professions',
        exp: 'When stating someone\'s profession, English requires "a" or "an" before the job title. Omitting it is a common error.',
        ok: 'She is a teacher at the local school.',
        no: 'She is teacher at the local school.',
        tip: 'Always write "is a/an + profession" in PTE essays.',
        ex: {
          type: 'error',
          q: 'Find the error: He wants to become engineer after graduation.',
          a: ['become engineer','after graduation','He wants'],
          ans: 0,
          exp: 'It should be "become an engineer" because professions need an article.'
        }
      },
      {
        id: 'art-r5',
        t: 'First mention a/an, second mention the',
        exp: 'When introducing a noun for the first time, use "a/an." When referring to the same noun again, use "the" because it is now known.',
        ok: 'I read a report yesterday. The report highlighted key trends.',
        no: 'I read the report yesterday. A report highlighted key trends.',
        tip: 'Track your nouns: introduce with a/an, refer back with the.',
        ex: {
          type: 'fill',
          q: 'She adopted ___ cat last week. ___ cat is very playful.',
          a: ['a, The','the, A','a, A'],
          ans: 0,
          exp: 'First mention uses "a"; second uses "the" because the cat is now identified.'
        }
      },
      {
        id: 'art-r6',
        t: '"The" with post-modifiers and of-phrases',
        exp: 'When a noun is followed by an of-phrase or other post-modifier that specifies it, use "the." The modifier makes the noun specific.',
        ok: 'The role of technology in education is widely discussed.',
        no: 'Role of technology in education is widely discussed.',
        tip: 'If a noun has "of..." after it, it almost always needs "the" before it.',
        ex: {
          type: 'error',
          q: 'Find the error: Impact of climate change on agriculture is severe.',
          a: ['Impact of','climate change','is severe'],
          ans: 0,
          exp: 'It should be "The impact of..." because the of-phrase makes the noun specific.'
        }
      },
      {
        id: 'art-r7',
        t: 'No article for institutional use of nouns',
        exp: 'Some nouns drop their article when referring to the primary function of the place. "In hospital" means as a patient; "in the hospital" means the building.',
        ok: 'Children go to school to learn.',
        no: 'Children go to the school to learn.',
        tip: 'Use "go to school/church/prison" for the activity, add "the" for the physical place.',
        ex: {
          type: 'correct',
          q: 'She is in hospital. This means:',
          a: ['She is a patient receiving treatment.','She is visiting the building.','She works there.'],
          ans: 0,
          exp: '"In hospital" (no article) means she is there as a patient.'
        }
      },
      {
        id: 'art-r8',
        t: 'No article for abstract nouns: society, nature',
        exp: 'Abstract or mass nouns such as society, nature, history, space, and man (humanity) do not take an article when used in their general sense.',
        ok: 'Society must address inequality. Nature provides essential resources.',
        no: 'The society must address inequality.',
        tip: 'Do not add "the" before society, nature, history, or space when used generally.',
        ex: {
          type: 'error',
          q: 'Find the error: The history teaches us valuable lessons.',
          a: ['The history','teaches us','valuable lessons'],
          ans: 0,
          exp: '"History" in general does not need "the."'
        }
      },
      {
        id: 'art-r9',
        t: '"An" before vowel sounds, not vowel letters',
        exp: 'The choice between "a" and "an" depends on sound, not spelling. Use "an" before vowel sounds and "a" before consonant sounds.',
        ok: 'An honest person deserves respect. She attends a university.',
        no: 'A honest person deserves respect. She attends an university.',
        tip: 'Say the word aloud: "honest" starts with a vowel sound, "university" with a consonant sound.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) an hour B) a hour',
          a: ['A) an hour','B) a hour'],
          ans: 0,
          exp: '"Hour" starts with a silent h, so the first sound is a vowel. Use "an."'
        }
      },
      {
        id: 'art-r10',
        t: 'No article for meals in general',
        exp: 'When referring to meals as regular daily activities, no article is used. Adding an article changes the meaning to a specific event.',
        ok: 'We usually have breakfast at eight.',
        no: 'We usually have the breakfast at eight.',
        tip: 'Write "have breakfast/lunch/dinner" without articles in everyday contexts.',
        ex: {
          type: 'correct',
          q: 'Which is correct for a general habit? A) I eat the lunch at noon. B) I eat lunch at noon.',
          a: ['A) I eat the lunch at noon.','B) I eat lunch at noon.'],
          ans: 1,
          exp: 'Meals as daily routines take no article.'
        }
      },
      {
        id: 'art-r11',
        t: 'General vs. specific uncountable nouns',
        exp: 'Uncountable nouns take no article when general but take "the" when made specific by context. Compare "I love music" with "the music of this film."',
        ok: 'I love music. The music of Beethoven is timeless.',
        no: 'I love the music. (when meaning music in general)',
        tip: 'Ask: am I talking about a specific instance? If yes, use "the." If general, use nothing.',
        ex: {
          type: 'correct',
          q: '"Water is essential for life" uses no article because:',
          a: ['Water is uncountable and used generally here.','Water always lacks an article.','It is a fixed expression.'],
          ans: 0,
          exp: 'Uncountable nouns in general statements take no article.'
        }
      },
      {
        id: 'art-r12',
        t: '"The" for unique references',
        exp: 'Use "the" for things that are one of a kind or universally known: the sun, the moon, the government, the internet.',
        ok: 'The internet has transformed global communication.',
        no: 'Internet has transformed global communication.',
        tip: 'Unique or universally understood nouns always need "the."',
        ex: {
          type: 'error',
          q: 'Find the error: Government should invest more in renewable energy.',
          a: ['Government should','invest more','renewable energy'],
          ans: 0,
          exp: 'It should be "The government" because it refers to a specific known government.'
        }
      },
      {
        id: 'art-r13',
        t: 'No article for most countries and cities',
        exp: 'Most country and city names take no article. However, countries with plural or political words use "the": the UK, the US, the Philippines.',
        ok: 'She lives in China. He visited the United Kingdom.',
        no: 'She lives in the China. He visited United Kingdom.',
        tip: 'Use "the" for countries with Republic, Kingdom, States, or plural forms.',
        ex: {
          type: 'correct',
          q: 'Which needs "the"? A) France B) Netherlands C) Japan',
          a: ['A) France','B) Netherlands','C) Japan'],
          ans: 1,
          exp: '"The Netherlands" requires "the" because it is a plural form.'
        }
      },
      {
        id: 'art-r14',
        t: '"The" for rivers, oceans, and mountain ranges',
        exp: 'Geographic features that are bodies of water or ranges use "the": the Nile, the Pacific, the Alps. Individual mountains and lakes usually do not.',
        ok: 'The Amazon flows through South America. The Alps attract tourists.',
        no: 'Amazon flows through South America.',
        tip: 'Rivers, oceans, seas, deserts, and ranges need "the"; single peaks and lakes do not.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) the Mount Everest B) the Himalayas C) the Lake Victoria',
          a: ['A) the Mount Everest','B) the Himalayas','C) the Lake Victoria'],
          ans: 1,
          exp: 'Mountain ranges take "the" but individual mountains and lakes do not.'
        }
      },
      {
        id: 'art-r15',
        t: 'Fixed expressions without "the"',
        exp: 'Certain common expressions omit the article: go to school, go to bed, go to work, at home, by bus. These refer to the activity, not the place.',
        ok: 'She goes to school by bus and does homework at home.',
        no: 'She goes to the school by the bus.',
        tip: 'Memorize fixed phrases: go to school/bed/work, at home, by car/bus/train.',
        ex: {
          type: 'error',
          q: 'Find the error: After the work, he usually goes to the bed early.',
          a: ['the work','goes to the bed','he usually'],
          ans: 1,
          exp: '"Go to bed" is a fixed expression without an article.'
        }
      }
    ]
  },
  sentencePatterns: {
    title: 'Core Sentence Patterns',
    description: 'Build grammatically correct sentences with proper structure and agreement.',
    rules: [
      {
        id: 'sp-r1',
        t: 'Every English sentence must have a subject',
        exp: 'English requires an explicit subject in every clause. Use "it" or "there" as dummy subjects when no real subject exists.',
        ok: 'It is important to invest in education.',
        no: 'Very important to invest in education.',
        tip: 'Start PTE sentences with a clear subject; never begin with just an adjective.',
        ex: {
          type: 'error',
          q: 'Find the error: Is necessary to consider all options before deciding.',
          a: ['Is necessary','to consider','before deciding'],
          ans: 0,
          exp: 'The sentence needs a subject: "It is necessary to consider..."'
        }
      },
      {
        id: 'sp-r2',
        t: 'Linking verbs take adjectives, not adverbs',
        exp: 'Linking verbs such as be, seem, look, feel, become, appear, and remain connect the subject to a description. They take adjectives.',
        ok: 'The situation looks serious.',
        no: 'The situation looks seriously.',
        tip: 'After look/seem/feel/become/appear, always use an adjective.',
        ex: {
          type: 'correct',
          q: 'The food tastes ___. A) good B) well C) goodly',
          a: ['A) good','B) well','C) goodly'],
          ans: 0,
          exp: '"Taste" is a linking verb here, so it takes the adjective "good."'
        }
      },
      {
        id: 'sp-r3',
        t: 'Uncountable nouns take singular verbs',
        exp: 'Nouns like news, information, advice, research, evidence, and knowledge are uncountable and always take singular verbs.',
        ok: 'The news is alarming. This research shows clear trends.',
        no: 'The news are alarming. These researches show clear trends.',
        tip: 'Memorize key uncountable nouns: news, information, advice, research, evidence, knowledge.',
        ex: {
          type: 'error',
          q: 'Find the error: The evidences suggest that the policy have failed.',
          a: ['The evidences','suggest that','have failed'],
          ans: 0,
          exp: '"Evidence" is uncountable and cannot be plural.'
        }
      },
      {
        id: 'sp-r4',
        t: 'No plural for uncountable nouns',
        exp: 'Uncountable nouns cannot take plural forms. Use "much" or "a great deal of" rather than "many" with uncountable nouns.',
        ok: 'She gave me much advice.',
        no: 'She gave me many advices.',
        tip: 'Never add -s to advice, information, equipment, furniture, or homework.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) many informations B) much information C) a lot of informations',
          a: ['A) many informations','B) much information','C) a lot of informations'],
          ans: 1,
          exp: '"Information" is uncountable and cannot be plural.'
        }
      },
      {
        id: 'sp-r5',
        t: 'Subject-Verb-Object word order is mandatory',
        exp: 'English follows strict S-V-O word order in declarative sentences. The object cannot be placed before the verb in standard statements.',
        ok: 'The government should regulate emissions.',
        no: 'Emissions the government should regulate.',
        tip: 'Keep to S-V-O order in PTE essays for clarity and grammatical accuracy.',
        ex: {
          type: 'correct',
          q: 'Which follows correct word order? A) Many benefits technology brings. B) Technology brings many benefits.',
          a: ['A) Many benefits technology brings.','B) Technology brings many benefits.'],
          ans: 1,
          exp: 'Standard English uses Subject + Verb + Object.'
        }
      },
      {
        id: 'sp-r6',
        t: 'Passive voice: be + past participle',
        exp: 'The passive voice is formed with a form of "be" plus the past participle. Do not use the past simple form of the main verb.',
        ok: 'The essay was written by a student.',
        no: 'The essay was wrote by a student.',
        tip: 'In passive constructions, always use the past participle (written, done, seen, taken).',
        ex: {
          type: 'error',
          q: 'Find the error: The report was gave to the committee yesterday.',
          a: ['was gave','to the committee','yesterday'],
          ans: 0,
          exp: 'It should be "was given" (past participle), not "was gave."'
        }
      },
      {
        id: 'sp-r7',
        t: 'Subject-verb agreement with complex subjects',
        exp: 'When the subject is followed by a prepositional phrase, the verb must agree with the main subject, not the noun in the phrase.',
        ok: 'The list of items is long. The effects of pollution are severe.',
        no: 'The list of items are long.',
        tip: 'Identify the head noun before the "of" phrase to determine singular or plural verb.',
        ex: {
          type: 'correct',
          q: '"The quality of these products ___ excellent." A) is B) are',
          a: ['A) is','B) are'],
          ans: 0,
          exp: 'The subject is "quality" (singular), not "products." Use "is."'
        }
      },
      {
        id: 'sp-r8',
        t: '"There is/are" must agree with the following noun',
        exp: 'In "there is/are" constructions, the verb agrees with the noun that follows. Use "there is" for singular and "there are" for plural.',
        ok: 'There are many reasons to support this view.',
        no: 'There is many reasons to support this view.',
        tip: 'Check the noun after "there is/are" to decide which verb form to use.',
        ex: {
          type: 'error',
          q: 'Find the error: There is several factors that contribute to this problem.',
          a: ['There is','several factors','contribute to'],
          ans: 0,
          exp: '"Several factors" is plural, so it should be "There are."'
        }
      }
    ]
  },
  tenses: {
    title: 'Tense Usage in Academic Writing',
    description: 'Choose the right tense for clarity, accuracy, and academic style.',
    rules: [
      {
        id: 'tn-r1',
        t: 'Simple past with specific past time markers',
        exp: 'Use simple past when an action happened at a definite time in the past. Markers such as yesterday, last year, in 2010 signal simple past.',
        ok: 'She visited Paris last year.',
        no: 'She has visited Paris last year.',
        tip: 'If you see last week/month/year or a specific date, use simple past.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) I have graduated in 2020. B) I graduated in 2020.',
          a: ['A) I have graduated in 2020.','B) I graduated in 2020.'],
          ans: 1,
          exp: 'A specific year requires simple past, not present perfect.'
        }
      },
      {
        id: 'tn-r2',
        t: 'Present perfect continuous for ongoing duration',
        exp: 'Use has/have been + -ing for actions that started in the past and continue to the present, emphasizing the duration of the activity.',
        ok: 'He has been working at this company since 2019.',
        no: 'He is working at this company since 2019.',
        tip: 'Use "has been doing" with "since" or "for" to show an ongoing activity.',
        ex: {
          type: 'fill',
          q: 'She ___ (study) English for five years now.',
          a: ['has been studying','studied','studies'],
          ans: 0,
          exp: 'The action continues now, requiring present perfect continuous.'
        }
      },
      {
        id: 'tn-r3',
        t: 'First conditional: if + present, will + verb',
        exp: 'In first conditional sentences about real future possibilities, use present tense in the if-clause and "will" in the main clause.',
        ok: 'If the government invests in education, society will benefit.',
        no: 'If the government will invest in education, society will benefit.',
        tip: 'Never write "if...will" in conditional sentences.',
        ex: {
          type: 'error',
          q: 'Find the error: If it will rain tomorrow, we will cancel the event.',
          a: ['will rain','tomorrow','will cancel'],
          ans: 0,
          exp: 'The if-clause needs present tense: "If it rains tomorrow..."'
        }
      },
      {
        id: 'tn-r4',
        t: 'No "will" in time clauses about the future',
        exp: 'After time conjunctions such as when, before, after, until, as soon as, use present tense even when the meaning is future.',
        ok: 'When the project finishes, we will review the results.',
        no: 'When the project will finish, we will review the results.',
        tip: 'After when/before/after/until/once, always use present tense for future meaning.',
        ex: {
          type: 'error',
          q: 'Find the error: Before she will leave, she wants to say goodbye.',
          a: ['will leave','she wants','say goodbye'],
          ans: 0,
          exp: 'Time clauses use present tense: "Before she leaves..."'
        }
      },
      {
        id: 'tn-r5',
        t: '"Going to" vs. "will" for predictions',
        exp: '"Going to" is used for predictions based on present evidence. "Will" is used for general predictions, promises, or spontaneous decisions.',
        ok: 'Look at those clouds; it is going to rain.',
        no: 'Look at those clouds; it will rain. (less natural with evidence)',
        tip: 'In essays, "will" is more common for general future predictions.',
        ex: {
          type: 'correct',
          q: 'Based on current data, unemployment ___. A) will rise B) is going to rise C) Both work but B emphasizes evidence',
          a: ['A) will rise','B) is going to rise','C) Both work but B emphasizes evidence'],
          ans: 2,
          exp: 'Both are acceptable; "is going to" highlights present evidence.'
        }
      },
      {
        id: 'tn-r6',
        t: 'Present simple for general truths in essays',
        exp: 'Use present simple to state general truths, widely accepted facts, and habitual situations in academic essays.',
        ok: 'Technology plays a crucial role in modern education.',
        no: 'Technology is playing a crucial role in modern education.',
        tip: 'Default to present simple for essay topic sentences and general claims.',
        ex: {
          type: 'correct',
          q: 'For a general essay claim: A) Education is essential. B) Education has been essential. C) Education was essential.',
          a: ['A) Education is essential.','B) Education has been essential.','C) Education was essential.'],
          ans: 0,
          exp: 'Present simple is used for general truths and timeless statements.'
        }
      },
      {
        id: 'tn-r7',
        t: 'Past simple vs. present perfect for duration',
        exp: 'Past simple for finished situations; present perfect for continuing ones. "He lived here for 3 years" means he left. "He has lived here for 3 years" means he still does.',
        ok: 'She has worked here for ten years. (still works here)',
        no: 'She worked here for ten years. (implies she left)',
        tip: 'If the situation still continues, use present perfect with "for" or "since."',
        ex: {
          type: 'correct',
          q: 'He ___ in London since 2018. (still lives there) A) lived B) has lived',
          a: ['A) lived','B) has lived'],
          ans: 1,
          exp: 'He still lives there, so present perfect is required.'
        }
      },
      {
        id: 'tn-r8',
        t: 'Past tense for polite requests',
        exp: 'Using past tense forms makes requests more polite and tentative. "I was wondering" is softer than "I wonder."',
        ok: 'I was wondering if you could help me with this project.',
        no: 'I wonder if you can help me with this project. (more direct)',
        tip: 'This is less relevant for essays but useful for formal communication tasks.',
        ex: {
          type: 'correct',
          q: 'Which is more polite? A) I wanted to ask you something. B) I want to ask you something.',
          a: ['A) I wanted to ask you something.','B) I want to ask you something.'],
          ans: 0,
          exp: 'Past tense creates a more polite, tentative tone.'
        }
      },
      {
        id: 'tn-r9',
        t: 'Present simple in time clauses for future',
        exp: 'When a subordinate clause introduced by when, before, after, or as soon as refers to the future, use the present simple.',
        ok: 'I will call you when he comes back.',
        no: 'I will call you when he will come back.',
        tip: 'In subordinate time clauses, always use present tense for future events.',
        ex: {
          type: 'fill',
          q: 'As soon as she ___ (arrive), we will begin the meeting.',
          a: ['arrives','will arrive','is arriving'],
          ans: 0,
          exp: 'Time clauses use present simple for future meaning.'
        }
      },
      {
        id: 'tn-r10',
        t: 'Present simple for citing current research',
        exp: 'When referring to what current studies or experts say, use present simple. This frames findings as still relevant and accepted.',
        ok: 'Research shows that exercise improves mental health.',
        no: 'Research has been showing that exercise improved mental health.',
        tip: 'Use "studies show/suggest/indicate" in present simple when citing evidence.',
        ex: {
          type: 'correct',
          q: 'For citing a recent study: A) Smith (2023) found... B) Smith (2023) argues... C) Both can be correct',
          a: ['A) Smith (2023) found...','B) Smith (2023) argues...','C) Both can be correct'],
          ans: 2,
          exp: 'Past simple reports what they found; present simple reports their ongoing position.'
        }
      }
    ]
  },
  clauses: {
    title: 'Clause Structures and Connectors',
    description: 'Build complex sentences with noun, relative, and adverbial clauses.',
    rules: [
      {
        id: 'cl-r1',
        t: '"It is + adj/pp + that" for impersonal style',
        exp: 'Use "It is + adjective or past participle + that" to express views impersonally. This avoids personal pronouns in academic writing.',
        ok: 'It is evident that education reduces inequality.',
        no: 'I think education reduces inequality.',
        tip: 'Use "It is clear/evident/argued/believed that..." for impersonal PTE essay sentences.',
        ex: {
          type: 'fill',
          q: 'It is widely ___ that technology has improved healthcare.',
          a: ['acknowledged','acknowledge','acknowledging'],
          ans: 0,
          exp: '"It is widely acknowledged that..." uses the past participle form.'
        }
      },
      {
        id: 'cl-r2',
        t: 'Both adjective and participle forms work',
        exp: 'Both adjective forms (clear, obvious) and past participle forms (believed, argued) work after "It is...that." Both are common in essays.',
        ok: 'It is clear that action is needed. It is believed that reform will help.',
        no: 'It is believe that reform will help.',
        tip: 'Vary between "It is adj that" and "It is pp that" for sentence variety.',
        ex: {
          type: 'correct',
          q: 'Which is correct? A) It is suggest that... B) It is suggested that... C) It is suggesting that...',
          a: ['A) It is suggest that...','B) It is suggested that...','C) It is suggesting that...'],
          ans: 1,
          exp: 'The past participle "suggested" is required in this passive construction.'
        }
      },
      {
        id: 'cl-r3',
        t: '"Whether" not "if" in subject/formal positions',
        exp: 'In formal writing, use "whether" rather than "if" for noun clauses as subjects, after prepositions, and in formal contexts.',
        ok: 'Whether this policy succeeds depends on public support.',
        no: 'If this policy succeeds depends on public support.',
        tip: 'In PTE essays, prefer "whether" over "if" for noun clauses.',
        ex: {
          type: 'error',
          q: 'Find the error: The question of if technology helps education remains debated.',
          a: ['of if','technology helps','remains debated'],
          ans: 0,
          exp: 'After a preposition, use "whether": "the question of whether..."'
        }
      },
      {
        id: 'cl-r4',
        t: '"What" means "the thing that"',
        exp: '"What" introduces noun clauses meaning "the thing that." It acts as both the connector and the subject or object of its clause.',
        ok: 'What we need is comprehensive reform.',
        no: 'What we need it is comprehensive reform.',
        tip: 'Use "What + clause + is/are" for emphasis at the start of sentences.',
        ex: {
          type: 'correct',
          q: '"What the government proposes is..." means:',
          a: ['The thing that the government proposes is...','If the government proposes...','How the government proposes...'],
          ans: 0,
          exp: '"What" = "the thing that" in noun clause constructions.'
        }
      },
      {
        id: 'cl-r5',
        t: 'No double pronoun in relative clauses',
        exp: 'The relative pronoun (who, which, that) replaces the pronoun. Do not add an extra pronoun inside the clause.',
        ok: 'The students who passed the exam were delighted.',
        no: 'The students who they passed the exam were delighted.',
        tip: 'If you use who/which/that, remove the pronoun it replaces inside the clause.',
        ex: {
          type: 'error',
          q: 'Find the error: The policy which it was introduced last year has been effective.',
          a: ['which it','was introduced','has been effective'],
          ans: 0,
          exp: 'Remove "it" because "which" already serves as the subject.'
        }
      },
      {
        id: 'cl-r6',
        t: '"Who" for people, "which" for things',
        exp: 'Use "who" when referring to people. Use "which" for things and animals. "That" can replace both in restrictive clauses.',
        ok: 'Teachers who inspire students are invaluable.',
        no: 'Teachers which inspire students are invaluable.',
        tip: 'In PTE essays, be consistent: "who" for people, "which" for things.',
        ex: {
          type: 'error',
          q: 'Find the error: Students which study regularly tend to achieve higher grades.',
          a: ['which study','tend to','higher grades'],
          ans: 0,
          exp: 'Use "who" for people: "Students who study regularly..."'
        }
      },
      {
        id: 'cl-r7',
        t: 'Non-restrictive clauses: commas + which/who only',
        exp: 'Non-restrictive clauses (extra information in commas) use "which" or "who." Never use "that" in non-restrictive clauses.',
        ok: 'The policy, which was introduced in 2020, has been effective.',
        no: 'The policy, that was introduced in 2020, has been effective.',
        tip: 'If the clause adds extra information with commas, use which or who, never that.',
        ex: {
          type: 'correct',
          q: 'The internet, ___ was invented in the 20th century, has changed society. A) that B) which',
          a: ['A) that','B) which'],
          ans: 1,
          exp: 'Non-restrictive clauses (with commas) require "which," not "that."'
        }
      },
      {
        id: 'cl-r8',
        t: 'Object relative pronouns can be omitted',
        exp: 'When the relative pronoun is the object of the clause, it can be omitted in restrictive clauses. This makes sentences more natural.',
        ok: 'The book (that) I read was fascinating.',
        no: 'The book I read it was fascinating.',
        tip: 'Omitting object relative pronouns is common and correct in both speech and writing.',
        ex: {
          type: 'correct',
          q: '"The movie I watched last night was great." Is this correct?',
          a: ['Yes, the object pronoun is correctly omitted.','No, it needs "which" before "I watched."','No, it needs "that."'],
          ans: 0,
          exp: 'Object relative pronouns can be omitted in restrictive clauses.'
        }
      },
      {
        id: 'cl-r9',
        t: '"Whose" for possession with people and things',
        exp: '"Whose" shows possession and can refer to both people and things. It replaces possessive determiners in relative clauses.',
        ok: 'Countries whose economies depend on tourism face challenges.',
        no: 'Countries that their economies depend on tourism face challenges.',
        tip: 'Use "whose" instead of "that their" or "which its" in relative clauses.',
        ex: {
          type: 'error',
          q: 'Find the error: A company that its profits are declining must adapt.',
          a: ['that its','are declining','must adapt'],
          ans: 0,
          exp: 'Use "whose": "A company whose profits are declining..."'
        }
      },
      {
        id: 'cl-r10',
        t: '"Which" can refer to a whole clause',
        exp: '"Which" preceded by a comma can refer to the entire preceding clause. This is common in academic writing for adding a comment.',
        ok: 'Unemployment rose sharply, which led to social unrest.',
        no: 'Unemployment rose sharply, that led to social unrest.',
        tip: 'Use ", which" to comment on or add a result to the whole previous statement.',
        ex: {
          type: 'correct',
          q: '"She passed all her exams, which surprised everyone." What does "which" refer to?',
          a: ['The exams.','The fact that she passed all her exams.','Everyone.'],
          ans: 1,
          exp: '"Which" after a comma refers to the whole preceding clause.'
        }
      },
      {
        id: 'cl-r11',
        t: '"That" after reporting verbs',
        exp: 'Reporting verbs (argue, believe, suggest, claim, maintain) are followed by "that" + clause. "That" is preferred in formal writing.',
        ok: 'Researchers argue that education reduces poverty.',
        no: 'Researchers argue education reduces poverty. (less formal)',
        tip: 'Keep "that" after reporting verbs in PTE essays for clarity and formality.',
        ex: {
          type: 'fill',
          q: 'Many scholars maintain ___ social media affects mental health.',
          a: ['that','which','what'],
          ans: 0,
          exp: 'Reporting verbs like "maintain" are followed by "that" + clause.'
        }
      },
      {
        id: 'cl-r12',
        t: 'Never use "although" and "but" together',
        exp: '"Although" and "but" both express contrast. Using both is redundant. Choose one or the other.',
        ok: 'Although technology is helpful, it can also be distracting.',
        no: 'Although technology is helpful, but it can also be distracting.',
        tip: 'Pick either "although...," or "..., but..." Never combine them.',
        ex: {
          type: 'error',
          q: 'Find the error: Although the plan was ambitious, but it failed.',
          a: ['Although','but it failed','its goals'],
          ans: 1,
          exp: 'Remove "but" because "although" already provides the contrast.'
        }
      },
      {
        id: 'cl-r13',
        t: '"Since/as" for known reasons, "because" for new info',
        exp: '"Since" and "as" introduce reasons the reader already knows. "Because" introduces new, important information explaining why.',
        ok: 'Since education is widely valued, governments invest in it.',
        no: 'As he did not study, he failed. (acceptable but "because" is stronger)',
        tip: 'Use "since/as" for background reasons and "because" for key arguments in essays.',
        ex: {
          type: 'correct',
          q: 'Which best introduces a well-known fact as a reason? A) because B) since C) so',
          a: ['A) because','B) since','C) so'],
          ans: 1,
          exp: '"Since" is best for premises already accepted by the reader.'
        }
      },
      {
        id: 'cl-r14',
        t: '"So that + modal" for purpose',
        exp: 'Use "so that" followed by a modal verb (can, will, may) to express purpose. Do not confuse with "so...that" for result.',
        ok: 'Governments should invest in education so that citizens can compete globally.',
        no: 'Governments should invest in education so that citizens compete globally.',
        tip: 'After "so that," include a modal verb: can, will, may, could, would.',
        ex: {
          type: 'fill',
          q: 'Schools offer scholarships so that students ___ afford higher education.',
          a: ['can','to','will be'],
          ans: 0,
          exp: '"So that" for purpose is followed by a modal verb like "can."'
        }
      },
      {
        id: 'cl-r15',
        t: '"Despite/in spite of" + noun phrase only',
        exp: '"Despite" and "in spite of" must be followed by a noun, noun phrase, or gerund. They cannot be followed by a full clause.',
        ok: 'Despite the heavy rain, the event continued.',
        no: 'Despite it rained heavily, the event continued.',
        tip: 'After despite/in spite of, use a noun or -ing form, never a clause.',
        ex: {
          type: 'error',
          q: 'Find the error: In spite of he was tired, he continued working.',
          a: ['In spite of he was tired','he continued','working'],
          ans: 0,
          exp: '"In spite of" needs a noun phrase: "In spite of being tired."'
        }
      },
      {
        id: 'cl-r16',
        t: '"So + adjective + that" for result',
        exp: 'The structure "so + adjective/adverb + that" expresses a result. The adjective describes the degree, and the that-clause states the outcome.',
        ok: 'The problem was so severe that immediate action was required.',
        no: 'The problem was so severe so immediate action was required.',
        tip: 'Use "so + adj + that" for cause-result sentences in essays.',
        ex: {
          type: 'fill',
          q: 'Technology has advanced so rapidly ___ traditional industries struggle to adapt.',
          a: ['that','so','which'],
          ans: 0,
          exp: '"So + adverb + that" introduces the result clause.'
        }
      },
      {
        id: 'cl-r17',
        t: '"While/whereas" for contrast without "but"',
        exp: '"While" and "whereas" introduce contrasting ideas. Do not add "but" as that would be redundant.',
        ok: 'While some argue for stricter laws, others prefer education-based solutions.',
        no: 'While some argue for stricter laws, but others prefer education-based solutions.',
        tip: 'Use "while/whereas" at the start of a contrast clause; never add "but."',
        ex: {
          type: 'error',
          q: 'Find the error: Whereas developed nations have advanced healthcare, but developing nations lack it.',
          a: ['Whereas developed','but developing','lack it'],
          ans: 1,
          exp: 'Remove "but" because "whereas" already signals the contrast.'
        }
      },
      {
        id: 'cl-r18',
        t: '"Provided that/as long as" for formal conditions',
        exp: '"Provided that" and "as long as" introduce conditions formally. They are more formal alternatives to "if."',
        ok: 'Growth can be achieved, provided that governments invest wisely.',
        no: 'Growth can be achieved, provided governments will invest wisely.',
        tip: 'Use "provided that" or "as long as" for formal conditional statements.',
        ex: {
          type: 'correct',
          q: 'Which is the most formal conditional? A) If they try... B) Provided that they try... C) When they try...',
          a: ['A) If they try...','B) Provided that they try...','C) When they try...'],
          ans: 1,
          exp: '"Provided that" is the most formal conditional expression.'
        }
      },
      {
        id: 'cl-r19',
        t: '"Such + noun + that" for result with nouns',
        exp: 'Use "such + (adjective) + noun + that" for result. "Such" modifies nouns, whereas "so" modifies adjectives and adverbs.',
        ok: 'It was such a complex problem that no single solution could be found.',
        no: 'It was so a complex problem that no single solution could be found.',
        tip: 'Use "such + noun" and "so + adjective" for result clauses.',
        ex: {
          type: 'correct',
          q: 'This is ___ issue that everyone is concerned. A) so serious B) such a serious C) so a serious',
          a: ['A) so serious','B) such a serious','C) so a serious'],
          ans: 1,
          exp: '"Such a + adjective + noun + that" is the correct pattern with nouns.'
        }
      },
      {
        id: 'cl-r20',
        t: '"Because of" + noun, "because" + clause',
        exp: '"Because of" is a preposition followed by a noun phrase. "Because" is a conjunction followed by a complete clause.',
        ok: 'Because of the heavy rain, the match was cancelled.',
        no: 'Because of it rained heavily, the match was cancelled.',
        tip: 'Check what follows: noun phrase = "because of"; full clause = "because."',
        ex: {
          type: 'error',
          q: 'Find the error: Because of the economy is weak, unemployment has risen.',
          a: ['Because of the economy is weak','unemployment','has risen'],
          ans: 0,
          exp: '"Because of" cannot be followed by a clause. Use "Because the economy is weak."'
        }
      }
    ]
  },
  conditionals: {
    title: 'Conditional Sentences',
    description: 'Master zero through third conditionals and formal subjunctive forms.',
    rules: [
      {
        id: 'cd-r1',
        t: 'Zero conditional: general truths and facts',
        exp: 'Zero conditional uses present simple in both clauses. It describes general truths and scientific facts that are always true.',
        ok: 'If you heat water to 100 degrees, it boils.',
        no: 'If you heat water to 100 degrees, it will boil.',
        tip: 'Use zero conditional in essays for established cause-effect relationships.',
        ex: {
          type: 'correct',
          q: '"If demand increases, prices rise." This is:',
          a: ['A zero conditional stating a general truth.','A first conditional about the future.','An incorrect sentence.'],
          ans: 0,
          exp: 'Both clauses use present simple, expressing a general truth.'
        }
      },
      {
        id: 'cd-r2',
        t: 'First conditional: real future possibility',
        exp: 'First conditional uses "if + present simple" and "will + base verb." It describes real, possible future situations.',
        ok: 'If the government increases funding, schools will improve.',
        no: 'If the government will increase funding, schools will improve.',
        tip: 'First conditional is the most common type in PTE essays.',
        ex: {
          type: 'fill',
          q: 'If renewable energy ___ (become) cheaper, more countries will adopt it.',
          a: ['becomes','will become','became'],
          ans: 0,
          exp: 'First conditional: if + present simple, will + base verb.'
        }
      },
      {
        id: 'cd-r3',
        t: 'Second conditional: unreal present situation',
        exp: 'Second conditional uses "if + past simple" and "would + base verb" for hypothetical situations. Use "were" instead of "was" formally.',
        ok: 'If every country invested in education, poverty would decrease.',
        no: 'If every country invests in education, poverty would decrease.',
        tip: 'Use second conditional for hypothetical arguments in essays.',
        ex: {
          type: 'correct',
          q: '"If I were the president, I would reform education." Why "were"?',
          a: ['Formal subjunctive used in hypothetical conditions.','A grammar mistake; "was" is correct.','It refers to multiple people.'],
          ans: 0,
          exp: 'In second conditionals, "were" is used for all subjects in formal English.'
        }
      },
      {
        id: 'cd-r4',
        t: 'Third conditional: unreal past situation',
        exp: 'Third conditional uses "if + past perfect" and "would have + past participle" for hypothetical past situations that did not happen.',
        ok: 'If they had invested earlier, they would have avoided the crisis.',
        no: 'If they invested earlier, they would have avoided the crisis.',
        tip: 'Third conditional is useful for discussing what could have been done differently.',
        ex: {
          type: 'fill',
          q: 'If the government ___ (act) sooner, the damage would have been less.',
          a: ['had acted','acted','would have acted'],
          ans: 0,
          exp: 'Third conditional: if + past perfect, would have + pp.'
        }
      },
      {
        id: 'cd-r5',
        t: 'Mixed conditional: past cause, present result',
        exp: 'Mixed conditionals combine second and third conditional elements. "If + past perfect, would + base verb" links a past event to a present result.',
        ok: 'If she had studied medicine, she would be a doctor now.',
        no: 'If she had studied medicine, she would have been a doctor now.',
        tip: 'Use mixed conditionals to show how past decisions affect current situations.',
        ex: {
          type: 'correct',
          q: '"If they had built better infrastructure, the city would be more resilient today." This is:',
          a: ['A mixed conditional linking past to present.','A third conditional about the past only.','A second conditional about the present only.'],
          ans: 0,
          exp: 'Past perfect + would + base verb = mixed conditional.'
        }
      },
      {
        id: 'cd-r6',
        t: 'Formal subjunctive after suggest/recommend',
        exp: 'After suggest, recommend, insist, demand, and propose, use the base form of the verb in formal English regardless of the subject.',
        ok: 'Experts recommend that every student take this course.',
        no: 'Experts recommend that every student takes this course.',
        tip: 'Use base verb after suggest/recommend/insist that in PTE essays.',
        ex: {
          type: 'correct',
          q: '"The committee insists that he ___ present." A) be B) is C) will be',
          a: ['A) be','B) is','C) will be'],
          ans: 0,
          exp: 'Formal subjunctive requires the base form "be" after "insists that."'
        }
      },
      {
        id: 'cd-r7',
        t: '"I wish" + past for present, past perfect for past',
        exp: '"I wish + past simple" expresses a desire about the present. "I wish + past perfect" expresses regret about a past event.',
        ok: 'I wish I had more time. / I wish I had studied harder.',
        no: 'I wish I have more time. / I wish I studied harder.',
        tip: 'Use "wish + past perfect" for expressing regret about past decisions.',
        ex: {
          type: 'correct',
          q: '"I wish governments had acted sooner on climate change." This expresses:',
          a: ['Regret about a past inaction.','A wish about the present.','A prediction about the future.'],
          ans: 0,
          exp: '"Wish + past perfect" expresses regret about the past.'
        }
      },
      {
        id: 'cd-r8',
        t: '"It is high time that" + past tense',
        exp: '"It is high time that" is followed by past simple to express urgency. Despite using past tense, the meaning is present or future.',
        ok: 'It is high time that governments took action on climate change.',
        no: 'It is high time that governments take action on climate change.',
        tip: 'Use "It is high time that + past tense" for strong urgent recommendations.',
        ex: {
          type: 'fill',
          q: 'It is high time that society ___ (address) the issue of inequality.',
          a: ['addressed','addresses','will address'],
          ans: 0,
          exp: '"It is high time that" requires past tense to express urgency.'
        }
      },
      {
        id: 'cd-r9',
        t: 'Never put "will" in if-clauses',
        exp: 'In conditional sentences, the if-clause uses present or past tense, never "will." The main clause contains "will" or "would."',
        ok: 'If pollution continues, ecosystems will suffer.',
        no: 'If pollution will continue, ecosystems will suffer.',
        tip: 'Review every if-clause in your essay to make sure it does not contain "will."',
        ex: {
          type: 'error',
          q: 'Find the error: If technology will continue to advance, many jobs will become obsolete.',
          a: ['will continue','to advance','will become'],
          ans: 0,
          exp: 'Remove "will" from the if-clause: "If technology continues to advance..."'
        }
      }
    ]
  },
  modals: {
    title: 'Modal Verbs for Academic Writing',
    description: 'Use modal verbs for hedging, certainty, and academic tone.',
    rules: [
      {
        id: 'md-r1',
        t: 'Certainty scale: must > may > might/could',
        exp: 'Modal verbs express different degrees of certainty. "Must" indicates about 90% certainty, "may" about 50%, and "might/could" about 25%.',
        ok: 'This must be the reason. This may be a factor. This could be an issue.',
        no: 'This must be the reason. (when only 50% sure)',
        tip: 'Choose modals carefully to match your level of certainty in PTE essays.',
        ex: {
          type: 'correct',
          q: 'To express moderate possibility in an essay, use:',
          a: ['must','may','will'],
          ans: 1,
          exp: '"May" expresses moderate possibility for academic hedging.'
        }
      },
      {
        id: 'md-r2',
        t: '"Must not" vs. "do not have to"',
        exp: '"Must not" means forbidden or prohibited. "Do not have to" means not necessary but allowed. Very different meanings.',
        ok: 'Students must not plagiarize. Students do not have to write more than 300 words.',
        no: 'Students must not write more than 300 words. (if you mean optional)',
        tip: 'Be precise: "must not" = forbidden, "do not have to" = optional.',
        ex: {
          type: 'correct',
          q: '"You ___ attend the meeting; it is optional." A) must not B) do not have to',
          a: ['A) must not','B) do not have to'],
          ans: 1,
          exp: '"Do not have to" means not necessary. "Must not" means forbidden.'
        }
      },
      {
        id: 'md-r3',
        t: 'Academic hedging with may/might/could',
        exp: 'In academic writing, avoid absolute claims. Use "may," "might," or "could" instead of "will" or "must" to hedge arguments.',
        ok: 'This approach may lead to improvements in public health.',
        no: 'This approach will lead to improvements in public health.',
        tip: 'Replace "will" with "may/might/could" for a more academic tone.',
        ex: {
          type: 'correct',
          q: 'Which sounds most academic? A) Social media causes depression. B) Social media may contribute to depression.',
          a: ['A) Social media causes depression.','B) Social media may contribute to depression.'],
          ans: 1,
          exp: 'Hedging with "may contribute to" is more cautious and academic.'
        }
      },
      {
        id: 'md-r4',
        t: '"Can" for ability, "may" for permission/possibility',
        exp: '"Can" primarily expresses ability or general possibility. "May" expresses permission or possibility. In academic writing, "may" for possibility is preferred.',
        ok: 'Technology can improve efficiency. Excessive use may cause health problems.',
        no: 'Technology may improve efficiency. (sounds uncertain about ability)',
        tip: 'Use "can" for what something is able to do, "may" for what might happen.',
        ex: {
          type: 'correct',
          q: '"Increased funding ___ improve education quality." (ability) A) can B) may',
          a: ['A) can','B) may'],
          ans: 0,
          exp: '"Can" expresses the ability or potential of funding to improve quality.'
        }
      },
      {
        id: 'md-r5',
        t: 'Modal + have + pp for past speculation',
        exp: 'To speculate about past events, use modal + have + past participle. "Must have" for near certainty, "may have" for possibility.',
        ok: 'The policy must have contributed to the improvement.',
        no: 'The policy must contributed to the improvement.',
        tip: 'Always include "have" between the modal and the past participle.',
        ex: {
          type: 'error',
          q: 'Find the error: She might forgot to submit her assignment.',
          a: ['might forgot','to submit','her assignment'],
          ans: 0,
          exp: 'It should be "might have forgotten" (modal + have + pp).'
        }
      },
      {
        id: 'md-r6',
        t: 'Politeness scale: can < could < would you mind',
        exp: 'Modal verbs express different levels of politeness. "Can" is direct, "could" is more polite, "would you mind" is most formal.',
        ok: 'Could you explain this concept? Would you mind clarifying this point?',
        no: 'Can you explain this concept? (direct, less formal)',
        tip: 'This scale is more relevant for speaking but formal modals improve essay tone too.',
        ex: {
          type: 'correct',
          q: 'Rank from least to most polite: A) Can you help? B) Could you help? C) Would you mind helping?',
          a: ['A, B, C (least to most polite)','C, B, A (least to most polite)','All equally polite.'],
          ans: 0,
          exp: 'Can < Could < Would you mind in terms of politeness.'
        }
      },
      {
        id: 'md-r7',
        t: '"Should" for recommendations, not "must"',
        exp: '"Should" is for recommendations and advice. "Must" is too strong for recommendations as it implies obligation or command.',
        ok: 'Governments should invest more in renewable energy.',
        no: 'Governments must invest more in renewable energy. (too forceful)',
        tip: 'Use "should" for essay recommendations; reserve "must" for obligations.',
        ex: {
          type: 'correct',
          q: 'For an essay recommendation: A) Schools must ban phones. B) Schools should consider restricting phone use.',
          a: ['A) Schools must ban phones.','B) Schools should consider restricting phone use.'],
          ans: 1,
          exp: '"Should consider" is more measured for academic recommendations.'
        }
      },
      {
        id: 'md-r8',
        t: '"Could" for specific, "can" for general possibility',
        exp: '"Can" expresses general theoretical possibility. "Could" expresses specific possibility or more tentative suggestions.',
        ok: 'Pollution can cause respiratory disease. This policy could reduce emissions by 20%.',
        no: 'This policy can reduce emissions by 20%. (too definite for a prediction)',
        tip: 'Use "can" for what is generally possible, "could" for specific predictions.',
        ex: {
          type: 'correct',
          q: '"Renewable energy ___ eventually replace fossil fuels." (specific prediction) A) can B) could',
          a: ['A) can','B) could'],
          ans: 1,
          exp: '"Could" is better for a specific prediction as it acknowledges uncertainty.'
        }
      }
    ]
  },
  nonFinite: {
    title: 'Non-Finite Clauses and Participles',
    description: 'Use participles, gerunds, and infinitives for concise academic sentences.',
    rules: [
      {
        id: 'nf-r1',
        t: 'Present participle replacing relative clauses',
        exp: 'A present participle can replace an active relative clause. "People who live in cities" becomes "People living in cities."',
        ok: 'People living in urban areas face higher costs.',
        no: 'People who are living in urban areas face higher costs.',
        tip: 'Replace "who/which + verb" with the -ing form for concise PTE writing.',
        ex: {
          type: 'correct',
          q: '"Students studying abroad gain experience" is equivalent to:',
          a: ['Students who study abroad gain experience.','Students who are studied abroad gain experience.','Students to study abroad gain experience.'],
          ans: 0,
          exp: 'The -ing participle replaces the active relative clause "who study."'
        }
      },
      {
        id: 'nf-r2',
        t: 'Past participle replacing passive relative clauses',
        exp: 'A past participle can replace a passive relative clause. "Policies which were implemented" becomes "Policies implemented."',
        ok: 'Strategies implemented by the government have been effective.',
        no: 'Strategies which were implemented by the government have been effective.',
        tip: 'Replace "which was/were + pp" with just the past participle for conciseness.',
        ex: {
          type: 'correct',
          q: '"The data collected in 2023 shows..." is equivalent to:',
          a: ['The data which was collected in 2023 shows...','The data which collected in 2023 shows...','The data collecting in 2023 shows...'],
          ans: 0,
          exp: 'The past participle replaces the passive relative clause.'
        }
      },
      {
        id: 'nf-r3',
        t: 'Gerund as subject of a sentence',
        exp: 'A gerund (-ing form as a noun) can serve as the subject. It takes a singular verb. This is common in academic writing.',
        ok: 'Investing in education is essential for economic growth.',
        no: 'Invest in education is essential for economic growth.',
        tip: 'Start sentences with a gerund for variety: "Reducing emissions requires cooperation."',
        ex: {
          type: 'error',
          q: 'Find the error: Develop renewable energy are critical for the future.',
          a: ['Develop renewable','are critical','for the future'],
          ans: 0,
          exp: 'Use gerund "Developing" and singular verb "is."'
        }
      },
      {
        id: 'nf-r4',
        t: 'Verbs + gerund: suggest, consider, avoid, enjoy',
        exp: 'Certain verbs must be followed by a gerund: suggest, consider, avoid, enjoy, recommend, deny, finish, risk.',
        ok: 'Experts suggest investing in green technology.',
        no: 'Experts suggest to invest in green technology.',
        tip: 'Memorize: suggest/consider/avoid/enjoy/recommend + -ing form.',
        ex: {
          type: 'error',
          q: 'Find the error: The report recommends to increase public spending.',
          a: ['recommends to increase','public spending','on healthcare'],
          ans: 0,
          exp: '"Recommend" is followed by a gerund: "recommends increasing."'
        }
      },
      {
        id: 'nf-r5',
        t: '"By + gerund" for method or means',
        exp: '"By + gerund" explains how something is achieved. It is a very useful structure for academic arguments.',
        ok: 'By investing in public transport, cities can reduce congestion.',
        no: 'By invest in public transport, cities can reduce congestion.',
        tip: 'Use "By + -ing" to explain how a solution works in PTE essays.',
        ex: {
          type: 'fill',
          q: 'Governments can reduce inequality by ___ (provide) equal access to education.',
          a: ['providing','provide','to provide'],
          ans: 0,
          exp: '"By" must be followed by a gerund: "by providing."'
        }
      },
      {
        id: 'nf-r6',
        t: 'Participle pre-modifiers for academic style',
        exp: 'Participles can modify nouns directly before them. "Growing concern" means concern that is growing. This is concise and academic.',
        ok: 'The rising cost of living is a growing concern.',
        no: 'The cost of living that is rising is a concern that is growing.',
        tip: 'Use participle modifiers: growing concern, rising costs, declining standards.',
        ex: {
          type: 'correct',
          q: 'Which uses participle pre-modifiers? A) The costs that are increasing worry economists. B) Increasing costs worry economists.',
          a: ['A) The costs that are increasing worry economists.','B) Increasing costs worry economists.'],
          ans: 1,
          exp: '"Increasing" as a pre-modifier is more concise and academic.'
        }
      },
      {
        id: 'nf-r7',
        t: 'Shortened adverbial clauses with participles',
        exp: 'Adverbial clauses can be shortened by removing subject and auxiliary. "When compared with X" = "When it is compared with X."',
        ok: 'When compared with traditional methods, online learning offers flexibility.',
        no: 'When it is compared with traditional methods, online learning offers flexibility.',
        tip: 'Shorten clauses after when/while/if/once by removing the subject and "be."',
        ex: {
          type: 'correct',
          q: '"Once implemented, the policy will benefit many." The full form is:',
          a: ['Once it is implemented, the policy will benefit many.','Once implementing, the policy will benefit many.','Once it implements, the policy will benefit many.'],
          ans: 0,
          exp: 'The shortened form removes "it is" from "Once it is implemented."'
        }
      },
      {
        id: 'nf-r8',
        t: 'Participle clause for result at end of sentence',
        exp: 'A present participle at the end of a sentence can express a result of the main clause action. A comma separates them.',
        ok: 'The government introduced incentives, encouraging businesses to invest.',
        no: 'The government introduced incentives and it encouraged businesses to invest.',
        tip: 'End sentences with ", -ing" to show a natural result or consequence.',
        ex: {
          type: 'correct',
          q: '"Pollution rose sharply, causing health problems." The -ing clause expresses:',
          a: ['A result of pollution rising.','The cause of pollution.','A condition for pollution.'],
          ans: 0,
          exp: 'The -ing clause after a comma expresses a result.'
        }
      },
      {
        id: 'nf-r9',
        t: '"In order to" for formal purpose',
        exp: '"In order to" expresses purpose more formally than just "to." It clearly signals why an action is taken.',
        ok: 'In order to reduce emissions, governments must invest in clean energy.',
        no: 'For reduce emissions, governments must invest in clean energy.',
        tip: 'Use "in order to" at the start of purpose clauses for formal essay writing.',
        ex: {
          type: 'correct',
          q: 'Which is most formal? A) To improve results... B) In order to improve results... C) For improving results...',
          a: ['A) To improve results...','B) In order to improve results...','C) For improving results...'],
          ans: 1,
          exp: '"In order to" is the most formal way to express purpose.'
        }
      },
      {
        id: 'nf-r10',
        t: '"Faced with" passive participle construction',
        exp: '"Faced with" is a common academic participle meaning "when confronting." It creates a concise opening for sentences about challenges.',
        ok: 'Faced with rising costs, many families struggle to afford healthcare.',
        no: 'Facing with rising costs, many families struggle to afford healthcare.',
        tip: 'Use "Faced with + noun" to introduce a challenge at the start of a sentence.',
        ex: {
          type: 'error',
          q: 'Find the error: Facing with a shortage of resources, the company downsized.',
          a: ['Facing with','a shortage','downsized'],
          ans: 0,
          exp: 'The correct form is "Faced with" (passive participle).'
        }
      },
      {
        id: 'nf-r11',
        t: 'Gerund after prepositions',
        exp: 'After all prepositions (in, on, by, for, instead of, in addition to), use the gerund form of the verb, never the infinitive.',
        ok: 'Instead of relying on fossil fuels, nations should invest in renewables.',
        no: 'Instead of to rely on fossil fuels, nations should invest in renewables.',
        tip: 'After any preposition, always use the -ing form of the verb.',
        ex: {
          type: 'error',
          q: 'Find the error: In addition to provide financial aid, the government should create jobs.',
          a: ['to provide','financial aid','should create'],
          ans: 0,
          exp: 'After "in addition to," use a gerund: "In addition to providing..."'
        }
      },
      {
        id: 'nf-r12',
        t: 'Gerund replacing noun clauses for conciseness',
        exp: 'A gerund phrase can replace a full noun clause for more concise writing. "Reducing emissions" = "That we reduce emissions."',
        ok: 'Reducing emissions is a global priority.',
        no: 'That we reduce emissions is a global priority. (correct but wordy)',
        tip: 'Use gerund phrases instead of "that" noun clauses for concise academic writing.',
        ex: {
          type: 'correct',
          q: 'Which is more concise? A) That governments invest in education is essential. B) Investing in education is essential.',
          a: ['A) That governments invest...','B) Investing in education is essential.'],
          ans: 1,
          exp: 'The gerund construction is more concise and natural.'
        }
      },
      {
        id: 'nf-r13',
        t: 'Verbs + infinitive: want, hope, decide, plan',
        exp: 'Certain verbs are followed by the infinitive: want, hope, decide, plan, agree, expect, manage, refuse, promise, aim.',
        ok: 'Many students hope to study abroad after graduation.',
        no: 'Many students hope studying abroad after graduation.',
        tip: 'Memorize: want/hope/decide/plan/agree/expect + to + verb.',
        ex: {
          type: 'error',
          q: 'Find the error: The company decided expanding its operations overseas.',
          a: ['decided expanding','its operations','overseas'],
          ans: 0,
          exp: '"Decide" takes an infinitive: "decided to expand."'
        }
      },
      {
        id: 'nf-r14',
        t: 'Remember/forget/stop: gerund vs. infinitive',
        exp: 'Some verbs change meaning with gerund vs. infinitive. "Remember doing" = recall a past action. "Remember to do" = not forget a future action.',
        ok: 'I remember submitting the form. (I recall doing it)',
        no: 'I remember to submit the form yesterday. (wrong meaning)',
        tip: 'Gerund = looking back; infinitive = looking forward.',
        ex: {
          type: 'correct',
          q: '"She stopped smoking" vs. "She stopped to smoke." The difference is:',
          a: ['First: quit the habit. Second: paused in order to smoke.','First: paused to smoke. Second: quit the habit.','They mean the same thing.'],
          ans: 0,
          exp: '"Stop + gerund" = quit. "Stop + infinitive" = pause in order to do something.'
        }
      },
      {
        id: 'nf-r15',
        t: 'Dangling modifier errors',
        exp: 'A participle clause at the start must share the same subject as the main clause. Mismatched subjects create a dangling modifier error.',
        ok: 'Walking to school, the student noticed a rainbow.',
        no: 'Walking to school, the bus was late. (The bus was not walking.)',
        tip: 'Always check that the main clause subject matches the implied participle subject.',
        ex: {
          type: 'error',
          q: 'Find the error: Having studied all night, the exam seemed easy.',
          a: ['Having studied all night','the exam seemed','easy'],
          ans: 0,
          exp: 'The exam did not study. Correct: "Having studied all night, she found the exam easy."'
        }
      }
    ]
  }
};

// ============================================================
// 2. SWT_PASSAGES - 10 reading passages with model summaries
// ============================================================

var SWT_PASSAGES = [
  {
    id: 'swt-1',
    title: 'Social Media and Interpersonal Relationships',
    category: 'Technology',
    text: 'The proliferation of social media platforms over the past two decades has fundamentally altered the nature of interpersonal relationships, generating a lively debate among researchers about whether these changes are predominantly beneficial or detrimental. Proponents argue that platforms such as Facebook, Instagram, and WeChat enable individuals to maintain connections across geographical distances, facilitate the formation of communities based on shared interests, and provide support networks for marginalized groups who might otherwise feel isolated. A study published in the Journal of Social and Personal Relationships found that individuals who used social media to complement face-to-face interactions reported higher levels of social satisfaction. However, a growing body of evidence suggests significant drawbacks. Research conducted by psychologists at the University of Pennsylvania demonstrated that limiting social media use to thirty minutes per day led to significant reductions in loneliness and depression among participants. Critics contend that the curated nature of online profiles fosters unhealthy social comparison, while the constant availability of digital communication may diminish the depth and quality of in-person interactions. The relationship between social media use and well-being appears to depend not on the quantity of use alone but on the manner in which individuals engage with these platforms.',
    model: 'While social media platforms enable people to maintain long-distance connections and build interest-based communities, research indicates that excessive or passive use can increase loneliness and depression, suggesting that the impact on interpersonal relationships depends on how individuals engage with these platforms rather than simply how much they use them.',
    keyPoints: ['Social media helps maintain connections and build communities across distances', 'Excessive use is linked to increased loneliness and depression', 'The quality of impact depends on how platforms are used, not just how much']
  },
  {
    id: 'swt-2',
    title: 'Urban Green Spaces and Public Health',
    category: 'Health',
    text: 'Urban green spaces, encompassing parks, gardens, tree-lined streets, and other areas of vegetation within city environments, have attracted increasing attention from public health researchers as evidence mounts regarding their positive effects on physical and mental well-being. A comprehensive meta-analysis published in The Lancet Planetary Health, which synthesized data from over twenty studies involving more than 290 million participants, found that residential proximity to green spaces was associated with reduced risks of cardiovascular disease, type 2 diabetes, and premature mortality. The mechanisms underlying these health benefits appear to operate through multiple pathways: green spaces encourage physical activity by providing attractive environments for walking and exercise, reduce exposure to air pollution through the filtering capacity of vegetation, mitigate the urban heat island effect, and promote psychological restoration by offering respite from the sensory overload characteristic of dense urban environments. Despite these well-documented benefits, access to quality green spaces remains inequitably distributed, with lower-income neighborhoods and communities of color consistently having less green space per capita than affluent areas. This environmental injustice compounds existing health disparities, as the populations with the greatest health needs often have the least access to the natural environments that could improve their outcomes.',
    model: 'Research involving over 290 million participants has demonstrated that urban green spaces reduce risks of cardiovascular disease, diabetes, and premature death through encouraging physical activity, filtering air pollution, and promoting psychological restoration, yet access remains inequitably distributed with disadvantaged communities having the least access despite the greatest health needs.',
    keyPoints: ['Green spaces reduce cardiovascular disease, diabetes, and premature death', 'Benefits operate through physical activity, air filtration, and psychological restoration', 'Access is inequitably distributed, worsening health disparities']
  },
  {
    id: 'swt-3',
    title: 'Automation and Future Employment',
    category: 'Economy',
    text: 'The accelerating deployment of automation technologies, including robotics, artificial intelligence, and machine learning, is generating profound uncertainty about the future of employment across virtually all sectors of the global economy. A widely cited study by McKinsey Global Institute estimated that between 400 million and 800 million workers worldwide could be displaced by automation by 2030, with routine cognitive and physical tasks being most susceptible to technological replacement. However, historical precedent suggests that technological revolutions, while disruptive in the short term, ultimately create more jobs than they destroy. The introduction of automated teller machines, for example, did not eliminate bank teller positions but rather shifted the role toward relationship management and complex financial advisory services. Contemporary economists emphasize that the net impact of automation on employment will depend critically on the speed of technological adoption, the adaptability of education and training systems, and the effectiveness of government policies in managing the transition. Occupations requiring creativity, complex problem-solving, emotional intelligence, and interpersonal skills are expected to grow, while those involving routine data processing and predictable physical labor face the greatest risk of displacement. The challenge for policymakers lies in ensuring that the economic gains from increased productivity are broadly shared rather than concentrated among capital owners and highly skilled workers.',
    model: 'Although automation may displace 400 to 800 million workers by 2030 according to McKinsey, historical precedent suggests that technological revolutions create more jobs than they destroy, with the net impact depending on education system adaptability and government policy effectiveness in ensuring productivity gains are broadly shared across society.',
    keyPoints: ['Automation could displace 400-800 million workers by 2030', 'Historical precedent shows technology ultimately creates more jobs than it destroys', 'Net impact depends on education, policy, and equitable distribution of gains']
  },
  {
    id: 'swt-4',
    title: 'Online vs. Traditional Education Effectiveness',
    category: 'Education',
    text: 'The debate over the relative effectiveness of online and traditional classroom education has intensified considerably since the global pandemic necessitated a rapid shift to remote learning, providing researchers with an unprecedented natural experiment. A large-scale meta-analysis conducted by the United States Department of Education found that students in online learning conditions performed modestly better than those receiving face-to-face instruction, particularly when online elements were combined with traditional teaching in blended formats. However, these findings come with important caveats. The advantages of online learning appear to be most pronounced for self-motivated adult learners with strong digital literacy skills, while younger students and those from disadvantaged backgrounds often struggle with the self-regulation demands of remote education. Research from the National Bureau of Economic Research documented significant learning losses among primary school students during extended periods of online instruction, with the effects disproportionately affecting students from low-income families. Furthermore, the social and emotional dimensions of education, including peer interaction, collaborative learning, and the development of interpersonal skills, are more difficult to replicate in virtual environments. The emerging consensus among education researchers is that the future lies not in choosing between online and traditional modalities but in thoughtfully integrating both approaches to leverage the flexibility and accessibility of digital tools while preserving the irreplaceable value of human connection in learning.',
    model: 'While a US Department of Education meta-analysis found online learning can be modestly more effective, particularly in blended formats for self-motivated adults, younger and disadvantaged students experience significant learning losses in remote settings, leading researchers to advocate for thoughtful integration of both online and traditional approaches rather than choosing between them.',
    keyPoints: ['Online learning is modestly more effective in blended formats for motivated adults', 'Younger and disadvantaged students suffer learning losses in purely online settings', 'The future lies in integrating both modalities to balance flexibility with human connection']
  },
  {
    id: 'swt-5',
    title: 'Biodiversity Loss and Ecosystem Services',
    category: 'Environment',
    text: 'The current rate of species extinction is estimated to be between one hundred and one thousand times higher than the natural background rate, prompting scientists to warn that the Earth may be entering its sixth mass extinction event, driven primarily by human activities including habitat destruction, overexploitation, pollution, and climate change. This biodiversity crisis has implications far beyond the intrinsic value of individual species, as biological diversity underpins a vast array of ecosystem services upon which human civilization depends. Pollination by insects and other animals supports approximately seventy-five percent of global food crop production, while forests and other natural ecosystems regulate water cycles, purify air and water, sequester carbon dioxide, and buffer communities against natural disasters. The Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services has valued these contributions at an estimated $125 trillion to $145 trillion annually, far exceeding global gross domestic product. Critically, these services cannot be easily replaced by technological alternatives. Efforts to create robotic pollinators, for instance, remain prohibitively expensive and technologically limited compared to the efficiency of natural systems. Conservation strategies must therefore address the underlying drivers of biodiversity loss through protected area expansion, sustainable land-use practices, reduction of pollution, and meaningful action on climate change, while also recognizing the rights and knowledge of indigenous communities who have been effective stewards of biodiversity for millennia.',
    model: 'With species extinction rates at one hundred to one thousand times the natural rate, the biodiversity crisis threatens ecosystem services valued at $125 to $145 trillion annually, including crop pollination and climate regulation that cannot be easily replaced by technology, necessitating conservation strategies that address habitat destruction, pollution, and climate change while incorporating indigenous stewardship knowledge.',
    keyPoints: ['Extinction rates are 100-1000 times the natural background rate', 'Ecosystem services are valued at $125-145 trillion annually and cannot be replaced by technology', 'Conservation must address root drivers and incorporate indigenous knowledge']
  },
  {
    id: 'swt-6',
    title: 'Psychology of Decision-Making and Cognitive Biases',
    category: 'Psychology',
    text: 'Research in behavioral economics and cognitive psychology has fundamentally challenged the classical assumption that human beings are rational agents who consistently maximize their self-interest when making decisions. The groundbreaking work of Daniel Kahneman and Amos Tversky demonstrated that individuals rely on mental shortcuts, known as heuristics, which are efficient but systematically prone to predictable errors called cognitive biases. Among the most influential biases are anchoring, whereby individuals over-rely on the first piece of information they encounter when making estimates; loss aversion, the tendency to feel the pain of losses approximately twice as intensely as the pleasure of equivalent gains; and the availability heuristic, which leads people to judge the probability of events based on how easily examples come to mind rather than on actual statistical frequency. These biases have profound practical implications across domains ranging from personal finance, where investors consistently buy high and sell low due to emotional reactions, to public health, where the framing of medical information significantly influences patient choices. Governments worldwide have responded by establishing behavioral insight teams, commonly known as nudge units, which design policy interventions that account for these predictable irrationalities, such as automatic enrollment in pension schemes and simplified tax filing processes, achieving notable improvements in compliance and welfare outcomes without restricting individual choice.',
    model: 'Kahneman and Tversky\'s research revealed that human decision-making relies on heuristics prone to systematic cognitive biases such as anchoring and loss aversion, which affect domains from personal finance to public health, prompting governments worldwide to establish nudge units that design policy interventions accounting for these predictable irrationalities to improve welfare outcomes without restricting choice.',
    keyPoints: ['Humans rely on heuristics that produce systematic cognitive biases', 'Key biases include anchoring, loss aversion, and the availability heuristic', 'Governments use nudge units to design bias-aware policy interventions']
  },
  {
    id: 'swt-7',
    title: 'Renewable Energy Transition Challenges',
    category: 'Energy',
    text: 'The global transition from fossil fuels to renewable energy sources has reached an economic inflection point, with the cost of solar photovoltaic electricity declining by approximately eighty-nine percent since 2010 and onshore wind costs falling by seventy percent over the same period, according to the International Renewable Energy Agency. In many regions, new solar and wind installations are now cheaper than operating existing coal-fired power plants, let alone building new ones. Despite this dramatic economic shift, the transition faces several formidable technical and socioeconomic challenges. The intermittent nature of solar and wind generation, which depends on weather conditions and time of day, creates significant difficulties for maintaining grid stability, requiring substantial investment in energy storage technologies such as lithium-ion batteries, pumped hydroelectric storage, and emerging green hydrogen solutions. Additionally, the expansion of renewable infrastructure demands massive quantities of critical minerals including lithium, cobalt, and rare earth elements, raising concerns about supply chain vulnerabilities and the environmental impact of mining operations. The transition also has profound socioeconomic dimensions, particularly for communities dependent on fossil fuel industries, where job losses can devastate local economies unless comprehensive just transition policies provide retraining opportunities, economic diversification support, and adequate social safety nets to manage the displacement.',
    model: 'Despite solar and wind energy costs declining by up to eighty-nine percent since 2010, making renewables cheaper than fossil fuels in many regions, the energy transition faces challenges including grid stability from intermittent generation requiring storage investment, critical mineral supply chain concerns, and socioeconomic impacts on fossil fuel-dependent communities necessitating comprehensive just transition policies.',
    keyPoints: ['Solar costs fell 89% and wind costs 70% since 2010, often cheaper than fossil fuels', 'Intermittent generation requires investment in energy storage technologies', 'Just transition policies are needed for fossil fuel-dependent communities']
  },
  {
    id: 'swt-8',
    title: 'Cultural Preservation in Globalization',
    category: 'Culture',
    text: 'Globalization has created unprecedented interconnectedness among the world\'s cultures, facilitating the exchange of ideas, art, cuisine, and traditions across national boundaries. However, this process has also generated legitimate concerns about cultural homogenization, as the dominance of Western, particularly American, media and consumer products threatens to erode the distinctiveness of local cultural traditions and indigenous knowledge systems. The United Nations Educational, Scientific and Cultural Organization estimates that approximately forty percent of the world\'s estimated seven thousand languages are endangered, with one language disappearing approximately every two weeks, taking with it unique ways of understanding the world, specialized ecological knowledge, and irreplaceable cultural heritage. The loss extends beyond language to encompass traditional arts, crafts, agricultural practices, and medicinal knowledge accumulated over centuries. In response, many communities and governments have implemented cultural preservation strategies, including language revitalization programs, digital archiving of oral traditions, protection of traditional knowledge through intellectual property mechanisms, and the promotion of cultural tourism that empowers local communities. The challenge lies in pursuing preservation without fossilizing cultures, recognizing that living cultures are inherently dynamic and that meaningful preservation requires enabling communities to adapt and evolve on their own terms rather than imposing static museum-like conservation models.',
    model: 'Globalization threatens cultural diversity with approximately forty percent of the world\'s seven thousand languages endangered and traditional knowledge systems being eroded by Western cultural dominance, prompting preservation strategies including language revitalization and digital archiving, though effective preservation must enable communities to adapt dynamically rather than imposing static conservation approaches.',
    keyPoints: ['About 40% of 7000 world languages are endangered, one disappearing every two weeks', 'Loss extends to traditional arts, ecological knowledge, and medicinal practices', 'Preservation must be dynamic, enabling communities to evolve on their own terms']
  },
  {
    id: 'swt-9',
    title: 'Sleep and Cognitive Performance',
    category: 'Health',
    text: 'A substantial and growing body of neuroscience research has established that sleep is not merely a passive state of rest but an active and essential biological process that plays a critical role in cognitive performance, memory consolidation, emotional regulation, and physical health. Studies using functional magnetic resonance imaging have demonstrated that during sleep, the brain engages in vital maintenance processes, including the clearance of metabolic waste products through the glymphatic system, the consolidation of newly acquired information from short-term to long-term memory storage, and the pruning and strengthening of neural connections. Research published in the journal Nature Reviews Neuroscience indicates that even moderate sleep deprivation, defined as obtaining fewer than seven hours per night on a regular basis, produces measurable impairments in attention, working memory, decision-making, and creative problem-solving comparable to those caused by mild alcohol intoxication. The implications for education are particularly significant, as studies of adolescent sleep patterns have shown that early school start times conflict with the biologically delayed circadian rhythms of teenagers, resulting in chronic sleep deficiency that impairs academic performance and increases rates of anxiety and depression. Despite this evidence, workplace cultures in many countries continue to valorize long working hours and minimal sleep as indicators of dedication, perpetuating patterns of sleep deprivation that collectively cost the global economy an estimated $411 billion annually in lost productivity.',
    model: 'Neuroscience research shows that sleep is an active biological process essential for memory consolidation, waste clearance, and cognitive maintenance, with even moderate deprivation below seven hours producing impairments comparable to mild intoxication, yet cultural attitudes continue to valorize minimal sleep despite costing the global economy an estimated $411 billion annually in lost productivity.',
    keyPoints: ['Sleep involves active processes including waste clearance and memory consolidation', 'Less than seven hours impairs cognition comparably to mild alcohol intoxication', 'Sleep deprivation costs the global economy an estimated $411 billion annually']
  },
  {
    id: 'swt-10',
    title: 'Sustainable Urban Transportation',
    category: 'Urban Planning',
    text: 'As urban populations continue to grow, with projections suggesting that sixty-eight percent of the world\'s population will live in cities by 2050, the development of sustainable transportation systems has become one of the most pressing challenges facing urban planners and policymakers. Traditional car-centric urban design has generated a cascade of problems including traffic congestion, air pollution responsible for an estimated 4.2 million premature deaths annually according to the World Health Organization, greenhouse gas emissions, and the inequitable allocation of urban space to private vehicles. Progressive cities worldwide are implementing integrated approaches that prioritize public transit, active transportation, and shared mobility solutions. Copenhagen, for instance, has invested heavily in cycling infrastructure, resulting in more daily trips by bicycle than by car within the city center, while cities such as Seoul and Cheonggyecheon have transformed urban highways into parks and public spaces. The concept of the fifteen-minute city, in which residents can access all essential services within a fifteen-minute walk or bicycle ride, has gained significant traction in urban planning discourse, with Paris implementing ambitious programs to reduce car dependence. However, achieving sustainable urban mobility requires not only infrastructure investment but also addressing systemic barriers including suburban sprawl, zoning regulations that separate residential and commercial areas, and cultural attitudes that equate car ownership with personal freedom and social status.',
    model: 'With sixty-eight percent of the global population projected to live in cities by 2050, sustainable transportation is critical, as car-centric design causes 4.2 million premature deaths annually from air pollution, prompting progressive cities to implement integrated approaches including cycling infrastructure and the fifteen-minute city concept, though systemic barriers like suburban sprawl and cultural attitudes toward car ownership must also be addressed.',
    keyPoints: ['68% of the world population will live in cities by 2050', 'Car-centric design causes 4.2 million premature deaths annually from air pollution', 'Solutions include cycling infrastructure, the 15-minute city, and addressing cultural attitudes']
  }
];

// ============================================================
// 3. MODEL_ESSAYS - 8 model essays keyed by ESSAY_TOPICS id
// ============================================================

var MODEL_ESSAYS = {
  1: {
    score: 85,
    text: 'In recent years, there has been growing debate about whether getting married before finishing school or securing a job is a wise decision. While some argue that early marriage can provide emotional stability, I firmly believe that it is generally inadvisable due to its negative impact on academic performance and financial security.\n\nOne of the primary arguments against early marriage is its detrimental effect on educational outcomes. Students who marry before completing their studies frequently face competing demands between family responsibilities and academic commitments. Consequently, they may struggle to devote adequate time to coursework and examinations, which can ultimately lead to lower grades or even withdrawal from their programs. Research consistently indicates that individuals who complete their education before marrying achieve higher levels of career success and personal satisfaction.\n\nFurthermore, early marriage often imposes significant financial burdens on young couples who have not yet established stable careers. Without a steady income, married students must manage household expenses, potential childcare costs, and educational fees simultaneously. This financial pressure can create tension within the relationship, and studies suggest that economic difficulties are among the leading causes of marital breakdown.\n\nIn conclusion, while early marriage is a personal choice that may suit some individuals, the evidence strongly suggests that completing education and establishing financial independence first leads to better outcomes for both personal development and relationship stability. Young people should therefore prioritize their academic and professional growth before assuming the responsibilities of marriage.',
    wordCount: 228,
    structure: {intro:'States the debate and presents a clear position against early marriage.', body1:'Argues that early marriage harms educational outcomes through competing demands.', body2:'Discusses the financial burdens early marriage places on young couples.', conclusion:'Restates position and recommends prioritizing education and career.'},
    highlights: {linkingWords:['While','Consequently','Furthermore','simultaneously','In conclusion','therefore'], academicVocab:['detrimental','inadvisable','competing demands','withdrawal','marital breakdown'], goodStructures:['there has been growing debate about whether','I firmly believe that','Research consistently indicates that']}
  },
  3: {
    score: 85,
    text: 'The question of whether laws can effectively limit human behavior has long been debated among legal scholars and social scientists. While some contend that legislation has minimal impact on individual conduct, I believe that well-designed laws play a crucial role in shaping behavior, although their effectiveness depends on enforcement and social acceptance.\n\nThere is compelling evidence that laws can significantly influence human behavior through deterrence. Strict traffic regulations, for instance, have contributed to substantial reductions in road fatalities in countries that enforce them rigorously. When individuals face severe penalties for breaking the law, they are more likely to comply, as the potential consequences outweigh the benefits of illegal activity. Moreover, laws can gradually shape social norms and values over time. Anti-discrimination legislation, for example, has not only reduced overt discrimination but has also contributed to shifting public attitudes toward greater tolerance and equality.\n\nHowever, it must be acknowledged that laws have inherent limitations. When legislation conflicts with deeply held cultural beliefs or personal interests, compliance may be minimal regardless of enforcement efforts. The prohibition of alcohol in the United States during the 1920s demonstrates that laws perceived as unjust or unreasonable can actually increase illegal activity rather than prevent it. Additionally, individuals may exploit legal loopholes or simply accept the risk of punishment when the potential rewards are sufficiently attractive.\n\nOverall, while laws alone cannot completely control human behavior, they remain an essential tool for establishing social order and promoting desirable conduct, particularly when supported by effective enforcement and broad public acceptance.',
    wordCount: 243,
    structure: {intro:'Introduces the debate and presents a balanced position supporting laws with caveats.', body1:'Argues laws shape behavior through deterrence and norm formation with examples.', body2:'Acknowledges limitations including cultural resistance and loophole exploitation.', conclusion:'Provides balanced summary emphasizing laws as essential but insufficient alone.'},
    highlights: {linkingWords:['While','for instance','Moreover','However','Additionally','Overall'], academicVocab:['compelling evidence','deterrence','rigorously','inherent limitations','compliance'], goodStructures:['There is compelling evidence that','it must be acknowledged that','When legislation conflicts with']}
  },
  5: {
    score: 85,
    text: 'The question of whether formal written examinations constitute a valid method of assessing student learning has generated considerable discussion in educational circles. Although examinations have certain limitations, I believe they remain a necessary and largely effective assessment tool when used alongside other evaluation methods.\n\nFirst and foremost, formal examinations provide a standardized and objective means of evaluating student knowledge. By requiring all students to respond to identical questions under uniform conditions, examinations eliminate much of the subjectivity inherent in alternative assessment approaches such as oral presentations or coursework evaluation. This standardization is particularly important in high-stakes contexts, such as university admissions, where fair comparison across candidates is essential. Moreover, the preparation process itself reinforces learning, as students must synthesize and consolidate information in preparation for comprehensive testing.\n\nHowever, critics legitimately argue that examinations cannot fully capture the breadth of student learning. Practical skills, creative thinking, and collaborative abilities are difficult to assess through written tests alone. Additionally, some students who possess deep understanding of a subject may perform poorly under examination pressure, producing results that do not accurately reflect their true capabilities. This suggests that relying exclusively on examinations would provide an incomplete picture of student achievement.\n\nIn light of the arguments presented, formal examinations remain a valuable assessment tool that provides objectivity and promotes systematic study, but they should be complemented by diverse assessment methods including projects, portfolios, and practical evaluations to capture the full range of student abilities.',
    wordCount: 232,
    structure: {intro:'Introduces the debate and takes a balanced pro-examination position.', body1:'Argues for standardization, objectivity, and the learning benefits of exam preparation.', body2:'Concedes limitations regarding practical skills and exam anxiety.', conclusion:'Advocates combining examinations with diverse assessment methods.'},
    highlights: {linkingWords:['Although','First and foremost','Moreover','However','Additionally','In light of'], academicVocab:['standardized','inherent','high-stakes','synthesize','consolidate'], goodStructures:['The question of whether...has generated considerable discussion','it is particularly important in high-stakes contexts','This suggests that']}
  },
  7: {
    score: 85,
    text: 'Tourism has become a major industry for many developing nations, offering significant economic opportunities while simultaneously presenting considerable challenges. I believe that the advantages and disadvantages of tourism in less developed countries are indeed roughly comparable, and managing this balance requires careful policy planning.\n\nOn the positive side, tourism generates substantial economic benefits for developing countries. It creates employment opportunities across multiple sectors, from hospitality and transportation to local handicrafts and food services. Furthermore, tourism revenue contributes to national income and can fund the development of essential infrastructure, including roads, airports, and sanitation systems, which benefit local communities beyond the tourism sector. Cultural exchange between visitors and residents can also promote mutual understanding and help preserve traditional arts and practices that might otherwise disappear.\n\nNevertheless, the disadvantages of tourism can be equally significant. The influx of tourists often places enormous pressure on fragile natural environments, leading to pollution, habitat destruction, and resource depletion. Moreover, tourism can erode traditional cultural values as local communities adapt to meet tourist expectations, potentially creating a commodified version of their heritage. There is also the risk of economic overdependence on a volatile industry that is highly susceptible to external shocks, as demonstrated by the devastating impact of recent global health crises on tourism-dependent economies.\n\nIn conclusion, while tourism offers genuine opportunities for economic development and cultural exchange in developing nations, these benefits must be carefully managed to mitigate environmental degradation, cultural erosion, and economic vulnerability. Sustainable tourism policies that involve local communities in planning and decision-making are essential.',
    wordCount: 248,
    structure: {intro:'Presents balanced view acknowledging both sides are roughly equal.', body1:'Discusses economic benefits including jobs, infrastructure, and cultural exchange.', body2:'Examines environmental damage, cultural erosion, and economic overdependence.', conclusion:'Calls for sustainable tourism policies involving local communities.'},
    highlights: {linkingWords:['Furthermore','Nevertheless','Moreover','In conclusion','while'], academicVocab:['simultaneously','substantial','commodified','volatile','susceptible','mitigate'], goodStructures:['I believe that the advantages and disadvantages are indeed roughly comparable','places enormous pressure on','highly susceptible to external shocks']}
  },
  9: {
    score: 85,
    text: 'The information revolution driven by modern mass communication has profoundly transformed both individual lives and broader society. I strongly agree that this transformation carries both positive and negative consequences, and understanding this duality is essential for navigating the digital age responsibly.\n\nThe positive impacts of the information revolution are undeniable. Mass communication technologies, including social media platforms and instant messaging applications, have dramatically increased the speed and accessibility of information sharing. Individuals can now access news, educational resources, and diverse perspectives from virtually anywhere in the world, promoting greater awareness of global issues and fostering cross-cultural understanding. Additionally, these technologies have strengthened social connections by enabling people to maintain relationships across geographical distances and to form communities based on shared interests or experiences.\n\nHowever, the negative consequences of this revolution are equally significant. The proliferation of misinformation and fake news through digital channels poses a serious threat to informed democratic participation, as individuals may struggle to distinguish credible information from deliberate falsehood. Furthermore, excessive engagement with digital media has been linked to declining attention spans, reduced workplace productivity, and increased rates of anxiety and depression, particularly among younger users. The erosion of privacy through data collection by technology companies represents another substantial concern that affects both individuals and society at large.\n\nIn summary, while the information revolution has brought remarkable benefits in terms of connectivity and access to knowledge, its negative effects on mental health, information quality, and privacy must be actively addressed through digital literacy education, responsible platform governance, and thoughtful regulatory frameworks.',
    wordCount: 237,
    structure: {intro:'Agrees that the information revolution has both positive and negative effects.', body1:'Discusses positive effects: speed of information, global awareness, social connections.', body2:'Examines negatives: misinformation, mental health effects, privacy erosion.', conclusion:'Advocates for digital literacy and responsible governance to address harms.'},
    highlights: {linkingWords:['Additionally','However','Furthermore','In summary','while'], academicVocab:['profoundly','proliferation','credible','deliberate falsehood','erosion','regulatory frameworks'], goodStructures:['I strongly agree that this transformation carries both positive and negative consequences','poses a serious threat to','The erosion of privacy represents another substantial concern']}
  },
  12: {
    score: 85,
    text: 'Climate change is undoubtedly one of the most pressing global challenges of our time, requiring coordinated action from multiple stakeholders. While governments, corporations, and individuals each bear some responsibility, I contend that governments must take the primary leadership role, supported by meaningful contributions from businesses and citizens.\n\nGovernments possess the unique authority and resources necessary to implement large-scale climate action. Through legislation and policy frameworks, they can establish binding emission targets, enforce environmental regulations, and allocate public funding toward renewable energy infrastructure. The European Union\'s climate initiatives demonstrate how governmental commitment can drive systemic change by setting ambitious targets for carbon neutrality. Without such coordinated policy direction, individual and corporate efforts, however well-intentioned, would remain fragmented and insufficient to address a problem of this magnitude.\n\nNevertheless, large corporations must also accept substantial responsibility, given that a relatively small number of major companies account for a disproportionate share of global industrial emissions. By investing in green technologies, reducing their carbon footprints, and adopting sustainable supply chain practices, businesses can make significant contributions to emission reduction. Furthermore, corporate environmental initiatives can raise public awareness and create market demand for sustainable products, generating a positive feedback loop.\n\nIndividuals, while unable to match the scale of governmental or corporate action, play a vital role through sustainable lifestyle choices and civic engagement. By holding governments and businesses accountable through democratic participation and consumer choices, citizens can collectively drive meaningful change.\n\nOverall, addressing climate change demands a collaborative approach where governments lead through policy, corporations contribute through innovation, and individuals participate through responsible choices and active civic engagement.',
    wordCount: 252,
    structure: {intro:'Identifies climate change as critical and argues governments should lead.', body1:'Argues governments have unique authority for large-scale policy and regulation.', body2:'Discusses corporate responsibility given their disproportionate emissions share.', conclusion:'Emphasizes collaborative multi-stakeholder approach with governments leading.'},
    highlights: {linkingWords:['While','Nevertheless','Furthermore','Overall'], academicVocab:['stakeholders','binding','systemic change','disproportionate','feedback loop','civic engagement'], goodStructures:['I contend that governments must take the primary leadership role','Without such coordinated policy direction','demands a collaborative approach where']}
  },
  15: {
    score: 85,
    text: 'The decision of whether to pursue university education or enter the workforce immediately after high school is one that significantly shapes young people\'s future prospects. Both paths offer distinct advantages, and I believe the optimal choice depends on individual circumstances, career goals, and financial situations.\n\nThere are compelling reasons to pursue university education. Higher education provides specialized knowledge and critical thinking skills that are increasingly valued in the modern knowledge economy. University graduates, on average, earn significantly higher lifetime incomes than those with only secondary education, and they typically enjoy greater job security and career advancement opportunities. Beyond economic benefits, university offers invaluable experiences including exposure to diverse perspectives, networking opportunities, and the development of independent thinking that contributes to personal growth.\n\nConversely, entering the workforce directly after high school offers its own significant advantages. Early employment enables young people to gain practical experience and develop professional skills that cannot be acquired in a classroom setting. It also provides immediate financial independence, allowing individuals to avoid the substantial student debt that burdens many graduates. In certain industries, such as skilled trades and technology, practical experience and industry certifications may be more valued by employers than formal academic qualifications.\n\nIn conclusion, neither path is inherently superior to the other. Young people should carefully evaluate their personal strengths, career aspirations, and financial resources when making this decision. Ideally, education systems should provide flexible pathways that allow individuals to combine work experience with continued learning throughout their careers, recognizing that professional development is a lifelong process rather than a single decision point.',
    wordCount: 247,
    structure: {intro:'Presents balanced view; optimal choice depends on individual circumstances.', body1:'Argues for university: specialized knowledge, higher income, personal growth.', body2:'Argues for work: practical experience, financial independence, industry value.', conclusion:'Neither is inherently superior; advocates flexible pathways combining both.'},
    highlights: {linkingWords:['Conversely','Beyond','In conclusion','Ideally'], academicVocab:['compelling reasons','knowledge economy','invaluable','inherently','aspirations'], goodStructures:['I believe the optimal choice depends on individual circumstances','provides specialized knowledge and critical thinking skills','neither path is inherently superior to the other']}
  },
  20: {
    score: 85,
    text: 'The question of whether foreign language learning should be a mandatory requirement for all students has sparked considerable debate among educators and policymakers. I believe that while there are strong arguments on both sides, the cognitive, cultural, and professional benefits of language learning justify making it a requirement, provided that implementation is flexible and well-resourced.\n\nLearning a foreign language offers significant cognitive and cultural advantages. Research in neuroscience has demonstrated that bilingual individuals display enhanced cognitive flexibility, improved memory, and delayed onset of age-related cognitive decline. Moreover, language learning inherently involves engagement with different cultural perspectives, fostering empathy, open-mindedness, and intercultural competence that are increasingly essential in our globalized world. These skills extend beyond mere communication to encompass a deeper understanding of how different societies think and organize their worldviews.\n\nHowever, opponents raise valid concerns about making language learning compulsory. Not every student will use a foreign language professionally, and the considerable time invested in language study could arguably be directed toward other valuable subjects such as computer science or financial literacy. Additionally, critics point to the rapid advancement of translation technology, which may diminish the practical necessity of personal language proficiency in the coming decades.\n\nNevertheless, I maintain that the benefits of language learning extend well beyond practical utility. The cognitive enhancement, cultural awareness, and expanded career prospects it provides justify its inclusion as a core educational requirement. Governments should ensure that language programs are well-funded, engaging, and begin at an early age when language acquisition is most natural and effective.',
    wordCount: 245,
    structure: {intro:'Supports mandatory language learning with caveat about flexible implementation.', body1:'Presents cognitive benefits and cultural advantages of language learning.', body2:'Acknowledges counterarguments about time investment and translation technology.', conclusion:'Maintains that benefits justify requirement; advocates early, well-funded programs.'},
    highlights: {linkingWords:['Moreover','However','Additionally','Nevertheless'], academicVocab:['cognitive flexibility','intercultural competence','compulsory','proficiency','acquisition'], goodStructures:['I believe that while there are strong arguments on both sides','Research in neuroscience has demonstrated that','the benefits extend well beyond practical utility']}
  }
};

// ============================================================
// 4. WRITING_RUBRIC - PTE self-assessment scoring criteria
// ============================================================

var WRITING_RUBRIC = {
  swt: {
    content: {
      max: 2,
      levels: [
        {score: 2, desc: 'Accurately captures the main idea and all key supporting points from the passage.'},
        {score: 1, desc: 'Addresses the main idea but omits one or more key supporting points.'},
        {score: 0, desc: 'Fails to address the main idea or is completely off topic.'}
      ]
    },
    form: {
      max: 1,
      levels: [
        {score: 1, desc: 'Response is a single sentence between 5 and 75 words in length.'},
        {score: 0, desc: 'Response is not a single sentence or falls outside the 5-75 word range.'}
      ]
    },
    grammar: {
      max: 2,
      levels: [
        {score: 2, desc: 'Grammar is accurate throughout with no errors affecting meaning.'},
        {score: 1, desc: 'Contains some grammatical errors but the meaning remains clear.'},
        {score: 0, desc: 'Multiple grammatical errors that significantly impede understanding.'}
      ]
    },
    vocabulary: {
      max: 2,
      levels: [
        {score: 2, desc: 'Uses precise and varied vocabulary appropriate to the academic topic.'},
        {score: 1, desc: 'Adequate vocabulary with occasional inappropriate or imprecise word choices.'},
        {score: 0, desc: 'Vocabulary is very basic, repetitive, or frequently inappropriate.'}
      ]
    }
  },
  essay: {
    content: {
      max: 6,
      levels: [
        {score: 6, desc: 'Fully addresses the topic with well-developed, relevant ideas and examples.'},
        {score: 4, desc: 'Addresses the topic adequately with some relevant supporting ideas.'},
        {score: 2, desc: 'Partially addresses the topic with limited development or relevance.'},
        {score: 0, desc: 'Does not address the topic or response is completely irrelevant.'}
      ]
    },
    development: {
      max: 6,
      levels: [
        {score: 6, desc: 'Excellent logical structure with clear introduction, body, and conclusion.'},
        {score: 4, desc: 'Clear structure with adequate paragraph development and coherence.'},
        {score: 2, desc: 'Basic structure present but paragraphs are poorly developed or incoherent.'},
        {score: 0, desc: 'No discernible organization or logical paragraph structure.'}
      ]
    },
    linguisticRange: {
      max: 6,
      levels: [
        {score: 6, desc: 'Wide range of sophisticated vocabulary and varied complex sentence structures.'},
        {score: 4, desc: 'Good range of vocabulary and sentence structures with some variety.'},
        {score: 2, desc: 'Limited vocabulary range with mostly simple or repetitive sentence patterns.'},
        {score: 0, desc: 'Extremely limited vocabulary and sentence structures throughout.'}
      ]
    },
    grammar: {
      max: 2,
      levels: [
        {score: 2, desc: 'Accurate grammar throughout with only minor slips that do not affect meaning.'},
        {score: 1, desc: 'Some grammatical errors present but overall meaning is generally clear.'},
        {score: 0, desc: 'Frequent grammatical errors that significantly impede communication.'}
      ]
    },
    form: {
      max: 2,
      levels: [
        {score: 2, desc: 'Word count is within 200-300 words with proper paragraph structure.'},
        {score: 1, desc: 'Word count is slightly outside range or paragraph structure is weak.'},
        {score: 0, desc: 'Word count is significantly outside range or no paragraph structure.'}
      ]
    },
    spelling: {
      max: 2,
      levels: [
        {score: 2, desc: 'Spelling is accurate throughout with no noticeable errors.'},
        {score: 1, desc: 'A few spelling errors present but they do not impede understanding.'},
        {score: 0, desc: 'Frequent spelling errors that distract the reader or cause confusion.'}
      ]
    }
  }
};

// ============================================================
// 5. ERROR_CHECKLIST - Chinese-speaker common error self-review
// ============================================================

var ERROR_CHECKLIST = [
  {
    id: 'articles',
    label: 'Article Usage',
    desc: 'Check every noun phrase for correct article usage: the, a/an, or zero article.',
    examples: {wrong: 'The education is important for the society.', right: 'Education is important for society.'},
    tips: ['Remove "the" before uncountable nouns used in a general sense.', 'Add "the" when the noun is made specific by an of-phrase or relative clause.']
  },
  {
    id: 'plurals',
    label: 'Plural and Uncountable Nouns',
    desc: 'Verify that uncountable nouns are not pluralized and that countable nouns have correct plural forms.',
    examples: {wrong: 'He gave me many advices and informations.', right: 'He gave me much advice and information.'},
    tips: ['Never pluralize: advice, information, equipment, furniture, research, knowledge.', 'Use "much" or "a great deal of" instead of "many" with uncountable nouns.']
  },
  {
    id: 'sv-agreement',
    label: 'Subject-Verb Agreement',
    desc: 'Ensure every verb agrees with its true subject, especially with intervening phrases.',
    examples: {wrong: 'The list of items are on the desk. There is many reasons.', right: 'The list of items is on the desk. There are many reasons.'},
    tips: ['Cross out prepositional phrases to find the real subject.', 'Check "there is/are" constructions match the following noun.']
  },
  {
    id: 'tenses',
    label: 'Tense Consistency',
    desc: 'Check that tenses are used correctly and consistently within each paragraph.',
    examples: {wrong: 'She has visited Paris last year.', right: 'She visited Paris last year.'},
    tips: ['Use present simple for general truths in essays.', 'Never use present perfect with specific past time markers.']
  },
  {
    id: 'prepositions',
    label: 'Preposition Errors',
    desc: 'Verify correct preposition usage, especially in common collocations.',
    examples: {wrong: 'It depends of many factors. She focuses in her work.', right: 'It depends on many factors. She focuses on her work.'},
    tips: ['Memorize: depend on, focus on, consist of, result in, contribute to.', 'After "instead of" and "in addition to," use the gerund form.']
  },
  {
    id: 'word-order',
    label: 'Word Order',
    desc: 'Ensure standard English S-V-O word order in all declarative sentences.',
    examples: {wrong: 'Very important is education. This problem how to solve?', right: 'Education is very important. How can we solve this problem?'},
    tips: ['Never start a sentence with an adjective alone as if it were a subject.', 'Questions use auxiliary-subject inversion; statements do not.']
  },
  {
    id: 'run-ons',
    label: 'Run-on Sentences',
    desc: 'Check that independent clauses are properly separated by a period, semicolon, or conjunction.',
    examples: {wrong: 'Education is important, it helps people succeed.', right: 'Education is important because it helps people succeed.'},
    tips: ['Never join two independent clauses with just a comma (comma splice).', 'Use a conjunction (and, but, because), semicolon, or period between clauses.']
  },
  {
    id: 'pronouns',
    label: 'Pronoun Errors',
    desc: 'Ensure pronouns agree with their antecedents and that relative clauses do not have double pronouns.',
    examples: {wrong: 'Students who they study hard will succeed.', right: 'Students who study hard will succeed.'},
    tips: ['Never use both a relative pronoun and a personal pronoun for the same reference.', 'Use "whose" for possession: "countries whose economies" not "countries that their economies."']
  },
  {
    id: 'linking',
    label: 'Linking Word Misuse',
    desc: 'Verify that linking words are used correctly and not combined redundantly.',
    examples: {wrong: 'Although it rained, but we still went out.', right: 'Although it rained, we still went out.'},
    tips: ['Never combine "although" with "but" or "while" with "but."', 'Use "despite" or "in spite of" with noun phrases only, not full clauses.']
  },
  {
    id: 'spelling',
    label: 'Spelling Consistency',
    desc: 'Check for commonly misspelled words and maintain consistent British or American spelling.',
    examples: {wrong: 'goverment, enviroment, definately, seperate, occured', right: 'government, environment, definitely, separate, occurred'},
    tips: ['Choose either British or American spelling and use it consistently throughout.', 'Double-check: government, environment, definitely, separate, occurred, necessary.']
  },
  {
    id: 'passive-overuse',
    label: 'Passive Voice Overuse',
    desc: 'Ensure a balance between active and passive voice; avoid excessive passive constructions.',
    examples: {wrong: 'It is believed by experts that action should be taken by governments.', right: 'Experts believe that governments should take action.'},
    tips: ['Use active voice for clearer, more direct statements.', 'Reserve passive voice for when the agent is unknown or the object is the focus.']
  },
  {
    id: 'direct-translation',
    label: 'Direct Translation Errors',
    desc: 'Avoid translating expressions directly from your first language into English.',
    examples: {wrong: 'He very like music. My body is not comfortable.', right: 'He really likes music. I do not feel well.'},
    tips: ['English uses adverbs before verbs differently than some languages.', 'Learn idiomatic English expressions rather than translating word by word.']
  }
];

// ============================================================
// 6. ACADEMIC_VOCAB - Academic vocabulary organized by function
// ============================================================

var ACADEMIC_VOCAB = {
  opinion: [
    {word: 'contend', example: 'Some experts contend that stricter laws are necessary.', simpler: 'argue/claim'},
    {word: 'assert', example: 'Critics assert that the policy has failed to achieve its goals.', simpler: 'state firmly'},
    {word: 'maintain', example: 'Proponents maintain that technology enhances learning outcomes.', simpler: 'continue to argue'},
    {word: 'advocate', example: 'Many scholars advocate a more balanced approach to regulation.', simpler: 'support/recommend'},
    {word: 'posit', example: 'Researchers posit that early intervention yields better results.', simpler: 'suggest/propose'},
    {word: 'acknowledge', example: 'It must be acknowledged that this approach has limitations.', simpler: 'admit/recognize'},
    {word: 'dispute', example: 'Some economists dispute the effectiveness of tax incentives.', simpler: 'disagree with'},
    {word: 'emphasize', example: 'Educators emphasize the importance of critical thinking skills.', simpler: 'stress/highlight'},
    {word: 'propose', example: 'The report proposes several strategies for reducing emissions.', simpler: 'suggest/put forward'},
    {word: 'concede', example: 'Even supporters concede that the reform has been slow.', simpler: 'admit reluctantly'}
  ],
  causeEffect: [
    {word: 'contribute to', example: 'Urbanization contributes to environmental degradation.', simpler: 'help cause'},
    {word: 'give rise to', example: 'Economic instability gives rise to social unrest.', simpler: 'cause/lead to'},
    {word: 'stem from', example: 'Many health problems stem from poor dietary choices.', simpler: 'come from/result from'},
    {word: 'trigger', example: 'The policy change triggered widespread public debate.', simpler: 'cause to start'},
    {word: 'exacerbate', example: 'Climate change exacerbates existing inequalities.', simpler: 'make worse'},
    {word: 'mitigate', example: 'Green spaces can mitigate the effects of urban heat.', simpler: 'reduce/lessen'},
    {word: 'undermine', example: 'Corruption undermines public trust in government institutions.', simpler: 'weaken/damage'},
    {word: 'facilitate', example: 'Technology facilitates communication across borders.', simpler: 'make easier'},
    {word: 'impede', example: 'Bureaucratic procedures impede economic development.', simpler: 'slow down/hinder'},
    {word: 'account for', example: 'Transport emissions account for nearly a quarter of global CO2.', simpler: 'make up/explain'}
  ],
  comparison: [
    {word: 'likewise', example: 'Developed nations face aging populations; developing countries likewise face demographic challenges.', simpler: 'similarly/also'},
    {word: 'conversely', example: 'Urban areas offer more jobs; conversely, rural areas provide a better quality of life.', simpler: 'on the other hand'},
    {word: 'in contrast to', example: 'In contrast to previous decades, modern education emphasizes critical thinking.', simpler: 'unlike/different from'},
    {word: 'whereas', example: 'Online learning offers flexibility, whereas classroom teaching provides direct interaction.', simpler: 'while/but'},
    {word: 'outweigh', example: 'The advantages of renewable energy outweigh the initial investment costs.', simpler: 'be greater than'},
    {word: 'surpass', example: 'Renewable energy capacity has surpassed expectations in several countries.', simpler: 'exceed/go beyond'},
    {word: 'parallel', example: 'This trend parallels developments seen in other industrialized nations.', simpler: 'be similar to'},
    {word: 'correspond to', example: 'Higher education levels correspond to better health outcomes.', simpler: 'match/relate to'},
    {word: 'analogous to', example: 'The digital divide is analogous to earlier disparities in access to electricity.', simpler: 'similar to'},
    {word: 'distinguish between', example: 'It is essential to distinguish between correlation and causation.', simpler: 'tell apart'}
  ],
  addition: [
    {word: 'furthermore', example: 'Renewable energy reduces emissions; furthermore, it creates new employment.', simpler: 'also/in addition'},
    {word: 'moreover', example: 'The policy is cost-effective; moreover, it has broad public support.', simpler: 'also/what is more'},
    {word: 'in addition to', example: 'In addition to reducing pollution, electric vehicles lower fuel costs.', simpler: 'as well as'},
    {word: 'coupled with', example: 'Rising temperatures, coupled with deforestation, threaten biodiversity.', simpler: 'combined with'},
    {word: 'not only...but also', example: 'Education not only improves individual prospects but also benefits society.', simpler: 'both...and'},
    {word: 'alongside', example: 'Alongside economic growth, social development must be prioritized.', simpler: 'together with'},
    {word: 'supplemented by', example: 'Classroom learning should be supplemented by practical experience.', simpler: 'added to'},
    {word: 'compounded by', example: 'The housing crisis is compounded by rapid population growth.', simpler: 'made worse by'},
    {word: 'in conjunction with', example: 'Education reforms, in conjunction with investment, can transform outcomes.', simpler: 'together with'},
    {word: 'simultaneously', example: 'Governments must simultaneously address economic and environmental concerns.', simpler: 'at the same time'}
  ],
  emphasis: [
    {word: 'particularly', example: 'This is particularly important for developing countries.', simpler: 'especially'},
    {word: 'fundamentally', example: 'Technology has fundamentally transformed how people communicate.', simpler: 'basically/deeply'},
    {word: 'predominantly', example: 'The workforce is predominantly composed of young graduates.', simpler: 'mainly/mostly'},
    {word: 'notably', example: 'Several countries, notably Denmark and Sweden, have invested in green energy.', simpler: 'especially/in particular'},
    {word: 'crucially', example: 'Crucially, these reforms must be implemented with adequate funding.', simpler: 'most importantly'},
    {word: 'substantially', example: 'Air quality has substantially improved since the regulations were introduced.', simpler: 'significantly/greatly'},
    {word: 'overwhelmingly', example: 'The evidence overwhelmingly supports the benefits of early childhood education.', simpler: 'very strongly'},
    {word: 'undeniably', example: 'Technology has undeniably improved access to information worldwide.', simpler: 'without doubt'},
    {word: 'markedly', example: 'Student performance improved markedly after the curriculum change.', simpler: 'noticeably/clearly'},
    {word: 'invariably', example: 'Economic downturns invariably affect the most vulnerable populations first.', simpler: 'always/without exception'}
  ],
  concession: [
    {word: 'nevertheless', example: 'The project faced setbacks; nevertheless, it was completed on time.', simpler: 'however/even so'},
    {word: 'notwithstanding', example: 'Notwithstanding the challenges, significant progress has been made.', simpler: 'despite/in spite of'},
    {word: 'admittedly', example: 'Admittedly, the initial costs are high, but long-term savings are substantial.', simpler: 'it is true that'},
    {word: 'granted that', example: 'Granted that online learning has limitations, it also offers unique advantages.', simpler: 'accepting that'},
    {word: 'be that as it may', example: 'The policy is expensive; be that as it may, its benefits justify the investment.', simpler: 'even so'},
    {word: 'irrespective of', example: 'All citizens deserve healthcare irrespective of their income level.', simpler: 'regardless of'},
    {word: 'albeit', example: 'The improvement was significant, albeit slower than initially projected.', simpler: 'although/even though'},
    {word: 'concede', example: 'One must concede that technology has some negative effects on children.', simpler: 'admit/accept'},
    {word: 'while it is true that', example: 'While it is true that exams are stressful, they serve an important evaluative function.', simpler: 'although'},
    {word: 'in spite of the fact that', example: 'In spite of the fact that costs are rising, demand continues to grow.', simpler: 'even though'}
  ]
};

// ============================================================
// 7. LINKING_WORDS_BANK - Categorized connectors for essays
// ============================================================

var LINKING_WORDS_BANK = {
  addition: ['Furthermore', 'Moreover', 'In addition', 'Additionally', 'Likewise', 'Similarly', 'Besides', 'Also', 'Not only...but also', 'As well as'],
  contrast: ['However', 'Nevertheless', 'On the other hand', 'Conversely', 'Although', 'Despite', 'In contrast', 'Whereas', 'Nonetheless', 'Yet', 'While', 'On the contrary'],
  cause: ['Consequently', 'Therefore', 'As a result', 'Thus', 'Hence', 'Due to', 'Owing to', 'Because of', 'For this reason', 'Accordingly'],
  example: ['For instance', 'For example', 'Such as', 'Specifically', 'In particular', 'To illustrate', 'Namely', 'As demonstrated by'],
  conclusion: ['In conclusion', 'To summarize', 'Overall', 'Ultimately', 'In summary', 'Taking everything into account', 'On balance', 'All things considered', 'In light of the above'],
  sequence: ['Firstly', 'Subsequently', 'Meanwhile', 'Finally', 'Lastly', 'To begin with', 'Secondly', 'Thirdly', 'Next', 'In the first place']
};

// ============================================================
// 8. SENTENCE_PATTERNS - Templates for building sentences
// Organized by function: what you want to express
// ============================================================

var SENTENCE_PATTERNS = {
  opinion: {
    title: 'Stating Your Opinion',
    desc: 'Use these patterns to express your position clearly in essays.',
    patterns: [
      {id:'op1', template:'I firmly believe that [claim].', blanks:[{label:'your claim',hint:'technology improves education'}], example:'I firmly believe that technology improves the quality of education.', tip:'Strong opening for agree/disagree essays. Use in your introduction.'},
      {id:'op2', template:'From my perspective, [observation], which [consequence].', blanks:[{label:'what you observe',hint:'social media connects people'},{label:'result',hint:'strengthens relationships'}], example:'From my perspective, social media connects people across distances, which strengthens long-distance relationships.', tip:'Shows nuance by linking your view to its consequence.'},
      {id:'op3', template:'It is my contention that [position], primarily because [reason].', blanks:[{label:'your position',hint:'education should be free'},{label:'main reason',hint:'it promotes equality'}], example:'It is my contention that education should be free, primarily because it promotes equality of opportunity.', tip:'Academic and assertive. Great for topic sentences.'},
      {id:'op4', template:'While some argue that [opposing view], I maintain that [your view].', blanks:[{label:'the other side',hint:'exams are harmful'},{label:'your position',hint:'they provide necessary evaluation'}], example:'While some argue that exams are harmful, I maintain that they provide necessary evaluation of student progress.', tip:'Acknowledges the other side before stating yours. Shows balanced thinking.'},
      {id:'op5', template:'The evidence strongly suggests that [claim], as demonstrated by [evidence].', blanks:[{label:'your claim',hint:'exercise reduces stress'},{label:'supporting evidence',hint:'multiple medical studies'}], example:'The evidence strongly suggests that exercise reduces stress, as demonstrated by multiple medical studies.', tip:'Grounds your opinion in evidence. Very effective for body paragraphs.'}
    ]
  },
  introduction: {
    title: 'Opening an Essay',
    desc: 'Start your essay with these powerful introduction patterns.',
    patterns: [
      {id:'in1', template:'In recent years, there has been growing debate about whether [topic]. [Thesis statement].', blanks:[{label:'topic of debate',hint:'technology replaces teachers'},{label:'your thesis',hint:'I believe technology supplements but cannot replace human educators'}], example:'In recent years, there has been growing debate about whether technology can replace teachers. I believe technology supplements but cannot replace human educators.', tip:'Classic PTE essay opening. States the debate then your position.'},
      {id:'in2', template:'It is widely acknowledged that [general truth]. However, [complication or debate].', blanks:[{label:'accepted fact',hint:'education is essential'},{label:'the complication',hint:'its delivery method remains controversial'}], example:'It is widely acknowledged that education is essential for economic development. However, the most effective delivery method remains controversial.', tip:'Moves from common ground to the specific debate.'},
      {id:'in3', template:'[Topic] has become one of the most pressing issues facing [who] today, raising important questions about [aspect].', blanks:[{label:'the topic',hint:'Climate change'},{label:'who is affected',hint:'governments worldwide'},{label:'what questions',hint:'responsibility and action'}], example:'Climate change has become one of the most pressing issues facing governments worldwide today, raising important questions about shared responsibility and collective action.', tip:'Creates urgency and frames the scope of discussion.'},
      {id:'in4', template:'The question of whether [action/policy] has sparked considerable discussion among [stakeholders].', blanks:[{label:'the action',hint:'university should be free'},{label:'who discusses it',hint:'educators and policymakers'}], example:'The question of whether university education should be free has sparked considerable discussion among educators and policymakers.', tip:'Neutral and academic. Good for discuss-both-views essays.'}
    ]
  },
  evidence: {
    title: 'Adding Evidence & Support',
    desc: 'Build strong body paragraphs with these supporting patterns.',
    patterns: [
      {id:'ev1', template:'Research consistently indicates that [finding], which [implication].', blanks:[{label:'research finding',hint:'bilingual children perform better'},{label:'what it implies',hint:'supports language education programs'}], example:'Research consistently indicates that bilingual children perform better in problem-solving tasks, which supports the case for early language education programs.', tip:'Cites research authority. Perfect for body paragraph evidence.'},
      {id:'ev2', template:'A compelling example of this is [example], where [what happened].', blanks:[{label:'the example',hint:'Denmark\'s renewable energy policy'},{label:'what happened',hint:'wind power now provides 50% of electricity'}], example:'A compelling example of this is Denmark\'s renewable energy policy, where wind power now provides approximately 50% of the nation\'s electricity.', tip:'Concrete example with specific detail. Very persuasive.'},
      {id:'ev3', template:'This is further evidenced by [evidence], which demonstrates that [conclusion].', blanks:[{label:'the evidence',hint:'rising graduation rates'},{label:'what it shows',hint:'investment in education pays off'}], example:'This is further evidenced by rising graduation rates in countries with free education, which demonstrates that investment in education pays off.', tip:'Adds a second piece of evidence to strengthen your argument.'},
      {id:'ev4', template:'[Statistic/Fact], suggesting that [interpretation].', blanks:[{label:'a fact or number',hint:'Over 60% of employers value soft skills'},{label:'what it suggests',hint:'universities should teach beyond academics'}], example:'Over 60% of employers now value soft skills equally with technical qualifications, suggesting that universities should broaden their curricula beyond purely academic subjects.', tip:'Lead with data, follow with interpretation. Very academic.'},
      {id:'ev5', template:'By [method/action], [agent] can [result], thereby [broader benefit].', blanks:[{label:'what to do',hint:'investing in public transport'},{label:'who does it',hint:'governments'},{label:'direct result',hint:'reduce traffic congestion'},{label:'wider benefit',hint:'improving air quality and public health'}], example:'By investing in public transport, governments can reduce traffic congestion, thereby improving air quality and public health.', tip:'Shows method → result → broader impact chain. Great for solution paragraphs.'}
    ]
  },
  concession: {
    title: 'Conceding & Counter-arguing',
    desc: 'Acknowledge opposing views then present your rebuttal. Shows maturity.',
    patterns: [
      {id:'cn1', template:'Admittedly, [concession]. However, [rebuttal].', blanks:[{label:'what you admit',hint:'online learning lacks social interaction'},{label:'your counter',hint:'it offers unmatched flexibility and accessibility'}], example:'Admittedly, online learning lacks the social interaction of traditional classrooms. However, it offers unmatched flexibility and accessibility for learners worldwide.', tip:'Shows you consider both sides. Strengthens your argument.'},
      {id:'cn2', template:'Although [opposing point] has some merit, it fails to account for [counter-evidence].', blanks:[{label:'the opposing argument',hint:'the claim that technology causes unemployment'},{label:'what they miss',hint:'the new jobs technology creates in emerging industries'}], example:'Although the claim that technology causes unemployment has some merit, it fails to account for the numerous new jobs technology creates in emerging industries.', tip:'Respectfully dismantles the opposing view.'},
      {id:'cn3', template:'It must be acknowledged that [limitation]. Nevertheless, [stronger point].', blanks:[{label:'the limitation',hint:'exams create stress for students'},{label:'the stronger counter',hint:'they provide an objective measure of learning that benefits both students and educators'}], example:'It must be acknowledged that exams create stress for students. Nevertheless, they provide an objective measure of learning that benefits both students and educators.', tip:'Formal and balanced. Shows academic maturity.'},
      {id:'cn4', template:'Despite [challenge/drawback], [positive outcome] because [reason].', blanks:[{label:'the challenge',hint:'the high cost of renewable energy'},{label:'the positive',hint:'the long-term savings justify the investment'},{label:'why',hint:'maintenance costs are minimal and fuel is free'}], example:'Despite the high cost of renewable energy infrastructure, the long-term savings justify the investment because maintenance costs are minimal and the fuel source is free.', tip:'Despite + noun phrase shows you can handle complex concession structures.'}
    ]
  },
  causeEffect: {
    title: 'Cause and Effect',
    desc: 'Show how one thing leads to another - essential for academic writing.',
    patterns: [
      {id:'ce1', template:'[Cause] has led to [effect], which in turn [further consequence].', blanks:[{label:'the cause',hint:'Rapid urbanization'},{label:'the effect',hint:'increased demand for housing'},{label:'further impact',hint:'has driven up property prices'}], example:'Rapid urbanization has led to increased demand for housing, which in turn has driven up property prices in major cities.', tip:'Shows a chain of consequences. Very sophisticated.'},
      {id:'ce2', template:'As a result of [cause], [effect]. Consequently, [implication].', blanks:[{label:'the cause',hint:'declining birth rates'},{label:'the effect',hint:'many countries face aging populations'},{label:'what follows',hint:'healthcare systems are under increasing pressure'}], example:'As a result of declining birth rates, many countries face aging populations. Consequently, healthcare systems are under increasing pressure to accommodate rising demand.', tip:'Two-sentence cause-effect chain. Clear and logical.'},
      {id:'ce3', template:'The [root cause] contributes significantly to [problem], particularly in [context].', blanks:[{label:'root cause',hint:'lack of investment in education'},{label:'the problem',hint:'economic inequality'},{label:'where',hint:'developing countries'}], example:'The lack of investment in education contributes significantly to economic inequality, particularly in developing countries where access to quality schooling remains limited.', tip:'Identifies root causes. Shows deep analytical thinking.'},
      {id:'ce4', template:'One of the primary consequences of [phenomenon] is [effect], as [evidence].', blanks:[{label:'the phenomenon',hint:'social media overuse'},{label:'the consequence',hint:'declining face-to-face communication skills'},{label:'evidence',hint:'studies show young people struggle with in-person interviews'}], example:'One of the primary consequences of social media overuse is declining face-to-face communication skills, as studies show young people increasingly struggle with in-person interviews.', tip:'Names a specific consequence and backs it with evidence.'}
    ]
  },
  conclusion: {
    title: 'Concluding an Essay',
    desc: 'End your essay strongly with these conclusion patterns.',
    patterns: [
      {id:'cl1', template:'In conclusion, while [brief concession], the evidence overwhelmingly supports [main position].', blanks:[{label:'minor concession',hint:'there are some drawbacks'},{label:'your main point',hint:'the benefits of technology in education far outweigh the risks'}], example:'In conclusion, while there are some drawbacks to integrating technology in education, the evidence overwhelmingly supports the view that the benefits far outweigh the risks.', tip:'Balanced conclusion that reaffirms your thesis.'},
      {id:'cl2', template:'Taking all factors into consideration, it is clear that [conclusion]. [Future-looking statement].', blanks:[{label:'your conclusion',hint:'governments must take the lead on climate action'},{label:'looking ahead',hint:'Only through coordinated policy can meaningful progress be achieved'}], example:'Taking all factors into consideration, it is clear that governments must take the lead on climate action. Only through coordinated policy can meaningful progress be achieved.', tip:'Summarizes then looks forward. Strong finish.'},
      {id:'cl3', template:'Ultimately, [restatement of thesis]. Both [stakeholder 1] and [stakeholder 2] must [action] to ensure [goal].', blanks:[{label:'restate thesis',hint:'education reform is essential'},{label:'group 1',hint:'governments'},{label:'group 2',hint:'educators'},{label:'what to do',hint:'collaborate'},{label:'the goal',hint:'every student receives quality education'}], example:'Ultimately, education reform is essential for societal progress. Both governments and educators must collaborate to ensure every student receives quality education regardless of background.', tip:'Restate thesis + call to action. Leaves a strong impression.'}
    ]
  },
  speaking: {
    title: 'Speaking Response Starters',
    desc: 'Ready-to-use sentence starters for PTE speaking tasks.',
    patterns: [
      {id:'sp1', template:'The [chart/graph/image] illustrates [main finding], with [specific detail].', blanks:[{label:'chart type',hint:'bar chart'},{label:'what it shows',hint:'population growth trends'},{label:'a detail',hint:'Asia showing the highest growth rate'}], example:'The bar chart illustrates population growth trends across five continents, with Asia showing the highest growth rate over the past decade.', tip:'Use for Describe Image. Always start with what the visual SHOWS.'},
      {id:'sp2', template:'The speaker primarily discussed [main topic], emphasizing that [key point].', blanks:[{label:'topic',hint:'the impact of climate change'},{label:'key emphasis',hint:'immediate action is needed to prevent irreversible damage'}], example:'The speaker primarily discussed the impact of climate change on coastal communities, emphasizing that immediate action is needed to prevent irreversible damage.', tip:'Use for Retell Lecture. Capture the MAIN point first.'},
      {id:'sp3', template:'I would suggest [recommendation], as this would [benefit]. Additionally, [second suggestion].', blanks:[{label:'your suggestion',hint:'contacting the professor during office hours'},{label:'why',hint:'allow you to discuss the issue directly'},{label:'extra suggestion',hint:'you could email a summary of your concerns beforehand'}], example:'I would suggest contacting the professor during office hours, as this would allow you to discuss the issue directly. Additionally, you could email a summary of your concerns beforehand.', tip:'Use for Respond to Situation. Give advice with reasoning.'},
      {id:'sp4', template:'There are several notable features in this [visual]. The most significant is [feature], followed by [feature 2].', blanks:[{label:'type of visual',hint:'diagram'},{label:'main feature',hint:'the dramatic increase in renewable energy usage'},{label:'second feature',hint:'the corresponding decline in fossil fuel dependency'}], example:'There are several notable features in this diagram. The most significant is the dramatic increase in renewable energy usage since 2015, followed by the corresponding decline in fossil fuel dependency.', tip:'For Describe Image when there are multiple things to discuss.'}
    ]
  }
};

// ============================================================
// 9. SENTENCE_TRANSFORMS - Simple → Complex sentence exercises
// Practice turning basic ideas into academic sentences
// ============================================================

var SENTENCE_TRANSFORMS = [
  {
    id:'tr1', simple:'Technology is helpful.',
    transforms:[
      {method:'Add hedging', result:'Technology may be helpful in certain contexts.'},
      {method:'Add relative clause', result:'Technology, which has transformed modern communication, is undeniably helpful.'},
      {method:'Full academic style', result:'It is widely acknowledged that technology plays a fundamentally beneficial role in contemporary society.'}
    ]
  },
  {
    id:'tr2', simple:'Education is important.',
    transforms:[
      {method:'Add reason', result:'Education is important because it equips individuals with critical thinking skills.'},
      {method:'Add concession', result:'Although education alone cannot guarantee success, it remains important for personal development.'},
      {method:'Full academic style', result:'Education is of paramount importance for both individual empowerment and broader societal progress, as it cultivates the knowledge and skills necessary for informed citizenship.'}
    ]
  },
  {
    id:'tr3', simple:'Pollution is bad.',
    transforms:[
      {method:'Be specific', result:'Air pollution poses significant health risks to urban populations.'},
      {method:'Add cause-effect', result:'Industrial pollution has led to alarming increases in respiratory diseases, particularly among children.'},
      {method:'Full academic style', result:'The detrimental effects of environmental pollution on public health have been extensively documented, with research indicating a strong correlation between air quality degradation and the prevalence of chronic respiratory conditions.'}
    ]
  },
  {
    id:'tr4', simple:'Social media has good and bad effects.',
    transforms:[
      {method:'Add specifics', result:'Social media facilitates communication but can contribute to anxiety among young users.'},
      {method:'Add evidence', result:'While social media enhances global connectivity, studies suggest that excessive use is associated with declining mental health among adolescents.'},
      {method:'Full academic style', result:'The impact of social media on society is multifaceted: although these platforms have democratized information sharing and strengthened cross-cultural connections, growing evidence indicates that excessive engagement, particularly among younger demographics, correlates with heightened levels of anxiety and diminished interpersonal skills.'}
    ]
  },
  {
    id:'tr5', simple:'Governments should do something about climate change.',
    transforms:[
      {method:'Be specific', result:'Governments should implement carbon emission regulations to combat climate change.'},
      {method:'Add stakeholders', result:'Governments, in collaboration with the private sector, should develop and enforce comprehensive climate policies to reduce carbon emissions.'},
      {method:'Full academic style', result:'It is imperative that governments assume a leadership role in addressing climate change by implementing binding emission reduction targets, investing in renewable energy infrastructure, and fostering international cooperation to ensure that the economic costs of transition are equitably distributed across nations.'}
    ]
  },
  {
    id:'tr6', simple:'Exercise is good for health.',
    transforms:[
      {method:'Add specifics', result:'Regular physical exercise reduces the risk of cardiovascular disease and improves mental well-being.'},
      {method:'Add despite clause', result:'Despite busy modern lifestyles, regular exercise remains one of the most effective strategies for maintaining physical and mental health.'},
      {method:'Full academic style', result:'A substantial body of research demonstrates that regular physical activity confers significant health benefits, including reduced risks of cardiovascular disease, type 2 diabetes, and depression, making it one of the most cost-effective public health interventions available.'}
    ]
  },
  {
    id:'tr7', simple:'Old people have problems.',
    transforms:[
      {method:'Be specific and respectful', result:'Elderly individuals often face challenges including social isolation and limited access to healthcare.'},
      {method:'Add solution', result:'Aging populations face increasing challenges in healthcare access and social participation, which governments can address through targeted community programs.'},
      {method:'Full academic style', result:'The aging demographic in many developed nations presents complex socioeconomic challenges, including escalating healthcare costs, social isolation among the elderly, and the strain on pension systems, necessitating comprehensive policy responses that balance fiscal responsibility with the dignity and well-being of older citizens.'}
    ]
  },
  {
    id:'tr8', simple:'Learning English is useful.',
    transforms:[
      {method:'Add reason and context', result:'Learning English is useful for career advancement in an increasingly globalized job market.'},
      {method:'Add contrast', result:'While learning English requires significant time and effort, the professional and personal benefits it provides make it a worthwhile investment.'},
      {method:'Full academic style', result:'English language proficiency has become an indispensable asset in the contemporary global economy, as it facilitates access to international academic resources, enhances employability across borders, and enables meaningful participation in cross-cultural discourse.'}
    ]
  },
  {
    id:'tr9', simple:'Online shopping is popular.',
    transforms:[
      {method:'Add why', result:'Online shopping has grown in popularity due to its convenience and competitive pricing.'},
      {method:'Add consequence', result:'The surge in online shopping has transformed retail economics, leading to the closure of many traditional stores while creating new opportunities in logistics and digital marketing.'},
      {method:'Full academic style', result:'The proliferation of e-commerce platforms has fundamentally altered consumer behavior, with the convenience of online shopping, coupled with sophisticated recommendation algorithms and competitive pricing, driving a paradigm shift that has simultaneously disrupted traditional retail models and generated unprecedented growth in digital commerce.'}
    ]
  },
  {
    id:'tr10', simple:'Travel teaches you things.',
    transforms:[
      {method:'Be specific', result:'International travel broadens cultural awareness and develops adaptability.'},
      {method:'Add contrast', result:'Although travel can be costly, the cultural understanding and personal growth it provides are invaluable educational experiences that cannot be replicated in a classroom.'},
      {method:'Full academic style', result:'Travel serves as a powerful catalyst for personal and intellectual growth, offering immersive experiences that deepen cross-cultural understanding, challenge preconceived assumptions, and cultivate the adaptability and open-mindedness that are increasingly valued in our interconnected global society.'}
    ]
  }
];
