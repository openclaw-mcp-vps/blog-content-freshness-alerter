export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Freshness
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert when your blog content becomes{" "}
          <span className="text-[#58a6ff]">outdated</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically crawl your blog posts, detect stale information, broken links, and deprecated code examples — then get email alerts before readers notice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["AI freshness scoring", "Broken link detection", "Email alerts", "Content health dashboard", "Scheduled scans"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep content fresh</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 50 blog URLs monitored",
              "AI-powered freshness analysis",
              "Broken link checker",
              "Weekly email digest",
              "Instant alerts on critical issues",
              "Content health score dashboard"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI detect outdated content?",
              a: "Our AI scans your blog posts for date-sensitive claims, deprecated APIs, old statistics, and references to discontinued tools, then assigns a freshness score so you know exactly what needs updating."
            },
            {
              q: "How often are my blog posts scanned?",
              a: "Posts are scanned weekly by default. You can also trigger manual scans at any time from your dashboard, and critical issues like broken links trigger instant alerts."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time with no questions asked. Your access continues until the end of the billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Blog Content Freshness Alerter. All rights reserved.
      </footer>
    </main>
  );
}
