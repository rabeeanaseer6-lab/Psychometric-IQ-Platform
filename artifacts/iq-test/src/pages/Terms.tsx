import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the FreeIQTest.online website and its associated services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms in their entirety, you must not access or use the Service.

These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the Service following any changes constitutes acceptance of the revised Terms. The "Last Updated" date at the top of this page reflects when the most recent revision was made.`
  },
  {
    id: "purpose",
    title: "2. Purpose and Nature of the Service",
    content: `FreeIQTest.online provides a free, online cognitive assessment tool designed for educational and personal development purposes. The Service is intended to offer users a broad estimate of their cognitive ability profile, expressed as an IQ score on the standard scale (mean = 100, standard deviation = 15).

The Service is explicitly NOT:
- A clinical diagnostic tool
- A psychological evaluation under any professional or regulatory standard
- A substitute for assessment by a licensed psychologist, neuropsychologist, or other qualified mental health professional
- A legally recognized measure of intellectual disability or giftedness for any official or institutional purpose

No medical, psychological, educational, or occupational decision should be made based solely or primarily on a score produced by this Service. See our full Disclaimer for additional information about the limitations of the Service.`
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content: `The Service is available to users who are 13 years of age or older. Users between the ages of 13 and 17 should use the Service only with the knowledge and permission of a parent or legal guardian. By using the Service, you represent and warrant that you meet this age requirement.

The Service is intended for personal, non-commercial use. Users may not access the Service through automated means, bots, scrapers, or other programmatic tools without our express written permission.`
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `All content on FreeIQTest.online — including but not limited to the test questions, scoring algorithms, written articles, blog posts, wiki entries, visual design, graphics, code, and trademarks — is the exclusive intellectual property of FreeIQTest.online or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes. This license does not include:
- The right to copy, reproduce, or distribute any test items, articles, or other content
- The right to reverse-engineer the scoring algorithm or adaptive testing system
- The right to create derivative works based on our content without express written permission
- The right to use our trademarks, logos, or brand assets without permission

Any unauthorized use of our intellectual property may result in legal action.`
  },
  {
    id: "user-conduct",
    title: "5. User Conduct",
    content: `You agree to use the Service only for lawful purposes and in a manner consistent with all applicable laws and regulations. Specifically, you agree not to:

- Attempt to circumvent, bypass, or manipulate the test questions, timing mechanism, or scoring system in any way
- Use automated tools, artificial intelligence, or assistance from other persons during the test to artificially inflate your score
- Represent your FreeIQTest score as an officially administered or clinically supervised IQ test result
- Harass, threaten, defame, or otherwise harm other users or members of our staff
- Upload or transmit viruses, malware, or any other code designed to interfere with the Service
- Use the Service to collect information about other users without their consent
- Attempt to gain unauthorized access to our systems, databases, or other users' accounts
- Use the Service in any way that could damage, overburden, or impair our servers or networks

We reserve the right to terminate or suspend access to the Service for any user who violates these conduct standards.`
  },
  {
    id: "results",
    title: "6. Test Results and Data",
    content: `When you complete a test on FreeIQTest.online, your responses, calculated score, time taken, and any optional identifier you provided (name or location) are stored in our database. By submitting your test, you grant FreeIQTest.online a perpetual, worldwide, royalty-free license to use your anonymized test data for:

- Maintaining and recalibrating our normative scoring database
- Conducting psychometric research to improve the quality and validity of the assessment
- Producing aggregate statistical analyses and publications
- Displaying your (optional) name/location and score on the public leaderboard

Your data is never sold to third parties. Individual test results are not linked to any personally identifiable information beyond the optional name or location you choose to provide. See our Privacy Policy for complete details on data handling.

Test results are stored indefinitely for normative purposes but can be requested for deletion by contacting privacy@freeiqtest.online. Note that anonymized aggregate data from your test session may be retained even after individual result deletion.`
  },
  {
    id: "leaderboard",
    title: "7. Public Leaderboard",
    content: `FreeIQTest.online maintains a public daily leaderboard displaying the top 10 scores alongside any name or location identifier voluntarily provided by the user. By providing a name or location identifier at the start of the test, you consent to its display on this public leaderboard in association with your score.

You are not required to provide any name or location information. If you prefer to take the test anonymously, you may leave the identifier field blank, and your score will not appear on the public leaderboard.

FreeIQTest.online reserves the right to remove any leaderboard entry that contains offensive, misleading, or inappropriate content.`
  },
  {
    id: "disclaimers",
    title: "8. Disclaimers of Warranty",
    content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.

FreeIQTest.online does not warrant that:
- The Service will be uninterrupted, timely, secure, or error-free
- The results obtained from using the Service will be accurate, reliable, or valid for any specific purpose
- Any errors in the Service will be corrected
- The Service or its servers are free of viruses or other harmful components

Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.`
  },
  {
    id: "limitation",
    title: "9. Limitation of Liability",
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FREEIQTEST.ONLINE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM:

- Your use of or inability to use the Service
- Any reliance placed on the accuracy or completeness of any content on the Service
- Any decision made on the basis of a score produced by the Service
- Unauthorized access to or alteration of your test data
- Any other matter relating to the Service

Our total liability to you for any claim arising from your use of the Service shall not exceed $100 USD.`
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless FreeIQTest.online, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.`
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Any dispute arising from or relating to these Terms or your use of the Service shall first be subject to good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association (AAA), with proceedings conducted in San Francisco, California.

You waive any right to participate in a class action lawsuit or class-wide arbitration against FreeIQTest.online.`
  },
  {
    id: "termination",
    title: "12. Termination",
    content: `FreeIQTest.online reserves the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.

Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`
  },
  {
    id: "contact",
    title: "13. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us at:

FreeIQTest.online
1200 Tech Boulevard
San Francisco, CA 94107
Email: legal@freeiqtest.online`
  },
];

export default function Terms() {
  usePageTitle('Terms of Service');
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto max-w-3xl px-4">

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
            <p className="text-sm text-slate-500">Last updated: April 1, 2025 &nbsp;|&nbsp; Effective: April 1, 2025</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Please read these Terms of Service carefully before using FreeIQTest.online. These terms govern your access to and use of the platform.
            </p>
          </div>

          {/* TOC */}
          <nav className="bg-slate-50 border rounded-xl p-6 mb-12">
            <div className="text-sm font-semibold text-slate-900 mb-3">Table of Contents</div>
            <ol className="space-y-1.5">
              {sections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-[#1a2744] hover:underline">{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-slate max-w-none space-y-12">
            {sections.map(s => (
              <section key={s.id} id={s.id} className="scroll-mt-20">
                <h2 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">{s.content}</div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
