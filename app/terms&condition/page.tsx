
const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `These Terms and Conditions govern your access to and use of the Empire website and web application, together with services offered through them. By accessing or using our services, you agree to these terms. If you do not agree, please discontinue use of the relevant service.`
  },
  {
    title: "2. Our Services",
    content: `Empire may provide web design, web development, mobile application development, UI/UX design, digital marketing, search engine optimization, hosting and domain assistance, e-commerce solutions, and software development. The precise scope, deliverables, timelines, and fees for a project will be confirmed separately in an agreed proposal, quotation, or service agreement.`
  },
  {
    title: "3. Website and Application Use",
    content: `You agree to use our website and web application lawfully and responsibly. You must not attempt unauthorized access, interfere with system security, introduce malicious code, misuse another person's account, disrupt services, or use our services for fraudulent or unlawful purposes.`
  },
  {
    title: "4. Accounts and Security",
    content: `If our web application allows you to create an account, you are responsible for providing accurate information, safeguarding your login credentials, and notifying us of suspected unauthorized access. You must not impersonate another person or use an account without authorization.`
  },
  {
    title: "5. Pricing and Payments",
    content: `Prices, payment schedules, deposits, taxes, recurring charges, and applicable expenses will be communicated in the relevant quotation or agreement. Unless otherwise agreed in writing, work may begin after the required approval or initial payment. Any cancellation, refund, or late-payment conditions will be governed by the applicable project agreement and mandatory law.`
  },
  {
    title: "6. Client Responsibilities",
    content: `Clients must provide accurate project requirements, timely feedback, required approvals, and lawful access to materials needed for a project. You must have the rights and permissions necessary to provide any text, images, trademarks, data, or other materials supplied to us. Delays in receiving required materials or approvals may affect delivery dates.`
  },
  {
    title: "7. Intellectual Property",
    content: `Empire retains rights to its website, branding, pre-existing materials, reusable tools, and proprietary methods, except as otherwise agreed in writing. Ownership or licensing of project-specific deliverables, source code, designs, and other work will be determined by the applicable written agreement and payment terms. You may not copy or commercially exploit our materials without authorization.`
  },
  {
    title: "8. Third-Party Services",
    content: `Projects may depend on third-party platforms, hosting providers, APIs, payment gateways, plugins, domains, or software licenses. Such services may have separate terms, fees, availability limits, and privacy policies. We are not responsible for independent third-party changes or outages beyond our reasonable control.`
  },
  {
    title: "9. Timelines and Changes",
    content: `Project estimates are based on the information available at the time. Additional requirements, revisions beyond the agreed scope, delayed approvals, or third-party dependencies may affect cost and delivery. Any material change to project scope or price should be agreed upon by the parties.`
  },
  {
    title: "10. Warranties and Availability",
    content: `We aim to provide our services with reasonable care and skill. However, unless expressly agreed in writing or required by law, we do not guarantee uninterrupted website or application availability, specific search rankings, particular marketing results, or compatibility with every device or third-party system.`
  },
  {
    title: "11. Limitation of Liability",
    content: `To the extent permitted by applicable law, Empire will not be liable for indirect or consequential losses arising from the use of our website, application, or services. Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited. Any additional liability limits should be set out in the applicable signed service agreement.`
  },
  {
    title: "12. Suspension and Termination",
    content: `We may suspend access to a website feature or application where reasonably necessary for security, maintenance, suspected abuse, or legal compliance. Project termination, outstanding payments, refunds, handover obligations, and post-termination rights will be handled under the relevant agreement and applicable law.`
  },
  {
    title: "13. Privacy",
    content: `Your use of our website and web application is also subject to our Privacy Policy, which explains how personal information is handled. Please review the Privacy Policy before submitting personal information or creating an account.`
  },
  {
    title: "14. Changes to These Terms",
    content: `We may update these terms from time to time. The revised version will be published on this page with an updated effective date. Where required by law or by an existing agreement, we will provide notice or obtain your agreement before applying changes.`
  },
  {
    title: "15. Governing Law and Disputes",
    content: `These terms are subject to applicable law. Any governing-law, jurisdiction, and dispute-resolution arrangements should be specified in the relevant service agreement and reviewed for enforceability. Nothing in these terms removes any rights that cannot legally be waived.`
  },
  {
    title: "16. Contact Information",
    content: `For questions about these Terms and Conditions, contact Empire at info@empireae.xyz.`
  }
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#101d32]">
      <section className="border-b border-[#bcecf5] bg-[#eefafd] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#159fba]">
            Legal / Terms
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Please read these terms carefully before using the
            Empire website, web application, or digital services.
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
                  href={`#terms-${index + 1}`}
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
                id={`terms-${index + 1}`}
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
              <h2 className="font-semibold">Need clarification?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact our team if you have questions about these terms.
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
