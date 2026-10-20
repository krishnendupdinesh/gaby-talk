
const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to Empire. We respect your privacy and are committed to handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, use our web application, or contact us about our services.`
  },
  {
    title: "2. Information We Collect",
    content: `We may collect information that you provide directly, including your name, email address, phone number, company details, project requirements, and messages submitted through our contact forms. If you create an account or use features of our web application, we may also process account and usage information needed to provide those features.`
  },
  {
    title: "3. How We Use Your Information",
    content: `We use information to respond to enquiries, provide and manage our services, communicate about projects, maintain and improve our website and web application, troubleshoot technical issues, protect against misuse, and meet applicable legal obligations. We will not use your information for unrelated purposes without an appropriate legal basis.`
  },
  {
    title: "4. Sharing of Information",
    content: `We do not sell personal information as part of our ordinary business practices. We may share relevant information with service providers that help us operate our website, host our application, manage communications, or process payments, where applicable. We may also disclose information when required by law or necessary to protect our legal rights.`
  },
  {
    title: "5. Cookies and Analytics",
    content: `Our website or web application may use cookies or similar technologies to maintain essential functionality, remember preferences, understand usage, and improve performance. Where required, we will request consent before using non-essential cookies. You can manage cookies through your browser settings.`
  },
  {
    title: "6. Data Security",
    content: `We use reasonable technical and organizational measures designed to protect personal information from unauthorized access, loss, misuse, or alteration. However, no method of online transmission or electronic storage is completely secure, and absolute security cannot be guaranteed.`
  },
  {
    title: "7. Data Retention",
    content: `We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining business records, resolving disputes, and complying with applicable law. Retention periods depend on the type of information and its purpose.`
  },
  {
    title: "8. Your Privacy Rights",
    content: `Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information, withdraw consent where processing relies on consent, or raise a privacy complaint. To make a request, contact us using the details below. We may need to verify your identity before responding.`
  },
  {
    title: "9. Third-Party Services and Links",
    content: `Our website or application may link to third-party websites or use third-party services. Those providers may process information under their own privacy policies. We encourage you to review their policies before sharing personal information with them.`
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are not intended to collect personal information from children in violation of applicable law. If you believe a child has provided personal information inappropriately, please contact us so that we can review the matter and take appropriate action.`
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy when our services, practices, or legal obligations change. We will publish the updated version on this page and revise the effective date. Where required by law, we will provide additional notice or obtain consent.`
  },
  {
    title: "12. Contact Us",
    content: `For privacy questions or requests, contact Empire at info@empireae.xyz. Please include sufficient information for us to understand and respond to your request.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#101d32]">
      <section className="border-b border-[#bcecf5] bg-[#eefafd] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#159fba]">
            Legal / Privacy
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Your privacy matters to us. Learn how Empire handles
            your information when you visit our website or use our
            web application.
          </p>
          <p className="mt-5 text-sm text-slate-500">
            Effective date: October 20, 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 p-5 md:sticky md:top-24">
            <p className="mb-4 font-semibold">On this page</p>
            <nav className="space-y-3 text-sm text-slate-600">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#privacy-${index + 1}`}
                  className="block transition-colors hover:text-[#159fba]"
                >
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 space-y-9">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`privacy-${index + 1}`}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-bold sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {section.content}
                </p>
              </section>
            ))}

            <div className="rounded-2xl border border-[#bcecf5] bg-[#eefafd] p-6">
              <h2 className="font-semibold">Have a privacy question?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact our team if you have questions about your
                information or this policy.
              </p>
              <a
                href="mailto:info@empireae.xyz"
                className="mt-4 inline-flex font-semibold text-[#159fba] hover:underline"
              >
                email@gmail.com →
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
