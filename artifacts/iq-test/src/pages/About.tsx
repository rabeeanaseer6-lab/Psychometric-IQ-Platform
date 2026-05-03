import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Brain, Users, ExternalLink, Github, BarChart2 } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function About() {
  usePageTitle('About Us — Our Mission, Methodology & Research Team');
  return (
    <Layout>
      <div className="py-16 md:py-24 min-h-screen bg-slate-50">
        <div className="container mx-auto max-w-4xl px-4">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About FreeIQTest</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to democratizing access to professional-grade cognitive assessment tools, empowering individuals with self-knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Scientific Rigor</h3>
                <p className="text-sm text-slate-600">Built upon established psychometric frameworks and continuously calibrated against global population data.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Culture Fair</h3>
                <p className="text-sm text-slate-600">Our assessment minimizes verbal and cultural biases, focusing purely on logic, pattern recognition, and spatial intelligence.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Accessible</h3>
                <p className="text-sm text-slate-600">We believe intelligence metrics should not be gatekept by expensive clinical fees or restrictive organizations.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Methodology</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The FreeIQTest platform utilizes a proprietary algorithm based on Item Response Theory (IRT). Rather than simply counting correct answers, our system evaluates performance based on the statistical difficulty of each question answered correctly.
              </p>
              <p>
                Our 30-question format was carefully selected to provide an optimal balance between assessment accuracy and test-taker fatigue. The test specifically measures the <em>g-factor</em> (general intelligence) by assessing three distinct cognitive domains:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                <li><strong>Matrix Reasoning:</strong> The ability to identify underlying logical rules in visual patterns.</li>
                <li><strong>Quantitative Reasoning:</strong> The capacity to manipulate numbers and comprehend mathematical logic.</li>
                <li><strong>Spatial Visualization:</strong> The ability to mentally rotate and manipulate three-dimensional objects.</li>
              </ul>
              <p className="mt-6">
                All scores are normalized to a mean of 100 with a standard deviation of 15, aligning with the universally accepted scale used by the Wechsler Adult Intelligence Scale (WAIS) and Stanford-Binet tests.
              </p>
            </div>
          </div>

          {/* About the Author */}
          <div className="bg-[#1a2744] rounded-2xl p-8 md:p-12 shadow-lg text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-6">About the Author &amp; Founder</p>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-3xl font-extrabold text-white shadow-lg select-none border-4 border-white/10">
                  RN
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Rabeea Naseer</h2>
                <p className="text-blue-300 font-medium mb-5">
                  Founder @ NovatraTech &nbsp;·&nbsp; AI &amp; Data-Driven Systems Developer building scalable SaaS, automation, and data-intelligent web ecosystems
                </p>

                <div className="space-y-3 text-slate-300 leading-relaxed text-sm md:text-base">
                  <p>
                    Rabeea Naseer is an AI &amp; data-driven systems developer and the founder of NovatraTech, focused on building scalable SaaS products, automated web infrastructures, and data-intelligent, revenue-generating digital ecosystems.
                  </p>
                  <p>
                    She has independently developed and managed 25+ niche web assets, combining full-stack engineering with SEO architecture, data analytics, and user behavior modeling to transform websites into automated, performance-driven systems rather than static builds.
                  </p>
                  <p>
                    Her long-term focus is on engineering intelligent, self-optimizing digital ecosystems, where AI and data continuously enhance performance, scalability, and real-world impact.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href="https://rabeeanaseer.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/20"
                  >
                    <ExternalLink className="h-4 w-4 text-blue-300" />
                    rabeeanaseer.online
                  </a>
                  <a
                    href="https://novatratech.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/20"
                  >
                    <ExternalLink className="h-4 w-4 text-blue-300" />
                    novatratech.online
                  </a>
                  <a
                    href="https://github.com/rabeeanaseer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/20"
                  >
                    <Github className="h-4 w-4 text-blue-300" />
                    GitHub
                  </a>
                  <a
                    href="https://kaggle.com/rabeeanaseer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/20"
                  >
                    <BarChart2 className="h-4 w-4 text-blue-300" />
                    Kaggle
                  </a>
                  <a
                    href="/author"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg px-4 py-2 text-sm font-semibold text-white"
                  >
                    Full Profile &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}