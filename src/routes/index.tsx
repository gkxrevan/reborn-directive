import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroImg from "@/assets/reborn-hero.jpg";
import ctaImg from "@/assets/reborn-cta.jpg";
import module01 from "@/assets/module-01.png.asset.json";
import module02 from "@/assets/module-02.png.asset.json";
import module03 from "@/assets/module-03.png.asset.json";
import module04 from "@/assets/module-04.png.asset.json";
import module05 from "@/assets/module-05.png.asset.json";
import module06 from "@/assets/module-06.png.asset.json";
import module07 from "@/assets/module-07.png.asset.json";
import module08 from "@/assets/module-08.jpeg.asset.json";
import module09 from "@/assets/module-09.png.asset.json";
import module10 from "@/assets/module-10.png.asset.json";
import module11 from "@/assets/module-11.png.asset.json";
import module12 from "@/assets/module-12.png.asset.json";
import module13 from "@/assets/module-13.png.asset.json";
import module14 from "@/assets/module-14.png.asset.json";
import module15 from "@/assets/module-15.png.asset.json";
import module16 from "@/assets/module-16.png.asset.json";
import module17 from "@/assets/module-17.png.asset.json";
import module18 from "@/assets/module-18.png.asset.json";
import module19 from "@/assets/module-19.png.asset.json";
import module20 from "@/assets/module-20.png.asset.json";
import module21 from "@/assets/module-21.jpg.asset.json";
import module22 from "@/assets/module-22.png.asset.json";
import module23 from "@/assets/module-23.png.asset.json";
import module24 from "@/assets/module-24.png.asset.json";
import phonesAsset from "@/assets/phones-monetizacao.png.asset.json";
import imperioLogo from "@/assets/imperio-viral-logo.png.asset.json";
import codigoCover from "@/assets/codigo-reborn-cover.png.asset.json";
import academy01 from "@/assets/academy-01.png.asset.json";
import academy02 from "@/assets/academy-02.png.asset.json";
import academy03 from "@/assets/academy-03.png.asset.json";
import academy04 from "@/assets/academy-04.png.asset.json";
import academy05 from "@/assets/academy-05.png.asset.json";
import academy06 from "@/assets/academy-06.png.asset.json";
import academy07 from "@/assets/academy-07.png.asset.json";
import academy08 from "@/assets/academy-08.png.asset.json";
import academy09 from "@/assets/academy-09.png.asset.json";
import academy10 from "@/assets/academy-10.png.asset.json";
import academy11 from "@/assets/academy-11.png.asset.json";
import academy12 from "@/assets/academy-12.png.asset.json";
import academy13 from "@/assets/academy-13.png.asset.json";
import academy14 from "@/assets/academy-14.png.asset.json";
import academy15 from "@/assets/academy-15.png.asset.json";
import academy16 from "@/assets/academy-16.png.asset.json";
import academyUpdate from "@/assets/academy-update.png.asset.json";

/* ---------- Tracking (Meta Pixel / GA4 ready) ---------- */
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("trackCustom", event, params);
    window.gtag?.("event", event, params);
    (window.dataLayer ||= []).push({ event, ...params });
  } catch {}
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Império Viral — O mapa para quem está postando no escuro" },
      { name: "description", content: "Você não é burro. Só está postando igual todo mundo. O Império Viral te dá a direção que faltava. Depois, o Código Reborn transforma audiência em dinheiro." },
      { property: "og:title", content: "Império Viral — Direção para sair do zero" },
      { property: "og:description", content: "Pare de postar igual NPC. Tenha o mapa que faltava." },
      { property: "og:image", content: "/__og.jpg" },
    ],
  }),
  component: Index,
});

/* ---------- Atmosphere ---------- */
function Snow() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 16,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            filter: "blur(0.5px)",
            animation: `snowfall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Primitives ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-6xl px-5 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DA6FF]/30 bg-[#4DA6FF]/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
      <span className="size-1.5 rounded-full bg-[#4DA6FF] shadow-[0_0_10px_#4DA6FF]" />
      {children}
    </div>
  );
}

function PrimaryBtn({
  children,
  className = "",
  href = "#oferta",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      data-track="cta-primary"
      onClick={() => track("cta_click", { variant: "primary", href })}
      className={`btn-glow group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#4DA6FF] to-[#1E78D6] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:from-[#7FC0FF] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}

function GhostBtn({ children, href = "#codigo", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      data-track="cta-ghost"
      onClick={() => track("cta_click", { variant: "ghost", href })}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur transition hover:border-[#4DA6FF]/60 hover:bg-[#4DA6FF]/10 hover:text-[#7FC0FF] ${className}`}
    >
      {children}
    </a>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Page ---------- */
function Index() {
  // scroll-depth tracking
  useEffect(() => {
    if (typeof window === "undefined") return;
    const marks = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement;
      const pct = Math.round(((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100);
      [25, 50, 75, 100].forEach((m) => {
        if (pct >= m && !marks.has(m)) {
          marks.add(m);
          track("scroll_depth", { percent: m });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] font-[Inter] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[#4DA6FF]/20 blur-[140px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[60vh] w-[60vw] rounded-full bg-[#1E78D6]/15 blur-[160px]" />
      </div>
      <Snow />

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em]">
          <span className="text-[#4DA6FF] text-glow">⚔</span>
          <span>Reborn</span>
        </div>
        <a
          href="#oferta"
          className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-[#4DA6FF]/50 hover:text-[#7FC0FF] md:inline-flex"
        >
          Entrar no Império Viral
        </a>
      </header>

      <Hero />
      <DirectionProblem />
      <Impact />
      <ImperioVitrine />
      <PostTimeline />
      <NotAPack />
      <Transition />
      <Codigo />
      <Agents />
      <Community />
      <Proof />
      <ProofReserved />
      <FAQ />
      <Offer />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center px-5 pt-10 text-center md:pt-16">
      <Reveal>
        <Eyebrow>Império Viral — Para quem está postando no escuro</Eyebrow>
      </Reveal>

      <div className="relative mt-2 flex w-full flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 w-full max-w-[520px]"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[#4DA6FF]/25 blur-[100px]" />
          <img
            src={heroImg}
            alt="Personagem encapuzado Reborn em atmosfera de neve e neblina"
            width={1024}
            height={1408}
            className="mx-auto w-full select-none rounded-3xl"
            style={{
              maskImage:
                "linear-gradient(180deg, #000 60%, rgba(0,0,0,0.85) 80%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-2 max-w-3xl text-balance text-4xl font-black leading-[1.05] tracking-tight md:text-6xl"
        >
          Você não é burro.
          <br />
          <span className="text-glow text-[#7FC0FF]">Só está postando igual todo mundo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/65 md:text-lg"
        >
          Todo dia você procura uma trend. Copia um vídeo. Pega uma legenda. Posta cheio de esperança.
          E no outro dia? Nada muda.
          <br />
          Porque o problema nunca foi esforço. O problema sempre foi <span className="text-white">direção</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <PrimaryBtn>⚔ Quero parar de postar no escuro</PrimaryBtn>
          <GhostBtn>Ver como funciona</GhostBtn>
        </motion.div>

        <div className="mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-white/40">
          <span>Acesso imediato</span>
          <span className="size-1 rounded-full bg-white/30" />
          <span>Sem enrolação</span>
          <span className="size-1 rounded-full bg-white/30" />
          <span>Direção do zero</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIRECTION PROBLEM ---------- */
function DirectionProblem() {
  const items = [
    "Copia vídeo do TikTok",
    "Copia ideia do Pinterest",
    "Pega trend, posta e implora pro algoritmo",
    "300 views, sempre os mesmos 300",
    "Ganha seguidor morto que não engaja",
    "Viraliza uma vez e volta pro zero no dia seguinte",
  ];
  return (
    <Section id="direcao">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Para com isso</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Você não precisa postar <span className="text-[#7FC0FF]">mais</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/65 md:text-xl">
            Precisa parar de postar igual <span className="text-white">NPC</span>.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it} delay={i * 0.05}>
            <div className="card-glow group relative flex items-center gap-4 rounded-2xl p-5 transition hover:border-[#4DA6FF]/40">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-300">
                ✕
              </span>
              <p className="min-w-0 text-base font-medium text-white/85">{it}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-lg text-white/70 md:text-xl">
          O algoritmo não te odeia.
          <br />
          Ele só <span className="text-white">não entende</span> que tipo de página você criou.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- IMPACT ---------- */
function Impact() {
  const pillars = [
    "Identidade clara",
    "Linha visual definida",
    "Posicionamento",
    "Saber o que postar (e por quê)",
    "Consistência sem improviso",
    "Um plano de verdade",
  ];
  return (
    <Section id="impacto" className="text-center">
      <Reveal>
        <Eyebrow>Quebra de crença</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          O problema nunca foi alcance.
          <br />
          Foi falta de{" "}
          <span className="text-[#7FC0FF] text-glow">estrutura</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
          Não é falta de seguidor. Não é falta de sorte. Não é falta de talento.
          <br />
          É falta de um caminho organizado pra seguir.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p} delay={i * 0.05}>
            <div className="card-glow flex items-center gap-3 rounded-2xl p-5 text-left transition hover:border-[#4DA6FF]/40">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#4DA6FF] to-[#1E78D6] text-sm font-bold text-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-sm font-medium text-white/90">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- IMPÉRIO VITRINE ---------- */
type VitrineItem = { title: string; badge?: string; cover?: string; coverPosition?: string };

function VitrineRow({ items, startIndex = 0 }: { items: VitrineItem[]; startIndex?: number }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    loop: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    embla.on("scroll", onSelect);
  }, [embla, onSelect]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  const badgeStyles: Record<string, string> = {
    NOVO: "border-[#4DA6FF]/60 bg-[#4DA6FF]/15 text-[#7FC0FF]",
    POPULAR: "border-amber-400/40 bg-amber-400/10 text-amber-200",
    ESSENCIAL: "border-white/30 bg-white/10 text-white",
    AVANÇADO: "border-purple-400/40 bg-purple-500/10 text-purple-200",
    "MAIS ACESSADO": "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
  };

  return (
    <div className="relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#050505] to-transparent" />

      {/* arrows */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={scrollPrev}
        disabled={!canPrev}
        className="group absolute left-2 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[#4DA6FF]/40 bg-black/60 p-3 text-[#7FC0FF] backdrop-blur transition hover:scale-110 hover:border-[#4DA6FF] hover:bg-[#4DA6FF]/15 disabled:opacity-30 md:flex"
      >
        <span className="block size-4 -translate-x-[1px]">‹</span>
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={scrollNext}
        disabled={!canNext}
        className="group absolute right-2 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[#4DA6FF]/40 bg-black/60 p-3 text-[#7FC0FF] backdrop-blur transition hover:scale-110 hover:border-[#4DA6FF] hover:bg-[#4DA6FF]/15 disabled:opacity-30 md:flex"
      >
        <span className="block size-4 translate-x-[1px]">›</span>
      </button>

      <div ref={emblaRef} className="-mx-4 overflow-hidden px-4 sm:-mx-5 sm:px-5">
        <div className="flex gap-3 py-3 sm:gap-5">
          {items.map((it, i) => (
            <motion.button
              type="button"
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (startIndex + i) * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => track("vitrine_card_click", { title: it.title, index: i })}
              data-track="vitrine-card"
              className="card-glow group relative flex h-[340px] w-[215px] shrink-0 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl p-4 text-left transition-shadow duration-300 hover:border-[#4DA6FF]/60 hover:shadow-[0_0_60px_-8px_#4DA6FF] sm:h-[480px] sm:w-[320px] sm:p-5 md:h-[560px] md:w-[373px] lg:h-[600px] lg:w-[400px]"
              style={{
                backgroundImage:
                  "radial-gradient(120% 80% at 50% 0%, rgba(77,166,255,0.22), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(77,166,255,0.05))",
              }}
            >
              {it.cover && (
                <img
                  src={it.cover}
                  alt={it.title}
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ objectPosition: it.coverPosition ?? "center" }}
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="pointer-events-none absolute -right-12 -top-12 size-56 rounded-full bg-[#4DA6FF]/25 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-[#4DA6FF]/50 to-transparent" />

              {it.badge && (
                <span
                  className={`absolute left-5 top-5 z-10 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur ${badgeStyles[it.badge] ?? "border-white/20 bg-white/10 text-white"}`}
                >
                  {it.badge}
                </span>
              )}

              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#7FC0FF]">
                  Módulo {String(startIndex + i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xl font-black leading-tight text-white md:text-2xl">
                  {it.title}
                </div>
                <div className="mt-3 h-px w-10 bg-[#4DA6FF]/60 transition-all duration-300 group-hover:w-20" />
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="size-1 rounded-full bg-[#4DA6FF]" />
                  Abrir módulo
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImperioVitrine() {
  const row1: VitrineItem[] = [
    { title: "Fundações do Império Anônimo", badge: "ESSENCIAL", cover: module01.url, coverPosition: "center" },
    { title: "Construindo sua Identidade", badge: "ESSENCIAL", cover: module02.url, coverPosition: "center top" },
    { title: "Arsenal de Conteúdo Dark", badge: "MAIS ACESSADO", cover: module03.url, coverPosition: "center" },
    { title: "Estratégias de Crescimento", badge: "POPULAR", cover: module04.url, coverPosition: "center" },
    { title: "Sistemas de Monetização", cover: module05.url, coverPosition: "center" },
    { title: "Automação e Sistemas Operacionais", badge: "AVANÇADO", cover: module06.url, coverPosition: "center" },
    { title: "Escalamento Imperial", badge: "AVANÇADO", cover: module07.url, coverPosition: "center" },
    { title: "Tráfego Pago", badge: "NOVO", cover: module08.url, coverPosition: "center" },
    { title: "4 Formas de Monetização", cover: module09.url, coverPosition: "center" },
    { title: "Prompts Estratégicos", badge: "POPULAR", cover: module10.url, coverPosition: "center" },
  ];
  const row2: VitrineItem[] = [
    { title: "Pack Variados", cover: module11.url, coverPosition: "center" },
    { title: "Pack Luxo", cover: module12.url, coverPosition: "center" },
    { title: "Pack Dinheiro e Vendas", badge: "MAIS ACESSADO", cover: module13.url, coverPosition: "center" },
    { title: "Pack Lifestyle", cover: module14.url, coverPosition: "center" },
    { title: "Pack Snowboard", cover: module15.url, coverPosition: "center" },
    { title: "Pack Motivação", badge: "POPULAR", cover: module16.url, coverPosition: "center" },
    { title: "Pack Filmes e Séries", cover: module17.url, coverPosition: "center" },
    { title: "Pack Paisagens", cover: module18.url, coverPosition: "center" },
    { title: "Pack Motos", cover: module19.url, coverPosition: "center" },
    { title: "Pack Aeronaves", cover: module20.url, coverPosition: "center" },
    { title: "Pack Relógios", badge: "NOVO", cover: module21.url, coverPosition: "center" },
    { title: "Pack Mar", cover: module22.url, coverPosition: "center" },
    { title: "Pack Animações", cover: module23.url, coverPosition: "center" },
    { title: "Arsenal Secreto", badge: "AVANÇADO", cover: module24.url, coverPosition: "center" },
  ];

  const indicators = [
    { icon: "📦", label: "+1000 vídeos premium" },
    { icon: "🎯", label: "25 módulos estratégicos" },
    { icon: "🚀", label: "Atualizações frequentes" },
    { icon: "💎", label: "Pronto para aplicar" },
  ];

  const journey = [
    "Fundação",
    "Identidade",
    "Conteúdo",
    "Crescimento",
    "Monetização",
    "Escala",
    "Tráfego Pago",
  ];

  return (
    <Section id="imperio">
      <Reveal>
        <Eyebrow>Passo 01 — Império Viral</Eyebrow>
        <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          O mapa que faltava pra quem está <span className="text-[#7FC0FF]">perdido</span>.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/65">
          Não é curso. Não é pack. Não é área de membros qualquer.
          É a estrutura inteira pra você saber pra onde está indo — e parar de improvisar.
        </p>
      </Reveal>

      {/* Indicadores de valor */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          {indicators.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/80 backdrop-blur"
            >
              <span className="text-sm">{ind.icon}</span>
              <span className="uppercase tracking-[0.15em]">{ind.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Jornada visual */}
      <Reveal delay={0.15}>
        <div className="mt-8 -mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
            {journey.map((j, i) => (
              <span key={j} className="flex items-center gap-2">
                <span className="rounded-full border border-[#4DA6FF]/30 bg-[#4DA6FF]/5 px-3 py-1.5 text-[#7FC0FF]">
                  {String(i + 1).padStart(2, "0")} · {j}
                </span>
                {i < journey.length - 1 && <span className="text-[#4DA6FF]/50">→</span>}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Carrosséis premium */}
      <div className="mt-12 space-y-8">
        <VitrineRow items={row1} startIndex={0} />
        <VitrineRow items={row2} startIndex={row1.length} />
      </div>

      {/* Indicador de navegação */}
      <Reveal delay={0.2}>
        <div className="mt-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
          <span>← arraste</span>
          <span className="h-px w-12 bg-white/20" />
          <span>biblioteca completa</span>
          <span className="h-px w-12 bg-white/20" />
          <span>arraste →</span>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="card-glow rounded-full px-5 py-2 text-sm font-bold text-[#7FC0FF]">
            Direção · Estrutura · Conteúdo · Crescimento · Monetização
          </div>
          <div className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70">
            Acesso vitalício
          </div>
        </div>
      </Reveal>

      {/* CTA pós-biblioteca */}
      <Reveal delay={0.3}>
        <div className="card-glow relative mt-14 overflow-hidden rounded-3xl p-8 text-center md:p-12">
          <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-[#4DA6FF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-[#1E78D6]/20 blur-3xl" />
          <h3 className="mx-auto max-w-2xl text-balance text-2xl font-black leading-tight md:text-4xl">
            Você não precisa descobrir tudo sozinho.
            <br />
            <span className="text-[#7FC0FF] text-glow">A estrutura já está pronta.</span>
          </h3>
          <div className="mt-8 flex justify-center">
            <PrimaryBtn>⚔ Quero entrar no Império Viral</PrimaryBtn>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- POST TIMELINE ---------- */
function PostTimeline() {
  const steps = [
    "COPIAR TREND",
    "POSTAR ALEATORIAMENTE",
    "NÃO SAI 300 VIEWS",
    "SEGUIDORES MORTOS",
    "VOLTA PRO MESMO CICLO",
  ];
  return (
    <Section id="ciclo" className="text-center">
      <Reveal>
        <Eyebrow>O loop que te trava</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          É esse ciclo que você está vivendo {" "}
          <span className="text-[#7FC0FF]">há meses</span>?
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 flex max-w-md flex-col items-center">
        <div className="absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#4DA6FF]/60 to-transparent" />
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <Reveal key={s} delay={i * 0.08}>
              <div
                className={`my-2 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur ${
                  last
                    ? "border-red-500/40 bg-red-500/10 text-red-200"
                    : "border-white/10 bg-white/[0.02] text-white/80"
                }`}
              >
                {s}
              </div>
              {i < steps.length - 1 && <div className="my-1 text-[#4DA6FF]/70">↓</div>}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-12 max-w-xl text-balance text-lg text-white/70 md:text-xl">
          Postar sem direção não é trabalho. É <span className="text-white">passatempo</span>.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- NOT A PACK ---------- */
function NotAPack() {
  const items = [
    "Direção — pra onde sua página está indo",
    "Estrutura — como tudo se encaixa",
    "Conteúdo — o que postar, todo dia, sem improvisar",
    "Crescimento — como sair dos mesmos 300 views",
    "Monetização — quando faz sentido começar a vender",
    "Sistemas — pra não depender só de inspiração",
  ];
  return (
    <Section id="diferente">
      <Reveal>
        <div className="text-center">
          <Eyebrow>O que você encontra aqui dentro</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Império Viral não é mais um{" "}
            <span className="text-[#7FC0FF]">curso</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
            Curso, vídeo e pack você acha em qualquer lugar.
            <br />
            O que você nunca achou foi o <span className="text-white">mapa</span>.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {items.map((it, i) => (
          <Reveal key={it} delay={i * 0.05}>
            <div className="card-glow flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#4DA6FF]/30 bg-[#4DA6FF]/10 text-[#7FC0FF]">
                ◇
              </span>
              <p className="text-base text-white/85">{it}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-12 max-w-xl text-balance text-center text-lg text-white/80">
          Aqui você recebe um <span className="text-[#7FC0FF]">caminho</span>.
          <br />
          Não mais um monte de vídeo solto.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- TRANSITION ---------- */
function Transition() {
  return (
    <MonetizacaoEmMovimento />
  );
}

/* ---------- MONETIZAÇÃO EM MOVIMENTO ---------- */
function MonetizacaoCounter() {
  const [value, setValue] = useState(248116);
  useEffect(() => {
    const id = window.setInterval(() => {
      setValue((v) => v + Math.floor(20 + Math.random() * 90));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);
  const formatted = value.toLocaleString("pt-BR");
  return (
    <div className="relative inline-flex flex-col items-center">
      <span className="text-[11px] uppercase tracking-[0.3em] text-[#7FC0FF]/80">
        Faturamento em tempo real
      </span>
      <span className="mt-2 bg-gradient-to-b from-white via-white to-[#7FC0FF] bg-clip-text font-mono text-4xl font-black tracking-tight text-transparent md:text-6xl">
        R$ {formatted}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
        Atualizado continuamente · Operação ativa
      </span>
    </div>
  );
}

function FloatingChips() {
  const chips = useMemo(
    () => [
      { id: 1, text: "Checkout aprovado", top: "12%", left: "6%", delay: 0 },
      { id: 2, text: "Pagamento confirmado", top: "70%", left: "4%", delay: 2.4 },
      { id: 3, text: "Venda registrada", top: "20%", left: "82%", delay: 1.2 },
      { id: 4, text: "Pedido concluído", top: "76%", left: "78%", delay: 3.6 },
    ],
    [],
  );
  return (
    <>
      {chips.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{
            duration: 5,
            delay: c.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          style={{ top: c.top, left: c.left }}
          className="pointer-events-none absolute hidden items-center gap-2 rounded-full border border-[#4DA6FF]/30 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/90 shadow-[0_0_30px_-10px_#4DA6FF] backdrop-blur-xl md:flex"
        >
          <span className="grid size-4 place-items-center rounded-full bg-[#4DA6FF] text-[9px] font-bold text-black">
            ✓
          </span>
          {c.text}
        </motion.div>
      ))}
    </>
  );
}

function MonetizacaoEmMovimento() {
  return (
    <Section id="transicao" className="relative">
      {/* atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 size-[640px] -translate-x-1/2 rounded-full bg-[#4DA6FF]/20 blur-[160px]" />
        <div className="absolute bottom-0 left-[10%] size-[320px] rounded-full bg-[#1E78D6]/20 blur-[120px]" />
        <div className="absolute right-[8%] top-[20%] size-[260px] rounded-full bg-[#7FC0FF]/15 blur-[110px]" />
      </div>

      <Reveal>
        <div className="text-center">
          <Eyebrow>Operação digital em movimento</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Visualização <span className="text-[#7FC0FF] text-glow">não paga boleto</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            Enquanto a maioria está presa tentando entender o algoritmo...
            <br />
            outros estão construindo <span className="text-white">ativos digitais que trabalham todos os dias</span>.
          </p>
        </div>
      </Reveal>

      {/* Phones stage */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-16 flex w-full max-w-3xl items-center justify-center">
          <FloatingChips />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-0.8, 0.8, -0.8] }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative w-full max-w-[680px]"
            style={{ perspective: 1200 }}
          >
            <div className="absolute inset-x-10 bottom-2 -z-10 h-10 rounded-full bg-[#4DA6FF]/40 blur-[40px]" />
            <img
              src={phonesAsset.url}
              alt="Dois smartphones premium exibindo notificações de vendas e dashboard financeiro"
              className="mx-auto w-full select-none drop-shadow-[0_30px_60px_rgba(77,166,255,0.35)]"
            />
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-16 max-w-2xl text-center text-base text-white/75 md:text-lg">
          <p>
            O objetivo nunca foi acumular seguidores.
            <br />
            O objetivo é construir uma <span className="text-white">operação capaz de transformar atenção em resultado</span>.
          </p>
          <p className="mt-5 text-sm text-white/55 md:text-base">
            Sem depender de sorte. Sem depender de tendências aleatórias. Sem recomeçar do zero toda semana.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-center text-sm text-white/60">
            Crescer é importante. Mas crescer sem direção continua sendo andar em círculos.
          </p>
          <PrimaryBtn className="px-10 py-5 text-xs">⚔ Quero construir minha operação</PrimaryBtn>
        </div>
      </Reveal>

      {/* 3 mini-blocks */}
      <div className="mt-20 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-glow h-full overflow-hidden rounded-2xl p-6 text-left">
            <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0a1428] to-[#050505]">
              <img src={imperioLogo.url} alt="Império Viral" className="size-full object-cover" />
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
              Passo 01 · Império Viral
            </div>
            <div className="mt-2 text-xl font-black">Constrói a fundação.</div>
            <p className="mt-3 text-sm text-white/65">
              Direção, estrutura, identidade e crescimento. O começo de tudo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-glow h-full overflow-hidden rounded-2xl border-[#4DA6FF]/50 bg-gradient-to-b from-[#4DA6FF]/10 to-transparent p-6 text-left shadow-[0_0_60px_-20px_#4DA6FF]">
            <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#1a0a0a] to-[#050505]">
              <img src={codigoCover.url} alt="Código Reborn" className="size-full object-cover" />
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
              Passo 02 · Código Reborn
            </div>
            <div className="mt-2 text-xl font-black">Constrói a operação.</div>
            <p className="mt-3 text-sm text-white/80">
              A máquina de monetização: copy, funil, tráfego, oferta e escala.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- CÓDIGO REBORN ---------- */
function Codigo() {
  const flow = [
    "REEL VIRAL",
    "CARROSSÉIS MATADORES",
    "STORIES E DESTAQUES ESTRATÉGICOS",
    "OFERTA",
    "VENDA",
    "ESCALA",
  ];
  return (
    <Section id="codigo">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Passo 02 — Código Reborn (depois da fundação)</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Depois que você tem audiência,
            <br />
            chega a hora de transformar em{" "}
            <span className="text-[#7FC0FF] text-glow">dinheiro</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/65">
            Se o Império Viral te dá o mapa, o Código Reborn te dá a máquina.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="card-glow rounded-3xl p-6 md:p-10">
            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
              {flow.map((s, i) => (
                <div key={s} className="flex items-center gap-3 md:flex-col md:gap-2">
                  <div
                    className={`grid w-full place-items-center rounded-xl border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] md:w-28 md:text-center ${
                      i === flow.length - 1
                        ? "border-[#4DA6FF]/60 bg-[#4DA6FF]/15 text-white shadow-[0_0_40px_-10px_#4DA6FF]"
                        : "border-white/10 bg-white/[0.03] text-white/80"
                    }`}
                  >
                    {s}
                  </div>
                  {i < flow.length - 1 && (
                    <span className="text-[#4DA6FF]/70 md:rotate-0">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-white/70 md:text-base">
              É exatamente essa estrutura que <span className="text-white">usamos</span> pra vender todo dia.
            </p>
          </div>
        </div>
      </Reveal>

      <CodigoRebornAcademy />
    </Section>
  );
}

/* ---------- CÓDIGO REBORN ACADEMY (18 módulos) ---------- */
type AcademyModule = {
  n: string;
  title: string;
  desc: string;
  cover?: string;
  accent?: string;
};

function CodigoRebornAcademy() {
  const modules: AcademyModule[] = [
    {
      n: "01",
      title: "Avisos importantes",
      desc: "Boas-vindas e avisos importantes para o Código Reborn. O que esperar, como navegar e como extrair o máximo de cada módulo.",
      cover: academy01.url,
    },
    {
      n: "02",
      title: "Insta dark normal vs Insta dark que faz 5–6 dígitos por mês",
      desc: "Entenda a diferença entre quem posta por postar e quem construiu uma estrutura que vende todos os dias. Esse módulo muda a forma como você enxerga páginas dark.",
      cover: academy02.url,
    },
    {
      n: "03",
      title: "Construindo ativos digitais",
      desc: "Aprenda a criar ativos que trabalham por você mesmo enquanto dorme. Pare de trocar tempo por dinheiro e comece a construir algo que escala.",
      cover: academy03.url,
    },
    {
      n: "04",
      title: "Escolhendo nosso nicho",
      desc: "Como escolher o nicho certo para vender sem aparecer. Critérios práticos para começar já bem posicionado.",
      cover: academy04.url,
    },
    {
      n: "05",
      title: "Criando nossa dark page do zero",
      desc: "Passo a passo para criar sua página dark do absoluto zero. Nome, @, bio, identidade visual. Tudo configurado para vender desde o primeiro dia.",
      cover: academy05.url,
    },
    {
      n: "06",
      title: "Usando a Agente Ane",
      desc: "Como utilizar a Agente Ane, a IA exclusiva do Código Reborn especialista em páginas dark. Ela auxilia na criação de conteúdo, análise de perfis e otimização da estratégia.",
      cover: academy06.url,
    },
    {
      n: "07",
      title: "Fazendo o backup da página",
      desc: "Aprenda a proteger sua página realizando um backup completo para preservar seus ativos e configurações.",
      cover: academy07.url,
    },
    {
      n: "08",
      title: "Criando um avatar do zero",
      desc: "Crie um avatar personalizado sem precisar aparecer. Do conceito até a arte final.",
      cover: academy08.url,
    },
    {
      n: "09",
      title: "Upgrade no avatar",
      desc: "Leve sua identidade visual para outro nível com técnicas para tornar o avatar mais profissional e memorável.",
      cover: academy09.url,
    },
    {
      n: "10",
      title: "(???) entrou no jogo",
      desc: "Um módulo surpresa. Você entenderá seu verdadeiro propósito apenas quando assistir.",
      cover: academy10.url,
    },
    {
      n: "11",
      title: "Estruturando nossa dark page",
      desc: "Monte uma estrutura organizada para sua página. Bio, feed, stories, destaques. Cada elemento trabalhando em conjunto.",
      cover: academy11.url,
    },
    {
      n: "12",
      title: "Criando os Reels",
      desc: "Aprenda a criar Reels que atraem a audiência certa. Do roteiro até a edição.",
      cover: academy12.url,
    },
    {
      n: "13",
      title: "Aplicando legendas dinâmicas",
      desc: "Como adicionar legendas dinâmicas para melhorar retenção e experiência do usuário.",
      cover: academy13.url,
    },
    {
      n: "14",
      title: "Exportando os Reels corretamente",
      desc: "Configurações ideais para exportar vídeos mantendo máxima qualidade.",
      cover: academy14.url,
    },
    {
      n: "15",
      title: "Programando nos melhores horários",
      desc: "Aprenda a organizar suas publicações utilizando horários estratégicos para obter melhor desempenho.",
      cover: academy15.url,
    },
    {
      n: "16",
      title: "Vendas e storytelling",
      desc: "Como conduzir conversas utilizando storytelling e uma comunicação estruturada para transformar interesse em clientes.",
      cover: academy16.url,
    },
    {
      n: "17",
      title: "Como fazer carrosséis irresistíveis",
      desc: "Análise completa da estrutura de um carrossel real de alta performance. Entenda organização, copy, design e construção da mensagem.",
      accent: "from-[#7FC0FF]/30 to-[#0a1428]",
    },
    {
      n: "18",
      title: "Atualizações garantidas",
      desc: "O Código Reborn evolui constantemente. Novos conteúdos serão adicionados ao longo do tempo. Próximos temas: Blindagem de conta no Instagram, Tráfego pago na prática, Como turbinar carrosséis, Criando seu mentor de IA, novas estratégias e ferramentas.",
      cover: academyUpdate.url,
    },
  ];

  const [open, setOpen] = useState<string | null>("01");

  return (
    <div className="mt-20">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Plataforma · 18 módulos</Eyebrow>
          <h3 className="mx-auto max-w-3xl text-balance text-2xl font-black leading-tight md:text-4xl">
            Conteúdo do <span className="text-[#7FC0FF] text-glow">Código Reborn</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-base">
            18 módulos · Atualizações constantes · Acesso vitalício
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-3">
        {modules.map((m, i) => {
          const isOpen = open === m.n;
          return (
            <Reveal key={m.n} delay={Math.min(i * 0.02, 0.2)}>
              <div
                className={`group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all ${
                  isOpen
                    ? "border-[#4DA6FF]/50 bg-white/[0.04] shadow-[0_0_60px_-20px_#4DA6FF]"
                    : "border-white/10 bg-white/[0.02] hover:border-[#4DA6FF]/30 hover:bg-white/[0.035]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : m.n)}
                  className="flex w-full items-center gap-4 p-3 text-left md:gap-5 md:p-4"
                >
                  {/* thumbnail */}
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border border-white/10 md:size-24">
                    {m.cover ? (
                      <img
                        src={m.cover}
                        alt=""
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`size-full bg-gradient-to-br ${m.accent ?? "from-[#1E78D6]/40 to-[#0a1428]"}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute bottom-1 left-2 font-mono text-2xl font-black leading-none text-[#FFD37A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:bottom-1.5 md:left-2.5 md:text-3xl">
                      {m.n}
                    </span>
                  </div>

                  {/* title */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#7FC0FF]/70">
                      Módulo {m.n}
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm font-bold text-white md:text-base">
                      {m.title}
                    </div>
                  </div>

                  {/* chevron */}
                  <div
                    className={`grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#7FC0FF] transition-transform duration-500 ${
                      isOpen ? "rotate-90 border-[#4DA6FF]/40 bg-[#4DA6FF]/10" : ""
                    }`}
                  >
                    →
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5 px-4 py-5 text-sm leading-relaxed text-white/75 md:px-6 md:text-base">
                    {m.desc}
                  </div>
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- AI AGENTS ---------- */
import agenteAneAsset from "@/assets/agente-ane.png.asset.json";
import agenteRebornAsset from "@/assets/agente-reborn.png.asset.json";
function Agents() {
  const cards = [
    {
      name: "Agente Ane",
      role: "Arquitetura de Perfil",
      skills: ["Bios", "Estrutura de perfil", "Calendários", "Posicionamento", "Estratégia"],
      avatar: agenteAneAsset.url,
      avatarPosition: "center 30%",
    },
    {
      name: "Agente Reborn",
      role: "Engenharia de Vendas",
      skills: ["Copy", "Vendas", "Storytelling", "Funis", "Conversão", "Objeções"],
      avatar: agenteRebornAsset.url,
      avatarPosition: "center 35%",
    },
  ];
  return (
    <Section id="agentes">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Dentro do Código Reborn</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Dois agentes treinados pra trabalhar <span className="text-[#7FC0FF]">por você</span>.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <div className="card-glow relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 size-48 rounded-full bg-[#4DA6FF]/15 blur-3xl" />
              <div className="flex items-center gap-4">
                <div className="relative size-16 overflow-hidden rounded-2xl border border-[#4DA6FF]/40 bg-gradient-to-br from-[#4DA6FF]/30 to-transparent animate-pulse-glow">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    loading="lazy"
                    className="size-full object-cover"
                    style={{ objectPosition: c.avatarPosition }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
                    {c.role}
                  </div>
                  <div className="truncate text-2xl font-black">{c.name}</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                <span className="size-2 animate-pulse rounded-full bg-green-400" />
                Online · resposta instantânea
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- COMMUNITY ---------- */
function Community() {
  const items = [
    { t: "Comunidade ativa no Discord", d: "Galera executando junto, com calls ao vivo de estratégia e execução." },
    { t: "Atualizações constantes", d: "Conteúdo novo entrando sempre. Você nunca fica pra trás." },
    { t: "Suporte contínuo", d: "Tira-dúvidas, direção e revisão dos passos certos." },
    { t: "Deluxe Pack Pro", d: "Arsenal completo de conteúdo pronto pra usar." },
  ];
  return (
    <Section id="comunidade">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Você não anda sozinho</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Comunidade que <span className="text-[#7FC0FF]">executa</span> — não que só fala.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.07}>
            <div className="card-glow h-full rounded-2xl p-6">
              <div className="text-xl font-bold text-[#7FC0FF]">{it.t}</div>
              <p className="mt-2 text-sm text-white/65">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PROOF ---------- */
function Proof() {
  const proofs = [
    { name: "@dark.legions", metric: "+128k", text: "Saiu do zero seguindo o mapa do Império Viral." },
    { name: "@mente.fria", metric: "R$ 18k", text: "Primeiro mês vendendo depois de aplicar o Código Reborn." },
    { name: "@noir.system", metric: "+72k", text: "Página dark crescendo com direção, sem copiar trend." },
    { name: "@frostlab", metric: "R$ 6.4k", text: "Primeira venda de verdade depois de meses no escuro." },
    { name: "@vault.creator", metric: "+210k", text: "Estrutura aplicada, audiência respondendo todo dia." },
  ];
  return (
    <Section id="provas">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Quem aplicou, mudou</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Os números não <span className="text-[#7FC0FF]">mentem</span>.
          </h2>
        </div>
      </Reveal>

      <div className="-mx-5 mt-14 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-5">
          {proofs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="card-glow flex w-[300px] flex-col rounded-2xl p-6 sm:w-[340px]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white/90">{p.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7FC0FF]">verificado</div>
                </div>
                <div className="mt-6 text-4xl font-black text-[#7FC0FF] text-glow">{p.metric}</div>
                <p className="mt-3 text-sm text-white/65">{p.text}</p>
                <div className="mt-6 grid grid-cols-7 items-end gap-1.5">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-sm bg-gradient-to-t from-[#4DA6FF]/20 to-[#4DA6FF]"
                      style={{ height: 8 + ((i * 7 + j * 13) % 36) }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    {
      q: "Funciona pra quem está começando do zero?",
      a: "Funciona principalmente pra quem está no zero. O Império Viral foi feito pra quem está perdido — sem nicho, sem identidade, sem ideia do que postar. O mapa começa do começo mesmo.",
    },
    {
      q: "Preciso aparecer no vídeo?",
      a: "Não. Tudo é construído em cima de páginas dark — você cresce sem mostrar o rosto, sem gravar reels falando, sem nada disso.",
    },
    {
      q: "Não está tudo saturado?",
      a: "Saturado de quem copia. Vazio de quem tem direção. Enquanto a maioria está postando trend repetida, quem tem estrutura própria continua crescendo.",
    },
    {
      q: "Em quanto tempo eu vejo resultado?",
      a: "Os primeiros sinais costumam aparecer nas primeiras semanas de execução consistente. Resultado de verdade depende de quanto você aplica — não de sorte.",
    },
    {
      q: "E quando atualizar o conteúdo?",
      a: "Acesso vitalício. Toda atualização nova de módulo, prompt, pack ou estratégia já cai na sua área.",
    },
    {
      q: "E se eu travar no meio do caminho?",
      a: "Tem comunidade ativa no Discord com calls ao vivo e, no Código Reborn, os agentes de IA (Ane e Reborn) disponíveis 24h. Você não fica sozinho.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Última dúvida antes de entrar</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Tira a dúvida. Toma a <span className="text-[#7FC0FF]">decisão</span>.
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto mt-14 max-w-2xl space-y-3">
        {qs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className={`card-glow w-full overflow-hidden rounded-2xl p-6 text-left transition ${
                  isOpen ? "border-[#4DA6FF]/50 shadow-[0_0_40px_-15px_#4DA6FF]" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white md:text-lg">{item.q}</span>
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border border-[#4DA6FF]/40 text-[#7FC0FF] transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-white/65">{item.a}</div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- OFFER ---------- */
function Offer() {
  return (
    <Section id="oferta">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Escolha seu ponto de partida</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Passo 1 e Passo 2. <span className="text-[#7FC0FF]">Você escolhe por onde começa.</span>
          </h2>
        </div>
      </Reveal>

      {/* Prova social — barra glassmorphism */}
      <Reveal delay={0.05}>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl md:grid-cols-4 md:gap-0 md:p-4">
          {[
            { t: "Milhares de pessoas impactadas" },
            { t: "Atualizações constantes" },
            { t: "Comunidade ativa" },
            { t: "Suporte contínuo" },
          ].map((p, i) => (
            <div
              key={p.t}
              className={`flex items-center justify-center gap-2 px-3 py-2 text-center text-[11px] uppercase tracking-[0.18em] text-white/75 md:text-xs ${
                i > 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-[#7FC0FF] shadow-[0_0_10px_#4DA6FF]" />
              {p.t}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-glow flex h-full flex-col rounded-3xl p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Passo 01 · Império Viral</div>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-sm text-white/40">R$</span>
              <span className="text-6xl font-black text-white">37</span>
              <span className="mb-2 text-sm text-white/40">à vista</span>
            </div>
            <p className="mt-3 text-lg text-white/75">Pra quem precisa de direção.</p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "O mapa completo das páginas dark",
                "Identidade, posicionamento e linha visual",
                "O que postar (e por quê) todo dia",
                "Arsenal de conteúdo + prompts estratégicos",
                "Comunidade ativa pra você não andar sozinho",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-[#4DA6FF]/15 text-[#7FC0FF]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <a
                href="#"
                onClick={() => track("cta_click", { location: "offer_imperio" })}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#4DA6FF]/60 hover:bg-[#4DA6FF]/10"
              >
                Entrar no Império Viral
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-[#4DA6FF]/30 blur-[60px] animate-pulse-glow" />
            <div className="absolute -inset-px -z-10 rounded-[1.75rem] bg-gradient-to-b from-[#4DA6FF]/60 via-[#4DA6FF]/20 to-transparent blur" />
            <div className="card-glow relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#4DA6FF]/60 bg-gradient-to-b from-[#4DA6FF]/15 via-[#0a1a33]/40 to-transparent p-8 shadow-[0_0_120px_-20px_#4DA6FF] md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#4DA6FF]/25 blur-3xl" />
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-[#7FC0FF]">Passo 02 · Código Reborn</div>
                <div className="rounded-full border border-[#4DA6FF]/50 bg-[#4DA6FF]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7FC0FF]">
                  Próximo nível
                </div>
              </div>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-sm text-white/40">R$</span>
                <span className="text-7xl font-black text-white text-glow">167</span>
                <span className="mb-2 text-sm text-white/40">à vista</span>
              </div>
              <p className="mt-3 text-lg text-white/85">
                Pra quem quer transformar audiência em dinheiro.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/90">
                {[
                  "90% do Império Viral incluso",
                  "Copy persuasiva + Storytelling + Funis",
                  "Meta Ads + criativos + escalada",
                  "Garantia de 7 dias (reembolso 100%)",
                  "Agente Ane + Agente Reborn (IA 24h)",
                  "Deluxe Pack Pro, Comunidade ativa no Discord com calls ao vivo",
                  "+20 Videoaulas passo a passo",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-[#4DA6FF] text-black">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <PrimaryBtn className="w-full shadow-[0_0_50px_-10px_#4DA6FF]">
                  ⚔ Quero a operação completa
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col items-center justify-center px-5 py-32 text-center">
        <img
          src={ctaImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, #000 30%, rgba(0,0,0,0.5) 70%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA6FF]/25 blur-[160px]" />

        <Reveal>
          <Eyebrow>Última chance de mudar de direção</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-[1.05] md:text-6xl">
            Você pode continuar procurando mais uma{" "}
            <span className="text-[#7FC0FF] text-glow">trend</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
            Mais um vídeo. Mais uma legenda. Mais um truque.
            <br />
            Ou finalmente construir <span className="text-white">algo de verdade</span>.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryBtn className="px-10 py-5 text-xs">
              ⚔ Entrar no Império Viral
            </PrimaryBtn>
            <GhostBtn href="#oferta" className="px-10 py-5 text-xs">
              Ver o Código Reborn
            </GhostBtn>
          </div>

          <div className="mt-8 text-[11px] uppercase tracking-[0.25em] text-white/40">
            Acesso imediato · Sem enrolação · Você decide o ritmo
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-5 py-10 text-center text-xs uppercase tracking-[0.25em] text-white/40">
      © {new Date().getFullYear()} Reborn · Operação Privada
    </footer>
  );
}

/* ---------- PROOF RESERVED (estrutura pronta, sem conteúdo) ---------- */
function ProofReserved() {
  return (
    <Section id="depoimentos">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Em breve · prints e depoimentos</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Resultados reais de quem aplicou o <span className="text-[#7FC0FF]">mapa</span>.
          </h2>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="card-glow flex h-48 items-center justify-center rounded-2xl p-6 text-xs uppercase tracking-[0.25em] text-white/30">
              Espaço reservado
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
