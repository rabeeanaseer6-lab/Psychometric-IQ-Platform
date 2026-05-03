import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ExternalLink, Github, BarChart2, Layers, Database, Cpu, Globe, Linkedin, ArrowUpRight, Code2, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ── tiny hook: animate number from 0 to target on mount ── */
function useCounter(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return value;
}

function StatCard({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const count = useCounter(value);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-blue-300 text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

const focuses = [
  {
    icon: Layers,
    label: 'SaaS & Web Infrastructure',
    body: '25+ niche web assets independently built and managed — from architecture through to monetization.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    text: 'text-violet-700',
  },
  {
    icon: Database,
    label: 'Analytics & Data Science',
    body: 'SEO architecture, user behavior modeling, and analytics pipelines driving continuous performance optimization.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-700',
  },
  {
    icon: Cpu,
    label: 'AI & Automation',
    body: 'Predictive systems, automation frameworks, and AI-integrated workflows published on GitHub and Kaggle.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
  },
  {
    icon: Globe,
    label: 'Scalable Digital Ecosystems',
    body: 'Engineering self-optimizing platforms where AI and data continuously enhance growth and real-world impact.',
    color: 'from-orange-500 to-rose-600',
    bg: 'bg-orange-50',
    text: 'text-orange-700',
  },
  {
    icon: Code2,
    label: 'Full-Stack Engineering',
    body: 'End-to-end web development combining modern frameworks, API design, and cloud-scale deployment strategies.',
    color: 'from-pink-500 to-fuchsia-600',
    bg: 'bg-pink-50',
    text: 'text-pink-700',
  },
  {
    icon: TrendingUp,
    label: 'Revenue-Driven Systems',
    body: 'Transforming websites from static builds into automated, performance-driven, monetization-optimized platforms.',
    color: 'from-amber-500 to-yellow-600',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
  },
];

const socials = [
  {
    href: 'https://rabeeanaseer.online',
    label: 'Portfolio',
    sub: 'rabeeanaseer.online',
    icon: ExternalLink,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    href: 'https://novatratech.online',
    label: 'Company',
    sub: 'novatratech.online',
    icon: ExternalLink,
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    href: 'https://www.linkedin.com/in/rabeea-naseer-045b4a337/',
    label: 'LinkedIn',
    sub: 'Rabeea Naseer',
    icon: Linkedin,
    gradient: 'from-sky-600 to-blue-700',
  },
  {
    href: 'https://github.com/rabeeanaseer6-lab',
    label: 'GitHub',
    sub: 'rabeeanaseer6-lab',
    icon: Github,
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    href: 'https://kaggle.com/rabeeanaseer',
    label: 'Kaggle',
    sub: 'Datasets & Notebooks',
    icon: BarChart2,
    gradient: 'from-cyan-600 to-teal-700',
  },
];

const bio = [
  'Rabeea Naseer is an AI & data-driven systems developer and the founder of NovatraTech, focused on building scalable SaaS products, automated web infrastructures, and data-intelligent, revenue-generating digital ecosystems.',
  'She has independently developed and managed 25+ niche web assets, combining full-stack engineering with SEO architecture, data analytics, and user behavior modeling to transform websites into automated, performance-driven systems rather than static builds.',
  'Her work sits at the intersection of software engineering, search intelligence, and applied data science — integrating analytics pipelines and AI automation to optimize decision-making, user flows, and scalable growth.',
  'She actively develops and publishes projects on GitHub and Kaggle, focusing on applied analytics, predictive systems, and automation frameworks.',
  'Her long-term focus is on engineering intelligent, self-optimizing digital ecosystems, where AI and data continuously enhance performance, scalability, and real-world impact.',
];

export default function Author() {
  usePageTitle('About the Author — Rabeea Naseer, Founder of NovatraTech');

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0d1b3e]">
        {/* animated gradient orbs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
        <div
          className="absolute top-10 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #06b6d4, transparent)' }}
        />

        <div className="relative container mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Avatar with ring animation */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-cyan-400 blur-md opacity-60 animate-pulse" />
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 flex items-center justify-center text-4xl font-extrabold text-white shadow-2xl border-4 border-white/10 select-none">
                RN
              </div>
              {/* online badge */}
              <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#0d1b3e] shadow-lg" />
            </div>

            {/* Copy */}
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">
                About the Author &amp; Founder
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Rabeea{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Naseer
                </span>
              </h1>
              <p className="text-blue-200 text-base md:text-lg leading-relaxed max-w-2xl">
                Founder @ NovatraTech &nbsp;·&nbsp; AI &amp; Data-Driven Systems Developer building scalable SaaS, automation, and data-intelligent web ecosystems
              </p>

              {/* Social pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                {socials.map(({ href, label, icon: Icon, gradient }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-12">
            <StatCard value={25} suffix="+" label="Web Assets Built" />
            <StatCard value={5} suffix="+" label="Years Building Systems" />
            <StatCard value={100} suffix="%" label="Independent &amp; Bootstrapped" />
          </div>
        </div>
      </div>

      {/* ── Bio ──────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
            <h2 className="text-2xl font-bold text-slate-900">Background</h2>
          </div>
          <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">
            {bio.map((para, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    Rabeea Naseer is an AI &amp; data-driven systems developer and the founder of{' '}
                    <a
                      href="https://novatratech.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      NovatraTech
                    </a>
                    , focused on building scalable SaaS products, automated web infrastructures, and data-intelligent, revenue-generating digital ecosystems.
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── Areas of Focus ───────────────────────────────── */}
      <div className="bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
            <h2 className="text-2xl font-bold text-slate-900">Areas of Focus</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focuses.map(({ icon: Icon, label, body, color, bg, text }) => (
              <div
                key={label}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* hover gradient glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${color}`} />
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${text}`} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Connect cards ────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
            <h2 className="text-2xl font-bold text-slate-900">Connect &amp; Explore</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map(({ href, label, sub, icon: Icon, gradient }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${gradient}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm">{label}</p>
                  <p className="text-slate-400 text-xs truncate mt-0.5">{sub}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA strip ────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1a2744] via-[#0f3460] to-[#1a2744]">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)' }} />
        <div className="relative container mx-auto max-w-5xl px-4 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-2xl font-extrabold text-white">Explore Rabeea's work</p>
            <p className="text-blue-300 mt-1">Portfolio, company, and open-source projects</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://rabeeanaseer.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1a2744] font-bold rounded-xl px-6 py-3 text-sm hover:bg-blue-50 transition-colors shadow-lg"
            >
              <ExternalLink className="h-4 w-4" />
              Portfolio
            </a>
            <a
              href="https://novatratech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl px-6 py-3 text-sm border border-white/20 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              NovatraTech
            </a>
            <a
              href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl px-6 py-3 text-sm border border-white/20 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
