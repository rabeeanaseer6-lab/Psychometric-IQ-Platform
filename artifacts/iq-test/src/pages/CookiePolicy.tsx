import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';

const sections = [
  {
    id: "what",
    title: "1. What Are Cookies?",
    content: `Cookies are small text files that websites place on your device (computer, smartphone, or tablet) when you visit them. They are widely used to make websites function efficiently, improve the user experience, and provide information to site operators. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device for a set period or until you delete them).`
  },
  {
    id: "how-we-use",
    title: "2. How FreeIQTest.online Uses Cookies",
    content: `We use a minimal and deliberate set of cookies. Our approach to cookies reflects our broader commitment to privacy: we collect only what is necessary to operate the Service effectively, and nothing more.

We use cookies for the following purposes:

Session Management: We use a session cookie to track the state of your ongoing test. This cookie stores your progress (current question number, time elapsed, and responses given) so that if you temporarily lose your connection or accidentally navigate away, you may be able to resume your test. This is a strictly necessary session cookie and is deleted when you close your browser.

Preference Cookies: If you have previously selected a display preference (such as a preferred language version of the interface, where available), a persistent cookie stores this preference so you do not need to re-select it on future visits. This cookie expires after 90 days.

Analytics: We use anonymized, aggregated analytics to understand how visitors interact with our platform — which pages are visited most, where users drop off during the test, and how long pages are viewed. This data is used exclusively to improve the quality and usability of the Service. We do not use third-party advertising analytics cookies.`
  },
  {
    id: "no-tracking",
    title: "3. What We Do NOT Do With Cookies",
    content: `We are explicit about our cookie boundaries:

- We do not use advertising cookies or tracking pixels
- We do not share cookie data with third-party advertising networks
- We do not use cookies to build behavioural profiles for commercial purposes
- We do not use cross-site tracking cookies to follow you across the internet
- We do not use cookies to collect personally identifiable information beyond your optional, self-provided name or location for the leaderboard`
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    content: `FreeIQTest.online does not embed third-party advertising, social media widgets, or tracking pixels that would cause cookies from other domains to be placed on your device during normal use of the Service.

If our blog articles or content pages include embedded content from third-party sources (such as YouTube videos or social media embeds), those third parties may set their own cookies according to their own privacy policies. We recommend reviewing the privacy and cookie policies of any third-party services whose content appears on our platform.`
  },
  {
    id: "managing",
    title: "5. Managing and Disabling Cookies",
    content: `You have full control over cookies in your browser. Most modern browsers allow you to:

- View which cookies are stored on your device
- Delete cookies individually or in bulk
- Block cookies from specific websites
- Block all third-party cookies
- Set preferences for how cookies are handled

To manage cookies in your browser, refer to the relevant instructions:
- Google Chrome: Settings > Privacy and Security > Cookies and other site data
- Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data
- Safari: Preferences > Privacy > Manage Website Data
- Microsoft Edge: Settings > Cookies and site permissions

Please note that disabling cookies — particularly session management cookies — may prevent some features of FreeIQTest.online from working correctly, including the ability to resume an interrupted test.`
  },
  {
    id: "updates",
    title: "6. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices or applicable regulations. The "Last Updated" date at the top of this page indicates when the most recent changes were made. We encourage you to review this policy periodically.`
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: `If you have questions about our use of cookies or this Cookie Policy, please contact us at privacy@freeiqtest.online or through our Contact page.`
  },
];

export default function CookiePolicy() {
  usePageTitle('Cookie Policy');
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Cookie Policy</h1>
            <p className="text-sm text-slate-500">Last updated: April 1, 2025</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              This Cookie Policy explains how FreeIQTest.online uses cookies and similar tracking technologies when you visit our website, and how you can manage your preferences.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
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
