import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Features | Gaby Talk",
  description:
    "Real people, meaningful conversations. Sign in with your phone number, get 300 free coins and start an instant call with a verified listener.",
};

const steps = [
  { title: "Sign in with your phone", text: "Enter your number, confirm the OTP and you’re in. No passwords to remember." },
  { title: "Get 300 free coins", text: "Your wallet is credited with 300 coins after your first login." },
  { title: "Pick what to talk about", text: "Choose one or more categories that feel right for today." },
  { title: "Call a verified listener", text: "Tap Find Listeners and start a voice call right away." },
];

const topics = [
  { emoji: "❤️", name: "Just Talk", quote: "I need someone to talk to.", bg: "#FFD3DE", ink: "#7A1F3A" },
  { emoji: "😊", name: "Friendly Conversation", quote: "Let’s have a pleasant conversation.", bg: "#FFEBB0", ink: "#6B4A00" },
  { emoji: "🧠", name: "Advice", quote: "I need another person’s perspective.", bg: "#DCD6FB", ink: "#3A2F8F" },
  { emoji: "💼", name: "Career", quote: "Talk to someone experienced in my field.", bg: "#C9F0EA", ink: "#0B5E55" },
  { emoji: "🌍", name: "Travel", quote: "Talk to someone who knows this place.", bg: "#CFE8FB", ink: "#144F7F" },
  { emoji: "👴", name: "Elder Companion", quote: "Someone to talk to regularly.", bg: "#D9F2CC", ink: "#2C5D1A" },
  { emoji: "🎓", name: "Student Companion", quote: "Someone who gets student life.", bg: "#DDE5FF", ink: "#26408F" },
  { emoji: "🗣️", name: "Language", quote: "Practise speaking with a friendly partner.", bg: "#FFDFC9", ink: "#7A3B0E" },
  { emoji: "☕", name: "Casual", quote: "A light, easy chat to pass the time.", bg: "#EFE3D3", ink: "#5C4630" },
];

const bundles = [
  { coins: "1,500", price: "₹99", note: "Good for getting started", tag: "" },
  { coins: "9,000", price: "₹580", note: "Our most chosen bundle", tag: "Popular" },
  { coins: "16,000", price: "₹999", note: "Maximum savings for continuous calling", tag: "Best value" },
];

export default function FeaturesPage() {
  return (
    <main className={`gt ${outfit.className}`}>
      <style>{css}</style>

      <section className="hero">
        <span className="chip rise" style={{ animationDelay: "0ms" }}>
          Real people. Meaningful conversations.
        </span>
        <h1 className="rise" style={{ animationDelay: "90ms" }}>
          Someone to talk to is one tap away.
        </h1>
        <p className="rise" style={{ animationDelay: "180ms" }}>
          Gaby Talk connects you with verified listeners for friendly, honest voice
          calls. Sign in with your phone number and get 300 coins to start.
        </p>
        <div className="row rise" style={{ animationDelay: "270ms" }}>
          <a href="#pricing" className="pill ghost">See coin bundles</a>
        </div>

        <div className="wallet rise" style={{ animationDelay: "360ms" }} aria-label="Wallet preview">
          <div>
            <small>Wallet balance</small>
            <strong>300 coins</strong>
            <span>Ready for instant calls with verified listeners</span>
          </div>
          <b className="badge">Free on first login</b>
        </div>
      </section>

      <section className="section">
        <h2>How it works</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="split">
          <article className="card lav">
            <h3>Login with phone number and OTP</h3>
            <p>One number, one quick code. Your account is ready in seconds.</p>
          </article>
          <article className="card">
            <h3>Instant calls with verified listeners</h3>
            <p>Every listener wears a verified badge, so you know a real person is on the other end.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>What would you like to talk about today?</h2>
        <p className="sub">Choose a category that feels right for you. Select one, or select all.</p>
        <div className="topics">
          {topics.map((t) => (
            <article key={t.name} className="topic" style={{ background: t.bg, color: t.ink }}>
              <span className="emoji" aria-hidden="true">{t.emoji}</span>
              <div>
                <h3>{t.name}</h3>
                <p>“{t.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="agent">
          <div>
            <span className="chip">For listeners</span>
            <h2>Want to be the listener? Become an agent.</h2>
            <p className="sub">
              Gaby Talk isn’t only for callers. Any user can convert to an agent
              right inside the app and start taking calls from people who need
              someone to talk to.
            </p>
          </div>
          <ul className="points">
            <li><span>1</span>Convert your account from user to agent</li>
            <li><span>2</span>Listen, support and connect with real people</li>
            <li><span>3</span>Join our verified listeners</li>
          </ul>
        </div>
      </section>

      <section className="section" id="pricing">
        <h2>Simple coin bundles</h2>
        <p className="sub">Top up instantly. Pay only for the time you talk.</p>
        <div className="bundles">
          {bundles.map((b) => (
            <article key={b.coins} className={`bundle ${b.tag ? "hl" : ""}`}>
              {b.tag && <span className="tag">{b.tag}</span>}
              <strong>{b.coins} coins</strong>
              <p>{b.note}</p>
              <span className="price">{b.price}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const css = `
.gt{
  --bg:#FEFDF9; --ink:#26263A; --muted:#6E6E7C; --line:#EFEDE6;
  --lav:#E9E4FC; --lav-soft:#F3F0FD; --butter:#FFF9E0; --accent:#8F7FF0;
  min-height:100vh; color:var(--ink); line-height:1.5;
  background:
    radial-gradient(60rem 36rem at 0% 0%, var(--butter), transparent 60%),
    radial-gradient(60rem 40rem at 100% 100%, var(--lav-soft), transparent 60%),
    var(--bg);
  background-attachment:fixed;
}
.gt *{box-sizing:border-box}
.gt a{color:inherit;text-decoration:none}
.gt :focus-visible{outline:3px solid var(--accent);outline-offset:3px}
.hero,.section{width:min(1080px,100% - 2.5rem);margin-inline:auto}

.pill{display:inline-block;background:var(--ink);color:#fff!important;padding:.75rem 1.4rem;border-radius:999px;font-weight:500;box-shadow:0 6px 16px rgba(38,38,58,.12);transition:transform .2s ease,box-shadow .2s ease}
.pill:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(38,38,58,.16)}
.pill.ghost{background:#fff;color:var(--ink)!important;border:1px solid var(--line);box-shadow:none}
.pill.ghost:hover{box-shadow:0 8px 18px rgba(143,127,240,.18)}

.hero{text-align:center;padding:4rem 0 3rem}
.chip{display:inline-block;padding:.4rem 1rem;border:1px solid var(--line);border-radius:999px;background:#fff;font-size:.9rem}
.hero h1{font-size:clamp(2.4rem,6vw,4.4rem);line-height:1.06;letter-spacing:-.03em;margin:1.4rem auto 1rem;max-width:16ch;font-weight:600}
.hero p{max-width:54ch;margin:0 auto 1.8rem;color:var(--muted);font-size:1.1rem}
.row{display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap}

.wallet{margin:3rem auto 0;max-width:560px;display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;text-align:left;padding:1.6rem;border-radius:1.6rem;background:var(--lav);flex-wrap:wrap}
.wallet small{display:block;color:#5B5690}
.wallet strong{display:block;font-size:2.8rem;line-height:1.1;letter-spacing:-.02em}
.wallet span{color:#5B5690;font-size:.95rem}
.badge{background:#fff;color:var(--ink);border-radius:999px;padding:.4rem .9rem;font-size:.85rem;font-weight:500;animation:pulse 2.8s ease-in-out infinite}

.section{padding:3rem 0}
.section h2{font-size:clamp(1.7rem,3.6vw,2.6rem);letter-spacing:-.02em;line-height:1.15;margin:0 0 .6rem;font-weight:600}
.sub{color:var(--muted);margin:0 0 1.8rem;max-width:60ch}

.steps{list-style:none;padding:0;margin:1.8rem 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.steps li,.card,.bundle,.topic{transition:transform .25s ease,box-shadow .25s ease}
.steps li:hover,.card:hover,.bundle:hover,.topic:hover{transform:translateY(-4px);box-shadow:0 14px 28px rgba(38,38,58,.07)}
.steps li{background:#fff;border:1px solid var(--line);border-radius:1.4rem;padding:1.4rem}
.n{display:grid;place-items:center;width:2rem;height:2rem;border-radius:50%;background:var(--lav);color:#4B4390;font-weight:600;margin-bottom:.9rem;transition:transform .25s ease,background .25s ease,color .25s ease}
.steps li:hover .n{transform:scale(1.12);background:var(--ink);color:#fff}
.steps h3,.card h3{margin:0 0 .4rem;font-size:1.15rem}
.steps p,.card p{margin:0;color:var(--muted)}

.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}
.card{background:#fff;border:1px solid var(--line);border-radius:1.6rem;padding:2rem}
.card.lav{background:var(--lav);border-color:transparent}
.card.lav p{color:#4F4A7E}

.topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}
.topic{border-radius:1.5rem;padding:1.4rem 1.6rem 1.6rem;min-height:170px;display:flex;flex-direction:column;justify-content:space-between;gap:1rem}
.emoji{font-size:2.2rem;line-height:1;display:inline-block;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
.topic:hover .emoji{transform:scale(1.18) rotate(-8deg)}
.topic h3{margin:0 0 .3rem;font-size:1.3rem}
.topic p{margin:0;opacity:.9}

.agent{display:grid;grid-template-columns:1.3fr 1fr;gap:2rem;align-items:center;background:#fff;border:1px solid var(--line);border-radius:2rem;padding:2.5rem}
.agent .chip{background:var(--lav);border-color:transparent;color:#4B4390}
.agent h2{margin-top:1rem}
.agent .sub{margin:0}
.points{list-style:none;margin:0;padding:0;display:grid;gap:.7rem}
.points li{display:flex;align-items:center;gap:.8rem;background:var(--lav-soft);border-radius:1.1rem;padding:.9rem 1rem;transition:transform .25s ease}
.points li:hover{transform:translateX(4px)}
.points span{display:grid;place-items:center;flex:none;width:1.8rem;height:1.8rem;border-radius:50%;background:var(--ink);color:#fff;font-size:.9rem;font-weight:600}
@media (max-width:760px){.agent{grid-template-columns:1fr;padding:1.6rem}}
.bundles{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.bundle{position:relative;background:#fff;border:1px solid var(--line);border-radius:1.6rem;padding:2rem 1.6rem;display:flex;flex-direction:column;gap:.4rem}
.bundle.hl{background:var(--lav);border-color:transparent}
.bundle strong{font-size:1.6rem;letter-spacing:-.01em}
.bundle p{margin:0;color:var(--muted)}
.price{margin-top:1rem;align-self:flex-start;background:var(--ink);color:#fff;border-radius:999px;padding:.55rem 1.3rem;font-weight:600;font-size:1.15rem}
.tag{position:absolute;top:-.8rem;right:1.2rem;background:var(--accent);color:#fff;border-radius:999px;padding:.25rem .8rem;font-size:.8rem;font-weight:500}

.rise{opacity:0;animation:rise .7s cubic-bezier(.2,.7,.2,1) forwards}
.wallet.rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) 360ms forwards,float 6s ease-in-out 1.2s infinite}
@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(143,127,240,.35)}50%{box-shadow:0 0 0 8px rgba(143,127,240,0)}}

@media (prefers-reduced-motion:reduce){
  .rise,.wallet.rise,.badge{animation:none;opacity:1}
  .pill,.steps li,.card,.bundle,.topic,.n,.emoji,.points li{transition:none}
  .steps li:hover,.card:hover,.bundle:hover,.topic:hover,.pill:hover,.topic:hover .emoji,.points li:hover{transform:none}
}
`;