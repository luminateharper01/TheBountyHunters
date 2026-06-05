import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Target, Trophy, Zap, Crosshair, Skull, Crown, Star, Twitter, Send,
  ChevronRight, Flame, Shield, Award,
} from "lucide-react";
import heroImg from "@/assets/hero-hunter.jpg";
import coinImg from "@/assets/hunt-coin.png";
import { Copy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$HUNT — Bounty Hunters | Pump.fun" },
      { name: "description", content: "Pump.fun launched Bounties. We launched the Hunters. Join $HUNT — earn rewards, Hunt leaderboards, become a legend." },
      { property: "og:title", content: "$HUNT — Join The Hunt" },
      { property: "og:description", content: "Every holder is a hunter. Complete missions. Earn bounties." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <MarqueeTicker />
      <HolderHunter />
      <Ranks />
      <Bounties />
      <HunterWall />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={coinImg} alt="" width={60} height={60} className="drop-shadow-[0_0_8px_oklch(0.82_0.17_95)]" />
          <span className="font-display text-lg tracking-widest text-gold-gradient">$HUNT</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#ranks" className="hover:text-primary transition">Ranks</a>
          <a href="#bounties" className="hover:text-primary transition">Bounties</a>
          <a href="#wall" className="hover:text-primary transition">Wall</a>
        </nav>
        <a href="https://pump.fun/coin/EvMcvyTucNWj4DM5gyXH1L1pt8ZcEsED3CkeyMU2pump" target="_blank" className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:scale-105 transition glow-gold">
          Buy $HUNT
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const fullCA = "EvMcvyTucNWj4DM5gyXH1L1pt8ZcEsED3CkeyMU2pump";

  const shortCA =
    fullCA.length > 12
      ? `${fullCA.slice(0, 6)}...${fullCA.slice(-6)}`
      : fullCA;

  const copyCA = () => {
    const textarea = document.createElement("textarea");
    textarea.value = fullCA;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    toast.success("Contract address copied");
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-14">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]" />

      {/* gold dust particles */}
      <Particles />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-accent/40 rounded-full bg-accent/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Live on Pump.fun</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight"
        >
          <span className="block text-gold-gradient drop-shadow-[0_4px_20px_oklch(0.82_0.17_95/0.4)]">JOIN THE</span>
          <span className="block animate-flicker text-accent">HUNT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Pump.fun launched <span className="text-foreground font-semibold">Bounties</span>.
          <br className="sm:hidden" /> We launched the <span className="text-accent font-semibold">Hunters</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          id="buy"
        >
          <a href="https://pump.fun/coin/EvMcvyTucNWj4DM5gyXH1L1pt8ZcEsED3CkeyMU2pump" target="_blank" rel="noreferrer"
            className="group relative w-full  px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm overflow-hidden glow-gold hover:scale-[1.03] transition">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Crosshair className="w-4 h-4" /> Buy $HUNT
            </span>
          </a>
          <a href="https://x.com/BountyhuntersHQ" target="_blank" rel="noreferrer"
            className="w-full  px-7 py-3.5 rounded-md border border-border bg-card/60 backdrop-blur-sm font-bold uppercase tracking-wider text-sm hover:border-accent hover:text-accent transition flex items-center justify-center gap-2">
            <Twitter className="w-4 h-4" /> Join X
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 font-mono text-xs text-muted-foreground/70 tracking-wider flex items-center justify-center gap-2"
        >
          <span>CA:</span>

          <span className="text-primary/80">
            {shortCA}
          </span>

          <button
            onClick={copyCA}
            className="hover:text-primary transition-colors"
            aria-label="Copy contract address"
          >
            <Copy className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Particles() {
  const [dots, setDots] = useState<{ x: number; y: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: 40 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      d: Math.random() * 5 + 3, s: Math.random() * 3 + 1,
    })));
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((d, i) => (
        <span key={i}
          className="absolute rounded-full bg-primary animate-float-slow"
          style={{
            left: `${d.x}%`, top: `${d.y}%`,
            width: d.s, height: d.s,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${d.d}s`,
            boxShadow: `0 0 ${d.s * 3}px oklch(0.82 0.17 95)`,
          }}
        />
      ))}
    </div>
  );
}

function MarqueeTicker() {
  const items = ["$HUNT", "BOUNTY ACTIVE", "MISSION LIVE", "PUMP.FUN", "HUNTERS WANTED", "$HUNT", "STACK BAGS", "CLIMB RANKS"];
  return (
    <div className="border-y border-border/50 bg-card/40 py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-xl mx-8 text-muted-foreground/60 flex items-center gap-8">
            {t} <Star className="w-3 h-3 text-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function HolderHunter() {
  const items = [
    { icon: Target, title: "Complete Missions", desc: "Hunt bounties posted across Pump.fun. Every mission paid in $HUNT." },
    { icon: Trophy, title: "Earn Rewards", desc: "Real rewards for real hunters. No farming bots. No mercy." },
    { icon: Zap, title: "Hunt Leaderboards", desc: "Rise through the ranks. Only the sharpest reach the top." },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">// THE CODE</p>
        <h2 className="font-display text-4xl sm:text-6xl">Every Holder<br /><span className="text-gold-gradient">Is A Hunter</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="wanted-card rounded-lg p-8 group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-accent/20 transition" />
            <it.icon className="w-10 h-10 text-primary mb-5 group-hover:text-accent transition" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            <button
              onClick={() =>
                toast("🤠 Mission Board Opens Soon", {
                  description: "Check back later, Hunter.",
                })
              }
              className="mt-6 flex items-center text-xs uppercase tracking-widest text-primary group-hover:text-accent transition"
            >
              <span>Enlist</span>
              <ChevronRight className="w-3 h-3 ml-1" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Ranks() {
  const ranks = [
    { name: "Rookie Hunter", icon: Shield, req: "Hold $HUNT", color: "text-muted-foreground", border: "border-border" },
    { name: "Hunter", icon: Crosshair, req: "1 Mission Complete", color: "text-primary", border: "border-primary/40" },
    { name: "Elite Hunter", icon: Award, req: "10+ Bounties Closed", color: "text-accent", border: "border-accent/50" },
    { name: "Legendary Hunter", icon: Crown, req: "Top 100 Leaderboard", color: "text-accent", border: "border-accent" },
  ];
  return (
    <section id="ranks" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">// THE LADDER</p>
        <h2 className="font-display text-4xl sm:text-6xl">Hunter <span className="text-neon-gradient">Ranks</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ranks.map((r, i) => (
          <motion.div
            key={r.name}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative rounded-lg p-6 border ${r.border} bg-card/60 backdrop-blur-sm hover:bg-card transition group`}
          >
            <div className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/60">
              0{i + 1}
            </div>
            <r.icon className={`w-12 h-12 ${r.color} mb-4 group-hover:scale-110 transition`} strokeWidth={1.5} />
            <h3 className="font-display text-lg mb-1">{r.name}</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{r.req}</p>
            {i === 3 && (
              <div className="absolute inset-0 rounded-lg ring-1 ring-accent/50 animate-pulse-glow pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Bounties() {
  const bounties = [
    { tag: "ACTIVE", reward: "50,000 $HUNT", title: "The Whale Watcher", desc: "Track and tag the next 10 whales aping into Pump.fun launches.", level: "ELITE" },
    { tag: "HOT", reward: "120,000 $HUNT", title: "Diamond Hand Drill", desc: "Hold $HUNT for 30 days straight. No flips. No exits.", level: "LEGENDARY" },
    { tag: "OPEN", reward: "25,000 $HUNT", title: "Recruit The Posse", desc: "Bring 5 new hunters to the Telegram. Verified holders only.", level: "ROOKIE" },
  ];
  return (
    <section id="bounties" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">// WANTED</p>
        <h2 className="font-display text-4xl sm:text-6xl">Active <span className="text-gold-gradient">Bounties</span></h2>
       </motion.div>

      {/* <div className="grid md:grid-cols-3 gap-5">
        {bounties.map((b, i) => (
          <motion.article
            key={b.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, rotate: i === 1 ? 0 : i === 0 ? -0.5 : 0.5 }}
            className="wanted-card rounded-lg p-7 relative overflow-hidden group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-sm ${b.tag === "HOT" ? "bg-accent text-accent-foreground" :
                b.tag === "ACTIVE" ? "bg-primary text-primary-foreground" :
                  "bg-muted text-muted-foreground border border-border"
                }`}>
                {b.tag === "HOT" && <Flame className="inline w-3 h-3 mr-1" />}
                {b.tag}
              </span>
              <Skull className="w-5 h-5 text-muted-foreground/40" />
            </div>

            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Reward</div>
            <div className="font-display text-2xl text-gold-gradient mb-5">{b.reward}</div>

            <h3 className="font-display text-xl mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{b.desc}</p>

            <div className="pt-5 border-t border-border/50 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-accent">{b.level}</span>
              <button className="text-xs uppercase tracking-wider font-bold flex items-center gap-1 hover:text-accent transition">
                Accept <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </motion.article>
        ))}
      </div> */}
      <div className="wanted-card rounded-xl p-10 text-center max-w-3xl mx-auto">
        <div className="text-5xl mb-4">🤠</div>

        <h3 className="font-display text-3xl text-gold-gradient mb-4">
          Bounty Board Under Maintenance
        </h3>

        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          The Sheriff is preparing new missions and rewards.
          Check back soon, Hunter.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/40 bg-primary/5 text-primary text-sm uppercase tracking-widest">
          Coming Soon
        </div>
      </div>
    </section>
  );
}




function HunterWall() {
  const hunters = [
    "@deadshot.sol", "@vanta", "@goldrush", "@neonkid", "@0xreaper",
    "@silvercoyote", "@blackpowder", "@cipherjane", "@hexbandit",
    "@solgrim", "@thrasher", "@quickdraw_", "@nightowl.eth",
    "@dustdevil", "@ironwill", "@phantomx", "@ghostrider",
    "@coldsteel", "@bountyq", "@savagewest", "@kingpin", "@maverick.fun",
  ];
  return (
    <section id="wall" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">// HALL OF FAME</p>
        <h2 className="font-display text-4xl sm:text-6xl">Hunter <span className="text-neon-gradient">Wall</span></h2>
        <p className="mt-4 text-sm text-muted-foreground">Top hunters this cycle. Names earn their place.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
        {hunters.map((h, i) => (
          <motion.span
            key={h}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{ scale: 1.08, color: "var(--accent)" }}
            className={`font-mono text-sm px-3 py-1.5 rounded-md border border-border bg-card/60 cursor-pointer hover:border-accent transition ${i < 3 ? "text-primary border-primary/50 glow-gold" : "text-foreground"
              }`}
          >
            {i < 3 && <Crown className="inline w-3 h-3 mr-1 -mt-0.5" />}
            {h}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "repeating-linear-gradient(90deg, var(--accent) 0 1px, transparent 1px 80px)",
      }} />

      <motion.div {...fadeUp} className="relative z-10 max-w-4xl mx-auto text-center">
        <img src={coinImg} alt="" width={200} height={200} loading="lazy"
          className="mx-auto mb-8 animate-float-slow drop-shadow-[0_0_30px_oklch(0.82_0.17_95/0.6)]" />
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
          <span className="text-foreground">THE HUNT</span><br />
          <span className="animate-flicker text-accent">NEVER ENDS</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Once you're a hunter, you're a hunter for life. Saddle up.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://pump.fun/coin/EvMcvyTucNWj4DM5gyXH1L1pt8ZcEsED3CkeyMU2pump" target="_blank" rel="noreferrer" className="px-10 py-4 rounded-md bg-accent text-accent-foreground font-bold uppercase tracking-wider glow-neon hover:scale-105 transition">
            Buy $HUNT
          </a>
          <a href="https://x.com/BountyhuntersHQ" target="_blank" className="px-10 py-4 rounded-md border border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition">
            Join The Posse
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <img src={coinImg} alt="" width={70} height={70} loading="lazy" />
        <span className="font-display tracking-widest text-gold-gradient">$HUNT</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Built by hunters. Powered by Pump.fun. Nothing here is financial advice — DYOR.
      </p>
    </footer>
  );
}
