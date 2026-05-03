import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Brain, BarChart2, Dna, Zap, FlaskConical, TrendingUp } from 'lucide-react';

type Term = {
  term: string;
  category: string;
  summary: string;
  content: string[];
  relatedTerms: string[];
};

const categories = [
  { label: "All", value: "all" },
  { label: "Core Concepts", value: "Core Concepts" },
  { label: "Intelligence Theory", value: "Intelligence Theory" },
  { label: "Psychometrics", value: "Psychometrics" },
  { label: "Neuroscience", value: "Neuroscience" },
  { label: "Statistics", value: "Statistics" },
];

const terms: Term[] = [
  {
    term: "Intelligence Quotient (IQ)",
    category: "Core Concepts",
    summary: "A standardized score from cognitive tests, normalized to a mean of 100 with a standard deviation of 15.",
    content: [
      "An Intelligence Quotient, or IQ, is a total score derived from a standardized set of tests designed to assess human cognitive ability. The term 'IQ' was coined by German psychologist William Stern in 1912, who originally defined it as the ratio of mental age to chronological age, multiplied by 100. A child whose mental age matched their chronological age would thus score exactly 100.",
      "Modern IQ tests no longer use the ratio method. Contemporary tests instead use deviation IQ — a statistical approach that compares your performance to a large, representative normative sample of the same age group. Your score indicates how many standard deviations above or below the population mean your result falls. With a standard deviation of 15, approximately 68% of the population scores between 85 and 115, and about 95% score between 70 and 130.",
      "IQ tests measure a variety of cognitive abilities including logical reasoning, working memory, processing speed, perceptual reasoning, and verbal comprehension. The specific abilities tested vary by instrument. Major professionally administered tests include the Wechsler Adult Intelligence Scale (WAIS-IV), the Stanford-Binet (SB5), and the Cattell Culture Fair Intelligence Test. Online assessments like FreeIQTest focus primarily on fluid intelligence — logical, spatial, and numerical reasoning — which are the most g-saturated and culturally neutral domains.",
      "IQ scores are one of the most empirically studied psychological constructs. They predict a wide range of life outcomes with moderate to strong effect sizes, including academic achievement, occupational performance and income, and even physical health and longevity. However, IQ is far from the only predictor of these outcomes — motivation, personality, conscientiousness, socioeconomic background, and access to opportunity all play substantial roles.",
    ],
    relatedTerms: ["g-factor", "Standard Deviation", "Percentile", "Fluid Intelligence"],
  },
  {
    term: "g-factor (General Intelligence)",
    category: "Intelligence Theory",
    summary: "The shared statistical factor underlying all cognitive abilities, first described by Charles Spearman in 1904.",
    content: [
      "The g-factor, or general intelligence factor, is a construct in psychometrics that emerged from Charles Spearman's 1904 observation that people who perform well on one cognitive task tend to perform well on others — a phenomenon he called 'positive manifold.' Using a statistical technique he invented called factor analysis, Spearman demonstrated that a single common factor could explain the positive correlations between diverse cognitive tests.",
      "g is not a single brain region or cognitive process but rather an emergent statistical property — the shared variance across all cognitive performances. Think of it as the common bandwidth that all cognitive tasks draw from simultaneously. Whether you are solving an abstract matrix, recalling a word list, tracking moving objects, or performing mental arithmetic, each task taps into this shared resource to varying degrees.",
      "Different tests are described by their 'g-loading' — the strength of their correlation with g. Highly g-loaded tests include Raven's Progressive Matrices, matrix reasoning tasks, and abstract analogies. Less g-loaded tests include tasks measuring rote memory or highly specific learned skills. FreeIQTest is designed to maximize g-loading by focusing on abstract reasoning across three domains.",
      "Parieto-Frontal Integration Theory (P-FIT), proposed by Rex Jung and Richard Haier in 2007, is the leading neuroscientific model of g. It proposes that general intelligence emerges from the efficiency of neural communication between parietal regions (responsible for sensory integration and spatial processing) and frontal regions (responsible for executive function and abstract reasoning). Higher-g individuals show more efficient neural activation — doing more cognitive work with less metabolic activity — a phenomenon called 'neural efficiency.'",
      "The predictive validity of g is one of the most replicated findings in all of psychology. Meta-analyses place its correlation with job performance at approximately r = 0.50, with academic achievement around r = 0.55, and with a range of health and social outcomes. These correlations persist after controlling for education, socioeconomic status, and personality, suggesting g has independent causal significance.",
    ],
    relatedTerms: ["IQ", "Fluid Intelligence", "Psychometrics", "Neural Efficiency"],
  },
  {
    term: "Fluid Intelligence (Gf)",
    category: "Intelligence Theory",
    summary: "The capacity to reason and solve novel problems independent of prior knowledge. Peaks in early adulthood.",
    content: [
      "Fluid intelligence (Gf) is the ability to reason about novel problems using logic, pattern recognition, and abstract thinking — without relying on previously acquired knowledge or experience. The concept was introduced by Raymond Cattell in 1963 as part of his influential distinction between fluid and crystallized intelligence.",
      "Gf is what you use when you encounter a problem you have never seen before and have no stored procedure to solve it. It involves seeing relationships, identifying abstract patterns, holding multiple pieces of information in working memory simultaneously, and drawing logical inferences. Matrix reasoning tasks — where you identify the rule governing a series of abstract figures — are the purest measure of fluid intelligence.",
      "Fluid intelligence follows a distinct developmental trajectory. It rises steeply through childhood and adolescence, peaks somewhere in the early to mid-twenties, and then shows a gradual but consistent decline through adulthood. This decline is particularly noticeable in processing speed (how quickly you can perform simple cognitive operations) and working memory capacity (how many items you can hold active simultaneously).",
      "The age-related decline of Gf is not inevitable in its steepness. Aerobic exercise, intellectually stimulating work, bilingualism, and avoidance of neurotoxins are all associated with a slower decline. Conversely, heavy alcohol use, chronic sleep deprivation, and sedentary lifestyles are associated with faster decline. The brain's white matter integrity — the quality of the myelin sheaths that insulate neural connections — is a key structural correlate of fluid intelligence.",
      "Fluid intelligence is moderately heritable (estimates range from 0.50 to 0.70 in adults) and is more sensitive to environmental perturbations in early life than crystallized intelligence. Malnutrition, lead exposure, prenatal alcohol exposure, and extreme early deprivation all show measurable negative impacts on Gf. Conversely, enriched early environments and quality early education show modest positive effects.",
    ],
    relatedTerms: ["Crystallized Intelligence", "g-factor", "Working Memory", "Flynn Effect"],
  },
  {
    term: "Crystallized Intelligence (Gc)",
    category: "Intelligence Theory",
    summary: "Accumulated knowledge and skills built up over a lifetime of learning. Tends to be stable or grow with age.",
    content: [
      "Crystallized intelligence (Gc) is the breadth and depth of knowledge and skills that you have accumulated through education, experience, and cultural immersion. It is the residue of fluid intelligence applied to learning — everything you have ever understood, retained, and integrated becomes part of your crystallized intelligence.",
      "Gc manifests in vocabulary size, general knowledge, reading comprehension, verbal reasoning, and domain-specific expertise. When an experienced surgeon makes an intuitive diagnosis, a seasoned chess player instantly recognizes a tactical pattern, or a skilled writer finds exactly the right word, they are drawing heavily on crystallized intelligence. The knowledge itself is the resource.",
      "Unlike fluid intelligence, Gc does not typically decline with age. In many people it continues to grow well into the sixties and seventies, as long as the person remains intellectually engaged. This is why older adults often outperform younger adults on verbal reasoning and general knowledge tasks despite showing slower processing speeds. The accumulated library compensates for the slower processor.",
      "Cattell's original theory proposed that fluid intelligence is the 'investment' mechanism — when Gf is applied to learning an area, the returns are stored as crystallized intelligence. This explains why early differences in fluid intelligence compound over time: a child with slightly higher Gf acquires knowledge faster, which provides richer scaffolding for further learning, which builds more Gc, which facilitates more efficient future learning. This positive feedback loop is one mechanism through which early ability differences become magnified over a lifetime.",
      "The CHC (Cattell-Horn-Carroll) model — the current gold standard taxonomy of cognitive abilities — places both Gf and Gc as broad abilities at the second stratum, below only g at the apex. It identifies seven broad stratum abilities in total, along with approximately 70 narrow abilities at the lowest stratum, organized into a hierarchical structure that has been validated across cultures and age groups.",
    ],
    relatedTerms: ["Fluid Intelligence", "CHC Theory", "g-factor", "Working Memory"],
  },
  {
    term: "The Flynn Effect",
    category: "Core Concepts",
    summary: "The well-documented rise in average IQ scores across the 20th century — approximately 3 IQ points per decade.",
    content: [
      "The Flynn Effect is one of the most striking and counterintuitive findings in the history of intelligence research. Named after New Zealand political scientist James Flynn, who systematically documented the phenomenon in the 1980s, it refers to the sustained, large-scale increase in average IQ scores observed across virtually all developed nations throughout the 20th century — at an average rate of approximately 3 IQ points per decade.",
      "The practical implication is staggering: if someone born in 1920 took an IQ test normed for 2025, they would likely score around 30 points below today's average. Conversely, if today's population were assessed on a 1920s-era test, we would all appear to be geniuses by the standards of that era. This is why IQ tests must be periodically renormed — the normative baseline drifts as the population improves.",
      "The causes of the Flynn Effect remain actively debated. The most supported explanations include: dramatic improvements in early childhood nutrition (particularly iodine supplementation and reductions in protein deficiency); near-elimination of childhood lead exposure from paint and gasoline (lead is a powerful neurotoxin that impairs cognitive development); expansion of formal education and scientific thinking; smaller family sizes allowing more parental cognitive investment per child; and the increasing demand of modern life for abstract, decontextualized reasoning — the exact kind of thinking IQ tests reward.",
      "The Flynn Effect may be slowing or reversing in some developed nations. Norwegian, Danish, Finnish, and British datasets — among the most comprehensive long-run IQ records available — show evidence of a 'reverse Flynn Effect' beginning roughly in the mid-1990s. Proposed explanations include the nutrition/lead gains being fully realized (so that low-hanging fruit no longer exists), changes in educational pedagogy, the cognitive effects of screen-dominant entertainment, and reduced reading of long-form text.",
      "An important nuance: the Flynn Effect appears to have been stronger for lower ability ranges and for fluid intelligence tasks than for high ability ranges and crystallized knowledge tasks. This suggests it was largely driven by reductions in severe cognitive deprivation (malnutrition, disease, under-education) rather than increases at the upper end of the ability distribution. The very highest scorers have not become dramatically more common — the floor has risen more than the ceiling.",
    ],
    relatedTerms: ["IQ", "Fluid Intelligence", "Psychometrics", "Normative Sample"],
  },
  {
    term: "Psychometrics",
    category: "Psychometrics",
    summary: "The scientific field concerned with the theory, measurement, and analysis of psychological attributes.",
    content: [
      "Psychometrics is the branch of psychology and statistics concerned with the measurement of psychological attributes — abilities, knowledge, attitudes, personality traits, and psychological states. The field provides the theoretical foundations and practical methods for constructing, validating, and interpreting psychological tests. Every reliable IQ test, personality inventory, or educational achievement exam is built on psychometric principles.",
      "The two core goals of psychometrics are reliability and validity. Reliability refers to the consistency of a measure — whether it produces the same result when administered to the same person under similar conditions at different times. A reliable test has high test-retest reliability and strong internal consistency. Validity refers to whether a test actually measures what it claims to measure. A test that reliably predicts academic success is said to have predictive validity; one that correlates strongly with other established intelligence tests has convergent validity.",
      "Item Response Theory (IRT) is the dominant modern framework for test construction and psychometric analysis. Unlike Classical Test Theory, which treats items as interchangeable and ability as a simple sum of correct answers, IRT models the relationship between a person's latent ability (θ) and their probability of correctly answering each specific item. Each item is characterized by parameters for difficulty, discrimination, and guessing probability. This allows for more precise ability estimation, adaptive testing, and meaningful comparison across different test forms.",
      "Structural Equation Modeling (SEM) and Confirmatory Factor Analysis (CFA) are the primary statistical tools used in psychometrics to test theoretical models of cognitive structure. When researchers claim that intelligence is hierarchically organized — with g at the apex, broad abilities in the middle, and narrow abilities at the base — they are making claims that are tested and supported via CFA models fit to large correlation matrices of cognitive test performance.",
      "The history of psychometrics is inseparable from its history of misuse. Early psychometricians including Francis Galton and Henry Goddard used poorly constructed tests and flawed genetic theories to make claims about racial hierarchy and to justify immigration restriction and forced sterilization. Modern psychometrics operates under strict ethical guidelines and maintains a clear distinction between measurement and social policy. The field's scientific validity does not license its historical abuses — nor do its historical abuses invalidate the science.",
    ],
    relatedTerms: ["Item Response Theory", "Reliability", "Validity", "g-factor"],
  },
  {
    term: "Item Response Theory (IRT)",
    category: "Psychometrics",
    summary: "A modern test theory that models the relationship between latent ability and probability of answering each item correctly.",
    content: [
      "Item Response Theory (IRT) is a family of statistical models that describe the relationship between a person's unobservable (latent) ability level and their observable responses to test items. Unlike Classical Test Theory (CTT), which focuses on the total score as the primary unit of analysis, IRT treats each item individually — modeling precisely how items behave across the full spectrum of ability.",
      "The most widely used IRT model for cognitive ability tests is the Three-Parameter Logistic (3PL) model. It characterizes each item by three parameters: the 'b' parameter (item difficulty — the ability level at which a test-taker has a 50% chance of answering correctly), the 'a' parameter (item discrimination — how steeply the probability of a correct response rises as ability increases), and the 'c' parameter (pseudo-guessing — the lower asymptote, representing the probability that a very low-ability person answers correctly by chance).",
      "IRT enables several capabilities that CTT cannot provide. First, ability estimates are test-form independent — two people who took different sets of items can be meaningfully compared on the same scale, because the ability estimate accounts for the difficulty of the specific items answered. Second, IRT provides a person-specific standard error of measurement, allowing confidence intervals around each individual's score. Third, IRT enables Computerized Adaptive Testing (CAT), where items are selected in real time to target each test-taker's estimated ability level, dramatically increasing measurement efficiency.",
      "FreeIQTest uses IRT-based parameters for its item bank, calibrated against a normative sample of over 85,000 completed assessments. When you answer a question, our scoring engine updates its estimate of your ability level (θ) and calculates the posterior distribution of your likely true score. The final IQ score is derived from the Expected A-Posteriori (EAP) estimate — a Bayesian point estimate that balances the likelihood of your response pattern with a prior distribution.",
      "IRT is not limited to cognitive testing. It is widely used in large-scale educational assessments (the SAT, PISA, and NAEP all use IRT), health outcome measurement, attitude scaling, and political science. The fundamental insight — that test items are not interchangeable and that individual item properties must be modeled — has transformed psychometric practice since the 1970s.",
    ],
    relatedTerms: ["Psychometrics", "Reliability", "Normative Sample", "Standard Error"],
  },
  {
    term: "Standard Deviation",
    category: "Statistics",
    summary: "A measure of spread in a distribution. IQ uses a standard deviation of 15, so most people score within 15 points of 100.",
    content: [
      "Standard deviation (SD) is a statistical measure of how spread out values are around the mean of a distribution. In a dataset with low standard deviation, most values cluster closely around the average. In a dataset with high standard deviation, values are more widely dispersed. For a normal (bell curve) distribution, the standard deviation defines the characteristic width of the curve.",
      "Modern IQ scales are deliberately defined with a mean of 100 and a standard deviation of 15. This choice is not arbitrary — it was standardized in the mid-20th century to align tests like the WAIS and Stanford-Binet onto a common interpretable scale. A score of 115 is exactly one standard deviation above the mean; a score of 130 is two standard deviations above the mean.",
      "The normal distribution has several important properties that make standard deviations useful for interpretation: approximately 68.2% of the population scores within one SD of the mean (85–115); approximately 95.4% within two SDs (70–130); and approximately 99.7% within three SDs (55–145). This means that a score of 130 or above — two SDs above the mean — is achieved by roughly 2.3% of the population, while a score of 145 or above is achieved by fewer than 0.1%.",
      "The standard deviation also anchors the concept of effect size in research — the Cohen's d statistic expresses the difference between two group means in units of standard deviation. A Cohen's d of 1.0 means two groups differ by one full standard deviation, which in IQ terms would be 15 points. This allows researchers to compare the magnitude of IQ-relevant effects across studies with different measurement scales.",
      "It is important to note that IQ scores are not perfectly normally distributed at the extremes — the tails of the actual distribution are somewhat fatter than a pure normal curve, meaning very high and very low scores are slightly more common than the Gaussian model predicts. Most published IQ statistics implicitly assume normality, which works well for the bulk of the distribution but should be interpreted cautiously at the extremes.",
    ],
    relatedTerms: ["Percentile", "Normal Distribution", "IQ", "Mean"],
  },
  {
    term: "Percentile",
    category: "Statistics",
    summary: "A score that indicates what percentage of the reference population scored below a given value.",
    content: [
      "A percentile rank is a score that indicates the percentage of people in a reference population who scored at or below a particular value. If your IQ falls in the 84th percentile, you scored higher than 84% of the population. The 50th percentile corresponds to the median — the exact middle of the distribution — which, for IQ, is 100.",
      "Percentile ranks are often more intuitive and practically meaningful than raw IQ scores. Rather than knowing you scored 118, knowing you are in the 88th percentile tells you immediately where you stand relative to other people. For this reason, results pages — including ours — typically display both the IQ score and the corresponding percentile rank.",
      "Percentile ranks are not linearly related to IQ scores because IQ scores are normally distributed. The IQ points near the center of the distribution are very densely populated — going from IQ 100 to IQ 107 represents a jump from the 50th to the 68th percentile, an 18-point gain in percentile rank. But at the extreme right tail, going from IQ 130 to IQ 137 only moves you from the 98th to the 99th percentile. The same 7-point score difference corresponds to a very different percentile change depending on where you are in the distribution.",
      "When comparing your score to those in specialized populations — high-IQ societies, elite universities, competitive professional fields — the general population percentile becomes less informative than your standing within that specific subgroup. Mensa requires a score at or above the 98th percentile of the general population (approximately IQ 130–132, depending on the test). Among Mensa members, a score at the 98th percentile of Mensa would correspond to roughly the top 0.04% of the general population.",
      "Percentile norms must be kept up to date due to the Flynn Effect. If a test is normed on data from 1990 but administered in 2025, scores will appear inflated because average ability has risen since the normative sample was collected. FreeIQTest recalibrates its normative percentile lookup tables quarterly to account for this drift.",
    ],
    relatedTerms: ["Standard Deviation", "Normal Distribution", "Flynn Effect", "IQ"],
  },
  {
    term: "Working Memory",
    category: "Neuroscience",
    summary: "The cognitive system that temporarily holds and manipulates information for use in complex tasks.",
    content: [
      "Working memory is the cognitive system responsible for the temporary storage and active manipulation of information during complex tasks. It is the mind's mental workspace — where you hold a phone number while dialing it, mentally carry a number during arithmetic, follow the thread of a long sentence, or plan the next move in a chess game. Working memory is distinct from long-term memory: it is capacity-limited, time-limited, and requires active maintenance.",
      "The dominant model of working memory is Alan Baddeley's multi-component model, which identifies four subsystems: the Central Executive (an attentional control system that coordinates the other components), the Phonological Loop (stores and rehearses verbal and auditory information), the Visuospatial Sketchpad (stores and manipulates visual and spatial information), and the Episodic Buffer (integrates information from different systems and links working memory to long-term memory).",
      "Working memory capacity is strongly correlated with fluid intelligence — correlations between working memory span tasks and g typically range from r = 0.50 to r = 0.70. Some researchers have argued that working memory capacity is effectively a proxy for g, though others maintain they are distinct constructs. The most influential account (Engle's executive attention theory) proposes that what matters is not raw storage capacity but the ability to maintain task-relevant representations in the face of interference — a form of attentional control.",
      "Working memory capacity is substantially heritable (estimates of 0.50–0.60) and shows a characteristic lifespan trajectory: rapid development through childhood, peak performance in the mid-twenties, and gradual decline thereafter. The age-related decline is particularly pronounced for the central executive and visuospatial sketchpad components. Many of the cognitive changes associated with aging — slower processing, increased distractibility, difficulty multitasking — are substantially mediated by declining working memory capacity.",
      "Working memory can be temporarily improved through practice on specific working memory tasks (n-back training, dual-task training). However, the critical question of whether these improvements transfer to untrained tasks or general fluid intelligence remains controversial. The current scientific consensus is that transfer is narrow — you get better at the practiced tasks but general cognitive ability does not improve substantially.",
    ],
    relatedTerms: ["Fluid Intelligence", "Cognitive Load", "Neuroplasticity", "g-factor"],
  },
  {
    term: "Cognitive Load",
    category: "Neuroscience",
    summary: "The total amount of mental effort being used in working memory at a given moment.",
    content: [
      "Cognitive load refers to the amount of mental effort or working memory resources being used at a given moment. The concept was developed by educational psychologist John Sweller in the 1980s and has become foundational in instructional design, human factors engineering, and cognitive psychology. Because working memory has a limited capacity, tasks or environments that demand more than that capacity create a bottleneck that impairs performance.",
      "Sweller identified three types of cognitive load: Intrinsic load (the inherent complexity of the material being processed — a multiplication problem has lower intrinsic load than solving a differential equation), Extraneous load (unnecessary demands imposed by the presentation format rather than the material itself — a poorly designed diagram adds extraneous load), and Germane load (the productive cognitive effort invested in schema formation and learning — the mental work that results in durable understanding).",
      "High cognitive load has predictable performance consequences: slower response times, increased error rates, reduced ability to notice and integrate relevant contextual information, decreased creativity, and impaired decision quality. Research in behavioral economics has linked high cognitive load to greater susceptibility to cognitive biases — when working memory is taxed, people rely more heavily on heuristic shortcuts and less on deliberate analytical reasoning.",
      "Cognitive load interacts with individual differences in working memory capacity and fluid intelligence. A task that overwhelms a person with limited working memory capacity may be handled comfortably by someone with higher capacity. This is one mechanism through which individual differences in intelligence translate into performance differences in complex real-world tasks — higher-g individuals have more 'bandwidth' available for novel problem elements after familiar components are handled automatically.",
      "IQ tests are specifically designed to generate high cognitive load — to push test-takers toward their processing limits. When a test is too easy, individual differences in ability are compressed and the test discriminates poorly. A well-calibrated IQ test item challenges people at or near their working memory ceiling, creating maximal variation in performance across the ability spectrum.",
    ],
    relatedTerms: ["Working Memory", "Fluid Intelligence", "Attention", "Executive Function"],
  },
  {
    term: "Neuroplasticity",
    category: "Neuroscience",
    summary: "The brain's ability to reorganize its structure and function in response to experience and learning.",
    content: [
      "Neuroplasticity is the remarkable capacity of the brain to reorganize its structure, function, and connections in response to experience, learning, injury, or disease. Far from being a fixed, hardware-like organ after childhood, the brain retains significant adaptive capacity throughout life. This capacity underlies all learning and memory, enables recovery from injury, and is the reason that experience and environment continue to shape cognition well into adulthood.",
      "Neuroplasticity operates at multiple levels. Synaptic plasticity refers to changes in the strength of connections between individual neurons — the cellular-level mechanism of learning and memory, governed by Hebbian learning principles ('neurons that fire together, wire together'). Structural plasticity refers to longer-term physical changes including the growth of new synaptic connections (synaptogenesis), pruning of unused connections, changes in dendritic arborization, and, in specific brain regions, the birth of new neurons (neurogenesis).",
      "The most neuroplasticity-responsive region in the adult brain is the hippocampus — a structure critical for memory formation and spatial navigation. Aerobic exercise reliably increases hippocampal volume in both young and older adults, an effect mediated by brain-derived neurotrophic factor (BDNF), often called 'Miracle-Gro for the brain.' Studies of London taxi drivers — who must memorize thousands of street routes — have found enlarged posterior hippocampal volume compared to the general population, suggesting experience-driven structural change.",
      "The relationship between neuroplasticity and IQ is complex. The core question — can neuroplasticity be deliberately harnessed to increase general intelligence? — remains contested. The bulk of evidence suggests that: (1) domain-specific skills can absolutely be improved through intensive practice, (2) these improvements produce genuine neurological changes in the trained domains, (3) but transfer to general fluid intelligence (g) is modest at best. The brain can become more efficient at specific tasks without becoming more 'powerful' in the general sense measured by IQ tests.",
      "There are, however, well-validated lifestyle factors that preserve neuroplasticity and slow cognitive aging: regular aerobic exercise (the single most robustly supported intervention), adequate sleep (critical for synaptic homeostasis and memory consolidation), cognitive engagement (reading, complex work, learning new skills), social connection, stress management, and healthy nutrition. These factors do not dramatically raise IQ from a genetic baseline, but they can make the difference between maintaining cognitive vitality into old age and experiencing accelerated decline.",
    ],
    relatedTerms: ["Working Memory", "Cognitive Load", "Fluid Intelligence", "Executive Function"],
  },
  {
    term: "Executive Function",
    category: "Neuroscience",
    summary: "A set of cognitive processes managed by the prefrontal cortex including planning, inhibition, and cognitive flexibility.",
    content: [
      "Executive function is an umbrella term for a set of higher-order cognitive processes that regulate and direct other cognitive activities. Housed primarily in the prefrontal cortex — the evolutionarily newest and most distinctively human region of the brain — executive functions allow us to pursue goals, override impulses, plan sequences of behavior, switch flexibly between tasks, and monitor our own performance.",
      "The three core executive functions identified by developmental psychologist Adele Diamond are: Inhibitory Control (the ability to suppress prepotent but inappropriate responses — resisting the temptation to eat the marshmallow, suppressing the impulse to look at a distraction), Working Memory (maintaining and manipulating information in mind while using it), and Cognitive Flexibility (the ability to shift perspectives, switch between rules, and think about things in multiple ways). More complex executive abilities — planning, reasoning, problem solving — are thought to emerge from combinations of these three core functions.",
      "Executive function is strongly linked to real-world outcomes, often independently of IQ. Longitudinal studies have shown that preschool executive function predicts school readiness, academic achievement, health behaviors, and social competence, sometimes more strongly than early IQ measures. The famous 'marshmallow test' — in which 4-year-olds chose between one marshmallow now or two marshmallows later — produced results that predicted SAT scores, BMI, and social functioning decades later, though replications have suggested socioeconomic background moderates these effects.",
      "The prefrontal cortex has a protracted development — it is the last brain region to fully mature, with development continuing into the mid-twenties. This explains much of adolescent behavior: the risk-taking, emotional reactivity, and short-term thinking that characterize adolescence reflect immature inhibitory control and future orientation. It also explains why IQ tests show their largest gains during adolescence and why early scores are less predictive of adult ability than later scores.",
      "Executive function and IQ are correlated but distinguishable. Factor analyses typically show that executive function measures share variance with g but also have variance specific to executive processes. People with high IQ but poor inhibitory control may underperform in academic settings due to difficulty sustaining attention; people with average IQ but excellent executive function may achieve more through disciplined goal pursuit. Both dimensions matter for life outcomes.",
    ],
    relatedTerms: ["Working Memory", "Cognitive Load", "Fluid Intelligence", "Prefrontal Cortex"],
  },
  {
    term: "Heritability",
    category: "Core Concepts",
    summary: "The proportion of variation in a trait within a population that is attributable to genetic differences between individuals.",
    content: [
      "Heritability is a population-level statistic that quantifies how much of the variation in a trait — within a specific population, in a specific environment, at a specific time — is attributable to genetic differences between individuals. For adult IQ, twin and adoption studies consistently estimate heritability at 0.50 to 0.80, meaning 50–80% of the variance in IQ scores in adult Western populations is associated with genetic variation.",
      "Understanding what heritability does not mean is as important as understanding what it does. A heritability of 0.70 does not mean '70% of your IQ is determined by your genes.' It does not mean that environmental interventions cannot change IQ — the Flynn Effect alone proves that population-level environmental changes can shift average scores by 30 points. Heritability is a descriptive statistic about a population, not a claim about the causal weight of genes for any individual.",
      "The heritability of IQ shows a fascinating developmental trajectory. In young children, heritability is relatively modest (around 0.30–0.40) and shared environment (family, socioeconomic status) accounts for a substantial portion of variance. In adulthood, heritability rises dramatically (to 0.60–0.80) while shared environmental effects shrink to near zero. This counterintuitive pattern — intelligence becomes more heritable with age — likely reflects active gene-environment correlation: as people gain autonomy, they select and shape environments that match their genetic propensities, amplifying genetic effects.",
      "Genome-wide association studies (GWAS) have identified thousands of genetic variants associated with intelligence, but each has a tiny individual effect. The largest effect sizes found so far are each associated with less than 0.1% of IQ variance. Current polygenic scores for intelligence explain roughly 10–15% of variance in IQ test scores — much less than the 50–80% implied by twin study heritability estimates. This 'missing heritability' gap is a major active research problem in behavioral genetics.",
      "The heritability of IQ tells us nothing about whether average differences between groups are genetic in origin. Heritability is a within-group statistic. The classic illustration: two groups of seeds planted in nutrient-rich soil vs. nutrient-poor soil will show high heritability within each group (genetic differences determine which plants grow taller within each group's common environment) but the difference in average height between groups is entirely environmental. Whether population-level IQ differences between demographic groups are genetic, environmental, or both is a separate empirical question that requires direct evidence — and for which the current evidence overwhelmingly points to environmental causes.",
    ],
    relatedTerms: ["Fluid Intelligence", "g-factor", "Flynn Effect", "Gene-Environment Interaction"],
  },
  {
    term: "Normative Sample",
    category: "Psychometrics",
    summary: "The reference population used to standardize test scores and establish what an average performance looks like.",
    content: [
      "A normative sample is the reference group against which individual test scores are compared. When a test reports that your IQ is 115, it means your performance was better than approximately 84% of the normative sample. The quality, representativeness, and recency of the normative sample are among the most important determinants of a test's validity and interpretive utility.",
      "A well-constructed normative sample should be large (typically several thousand or more), stratified (matching the demographic composition of the target population in terms of age, sex, education, geographic region, and ethnicity), and recent (reflecting the current population rather than one from decades past). The WAIS-IV normative sample included over 2,200 participants carefully stratified to match 2005 US Census data, organized into 13 age groups from 16 to 90.",
      "Age-based norming is essential for cognitive tests. Cognitive abilities change substantially across the lifespan — raw performance on processing speed tasks peaks in the mid-twenties and declines steadily thereafter, while verbal knowledge often peaks in the late forties or fifties. An intelligence test that used a single normative sample across all ages would produce scores that systematically over-estimated the intelligence of older adults (on knowledge tasks) and under-estimated it on speed-dependent tasks. Age-stratified norming ensures your score reflects your standing within your age cohort.",
      "The Flynn Effect creates an ongoing challenge for normative sample management. As average population ability rises over time, an aging normative sample gradually under-estimates how well a test-taker is doing relative to contemporaries. Tests normed in 1990 will increasingly over-estimate ability as the years pass. The magnitude of this inflation is approximately 0.3 IQ points per year — small annually, but substantial over decades. FreeIQTest recalibrates its normative baseline quarterly using rolling data from recent test completions.",
      "FreeIQTest's normative sample currently includes over 85,000 completed assessments, geographically stratified to represent test-takers from North America, Europe, Asia, and other regions. While larger than most commercial test normative samples, our online sample has known limitations: it overrepresents more educated, digitally connected populations and underrepresents populations with limited internet access. We account for this bias through statistical adjustment, but we are transparent about this limitation.",
    ],
    relatedTerms: ["Flynn Effect", "Standard Deviation", "Percentile", "Reliability"],
  },
  {
    term: "Spatial Reasoning",
    category: "Intelligence Theory",
    summary: "The ability to mentally visualize, rotate, and manipulate objects and understand their spatial relationships.",
    content: [
      "Spatial reasoning — also called visuospatial ability or Gv (visual-spatial processing) in the CHC taxonomy — is the cognitive capacity to generate, retain, and transform visual mental representations. It encompasses the ability to mentally rotate three-dimensional objects, navigate through environments, interpret maps and diagrams, visualize how flat shapes fold into three-dimensional forms, and understand how objects look from different perspectives.",
      "Spatial reasoning is a robust independent predictor of achievement in STEM disciplines. Longitudinal studies tracking mathematically talented youth (from the Study of Mathematically Precocious Youth, SMPY) have found that spatial ability predicts STEM doctoral attainment, invention, and scientific publication rates independently of mathematical and verbal ability. Many practicing engineers, architects, surgeons, and physicists show particularly strong spatial profiles.",
      "Spatial reasoning tasks vary in the specific spatial operations they require. Mental rotation tasks require rotating a three-dimensional object and recognizing how it looks from a different angle — they are among the most consistently gender-differentiated cognitive tasks, with males showing, on average, an advantage of approximately 0.5–1.0 standard deviations that appears early in development. Spatial visualization tasks, which require multi-step visual transformations, show smaller or no sex differences. Spatial perception tasks (identifying the true horizontal or vertical in a tilted visual context) also show moderate male advantages.",
      "Spatial ability is substantially malleable — perhaps more so than general fluid intelligence. Video game playing (especially action video games and strategy games), navigation in complex environments, music training, and formal geometry instruction have all been shown to produce reliable improvements in specific spatial skills. Some researchers argue that spatial training has particularly strong effects for individuals with initially low spatial ability — a finding with important implications for STEM education equity.",
      "In our test, spatial reasoning items include mental rotation of abstract 3D figures, mirror image identification, and embedded figures detection. These items are designed to be non-verbal — the correct answer should be determinable by anyone regardless of language background, provided they understand the question format. This is why spatial items contribute to the cultural fairness of our assessment.",
    ],
    relatedTerms: ["Fluid Intelligence", "Visuospatial Processing", "Mental Rotation", "CHC Theory"],
  },
  {
    term: "Reliability",
    category: "Psychometrics",
    summary: "The consistency of a measurement — whether the same person tested again under similar conditions gets a similar score.",
    content: [
      "Reliability in psychometrics refers to the consistency, stability, and reproducibility of measurements. A reliable test produces the same results when the same person takes it under similar conditions on different occasions, or when the same ability is measured using different sets of comparable items. Reliability is a necessary but not sufficient condition for validity — a test must be reliable to be valid, but reliability alone does not guarantee that the test is measuring what it claims.",
      "Several types of reliability are important for cognitive tests. Test-retest reliability measures the correlation between scores obtained from the same test administered to the same people on two separate occasions — a key indicator of score stability over time. For IQ tests, test-retest reliabilities of r = 0.80–0.95 over intervals of weeks to months are typically reported. FreeIQTest's test-retest reliability is approximately r = 0.89 across a 4-week interval in our validation sample.",
      "Internal consistency reliability measures whether the items within a test are measuring the same underlying construct. Cronbach's alpha is the most commonly used statistic — values above 0.80 indicate good internal consistency, and values above 0.90 indicate excellent consistency. FreeIQTest's alpha = 0.92, indicating that our 30 items are coherently measuring a common underlying ability dimension.",
      "Parallel forms reliability assesses whether two different versions of the same test produce equivalent scores. This is critical for test security and retesting purposes — if taking the test multiple times produces dramatically different scores simply because the items changed, the test lacks comparability across forms. We maintain multiple parallel forms with equivalent IRT parameters to ensure consistent measurement.",
      "It is important for users to understand that even highly reliable tests produce scores with measurement error. A single score is best understood as the center of a confidence interval rather than a precise point. At FreeIQTest's reliability level, the 95% confidence interval around an individual score spans roughly ±10 IQ points — meaning a score of 115 most likely reflects a true ability somewhere between 105 and 125. This imprecision is inherent to any 30-item online assessment and is substantially narrowed by longer, supervised testing.",
    ],
    relatedTerms: ["Validity", "Standard Error", "Psychometrics", "Item Response Theory"],
  },
];

export default function Wiki() {
  usePageTitle('Cognitive Science Wiki — Intelligence & Psychometrics Knowledge Base');
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = terms.filter(t => {
    const matchesSearch = search === '' ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'all' || t.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const categoryColors: Record<string, string> = {
    "Core Concepts": "bg-blue-100 text-blue-800",
    "Intelligence Theory": "bg-purple-100 text-purple-800",
    "Psychometrics": "bg-green-100 text-green-800",
    "Neuroscience": "bg-orange-100 text-orange-800",
    "Statistics": "bg-slate-100 text-slate-700",
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30">Knowledge Base</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Cognitive Science Wiki</h1>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
              In-depth explanations of the core concepts behind intelligence testing, psychometrics, and cognitive neuroscience. Each entry goes beyond the definition to explain the real science.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-blue-200">
              <span>{terms.length} entries</span>
              <span>·</span>
              <span>{categories.length - 1} categories</span>
              <span>·</span>
              <span>Continuously updated</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-16">

          {/* Search + Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search terms..."
                className="pl-10 bg-white border-slate-200 h-11"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#1a2744] text-white border-[#1a2744]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-500 mb-6">
            Showing {filtered.length} of {terms.length} entries
            {search && ` matching "${search}"`}
            {activeCategory !== 'all' && ` in ${activeCategory}`}
          </p>

          {/* Entries */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>No entries found. Try a different search term or category.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <Accordion type="multiple" className="w-full">
                {filtered.map((item, i) => (
                  <AccordionItem key={i} value={`term-${i}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 group">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-left w-full pr-4">
                        <div className="flex-1">
                          <div className="font-bold text-lg text-slate-900 group-hover:text-[#1a2744] transition-colors">
                            {item.term}
                          </div>
                          <p className="text-sm text-slate-500 mt-0.5 font-normal">{item.summary}</p>
                        </div>
                        <Badge className={`text-xs flex-shrink-0 ${categoryColors[item.category] ?? ''}`}>
                          {item.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-7 pt-1">
                      <div className="space-y-4">
                        {item.content.map((para, j) => (
                          <p key={j} className="text-slate-600 leading-relaxed text-[15px]">{para}</p>
                        ))}
                      </div>
                      {item.relatedTerms.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-slate-100">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-3">Related:</span>
                          <div className="inline-flex flex-wrap gap-2 mt-2">
                            {item.relatedTerms.map(rt => {
                              const target = terms.find(t => t.term === rt || t.term.startsWith(rt));
                              return (
                                <button
                                  key={rt}
                                  onClick={() => setSearch(rt)}
                                  className="text-xs px-3 py-1 rounded-full bg-blue-50 text-[#1a2744] border border-blue-100 hover:bg-blue-100 transition-colors"
                                >
                                  {rt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            <a href="/science" className="group block bg-white border rounded-xl p-5 hover:border-[#1a2744] hover:shadow-md transition-all">
              <FlaskConical className="h-6 w-6 text-[#1a2744] mb-3" />
              <div className="font-bold text-slate-900 group-hover:text-[#1a2744] mb-1">The Science</div>
              <p className="text-sm text-slate-500">Deeper research dives into g-factor, heritability, Flynn Effect and more.</p>
            </a>
            <a href="/methodology" className="group block bg-white border rounded-xl p-5 hover:border-[#1a2744] hover:shadow-md transition-all">
              <BarChart2 className="h-6 w-6 text-[#1a2744] mb-3" />
              <div className="font-bold text-slate-900 group-hover:text-[#1a2744] mb-1">Our Methodology</div>
              <p className="text-sm text-slate-500">How our IRT-based algorithm turns 30 answers into a calibrated IQ score.</p>
            </a>
            <a href="/test" className="group block bg-[#1a2744] border border-[#1a2744] rounded-xl p-5 hover:bg-[#0f3460] transition-all">
              <Brain className="h-6 w-6 text-blue-200 mb-3" />
              <div className="font-bold text-white mb-1">Take the Test</div>
              <p className="text-sm text-blue-200">Put this knowledge to the test. 30 questions, no registration required.</p>
            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}
