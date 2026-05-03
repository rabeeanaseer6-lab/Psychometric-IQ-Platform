import { Layout } from '@/components/Layout';
import { Terminal } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

const updates = [
  {
    version: "v2.1.0",
    date: "October 24, 2023",
    title: "Algorithm Refinement",
    changes: [
      "Adjusted weightings for spatial reasoning questions to better align with WAIS-IV standards.",
      "Added 5 new items to the numerical reasoning question bank.",
      "Improved performance of the interactive bell curve visualization."
    ]
  },
  {
    version: "v2.0.0",
    date: "August 12, 2023",
    title: "Major Methodology Update",
    changes: [
      "Completely overhauled scoring algorithm to implement modern Item Response Theory (IRT).",
      "Introduced detailed percentile breakdowns in the results view.",
      "Standard deviation strictly enforced at 15 points with a mean of 100.",
      "Removed culturally biased verbal questions in favor of pure logic."
    ]
  },
  {
    version: "v1.4.2",
    date: "May 03, 2023",
    title: "Question Bank Expansion",
    changes: [
      "Added 15 new logical reasoning matrices.",
      "Fixed an edge case where extreme outliers were not correctly mapped to the distribution curve.",
      "UI improvements for mobile devices."
    ]
  },
  {
    version: "v1.0.0",
    date: "January 15, 2023",
    title: "Platform Launch",
    changes: [
      "Initial release of FreeIQTest.online.",
      "Basic 30-question format established.",
      "Global leaderboard functionality deployed."
    ]
  }
];

export default function Updates() {
  usePageTitle('Platform Updates & Changelog');
  return (
    <Layout>
      <div className="bg-white py-16 md:py-24 min-h-screen">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center">
              <Terminal className="mr-4 h-8 w-8 text-primary" />
              Changelog
            </h1>
            <p className="text-lg text-slate-600">
              Updates to our psychometric algorithms, question banks, and platform features.
            </p>
          </div>

          <div className="space-y-12">
            {updates.map((update, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-white" />
                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-bold text-slate-900">{update.title}</h2>
                  <div className="flex items-center space-x-3 mt-1 sm:mt-0">
                    <span className="font-mono text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{update.version}</span>
                    <span className="text-sm text-slate-500">{update.date}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600 marker:text-slate-400">
                  {update.changes.map((change, j) => (
                    <li key={j} className="leading-relaxed">{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}