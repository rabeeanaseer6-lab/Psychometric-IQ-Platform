import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { useGetResultById, getGetResultByIdQueryKey } from '@workspace/api-client-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useParams, Link } from 'wouter';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { BrainCircuit, Clock, Target, Share2, RefreshCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const generateBellCurveData = () => {
  const data = [];
  const mean = 100;
  const stdDev = 15;
  for (let x = 55; x <= 145; x += 1) {
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    data.push({ x, y: y * 1000 });
  }
  return data;
};

const bellCurveData = generateBellCurveData();

type LocalResult = {
  id: number;
  userName: string | null;
  score: number;
  timeTaken: number;
  correctAnswers: number;
  totalQuestions: number;
  percentile: number;
  createdAt: string;
};

export default function Results() {
  usePageTitle('Your IQ Test Results & Percentile Score');
  const [copied, setCopied] = useState(false);
  const params = useParams();
  const isLocal = params.id === 'local';
  const id = isLocal ? 0 : parseInt(params.id || '0');

  const localResult: LocalResult | null = (() => {
    if (!isLocal) return null;
    try {
      const raw = sessionStorage.getItem('iq_local_result');
      return raw ? (JSON.parse(raw) as LocalResult) : null;
    } catch {
      return null;
    }
  })();

  const { data: apiResult, isLoading } = useGetResultById(id, {
    query: {
      enabled: !isLocal && !!id,
      queryKey: getGetResultByIdQueryKey(id),
    },
  });

  const result = isLocal ? localResult : apiResult;

  if (!isLocal && isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin text-primary"><BrainCircuit className="h-12 w-12" /></div>
        </div>
      </Layout>
    );
  }

  if (!result) {
    return (
      <Layout>
        <div className="text-center py-24">Result not found.</div>
      </Layout>
    );
  }

  const getClassification = (score: number) => {
    if (score >= 130) return "Very Superior";
    if (score >= 120) return "Superior";
    if (score >= 110) return "High Average";
    if (score >= 90) return "Average";
    if (score >= 80) return "Low Average";
    if (score >= 70) return "Borderline";
    return "Extremely Low";
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  return (
    <Layout>
      <div className="bg-slate-50 py-12 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Your Cognitive Profile</h1>
            <p className="text-lg text-slate-600">Based on standard psychometric modeling</p>
          </div>

          <Card className="border-0 shadow-lg mb-8 overflow-hidden">
            <div className="bg-primary p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
              <div className="relative z-10">
                <div className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-4">Full Scale IQ Score</div>
                <div className="text-7xl md:text-8xl font-black mb-4 tracking-tighter">{result.score}</div>
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                  Classification: {getClassification(result.score)}
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                <div>
                  <div className="text-sm text-slate-500 uppercase font-semibold tracking-wider mb-2 flex items-center justify-center"><Target className="h-4 w-4 mr-2" /> Percentile</div>
                  <div className="text-3xl font-bold text-slate-900">{result.percentile.toFixed(1)}%</div>
                  <div className="text-xs text-slate-500 mt-1">Higher than {result.percentile.toFixed(1)}% of population</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-semibold tracking-wider mb-2 flex items-center justify-center"><BrainCircuit className="h-4 w-4 mr-2" /> Accuracy</div>
                  <div className="text-3xl font-bold text-slate-900">{result.correctAnswers} / {result.totalQuestions}</div>
                  <div className="text-xs text-slate-500 mt-1">Correct answers</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase font-semibold tracking-wider mb-2 flex items-center justify-center"><Clock className="h-4 w-4 mr-2" /> Time</div>
                  <div className="text-3xl font-bold text-slate-900">{formatTime(result.timeTaken)}</div>
                  <div className="text-xs text-slate-500 mt-1">Total time elapsed</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Your Position on the Bell Curve</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bellCurveData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
                      <XAxis dataKey="x" type="number" domain={[55, 145]} ticks={[70, 85, 100, 115, 130]} />
                      <YAxis hide />
                      <Area type="monotone" dataKey="y" stroke="#e2e8f0" fill="#f1f5f9" strokeWidth={2} />
                      <ReferenceLine x={100} stroke="#94a3b8" strokeDasharray="3 3" />
                      <ReferenceLine x={result.score} stroke="#2563eb" strokeWidth={3} label={{ position: 'top', value: 'You', fill: '#2563eb', fontWeight: 'bold' }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="h-12 px-8"
                  onClick={async () => {
                    const shareUrl = window.location.href.includes('/results/local')
                      ? window.location.origin + '/test'
                      : window.location.href;
                    const shareData = {
                      title: `My IQ Score: ${result.score}`,
                      text: `I scored ${result.score} on the Free IQ Test! I'm in the top ${100 - result.percentile}% of test takers. Try it yourself:`,
                      url: shareUrl,
                    };
                    if (navigator.share && navigator.canShare?.(shareData)) {
                      try { await navigator.share(shareData); } catch { /* user cancelled */ }
                    } else {
                      await navigator.clipboard.writeText(shareUrl);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2500);
                    }
                  }}
                >
                  {copied
                    ? <><Check className="mr-2 h-4 w-4 text-green-500" /> Link Copied!</>
                    : <><Share2 className="mr-2 h-4 w-4" /> Share Result</>
                  }
                </Button>
                <Button asChild className="h-12 px-8">
                  <Link href="/test"><RefreshCcw className="mr-2 h-4 w-4" /> Retake Assessment</Link>
                </Button>
              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </Layout>
  );
}
