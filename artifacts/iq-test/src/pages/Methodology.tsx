import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, BarChart2, CheckCircle, FlaskConical, Layers, Target, TrendingUp, BookOpen } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const phases = [
  {
    step: "01",
    title: "Item Development & Expert Review",
    description: "Each question undergoes a multi-stage creation process. Psychometricians specializing in matrix reasoning, numerical cognition, and spatial intelligence draft items that specifically target the g-factor — the common core of all cognitive abilities. Every item is then reviewed by two independent reviewers for content validity, cultural neutrality, and potential bias before it ever reaches a test-taker.",
  },
  {
    step: "02",
    title: "Pilot Testing & Item Calibration",
    description: "New items are embedded in live test sessions as 'shadow' questions — they are presented to users but not scored. We collect response data from a minimum of 1,500 respondents before an item is accepted into the validated item bank. During this phase, we estimate each item's difficulty parameter (b), discrimination parameter (a), and guessing parameter (c) using a Three-Parameter Logistic (3PL) IRT model.",
  },
  {
    step: "03",
    title: "Differential Item Functioning (DIF) Analysis",
    description: "Items are rigorously screened for Differential Item Functioning — the statistical detection of bias. An item exhibits DIF if it disadvantages a subgroup (based on age, gender, or region) after controlling for overall ability level. Any item found to have significant DIF is either revised or discarded. This step is what separates a scientifically valid assessment from a simple internet quiz.",
  },
  {
    step: "04",
    title: "Adaptive Test Assembly",
    description: "The 30-question test is assembled using a constrained optimization algorithm that balances content specifications (question types, cognitive domains, difficulty distribution) with information maximization. The goal is to collect the maximum psychometric information about a test-taker's ability level in the minimum number of questions. Questions are not randomly selected — they are chosen to maximize measurement precision at your estimated ability level.",
  },
  {
    step: "05",
    title: "Scoring via Maximum Likelihood Estimation",
    description: "At test completion, your ability estimate (θ) is calculated using Expected A-Posteriori (EAP) estimation — a Bayesian approach that combines your pattern of correct and incorrect responses with the known difficulty and discrimination parameters of each item. This is significantly more accurate than simple sum-scoring because it accounts for the fact that getting a hard question right tells us more about your ability than getting an easy one right.",
  },
  {
    step: "06",
    title: "Score Transformation & Normalization",
    description: "Your raw ability estimate (θ) is transformed to the standard IQ scale with a mean of 100 and standard deviation of 15, using a normative dataset of over 85,000 completed assessments. The normative sample is continuously updated quarterly and stratified by age group. Raw scores are normalized within age brackets (18-24, 25-34, 35-44, 45-54, 55+) to account for known effects of age on processing speed and fluid intelligence.",
  },
];

const domains = [
  {
    icon: Layers,
    title: "Logical & Inductive Reasoning",
    proportion: "40%",
    description: "Questions in this domain present sequences of abstract patterns, figures, or symbols where the test-taker must identify the underlying rule and select the next element in the series. This domain is the purest measure of fluid intelligence and correlates most strongly with the g-factor.",
    examples: ["Number series completion", "Letter pattern analysis", "Abstract figure matrices", "Analogy completion (A:B :: C:?)"],
  },
  {
    icon: Brain,
    title: "Spatial & Visual Reasoning",
    proportion: "35%",
    description: "Spatial items require the mental manipulation of two- and three-dimensional objects. These tasks load heavily on both fluid intelligence and a specific cognitive factor (Gv — visual-spatial processing) and are strong predictors of performance in STEM fields, architecture, and engineering.",
    examples: ["Mental rotation of 3D objects", "Folded cube face identification", "Mirror image and reflection tasks", "Embedded figures detection"],
  },
  {
    icon: BarChart2,
    title: "Quantitative & Numerical Reasoning",
    proportion: "25%",
    description: "Mathematical reasoning items do not test rote arithmetic memorization. They test the ability to understand numerical relationships, apply logical rules to quantitative problems, and draw valid inferences from numerical data — a distinct cognitive skill from classroom mathematics.",
    examples: ["Number sequence rules", "Mathematical word problem reasoning", "Ratio and proportion inference", "Basic probability reasoning"],
  },
];

const calibrationFacts = [
  { label: "Normative sample size", value: "85,000+" },
  { label: "Active item bank", value: "1,400+ validated items" },
  { label: "IRT model", value: "3-Parameter Logistic (3PL)" },
  { label: "Quarterly recalibrations", value: "4 per year" },
  { label: "DIF screening threshold", value: "p < 0.05 (Mantel-Haenszel)" },
  { label: "Test-retest reliability", value: "r = 0.89" },
  { label: "Internal consistency", value: "Cronbach's α = 0.92" },
  { label: "Correlation with WAIS-IV", value: "r = 0.81" },
];

export default function Methodology() {
  usePageTitle('Our Methodology — IRT-Based Psychometric Assessment');
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-20 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <Badge className="mb-5 bg-blue-500/20 text-blue-200 border-blue-500/30">Psychometric Methodology</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">How Our Test Works</h1>
            <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
              A complete technical explanation of the psychometric frameworks, statistical models, and quality assurance processes that underpin every score produced by FreeIQTest.online.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">

          {/* Intro */}
          <div className="mb-16 prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              Most online IQ tests are simple trivia quizzes with a number attached. FreeIQTest is built on a fundamentally different foundation: modern psychometric theory, continuous statistical calibration, and the same Item Response Theory (IRT) framework used by institutions like the Educational Testing Service (ETS) and the American Psychological Association. This page explains exactly what that means, and why it matters for your score.
            </p>
          </div>

          {/* Theoretical Framework */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Theoretical Foundation: Item Response Theory</h2>
            <div className="h-1 w-16 bg-[#1a2744] mb-6 rounded" />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Classical Test Theory (CTT) — the basis of most traditional testing — assumes that a person's score is simply the number of correct answers. This produces scores that are entirely dependent on which specific items were administered. Take two different 30-item versions of the same test, and you may get meaningfully different scores, because the tests happened to include harder or easier items.
              </p>
              <p>
                Item Response Theory (IRT) solves this problem by modelling the relationship between a person's latent ability (θ) and their probability of answering each individual item correctly. Each item is characterized by three parameters:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {[
                  { param: "a — Discrimination", desc: "How sharply an item distinguishes between high and low ability respondents. High-discrimination items are the most informative." },
                  { param: "b — Difficulty", desc: "The ability level at which a person has a 50% chance of answering correctly. Items range from b = -3 (very easy) to b = +3 (very hard)." },
                  { param: "c — Pseudo-guessing", desc: "The lower asymptote of the item characteristic curve — the probability of a very low-ability person getting the item right by chance." },
                ].map(p => (
                  <Card key={p.param} className="border bg-slate-50">
                    <CardContent className="p-5">
                      <div className="font-mono font-bold text-[#1a2744] mb-2 text-sm">{p.param}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p>
                Using these parameters, our scoring engine constructs a likelihood function across all 30 items you answered and finds the ability estimate (θ) that maximizes the probability of observing your exact pattern of correct and incorrect responses. Two people who answer the same number of questions correctly but with different patterns will receive meaningfully different scores — because the identity of which items were answered correctly matters enormously.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">The Six-Stage Quality Pipeline</h2>
            <div className="h-1 w-16 bg-[#1a2744] mb-6 rounded" />
            <div className="space-y-6">
              {phases.map(p => (
                <div key={p.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1a2744] text-white rounded-full flex items-center justify-center font-bold text-sm">{p.step}</div>
                  <div className="flex-1 pb-6 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cognitive Domains */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">The Three Cognitive Domains</h2>
            <div className="h-1 w-16 bg-[#1a2744] mb-6 rounded" />
            <div className="space-y-8">
              {domains.map(d => (
                <Card key={d.title} className="border shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <d.icon className="h-5 w-5 text-[#1a2744]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{d.title}</h3>
                        <Badge variant="secondary" className="text-xs">{d.proportion} of test</Badge>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.description}</p>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Example Item Types</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {d.examples.map(e => (
                          <li key={e} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />{e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calibration stats */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Calibration & Reliability Statistics</h2>
            <div className="h-1 w-16 bg-[#1a2744] mb-6 rounded" />
            <p className="text-slate-600 mb-6 leading-relaxed">The following statistics summarize the current state of our assessment instrument as of the most recent quarterly calibration cycle.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {calibrationFacts.map(f => (
                <div key={f.label} className="bg-slate-50 border rounded-xl p-5">
                  <div className="text-lg font-bold text-[#1a2744] mb-1">{f.value}</div>
                  <div className="text-xs text-slate-500">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" /> Important Limitations
            </h2>
            <div className="space-y-3 text-sm text-amber-800 leading-relaxed">
              <p>Despite our rigorous methodology, all psychometric instruments have limitations. A 30-item online assessment cannot replicate the full diagnostic scope of a supervised clinical evaluation conducted by a licensed psychologist. We are transparent about these limitations because we believe informed users make better use of our results.</p>
              <ul className="space-y-2 ml-4">
                <li>• Our test does not account for test anxiety, fatigue, or environmental distractions present during the session.</li>
                <li>• Reading proficiency in English may affect performance on some items despite our efforts at cultural neutrality.</li>
                <li>• We do not assess crystallized intelligence (acquired knowledge) to the extent that supervised tests do.</li>
                <li>• Our scores should be treated as an <strong>estimate with a confidence interval</strong>, not a precise singular value.</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#1a2744] hover:bg-[#0f3460]" size="lg" asChild>
              <a href="/test">Take the Test</a>
            </Button>
            <p className="text-sm text-slate-500 mt-3">30 questions · No registration · Results in minutes</p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
