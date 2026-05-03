import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase, GraduationCap, Heart, Zap, Globe, Users, TrendingUp, Coffee, Laptop, Shield } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const openings = [
  {
    title: "Senior Psychometrician",
    department: "Research & Development",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    level: "Senior",
    description: "Lead the development and validation of new cognitive assessment modules. You will design and analyze large-scale item response studies, calibrate our adaptive testing algorithm, and collaborate closely with our engineering team to translate psychometric models into production systems.",
    requirements: [
      "PhD in Psychometrics, Educational Psychology, or Quantitative Psychology",
      "5+ years of experience with Item Response Theory (IRT) and Classical Test Theory (CTT)",
      "Proficiency in R or Python for statistical modeling",
      "Experience with large-scale normative data collection and standardization",
      "Familiarity with CAT (Computerized Adaptive Testing) systems is a strong plus",
    ],
  },
  {
    title: "Full-Stack Engineer (React / Node.js)",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Build and scale the core platform used by millions of test-takers globally. You'll work on everything from the real-time test delivery engine and scoring pipeline to performance dashboards and public-facing APIs. We move fast, write real tests, and care deeply about the user experience.",
    requirements: [
      "4+ years of experience with React and TypeScript",
      "Strong Node.js / Express backend skills",
      "Experience with PostgreSQL and ORM tooling (Drizzle, Prisma, etc.)",
      "Comfort working in a monorepo (pnpm workspaces or similar)",
      "Understanding of REST API design principles",
    ],
  },
  {
    title: "Cognitive Neuroscience Writer",
    department: "Content & Education",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    description: "Create authoritative, deeply researched content covering intelligence research, cognitive neuroscience, and psychometrics. You'll write long-form articles, explainers, and educational guides that make complex science accessible to a global audience. Your work will be read by millions and shape how people understand their own minds.",
    requirements: [
      "Bachelor's or Master's degree in Neuroscience, Psychology, or Cognitive Science",
      "Demonstrated portfolio of science communication work",
      "Ability to synthesize primary research papers into engaging long-form writing",
      "Strong SEO understanding is a significant plus",
      "Exceptional attention to accuracy — every claim must be sourced",
    ],
  },
  {
    title: "Data Scientist — Cognitive Analytics",
    department: "Data & Analytics",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    level: "Senior",
    description: "Analyze anonymized global test-taking patterns to improve our scoring algorithms, identify question bias, maintain demographic normalization baselines, and surface insights from tens of millions of completed assessments. You will own the data pipeline from raw test logs to the published leaderboard statistics.",
    requirements: [
      "MS or PhD in Statistics, Data Science, or a quantitative field",
      "Deep proficiency in Python (pandas, scikit-learn, statsmodels)",
      "Experience with large-scale PostgreSQL or BigQuery datasets",
      "Background in survey methodology or psychometrics is highly valued",
      "Comfort communicating statistical nuance to non-technical stakeholders",
    ],
  },
  {
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    description: "Study how test-takers interact with the platform to reduce anxiety, improve clarity, and maximize the validity of results. You'll run usability studies, analyze behavioral data, and translate findings into concrete product recommendations. At FreeIQTest, UX research is not a formality — it directly shapes assessment design.",
    requirements: [
      "3+ years of UX Research experience",
      "Experience with both qualitative (interviews, usability tests) and quantitative (surveys, clickstream) methods",
      "Ability to translate findings into actionable design recommendations",
      "Background in cognitive psychology or human factors is a strong plus",
      "Familiarity with tools like Maze, Hotjar, or FullStory",
    ],
  },
  {
    title: "Community & Partnerships Manager",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    description: "Grow and nurture our global community of curious minds. You'll manage our social channels, build relationships with psychology educators and researchers, coordinate guest content programs, and develop strategic partnerships with universities, cognitive training platforms, and mental wellness organizations.",
    requirements: [
      "3+ years in community management, partnerships, or growth marketing",
      "A genuine personal interest in psychology, neuroscience, or intelligence research",
      "Excellent written and verbal communication skills",
      "Experience with creator/influencer programs is a significant plus",
      "Data-driven — comfortable tracking and reporting on growth metrics",
    ],
  },
];

const benefits = [
  { icon: Laptop, title: "Remote-First Culture", description: "Work from anywhere in the world. We have team members in 18 countries and believe the best talent shouldn't have to relocate." },
  { icon: GraduationCap, title: "Learning Budget", description: "$3,000 annual budget for courses, books, conferences, and certifications. We expect you to grow, and we invest in that." },
  { icon: Heart, title: "Comprehensive Health", description: "Full medical, dental, and vision coverage for you and your dependents, wherever you are in the US or our supported regions." },
  { icon: Zap, title: "Async by Default", description: "We don't believe in meeting culture. Most of our collaboration happens asynchronously, giving you uninterrupted deep work time." },
  { icon: Coffee, title: "Home Office Stipend", description: "$1,500 one-time setup budget plus $100/month ongoing for coworking space, peripherals, or anything that makes your environment work better for you." },
  { icon: TrendingUp, title: "Equity Participation", description: "Every full-time employee receives stock options. When the platform grows, you grow with it. This is your company too." },
  { icon: Globe, title: "Mission-Driven Work", description: "Democratizing access to professional cognitive assessment is a real, meaningful goal. Our users frequently tell us this test changed how they understand themselves." },
  { icon: Shield, title: "Sabbatical Policy", description: "After 4 years, take a 4-week paid sabbatical to recharge, travel, study, or pursue something you've been putting off." },
];

const values = [
  { title: "Intellectual Honesty", body: "We acknowledge the complexity and limitations of intelligence research. We do not overstate our claims. When the science is uncertain, we say so. This ethos runs through everything from our disclaimer to our hiring conversations." },
  { title: "Radical Transparency", body: "Our methodology is publicly documented. Our scoring algorithm is explained in full. We believe users deserve to understand exactly what they are being measured against. Hidden black boxes have no place here." },
  { title: "User Dignity First", body: "Intelligence is a sensitive topic. Our test is designed to empower, never to demean. Every design decision, every piece of copy, and every result presentation is reviewed through the lens of how it makes the user feel." },
  { title: "Scientific Rigor Without Elitism", body: "We believe the highest standards of psychometric validity can coexist with being freely accessible to everyone. Professional-grade does not have to mean expensive or exclusive." },
];

export default function Careers() {
  usePageTitle('Careers — Join the FreeIQTest Research Team');
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-500/30 text-sm px-4 py-1.5">
              {openings.length} Open Positions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Build the Future of<br />Cognitive Science
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join a small, focused team of psychometricians, engineers, and researchers working to make professional-grade intelligence assessment accessible to every person on the planet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1a2744] hover:bg-blue-50 font-semibold px-8" asChild>
                <a href="#openings">View Open Roles</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8" asChild>
                <a href="#culture">Our Culture</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-50 border-b">
          <div className="container mx-auto max-w-5xl px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-extrabold text-[#1a2744]">2.4M+</div>
                <div className="text-sm text-slate-500 mt-1">Tests Completed</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#1a2744]">18</div>
                <div className="text-sm text-slate-500 mt-1">Countries Represented</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#1a2744]">38</div>
                <div className="text-sm text-slate-500 mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#1a2744]">4.9★</div>
                <div className="text-sm text-slate-500 mt-1">Glassdoor Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">

          {/* Values */}
          <div id="culture" className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What We Believe</h2>
            <p className="text-slate-600 mb-10 max-w-2xl">These are not aspirational slogans — they are the active standards against which we hold our work and each other every day.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map(v => (
                <Card key={v.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Benefits & Perks</h2>
            <p className="text-slate-600 mb-10 max-w-2xl">We want you to do the best work of your career here. That means investing in your wellbeing, your growth, and your environment.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(b => (
                <Card key={b.title} className="border shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <b.icon className="h-5 w-5 text-[#1a2744]" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm">{b.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Roles */}
          <div id="openings">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Open Positions</h2>
            <p className="text-slate-600 mb-10 max-w-2xl">We hire slowly and deliberately. Every person here has a significant impact. If you see a role that fits, apply with confidence — we read every submission carefully.</p>
            <div className="space-y-6">
              {openings.map(job => (
                <Card key={job.title} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-7">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500"><Briefcase className="h-3 w-3" />{job.department}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" />{job.location}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3 w-3" />{job.type}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge variant="secondary">{job.level}</Badge>
                        <Button size="sm" className="bg-[#1a2744] hover:bg-[#0f3460]">Apply Now</Button>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.description}</p>
                    <div>
                      <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Requirements</div>
                      <ul className="space-y-1">
                        {job.requirements.map(r => (
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* No fit CTA */}
          <div className="mt-16 bg-slate-50 border rounded-2xl p-8 md:p-12 text-center">
            <Users className="h-10 w-10 text-[#1a2744] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Don't See the Right Role?</h3>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              We hire for talent, not just open slots. If you believe you can contribute to our mission in a meaningful way, send us a brief note about who you are and what you'd build here.
            </p>
            <Button className="bg-[#1a2744] hover:bg-[#0f3460]" size="lg" asChild>
              <a href="/contact">Send an Open Application</a>
            </Button>
          </div>

        </div>
      </div>
    </Layout>
  );
}
