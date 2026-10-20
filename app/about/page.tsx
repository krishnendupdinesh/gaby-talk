"use client";

/**
 * About Us page — social connection platform. Single file, no extra dependencies.
 * Place at: app/about/page.tsx (App Router). Navbar/footer come from the shared layout.tsx.
 * Edit the constants below to match the real project.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

const BRAND = "Your Brand"; // TODO real brand name
const START_HREF = "/register"; // TODO real sign-up / onboarding route
const PLATFORM_HREF = "/"; // TODO real "explore" route
const HEADER_H = 72; // shared navbar height in px

/* =====================================================================
   IMAGES — change ONLY the  image: "..."  lines.
   - Local file:  put it in  public/images/about/  and write  "/images/about/p1.jpg"
   - Web link:    paste the full  "https://..."  link
   - Leave  ""  to show the soft lavender placeholder.
   ===================================================================== */

// The 4 small circles in the hero (top to bottom, left then right)
const HERO_PORTRAITS = [
  {
    position: "Left circle, upper (next to the 'Hi, how's your day?' bubble)",
    alt: "",
    image: "https://cdn-icons-png.flaticon.com/128/978/978012.png",
  },
  {
    position: "Right circle, upper (next to the 'Let's talk soon' bubble)",
    alt: "",
    image: "https://cdn-icons-png.flaticon.com/128/12772/12772686.png",
  },
  {
    position: "Bottom-left small circle",
    alt: "",
    image: "https://cdn-icons-png.flaticon.com/128/9540/9540673.png",
  },
  {
    position: "Bottom-right circle",
    alt: "",
    image: "https://cdn-icons-png.flaticon.com/128/14106/14106262.png",
  },
];
// Images in "Every Connection Starts Somewhere."
// 1st item = large image (right), 2nd item = small square image (left)
const EDITORIAL_IMAGES = [
  {
    title: "Friends Talking",
    tag: "Friendship",
    overlay: "A hello, a shared interest, and a conversation that keeps going.",
    alt: "Friends talking together",
    image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Say Hello",
    tag: "Conversation",
    overlay: "Start small, at your own pace.",
    alt: "Portrait of a smiling person",
    image: "https://images.unsplash.com/photo-1741615331533-2360157c55aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

const STAGES = [
  { t: "Make New Friends", d: "Meet new people and discover friendships that grow naturally." },
  { t: "Start Conversations", d: "Share thoughts, exchange messages, and enjoy meaningful everyday conversations." },
  { t: "Connect Through Calls", d: "Turn simple introductions into conversations through real-time voice calls." },
  { t: "Find Your Own Way", d: "Choose the connections and interactions that feel right for you." },
];

// TODO: keep only features that really exist in the product
const OPTIONS = [
  { t: "Make Friends", d: "Meet new people, discover shared interests, and build genuine friendships.", i: "people" },
  { t: "Chat", d: "Exchange thoughts and get to know someone one message at a time.", i: "chat" },
  { t: "Voice Calls", d: "Enjoy real-time conversations and a more personal way to connect.", i: "wave" },
  { t: "Discover People", d: "Explore new connections and people you might enjoy talking with.", i: "spark" },
];

const VALUES = [
  { t: "Freedom to Choose", d: "Choose the kind of interaction that suits your mood and preferences.", i: "circle" },
  { t: "Comfort Comes First", d: "Enjoy a welcoming experience and decide how you want to engage.", i: "diamond" },
  { t: "Real Conversations", d: "Create opportunities for enjoyable conversations and new friendships.", i: "arc" },
];

/* ---------- small pieces ---------- */

const TONES = [
  "linear-gradient(135deg,#DDD6F3,#FAF8F5)",
  "linear-gradient(160deg,#F0EDF9,#E4DDF6)",
  "linear-gradient(120deg,#FAF8F5,#DDD6F3)",
  "linear-gradient(200deg,#E8E3F6,#FFFFFF)",
];

type PicProps = { src?: string | null; alt?: string; className?: string; tone?: number };

function Pic({ src, alt = "", className = "", tone = 0 }: PicProps) {
  if (src)
    return <img src={src} alt={alt} className={`pic ${className}`} loading="lazy" />; // eslint-disable-line @next/next/no-img-element
  return (
    <div
      className={`pic ${className}`}
      style={{ background: TONES[tone % 4] }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    />
  );
}

/** Thin geometric line art. variant: "hero" | "panel" | "story" */
function LinePattern({ variant = "hero" }: { variant?: "hero" | "panel" | "story" }) {
  return (
    <svg className={`lines lines-${variant}`} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#B8B5C5" strokeWidth="0.9" vectorEffect="non-scaling-stroke">
        {variant === "hero" && (
          <>
            <path d="M0 40 L420 40 L560 190 L640 190 L780 40 L1200 40" />
            <path d="M120 0 L120 300 Q120 340 150 370 L430 640 L430 800" />
            <path d="M1080 0 L1080 300 Q1080 340 1050 370 L770 640 L770 800" />
            <path d="M0 430 L330 560 L600 800 M1200 430 L870 560 L600 800" />
            <path d="M0 560 L1200 560 M0 160 L300 160 M900 160 L1200 160" opacity=".5" />
            <path d="M300 40 L300 800 M900 40 L900 800" opacity=".35" />
            <path d="M60 430 L90 400 L120 430 L90 460 Z M1140 430 L1110 400 L1080 430 L1110 460 Z M270 560 L300 530 L330 560 L300 590 Z M930 560 L900 530 L870 560 L900 590 Z" />
          </>
        )}
        {variant === "panel" && (
          <>
            <path d="M0 120 L260 120 L340 40 L340 0 M1200 120 L940 120 L860 40 L860 0" />
            <path d="M0 680 L240 680 L330 760 M1200 680 L960 680 L870 760" />
            <path d="M80 0 L80 800 M1120 0 L1120 800" opacity=".4" />
            <path d="M240 680 L270 650 L300 680 L270 710 Z M900 120 L930 90 L960 120 L930 150 Z" />
          </>
        )}
        {variant === "story" && (
          <>
            <path d="M0 0 L380 400 L0 800 M1200 0 L820 400 L1200 800" opacity=".6" />
            <path d="M0 400 L1200 400" opacity=".3" />
            <path d="M380 370 L410 400 L380 430 L350 400 Z M820 370 L850 400 L820 430 L790 400 Z" />
          </>
        )}
      </g>
    </svg>
  );
}

function Icon({ kind }: { kind: string }) {
  const p = { fill: "none", stroke: "#171717", strokeWidth: 1.2, strokeLinecap: "round" as const };
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      {kind === "circle" && (<><circle cx="22" cy="22" r="14" {...p} /><circle cx="22" cy="22" r="5" {...p} /></>)}
      {kind === "diamond" && (<><path d="M22 6 L38 22 L22 38 L6 22 Z" {...p} /><path d="M22 14 L30 22 L22 30 L14 22 Z" {...p} /></>)}
      {kind === "arc" && (<><path d="M6 32 A16 16 0 0 1 38 32" {...p} /><path d="M12 32 A10 10 0 0 1 32 32" {...p} /><path d="M6 32 H38" {...p} /></>)}
      {kind === "people" && (<><circle cx="16" cy="17" r="6" {...p} /><circle cx="29" cy="19" r="5" {...p} /><path d="M5 36 Q16 24 27 36 M26 33 Q32 27 39 36" {...p} /></>)}
      {kind === "chat" && (<><path d="M7 10 H37 V28 H21 L13 35 V28 H7 Z" {...p} /><path d="M14 17 H30 M14 22 H24" {...p} /></>)}
      {kind === "wave" && (<path d="M6 22 V22 M12 15 V29 M18 9 V35 M24 14 V30 M30 11 V33 M36 18 V26" {...p} />)}
      {kind === "spark" && (<><circle cx="20" cy="20" r="11" {...p} /><path d="M28 28 L37 37" {...p} /></>)}
    </svg>
  );
}

function Wave() {
  return (
    <span className="wave" aria-hidden="true">
      {[10, 18, 26, 14, 22, 12, 20].map((h, i) => (<i key={i} style={{ height: h, animationDelay: `${i * 0.15}s` }} />))}
    </span>
  );
}

/** Rounded-rect path that runs ANTICLOCKWISE, starting at the top-right and heading left. */
function anticlockwisePath(w: number, h: number, inset: number, radius: number): string {
  const x1 = inset, y1 = inset, x2 = w - inset, y2 = h - inset;
  const r = Math.max(0, Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2));
  return [
    `M ${x2 - r} ${y1}`,
    `H ${x1 + r}`,
    `A ${r} ${r} 0 0 0 ${x1} ${y1 + r}`,
    `V ${y2 - r}`,
    `A ${r} ${r} 0 0 0 ${x1 + r} ${y2}`,
    `H ${x2 - r}`,
    `A ${r} ${r} 0 0 0 ${x2} ${y2 - r}`,
    `V ${y1 + r}`,
    `A ${r} ${r} 0 0 0 ${x2 - r} ${y1}`,
  ].join(" ");
}

/** Box with a black line that draws around its border (anticlockwise) on hover. */
function AnimatedBorder({ children, radius = 24 }: { children: ReactNode; radius?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.offsetWidth, h = el.offsetHeight;
      setBox((p) => (p.w === w && p.h === h ? p : { w, h }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="ab" style={{ borderRadius: radius }}>
      {children}
      {box.w > 0 && (
        <svg className="ab-svg" width={box.w} height={box.h} viewBox={`0 0 ${box.w} ${box.h}`} aria-hidden="true" focusable="false">
          <path className="ab-stroke" d={anticlockwisePath(box.w, box.h, 1, radius - 1)} pathLength={100} fill="none" />
        </svg>
      )}
    </div>
  );
}

/** Animated background for the closing panel: drifting soft colour, ripples, floating chat bubbles. No video needed. */
function ClosingAnimation() {
  return (
    <div className="ca" aria-hidden="true">
      <i className="ca-blob ca-a" /><i className="ca-blob ca-b" /><i className="ca-blob ca-c" />
      <span className="ca-ring ca-r1" /><span className="ca-ring ca-r2" /><span className="ca-ring ca-r3" />
      <span className="ca-bub ca-1"><i /><i /><i /></span>
      <span className="ca-bub ca-2"><i /><i /><i /></span>
      <span className="ca-bub ca-3"><i /><i /><i /></span>
      <span className="ca-bub ca-4"><Wave /></span>
    </div>
  );
}

/** Splits text into words so each one can fade from dim to bright while scrolling. */
function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="w">{w}{" "}</span>
      ))}
    </>
  );
}

/** Heading whose words slide up out of a mask; plays when the parent gets the "show" class. */
function SplitHeading({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="hw"><span style={{ transitionDelay: `${120 + i * 90}ms` }}>{w}</span></span>{" "}
        </span>
      ))}
    </>
  );
}

type Item = { t: string; d: string; i: string };

/** Click a row to show its details. One row open at a time. */
function Accordion({ items, id }: { items: Item[]; id: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="acc rv">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <li key={it.t} className={`acc-row${on ? " open" : ""}`}>
            <button
              type="button"
              className="acc-btn"
              id={`${id}-b${i}`}
              aria-expanded={on}
              aria-controls={`${id}-p${i}`}
              onClick={() => setOpen(on ? null : i)}
            >
              <span className="acc-ico"><Icon kind={it.i} /></span>
              <span className="acc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="acc-title">{it.t}</span>
              <svg className="acc-arrow" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M12 4 V20 M5 13 L12 20 L19 13" />
              </svg>
            </button>
            <div className="acc-panel" id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-b${i}`}>
              <div><p>{it.d}</p></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

type EdImage = { title: string; tag: string; overlay: string; alt: string; image: string };

function EdFigure({ img, tone, cls }: { img: EdImage; tone: number; cls: string }) {
  return (
    <figure className={`${cls} rv`}>
      <Pic src={img.image} alt={img.alt} tone={tone} className="fill" />
      <figcaption className="ed-cap">
        <span className="ed-tag">{img.tag}</span>
        <strong>{img.title}</strong>
        <span className="ed-over">{img.overlay}</span>
      </figcaption>
    </figure>
  );
}

/* ---------- page ---------- */

export default function AboutPage() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const copyRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stages = el.querySelectorAll<HTMLElement>("[data-stage]");

    // Which story stage is in the middle of the screen (driven by normal scrolling)
    const stageIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.stage)); }),
      { rootMargin: "-42% 0px -42% 0px" }
    );
    stages.forEach((n) => stageIO.observe(n));

    if (reduce) {
      el.querySelectorAll(".rv").forEach((n) => n.classList.add("in"));
      return () => stageIO.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    el.querySelectorAll(".rv").forEach((n) => io.observe(n));

    const par = el.querySelectorAll<HTMLElement>("[data-par]");
    const wide = window.matchMedia("(min-width: 1024px)");
    let raf = 0;
    const onScroll = () => {
      if (!wide.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        par.forEach((n) => n.style.setProperty("--py", `${y * parseFloat(n.dataset.par ?? "0")}px`));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { stageIO.disconnect(); io.disconnect(); window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // "Why we exist" heading: plays every time the section scrolls into view (not only on page load)
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("armed");
    const io = new IntersectionObserver(
      ([e]) => el.classList.toggle("show", e.isIntersecting),
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // "Why we exist": paragraph words go from dim to bright black as you scroll through them
  useEffect(() => {
    const box = copyRef.current;
    if (!box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // stays fully readable
    const words = box.querySelectorAll<HTMLElement>(".w");
    const n = words.length;
    box.classList.add("scrub");
    let raf = 0;
    const update = () => {
      const rect = box.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.4)));
      words.forEach((w, i) => {
        const lit = Math.min(1, Math.max(0, (p * (n + 8) - i) / 8));
        w.style.opacity = String(0.22 + 0.78 * lit);
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <main className="about" ref={root} style={{ "--hh": `${HEADER_H}px` } as CSSProperties}>
      <style>{CSS}</style>

      {/* A — HERO (pinned; covered by section B) */}
      <section className="hero-wrap" aria-labelledby="about-title">
        <div className="hero-sticky">
          <div className="hero">
            <LinePattern variant="hero" />
            <div className="float f1" data-par="-0.06"><Pic src={HERO_PORTRAITS[0].image} alt={HERO_PORTRAITS[0].alt} tone={0} className="circ" /></div>
            <div className="float f2" data-par="-0.1"><Pic src={HERO_PORTRAITS[1].image} alt={HERO_PORTRAITS[1].alt} tone={1} className="circ" /></div>
            <div className="float f3" data-par="-0.04"><Pic src={HERO_PORTRAITS[2].image} alt={HERO_PORTRAITS[2].alt} tone={2} className="circ" /></div>
            <div className="float f4" data-par="-0.08"><Pic src={HERO_PORTRAITS[3].image} alt={HERO_PORTRAITS[3].alt} tone={3} className="circ" /></div>
            <span className="bubble b1" aria-hidden="true">Hi, how&apos;s your day?</span>
            <span className="bubble b2" aria-hidden="true">Let&apos;s talk soon</span>
            <span className="bubble b3" aria-hidden="true"><Wave /></span>

            <div className="hero-copy">
              <p className="pill pl1">Connection, your way</p>
              <h1 id="about-title" className="pl2">More Than a Chat.<br />A Connection That Feels Right.</h1>
              <p className="lead pl3">
                Sometimes you want to make a new friend. Sometimes you just want someone to talk to. Find the kind of connection you&apos;re looking for, at your own pace.
              </p>
              <div className="cta pl4">
                <Link href={START_HREF} className="btn">Find Your Connection</Link>
                <a href="#why" className="ulink">Discover Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B — WHY WE EXIST (overlaps hero) */}
      <section id="why" className="intro" aria-labelledby="intro-title">
        <LinePattern variant="hero" />
        <div className="wrap split">
          <div className="intro-head" ref={headRef}>
            <p className="label">Why we exist</p>
            <h2 id="intro-title"><SplitHeading text="Everyone Deserves to Feel Connected." /></h2>
          </div>
          <div className="copy" ref={copyRef}>
            <p><Words text="Connection looks different for everyone. For some, it's finding a new friend. For others, it's sharing a conversation, having a voice call, or simply enjoying a little company." /></p>
            <p><Words text="We believe people should have the freedom to choose how they connect, without unnecessary pressure or expectations." /></p>
            <p><Words text="Our goal is to make discovering and enjoying social interactions feel simple, welcoming, and comfortable." /></p>
          </div>
        </div>
      </section>

      <div className="rest">
        {/* C — STICKY HEADING (right) + SCROLLING STAGES (left) */}
        <section className="story surface t-story" aria-labelledby="story-title">
          <div className="sticky-lines"><LinePattern variant="story" /></div>
          <div className="wrap story-grid">
            <div className="story-aside">
              <h2 id="story-title">Connection Looks Different for Everyone.</h2>
              <div className="dots" aria-hidden="true">
                {STAGES.map((_, i) => (<span key={i} className={i === active ? "on" : ""} />))}
              </div>
            </div>
            <ol className="story-track">
              {STAGES.map((s, i) => (
                <li key={s.t} data-stage={i} className={`stage${i === active ? " on" : ""}`}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* D — OPTIONS (accordion) */}
        <section className="sec list surface t-opts" aria-labelledby="opt-title">
          <LinePattern variant="hero" />
          <div className="wrap">
            <h2 id="opt-title" className="rv">Your Connection. Your Choice.</h2>
            <Accordion items={OPTIONS} id="opt" />
          </div>
        </section>

        {/* E — VALUES (accordion) */}
        <section className="sec list surface t-vals" aria-labelledby="val-title">
          <LinePattern variant="story" />
          <div className="wrap">
            <h2 id="val-title" className="center rv">Connection Without the Pressure.</h2>
            <ul className="vgrid">
              {VALUES.map((v, i) => (
                <li key={v.t} className="rv" style={{ "--d": `${i * 100}ms` } as CSSProperties}>
                  <AnimatedBorder>
                    <Icon kind={v.i} />
                    <h3>{v.t}</h3>
                    <p>{v.d}</p>
                  </AnimatedBorder>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* F — EDITORIAL */}
        <section className="sec editorial surface t-ed" aria-labelledby="ed-title">
          <LinePattern variant="panel" />
          <div className="wrap ed-grid">
            <div className="ed-left">
              <div className="ed-text rv">
                <h2 id="ed-title">Every Connection Starts Somewhere.</h2>
                <p>A hello, a shared interest, a question that turns into an hour of talking. It usually begins small, and it can go wherever you want it to.</p>
              </div>
              <EdFigure img={EDITORIAL_IMAGES[1]} tone={2} cls="ed-small" />
            </div>
            <EdFigure img={EDITORIAL_IMAGES[0]} tone={0} cls="ed-big" />
          </div>
        </section>

        {/* G — CLOSING CTA */}
        {/* <section className="closing wrap" aria-labelledby="close-title">
          <div className="panel rv">
            <ClosingAnimation />
            <LinePattern variant="panel" />
            <h2 id="close-title">Your Next Conversation Could Start Here.</h2>
            <p>Whether you&apos;re looking for a new friend or a good conversation, begin in a way that feels right for you.</p>
            <div className="cta">
              <Link href={START_HREF} className="btn">Get Started</Link>
              <Link href={PLATFORM_HREF} className="ulink">Explore the Platform</Link>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}

/* ---------- styles ---------- */

const CSS = `
.about{--ivory:#FFFFFF;--warm:#FAF8F5;--lav:#F0EDF9;--lilac:#DDD6F3;--ink:#171717;--mute:#6B6872;--line:rgba(25,20,40,.10);
  --hs:max(calc(100svh - var(--hh)),560px);--ease:cubic-bezier(.22,.7,.2,1);color:var(--ink);background:var(--warm);font-family:var(--font-sans,Manrope,Inter,system-ui,sans-serif);overflow-x:clip}
.about *{box-sizing:border-box}
.about h1,.about h2,.about h3,.about p,.about ul,.about ol,.about figure{margin:0;padding:0}
.about ul,.about ol{list-style:none}
.about a:focus-visible{outline:2px solid #6B5FD3;outline-offset:3px;border-radius:999px}
.about .wrap{width:min(1200px,100% - 48px);margin-inline:auto}
.about .pic{display:block;object-fit:cover;width:100%;height:100%}

.hero-wrap{height:calc(var(--hs)*2);position:relative;z-index:0}
.hero-sticky{position:sticky;top:var(--hh);height:var(--hs);padding:16px 16px 0}
.hero{position:relative;height:100%;border-radius:36px;overflow:hidden;border:1px solid var(--line);display:grid;place-items:center;
  background:radial-gradient(ellipse at 30% 20%,#FFFFFF 0%,transparent 55%),linear-gradient(180deg,#FCFBF8 0%,#F0EDF9 70%,#E8E3F6 100%)}
.lines{position:absolute;inset:0;width:100%;height:100%;opacity:.4;pointer-events:none}
.hero-copy{position:relative;z-index:2;text-align:center;max-width:760px;padding:0 24px}
.pill{display:inline-block;padding:8px 18px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.7);font-size:13px}
.hero h1{font-size:clamp(34px,5.4vw,66px);line-height:1.08;letter-spacing:-.03em;font-weight:700;margin-top:22px}
.lead{font-size:clamp(15px,1.4vw,18px);line-height:1.65;color:var(--mute);margin:22px auto 0;max-width:560px}
.cta{display:flex;align-items:center;justify-content:center;gap:26px;margin-top:32px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 28px;border-radius:999px;background:var(--ink);color:#fff;
  font-size:15px;font-weight:600;text-decoration:none;border:1px solid var(--ink);transition:transform .3s var(--ease),background .3s}
.btn:hover{transform:translateY(-2px);background:#33303a}
.ulink{color:var(--ink);font-size:15px;font-weight:600;text-decoration:none;background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;padding-bottom:3px;transition:background-size .4s var(--ease)}
.ulink:hover,.ulink:focus-visible{background-size:100% 1px}

.float{position:absolute;z-index:1;--py:0px;transform:translateY(var(--py));animation:pop 1s var(--ease) both}
.float .circ{width:100%;height:100%;border-radius:50%;border:4px solid #fff;box-shadow:0 6px 24px rgba(60,50,120,.1);animation:bob 7s ease-in-out infinite}
.f1{left:9%;top:30%;width:84px;height:84px;animation-delay:.5s}
.f2{right:9%;top:28%;width:92px;height:92px;animation-delay:.65s}.f2 .circ{animation-duration:8s}
.f3{left:19%;bottom:12%;width:64px;height:64px;animation-delay:.8s}.f3 .circ{animation-duration:6s}
.f4{right:18%;bottom:14%;width:74px;height:74px;animation-delay:.95s}.f4 .circ{animation-duration:9s}
.bubble{position:absolute;z-index:1;padding:9px 16px;font-size:13px;border:1px solid var(--line);border-radius:18px 18px 18px 4px;background:rgba(255,255,255,.9);color:var(--ink);animation:pop 1s var(--ease) 1.1s both}
.b1{left:5%;top:46%}.b2{right:4%;top:44%;border-radius:18px 18px 4px 18px;background:var(--lilac)}
.b3{left:7%;bottom:30%;padding:10px 14px}
.wave{display:inline-flex;align-items:center;gap:3px;height:28px}
.wave i{display:block;width:3px;border-radius:2px;background:#8C82D6;animation:eq 1.2s ease-in-out infinite}
@keyframes eq{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}
.pl1,.pl2,.pl3,.pl4{animation:rise .9s var(--ease) both}
.pl1{animation-delay:.1s}.pl2{animation-delay:.22s}.pl3{animation-delay:.36s}.pl4{animation-delay:.5s}
@keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes pop{from{opacity:0;scale:.85}to{opacity:1;scale:1}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

.intro{position:relative;z-index:2;min-height:var(--hs);background:linear-gradient(180deg,#FFFFFF 0%,#F8F6FC 100%);border-radius:48px 48px 0 0;margin-top:calc(var(--hs)*-1);padding:clamp(72px,10vw,140px) 0 clamp(64px,8vw,110px);box-shadow:0 -20px 60px rgba(60,50,120,.06)}
.intro .lines{opacity:.35}
.intro>.wrap,.sec>.wrap{position:relative;z-index:1}
.sec{position:relative}.sec .lines{opacity:.3}
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,6vw,96px);align-items:start}
.label{font-size:14px;color:var(--mute);margin-bottom:20px}
.about h2{font-size:clamp(30px,4.2vw,54px);line-height:1.1;letter-spacing:-.03em;font-weight:700}
.about h2.center{text-align:center}
.copy{padding-top:clamp(0px,4vw,48px);display:grid;gap:22px}
.copy p{font-size:clamp(17px,1.5vw,21px);line-height:1.7;color:var(--ink);max-width:540px}
.hw{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.14em;margin-bottom:-.14em}
.hw>span{display:inline-block}
.armed .hw>span{transform:translateY(115%);transition:transform .9s var(--ease)}
.armed.show .hw>span{transform:none}
.armed .label{opacity:0;transform:translateY(12px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.armed.show .label{opacity:1;transform:none}
.copy.scrub .w{opacity:.22;transition:opacity .35s ease-out}
.rest{position:relative;z-index:2;display:flex;flex-direction:column;gap:24px;padding:24px 0 32px;background:linear-gradient(180deg,#F1EEF8,#ECE8F6)}
.intro{border-bottom:1px solid var(--line)}
.surface{position:relative;width:min(1320px,calc(100% - 32px));margin-inline:auto;border:1px solid var(--line);border-radius:36px;overflow:clip}
.t-story{background:linear-gradient(160deg,#F2EEFB,#E3DCF6)}
.t-opts{background:linear-gradient(160deg,#FFFFFF,#FBFAFD)}
.t-vals{background:linear-gradient(160deg,#FBF8F2,#F2ECE2)}
.t-ed{background:linear-gradient(160deg,#FFFFFF,#EDE8F8)}

/* C — sticky storytelling (no overflow on ancestors, so sticky works) */
.story{position:relative}
.sticky-lines{position:sticky;top:var(--hh);height:calc(100svh - var(--hh));margin-bottom:calc(var(--hh) - 100svh);pointer-events:none;z-index:0}
.sticky-lines .lines{opacity:.4}
.story-grid{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,6vw,96px)}
.story-aside{order:2;position:sticky;top:var(--hh);height:calc(100svh - var(--hh));align-self:start;display:flex;flex-direction:column;justify-content:center}
.story-aside h2{font-size:clamp(34px,4.6vw,60px)}
.dots{display:flex;gap:8px;margin-top:32px}
.dots span{width:28px;height:2px;background:rgba(25,20,40,.15);transition:background .4s var(--ease),width .4s var(--ease)}
.dots span.on{background:var(--ink);width:44px}
.story-track{order:1;padding-bottom:12vh}
.stage{min-height:90vh;display:flex;flex-direction:column;justify-content:center;opacity:.2;transform:translateY(16px);transition:opacity .6s var(--ease),transform .6s var(--ease)}
.stage.on{opacity:1;transform:none}
.num{font-size:14px;color:var(--mute);margin-bottom:16px;font-variant-numeric:tabular-nums}
.stage h3{font-size:clamp(30px,3.8vw,48px);line-height:1.1;letter-spacing:-.025em;font-weight:700}
.stage p{margin-top:18px;font-size:clamp(16px,1.4vw,19px);line-height:1.65;color:var(--mute);max-width:420px}

.about .vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:clamp(64px,8vw,112px)}
.ab{position:relative;height:100%;background:rgba(255,255,255,.75);border:1px solid var(--line);padding:34px 28px 38px;transition:transform .45s var(--ease)}
.ab:hover,.ab:focus-within{transform:scale(1.035)}
.ab h3{font-size:21px;letter-spacing:-.01em;margin:26px 0 10px;font-weight:650}
.ab p{color:var(--mute);line-height:1.65;font-size:16px}
.ab-svg{position:absolute;inset:-1px;pointer-events:none;overflow:visible}
.ab-stroke{stroke:#171717;stroke-width:1.6;stroke-linecap:round;stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .8s var(--ease)}
.ab:hover .ab-stroke,.ab:focus-within .ab-stroke{stroke-dashoffset:0}
.list{padding:clamp(56px,8vw,110px) 0}
.about .acc{margin-top:clamp(40px,5vw,64px);border-top:1px solid var(--line)}
.acc-row{border-bottom:1px solid var(--line)}
.acc-btn,.acc-panel>div{display:grid;grid-template-columns:minmax(0,1fr) 56px minmax(0,1.3fr) 32px;align-items:center}
.acc-btn{width:100%;padding:26px 8px;background:none;border:0;cursor:pointer;font:inherit;color:inherit;text-align:left;border-radius:12px;transition:background .3s}
.acc-btn:hover{background:rgba(255,255,255,.6)}
.acc-btn:focus-visible{outline:2px solid #6B5FD3;outline-offset:2px}
.acc-ico{display:flex}
.acc-num{font-size:15px;color:var(--mute);font-variant-numeric:tabular-nums}
.acc-title{font-size:clamp(22px,2.6vw,34px);font-weight:700;letter-spacing:-.02em;line-height:1.15}
.acc-arrow{justify-self:end;transition:transform .45s var(--ease)}
.open .acc-arrow{transform:rotate(180deg)}
.acc-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s var(--ease)}
.open .acc-panel{grid-template-rows:1fr}
.acc-panel>div{overflow:hidden;min-height:0;padding:0 8px}
.acc-panel p{grid-column:3;padding:0 0 30px;color:var(--mute);line-height:1.65;font-size:17px;max-width:460px;opacity:0;transition:opacity .4s var(--ease)}
.open .acc-panel p{opacity:1}

.editorial{padding:clamp(56px,8vw,110px) 0}
.ed-grid{display:grid;grid-template-columns:1fr 1.15fr;gap:clamp(24px,4vw,56px);align-items:stretch}
.ed-left{display:flex;flex-direction:column;justify-content:space-between;gap:36px;min-width:0}
.ed-text p{margin-top:20px;color:var(--mute);line-height:1.7;font-size:17px;max-width:440px}
.ed-small{width:100%;aspect-ratio:16/10}
.ed-big{min-height:440px;min-width:0}
.ed-grid figure{position:relative;border-radius:22px;overflow:hidden;background:var(--lav)}
.ed-grid .fill{position:absolute;inset:0;transition:transform .8s var(--ease)}
.ed-grid figure:hover .fill{transform:scale(1.04)}
.ed-cap{position:absolute;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:48px 18px 16px;color:#fff;background:linear-gradient(180deg,transparent,rgba(23,23,23,.65))}
.ed-cap strong{font-size:18px;font-weight:650}
.ed-tag{padding:4px 12px;border-radius:999px;background:rgba(255,255,255,.9);color:var(--ink);font-size:12px}
.ed-over{font-size:14px;line-height:1.5;max-width:360px;max-height:0;opacity:0;overflow:hidden;transition:max-height .5s var(--ease),opacity .4s var(--ease)}
.ed-grid figure:hover .ed-over,.ed-grid figure:focus-within .ed-over{max-height:80px;opacity:1}

.closing{padding:0}
.panel{position:relative;overflow:hidden;text-align:center;border-radius:40px;border:1px solid var(--line);padding:clamp(56px,9vw,120px) 24px;background:linear-gradient(135deg,#DDD6F3 0%,#F0EDF9 45%,#FAF8F5 100%)}
.panel>*:not(svg):not(.ca){position:relative;z-index:1}
.ca{position:absolute;inset:0;overflow:hidden;z-index:0;pointer-events:none}
.ca-blob{position:absolute;border-radius:50%;width:55%;aspect-ratio:1;animation:drift 22s ease-in-out infinite alternate}
.ca-a{left:-10%;top:-30%;background:radial-gradient(circle,rgba(205,196,240,.9),transparent 65%)}
.ca-b{right:-12%;bottom:-45%;background:radial-gradient(circle,rgba(226,217,250,.9),transparent 65%);animation-duration:28s;animation-delay:-8s}
.ca-c{left:32%;top:15%;width:38%;background:radial-gradient(circle,rgba(252,246,238,.95),transparent 65%);animation-duration:25s;animation-delay:-14s}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(9%,10%) scale(1.18)}}
.ca-ring{position:absolute;left:50%;top:50%;width:34%;aspect-ratio:1;border-radius:50%;border:1px solid rgba(140,130,214,.5);opacity:.25;transform:translate(-50%,-50%) scale(1);animation:ripple 9s ease-out infinite}
.ca-r2{animation-delay:3s}.ca-r3{animation-delay:6s}
@keyframes ripple{from{transform:translate(-50%,-50%) scale(.45);opacity:.6}to{transform:translate(-50%,-50%) scale(2);opacity:0}}
.ca-bub{position:absolute;display:flex;align-items:center;gap:4px;padding:11px 15px;background:rgba(255,255,255,.88);border:1px solid var(--line);border-radius:18px 18px 18px 4px;animation:floaty 9s ease-in-out infinite}
.ca-bub i{display:block;width:6px;height:6px;border-radius:50%;background:#8C82D6;animation:blink 1.4s ease-in-out infinite}
.ca-bub i:nth-child(2){animation-delay:.2s}.ca-bub i:nth-child(3){animation-delay:.4s}
.ca-1{left:8%;top:20%}
.ca-2{right:9%;top:16%;border-radius:18px 18px 4px 18px;background:rgba(221,214,243,.95);animation-delay:-3s}
.ca-3{left:15%;bottom:18%;animation-delay:-6s}
.ca-4{right:13%;bottom:20%;animation-delay:-4.5s;border-radius:18px 18px 4px 18px}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes blink{0%,100%{opacity:.3}50%{opacity:1}}
.panel .lines{opacity:.45}
.panel p{margin:18px auto 0;max-width:480px;color:var(--mute);line-height:1.65;font-size:17px}

.rv{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease) var(--d,0ms),transform .8s var(--ease) var(--d,0ms)}
.rv.in{opacity:1;transform:none}
.about .ed-grid figure.rv{clip-path:inset(0 0 12% 0 round 22px);transition:opacity .9s var(--ease),transform .9s var(--ease),clip-path 1s var(--ease)}
.about .ed-grid figure.rv.in{clip-path:inset(0 0 0 0 round 22px)}

@media (max-width:1023px){
  .intro{border-radius:36px 36px 0 0}
  .bubble:not(.inbox),.f3,.f4{display:none}
  .f1{left:5%;top:12%;width:64px;height:64px}.f2{right:5%;top:12%;width:70px;height:70px}
  .ed-grid{grid-template-columns:1fr}.ed-left{display:contents}
  .ed-text{order:1}.ed-big{order:2;min-height:0;aspect-ratio:16/11}.ed-small{order:3}
}
/* story collapses to a normal single column */
@media (max-width:900px){
  .about .vgrid{grid-template-columns:1fr}
  .surface{border-radius:28px;width:calc(100% - 20px)}
  .story-grid{grid-template-columns:1fr;gap:0}
  .story-aside{order:0;position:static;height:auto;padding:64px 0 24px}
  .dots{display:none}
  .story-track{order:1;padding-bottom:48px}
  .stage{min-height:0;opacity:1;transform:none;padding:32px 0;border-top:1px solid var(--line)}
}
@media (max-width:700px){
  .hero-wrap{height:auto}
  .hero-sticky{position:relative;top:0;height:auto;min-height:0;padding:12px 12px 0}
  .hero{border-radius:28px;padding:110px 0 96px}
  .intro{margin-top:-28px;min-height:0;border-radius:28px 28px 0 0;padding-top:56px}
  .f1{left:6%;top:24px;width:52px;height:52px}.f2{right:6%;top:24px;width:56px;height:56px}
  .lines{opacity:.25}.split{grid-template-columns:1fr}
  .about .acc{margin-top:32px}
  .acc-btn,.acc-panel>div{grid-template-columns:44px 34px minmax(0,1fr) 26px}
  .acc-ico svg{width:30px;height:30px}
  .acc-btn{padding:20px 4px}
  .cta{gap:18px}.btn{width:100%;max-width:320px}.panel{border-radius:28px}
  .ca-3,.ca-4{display:none}.ca-1{left:5%;top:8%}.ca-2{right:5%;top:6%}
}
@media (prefers-reduced-motion:reduce){
  .about *,.about *::before{animation:none!important;transition:none!important}
  .rv{opacity:1;transform:none;clip-path:none!important}
  .float{transform:none}.stage{opacity:1;transform:none}
}
`;