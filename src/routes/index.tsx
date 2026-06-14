import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import heroImg from "@/assets/reborn-hero.jpg";
import ctaImg from "@/assets/reborn-cta.jpg";

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
    "Copia vídeos do TikTok",
    "Testa trend atrás de trend",
    "Posta todo dia sem saber o motivo",
    "Ganha seguidores mortos",
    "Viraliza uma vez e volta para o zero",
    "Não sabe o que está construindo",
  ];
  return (
    <Section id="direcao">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Diagnóstico Direto</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Você não tem problema de <span className="text-[#7FC0FF]">alcance</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/65 md:text-xl">
            Você tem problema de <span className="text-white">direção</span>.
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
          A maioria não está sem potencial.
          <br />
          <span className="text-white">Está sem estrutura.</span>
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- IMPACT ---------- */
function Impact() {
  const pillars = [
    "Construir uma base",
    "Criar uma linha visual",
    "Entender posicionamento",
    "Saber o que postar",
    "Ter consistência",
    "Ter um plano",
  ];
  return (
    <Section id="impacto" className="text-center">
      <Reveal>
        <Eyebrow>Lei Inegociável</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          Todo resultado começa com{" "}
          <span className="text-[#7FC0FF] text-glow">direção</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
          Antes de vender. Antes de escalar. Antes de monetizar.
          <br />
          Você precisa de uma base.
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
function VitrineRow({ items }: { items: string[] }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max gap-5">
        {items.map((title, i) => (
          <div
            key={title}
            className="card-glow group relative flex h-[360px] w-[240px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#4DA6FF]/60 hover:shadow-[0_0_60px_-10px_#4DA6FF] md:h-[480px] md:w-[320px]"
            style={{
              backgroundImage:
                "radial-gradient(120% 80% at 50% 0%, rgba(77,166,255,0.18), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(77,166,255,0.04))",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-[#4DA6FF]/20 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#7FC0FF]">
                Módulo {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xl font-black leading-tight text-white md:text-2xl">
                {title}
              </div>
              <div className="mt-3 h-px w-10 bg-[#4DA6FF]/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImperioVitrine() {
  const row1 = [
    "Fundações do Império Anônimo",
    "Construindo sua Identidade",
    "Arsenal de Conteúdo Dark",
    "Estratégias de Crescimento",
    "Sistemas de Monetização",
    "Automação e Sistemas Operacionais",
    "Escalamento Imperial",
    "Tráfego Pago",
    "4 Formas de Monetização",
    "Prompts Estratégicos",
    "Pack Variados",
    "Pack Luxo",
    "Pack Dinheiro e Vendas",
    "Pack Lifestyle",
  ];
  const row2 = [
    "Pack Snowboard",
    "Pack Motivação",
    "Pack Filmes e Séries",
    "Pack Paisagens",
    "Pack Motos",
    "Pack Aeronaves",
    "Pack Relógios",
    "Pack Mar",
    "Pack Animações",
    "Arsenal Secreto",
  ];
  return (
    <Section id="imperio">
      <Reveal>
        <Eyebrow>Etapa 01 — Império Viral</Eyebrow>
        <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          A vitrine completa por <span className="text-[#7FC0FF]">dentro</span>.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/65">
          Um caminho organizado em módulos e arsenais — não um amontoado de vídeos soltos.
        </p>
      </Reveal>

      <div className="mt-12 space-y-6">
        <Reveal>
          <VitrineRow items={row1} />
        </Reveal>
        <Reveal delay={0.1}>
          <VitrineRow items={row2} />
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="card-glow rounded-full px-5 py-2 text-sm font-bold text-[#7FC0FF]">
            24 blocos · estrutura completa
          </div>
          <div className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70">
            Acesso vitalício
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- POST TIMELINE ---------- */
function PostTimeline() {
  const steps = [
    "POSTAR",
    "VIRALIZAR",
    "GANHAR SEGUIDORES",
    "NÃO MONETIZAR",
    "RECOMEÇAR DO ZERO",
  ];
  return (
    <Section id="ciclo" className="text-center">
      <Reveal>
        <Eyebrow>O Ciclo Invisível</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          O que acontece quando você posta{" "}
          <span className="text-[#7FC0FF]">sem estrutura</span>?
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
          Visualização sem estrutura vira <span className="text-white">ilusão</span>.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- NOT A PACK ---------- */
function NotAPack() {
  const items = [
    "Não sabe o que postar",
    "Não sabe qual nicho seguir",
    "Não sabe como crescer",
    "Não sabe como monetizar",
    "Está cansado de copiar conteúdo aleatório",
  ];
  return (
    <Section id="diferente">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Posicionamento</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Império Viral não é mais um{" "}
            <span className="text-[#7FC0FF]">pack</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
            Você encontra vídeos em qualquer lugar.
            <br />
            Mas vídeos não resolvem falta de direção.
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
          Não apenas conteúdo.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- TRANSITION ---------- */
function Transition() {
  return (
    <Section id="transicao" className="text-center">
      <Reveal>
        <Eyebrow>Sequência Lógica</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          Primeiro você aprende a <span className="text-[#7FC0FF]">construir</span>.
          <br />
          Depois aprende a <span className="text-[#7FC0FF] text-glow">vender</span>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-glow h-full rounded-2xl p-8 text-left">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
              Império Viral
            </div>
            <div className="mt-2 text-2xl font-black">Cria a base.</div>
            <p className="mt-3 text-sm text-white/65">
              Identidade, conteúdo, consistência e direção.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-glow h-full rounded-2xl border-[#4DA6FF]/50 bg-gradient-to-b from-[#4DA6FF]/10 to-transparent p-8 text-left shadow-[0_0_60px_-20px_#4DA6FF]">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#7FC0FF]">
              Código Reborn
            </div>
            <div className="mt-2 text-2xl font-black">Transforma em operação de vendas.</div>
            <p className="mt-3 text-sm text-white/80">
              Copy, funil, tráfego, oferta e escala.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- CÓDIGO REBORN ---------- */
function Codigo() {
  const flow = ["REEL VIRAL", "STORIES ESTRATÉGICOS", "CONEXÃO", "OFERTA", "VENDA", "ESCALA"];
  const benefits = [
    "Instagram Dark completo",
    "Storytelling",
    "Copy persuasiva",
    "Funis de vendas",
    "Facebook Ads",
    "Meta Ads",
    "Criativos",
    "Oferta irresistível",
    "Levantamento de caixa",
    "Clareza mental",
    "Escala",
  ];
  return (
    <Section id="codigo">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Etapa 02 — Código Reborn</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Sua página não precisa de mais{" "}
            <span className="text-[#7FC0FF]">views</span>.
            <br />
            Precisa de uma estrutura que{" "}
            <span className="text-[#7FC0FF] text-glow">vende</span>.
          </h2>
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
              É exatamente essa estrutura que <span className="text-white">usamos</span>.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <Reveal key={b} delay={i * 0.04}>
            <div className="card-glow group relative flex items-center gap-3 rounded-2xl p-5 transition hover:translate-y-[-2px] hover:border-[#4DA6FF]/50 hover:shadow-[0_0_40px_-10px_#4DA6FF]">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#4DA6FF] to-[#1E78D6] text-sm font-bold text-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-sm font-medium text-white/90">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- AI AGENTS ---------- */
function Agents() {
  const cards = [
    {
      name: "Agente Ane",
      role: "Arquitetura de Perfil",
      skills: ["Bios", "Estrutura de perfil", "Calendários", "Posicionamento", "Estratégia"],
    },
    {
      name: "Agente Reborn",
      role: "Engenharia de Vendas",
      skills: ["Copy", "Vendas", "Storytelling", "Funis", "Conversão", "Objeções"],
    },
  ];
  return (
    <Section id="agentes">
      <Reveal>
        <div className="text-center">
          <Eyebrow>IA Aplicada</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Sua equipe digital disponível <span className="text-[#7FC0FF]">24 horas</span>.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <div className="card-glow relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 size-48 rounded-full bg-[#4DA6FF]/15 blur-3xl" />
              <div className="flex items-center gap-4">
                <div className="relative grid size-16 place-items-center rounded-2xl border border-[#4DA6FF]/40 bg-gradient-to-br from-[#4DA6FF]/30 to-transparent text-2xl animate-pulse-glow">
                  <span>◇</span>
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
    { t: "Calls semanais", d: "Sessões ao vivo de estratégia e execução." },
    { t: "Networking", d: "Conexão direta com operadores em ação." },
    { t: "Mentorias", d: "Hot seats e revisões de funil." },
    { t: "Comunidade ativa", d: "Discord + WhatsApp em movimento todos os dias." },
  ];
  return (
    <Section id="comunidade">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Coletivo Reborn</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Você <span className="text-[#7FC0FF]">não cresce sozinho</span>.
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
    { name: "@dark.legions", metric: "+128k", text: "De 0 a 128k em 47 dias seguindo o blueprint." },
    { name: "@mente.fria", metric: "R$ 18k", text: "Primeiro mês com o funil do Código Reborn." },
    { name: "@noir.system", metric: "+72k", text: "Página dark crescendo em automático com IA." },
    { name: "@frostlab", metric: "R$ 6.4k", text: "Levantamento de caixa em 9 dias com Ads." },
    { name: "@vault.creator", metric: "+210k", text: "Audiência multiplicada com o arsenal de conteúdo." },
  ];
  return (
    <Section id="provas">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Provas</Eyebrow>
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
      q: "Funciona para iniciantes?",
      a: "Sim. O Império Viral foi desenhado para quem está começando do zero — sem audiência, sem nicho, sem ideia. O passo a passo cobre desde a primeira postagem até a escala.",
    },
    {
      q: "Preciso aparecer?",
      a: "Não. Todo o ecossistema é focado em páginas dark — você cresce e monetiza sem mostrar o rosto.",
    },
    {
      q: "O mercado está saturado?",
      a: "Saturado de cópia. Vazio de método. Quem entra com direção e identidade própria continua crescendo independente do volume de concorrentes.",
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Os primeiros sinais de tração aparecem nas primeiras semanas de execução consistente. Monetização real depende da etapa em que você está e da aplicação do material.",
    },
    {
      q: "Recebo atualizações?",
      a: "Sim. Acesso vitalício a todas as atualizações dos módulos, prompts, packs e estratégias.",
    },
    {
      q: "Tenho suporte?",
      a: "Sim. Comunidade ativa no Discord e WhatsApp, calls semanais e os agentes de IA disponíveis 24/7.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Perguntas Frequentes</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Tira as dúvidas. Toma a <span className="text-[#7FC0FF]">decisão</span>.
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
          <Eyebrow>Escolha sua Entrada</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-black md:text-5xl">
            Dois portais. <span className="text-[#7FC0FF]">Uma operação.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-glow flex h-full flex-col rounded-3xl p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Império Viral</div>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-sm text-white/40">R$</span>
              <span className="text-6xl font-black text-white">37</span>
              <span className="mb-2 text-sm text-white/40">à vista</span>
            </div>
            <p className="mt-3 text-lg text-white/75">Sua direção começa aqui.</p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "Blueprint completo de páginas dark",
                "24 blocos · módulos + arsenais",
                "Arsenal de conteúdo",
                "Prompts estratégicos",
                "Comunidade ativa",
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
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#4DA6FF]/60 hover:bg-[#4DA6FF]/10"
              >
                Quero começar pelo Império Viral
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full">
            <div className="absolute inset-0 -z-10 rounded-[1.75rem] bg-[#4DA6FF]/20 blur-3xl" />
            <div className="card-glow flex h-full flex-col rounded-3xl border-[#4DA6FF]/50 bg-gradient-to-b from-[#4DA6FF]/10 to-transparent p-8 shadow-[0_0_80px_-20px_#4DA6FF] md:p-10">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-[#7FC0FF]">Código Reborn</div>
                <div className="rounded-full border border-[#4DA6FF]/50 bg-[#4DA6FF]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7FC0FF]">
                  Recomendado
                </div>
              </div>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-sm text-white/40">R$</span>
                <span className="text-7xl font-black text-white text-glow">167</span>
                <span className="mb-2 text-sm text-white/40">à vista</span>
              </div>
              <p className="mt-3 text-lg text-white/85">
                A estrutura completa para crescer e monetizar.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/90">
                {[
                  "Tudo do Império Viral",
                  "Instagram Dark completo + Copy + Funis",
                  "Facebook & Meta Ads + Criativos",
                  "Oferta irresistível + Levantamento de caixa",
                  "Agentes de IA (Ane + Reborn) 24/7",
                  "Mentorias e calls semanais",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-[#4DA6FF] text-black">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <PrimaryBtn className="w-full">⚔ Quero a estrutura completa</PrimaryBtn>
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
          <Eyebrow>Última Porta</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-[1.05] md:text-6xl">
            O próximo perfil que vai{" "}
            <span className="text-[#7FC0FF] text-glow">viralizar</span> pode ser o seu.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
            Mas só existe uma pergunta.
            <br />
            Você vai continuar improvisando…
            <br />
            ou vai finalmente construir algo de verdade?
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GhostBtn href="#oferta" className="px-10 py-5 text-xs">
              Quero começar pelo Império Viral
            </GhostBtn>
            <PrimaryBtn className="px-10 py-5 text-xs">
              ⚔ Quero a estrutura completa
            </PrimaryBtn>
          </div>

          <div className="mt-8 text-[11px] uppercase tracking-[0.25em] text-white/40">
            Acesso imediato · Garantia · Suporte ativo
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
