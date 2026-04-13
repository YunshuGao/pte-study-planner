// ============================================================================
// PTE Essay Writing — Universal Sentence Pattern Bank
// 220+ ready-made patterns for any essay topic
// Australian English | ES5 only
// ============================================================================

var SENTENCE_PATTERNS = {
  version: "1.0.0",
  totalPatterns: 220,
  lastUpdated: "2026-04-13",
  categories: [

    // ========================================================================
    // 1. INTRODUCTION PATTERNS (开头段模板) — 30 patterns
    // ========================================================================
    {
      id: "intro",
      title: "Introduction Patterns",
      titleCN: "开头段模板",
      description: "Use these to open any essay. Replace [TOPIC] with your subject.",
      subcategories: [
        {
          id: "intro-topic",
          title: "Topic Introduction",
          titleCN: "话题引入",
          count: 10
        },
        {
          id: "intro-background",
          title: "Background / Context",
          titleCN: "背景交代",
          count: 5
        },
        {
          id: "intro-thesis-for",
          title: "Thesis Statement — For",
          titleCN: "正面立场",
          count: 5
        },
        {
          id: "intro-thesis-against",
          title: "Thesis Statement — Against",
          titleCN: "反面立场",
          count: 5
        },
        {
          id: "intro-thesis-balanced",
          title: "Balanced Thesis",
          titleCN: "平衡立场",
          count: 5
        }
      ],
      patterns: [
        // --- Topic Introduction (话题引入) — 10 patterns ---
        {
          id: "ip01",
          subcategory: "intro-topic",
          pattern: "In recent years, [TOPIC] has become one of the most debated issues in contemporary society.",
          function: "General topic introduction",
          functionCN: "通用话题引入",
          example: "In recent years, artificial intelligence has become one of the most debated issues in contemporary society.",
          tip: "Works for any topic. Strong, academic opening.",
          tipCN: "适用于任何话题。学术性强的开头。"
        },
        {
          id: "ip02",
          subcategory: "intro-topic",
          pattern: "The question of whether [TOPIC] is a matter that has attracted considerable attention worldwide.",
          function: "Formal question framing",
          functionCN: "正式提问式引入",
          example: "The question of whether governments should regulate social media is a matter that has attracted considerable attention worldwide.",
          tip: "Best for agree/disagree essay topics.",
          tipCN: "最适合同意/不同意类型的话题。"
        },
        {
          id: "ip03",
          subcategory: "intro-topic",
          pattern: "It is widely acknowledged that [TOPIC] plays an increasingly significant role in modern life.",
          function: "Establish importance",
          functionCN: "强调话题重要性",
          example: "It is widely acknowledged that technology plays an increasingly significant role in modern life.",
          tip: "Shows the topic is universally relevant.",
          tipCN: "表明话题具有普遍相关性。"
        },
        {
          id: "ip04",
          subcategory: "intro-topic",
          pattern: "Over the past few decades, [TOPIC] has undergone dramatic changes, sparking widespread discussion among policymakers and the public alike.",
          function: "Historical change introduction",
          functionCN: "历史变化引入",
          example: "Over the past few decades, the global education system has undergone dramatic changes, sparking widespread discussion among policymakers and the public alike.",
          tip: "Good when the topic involves change or development over time.",
          tipCN: "适合涉及时间变化或发展的话题。"
        },
        {
          id: "ip05",
          subcategory: "intro-topic",
          pattern: "Few issues have generated as much controversy as [TOPIC] in today's rapidly evolving world.",
          function: "Emphasise controversy",
          functionCN: "强调争议性",
          example: "Few issues have generated as much controversy as genetic engineering in today's rapidly evolving world.",
          tip: "Ideal for highly debatable topics.",
          tipCN: "非常适合争议性很强的话题。"
        },
        {
          id: "ip06",
          subcategory: "intro-topic",
          pattern: "With the rapid advancement of [TOPIC], society faces both unprecedented opportunities and significant challenges.",
          function: "Dual-sided topic opening",
          functionCN: "双面话题引入",
          example: "With the rapid advancement of digital communication, society faces both unprecedented opportunities and significant challenges.",
          tip: "Signals you will discuss both sides. Works well for balanced essays.",
          tipCN: "暗示你将讨论双方。适合平衡型文章。"
        },
        {
          id: "ip07",
          subcategory: "intro-topic",
          pattern: "There is an ongoing debate about the extent to which [TOPIC] should be [ACTION] in the modern era.",
          function: "Policy debate framing",
          functionCN: "政策辩论式引入",
          example: "There is an ongoing debate about the extent to which immigration should be regulated in the modern era.",
          tip: "Replace [ACTION] with a verb like regulated, promoted, restricted.",
          tipCN: "将[ACTION]替换为动词，如regulated, promoted, restricted。"
        },
        {
          id: "ip08",
          subcategory: "intro-topic",
          pattern: "[TOPIC] has long been a subject of intense discussion, with opinions varying considerably across different cultures and communities.",
          function: "Cross-cultural relevance",
          functionCN: "跨文化相关性引入",
          example: "The role of women in the workforce has long been a subject of intense discussion, with opinions varying considerably across different cultures and communities.",
          tip: "Highlights cultural diversity in opinions.",
          tipCN: "强调意见的文化多样性。"
        },
        {
          id: "ip09",
          subcategory: "intro-topic",
          pattern: "As globalisation continues to reshape the world, [TOPIC] has emerged as a pressing concern for governments and individuals alike.",
          function: "Globalisation context",
          functionCN: "全球化背景引入",
          example: "As globalisation continues to reshape the world, environmental sustainability has emerged as a pressing concern for governments and individuals alike.",
          tip: "Links the topic to globalisation trends.",
          tipCN: "将话题与全球化趋势联系起来。"
        },
        {
          id: "ip10",
          subcategory: "intro-topic",
          pattern: "The growing prominence of [TOPIC] in public discourse reflects its far-reaching implications for society at large.",
          function: "Societal impact introduction",
          functionCN: "社会影响引入",
          example: "The growing prominence of mental health awareness in public discourse reflects its far-reaching implications for society at large.",
          tip: "Positions the topic as having wide societal importance.",
          tipCN: "将话题定位为具有广泛社会重要性。"
        },

        // --- Background / Context (背景交代) — 5 patterns ---
        {
          id: "ip11",
          subcategory: "intro-background",
          pattern: "Historically, [TOPIC] was regarded as [OLD VIEW]; however, contemporary perspectives have shifted considerably.",
          function: "Historical contrast",
          functionCN: "历史对比背景",
          example: "Historically, working from home was regarded as unprofessional; however, contemporary perspectives have shifted considerably.",
          tip: "Shows how views have changed over time.",
          tipCN: "展示观点如何随时间变化。"
        },
        {
          id: "ip12",
          subcategory: "intro-background",
          pattern: "According to recent research, [STATISTIC OR FINDING], which highlights the significance of [TOPIC].",
          function: "Data-driven background",
          functionCN: "数据驱动背景",
          example: "According to recent research, over 60 per cent of young adults use social media daily, which highlights the significance of digital literacy.",
          tip: "Use real or plausible statistics to add credibility.",
          tipCN: "使用真实或可信的统计数据增加可信度。"
        },
        {
          id: "ip13",
          subcategory: "intro-background",
          pattern: "In an era defined by [TREND], it is not surprising that [TOPIC] has come to the forefront of public debate.",
          function: "Contemporary era framing",
          functionCN: "当代时代背景",
          example: "In an era defined by technological innovation, it is not surprising that data privacy has come to the forefront of public debate.",
          tip: "Replace [TREND] with a current social/economic/tech trend.",
          tipCN: "将[TREND]替换为当前的社会/经济/科技趋势。"
        },
        {
          id: "ip14",
          subcategory: "intro-background",
          pattern: "The concept of [TOPIC] can be traced back to [TIME/EVENT], but its relevance has never been greater than it is today.",
          function: "Origin and relevance",
          functionCN: "起源与现实意义",
          example: "The concept of universal basic income can be traced back to the 18th century, but its relevance has never been greater than it is today.",
          tip: "Good for topics with historical roots.",
          tipCN: "适合有历史渊源的话题。"
        },
        {
          id: "ip15",
          subcategory: "intro-background",
          pattern: "While [TOPIC] may appear to be a straightforward matter, a closer examination reveals a complex web of social, economic, and ethical dimensions.",
          function: "Complexity revelation",
          functionCN: "揭示复杂性",
          example: "While fast fashion may appear to be a straightforward matter, a closer examination reveals a complex web of social, economic, and ethical dimensions.",
          tip: "Signals depth. Shows the examiner you can think critically.",
          tipCN: "表示深度。向考官展示你能批判性思考。"
        },

        // --- Thesis Statement — For (正面立场) — 5 patterns ---
        {
          id: "ip16",
          subcategory: "intro-thesis-for",
          pattern: "This essay argues that [TOPIC/ACTION] is essential for [BENEFIT], as it offers [REASON 1] and [REASON 2].",
          function: "Clear supportive thesis",
          functionCN: "明确支持性论点",
          example: "This essay argues that investing in renewable energy is essential for long-term economic stability, as it offers environmental protection and job creation.",
          tip: "State your position and preview two reasons.",
          tipCN: "陈述你的立场并预告两个原因。"
        },
        {
          id: "ip17",
          subcategory: "intro-thesis-for",
          pattern: "It is my firm belief that [TOPIC/ACTION] should be [PROMOTED/ENCOURAGED/SUPPORTED], and this essay will present compelling evidence to support this view.",
          function: "Strong personal stance",
          functionCN: "强烈个人立场",
          example: "It is my firm belief that physical education should be promoted in all schools, and this essay will present compelling evidence to support this view.",
          tip: "Use when you want to express a strong opinion.",
          tipCN: "当你想表达强烈观点时使用。"
        },
        {
          id: "ip18",
          subcategory: "intro-thesis-for",
          pattern: "The advantages of [TOPIC] far outweigh the disadvantages, and this essay will demonstrate why [ACTION] is the most prudent course of action.",
          function: "Advantage-focused thesis",
          functionCN: "优势为主论点",
          example: "The advantages of online learning far outweigh the disadvantages, and this essay will demonstrate why embracing digital education is the most prudent course of action.",
          tip: "Good for advantages/disadvantages essay types.",
          tipCN: "适合优缺点类型的文章。"
        },
        {
          id: "ip19",
          subcategory: "intro-thesis-for",
          pattern: "Given the overwhelming evidence, it is reasonable to conclude that [TOPIC/ACTION] represents the best approach to addressing [PROBLEM].",
          function: "Evidence-based thesis",
          functionCN: "基于证据的论点",
          example: "Given the overwhelming evidence, it is reasonable to conclude that stricter emission regulations represent the best approach to addressing climate change.",
          tip: "Implies you will use evidence. Sounds very academic.",
          tipCN: "暗示你将使用证据。听起来非常学术。"
        },
        {
          id: "ip20",
          subcategory: "intro-thesis-for",
          pattern: "I strongly support the view that [TOPIC/ACTION] is beneficial, and this essay will outline the key reasons underpinning this position.",
          function: "Direct supportive thesis",
          functionCN: "直接支持性论点",
          example: "I strongly support the view that bilingual education is beneficial, and this essay will outline the key reasons underpinning this position.",
          tip: "Simple and direct. Easy to follow.",
          tipCN: "简单直接。容易跟随。"
        },

        // --- Thesis Statement — Against (反面立场) — 5 patterns ---
        {
          id: "ip21",
          subcategory: "intro-thesis-against",
          pattern: "This essay contends that [TOPIC/ACTION] poses more risks than benefits, and should therefore be [RESTRICTED/RECONSIDERED/OPPOSED].",
          function: "Clear opposing thesis",
          functionCN: "明确反对性论点",
          example: "This essay contends that the widespread use of single-use plastics poses more risks than benefits, and should therefore be restricted.",
          tip: "State your opposition clearly and preview your stance.",
          tipCN: "清楚陈述你的反对立场并预告你的态度。"
        },
        {
          id: "ip22",
          subcategory: "intro-thesis-against",
          pattern: "Despite its apparent appeal, [TOPIC/ACTION] is fundamentally flawed, and this essay will examine the evidence against it.",
          function: "Challenge popular view",
          functionCN: "挑战流行观点",
          example: "Despite its apparent appeal, the four-day working week is fundamentally flawed, and this essay will examine the evidence against it.",
          tip: "Use when arguing against a popular idea.",
          tipCN: "当反驳一个流行观点时使用。"
        },
        {
          id: "ip23",
          subcategory: "intro-thesis-against",
          pattern: "While proponents of [TOPIC] highlight its potential benefits, the drawbacks are too significant to ignore, as this essay will demonstrate.",
          function: "Acknowledge then oppose",
          functionCN: "先承认后反对",
          example: "While proponents of nuclear energy highlight its potential benefits, the drawbacks are too significant to ignore, as this essay will demonstrate.",
          tip: "Shows you understand the other side before disagreeing.",
          tipCN: "表明你在反对之前理解了另一方的观点。"
        },
        {
          id: "ip24",
          subcategory: "intro-thesis-against",
          pattern: "I firmly disagree with the notion that [CLAIM], and this essay will present several reasons to challenge this perspective.",
          function: "Direct disagreement",
          functionCN: "直接反对",
          example: "I firmly disagree with the notion that standardised testing accurately measures student ability, and this essay will present several reasons to challenge this perspective.",
          tip: "Use for agree/disagree essays when you disagree.",
          tipCN: "用于同意/不同意文章中你不同意的情况。"
        },
        {
          id: "ip25",
          subcategory: "intro-thesis-against",
          pattern: "Far from being a solution, [TOPIC/ACTION] is likely to exacerbate the very problems it seeks to address, as the following discussion will show.",
          function: "Counterproductive argument",
          functionCN: "反效果论证",
          example: "Far from being a solution, increasing surveillance in public spaces is likely to exacerbate the very problems it seeks to address, as the following discussion will show.",
          tip: "Powerful when arguing that a proposed solution is harmful.",
          tipCN: "当论证一个提议的解决方案有害时非常有力。"
        },

        // --- Balanced Thesis (平衡立场) — 5 patterns ---
        {
          id: "ip26",
          subcategory: "intro-thesis-balanced",
          pattern: "While there are valid arguments on both sides of the [TOPIC] debate, this essay will argue that a balanced approach is the most effective strategy.",
          function: "Balanced compromise thesis",
          functionCN: "平衡折中论点",
          example: "While there are valid arguments on both sides of the immigration debate, this essay will argue that a balanced approach is the most effective strategy.",
          tip: "Use when you want to present both sides before offering your view.",
          tipCN: "当你想先呈现双方再给出你的观点时使用。"
        },
        {
          id: "ip27",
          subcategory: "intro-thesis-balanced",
          pattern: "This essay will examine both the merits and limitations of [TOPIC] before arriving at a nuanced conclusion.",
          function: "Analytical balanced thesis",
          functionCN: "分析性平衡论点",
          example: "This essay will examine both the merits and limitations of remote working before arriving at a nuanced conclusion.",
          tip: "Sounds measured and thoughtful. Good for discussion essays.",
          tipCN: "听起来有分寸且深思熟虑。适合讨论型文章。"
        },
        {
          id: "ip28",
          subcategory: "intro-thesis-balanced",
          pattern: "Although [TOPIC] undoubtedly offers certain advantages, it also presents notable challenges that must be carefully weighed.",
          function: "Acknowledge advantages and challenges",
          functionCN: "承认优势和挑战",
          example: "Although automation undoubtedly offers certain advantages, it also presents notable challenges that must be carefully weighed.",
          tip: "Good opening for essays requiring you to discuss both sides.",
          tipCN: "适合要求讨论双方的文章的开头。"
        },
        {
          id: "ip29",
          subcategory: "intro-thesis-balanced",
          pattern: "The impact of [TOPIC] is neither entirely positive nor wholly negative; rather, it depends on [FACTOR 1] and [FACTOR 2].",
          function: "Conditional balanced thesis",
          functionCN: "条件性平衡论点",
          example: "The impact of social media on mental health is neither entirely positive nor wholly negative; rather, it depends on usage patterns and individual resilience.",
          tip: "Shows nuanced thinking. Replace factors with relevant conditions.",
          tipCN: "展示细致的思考。将因素替换为相关条件。"
        },
        {
          id: "ip30",
          subcategory: "intro-thesis-balanced",
          pattern: "This essay maintains that the relationship between [TOPIC A] and [TOPIC B] is multifaceted, requiring careful analysis of both perspectives.",
          function: "Relationship-based balanced thesis",
          functionCN: "关系型平衡论点",
          example: "This essay maintains that the relationship between economic growth and environmental protection is multifaceted, requiring careful analysis of both perspectives.",
          tip: "Best when comparing two interconnected topics.",
          tipCN: "最适合比较两个相互关联的话题。"
        }
      ]
    },

    // ========================================================================
    // 2. BODY PARAGRAPH PATTERNS (主体段模板) — 50 patterns
    // ========================================================================
    {
      id: "body",
      title: "Body Paragraph Patterns",
      titleCN: "主体段模板",
      description: "Use these to build strong arguments in the middle of your essay.",
      subcategories: [
        {
          id: "body-topic",
          title: "Topic Sentence",
          titleCN: "主题句",
          count: 10
        },
        {
          id: "body-evidence",
          title: "Adding Evidence",
          titleCN: "举证",
          count: 8
        },
        {
          id: "body-example",
          title: "Giving Examples",
          titleCN: "举例",
          count: 8
        },
        {
          id: "body-cause-effect",
          title: "Explaining Cause / Effect",
          titleCN: "因果论证",
          count: 8
        },
        {
          id: "body-comparison",
          title: "Comparison / Contrast",
          titleCN: "比较对比",
          count: 6
        },
        {
          id: "body-concession",
          title: "Concession",
          titleCN: "让步",
          count: 5
        },
        {
          id: "body-counter",
          title: "Counter-argument",
          titleCN: "反驳",
          count: 5
        }
      ],
      patterns: [
        // --- Topic Sentence (主题句) — 10 patterns ---
        {
          id: "bp01",
          subcategory: "body-topic",
          pattern: "One of the primary reasons [TOPIC/ACTION] is [ADJECTIVE] is that [REASON].",
          function: "State first/main reason",
          functionCN: "陈述第一个/主要原因",
          example: "One of the primary reasons renewable energy is essential is that it significantly reduces carbon emissions.",
          tip: "Perfect for opening your first body paragraph.",
          tipCN: "非常适合打开你的第一个主体段。"
        },
        {
          id: "bp02",
          subcategory: "body-topic",
          pattern: "Another compelling argument in favour of [TOPIC/ACTION] is the positive impact it has on [AREA].",
          function: "Introduce additional reason",
          functionCN: "引入额外原因",
          example: "Another compelling argument in favour of public transport investment is the positive impact it has on urban air quality.",
          tip: "Use for second or third body paragraphs.",
          tipCN: "用于第二或第三个主体段。"
        },
        {
          id: "bp03",
          subcategory: "body-topic",
          pattern: "Perhaps the most significant aspect of [TOPIC] is its ability to [VERB PHRASE].",
          function: "Highlight most important point",
          functionCN: "突出最重要的观点",
          example: "Perhaps the most significant aspect of early childhood education is its ability to shape lifelong learning habits.",
          tip: "Use when presenting your strongest argument.",
          tipCN: "当提出你最有力的论据时使用。"
        },
        {
          id: "bp04",
          subcategory: "body-topic",
          pattern: "From a [PERSPECTIVE] standpoint, [TOPIC] offers substantial benefits that cannot be overlooked.",
          function: "Perspective-based topic sentence",
          functionCN: "基于视角的主题句",
          example: "From an economic standpoint, tourism offers substantial benefits that cannot be overlooked.",
          tip: "Replace [PERSPECTIVE] with economic, social, environmental, ethical.",
          tipCN: "将[PERSPECTIVE]替换为economic, social, environmental, ethical。"
        },
        {
          id: "bp05",
          subcategory: "body-topic",
          pattern: "A further consideration is the extent to which [TOPIC] influences [OUTCOME].",
          function: "Introduce further point",
          functionCN: "引入进一步的观点",
          example: "A further consideration is the extent to which media coverage influences public opinion on climate change.",
          tip: "Good for adding depth to your argument.",
          tipCN: "适合为你的论证增加深度。"
        },
        {
          id: "bp06",
          subcategory: "body-topic",
          pattern: "Equally important is the role that [FACTOR] plays in determining the success of [TOPIC/ACTION].",
          function: "Equal importance point",
          functionCN: "同等重要的观点",
          example: "Equally important is the role that teacher training plays in determining the success of educational reforms.",
          tip: "Signals this point is as strong as the previous one.",
          tipCN: "表明这个观点与前一个一样有力。"
        },
        {
          id: "bp07",
          subcategory: "body-topic",
          pattern: "It is also worth noting that [TOPIC/ACTION] has a profound effect on [GROUP/AREA].",
          function: "Noteworthy impact",
          functionCN: "值得注意的影响",
          example: "It is also worth noting that urban sprawl has a profound effect on biodiversity in surrounding regions.",
          tip: "Introduces a point the reader might not have considered.",
          tipCN: "引入读者可能没有考虑过的观点。"
        },
        {
          id: "bp08",
          subcategory: "body-topic",
          pattern: "The [ADJECTIVE] nature of [TOPIC] is best illustrated by examining its impact on [AREA].",
          function: "Impact-focused topic sentence",
          functionCN: "以影响为中心的主题句",
          example: "The transformative nature of artificial intelligence is best illustrated by examining its impact on healthcare diagnostics.",
          tip: "Good when you plan to give a detailed example in the paragraph.",
          tipCN: "当你计划在段落中给出详细例子时使用。"
        },
        {
          id: "bp09",
          subcategory: "body-topic",
          pattern: "On the other hand, [TOPIC/ACTION] also raises serious concerns regarding [ISSUE].",
          function: "Introduce opposing point",
          functionCN: "引入反面观点",
          example: "On the other hand, genetic modification also raises serious concerns regarding food safety and ethical boundaries.",
          tip: "Use when switching to the opposing side.",
          tipCN: "当转向反面论述时使用。"
        },
        {
          id: "bp10",
          subcategory: "body-topic",
          pattern: "Central to this debate is the question of whether [TOPIC/ACTION] truly benefits [GROUP] or merely serves [ALTERNATIVE INTEREST].",
          function: "Critical questioning topic sentence",
          functionCN: "批判性质疑主题句",
          example: "Central to this debate is the question of whether standardised testing truly benefits students or merely serves administrative convenience.",
          tip: "Shows critical thinking. Very impressive to examiners.",
          tipCN: "展示批判性思维。对考官印象深刻。"
        },

        // --- Adding Evidence (举证) — 8 patterns ---
        {
          id: "bp11",
          subcategory: "body-evidence",
          pattern: "Research conducted by [SOURCE] indicates that [FINDING], lending support to the argument that [CLAIM].",
          function: "Cite research evidence",
          functionCN: "引用研究证据",
          example: "Research conducted by the World Health Organisation indicates that air pollution contributes to over four million premature deaths annually, lending support to the argument that stricter regulations are needed.",
          tip: "Name a plausible source. PTE does not require exact citations.",
          tipCN: "提及一个可信的来源。PTE不需要精确引用。"
        },
        {
          id: "bp12",
          subcategory: "body-evidence",
          pattern: "Statistical evidence suggests that [DATA/TREND], which clearly demonstrates the importance of [TOPIC/ACTION].",
          function: "Statistical support",
          functionCN: "统计支持",
          example: "Statistical evidence suggests that countries with higher education spending consistently outperform others in innovation indices, which clearly demonstrates the importance of investing in education.",
          tip: "You can use approximate or well-known statistics.",
          tipCN: "你可以使用近似的或众所周知的统计数据。"
        },
        {
          id: "bp13",
          subcategory: "body-evidence",
          pattern: "A growing body of evidence confirms that [FINDING], reinforcing the view that [CLAIM].",
          function: "Accumulated evidence",
          functionCN: "累积证据",
          example: "A growing body of evidence confirms that regular physical activity reduces the risk of chronic disease, reinforcing the view that schools should prioritise physical education.",
          tip: "Implies many studies agree. Stronger than citing one source.",
          tipCN: "暗示许多研究结果一致。比引用一个来源更有力。"
        },
        {
          id: "bp14",
          subcategory: "body-evidence",
          pattern: "According to a report published by [ORGANISATION], [FINDING], which underscores the urgency of [ACTION].",
          function: "Organisational report citation",
          functionCN: "组织报告引用",
          example: "According to a report published by the United Nations, global temperatures have risen by over one degree Celsius since pre-industrial times, which underscores the urgency of reducing greenhouse gas emissions.",
          tip: "Use well-known organisations: UN, WHO, OECD, World Bank.",
          tipCN: "使用知名组织：UN, WHO, OECD, World Bank。"
        },
        {
          id: "bp15",
          subcategory: "body-evidence",
          pattern: "Empirical data from [COUNTRY/REGION] reveals that [FINDING], providing a strong foundation for [ARGUMENT].",
          function: "Country-specific evidence",
          functionCN: "特定国家证据",
          example: "Empirical data from Scandinavian countries reveals that generous parental leave policies lead to higher workforce participation among women, providing a strong foundation for similar reforms elsewhere.",
          tip: "Country examples make your argument more concrete.",
          tipCN: "国家例子使你的论证更具体。"
        },
        {
          id: "bp16",
          subcategory: "body-evidence",
          pattern: "Numerous studies have demonstrated a clear correlation between [FACTOR A] and [FACTOR B], suggesting that [CONCLUSION].",
          function: "Correlation-based evidence",
          functionCN: "相关性证据",
          example: "Numerous studies have demonstrated a clear correlation between poverty and poor health outcomes, suggesting that economic inequality is a public health issue.",
          tip: "Be careful: correlation is not causation. Use 'suggests' not 'proves'.",
          tipCN: "注意：相关性不等于因果关系。使用'suggests'而不是'proves'。"
        },
        {
          id: "bp17",
          subcategory: "body-evidence",
          pattern: "The findings of [STUDY/SURVEY] reveal that [RESULT], which lends considerable weight to the claim that [ARGUMENT].",
          function: "Study findings",
          functionCN: "研究发现",
          example: "The findings of a recent global survey reveal that over seventy per cent of employees prefer flexible working arrangements, which lends considerable weight to the claim that workplace policies need updating.",
          tip: "Use percentages for stronger impact.",
          tipCN: "使用百分比以增强影响力。"
        },
        {
          id: "bp18",
          subcategory: "body-evidence",
          pattern: "It has been well documented that [FINDING], and this evidence serves to strengthen the case for [ACTION].",
          function: "Well-established evidence",
          functionCN: "公认的证据",
          example: "It has been well documented that second-hand smoke causes respiratory illness, and this evidence serves to strengthen the case for smoking bans in public spaces.",
          tip: "Use for facts that are widely accepted.",
          tipCN: "用于广泛接受的事实。"
        },

        // --- Giving Examples (举例) — 8 patterns ---
        {
          id: "bp19",
          subcategory: "body-example",
          pattern: "A notable example of this can be seen in [COUNTRY/SITUATION], where [SPECIFIC DETAIL].",
          function: "Specific country/situation example",
          functionCN: "特定国家/情境例子",
          example: "A notable example of this can be seen in Singapore, where the government has invested heavily in public housing, resulting in one of the highest home ownership rates in the world.",
          tip: "Country examples are very effective in PTE essays.",
          tipCN: "国家例子在PTE作文中非常有效。"
        },
        {
          id: "bp20",
          subcategory: "body-example",
          pattern: "To illustrate this point, consider the case of [EXAMPLE], which demonstrates that [LESSON].",
          function: "Case study illustration",
          functionCN: "案例说明",
          example: "To illustrate this point, consider the case of Finland's education system, which demonstrates that reducing standardised testing can improve student outcomes.",
          tip: "Invites the reader to think with you.",
          tipCN: "邀请读者与你一起思考。"
        },
        {
          id: "bp21",
          subcategory: "body-example",
          pattern: "For instance, in [CONTEXT], [SPECIFIC DETAIL], which clearly supports the argument that [CLAIM].",
          function: "Contextual example",
          functionCN: "情境举例",
          example: "For instance, in many developing nations, access to clean water remains limited, which clearly supports the argument that international aid should prioritise basic infrastructure.",
          tip: "For instance is slightly less formal than to illustrate.",
          tipCN: "'For instance'比'to illustrate'稍微不那么正式。"
        },
        {
          id: "bp22",
          subcategory: "body-example",
          pattern: "This is exemplified by [EXAMPLE], where [OUTCOME] was achieved through [METHOD].",
          function: "Achievement example",
          functionCN: "成就举例",
          example: "This is exemplified by Costa Rica, where near-universal healthcare coverage was achieved through sustained government investment in public health services.",
          tip: "Best when you want to show a success story.",
          tipCN: "当你想展示一个成功案例时最佳。"
        },
        {
          id: "bp23",
          subcategory: "body-example",
          pattern: "A case in point is [EXAMPLE], which vividly illustrates the [POSITIVE/NEGATIVE] consequences of [ACTION].",
          function: "Vivid illustration",
          functionCN: "生动说明",
          example: "A case in point is the Chernobyl disaster, which vividly illustrates the devastating consequences of inadequate safety protocols in the nuclear industry.",
          tip: "Use for dramatic or well-known examples.",
          tipCN: "用于戏剧性的或众所周知的例子。"
        },
        {
          id: "bp24",
          subcategory: "body-example",
          pattern: "One need only look at [EXAMPLE] to understand the significance of [TOPIC/FACTOR].",
          function: "Obvious example reference",
          functionCN: "显而易见的例子",
          example: "One need only look at the rapid growth of e-commerce to understand the significance of digital infrastructure in the modern economy.",
          tip: "Implies the example is obvious and well known.",
          tipCN: "暗示这个例子是显而易见的、众所周知的。"
        },
        {
          id: "bp25",
          subcategory: "body-example",
          pattern: "The experience of [COUNTRY/GROUP] serves as compelling evidence that [CLAIM], as [DETAIL].",
          function: "Experience-based example",
          functionCN: "基于经验的例子",
          example: "The experience of Japan serves as compelling evidence that an ageing population poses economic challenges, as the country faces a shrinking workforce and rising healthcare costs.",
          tip: "Good for topics about demographics, economics, or policy.",
          tipCN: "适合关于人口、经济或政策的话题。"
        },
        {
          id: "bp26",
          subcategory: "body-example",
          pattern: "Take, for example, [SITUATION], in which [DETAIL]. This clearly demonstrates that [CLAIM].",
          function: "Direct example invitation",
          functionCN: "直接举例引导",
          example: "Take, for example, the rise of electric vehicles in Norway, in which government incentives led to a dramatic shift in consumer behaviour. This clearly demonstrates that policy can drive sustainable change.",
          tip: "Two-sentence pattern. The second sentence makes your point.",
          tipCN: "两句模式。第二句阐明你的观点。"
        },

        // --- Explaining Cause / Effect (因果论证) — 8 patterns ---
        {
          id: "bp27",
          subcategory: "body-cause-effect",
          pattern: "As a direct result of [CAUSE], [EFFECT], which underscores the need for [ACTION].",
          function: "Direct cause-effect",
          functionCN: "直接因果关系",
          example: "As a direct result of deforestation, biodiversity loss has accelerated at an alarming rate, which underscores the need for stronger environmental protections.",
          tip: "Clear cause-to-effect structure. Easy to follow.",
          tipCN: "清晰的因果结构。容易跟随。"
        },
        {
          id: "bp28",
          subcategory: "body-cause-effect",
          pattern: "[CAUSE] inevitably leads to [EFFECT], creating a situation in which [CONSEQUENCE].",
          function: "Chain of consequences",
          functionCN: "连锁后果",
          example: "Rapid urbanisation inevitably leads to overcrowding, creating a situation in which housing affordability becomes a critical issue.",
          tip: "Shows a chain reaction. Good for complex arguments.",
          tipCN: "展示连锁反应。适合复杂论证。"
        },
        {
          id: "bp29",
          subcategory: "body-cause-effect",
          pattern: "The primary reason for [EFFECT] can be attributed to [CAUSE], as [EXPLANATION].",
          function: "Root cause analysis",
          functionCN: "根本原因分析",
          example: "The primary reason for rising obesity rates can be attributed to sedentary lifestyles, as modern technology has reduced the need for physical activity.",
          tip: "Good when identifying the main cause of a problem.",
          tipCN: "适合识别问题的主要原因。"
        },
        {
          id: "bp30",
          subcategory: "body-cause-effect",
          pattern: "When [CONDITION], the inevitable consequence is [EFFECT], which can have lasting implications for [AREA].",
          function: "Conditional cause-effect",
          functionCN: "条件性因果",
          example: "When governments fail to invest in education, the inevitable consequence is a less skilled workforce, which can have lasting implications for national competitiveness.",
          tip: "Use a when-clause to set up the cause.",
          tipCN: "使用when从句来设定原因。"
        },
        {
          id: "bp31",
          subcategory: "body-cause-effect",
          pattern: "This has far-reaching consequences, not least because [REASON], which in turn [FURTHER EFFECT].",
          function: "Ripple effect",
          functionCN: "涟漪效应",
          example: "This has far-reaching consequences, not least because unemployment reduces consumer spending, which in turn slows economic growth.",
          tip: "Shows how one effect triggers another. Very academic.",
          tipCN: "展示一个效果如何引发另一个。非常学术。"
        },
        {
          id: "bp32",
          subcategory: "body-cause-effect",
          pattern: "It follows logically that [EFFECT] is a direct consequence of [CAUSE], given that [SUPPORTING DETAIL].",
          function: "Logical deduction",
          functionCN: "逻辑推导",
          example: "It follows logically that poor air quality is a direct consequence of industrial emissions, given that factories release vast quantities of pollutants into the atmosphere.",
          tip: "Makes your reasoning explicit. Shows logical thinking.",
          tipCN: "使你的推理明确。展示逻辑思维。"
        },
        {
          id: "bp33",
          subcategory: "body-cause-effect",
          pattern: "One of the most significant effects of [CAUSE] is [EFFECT], which has prompted [RESPONSE].",
          function: "Significant effect + response",
          functionCN: "重大影响与回应",
          example: "One of the most significant effects of climate change is rising sea levels, which has prompted several island nations to develop evacuation plans.",
          tip: "Links cause, effect, and a real-world response.",
          tipCN: "连接原因、效果和现实世界的回应。"
        },
        {
          id: "bp34",
          subcategory: "body-cause-effect",
          pattern: "The correlation between [FACTOR A] and [FACTOR B] suggests that [CAUSAL RELATIONSHIP], thereby highlighting the importance of [ACTION].",
          function: "Correlation to causation argument",
          functionCN: "从相关到因果的论证",
          example: "The correlation between education levels and income suggests that investing in human capital leads to greater economic prosperity, thereby highlighting the importance of accessible higher education.",
          tip: "Use 'suggests' rather than 'proves' for academic caution.",
          tipCN: "使用'suggests'而不是'proves'以保持学术谨慎。"
        },

        // --- Comparison / Contrast (比较对比) — 6 patterns ---
        {
          id: "bp35",
          subcategory: "body-comparison",
          pattern: "In contrast to [SITUATION A], [SITUATION B] demonstrates that [POINT], highlighting the importance of [FACTOR].",
          function: "Direct contrast",
          functionCN: "直接对比",
          example: "In contrast to the United States healthcare model, the Australian Medicare system demonstrates that universal coverage is achievable, highlighting the importance of government funding.",
          tip: "Comparing two countries or systems is very effective.",
          tipCN: "比较两个国家或系统非常有效。"
        },
        {
          id: "bp36",
          subcategory: "body-comparison",
          pattern: "While [SITUATION A] has resulted in [OUTCOME A], [SITUATION B] has achieved [OUTCOME B], suggesting that [LESSON].",
          function: "Parallel comparison",
          functionCN: "平行比较",
          example: "While strict lockdown measures resulted in economic downturn, countries that adopted targeted restrictions achieved a better balance between health and economic outcomes, suggesting that flexibility is key.",
          tip: "Shows two different approaches and draws a conclusion.",
          tipCN: "展示两种不同方法并得出结论。"
        },
        {
          id: "bp37",
          subcategory: "body-comparison",
          pattern: "Compared with [ALTERNATIVE], [TOPIC/ACTION] proves to be more [ADJECTIVE] in terms of [CRITERIA].",
          function: "Superiority comparison",
          functionCN: "优越性比较",
          example: "Compared with traditional classroom instruction, blended learning proves to be more effective in terms of student engagement and personalised learning.",
          tip: "Good when you want to argue one option is better.",
          tipCN: "当你想论证一个选项更好时使用。"
        },
        {
          id: "bp38",
          subcategory: "body-comparison",
          pattern: "Unlike [SITUATION A], which [CHARACTERISTIC A], [SITUATION B] offers [CHARACTERISTIC B], making it a more viable option for [PURPOSE].",
          function: "Distinguishing contrast",
          functionCN: "区分性对比",
          example: "Unlike fossil fuels, which contribute to greenhouse gas emissions, solar energy offers a clean and sustainable alternative, making it a more viable option for long-term energy security.",
          tip: "Clearly separates two things and picks a side.",
          tipCN: "清楚地分开两个事物并选择一方。"
        },
        {
          id: "bp39",
          subcategory: "body-comparison",
          pattern: "On one hand, [VIEWPOINT A]; on the other hand, [VIEWPOINT B]. This contrast reveals that [INSIGHT].",
          function: "Two-handed comparison",
          functionCN: "两面比较",
          example: "On one hand, economic growth is vital for national development; on the other hand, unchecked growth can devastate the natural environment. This contrast reveals that sustainable development policies are essential.",
          tip: "Classic balanced structure. Use for discussion essays.",
          tipCN: "经典平衡结构。用于讨论型文章。"
        },
        {
          id: "bp40",
          subcategory: "body-comparison",
          pattern: "The disparity between [A] and [B] is striking, with [A] experiencing [OUTCOME A] while [B] enjoys [OUTCOME B].",
          function: "Inequality/disparity comparison",
          functionCN: "差异/不平等比较",
          example: "The disparity between developed and developing nations is striking, with the former experiencing technological abundance while the latter struggles with basic infrastructure.",
          tip: "Effective for topics about inequality or global issues.",
          tipCN: "适合关于不平等或全球问题的话题。"
        },

        // --- Concession (让步) — 5 patterns ---
        {
          id: "bp41",
          subcategory: "body-concession",
          pattern: "Admittedly, [OPPOSING POINT] is a valid concern; however, it does not outweigh the benefits of [YOUR POSITION].",
          function: "Admit then override",
          functionCN: "承认后推翻",
          example: "Admittedly, the cost of renewable energy infrastructure is a valid concern; however, it does not outweigh the long-term benefits of reducing carbon emissions.",
          tip: "Shows you are fair-minded. Then you redirect to your view.",
          tipCN: "表明你是公正的。然后你重新导向你的观点。"
        },
        {
          id: "bp42",
          subcategory: "body-concession",
          pattern: "While it is true that [OPPOSING POINT], this argument fails to account for the fact that [YOUR COUNTER].",
          function: "Acknowledge then counter",
          functionCN: "承认后反击",
          example: "While it is true that online learning lacks face-to-face interaction, this argument fails to account for the fact that video conferencing and collaborative tools have significantly bridged this gap.",
          tip: "Acknowledges the other side while weakening it.",
          tipCN: "承认另一方的同时削弱它。"
        },
        {
          id: "bp43",
          subcategory: "body-concession",
          pattern: "It would be naive to deny that [OPPOSING POINT]; nevertheless, the overall evidence strongly favours [YOUR POSITION].",
          function: "Honest concession with redirect",
          functionCN: "诚实让步并重定向",
          example: "It would be naive to deny that technology has some negative effects on children; nevertheless, the overall evidence strongly favours integrating technology into education.",
          tip: "Very strong concession. Shows intellectual honesty.",
          tipCN: "非常有力的让步。展示智识诚实。"
        },
        {
          id: "bp44",
          subcategory: "body-concession",
          pattern: "Granted, [OPPOSING POINT] has some merit; however, when examined more closely, [YOUR ARGUMENT] proves far more compelling.",
          function: "Grant then elevate",
          functionCN: "先赋予再提升",
          example: "Granted, preserving cultural traditions has some merit; however, when examined more closely, the argument for adapting traditions to modern contexts proves far more compelling.",
          tip: "Use 'granted' as a formal way to make a concession.",
          tipCN: "使用'granted'作为正式让步的方式。"
        },
        {
          id: "bp45",
          subcategory: "body-concession",
          pattern: "Although [OPPOSING POINT] cannot be entirely dismissed, it is important to recognise that [YOUR ARGUMENT] carries significantly greater weight.",
          function: "Partial dismissal",
          functionCN: "部分驳回",
          example: "Although the argument for censorship in the name of public safety cannot be entirely dismissed, it is important to recognise that freedom of expression carries significantly greater weight in a democratic society.",
          tip: "Balanced and diplomatic. Good for sensitive topics.",
          tipCN: "平衡且委婉。适合敏感话题。"
        },

        // --- Counter-argument (反驳) — 5 patterns ---
        {
          id: "bp46",
          subcategory: "body-counter",
          pattern: "Critics of [TOPIC/ACTION] often argue that [OPPOSING CLAIM]; however, this view overlooks the crucial fact that [YOUR COUNTER].",
          function: "Refute critics",
          functionCN: "反驳批评者",
          example: "Critics of immigration often argue that it places strain on public services; however, this view overlooks the crucial fact that immigrants contribute significantly to the economy through taxation and labour.",
          tip: "Name the opposition, then dismantle their argument.",
          tipCN: "点名反对者，然后拆解他们的论点。"
        },
        {
          id: "bp47",
          subcategory: "body-counter",
          pattern: "The argument that [OPPOSING CLAIM] is fundamentally flawed because it fails to consider [OVERLOOKED FACTOR].",
          function: "Expose logical flaw",
          functionCN: "揭露逻辑缺陷",
          example: "The argument that banning cars from city centres would harm businesses is fundamentally flawed because it fails to consider the increased foot traffic that pedestrian zones generate.",
          tip: "Use when you can identify a gap in the other side's logic.",
          tipCN: "当你能识别出对方逻辑中的漏洞时使用。"
        },
        {
          id: "bp48",
          subcategory: "body-counter",
          pattern: "Those who claim that [OPPOSING POSITION] tend to ignore the substantial body of evidence demonstrating that [YOUR POSITION].",
          function: "Evidence-based counter",
          functionCN: "基于证据的反驳",
          example: "Those who claim that climate change is exaggerated tend to ignore the substantial body of evidence demonstrating that global temperatures are rising at an unprecedented rate.",
          tip: "Implies the opposition is ignoring facts.",
          tipCN: "暗示反对者在忽视事实。"
        },
        {
          id: "bp49",
          subcategory: "body-counter",
          pattern: "Contrary to the popular belief that [OPPOSING CLAIM], evidence suggests that [REALITY], indicating that [CONCLUSION].",
          function: "Challenge popular misconception",
          functionCN: "挑战流行误解",
          example: "Contrary to the popular belief that money is the primary motivator in the workplace, evidence suggests that job satisfaction and meaningful work are equally important, indicating that companies should focus on employee wellbeing.",
          tip: "Good for correcting a common misconception.",
          tipCN: "适合纠正一个常见误解。"
        },
        {
          id: "bp50",
          subcategory: "body-counter",
          pattern: "While some may contend that [OPPOSING CLAIM], a more nuanced analysis reveals that [YOUR ARGUMENT], thereby undermining the original assertion.",
          function: "Nuanced rebuttal",
          functionCN: "细致的反驳",
          example: "While some may contend that automation will lead to mass unemployment, a more nuanced analysis reveals that it creates new industries and job categories, thereby undermining the original assertion.",
          tip: "Shows you can think beyond surface-level arguments.",
          tipCN: "展示你能超越表面论证进行思考。"
        }
      ]
    },

    // ========================================================================
    // 3. CONCLUSION PATTERNS (结尾段模板) — 20 patterns
    // ========================================================================
    {
      id: "conclusion",
      title: "Conclusion Patterns",
      titleCN: "结尾段模板",
      description: "Use these to wrap up your essay strongly. Never introduce new ideas in the conclusion.",
      subcategories: [
        {
          id: "conc-summary",
          title: "Summarising",
          titleCN: "总结",
          count: 5
        },
        {
          id: "conc-balanced",
          title: "Balanced Conclusion",
          titleCN: "平衡结论",
          count: 5
        },
        {
          id: "conc-strong",
          title: "Strong Opinion Conclusion",
          titleCN: "明确立场结论",
          count: 5
        },
        {
          id: "conc-future",
          title: "Future Outlook / Recommendation",
          titleCN: "展望/建议",
          count: 5
        }
      ],
      patterns: [
        // --- Summarising (总结) — 5 patterns ---
        {
          id: "cp01",
          subcategory: "conc-summary",
          pattern: "In conclusion, the evidence presented in this essay clearly demonstrates that [MAIN ARGUMENT], making it imperative that [ACTION/STANCE].",
          function: "Evidence-based summary",
          functionCN: "基于证据的总结",
          example: "In conclusion, the evidence presented in this essay clearly demonstrates that renewable energy is essential for sustainable development, making it imperative that governments invest in green infrastructure.",
          tip: "Classic conclusion opener. Always safe to use.",
          tipCN: "经典结论开头。使用总是安全的。"
        },
        {
          id: "cp02",
          subcategory: "conc-summary",
          pattern: "To sum up, [TOPIC] is a multifaceted issue that requires [TYPE OF APPROACH], as this essay has shown through [EVIDENCE TYPES].",
          function: "Comprehensive summary",
          functionCN: "综合总结",
          example: "To sum up, climate change is a multifaceted issue that requires coordinated global action, as this essay has shown through statistical evidence and real-world examples.",
          tip: "Reminds the reader of your evidence types.",
          tipCN: "提醒读者你使用的证据类型。"
        },
        {
          id: "cp03",
          subcategory: "conc-summary",
          pattern: "In light of the arguments discussed above, it is evident that [CONCLUSION], and this should guide future [POLICY/ACTION/THINKING].",
          function: "Argument-driven summary",
          functionCN: "论证驱动的总结",
          example: "In light of the arguments discussed above, it is evident that education reform is overdue, and this should guide future policy decisions at both local and national levels.",
          tip: "Links your conclusion to practical action.",
          tipCN: "将你的结论与实际行动联系起来。"
        },
        {
          id: "cp04",
          subcategory: "conc-summary",
          pattern: "Having examined the key arguments, it is clear that [MAIN POINT], which reaffirms the position outlined in this essay.",
          function: "Reaffirmation summary",
          functionCN: "重申式总结",
          example: "Having examined the key arguments, it is clear that public health should take priority over economic considerations during a pandemic, which reaffirms the position outlined in this essay.",
          tip: "Circles back to your thesis. Very clean structure.",
          tipCN: "回到你的论点。非常干净的结构。"
        },
        {
          id: "cp05",
          subcategory: "conc-summary",
          pattern: "Ultimately, the discussion in this essay has highlighted the importance of [TOPIC/ACTION], and the evidence overwhelmingly supports [YOUR CONCLUSION].",
          function: "Emphatic summary",
          functionCN: "强调性总结",
          example: "Ultimately, the discussion in this essay has highlighted the importance of mental health awareness, and the evidence overwhelmingly supports the integration of psychological services into schools.",
          tip: "Use 'ultimately' for a strong finishing tone.",
          tipCN: "使用'ultimately'以获得强有力的结束语气。"
        },

        // --- Balanced Conclusion (平衡结论) — 5 patterns ---
        {
          id: "cp06",
          subcategory: "conc-balanced",
          pattern: "In conclusion, while both sides of the [TOPIC] debate present valid points, the most prudent approach would be to [BALANCED ACTION].",
          function: "Balanced pragmatic conclusion",
          functionCN: "平衡务实结论",
          example: "In conclusion, while both sides of the technology in education debate present valid points, the most prudent approach would be to integrate technology thoughtfully while preserving traditional teaching methods.",
          tip: "Perfect for discussion-type essays.",
          tipCN: "非常适合讨论型文章。"
        },
        {
          id: "cp07",
          subcategory: "conc-balanced",
          pattern: "To conclude, [TOPIC] is not a black-and-white issue, and the most effective solution lies in finding a middle ground between [POSITION A] and [POSITION B].",
          function: "Middle ground conclusion",
          functionCN: "中间立场结论",
          example: "To conclude, globalisation is not a black-and-white issue, and the most effective solution lies in finding a middle ground between embracing free trade and protecting local industries.",
          tip: "Shows maturity and nuance.",
          tipCN: "展示成熟和细腻。"
        },
        {
          id: "cp08",
          subcategory: "conc-balanced",
          pattern: "All things considered, the optimal response to [TOPIC] requires a combination of [APPROACH A] and [APPROACH B], rather than an exclusive reliance on either.",
          function: "Combined approach conclusion",
          functionCN: "结合方法的结论",
          example: "All things considered, the optimal response to urban traffic congestion requires a combination of improved public transport and urban planning reform, rather than an exclusive reliance on either.",
          tip: "Advocates for a blended solution.",
          tipCN: "主张混合解决方案。"
        },
        {
          id: "cp09",
          subcategory: "conc-balanced",
          pattern: "In summary, although [TOPIC] presents both advantages and disadvantages, the key to success lies in [MANAGING/BALANCING] these competing interests.",
          function: "Balance management conclusion",
          functionCN: "平衡管理结论",
          example: "In summary, although international tourism presents both advantages and disadvantages, the key to success lies in managing these competing interests through sustainable tourism practices.",
          tip: "Acknowledges complexity while offering direction.",
          tipCN: "承认复杂性同时提供方向。"
        },
        {
          id: "cp10",
          subcategory: "conc-balanced",
          pattern: "Ultimately, the truth about [TOPIC] lies somewhere between [EXTREME A] and [EXTREME B], and a measured approach is essential for achieving the best outcomes.",
          function: "Moderate position conclusion",
          functionCN: "温和立场结论",
          example: "Ultimately, the truth about government surveillance lies somewhere between total privacy and unrestricted monitoring, and a measured approach is essential for achieving the best outcomes.",
          tip: "Rejects extremes. Sounds reasonable and balanced.",
          tipCN: "拒绝极端。听起来合理且平衡。"
        },

        // --- Strong Opinion Conclusion (明确立场结论) — 5 patterns ---
        {
          id: "cp11",
          subcategory: "conc-strong",
          pattern: "In conclusion, it is unequivocally clear that [YOUR POSITION], and any argument to the contrary fails to withstand rigorous scrutiny.",
          function: "Definitive strong conclusion",
          functionCN: "明确的强力结论",
          example: "In conclusion, it is unequivocally clear that universal healthcare is a fundamental right, and any argument to the contrary fails to withstand rigorous scrutiny.",
          tip: "Very strong. Use only when you have supported your view well.",
          tipCN: "非常强硬。只在你充分支持了观点时使用。"
        },
        {
          id: "cp12",
          subcategory: "conc-strong",
          pattern: "To conclude, the arguments presented in this essay leave little doubt that [YOUR POSITION] is the most logical and evidence-based stance on this issue.",
          function: "Logic-based strong conclusion",
          functionCN: "基于逻辑的强力结论",
          example: "To conclude, the arguments presented in this essay leave little doubt that banning single-use plastics is the most logical and evidence-based stance on this issue.",
          tip: "Positions your argument as the most rational.",
          tipCN: "将你的论点定位为最理性的。"
        },
        {
          id: "cp13",
          subcategory: "conc-strong",
          pattern: "In the final analysis, [YOUR POSITION] is not merely desirable but essential, and failure to act would have [SEVERE CONSEQUENCES].",
          function: "Urgency-driven conclusion",
          functionCN: "紧迫性结论",
          example: "In the final analysis, transitioning to renewable energy is not merely desirable but essential, and failure to act would have catastrophic environmental consequences.",
          tip: "Creates urgency. Good for environmental or health topics.",
          tipCN: "创造紧迫感。适合环境或健康话题。"
        },
        {
          id: "cp14",
          subcategory: "conc-strong",
          pattern: "For all the reasons outlined above, I maintain that [YOUR POSITION], and I am confident that future developments will further validate this perspective.",
          function: "Confident forward-looking conclusion",
          functionCN: "自信的前瞻性结论",
          example: "For all the reasons outlined above, I maintain that artificial intelligence will ultimately benefit humanity, and I am confident that future developments will further validate this perspective.",
          tip: "Shows confidence without arrogance.",
          tipCN: "展示自信而不傲慢。"
        },
        {
          id: "cp15",
          subcategory: "conc-strong",
          pattern: "In conclusion, the weight of evidence firmly supports [YOUR POSITION], and it is incumbent upon [STAKEHOLDERS] to take decisive action.",
          function: "Call to action conclusion",
          functionCN: "呼吁行动结论",
          example: "In conclusion, the weight of evidence firmly supports the need for stricter gun control, and it is incumbent upon lawmakers to take decisive action.",
          tip: "Ends with a call to action. Strong finish.",
          tipCN: "以呼吁行动结束。强有力的收尾。"
        },

        // --- Future Outlook / Recommendation (展望/建议) — 5 patterns ---
        {
          id: "cp16",
          subcategory: "conc-future",
          pattern: "Looking ahead, it is crucial that [STAKEHOLDERS] prioritise [ACTION] in order to ensure [POSITIVE OUTCOME] for future generations.",
          function: "Future-focused recommendation",
          functionCN: "面向未来的建议",
          example: "Looking ahead, it is crucial that governments prioritise investment in education in order to ensure economic prosperity for future generations.",
          tip: "Ends on a hopeful, forward-looking note.",
          tipCN: "以充满希望的、前瞻性的基调结束。"
        },
        {
          id: "cp17",
          subcategory: "conc-future",
          pattern: "Moving forward, a collaborative effort between [STAKEHOLDER A] and [STAKEHOLDER B] will be essential to address the challenges posed by [TOPIC].",
          function: "Collaboration recommendation",
          functionCN: "合作建议",
          example: "Moving forward, a collaborative effort between governments and the private sector will be essential to address the challenges posed by cybersecurity threats.",
          tip: "Emphasises teamwork and cooperation.",
          tipCN: "强调团队合作和协作。"
        },
        {
          id: "cp18",
          subcategory: "conc-future",
          pattern: "If [CONDITION], society stands to benefit enormously from [POSITIVE OUTCOME]; conversely, inaction could lead to [NEGATIVE CONSEQUENCE].",
          function: "Conditional future outlook",
          functionCN: "条件性未来展望",
          example: "If nations commit to reducing carbon emissions, society stands to benefit enormously from cleaner air and a stable climate; conversely, inaction could lead to irreversible environmental damage.",
          tip: "Presents both possible futures — motivating and persuasive.",
          tipCN: "呈现两种可能的未来——具有激励性和说服力。"
        },
        {
          id: "cp19",
          subcategory: "conc-future",
          pattern: "It is recommended that [STAKEHOLDERS] adopt [SPECIFIC MEASURES] to mitigate the challenges associated with [TOPIC] and harness its potential benefits.",
          function: "Specific policy recommendation",
          functionCN: "具体政策建议",
          example: "It is recommended that educational institutions adopt blended learning models to mitigate the challenges associated with digital inequality and harness the potential benefits of technology.",
          tip: "Gives a concrete recommendation. Shows practical thinking.",
          tipCN: "给出具体建议。展示务实思维。"
        },
        {
          id: "cp20",
          subcategory: "conc-future",
          pattern: "Only through sustained effort and thoughtful policy can [STAKEHOLDERS] hope to achieve [GOAL], and the time to begin is now.",
          function: "Urgency + hope conclusion",
          functionCN: "紧迫感与希望结论",
          example: "Only through sustained effort and thoughtful policy can governments hope to achieve genuine equality, and the time to begin is now.",
          tip: "Powerful ending. Combines urgency with optimism.",
          tipCN: "有力的结尾。将紧迫感与乐观主义结合。"
        }
      ]
    },

    // ========================================================================
    // 4. TRANSITION PHRASES (过渡衔接) — 40 patterns
    // ========================================================================
    {
      id: "transition",
      title: "Transition Phrases",
      titleCN: "过渡衔接",
      description: "Use these between sentences or paragraphs to create smooth, logical flow.",
      subcategories: [
        {
          id: "trans-addition",
          title: "Addition",
          titleCN: "递进",
          count: 8
        },
        {
          id: "trans-contrast",
          title: "Contrast",
          titleCN: "转折",
          count: 8
        },
        {
          id: "trans-cause",
          title: "Cause / Result",
          titleCN: "因果",
          count: 8
        },
        {
          id: "trans-example",
          title: "Example",
          titleCN: "举例",
          count: 6
        },
        {
          id: "trans-emphasis",
          title: "Emphasis",
          titleCN: "强调",
          count: 5
        },
        {
          id: "trans-sequence",
          title: "Sequence",
          titleCN: "顺序",
          count: 5
        }
      ],
      patterns: [
        // --- Addition (递进) — 8 patterns ---
        {
          id: "tp01",
          subcategory: "trans-addition",
          pattern: "Furthermore, [NEXT POINT].",
          function: "Add supporting point",
          functionCN: "添加支持性观点",
          example: "Furthermore, regular exercise has been shown to improve mental health outcomes.",
          tip: "Formal addition. Use between sentences within a paragraph.",
          tipCN: "正式递进。在段落内的句子之间使用。"
        },
        {
          id: "tp02",
          subcategory: "trans-addition",
          pattern: "In addition to [PREVIOUS POINT], [NEW POINT].",
          function: "Build on previous point",
          functionCN: "在前一个观点上构建",
          example: "In addition to reducing emissions, renewable energy also creates thousands of new jobs.",
          tip: "Links directly to something you just said.",
          tipCN: "直接与你刚才说的内容联系。"
        },
        {
          id: "tp03",
          subcategory: "trans-addition",
          pattern: "Moreover, it should be noted that [ADDITIONAL POINT].",
          function: "Introduce additional important point",
          functionCN: "引入额外重要观点",
          example: "Moreover, it should be noted that bilingual individuals often demonstrate superior cognitive flexibility.",
          tip: "Slightly more emphatic than 'furthermore'.",
          tipCN: "比'furthermore'稍微更有强调性。"
        },
        {
          id: "tp04",
          subcategory: "trans-addition",
          pattern: "Not only does [POINT A], but it also [POINT B].",
          function: "Dual benefit emphasis",
          functionCN: "双重利益强调",
          example: "Not only does public transport reduce congestion, but it also lowers the carbon footprint of urban areas.",
          tip: "Highlights two benefits at once. Very efficient.",
          tipCN: "同时突出两个好处。非常高效。"
        },
        {
          id: "tp05",
          subcategory: "trans-addition",
          pattern: "Equally important is the fact that [ADDITIONAL POINT].",
          function: "Signal equal weight",
          functionCN: "表示同等重要",
          example: "Equally important is the fact that emotional intelligence contributes to workplace success just as much as technical skill.",
          tip: "Tells the reader this point is as important as the last.",
          tipCN: "告诉读者这个观点与上一个同样重要。"
        },
        {
          id: "tp06",
          subcategory: "trans-addition",
          pattern: "What is more, [STRONGER POINT].",
          function: "Escalate argument",
          functionCN: "升级论证",
          example: "What is more, the long-term economic savings from preventive healthcare far exceed the initial investment.",
          tip: "Signals the next point is even stronger.",
          tipCN: "表示下一个观点甚至更有力。"
        },
        {
          id: "tp07",
          subcategory: "trans-addition",
          pattern: "Added to this is the consideration that [POINT].",
          function: "Append further consideration",
          functionCN: "附加进一步考虑",
          example: "Added to this is the consideration that cultural diversity enriches workplace creativity.",
          tip: "Slightly unusual phrasing that adds variety.",
          tipCN: "稍微不寻常的措辞，增加多样性。"
        },
        {
          id: "tp08",
          subcategory: "trans-addition",
          pattern: "On top of that, [ADDITIONAL POINT].",
          function: "Casual but effective addition",
          functionCN: "非正式但有效的递进",
          example: "On top of that, students who participate in extracurricular activities tend to develop stronger leadership skills.",
          tip: "Slightly less formal. Good for variety.",
          tipCN: "稍微不那么正式。适合增加多样性。"
        },

        // --- Contrast (转折) — 8 patterns ---
        {
          id: "tp09",
          subcategory: "trans-contrast",
          pattern: "However, [CONTRASTING POINT].",
          function: "Simple contrast",
          functionCN: "简单转折",
          example: "However, not all experts agree that this approach is the most effective.",
          tip: "Most common contrast word. Always correct.",
          tipCN: "最常用的转折词。使用总是正确的。"
        },
        {
          id: "tp10",
          subcategory: "trans-contrast",
          pattern: "Nevertheless, [POINT THAT PERSISTS DESPITE OPPOSITION].",
          function: "Persist despite opposition",
          functionCN: "尽管反对仍坚持",
          example: "Nevertheless, the benefits of vaccination have been conclusively demonstrated by decades of scientific research.",
          tip: "Stronger than 'however'. Means 'despite everything'.",
          tipCN: "比'however'更强。意思是'尽管如此'。"
        },
        {
          id: "tp11",
          subcategory: "trans-contrast",
          pattern: "Conversely, [OPPOSITE VIEWPOINT/SITUATION].",
          function: "Introduce direct opposite",
          functionCN: "引入直接相反观点",
          example: "Conversely, opponents argue that government intervention stifles innovation and economic freedom.",
          tip: "Use when presenting the completely opposite view.",
          tipCN: "当呈现完全相反的观点时使用。"
        },
        {
          id: "tp12",
          subcategory: "trans-contrast",
          pattern: "On the contrary, [CORRECTING POINT].",
          function: "Correct a previous assumption",
          functionCN: "纠正之前的假设",
          example: "On the contrary, studies show that moderate coffee consumption may actually have health benefits.",
          tip: "Use to directly contradict something just mentioned.",
          tipCN: "用于直接反驳刚才提到的内容。"
        },
        {
          id: "tp13",
          subcategory: "trans-contrast",
          pattern: "Despite this, [CONTRASTING REALITY].",
          function: "Contrast with preceding reality",
          functionCN: "与之前的现实形成对比",
          example: "Despite this, many developing nations continue to rely heavily on fossil fuels for economic growth.",
          tip: "Acknowledges a fact then shows reality differs.",
          tipCN: "承认一个事实然后展示现实不同。"
        },
        {
          id: "tp14",
          subcategory: "trans-contrast",
          pattern: "Notwithstanding [ACKNOWLEDGED FACT], [CONTRASTING POINT].",
          function: "Formal 'despite' construction",
          functionCN: "正式的'尽管'结构",
          example: "Notwithstanding the significant progress in gender equality, a considerable wage gap persists in many industries.",
          tip: "Very formal. Impressive in academic writing.",
          tipCN: "非常正式。在学术写作中令人印象深刻。"
        },
        {
          id: "tp15",
          subcategory: "trans-contrast",
          pattern: "In stark contrast to [SITUATION A], [SITUATION B].",
          function: "Dramatic contrast",
          functionCN: "戏剧性对比",
          example: "In stark contrast to the rapid economic growth in East Asia, many African nations continue to face chronic poverty.",
          tip: "Use for big, obvious differences.",
          tipCN: "用于明显的、巨大的差异。"
        },
        {
          id: "tp16",
          subcategory: "trans-contrast",
          pattern: "That said, [QUALIFYING POINT].",
          function: "Moderate qualification",
          functionCN: "适度的限定",
          example: "That said, there are legitimate concerns about the long-term environmental impact of lithium mining for battery production.",
          tip: "Informal but widely accepted. Good for balance.",
          tipCN: "非正式但广泛接受。适合平衡。"
        },

        // --- Cause / Result (因果) — 8 patterns ---
        {
          id: "tp17",
          subcategory: "trans-cause",
          pattern: "As a result, [CONSEQUENCE].",
          function: "State consequence",
          functionCN: "陈述后果",
          example: "As a result, many young people now struggle to afford housing in major cities.",
          tip: "Simple and clear cause-effect connector.",
          tipCN: "简单清晰的因果连接词。"
        },
        {
          id: "tp18",
          subcategory: "trans-cause",
          pattern: "Consequently, [OUTCOME].",
          function: "Formal consequence",
          functionCN: "正式的后果",
          example: "Consequently, governments have introduced stricter regulations on carbon emissions.",
          tip: "More formal than 'as a result'. Same meaning.",
          tipCN: "比'as a result'更正式。意思相同。"
        },
        {
          id: "tp19",
          subcategory: "trans-cause",
          pattern: "This has led to [OUTCOME], which in turn has [FURTHER EFFECT].",
          function: "Chain of effects",
          functionCN: "连锁效应",
          example: "This has led to increased automation, which in turn has reshaped the global labour market.",
          tip: "Shows a chain reaction of consequences.",
          tipCN: "展示后果的连锁反应。"
        },
        {
          id: "tp20",
          subcategory: "trans-cause",
          pattern: "For this reason, [ACTION/CONCLUSION].",
          function: "Reason-based connector",
          functionCN: "基于原因的连接",
          example: "For this reason, many experts advocate for a more balanced approach to work and leisure.",
          tip: "Links back to the reason you just explained.",
          tipCN: "回到你刚刚解释的原因。"
        },
        {
          id: "tp21",
          subcategory: "trans-cause",
          pattern: "Owing to [CAUSE], [EFFECT].",
          function: "Formal cause attribution",
          functionCN: "正式原因归因",
          example: "Owing to advances in medical technology, life expectancy has increased significantly over the past century.",
          tip: "Very formal. Same as 'because of'.",
          tipCN: "非常正式。等同于'because of'。"
        },
        {
          id: "tp22",
          subcategory: "trans-cause",
          pattern: "Hence, it can be argued that [CONCLUSION].",
          function: "Logical conclusion connector",
          functionCN: "逻辑结论连接",
          example: "Hence, it can be argued that early intervention programmes are the most cost-effective solution to youth crime.",
          tip: "Shows logical reasoning. Use after presenting evidence.",
          tipCN: "展示逻辑推理。在呈现证据后使用。"
        },
        {
          id: "tp23",
          subcategory: "trans-cause",
          pattern: "The inevitable outcome of [CAUSE] is [EFFECT].",
          function: "Inevitable consequence",
          functionCN: "不可避免的后果",
          example: "The inevitable outcome of neglecting infrastructure investment is a decline in public safety and economic productivity.",
          tip: "Strong. Use when the consequence is clearly unavoidable.",
          tipCN: "强硬。当后果明显不可避免时使用。"
        },
        {
          id: "tp24",
          subcategory: "trans-cause",
          pattern: "It is precisely because [REASON] that [RESULT/ACTION] is necessary.",
          function: "Emphatic reason-result",
          functionCN: "强调性原因-结果",
          example: "It is precisely because mental health affects all aspects of life that schools should integrate wellbeing programmes.",
          tip: "Emphatic construction. Highlights the exact reason.",
          tipCN: "强调性结构。突出确切的原因。"
        },

        // --- Example (举例) — 6 patterns ---
        {
          id: "tp25",
          subcategory: "trans-example",
          pattern: "For example, [SPECIFIC INSTANCE].",
          function: "Simple example introduction",
          functionCN: "简单举例引入",
          example: "For example, countries like Denmark and Sweden have successfully implemented universal childcare programmes.",
          tip: "Most common way to introduce an example.",
          tipCN: "最常见的引入例子的方式。"
        },
        {
          id: "tp26",
          subcategory: "trans-example",
          pattern: "This is particularly evident in [CONTEXT], where [DETAIL].",
          function: "Context-specific example",
          functionCN: "特定情境举例",
          example: "This is particularly evident in urban areas, where traffic congestion has become a major source of air pollution.",
          tip: "Points to a specific place or situation as proof.",
          tipCN: "指向一个特定的地方或情况作为证据。"
        },
        {
          id: "tp27",
          subcategory: "trans-example",
          pattern: "To cite a specific instance, [EXAMPLE].",
          function: "Formal example citation",
          functionCN: "正式举例引用",
          example: "To cite a specific instance, the introduction of a congestion charge in London led to a measurable reduction in city-centre traffic.",
          tip: "More formal than 'for example'. Good for variety.",
          tipCN: "比'for example'更正式。适合增加多样性。"
        },
        {
          id: "tp28",
          subcategory: "trans-example",
          pattern: "As demonstrated by [EXAMPLE], [LESSON/POINT].",
          function: "Example-first construction",
          functionCN: "例子先行结构",
          example: "As demonstrated by the success of microfinance in Bangladesh, small-scale lending can empower communities to break the cycle of poverty.",
          tip: "Puts the example first, then draws the lesson.",
          tipCN: "先给例子，然后得出教训。"
        },
        {
          id: "tp29",
          subcategory: "trans-example",
          pattern: "A relevant illustration of this is [EXAMPLE].",
          function: "Illustration reference",
          functionCN: "相关说明",
          example: "A relevant illustration of this is the rapid adoption of telehealth services during the recent pandemic.",
          tip: "Introduces the example as an illustration of your point.",
          tipCN: "将例子作为你观点的说明引入。"
        },
        {
          id: "tp30",
          subcategory: "trans-example",
          pattern: "Such is the case with [EXAMPLE], in which [DETAIL].",
          function: "Formal case reference",
          functionCN: "正式案例参考",
          example: "Such is the case with Germany's apprenticeship system, in which young people gain practical skills alongside academic qualifications.",
          tip: "Academic and formal. Good for showing a specific case.",
          tipCN: "学术和正式。适合展示一个特定案例。"
        },

        // --- Emphasis (强调) — 5 patterns ---
        {
          id: "tp31",
          subcategory: "trans-emphasis",
          pattern: "Indeed, [EMPHATIC POINT].",
          function: "Confirm and emphasise",
          functionCN: "确认并强调",
          example: "Indeed, the evidence for climate change is now virtually irrefutable.",
          tip: "Simple but effective emphasis marker.",
          tipCN: "简单但有效的强调标记。"
        },
        {
          id: "tp32",
          subcategory: "trans-emphasis",
          pattern: "It is worth emphasising that [KEY POINT].",
          function: "Draw attention to key point",
          functionCN: "引起对关键点的注意",
          example: "It is worth emphasising that education is not only a personal benefit but also a public good.",
          tip: "Explicitly tells the reader this point is important.",
          tipCN: "明确告诉读者这个观点很重要。"
        },
        {
          id: "tp33",
          subcategory: "trans-emphasis",
          pattern: "Above all, [MOST IMPORTANT POINT].",
          function: "Highlight supreme importance",
          functionCN: "突出最高重要性",
          example: "Above all, the safety and wellbeing of children must remain the top priority in any educational reform.",
          tip: "Use for your single most important point.",
          tipCN: "用于你最重要的一个观点。"
        },
        {
          id: "tp34",
          subcategory: "trans-emphasis",
          pattern: "Most importantly, [CRITICAL POINT].",
          function: "Signal critical importance",
          functionCN: "表示至关重要",
          example: "Most importantly, access to quality healthcare should be considered a basic human right, not a privilege.",
          tip: "Clear signal that this is your key point.",
          tipCN: "清楚地表明这是你的关键点。"
        },
        {
          id: "tp35",
          subcategory: "trans-emphasis",
          pattern: "It cannot be overstated that [EMPHATIC CLAIM].",
          function: "Maximum emphasis",
          functionCN: "最大程度的强调",
          example: "It cannot be overstated that clean drinking water is essential for human survival and development.",
          tip: "Very strong emphasis. Use sparingly for maximum effect.",
          tipCN: "非常强的强调。少量使用以获得最大效果。"
        },

        // --- Sequence (顺序) — 5 patterns ---
        {
          id: "tp36",
          subcategory: "trans-sequence",
          pattern: "First and foremost, [OPENING POINT].",
          function: "Introduce first point emphatically",
          functionCN: "强调性地引入第一个观点",
          example: "First and foremost, any discussion of education reform must begin with the quality of teacher training.",
          tip: "Signals your first and most important point.",
          tipCN: "表示你的第一个也是最重要的观点。"
        },
        {
          id: "tp37",
          subcategory: "trans-sequence",
          pattern: "Following this, [NEXT POINT].",
          function: "Introduce next point in sequence",
          functionCN: "引入顺序中的下一个观点",
          example: "Following this, it is necessary to consider the role of parental involvement in student achievement.",
          tip: "Good for logical flow between paragraphs.",
          tipCN: "适合段落之间的逻辑流动。"
        },
        {
          id: "tp38",
          subcategory: "trans-sequence",
          pattern: "Subsequently, [LATER POINT].",
          function: "Indicate what comes after",
          functionCN: "指示之后的内容",
          example: "Subsequently, the government introduced a series of tax incentives to encourage business investment.",
          tip: "More formal than 'then' or 'after that'.",
          tipCN: "比'then'或'after that'更正式。"
        },
        {
          id: "tp39",
          subcategory: "trans-sequence",
          pattern: "Having established that [PREVIOUS POINT], it is now necessary to examine [NEXT POINT].",
          function: "Bridge between established and new points",
          functionCN: "已建立观点与新观点之间的桥梁",
          example: "Having established that technology enhances learning, it is now necessary to examine the potential risks of excessive screen time.",
          tip: "Links what you proved to what comes next.",
          tipCN: "将你已证明的内容与接下来的内容联系起来。"
        },
        {
          id: "tp40",
          subcategory: "trans-sequence",
          pattern: "Finally, and perhaps most critically, [CONCLUDING POINT].",
          function: "Introduce final key point",
          functionCN: "引入最后的关键点",
          example: "Finally, and perhaps most critically, the long-term sustainability of any policy depends on public support and engagement.",
          tip: "Signals your last and very important point.",
          tipCN: "表示你的最后一个且非常重要的观点。"
        }
      ]
    },

    // ========================================================================
    // 5. ACADEMIC COLLOCATIONS (学术搭配) — 50 patterns
    // ========================================================================
    {
      id: "collocation",
      title: "Academic Collocations",
      titleCN: "学术搭配",
      description: "Plug these natural-sounding collocations into your sentences to sound more academic.",
      subcategories: [
        {
          id: "coll-verb-noun",
          title: "Verb + Noun Collocations",
          titleCN: "动词+名词搭配",
          count: 15
        },
        {
          id: "coll-adj-noun",
          title: "Adjective + Noun Collocations",
          titleCN: "形容词+名词搭配",
          count: 15
        },
        {
          id: "coll-hedging",
          title: "Hedging / Cautious Language",
          titleCN: "模糊语言/谨慎表达",
          count: 10
        },
        {
          id: "coll-emphasis",
          title: "Emphasis / Strong Language",
          titleCN: "强调语言",
          count: 10
        }
      ],
      patterns: [
        // --- Verb + Noun Collocations — 15 patterns ---
        {
          id: "ac01",
          subcategory: "coll-verb-noun",
          pattern: "conduct research",
          function: "Do research (formal)",
          functionCN: "进行研究（正式）",
          example: "Scientists have conducted extensive research into the effects of microplastics on marine ecosystems.",
          tip: "Never say 'do a research' or 'make research'. Always 'conduct research'.",
          tipCN: "永远不要说'do a research'或'make research'。始终用'conduct research'。"
        },
        {
          id: "ac02",
          subcategory: "coll-verb-noun",
          pattern: "pose a threat / pose a challenge",
          function: "Present a danger or difficulty",
          functionCN: "构成威胁/挑战",
          example: "Climate change poses a significant threat to global food security.",
          tip: "Use 'pose' not 'bring' or 'give' with 'threat' or 'challenge'.",
          tipCN: "与'threat'或'challenge'搭配用'pose'，不用'bring'或'give'。"
        },
        {
          id: "ac03",
          subcategory: "coll-verb-noun",
          pattern: "draw a conclusion",
          function: "Reach a conclusion (formal)",
          functionCN: "得出结论（正式）",
          example: "Based on the available evidence, it is possible to draw the conclusion that early intervention is most effective.",
          tip: "Also correct: 'reach a conclusion', 'arrive at a conclusion'.",
          tipCN: "也可以用：'reach a conclusion', 'arrive at a conclusion'。"
        },
        {
          id: "ac04",
          subcategory: "coll-verb-noun",
          pattern: "raise awareness",
          function: "Increase public knowledge",
          functionCN: "提高意识",
          example: "Public health campaigns play a vital role in raising awareness about the dangers of smoking.",
          tip: "Not 'improve awareness' or 'increase awareness' — 'raise' is the natural collocation.",
          tipCN: "不用'improve awareness'或'increase awareness'——'raise'是自然搭配。"
        },
        {
          id: "ac05",
          subcategory: "coll-verb-noun",
          pattern: "implement measures / implement policies",
          function: "Put plans into action",
          functionCN: "实施措施/政策",
          example: "Governments must implement stringent measures to reduce plastic pollution.",
          tip: "Use 'implement' with measures, policies, strategies, reforms.",
          tipCN: "将'implement'与measures, policies, strategies, reforms搭配使用。"
        },
        {
          id: "ac06",
          subcategory: "coll-verb-noun",
          pattern: "address the issue / address the problem",
          function: "Deal with a problem (formal)",
          functionCN: "解决问题（正式）",
          example: "It is essential that world leaders address the issue of income inequality.",
          tip: "More academic than 'solve the problem'. Very common in essays.",
          tipCN: "比'solve the problem'更学术。在作文中非常常见。"
        },
        {
          id: "ac07",
          subcategory: "coll-verb-noun",
          pattern: "exert influence",
          function: "Have influence on (formal)",
          functionCN: "施加影响（正式）",
          example: "Social media platforms exert considerable influence on public opinion.",
          tip: "Not 'give influence' or 'have influence'. Use 'exert'.",
          tipCN: "不用'give influence'或'have influence'。使用'exert'。"
        },
        {
          id: "ac08",
          subcategory: "coll-verb-noun",
          pattern: "yield results / yield benefits",
          function: "Produce outcomes",
          functionCN: "产生结果/好处",
          example: "Long-term investment in education consistently yields positive results for national development.",
          tip: "More academic than 'give results'. Shows vocabulary range.",
          tipCN: "比'give results'更学术。展示词汇量。"
        },
        {
          id: "ac09",
          subcategory: "coll-verb-noun",
          pattern: "bear responsibility",
          function: "Be responsible for (formal)",
          functionCN: "承担责任（正式）",
          example: "Corporations must bear responsibility for the environmental damage caused by their operations.",
          tip: "Also: 'shoulder responsibility', 'assume responsibility'.",
          tipCN: "也可以用：'shoulder responsibility', 'assume responsibility'。"
        },
        {
          id: "ac10",
          subcategory: "coll-verb-noun",
          pattern: "take into account / take into consideration",
          function: "Consider (formal)",
          functionCN: "考虑（正式）",
          example: "Policymakers should take into account the diverse needs of local communities when designing public services.",
          tip: "More formal than 'think about'. Good for essay conclusions.",
          tipCN: "比'think about'更正式。适合论文结论。"
        },
        {
          id: "ac11",
          subcategory: "coll-verb-noun",
          pattern: "bridge the gap",
          function: "Reduce a difference",
          functionCN: "弥合差距",
          example: "Government scholarships can help bridge the gap between students from different socioeconomic backgrounds.",
          tip: "Very common in education, economics, and social topics.",
          tipCN: "在教育、经济和社会话题中非常常见。"
        },
        {
          id: "ac12",
          subcategory: "coll-verb-noun",
          pattern: "lay the foundation / lay the groundwork",
          function: "Create the basis for something",
          functionCN: "奠定基础",
          example: "Early childhood education lays the foundation for lifelong academic success.",
          tip: "Not 'build the foundation' — use 'lay'.",
          tipCN: "不用'build the foundation'——使用'lay'。"
        },
        {
          id: "ac13",
          subcategory: "coll-verb-noun",
          pattern: "allocate resources",
          function: "Distribute resources (formal)",
          functionCN: "分配资源（正式）",
          example: "Governments must allocate sufficient resources to healthcare and education.",
          tip: "Use 'allocate' with resources, funding, budget.",
          tipCN: "将'allocate'与resources, funding, budget搭配使用。"
        },
        {
          id: "ac14",
          subcategory: "coll-verb-noun",
          pattern: "fulfil obligations / fulfil responsibilities",
          function: "Meet duties (formal)",
          functionCN: "履行义务/责任（正式）",
          example: "All nations must fulfil their obligations under international environmental agreements.",
          tip: "Australian spelling: fulfil (not fulfill).",
          tipCN: "澳大利亚拼写：fulfil（不是fulfill）。"
        },
        {
          id: "ac15",
          subcategory: "coll-verb-noun",
          pattern: "undergo transformation",
          function: "Experience major change (formal)",
          functionCN: "经历转变（正式）",
          example: "The manufacturing sector has undergone a significant transformation due to automation.",
          tip: "More academic than 'change a lot'. Very essay-appropriate.",
          tipCN: "比'change a lot'更学术。非常适合论文。"
        },

        // --- Adjective + Noun Collocations — 15 patterns ---
        {
          id: "ac16",
          subcategory: "coll-adj-noun",
          pattern: "a growing concern",
          function: "An increasing worry",
          functionCN: "日益增长的担忧",
          example: "Cybersecurity has become a growing concern for both businesses and governments worldwide.",
          tip: "Use with: issue, trend, problem, body of evidence.",
          tipCN: "与issue, trend, problem, body of evidence搭配使用。"
        },
        {
          id: "ac17",
          subcategory: "coll-adj-noun",
          pattern: "a profound impact",
          function: "A deep, significant effect",
          functionCN: "深远的影响",
          example: "The internet has had a profound impact on the way people communicate and access information.",
          tip: "Stronger than 'big impact'. Also: 'profound effect', 'profound influence'.",
          tipCN: "比'big impact'更强。也可以用：'profound effect', 'profound influence'。"
        },
        {
          id: "ac18",
          subcategory: "coll-adj-noun",
          pattern: "a viable alternative",
          function: "A practical substitute",
          functionCN: "可行的替代方案",
          example: "Public transport remains a viable alternative to private car ownership in densely populated cities.",
          tip: "Use when suggesting a replacement or different approach.",
          tipCN: "当建议替代方案或不同方法时使用。"
        },
        {
          id: "ac19",
          subcategory: "coll-adj-noun",
          pattern: "a compelling argument",
          function: "A convincing case",
          functionCN: "有说服力的论证",
          example: "Proponents of universal basic income present a compelling argument based on reducing poverty.",
          tip: "Also: 'compelling evidence', 'compelling reason'.",
          tipCN: "也可以用：'compelling evidence', 'compelling reason'。"
        },
        {
          id: "ac20",
          subcategory: "coll-adj-noun",
          pattern: "an integral part",
          function: "An essential component",
          functionCN: "不可或缺的一部分",
          example: "Physical education is an integral part of a well-rounded school curriculum.",
          tip: "Not 'important part' — 'integral' is stronger and more academic.",
          tipCN: "不用'important part'——'integral'更强且更学术。"
        },
        {
          id: "ac21",
          subcategory: "coll-adj-noun",
          pattern: "a significant proportion",
          function: "A large percentage (formal)",
          functionCN: "相当大的比例（正式）",
          example: "A significant proportion of the global population still lacks access to clean drinking water.",
          tip: "More academic than 'a lot of people'. Also: 'a substantial number'.",
          tipCN: "比'a lot of people'更学术。也可以用：'a substantial number'。"
        },
        {
          id: "ac22",
          subcategory: "coll-adj-noun",
          pattern: "a pivotal role",
          function: "A crucial function",
          functionCN: "关键作用",
          example: "Education plays a pivotal role in shaping the values and capabilities of future citizens.",
          tip: "Stronger than 'important role'. Very effective.",
          tipCN: "比'important role'更强。非常有效。"
        },
        {
          id: "ac23",
          subcategory: "coll-adj-noun",
          pattern: "a contentious issue",
          function: "A controversial topic",
          functionCN: "有争议的问题",
          example: "The use of animal testing in scientific research remains a contentious issue in many countries.",
          tip: "Also: 'a contentious debate', 'a contentious topic'.",
          tipCN: "也可以用：'a contentious debate', 'a contentious topic'。"
        },
        {
          id: "ac24",
          subcategory: "coll-adj-noun",
          pattern: "far-reaching consequences",
          function: "Wide, serious effects",
          functionCN: "深远的后果",
          example: "The decision to leave the European Union had far-reaching consequences for the British economy.",
          tip: "Very strong. Also: 'far-reaching implications', 'far-reaching effects'.",
          tipCN: "非常有力。也可以用：'far-reaching implications', 'far-reaching effects'。"
        },
        {
          id: "ac25",
          subcategory: "coll-adj-noun",
          pattern: "a fundamental right",
          function: "A basic, essential right",
          functionCN: "基本权利",
          example: "Access to education is a fundamental right that should be guaranteed to every child.",
          tip: "Use for human rights, healthcare, education topics.",
          tipCN: "用于人权、医疗、教育话题。"
        },
        {
          id: "ac26",
          subcategory: "coll-adj-noun",
          pattern: "a drastic measure",
          function: "An extreme action",
          functionCN: "极端措施",
          example: "Some argue that banning all fossil fuels immediately would be a drastic measure with unintended consequences.",
          tip: "Use when describing something extreme or severe.",
          tipCN: "当描述极端或严厉的事物时使用。"
        },
        {
          id: "ac27",
          subcategory: "coll-adj-noun",
          pattern: "a pressing concern",
          function: "An urgent issue",
          functionCN: "紧迫的关注点",
          example: "Water scarcity has become a pressing concern in many arid regions of the world.",
          tip: "Shows urgency. Also: 'a pressing need', 'a pressing issue'.",
          tipCN: "表示紧迫性。也可以用：'a pressing need', 'a pressing issue'。"
        },
        {
          id: "ac28",
          subcategory: "coll-adj-noun",
          pattern: "a widespread phenomenon",
          function: "Something happening everywhere",
          functionCN: "普遍现象",
          example: "The rise of social media addiction has become a widespread phenomenon among young people.",
          tip: "Better than saying 'it happens everywhere'.",
          tipCN: "比说'it happens everywhere'更好。"
        },
        {
          id: "ac29",
          subcategory: "coll-adj-noun",
          pattern: "a vicious cycle",
          function: "A self-reinforcing negative loop",
          functionCN: "恶性循环",
          example: "Poverty and lack of education create a vicious cycle that is extremely difficult to break.",
          tip: "The opposite is 'a virtuous cycle' (positive loop).",
          tipCN: "反义词是'a virtuous cycle'（良性循环）。"
        },
        {
          id: "ac30",
          subcategory: "coll-adj-noun",
          pattern: "a paradigm shift",
          function: "A fundamental change in thinking",
          functionCN: "范式转变",
          example: "The move towards renewable energy represents a paradigm shift in how societies think about development.",
          tip: "Use for major changes in how people think or work.",
          tipCN: "用于人们思考或工作方式的重大变化。"
        },

        // --- Hedging / Cautious Language (模糊语言/谨慎表达) — 10 patterns ---
        {
          id: "ac31",
          subcategory: "coll-hedging",
          pattern: "It could be argued that [CLAIM].",
          function: "Tentative claim",
          functionCN: "试探性主张",
          example: "It could be argued that strict parenting styles produce more disciplined children.",
          tip: "Use when you are not 100% certain. Academic and cautious.",
          tipCN: "当你不是100%确定时使用。学术且谨慎。"
        },
        {
          id: "ac32",
          subcategory: "coll-hedging",
          pattern: "There is reason to believe that [CLAIM].",
          function: "Evidence-supported possibility",
          functionCN: "有证据支持的可能性",
          example: "There is reason to believe that early foreign language learning enhances cognitive development.",
          tip: "Softer than 'it is true that'. Sounds well-considered.",
          tipCN: "比'it is true that'更温和。听起来经过深思熟虑。"
        },
        {
          id: "ac33",
          subcategory: "coll-hedging",
          pattern: "[CLAIM] to a certain extent.",
          function: "Partial agreement",
          functionCN: "部分同意",
          example: "Technology has improved educational outcomes to a certain extent, though challenges remain.",
          tip: "Use to agree partially. Shows nuance.",
          tipCN: "用于部分同意。展示细微差别。"
        },
        {
          id: "ac34",
          subcategory: "coll-hedging",
          pattern: "It is generally accepted that [CLAIM], although [QUALIFICATION].",
          function: "Qualified general statement",
          functionCN: "有限定的一般性陈述",
          example: "It is generally accepted that exercise benefits mental health, although the optimal type and duration remain debated.",
          tip: "Agrees broadly then adds a qualification.",
          tipCN: "广泛同意然后添加限定。"
        },
        {
          id: "ac35",
          subcategory: "coll-hedging",
          pattern: "This suggests that [TENTATIVE CONCLUSION], rather than [STRONGER CLAIM].",
          function: "Careful conclusion",
          functionCN: "谨慎的结论",
          example: "This suggests that social media may contribute to anxiety, rather than being its sole cause.",
          tip: "Avoids overstatement. Shows careful analysis.",
          tipCN: "避免过度陈述。展示仔细的分析。"
        },
        {
          id: "ac36",
          subcategory: "coll-hedging",
          pattern: "It appears that [OBSERVATION], though further investigation is needed.",
          function: "Tentative observation",
          functionCN: "试探性观察",
          example: "It appears that remote working increases productivity, though further investigation is needed to confirm this across all industries.",
          tip: "Good for when the evidence is not conclusive.",
          tipCN: "当证据不是决定性的时候使用。"
        },
        {
          id: "ac37",
          subcategory: "coll-hedging",
          pattern: "While it would be premature to [STRONG CLAIM], there is growing evidence that [MODERATE CLAIM].",
          function: "Resist premature conclusions",
          functionCN: "抵制过早下结论",
          example: "While it would be premature to declare online learning superior to traditional methods, there is growing evidence that it offers significant flexibility benefits.",
          tip: "Shows you know the limits of the evidence.",
          tipCN: "表明你了解证据的局限性。"
        },
        {
          id: "ac38",
          subcategory: "coll-hedging",
          pattern: "[CLAIM] is likely to [OUTCOME], based on current trends.",
          function: "Probability-based prediction",
          functionCN: "基于概率的预测",
          example: "Automation is likely to displace a significant number of routine jobs, based on current trends.",
          tip: "Use 'likely' instead of 'will definitely'. More academic.",
          tipCN: "使用'likely'而不是'will definitely'。更学术。"
        },
        {
          id: "ac39",
          subcategory: "coll-hedging",
          pattern: "One possible interpretation is that [CLAIM], though alternative explanations exist.",
          function: "Open-ended interpretation",
          functionCN: "开放式解读",
          example: "One possible interpretation is that declining birth rates reflect greater career ambitions among women, though alternative explanations exist.",
          tip: "Shows intellectual humility. Very academic.",
          tipCN: "展示知识上的谦逊。非常学术。"
        },
        {
          id: "ac40",
          subcategory: "coll-hedging",
          pattern: "It seems reasonable to suggest that [MODERATE CLAIM].",
          function: "Reasonable suggestion",
          functionCN: "合理的建议",
          example: "It seems reasonable to suggest that a combination of regulation and education is needed to address cyberbullying.",
          tip: "Polite and measured. Good for conclusion paragraphs.",
          tipCN: "礼貌且有分寸。适合结论段落。"
        },

        // --- Emphasis / Strong Language (强调语言) — 10 patterns ---
        {
          id: "ac41",
          subcategory: "coll-emphasis",
          pattern: "There is no doubt that [STRONG CLAIM].",
          function: "Absolute certainty",
          functionCN: "绝对确定",
          example: "There is no doubt that education is the single most important factor in reducing poverty.",
          tip: "Use only for claims you can back up with strong evidence.",
          tipCN: "只用于你能用有力证据支持的主张。"
        },
        {
          id: "ac42",
          subcategory: "coll-emphasis",
          pattern: "It is indisputable that [STRONG CLAIM].",
          function: "Beyond question",
          functionCN: "不可否认",
          example: "It is indisputable that human activity has contributed to global warming.",
          tip: "Very strong. Implies no reasonable person would disagree.",
          tipCN: "非常强。暗示没有理性的人会不同意。"
        },
        {
          id: "ac43",
          subcategory: "coll-emphasis",
          pattern: "The evidence overwhelmingly supports the view that [CLAIM].",
          function: "Evidence-backed emphasis",
          functionCN: "证据支持的强调",
          example: "The evidence overwhelmingly supports the view that smoking causes cancer.",
          tip: "Shows you have lots of evidence. Very persuasive.",
          tipCN: "表明你有大量证据。非常有说服力。"
        },
        {
          id: "ac44",
          subcategory: "coll-emphasis",
          pattern: "Under no circumstances should [PROHIBITED ACTION] be tolerated.",
          function: "Absolute prohibition emphasis",
          functionCN: "绝对禁止的强调",
          example: "Under no circumstances should child labour be tolerated in any society.",
          tip: "Very strong moral emphasis. Use for ethical issues.",
          tipCN: "非常强的道德强调。用于伦理问题。"
        },
        {
          id: "ac45",
          subcategory: "coll-emphasis",
          pattern: "It is imperative that [URGENT ACTION].",
          function: "Urgent necessity",
          functionCN: "迫切的必要性",
          example: "It is imperative that governments take immediate action to combat antibiotic resistance.",
          tip: "Signals that the action is absolutely necessary.",
          tipCN: "表示行动是绝对必要的。"
        },
        {
          id: "ac46",
          subcategory: "coll-emphasis",
          pattern: "The significance of [TOPIC] cannot be underestimated.",
          function: "Importance emphasis",
          functionCN: "重要性强调",
          example: "The significance of early childhood nutrition cannot be underestimated.",
          tip: "A formal way to say 'this is very important'.",
          tipCN: "一种正式的方式来说'这非常重要'。"
        },
        {
          id: "ac47",
          subcategory: "coll-emphasis",
          pattern: "Without question, [STRONG CLAIM].",
          function: "Unqualified emphasis",
          functionCN: "毫无疑问的强调",
          example: "Without question, access to clean water is a prerequisite for human development.",
          tip: "Short and powerful. Use at the start of a sentence.",
          tipCN: "简短有力。在句子开头使用。"
        },
        {
          id: "ac48",
          subcategory: "coll-emphasis",
          pattern: "It would be irresponsible to [UNWISE ACTION] given that [REASON].",
          function: "Moral responsibility emphasis",
          functionCN: "道德责任强调",
          example: "It would be irresponsible to ignore the mental health crisis among young people given that the evidence is so compelling.",
          tip: "Implies moral duty. Strong for persuasive writing.",
          tipCN: "暗示道德责任。对说服性写作很有力。"
        },
        {
          id: "ac49",
          subcategory: "coll-emphasis",
          pattern: "The urgency of addressing [ISSUE] cannot be stressed enough.",
          function: "Maximum urgency emphasis",
          functionCN: "最大程度的紧迫性强调",
          example: "The urgency of addressing plastic pollution in the world's oceans cannot be stressed enough.",
          tip: "Signals extreme importance. Use sparingly.",
          tipCN: "表示极端重要性。少量使用。"
        },
        {
          id: "ac50",
          subcategory: "coll-emphasis",
          pattern: "This is, without a shadow of a doubt, [EMPHATIC STATEMENT].",
          function: "Ultimate certainty",
          functionCN: "最终确定性",
          example: "This is, without a shadow of a doubt, one of the most pressing challenges of the twenty-first century.",
          tip: "Very emphatic. Use only once per essay for maximum impact.",
          tipCN: "非常有力的强调。每篇文章只用一次以获得最大效果。"
        }
      ]
    },

    // ========================================================================
    // 6. CHINESE-SPEAKER ERROR AVOIDANCE (中式英语纠正) — 30 patterns
    // ========================================================================
    {
      id: "chinglish",
      title: "Chinese-Speaker Error Avoidance",
      titleCN: "中式英语纠正",
      description: "Common mistakes Chinese speakers make in academic English, with corrections and explanations.",
      subcategories: [
        {
          id: "ch-grammar",
          title: "Grammar Errors",
          titleCN: "语法错误",
          count: 10
        },
        {
          id: "ch-collocation",
          title: "Collocation Errors",
          titleCN: "搭配错误",
          count: 10
        },
        {
          id: "ch-structure",
          title: "Sentence Structure Errors",
          titleCN: "句子结构错误",
          count: 10
        }
      ],
      patterns: [
        // --- Grammar Errors (语法错误) — 10 patterns ---
        {
          id: "ce01",
          subcategory: "ch-grammar",
          wrong: "With the development of society, people's life become better and better.",
          correct: "As society has progressed, people's quality of life has improved significantly.",
          explanation: "Avoid the overused Chinese essay opener 'with the development of'. Use 'as society has progressed' instead. Also, 'life' needs an article or qualifier, and 'become' should agree with the subject.",
          explanationCN: "避免滥用中文作文开头'随着社会的发展'。用'as society has progressed'代替。同时，'life'需要冠词或限定词，'become'应与主语保持一致。",
          function: "Fix 'with the development of' pattern",
          functionCN: "修复'随着……的发展'句式",
          tip: "This is the most common Chinglish pattern in essays. Avoid it entirely.",
          tipCN: "这是作文中最常见的中式英语模式。完全避免它。"
        },
        {
          id: "ce02",
          subcategory: "ch-grammar",
          wrong: "There are more and more people think that technology is important.",
          correct: "An increasing number of people believe that technology is important.",
          explanation: "'There are' cannot be followed by a clause with 'think'. Use 'an increasing number of people' as the subject instead.",
          explanationCN: "'There are'后面不能跟带有'think'的从句。用'an increasing number of people'作主语。",
          function: "Fix 'there are more and more' error",
          functionCN: "修复'越来越多的人认为'错误",
          tip: "Never use 'there are more and more people think'. It is grammatically incorrect.",
          tipCN: "永远不要用'there are more and more people think'。语法上是错误的。"
        },
        {
          id: "ce03",
          subcategory: "ch-grammar",
          wrong: "I very agree with this opinion.",
          correct: "I strongly agree with this opinion.",
          explanation: "'Very' cannot modify 'agree' directly. Use adverbs like 'strongly', 'firmly', 'wholeheartedly', or 'completely'.",
          explanationCN: "'Very'不能直接修饰'agree'。使用副词如'strongly', 'firmly', 'wholeheartedly', 或'completely'。",
          function: "Fix 'very + verb' error",
          functionCN: "修复'very + 动词'错误",
          tip: "'Very' modifies adjectives, not verbs. Say 'I strongly believe' not 'I very believe'.",
          tipCN: "'Very'修饰形容词，不修饰动词。说'I strongly believe'而不是'I very believe'。"
        },
        {
          id: "ce04",
          subcategory: "ch-grammar",
          wrong: "Although technology brings convenience, but it also causes problems.",
          correct: "Although technology brings convenience, it also causes problems.",
          explanation: "In English, 'although' and 'but' cannot be used together. Use one or the other, never both in the same sentence.",
          explanationCN: "在英语中，'although'和'but'不能同时使用。只用其中一个，永远不要在同一个句子中同时使用。",
          function: "Fix 'although...but' double conjunction",
          functionCN: "修复'虽然……但是'双连词错误",
          tip: "Chinese uses 虽然...但是 together. English uses 'although' OR 'but', never both.",
          tipCN: "中文'虽然...但是'同时使用。英语用'although'或'but'，永远不同时用。"
        },
        {
          id: "ce05",
          subcategory: "ch-grammar",
          wrong: "The economy of China develops very fast.",
          correct: "China's economy has developed rapidly.",
          explanation: "Use possessive form ('China's economy') rather than 'the economy of China'. Also, use 'rapidly' (adverb) not 'very fast', and present perfect for ongoing development.",
          explanationCN: "使用所有格形式（'China's economy'）而不是'the economy of China'。同时用'rapidly'（副词）不用'very fast'，并使用现在完成时表示持续发展。",
          function: "Fix 'the X of Y' overuse and adverb choice",
          functionCN: "修复'the X of Y'过度使用和副词选择",
          tip: "Possessive is more natural in English: 'China's economy' not 'the economy of China'.",
          tipCN: "所有格在英语中更自然：'China's economy'而不是'the economy of China'。"
        },
        {
          id: "ce06",
          subcategory: "ch-grammar",
          wrong: "We should protect environment and save resource.",
          correct: "We should protect the environment and conserve natural resources.",
          explanation: "'Environment' needs 'the' (the environment). 'Resource' should be plural 'resources'. 'Save' should be 'conserve' in academic writing.",
          explanationCN: "'Environment'需要'the'（the environment）。'Resource'应该是复数'resources'。学术写作中'save'应该用'conserve'。",
          function: "Fix missing articles and singular/plural",
          functionCN: "修复缺失冠词和单复数错误",
          tip: "Chinese has no articles. Always check: do I need 'the', 'a', or no article?",
          tipCN: "中文没有冠词。始终检查：我需要'the'、'a'还是不需要冠词？"
        },
        {
          id: "ce07",
          subcategory: "ch-grammar",
          wrong: "In my opinion, I think that education is very important.",
          correct: "In my opinion, education is of paramount importance.",
          explanation: "'In my opinion' and 'I think' mean the same thing. Using both is redundant. Also, 'very important' is weak — use 'of paramount importance' or 'essential'.",
          explanationCN: "'In my opinion'和'I think'意思相同。同时使用是冗余的。同时，'very important'太弱——用'of paramount importance'或'essential'。",
          function: "Fix redundancy and weak language",
          functionCN: "修复冗余和弱势语言",
          tip: "Never say 'in my opinion, I think'. Choose one. Also avoid 'very important'.",
          tipCN: "永远不要说'in my opinion, I think'。选一个。也避免'very important'。"
        },
        {
          id: "ce08",
          subcategory: "ch-grammar",
          wrong: "Bindly, the technology make our life convenient. Thirdly, it can help us save time.",
          correct: "Secondly, technology makes our lives more convenient. Thirdly, it enables us to save time.",
          explanation: "Subject-verb agreement: 'technology' (singular) needs 'makes'. 'Our life' should be 'our lives' (plural for multiple people). 'Convenient' needs 'more' for comparison.",
          explanationCN: "主谓一致：'technology'（单数）需要'makes'。'Our life'应为'our lives'（多人用复数）。'Convenient'需要'more'进行比较。",
          function: "Fix subject-verb agreement and comparatives",
          functionCN: "修复主谓一致和比较级",
          tip: "Always check that singular subjects have singular verbs: he makes, it provides, technology enables.",
          tipCN: "始终检查单数主语配单数动词：he makes, it provides, technology enables。"
        },
        {
          id: "ce09",
          subcategory: "ch-grammar",
          wrong: "The reason is because people don't have enough education.",
          correct: "The reason is that people lack adequate education.",
          explanation: "'The reason is because' is grammatically incorrect. Use 'the reason is that'. Also, 'don't have enough education' is informal — use 'lack adequate education'.",
          explanationCN: "'The reason is because'语法上不正确。使用'the reason is that'。同时，'don't have enough education'太口语化——用'lack adequate education'。",
          function: "Fix 'reason is because' error",
          functionCN: "修复'reason is because'错误",
          tip: "The reason is THAT, not BECAUSE. 'Because' already means 'for the reason that'.",
          tipCN: "The reason is THAT，不是BECAUSE。'Because'本身就意味着'for the reason that'。"
        },
        {
          id: "ce10",
          subcategory: "ch-grammar",
          wrong: "Nowadays, people's living standard is improved.",
          correct: "In recent decades, standards of living have improved considerably.",
          explanation: "'Nowadays' is overused in Chinglish essays. Use 'in recent decades' or 'in contemporary society'. 'Living standard' should be 'standards of living' (plural). Use active voice.",
          explanationCN: "'Nowadays'在中式英语作文中被过度使用。用'in recent decades'或'in contemporary society'。'Living standard'应该是'standards of living'（复数）。使用主动语态。",
          function: "Fix 'nowadays' overuse and passive voice",
          functionCN: "修复'nowadays'过度使用和被动语态",
          tip: "Avoid 'nowadays' — it sounds informal. Use 'in the modern era' or 'in recent years'.",
          tipCN: "避免'nowadays'——听起来不正式。用'in the modern era'或'in recent years'。"
        },

        // --- Collocation Errors (搭配错误) — 10 patterns ---
        {
          id: "ce11",
          subcategory: "ch-collocation",
          wrong: "This will bring great influence to society.",
          correct: "This will have a significant influence on society.",
          explanation: "'Bring influence' is not a natural English collocation. Use 'have an influence on', 'exert influence on', or 'have an impact on'.",
          explanationCN: "'Bring influence'不是自然的英语搭配。使用'have an influence on', 'exert influence on', 或'have an impact on'。",
          function: "Fix 'bring influence' error",
          functionCN: "修复'bring influence'错误",
          tip: "influence: have/exert ON | impact: have ON | effect: have ON",
          tipCN: "influence: have/exert ON | impact: have ON | effect: have ON"
        },
        {
          id: "ce12",
          subcategory: "ch-collocation",
          wrong: "We should put more attention to this problem.",
          correct: "We should pay more attention to this issue.",
          explanation: "'Put attention' is incorrect. The correct collocations are 'pay attention to', 'draw attention to', or 'devote attention to'.",
          explanationCN: "'Put attention'是不正确的。正确的搭配是'pay attention to', 'draw attention to', 或'devote attention to'。",
          function: "Fix 'put attention' error",
          functionCN: "修复'put attention'错误",
          tip: "PAY attention, DRAW attention, DEVOTE attention — never PUT attention.",
          tipCN: "PAY attention, DRAW attention, DEVOTE attention——永远不要PUT attention。"
        },
        {
          id: "ce13",
          subcategory: "ch-collocation",
          wrong: "The government should take measures to solve the pollution.",
          correct: "The government should implement measures to address pollution.",
          explanation: "'Take measures' is acceptable but 'implement measures' is more academic. 'Solve the pollution' is wrong — use 'address pollution' or 'tackle pollution'. Pollution is not 'solved'.",
          explanationCN: "'Take measures'可以接受但'implement measures'更学术。'Solve the pollution'是错误的——使用'address pollution'或'tackle pollution'。Pollution不能被'solved'。",
          function: "Fix 'solve' misuse with abstract nouns",
          functionCN: "修复'solve'与抽象名词的误用",
          tip: "You 'solve' a maths problem. You 'address/tackle/mitigate' social issues.",
          tipCN: "你'solve'一个数学问题。你'address/tackle/mitigate'社会问题。"
        },
        {
          id: "ce14",
          subcategory: "ch-collocation",
          wrong: "People should improve their quality.",
          correct: "People should enhance their skills and personal development.",
          explanation: "'Improve quality' when referring to people sounds like manufacturing. In English, you improve skills, enhance abilities, or develop competencies — not 'improve people's quality'.",
          explanationCN: "当指人时，'improve quality'听起来像制造业。在英语中，你improve skills, enhance abilities, 或develop competencies——不是'improve people's quality'。",
          function: "Fix 'improve quality' (of people) error",
          functionCN: "修复'提高素质'的翻译错误",
          tip: "提高素质 ≠ improve quality. Say 'develop skills', 'enhance competencies', or 'pursue personal development'.",
          tipCN: "提高素质 ≠ improve quality。说'develop skills', 'enhance competencies', 或'pursue personal development'。"
        },
        {
          id: "ce15",
          subcategory: "ch-collocation",
          wrong: "We should open our eyes and broaden our horizon.",
          correct: "We should broaden our horizons and develop a more global perspective.",
          explanation: "'Open our eyes' is too informal for academic writing. 'Horizon' should be plural 'horizons'. Combine with 'develop a global perspective' for a more academic tone.",
          explanationCN: "'Open our eyes'对于学术写作太口语化。'Horizon'应该是复数'horizons'。与'develop a global perspective'结合以获得更学术的语气。",
          function: "Fix informal phrasing",
          functionCN: "修复口语化表达",
          tip: "Always 'broaden our horizonS' (plural). Avoid 'open our eyes' in essays.",
          tipCN: "始终用'broaden our horizonS'（复数）。避免在作文中用'open our eyes'。"
        },
        {
          id: "ce16",
          subcategory: "ch-collocation",
          wrong: "This phenomenon gives us a deep impression.",
          correct: "This phenomenon leaves a lasting impression on us.",
          explanation: "'Give an impression' is incorrect. The correct collocations are 'leave an impression', 'make an impression', or 'create an impression'.",
          explanationCN: "'Give an impression'是不正确的。正确的搭配是'leave an impression', 'make an impression', 或'create an impression'。",
          function: "Fix 'give impression' error",
          functionCN: "修复'give impression'错误",
          tip: "Impressions are MADE, LEFT, or CREATED — not GIVEN.",
          tipCN: "Impression用MADE, LEFT, 或CREATED——不用GIVEN。"
        },
        {
          id: "ce17",
          subcategory: "ch-collocation",
          wrong: "Students should gain more knowledge from books.",
          correct: "Students should acquire knowledge through extensive reading.",
          explanation: "'Gain knowledge' is acceptable but 'acquire knowledge' is more academic. 'From books' is too simple — use 'through extensive reading' or 'through academic study'.",
          explanationCN: "'Gain knowledge'可以接受但'acquire knowledge'更学术。'From books'太简单——用'through extensive reading'或'through academic study'。",
          function: "Upgrade from basic to academic collocation",
          functionCN: "从基础搭配升级到学术搭配",
          tip: "Academic upgrades: gain → acquire | get → obtain | use → utilise | show → demonstrate",
          tipCN: "学术升级：gain → acquire | get → obtain | use → utilise | show → demonstrate"
        },
        {
          id: "ce18",
          subcategory: "ch-collocation",
          wrong: "We can see that this problem is very serious.",
          correct: "It is evident that this issue is of considerable severity.",
          explanation: "'We can see that' is too informal. Use 'it is evident that', 'it is apparent that', or 'it is clear that'. 'Very serious' becomes 'of considerable severity' in academic style.",
          explanationCN: "'We can see that'太口语化。使用'it is evident that', 'it is apparent that', 或'it is clear that'。'Very serious'在学术风格中变为'of considerable severity'。",
          function: "Fix informal observation language",
          functionCN: "修复口语化观察语言",
          tip: "Replace 'we can see' with 'it is evident/apparent/clear that'.",
          tipCN: "将'we can see'替换为'it is evident/apparent/clear that'。"
        },
        {
          id: "ce19",
          subcategory: "ch-collocation",
          wrong: "The price of houses is too expensive.",
          correct: "Housing prices are prohibitively high.",
          explanation: "Prices are 'high' or 'low', not 'expensive' or 'cheap'. Things are expensive; prices are high. Also, 'the price of houses' should be 'housing prices'.",
          explanationCN: "价格用'high'或'low'，不用'expensive'或'cheap'。东西是expensive的；价格是high的。同时，'the price of houses'应改为'housing prices'。",
          function: "Fix price/expensive confusion",
          functionCN: "修复价格/昂贵的混淆",
          tip: "PRICES are high/low. THINGS are expensive/cheap. Never 'prices are expensive'.",
          tipCN: "价格是high/low。东西是expensive/cheap。永远不要说'prices are expensive'。"
        },
        {
          id: "ce20",
          subcategory: "ch-collocation",
          wrong: "This problem has already existed for a long time.",
          correct: "This issue has persisted for a considerable period.",
          explanation: "'Already existed' is awkward. Use 'has persisted', 'has prevailed', or 'has been present'. 'For a long time' is informal — use 'for a considerable period' or 'for decades'.",
          explanationCN: "'Already existed'很不自然。使用'has persisted', 'has prevailed', 或'has been present'。'For a long time'不正式——用'for a considerable period'或'for decades'。",
          function: "Fix awkward time expressions",
          functionCN: "修复不自然的时间表达",
          tip: "Academic time expressions: for a long time → for decades / for a considerable period / for an extended period",
          tipCN: "学术时间表达：for a long time → for decades / for a considerable period / for an extended period"
        },

        // --- Sentence Structure Errors (句子结构错误) — 10 patterns ---
        {
          id: "ce21",
          subcategory: "ch-structure",
          wrong: "Because the population is growing, so the demand for food increases.",
          correct: "Because the population is growing, the demand for food is increasing.",
          explanation: "In English, 'because' and 'so' cannot be used together. Use 'because...,' (without so) or 'the population is growing, so...' (without because).",
          explanationCN: "在英语中，'because'和'so'不能同时使用。用'because...,'（不加so）或'the population is growing, so...'（不加because）。",
          function: "Fix 'because...so' double conjunction",
          functionCN: "修复'因为……所以'双连词错误",
          tip: "Chinese uses 因为...所以 together. English uses BECAUSE or SO, never both.",
          tipCN: "中文'因为...所以'同时使用。英语用BECAUSE或SO，永远不同时用。"
        },
        {
          id: "ce22",
          subcategory: "ch-structure",
          wrong: "As we all know, education is important for everyone.",
          correct: "It is widely recognised that education is fundamentally important for all members of society.",
          explanation: "'As we all know' is informal and adds nothing meaningful. Use 'it is widely recognised that', 'it is commonly understood that', or remove it entirely.",
          explanationCN: "'As we all know'不正式且没有添加有意义的内容。使用'it is widely recognised that', 'it is commonly understood that', 或完全删除它。",
          function: "Fix 'as we all know' opener",
          functionCN: "修复'众所周知'开头",
          tip: "Avoid 'as we all know' — it is filler. If everyone knows it, why state it?",
          tipCN: "避免'as we all know'——它是填充词。如果每个人都知道，为什么要说呢？"
        },
        {
          id: "ce23",
          subcategory: "ch-structure",
          wrong: "Not only it brings benefits, but also it has some problems.",
          correct: "Not only does it bring benefits, but it also presents certain challenges.",
          explanation: "'Not only' requires subject-auxiliary inversion: 'not only DOES it...' not 'not only it...'. Also, 'but also it' should be 'but it also'.",
          explanationCN: "'Not only'需要主谓倒装：'not only DOES it...'不是'not only it...'。同时，'but also it'应改为'but it also'。",
          function: "Fix 'not only...but also' inversion error",
          functionCN: "修复'not only...but also'倒装错误",
          tip: "Not only + auxiliary + subject: 'Not only DOES it reduce..., but it also improves...'",
          tipCN: "Not only + 助动词 + 主语：'Not only DOES it reduce..., but it also improves...'"
        },
        {
          id: "ce24",
          subcategory: "ch-structure",
          wrong: "For my part, I think we should protect the environment, this is very important for our future.",
          correct: "For my part, I believe we should protect the environment, as this is crucial for our collective future.",
          explanation: "Two independent clauses cannot be joined by just a comma (comma splice). Use a semicolon, a conjunction ('as', 'because', 'since'), or make two sentences.",
          explanationCN: "两个独立子句不能仅用逗号连接（逗号拼接错误）。使用分号、连词（'as', 'because', 'since'）或写成两个句子。",
          function: "Fix comma splice",
          functionCN: "修复逗号拼接错误",
          tip: "Two complete thoughts need more than a comma. Add 'as', 'because', 'which', or use a full stop.",
          tipCN: "两个完整的意思需要的不仅仅是逗号。加上'as', 'because', 'which'，或使用句号。"
        },
        {
          id: "ce25",
          subcategory: "ch-structure",
          wrong: "There have many advantages and disadvantages of this topic.",
          correct: "There are numerous advantages and disadvantages associated with this issue.",
          explanation: "'There have' is incorrect. Use 'there are' (there + be verb). Also, 'of this topic' should be 'associated with this issue' in academic writing.",
          explanationCN: "'There have'是不正确的。使用'there are'（there + be动词）。同时，学术写作中'of this topic'应改为'associated with this issue'。",
          function: "Fix 'there have' error",
          functionCN: "修复'there have'错误",
          tip: "There + BE (is/are/was/were), not there + HAVE. This is a very common Chinese-speaker error.",
          tipCN: "There + BE（is/are/was/were），不是there + HAVE。这是中国说话者非常常见的错误。"
        },
        {
          id: "ce26",
          subcategory: "ch-structure",
          wrong: "Compare with the past, now people have a better life.",
          correct: "Compared with the past, people today enjoy a significantly higher standard of living.",
          explanation: "'Compare with' at the start needs to be a past participle: 'Compared with'. Also, 'now people have a better life' is informal — upgrade to academic phrasing.",
          explanationCN: "句首的'Compare with'需要是过去分词形式：'Compared with'。同时，'now people have a better life'太口语化——升级为学术表达。",
          function: "Fix 'compare with' participle error",
          functionCN: "修复'compare with'分词错误",
          tip: "At the start of a sentence: COMPARED with (past participle), not COMPARE with.",
          tipCN: "在句子开头：COMPARED with（过去分词），不是COMPARE with。"
        },
        {
          id: "ce27",
          subcategory: "ch-structure",
          wrong: "With the help of technology, makes our life easier.",
          correct: "With the help of technology, daily life has become considerably easier.",
          explanation: "A prepositional phrase ('with the help of technology') cannot be the subject of a verb. The sentence needs a proper subject after the comma.",
          explanationCN: "介词短语（'with the help of technology'）不能作为动词的主语。逗号后面的句子需要一个恰当的主语。",
          function: "Fix missing subject after prepositional phrase",
          functionCN: "修复介词短语后缺少主语",
          tip: "After 'with X,' you MUST add a subject: 'With technology, LIFE has become...' not 'With technology, makes...'",
          tipCN: "在'with X,'后面必须加主语：'With technology, LIFE has become...'不是'With technology, makes...'"
        },
        {
          id: "ce28",
          subcategory: "ch-structure",
          wrong: "I think the most important thing is study hard and get good grades.",
          correct: "I believe the most important priorities are to study diligently and to achieve strong academic results.",
          explanation: "After 'the most important thing is', use 'to + infinitive': 'to study hard and to get...'. Also, upgrade 'study hard' to 'study diligently' and 'good grades' to 'strong academic results'.",
          explanationCN: "在'the most important thing is'后面用'to + 不定式'：'to study hard and to get...'。同时，将'study hard'升级为'study diligently'，'good grades'升级为'strong academic results'。",
          function: "Fix infinitive after 'the important thing is'",
          functionCN: "修复'重要的是'后的不定式",
          tip: "After 'the key/important thing is': use TO + verb, not bare verb.",
          tipCN: "在'the key/important thing is'后面：用TO + 动词，不是裸动词。"
        },
        {
          id: "ce29",
          subcategory: "ch-structure",
          wrong: "Even if there are some disadvantages, I still think the advantages are more.",
          correct: "Despite certain drawbacks, I maintain that the advantages outweigh the disadvantages.",
          explanation: "'The advantages are more' is unnatural. Use 'the advantages outweigh the disadvantages'. Also, 'even if there are some disadvantages' is wordy — use 'despite certain drawbacks'.",
          explanationCN: "'The advantages are more'不自然。使用'the advantages outweigh the disadvantages'。同时，'even if there are some disadvantages'太啰嗦——用'despite certain drawbacks'。",
          function: "Fix 'advantages are more' error",
          functionCN: "修复'优点更多'的翻译错误",
          tip: "Never 'advantages are more'. Always 'advantages OUTWEIGH disadvantages'.",
          tipCN: "永远不要说'advantages are more'。始终说'advantages OUTWEIGH disadvantages'。"
        },
        {
          id: "ce30",
          subcategory: "ch-structure",
          wrong: "Each coin has two sides. Everything has advantages and disadvantages.",
          correct: "This is a nuanced issue with both merits and limitations that warrant careful examination.",
          explanation: "'Each coin has two sides' is a Chinese proverb directly translated. It sounds childish in English academic writing. Replace with academic language about nuance and complexity.",
          explanationCN: "'Each coin has two sides'是中文谚语的直译。在英语学术写作中听起来很幼稚。用关于细微差别和复杂性的学术语言替换。",
          function: "Fix translated Chinese proverb",
          functionCN: "修复直译的中文谚语",
          tip: "Never use 'each coin has two sides' in English essays. Examiners will recognise it as Chinglish immediately.",
          tipCN: "永远不要在英语作文中使用'each coin has two sides'。考官会立刻认出这是中式英语。"
        }
      ]
    }
  ]
};

// ============================================================================
// Export for use in other modules
// ============================================================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = SENTENCE_PATTERNS;
}
