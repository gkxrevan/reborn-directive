import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import heroImg from "@/assets/reborn-hero.jpg";
import ctaImg from "@/assets/reborn-cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecossistema Reborn — Da direção à monetização" },
      { name: "description", content: "Construa páginas dark, cresça audiência e transforme atenção em dinheiro. Império Viral + Código Reborn." },
      { property: "og:title", content: "Ecossistema Reborn" },
      { property: "og:description", content: "O sistema completo para crescer e monetizar páginas dark." },
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

function GhostBtn({ children, href = "#codigo" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur transition hover:border-[#4DA6FF]/60 hover:bg-[#4DA6FF]/10 hover:text-[#7FC0FF]"
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
      {/* Ambient blue gradients */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[#4DA6FF]/20 blur-[140px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[60vh] w-[60vw] rounded-full bg-[#1E78D6]/15 blur-[160px]" />
      </div>
      <Snow />

      {/* NAV */}
      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em]">
          <span className="text-[#4DA6FF] text-glow">⚔</span>
          <span>Reborn</span>
        </div>
        <a
          href="#oferta"
          className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-[#4DA6FF]/50 hover:text-[#7FC0FF] md:inline-flex"
        >
          Entrar no Ecossistema
        </a>
      </header>

      <Hero />
      <Problem />
      <Impact />
      <Timeline />
      <Pitch />
      <Imperio />
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

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center px-5 pt-10 text-center md:pt-16">
      <Reveal>
        <Eyebrow>Operação Reborn — Acesso Privado</Eyebrow>
      </Reveal>

      <div className="relative mt-2 flex w-full flex-col items-center">
        {/* Character with blue glow */}
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
          Você não está sem potencial.
          <br />
          <span className="text-glow text-[#7FC0FF]">Você está sem direção.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/65 md:text-lg"
        >
          Enquanto milhares continuam copiando conteúdo e esperando resultados, outros estão
          construindo páginas dark que crescem, geram audiência e produzem dinheiro todos os dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <PrimaryBtn>⚔ Começar agora</PrimaryBtn>
          <GhostBtn>👑 Conhecer o Código Reborn</GhostBtn>
        </motion.div>

        <div className="mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-white/40">
          <span>Acesso imediato</span>
          <span className="size-1 rounded-full bg-white/30" />
          <span>Comunidade ativa</span>
          <span className="size-1 rounded-full bg-white/30" />
          <span>Atualizações vitalícias</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. PROBLEM ---------- */
function Problem() {
  const items = [
    "Copia vídeos do TikTok",
    "Testa trend atrás de trend",
    "Posta todo dia sem saber o motivo",
    "Ganha seguidores mortos",
    "Viraliza uma vez e volta pro zero",
    "Não sabe o que está construindo",
  ];
  return (
    <Section id="problema">
      <Reveal>
        <div className="text-center">
          <Eyebrow>O Diagnóstico</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            VOCÊ NÃO TEM PROBLEMA DE <span className="text-[#7FC0FF]">ALCANCE</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
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

/* ---------- 3. IMPACT ---------- */
function Impact() {
  const bullets = [
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
        <Eyebrow>A Verdade</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black md:text-5xl">
          TODO RESULTADO COMEÇA COM{" "}
          <span className="text-[#7FC0FF] text-glow">DIREÇÃO</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
          Antes de vender. Antes de escalar. Antes de monetizar.
          <br />
          <span className="text-white">Você precisa de estrutura.</span>
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2 md:grid-cols-3">
        {bullets.map((b, i) => (
          <Reveal key={b} delay={i * 0.05}>
            <div className="card-glow rounded-2xl px-5 py-4 text-left text-sm font-medium text-white/85">
              <span className="mr-2 text-[#7FC0FF]">◆</span>
              {b}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 3b. TIMELINE — postar sem estrutura ---------- */
function Timeline() {
  const steps = ["POSTAR", "VIRALIZAR", "GANHAR SEGUIDORES", "NÃO MONETIZAR", "RECOMEÇAR DO ZERO"];
  return (
    <Section id="ciclo" className="text-center">
      <Reveal>
        <Eyebrow>O Loop Invisível</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black md:text-5xl">
          O QUE ACONTECE QUANDO VOCÊ POSTA{" "}
          <span className="text-[#7FC0FF]">SEM ESTRUTURA</span>?
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 flex max-w-md flex-col items-center">
        <div className="absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#4DA6FF]/60 to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 0.08}>
            <div className="my-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              {s}
            </div>
            {i < steps.length - 1 && <div className="my-1 text-[#4DA6FF]/70">↓</div>}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mx-auto mt-12 max-w-xl text-balance text-lg text-white/70">
          Visualização sem estrutura vira <span className="text-white">ilusão</span>.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- 3c. PITCH — Império não é mais um pack ---------- */
function Pitch() {
  const lines = [
    "Não sabe o que postar",
    "Não sabe qual nicho seguir",
    "Não sabe como crescer",
    "Não sabe como monetizar",
    "Está cansado de copiar conteúdo aleatório",
  ];
  return (
    <Section id="pitch">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>Não confunda</Eyebrow>
          <h2 className="text-balance text-3xl font-black md:text-5xl">
            IMPÉRIO VIRAL NÃO É MAIS{" "}
            <span className="text-[#7FC0FF] text-glow">UM PACK</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
            Você encontra vídeos em qualquer lugar. Mas vídeos não resolvem falta de direção.
            <br />
            <span className="text-white">O Império Viral foi criado para quem:</span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {lines.map((l, i) => (
            <Reveal key={l} delay={i * 0.05}>
              <div className="card-glow flex items-center gap-3 rounded-2xl px-5 py-4 text-sm text-white/85">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#4DA6FF]/20 text-[#7FC0FF]">→</span>
                {l}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-balance text-lg text-white/70">
            Aqui você recebe <span className="text-[#7FC0FF]">um caminho</span>.
            <br />
            Não apenas conteúdo.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Transition entre Império e Código ---------- */
function Transition() {
  return (
    <Section id="transicao" className="text-center">
      <Reveal>
        <Eyebrow>A Sequência</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
          PRIMEIRO VOCÊ APRENDE A{" "}
          <span className="text-[#7FC0FF]">CONSTRUIR</span>.
          <br />
          DEPOIS APRENDE A <span className="text-[#7FC0FF] text-glow">VENDER</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
          O Império Viral cria a base.
          <br />
          <span className="text-white">
            O Código Reborn transforma essa base em uma operação de vendas.
          </span>
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. IMPÉRIO VIRAL ---------- */
function Imperio() {
  const benefits = [
    "Fundamentos das páginas dark",
    "Construção de identidade",
    "Arsenal de conteúdo",
    "Estratégias de crescimento",
    "Sistemas de monetização",
    "Automação",
    "Escalamento",
    "Tráfego pago",
    "Prompts estratégicos",
    "Packs organizados por nicho",
  ];
  return (
    <Section id="imperio">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <Eyebrow>Etapa 01 — Base</Eyebrow>
          <h2 className="text-balance text-3xl font-black leading-tight md:text-5xl">
            Primeiro você constrói <span className="text-[#7FC0FF]">a base</span>.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/65">
            Antes de vender, você precisa crescer. O Império Viral é o blueprint exato para erguer
            uma página dark do zero — com identidade, conteúdo e tração real.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-white/85"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-[#4DA6FF]/20 text-[10px] text-[#7FC0FF]">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="card-glow rounded-full px-5 py-2 text-sm font-bold text-[#7FC0FF]">
              + 30.000 vídeos organizados
            </div>
            <div className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70">
              Acesso vitalício
            </div>
          </div>

          <div className="mt-10">
            <PrimaryBtn>Começar pelo Império Viral</PrimaryBtn>
          </div>
        </Reveal>

        {/* Mockup */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#4DA6FF]/15 blur-[80px]" />
            <div className="card-glow animate-float rounded-[1.75rem] p-3">
              <div className="rounded-[1.4rem] bg-gradient-to-br from-[#0a0a0a] to-[#0a1220] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-400/70" />
                  <span className="size-2.5 rounded-full bg-yellow-400/70" />
                  <span className="size-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
                    Área de Membros
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] rounded-xl border border-[#4DA6FF]/15 bg-gradient-to-br from-[#4DA6FF]/10 to-transparent p-3"
                    >
                      <div className="mb-2 h-2 w-1/2 rounded bg-[#4DA6FF]/40" />
                      <div className="h-1.5 w-3/4 rounded bg-white/10" />
                      <div className="mt-1.5 h-1.5 w-2/3 rounded bg-white/10" />
                      <div className="mt-6 h-6 rounded bg-[#4DA6FF]/15" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-xs text-white/60">
                  <span>Módulo 03 · Arsenal de Conteúdo</span>
                  <span className="text-[#7FC0FF]">62% concluído</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- 5. CÓDIGO REBORN ---------- */
function Codigo() {
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
          <Eyebrow>Etapa 02 — Monetização</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
            Depois você transforma audiência em{" "}
            <span className="text-[#7FC0FF] text-glow">dinheiro</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
            O Código Reborn é o sistema completo de vendas para quem já tem (ou está prestes a ter)
            audiência. Copy, funil, tráfego e oferta — sem improviso.
          </p>
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

/* ---------- 6. AI AGENTS ---------- */
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

/* ---------- 7. COMMUNITY ---------- */
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

/* ---------- 8. PROOF ---------- */
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
            Resultados deixam <span className="text-[#7FC0FF]">rastros</span>.
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

/* ---------- 9. FAQ ---------- */
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

/* ---------- 10. OFFER ---------- */
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
        {/* Card 1 */}
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
                "+30.000 vídeos organizados",
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
                Entrar no Império
              </a>
            </div>
          </div>
        </Reveal>

        {/* Card 2 - featured */}
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
                <PrimaryBtn className="w-full">⚔ Entrar no Código Reborn</PrimaryBtn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- 11. FINAL CTA ---------- */
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
            <span className="text-[#7FC0FF] text-glow">crescer</span> pode ser o seu.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70">
            Você pode continuar tentando sozinho.
            <br />
            Ou seguir um caminho construído para funcionar.
          </p>

          <div className="mt-12">
            <PrimaryBtn className="px-12 py-6 text-base">
              ⚔ Entrar no Ecossistema Reborn
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
