import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `FreeIQTest.online ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, how we protect it, and what choices you have regarding your data.

We have designed our platform with privacy as a core principle, not an afterthought. Our approach is data minimization: we collect only what is strictly necessary to provide the Service, and we do not monetize personal data in any form. This policy applies to all information collected through our website at freeiqtest.online and all associated services.`
  },
  {
    id: "information-collected",
    title: "1. Information We Collect",
    content: `We collect different types of information depending on how you interact with our Service.

1.1 Information You Provide Voluntarily

Name or Location Identifier: Before beginning the test, you may optionally provide a name or location (e.g., "Alex from London"). This is entirely optional and is used solely for display on our public daily leaderboard. You are not required to provide any real information; a pseudonym or a city name is sufficient.

Contact Form Data: If you submit a message through our Contact page, we collect your name, email address, subject, and message content. This information is used only to respond to your inquiry and is not stored in any marketing database.

1.2 Information Collected Automatically

Test Response Data: When you complete our assessment, we store your responses to each question, the total time taken, the number of correct answers, your calculated IQ score, and the percentile. This data is stored in association with any optional identifier you provided.

Usage Analytics: We collect anonymized, aggregated analytics data to understand how visitors use the Service. This includes page views, session duration, browser type, approximate geographic region (country-level only), and test completion rates. This data is never linked to individual users or test results.

Technical Logs: Our servers automatically log standard access information including IP addresses, request timestamps, HTTP methods, and response codes. These logs are retained for 30 days for security and operational purposes and are then automatically deleted.`
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `2.1 Providing the Service

Your test data (responses, score, time, correct answers) is used to calculate and display your IQ score and percentile. This is the primary purpose of the data collection and requires no further consent — it is the core function of the Service.

2.2 Normative Database Maintenance

Anonymized test data is incorporated into our normative scoring database, which is used to maintain the accuracy of our scoring algorithm. This database is recalibrated quarterly to account for population-level trends including the Flynn Effect. No individual is identifiable in this database — data is used only in aggregate statistical form.

2.3 Public Leaderboard

If you provided a name or location, your score may appear on our public daily leaderboard, limited to the top 10 scores of the day. This use is only possible because you voluntarily provided an identifier. Anonymous results never appear on the leaderboard.

2.4 Service Improvement

Aggregate usage analytics and technical logs are used to identify performance issues, improve page load times, optimize the test delivery experience, and make decisions about content and feature development.

2.5 Responding to Inquiries

Contact form data is used exclusively to respond to your message. We do not add contact form submitters to any mailing list or marketing database.

2.6 Legal Compliance and Safety

We may use or disclose information as required by applicable law, court order, or regulatory requirement, or when necessary to protect the rights, property, or safety of FreeIQTest.online, its users, or the public.`
  },
  {
    id: "data-we-do-not-collect",
    title: "3. Data We Explicitly Do Not Collect",
    content: `We believe it is as important to be clear about what we do not do as what we do. FreeIQTest.online does not:

- Require account creation, email registration, or passwords
- Collect payment information of any kind (the Service is free)
- Track your location beyond the country level for analytics
- Use advertising cookies, tracking pixels, or behavioral profiling technologies
- Sell, rent, lease, or otherwise transfer your individual test data to third parties for commercial purposes
- Share your data with social media platforms
- Conduct identity verification or link test results to real-world identity
- Send marketing emails or newsletters (we have no email list)
- Use facial recognition, keystroke analysis, or biometric data of any kind`
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Disclosure",
    content: `4.1 Service Providers

We use a limited number of third-party service providers to operate the Service (such as cloud hosting infrastructure). These providers are contractually prohibited from using your data for any purpose other than fulfilling their service obligations to us and are required to maintain appropriate security standards.

4.2 Aggregated Research Data

Fully anonymized, aggregated statistical data may be published in our research blog or shared with academic collaborators. Examples: "The average score across all tests in 2024 was 101.3" or "Test completion rate by age group." Individual results are never shared in this context.

4.3 Legal Requirements

We may disclose information when required to do so by law, including in response to a valid court order, subpoena, or government regulation. We will notify affected users of such requests to the extent permitted by law.

4.4 Business Transfers

In the event of a merger, acquisition, or sale of all or a portion of our assets, user data may be transferred to the acquiring entity. We will notify users via a prominent notice on our website prior to any such transfer and will require the acquiring entity to honor this Privacy Policy.`
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: `Test results (including score, time, correct answers, and optional identifier) are stored indefinitely in our normative database in anonymized form. This indefinite retention is necessary to maintain the statistical validity of our scoring baselines — without a growing and historical normative sample, scores become less accurate.

Technical server logs are retained for 30 days and then automatically deleted.

Contact form submissions are retained for a maximum of 12 months in our support inbox and then deleted.

If you wish to have your specific test result removed from our database, please contact us at privacy@freeiqtest.online with your result ID (visible on your results page). We will delete your identified record within 14 business days. Note that anonymized aggregate statistics derived from your data may persist, as they cannot be isolated for deletion.`
  },
  {
    id: "security",
    title: "6. Security",
    content: `We take the security of your data seriously and implement industry-standard technical and organizational measures to protect it. Our security measures include:

- All data is transmitted over HTTPS/TLS encrypted connections
- Our PostgreSQL database is hosted on infrastructure with encryption at rest
- Access to the production database is restricted to authorized personnel via role-based access controls
- We conduct regular security reviews and dependency audits
- Server logs containing IP addresses are automatically purged after 30 days
- We do not store passwords (no user accounts exist)

No method of data transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. In the event of a data breach affecting user privacy, we will notify affected users as required by applicable law.`
  },
  {
    id: "your-rights",
    title: "7. Your Privacy Rights",
    content: `Depending on your location, you may have various rights regarding your personal data. We respect these rights regardless of your jurisdiction.

7.1 Right of Access
You have the right to request a copy of any personal data we hold about you. To exercise this right, contact us at privacy@freeiqtest.online with your result ID.

7.2 Right to Deletion
You have the right to request the deletion of your test result record. We will fulfill this request within 14 business days. Please note that anonymized aggregate data cannot be individually deleted.

7.3 Right to Rectification
If any information we hold about you is inaccurate (such as an incorrect leaderboard name), you may request its correction.

7.4 GDPR Rights (EEA Users)
If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability, the right to restrict processing, and the right to object to processing based on legitimate interests. Our legal basis for processing test data is legitimate interest (providing the requested assessment service).

7.5 CCPA Rights (California Residents)
California residents have the right to know what personal information is collected and how it is used, the right to deletion, the right to opt-out of the sale of personal information (we do not sell data), and the right to non-discrimination for exercising these rights.

To exercise any of these rights, contact us at privacy@freeiqtest.online.`
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: `The Service is intended for users aged 13 and older. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe your child under 13 has used our Service and provided personal information, please contact us immediately at privacy@freeiqtest.online and we will promptly delete such information.`
  },
  {
    id: "international",
    title: "9. International Data Transfers",
    content: `FreeIQTest.online is operated from the United States. If you are accessing the Service from outside the United States, your information may be transferred to and processed in the United States, which may have data protection laws different from those in your country. By using the Service, you consent to such transfer.

For users in the European Economic Area (EEA), we rely on Standard Contractual Clauses (SCCs) as approved by the European Commission as the legal mechanism for such transfers where applicable.`
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. If we make material changes that affect how we handle previously collected data, we will provide prominent notice on our website. Your continued use of the Service after changes are posted constitutes acceptance of the revised policy.`
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: `For questions, concerns, or requests related to this Privacy Policy or your personal data:

Email: privacy@freeiqtest.online
Mailing Address: FreeIQTest.online, 1200 Tech Boulevard, San Francisco, CA 94107

We aim to respond to all privacy-related inquiries within 5 business days.`
  },
];

export default function Privacy() {
  usePageTitle('Privacy Policy');
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto max-w-3xl px-4">

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
            <p className="text-sm text-slate-500">Last updated: April 1, 2025 &nbsp;|&nbsp; Effective: April 1, 2025</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Your privacy matters to us. This policy explains exactly what data FreeIQTest.online collects, why we collect it, and how we protect it. We have kept this policy in plain language on purpose.
            </p>
          </div>

          {/* TOC */}
          <nav className="bg-slate-50 border rounded-xl p-6 mb-12">
            <div className="text-sm font-semibold text-slate-900 mb-3">Quick Navigation</div>
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
