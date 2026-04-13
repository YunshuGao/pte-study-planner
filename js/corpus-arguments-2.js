/* PTE Essay Argument Bank — PART 2
   Categories: Health, Society, Government & Economy, Work, Media & Crime, Science & Culture
   60 topics with for/against points, evidence, examples, ready-made sentences
   Australian English throughout | ES5 only */

(function() {
  'use strict';
  if (typeof ARGUMENT_BANK === 'undefined') return;

  ARGUMENT_BANK.topics = ARGUMENT_BANK.topics.concat([

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 1: HEALTH (hea01–hea12)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'hea01',
    category: 'Health',
    question: 'Some people believe that governments should provide universal healthcare free of charge for all citizens. Do you agree or disagree?',
    keywords: ['universal healthcare', 'public health', 'government funding', 'medical access'],
    forPoints: [
      {
        point: 'Universal healthcare ensures equal access to medical services regardless of income',
        evidence: 'WHO research indicates that countries with universal healthcare systems have 23% lower infant mortality rates and 15% higher life expectancy compared to nations relying solely on private healthcare.',
        example: 'Australia\'s Medicare system provides bulk-billed GP visits and subsidised hospital care, ensuring that low-income families in remote areas like Western Queensland can access essential medical treatment without financial hardship.',
        sentences: {
          intro: 'One of the strongest arguments for universal healthcare is that it guarantees equal access to medical services for all citizens, irrespective of their socioeconomic background.',
          body: 'Research published by the World Health Organisation demonstrates that nations with publicly funded healthcare systems consistently achieve better population health outcomes, including lower infant mortality and higher life expectancy.',
          conclusion: 'Ultimately, universal healthcare is not merely a policy choice but a moral imperative that reflects a society\'s commitment to the well-being of all its members.'
        }
      },
      {
        point: 'Preventive care under universal systems reduces long-term healthcare costs',
        evidence: 'A 2022 study in The Lancet found that every dollar invested in preventive healthcare saves approximately four dollars in emergency and acute care costs over a ten-year period.',
        example: 'The United Kingdom\'s National Health Service (NHS) offers free cancer screening programmes that detect diseases at early stages, significantly reducing the cost of treatment compared to late-stage interventions.',
        sentences: {
          intro: 'A further compelling reason to support universal healthcare is its capacity to prioritise preventive care, which ultimately reduces the financial burden on the entire health system.',
          body: 'Evidence from The Lancet suggests that investment in preventive programmes, such as vaccination campaigns and routine screenings, yields a fourfold return by avoiding costly emergency treatments.',
          conclusion: 'By shifting the focus from reactive to preventive medicine, universal healthcare systems demonstrate that early intervention is both economically sound and socially responsible.'
        }
      },
      {
        point: 'Universal healthcare boosts workforce productivity and economic output',
        evidence: 'The OECD estimates that healthier populations contribute an additional 0.5% to annual GDP growth, as workers take fewer sick days and maintain higher levels of productivity.',
        example: 'In Scandinavian countries such as Sweden and Denmark, comprehensive public healthcare has contributed to some of the highest workforce participation rates in the world, exceeding 75%.',
        sentences: {
          intro: 'Beyond its social benefits, universal healthcare also serves as an economic catalyst by maintaining a healthier and more productive workforce.',
          body: 'According to OECD data, nations that invest in accessible healthcare experience measurable gains in GDP growth, driven by reduced absenteeism and improved worker performance.',
          conclusion: 'Therefore, universal healthcare should be viewed not as a cost to the economy but as a strategic investment that generates substantial long-term returns.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Universal healthcare places an unsustainable financial burden on government budgets',
        evidence: 'Healthcare expenditure in countries with universal systems often exceeds 10% of GDP, with costs rising annually due to ageing populations and expensive medical technologies.',
        example: 'Canada\'s universal healthcare system faces chronic funding pressures, leading to average wait times of over 27 weeks for specialist consultations in provinces such as Nova Scotia.',
        sentences: {
          intro: 'Critics of universal healthcare argue that it imposes an unsustainable financial burden on governments, diverting funds from other essential public services.',
          body: 'In Canada, for instance, the publicly funded healthcare system has struggled with chronic underfunding, resulting in lengthy wait times that compromise patient outcomes.',
          conclusion: 'Without careful fiscal management, universal healthcare risks becoming a financial liability that undermines the very services it seeks to provide.'
        }
      },
      {
        point: 'Government-run healthcare can lead to inefficiency and reduced quality of care',
        evidence: 'A comparative study by the Fraser Institute found that private hospitals in mixed systems achieve 18% higher patient satisfaction scores than their public counterparts.',
        example: 'The UK\'s NHS has faced persistent criticism for overcrowded emergency departments, with some patients waiting over twelve hours for treatment during winter surges.',
        sentences: {
          intro: 'Opponents also contend that government-operated healthcare systems tend to be bureaucratic and inefficient, often resulting in lower quality of care.',
          body: 'Comparative research reveals that private healthcare providers frequently outperform public institutions in terms of patient satisfaction, wait times, and treatment outcomes.',
          conclusion: 'This suggests that a purely public model may not be the most effective way to deliver high-quality healthcare to the population.'
        }
      },
      {
        point: 'Universal healthcare may discourage personal responsibility for health',
        evidence: 'Behavioural economists suggest that when healthcare is entirely free, individuals may have less incentive to maintain healthy lifestyles, potentially increasing demand for medical services.',
        example: 'In some European nations with fully subsidised healthcare, rates of preventable lifestyle diseases such as obesity and type 2 diabetes have continued to rise despite widespread access to medical advice.',
        sentences: {
          intro: 'A further concern is that free healthcare may inadvertently reduce individuals\' motivation to take responsibility for their own health and well-being.',
          body: 'Behavioural research indicates that the absence of any financial cost for medical services can diminish the perceived value of preventive health behaviours.',
          conclusion: 'Consequently, any universal healthcare model should incorporate mechanisms that encourage healthy lifestyle choices alongside free medical access.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while universal healthcare is essential for ensuring equitable access to medical services and promoting population health, it must be carefully designed to balance financial sustainability with quality of care. A hybrid model that combines public funding with private-sector efficiency may represent the most pragmatic approach.',
    keyVocabulary: ['equitable access', 'preventive care', 'fiscal sustainability', 'bulk-billing', 'population health outcomes', 'healthcare expenditure', 'patient satisfaction', 'workforce productivity']
  },

  {
    id: 'hea02',
    category: 'Health',
    question: 'Some people think that governments should ban junk food advertising, especially to children. To what extent do you agree or disagree?',
    keywords: ['junk food', 'advertising ban', 'childhood obesity', 'public health regulation'],
    forPoints: [
      {
        point: 'Children are particularly vulnerable to persuasive advertising techniques',
        evidence: 'Research from the American Psychological Association shows that children under eight cannot distinguish between advertising and factual information, making them highly susceptible to food marketing.',
        example: 'In Australia, studies by the Obesity Policy Coalition found that children in metropolitan Sydney are exposed to an average of 15 junk food advertisements per hour during after-school television programming.',
        sentences: {
          intro: 'The most compelling argument for banning junk food advertising is that children lack the cognitive ability to critically evaluate marketing messages.',
          body: 'Psychological research consistently demonstrates that young children are unable to recognise the persuasive intent of advertisements, leaving them defenceless against sophisticated marketing strategies.',
          conclusion: 'Given this vulnerability, it is the responsibility of governments to protect children from commercial exploitation that endangers their health.'
        }
      },
      {
        point: 'Advertising bans have proven effective in reducing consumption of unhealthy products',
        evidence: 'Following Quebec\'s ban on fast food advertising to children in 1980, the province recorded a 13% reduction in childhood fast food consumption compared to neighbouring Ontario.',
        example: 'Chile\'s 2016 comprehensive junk food marketing restrictions led to a 25% decrease in sugary drink purchases within two years of implementation, according to government health data.',
        sentences: {
          intro: 'Evidence from jurisdictions that have implemented advertising restrictions demonstrates that such bans can produce measurable improvements in dietary behaviour.',
          body: 'Quebec\'s four-decade-old ban on advertising to children has resulted in consistently lower rates of childhood fast food consumption, providing a robust model for other regions.',
          conclusion: 'These real-world examples confirm that legislative action on junk food advertising can deliver tangible public health benefits.'
        }
      },
      {
        point: 'Reducing junk food marketing would lower long-term healthcare costs associated with obesity',
        evidence: 'The Australian Institute of Health and Welfare estimates that obesity-related conditions cost the Australian healthcare system over $11 billion annually.',
        example: 'The UK\'s decision to ban junk food advertising before the 9pm watershed on television was projected to prevent thousands of childhood obesity cases and save the NHS approximately £7.2 billion over 25 years.',
        sentences: {
          intro: 'From an economic perspective, restricting junk food advertising would significantly reduce the enormous healthcare costs associated with diet-related diseases.',
          body: 'With obesity-related conditions costing Australia billions of dollars each year, preventive measures such as advertising bans represent a cost-effective approach to reducing this financial burden.',
          conclusion: 'Investing in advertising restrictions today will yield substantial savings in healthcare expenditure for future generations.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Advertising bans infringe on commercial freedom of speech and business rights',
        evidence: 'Legal scholars argue that advertising bans set a concerning precedent for government intervention in commercial communication, potentially extending to other industries.',
        example: 'In the United States, food industry groups have successfully challenged proposed advertising restrictions on First Amendment grounds, arguing that truthful commercial speech deserves legal protection.',
        sentences: {
          intro: 'Opponents of junk food advertising bans argue that such measures represent an excessive restriction on commercial freedom and set a dangerous precedent for government censorship.',
          body: 'Legal experts caution that banning specific types of advertising could erode fundamental business freedoms and open the door to increasingly restrictive government control over commercial communication.',
          conclusion: 'Rather than imposing blanket bans, governments should explore less restrictive approaches that balance public health with commercial freedom.'
        }
      },
      {
        point: 'Parental responsibility and education are more effective than advertising bans',
        evidence: 'A 2021 survey by the Food Standards Agency found that 72% of parents believed they should be the primary influence on their children\'s dietary choices, rather than government regulations.',
        example: 'Japan\'s approach of integrating nutrition education into the school curriculum has produced one of the lowest childhood obesity rates among developed nations, at just 3.5%, without imposing advertising bans.',
        sentences: {
          intro: 'Many argue that empowering parents through education and nutritional literacy is a more sustainable solution than government-imposed advertising restrictions.',
          body: 'Japan\'s success in maintaining remarkably low childhood obesity rates through comprehensive school-based nutrition education demonstrates that behavioural change can be achieved without regulatory intervention.',
          conclusion: 'Ultimately, fostering informed dietary choices through education may prove more effective and less contentious than attempting to control commercial advertising.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while banning junk food advertising to children is justified by their cognitive vulnerability and the proven effectiveness of such measures, a comprehensive approach that combines reasonable advertising restrictions with robust nutrition education programmes is likely to achieve the greatest impact on public health.',
    keyVocabulary: ['childhood obesity', 'advertising regulation', 'cognitive vulnerability', 'dietary behaviour', 'commercial freedom', 'nutrition literacy', 'preventive health policy', 'marketing restrictions']
  },

  {
    id: 'hea03',
    category: 'Health',
    question: 'Mental health issues are often stigmatised in society. What measures should governments and communities take to address mental health stigma?',
    keywords: ['mental health', 'stigma', 'awareness', 'community support'],
    forPoints: [
      {
        point: 'Public awareness campaigns can significantly reduce mental health stigma',
        evidence: 'A meta-analysis in the British Journal of Psychiatry found that anti-stigma campaigns reduce discriminatory attitudes by an average of 22% in target populations.',
        example: 'Australia\'s "Beyond Blue" initiative has reached over 10 million Australians since its inception, contributing to a 30% increase in the number of people willing to seek professional help for depression and anxiety.',
        sentences: {
          intro: 'Government-funded public awareness campaigns represent one of the most effective strategies for dismantling the stigma surrounding mental health.',
          body: 'Australia\'s Beyond Blue campaign illustrates how sustained public education efforts can transform community attitudes, encouraging millions of people to seek support without shame.',
          conclusion: 'Continued investment in anti-stigma campaigns is essential for creating a society where mental health is treated with the same seriousness and compassion as physical health.'
        }
      },
      {
        point: 'Integrating mental health education into school curricula builds understanding from a young age',
        evidence: 'Research from the University of Melbourne indicates that school-based mental health programmes reduce stigmatising attitudes by 35% and increase help-seeking behaviour among adolescents.',
        example: 'New Zealand\'s inclusion of mental health and well-being in the national curriculum has been credited with reducing youth suicide rates by 18% over a five-year period.',
        sentences: {
          intro: 'Embedding mental health education within the school system ensures that young people develop empathy and understanding before stigmatising attitudes become entrenched.',
          body: 'Studies demonstrate that early exposure to mental health literacy in educational settings significantly reduces prejudice and encourages young people to support peers who may be struggling.',
          conclusion: 'Schools have a unique opportunity to shape the next generation\'s attitudes towards mental health, making curriculum integration a vital long-term strategy.'
        }
      },
      {
        point: 'Workplace mental health programmes improve both employee well-being and organisational productivity',
        evidence: 'PricewaterhouseCoopers estimates that for every dollar invested in workplace mental health initiatives, organisations receive a return of $2.30 in improved productivity and reduced absenteeism.',
        example: 'The Australian government\'s "Heads Up" workplace programme has been adopted by over 3,000 organisations, creating mentally healthy work environments that encourage open conversations about psychological well-being.',
        sentences: {
          intro: 'Addressing mental health stigma in the workplace is not only a moral obligation but also a sound economic strategy for employers and governments alike.',
          body: 'The financial returns from workplace mental health programmes demonstrate that reducing stigma directly translates into improved productivity, lower absenteeism, and a more engaged workforce.',
          conclusion: 'By normalising mental health discussions in professional environments, organisations can create a culture of support that benefits both individuals and the broader economy.'
        }
      },
      {
        point: 'Increasing access to mental health services reduces the consequences of untreated conditions',
        evidence: 'The Black Dog Institute reports that 75% of mental health conditions emerge before the age of 25, yet the average delay in seeking treatment is over 10 years due to stigma.',
        example: 'The expansion of telehealth mental health services during the COVID-19 pandemic in Australia led to a 40% increase in first-time therapy sessions, suggesting that reduced barriers encourage help-seeking.',
        sentences: {
          intro: 'Improving access to mental health services is a critical step in addressing stigma, as convenience and confidentiality encourage more people to seek help.',
          body: 'The dramatic increase in first-time therapy sessions during the pandemic demonstrates that when barriers such as stigma and accessibility are reduced, individuals are far more willing to engage with mental health support.',
          conclusion: 'Governments must continue to invest in accessible, affordable, and stigma-free mental health services to ensure that no one suffers in silence.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Anti-stigma campaigns alone cannot address the structural barriers to mental healthcare',
        evidence: 'Despite decades of awareness campaigns in Western nations, a 2023 Lancet Commission report found that global mental health treatment gaps remain at approximately 55% in high-income countries.',
        example: 'In rural Australia, even individuals who are willing to seek help often face wait times exceeding six months for psychologist appointments, regardless of reduced stigma.',
        sentences: {
          intro: 'While reducing stigma is important, critics argue that awareness campaigns alone are insufficient if the structural barriers to accessing mental healthcare remain unresolved.',
          body: 'The persistent treatment gap in even wealthy nations suggests that the challenge extends beyond attitudes to include inadequate funding, workforce shortages, and geographic inequity.',
          conclusion: 'Addressing mental health stigma must be accompanied by concrete investment in expanding the availability and affordability of professional services.'
        }
      },
      {
        point: 'Cultural differences make a one-size-fits-all anti-stigma approach ineffective',
        evidence: 'Cross-cultural research published in World Psychiatry shows that stigma manifests differently across cultures, with collectivist societies experiencing higher levels of family-based shame.',
        example: 'In many East Asian and South Asian communities in Australia, mental health conditions are often viewed as bringing shame to the family, requiring culturally tailored interventions rather than generic campaigns.',
        sentences: {
          intro: 'A significant limitation of broad anti-stigma strategies is that they often fail to account for the diverse cultural contexts in which mental health stigma operates.',
          body: 'Research highlights that stigma is deeply embedded in cultural norms and family structures, meaning that Western-centric awareness campaigns may have limited impact in multicultural societies.',
          conclusion: 'Effective anti-stigma initiatives must be culturally sensitive and community-led, rather than relying on universal messaging that overlooks the lived experiences of diverse populations.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, addressing mental health stigma requires a multifaceted approach that combines public awareness, education, workplace programmes, and improved access to services. However, these efforts must be culturally sensitive and accompanied by structural investments in mental health infrastructure to achieve meaningful and lasting change.',
    keyVocabulary: ['stigma reduction', 'mental health literacy', 'help-seeking behaviour', 'workplace well-being', 'treatment gap', 'culturally sensitive', 'psychological well-being', 'public awareness']
  },

  {
    id: 'hea04',
    category: 'Health',
    question: 'Some countries have introduced an opt-out system for organ donation, where all citizens are presumed to be donors unless they explicitly refuse. Do you support this approach?',
    keywords: ['organ donation', 'opt-out system', 'presumed consent', 'transplant waiting lists'],
    forPoints: [
      {
        point: 'Opt-out systems dramatically increase the supply of donor organs',
        evidence: 'Countries with opt-out organ donation systems have donation rates approximately 25-30% higher than those with opt-in systems, according to research published in the BMJ.',
        example: 'Spain\'s presumed consent model, introduced in 1979, has helped the country achieve the highest organ donation rate in the world at 49 donors per million population, compared to Australia\'s rate of approximately 21 per million.',
        sentences: {
          intro: 'The most powerful argument for an opt-out organ donation system is its proven ability to significantly increase the number of available donor organs.',
          body: 'Spain\'s world-leading donation rates under its presumed consent model provide compelling evidence that opt-out systems can close the gap between organ supply and demand.',
          conclusion: 'Given that thousands of patients die each year while waiting for transplants, adopting an opt-out system is a practical and ethically defensible policy reform.'
        }
      },
      {
        point: 'Opt-out systems align with the majority\'s willingness to donate',
        evidence: 'Surveys by the Organ and Tissue Authority consistently show that over 75% of Australians support organ donation, yet only 36% have registered as donors under the current opt-in system.',
        example: 'Wales introduced an opt-out system in 2015 and saw a 12% increase in organ transplants within the first two years, reflecting the pre-existing public support that the previous system had failed to capture.',
        sentences: {
          intro: 'An opt-out system simply translates the existing goodwill of the population into practical action, closing the gap between intention and registration.',
          body: 'The significant discrepancy between public support for donation and actual registration rates suggests that the opt-in model is a barrier of convenience rather than conscience.',
          conclusion: 'By removing administrative friction, opt-out systems ensure that the generous intentions of the majority are honoured rather than lost to bureaucratic inertia.'
        }
      },
      {
        point: 'Reducing transplant waiting lists saves healthcare costs and improves patient outcomes',
        evidence: 'The cost of maintaining a patient on kidney dialysis averages $80,000 per year, whereas a successful kidney transplant costs approximately $30,000 and provides long-term savings.',
        example: 'In the UK, the adoption of an opt-out system in England in 2020 was projected to save the NHS over £200 million annually by reducing the number of patients requiring costly ongoing dialysis treatment.',
        sentences: {
          intro: 'From a healthcare economics perspective, increasing organ availability through an opt-out system would generate substantial savings by reducing the need for expensive ongoing treatments.',
          body: 'The financial case for opt-out donation is clear: a single kidney transplant eliminates the need for years of dialysis, saving tens of thousands of dollars per patient annually.',
          conclusion: 'Opt-out organ donation is therefore both a life-saving and cost-saving policy that benefits patients, families, and the public health system alike.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Presumed consent raises serious ethical concerns about bodily autonomy',
        evidence: 'Bioethicists argue that true consent must be actively given, not merely assumed, and that presumed consent may violate the fundamental right to control what happens to one\'s body after death.',
        example: 'Religious communities, including some Orthodox Jewish and Islamic groups, have expressed strong objections to opt-out systems, arguing that they conflict with religious teachings about the sanctity of the body after death.',
        sentences: {
          intro: 'The most significant objection to opt-out organ donation is that it undermines the principle of informed consent and individual bodily autonomy.',
          body: 'For many individuals and communities, the decision about what happens to one\'s body after death is deeply personal, and assuming consent without explicit agreement raises fundamental ethical questions.',
          conclusion: 'Any opt-out system must therefore include robust mechanisms for individuals to easily withdraw consent and must accommodate religious and cultural objections.'
        }
      },
      {
        point: 'Opt-out systems may not address the real barriers to organ donation',
        evidence: 'Research from the University of Nottingham suggests that family refusal, rather than lack of registered donors, accounts for up to 40% of missed donation opportunities.',
        example: 'In Brazil, an opt-out law introduced in 1997 was repealed after widespread public backlash and minimal improvement in donation rates, demonstrating that legislative change alone is insufficient without community engagement.',
        sentences: {
          intro: 'Critics point out that simply changing the default registration setting does not address the complex social, cultural, and logistical factors that prevent organ donation.',
          body: 'Brazil\'s failed experiment with opt-out legislation illustrates that without public education, healthcare infrastructure, and family support, legislative reform alone cannot solve the organ shortage.',
          conclusion: 'A more effective approach may involve combining voluntary registration with comprehensive public education campaigns and improved hospital coordination.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while opt-out organ donation systems offer a promising approach to increasing organ availability, they must be implemented alongside robust safeguards for individual autonomy, cultural sensitivity, and public education to ensure both ethical integrity and practical effectiveness.',
    keyVocabulary: ['presumed consent', 'bodily autonomy', 'transplant waiting list', 'donor registration', 'informed consent', 'organ shortage', 'healthcare economics', 'ethical safeguards']
  },

  {
    id: 'hea05',
    category: 'Health',
    question: 'Should vaccination be made mandatory for all children, or should parents have the right to choose?',
    keywords: ['mandatory vaccination', 'herd immunity', 'parental choice', 'public health'],
    forPoints: [
      {
        point: 'Mandatory vaccination protects community health through herd immunity',
        evidence: 'The WHO estimates that herd immunity for measles requires a vaccination rate of at least 95%, a threshold that voluntary systems frequently fail to achieve.',
        example: 'Australia\'s "No Jab, No Pay" policy, which links childcare benefits to vaccination status, increased childhood immunisation rates from 90% to over 95% within three years of implementation.',
        sentences: {
          intro: 'The primary justification for mandatory vaccination is the protection of public health through herd immunity, which safeguards those who cannot be vaccinated for medical reasons.',
          body: 'Australia\'s "No Jab, No Pay" initiative demonstrates that linking vaccination to tangible incentives can successfully lift immunisation rates above the critical threshold required for herd immunity.',
          conclusion: 'Mandatory vaccination is therefore essential for protecting not just individual children but the entire community, including immunocompromised individuals who depend on herd immunity.'
        }
      },
      {
        point: 'Vaccination prevents the resurgence of dangerous diseases that were nearly eradicated',
        evidence: 'The WHO reported a 556% increase in global measles cases between 2016 and 2019, largely attributed to declining vaccination rates in countries without mandatory immunisation policies.',
        example: 'Samoa\'s devastating 2019 measles outbreak, which killed 83 people, predominantly children, was directly linked to a drop in vaccination rates below 35% due to anti-vaccine misinformation.',
        sentences: {
          intro: 'History has repeatedly shown that when vaccination rates decline, once-controlled diseases can return with devastating consequences.',
          body: 'The tragic measles epidemic in Samoa, where dozens of children died from a preventable disease, serves as a stark reminder of the dangers of allowing vaccination rates to fall below safe levels.',
          conclusion: 'Making vaccination mandatory is a necessary measure to prevent the unnecessary suffering and death caused by the resurgence of preventable diseases.'
        }
      },
      {
        point: 'Mandatory vaccination reduces healthcare costs associated with preventable diseases',
        evidence: 'The CDC estimates that childhood vaccination programmes in the United States save approximately $295 billion in direct medical costs and $1.38 trillion in total societal costs per generation.',
        example: 'The eradication of smallpox through mandatory global vaccination campaigns has saved an estimated $1.35 billion annually in vaccination and treatment costs since 1980.',
        sentences: {
          intro: 'From an economic standpoint, mandatory vaccination programmes deliver extraordinary returns by preventing the enormous costs associated with treating vaccine-preventable diseases.',
          body: 'The financial savings generated by routine childhood immunisation are staggering, with each dollar invested in vaccination yielding an estimated ten dollars in healthcare savings.',
          conclusion: 'Compulsory vaccination is therefore not only a public health measure but also one of the most cost-effective investments a government can make.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Mandatory vaccination infringes on parental rights and individual liberty',
        evidence: 'Constitutional law scholars argue that compulsory medical interventions must meet a high threshold of necessity, and that parents have a fundamental right to make healthcare decisions for their children.',
        example: 'In several US states, religious and philosophical exemptions to mandatory vaccination reflect the legal recognition that individual liberty must be balanced against public health goals.',
        sentences: {
          intro: 'Opponents of mandatory vaccination argue that it represents an unacceptable intrusion on parental autonomy and the right to make informed medical decisions for one\'s own children.',
          body: 'The existence of exemption clauses in many mandatory vaccination laws acknowledges the legitimate tension between collective health goals and individual rights.',
          conclusion: 'Rather than mandating vaccination, governments should focus on building trust and providing transparent information to empower parents to make well-informed decisions.'
        }
      },
      {
        point: 'Compulsion may increase distrust and fuel anti-vaccine sentiment',
        evidence: 'A 2022 study in Nature Human Behaviour found that coercive vaccination policies can increase resistance among vaccine-hesitant populations by up to 15%, paradoxically reducing overall compliance.',
        example: 'In France, the introduction of expanded mandatory vaccinations in 2018 initially triggered significant public protests and a temporary increase in anti-vaccine rhetoric on social media platforms.',
        sentences: {
          intro: 'A counterintuitive risk of mandatory vaccination is that it may inadvertently strengthen the anti-vaccine movement by creating a sense of government overreach.',
          body: 'Research suggests that coercive approaches can backfire among hesitant populations, transforming mild scepticism into active resistance and entrenching opposition to vaccination.',
          conclusion: 'Building public confidence through transparent communication and accessible healthcare may ultimately prove more effective than compulsion in achieving high vaccination rates.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while mandatory vaccination is strongly justified by its ability to protect public health and prevent disease outbreaks, governments must carefully balance compulsion with education and trust-building to avoid alienating vaccine-hesitant communities and undermining long-term public confidence.',
    keyVocabulary: ['herd immunity', 'immunisation rates', 'vaccine hesitancy', 'public health mandate', 'parental autonomy', 'preventable diseases', 'anti-vaccine sentiment', 'epidemiological threshold']
  },

  {
    id: 'hea06',
    category: 'Health',
    question: 'Some people believe that euthanasia should be legalised for terminally ill patients. Discuss both views and give your opinion.',
    keywords: ['euthanasia', 'assisted dying', 'terminal illness', 'right to die'],
    forPoints: [
      {
        point: 'Terminally ill patients deserve the right to die with dignity and without unnecessary suffering',
        evidence: 'Palliative care research indicates that approximately 10% of terminal patients experience intractable pain that cannot be adequately managed with current medical treatments.',
        example: 'Australia\'s state of Victoria legalised voluntary assisted dying in 2019, and in its first year of operation, 124 terminally ill patients accessed the programme, with families reporting overwhelmingly positive experiences regarding end-of-life dignity.',
        sentences: {
          intro: 'The most fundamental argument for legalising euthanasia is that terminally ill individuals should have the autonomy to choose a dignified and painless death when suffering becomes unbearable.',
          body: 'Victoria\'s carefully regulated assisted dying programme demonstrates that euthanasia can be implemented responsibly, providing compassionate options for patients whose pain cannot be alleviated by conventional medicine.',
          conclusion: 'Denying terminally ill patients the right to end their suffering is not an act of protection but an imposition of unnecessary cruelty.'
        }
      },
      {
        point: 'Legalisation allows for proper regulation and safeguards against abuse',
        evidence: 'Research from the Netherlands, where euthanasia has been legal since 2002, shows no evidence of a "slippery slope" in the expansion of eligibility criteria over two decades of practice.',
        example: 'Oregon\'s Death with Dignity Act, in operation since 1997, includes mandatory waiting periods, multiple medical opinions, and psychological assessments, with fewer than 0.4% of all deaths in the state occurring through assisted dying.',
        sentences: {
          intro: 'Legalising euthanasia within a robust regulatory framework is far preferable to forcing desperate patients to seek unregulated alternatives.',
          body: 'Oregon\'s quarter-century of experience with assisted dying legislation demonstrates that strict safeguards can effectively prevent abuse while preserving patient autonomy.',
          conclusion: 'Regulation, rather than prohibition, is the most responsible approach to ensuring that end-of-life choices are made safely and with appropriate medical oversight.'
        }
      },
      {
        point: 'Euthanasia can reduce the emotional and financial burden on families',
        evidence: 'Studies by the Journal of Pain and Symptom Management found that the final month of life accounts for approximately 25% of total healthcare expenditure for terminally ill patients, often with minimal improvement in quality of life.',
        example: 'In Belgium, families of patients who chose euthanasia reported significantly lower rates of prolonged grief and post-traumatic stress compared to families of patients who died after extended periods of suffering.',
        sentences: {
          intro: 'Beyond the patient\'s own wishes, legalised euthanasia can alleviate the profound emotional and financial toll that prolonged terminal illness places on families.',
          body: 'The disproportionate healthcare costs incurred during the final weeks of a terminal illness, combined with the psychological trauma experienced by family members, suggest that assisted dying can benefit all those affected.',
          conclusion: 'A compassionate society should offer families the option to avoid the devastating experience of watching a loved one suffer when no hope of recovery remains.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Euthanasia undermines the fundamental medical ethic of "do no harm"',
        evidence: 'The World Medical Association maintains its opposition to euthanasia, stating that it is incompatible with the physician\'s role as a healer and protector of life.',
        example: 'In Germany, many physicians have refused to participate in assisted dying even after its decriminalisation, citing deep moral objections rooted in the Hippocratic tradition.',
        sentences: {
          intro: 'The strongest objection to euthanasia is that it fundamentally contradicts the core medical principle of preserving life and doing no harm.',
          body: 'The reluctance of many physicians worldwide to participate in assisted dying reflects a deeply held professional belief that the role of medicine is to heal and comfort, not to hasten death.',
          conclusion: 'Legalising euthanasia risks eroding the trust between patients and healthcare professionals, upon which the entire medical system depends.'
        }
      },
      {
        point: 'Vulnerable patients may feel pressured to choose death to avoid being a burden',
        evidence: 'Research published in the New England Journal of Medicine found that among patients requesting assisted dying, approximately 47% cited "being a burden on family" as a significant motivating factor.',
        example: 'Disability advocacy groups in Australia have expressed concerns that legalised euthanasia sends a harmful message to people with chronic conditions, suggesting that their lives are less worth living.',
        sentences: {
          intro: 'Critics warn that legalising euthanasia creates a dangerous social dynamic in which vulnerable individuals may feel pressured to end their lives prematurely.',
          body: 'The finding that nearly half of patients requesting euthanasia cite concerns about being a burden raises serious questions about whether such decisions are truly autonomous or shaped by social pressure.',
          conclusion: 'Society must ensure that the legalisation of euthanasia does not inadvertently devalue the lives of those who are elderly, disabled, or chronically ill.'
        }
      },
      {
        point: 'Improvements in palliative care can address end-of-life suffering without resorting to euthanasia',
        evidence: 'The Economist Intelligence Unit ranks Australia\'s palliative care system among the top five globally, with access to pain management and psychological support for terminal patients.',
        example: 'Hospice programmes in Japan provide comprehensive end-of-life care, including family counselling and spiritual support, and have achieved patient satisfaction rates exceeding 90% without offering euthanasia.',
        sentences: {
          intro: 'Proponents of palliative care argue that investment in end-of-life services can eliminate the need for euthanasia by ensuring that dying patients receive comprehensive physical and emotional support.',
          body: 'Japan\'s hospice system demonstrates that it is possible to achieve high levels of patient comfort and dignity at the end of life without resorting to assisted dying.',
          conclusion: 'Rather than legalising euthanasia, governments should prioritise expanding access to world-class palliative care that addresses the full spectrum of end-of-life needs.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while the case for legalising euthanasia is compelling on grounds of individual autonomy and compassion, it must be balanced against legitimate concerns about vulnerable populations and the integrity of the medical profession. A society that offers both excellent palliative care and carefully regulated assisted dying provides the most humane and comprehensive response to end-of-life suffering.',
    keyVocabulary: ['voluntary assisted dying', 'palliative care', 'bodily autonomy', 'end-of-life dignity', 'Hippocratic oath', 'regulatory safeguards', 'terminal illness', 'slippery slope']
  },

  {
    id: 'hea07',
    category: 'Health',
    question: 'Some people believe that the government should take primary responsibility for tackling obesity. Others argue it is the individual\'s responsibility. Discuss both views.',
    keywords: ['obesity', 'government responsibility', 'individual choice', 'public health'],
    forPoints: [
      {
        point: 'The food environment is shaped by corporate and government decisions, not individual choice',
        evidence: 'Research from the University of Cambridge shows that the availability and pricing of food within a person\'s environment accounts for approximately 60% of dietary choices, while individual willpower accounts for only 20%.',
        example: 'In many low-income suburbs of Australian cities such as western Sydney, fast food outlets outnumber fresh food stores by a ratio of five to one, severely limiting residents\' access to healthy options.',
        sentences: {
          intro: 'The argument for government intervention rests on the recognition that obesity is largely driven by environmental factors beyond individual control.',
          body: 'When residents of disadvantaged communities are surrounded by fast food outlets and lack access to affordable fresh produce, blaming individuals for poor dietary choices ignores the structural determinants of health.',
          conclusion: 'Governments have both the power and the responsibility to reshape the food environment through regulation, urban planning, and subsidies for healthy food options.'
        }
      },
      {
        point: 'Sugar taxes and food labelling regulations have proven effective in reducing obesity rates',
        evidence: 'Mexico\'s sugar tax, introduced in 2014, led to a 12% reduction in sugary drink purchases within two years, with the greatest impact observed among low-income households.',
        example: 'Australia\'s Health Star Rating system has been shown to shift consumer purchasing towards healthier products, with a 2020 evaluation finding that products displaying the rating experienced a 5% increase in sales of higher-rated items.',
        sentences: {
          intro: 'Government policies such as sugar taxes and mandatory nutritional labelling have demonstrated measurable success in guiding populations towards healthier dietary choices.',
          body: 'Mexico\'s experience with sugar taxation confirms that price signals can effectively reduce the consumption of unhealthy products, particularly among the most price-sensitive consumers.',
          conclusion: 'These evidence-based interventions illustrate that government action can achieve population-level health improvements that individual effort alone cannot.'
        }
      },
      {
        point: 'Obesity imposes enormous costs on the public healthcare system, justifying government intervention',
        evidence: 'The Australian Institute of Health and Welfare estimates that obesity and overweight conditions cost the Australian economy over $21 billion annually in healthcare, lost productivity, and carer costs.',
        example: 'The UK government\'s Childhood Obesity Plan, which includes restrictions on food advertising and mandatory calorie labelling in restaurants, aims to halve childhood obesity rates by 2030.',
        sentences: {
          intro: 'Given that obesity-related conditions consume a significant proportion of public healthcare budgets, governments have a clear economic justification for intervening to reduce obesity rates.',
          body: 'With obesity costing Australia over $21 billion per year, the financial imperative for government action is as compelling as the moral one.',
          conclusion: 'Preventing obesity through public policy is far more cost-effective than treating its consequences through the healthcare system.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Individuals are ultimately responsible for their own dietary choices and lifestyle habits',
        evidence: 'Behavioural research indicates that personal motivation and self-regulation are the strongest predictors of long-term weight management success, outperforming any single environmental intervention.',
        example: 'Countries such as Japan, where cultural norms around portion control and regular physical activity are strong, maintain low obesity rates of around 4% without the need for extensive government regulation of food.',
        sentences: {
          intro: 'Those who oppose government intervention argue that personal responsibility is the cornerstone of health, and that individuals must be empowered to make their own informed choices.',
          body: 'Japan\'s remarkably low obesity rates demonstrate that cultural attitudes towards food, exercise, and self-discipline can be more powerful than any government regulation.',
          conclusion: 'Rather than expanding the regulatory state, governments should focus on educating individuals to take ownership of their health and lifestyle decisions.'
        }
      },
      {
        point: 'Excessive government regulation of food is paternalistic and restricts personal freedom',
        evidence: 'A 2021 Gallup survey found that 58% of respondents in developed nations opposed government restrictions on food choices, viewing them as an infringement on personal liberty.',
        example: 'New York City\'s attempt to ban large sugary drinks in 2013 was struck down by the courts and widely criticised as an overreach of government authority into personal consumption decisions.',
        sentences: {
          intro: 'Critics contend that government regulation of dietary choices is an example of excessive paternalism that undermines individual freedom and consumer choice.',
          body: 'The public backlash against New York\'s sugary drink ban illustrates the widespread resistance to government intervention in deeply personal decisions about food and lifestyle.',
          conclusion: 'A free society must respect individuals\' right to make their own choices, even when those choices may not align with public health objectives.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, tackling obesity requires a partnership between government action and individual responsibility. While governments must address the structural determinants of poor nutrition through regulation and education, individuals also have a role to play in making healthier choices within the environment available to them.',
    keyVocabulary: ['food environment', 'sugar tax', 'nutritional labelling', 'personal responsibility', 'dietary choices', 'public health intervention', 'paternalism', 'socioeconomic determinants']
  },

  {
    id: 'hea08',
    category: 'Health',
    question: 'Some people prefer alternative medicine such as herbal remedies and acupuncture over conventional medical treatments. Discuss both views and give your opinion.',
    keywords: ['alternative medicine', 'conventional medicine', 'herbal remedies', 'evidence-based treatment'],
    forPoints: [
      {
        point: 'Alternative medicine offers a holistic approach that addresses the whole person, not just symptoms',
        evidence: 'A systematic review in the Journal of Alternative and Complementary Medicine found that patients using integrative treatments reported 35% higher satisfaction with their overall healthcare experience.',
        example: 'Traditional Chinese Medicine (TCM) practitioners in Australia treat patients by considering their emotional, physical, and dietary well-being simultaneously, an approach increasingly recognised by mainstream healthcare providers.',
        sentences: {
          intro: 'Advocates of alternative medicine argue that its holistic approach addresses the root causes of illness rather than merely treating symptoms.',
          body: 'The higher satisfaction rates reported by patients using integrative treatments suggest that conventional medicine may benefit from incorporating the patient-centred philosophy of alternative approaches.',
          conclusion: 'A healthcare system that values holistic well-being alongside evidence-based treatment is likely to achieve better outcomes for patients.'
        }
      },
      {
        point: 'Some alternative treatments have been validated by scientific research',
        evidence: 'The Cochrane Collaboration has identified strong evidence supporting the use of acupuncture for chronic pain management and the use of St John\'s wort for mild to moderate depression.',
        example: 'In Germany, over 70% of the population uses herbal medicines, and many are prescribed by conventional doctors and covered by public health insurance, reflecting their acceptance within mainstream medical practice.',
        sentences: {
          intro: 'It is important to recognise that certain alternative treatments have been subjected to rigorous scientific scrutiny and found to be effective.',
          body: 'Germany\'s integration of validated herbal medicines into its public health system demonstrates that alternative and conventional medicine need not be mutually exclusive.',
          conclusion: 'Rather than dismissing alternative medicine entirely, the scientific community should continue to evaluate promising treatments and integrate those with proven efficacy.'
        }
      },
      {
        point: 'Alternative medicine can reduce dependence on pharmaceutical drugs and their side effects',
        evidence: 'The Australian Bureau of Statistics reports that adverse drug reactions account for approximately 190,000 hospital admissions per year, highlighting the risks of over-reliance on pharmaceutical treatments.',
        example: 'Mindfulness-based stress reduction programmes, originally developed from Buddhist meditation practices, have been shown to reduce anxiety medication use by 40% in clinical trials conducted at the University of Massachusetts.',
        sentences: {
          intro: 'A significant benefit of alternative medicine is its potential to reduce patients\' dependence on pharmaceutical drugs, which often carry substantial side effects.',
          body: 'With nearly 200,000 Australians hospitalised each year due to adverse drug reactions, exploring safer complementary approaches is both prudent and necessary.',
          conclusion: 'Integrating evidence-based alternative treatments into healthcare can offer patients effective options with fewer risks than conventional pharmaceuticals.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Many alternative treatments lack rigorous scientific evidence of their efficacy',
        evidence: 'A comprehensive review by the Australian National Health and Medical Research Council found that for homeopathy, there were no health conditions for which reliable evidence of effectiveness existed.',
        example: 'The US Federal Trade Commission required homeopathic product labels to state that there is no scientific evidence supporting their claims, reflecting the consensus of the mainstream medical community.',
        sentences: {
          intro: 'The fundamental criticism of alternative medicine is that many of its practices lack the rigorous evidence base that underpins conventional medical treatments.',
          body: 'Australia\'s own NHMRC review found no credible evidence supporting the efficacy of homeopathy for any medical condition, raising serious concerns about its continued use.',
          conclusion: 'Patients deserve treatments that have been proven effective through rigorous clinical trials, not remedies based on tradition or anecdote.'
        }
      },
      {
        point: 'Reliance on alternative medicine can delay effective treatment and endanger patients',
        evidence: 'Research from Yale University found that cancer patients who chose alternative medicine as their primary treatment were 2.5 times more likely to die within five years compared to those receiving conventional treatment.',
        example: 'The tragic case of an Australian child who died from eczema complications in 2002 after his parents exclusively used homeopathic treatments instead of conventional medicine highlights the life-threatening risks of rejecting proven medical interventions.',
        sentences: {
          intro: 'Perhaps the most dangerous aspect of alternative medicine is that it can lead patients to delay or forgo effective conventional treatments, with potentially fatal consequences.',
          body: 'Research demonstrating significantly higher mortality rates among cancer patients who rely exclusively on alternative medicine underscores the very real dangers of substituting unproven remedies for evidence-based care.',
          conclusion: 'While complementary use of alternative therapies may be beneficial, using them as replacements for proven medical treatments is irresponsible and potentially life-threatening.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, alternative medicine can play a valuable complementary role in healthcare when its treatments are supported by scientific evidence. However, it should never replace proven conventional treatments for serious medical conditions, and patients must be fully informed about the evidence base for any therapy they choose to pursue.',
    keyVocabulary: ['evidence-based medicine', 'holistic approach', 'integrative healthcare', 'clinical trials', 'complementary therapy', 'pharmaceutical dependence', 'homeopathy', 'traditional medicine']
  },

  {
    id: 'hea09',
    category: 'Health',
    question: 'In the modern workplace, maintaining a healthy work-life balance has become increasingly difficult. What are the causes and what solutions can you suggest?',
    keywords: ['work-life balance', 'employee well-being', 'burnout', 'workplace culture'],
    forPoints: [
      {
        point: 'Technology has blurred the boundary between work and personal life',
        evidence: 'A 2023 Microsoft survey found that 68% of employees reported checking work emails outside business hours, with 42% responding to messages within an hour of receiving them.',
        example: 'In France, the "right to disconnect" law enacted in 2017 requires companies with more than 50 employees to negotiate policies that limit after-hours digital communication, protecting employees\' personal time.',
        sentences: {
          intro: 'The proliferation of digital communication tools has made it increasingly difficult for employees to establish clear boundaries between their professional and personal lives.',
          body: 'France\'s innovative "right to disconnect" legislation recognises that the constant accessibility enabled by smartphones and email is a significant contributor to burnout and work-life imbalance.',
          conclusion: 'Governments and employers must take proactive steps to establish digital boundaries that protect employees\' right to personal time and rest.'
        }
      },
      {
        point: 'Flexible working arrangements improve employee health and productivity',
        evidence: 'A Stanford University study found that employees who worked from home were 13% more productive and took 50% fewer sick days than their office-based counterparts.',
        example: 'Companies such as Atlassian, headquartered in Sydney, have adopted permanent flexible work policies that allow employees to choose their working hours and location, resulting in a 25% improvement in employee satisfaction scores.',
        sentences: {
          intro: 'Flexible working arrangements represent one of the most effective solutions for improving work-life balance, benefiting both employees and employers.',
          body: 'Australian technology company Atlassian has demonstrated that trusting employees to manage their own schedules leads to measurably higher satisfaction and productivity.',
          conclusion: 'Organisations that embrace flexibility will not only attract top talent but also build a healthier, more resilient workforce.'
        }
      },
      {
        point: 'Employer-sponsored wellness programmes reduce stress and improve retention',
        evidence: 'A meta-analysis in the American Journal of Health Promotion found that workplace wellness programmes reduce absenteeism by 25% and healthcare costs by 26% on average.',
        example: 'Google\'s comprehensive wellness programme, which includes on-site fitness centres, mental health counselling, and mindfulness workshops, has contributed to the company\'s employee retention rate of over 95%.',
        sentences: {
          intro: 'Employer-sponsored wellness programmes offer a practical and evidence-based approach to supporting employees\' physical and mental health.',
          body: 'The impressive retention rates achieved by companies investing heavily in employee well-being confirm that wellness programmes deliver tangible benefits for both workers and organisations.',
          conclusion: 'Investing in employee wellness is not a luxury but a strategic necessity for organisations seeking to maintain a healthy, engaged, and productive workforce.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Work-life balance is primarily an individual responsibility that varies by person',
        evidence: 'Personality research suggests that individual traits such as conscientiousness and boundary-setting ability account for up to 40% of the variance in work-life balance satisfaction.',
        example: 'Many successful entrepreneurs, including figures like Elon Musk, openly work 80-hour weeks and report high levels of personal fulfilment, suggesting that the ideal balance differs substantially between individuals.',
        sentences: {
          intro: 'Some argue that work-life balance is a deeply personal matter that cannot be effectively addressed through one-size-fits-all policies.',
          body: 'The wide variation in individual preferences and personality traits means that what constitutes a healthy balance for one person may be entirely different for another.',
          conclusion: 'Rather than imposing rigid work-life balance policies, organisations should empower individuals to define and pursue their own version of a fulfilling life.'
        }
      },
      {
        point: 'Excessive focus on work-life balance may reduce economic competitiveness',
        evidence: 'Countries with the longest average working hours, such as South Korea and Singapore, have historically achieved faster economic growth rates than nations with shorter working cultures.',
        example: 'Japan\'s economic miracle of the post-war era was built on a culture of long working hours and dedication to employers, a model that some argue remains necessary for developing economies.',
        sentences: {
          intro: 'Critics caution that an excessive focus on work-life balance may come at the cost of economic competitiveness, particularly in rapidly developing economies.',
          body: 'The correlation between longer working hours and faster economic growth in Asian economies suggests that work-life balance policies must be calibrated to each nation\'s stage of development.',
          conclusion: 'Finding the right balance between worker well-being and economic productivity remains a complex challenge that defies simple policy solutions.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while systemic factors such as technology and workplace culture are significant contributors to work-life imbalance, addressing the issue requires a combination of legislative protections, flexible employer policies, and individual responsibility. The goal should be to create environments where employees have the autonomy to define their own balance.',
    keyVocabulary: ['work-life balance', 'digital boundaries', 'flexible working', 'employee well-being', 'burnout prevention', 'right to disconnect', 'workplace wellness', 'employee retention']
  },

  {
    id: 'hea10',
    category: 'Health',
    question: 'Some people argue that recreational drugs should be legalised and regulated rather than criminalised. Discuss both views and give your opinion.',
    keywords: ['drug legalisation', 'harm reduction', 'criminalisation', 'substance abuse'],
    forPoints: [
      {
        point: 'Legalisation enables harm reduction through regulation and quality control',
        evidence: 'Since Portugal decriminalised all drugs in 2001, drug-related deaths have fallen by over 80% and HIV infections among drug users have decreased by 95%.',
        example: 'Canada\'s legalisation of cannabis in 2018 eliminated the unregulated black market in several provinces and enabled the government to impose quality standards, including limits on pesticides and contaminants.',
        sentences: {
          intro: 'The strongest argument for drug legalisation is that it shifts the focus from punishment to harm reduction, enabling governments to regulate drug quality and protect users.',
          body: 'Portugal\'s remarkable success in reducing drug-related deaths and infections after decriminalisation provides powerful evidence that a health-centred approach is more effective than criminalisation.',
          conclusion: 'Legalisation and regulation represent a pragmatic response to drug use that prioritises public health over punitive measures.'
        }
      },
      {
        point: 'Criminalisation disproportionately affects marginalised communities without reducing drug use',
        evidence: 'The Australian Institute of Criminology reports that Indigenous Australians are imprisoned for drug offences at five times the rate of non-Indigenous Australians, despite similar rates of drug use across populations.',
        example: 'In the United States, the "War on Drugs" has resulted in the mass incarceration of African Americans, who are 3.7 times more likely to be arrested for cannabis possession despite comparable usage rates.',
        sentences: {
          intro: 'The criminalisation of drugs has demonstrably failed to reduce consumption while disproportionately harming marginalised and disadvantaged communities.',
          body: 'The stark racial disparities in drug-related imprisonment across countries such as Australia and the United States reveal that drug laws are applied inequitably, compounding existing social disadvantages.',
          conclusion: 'A just society cannot maintain a drug policy framework that punishes poverty and race rather than effectively addressing substance abuse.'
        }
      },
      {
        point: 'Tax revenue from legalised drugs can fund treatment and prevention programmes',
        evidence: 'In 2022, US states with legalised cannabis collected over $7.9 billion in combined tax revenue, a significant portion of which was directed to education, healthcare, and drug treatment services.',
        example: 'Colorado has used cannabis tax revenue to fund over $400 million in school construction, substance abuse treatment, and youth prevention programmes since legalisation in 2014.',
        sentences: {
          intro: 'Legalisation transforms drugs from a drain on public resources into a source of revenue that can fund prevention and treatment programmes.',
          body: 'Colorado\'s experience demonstrates that cannabis tax revenue can generate hundreds of millions of dollars for public services, including the very treatment programmes that help those struggling with addiction.',
          conclusion: 'The economic case for legalisation is compelling: regulated markets generate revenue while reducing the enormous costs of enforcement and incarceration.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Legalisation may normalise drug use and increase consumption, especially among young people',
        evidence: 'Following cannabis legalisation in some US states, surveys indicated a 15-20% increase in cannabis use among young adults aged 18-25 within the first three years.',
        example: 'In the Netherlands, the tolerance policy towards cannabis in coffee shops has been associated with higher rates of cannabis use among Dutch youth compared to neighbouring countries with stricter policies.',
        sentences: {
          intro: 'A major concern about drug legalisation is that it may send a permissive social signal, leading to increased experimentation and habitual use, particularly among vulnerable young people.',
          body: 'Data from US states that have legalised cannabis suggest that normalisation does lead to increased consumption, raising questions about the long-term public health implications.',
          conclusion: 'Any move towards legalisation must include robust measures to prevent increased uptake among youth, including age restrictions, advertising bans, and school-based education.'
        }
      },
      {
        point: 'Some drugs carry inherent health risks that regulation cannot eliminate',
        evidence: 'The WHO classifies substances such as heroin and methamphetamine as having extremely high potential for addiction and harm, with overdose mortality rates that remain significant even in supervised settings.',
        example: 'Despite Switzerland\'s medically supervised heroin injection programme, participants still experience significant health complications including vein damage, organ failure, and mental health deterioration.',
        sentences: {
          intro: 'Opponents argue that certain drugs are inherently so dangerous that no amount of regulation can make their use safe.',
          body: 'Even the most carefully designed harm reduction programmes cannot fully mitigate the devastating physical and psychological effects of highly addictive substances.',
          conclusion: 'While harm reduction is important, it should not be used to justify the legalisation of substances whose risks fundamentally outweigh any potential benefits of regulation.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while the failure of criminalisation to reduce drug use makes a compelling case for exploring alternative approaches, legalisation must be approached cautiously and selectively. A tiered system that decriminalises personal use, regulates lower-risk substances, and invests heavily in treatment and prevention offers the most balanced and evidence-based path forward.',
    keyVocabulary: ['harm reduction', 'decriminalisation', 'substance regulation', 'mass incarceration', 'drug-related mortality', 'tax revenue', 'public health approach', 'addiction treatment']
  },

  {
    id: 'hea11',
    category: 'Health',
    question: 'Advances in genetic testing allow people to learn about their risk of developing certain diseases. Do the benefits of genetic testing outweigh the ethical concerns?',
    keywords: ['genetic testing', 'personalised medicine', 'genetic privacy', 'bioethics'],
    forPoints: [
      {
        point: 'Genetic testing enables early intervention and personalised preventive care',
        evidence: 'Research in the New England Journal of Medicine found that women who tested positive for BRCA1/2 gene mutations and undertook preventive measures reduced their breast cancer risk by up to 95%.',
        example: 'The Australian government\'s subsidised genetic testing programme for hereditary cancer syndromes has enabled thousands of at-risk individuals to access life-saving preventive screenings and surgical options.',
        sentences: {
          intro: 'The most significant benefit of genetic testing is its ability to identify disease risks before symptoms appear, enabling early intervention that can save lives.',
          body: 'The dramatic reduction in cancer risk achieved by women who act on BRCA gene test results illustrates the transformative potential of genetic information for personalised healthcare.',
          conclusion: 'By shifting medicine from reactive treatment to proactive prevention, genetic testing represents one of the most important advances in modern healthcare.'
        }
      },
      {
        point: 'Genetic testing can guide more effective and targeted medical treatments',
        evidence: 'Pharmacogenomic studies indicate that genetic profiling can improve drug efficacy by 30-50% by identifying which medications will be most effective for each individual patient.',
        example: 'In oncology, genetic testing of tumour DNA is now routinely used to select targeted therapies, with personalised cancer treatments achieving response rates up to three times higher than traditional chemotherapy.',
        sentences: {
          intro: 'Beyond disease prevention, genetic testing enables physicians to tailor treatments to each patient\'s unique genetic profile, dramatically improving therapeutic outcomes.',
          body: 'The success of targeted cancer therapies based on tumour genetics demonstrates that personalised medicine is not a distant promise but a current reality that is saving lives today.',
          conclusion: 'Genetic testing has the potential to revolutionise medicine by replacing the trial-and-error approach to treatment with precision-guided interventions.'
        }
      },
      {
        point: 'Population-wide genetic screening can identify public health risks and guide resource allocation',
        evidence: 'Iceland\'s national genomics programme, which has sequenced the DNA of over half the population, has identified previously unknown genetic risk factors for heart disease and Alzheimer\'s.',
        example: 'The UK Biobank project, which has collected genetic data from 500,000 participants, has contributed to over 30,000 peer-reviewed research publications and informed public health strategies worldwide.',
        sentences: {
          intro: 'Large-scale genetic screening programmes offer unprecedented insights into population health risks, enabling governments to allocate healthcare resources more effectively.',
          body: 'The UK Biobank\'s contribution to thousands of research studies demonstrates the immense scientific and public health value of comprehensive genetic data collection.',
          conclusion: 'Strategic investment in population genomics can transform public health planning from reactive crisis management to evidence-based prevention.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Genetic information could be misused by employers and insurers to discriminate',
        evidence: 'A 2022 survey by the Genetic Alliance found that 34% of respondents feared genetic discrimination in insurance or employment, deterring them from undergoing testing.',
        example: 'Before the passage of the Genetic Information Nondiscrimination Act in the United States, several documented cases involved employers terminating workers or insurers denying coverage based on genetic test results.',
        sentences: {
          intro: 'One of the most serious ethical concerns surrounding genetic testing is the potential for the information to be used as a basis for discrimination in employment and insurance.',
          body: 'The documented cases of genetic discrimination in countries without adequate legal protections reveal the very real risks that genetic information poses to individual rights and privacy.',
          conclusion: 'Robust legislation prohibiting genetic discrimination must be a prerequisite for any expansion of genetic testing programmes.'
        }
      },
      {
        point: 'Knowledge of genetic risk can cause significant psychological distress without offering cures',
        evidence: 'Psychological research shows that approximately 25% of individuals who receive high-risk genetic test results experience clinically significant anxiety or depression, particularly for conditions with no available treatment.',
        example: 'Individuals who test positive for the Huntington\'s disease gene face the certainty of developing an incurable, fatal neurodegenerative condition, raising profound questions about the psychological burden of such knowledge.',
        sentences: {
          intro: 'Critics of genetic testing highlight the psychological toll of learning about disease risks, particularly when no effective treatment or prevention exists.',
          body: 'For conditions like Huntington\'s disease, where a positive genetic test confirms an inevitable and devastating diagnosis, the psychological burden of knowledge may outweigh any practical benefit.',
          conclusion: 'The expansion of genetic testing must be accompanied by comprehensive genetic counselling services to support individuals in processing and acting on their results.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the benefits of genetic testing in enabling early intervention, personalised treatment, and public health research are substantial. However, these benefits must be balanced against the risks of discrimination and psychological harm, requiring robust legal protections, ethical guidelines, and support services to ensure that genetic information is used responsibly.',
    keyVocabulary: ['personalised medicine', 'pharmacogenomics', 'genetic discrimination', 'bioethics', 'preventive screening', 'genetic counselling', 'population genomics', 'informed consent']
  },

  {
    id: 'hea12',
    category: 'Health',
    question: 'The COVID-19 pandemic exposed weaknesses in many countries\' healthcare systems. What lessons should governments learn to better prepare for future pandemics?',
    keywords: ['pandemic preparedness', 'healthcare infrastructure', 'global cooperation', 'public health crisis'],
    forPoints: [
      {
        point: 'Governments must invest in robust public health infrastructure before crises occur',
        evidence: 'The WHO\'s Independent Panel for Pandemic Preparedness found that countries spending at least 5% of GDP on healthcare, with dedicated pandemic preparedness budgets, experienced 40% lower COVID-19 mortality rates.',
        example: 'South Korea\'s investment in its Korea Disease Control and Prevention Agency after the 2015 MERS outbreak enabled it to deploy a comprehensive test-and-trace system within weeks of COVID-19 emerging, keeping death rates among the lowest in the OECD.',
        sentences: {
          intro: 'The most critical lesson of the COVID-19 pandemic is that investment in public health infrastructure must occur during peacetime, not during a crisis.',
          body: 'South Korea\'s swift and effective response to COVID-19, built on infrastructure developed after the MERS epidemic, demonstrates that preparedness investment delivers enormous dividends when the next crisis strikes.',
          conclusion: 'Governments that treat pandemic preparedness as an ongoing priority rather than an emergency expense will save both lives and money in the long term.'
        }
      },
      {
        point: 'International cooperation is essential for effective pandemic response',
        evidence: 'The COVAX initiative distributed over 1.9 billion vaccine doses to 146 countries by 2023, but delays in equitable distribution prolonged the pandemic by an estimated 12-18 months, according to the WHO.',
        example: 'The European Union\'s joint vaccine procurement programme enabled smaller member states to access COVID-19 vaccines at the same time and price as larger nations, demonstrating the power of collective action.',
        sentences: {
          intro: 'COVID-19 demonstrated that no country can successfully manage a global pandemic in isolation, making international cooperation an indispensable element of preparedness.',
          body: 'The delays in equitable global vaccine distribution illustrate that the failure to cooperate internationally not only prolongs pandemics but also increases the risk of new variants emerging in under-vaccinated populations.',
          conclusion: 'Future pandemic preparedness must prioritise binding international agreements that ensure rapid and equitable access to vaccines, treatments, and medical supplies.'
        }
      },
      {
        point: 'Digital health technologies should be integrated into pandemic response planning',
        evidence: 'Countries that rapidly deployed digital contact tracing and telehealth services during COVID-19 reduced transmission rates by an estimated 15-25%, according to a study in Nature Medicine.',
        example: 'Australia\'s rapid expansion of Medicare-funded telehealth consultations during the pandemic resulted in over 100 million telehealth services being delivered in 2020-2021, maintaining healthcare access while reducing virus transmission in clinical settings.',
        sentences: {
          intro: 'The pandemic accelerated the adoption of digital health technologies that should become permanent features of healthcare systems worldwide.',
          body: 'Australia\'s successful deployment of telehealth at scale during COVID-19 proved that digital innovation can maintain healthcare access and reduce transmission simultaneously.',
          conclusion: 'Integrating digital health infrastructure into pandemic preparedness plans will ensure that healthcare systems can adapt rapidly to future crises.'
        }
      },
      {
        point: 'Supply chain resilience for essential medical equipment must be strengthened',
        evidence: 'During the early months of COVID-19, global shortages of personal protective equipment affected over 130 countries, with prices for surgical masks increasing by 600%.',
        example: 'Australia\'s decision to establish a National Medical Stockpile and domestic manufacturing capacity for PPE and ventilators after the pandemic aims to ensure self-sufficiency in future health emergencies.',
        sentences: {
          intro: 'The global scramble for masks, ventilators, and vaccines during COVID-19 exposed the dangerous fragility of medical supply chains.',
          body: 'The catastrophic shortages of basic protective equipment in the early pandemic demonstrated that over-reliance on international supply chains can cost lives when global demand surges simultaneously.',
          conclusion: 'Building domestic manufacturing capacity and maintaining strategic medical reserves are essential investments in national security and pandemic resilience.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Maintaining constant pandemic readiness is economically unsustainable for many nations',
        evidence: 'The World Bank estimates that comprehensive pandemic preparedness would require an additional $10.5 billion in annual global spending, a figure that many developing nations cannot afford.',
        example: 'Many Pacific Island nations and sub-Saharan African countries faced impossible choices during COVID-19, as diverting limited health budgets to pandemic response meant neglecting ongoing health programmes for malaria, tuberculosis, and maternal health.',
        sentences: {
          intro: 'A significant challenge in pandemic preparedness is the enormous financial cost, which may be unsustainable for developing nations already struggling with existing health burdens.',
          body: 'The trade-offs faced by low-income countries during COVID-19 highlight the ethical complexity of directing resources towards hypothetical future pandemics when current health crises remain unresolved.',
          conclusion: 'International financial support mechanisms must be established to ensure that pandemic preparedness does not come at the expense of routine healthcare in the world\'s most vulnerable nations.'
        }
      },
      {
        point: 'Excessive government powers acquired during pandemics may erode civil liberties',
        evidence: 'Freedom House reported that 80 countries used the COVID-19 pandemic to restrict democratic freedoms, including limiting freedom of assembly, censoring information, and expanding surveillance.',
        example: 'Australia\'s strict lockdown measures in Melbourne, which lasted over 260 days and included curfews and travel restrictions, sparked significant debate about the proportionality of government responses to public health emergencies.',
        sentences: {
          intro: 'The extraordinary powers that governments assumed during COVID-19 raise legitimate concerns about the potential for pandemic preparedness to become a justification for permanent restrictions on civil liberties.',
          body: 'The use of pandemic emergencies to curtail fundamental freedoms in dozens of countries demonstrates that public health and democratic governance can come into tension during crises.',
          conclusion: 'Future pandemic preparedness frameworks must include clear legal boundaries, sunset clauses, and independent oversight to prevent the abuse of emergency powers.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the COVID-19 pandemic has provided invaluable lessons about the importance of preparedness, international cooperation, digital innovation, and supply chain resilience. However, governments must balance these priorities with fiscal sustainability and the protection of civil liberties, ensuring that pandemic preparedness strengthens rather than undermines democratic societies.',
    keyVocabulary: ['pandemic preparedness', 'public health infrastructure', 'international cooperation', 'supply chain resilience', 'digital health', 'telehealth', 'emergency powers', 'equitable access']
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 2: SOCIETY (soc01–soc12)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'soc01',
    category: 'Society',
    question: 'Some people believe that immigration brings significant benefits to a country, while others argue it creates problems. Discuss both views and give your opinion.',
    keywords: ['immigration', 'cultural diversity', 'economic contribution', 'social cohesion'],
    forPoints: [
      {
        point: 'Immigration drives economic growth by filling labour market gaps and increasing productivity',
        evidence: 'The Australian Productivity Commission found that skilled migration contributed $10 billion annually to the Australian economy and filled critical shortages in healthcare, engineering, and IT sectors.',
        example: 'Australia\'s points-based skilled migration programme has attracted over 200,000 professionals annually, with migrants founding approximately 30% of small businesses in metropolitan areas.',
        sentences: {
          intro: 'One of the most well-documented benefits of immigration is its substantial contribution to economic growth through labour market participation and entrepreneurship.',
          body: 'Australia\'s skilled migration programme illustrates how targeted immigration policies can address workforce shortages while simultaneously stimulating economic activity through business creation.',
          conclusion: 'The economic evidence overwhelmingly supports the view that well-managed immigration is a net positive for receiving countries.'
        }
      },
      {
        point: 'Immigration enriches the cultural fabric of society and promotes innovation',
        evidence: 'Research from Harvard Business School demonstrates that culturally diverse teams produce 19% more innovative solutions than homogeneous groups, as varied perspectives foster creative problem-solving.',
        example: 'Cities like Melbourne and Toronto, consistently ranked among the world\'s most liveable, attribute much of their vibrancy to their multicultural populations, which support diverse cuisines, festivals, and artistic traditions.',
        sentences: {
          intro: 'Beyond economics, immigration enriches the cultural life of host societies and drives innovation by bringing together diverse perspectives and experiences.',
          body: 'Melbourne\'s reputation as one of the world\'s most culturally vibrant cities is inseparable from its multicultural population, which has transformed it into a global centre for food, arts, and innovation.',
          conclusion: 'Cultural diversity, far from being a challenge, is one of the greatest assets that immigration brings to contemporary societies.'
        }
      },
      {
        point: 'Immigration helps offset the challenges of ageing populations and declining birth rates',
        evidence: 'The United Nations Population Division projects that without migration, the working-age population of the European Union would decline by 20% by 2050, threatening pension systems and economic stability.',
        example: 'Germany\'s acceptance of over one million refugees since 2015 has contributed to a stabilisation of its workforce, with over 50% of working-age refugees now employed in the German labour market.',
        sentences: {
          intro: 'In the context of declining birth rates and ageing populations, immigration offers a vital demographic solution for maintaining economic productivity and social services.',
          body: 'Germany\'s experience demonstrates that refugees and immigrants can be successfully integrated into the workforce, helping to address the demographic challenges facing many developed nations.',
          conclusion: 'Countries that close their doors to immigration risk accelerating their own demographic decline and the economic consequences that follow.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Rapid immigration can strain public services and infrastructure',
        evidence: 'Research by the Migration Advisory Committee in the UK found that in areas with high immigration, waiting times for GP appointments increased by 10% and school class sizes grew by an average of three students.',
        example: 'In Sydney and Melbourne, rapid population growth driven partly by immigration has contributed to housing affordability crises, with median house prices exceeding ten times the average annual household income.',
        sentences: {
          intro: 'A legitimate concern about immigration is the pressure it places on public services, infrastructure, and housing, particularly in areas experiencing rapid population growth.',
          body: 'The housing affordability crisis in Australia\'s major cities illustrates how immigration-driven population growth, without corresponding infrastructure investment, can reduce quality of life for all residents.',
          conclusion: 'Successful immigration policy must be accompanied by adequate investment in housing, healthcare, education, and transport infrastructure.'
        }
      },
      {
        point: 'Immigration can create social tensions and challenges to community cohesion',
        evidence: 'The Scanlon Foundation\'s Mapping Social Cohesion survey found that 40% of Australians believe immigration levels are "too high," reflecting concerns about social integration and cultural change.',
        example: 'In some European countries, the establishment of socially isolated migrant communities in suburban areas has been linked to reduced social cohesion and increased inter-group tensions.',
        sentences: {
          intro: 'Critics argue that high levels of immigration can undermine social cohesion, particularly when newcomers and established communities struggle to find common ground.',
          body: 'The formation of isolated immigrant communities in some European cities highlights the importance of active integration policies that facilitate meaningful social interaction between newcomers and host populations.',
          conclusion: 'Immigration must be accompanied by comprehensive integration support, including language training, community engagement programmes, and anti-discrimination measures.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, immigration brings substantial economic, cultural, and demographic benefits to receiving countries. However, these benefits can only be fully realised when governments invest in integration programmes, infrastructure, and services to manage population growth effectively and maintain social cohesion.',
    keyVocabulary: ['skilled migration', 'cultural diversity', 'social cohesion', 'labour market', 'demographic decline', 'integration policy', 'housing affordability', 'points-based system']
  },

  {
    id: 'soc02',
    category: 'Society',
    question: 'Despite progress in recent decades, gender inequality persists in many workplaces. What are the main causes and what measures can be taken to achieve gender equality?',
    keywords: ['gender equality', 'pay gap', 'workplace discrimination', 'women in leadership'],
    forPoints: [
      {
        point: 'Legislation mandating equal pay and transparent salary reporting can close the gender pay gap',
        evidence: 'Iceland\'s Equal Pay Certification law, which requires companies to prove they pay men and women equally, has helped the country achieve the smallest gender pay gap in the world at 4.8%.',
        example: 'The UK\'s mandatory gender pay gap reporting, introduced in 2017, has increased public accountability and prompted major employers including the BBC and HSBC to address significant disparities.',
        sentences: {
          intro: 'Legislative action on pay transparency and equal remuneration is one of the most effective tools for closing the persistent gender pay gap.',
          body: 'Iceland\'s pioneering equal pay certification requirement demonstrates that when companies are legally obligated to prove pay equity, the gap narrows significantly and rapidly.',
          conclusion: 'Governments should follow Iceland\'s lead by enacting enforceable equal pay legislation that holds employers accountable for gender-based pay disparities.'
        }
      },
      {
        point: 'Affordable childcare and parental leave policies enable women to participate fully in the workforce',
        evidence: 'OECD data shows that countries offering at least 12 months of paid parental leave and subsidised childcare have female workforce participation rates 15-20% higher than those without such policies.',
        example: 'Sweden\'s generous parental leave system, which reserves three months exclusively for fathers, has increased male participation in childcare and enabled 80% of Swedish mothers to return to full-time work within two years of giving birth.',
        sentences: {
          intro: 'The unequal burden of childcare remains one of the primary barriers to gender equality in the workplace, requiring structural policy interventions.',
          body: 'Sweden\'s parental leave model, which incentivises fathers to share caregiving responsibilities, has created one of the most gender-equal labour markets in the world.',
          conclusion: 'Investing in affordable childcare and equitable parental leave is essential for removing the structural barriers that prevent women from achieving their full professional potential.'
        }
      },
      {
        point: 'Gender diversity quotas for boards and leadership positions accelerate change',
        evidence: 'A McKinsey study found that companies in the top quartile for gender diversity on executive teams were 25% more likely to achieve above-average profitability.',
        example: 'Norway\'s requirement that corporate boards comprise at least 40% women, introduced in 2003, has increased female board representation from 7% to 42% and has been adopted as a model by several European nations.',
        sentences: {
          intro: 'Gender quotas for corporate leadership positions can accelerate progress that voluntary measures alone have failed to achieve.',
          body: 'Norway\'s board gender quota has dramatically transformed corporate governance, proving that mandated diversity can be implemented without negative effects on company performance.',
          conclusion: 'While quotas remain controversial, the evidence suggests they are an effective catalyst for breaking through the glass ceiling in corporate leadership.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Gender quotas may undermine merit-based selection and stigmatise women in leadership',
        evidence: 'Critics argue that quotas can lead to the perception that women in leadership were appointed to fill requirements rather than on the basis of their qualifications, potentially undermining their authority.',
        example: 'In Australia, a survey by the Australian Institute of Company Directors found that 35% of female directors reported experiencing "quota stigma," with colleagues questioning whether their appointment was merit-based.',
        sentences: {
          intro: 'A common objection to gender quotas is that they may undermine the principle of merit-based advancement and create a stigma for women who achieve leadership positions.',
          body: 'The experience of quota stigma reported by Australian female directors highlights the risk that well-intentioned diversity policies can inadvertently undermine the very women they seek to support.',
          conclusion: 'Rather than imposing rigid quotas, organisations should focus on removing systemic barriers and biases that prevent women from competing equally for leadership roles.'
        }
      },
      {
        point: 'The pay gap partly reflects different career choices and work patterns rather than discrimination',
        evidence: 'Economic research suggests that up to 60% of the raw gender pay gap can be attributed to differences in occupation, hours worked, and career interruptions rather than direct pay discrimination.',
        example: 'In Australia, the concentration of women in lower-paid sectors such as education and healthcare, and their higher rates of part-time work, account for a significant proportion of the 13.3% gender pay gap.',
        sentences: {
          intro: 'Some economists argue that the gender pay gap is more complex than simple discrimination, reflecting differences in occupational choices, working hours, and career trajectories.',
          body: 'The concentration of women in lower-paid industries and their disproportionate share of part-time work suggest that addressing the pay gap requires systemic changes beyond equal pay legislation alone.',
          conclusion: 'A comprehensive approach to gender equality must address the underlying factors that channel women into lower-paid work, including social expectations and the undervaluation of female-dominated professions.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, achieving genuine gender equality in the workplace requires a combination of legislative action, structural support for working parents, and cultural change. While quotas can accelerate progress, they must be complemented by efforts to eliminate unconscious bias and revalue work traditionally performed by women.',
    keyVocabulary: ['gender pay gap', 'pay transparency', 'parental leave', 'glass ceiling', 'gender quotas', 'workforce participation', 'unconscious bias', 'occupational segregation']
  },

  {
    id: 'soc03',
    category: 'Society',
    question: 'Many countries are facing the challenges of an ageing population. What problems does this cause, and what measures can governments take to address them?',
    keywords: ['ageing population', 'pension systems', 'elderly care', 'demographic shift'],
    forPoints: [
      {
        point: 'Raising the retirement age and encouraging older workers to remain employed can sustain economic productivity',
        evidence: 'The OECD estimates that increasing the effective retirement age by two years could add 0.3-0.5% to annual GDP growth in developed nations.',
        example: 'Japan\'s 2021 legislation encouraging employers to allow workers to continue until age 70, combined with retraining programmes, has helped maintain one of the highest elderly employment rates in the world at 25% for those aged 65-69.',
        sentences: {
          intro: 'One practical response to population ageing is to extend working lives, enabling older citizens to contribute to the economy while maintaining their financial independence.',
          body: 'Japan\'s approach of incentivising employers to retain older workers through legislation and retraining demonstrates that productive employment can continue well beyond traditional retirement ages.',
          conclusion: 'Adjusting retirement policies to reflect increased life expectancy is both economically necessary and personally beneficial for many older adults who wish to remain active and engaged.'
        }
      },
      {
        point: 'Investment in aged care technology and services improves quality of life for elderly citizens',
        evidence: 'The global aged care technology market is projected to reach $30 billion by 2030, with innovations in remote monitoring, assistive robotics, and telehealth transforming elderly care.',
        example: 'Singapore\'s Smart Nation initiative includes a nationwide network of sensors and monitoring systems in elderly housing that detect falls and medical emergencies, enabling rapid response and reducing hospitalisation rates by 20%.',
        sentences: {
          intro: 'Technology offers transformative solutions for aged care, enabling elderly individuals to live independently while receiving continuous health monitoring and support.',
          body: 'Singapore\'s deployment of smart monitoring systems in elderly housing demonstrates how technology can dramatically improve safety and reduce the strain on hospital resources.',
          conclusion: 'Governments should invest in aged care technology as a cost-effective complement to traditional care models, improving outcomes for the elderly while reducing systemic costs.'
        }
      },
      {
        point: 'Targeted immigration policies can help offset demographic imbalances caused by ageing',
        evidence: 'The Australian Government\'s Intergenerational Report projects that without sustained migration, Australia\'s dependency ratio would reach unsustainable levels by 2060, with fewer than two workers supporting each retiree.',
        example: 'Canada\'s Express Entry immigration system strategically recruits younger skilled workers, helping to maintain a balanced demographic profile and sustaining its pension and healthcare systems.',
        sentences: {
          intro: 'Strategic immigration policies offer one of the most effective means of maintaining a balanced demographic structure in the face of population ageing.',
          body: 'Canada\'s targeted approach to attracting young, skilled migrants has helped sustain its workforce while supporting the tax base needed to fund services for an ageing population.',
          conclusion: 'Immigration should be recognised as an essential demographic tool for countries facing the fiscal pressures of population ageing.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Raising the retirement age disadvantages workers in physically demanding occupations',
        evidence: 'Research from the European Foundation for the Improvement of Living and Working Conditions found that workers in manual labour occupations have a life expectancy 3-7 years shorter than those in professional roles.',
        example: 'In Australia, construction workers, miners, and agricultural labourers face significantly higher rates of musculoskeletal injury and disability, making it impractical and unfair to require them to work until the same age as office workers.',
        sentences: {
          intro: 'A uniform increase in the retirement age fails to account for the stark inequalities in health and life expectancy between different occupational groups.',
          body: 'Workers in physically demanding occupations suffer disproportionately higher rates of injury and disability, making extended working lives both impractical and inequitable for this group.',
          conclusion: 'Any changes to retirement policy must include flexibility for workers whose health and occupational conditions prevent them from continuing to work at older ages.'
        }
      },
      {
        point: 'Immigration alone cannot solve the long-term fiscal challenges of ageing populations',
        evidence: 'Demographic modelling by the United Nations shows that maintaining current worker-to-retiree ratios in Europe through immigration alone would require politically and socially unrealistic levels of annual migration.',
        example: 'Germany would need to accept approximately 3.6 million immigrants per year to maintain its current dependency ratio, a figure that far exceeds its social and economic capacity for integration.',
        sentences: {
          intro: 'While immigration can partially offset demographic ageing, the scale of migration required to fully compensate for declining birth rates is impractical for most nations.',
          body: 'The enormous volumes of immigration that would be needed to maintain current dependency ratios demonstrate that migration is a complement to, not a substitute for, comprehensive pension and healthcare reform.',
          conclusion: 'Addressing population ageing requires a multi-pronged approach that includes retirement reform, technological innovation, and sustainable levels of immigration.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the challenges of an ageing population demand a comprehensive response that combines extended working lives, investment in aged care innovation, strategic immigration, and pension reform. No single measure is sufficient; rather, governments must adopt integrated strategies that balance economic sustainability with fairness and quality of life for older citizens.',
    keyVocabulary: ['dependency ratio', 'retirement age', 'aged care', 'demographic shift', 'intergenerational equity', 'pension sustainability', 'elderly employment', 'assistive technology']
  },

  {
    id: 'soc04',
    category: 'Society',
    question: 'Is multiculturalism a strength for modern societies, or does it create divisions? Should governments encourage assimilation instead?',
    keywords: ['multiculturalism', 'assimilation', 'cultural identity', 'social integration'],
    forPoints: [
      {
        point: 'Multiculturalism fosters creativity, innovation, and economic dynamism',
        evidence: 'A study by the National Bureau of Economic Research found that culturally diverse cities in the US generate 15% more patents per capita than homogeneous ones, reflecting the innovation benefits of diverse perspectives.',
        example: 'Australia\'s multicultural policy, in place since the 1970s, has transformed cities like Sydney and Melbourne into globally recognised centres of cuisine, art, and entrepreneurship, attracting international talent and investment.',
        sentences: {
          intro: 'Multiculturalism is a powerful driver of innovation and economic dynamism, as diverse societies benefit from a wider range of ideas, skills, and perspectives.',
          body: 'Australia\'s decades-long commitment to multiculturalism has produced vibrant, globally competitive cities that attract talent and investment precisely because of their cultural richness.',
          conclusion: 'Far from being a weakness, cultural diversity is an economic and creative asset that enriches every aspect of society.'
        }
      },
      {
        point: 'Multicultural policies protect minority rights and promote social justice',
        evidence: 'The Multiculturalism Policy Index, developed by Queen\'s University, shows that countries with stronger multicultural policies have 20% lower rates of discrimination-related social conflict.',
        example: 'Canada\'s Multiculturalism Act of 1988, which legally protects the cultural heritage of all Canadians, has contributed to one of the highest levels of immigrant satisfaction in the world, with 85% of newcomers reporting a strong sense of belonging.',
        sentences: {
          intro: 'Multiculturalism provides a framework for protecting the rights and cultural identities of minority groups within diverse societies.',
          body: 'Canada\'s legislative commitment to multiculturalism has created a society where immigrants report among the highest levels of belonging and satisfaction in the developed world.',
          conclusion: 'A society that celebrates diversity while protecting minority rights creates the conditions for genuine social harmony and mutual respect.'
        }
      },
      {
        point: 'Cultural exchange promotes understanding and reduces prejudice between communities',
        evidence: 'Social psychology research on the "contact hypothesis" consistently shows that meaningful interaction between cultural groups reduces prejudice by an average of 21%.',
        example: 'Australia\'s Harmony Day celebrations, held annually in schools and communities across the country, promote intercultural understanding and have been associated with improved attitudes towards cultural diversity among young Australians.',
        sentences: {
          intro: 'Multiculturalism facilitates the cultural exchange and interpersonal contact that are essential for reducing prejudice and building understanding between communities.',
          body: 'Research on intergroup contact confirms that meaningful interactions between people of different cultural backgrounds are among the most effective means of reducing prejudice and stereotyping.',
          conclusion: 'Policies that promote multicultural engagement do not divide societies but rather build the bridges of understanding that hold diverse communities together.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Excessive multiculturalism can lead to cultural fragmentation and parallel societies',
        evidence: 'Former German Chancellor Angela Merkel\'s declaration in 2010 that multiculturalism had "utterly failed" reflected growing concerns across Europe about the emergence of culturally isolated communities with limited integration.',
        example: 'In parts of northern England and suburban Paris, immigrant communities have developed largely self-contained enclaves with limited interaction with the broader population, contributing to social tensions and reduced cohesion.',
        sentences: {
          intro: 'Critics of multiculturalism argue that it can lead to the formation of parallel societies in which communities live side by side without meaningful integration or shared values.',
          body: 'The emergence of socially isolated immigrant enclaves in several European cities suggests that without active integration measures, multicultural policies alone cannot guarantee social cohesion.',
          conclusion: 'Multiculturalism must be complemented by robust integration policies that promote shared civic values and meaningful interaction between all communities.'
        }
      },
      {
        point: 'A shared national identity and common values are necessary for social cohesion',
        evidence: 'Political scientist Robert Putnam\'s research found that in the short term, increased diversity can reduce social trust and civic engagement within communities.',
        example: 'Singapore\'s model of managed multiculturalism, which combines respect for ethnic diversity with a strong emphasis on shared national identity and civic values, has maintained social harmony despite its highly diverse population.',
        sentences: {
          intro: 'Proponents of integration argue that a degree of assimilation around shared civic values is necessary to maintain the social trust and cohesion that hold diverse societies together.',
          body: 'Singapore\'s success in combining cultural diversity with a strong shared national identity demonstrates that multiculturalism and civic integration are not mutually exclusive.',
          conclusion: 'The most successful multicultural societies are those that celebrate diversity while nurturing a shared sense of belonging and civic responsibility.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, multiculturalism and integration are not opposing forces but complementary elements of a successful diverse society. The ideal approach combines respect for cultural diversity with proactive integration policies that build shared civic values, mutual understanding, and a sense of common belonging.',
    keyVocabulary: ['multiculturalism', 'cultural assimilation', 'social cohesion', 'parallel societies', 'civic integration', 'cultural identity', 'intergroup contact', 'national identity']
  },

  {
    id: 'soc05',
    category: 'Society',
    question: 'The gap between the rich and the poor is widening in many countries. What are the causes of this trend, and what measures can be taken to address it?',
    keywords: ['wealth inequality', 'income gap', 'poverty', 'economic redistribution'],
    forPoints: [
      {
        point: 'Progressive taxation and wealth redistribution can reduce economic inequality',
        evidence: 'The OECD reports that progressive taxation and social transfers reduce income inequality by an average of 35% in member countries, with the most redistributive systems achieving reductions of over 50%.',
        example: 'The Nordic countries, particularly Denmark and Finland, maintain some of the world\'s lowest levels of income inequality through highly progressive tax systems combined with universal public services.',
        sentences: {
          intro: 'The most direct mechanism for reducing the wealth gap is a progressive tax system that ensures the wealthiest members of society contribute proportionally more to public services.',
          body: 'The success of Nordic countries in achieving some of the world\'s lowest inequality levels through progressive taxation demonstrates that deliberate redistribution policies can produce more equitable societies.',
          conclusion: 'Governments committed to reducing inequality must be willing to implement and enforce progressive tax policies that fund universal services and social safety nets.'
        }
      },
      {
        point: 'Investment in quality public education provides equal opportunities for social mobility',
        evidence: 'A World Bank study found that each additional year of quality education increases an individual\'s lifetime earnings by 8-13%, with the greatest gains observed among disadvantaged populations.',
        example: 'Finland\'s education system, which provides equal funding to all schools regardless of location and eliminates tuition fees through to university, has produced one of the most socially mobile societies in the world.',
        sentences: {
          intro: 'Quality public education is the most powerful long-term tool for reducing inequality, as it provides disadvantaged individuals with the skills and qualifications needed for economic advancement.',
          body: 'Finland\'s commitment to equally funded, tuition-free education from primary school through university has created a system where a child\'s future prospects are determined by talent and effort rather than parental wealth.',
          conclusion: 'Investing in education is investing in a more equal future, as it breaks the cycle of intergenerational poverty and opens pathways to prosperity for all.'
        }
      },
      {
        point: 'Minimum wage increases and labour protections lift the incomes of the lowest-paid workers',
        evidence: 'Research by the Economic Policy Institute found that a 10% increase in the minimum wage reduces poverty rates among affected workers by 2-4% without significant employment losses.',
        example: 'Australia\'s relatively high minimum wage of over $23 per hour, combined with strong union representation and penalty rates, has contributed to lower rates of working poverty compared to countries like the United States and the United Kingdom.',
        sentences: {
          intro: 'Raising minimum wages and strengthening labour protections directly addresses inequality by ensuring that the lowest-paid workers earn a living wage.',
          body: 'Australia\'s experience with one of the world\'s highest minimum wages demonstrates that decent pay floors can coexist with low unemployment and strong economic performance.',
          conclusion: 'A fair minimum wage is a cornerstone of any serious effort to reduce the gap between the rich and the poor.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Excessive redistribution can discourage investment, innovation, and economic growth',
        evidence: 'Supply-side economists argue that high marginal tax rates reduce the incentive for entrepreneurship and investment, with some studies suggesting that tax rates above 60% can lead to capital flight.',
        example: 'France\'s short-lived 75% top tax rate, introduced in 2012, prompted several high-profile business figures and entrepreneurs to relocate to neighbouring countries, leading to the policy\'s withdrawal within two years.',
        sentences: {
          intro: 'Opponents of aggressive redistribution warn that excessively high taxes can stifle the entrepreneurship and investment that drive economic growth and job creation.',
          body: 'France\'s experience with its 75% supertax illustrates the risk that punitive top tax rates can trigger capital flight and brain drain, ultimately reducing the tax revenue available for public services.',
          conclusion: 'Tax policy must strike a balance between funding public services and maintaining the incentives that encourage productive economic activity.'
        }
      },
      {
        point: 'Some degree of inequality is an inevitable and necessary feature of market economies',
        evidence: 'Economic theory suggests that income differences provide essential incentives for education, skill development, and hard work, and that complete equality of outcome would require authoritarian intervention.',
        example: 'The economic stagnation experienced by the Soviet Union and other centrally planned economies demonstrated that eliminating income differences can undermine motivation and lead to systemic inefficiency.',
        sentences: {
          intro: 'Some economists argue that a degree of income inequality is both inevitable and functional, providing the incentives that drive individual effort and economic dynamism.',
          body: 'The historical failure of communist economies to maintain both equality and prosperity suggests that some income differentiation is necessary to motivate productivity and innovation.',
          conclusion: 'The goal should not be to eliminate inequality entirely but to ensure that all citizens have genuine equality of opportunity and a dignified standard of living.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while some degree of income variation is inherent in market economies, the extreme inequality observed in many countries today is neither inevitable nor beneficial. A combination of progressive taxation, investment in education, fair wages, and strong social safety nets can reduce the gap while preserving the incentives that drive economic growth.',
    keyVocabulary: ['income inequality', 'progressive taxation', 'wealth redistribution', 'social mobility', 'minimum wage', 'poverty reduction', 'intergenerational disadvantage', 'economic opportunity']
  },

  {
    id: 'soc06',
    category: 'Society',
    question: 'Some people argue that social media has made people more isolated and lonely. To what extent do you agree or disagree?',
    keywords: ['social media', 'loneliness', 'digital communication', 'mental health'],
    forPoints: [
      {
        point: 'Social media replaces meaningful face-to-face interaction with superficial digital connections',
        evidence: 'A landmark study published in the American Journal of Preventive Medicine found that individuals who spend more than two hours daily on social media are twice as likely to report feelings of social isolation.',
        example: 'Research by Jean Twenge at San Diego State University linked the rise of smartphone and social media use among American teenagers to a 33% increase in reported loneliness and a 50% rise in clinical depression between 2012 and 2017.',
        sentences: {
          intro: 'The most concerning aspect of social media is its tendency to replace genuine human connection with shallow digital interactions that fail to meet our fundamental social needs.',
          body: 'The striking correlation between increased social media use and rising rates of loneliness and depression among young people suggests that digital connections are a poor substitute for face-to-face relationships.',
          conclusion: 'Unless individuals actively manage their social media use, it risks becoming a source of isolation rather than connection.'
        }
      },
      {
        point: 'Social comparison on platforms like Instagram damages self-esteem and well-being',
        evidence: 'Internal research by Meta, leaked in 2021, revealed that Instagram made body image issues worse for 32% of teenage girls, with users frequently comparing themselves to idealised images.',
        example: 'The Australian eSafety Commissioner reported that 44% of Australian teenagers felt pressure to look a certain way because of social media, contributing to anxiety and social withdrawal.',
        sentences: {
          intro: 'Social media platforms encourage constant social comparison, exposing users to curated versions of others\' lives that can erode self-esteem and increase feelings of inadequacy.',
          body: 'Meta\'s own internal research confirming that Instagram worsens body image issues for a third of teenage girls reveals the extent to which social comparison on these platforms damages mental health.',
          conclusion: 'The design of social media platforms, which rewards attention-grabbing content over authentic representation, makes them inherently hostile to genuine self-esteem and well-being.'
        }
      },
      {
        point: 'Excessive social media use reduces time available for real-world social activities',
        evidence: 'The Australian Communications and Media Authority reports that Australians aged 18-24 spend an average of 3.5 hours per day on social media, time that could otherwise be devoted to physical social activities.',
        example: 'Community organisations across Australia have reported declining participation in local sports clubs, volunteer groups, and social events, a trend that correlates with the increasing amount of time young people spend online.',
        sentences: {
          intro: 'Every hour spent scrolling through social media feeds is an hour not spent engaging in the face-to-face activities that build genuine community bonds.',
          body: 'The decline in participation in community organisations and social activities observed across Australia suggests that social media is not complementing but displacing real-world social engagement.',
          conclusion: 'Reclaiming time from social media for in-person interaction is essential for reversing the loneliness epidemic affecting many developed societies.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Social media enables connection for geographically isolated or marginalised individuals',
        evidence: 'Research by the Pew Research Centre found that 67% of social media users report that platforms help them stay connected with friends and family who live far away.',
        example: 'For LGBTQ+ youth in rural areas of Australia, online communities provide vital social support and a sense of belonging that may not be available in their immediate physical environment.',
        sentences: {
          intro: 'For many individuals, particularly those in geographically remote areas or marginalised communities, social media provides essential connections that would otherwise be impossible.',
          body: 'Online communities offer lifelines for isolated individuals, including rural residents, people with disabilities, and LGBTQ+ youth, who may lack access to supportive social networks in their physical environments.',
          conclusion: 'Rather than condemning social media entirely, we should recognise its power to connect people who would otherwise face genuine social isolation.'
        }
      },
      {
        point: 'Loneliness is driven by broader social changes, not solely by social media',
        evidence: 'Sociological research indicates that loneliness has been increasing since the 1980s, well before the advent of social media, driven by factors such as urban sprawl, declining community institutions, and longer working hours.',
        example: 'In Japan, the phenomenon of "hikikomori," in which individuals withdraw from society entirely, predates social media and reflects deeper cultural and economic pressures.',
        sentences: {
          intro: 'Attributing the loneliness epidemic primarily to social media oversimplifies a complex issue driven by decades of social and economic change.',
          body: 'The fact that loneliness rates were already rising before social media existed suggests that deeper structural factors, including urban design, work culture, and community decline, are the primary drivers.',
          conclusion: 'Addressing loneliness requires tackling its root causes in social structure and community design, rather than simply blaming technology.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while social media can exacerbate loneliness through superficial interaction, social comparison, and time displacement, it also provides valuable connections for isolated individuals. The key lies in promoting mindful, intentional use of social media while investing in the physical community spaces and social infrastructure that foster genuine human connection.',
    keyVocabulary: ['social isolation', 'digital connection', 'social comparison', 'screen time', 'community engagement', 'mental well-being', 'online communities', 'face-to-face interaction']
  },

  {
    id: 'soc07',
    category: 'Society',
    question: 'What are the main causes of youth crime, and what measures can be taken to prevent young people from engaging in criminal behaviour?',
    keywords: ['youth crime', 'juvenile delinquency', 'prevention', 'social disadvantage'],
    forPoints: [
      {
        point: 'Poverty and social disadvantage are the primary drivers of youth crime',
        evidence: 'The Australian Institute of Health and Welfare reports that young people from the lowest socioeconomic quartile are four times more likely to have contact with the juvenile justice system than those from the highest quartile.',
        example: 'In the Northern Territory, Indigenous youth, who experience disproportionately high rates of poverty and disadvantage, represent over 95% of the juvenile detention population despite comprising only 44% of the youth population.',
        sentences: {
          intro: 'The root causes of youth crime are overwhelmingly linked to poverty, social disadvantage, and the lack of opportunities available to young people in marginalised communities.',
          body: 'The dramatic over-representation of disadvantaged youth in the criminal justice system across Australia confirms that addressing inequality is essential for reducing juvenile offending.',
          conclusion: 'Investing in education, employment opportunities, and social services for disadvantaged communities is the most effective long-term strategy for preventing youth crime.'
        }
      },
      {
        point: 'Early intervention programmes divert at-risk youth from criminal pathways',
        evidence: 'A meta-analysis in the Journal of Criminal Justice found that early intervention programmes targeting at-risk youth reduce reoffending rates by 25-30% compared to traditional punitive approaches.',
        example: 'The "Pathways to Prevention" programme in disadvantaged areas of Brisbane provides family support, mentoring, and educational assistance, and has been shown to reduce behavioural problems by 40% among participating children.',
        sentences: {
          intro: 'Early intervention programmes that address the social and family factors contributing to youth offending offer a far more effective alternative to incarceration.',
          body: 'Brisbane\'s Pathways to Prevention programme demonstrates that providing targeted support to at-risk families and children can significantly reduce the likelihood of future criminal behaviour.',
          conclusion: 'Governments must shift resources from reactive punishment towards proactive prevention if they are serious about reducing youth crime.'
        }
      },
      {
        point: 'Community-based restorative justice programmes are more effective than imprisonment for young offenders',
        evidence: 'The Australian Institute of Criminology found that restorative justice conferences for juvenile offenders resulted in 15-20% lower reoffending rates compared to court-based proceedings.',
        example: 'New Zealand\'s youth justice system, which relies heavily on family group conferences rather than formal court processes, has successfully reduced youth incarceration rates by over 60% since its introduction in 1989.',
        sentences: {
          intro: 'Restorative justice approaches, which focus on repairing harm and reintegrating offenders into the community, produce better outcomes than punitive measures for young people.',
          body: 'New Zealand\'s pioneering use of family group conferences has dramatically reduced youth imprisonment while achieving lower reoffending rates, offering a model for other nations.',
          conclusion: 'A justice system that prioritises rehabilitation and community responsibility over punishment is both more humane and more effective in reducing youth crime.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Lenient approaches to youth crime may fail to deter offending and undermine public safety',
        evidence: 'Surveys of crime victims consistently show that a majority support stronger consequences for juvenile offenders, with 62% of Australians believing that youth sentences are too lenient.',
        example: 'In parts of Queensland, community frustration with perceived leniency towards repeat juvenile offenders has led to calls for tougher sentencing, particularly for violent crimes and vehicle theft.',
        sentences: {
          intro: 'Critics of rehabilitative approaches argue that insufficiently severe consequences for youth crime fail to deter offending and erode public confidence in the justice system.',
          body: 'The widespread community frustration with perceived leniency towards juvenile offenders reflects a genuine concern that rehabilitation-focused policies may prioritise offender welfare over victim safety.',
          conclusion: 'Any youth justice system must balance rehabilitative goals with appropriate consequences that hold young offenders accountable and maintain public safety.'
        }
      },
      {
        point: 'Some young offenders pose genuine risks to community safety that require secure detention',
        evidence: 'Data from the Australian Institute of Criminology indicates that approximately 5-10% of juvenile offenders are responsible for over 50% of youth crime, suggesting that a small cohort of persistent offenders requires more intensive intervention.',
        example: 'In cases involving serious violent offences, community-based programmes may be inadequate, as the immediate safety of victims and the public must take priority over rehabilitation considerations.',
        sentences: {
          intro: 'While community-based approaches work for most young offenders, a small proportion of serious and persistent offenders require secure detention to protect the community.',
          body: 'The concentration of youth crime among a small group of chronic offenders suggests that a differentiated approach is needed, combining community programmes for the majority with secure intervention for the most dangerous individuals.',
          conclusion: 'Effective youth justice requires a continuum of responses, from community-based prevention to secure detention, tailored to the severity and persistence of offending behaviour.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, preventing youth crime requires addressing its root causes in poverty and disadvantage through early intervention, education, and community support. While rehabilitative and restorative approaches should be the default for most young offenders, the justice system must also retain the capacity to protect the community from serious and persistent juvenile offenders.',
    keyVocabulary: ['juvenile justice', 'early intervention', 'restorative justice', 'social disadvantage', 'recidivism', 'youth detention', 'at-risk youth', 'community safety']
  },

  {
    id: 'soc08',
    category: 'Society',
    question: 'Homelessness is a growing problem in many developed countries. What are the main causes and what solutions should governments implement?',
    keywords: ['homelessness', 'housing affordability', 'social services', 'rough sleeping'],
    forPoints: [
      {
        point: 'The "Housing First" model provides immediate stable housing as a foundation for recovery',
        evidence: 'A comprehensive evaluation by the Canadian government found that Housing First programmes reduced homelessness by 73% among participants and generated $1.54 in savings for every dollar invested.',
        example: 'Finland\'s national Housing First strategy has reduced long-term homelessness by 35% since 2008 by providing permanent housing with wraparound support services, making it the only EU country where homelessness is decreasing.',
        sentences: {
          intro: 'The Housing First approach, which provides stable accommodation as the immediate priority rather than a reward for compliance, has emerged as the most evidence-based solution to homelessness.',
          body: 'Finland\'s remarkable success in reducing homelessness through its Housing First strategy demonstrates that providing permanent housing with integrated support services is both humane and cost-effective.',
          conclusion: 'Governments should adopt Housing First as the cornerstone of their homelessness strategies, recognising that stable housing is the essential foundation for addressing all other challenges.'
        }
      },
      {
        point: 'Increasing the supply of affordable and social housing addresses the structural causes of homelessness',
        evidence: 'The Australian Housing and Urban Research Institute estimates that Australia has a shortfall of over 640,000 affordable rental properties, with waiting lists for social housing exceeding ten years in some states.',
        example: 'Vienna\'s social housing programme, which provides affordable accommodation to over 60% of the city\'s residents, has virtually eliminated rough sleeping and maintained one of Europe\'s lowest homelessness rates.',
        sentences: {
          intro: 'At its core, homelessness is a housing supply problem that can only be solved through significant investment in affordable and social housing.',
          body: 'Australia\'s chronic shortage of over 640,000 affordable rental properties demonstrates that homelessness will continue to rise unless governments commit to dramatic increases in housing construction.',
          conclusion: 'Without addressing the fundamental shortfall in affordable housing, all other homelessness interventions will amount to treating symptoms rather than causes.'
        }
      },
      {
        point: 'Integrated support services addressing mental health, addiction, and employment are essential',
        evidence: 'Research by the Australian Institute of Health and Welfare found that 35% of people experiencing homelessness also have a mental health condition, and 22% have substance use disorders.',
        example: 'The "Common Ground" model in Adelaide combines affordable housing with on-site mental health counselling, addiction services, and employment assistance, achieving a tenancy retention rate of over 90%.',
        sentences: {
          intro: 'Homelessness is rarely caused by housing alone; it is typically the result of intersecting challenges including mental illness, addiction, family breakdown, and unemployment.',
          body: 'The success of integrated models like Common Ground in Adelaide, which co-locate housing with health and employment services, confirms that addressing multiple needs simultaneously produces the best outcomes.',
          conclusion: 'Effective homelessness strategies must provide holistic support that addresses the complex web of factors that cause and perpetuate homelessness.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Housing First is expensive and may divert resources from other pressing social needs',
        evidence: 'The upfront capital cost of building social housing units averages $300,000-$500,000 per dwelling in Australian cities, requiring billions of dollars in government investment.',
        example: 'In some US cities, the cost of providing permanent supportive housing has prompted debate about whether the funds would be better spent on prevention, rental assistance, or temporary shelters.',
        sentences: {
          intro: 'Critics of Housing First argue that the enormous upfront costs of building permanent housing may be unsustainable, particularly in cities with high land and construction costs.',
          body: 'The debate about whether funds should be directed to permanent housing or prevention and temporary support reflects the difficult trade-offs governments face with limited budgets.',
          conclusion: 'While Housing First produces long-term savings, governments must develop realistic funding strategies that do not compromise other essential social services.'
        }
      },
      {
        point: 'Individual factors such as personal choices and behavioural issues contribute to chronic homelessness',
        evidence: 'Longitudinal research suggests that while structural factors explain the overall level of homelessness, individual vulnerabilities such as untreated mental illness and addiction determine who within the at-risk population becomes homeless.',
        example: 'Some individuals who have been offered housing through support programmes have been unable to maintain tenancies due to ongoing substance abuse, behavioural challenges, or resistance to support services.',
        sentences: {
          intro: 'While structural factors are the primary drivers of homelessness, individual challenges including mental illness and addiction can make it difficult for some people to maintain stable housing.',
          body: 'The reality that some individuals struggle to sustain tenancies even when housing is provided underscores the need for long-term, patient support that addresses deep-seated personal challenges.',
          conclusion: 'Effective homelessness solutions must combine systemic reform with individualised support that is flexible, non-judgemental, and sustained over the long term.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, homelessness is primarily a structural problem caused by insufficient affordable housing, but it is compounded by individual vulnerabilities including mental illness, addiction, and family breakdown. An effective response requires both massive investment in housing supply and comprehensive support services that address the multiple needs of homeless individuals.',
    keyVocabulary: ['Housing First', 'affordable housing', 'social housing', 'rough sleeping', 'wraparound services', 'tenancy retention', 'housing supply', 'integrated support']
  },

  {
    id: 'soc09',
    category: 'Society',
    question: 'Some people think that community service should be made compulsory for all young people. Do you agree or disagree?',
    keywords: ['mandatory volunteering', 'community service', 'civic duty', 'youth development'],
    forPoints: [
      {
        point: 'Compulsory community service builds empathy, responsibility, and civic engagement',
        evidence: 'Research from the Corporation for National and Community Service in the US found that young people who volunteer are 27% more likely to be employed and 16% more likely to vote as adults.',
        example: 'Germany\'s former compulsory national service programme, which included a civilian community service option, was widely credited with developing a strong culture of volunteerism and social responsibility among German youth.',
        sentences: {
          intro: 'Mandatory community service instils in young people the values of empathy, responsibility, and active citizenship that are essential for a healthy democratic society.',
          body: 'The long-term benefits of youth volunteering, including higher employment rates and greater civic participation, suggest that compulsory community service is an investment in both individual development and social capital.',
          conclusion: 'By requiring young people to contribute to their communities, governments can cultivate a generation of engaged, empathetic, and socially responsible citizens.'
        }
      },
      {
        point: 'Community service exposes young people to diverse experiences and social realities',
        evidence: 'A study by the National Youth Leadership Council found that service-learning participants demonstrated 44% greater understanding of social issues and 31% improved cultural competence.',
        example: 'In the Australian Capital Territory, many secondary schools require students to complete community service hours, with participants reporting greater awareness of issues such as homelessness, disability, and aged care.',
        sentences: {
          intro: 'Compulsory community service broadens young people\'s horizons by exposing them to social realities and communities beyond their usual experience.',
          body: 'Students who participate in structured community service develop significantly greater understanding of social issues and cultural diversity, preparing them to be informed and compassionate members of society.',
          conclusion: 'In an increasingly divided world, community service provides a powerful mechanism for building the cross-community understanding that holds diverse societies together.'
        }
      },
      {
        point: 'Mandatory service addresses critical gaps in community services and supports non-profit organisations',
        evidence: 'Volunteering Australia estimates that volunteer labour contributes over $290 billion annually to the Australian economy, yet volunteer participation rates have declined by 12% over the past decade.',
        example: 'Many charities and community organisations, including Meals on Wheels and the State Emergency Service, rely heavily on volunteers and have reported increasing difficulty recruiting sufficient numbers.',
        sentences: {
          intro: 'With volunteer participation declining across developed nations, compulsory youth service could help address critical shortfalls in the community sector.',
          body: 'Organisations like Meals on Wheels and the SES, which provide essential services to vulnerable Australians, are facing a volunteer crisis that mandatory youth participation could help to alleviate.',
          conclusion: 'Compulsory community service would not only benefit young people\'s development but also provide a vital workforce for the community organisations that support our most vulnerable citizens.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Compulsory volunteering is a contradiction in terms that undermines the spirit of genuine service',
        evidence: 'Psychological research on self-determination theory suggests that extrinsically motivated activities produce lower levels of engagement, satisfaction, and sustained commitment than intrinsically motivated ones.',
        example: 'In countries where compulsory service has been introduced, such as some US states requiring community service for high school graduation, students frequently report viewing the requirement as a chore rather than a meaningful experience.',
        sentences: {
          intro: 'The fundamental paradox of mandatory volunteering is that forcing service removes the very element of choice that makes volunteering meaningful and fulfilling.',
          body: 'When community service becomes an obligation rather than a choice, research suggests that participants are less engaged, less satisfied, and less likely to continue volunteering after the requirement ends.',
          conclusion: 'Rather than mandating service, governments should create appealing opportunities and incentives that inspire young people to volunteer willingly and with genuine commitment.'
        }
      },
      {
        point: 'Mandatory service places an unfair burden on young people, particularly those from disadvantaged backgrounds',
        evidence: 'Critics note that compulsory service programmes often fail to account for the time constraints of young people who work part-time to support their families or who have caring responsibilities.',
        example: 'In Australia, many young people in low-income families juggle part-time employment, study, and family obligations, making additional mandatory service requirements particularly burdensome.',
        sentences: {
          intro: 'Mandatory community service risks disadvantaging the very young people it seeks to help, by imposing additional time demands on those already struggling with competing responsibilities.',
          body: 'Young people from disadvantaged backgrounds, who often balance work, study, and family obligations, may be disproportionately burdened by compulsory service requirements.',
          conclusion: 'Any community service programme must be designed with flexibility and equity in mind, ensuring that it does not penalise those who can least afford to give up their time.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while community service offers significant benefits for youth development and community well-being, making it compulsory risks undermining its voluntary spirit and disproportionately burdening disadvantaged young people. A more effective approach may be to integrate service-learning into education, provide diverse and engaging opportunities, and recognise and reward voluntary participation.',
    keyVocabulary: ['civic engagement', 'community service', 'volunteerism', 'service-learning', 'social responsibility', 'youth development', 'intrinsic motivation', 'civic duty']
  },

  {
    id: 'soc10',
    category: 'Society',
    question: 'Modern consumer culture encourages people to buy and discard products quickly. What are the effects of this "throwaway culture" and what can be done to address it?',
    keywords: ['throwaway culture', 'consumerism', 'waste', 'sustainability'],
    forPoints: [
      {
        point: 'Implementing circular economy policies reduces waste and conserves resources',
        evidence: 'The Ellen MacArthur Foundation estimates that transitioning to a circular economy could generate $4.5 trillion in economic value globally by 2030 while reducing waste by 50%.',
        example: 'The European Union\'s Circular Economy Action Plan mandates that all packaging be reusable or recyclable by 2030 and has introduced "right to repair" legislation requiring manufacturers to make products easier to fix.',
        sentences: {
          intro: 'The most comprehensive solution to throwaway culture is the transition to a circular economy, where products are designed for durability, repair, and recycling rather than disposal.',
          body: 'The EU\'s ambitious circular economy legislation demonstrates that regulatory frameworks can fundamentally reshape production and consumption patterns, reducing waste while creating economic value.',
          conclusion: 'Governments must lead the transition to a circular economy through regulation, incentives, and public procurement policies that prioritise sustainability over disposability.'
        }
      },
      {
        point: 'Extended producer responsibility makes manufacturers accountable for the full lifecycle of their products',
        evidence: 'Countries with comprehensive EPR schemes have achieved recycling rates 20-30% higher than those without, as manufacturers are financially incentivised to design products that are easier to recycle.',
        example: 'South Korea\'s EPR system requires electronics manufacturers to take back and recycle their products, achieving a remarkable e-waste recycling rate of over 60%, compared to the global average of approximately 17%.',
        sentences: {
          intro: 'Extended producer responsibility shifts the cost of waste management from taxpayers to manufacturers, creating powerful incentives for sustainable product design.',
          body: 'South Korea\'s success in achieving one of the world\'s highest e-waste recycling rates through mandatory producer take-back programmes demonstrates the effectiveness of holding manufacturers accountable for their products\' end-of-life.',
          conclusion: 'By making producers responsible for the full lifecycle of their products, EPR policies fundamentally change the economic calculus of product design in favour of durability and recyclability.'
        }
      },
      {
        point: 'Consumer education and cultural change are essential for reducing wasteful consumption',
        evidence: 'Research from the University of Leeds found that consumers who received information about the environmental impact of their purchases reduced their consumption of single-use products by 28%.',
        example: 'Japan\'s "mottainai" cultural concept, which expresses regret at waste, underpins a national culture of careful resource use that has helped Japan achieve one of the highest recycling rates in the world.',
        sentences: {
          intro: 'Addressing throwaway culture ultimately requires a fundamental shift in consumer attitudes, from valuing novelty and convenience to prioritising quality, durability, and sustainability.',
          body: 'Japan\'s deeply embedded cultural aversion to waste demonstrates that societal values can be a more powerful driver of sustainable behaviour than regulation alone.',
          conclusion: 'Education campaigns that help consumers understand the environmental cost of their choices can catalyse the cultural change needed to move beyond throwaway consumerism.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Consumer spending drives economic growth and supports employment',
        evidence: 'Consumer expenditure accounts for approximately 60% of GDP in most developed economies, and any significant reduction in consumption could trigger economic contraction and job losses.',
        example: 'The fast fashion industry employs over 75 million people worldwide, primarily in developing countries, and a rapid shift away from disposable clothing could devastate these economies.',
        sentences: {
          intro: 'Opponents of anti-consumerism policies warn that discouraging consumption could undermine economic growth and employment, particularly in industries that depend on high-volume sales.',
          body: 'The millions of jobs in developing countries that depend on fast fashion and disposable goods production highlight the complex economic trade-offs involved in addressing throwaway culture.',
          conclusion: 'The transition away from disposable consumption must be managed carefully to avoid disproportionately harming workers and economies in the developing world.'
        }
      },
      {
        point: 'Personal freedom includes the right to make purchasing decisions without government interference',
        evidence: 'Surveys consistently show that consumers value choice and convenience highly, and restrictions on product availability or pricing may be perceived as government overreach.',
        example: 'Australia\'s single-use plastic bag bans initially faced significant consumer resistance, with complaints about inconvenience and government interference in everyday purchasing decisions.',
        sentences: {
          intro: 'Some argue that efforts to curb throwaway culture infringe on consumer freedom and the right to make personal purchasing decisions without government interference.',
          body: 'The initial consumer backlash against plastic bag bans in Australia illustrates the tension between environmental goals and the public\'s attachment to convenience and choice.',
          conclusion: 'While sustainability is important, policies addressing throwaway culture must respect consumer autonomy and offer attractive alternatives rather than simply restricting choice.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, addressing throwaway culture requires a combination of circular economy policies, producer responsibility, and consumer education. While economic concerns and personal freedom must be considered, the environmental cost of unchecked consumerism makes action essential. The goal should be to create systems where sustainable choices are the easiest and most affordable options for consumers.',
    keyVocabulary: ['circular economy', 'throwaway culture', 'extended producer responsibility', 'sustainable consumption', 'planned obsolescence', 'recycling rate', 'consumer behaviour', 'environmental impact']
  },

  {
    id: 'soc11',
    category: 'Society',
    question: 'More and more people are moving from rural areas to cities. What are the effects of urbanisation, and how can governments manage this trend?',
    keywords: ['urbanisation', 'rural exodus', 'city planning', 'infrastructure'],
    forPoints: [
      {
        point: 'Urbanisation drives economic growth through agglomeration effects and productivity gains',
        evidence: 'World Bank research shows that a 1% increase in urbanisation is associated with a 2-3% increase in per capita income, as cities facilitate knowledge exchange, specialisation, and innovation.',
        example: 'China\'s rapid urbanisation over the past four decades, during which 500 million people moved from rural to urban areas, was a primary driver of the country\'s unprecedented economic growth.',
        sentences: {
          intro: 'Urbanisation is one of the most powerful engines of economic development, as cities concentrate talent, capital, and infrastructure in ways that dramatically boost productivity.',
          body: 'China\'s transformation from a predominantly rural to a majority-urban society has been accompanied by the greatest reduction in poverty in human history, illustrating the economic potential of well-managed urbanisation.',
          conclusion: 'Rather than resisting urbanisation, governments should harness its economic potential through strategic planning and investment in sustainable urban infrastructure.'
        }
      },
      {
        point: 'Smart urban planning can make cities sustainable and liveable',
        evidence: 'The C40 Cities Climate Leadership Group reports that well-planned dense cities produce 50% fewer carbon emissions per capita than sprawling suburban developments.',
        example: 'Copenhagen\'s urban planning model, which prioritises cycling infrastructure, public transport, and green spaces, has made it one of the world\'s most liveable and sustainable cities while accommodating significant population growth.',
        sentences: {
          intro: 'With thoughtful urban planning, cities can accommodate growing populations while becoming more sustainable, equitable, and liveable.',
          body: 'Copenhagen\'s investment in cycling infrastructure, public transport, and green spaces demonstrates that urban density and quality of life are not mutually exclusive.',
          conclusion: 'The challenge of urbanisation is not the movement of people to cities but the quality of planning and investment that determines whether cities serve their residents well.'
        }
      },
      {
        point: 'Investment in regional centres can reduce pressure on major cities and revitalise rural areas',
        evidence: 'Research by the Regional Australia Institute found that regional centres with populations of 50,000 to 100,000 offer 85% of the amenities of major cities at significantly lower housing costs.',
        example: 'Australia\'s decentralisation efforts, including the relocation of government agencies to regional centres like Armidale and Geelong, aim to distribute economic opportunity more equitably across the country.',
        sentences: {
          intro: 'Investing in regional centres offers a balanced approach to urbanisation that reduces congestion in major cities while revitalising regional communities.',
          body: 'Australia\'s emerging policy of relocating government agencies to regional centres demonstrates that decentralisation can bring jobs, services, and economic vitality to areas outside the capital cities.',
          conclusion: 'A national strategy that strengthens both major cities and regional centres creates a more resilient and equitable distribution of opportunity across the entire country.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Rapid urbanisation strains infrastructure and creates overcrowded, unliveable conditions',
        evidence: 'The UN estimates that one billion people currently live in urban slums or informal settlements, where access to clean water, sanitation, and healthcare is severely limited.',
        example: 'In Mumbai and Lagos, rapid urbanisation has outpaced infrastructure development, creating sprawling informal settlements where millions live without adequate water, sewage, or transport services.',
        sentences: {
          intro: 'When urbanisation outpaces infrastructure development, the result is overcrowded cities with inadequate housing, transport, and public services.',
          body: 'The billions of people living in urban slums worldwide are a stark reminder that urbanisation without adequate planning and investment creates conditions of poverty and environmental degradation.',
          conclusion: 'Governments must ensure that urban infrastructure development keeps pace with population growth to prevent the formation of new slums and the degradation of urban living standards.'
        }
      },
      {
        point: 'Rural depopulation leads to the decline of agricultural communities and cultural traditions',
        evidence: 'In Australia, rural and remote communities have experienced population declines of up to 20% over the past two decades, leading to the closure of schools, hospitals, and local businesses.',
        example: 'Many small towns in Australia\'s wheat belt and pastoral regions have lost essential services as young people move to cities, threatening the viability of communities that have existed for over a century.',
        sentences: {
          intro: 'The flip side of urbanisation is the depopulation of rural areas, which threatens agricultural communities, cultural traditions, and the social fabric of regional life.',
          body: 'The closure of schools, hospitals, and businesses in Australia\'s rural towns illustrates the devastating spiral of decline that rural communities face as young people leave for urban opportunities.',
          conclusion: 'Governments must invest in rural infrastructure, services, and economic opportunities to ensure that urbanisation does not come at the cost of viable regional communities.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, urbanisation is an inevitable global trend that offers significant economic benefits but also creates serious challenges for both cities and rural areas. Effective management requires investment in sustainable urban planning, infrastructure development, and regional decentralisation strategies that distribute opportunity more equitably across the nation.',
    keyVocabulary: ['urbanisation', 'urban planning', 'agglomeration', 'decentralisation', 'regional development', 'infrastructure strain', 'rural depopulation', 'sustainable cities']
  },

  {
    id: 'soc12',
    category: 'Society',
    question: 'Globalisation threatens traditional cultures and local identities. Should governments take measures to preserve cultural heritage, or is cultural change an inevitable and positive process?',
    keywords: ['cultural preservation', 'globalisation', 'cultural heritage', 'cultural homogenisation'],
    forPoints: [
      {
        point: 'Governments have a responsibility to protect cultural heritage as a shared human asset',
        evidence: 'UNESCO estimates that one indigenous language disappears every two weeks, taking with it unique knowledge systems, oral histories, and cultural traditions that cannot be recovered.',
        example: 'Australia\'s Indigenous Language and Arts programme has invested over $20 million annually in documenting and revitalising Aboriginal and Torres Strait Islander languages, many of which are spoken by fewer than 50 people.',
        sentences: {
          intro: 'Cultural heritage represents the accumulated wisdom and creativity of generations, and governments have a moral obligation to protect it from the homogenising forces of globalisation.',
          body: 'The rapid extinction of indigenous languages worldwide represents an irreversible loss of human knowledge and cultural diversity that demands urgent government intervention.',
          conclusion: 'Preserving cultural heritage is not about resisting change but about ensuring that the diversity of human experience is protected for the enrichment of future generations.'
        }
      },
      {
        point: 'Cultural tourism generates economic benefits that incentivise heritage preservation',
        evidence: 'The World Travel and Tourism Council estimates that cultural tourism accounts for 40% of all global tourism revenue, generating approximately $1.4 trillion annually.',
        example: 'Japan\'s preservation of traditional temples, festivals, and cuisine has made it one of the world\'s top tourist destinations, with cultural tourism contributing over $30 billion to its economy annually.',
        sentences: {
          intro: 'Beyond its intrinsic value, cultural heritage preservation generates significant economic returns through tourism, creating a powerful financial incentive for protection.',
          body: 'Japan\'s success in marketing its preserved cultural traditions as a major tourist attraction demonstrates that heritage protection and economic development can be mutually reinforcing.',
          conclusion: 'Investing in cultural preservation is not merely a cost but an economic strategy that generates sustainable revenue and employment for local communities.'
        }
      },
      {
        point: 'Cultural diversity is essential for creativity, innovation, and resilience',
        evidence: 'Biological scientists draw parallels between cultural and biological diversity, arguing that monocultures are inherently more vulnerable and less adaptive than diverse ecosystems.',
        example: 'The distinct artistic traditions of countries like India, Nigeria, and Brazil have enriched global culture with unique musical, literary, and visual art forms that would be lost in a homogenised world.',
        sentences: {
          intro: 'Cultural diversity, like biological diversity, is a source of resilience and creativity that enriches the human experience and fosters innovation.',
          body: 'The unique artistic, musical, and literary traditions that emerge from distinct cultural contexts demonstrate that diversity is the wellspring of human creativity.',
          conclusion: 'A world of cultural homogeneity would be not only poorer aesthetically but also less resilient and less innovative than one that celebrates and sustains its diversity.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Cultural change is natural and attempts to freeze culture are artificial and counterproductive',
        evidence: 'Anthropologists point out that cultures have always evolved through contact, exchange, and adaptation, and that attempts to preserve cultures in a fixed state contradict their fundamentally dynamic nature.',
        example: 'The global spread of sushi, yoga, and hip-hop music illustrates how cultural exchange creates new hybrid forms that enrich rather than diminish global culture.',
        sentences: {
          intro: 'Critics of cultural preservation policies argue that cultures have always evolved through contact and exchange, and that attempting to freeze them in a fixed state is both artificial and futile.',
          body: 'The global popularity of cultural practices that originated in specific local contexts, such as yoga and sushi, demonstrates that cultural exchange creates vibrant new forms rather than destroying existing ones.',
          conclusion: 'Rather than attempting to preserve culture in amber, societies should embrace the dynamic process of cultural evolution that has always been a source of human creativity.'
        }
      },
      {
        point: 'Cultural preservation can be used to justify isolationism and resist beneficial modernisation',
        evidence: 'Political scientists note that appeals to cultural preservation have sometimes been used by authoritarian regimes to justify censorship, restrict individual freedom, and resist democratic values.',
        example: 'Some governments have invoked cultural preservation to restrict internet access, limit foreign media, and suppress artistic expression that challenges traditional norms, using heritage as a tool of control rather than empowerment.',
        sentences: {
          intro: 'A legitimate concern about cultural preservation is that it can be co-opted by governments seeking to justify isolationism, censorship, and resistance to progressive social change.',
          body: 'The use of cultural preservation rhetoric to justify censorship and the restriction of individual freedoms reveals the potential for heritage policies to become instruments of control rather than empowerment.',
          conclusion: 'Cultural preservation must be balanced with respect for individual rights, freedom of expression, and the recognition that healthy cultures are those that adapt and evolve.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, governments should actively protect endangered cultural heritage while recognising that culture is inherently dynamic and evolving. The goal should be to create conditions where traditional cultures can survive and adapt on their own terms, rather than being overwhelmed by commercial globalisation or frozen by well-intentioned but restrictive preservation policies.',
    keyVocabulary: ['cultural heritage', 'cultural homogenisation', 'indigenous languages', 'cultural tourism', 'cultural exchange', 'globalisation', 'cultural identity', 'intangible heritage']
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 3: GOVERNMENT & ECONOMY (gov01–gov10)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'gov01',
    category: 'Government & Economy',
    question: 'Some people believe that wealthy nations have a moral obligation to provide foreign aid to developing countries. Others argue that aid is often ineffective. Discuss both views.',
    keywords: ['foreign aid', 'international development', 'humanitarian assistance', 'aid effectiveness'],
    forPoints: [
      {
        point: 'Foreign aid saves lives by funding essential health and education programmes in developing nations',
        evidence: 'UNICEF estimates that foreign aid-funded vaccination programmes have saved over 150 million children\'s lives since 1990, contributing to a 50% reduction in child mortality worldwide.',
        example: 'Australia\'s aid programme in the Pacific Islands has funded malaria prevention initiatives that reduced malaria-related deaths in Papua New Guinea by over 40% between 2010 and 2020.',
        sentences: {
          intro: 'The most compelling justification for foreign aid is its demonstrated ability to save lives through funding for healthcare, clean water, and education in the world\'s poorest nations.',
          body: 'Australia\'s targeted health aid in the Pacific region has produced measurable reductions in preventable deaths, demonstrating that well-designed aid programmes deliver tangible results.',
          conclusion: 'In a world of extreme global inequality, wealthy nations have both a moral obligation and a practical interest in funding development programmes that reduce suffering and build human capital.'
        }
      },
      {
        point: 'Aid promotes global stability and reduces the conditions that lead to conflict and mass migration',
        evidence: 'The World Bank estimates that for every 1% of GDP growth in developing nations, forced displacement decreases by approximately 3%, highlighting the link between development and stability.',
        example: 'The Marshall Plan, which provided billions in US aid to rebuild post-war Europe, is widely credited with preventing the spread of communism and establishing the foundations for European prosperity and stability.',
        sentences: {
          intro: 'Foreign aid serves the strategic interests of donor nations by promoting stability in developing regions and reducing the conditions that drive conflict, terrorism, and mass migration.',
          body: 'The historical success of the Marshall Plan in rebuilding Europe demonstrates that generous aid can transform unstable regions into prosperous and peaceful partners.',
          conclusion: 'Investing in the development of poorer nations is ultimately an investment in global security and stability that benefits all countries.'
        }
      },
      {
        point: 'Aid builds trade relationships and opens markets that benefit donor economies',
        evidence: 'Research by the OECD Development Assistance Committee found that every dollar of aid generates approximately $1.60 in trade between donor and recipient countries within ten years.',
        example: 'Japan\'s strategic use of development aid in Southeast Asia has helped create prosperous trading partners, with Japanese exports to ASEAN nations now exceeding $100 billion annually.',
        sentences: {
          intro: 'Beyond its humanitarian purpose, foreign aid creates economic opportunities for donor nations by building infrastructure and markets in developing countries.',
          body: 'Japan\'s experience demonstrates that aid-funded infrastructure development in partner nations creates future trade relationships that generate significant economic returns for the donor.',
          conclusion: 'Foreign aid should be understood not as charity but as a strategic investment that creates mutual economic benefits for both donor and recipient nations.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Foreign aid often sustains corrupt governments and creates dependency rather than development',
        evidence: 'The economist Dambisa Moyo argues that over $1 trillion in aid to Africa has failed to generate sustained economic growth, in part because aid flows to governments with little accountability for results.',
        example: 'In several sub-Saharan African nations, aid has been diverted by corrupt officials, with Transparency International estimating that up to 30% of aid funding is lost to corruption in the most affected countries.',
        sentences: {
          intro: 'Critics of foreign aid argue that it frequently props up corrupt governments, creates dependency, and fails to generate the sustained economic growth needed to lift countries out of poverty.',
          body: 'The diversion of aid funds through corruption in some recipient nations suggests that without strong governance frameworks, aid can actually impede development by reducing accountability.',
          conclusion: 'Aid effectiveness depends critically on governance quality, and donors must be willing to condition their support on transparency, accountability, and genuine reform.'
        }
      },
      {
        point: 'Donor countries should prioritise their own domestic needs before funding international programmes',
        evidence: 'Public opinion surveys in several donor nations show that a majority of citizens believe their governments should address domestic issues such as homelessness and healthcare before increasing foreign aid.',
        example: 'In Australia, where the domestic homelessness rate continues to rise and public hospital waiting times remain lengthy, critics question the allocation of $4.7 billion annually to foreign aid.',
        sentences: {
          intro: 'Many taxpayers in donor nations argue that their governments should address pressing domestic needs before committing billions to international development programmes.',
          body: 'The juxtaposition of significant domestic challenges such as homelessness and healthcare waiting lists alongside generous foreign aid budgets understandably generates public frustration.',
          conclusion: 'While international responsibility is important, governments must strike a balance between addressing domestic needs and contributing to global development.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, foreign aid remains an essential tool for reducing global poverty and promoting stability, but its effectiveness depends on strong governance, accountability, and strategic targeting. Donor nations should pursue aid policies that combine humanitarian objectives with mutual economic benefits while maintaining a realistic balance with domestic priorities.',
    keyVocabulary: ['foreign aid', 'development assistance', 'aid effectiveness', 'humanitarian intervention', 'aid dependency', 'governance accountability', 'donor-recipient relations', 'capacity building']
  },

  {
    id: 'gov02',
    category: 'Government & Economy',
    question: 'Some economists advocate for a flat tax rate where everyone pays the same percentage, while others support progressive taxation. Which system do you believe is fairer?',
    keywords: ['flat tax', 'progressive taxation', 'income tax', 'fiscal policy'],
    forPoints: [
      {
        point: 'Progressive taxation is fairer because it requires those with greater ability to pay to contribute more',
        evidence: 'Economic research on marginal utility theory demonstrates that the impact of tax on well-being is far greater for low-income individuals, for whom each dollar has significantly more utility.',
        example: 'Australia\'s progressive tax system, where the top marginal rate is 45% for income above $190,000, raises approximately 60% of personal income tax revenue from the top 20% of earners.',
        sentences: {
          intro: 'Progressive taxation is grounded in the principle that those who earn more should contribute a greater share of their income, reflecting their superior ability to pay.',
          body: 'Australia\'s progressive income tax system ensures that the heaviest tax burden falls on those most able to bear it, while lower-income individuals retain a greater proportion of their earnings.',
          conclusion: 'A progressive tax system is the fairest approach to funding public services, as it distributes the burden according to capacity rather than imposing equal sacrifice on unequal incomes.'
        }
      },
      {
        point: 'Progressive taxation funds the public services and social safety nets that reduce inequality',
        evidence: 'OECD research demonstrates that countries with more progressive tax systems achieve income redistribution of 30-50%, significantly reducing post-tax inequality compared to pre-tax levels.',
        example: 'The Scandinavian nations, which employ the most progressive tax systems among developed countries, consistently rank among the world\'s most equal and happiest societies.',
        sentences: {
          intro: 'Progressive taxation generates the revenue necessary to fund universal public services and social safety nets that reduce inequality and improve quality of life for all citizens.',
          body: 'The strong correlation between progressive taxation and low inequality in Scandinavian nations confirms that tax policy is one of the most effective instruments for creating a more equitable society.',
          conclusion: 'Without progressive taxation, governments would lack the resources to fund the education, healthcare, and social services that provide genuine equality of opportunity.'
        }
      },
      {
        point: 'A flat tax would disproportionately benefit the wealthy and increase inequality',
        evidence: 'Tax modelling by the Tax Policy Centre shows that a revenue-neutral flat tax of 20% would cut taxes for the richest 1% by an average of $100,000 while increasing the burden on middle-income earners.',
        example: 'Russia\'s adoption of a 13% flat tax in 2001, often cited as a success, occurred alongside massive oil revenue increases that explain much of the subsequent GDP growth, rather than the tax structure itself.',
        sentences: {
          intro: 'A flat tax would effectively transfer wealth from middle-income earners to the wealthy, exacerbating the inequality that is already one of the greatest challenges facing modern societies.',
          body: 'Tax modelling consistently shows that replacing progressive systems with a flat rate would provide the largest benefits to high-income earners while offering minimal relief to those who need it most.',
          conclusion: 'Far from simplifying the tax system, a flat tax would simplify the redistribution of wealth upwards, undermining the social contract that holds democratic societies together.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'A flat tax simplifies the tax system and reduces compliance costs and evasion',
        evidence: 'The World Bank\'s Doing Business report found that countries with simpler tax systems have 20% higher rates of voluntary compliance and significantly lower administrative costs.',
        example: 'Estonia\'s introduction of a flat tax in 1994 simplified its tax administration dramatically, reducing filing requirements and administrative overhead while increasing tax revenue by 30% within five years.',
        sentences: {
          intro: 'Proponents of a flat tax argue that its simplicity reduces the complexity, compliance costs, and opportunities for evasion that plague progressive systems.',
          body: 'Estonia\'s experience demonstrates that a simpler tax structure can improve compliance, reduce administrative burdens, and actually increase overall tax revenue.',
          conclusion: 'A flat tax offers the advantage of transparency and simplicity, reducing the loopholes and complexity that allow wealthy individuals to minimise their tax obligations under progressive systems.'
        }
      },
      {
        point: 'High marginal tax rates under progressive systems can discourage work, investment, and entrepreneurship',
        evidence: 'Supply-side economics research suggests that marginal tax rates above 50% can reduce labour supply among high earners by 5-15% and discourage risk-taking investment.',
        example: 'The United States experienced significant economic growth following the Reagan-era tax cuts in the 1980s, which reduced the top marginal rate from 70% to 28%, though the relationship between tax cuts and growth remains debated.',
        sentences: {
          intro: 'Critics of progressive taxation argue that high marginal rates on upper incomes create perverse incentives that discourage productivity, investment, and entrepreneurship.',
          body: 'While the empirical evidence is mixed, there is a theoretical basis for the concern that excessively high tax rates can reduce economic dynamism by diminishing the rewards for effort and risk-taking.',
          conclusion: 'Tax policy must be designed to fund public services without creating disincentives so severe that they undermine the economic activity on which all government revenue depends.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, progressive taxation remains the fairest approach to funding public services and reducing inequality, as it distributes the tax burden according to ability to pay. However, tax rates must be set at levels that maintain economic incentives and minimise the complexity that enables avoidance, combining fairness with efficiency.',
    keyVocabulary: ['progressive taxation', 'flat tax', 'marginal tax rate', 'income redistribution', 'tax compliance', 'fiscal equity', 'tax base', 'revenue-neutral']
  },

  {
    id: 'gov03',
    category: 'Government & Economy',
    question: 'Some people argue that the minimum wage should be significantly increased to provide workers with a living income. Others warn this could harm businesses and increase unemployment. Discuss both views.',
    keywords: ['minimum wage', 'living wage', 'employment', 'business costs'],
    forPoints: [
      {
        point: 'A higher minimum wage reduces poverty and improves living standards for the lowest-paid workers',
        evidence: 'Research by the University of California, Berkeley found that a 10% increase in the minimum wage reduces poverty rates among affected workers by 2-4% with minimal job losses.',
        example: 'Australia\'s minimum wage of over $23 per hour, the highest in the OECD, coexists with an unemployment rate consistently around 3.5-4%, challenging the argument that high minimum wages necessarily destroy jobs.',
        sentences: {
          intro: 'Increasing the minimum wage is one of the most direct and effective mechanisms for reducing poverty and improving living standards for millions of low-paid workers.',
          body: 'Australia\'s experience maintaining both a high minimum wage and low unemployment provides compelling evidence that generous pay floors can coexist with strong labour market performance.',
          conclusion: 'A minimum wage that enables workers to live with dignity is not merely an economic policy but a fundamental statement about the value a society places on labour.'
        }
      },
      {
        point: 'Higher wages stimulate consumer spending and economic growth',
        evidence: 'Keynesian economic theory holds that lower-income workers spend a higher proportion of their income on goods and services, meaning wage increases generate a multiplier effect throughout the economy.',
        example: 'Following significant minimum wage increases in several US cities including Seattle and San Francisco, local economies experienced higher consumer spending and business revenues rather than the predicted economic downturns.',
        sentences: {
          intro: 'A higher minimum wage puts more money into the pockets of workers who are most likely to spend it, stimulating consumer demand and driving broader economic growth.',
          body: 'The economic boom experienced by US cities that raised their minimum wages significantly contradicts predictions that higher wages would lead to business closures and job losses.',
          conclusion: 'By boosting the spending power of the lowest-paid workers, minimum wage increases can create a virtuous cycle of increased demand, business growth, and employment.'
        }
      },
      {
        point: 'Decent wages reduce government spending on welfare and social support programmes',
        evidence: 'A study by the Economic Policy Institute found that raising the US federal minimum wage to $15 would save approximately $17 billion annually in government spending on food assistance and healthcare subsidies.',
        example: 'In Australia, the relatively high minimum wage reduces reliance on government income support payments, with a smaller proportion of full-time workers requiring welfare top-ups compared to countries with lower minimum wages.',
        sentences: {
          intro: 'When employers pay a living wage, the cost of supporting low-income workers shifts from taxpayers to the businesses that benefit from their labour.',
          body: 'The potential savings of billions of dollars in welfare expenditure demonstrate that a higher minimum wage effectively transfers the cost of worker support from governments to the employers who should bear it.',
          conclusion: 'Raising the minimum wage is not just good for workers but also for taxpayers, who currently subsidise the low wages paid by profitable businesses through the welfare system.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Higher minimum wages increase costs for small businesses and may lead to job losses',
        evidence: 'The Congressional Budget Office estimated that raising the US minimum wage to $15 could result in the loss of 1.3 million jobs, disproportionately affecting small businesses in low-cost regions.',
        example: 'In Australia, small business owners in the hospitality and retail sectors have expressed concerns that successive minimum wage increases make it difficult to remain profitable while maintaining staff numbers.',
        sentences: {
          intro: 'Small businesses, which operate on tighter margins than large corporations, are particularly vulnerable to the increased labour costs that come with higher minimum wages.',
          body: 'The potential for job losses resulting from minimum wage increases is a legitimate concern, particularly for small businesses and in regions where the cost of living is lower.',
          conclusion: 'Any increase in the minimum wage must be gradual and accompanied by support for small businesses to adapt, preventing sudden cost shocks that could trigger closures and redundancies.'
        }
      },
      {
        point: 'Higher minimum wages may accelerate automation and reduce entry-level employment opportunities',
        evidence: 'Research by McKinsey Global Institute suggests that a 20% increase in labour costs could accelerate the adoption of automation technologies by 15-25% in sectors such as fast food, retail, and manufacturing.',
        example: 'McDonald\'s responded to minimum wage increases in several countries by installing self-order kiosks and automated food preparation systems, reducing the number of entry-level positions available.',
        sentences: {
          intro: 'Opponents warn that pushing minimum wages too high will accelerate the replacement of workers with technology, particularly in industries where tasks are easily automated.',
          body: 'The rapid deployment of self-service kiosks and automated systems in the fast food industry demonstrates that employers will substitute capital for labour when wages exceed a certain threshold.',
          conclusion: 'While technological progress is inevitable, excessively rapid wage increases risk accelerating the displacement of precisely those workers who can least afford to lose their jobs.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, a fair minimum wage that enables workers to live with dignity is an essential component of a just economy. However, increases must be implemented gradually and proportionally, with consideration for the impact on small businesses and regional economies, to ensure that the benefits of higher wages are not offset by job losses.',
    keyVocabulary: ['minimum wage', 'living wage', 'purchasing power', 'employment effects', 'small business impact', 'automation risk', 'consumer spending', 'income inequality']
  },

  {
    id: 'gov04',
    category: 'Government & Economy',
    question: 'Some countries are experimenting with Universal Basic Income (UBI), providing all citizens with a regular payment regardless of employment status. Do you think this is a good idea?',
    keywords: ['universal basic income', 'UBI', 'welfare reform', 'automation'],
    forPoints: [
      {
        point: 'UBI provides a safety net that protects citizens from poverty and economic insecurity',
        evidence: 'Finland\'s two-year UBI trial (2017-2018) found that participants reported 15% lower stress levels, improved health outcomes, and higher levels of trust in social institutions compared to the control group.',
        example: 'The Mincome experiment in Manitoba, Canada (1974-1979) demonstrated that a guaranteed income reduced hospital admissions by 8.5% and increased high school completion rates among participating families.',
        sentences: {
          intro: 'Universal Basic Income offers a simple and dignified solution to poverty by ensuring that every citizen has sufficient income to meet their basic needs.',
          body: 'Finland\'s UBI trial revealed that financial security improved participants\' physical and mental health, suggesting that basic income is an investment in human well-being rather than merely a welfare payment.',
          conclusion: 'In a world of increasing economic uncertainty, UBI represents a fundamental guarantee that no citizen will be left without the means to survive.'
        }
      },
      {
        point: 'UBI prepares societies for the economic disruption caused by automation and artificial intelligence',
        evidence: 'A 2023 McKinsey report projects that up to 30% of current jobs could be automated by 2035, creating millions of displaced workers who will need support during career transitions.',
        example: 'The Alaska Permanent Fund, which distributes oil revenue dividends to every resident, provides a working model of a universal payment system that has operated successfully for over 40 years.',
        sentences: {
          intro: 'As automation and artificial intelligence threaten to displace millions of workers, UBI offers a mechanism for sharing the economic gains of technological progress with all citizens.',
          body: 'With up to a third of current jobs at risk of automation within the next decade, the traditional model of employment-based income is increasingly inadequate as the sole means of economic participation.',
          conclusion: 'UBI is not a radical experiment but a necessary adaptation to the economic realities of the twenty-first century, where technology is fundamentally reshaping the relationship between work and income.'
        }
      },
      {
        point: 'UBI simplifies welfare administration and eliminates the stigma associated with means-tested benefits',
        evidence: 'Administrative costs for means-tested welfare programmes consume approximately 15-20% of total spending, compared to less than 3% for universal payment systems.',
        example: 'In Australia, the complexity of the Centrelink welfare system, with its multiple payment categories and compliance requirements, has been widely criticised for creating a confusing and demeaning experience for recipients.',
        sentences: {
          intro: 'UBI eliminates the bureaucratic complexity and social stigma of means-tested welfare by providing a universal payment that treats all citizens equally.',
          body: 'The enormous administrative costs and humiliating compliance requirements of Australia\'s current welfare system illustrate the inefficiency and indignity of means-tested approaches.',
          conclusion: 'Replacing complex welfare bureaucracies with a simple universal payment would save billions in administrative costs while restoring dignity to those who need financial support.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'UBI is prohibitively expensive and would require massive tax increases or spending cuts',
        evidence: 'Estimates for a meaningful UBI in Australia suggest a cost of $200-350 billion annually, equivalent to approximately 10-15% of GDP, raising serious questions about fiscal sustainability.',
        example: 'Switzerland rejected a UBI proposal in a 2016 referendum, with 77% of voters opposing the measure, largely due to concerns about its estimated cost of $208 billion annually.',
        sentences: {
          intro: 'The most significant obstacle to UBI is its enormous cost, which would require either dramatic tax increases or the elimination of other essential government services.',
          body: 'The estimated annual cost of hundreds of billions of dollars makes UBI financially unrealistic without fundamental changes to taxation that may themselves undermine economic growth.',
          conclusion: 'Until advocates can present a credible and sustainable funding model, UBI will remain an aspirational idea rather than a practical policy option.'
        }
      },
      {
        point: 'UBI may reduce the incentive to work and participate in the labour market',
        evidence: 'Critics cite economic theory suggesting that guaranteed income without work requirements could reduce labour supply by 5-15%, particularly among secondary earners in households.',
        example: 'Some critics of Finland\'s UBI trial noted that participants showed no significant increase in employment compared to the control group, suggesting that basic income did not motivate job-seeking.',
        sentences: {
          intro: 'A fundamental concern about UBI is that it may diminish the motivation to work, reducing labour supply and undermining the productivity on which economic prosperity depends.',
          body: 'While UBI advocates argue that people will continue to work for fulfilment and higher income, the risk that some proportion of the population will reduce their labour participation cannot be dismissed.',
          conclusion: 'The relationship between unconditional income and work motivation remains contested, and more extensive trials are needed before committing to a permanent nationwide programme.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, UBI addresses real and growing challenges of poverty, economic insecurity, and technological displacement. However, its enormous cost and uncertain effects on work motivation require careful consideration. A phased approach, beginning with targeted trials and gradually expanding based on evidence, may be the most responsible path forward.',
    keyVocabulary: ['universal basic income', 'welfare reform', 'technological displacement', 'means-tested benefits', 'fiscal sustainability', 'automation', 'poverty alleviation', 'unconditional payment']
  },

  {
    id: 'gov05',
    category: 'Government & Economy',
    question: 'With advances in technology, governments now have the ability to conduct extensive surveillance of their citizens. Is this justified for security reasons, or does it represent an unacceptable invasion of privacy?',
    keywords: ['government surveillance', 'privacy', 'national security', 'civil liberties'],
    forPoints: [
      {
        point: 'Surveillance is essential for preventing terrorism and serious crime',
        evidence: 'The UK Home Office claims that CCTV and electronic surveillance have contributed to the prevention of over 40 terrorist attacks since 2017, demonstrating their value as security tools.',
        example: 'Following the Boston Marathon bombing in 2013, surveillance camera footage was instrumental in identifying the perpetrators within 72 hours, leading to their rapid apprehension.',
        sentences: {
          intro: 'In an era of evolving security threats, government surveillance provides an essential tool for preventing terrorism and protecting citizens from serious crime.',
          body: 'The role of surveillance technology in rapidly identifying the Boston Marathon bombers illustrates how these tools can be decisive in responding to and preventing attacks.',
          conclusion: 'When properly regulated, surveillance represents a reasonable trade-off between privacy and the government\'s fundamental responsibility to protect its citizens.'
        }
      },
      {
        point: 'Modern surveillance technologies can be targeted and proportionate, minimising privacy intrusions',
        evidence: 'Advanced data analytics and artificial intelligence enable security agencies to focus surveillance on genuine suspects rather than conducting mass monitoring of entire populations.',
        example: 'Australia\'s telecommunications metadata retention scheme requires service providers to store metadata for two years but restricts access to authorised law enforcement agencies investigating serious offences.',
        sentences: {
          intro: 'Modern surveillance technologies offer the potential for targeted, proportionate monitoring that can address security concerns without the mass invasion of privacy feared by critics.',
          body: 'Australia\'s metadata retention framework demonstrates that it is possible to design surveillance systems with legal safeguards that limit access to authorised agencies investigating serious crimes.',
          conclusion: 'With appropriate legal frameworks and oversight mechanisms, surveillance can be both effective for security purposes and respectful of citizens\' fundamental right to privacy.'
        }
      },
      {
        point: 'Citizens generally support surveillance when they feel it makes them safer',
        evidence: 'A 2023 Pew Research survey found that 56% of Americans believe government surveillance of citizens\' phone and internet data is acceptable if it helps prevent terrorism.',
        example: 'In Singapore, extensive CCTV coverage and data-driven policing have contributed to one of the lowest crime rates in the world, with public satisfaction with safety exceeding 90%.',
        sentences: {
          intro: 'Public opinion research suggests that most citizens are willing to accept some reduction in privacy in exchange for greater security and safety.',
          body: 'Singapore\'s combination of extensive surveillance and extremely low crime rates demonstrates that many citizens value the tangible safety benefits that monitoring technologies provide.',
          conclusion: 'Democratic governments must respond to their citizens\' desire for safety while ensuring that surveillance powers are exercised transparently and accountably.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Mass surveillance fundamentally undermines civil liberties and democratic freedoms',
        evidence: 'Edward Snowden\'s 2013 revelations exposed the extent to which intelligence agencies in the US and UK were conducting bulk surveillance of citizens\' communications without meaningful oversight.',
        example: 'China\'s Social Credit System, which uses comprehensive surveillance to monitor and rate citizens\' behaviour, illustrates the totalitarian potential of unchecked government monitoring.',
        sentences: {
          intro: 'Mass surveillance represents one of the gravest threats to civil liberties in the modern era, enabling governments to monitor, control, and silence dissent.',
          body: 'China\'s Social Credit System provides a chilling example of how surveillance technology can be weaponised to control citizens\' behaviour, suppress dissent, and undermine fundamental human rights.',
          conclusion: 'A society under constant surveillance is not a free society, and democratic nations must resist the temptation to sacrifice liberty in the name of security.'
        }
      },
      {
        point: 'Surveillance data is vulnerable to misuse, breaches, and function creep',
        evidence: 'The Australian Information Commissioner reported over 900 data breaches in 2022, including breaches of government databases, highlighting the risk that surveillance data will fall into the wrong hands.',
        example: 'The massive Optus and Medibank data breaches in Australia in 2022, which exposed the personal information of millions of citizens, demonstrated the vulnerability of large-scale data collection systems.',
        sentences: {
          intro: 'Even well-intentioned surveillance programmes create vast repositories of sensitive data that are vulnerable to breaches, misuse, and unauthorised access.',
          body: 'The Optus and Medibank data breaches in Australia exposed the personal details of millions of citizens, demonstrating that no data collection system is immune to security failures.',
          conclusion: 'The collection of surveillance data creates risks that extend far beyond government misuse, including identity theft, blackmail, and corporate espionage.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while targeted surveillance is a necessary tool for preventing terrorism and serious crime, it must be subject to strict legal limits, independent oversight, and robust data protection. Governments must resist the temptation to expand surveillance powers beyond what is proportionate and necessary, ensuring that security measures do not undermine the democratic freedoms they are intended to protect.',
    keyVocabulary: ['mass surveillance', 'civil liberties', 'data privacy', 'metadata retention', 'proportionality', 'oversight mechanisms', 'function creep', 'national security']
  },

  {
    id: 'gov06',
    category: 'Government & Economy',
    question: 'Should governments impose limits on freedom of speech and expression, or should censorship be avoided at all costs?',
    keywords: ['censorship', 'freedom of speech', 'hate speech', 'media regulation'],
    forPoints: [
      {
        point: 'Reasonable limits on speech are necessary to protect vulnerable groups from hate speech and incitement',
        evidence: 'Research by the Anti-Defamation League found that exposure to online hate speech increases the likelihood of real-world hate crimes by 12-15% in affected communities.',
        example: 'Germany\'s NetzDG law, which requires social media platforms to remove illegal hate speech within 24 hours, has been credited with reducing the volume of extremist content on major platforms by over 30%.',
        sentences: {
          intro: 'While freedom of expression is a fundamental right, reasonable limits are necessary to protect vulnerable communities from the demonstrable harm caused by hate speech and incitement to violence.',
          body: 'Germany\'s successful regulation of online hate speech demonstrates that targeted limits on expression can reduce harm without undermining the broader principle of free speech.',
          conclusion: 'A society that permits unlimited speech at the expense of its most vulnerable members is not truly free but rather one where the powerful can silence the marginalised through intimidation.'
        }
      },
      {
        point: 'Regulations against disinformation protect democratic processes and public safety',
        evidence: 'The European Commission found that disinformation campaigns influenced voter behaviour in at least 12 national elections between 2016 and 2022, threatening the integrity of democratic processes.',
        example: 'Australia\'s Electoral Integrity Assurance Taskforce works to identify and counter foreign disinformation campaigns targeting Australian elections, protecting the integrity of the democratic process.',
        sentences: {
          intro: 'In an era of widespread disinformation, governments have a responsibility to protect the integrity of democratic processes and public safety through appropriate speech regulation.',
          body: 'The documented influence of disinformation campaigns on multiple national elections demonstrates that unregulated speech can pose a direct threat to democratic governance.',
          conclusion: 'Targeted regulation of demonstrably false and harmful speech is essential for preserving the informed public discourse on which democracy depends.'
        }
      },
      {
        point: 'Content regulation protects children and other vulnerable populations from harmful material',
        evidence: 'The Australian eSafety Commissioner reports that one in five Australian children has been exposed to harmful online content, including violent extremism and self-harm promotion.',
        example: 'The UK\'s Online Safety Act, enacted in 2023, imposes legal duties on technology companies to protect children from harmful content, with significant penalties for non-compliance.',
        sentences: {
          intro: 'The protection of children and vulnerable populations from harmful content online provides a clear and widely accepted justification for content regulation.',
          body: 'The alarming rates of children\'s exposure to violent and self-harm content online underscore the inadequacy of self-regulation by technology companies and the need for legislative intervention.',
          conclusion: 'Governments have an undeniable duty to protect children from harmful content, and this obligation must take precedence over absolutist interpretations of free speech.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Censorship can be used by governments to suppress legitimate political dissent and criticism',
        evidence: 'Reporters Without Borders ranks over 60 countries as having "difficult" or "very serious" situations for press freedom, with governments using content laws to silence journalists and activists.',
        example: 'Russia\'s broad "extremism" laws have been used to prosecute political opponents, independent journalists, and human rights activists, demonstrating how vague speech restrictions can be weaponised against dissent.',
        sentences: {
          intro: 'The greatest danger of censorship is that speech restrictions designed to protect can be easily repurposed by governments to suppress legitimate dissent, criticism, and independent journalism.',
          body: 'Russia\'s use of anti-extremism legislation to silence political opponents and journalists illustrates the slippery slope from reasonable content regulation to authoritarian censorship.',
          conclusion: 'Any speech restriction must be narrowly defined, independently overseen, and subject to judicial review to prevent its misuse as a tool of political suppression.'
        }
      },
      {
        point: 'Free speech is essential for social progress and the correction of injustice',
        evidence: 'Historical analysis shows that virtually every major social reform movement, from abolition to civil rights to marriage equality, depended on the protection of unpopular and challenging speech.',
        example: 'The suffragette movement, the civil rights movement led by figures like Martin Luther King Jr, and the marriage equality campaign all relied on speech that was once considered offensive or subversive by the mainstream.',
        sentences: {
          intro: 'History demonstrates that the protection of unpopular, challenging, and even offensive speech is essential for social progress and the correction of systemic injustice.',
          body: 'Every significant social reform movement has depended on the ability to express ideas that the powerful and the majority found uncomfortable, proving that censorship is the enemy of progress.',
          conclusion: 'A society that restricts speech to what is currently acceptable will never produce the transformative ideas needed to address its deepest injustices.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while targeted limits on hate speech, disinformation, and harmful content are justified to protect vulnerable populations and democratic processes, these restrictions must be narrowly defined and independently overseen to prevent their misuse as tools of political censorship. The default position in a democratic society should always be freedom of expression.',
    keyVocabulary: ['freedom of expression', 'hate speech regulation', 'censorship', 'content moderation', 'disinformation', 'press freedom', 'online safety', 'democratic discourse']
  },

  {
    id: 'gov07',
    category: 'Government & Economy',
    question: 'Tourism brings economic benefits but can also damage local cultures and environments. How can governments balance the benefits and drawbacks of tourism?',
    keywords: ['tourism', 'cultural impact', 'environmental damage', 'sustainable tourism'],
    forPoints: [
      {
        point: 'Sustainable tourism models can generate economic benefits while protecting environments and cultures',
        evidence: 'The UN World Tourism Organisation estimates that sustainable tourism practices can reduce the environmental impact of tourism by up to 40% while maintaining over 90% of economic benefits.',
        example: 'Bhutan\'s "High Value, Low Impact" tourism model charges visitors a daily fee of $200-250, limiting visitor numbers while generating revenue that funds conservation and community development.',
        sentences: {
          intro: 'Sustainable tourism offers a viable path to capturing the economic benefits of tourism while minimising its environmental and cultural costs.',
          body: 'Bhutan\'s innovative approach of charging premium fees to limit tourist numbers demonstrates that quality can replace quantity as the foundation of a profitable tourism industry.',
          conclusion: 'Governments should pursue sustainable tourism strategies that prioritise long-term environmental and cultural preservation over short-term revenue maximisation.'
        }
      },
      {
        point: 'Tourism revenue can fund conservation and cultural heritage preservation',
        evidence: 'The Galapagos Islands generate over $400 million annually from tourism, with a significant portion directed to conservation programmes that protect the archipelago\'s unique ecosystem.',
        example: 'Australia\'s Great Barrier Reef generates approximately $6.4 billion in tourism revenue annually, funding marine conservation programmes that would be unaffordable without tourist income.',
        sentences: {
          intro: 'When managed responsibly, tourism creates a virtuous cycle in which visitor revenue funds the very conservation and cultural preservation efforts that attract tourists in the first place.',
          body: 'The billions of dollars generated by tourism at Australia\'s Great Barrier Reef provide the financial foundation for marine conservation efforts that benefit both the ecosystem and future visitors.',
          conclusion: 'Tourism and conservation are not inherently conflicting goals but can be made mutually reinforcing through careful management and revenue allocation.'
        }
      },
      {
        point: 'Community-based tourism empowers local populations and preserves cultural authenticity',
        evidence: 'The World Travel and Tourism Council reports that community-based tourism projects return up to 95% of revenue to local communities, compared to less than 20% for large resort developments.',
        example: 'Indigenous tourism experiences in Australia\'s Northern Territory, such as cultural tours led by Aboriginal communities, provide both economic benefits and opportunities for cultural exchange on the community\'s own terms.',
        sentences: {
          intro: 'Community-based tourism models ensure that the economic benefits of tourism flow directly to local populations while empowering communities to share their culture on their own terms.',
          body: 'Indigenous-led tourism experiences in Australia demonstrate that when local communities control the tourism narrative, visitors gain authentic cultural insights while communities receive meaningful economic benefits.',
          conclusion: 'Governments should prioritise community-based tourism models that empower local populations rather than large-scale resort developments that extract value from communities.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Over-tourism degrades environments and overwhelms local communities',
        evidence: 'Research by the Global Sustainable Tourism Council found that the world\'s most visited sites experience environmental degradation rates 3-5 times higher than less-visited comparable sites.',
        example: 'Venice has experienced severe over-tourism, with its resident population declining from 175,000 to under 50,000 as rising property prices and tourist crowds have made the city unliveable for locals.',
        sentences: {
          intro: 'When tourism exceeds the carrying capacity of destinations, the result is environmental degradation, cultural commodification, and the displacement of local communities.',
          body: 'Venice\'s transformation from a living city into a tourist theme park, with its resident population decimated by over-tourism, serves as a warning about the destructive potential of unmanaged visitor flows.',
          conclusion: 'Governments must set and enforce carrying capacity limits for vulnerable destinations to prevent the environmental and social destruction caused by over-tourism.'
        }
      },
      {
        point: 'Tourism can commodify and distort local cultures, reducing them to superficial performances',
        evidence: 'Anthropological research suggests that the commercialisation of traditional cultural practices for tourist consumption can strip them of their meaning and transform them into inauthentic performances.',
        example: 'In parts of Southeast Asia, traditional ceremonies and art forms have been shortened, simplified, and modified to suit tourist schedules and expectations, losing their cultural significance in the process.',
        sentences: {
          intro: 'A significant cultural risk of tourism is the commodification of traditions, where authentic practices are distorted or performed out of context to satisfy visitor demand.',
          body: 'The reduction of complex cultural traditions to brief tourist-friendly performances risks stripping them of their spiritual, historical, and communal significance.',
          conclusion: 'Cultural tourism must be managed in ways that respect the integrity and agency of host communities, ensuring that cultural exchange is genuine rather than performative.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, tourism can bring significant economic benefits and fund conservation, but only when managed sustainably. Governments must implement carrying capacity limits, support community-based models, and ensure that tourism revenue is invested in environmental and cultural preservation rather than extracted for short-term profit.',
    keyVocabulary: ['sustainable tourism', 'over-tourism', 'carrying capacity', 'community-based tourism', 'cultural commodification', 'ecotourism', 'heritage preservation', 'visitor management']
  },

  {
    id: 'gov08',
    category: 'Government & Economy',
    question: 'Globalisation has created both winners and losers. What are the main advantages and disadvantages of globalisation, and how should governments respond?',
    keywords: ['globalisation', 'free trade', 'economic integration', 'inequality'],
    forPoints: [
      {
        point: 'Globalisation has lifted hundreds of millions of people out of poverty through trade and investment',
        evidence: 'The World Bank reports that the number of people living in extreme poverty has fallen from 1.9 billion in 1990 to under 700 million in 2023, a reduction driven primarily by global trade and economic integration.',
        example: 'China\'s integration into the global economy following its WTO accession in 2001 lifted over 800 million citizens out of extreme poverty within two decades, representing the largest poverty reduction in human history.',
        sentences: {
          intro: 'The most significant achievement of globalisation is the dramatic reduction in global poverty, driven by the expansion of international trade and investment.',
          body: 'China\'s remarkable economic transformation following its integration into the global trading system provides irrefutable evidence that globalisation can generate prosperity on an unprecedented scale.',
          conclusion: 'While globalisation is imperfect, its role in reducing extreme poverty for hundreds of millions of people represents a historic achievement that cannot be dismissed.'
        }
      },
      {
        point: 'Global trade increases consumer choice and reduces costs through international competition',
        evidence: 'Economic research shows that trade liberalisation has reduced the average cost of consumer goods in developed nations by 25-30% over the past three decades.',
        example: 'Australian consumers benefit from access to affordable electronics, clothing, and food products from around the world, with trade contributing to a standard of living significantly higher than would be possible in a closed economy.',
        sentences: {
          intro: 'Globalisation benefits consumers by expanding choice and reducing costs through international competition and the efficient allocation of global production.',
          body: 'The affordable consumer goods available to Australian families are a direct result of global trade, which enables countries to specialise in what they produce most efficiently.',
          conclusion: 'Protectionist policies that restrict trade ultimately harm consumers by raising prices and limiting choice, making globalisation essential for maintaining living standards.'
        }
      },
      {
        point: 'Globalisation facilitates the spread of knowledge, technology, and cultural exchange',
        evidence: 'UNESCO reports that international research collaboration has increased by 300% since 1990, accelerating scientific progress and the development of solutions to global challenges.',
        example: 'The rapid development of COVID-19 vaccines in under 12 months was made possible by unprecedented global scientific collaboration, with researchers from over 40 countries contributing to vaccine development.',
        sentences: {
          intro: 'Beyond its economic benefits, globalisation accelerates the exchange of knowledge, technology, and ideas across borders, driving innovation and cultural enrichment.',
          body: 'The extraordinary speed of COVID-19 vaccine development, achieved through global scientific collaboration, demonstrates that the free flow of knowledge across borders can literally save millions of lives.',
          conclusion: 'In an age of global challenges including climate change and pandemics, the international cooperation facilitated by globalisation is not merely beneficial but essential.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Globalisation has increased inequality within developed nations by displacing manufacturing workers',
        evidence: 'Research by MIT economists found that competition from Chinese imports alone accounted for the loss of 2.4 million manufacturing jobs in the United States between 1999 and 2011.',
        example: 'Australia\'s automotive manufacturing industry, which once employed over 50,000 workers, was eliminated entirely by 2017 as production shifted to lower-cost countries, devastating communities in Melbourne and Adelaide.',
        sentences: {
          intro: 'The darker side of globalisation is the displacement of millions of workers in developed nations, as manufacturing jobs have migrated to countries with lower labour costs.',
          body: 'The complete closure of Australia\'s car manufacturing industry illustrates how globalisation can devastate entire communities when governments fail to manage the transition and support displaced workers.',
          conclusion: 'Governments must acknowledge that globalisation creates losers as well as winners, and implement policies that support those whose livelihoods are disrupted by international competition.'
        }
      },
      {
        point: 'Globalisation enables multinational corporations to exploit differences in regulations and avoid taxes',
        evidence: 'The OECD estimates that multinational profit-shifting costs governments between $100 and $240 billion in lost tax revenue annually, equivalent to 4-10% of global corporate income tax revenue.',
        example: 'Major technology companies including Apple, Google, and Amazon have been criticised for channelling profits through low-tax jurisdictions such as Ireland and Luxembourg, paying effective tax rates far below the statutory rates in countries where they generate revenue.',
        sentences: {
          intro: 'Globalisation has enabled multinational corporations to exploit regulatory differences between countries, avoiding taxes and undermining the fiscal capacity of national governments.',
          body: 'The ability of the world\'s largest corporations to shift profits to low-tax jurisdictions deprives governments of the revenue needed to fund public services and address the very inequality that globalisation creates.',
          conclusion: 'International cooperation on corporate tax reform, such as the OECD\'s global minimum tax initiative, is essential for ensuring that the benefits of globalisation are shared fairly.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, globalisation has generated enormous benefits including poverty reduction, consumer choice, and scientific collaboration. However, its gains have been unevenly distributed, creating significant displacement and inequality. Governments must manage globalisation through worker retraining, social safety nets, and international tax cooperation to ensure its benefits are shared more equitably.',
    keyVocabulary: ['globalisation', 'free trade', 'economic integration', 'trade liberalisation', 'profit-shifting', 'manufacturing displacement', 'comparative advantage', 'international cooperation']
  },

  {
    id: 'gov09',
    category: 'Government & Economy',
    question: 'Some argue that democratic governments are too slow and inefficient compared to authoritarian systems. Is democracy still the best form of government for the modern world?',
    keywords: ['democracy', 'authoritarianism', 'governance', 'political systems'],
    forPoints: [
      {
        point: 'Democracy provides accountability, human rights protections, and peaceful transfers of power',
        evidence: 'Freedom House data shows that democratic nations experience 60% fewer internal conflicts and 90% fewer famines than authoritarian states, reflecting the accountability that free elections provide.',
        example: 'Australia\'s democratic system has enabled 46 peaceful changes of government since federation, with independent courts, a free press, and constitutional protections ensuring that power is exercised accountably.',
        sentences: {
          intro: 'Democracy\'s greatest strength lies in the accountability it creates between governments and citizens, ensuring that power serves the people rather than the rulers.',
          body: 'The remarkable absence of famines in democratic nations, as documented by Nobel laureate Amartya Sen, demonstrates that electoral accountability compels governments to respond to citizens\' fundamental needs.',
          conclusion: 'No alternative system of government has proven as consistently effective at protecting human rights, preventing abuses of power, and ensuring peaceful political transitions.'
        }
      },
      {
        point: 'Democratic nations outperform authoritarian states economically over the long term',
        evidence: 'Research by Acemoglu and Robinson demonstrates that inclusive political institutions are strongly correlated with sustained long-term economic growth, while extractive authoritarian systems tend to stagnate.',
        example: 'South Korea\'s transition from military dictatorship to democracy in the 1980s was followed by sustained economic growth that transformed it from a developing nation into one of the world\'s largest economies.',
        sentences: {
          intro: 'While authoritarian governments may achieve rapid short-term growth, democratic nations consistently outperform them over the long term due to their inclusive institutions and rule of law.',
          body: 'South Korea\'s remarkable economic transformation following democratisation illustrates that inclusive political institutions create the conditions for sustained and broadly shared prosperity.',
          conclusion: 'The long-term economic evidence overwhelmingly favours democracy as the governance model most conducive to sustainable and equitable economic development.'
        }
      },
      {
        point: 'Democracy fosters innovation and adaptability through the free exchange of ideas',
        evidence: 'Democratic nations produce over 85% of the world\'s Nobel Prize-winning research and file the vast majority of global patents, reflecting the link between intellectual freedom and innovation.',
        example: 'Silicon Valley\'s extraordinary culture of innovation has thrived within America\'s democratic institutions, which protect intellectual property, encourage dissent, and attract global talent through openness.',
        sentences: {
          intro: 'The intellectual freedom that democracy protects is the foundation of the innovation and adaptability that drive long-term economic and social progress.',
          body: 'The concentration of the world\'s most innovative industries in democratic nations is not coincidental but reflects the essential link between free expression, open inquiry, and creative problem-solving.',
          conclusion: 'In a rapidly changing world that demands constant innovation and adaptation, democracy\'s protection of intellectual freedom is its most valuable competitive advantage.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Democratic processes are slow and can be paralysed by political polarisation',
        evidence: 'Political science research shows that the average time to pass major legislation in democratic systems is 2-5 years, compared to weeks or months in authoritarian systems capable of swift executive action.',
        example: 'The United States Congress has been criticised for legislative gridlock on critical issues including climate change, gun control, and immigration reform, where partisan divisions have prevented action for decades.',
        sentences: {
          intro: 'A legitimate criticism of democracy is that its deliberative processes can be painfully slow, particularly when political polarisation prevents consensus on urgent issues.',
          body: 'The decades-long legislative paralysis on issues such as climate change and gun control in the United States illustrates how democratic processes can fail to address critical challenges in a timely manner.',
          conclusion: 'While democratic deliberation is valuable, reforms are needed to prevent political polarisation from rendering democratic institutions incapable of addressing urgent challenges.'
        }
      },
      {
        point: 'Authoritarian systems can mobilise resources rapidly for large-scale development projects',
        evidence: 'China\'s ability to build thousands of kilometres of high-speed rail, relocate millions of people for infrastructure projects, and implement nationwide policies within months contrasts sharply with democratic delays.',
        example: 'China\'s construction of 40,000 kilometres of high-speed rail in under 15 years would have been impossible in a democratic system requiring environmental reviews, land rights negotiations, and public consultation.',
        sentences: {
          intro: 'Authoritarian governments can achieve rapid large-scale development by bypassing the consultative processes that slow democratic decision-making.',
          body: 'China\'s extraordinary infrastructure development, which would have taken decades in a democratic system, demonstrates the efficiency advantages that centralised decision-making can provide.',
          conclusion: 'However, the efficiency of authoritarian development comes at the cost of individual rights, environmental protection, and accountability, making it a poor model for societies that value human dignity.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while democracy faces legitimate challenges of speed and polarisation, its core strengths of accountability, human rights protection, innovation, and long-term economic performance make it the most desirable form of government. The solution to democracy\'s weaknesses is not less democracy but better democracy, through institutional reforms that improve efficiency while preserving accountability.',
    keyVocabulary: ['democratic governance', 'political accountability', 'authoritarian efficiency', 'rule of law', 'political polarisation', 'institutional reform', 'civil liberties', 'inclusive institutions']
  },

  {
    id: 'gov10',
    category: 'Government & Economy',
    question: 'Should governments invest more in public transport systems, or is private vehicle ownership more efficient for meeting citizens\' transport needs?',
    keywords: ['public transport', 'private vehicles', 'urban mobility', 'transport infrastructure'],
    forPoints: [
      {
        point: 'Public transport is significantly more environmentally sustainable than private vehicles',
        evidence: 'The International Energy Agency reports that public transport produces 80% fewer carbon emissions per passenger-kilometre than single-occupancy private vehicles.',
        example: 'Tokyo\'s comprehensive rail network, which carries over 40 million passengers daily, enables the city to function with one of the lowest rates of car ownership among major global cities while maintaining exceptional mobility.',
        sentences: {
          intro: 'Public transport is vastly more environmentally sustainable than private vehicles, making investment in transit systems essential for meeting climate change targets.',
          body: 'Tokyo\'s world-class rail network demonstrates that efficient public transport can provide superior mobility while dramatically reducing carbon emissions compared to car-dependent cities.',
          conclusion: 'In the context of climate change, expanding public transport is not merely a transport policy but an environmental imperative.'
        }
      },
      {
        point: 'Public transport reduces traffic congestion and improves urban liveability',
        evidence: 'The Texas A&M Transportation Institute estimates that traffic congestion costs the US economy over $87 billion annually in lost productivity and wasted fuel.',
        example: 'Cities like Vienna and Zurich, which have invested heavily in integrated public transport networks, consistently rank among the world\'s most liveable cities, with residents enjoying short commute times and minimal congestion.',
        sentences: {
          intro: 'Investment in public transport directly addresses the traffic congestion that plagues car-dependent cities, improving productivity and quality of life for all residents.',
          body: 'The correlation between world-class public transport and high liveability rankings in cities like Vienna and Zurich confirms that transit investment is fundamental to creating pleasant, functional urban environments.',
          conclusion: 'Governments that prioritise public transport over road expansion will create cities that are more productive, more liveable, and more equitable.'
        }
      },
      {
        point: 'Public transport provides equitable mobility for those who cannot drive, including the elderly, disabled, and low-income residents',
        evidence: 'The Bureau of Infrastructure, Transport and Regional Economics reports that approximately 20% of the Australian population cannot drive due to age, disability, or financial constraints.',
        example: 'In Australian cities with limited public transport, such as many outer suburbs of Sydney and Melbourne, residents without cars face severe barriers to accessing employment, healthcare, and education.',
        sentences: {
          intro: 'Public transport is essential for social equity, ensuring that all citizens, regardless of age, ability, or income, can access the opportunities and services they need.',
          body: 'The transport disadvantage experienced by non-drivers in Australian suburbs with poor public transit demonstrates that car-dependent urban design excludes a significant proportion of the population.',
          conclusion: 'Investing in accessible public transport is a fundamental act of social justice, ensuring that mobility is a right available to all citizens rather than a privilege limited to car owners.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Private vehicles offer flexibility and convenience that public transport cannot match',
        evidence: 'Transport surveys consistently show that door-to-door travel times by private vehicle are 30-50% shorter than equivalent public transport journeys in most cities.',
        example: 'In Australia\'s sprawling suburban landscapes, where homes, workplaces, and services are widely dispersed, private vehicles often provide the only practical means of transport for families with complex daily routines.',
        sentences: {
          intro: 'Private vehicles offer a level of flexibility, convenience, and point-to-point mobility that public transport systems struggle to replicate, particularly in low-density suburban areas.',
          body: 'In Australia\'s sprawling cities, where homes and workplaces are often separated by considerable distances, the private car remains the most practical transport option for many families.',
          conclusion: 'While public transport is vital for dense urban cores, a realistic transport strategy must acknowledge that private vehicles will continue to play an essential role in low-density suburban areas.'
        }
      },
      {
        point: 'Public transport infrastructure is extremely expensive to build and maintain',
        evidence: 'Major urban rail projects routinely exceed $1 billion per kilometre in construction costs, with Sydney\'s Metro West project estimated at over $25 billion for 24 kilometres.',
        example: 'Melbourne\'s Suburban Rail Loop, with an estimated cost of over $50 billion, has been criticised for diverting resources from more cost-effective transport solutions such as bus network improvements.',
        sentences: {
          intro: 'The enormous cost of public transport infrastructure, particularly rail projects, raises questions about whether the investment delivers sufficient returns compared to alternative approaches.',
          body: 'With major rail projects costing billions of dollars per kilometre, governments must carefully evaluate whether these investments offer better value than lower-cost alternatives such as bus rapid transit or active transport infrastructure.',
          conclusion: 'Public transport investment must be guided by rigorous cost-benefit analysis to ensure that limited public funds are directed to the solutions that deliver the greatest mobility improvements.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, public transport is essential for environmental sustainability, urban liveability, and social equity, and should be a priority for government investment. However, transport policy must recognise that private vehicles will remain necessary in low-density areas, and that investment decisions should be guided by cost-effectiveness and the specific needs of different communities.',
    keyVocabulary: ['public transport', 'urban mobility', 'carbon emissions', 'traffic congestion', 'transport equity', 'infrastructure investment', 'transit-oriented development', 'suburban sprawl']
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 4: WORK (wrk01–wrk10)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'wrk01',
    category: 'Work',
    question: 'The COVID-19 pandemic normalised remote work for millions of employees. Should remote work become a permanent option for all office-based workers?',
    keywords: ['remote work', 'work from home', 'hybrid work', 'workplace flexibility'],
    forPoints: [
      {
        point: 'Remote work increases productivity and employee satisfaction',
        evidence: 'A Stanford University study of 16,000 workers found that remote employees were 13% more productive than their office-based counterparts, with higher output and fewer sick days.',
        example: 'Atlassian, one of Australia\'s largest technology companies, adopted a permanent "Team Anywhere" policy allowing employees to work from any location, reporting improved productivity and a 33% reduction in employee turnover.',
        sentences: {
          intro: 'The pandemic demonstrated that remote work not only maintains but often enhances productivity, challenging the assumption that physical office presence is necessary for effective work.',
          body: 'Atlassian\'s successful transition to permanent flexible work provides compelling evidence that trust-based remote arrangements can deliver superior results compared to traditional office-based models.',
          conclusion: 'Employers who offer permanent remote work options will benefit from a more productive, satisfied, and loyal workforce.'
        }
      },
      {
        point: 'Remote work reduces commuting time, costs, and environmental impact',
        evidence: 'The average Australian commuter spends 67 minutes per day travelling to and from work, amounting to over 250 hours annually, with commuting identified as one of the least satisfying daily activities.',
        example: 'Global Workplace Analytics estimates that if employees who could work remotely did so for half the week, it would reduce carbon emissions by the equivalent of taking the entire New York State workforce permanently off the road.',
        sentences: {
          intro: 'Remote work eliminates the daily commute, returning hundreds of hours per year to employees while significantly reducing traffic congestion and carbon emissions.',
          body: 'The environmental benefits of reduced commuting are substantial, with widespread remote work having the potential to deliver significant progress towards national emissions reduction targets.',
          conclusion: 'In an era of climate change and urban congestion, permanent remote work options represent a practical solution that benefits workers, employers, and the environment simultaneously.'
        }
      },
      {
        point: 'Remote work enables access to a global talent pool and promotes workforce diversity',
        evidence: 'LinkedIn data shows that remote job postings receive 2.5 times more applicants than equivalent office-based positions, enabling employers to recruit from a significantly wider talent pool.',
        example: 'Companies like Canva, headquartered in Sydney, have hired employees across 40 countries through remote work, accessing specialist skills unavailable in the local labour market.',
        sentences: {
          intro: 'Remote work removes geographic barriers to employment, enabling organisations to recruit the best talent regardless of location and promoting workforce diversity.',
          body: 'Canva\'s ability to build a world-class team spanning 40 countries through remote work demonstrates that geographic flexibility gives employers access to a vastly richer talent pool.',
          conclusion: 'Permanent remote work options create a more inclusive and meritocratic labour market where talent, not location, determines employment opportunities.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Remote work can lead to social isolation and weaken team cohesion',
        evidence: 'Microsoft\'s 2022 Work Trend Index found that 43% of remote workers reported feeling disconnected from their colleagues, with new employees particularly struggling to build workplace relationships.',
        example: 'Several major companies including Goldman Sachs and JPMorgan have mandated return-to-office policies, citing concerns about diminished collaboration, mentoring, and corporate culture among remote workers.',
        sentences: {
          intro: 'A significant drawback of permanent remote work is the erosion of the informal social interactions and team bonds that foster collaboration, creativity, and employee well-being.',
          body: 'The decision by major companies to mandate office returns reflects a genuine concern that remote work weakens the interpersonal connections and organisational culture that drive innovation and teamwork.',
          conclusion: 'While remote work offers flexibility, organisations must find ways to maintain social connection and team cohesion, potentially through hybrid models that combine remote and in-person work.'
        }
      },
      {
        point: 'Remote work blurs the boundary between work and personal life, increasing burnout risk',
        evidence: 'A 2023 survey by the Australian Institute of Health and Welfare found that 38% of remote workers reported difficulty disconnecting from work, with average daily working hours increasing by 48 minutes compared to pre-pandemic levels.',
        example: 'In Japan, the phenomenon of "karoshi" (death from overwork) has been linked to the always-on culture enabled by remote work technologies, prompting government intervention to regulate after-hours communication.',
        sentences: {
          intro: 'Without the physical separation between office and home, remote workers often struggle to establish boundaries, leading to longer hours and increased risk of burnout.',
          body: 'The extension of working hours reported by remote employees confirms that the convenience of working from home can easily become a trap of perpetual availability.',
          conclusion: 'Permanent remote work arrangements must include explicit policies protecting employees\' right to disconnect and maintaining clear boundaries between professional and personal time.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, remote work should become a permanent option for office-based workers who prefer it, given its demonstrated benefits for productivity, well-being, and the environment. However, organisations must proactively address the risks of isolation and burnout through hybrid arrangements, regular team gatherings, and policies that protect work-life boundaries.',
    keyVocabulary: ['remote work', 'hybrid model', 'workplace flexibility', 'employee productivity', 'social isolation', 'work-life boundaries', 'talent acquisition', 'digital collaboration']
  },

  {
    id: 'wrk02',
    category: 'Work',
    question: 'Automation and artificial intelligence are replacing many jobs traditionally done by humans. What are the implications, and how should society respond?',
    keywords: ['automation', 'artificial intelligence', 'job displacement', 'future of work'],
    forPoints: [
      {
        point: 'Automation creates new jobs and industries that replace those lost to technology',
        evidence: 'The World Economic Forum\'s Future of Jobs Report projects that while 85 million jobs may be displaced by automation by 2025, 97 million new roles will emerge, resulting in a net gain of 12 million positions.',
        example: 'The ATM, predicted to eliminate bank teller jobs when introduced in the 1970s, actually led to an increase in bank branches and teller employment as banks became more cost-efficient and expanded their services.',
        sentences: {
          intro: 'History consistently demonstrates that while technology displaces specific jobs, it simultaneously creates new industries, roles, and opportunities that did not previously exist.',
          body: 'The World Economic Forum projects that automation will create millions more jobs than it destroys, provided that workers and education systems adapt to the changing demands of the labour market.',
          conclusion: 'Rather than fearing automation, societies should focus on ensuring that workers are equipped with the skills needed to thrive in the emerging economy.'
        }
      },
      {
        point: 'Automation improves productivity, reduces costs, and enhances the quality of goods and services',
        evidence: 'McKinsey Global Institute estimates that automation could raise global productivity growth by 0.8-1.4% annually, generating trillions of dollars in economic value.',
        example: 'In Australia\'s mining sector, autonomous vehicles and robotic drilling systems have improved safety, reduced operational costs by 15%, and increased productivity in remote operations such as those in the Pilbara region.',
        sentences: {
          intro: 'Automation has the potential to dramatically increase economic productivity, lower costs for consumers, and improve the quality and safety of goods and services.',
          body: 'Australia\'s mining industry demonstrates how automation can transform dangerous and inefficient manual processes into safer, more productive operations that benefit both workers and companies.',
          conclusion: 'The productivity gains from automation can generate enormous economic value that, if distributed equitably, would improve living standards for all members of society.'
        }
      },
      {
        point: 'Investment in education and retraining can help workers transition to new roles',
        evidence: 'The OECD recommends that governments invest at least 1% of GDP in adult education and retraining programmes to help workers adapt to technological change, with current spending averaging only 0.5%.',
        example: 'Singapore\'s SkillsFuture programme provides every citizen aged 25 and over with $500 in credits for approved courses, encouraging lifelong learning and skills development to meet changing economic demands.',
        sentences: {
          intro: 'The key to managing automation\'s impact on employment is massive investment in education and retraining that prepares workers for the jobs of the future.',
          body: 'Singapore\'s SkillsFuture initiative represents a forward-thinking approach to technological disruption, empowering citizens to continuously update their skills in response to changing labour market demands.',
          conclusion: 'Governments that invest in lifelong learning and skills development will ensure that technological progress benefits all workers, not just those already equipped for the digital economy.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'The pace and scale of AI-driven automation may displace workers faster than new jobs can be created',
        evidence: 'Unlike previous waves of automation, AI has the potential to automate cognitive and creative tasks, with Goldman Sachs estimating that 300 million full-time jobs globally could be exposed to AI automation.',
        example: 'The rapid advancement of generative AI tools such as ChatGPT has already begun displacing workers in content creation, customer service, and data analysis, with many companies reducing headcount in these areas.',
        sentences: {
          intro: 'The unprecedented speed and breadth of AI-driven automation threatens to displace workers faster than education systems and labour markets can adapt, creating a period of significant economic disruption.',
          body: 'Unlike previous technological revolutions that primarily affected manual labour, AI threatens white-collar and creative professions, potentially displacing hundreds of millions of knowledge workers.',
          conclusion: 'The scale and speed of AI automation demand urgent government action to protect displaced workers and ensure that the economic gains of technology are shared broadly.'
        }
      },
      {
        point: 'Automation risks exacerbating inequality as profits flow to technology owners rather than workers',
        evidence: 'Research by Thomas Piketty demonstrates that the share of national income flowing to capital owners has increased steadily relative to workers over the past four decades, a trend that automation accelerates.',
        example: 'The enormous wealth accumulated by technology company founders and shareholders, while wages for many workers have stagnated in real terms, illustrates how automation\'s benefits are concentrated among those who own the technology.',
        sentences: {
          intro: 'A fundamental concern about automation is that its economic benefits accrue primarily to the owners of technology and capital, while workers face displacement and wage stagnation.',
          body: 'The growing concentration of wealth among technology company owners, while median wages stagnate, suggests that without deliberate policy intervention, automation will deepen existing economic inequality.',
          conclusion: 'Governments must develop new mechanisms for sharing the wealth generated by automation, including taxation of technology profits, to prevent the creation of a society divided between technology owners and displaced workers.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, automation and AI offer enormous potential for productivity growth and economic value creation, but they also pose serious risks of worker displacement and rising inequality. The appropriate response is not to resist technological progress but to invest heavily in education, establish robust social safety nets, and develop policies that ensure the benefits of automation are shared equitably across society.',
    keyVocabulary: ['automation', 'artificial intelligence', 'job displacement', 'technological disruption', 'skills retraining', 'productivity growth', 'economic inequality', 'future of work']
  },

  {
    id: 'wrk03',
    category: 'Work',
    question: 'As life expectancy increases, some governments are raising the retirement age. Is this a fair and necessary policy?',
    keywords: ['retirement age', 'pension', 'ageing workforce', 'superannuation'],
    forPoints: [
      {
        point: 'Rising life expectancy makes higher retirement ages necessary for pension system sustainability',
        evidence: 'When most Western pension systems were designed, average life expectancy was 65-70 years; it now exceeds 82 in Australia, meaning pensions must fund 15-20 more years of retirement than originally planned.',
        example: 'Australia\'s gradual increase of the Age Pension eligibility from 65 to 67, phased in between 2017 and 2023, reflects the demographic reality that people are living and remaining healthy for longer.',
        sentences: {
          intro: 'The mathematics of pension systems demand that retirement ages rise in line with life expectancy; anything less threatens the financial sustainability of support for future retirees.',
          body: 'Australia\'s pension system was designed when most retirees could expect to draw benefits for 10-15 years; with life expectancy now exceeding 82, the current system faces unsustainable fiscal pressure without adjustment.',
          conclusion: 'Raising the retirement age is not a punitive measure but a necessary adaptation to the demographic reality that people are living significantly longer than pension systems were designed to support.'
        }
      },
      {
        point: 'Many older workers want to continue working and can contribute valuable experience',
        evidence: 'An Australian Bureau of Statistics survey found that 35% of Australians aged 55-64 intend to work beyond the traditional retirement age, citing financial security, social engagement, and sense of purpose.',
        example: 'In Germany, the introduction of flexible retirement options that allow workers to combine part-time employment with partial pension payments has increased workforce participation among those aged 60-67 by 20%.',
        sentences: {
          intro: 'Many older Australians wish to continue working beyond traditional retirement ages, valuing the financial security, social connection, and sense of purpose that employment provides.',
          body: 'Germany\'s flexible retirement model demonstrates that when older workers are given options rather than forced into binary retirement decisions, many choose to remain productively engaged.',
          conclusion: 'Policies that enable and encourage older workers to continue contributing should be welcomed as beneficial for both individuals and the broader economy.'
        }
      },
      {
        point: 'Higher retirement ages reduce the dependency ratio and support economic growth',
        evidence: 'The Australian Treasury\'s Intergenerational Report projects that maintaining current retirement ages would see the ratio of workers to retirees fall from 4:1 to 2.7:1 by 2060.',
        example: 'Japan\'s encouragement of employment beyond 65 has helped maintain its economic output despite having one of the world\'s oldest populations, with over 25% of citizens aged 65-69 remaining in the workforce.',
        sentences: {
          intro: 'Raising the retirement age helps maintain a sustainable ratio of working taxpayers to retirees, protecting the economic foundation on which all public services depend.',
          body: 'Without adjustment, Australia\'s shrinking worker-to-retiree ratio will place unsustainable pressure on the tax base, threatening funding for healthcare, education, and infrastructure.',
          conclusion: 'A gradual and equitable increase in the retirement age is essential for maintaining the fiscal health that underpins services for all generations.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Raising retirement ages is unfair to workers in physically demanding jobs with lower life expectancy',
        evidence: 'The Australian Institute of Health and Welfare reports that Australians in the lowest socioeconomic group have a life expectancy 5-7 years shorter than those in the highest, meaning they receive proportionally fewer years of retirement.',
        example: 'Construction workers, farmers, and aged care workers in Australia experience high rates of physical injury and chronic pain, making it unrealistic to expect them to work until 67 or beyond.',
        sentences: {
          intro: 'A uniform increase in the retirement age is fundamentally unfair because it ignores the vast differences in health, life expectancy, and physical demands across different occupations and socioeconomic groups.',
          body: 'Workers who have spent decades in physically demanding occupations have shorter life expectancies and greater health challenges, meaning a higher retirement age effectively reduces their time in retirement.',
          conclusion: 'Any increase in the retirement age must include provisions for early retirement for workers in physically demanding occupations, ensuring equity rather than imposing a one-size-fits-all policy.'
        }
      },
      {
        point: 'Older workers remaining in the workforce may reduce opportunities for younger workers',
        evidence: 'Some labour economists argue that in the short term, delayed retirement can reduce entry-level opportunities for young people, particularly in sectors with limited position growth.',
        example: 'In academic and public service positions, where promotion often depends on the retirement of senior staff, delayed retirement can create bottlenecks that frustrate the career progression of younger professionals.',
        sentences: {
          intro: 'Keeping older workers in employment for longer may inadvertently reduce opportunities for younger workers who are competing for a limited number of positions.',
          body: 'In hierarchical organisations where advancement depends on senior departures, delayed retirement can create frustrating career bottlenecks for talented younger employees.',
          conclusion: 'Retirement policy must consider its impact on intergenerational employment dynamics, ensuring that extending working lives for some does not come at the cost of career opportunities for others.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, raising the retirement age is a necessary response to increasing life expectancy, but it must be implemented with fairness and flexibility. Policies should include provisions for early retirement in physically demanding occupations, flexible transition arrangements, and investment in lifelong health and skills development to ensure that older workers can contribute effectively.',
    keyVocabulary: ['retirement age', 'pension sustainability', 'life expectancy', 'dependency ratio', 'occupational health', 'flexible retirement', 'superannuation', 'intergenerational equity']
  },

  {
    id: 'wrk04',
    category: 'Work',
    question: 'The gig economy, where workers take on short-term contracts and freelance work through platforms like Uber, has grown rapidly. Is this a positive development for workers and the economy?',
    keywords: ['gig economy', 'freelance work', 'platform economy', 'worker rights'],
    forPoints: [
      {
        point: 'The gig economy offers flexibility and autonomy that many workers value',
        evidence: 'A McKinsey survey found that 70% of gig workers chose independent work voluntarily, citing flexibility, autonomy, and the ability to control their own schedules as primary motivations.',
        example: 'In Australia, platforms like Airtasker and Freelancer have enabled thousands of skilled professionals to build independent careers on their own terms, choosing when, where, and how much they work.',
        sentences: {
          intro: 'The gig economy empowers workers with unprecedented flexibility and autonomy, allowing them to design their working lives around personal priorities and preferences.',
          body: 'The fact that a clear majority of gig workers report choosing this arrangement voluntarily suggests that the flexibility offered by platform work meets a genuine demand in the modern labour market.',
          conclusion: 'For many workers, the gig economy represents liberation from the rigidity of traditional employment, offering the freedom to balance work with other life priorities.'
        }
      },
      {
        point: 'Gig platforms create economic opportunities and reduce barriers to employment',
        evidence: 'Research by the ILO found that digital platforms have created over 160 million jobs worldwide, providing income opportunities for individuals who face barriers to traditional employment.',
        example: 'Uber and similar ride-sharing platforms have enabled immigrants, students, and semi-retired individuals in Australian cities to earn supplementary income with minimal entry barriers.',
        sentences: {
          intro: 'The gig economy lowers barriers to employment, creating income opportunities for individuals who may struggle to access traditional job markets.',
          body: 'For immigrants, students, carers, and others with non-standard schedules, gig platforms provide an accessible route to earning income that traditional employment structures often cannot accommodate.',
          conclusion: 'The democratisation of economic opportunity through gig platforms represents a significant benefit, particularly for those on the margins of the traditional labour market.'
        }
      },
      {
        point: 'The gig economy promotes innovation and entrepreneurship',
        evidence: 'Platform businesses have created entirely new service categories and consumer experiences, with the global gig economy valued at over $455 billion in 2023.',
        example: 'Australian-founded platforms like Canva and Envato have built global businesses by connecting freelance creatives with clients, demonstrating the gig economy\'s potential to drive innovation.',
        sentences: {
          intro: 'The gig economy fosters innovation by connecting diverse talent with diverse needs, creating new service categories and business models that benefit both workers and consumers.',
          body: 'The emergence of Australian-founded platforms that connect freelance talent with global clients illustrates how the gig economy can drive entrepreneurship and innovation.',
          conclusion: 'By lowering the cost of finding and engaging skilled workers, the gig economy accelerates innovation and enables small businesses and startups to compete with established corporations.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Gig workers lack the employment protections and benefits available to regular employees',
        evidence: 'A report by the Australia Institute found that gig workers earn an average of 40% less per hour than comparable employees when adjusted for the absence of leave entitlements, superannuation, and insurance.',
        example: 'The death of five food delivery riders in Australia in 2020 highlighted the absence of workers\' compensation, safety protections, and insurance for gig workers, prompting calls for regulatory reform.',
        sentences: {
          intro: 'The gig economy\'s most serious flaw is that it denies workers the fundamental protections, including minimum wages, leave entitlements, and workers\' compensation, that employees take for granted.',
          body: 'The tragic deaths of food delivery riders in Australian cities exposed the human cost of a system that treats workers as independent contractors, denying them the safety protections that employees receive.',
          conclusion: 'Governments must urgently extend basic employment protections to gig workers to prevent the gig economy from becoming a vehicle for worker exploitation.'
        }
      },
      {
        point: 'The gig economy creates income instability and financial insecurity for many workers',
        evidence: 'Research by the Victorian government found that 40% of gig workers in Australia earn below the minimum wage, with income fluctuating significantly from week to week.',
        example: 'Many Uber drivers in Australia have reported that after deducting vehicle costs, insurance, and fuel, their effective hourly earnings fall well below the national minimum wage.',
        sentences: {
          intro: 'For many gig workers, the flexibility of platform work comes at the cost of income instability and financial insecurity that undermines their well-being and long-term planning.',
          body: 'The finding that a large proportion of Australian gig workers earn below the minimum wage reveals that the flexibility celebrated by platforms often disguises exploitative pay and working conditions.',
          conclusion: 'A fair gig economy must guarantee a minimum income floor that ensures no worker falls below a dignified standard of living, regardless of their employment classification.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the gig economy offers genuine benefits of flexibility and accessibility, but these must not come at the cost of basic worker protections and fair pay. Governments should develop regulatory frameworks that preserve the flexibility of platform work while guaranteeing gig workers minimum wages, insurance, superannuation, and safety protections.',
    keyVocabulary: ['gig economy', 'platform work', 'freelance', 'worker classification', 'employment protections', 'income insecurity', 'labour flexibility', 'independent contractor']
  },

  {
    id: 'wrk05',
    category: 'Work',
    question: 'Some companies have trialled a four-day work week with no reduction in pay. Should this become the standard working arrangement?',
    keywords: ['four-day work week', 'productivity', 'work-life balance', 'working hours'],
    forPoints: [
      {
        point: 'Four-day work week trials have consistently shown maintained or improved productivity',
        evidence: 'The world\'s largest four-day work week trial, conducted across 61 UK companies in 2022, found that 92% of participating companies chose to continue the arrangement, with revenue increasing by an average of 1.4%.',
        example: 'Perpetual Guardian, a New Zealand financial services company, permanently adopted a four-day week after its 2018 trial showed a 20% increase in employee productivity alongside significant improvements in work-life balance and stress levels.',
        sentences: {
          intro: 'The most compelling evidence for the four-day work week is that multiple large-scale trials have demonstrated maintained or improved productivity with fewer working days.',
          body: 'The UK\'s landmark trial, involving thousands of workers across diverse industries, provides robust evidence that reducing working days does not reduce output and may actually improve it.',
          conclusion: 'The consistent positive results from four-day work week trials across multiple countries suggest that the five-day model is an outdated convention rather than an economic necessity.'
        }
      },
      {
        point: 'A shorter work week improves employee health, well-being, and retention',
        evidence: 'Participants in four-day work week trials reported 39% less stress, 71% reduced burnout, and 65% fewer sick days compared to their previous five-day schedules.',
        example: 'Microsoft Japan\'s "Work-Life Choice Challenge" in 2019 resulted in a 40% boost in productivity and a 25% reduction in employee electricity costs during the four-day trial period.',
        sentences: {
          intro: 'A four-day work week significantly improves employee health and well-being, reducing stress, burnout, and absenteeism while boosting job satisfaction and retention.',
          body: 'The dramatic reductions in stress and burnout reported by trial participants demonstrate that the traditional five-day week may be counterproductively long, undermining the very productivity it is supposed to support.',
          conclusion: 'Investing in employee well-being through a shorter work week ultimately benefits employers through lower turnover, reduced absenteeism, and a more engaged and productive workforce.'
        }
      },
      {
        point: 'Reduced commuting and office use deliver environmental benefits',
        evidence: 'The UK four-day week trial participants reduced their commuting time by an average of 30%, with associated reductions in fuel consumption and carbon emissions.',
        example: 'If Australia adopted a four-day work week nationwide, the reduction in commuter traffic alone could lower transport emissions by an estimated 10-15%, contributing meaningfully to climate targets.',
        sentences: {
          intro: 'A four-day work week delivers significant environmental benefits through reduced commuting, lower office energy consumption, and decreased road congestion.',
          body: 'The potential for a 10-15% reduction in transport emissions through a nationwide four-day work week would represent a meaningful contribution to Australia\'s climate change commitments.',
          conclusion: 'The environmental benefits of a shorter work week provide an additional compelling argument for a policy that already delivers clear economic and social advantages.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Not all industries and roles can accommodate a four-day work week',
        evidence: 'Sectors such as healthcare, emergency services, hospitality, and retail require continuous staffing, making a standard four-day week impractical without significant increases in workforce size.',
        example: 'Australian hospitals, which already face staffing shortages, would struggle to maintain patient care standards with a four-day week unless significantly more nurses and doctors were employed.',
        sentences: {
          intro: 'A universal four-day work week is impractical for industries that require continuous service coverage, including healthcare, emergency services, and hospitality.',
          body: 'Implementing a four-day week in already understaffed hospitals and emergency services would either compromise patient care or require substantial additional hiring at considerable cost.',
          conclusion: 'While a four-day week may be feasible for office-based knowledge workers, a one-size-fits-all approach ignores the operational realities of essential service industries.'
        }
      },
      {
        point: 'Compressing work into fewer days may increase daily stress and intensity',
        evidence: 'Some trial participants reported that condensing five days of work into four created more intense and stressful individual workdays, potentially offsetting the benefits of the extra day off.',
        example: 'In trials where the four-day week required longer daily hours rather than reduced total hours, some employees reported higher levels of fatigue and difficulty maintaining concentration during extended shifts.',
        sentences: {
          intro: 'Simply compressing the same workload into fewer days may not reduce overall stress but merely concentrate it, potentially undermining the health benefits that the policy aims to achieve.',
          body: 'Employees who reported increased daily intensity during four-day week trials highlight the risk that without genuine workload reduction, fewer days may simply mean more stressful days.',
          conclusion: 'A successful four-day work week requires not just schedule compression but genuine improvements in work efficiency and realistic expectations about output.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the evidence from multiple large-scale trials strongly supports the four-day work week as a viable option for many knowledge-based industries, delivering benefits for productivity, well-being, and the environment. However, its implementation must be tailored to different sectors and accompanied by genuine workload management to ensure that the benefits are real rather than illusory.',
    keyVocabulary: ['four-day work week', 'productivity', 'work-life balance', 'employee well-being', 'trial results', 'work intensity', 'reduced commuting', 'flexible scheduling']
  },

  {
    id: 'wrk06',
    category: 'Work',
    question: 'CEOs of large companies often earn hundreds of times more than their average employees. Is this level of pay disparity justified?',
    keywords: ['CEO pay', 'income inequality', 'executive compensation', 'wage gap'],
    forPoints: [
      {
        point: 'CEO compensation reflects the enormous responsibility and impact of executive decisions',
        evidence: 'Research by Harvard Business School found that CEO decisions can account for up to 15% of variance in firm performance, meaning that the right leader can add billions in shareholder value.',
        example: 'Tim Cook\'s leadership of Apple has been credited with more than doubling the company\'s market capitalisation to over $3 trillion, generating hundreds of billions in value for shareholders, employees, and the broader economy.',
        sentences: {
          intro: 'The exceptional compensation of CEOs reflects the extraordinary impact that executive leadership has on the performance, direction, and survival of large corporations.',
          body: 'When a single CEO\'s strategic decisions can generate or destroy billions of dollars in value, the market for executive talent naturally commands premium compensation.',
          conclusion: 'Just as elite athletes and entertainers earn exceptional incomes because of their exceptional performance, CEOs are compensated for the unique and outsized impact they have on large organisations.'
        }
      },
      {
        point: 'Competitive executive compensation is necessary to attract and retain top leadership talent',
        evidence: 'A global market for CEO talent means that companies must offer competitive packages or risk losing leaders to rivals, with executive search firms reporting that top candidates routinely receive multiple offers.',
        example: 'When Australian companies fail to offer competitive CEO packages, they risk losing leaders to international competitors, as occurred when several Australian banking executives were recruited by Asian financial institutions offering significantly higher compensation.',
        sentences: {
          intro: 'In a global market for executive talent, competitive compensation is essential for attracting and retaining the leadership that drives organisational success.',
          body: 'Companies that fail to offer competitive packages risk losing talented leaders to international rivals, potentially compromising their strategic direction and competitive position.',
          conclusion: 'While CEO pay levels may appear excessive in isolation, they must be evaluated in the context of a competitive global market where leadership talent is scarce and highly sought after.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Extreme pay gaps undermine employee morale, motivation, and organisational performance',
        evidence: 'Research published in the Academy of Management Journal found that companies with the largest CEO-to-worker pay ratios experienced 10% lower employee satisfaction and 15% higher turnover rates.',
        example: 'In 2023, the average CEO of an ASX 100 company earned over $5 million, approximately 50 times the median Australian full-time salary, a ratio that has tripled since the 1990s.',
        sentences: {
          intro: 'Extreme pay disparities between executives and ordinary workers damage employee morale and commitment, ultimately undermining the organisational performance that CEO pay is supposed to incentivise.',
          body: 'The widening gap between executive and worker compensation erodes the sense of shared purpose and fairness that is essential for building engaged, motivated, and loyal workforces.',
          conclusion: 'Companies that allow CEO pay to balloon unchecked risk creating a toxic culture of resentment that harms performance far more than any individual executive can improve it.'
        }
      },
      {
        point: 'CEO pay has become disconnected from actual performance, driven by market distortions',
        evidence: 'A study by the Economic Policy Institute found that CEO compensation in the US grew by 1,322% between 1978 and 2020, while typical worker compensation grew by just 18%, with no corresponding increase in corporate performance.',
        example: 'Several Australian CEOs have received multimillion-dollar bonuses even during years of declining share prices and workforce redundancies, highlighting the disconnect between executive pay and company performance.',
        sentences: {
          intro: 'The explosion in CEO compensation over recent decades bears little relationship to improvements in corporate performance, suggesting that executive pay is driven by market distortions rather than merit.',
          body: 'The award of generous bonuses to CEOs during periods of poor company performance and employee layoffs exposes the failure of current compensation structures to align executive incentives with genuine results.',
          conclusion: 'Reform of executive compensation is needed to re-establish the link between CEO pay and actual performance, ensuring that shareholders and employees share equitably in organisational success.'
        }
      },
      {
        point: 'Excessive CEO pay contributes to broader economic inequality and social division',
        evidence: 'Oxfam reports that the combined wealth of the world\'s ten richest individuals exceeds the total wealth of the bottom 3.1 billion people, a disparity fuelled in part by extreme executive compensation.',
        example: 'The concentration of wealth among top executives has contributed to declining homeownership rates among young Australians, as asset prices are inflated by the investment activity of the ultra-wealthy.',
        sentences: {
          intro: 'The extreme wealth accumulated by corporate executives contributes to the broader economic inequality that is dividing societies and undermining social cohesion.',
          body: 'When CEO compensation packages generate individual fortunes that dwarf the lifetime earnings of thousands of ordinary workers, the social fabric of shared opportunity and fairness is fundamentally strained.',
          conclusion: 'Addressing extreme CEO pay is not about punishing success but about ensuring that the economic system generates broadly shared prosperity rather than concentrating wealth at the very top.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while competitive executive compensation is necessary to attract talented leadership, the current level of CEO-to-worker pay disparity in many countries has become excessive and disconnected from performance. Reforms including binding shareholder votes on executive pay, performance-linked compensation structures, and greater transparency can help restore a fairer balance.',
    keyVocabulary: ['executive compensation', 'pay ratio', 'income disparity', 'shareholder value', 'performance-linked pay', 'corporate governance', 'wage stagnation', 'talent market']
  },

  {
    id: 'wrk07',
    category: 'Work',
    question: 'Despite progress, women remain underrepresented in senior leadership positions in most industries. What are the barriers and what measures should be taken?',
    keywords: ['women in leadership', 'glass ceiling', 'gender diversity', 'workplace equality'],
    forPoints: [
      {
        point: 'Gender-diverse leadership teams deliver superior business performance',
        evidence: 'A McKinsey study of over 1,000 companies found that those in the top quartile for gender diversity on executive teams were 25% more likely to achieve above-average profitability.',
        example: 'Macquarie Group, one of Australia\'s leading financial institutions, has prioritised gender diversity in leadership and attributes part of its consistent outperformance to the diversity of perspectives at the executive level.',
        sentences: {
          intro: 'The business case for women in leadership is compelling: gender-diverse executive teams consistently outperform homogeneous ones in profitability, innovation, and decision-making quality.',
          body: 'The correlation between gender diversity in leadership and superior financial performance, documented across over a thousand companies, demonstrates that inclusion is not merely an ethical goal but a business imperative.',
          conclusion: 'Companies that fail to promote women into leadership positions are not only perpetuating inequality but also underperforming their potential.'
        }
      },
      {
        point: 'Mentoring programmes and sponsorship accelerate women\'s advancement into leadership',
        evidence: 'Research by Catalyst found that women with formal mentors are promoted at rates 15-20% higher than those without, and that sponsorship by senior leaders is the single strongest predictor of female executive advancement.',
        example: 'The Chief Executive Women organisation in Australia provides mentoring and sponsorship for emerging female leaders, and its alumni now hold senior positions across major Australian corporations and government agencies.',
        sentences: {
          intro: 'Structured mentoring and sponsorship programmes provide women with the guidance, visibility, and advocacy needed to navigate the barriers to senior leadership.',
          body: 'The success of organisations like Chief Executive Women in advancing female leaders into top positions confirms that targeted support and sponsorship can break through the structural barriers that hold women back.',
          conclusion: 'Every organisation serious about gender diversity in leadership should establish formal mentoring and sponsorship programmes that actively support the career progression of talented women.'
        }
      },
      {
        point: 'Flexible work policies and parental support are essential for retaining women in the leadership pipeline',
        evidence: 'A KPMG study found that 55% of women who left the corporate leadership pipeline cited inflexible work arrangements and inadequate parental support as primary reasons for their departure.',
        example: 'Deloitte Australia\'s introduction of 18 weeks of paid parental leave for both parents and flexible return-to-work arrangements has increased the retention of women returning from maternity leave by 30%.',
        sentences: {
          intro: 'The loss of talented women from the leadership pipeline is often driven by inflexible workplace structures that fail to accommodate the realities of parenthood.',
          body: 'Deloitte\'s success in retaining women through generous parental leave and flexible arrangements demonstrates that relatively simple policy changes can significantly reduce the attrition of female talent.',
          conclusion: 'Organisations that invest in flexible work policies and genuine parental support will retain the talented women who would otherwise leave, strengthening their leadership pipeline.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Forcing gender outcomes through quotas may compromise merit-based selection',
        evidence: 'Some researchers argue that mandatory gender targets can lead to the appointment of less-qualified candidates, potentially undermining organisational performance and the credibility of women who achieve leadership positions.',
        example: 'A survey of Australian company directors found that 28% of women in leadership reported concerns about being perceived as "diversity appointments" rather than being recognised for their professional achievements.',
        sentences: {
          intro: 'Critics argue that mandatory gender targets risk substituting the principle of merit with demographic box-ticking, potentially undermining both organisational quality and the credibility of female leaders.',
          body: 'The concern expressed by some female leaders about being perceived as diversity appointments rather than merit-based selections highlights the unintended consequences of rigid quota systems.',
          conclusion: 'The focus should be on removing systemic barriers and biases rather than imposing numerical targets that may create new forms of stigma.'
        }
      },
      {
        point: 'Personal career choices and preferences contribute to gender differences in leadership representation',
        evidence: 'Longitudinal studies suggest that some gender differences in career trajectories reflect genuine differences in preferences regarding work intensity, risk-taking, and career prioritisation, rather than solely discrimination.',
        example: 'Research shows that MBA graduates of both genders start with similar career aspirations, but women are more likely to prioritise work-life balance and purpose over maximum compensation and seniority as their careers progress.',
        sentences: {
          intro: 'Some scholars argue that gender differences in leadership representation partly reflect genuine differences in career preferences and priorities rather than exclusively systemic barriers.',
          body: 'The finding that women and men may increasingly diverge in their career priorities over time suggests that not all gender gaps in leadership can be attributed to discrimination alone.',
          conclusion: 'Addressing the leadership gap requires understanding and respecting individual choices while ensuring that structural barriers do not constrain the opportunities available to women who aspire to lead.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, increasing women\'s representation in leadership is both an ethical imperative and a business necessity. This requires a comprehensive approach including mentoring, flexible work policies, transparent promotion processes, and cultural change, rather than relying solely on quotas. The goal should be to create organisations where talent and ambition, not gender, determine career progression.',
    keyVocabulary: ['glass ceiling', 'gender diversity', 'mentoring', 'sponsorship', 'parental leave', 'leadership pipeline', 'merit-based selection', 'unconscious bias']
  },

  {
    id: 'wrk08',
    category: 'Work',
    question: 'Is it better to choose a career you are passionate about, or one that offers financial stability and good income?',
    keywords: ['career choice', 'passion', 'financial stability', 'job satisfaction'],
    forPoints: [
      {
        point: 'Pursuing a passion leads to greater job satisfaction and long-term career success',
        evidence: 'A Gallup study found that employees who describe their work as a "calling" are 36% more satisfied with their lives overall and 28% more likely to achieve high performance ratings.',
        example: 'Many of the world\'s most successful entrepreneurs, including Steve Jobs and Sara Blakely, built their careers around personal passions, demonstrating that intrinsic motivation can drive extraordinary achievement.',
        sentences: {
          intro: 'Choosing a career aligned with one\'s passions provides the intrinsic motivation and sense of purpose that are essential for long-term satisfaction and success.',
          body: 'Research consistently shows that individuals who view their work as a calling rather than merely a job achieve higher levels of performance, satisfaction, and overall life happiness.',
          conclusion: 'In a career spanning forty years or more, the daily fulfilment that comes from passionate engagement with meaningful work is far more valuable than a higher salary in a job that provides no joy.'
        }
      },
      {
        point: 'Passion-driven workers are more resilient, creative, and committed',
        evidence: 'Psychological research on intrinsic motivation shows that passionate workers persist 40% longer on challenging tasks and generate 50% more creative solutions than those motivated primarily by financial reward.',
        example: 'Teachers in Australia, despite modest salaries compared to corporate professionals, consistently report among the highest levels of career satisfaction, with many citing the fulfilment of shaping young lives as their primary motivation.',
        sentences: {
          intro: 'Workers who are genuinely passionate about their profession bring higher levels of creativity, resilience, and commitment that benefit both themselves and their organisations.',
          body: 'The dedication of Australian teachers, who choose fulfilment over financial maximisation, illustrates that passion can sustain exceptional professional commitment even in the absence of premium compensation.',
          conclusion: 'A society that encourages its citizens to pursue meaningful work creates a more innovative, resilient, and fulfilled population.'
        }
      },
      {
        point: 'The modern economy increasingly rewards unique skills and specialised knowledge born of genuine interest',
        evidence: 'The rise of the creator economy, valued at over $100 billion, demonstrates that passionate individuals can increasingly monetise their unique interests and expertise.',
        example: 'Australian content creators, artisans, and independent professionals have built successful careers by combining passion with entrepreneurial skills, leveraging digital platforms to reach global audiences.',
        sentences: {
          intro: 'The modern economy increasingly rewards individuals who develop deep expertise and unique perspectives born of genuine passion, creating new pathways to both fulfilment and financial success.',
          body: 'The explosive growth of the creator economy demonstrates that passion and financial success are not mutually exclusive in a digital world that rewards authenticity and specialisation.',
          conclusion: 'In an economy that increasingly values creativity and specialisation, following one\'s passion may be the most effective career strategy as well as the most fulfilling.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Financial stability provides the foundation for a secure and comfortable life',
        evidence: 'Research in the Journal of Personality and Social Psychology found that income below $75,000 per year is strongly associated with reduced emotional well-being, suggesting that financial security is a prerequisite for happiness.',
        example: 'Many graduates who pursued passion-driven careers in the arts and humanities report struggling with student debt, housing affordability, and financial stress, which can ultimately undermine the very quality of life they sought.',
        sentences: {
          intro: 'While passion is important, financial stability provides the essential foundation of security, comfort, and freedom from stress that enables genuine quality of life.',
          body: 'Research demonstrates that below a certain income threshold, financial stress significantly diminishes emotional well-being, suggesting that passion alone cannot compensate for material insecurity.',
          conclusion: 'A pragmatic approach to career choice ensures that basic financial needs are met, providing the security and stability from which individuals can then pursue their passions.'
        }
      },
      {
        point: 'Passion can develop through competence and mastery in any field',
        evidence: 'Career researcher Cal Newport argues that "passion follows mastery," citing evidence that workers develop satisfaction and engagement as they become skilled and valued in their roles, regardless of initial interest.',
        example: 'Many successful professionals in fields like accounting, engineering, and medicine report developing deep satisfaction and passion for their work after years of developing expertise, despite not starting with an inherent passion for the subject.',
        sentences: {
          intro: 'The assumption that one must discover a pre-existing passion is misleading; research suggests that passion more often develops through developing competence and mastery in a chosen field.',
          body: 'The experience of countless professionals who grew to love their work after developing expertise suggests that starting with financial stability and building passion through mastery is a viable and common path.',
          conclusion: 'Rather than waiting to discover a pre-existing passion, individuals may be better served by developing valuable skills and allowing engagement and purpose to emerge from competence.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the ideal career combines elements of both passion and financial viability. While passion provides the motivation and fulfilment that sustain long careers, financial stability is a necessary foundation for well-being. The wisest approach is to seek work that aligns with one\'s interests while developing the practical skills that ensure economic security.',
    keyVocabulary: ['career choice', 'intrinsic motivation', 'job satisfaction', 'financial security', 'passion-driven career', 'skills development', 'work fulfilment', 'career planning']
  },

  {
    id: 'wrk09',
    category: 'Work',
    question: 'Some people believe that a university degree is no longer necessary for professional success. To what extent do you agree?',
    keywords: ['university degree', 'higher education', 'vocational training', 'career success'],
    forPoints: [
      {
        point: 'Many successful professionals and entrepreneurs have achieved success without degrees',
        evidence: 'A survey by LinkedIn found that the proportion of job postings requiring a bachelor\'s degree has declined by 15% since 2020, with major employers increasingly prioritising skills over credentials.',
        example: 'Companies like Google, Apple, and IBM have removed degree requirements from many positions, focusing instead on demonstrated skills and practical experience through portfolio assessments and technical interviews.',
        sentences: {
          intro: 'The declining emphasis on formal degrees among major employers reflects a growing recognition that skills, experience, and aptitude matter more than academic credentials.',
          body: 'When companies like Google and Apple remove degree requirements from their hiring processes, it signals a fundamental shift in how the labour market values talent and capability.',
          conclusion: 'The traditional assumption that a university degree is a prerequisite for professional success is increasingly being challenged by a skills-first economy.'
        }
      },
      {
        point: 'Alternative pathways such as vocational training, apprenticeships, and online learning offer competitive career opportunities',
        evidence: 'In Australia, the median starting salary for graduates of trade apprenticeships is now comparable to that of bachelor\'s degree holders, while trades shortages ensure strong employment prospects.',
        example: 'Australia\'s TAFE system provides industry-specific vocational training that leads directly to employment in high-demand sectors such as construction, healthcare, and information technology.',
        sentences: {
          intro: 'Vocational training, apprenticeships, and industry certifications provide practical, employment-focused pathways to rewarding careers that do not require a university degree.',
          body: 'The competitive salaries and strong employment prospects available to Australian trade graduates demonstrate that vocational pathways can offer equal or superior career outcomes to traditional degrees.',
          conclusion: 'A modern education system should value all pathways to professional success equally, ensuring that vocational options receive the same respect and investment as university programmes.'
        }
      },
      {
        point: 'The rising cost of university education makes degrees increasingly poor value for many students',
        evidence: 'Australian student debt has grown to over $74 billion, with the average graduate owing approximately $25,000, while graduate underemployment rates remain above 25% for some disciplines.',
        example: 'Many Australian graduates in fields such as humanities, arts, and social sciences find themselves working in positions that do not require their degree, while carrying significant HECS debt.',
        sentences: {
          intro: 'The escalating cost of university education, combined with high rates of graduate underemployment, raises serious questions about whether a degree represents good value for all students.',
          body: 'With one in four graduates working in roles that do not require their qualification, the assumption that a university degree automatically leads to professional success is increasingly unfounded.',
          conclusion: 'Students should carefully evaluate whether a university degree or an alternative pathway offers the best return on their investment of time and money for their specific career goals.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'University graduates still earn significantly more over their lifetimes',
        evidence: 'OECD data shows that university graduates earn an average of 48% more than workers with only secondary education over their lifetimes, with the premium increasing for postgraduate qualifications.',
        example: 'In Australia, the median lifetime earnings of a bachelor\'s degree holder are approximately $600,000 higher than those of a worker with only Year 12 completion.',
        sentences: {
          intro: 'Despite the rise of alternative pathways, the data consistently shows that university graduates enjoy significantly higher lifetime earnings and better employment outcomes.',
          body: 'The substantial earnings premium associated with university education in Australia confirms that for most individuals, a degree remains one of the most reliable investments in long-term financial prosperity.',
          conclusion: 'While not essential for every career, a university degree remains statistically the strongest predictor of long-term professional success and financial security.'
        }
      },
      {
        point: 'University education develops critical thinking, research skills, and breadth of knowledge that are valuable in any career',
        evidence: 'Employers consistently rank critical thinking, written communication, and analytical reasoning among the most valued workplace skills, all of which are core outcomes of university education.',
        example: 'Graduates of Australia\'s Group of Eight universities report that their degrees provided not just technical knowledge but the intellectual frameworks and communication skills that underpin effective leadership.',
        sentences: {
          intro: 'Beyond specific qualifications, university education develops the critical thinking, communication, and analytical skills that are foundational to professional success in virtually any field.',
          body: 'The transferable skills cultivated through university study, including the ability to analyse complex problems, communicate persuasively, and think independently, remain highly valued by employers across all industries.',
          conclusion: 'University education offers more than a credential; it develops the intellectual capabilities that enable graduates to adapt, lead, and innovate throughout their careers.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while a university degree is no longer the only pathway to professional success, it continues to offer significant advantages in earnings, skills development, and career flexibility. The ideal approach is to value all educational pathways equally and help individuals choose the option that best aligns with their career goals, aptitudes, and circumstances.',
    keyVocabulary: ['higher education', 'vocational training', 'skills-based hiring', 'graduate outcomes', 'apprenticeship', 'student debt', 'critical thinking', 'career pathways']
  },

  {
    id: 'wrk10',
    category: 'Work',
    question: 'Should unpaid internships be banned, or do they provide valuable experience that justifies working without pay?',
    keywords: ['unpaid internship', 'work experience', 'exploitation', 'career development'],
    forPoints: [
      {
        point: 'Unpaid internships exploit young workers and perpetuate socioeconomic inequality',
        evidence: 'A study by the Sutton Trust found that only students from families with above-average income can afford to work unpaid, meaning internships effectively exclude talented individuals from disadvantaged backgrounds.',
        example: 'In Australia\'s media and arts industries, unpaid internships are common, but only students whose families can subsidise their living expenses in expensive cities like Sydney and Melbourne can afford to accept them.',
        sentences: {
          intro: 'Unpaid internships are inherently discriminatory because they are accessible only to individuals with the financial resources to work without pay, excluding talented young people from disadvantaged backgrounds.',
          body: 'The concentration of unpaid internships in competitive industries such as media, law, and politics means that career success in these fields is determined not by talent but by the ability to afford free labour.',
          conclusion: 'Banning unpaid internships would level the playing field, ensuring that career opportunities are distributed based on merit rather than family wealth.'
        }
      },
      {
        point: 'Employers benefit from intern labour and should be required to compensate it',
        evidence: 'Research by the National Association of Colleges and Employers found that 63% of employers admitted that their interns performed work that would otherwise be done by paid employees.',
        example: 'Australia\'s Fair Work Ombudsman has investigated numerous cases where unpaid "interns" were effectively performing the duties of employees, violating workplace laws that require compensation for productive work.',
        sentences: {
          intro: 'When interns perform work that creates value for employers, the failure to pay them constitutes exploitation regardless of the educational label attached to the arrangement.',
          body: 'The finding that the majority of interns perform work that would otherwise require paid employees exposes unpaid internships as a mechanism for obtaining free labour under the guise of training.',
          conclusion: 'If an intern\'s work contributes to an employer\'s operations, basic fairness and workplace law require that it be compensated, even at a reduced training rate.'
        }
      },
      {
        point: 'Paid internships achieve better learning outcomes and are more valued by employers',
        evidence: 'The National Association of Colleges and Employers found that paid interns receive 52% more job offers and 32% higher starting salaries than unpaid interns, suggesting that paid experiences are more valuable.',
        example: 'Major Australian professional services firms including PricewaterhouseCoopers and KPMG offer paid internship programmes that combine genuine training with fair compensation, attracting the most talented candidates.',
        sentences: {
          intro: 'Research shows that paid internships deliver better outcomes for both interns and employers, with paid interns receiving more job offers and higher starting salaries than their unpaid counterparts.',
          body: 'The superior employment outcomes achieved by paid interns suggest that employers who invest in compensating their trainees attract better talent and create more meaningful learning experiences.',
          conclusion: 'Paid internships represent a genuine investment in talent development, while unpaid internships are increasingly recognised as exploitation that delivers inferior outcomes for all parties.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Some organisations, particularly non-profits and small businesses, cannot afford to pay interns',
        evidence: 'Small businesses and non-profit organisations often operate on tight budgets, and mandating paid internships could eliminate training opportunities that benefit both the organisation and the intern.',
        example: 'Many small Australian charities and arts organisations offer unpaid volunteer positions that provide valuable experience and networking opportunities that would disappear if payment were required.',
        sentences: {
          intro: 'Mandating payment for all internships could eliminate valuable opportunities at small businesses and non-profit organisations that lack the budgets to compensate trainees.',
          body: 'For cash-strapped charities and small businesses, unpaid internships offer a mutually beneficial arrangement where organisations gain assistance and interns gain experience that would otherwise be unavailable.',
          conclusion: 'A blanket ban on unpaid internships must include exceptions or subsidies for organisations that genuinely cannot afford to pay but offer valuable training experiences.'
        }
      },
      {
        point: 'Short-term unpaid work experience provides valuable exposure and networking opportunities',
        evidence: 'Surveys of former interns show that 72% credit their internship experience with helping them secure their first professional position, regardless of whether it was paid or unpaid.',
        example: 'Law students in Australia often complete short unpaid placements at courts and legal aid offices, gaining courtroom exposure and professional connections that significantly enhance their career prospects.',
        sentences: {
          intro: 'For many students, short-term unpaid work experience provides invaluable exposure to professional environments and networking opportunities that formal education alone cannot offer.',
          body: 'The strong correlation between internship experience and subsequent employment suggests that even unpaid placements can provide significant career benefits through practical exposure and professional connections.',
          conclusion: 'While long-term unpaid internships should be prohibited, short-term work experience programmes supervised by educational institutions can provide genuine learning benefits.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, long-term unpaid internships that replace paid positions should be banned as they exploit young workers and perpetuate inequality. However, short-term, educationally supervised work placements can provide genuine value. The best approach is to require fair compensation for all productive work while allowing structured, short-duration observation and learning experiences.',
    keyVocabulary: ['unpaid internship', 'workplace exploitation', 'socioeconomic inequality', 'work experience', 'fair compensation', 'talent pipeline', 'career development', 'labour rights']
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 5: MEDIA & CRIME (med01–med08)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'med01',
    category: 'Media & Crime',
    question: 'The spread of fake news and misinformation has become a major concern. Should governments regulate online content to combat fake news, or would this threaten freedom of speech?',
    keywords: ['fake news', 'misinformation', 'content regulation', 'freedom of speech'],
    forPoints: [
      {
        point: 'Misinformation poses real threats to public health, democratic processes, and social stability',
        evidence: 'The WHO declared an "infodemic" during COVID-19, estimating that misinformation about the virus led to hundreds of deaths from unproven treatments and contributed to vaccine hesitancy.',
        example: 'During the 2020 US presidential election, Facebook removed over 12 million pieces of content containing COVID-19 misinformation, while false election fraud claims contributed to the January 6th Capitol attack.',
        sentences: {
          intro: 'The real-world consequences of misinformation, including preventable deaths and threats to democracy, make government regulation a necessary response to a dangerous phenomenon.',
          body: 'The tangible harm caused by misinformation during the COVID-19 pandemic and recent elections demonstrates that the problem extends far beyond hurt feelings to genuine threats to public safety and democratic governance.',
          conclusion: 'When misinformation kills people and undermines democracy, the argument that all speech must remain unregulated becomes untenable.'
        }
      },
      {
        point: 'Technology platforms have proven unable or unwilling to self-regulate effectively',
        evidence: 'Internal documents leaked from Meta in 2021 revealed that the company was aware its algorithms amplified harmful misinformation but prioritised engagement metrics over content quality.',
        example: 'Australia\'s News Media Bargaining Code, enacted in 2021, was necessary precisely because platforms like Google and Facebook had failed to take voluntary action on content quality and fair compensation for news publishers.',
        sentences: {
          intro: 'The failure of technology platforms to self-regulate content quality has made government intervention necessary to protect the integrity of public discourse.',
          body: 'Internal revelations from major platforms confirm that commercial incentives systematically favour engagement over accuracy, making self-regulation fundamentally insufficient.',
          conclusion: 'When private companies profit from the spread of misinformation, only government regulation can create the accountability needed to protect the public interest.'
        }
      },
      {
        point: 'Regulatory frameworks can combat misinformation while preserving legitimate speech',
        evidence: 'The European Union\'s Digital Services Act requires platforms to be transparent about their algorithms and take action against illegal content, while explicitly protecting legitimate expression.',
        example: 'Taiwan\'s approach to combating misinformation, which combines rapid government fact-checking with media literacy education, has been effective without resorting to censorship of legitimate political debate.',
        sentences: {
          intro: 'Well-designed regulatory frameworks can effectively combat misinformation while preserving the freedom of expression that is essential for democratic society.',
          body: 'Taiwan\'s successful combination of government fact-checking and media literacy education demonstrates that it is possible to address misinformation without the heavy-handed censorship that critics fear.',
          conclusion: 'The false dichotomy between regulation and free speech ignores the many examples of proportionate, effective frameworks that protect both truth and liberty.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Government regulation of "truth" is inherently dangerous and susceptible to abuse',
        evidence: 'Freedom House reports that over 50 countries use "fake news" or "misinformation" laws to prosecute journalists, activists, and political opponents who challenge official narratives.',
        example: 'Russia\'s 2019 "fake news" law has been used to suppress reporting on the war in Ukraine, demonstrating how anti-misinformation legislation can be weaponised against legitimate journalism.',
        sentences: {
          intro: 'The greatest danger of government regulation of online content is that it grants the state the power to define truth, a power that is inevitably abused to suppress dissent and control information.',
          body: 'Russia\'s use of anti-misinformation laws to criminalise truthful reporting about its military actions provides a stark warning about the authoritarian potential of government content regulation.',
          conclusion: 'History teaches that governments cannot be trusted to be the arbiters of truth, and any regulatory framework must include robust safeguards against political manipulation.'
        }
      },
      {
        point: 'Media literacy education is more effective and less risky than government regulation',
        evidence: 'Finland\'s comprehensive media literacy programme, integrated into the national curriculum from primary school, has helped the country consistently rank as the most resistant to misinformation in Europe.',
        example: 'The Australian Media Literacy Alliance advocates for embedding critical thinking skills in education rather than relying on government censorship, empowering citizens to identify misinformation independently.',
        sentences: {
          intro: 'Empowering citizens to critically evaluate information through media literacy education is a more sustainable and less dangerous approach than government regulation.',
          body: 'Finland\'s success in building population-wide resilience to misinformation through education demonstrates that an informed citizenry is the most effective and enduring defence against fake news.',
          conclusion: 'Rather than creating a precedent for government control of information, societies should invest in the critical thinking skills that enable citizens to distinguish truth from falsehood independently.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, combating misinformation requires a combination of proportionate regulation of the most harmful content, transparency requirements for platforms, and comprehensive media literacy education. The goal should be to create informed, resilient citizens who can navigate the information environment critically, while ensuring that regulatory powers are subject to strong democratic oversight.',
    keyVocabulary: ['misinformation', 'content regulation', 'media literacy', 'algorithmic transparency', 'platform accountability', 'digital services', 'information integrity', 'press freedom']
  },

  {
    id: 'med02',
    category: 'Media & Crime',
    question: 'Some people believe that violent video games and movies encourage aggressive behaviour in young people. To what extent do you agree or disagree?',
    keywords: ['violent media', 'aggressive behaviour', 'media influence', 'youth behaviour'],
    forPoints: [
      {
        point: 'Exposure to violent media is associated with increased aggressive thoughts and behaviours',
        evidence: 'A meta-analysis of 381 studies published in Psychological Bulletin found a significant correlation between exposure to violent media and increased aggressive behaviour, with an effect size comparable to that of secondhand smoke on lung cancer.',
        example: 'Following high-profile school shootings in the United States, investigators frequently discovered that perpetrators had extensive exposure to violent first-person shooter games and extremist online content.',
        sentences: {
          intro: 'Extensive psychological research has established a consistent correlation between exposure to violent media and increases in aggressive thoughts, feelings, and behaviours among young people.',
          body: 'The scale of research evidence linking violent media to aggression, spanning hundreds of studies over several decades, makes it difficult to dismiss the relationship as coincidental.',
          conclusion: 'While violent media is not the sole cause of aggression, the weight of evidence suggests it is a significant contributing factor that warrants attention from parents, educators, and policymakers.'
        }
      },
      {
        point: 'Young people are particularly vulnerable to media influence during critical developmental periods',
        evidence: 'Neuroscience research shows that the prefrontal cortex, responsible for impulse control and moral reasoning, does not fully develop until the mid-twenties, making young people more susceptible to media influence.',
        example: 'The Australian Classification Board restricts the sale of R18+ and MA15+ video games to appropriate age groups, recognising that children and adolescents are more vulnerable to the psychological effects of violent content.',
        sentences: {
          intro: 'The developing brains of children and adolescents are particularly susceptible to the influence of violent media, as the neural systems responsible for impulse control and moral judgment are not yet fully formed.',
          body: 'The neurological vulnerability of young people to media influence justifies age-based restrictions on violent content, which recognise that children lack the cognitive maturity to process violent imagery without negative effects.',
          conclusion: 'Age-appropriate content restrictions are a reasonable and evidence-based response to the heightened vulnerability of young people to the behavioural effects of violent media.'
        }
      },
      {
        point: 'Violent media desensitises viewers to real-world violence and reduces empathy',
        evidence: 'Research by the University of Michigan found that habitual consumers of violent media showed reduced brain activity in regions associated with empathy and emotional processing when viewing real-world violence.',
        example: 'Studies of combat veterans and heavy consumers of violent media show similar patterns of emotional desensitisation, suggesting that sustained exposure to violent content can fundamentally alter emotional responses.',
        sentences: {
          intro: 'Perhaps the most insidious effect of violent media is its capacity to desensitise viewers to real-world suffering, reducing empathy and making violence seem normal and acceptable.',
          body: 'The finding that heavy consumers of violent media show reduced empathic brain responses to real-world suffering suggests that prolonged exposure can fundamentally alter emotional processing.',
          conclusion: 'A society that normalises violence through entertainment risks cultivating a generation with diminished capacity for empathy and heightened tolerance for aggression.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Correlation between violent media and aggression does not prove causation',
        evidence: 'Many researchers argue that the observed correlations may reflect pre-existing aggressive tendencies rather than media influence, with naturally aggressive individuals being drawn to violent content.',
        example: 'Japan, which has one of the world\'s highest rates of violent video game consumption per capita, also has one of the lowest rates of violent crime, contradicting the assumption that violent media causes violence.',
        sentences: {
          intro: 'The apparent link between violent media and aggression may be misleading, as individuals with pre-existing aggressive tendencies may simply be more attracted to violent content.',
          body: 'Japan\'s combination of extremely high violent media consumption and remarkably low violent crime rates poses a fundamental challenge to the argument that violent games and movies cause real-world aggression.',
          conclusion: 'Until research can definitively establish a causal rather than correlational relationship, claims about the harmful effects of violent media should be treated with caution.'
        }
      },
      {
        point: 'Violent crime rates have declined significantly during the period of greatest growth in violent media',
        evidence: 'In Australia, the US, and most developed nations, violent crime rates have fallen by 30-50% since the 1990s, the very period during which violent video games and streaming media became ubiquitous.',
        example: 'Since the release of increasingly realistic violent video games in the 2000s and 2010s, Australia\'s assault rates have decreased by approximately 30%, contradicting predictions of a violence epidemic.',
        sentences: {
          intro: 'The dramatic decline in violent crime across the developed world during the era of widespread violent media consumption undermines the argument that such media drives real-world violence.',
          body: 'If violent video games and movies truly caused aggression, the explosion of violent media since the 1990s should have been accompanied by rising crime rates, yet the opposite has occurred.',
          conclusion: 'The disconnect between increasing violent media consumption and declining real-world violence suggests that other factors, including improved policing, education, and economic conditions, are far more significant determinants of violent behaviour.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while violent media may contribute to aggressive attitudes and desensitisation in some individuals, it is clearly not a primary cause of real-world violence. A proportionate response includes age-appropriate content restrictions, parental guidance, and media literacy education, rather than censorship or moral panic.',
    keyVocabulary: ['media violence', 'aggressive behaviour', 'desensitisation', 'content classification', 'correlation vs causation', 'media influence', 'age restrictions', 'media literacy']
  },

  {
    id: 'med03',
    category: 'Media & Crime',
    question: 'Paparazzi and tabloid media often invade the privacy of celebrities and public figures. Should stricter laws be introduced to protect individual privacy from media intrusion?',
    keywords: ['paparazzi', 'privacy', 'press freedom', 'media ethics'],
    forPoints: [
      {
        point: 'Every individual, including public figures, has a fundamental right to privacy',
        evidence: 'The European Convention on Human Rights establishes a right to private life that applies to all individuals, including public figures, except where publication serves a genuine public interest.',
        example: 'The tragic death of Princess Diana in 1997, while being pursued by paparazzi photographers, remains the most powerful illustration of how media intrusion can have fatal consequences.',
        sentences: {
          intro: 'Privacy is a fundamental human right that does not cease to exist simply because an individual has achieved public prominence.',
          body: 'The circumstances surrounding Princess Diana\'s death serve as a permanent reminder that the relentless pursuit of celebrities by paparazzi can escalate from intrusion to genuine danger.',
          conclusion: 'Stricter laws protecting the privacy of all individuals, including public figures, are necessary to prevent the media from treating human beings as commodities to be hunted for profit.'
        }
      },
      {
        point: 'Media intrusion causes significant psychological harm to targets and their families',
        evidence: 'Research published in the Journal of Media Psychology found that individuals subjected to sustained media intrusion experience rates of anxiety and depression 40% higher than the general population.',
        example: 'Prince Harry and Meghan Markle\'s public descriptions of the mental health impact of relentless tabloid coverage, including suicidal ideation, highlighted the psychological toll of media harassment.',
        sentences: {
          intro: 'The psychological harm inflicted by sustained media intrusion is well-documented and affects not only public figures themselves but also their children and families.',
          body: 'The frank accounts of mental health struggles caused by tabloid harassment highlight the human cost of treating individuals\' private lives as entertainment commodities.',
          conclusion: 'A civilised society must set limits on media behaviour that causes demonstrable psychological harm, regardless of the public profile of the individuals affected.'
        }
      },
      {
        point: 'Existing self-regulation by the media industry has proven inadequate',
        evidence: 'The UK\'s Leveson Inquiry (2011-2012) found systemic failures in media self-regulation, including phone hacking, illegal surveillance, and bribery of police officers by tabloid journalists.',
        example: 'In Australia, the Press Council\'s voluntary code of practice has been criticised for lacking enforcement power, with tabloid publications repeatedly violating privacy standards without meaningful consequences.',
        sentences: {
          intro: 'The repeated failure of media self-regulation to prevent invasive and unethical practices demonstrates the need for enforceable legal protections.',
          body: 'The criminal behaviour uncovered by the UK\'s Leveson Inquiry, including systematic phone hacking and police bribery, exposed the utter failure of the media industry to regulate itself.',
          conclusion: 'When self-regulation fails, as it demonstrably has, statutory protection of individual privacy becomes both necessary and justified.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Press freedom is essential for holding powerful individuals accountable',
        evidence: 'Media investigations have exposed corruption, abuse, and criminal behaviour by public figures that would have remained hidden without aggressive journalism, including the #MeToo movement\'s exposure of Harvey Weinstein.',
        example: 'Investigative journalism in Australia has exposed political corruption scandals including the NSW ICAC investigations, which relied on media pressure to hold powerful figures accountable.',
        sentences: {
          intro: 'A free and sometimes aggressive press is essential for holding powerful individuals accountable, and privacy laws must not be used to shield public figures from legitimate scrutiny.',
          body: 'The exposure of widespread abuse by powerful individuals through investigative journalism demonstrates that press freedom serves a vital democratic function that must be protected.',
          conclusion: 'Any privacy regulation must carefully distinguish between legitimate public interest journalism and gratuitous invasion of privacy, ensuring that accountability journalism is never suppressed.'
        }
      },
      {
        point: 'Public figures accept a degree of reduced privacy as a condition of their public role',
        evidence: 'Legal scholars argue that individuals who voluntarily enter public life, particularly politicians and those who cultivate media attention, implicitly accept greater public scrutiny of their behaviour.',
        example: 'Politicians who campaign on family values, or celebrities who profit from sharing their personal lives on social media, have a weaker claim to privacy than private citizens who have not sought public attention.',
        sentences: {
          intro: 'Those who voluntarily enter public life, particularly individuals who actively cultivate media attention, accept a degree of reduced privacy as an inherent aspect of their public role.',
          body: 'The expectation of privacy is reasonably diminished for individuals who have chosen to place themselves in the public eye, particularly when their public persona is inconsistent with their private behaviour.',
          conclusion: 'While gratuitous intrusion should be prohibited, public figures must accept that their behaviour is subject to greater scrutiny than that of private citizens.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, stricter privacy laws are justified to prevent the most egregious forms of media intrusion, including harassment, illegal surveillance, and the publication of private information without consent. However, these laws must include robust exemptions for public interest journalism to ensure that press freedom and democratic accountability are preserved.',
    keyVocabulary: ['media intrusion', 'privacy rights', 'press freedom', 'public interest', 'paparazzi', 'media ethics', 'self-regulation', 'accountability journalism']
  },

  {
    id: 'med04',
    category: 'Media & Crime',
    question: 'Should advertising to children be strictly regulated or banned entirely?',
    keywords: ['advertising to children', 'marketing regulation', 'consumer protection', 'child development'],
    forPoints: [
      {
        point: 'Children lack the cognitive ability to critically evaluate advertising claims',
        evidence: 'The American Psychological Association confirms that children under eight cannot understand the persuasive intent of advertising, making them particularly vulnerable to manipulation.',
        example: 'Sweden and Norway have banned all television advertising targeting children under twelve, recognising that young children are cognitively incapable of distinguishing advertising from factual content.',
        sentences: {
          intro: 'The fundamental justification for restricting advertising to children is that they lack the cognitive development to understand they are being manipulated for commercial purposes.',
          body: 'Sweden\'s long-standing ban on advertising to children under twelve reflects a principled recognition that targeting individuals who cannot evaluate persuasive intent is inherently exploitative.',
          conclusion: 'A society that permits the commercial exploitation of children\'s cognitive vulnerability fails in its most basic obligation to protect its youngest and most defenceless members.'
        }
      },
      {
        point: 'Advertising contributes to unhealthy consumption patterns and childhood obesity',
        evidence: 'A systematic review in Pediatrics found that food advertising exposure increases children\'s food intake by an average of 45 calories per exposure, with advertised products overwhelmingly being unhealthy.',
        example: 'The WHO\'s Commission on Ending Childhood Obesity recommends comprehensive restrictions on food and beverage marketing to children as a primary strategy for reducing childhood obesity rates worldwide.',
        sentences: {
          intro: 'The food and beverage industry\'s targeted marketing to children is a significant contributor to the childhood obesity crisis affecting millions of young people worldwide.',
          body: 'The measurable increase in calorie consumption following exposure to food advertising confirms that marketing directly influences children\'s eating behaviour in unhealthy ways.',
          conclusion: 'Restricting junk food advertising to children is one of the most cost-effective interventions available for combating the childhood obesity epidemic.'
        }
      },
      {
        point: 'Advertising creates materialistic values and psychological pressure on children and families',
        evidence: 'Research by the University of Sussex found that children exposed to high levels of advertising score 20% higher on materialism scales and report lower life satisfaction.',
        example: 'The "pester power" phenomenon, where children pressure parents to buy advertised products, creates family stress and financial pressure, particularly in lower-income households.',
        sentences: {
          intro: 'Beyond its effects on consumption, advertising to children cultivates materialistic values and creates psychological pressure that undermines both children\'s well-being and family harmony.',
          body: 'The documented link between advertising exposure and increased materialism in children suggests that commercial messaging is shaping young people\'s values in ways that prioritise consumption over contentment.',
          conclusion: 'Protecting children from the relentless commercial messaging that promotes materialism and dissatisfaction should be a priority for any society that values childhood well-being.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Advertising funds the children\'s content and programming that families enjoy',
        evidence: 'Children\'s television networks and free-to-access digital content for children are predominantly funded by advertising revenue, and bans could reduce the availability and quality of children\'s programming.',
        example: 'Free educational apps and YouTube channels for children, such as Bluey-related content, are supported by advertising revenue that enables creators to produce high-quality content at no cost to families.',
        sentences: {
          intro: 'A complete ban on advertising to children could undermine the funding model that supports the children\'s entertainment and educational content that families value.',
          body: 'Many beloved children\'s programmes and free educational resources are funded by advertising, and removing this revenue stream could reduce the availability and quality of content available to young audiences.',
          conclusion: 'Any advertising restrictions must consider the impact on children\'s content funding and ensure alternative revenue models are available to support quality programming.'
        }
      },
      {
        point: 'Parents bear the primary responsibility for mediating children\'s exposure to advertising',
        evidence: 'Parenting research suggests that conversations between parents and children about advertising can effectively develop children\'s critical media literacy from as young as age five.',
        example: 'Media literacy programmes in Australian primary schools teach children to identify advertising techniques and evaluate commercial claims, empowering them to become more discerning consumers.',
        sentences: {
          intro: 'Rather than relying on government bans, parents and educators should take the primary role in teaching children to critically evaluate the advertising messages they encounter.',
          body: 'Research shows that parental mediation and school-based media literacy programmes can effectively develop children\'s ability to recognise and resist advertising manipulation.',
          conclusion: 'Empowering children with critical thinking skills is a more sustainable and respectful approach than shielding them from all commercial messaging through blanket bans.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the cognitive vulnerability of young children justifies strict regulation of advertising targeting those under twelve, particularly for unhealthy food and beverages. However, for older children, a combination of reasonable restrictions and media literacy education may be more appropriate than a complete ban, ensuring that content funding is maintained while children are protected from exploitation.',
    keyVocabulary: ['advertising regulation', 'cognitive vulnerability', 'consumer protection', 'childhood obesity', 'media literacy', 'pester power', 'content funding', 'commercial exploitation']
  },

  {
    id: 'med05',
    category: 'Media & Crime',
    question: 'Should the criminal justice system focus primarily on punishment, or is rehabilitation a more effective approach to reducing crime?',
    keywords: ['rehabilitation', 'punishment', 'criminal justice', 'recidivism'],
    forPoints: [
      {
        point: 'Rehabilitation programmes significantly reduce reoffending rates',
        evidence: 'A meta-analysis in the Journal of Criminal Justice found that rehabilitation programmes reduce recidivism by an average of 25-30%, compared to incarceration alone which shows no significant reduction in reoffending.',
        example: 'Norway\'s Halden Prison, designed around rehabilitation principles with education, vocational training, and mental health support, achieves a recidivism rate of just 20%, compared to over 75% in many US states.',
        sentences: {
          intro: 'The most compelling argument for rehabilitation is its proven effectiveness in reducing reoffending, which ultimately protects the community more effectively than punishment alone.',
          body: 'Norway\'s remarkable 20% recidivism rate, achieved through a justice system focused on rehabilitation rather than punishment, provides powerful evidence that treating the causes of criminal behaviour produces far better outcomes for society.',
          conclusion: 'A criminal justice system that prioritises rehabilitation invests in long-term community safety rather than the short-term satisfaction of retribution.'
        }
      },
      {
        point: 'Rehabilitation is more cost-effective than incarceration in the long term',
        evidence: 'The Australian Productivity Commission estimates that it costs approximately $120,000 per year to incarcerate a single prisoner, while effective community-based rehabilitation programmes cost a fraction of that amount.',
        example: 'The Drug Court programme in New South Wales diverts offenders with substance abuse problems into treatment rather than prison, achieving a 17% reduction in reoffending at approximately one-third the cost of imprisonment.',
        sentences: {
          intro: 'Rehabilitation is not only more humane than punishment but also significantly more cost-effective, saving taxpayers billions of dollars in incarceration costs.',
          body: 'With each prisoner costing Australian taxpayers over $120,000 per year, diverting offenders into rehabilitation programmes that cost a fraction of that amount while reducing reoffending is a compelling economic argument.',
          conclusion: 'The enormous cost of mass incarceration, combined with its failure to reduce crime, makes a powerful economic case for redirecting resources towards rehabilitation.'
        }
      },
      {
        point: 'Addressing the root causes of crime through rehabilitation creates lasting social benefits',
        evidence: 'Research by the Australian Institute of Criminology shows that 65% of prisoners have a history of mental illness, 50% experienced childhood abuse, and 40% have substance abuse disorders, suggesting that crime is driven by treatable conditions.',
        example: 'The MERIT programme in NSW provides mental health treatment to offenders as an alternative to prison, addressing the underlying conditions that drive criminal behaviour and reducing the likelihood of future offences.',
        sentences: {
          intro: 'Effective rehabilitation addresses the root causes of criminal behaviour, including mental illness, addiction, and trauma, rather than merely punishing their symptoms.',
          body: 'The high prevalence of mental illness, childhood trauma, and substance abuse among prisoners demonstrates that many offenders are as much victims of their circumstances as they are perpetrators of crime.',
          conclusion: 'A justice system that addresses the underlying causes of crime through treatment and support produces safer communities and more productive citizens than one that simply locks people away.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Punishment serves essential functions of deterrence, public safety, and justice for victims',
        evidence: 'Criminological research on deterrence theory suggests that the certainty and severity of punishment can reduce crime by 10-20%, particularly for rational, economically motivated offences.',
        example: 'Mandatory sentencing for firearms offences in Australia, introduced after the Port Arthur massacre in 1996, has been credited with contributing to the country\'s dramatic reduction in gun violence.',
        sentences: {
          intro: 'Punishment serves the essential functions of deterring potential offenders, protecting the community through incapacitation, and delivering justice for victims of crime.',
          body: 'Australia\'s success in reducing gun violence through mandatory sentencing for firearms offences demonstrates that appropriately severe punishments can serve as effective deterrents for specific types of crime.',
          conclusion: 'While rehabilitation has its place, the criminal justice system must retain the capacity to impose meaningful punishment that deters crime and provides closure for victims.'
        }
      },
      {
        point: 'Some offenders pose risks that cannot be addressed through rehabilitation alone',
        evidence: 'Research on psychopathy and antisocial personality disorder suggests that approximately 1-2% of the population exhibits traits that make them highly resistant to therapeutic intervention.',
        example: 'Cases of repeat violent offenders who have committed serious crimes despite extensive rehabilitation attempts highlight the reality that not all individuals can be safely rehabilitated and returned to the community.',
        sentences: {
          intro: 'While rehabilitation works for many offenders, a small but dangerous minority pose risks to public safety that cannot be adequately addressed through treatment alone.',
          body: 'The existence of persistent, violent offenders who have failed multiple rehabilitation programmes underscores the need for a justice system that retains incapacitation as an option for protecting the public.',
          conclusion: 'An effective justice system must offer a continuum of responses, with rehabilitation as the default for most offenders and secure detention available for the small minority who pose ongoing risks to public safety.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the evidence strongly favours rehabilitation as the primary approach for most offenders, given its proven effectiveness in reducing reoffending and its superior cost-effectiveness compared to incarceration. However, a balanced justice system must also retain the capacity for punishment and incapacitation in cases involving serious violence and offenders who are resistant to treatment.',
    keyVocabulary: ['rehabilitation', 'recidivism', 'restorative justice', 'incarceration costs', 'deterrence', 'reoffending rates', 'mental health treatment', 'community safety']
  },

  {
    id: 'med06',
    category: 'Media & Crime',
    question: 'The death penalty is still used in some countries. Should it be abolished worldwide, or does it serve as a necessary deterrent for the most serious crimes?',
    keywords: ['death penalty', 'capital punishment', 'deterrence', 'human rights'],
    forPoints: [
      {
        point: 'The death penalty violates the fundamental human right to life and represents state-sanctioned killing',
        evidence: 'The United Nations Human Rights Committee has consistently maintained that the death penalty is incompatible with the right to life enshrined in the International Covenant on Civil and Political Rights.',
        example: 'Over 170 countries have abolished the death penalty in law or practice, with the number of abolitionist nations increasing steadily each decade, reflecting a growing global consensus against capital punishment.',
        sentences: {
          intro: 'The death penalty is fundamentally incompatible with the right to life, representing the most extreme and irreversible punishment a state can inflict on its citizens.',
          body: 'The steady global movement towards abolition, with over 170 countries now rejecting capital punishment, reflects a growing recognition that civilised societies do not kill their citizens in the name of justice.',
          conclusion: 'A justice system built on the principle that killing is wrong cannot coherently impose death as a punishment, and the worldwide trend towards abolition affirms this moral reality.'
        }
      },
      {
        point: 'There is no credible evidence that the death penalty deters crime more effectively than life imprisonment',
        evidence: 'A comprehensive review by the National Research Council in the US concluded that there is no reliable evidence that the death penalty has any greater deterrent effect than long-term imprisonment.',
        example: 'US states without the death penalty consistently have lower murder rates than states that retain it, with abolitionist states averaging 25% fewer homicides per capita over the past decade.',
        sentences: {
          intro: 'The deterrence argument for the death penalty is not supported by credible evidence, with research consistently failing to demonstrate that it reduces murder rates below those achieved by life imprisonment.',
          body: 'The lower murder rates in US states without the death penalty compared to those that retain it directly contradict the claim that capital punishment serves as an effective deterrent.',
          conclusion: 'Given the absence of deterrent effect, the death penalty serves no legitimate criminal justice purpose that cannot be achieved through life imprisonment.'
        }
      },
      {
        point: 'The death penalty carries an unacceptable risk of executing innocent people',
        evidence: 'Since 1973, over 190 people on death row in the United States have been exonerated through new evidence or DNA testing, revealing the frequency of wrongful capital convictions.',
        example: 'In Australia, the wrongful conviction of Lindy Chamberlain in 1982 demonstrated how miscarriages of justice can occur even in well-developed legal systems, reinforcing the case against irreversible punishments.',
        sentences: {
          intro: 'The irreversibility of the death penalty means that any error in the justice system results in the execution of an innocent person, a moral catastrophe that no justice system can accept.',
          body: 'The exoneration of over 190 death row inmates in the United States alone reveals that wrongful convictions are not rare exceptions but systemic failures that make capital punishment unconscionably risky.',
          conclusion: 'No justice system is infallible, and the permanent, irreversible nature of execution makes the death penalty an unacceptable risk that no civilised society should be willing to take.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'The death penalty provides permanent protection from the most dangerous criminals',
        evidence: 'Proponents argue that execution is the only guarantee that the most dangerous offenders will never again pose a threat, noting cases where life prisoners have escaped or killed other inmates.',
        example: 'In countries like Japan and Singapore, where the death penalty is retained for the most serious offences, public support for capital punishment remains high, with over 80% of citizens favouring its retention.',
        sentences: {
          intro: 'Supporters of the death penalty argue that it is the only punishment that permanently eliminates the risk posed by the most dangerous criminals, providing absolute protection for the community.',
          body: 'The strong public support for capital punishment in countries like Japan and Singapore reflects a belief that the most extreme crimes warrant the most extreme punishment.',
          conclusion: 'While the moral arguments against the death penalty are powerful, proponents maintain that it remains the only certain way to prevent the most dangerous individuals from harming others again.'
        }
      },
      {
        point: 'The death penalty acknowledges the severity of the most heinous crimes and provides justice for victims',
        evidence: 'Victim advocacy groups argue that life imprisonment fails to adequately reflect the gravity of crimes such as mass murder, terrorism, and genocide, and that some crimes demand the ultimate consequence.',
        example: 'Following the execution of the Bali bomber in Indonesia, many families of Australian victims expressed a sense of justice and closure that they felt could not have been achieved through imprisonment alone.',
        sentences: {
          intro: 'For the families of murder victims, the death penalty can represent a form of justice and closure that life imprisonment, with its possibility of parole or escape, cannot provide.',
          body: 'The sense of justice expressed by victims\' families following the execution of perpetrators of mass violence reflects a deeply human need for proportionate accountability.',
          conclusion: 'While the emotional needs of victims should not solely determine sentencing policy, the justice system must acknowledge that some crimes are so heinous that they demand the most severe response available.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the death penalty should be abolished on the grounds that it violates fundamental human rights, lacks proven deterrent effect, and carries an unacceptable risk of executing innocent people. Life imprisonment without parole provides an effective alternative that protects the community while preserving the possibility of correcting judicial errors.',
    keyVocabulary: ['capital punishment', 'death penalty', 'deterrence', 'wrongful conviction', 'human rights', 'abolitionism', 'life imprisonment', 'irreversibility']
  },

  {
    id: 'med07',
    category: 'Media & Crime',
    question: 'Should juvenile offenders who commit serious crimes be tried and punished as adults?',
    keywords: ['juvenile crime', 'adult sentencing', 'youth justice', 'age of criminal responsibility'],
    forPoints: [
      {
        point: 'Serious crimes demand serious consequences regardless of the offender\'s age',
        evidence: 'Victim advocacy research shows that the severity of harm caused by violent crime is identical regardless of whether the perpetrator is a juvenile or an adult, justifying equal accountability.',
        example: 'In the United States, several high-profile cases of juvenile mass shooters have prompted states to transfer cases to adult courts, reflecting public demand for proportionate consequences for the most serious offences.',
        sentences: {
          intro: 'When juveniles commit crimes of extreme violence, the severity of the harm they cause justifies consequences proportionate to the offence rather than the age of the offender.',
          body: 'Victims of violent crime committed by juveniles suffer identical trauma regardless of the perpetrator\'s age, and the justice system must reflect this reality in its response.',
          conclusion: 'While age should be a consideration in sentencing, the most serious offences demand a level of accountability that the juvenile justice system may be unable to provide.'
        }
      },
      {
        point: 'Adult sentencing for the most serious juvenile offences protects public safety',
        evidence: 'Juvenile justice systems in many jurisdictions mandate release at age 18 or 21, meaning that young offenders convicted of serious violence may serve sentences that fail to protect the community adequately.',
        example: 'In some Australian states, juvenile offenders convicted of murder can be released as young as 18, raising concerns about community safety and the adequacy of such short sentences for the most serious offences.',
        sentences: {
          intro: 'The automatic release provisions in many juvenile justice systems may inadequately protect the community from young offenders who have demonstrated a capacity for extreme violence.',
          body: 'When juvenile justice mandates release after relatively short periods, regardless of the offence\'s severity, the system fails in its fundamental obligation to protect the public.',
          conclusion: 'For the most serious offences, the option of adult sentencing ensures that community safety is prioritised alongside the rehabilitation of the offender.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Adolescent brains are developmentally immature, reducing moral culpability',
        evidence: 'Neuroscience research conclusively demonstrates that the adolescent brain, particularly the prefrontal cortex responsible for impulse control and moral reasoning, does not fully mature until the mid-twenties.',
        example: 'The US Supreme Court\'s landmark decisions in Roper v. Simmons (2005) and Miller v. Alabama (2012) relied on neuroscience evidence to prohibit the death penalty and mandatory life sentences for juveniles.',
        sentences: {
          intro: 'Neuroscience has established beyond doubt that adolescents are developmentally incapable of the same level of moral reasoning and impulse control as adults, reducing their culpability for criminal behaviour.',
          body: 'The US Supreme Court\'s recognition that juvenile offenders are constitutionally different from adults reflects the scientific consensus that developmental immaturity diminishes moral responsibility.',
          conclusion: 'Punishing children as adults ignores the fundamental neuroscientific reality that their brains are not yet capable of the judgement and self-control expected of mature individuals.'
        }
      },
      {
        point: 'Juvenile offenders have greater capacity for rehabilitation than adults',
        evidence: 'Research published in Developmental Psychology shows that juvenile offenders who receive age-appropriate rehabilitation have recidivism rates 30-50% lower than those processed through the adult system.',
        example: 'Australia\'s youth justice conferencing programmes, which bring young offenders face-to-face with their victims in a restorative setting, achieve significantly lower reoffending rates than adult court processing.',
        sentences: {
          intro: 'Young people\'s greater neurological plasticity and capacity for change make them far more responsive to rehabilitation than adults, making punitive adult sentencing both unnecessary and counterproductive.',
          body: 'The dramatically lower reoffending rates achieved by juvenile rehabilitation programmes compared to adult imprisonment demonstrate that age-appropriate intervention produces better outcomes for both offenders and the community.',
          conclusion: 'Condemning young people to the adult prison system destroys their potential for rehabilitation, ultimately making communities less safe by creating hardened adult criminals rather than reformed citizens.'
        }
      },
      {
        point: 'Adult prisons expose juvenile offenders to violence, exploitation, and further criminalisation',
        evidence: 'The US Department of Justice reports that juvenile inmates in adult facilities are five times more likely to be sexually assaulted and 36 times more likely to commit suicide than those in juvenile facilities.',
        example: 'Reports of violence, abuse, and exploitation of juvenile inmates in adult prisons across multiple countries have prompted human rights organisations to campaign against the practice of trying children as adults.',
        sentences: {
          intro: 'Placing young offenders in adult prisons exposes them to levels of violence and exploitation that are incompatible with any genuine commitment to rehabilitation or basic human decency.',
          body: 'The shocking rates of sexual assault and suicide among juveniles housed in adult facilities demonstrate that adult imprisonment is a profoundly harmful environment for young people.',
          conclusion: 'No justice system can claim to be both fair and humane while subjecting children to the documented horrors of adult incarceration.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, juvenile offenders should be tried within the youth justice system, which is specifically designed to account for their developmental immaturity and capacity for rehabilitation. While the most serious offences may warrant extended sentences, these should be served in age-appropriate facilities focused on rehabilitation rather than in adult prisons that expose young people to harm and further criminalisation.',
    keyVocabulary: ['juvenile justice', 'adult sentencing', 'developmental immaturity', 'rehabilitation capacity', 'age of responsibility', 'restorative justice', 'neuroscience', 'youth offending']
  },

  {
    id: 'med08',
    category: 'Media & Crime',
    question: 'CCTV cameras are increasingly common in public spaces. Do the security benefits of surveillance cameras outweigh the concerns about privacy and civil liberties?',
    keywords: ['CCTV', 'surveillance', 'public safety', 'privacy'],
    forPoints: [
      {
        point: 'CCTV cameras deter crime and improve public safety',
        evidence: 'A Campbell Collaboration systematic review found that CCTV reduces crime by an average of 16% in areas where cameras are installed, with the greatest impact on vehicle crime and property offences.',
        example: 'The City of Sydney\'s CCTV network, which covers major entertainment precincts, has been credited with assisting police in responding to over 4,000 incidents annually and reducing alcohol-related violence by 20%.',
        sentences: {
          intro: 'The primary justification for CCTV in public spaces is its proven effectiveness in deterring crime and assisting law enforcement in maintaining public safety.',
          body: 'Sydney\'s extensive CCTV network demonstrates how surveillance technology can meaningfully reduce crime and improve response times in high-traffic urban areas.',
          conclusion: 'For the majority of citizens who use public spaces safely, CCTV provides a reassuring and evidence-based layer of security that enhances their confidence and freedom of movement.'
        }
      },
      {
        point: 'CCTV footage provides essential evidence for criminal investigations and prosecutions',
        evidence: 'The UK College of Policing reports that CCTV footage is used as evidence in approximately 65% of murder investigations and 85% of terrorism-related cases.',
        example: 'Following the 2005 London bombings, CCTV footage was instrumental in identifying the four attackers within 48 hours, enabling investigators to quickly dismantle the broader network and prevent further attacks.',
        sentences: {
          intro: 'CCTV cameras provide invaluable evidence that enables police to identify, apprehend, and successfully prosecute criminals, including those who commit the most serious offences.',
          body: 'The critical role of CCTV footage in solving the 2005 London bombings illustrates how surveillance technology can be decisive in responding to the most serious security threats.',
          conclusion: 'In an era of evolving security challenges, the evidentiary value of CCTV cameras makes them an indispensable tool for criminal justice.'
        }
      },
      {
        point: 'Modern CCTV technology can be deployed with privacy safeguards and proportionate use policies',
        evidence: 'Best-practice CCTV guidelines from the Australian Privacy Commissioner include automatic deletion of footage after 30 days, restricted access to authorised personnel, and prohibition of audio recording in public spaces.',
        example: 'The European Union\'s General Data Protection Regulation (GDPR) provides a model for regulating CCTV use, requiring purpose limitation, data minimisation, and regular privacy impact assessments for surveillance systems.',
        sentences: {
          intro: 'With appropriate legal frameworks and oversight, CCTV can be deployed in ways that maximise security benefits while minimising privacy intrusions.',
          body: 'The EU\'s GDPR framework demonstrates that it is possible to regulate surveillance technology in ways that balance security needs with robust protection of individual privacy rights.',
          conclusion: 'The existence of effective regulatory models proves that the choice between security and privacy is a false dichotomy; with proper governance, both can be achieved.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Ubiquitous CCTV surveillance creates a "chilling effect" on free expression and behaviour',
        evidence: 'Psychological research demonstrates that individuals who believe they are being observed modify their behaviour, reducing spontaneity, creative expression, and willingness to participate in protests or other lawful activities.',
        example: 'The UK, which has an estimated 5.9 million CCTV cameras (one for every eleven citizens), has been described by civil liberties organisations as a "surveillance state" where constant monitoring suppresses the free behaviour of ordinary citizens.',
        sentences: {
          intro: 'The knowledge that one is constantly being watched fundamentally changes human behaviour, suppressing the spontaneity, creativity, and political expression that are hallmarks of a free society.',
          body: 'The UK\'s extraordinary density of surveillance cameras has prompted legitimate concern that constant monitoring creates a society where citizens self-censor their behaviour and avoid exercising their democratic freedoms.',
          conclusion: 'A society in which every public action is recorded is not a safe society but a constrained one, where the freedom to behave naturally in public spaces is gradually eroded.'
        }
      },
      {
        point: 'CCTV systems are vulnerable to misuse, including facial recognition and mass tracking of individuals',
        evidence: 'Research by MIT found that facial recognition technology misidentifies individuals from minority ethnic groups at rates up to 34% higher than for white individuals, raising serious concerns about discriminatory surveillance.',
        example: 'China\'s integration of CCTV with facial recognition and social credit scoring demonstrates the totalitarian potential of surveillance infrastructure that was originally justified on grounds of public safety.',
        sentences: {
          intro: 'The integration of CCTV with facial recognition and data analytics creates the infrastructure for mass surveillance that goes far beyond its original public safety purpose.',
          body: 'China\'s use of CCTV-linked facial recognition to track, score, and control citizens\' behaviour provides a chilling preview of how public safety infrastructure can be repurposed for authoritarian control.',
          conclusion: 'The deployment of CCTV must be accompanied by strict prohibitions on facial recognition and mass tracking to prevent the gradual transformation of public safety tools into instruments of social control.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, CCTV cameras provide genuine security benefits when deployed proportionately and regulated effectively. However, their expansion must be accompanied by strict legal limits on data retention, access, and the use of technologies like facial recognition, ensuring that public safety does not become a pretext for the erosion of privacy and civil liberties.',
    keyVocabulary: ['CCTV surveillance', 'public safety', 'privacy rights', 'facial recognition', 'data protection', 'proportionality', 'chilling effect', 'evidence gathering']
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 6: SCIENCE & CULTURE (sci01–sci08)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'sci01',
    category: 'Science & Culture',
    question: 'Animal testing has been used for decades in medical and cosmetic research. Should it be banned, or are there cases where it remains necessary?',
    keywords: ['animal testing', 'animal rights', 'medical research', 'alternatives'],
    forPoints: [
      {
        point: 'Modern alternatives can replace animal testing in many research contexts',
        evidence: 'The European Commission reports that organ-on-chip technology, computer modelling, and cell culture techniques can replace up to 70% of current animal testing, often with greater accuracy.',
        example: 'L\'Oreal, the world\'s largest cosmetics company, has invested over $1 billion in alternative testing methods and has not tested on animals since 2013, demonstrating that alternatives are commercially viable.',
        sentences: {
          intro: 'Advances in technology have made it possible to replace the majority of animal testing with more accurate and humane alternatives.',
          body: 'L\'Oreal\'s successful transition to entirely animal-free testing demonstrates that even the largest companies can operate profitably while eliminating animal experimentation.',
          conclusion: 'With viable alternatives now available for most applications, the continued use of animal testing in areas where substitutes exist is ethically indefensible.'
        }
      },
      {
        point: 'Animals suffer in testing and have a moral right not to be subjected to pain for human benefit',
        evidence: 'The Australian government reports that over 7 million animals are used in research annually, with a significant proportion experiencing pain, distress, or lasting harm during experimental procedures.',
        example: 'The EU\'s complete ban on cosmetic testing on animals, enacted in 2013, reflects the growing ethical consensus that causing animal suffering for non-essential purposes such as beauty products is morally unacceptable.',
        sentences: {
          intro: 'The suffering inflicted on millions of animals through testing raises profound ethical questions about whether human convenience justifies causing pain to other sentient beings.',
          body: 'The EU\'s ban on cosmetic animal testing reflects a growing ethical consensus that the suffering of sentient creatures cannot be justified for purposes that serve human vanity rather than survival.',
          conclusion: 'A truly ethical society must extend its circle of moral consideration beyond humans to include the animals whose suffering we have a responsibility to minimise.'
        }
      },
      {
        point: 'Animal models are often poor predictors of human responses, limiting their scientific value',
        evidence: 'The FDA reports that 92% of drugs that pass animal testing fail in human clinical trials, suggesting that animal models are fundamentally flawed as predictors of human biological responses.',
        example: 'The drug Thalidomide, which passed animal safety tests, caused severe birth defects in thousands of human babies, highlighting the dangerous unreliability of extrapolating animal data to humans.',
        sentences: {
          intro: 'Beyond the ethical concerns, animal testing is often scientifically unreliable, with the vast majority of drugs that succeed in animal trials failing in human testing.',
          body: 'The catastrophic failure rate of drugs that pass animal testing reveals that biological differences between species make animal models poor predictors of human outcomes.',
          conclusion: 'Investing in human-relevant testing technologies would not only reduce animal suffering but also improve the accuracy and efficiency of medical research.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Animal testing remains essential for some critical medical research that cannot be replicated by alternatives',
        evidence: 'The World Medical Association maintains that animal research has contributed to virtually every medical breakthrough of the past century, including vaccines, antibiotics, and organ transplant techniques.',
        example: 'The development of the COVID-19 vaccines relied on animal testing to establish safety and dosage before human trials, a step that regulatory authorities worldwide require before approving clinical trials.',
        sentences: {
          intro: 'Despite advances in alternative methods, animal testing remains indispensable for certain types of medical research, particularly the development of vaccines and treatments for complex diseases.',
          body: 'The reliance on animal testing in the development of life-saving COVID-19 vaccines illustrates that some medical research cannot yet be conducted without animal models.',
          conclusion: 'While the reduction and replacement of animal testing should be pursued wherever possible, a complete ban would impede medical research that saves millions of human lives.'
        }
      },
      {
        point: 'Strict ethical regulations already minimise animal suffering in well-governed research institutions',
        evidence: 'Australian animal research is governed by the National Health and Medical Research Council\'s code of practice, which requires ethics committee approval and mandates the "3Rs" principles of replacement, reduction, and refinement.',
        example: 'Australian universities and research institutions maintain animal ethics committees that review every proposed experiment, ensuring that animal use is minimised and suffering is reduced to the greatest extent possible.',
        sentences: {
          intro: 'In well-regulated countries, animal testing is subject to rigorous ethical oversight that minimises suffering and ensures that animal use occurs only when alternatives are unavailable.',
          body: 'Australia\'s robust regulatory framework, built on the 3Rs principles, demonstrates that animal research can be conducted within an ethical framework that takes animal welfare seriously.',
          conclusion: 'Rather than banning animal testing entirely, the focus should be on strengthening regulatory oversight and accelerating the development of alternatives through increased research funding.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, animal testing for cosmetic and non-essential purposes should be banned, given the availability of effective alternatives. However, for critical medical research where no viable alternative exists, animal testing should continue under strict ethical oversight while investment in replacement technologies is accelerated.',
    keyVocabulary: ['animal testing', 'alternative methods', 'organ-on-chip', 'ethical oversight', '3Rs principles', 'sentience', 'medical research', 'cosmetic testing ban']
  },

  {
    id: 'sci02',
    category: 'Science & Culture',
    question: 'Some people believe that humans should invest heavily in space exploration and colonisation. Others argue the money would be better spent solving problems on Earth. Discuss both views.',
    keywords: ['space exploration', 'colonisation', 'scientific investment', 'resource allocation'],
    forPoints: [
      {
        point: 'Space exploration drives technological innovation that benefits life on Earth',
        evidence: 'NASA estimates that its research has generated over 2,000 "spinoff" technologies including memory foam, water purification systems, satellite communications, and medical imaging equipment.',
        example: 'GPS technology, originally developed for military and space navigation, now underpins a $300 billion global industry and is essential for everything from agriculture to emergency services.',
        sentences: {
          intro: 'Space exploration has historically been one of the most productive drivers of technological innovation, generating countless technologies that improve daily life on Earth.',
          body: 'From satellite communications to water purification, the technologies developed for space missions have generated hundreds of billions of dollars in economic value and improved the lives of billions of people.',
          conclusion: 'Investing in space exploration is investing in the technological innovation that drives economic growth and solves problems on Earth.'
        }
      },
      {
        point: 'Space colonisation provides long-term insurance against existential threats to humanity',
        evidence: 'Astrophysicists estimate a 1% probability per century of a catastrophic asteroid impact, and note that risks from pandemics, nuclear war, and climate change make a single-planet civilisation inherently vulnerable.',
        example: 'SpaceX\'s mission to establish a self-sustaining colony on Mars, backed by physicist Stephen Hawking\'s warning that humanity must become a multi-planetary species within the next century to ensure survival, reflects growing scientific consensus on this issue.',
        sentences: {
          intro: 'The most compelling long-term argument for space colonisation is that it provides humanity with a survival insurance policy against the existential risks that threaten a single-planet civilisation.',
          body: 'Given the statistical certainty that Earth will eventually face a catastrophic event, whether from asteroid impact, supervolcanic eruption, or human-made disaster, establishing colonies beyond Earth is the only way to ensure the long-term survival of our species.',
          conclusion: 'Spending a fraction of global wealth on space colonisation is a small price to pay for the survival of civilisation itself.'
        }
      },
      {
        point: 'Space research addresses critical Earth-based challenges including climate monitoring and resource management',
        evidence: 'Over 60% of climate change data comes from satellite observations, and space-based monitoring is essential for tracking deforestation, ocean acidification, and atmospheric carbon levels.',
        example: 'Australia\'s Bureau of Meteorology relies on satellite data for weather forecasting, bushfire monitoring, and drought assessment, demonstrating the direct terrestrial benefits of space technology.',
        sentences: {
          intro: 'Far from diverting attention from Earth\'s problems, space research provides essential tools for understanding and addressing the environmental challenges facing our planet.',
          body: 'The majority of our understanding of climate change comes from satellite observations, making space technology indispensable for monitoring and responding to the greatest environmental challenge of our time.',
          conclusion: 'Space research and solving Earth\'s problems are not competing priorities but complementary endeavours, with space technology providing the data and tools needed to address terrestrial challenges.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'The enormous cost of space exploration could be redirected to solve pressing problems on Earth',
        evidence: 'Global space spending exceeds $100 billion annually, an amount that could fund significant progress on clean water access, disease eradication, and poverty reduction for millions of people.',
        example: 'The estimated $100 billion cost of establishing a Mars colony is equivalent to the total annual budget of the UN\'s global humanitarian assistance programmes, raising questions about priorities.',
        sentences: {
          intro: 'With billions of people still lacking access to clean water, healthcare, and education, critics argue that spending billions on space exploration represents a profound misallocation of resources.',
          body: 'The juxtaposition of enormous space budgets alongside unmet basic needs on Earth raises legitimate ethical questions about whether humanity\'s priorities are properly aligned.',
          conclusion: 'Before investing in colonising other planets, governments should ensure that all citizens of this planet have access to the fundamental necessities of a dignified life.'
        }
      },
      {
        point: 'Current space colonisation technology is insufficient, making ambitious plans premature and wasteful',
        evidence: 'The radiation exposure during a Mars journey alone would exceed safe lifetime limits for astronauts, and the technology to create a self-sustaining extraterrestrial colony does not yet exist.',
        example: 'Despite decades of research, the International Space Station can only support six astronauts at a time and remains entirely dependent on regular supply missions from Earth, highlighting how far we are from self-sustaining space habitation.',
        sentences: {
          intro: 'The technological barriers to space colonisation remain so enormous that current investment may be premature, with funds better directed towards solving more immediate and achievable goals.',
          body: 'Our inability to maintain even a small permanently inhabited space station without constant resupply from Earth demonstrates the vast gap between current capabilities and the dream of self-sustaining space colonies.',
          conclusion: 'While space exploration should continue, the massive investment needed for colonisation may be better directed towards technologies and programmes that can deliver tangible benefits within our lifetimes.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, space exploration deserves continued and substantial investment because of its proven technological, scientific, and long-term survival benefits. However, it should complement rather than replace investment in solving urgent terrestrial challenges, and colonisation efforts should proceed at a pace aligned with technological readiness rather than speculative ambition.',
    keyVocabulary: ['space exploration', 'colonisation', 'spinoff technology', 'existential risk', 'satellite monitoring', 'resource allocation', 'multi-planetary species', 'technological innovation']
  },

  {
    id: 'sci03',
    category: 'Science & Culture',
    question: 'Advances in genetic technology have made human cloning theoretically possible. Should human cloning be permitted for research or reproductive purposes?',
    keywords: ['cloning', 'genetic engineering', 'bioethics', 'reproductive technology'],
    forPoints: [
      {
        point: 'Therapeutic cloning could revolutionise medicine by enabling personalised organ and tissue growth',
        evidence: 'Stem cell researchers at Harvard University have demonstrated that therapeutic cloning can produce patient-specific stem cells capable of growing into replacement tissues, potentially eliminating organ transplant waiting lists.',
        example: 'Japanese scientist Shinya Yamanaka won the Nobel Prize for developing induced pluripotent stem cells, a technique related to therapeutic cloning that has already been used to grow retinal tissue for treating blindness.',
        sentences: {
          intro: 'Therapeutic cloning holds the potential to revolutionise medicine by enabling the growth of genetically matched organs and tissues, eliminating transplant rejection and saving thousands of lives.',
          body: 'The ability to grow patient-specific replacement tissues using cloning technology could transform the treatment of conditions from heart disease to spinal cord injuries, offering hope to millions of patients.',
          conclusion: 'Banning all forms of cloning research would deprive humanity of one of the most promising avenues for medical advancement in the twenty-first century.'
        }
      },
      {
        point: 'Scientific knowledge gained from cloning research advances understanding of human development and disease',
        evidence: 'Cloning research has provided crucial insights into cellular reprogramming, gene expression, and the mechanisms of ageing, with applications far beyond reproductive cloning.',
        example: 'Research on Dolly the Sheep at the Roslin Institute in Scotland generated fundamental knowledge about cell differentiation that has informed cancer research and regenerative medicine worldwide.',
        sentences: {
          intro: 'Even if reproductive human cloning is prohibited, the scientific knowledge gained from cloning research has enormous value for understanding human development, disease, and ageing.',
          body: 'The fundamental insights into cellular biology generated by cloning research have applications across medicine, from cancer treatment to age-related disease prevention.',
          conclusion: 'Restricting cloning research on ethical grounds must be balanced against the potential to generate knowledge that could alleviate suffering for millions of people.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Human reproductive cloning raises profound ethical concerns about human dignity and identity',
        evidence: 'The vast majority of bioethicists and religious leaders oppose human reproductive cloning on grounds that it commodifies human life, undermines individual identity, and treats children as manufactured products.',
        example: 'The United Nations Declaration on Human Cloning (2005) called on all member states to prohibit human reproductive cloning as "incompatible with human dignity and the protection of human life."',
        sentences: {
          intro: 'Human reproductive cloning raises fundamental ethical objections about the commodification of human life and the right of every individual to a unique genetic identity.',
          body: 'The near-universal opposition to reproductive cloning among bioethicists, religious leaders, and international bodies reflects deep concerns about treating human beings as manufactured products.',
          conclusion: 'Some boundaries should not be crossed, and the creation of human beings through cloning represents a line that society must draw to protect the inherent dignity of human life.'
        }
      },
      {
        point: 'Current cloning technology is unsafe and unreliable, with high rates of abnormality and failure',
        evidence: 'Animal cloning experiments show failure rates exceeding 95%, with cloned animals frequently experiencing premature ageing, immune deficiencies, and organ abnormalities.',
        example: 'Dolly the Sheep, the most famous cloned animal, developed premature arthritis and lung disease and died at age six, half the normal lifespan for her breed, illustrating the health risks inherent in cloning.',
        sentences: {
          intro: 'The current state of cloning technology is far too unreliable and dangerous to be applied to human reproduction, with animal cloning producing extremely high rates of abnormality and failure.',
          body: 'Dolly the Sheep\'s premature death from age-related diseases demonstrates that even successful cloning can produce individuals with serious health complications.',
          conclusion: 'Until cloning technology can guarantee the same health outcomes as natural reproduction, its application to human beings would constitute unethical experimentation on vulnerable subjects.'
        }
      },
      {
        point: 'Cloning could be exploited for eugenics and the creation of genetically superior "designer" humans',
        evidence: 'Ethicists warn that reproductive cloning technology could enable wealthy individuals to select and replicate desired genetic traits, creating a new form of inequality based on genetic privilege.',
        example: 'The dystopian scenarios depicted in works like Aldous Huxley\'s Brave New World reflect genuine concerns about a future in which genetic technology creates a stratified society of genetic "haves" and "have-nots."',
        sentences: {
          intro: 'The potential for cloning technology to be exploited for eugenics purposes raises the spectre of a society stratified by genetic privilege, where the wealthy can engineer genetically superior offspring.',
          body: 'Without strict international regulation, cloning technology could enable a new form of inequality in which access to genetic advantage is determined by wealth rather than nature.',
          conclusion: 'The risk that cloning could be weaponised for eugenic purposes demands robust international governance to ensure that genetic technology serves humanity rather than dividing it.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, therapeutic cloning for medical research should be permitted under strict ethical oversight, given its enormous potential to advance medicine and alleviate suffering. However, human reproductive cloning should remain prohibited due to its unacceptable safety risks, ethical objections, and potential for exploitation, until such time as the scientific and ethical landscape fundamentally changes.',
    keyVocabulary: ['therapeutic cloning', 'reproductive cloning', 'stem cells', 'bioethics', 'human dignity', 'genetic identity', 'eugenics', 'cellular reprogramming']
  },

  {
    id: 'sci04',
    category: 'Science & Culture',
    question: 'Many historical buildings and cultural sites are under threat from development and modernisation. How important is it to preserve cultural heritage, and what should governments do?',
    keywords: ['cultural heritage', 'historic preservation', 'urban development', 'architectural conservation'],
    forPoints: [
      {
        point: 'Historic buildings and sites embody collective memory and national identity',
        evidence: 'UNESCO identifies cultural heritage as essential to community identity, social cohesion, and psychological well-being, with studies showing that people living near heritage sites report 15% higher life satisfaction.',
        example: 'The preservation of Sydney\'s historic Rocks district, one of Australia\'s oldest urban areas, maintains a tangible connection to the nation\'s colonial and Indigenous history that no modern development could replace.',
        sentences: {
          intro: 'Historic buildings and cultural sites are irreplaceable repositories of collective memory and identity that anchor communities to their shared past.',
          body: 'Sydney\'s Rocks district, preserved alongside modern development, demonstrates how historic sites provide communities with a sense of continuity and identity that enriches their lived experience.',
          conclusion: 'Once destroyed, historic buildings and their stories are lost forever, making preservation an urgent obligation that each generation owes to those who follow.'
        }
      },
      {
        point: 'Heritage preservation generates significant economic benefits through tourism and cultural industries',
        evidence: 'Heritage Economics reports that heritage tourism contributes over $20 billion annually to the Australian economy, supporting over 150,000 jobs in regional and metropolitan areas.',
        example: 'The restoration of Hobart\'s historic waterfront precinct has transformed it into one of Australia\'s most popular tourist destinations, generating hundreds of millions in annual revenue and revitalising the local economy.',
        sentences: {
          intro: 'Cultural heritage preservation is not merely a cost but a significant economic asset, generating billions in tourism revenue and supporting thousands of jobs.',
          body: 'Hobart\'s transformation from a declining port city to a thriving cultural tourism destination, driven by heritage preservation and the establishment of MONA, illustrates the economic potential of cultural investment.',
          conclusion: 'Governments that invest in heritage preservation create lasting economic assets that continue to generate returns long after the initial investment has been recouped.'
        }
      },
      {
        point: 'Adaptive reuse of historic buildings combines preservation with practical functionality',
        evidence: 'The Green Building Council of Australia estimates that adaptive reuse of heritage buildings generates 50-75% fewer carbon emissions than demolition and new construction.',
        example: 'Melbourne\'s repurposing of historic industrial buildings in suburbs like Fitzroy and Collingwood into creative workspaces, restaurants, and housing has created vibrant urban precincts that celebrate heritage while meeting modern needs.',
        sentences: {
          intro: 'Adaptive reuse offers a sustainable alternative to demolition, transforming historic buildings into functional modern spaces while preserving their architectural and cultural significance.',
          body: 'Melbourne\'s successful conversion of industrial heritage buildings into vibrant creative precincts demonstrates that preservation and progress are not mutually exclusive but can reinforce each other.',
          conclusion: 'Governments should incentivise adaptive reuse as a sustainable development strategy that reduces waste, preserves heritage, and creates unique urban environments.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Excessive preservation restrictions can impede necessary development and economic growth',
        evidence: 'Property developers argue that heritage restrictions increase construction costs by 15-30% and reduce the supply of new housing and commercial space in areas where demand is highest.',
        example: 'In cities like London and Paris, strict heritage regulations have been criticised for contributing to severe housing shortages and escalating property prices by limiting the supply of new developments.',
        sentences: {
          intro: 'Overly restrictive heritage preservation policies can impede the development needed to accommodate growing populations and evolving economic needs.',
          body: 'The housing affordability crises in heritage-rich cities illustrate the tension between preserving historic buildings and meeting the urgent need for new residential and commercial space.',
          conclusion: 'Heritage policies must be balanced with pragmatic consideration of development needs, avoiding the preservation of every old building at the expense of a city\'s ability to grow and adapt.'
        }
      },
      {
        point: 'Not all old buildings deserve preservation, and selective conservation is more practical',
        evidence: 'Heritage experts acknowledge that significance assessments should distinguish between buildings of genuine historical, architectural, or cultural value and those that are merely old.',
        example: 'In many Australian cities, heritage listings have been applied to buildings of questionable significance, preventing the construction of higher-density housing in areas well-served by public transport.',
        sentences: {
          intro: 'A selective approach to preservation, focusing on buildings of genuine significance, is more practical and sustainable than attempting to preserve every structure of a certain age.',
          body: 'The application of heritage protections to buildings of marginal significance can create unnecessary barriers to development and divert conservation resources from truly important sites.',
          conclusion: 'Effective heritage policy requires rigorous assessment of significance, ensuring that protection is directed where it matters most rather than applied indiscriminately.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, cultural heritage preservation is essential for maintaining community identity, generating economic value, and promoting sustainable development. However, preservation policies must be selective, evidence-based, and balanced with the practical needs of growing communities, ensuring that heritage protection enhances rather than constrains urban development.',
    keyVocabulary: ['cultural heritage', 'historic preservation', 'adaptive reuse', 'heritage tourism', 'urban development', 'architectural conservation', 'cultural significance', 'heritage assessment']
  },

  {
    id: 'sci05',
    category: 'Science & Culture',
    question: 'Should governments provide significant funding for the arts, or should artists rely on commercial success and private patronage?',
    keywords: ['arts funding', 'government subsidy', 'cultural investment', 'creative industries'],
    forPoints: [
      {
        point: 'Government arts funding ensures cultural access for all citizens regardless of income',
        evidence: 'Countries with strong public arts funding, such as Germany and France, achieve arts participation rates 30-40% higher than nations relying primarily on commercial markets.',
        example: 'The Australia Council for the Arts provides over $200 million annually to support theatre, dance, literature, and visual arts, ensuring that cultural experiences are accessible beyond wealthy urban areas.',
        sentences: {
          intro: 'Government arts funding is essential for ensuring that cultural participation is a right available to all citizens, not a luxury reserved for those who can afford commercial ticket prices.',
          body: 'The significantly higher arts participation rates in countries with strong public funding demonstrate that government investment is critical for democratising access to cultural experiences.',
          conclusion: 'A society that values equity must ensure that the arts, which enrich the human experience and foster empathy, are accessible to all its members regardless of socioeconomic status.'
        }
      },
      {
        point: 'The creative industries generate significant economic returns on government investment',
        evidence: 'The Bureau of Communications and Arts Research estimates that Australia\'s cultural and creative industries contribute over $115 billion annually to the economy and employ more than 600,000 people.',
        example: 'The UK\'s creative industries sector, supported by substantial government funding through Arts Council England, generates over $130 billion annually and is growing at twice the rate of the broader economy.',
        sentences: {
          intro: 'Far from being a drain on public resources, government investment in the arts generates substantial economic returns through the creative industries, tourism, and urban revitalisation.',
          body: 'Australia\'s creative industries, contributing over $115 billion to the national economy, demonstrate that arts funding is not a subsidy but an investment with significant economic returns.',
          conclusion: 'Governments that cut arts funding in the name of fiscal responsibility are undermining one of their most productive economic sectors.'
        }
      },
      {
        point: 'Public funding enables experimental and challenging art that the commercial market would not support',
        evidence: 'Cultural economists note that many of the most significant artistic and literary works of the past century were created with public funding, as their experimental nature made them commercially unviable.',
        example: 'The Sydney Opera House, initially controversial and massively over budget, has become Australia\'s most recognisable cultural landmark and generates over $775 million annually in economic activity.',
        sentences: {
          intro: 'Government funding enables artists to take creative risks and produce challenging, experimental work that enriches culture but would never survive in a purely commercial market.',
          body: 'The Sydney Opera House, now an iconic symbol of Australia that generates hundreds of millions in economic activity, would never have been built if artistic decisions had been left entirely to the market.',
          conclusion: 'The most important art often challenges, provokes, and disrupts, qualities that the commercial market tends to discourage but that public funding can nurture.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Arts funding disproportionately benefits elite cultural forms and wealthy audiences',
        evidence: 'Critics point out that a disproportionate share of government arts funding goes to opera, ballet, and fine art institutions patronised primarily by affluent, educated audiences.',
        example: 'In Australia, the major performing arts companies receiving the largest government grants serve predominantly middle-class and wealthy audiences in capital cities, while regional and community arts receive comparatively modest support.',
        sentences: {
          intro: 'A legitimate criticism of public arts funding is that it often subsidises elite cultural institutions whose audiences are predominantly affluent, effectively transferring public money to the privileged.',
          body: 'The concentration of arts funding in major metropolitan institutions serving wealthy audiences raises questions about whether public resources are being equitably distributed.',
          conclusion: 'If government arts funding is to be justified on equity grounds, it must be directed towards community arts, regional programmes, and activities that genuinely reach diverse audiences.'
        }
      },
      {
        point: 'Artists who create commercially successful work demonstrate that public funding is not always necessary',
        evidence: 'The global music, film, and publishing industries generate hundreds of billions annually through commercial activity, demonstrating that artistic expression can thrive in the market without government subsidy.',
        example: 'Australian artists like AC/DC, Kylie Minogue, and author Liane Moriarty have achieved enormous commercial success without relying on government grants, suggesting that talent finds its market.',
        sentences: {
          intro: 'The enormous commercial success of creative industries worldwide demonstrates that artistic expression can flourish through market forces without requiring government subsidy.',
          body: 'The success of Australian artists who have built global careers through commercial channels suggests that government funding may be less essential than its advocates claim.',
          conclusion: 'While some forms of art may benefit from public support, the vibrant commercial creative sector demonstrates that talent, innovation, and audience demand can sustain artistic production.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, government arts funding plays an essential role in ensuring cultural access, supporting experimental work, and generating economic returns. However, funding should be distributed equitably, with a focus on community access, regional programmes, and emerging artists, rather than being concentrated in elite metropolitan institutions.',
    keyVocabulary: ['arts funding', 'creative industries', 'cultural access', 'public subsidy', 'cultural policy', 'economic return', 'artistic innovation', 'cultural equity']
  },

  {
    id: 'sci06',
    category: 'Science & Culture',
    question: 'Professional athletes often earn extremely high salaries, far more than teachers, nurses, or scientists. Is this justified?',
    keywords: ['sports salaries', 'pay disparity', 'entertainment value', 'market forces'],
    forPoints: [
      {
        point: 'Athletes\' salaries reflect the enormous revenue generated by professional sports',
        evidence: 'The global professional sports industry generates over $500 billion annually in revenue, and athletes\' salaries represent a market-determined share of this value creation.',
        example: 'The Australian Football League (AFL) generates over $800 million in annual revenue, and player salaries are funded by broadcasting rights, sponsorships, and ticket sales rather than public money.',
        sentences: {
          intro: 'Professional athletes\' salaries are determined by the enormous revenue that their talent generates through broadcasting rights, sponsorship deals, and ticket sales.',
          body: 'The AFL\'s ability to fund player salaries entirely through commercial revenue demonstrates that athletes\' pay reflects the market value of their unique talent and the entertainment they provide.',
          conclusion: 'In a market economy, compensation reflects the value that individuals generate, and the enormous revenue of professional sports justifies the compensation of those whose talent drives it.'
        }
      },
      {
        point: 'Elite athletic careers are extremely short, highly competitive, and physically demanding',
        evidence: 'The average career length for professional athletes ranges from 3 to 8 years, and only approximately 0.01% of aspiring athletes ever compete at the professional level.',
        example: 'Australian cricket fast bowlers have an average career of just five years at the elite level, during which their bodies endure extraordinary physical stress, with many experiencing chronic injuries after retirement.',
        sentences: {
          intro: 'The brevity and physical demands of professional athletic careers justify higher annual earnings, as athletes must earn their lifetime income in a fraction of the time available to other professionals.',
          body: 'With careers averaging just a few years and competition rates of one in ten thousand, the few who reach the pinnacle of professional sport have survived an extraordinarily demanding selection process.',
          conclusion: 'High salaries during a short career window compensate athletes for the enormous physical sacrifice, career brevity, and extreme competition that characterise professional sport.'
        }
      },
      {
        point: 'Athletes inspire millions and contribute to public health through promotion of physical activity',
        evidence: 'Sports Marketing Surveys found that elite sporting events increase physical activity participation among viewers by 12-15%, with role-model effects particularly strong among young people.',
        example: 'Following Australia\'s success at the 2000 Sydney Olympics, sports participation rates increased by 20% across the country, demonstrating the inspirational effect of elite athletic achievement.',
        sentences: {
          intro: 'Beyond entertainment, professional athletes serve as powerful role models whose achievements inspire millions of people, particularly young people, to pursue physical activity and healthy lifestyles.',
          body: 'The surge in sports participation following major events like the Sydney Olympics demonstrates the broader social value that elite athletes create through their inspirational performances.',
          conclusion: 'The social impact of professional sport, including its contribution to public health and community identity, represents a form of value creation that extends far beyond entertainment.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'The pay disparity between athletes and essential workers reflects distorted social values',
        evidence: 'An Australian nurse earns an average of $72,000 annually, while the average AFL player earns approximately $370,000, a disparity that many consider morally indefensible given the relative social contributions.',
        example: 'During the COVID-19 pandemic, healthcare workers were celebrated as heroes while continuing to earn a fraction of professional athletes\' salaries, highlighting the disconnect between social contribution and compensation.',
        sentences: {
          intro: 'The fact that professional athletes earn multiples of the salaries of teachers, nurses, and scientists reflects a troubling distortion of social values that prioritises entertainment over essential services.',
          body: 'The pandemic\'s revelation that society depends far more on healthcare workers, teachers, and scientists than on athletes exposed the moral bankruptcy of compensation structures that reward entertainment over essential work.',
          conclusion: 'A society that pays those who entertain far more than those who educate, heal, and protect has its priorities fundamentally misaligned.'
        }
      },
      {
        point: 'Excessive sports salaries divert resources from grassroots participation and development',
        evidence: 'In many countries, the concentration of sports revenue in elite player salaries leaves insufficient funding for grassroots programmes, facilities, and youth development.',
        example: 'While AFL and NRL players earn millions, many community sporting facilities in regional Australia are deteriorating due to lack of investment, and youth participation rates in organised sport are declining.',
        sentences: {
          intro: 'The concentration of sports revenue in elite salaries comes at the expense of grassroots participation, community facilities, and youth development programmes.',
          body: 'The contrast between multimillion-dollar player contracts and deteriorating community sporting facilities in regional Australia reveals a dysfunctional allocation of resources within the sports ecosystem.',
          conclusion: 'Professional sports organisations have a responsibility to ensure that the wealth generated by elite competition flows back to the grassroots programmes that develop future talent and promote community health.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, while athletes\' salaries are determined by market forces and the enormous revenue their talent generates, the growing pay disparity between sports stars and essential workers raises legitimate moral questions. Professional sports organisations should reinvest a greater share of revenue in grassroots development and community programmes, while society should also address the chronic underpayment of essential workers.',
    keyVocabulary: ['sports salaries', 'market forces', 'pay disparity', 'career brevity', 'commercial revenue', 'essential workers', 'grassroots sport', 'social contribution']
  },

  {
    id: 'sci07',
    category: 'Science & Culture',
    question: 'The media and advertising industry promotes certain beauty standards that many argue are unrealistic and harmful. Should there be regulations on how beauty is portrayed in media?',
    keywords: ['beauty standards', 'body image', 'media influence', 'advertising regulation'],
    forPoints: [
      {
        point: 'Unrealistic beauty standards in media contribute to mental health problems, particularly among young people',
        evidence: 'A systematic review in the Journal of Youth and Adolescence found that exposure to idealised media images increases body dissatisfaction by 25% and disordered eating behaviours by 15% among adolescent girls.',
        example: 'The Australian Butterfly Foundation reports that eating disorders affect approximately one million Australians at any given time, with media-promoted beauty standards identified as a significant contributing factor.',
        sentences: {
          intro: 'The promotion of unrealistic beauty standards in media and advertising is a documented contributor to the body image disorders and mental health problems affecting millions of young people.',
          body: 'The alarming prevalence of eating disorders in Australia, affecting one million people at any time, underscores the urgent need to address the media\'s role in promoting harmful beauty ideals.',
          conclusion: 'When media content demonstrably damages the mental health of young people, regulation is not censorship but a necessary public health intervention.'
        }
      },
      {
        point: 'Mandatory labelling of digitally altered images promotes transparency and reduces harm',
        evidence: 'Research by Dove\'s Self-Esteem Project found that 80% of girls aged 13-17 altered their appearance in photos before posting online, influenced by the heavily edited images they see in professional media.',
        example: 'France\'s 2017 law requiring all commercially published photographs that have been digitally retouched to carry a visible label has been praised as a model for promoting transparency in media beauty standards.',
        sentences: {
          intro: 'Requiring the labelling of digitally altered images in advertising is a proportionate regulatory measure that promotes transparency without restricting creative expression.',
          body: 'France\'s mandatory labelling of retouched images provides a practical model for ensuring that consumers, particularly young people, can distinguish between natural and artificially enhanced beauty standards.',
          conclusion: 'Transparency about digital manipulation empowers consumers to evaluate media images critically, reducing the harmful effects of unrealistic beauty ideals.'
        }
      },
      {
        point: 'Promoting diverse representation in media improves self-esteem and social inclusion',
        evidence: 'A study by the Geena Davis Institute on Gender in Media found that children who see diverse body types, skin colours, and appearances in media develop 30% higher self-esteem and greater acceptance of others.',
        example: 'Australian brand Modibodi\'s inclusive advertising campaigns featuring models of all body types, ages, and abilities have been commercially successful while promoting positive body image.',
        sentences: {
          intro: 'Promoting diverse representation of beauty in media has measurable positive effects on self-esteem, social inclusion, and mental health across all demographics.',
          body: 'The commercial success of Australian brands using inclusive advertising demonstrates that diverse representation is not only ethically right but also economically viable.',
          conclusion: 'Media regulation that encourages diverse representation creates a culture where all individuals feel valued and included, benefiting both individual well-being and social cohesion.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Regulating beauty standards in media infringes on creative and commercial freedom',
        evidence: 'Advertising industry bodies argue that creative expression and aspirational imagery are fundamental to marketing, and that government-imposed beauty standards would stifle innovation and commercial freedom.',
        example: 'The fashion industry argues that editorial and artistic photography inherently involves creative choices about appearance and presentation that should not be subject to government regulation.',
        sentences: {
          intro: 'Regulating how beauty is portrayed in media raises legitimate concerns about government overreach into creative expression and commercial communication.',
          body: 'The fashion and advertising industries argue that aspirational imagery is a legitimate and essential element of creative marketing that should be protected from government censorship.',
          conclusion: 'Rather than regulating beauty standards from above, industry self-regulation and consumer education may be more appropriate responses that preserve creative freedom.'
        }
      },
      {
        point: 'Parents and educators, not government regulators, should guide young people\'s media consumption',
        evidence: 'Family-based media literacy research shows that parental conversations about media images reduce body dissatisfaction by 20-30%, suggesting that education is more effective than regulation.',
        example: 'School-based body image programmes like "Happy Being Me," delivered in Australian schools, have been shown to reduce appearance-related anxiety and improve media literacy among participants.',
        sentences: {
          intro: 'Education and parental guidance are more effective and less intrusive approaches to protecting young people from harmful beauty standards than government regulation of media content.',
          body: 'The documented success of school-based body image programmes in reducing appearance anxiety suggests that empowering young people to think critically about media is more effective than censoring it.',
          conclusion: 'Building resilience and critical thinking skills in young people is a more sustainable solution than attempting to regulate the images they encounter in an increasingly digital world.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, the documented harm caused by unrealistic media beauty standards justifies proportionate regulation, including mandatory labelling of digitally altered images and requirements for diverse representation. However, these measures should be complemented by comprehensive media literacy education that empowers individuals to critically evaluate the images they encounter.',
    keyVocabulary: ['beauty standards', 'body image', 'digital retouching', 'media representation', 'eating disorders', 'body positivity', 'media literacy', 'diverse representation']
  },

  {
    id: 'sci08',
    category: 'Science & Culture',
    question: 'In many countries, traditional medicine coexists alongside modern medical practices. Should governments promote traditional medicine, or should they focus resources on evidence-based modern treatments?',
    keywords: ['traditional medicine', 'modern medicine', 'evidence-based', 'cultural practices'],
    forPoints: [
      {
        point: 'Traditional medicine represents centuries of accumulated knowledge that can inform modern treatments',
        evidence: 'The WHO estimates that approximately 40% of modern pharmaceutical products are derived from or inspired by traditional plant-based medicines, including aspirin, quinine, and the cancer drug taxol.',
        example: 'The discovery of artemisinin, the most effective malaria treatment in the world, was derived from traditional Chinese medicine by scientist Tu Youyou, who won the Nobel Prize in 2015 for this achievement.',
        sentences: {
          intro: 'Traditional medicine represents an enormous repository of accumulated knowledge that has already contributed to some of the most important pharmaceutical discoveries in history.',
          body: 'Tu Youyou\'s Nobel Prize-winning discovery of artemisinin from a traditional Chinese medicinal herb demonstrates the extraordinary potential of traditional knowledge to inform breakthrough modern treatments.',
          conclusion: 'Dismissing traditional medicine entirely would mean ignoring centuries of empirical observation that could yield future medical breakthroughs.'
        }
      },
      {
        point: 'Traditional medicine provides culturally appropriate healthcare that improves compliance and outcomes for some populations',
        evidence: 'Research in the Journal of Ethnopharmacology found that patients from communities with strong traditional medicine practices are 40% more likely to adhere to treatment when traditional elements are incorporated into their care plans.',
        example: 'In Australia, Aboriginal and Torres Strait Islander health services that integrate traditional healing practices alongside Western medicine report better engagement and health outcomes than services offering Western medicine alone.',
        sentences: {
          intro: 'For many communities, particularly Indigenous populations, traditional medicine provides culturally meaningful healthcare that improves engagement, compliance, and outcomes.',
          body: 'Indigenous health services in Australia that respect and incorporate traditional healing practices achieve better patient outcomes than those that impose Western-only approaches.',
          conclusion: 'Culturally sensitive healthcare that integrates traditional and modern medicine respects patients\' identities and produces better health outcomes than either approach alone.'
        }
      },
      {
        point: 'Integrating traditional and modern medicine creates a more comprehensive healthcare system',
        evidence: 'The WHO\'s Traditional Medicine Strategy 2014-2023 encourages member states to integrate traditional practices into national health systems where evidence supports their safety and efficacy.',
        example: 'China\'s integrated healthcare system, which offers both traditional Chinese medicine and Western medicine in public hospitals, provides patients with the broadest possible range of treatment options.',
        sentences: {
          intro: 'An integrated healthcare system that offers both traditional and modern treatments provides patients with the most comprehensive range of evidence-based options for their care.',
          body: 'China\'s model of offering both traditional and Western medicine in public hospitals demonstrates that integration can expand treatment options and improve patient satisfaction without compromising scientific standards.',
          conclusion: 'The future of healthcare lies not in choosing between traditional and modern medicine but in combining the strengths of both within a framework of evidence-based practice.'
        }
      }
    ],
    againstPoints: [
      {
        point: 'Many traditional treatments lack scientific evidence and may be ineffective or harmful',
        evidence: 'A Cochrane review of traditional herbal remedies found that the majority had insufficient evidence to support their efficacy, and some carried risks of adverse effects and dangerous interactions with conventional drugs.',
        example: 'The promotion of traditional remedies as alternatives to proven treatments for HIV/AIDS in South Africa under President Mbeki is estimated to have caused over 300,000 preventable deaths.',
        sentences: {
          intro: 'The most serious risk of promoting traditional medicine is that unproven treatments may be substituted for effective modern therapies, with potentially fatal consequences.',
          body: 'The devastating impact of South Africa\'s promotion of traditional remedies over antiretroviral therapy during the AIDS crisis demonstrates the life-threatening danger of replacing proven treatments with unvalidated alternatives.',
          conclusion: 'Governments have a responsibility to ensure that healthcare resources are directed towards treatments that have been proven effective through rigorous scientific evaluation.'
        }
      },
      {
        point: 'Government promotion of traditional medicine can legitimise practices that exploit vulnerable patients',
        evidence: 'Consumer protection agencies report that the traditional medicine market is rife with unregulated products making unsubstantiated health claims, exposing consumers to financial exploitation and health risks.',
        example: 'In Australia, the Therapeutic Goods Administration has recalled numerous traditional medicine products found to contain undeclared pharmaceutical ingredients, heavy metals, or other harmful contaminants.',
        sentences: {
          intro: 'Government endorsement of traditional medicine can inadvertently legitimise an industry that is often poorly regulated and prone to exploiting patients with unsubstantiated health claims.',
          body: 'The recall of contaminated traditional medicine products in Australia highlights the consumer protection risks of an industry that operates with less rigorous oversight than the pharmaceutical sector.',
          conclusion: 'If traditional medicine is to be integrated into healthcare systems, it must be subjected to the same rigorous quality controls, safety testing, and evidence standards applied to conventional treatments.'
        }
      }
    ],
    balancedConclusion: 'In conclusion, traditional medicine contains valuable knowledge that can complement modern healthcare, particularly for cultural communities where it improves engagement and outcomes. However, it must be subjected to rigorous scientific evaluation before integration, and governments must ensure that the promotion of traditional practices never displaces evidence-based treatments for serious medical conditions.',
    keyVocabulary: ['traditional medicine', 'evidence-based medicine', 'integrative healthcare', 'ethnopharmacology', 'cultural sensitivity', 'pharmaceutical discovery', 'quality control', 'healthcare regulation']
  }

  ]); // end concat

  // Log successful loading
  if (typeof console !== 'undefined') {
    console.log('[corpus-arguments-2] Loaded ' + 60 + ' topics across 6 categories (Health, Society, Government & Economy, Work, Media & Crime, Science & Culture)');
  }

})();
