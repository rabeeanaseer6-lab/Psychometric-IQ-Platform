import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useGetLeaderboard, useGetStats } from '@workspace/api-client-react';
import { Brain, LineChart, ShieldCheck, ChevronRight, Activity, ArrowRight, Zap, Target, Heart, Eye, Lightbulb, Users, Smile } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Bell curve data generation
const generateBellCurveData = () => {
  const data = [];
  const mean = 100;
  const stdDev = 15;
  for (let x = 55; x <= 145; x += 1) {
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    let label = '';
    if (x < 70) label = 'Extremely Low';
    else if (x < 80) label = 'Borderline';
    else if (x < 90) label = 'Low Average';
    else if (x < 110) label = 'Average';
    else if (x < 120) label = 'High Average';
    else if (x < 130) label = 'Superior';
    else label = 'Very Superior';
    
    data.push({ x, y: y * 1000, label });
  }
  return data;
};

const bellCurveData = generateBellCurveData();

export default function Home() {
  usePageTitle();
  const { data: leaderboard } = useGetLeaderboard();
  const { data: stats } = useGetStats();

  // Ticker animation
  const [tickerOffset, setTickerOffset] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOffset((prev) => (prev + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const recentTests = [
    { loc: 'London, UK', score: 124 },
    { loc: 'Tokyo, JP', score: 118 },
    { loc: 'New York, US', score: 105 },
    { loc: 'Berlin, DE', score: 132 },
    { loc: 'Sydney, AU', score: 112 },
    { loc: 'Toronto, AU', score: 121 },
    { loc: 'Paris, DE', score: 115 },
    { loc: 'Seoul, JP', score: 108 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-32 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Scientifically Calibrated Assessment
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Discover Your True Cognitive Potential.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A professional-grade, 30-question intelligence assessment based on established psychometric principles. 
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-blue-50 font-semibold w-full sm:w-auto">
              <Link href="/test">
                Start Free IQ Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-blue-200 mt-2 sm:mt-0 font-medium">No registration required • Results in 20 minutes</p>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 overflow-hidden whitespace-nowrap flex text-sm font-mono text-slate-300">
        <div 
          className="flex space-x-8"
          style={{ transform: `translateX(-${tickerOffset}px)` }}
        >
          {[...recentTests, ...recentTests, ...recentTests].map((test, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span>User from {test.loc}: <strong className="text-white">{test.score} IQ</strong></span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stats?.totalTests ? stats.totalTests.toLocaleString() : '12,500+'}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Tests Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stats?.averageScore ? Math.round(stats.averageScore) : '100'}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Scientific Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stats?.testsToday ? stats.testsToday.toLocaleString() : '840'}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Taken Today</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bell Curve Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                <LineChart className="mr-2 h-4 w-4" />
                Global Distribution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Understanding the IQ Bell Curve</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Intelligence Quotient (IQ) scores are distributed along a normal curve, with the average score set precisely at 100. Standard deviation is 15 points.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><ShieldCheck className="h-6 w-6 text-primary mr-3 shrink-0" /><span className="text-slate-700"><strong>Average (90-109):</strong> Comprises 50% of the population.</span></li>
                <li className="flex items-start"><ShieldCheck className="h-6 w-6 text-primary mr-3 shrink-0" /><span className="text-slate-700"><strong>High Average (110-119):</strong> Comprises ~16% of the population.</span></li>
                <li className="flex items-start"><ShieldCheck className="h-6 w-6 text-primary mr-3 shrink-0" /><span className="text-slate-700"><strong>Superior (120-129):</strong> Comprises ~6.7% of the population.</span></li>
                <li className="flex items-start"><ShieldCheck className="h-6 w-6 text-primary mr-3 shrink-0" /><span className="text-slate-700"><strong>Very Superior (130+):</strong> Comprises ~2.2% of the population.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] bg-white rounded-xl shadow-sm border p-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bellCurveData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="x" tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    labelFormatter={(val) => `IQ: ${val}`}
                    formatter={(val, name, props) => [props.payload.label, 'Classification']}
                  />
                  <ReferenceLine x={100} stroke="#1a2744" strokeDasharray="3 3" label={{ position: 'top', value: 'Mean (100)', fill: '#1a2744', fontSize: 12 }} />
                  <Area type="monotone" dataKey="y" stroke="#2563eb" fill="#eff6ff" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our 30-Question Assessment</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Designed to evaluate general intelligence (g-factor) through three core cognitive domains.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 border-none shadow-none text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Logical Reasoning</CardTitle>
                <CardDescription className="text-base mt-2">Pattern recognition, deductive reasoning, and complex problem-solving without prior knowledge.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-50 border-none shadow-none text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Spatial Intelligence</CardTitle>
                <CardDescription className="text-base mt-2">Mental rotation, visualization of shapes, and understanding of spatial relationships.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-50 border-none shadow-none text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Numerical Assessment</CardTitle>
                <CardDescription className="text-base mt-2">Quantitative reasoning, number series, and mathematical logic capabilities.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboard & Blog Preview */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Today's Top 10</h2>
                <Zap className="h-5 w-5 text-amber-500" />
              </div>
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                {leaderboard?.slice(0, 10).map((entry, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-4 border-b last:border-0 ${idx < 3 ? 'bg-amber-50/30' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`font-bold w-6 text-center ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-slate-400' : idx === 2 ? 'text-amber-700' : 'text-slate-300'}`}>
                        #{idx + 1}
                      </div>
                      <div className="font-medium text-slate-700">{entry.userName || 'Anonymous'}</div>
                    </div>
                    <div className="font-bold text-primary">{entry.score}</div>
                  </div>
                )) || (
                  <div className="p-8 text-center text-slate-500">Loading today's scores...</div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Cognitive Science Blog</h2>
                <Button variant="link" asChild className="text-primary pr-0">
                  <Link href="/blog">View all articles <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "IQ vs EQ: Which Matters More?", tag: "Psychology", read: "5 min" },
                  { title: "The Flynn Effect Explained", tag: "Science", read: "8 min" },
                  { title: "Fluid vs. Crystallized Intelligence", tag: "Theory", read: "6 min" },
                  { title: "Brain Foods That Boost Cognitive Performance", tag: "Health", read: "4 min" }
                ].map((article, i) => (
                  <Link key={i} href={`/blog/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{article.tag}</span>
                          <span className="text-xs text-slate-400">{article.read} read</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                        <p className="text-slate-600 text-sm line-clamp-2">Discover the latest research and insights from the world of cognitive psychology and intelligence testing.</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Is this IQ test really free?", a: "Yes, our core 30-question assessment and your standard score result are completely free. We do not require registration or payment to see your results." },
              { q: "How accurate is this test?", a: "This test is designed following standard psychometric methodologies and is highly correlated with clinical assessments. However, it is strictly for educational purposes and cannot replace a professional evaluation by a licensed psychologist." },
              { q: "What is a 'normal' or average IQ score?", a: "The median IQ score is exactly 100. Approximately 68% of the population scores between 85 and 115 (one standard deviation), and 95% scores between 70 and 130." },
              { q: "Can I prepare or study for an IQ test?", a: "You cannot study specific knowledge for an IQ test, as it measures fluid intelligence (reasoning and problem-solving) rather than crystallized intelligence (learned facts). However, being well-rested and familiar with the format of logical puzzles can help you perform at your best." },
              { q: "Does IQ change with age?", a: "While your raw cognitive processing speed may change with age, your IQ score is relatively stable throughout adulthood because it compares your performance to others in your age group." },
              { q: "What is the Flynn Effect?", a: "The Flynn Effect is the observed rise in average IQ scores over the 20th century. Because of this, IQ tests must be re-standardized periodically to keep the average score at exactly 100." },
              { q: "What domains does this test cover?", a: "The test evaluates Logical Reasoning, Spatial Intelligence, and Numerical Assessment to form an accurate picture of your general intelligence factor (g-factor)." },
              { q: "How long does the test take?", a: "Most users complete the 30 questions in about 15 to 25 minutes. There is no strict time limit, but your speed is factored into the final score calculation." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-800">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* EQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-rose-100 mb-5">
              <Heart className="h-4 w-4" /> Emotional Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              IQ Measures the Mind. EQ Masters the World.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Emotional intelligence — the ability to perceive, understand, and regulate emotions — complements cognitive ability and predicts outcomes that IQ alone cannot explain.
            </p>
          </div>

          {/* IQ vs EQ comparison banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl bg-[#1a2744] text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-blue-200" />
                </div>
                <span className="text-xl font-extrabold">IQ</span>
                <span className="text-blue-300 text-sm font-medium">Cognitive Intelligence</span>
              </div>
              <p className="text-blue-100 leading-relaxed mb-5">
                Measures abstract reasoning, working memory, and processing speed. A strong predictor of academic achievement and performance in complex cognitive roles.
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                {["Strong predictor of academic grades", "Correlates with occupational complexity", "Relatively stable across adulthood", "Measured by standardised tests"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-rose-600 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-rose-200" />
                </div>
                <span className="text-xl font-extrabold">EQ</span>
                <span className="text-rose-300 text-sm font-medium">Emotional Intelligence</span>
              </div>
              <p className="text-rose-100 leading-relaxed mb-5">
                Measures the ability to identify, use, understand, and manage emotions effectively in oneself and others. A key differentiator in leadership and relationships.
              </p>
              <ul className="space-y-2 text-sm text-rose-200">
                {["Predicts leadership effectiveness", "Linked to relationship quality", "Grows with age and experience", "Develops through deliberate practice"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The 4 pillars of EQ */}
          <div className="mb-14">
            <h3 className="text-2xl font-extrabold text-slate-900 text-center mb-8">The Four Pillars of Emotional Intelligence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Eye,
                  title: "Perceiving Emotions",
                  color: "bg-purple-50 text-purple-600",
                  border: "border-purple-100 hover:border-purple-300",
                  desc: "Accurately reading emotional signals in faces, voices, images, and your own physical state. The foundation of all other EQ abilities."
                },
                {
                  icon: Zap,
                  title: "Using Emotions",
                  color: "bg-blue-50 text-blue-600",
                  border: "border-blue-100 hover:border-blue-300",
                  desc: "Harnessing emotional states to facilitate thought — directing attention, matching mood to task, and using feelings to enhance creativity and problem-solving."
                },
                {
                  icon: Lightbulb,
                  title: "Understanding Emotions",
                  color: "bg-amber-50 text-amber-600",
                  border: "border-amber-100 hover:border-amber-300",
                  desc: "Recognising how emotions evolve, blend, and transition. Understanding that frustration can become rage, or that pride and guilt can coexist."
                },
                {
                  icon: Smile,
                  title: "Managing Emotions",
                  color: "bg-green-50 text-green-600",
                  border: "border-green-100 hover:border-green-300",
                  desc: "Regulating your own emotional states and influencing the emotions of others constructively. The highest and most complex EQ ability."
                },
              ].map(({ icon: Icon, title, color, border, desc }) => (
                <div key={title} className={`bg-white rounded-xl border ${border} p-6 transition-all hover:shadow-md`}>
                  <div className={`w-11 h-11 rounded-lg ${color} flex items-center justify-center mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote + stat strip */}
          <div className="bg-white border rounded-2xl p-8 md:p-10 mb-10">
            <div className="md:flex md:items-center md:gap-12">
              <div className="flex-1 mb-6 md:mb-0">
                <blockquote className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug border-l-4 border-rose-400 pl-5">
                  "Where IQ gets you in the door, EQ determines how far you go — and who goes with you."
                </blockquote>
                <p className="text-sm text-slate-400 mt-3 pl-5">Synthesis of leadership and psychometric research</p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-5 md:grid-cols-1">
                {[
                  { stat: "58%", label: "of job performance explained by EQ in high-EQ roles" },
                  { stat: "r = 0.50", label: "correlation between EQ and leadership effectiveness" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="text-center bg-slate-50 rounded-xl px-6 py-4">
                    <div className="text-2xl font-extrabold text-rose-600 mb-1">{stat}</div>
                    <div className="text-xs text-slate-500 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA to blog article */}
          <div className="text-center">
            <p className="text-slate-500 mb-4 text-sm">Want to go deeper?</p>
            <Link href="/blog/iq-vs-eq-which-matters-more">
              <Button variant="outline" className="border-slate-300 hover:border-[#1a2744] hover:text-[#1a2744] gap-2">
                Read: IQ vs EQ — Which Matters More for Life Success? <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to find out?</h2>
          <p className="text-xl text-blue-100 mb-10 font-light">Join thousands of others who have discovered their cognitive potential today.</p>
          <Button asChild size="lg" className="h-14 px-10 text-lg bg-white text-primary hover:bg-blue-50 font-bold">
            <Link href="/test">Begin the Assessment</Link>
          </Button>
        </div>
      </section>

    </Layout>
  );
}