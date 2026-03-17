import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Zap, 
  Search, 
  ListFilter, 
  SendToBack, 
  Target,
  CheckCircle2,
  Building2,
  Briefcase,
  XCircle,
  Menu,
  BrainCircuit,
  MessageSquareQuote,
  Database,
  Clock,
  LayoutList,
  ArrowUpRight
} from "lucide-react";
import { LeadEnrichedCard } from "@/components/ui-mockups";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const itemAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }
};

function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl ${dark ? "bg-white/10 border border-white/20" : "bg-primary/10 border border-primary/20"}`}
      >
        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
        <span className={`font-semibold text-sm ${dark ? "text-white" : "text-foreground"}`}>
          Feito! Você está na lista. Avisamos quando abrir.
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className={`flex-1 h-12 px-4 rounded-xl text-sm font-medium outline-none transition-all border ${
          dark
            ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:bg-white/15"
            : "bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        }`}
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-lg shadow-primary/20 hover-elevate shrink-0"
      >
        Entrar na lista <ArrowRight className="ml-1.5 w-4 h-4" />
      </Button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight">ContextSales</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#o-que-e" className="hover:text-foreground transition-colors">O que é</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#para-quem" className="hover:text-foreground transition-colors">Para quem</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <a href="#lista-espera">
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold hover-elevate shadow-lg shadow-primary/20">
              Entrar na lista
            </Button>
          </a>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <main className="pt-16">
        
        {/* HERO */}
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Do formulário ao CRM, sem atrito
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Seu lead não vira mais um cadastro.{" "}
                <span className="text-shimmer">Ele chega pronto para o comercial agir.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                O ContextSales recebe o lead, pesquisa a empresa, monta um resumo comercial e entrega tudo no CRM com contexto, prioridade e próximo passo.
              </p>

              <div id="lista-espera" className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Lista de espera para o lançamento</p>
                <WaitlistForm />
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pesquisa automática da empresa</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Resumo comercial pronto</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> CRM com contexto e direção</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Menos pesquisa manual para o time</span>
              </div>
            </motion.div>

            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent rounded-3xl blur-2xl opacity-50" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/30 rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Enviado ao CRM automaticamente
              </motion.div>
              <LeadEnrichedCard />
            </div>
          </div>
        </section>

        {/* FAIXA DE PROVA */}
        <section className="py-6 px-4 bg-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Para operações B2B que geram inbound pelo site e não querem mais depender de{" "}
              <span className="text-primary font-semibold">cadastro cru, pesquisa manual</span> e achismo na primeira abordagem.
            </p>
          </div>
        </section>

        {/* O QUE É */}
        <section id="o-que-e" className="py-24 bg-white px-4 border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  A camada entre o lead que entra e a ação comercial que precisa acontecer
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  O ContextSales fica entre o formulário do seu site e o CRM da sua operação. Assim que o lead entra, a plataforma pesquisa a empresa, organiza os sinais mais relevantes e entrega um resumo comercial objetivo para o time agir com mais velocidade e clareza.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: "Recebe o lead assim que ele entra" },
                    { icon: Search, text: "Pesquisa empresa e contexto relevante" },
                    { icon: ListFilter, text: "Organiza um resumo comercial claro" },
                    { icon: Target, text: "Indica prioridade e próximo passo" },
                    { icon: SendToBack, text: "Entrega tudo no CRM ou fluxo de atendimento" },
                  ].map(({ icon: Icon, text }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3"
                    >
                      <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/5 transform rotate-2 rounded-3xl" />
                <LeadEnrichedCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* O PROBLEMA */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  O gargalo não está em gerar lead. Está em entender rápido quem entrou.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Em muitas operações, o lead chega ao CRM como nome, e-mail e pouco mais. A partir daí, alguém do time precisa abrir site, LinkedIn, buscar contexto e decidir se vale priorizar. Esse tempo atrasa o primeiro contato e reduz a qualidade da operação.
                </p>
                <div className="space-y-3">
                  {[
                    "O CRM recebe cadastro cru",
                    "O comercial precisa investigar antes de agir",
                    "Leads bons e ruins entram na mesma fila",
                    "A primeira abordagem começa com menos contexto do que deveria",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="space-y-4 text-sm text-muted-foreground">
                  {[
                    { step: "1", text: "Lead entra pelo formulário" },
                    { step: "2", text: "Cai no CRM com nome, e-mail e nada mais" },
                    { step: "3", text: "SDR abre LinkedIn, site, busca no Google..." },
                    { step: "4", text: "Tenta decidir se vale a pena responder" },
                    { step: "5", text: "Só então começa a pensar na abordagem" },
                  ].map(({ step, text }, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-border/40 last:border-0">
                      <div className="w-7 h-7 rounded-full bg-muted border border-border/50 flex items-center justify-center shrink-0 text-xs font-bold text-muted-foreground">
                        {step}
                      </div>
                      <span className="font-medium">{text}</span>
                      <Clock className="w-4 h-4 text-destructive/60 ml-auto shrink-0" />
                    </div>
                  ))}
                  <div className="pt-3 flex items-center gap-2 text-destructive font-semibold text-sm">
                    <XCircle className="w-4 h-4" />
                    Tempo perdido. Contexto zero. Abordagem no escuro.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ANTES x DEPOIS */}
        <section className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">O que muda na prática</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Antes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-muted/40 rounded-2xl p-8 border border-border/50"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">Antes</span>
                </div>
                <div className="space-y-4">
                  {[
                    "O lead entra pelo site",
                    "Cai no CRM com pouca informação",
                    "Alguém pesquisa manualmente a empresa",
                    "O time tenta descobrir se vale atenção",
                    "Só depois define abordagem e prioridade",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-muted-foreground">{i + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Depois */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-primary/25 shadow-lg shadow-primary/5"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground bg-primary px-3 py-1 rounded-full">Depois</span>
                </div>
                <div className="space-y-4">
                  {[
                    "O lead entra pelo site",
                    "O ContextSales pesquisa a empresa",
                    "Monta um resumo comercial objetivo",
                    "Define prioridade e próximo passo",
                    "Entrega tudo no CRM pronto para ação",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(173,255,47,0.4)]">
                        <span className="text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O QUE SUA OPERAÇÃO PASSA A RECEBER */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Seu time deixa de receber cadastro.{" "}
                <span className="text-primary">Passa a receber contexto.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {[
                {
                  icon: Building2,
                  title: "Empresa identificada",
                  desc: "Nome da empresa, site, segmento, porte estimado e sinais que ajudam o time a entender rapidamente com quem está falando.",
                },
                {
                  icon: LayoutList,
                  title: "Resumo comercial pronto",
                  desc: "Uma leitura curta e objetiva sobre o negócio, com contexto útil para a primeira abordagem comercial.",
                },
                {
                  icon: ArrowUpRight,
                  title: "Direção de atendimento",
                  desc: "Prioridade, encaminhamento e próximo passo dentro do fluxo atual da operação.",
                },
              ].map((block, i) => (
                <motion.div key={i} variants={itemAnim}>
                  <Card className="h-full bg-white border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-7">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <block.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">{block.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{block.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  Não é só dado. É clareza para agir.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  A diferença não está em adicionar mais campos ao lead. Está em entregar contexto comercial pronto, no lugar certo, para o time saber quem entrou e como avançar.
                </p>
                <div className="space-y-3">
                  {[
                    "Menos cadastro cru",
                    "Menos pesquisa manual",
                    "Mais contexto na primeira leitura",
                    "Mais clareza para o comercial agir",
                    "Sem trocar o CRM que sua operação já usa",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comparação com alternativas */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Por que não deixar isso só no CRM?</p>
                {[
                  {
                    label: "CRM sozinho",
                    desc: "Guarda e organiza contatos, mas normalmente recebe o lead ainda cru.",
                    highlight: false,
                  },
                  {
                    label: "Pesquisa manual",
                    desc: "Até funciona, mas consome tempo do comercial e não escala bem.",
                    highlight: false,
                  },
                  {
                    label: "ContextSales",
                    desc: "Trata o lead antes da ação comercial e entrega contexto pronto no fluxo certo.",
                    highlight: true,
                  },
                ].map((opt, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-5 border ${
                      opt.highlight
                        ? "border-primary/30 bg-primary/5 shadow-md shadow-primary/5"
                        : "border-border/50 bg-muted/30 opacity-70"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {opt.highlight && <Zap className="w-4 h-4 text-primary" />}
                      <span className={`font-bold text-sm ${opt.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                        {opt.label}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${opt.highlight ? "text-foreground/80" : "text-muted-foreground"}`}>
                      {opt.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PARA QUEM FAZ SENTIDO */}
        <section id="para-quem" className="py-24 px-4 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Feito para operações que não podem perder tempo na entrada comercial
              </h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Building2,
                  title: "Empresas B2B com inbound recorrente",
                  desc: "Geram demanda pelo site e precisam responder com mais velocidade e contexto.",
                  signals: [
                    "Formulário ativo no site",
                    "Time respondendo leads diariamente",
                    "Primeiro contato ainda lento demais",
                  ],
                },
                {
                  icon: Database,
                  title: "Times que recebem cadastro cru no CRM",
                  desc: "Hoje dependem de pesquisa manual antes de decidir a abordagem.",
                  signals: [
                    "SDR abre Google antes de ligar",
                    "Lead sem contexto de empresa",
                    "Fila sem critério de prioridade",
                  ],
                },
                {
                  icon: Briefcase,
                  title: "Operações com venda consultiva",
                  desc: "Precisam entender melhor o lead antes do primeiro contato, sem aumentar trabalho manual.",
                  signals: [
                    "Ticket médio exige contexto antes de agir",
                    "Abordagem genérica reduz conversão",
                    "Pesquisa consome tempo do comercial",
                  ],
                },
              ].map((card, i) => (
                <motion.div key={i} variants={itemAnim}>
                  <Card className="h-full bg-white/5 border-white/10 backdrop-blur text-white hover:bg-white/10 transition-colors">
                    <CardContent className="p-7 flex flex-col">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                        <card.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-white">{card.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">{card.desc}</p>
                      <div className="mt-auto space-y-2 pt-5 border-t border-white/10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Sinais comuns</p>
                        {card.signals.map((signal, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-white/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {signal}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA / COMO ENTRA NA SUA OPERAÇÃO */}
        <section id="como-funciona" className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como entra na sua operação</h2>
              <p className="text-lg text-muted-foreground">
                A implantação é feita para se encaixar no processo atual, sem pedir uma troca completa de stack.
              </p>
            </motion.div>
            
            <div className="relative max-w-2xl mx-auto mt-12">
              <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
              <div className="space-y-5">
                {[
                  { text: "Mapeamos como os leads entram hoje", icon: Search },
                  { text: "Definimos quais informações importam para a operação", icon: ListFilter },
                  { text: "Conectamos formulário, webhook ou CRM", icon: SendToBack },
                  { text: "Configuramos a lógica de contexto e encaminhamento", icon: BrainCircuit },
                  { text: "Validamos os primeiros leads processados", icon: CheckCircle2 },
                  { text: "Ajustamos antes de escalar", icon: ArrowUpRight },
                ].map(({ text, icon: Icon }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="relative flex items-center gap-5 pl-2"
                  >
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-[0_0_18px_rgba(173,255,47,0.35)] shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-4 flex-1 bg-white border border-border/50 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">O tipo de resultado que essa operação destrava</h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  quote: "Antes, o time precisava descobrir quem era a empresa antes de começar. Agora o lead já entra com contexto suficiente para agir rápido.",
                  name: "Mariana Lopes",
                  role: "Head de Receita",
                },
                {
                  quote: "A entrada comercial ficou muito mais clara. O CRM deixou de ser um depósito de cadastro e passou a receber oportunidade melhor organizada.",
                  name: "Felipe Andrade",
                  role: "Diretor Comercial",
                },
                {
                  quote: "O ganho não foi só velocidade. Foi qualidade na primeira abordagem.",
                  name: "Renata Costa",
                  role: "Revenue Operations",
                },
              ].map((t, i) => (
                <motion.div key={i} variants={itemAnim}>
                  <Card className="h-full bg-white border-border/50 shadow-sm">
                    <CardContent className="p-7 flex flex-col">
                      <MessageSquareQuote className="w-8 h-8 text-primary mb-5 shrink-0" />
                      <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
                      <div>
                        <p className="font-bold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
            </motion.div>

            <motion.div {...fadeIn}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Isso substitui meu CRM?",
                    a: "Não. O ContextSales entra antes do CRM e envia o lead com contexto, prioridade e próximo passo.",
                  },
                  {
                    q: "Preciso trocar meu formulário atual?",
                    a: "Não necessariamente. A integração pode ser feita com o fluxo que você já usa hoje.",
                  },
                  {
                    q: "Isso serve para outbound?",
                    a: "Não é o foco. A solução foi pensada para melhorar a entrada e o tratamento dos leads inbound.",
                  },
                  {
                    q: "O que exatamente o time recebe?",
                    a: "Empresa identificada, resumo comercial, prioridade e orientação de atendimento dentro do fluxo atual.",
                  },
                  {
                    q: "Funciona para qualquer empresa?",
                    a: "Funciona melhor em operações B2B com inbound e processo comercial consultivo.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                    <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-4 relative overflow-hidden bg-foreground text-background text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/80" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Pronto para ver na prática
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                Pare de mandar cadastro cru para o comercial
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Veja como cada lead pode entrar no CRM com empresa identificada, resumo comercial e próximo passo desde o primeiro segundo.
              </p>
              <div className="flex justify-center">
                <WaitlistForm dark />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-foreground text-white/60 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-lg tracking-tight">ContextSales</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#o-que-e" className="hover:text-white transition-colors">O que é</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#para-quem" className="hover:text-white transition-colors">Para quem</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-sm text-white/40">© 2025 ContextSales</p>
        </div>
      </footer>
    </div>
  );
}
