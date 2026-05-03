import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FlaskConical, BookOpen, Brain, TrendingUp, Dna, Zap, Globe, BarChart2 } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const topics = [
  {
    id: "g-factor",
    icon: Brain,
    title: "The g-Factor: General Intelligence",
    badge: "Foundational Theory",
    body: [
      `In 1904, British psychologist Charles Spearman made a remarkable observation: people who perform well on one type of mental test tend to perform well on others, regardless of how different the tasks appear. He called this shared factor "g" — general intelligence — and formalized it using a statistical technique he invented called factor analysis.`,
      `The g-factor is not a single brain function but rather an emergent statistical property that reflects the shared variance across all cognitive abilities. Whether you are solving an abstract matrix, recalling a word list, tracking moving objects, or performing mental arithmetic — some common underlying resource is engaged in all of them. That resource is what g measures.`,
      `Modern neuroscience has begun to identify potential neural correlates of g. Parieto-frontal integration theory (P-FIT) proposes that g arises from efficient communication between parietal cortex regions (sensory integration) and frontal regions (abstract reasoning and working memory). Higher-g individuals tend to show more efficient neural activation patterns — doing more with less metabolic expenditure, a phenomenon known as "neural efficiency."`,
      `Today, the g-factor remains one of the most replicated findings in all of psychology. Its predictive validity for academic achievement, occupational performance, and health outcomes is among the strongest of any psychological construct. Our test is specifically designed to maximize its measurement of g by sampling from all three major cognitive domains: logical, spatial, and numerical.`,
    ],
  },
  {
    id: "fluid-crystallized",
    icon: FlaskConical,
    title: "Fluid vs. Crystallized Intelligence (Gf/Gc)",
    badge: "Cattell-Horn-Carroll Theory",
    body: [
      `Raymond Cattell's 1963 distinction between fluid intelligence (Gf) and crystallized intelligence (Gc) is one of the most practically important refinements of the g-factor theory. Fluid intelligence is the capacity to reason and solve novel problems — it operates independently of prior knowledge and peaks in young adulthood, typically declining gradually with age. Crystallized intelligence is the accumulated product of fluid intelligence applied to learning — it includes verbal knowledge, domain expertise, and procedural fluency, and it tends to remain stable or even improve into late adulthood.`,
      `The Cattell-Horn-Carroll (CHC) theory, which is the dominant theoretical framework for modern intelligence testing, extends this to include seven broad cognitive abilities: fluid intelligence (Gf), crystallized intelligence (Gc), visual-spatial processing (Gv), auditory processing (Ga), short-term memory (Gsm), long-term retrieval (Glr), and processing speed (Gs).`,
      `FreeIQTest primarily measures Gf (logical and spatial reasoning) and Gq (quantitative reasoning) — the abilities that are most g-saturated and most independent of educational background. This deliberate focus on process over content is what makes our test more culturally fair than knowledge-heavy verbal tests.`,
      `Understanding the Gf/Gc distinction has profound practical implications. A 45-year-old who scores lower on a processing speed task than a 22-year-old has not become "less intelligent" — their Gc is likely far richer and more integrated. Different cognitive profiles serve different adaptive purposes across the lifespan.`,
    ],
  },
  {
    id: "flynn-effect",
    icon: TrendingUp,
    title: "The Flynn Effect: Rising IQ Scores",
    badge: "Population-Level Trends",
    body: [
      `In 1984, political scientist James Flynn documented one of the most surprising findings in the history of intelligence research: average IQ scores have been rising steadily across virtually all developed nations over the 20th century, at a rate of approximately 3 IQ points per decade. This phenomenon — now known as the Flynn Effect — implies that if a person born in 1920 took a modern IQ test calibrated for today, they would score roughly 30 points lower than the average contemporary test-taker.`,
      `The cause of the Flynn Effect is actively debated. Proposed explanations include improved nutrition (particularly in early childhood), reduced exposure to neurotoxins like lead, expanded access to formal education, the "abstractification" of modern life (visual media, puzzle-based thinking), smaller family sizes allowing more cognitive investment per child, and greater familiarity with the abstract, decontextualized thinking style that IQ tests reward.`,
      `Critically, the Flynn Effect appears to be slowing or even reversing in many Scandinavian nations since the 1990s, a phenomenon sometimes called the "reverse Flynn Effect." Norwegian, Danish, and Finnish military conscript data — among the most complete long-run IQ datasets available — show a modest but consistent decline beginning around 1995. The causes are equally debated and may involve changes in education, media consumption, or the fact that nutrition-related gains have been fully realized.`,
      `The Flynn Effect has a crucial practical implication for IQ testing: tests must be renormed regularly. A test calibrated in 1980 will systematically over-estimate ability scores in 2024 because the population has shifted upward. FreeIQTest's normative dataset is recalibrated quarterly to track these trends, ensuring your score reflects your standing in today's population rather than a decades-old baseline.`,
    ],
  },
  {
    id: "heritability",
    icon: Dna,
    title: "The Genetics of Intelligence",
    badge: "Behavioral Genetics",
    body: [
      `Twin and adoption studies have consistently produced one of the most robust findings in behavioral genetics: intelligence is substantially heritable. Identical twins raised apart show IQ correlations of approximately 0.75, compared to 0.25 for fraternal twins raised apart. The best current estimates place the heritability of adult IQ between 0.50 and 0.80 — meaning that 50-80% of the variance in adult intelligence scores can be attributed to genetic differences between individuals.`,
      `It is critical to understand what heritability does not mean. Heritability is not destiny. A heritability of 0.70 does not mean "70% of your IQ is determined by genes." It means that in the current environment, 70% of the variation across individuals is associated with genetic variation. Change the environment substantially — through severe malnutrition, lead poisoning, or conversely through exceptional enrichment — and heritability estimates change too. The Flynn Effect itself is powerful evidence that environmental factors can shift population-level scores dramatically.`,
      `Genome-wide association studies (GWAS) have begun to identify specific genetic variants associated with intelligence. The most current polygenic scores for cognitive ability explain roughly 10-15% of variance in IQ scores. The genetic architecture of intelligence appears to be highly polygenic, involving thousands of variants each with tiny individual effects — not a handful of "intelligence genes." This architecture makes genetic determinism untenable and hereditarian overreach scientifically unjustifiable.`,
      `Our position: the heritability of intelligence is scientifically established and should not be denied. But heritability is a population statistic, not an individual fate. Every person's cognitive potential is shaped by an interaction of genetic predispositions and the environments and experiences they encounter — and environments are the lever we can actually pull.`,
    ],
  },
  {
    id: "neuroplasticity",
    icon: Zap,
    title: "Neuroplasticity & Cognitive Training",
    badge: "Applied Neuroscience",
    body: [
      `The adult brain retains far more capacity for structural and functional change than was believed even 30 years ago. Neuroplasticity — the brain's ability to reorganize neural connections in response to experience — is the biological basis for learning, memory, and skill acquisition throughout life. The question that has consumed cognitive training researchers for decades is: can this plasticity be harnessed to improve the kind of general cognitive ability measured by IQ tests?`,
      `The most rigorous answer, as of the current scientific consensus, is: modestly and for specific abilities. Studies on working memory training programs (n-back tasks, computerized training) initially produced dramatic claims of g-factor improvement. These claims have not replicated robustly. Transfer from trained tasks to untrained tasks appears to be narrow and specific, not broad and general.`,
      `However, the picture is more nuanced than "cognitive training doesn't work." There is consistent evidence that aerobic exercise improves fluid intelligence, particularly in older adults, through neurogenesis in the hippocampus and improved prefrontal cortex function. Sleep has profound effects on cognitive consolidation and processing speed. Long-term musical or chess training produces specific cognitive advantages in the trained domains. Bilingualism appears to enhance executive function and attentional switching, though its relationship to g is complex.`,
      `The most evidence-supported pathway to maximizing cognitive potential remains unglamorous: consistent aerobic exercise (150+ minutes/week), 7-9 hours of quality sleep, sustained deep reading and intellectually challenging work, social engagement, and the avoidance of neurotoxins including heavy alcohol use. There are no shortcuts to neuroplasticity — but there are real, scientifically validated foundations.`,
    ],
  },
  {
    id: "bias",
    icon: Globe,
    title: "Cultural Bias in IQ Testing",
    badge: "Test Fairness",
    body: [
      `The history of intelligence testing is inseparable from its history of misuse and bias. From the early-20th-century use of Army Alpha/Beta tests to restrict immigration, to the misapplication of group-level IQ differences to justify discrimination, the field carries a profound ethical legacy that responsible practitioners cannot ignore. Understanding this history is not an attack on the concept of intelligence measurement — it is a precondition for doing it well.`,
      `Cultural bias in testing arises when items tap knowledge or reasoning styles that are differentially accessible across cultural groups, independently of the cognitive ability being measured. A question that uses idioms or vocabulary specific to one culture introduces construct-irrelevant variance — variance that inflates or deflates scores for cultural reasons rather than cognitive ones. This is a solvable technical problem, and modern psychometrics has developed rigorous tools to detect and eliminate it: Differential Item Functioning (DIF) analysis, cultural review panels, and cross-cultural validation studies.`,
      `Observed group differences in average test scores — across racial, national, socioeconomic, or gender groups — do not constitute evidence that the test is biased. A biased item, in the technical psychometric sense, is one that performs differently for subgroups of equal ability. Group differences in average scores may reflect genuine environmental differences (nutrition, educational access, socioeconomic stress) that affect all groups' cognitive development — which is a social justice concern, not a testing bias concern.`,
      `FreeIQTest is designed to be as culture-reduced as possible. Our items are non-verbal and figure-based wherever possible. All items undergo DIF analysis. Our normative sample is geographically stratified. We openly acknowledge that no assessment is perfectly culture-free and that our results should be interpreted with these limitations in mind. Language remains the most significant cultural barrier in our test for non-native English speakers who must read the instructions, and we continue to work on multilingual delivery.`,
    ],
  },
];

export default function Science() {
  usePageTitle('The Science of Intelligence — g-Factor, Flynn Effect & Neuroscience');
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-20 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <Badge className="mb-5 bg-blue-500/20 text-blue-200 border-blue-500/30 flex items-center gap-2 w-fit">
              <FlaskConical className="h-3.5 w-3.5" /> The Science of Intelligence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">The Research Behind the Score</h1>
            <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
              A deep dive into over a century of intelligence research — from Spearman's g to modern behavioral genetics, neuroplasticity, and the Flynn Effect. Understanding where IQ science comes from is essential to understanding what your score means.
            </p>
          </div>
        </div>

        {/* TOC */}
        <div className="bg-slate-50 border-b">
          <div className="container mx-auto max-w-4xl px-4 py-6">
            <div className="flex flex-wrap gap-2">
              {topics.map(t => (
                <a key={t.id} href={`#${t.id}`} className="text-sm text-slate-600 hover:text-[#1a2744] bg-white border rounded-full px-4 py-1.5 hover:border-[#1a2744] transition-colors">
                  {t.title.split(':')[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">

          <div className="space-y-20">
            {topics.map(t => (
              <div key={t.id} id={t.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <t.icon className="h-5 w-5 text-[#1a2744]" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{t.badge}</Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t.title}</h2>
                <div className="h-1 w-12 bg-[#1a2744] mb-6 rounded" />
                <div className="space-y-4">
                  {t.body.map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* References */}
          <div className="mt-20 bg-slate-50 border rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"><BookOpen className="h-5 w-5" /> Key References & Further Reading</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Deary, I.J. (2001). <em>Intelligence: A Very Short Introduction.</em> Oxford University Press.</li>
              <li>Flynn, J.R. (2007). <em>What Is Intelligence? Beyond the Flynn Effect.</em> Cambridge University Press.</li>
              <li>Gottfredson, L.S. (1997). Mainstream Science on Intelligence. <em>Intelligence, 24</em>(1), 13-23.</li>
              <li>Hunt, E. (2011). <em>Human Intelligence.</em> Cambridge University Press.</li>
              <li>Nisbett, R.E. et al. (2012). Intelligence: New Findings and Theoretical Developments. <em>American Psychologist, 67</em>(2), 130-159.</li>
              <li>Plomin, R., & Deary, I.J. (2015). Genetics and intelligence differences. <em>Molecular Psychiatry, 20</em>(1), 98-108.</li>
              <li>Ramsden, S. et al. (2011). Verbal and non-verbal intelligence changes in the teenage brain. <em>Nature, 479</em>, 113-116.</li>
              <li>Spearman, C. (1904). General Intelligence, Objectively Determined and Measured. <em>American Journal of Psychology, 15</em>(2), 201-293.</li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-[#1a2744] hover:bg-[#0f3460]" size="lg" asChild>
              <a href="/test">Take the IQ Test</a>
            </Button>
            <p className="text-sm text-slate-500 mt-3">See how you compare to the population distribution</p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
