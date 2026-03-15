import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Globe, Users, Target, Zap, Factory, CheckCircle2, TrendingUp, Timer, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.span ref={ref}>
      {rounded.get()}{suffix}
    </motion.span>
  );
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}

export function LeadEnrichedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="overflow-hidden border-t-4 border-t-primary shadow-xl shadow-primary/10 bg-white">
        {/* Processing badge */}
        <div className="px-5 pt-4 pb-0 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-semibold"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Enriquecido em 2.3s
          </motion.div>
          <Badge className="bg-primary/20 text-primary-foreground hover:bg-primary/30 border-none font-bold shadow-none text-xs">
            Prioridade Alta
          </Badge>
        </div>

        <CardHeader className="bg-gradient-to-b from-primary/5 to-transparent pb-3 pt-3">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center">
              <Factory className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-none">TechFlow Solutions</h3>
              <div className="flex items-center text-xs text-muted-foreground mt-1 gap-1">
                <Globe className="h-3 w-3" /> techflow.io
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-0">
          {/* Company info grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
                <Building2 className="h-3 w-3" /> Segmento
              </div>
              <p className="text-sm font-semibold">SaaS / Automação</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
                <Users className="h-3 w-3" /> Porte
              </div>
              <p className="text-sm font-semibold">50–200 funcionários</p>
            </div>
          </div>

          {/* Business summary */}
          <div className="space-y-1 pt-1 border-t border-border/50">
            <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
              <Target className="h-3 w-3" /> Resumo do Negócio
            </div>
            <p className="text-xs leading-relaxed text-foreground/80">
              Plataforma em expansão. Levantou rodada Série A recente. Foco em ganho de eficiência na operação de marketing B2B.
            </p>
          </div>

          {/* Fit score */}
          <div className="space-y-2 pt-1 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
                <TrendingUp className="h-3 w-3" /> Score de aderência
              </div>
              <span className="text-xs font-bold text-primary-foreground">87 / 100</span>
            </div>
            <ScoreBar score={87} />
          </div>

          {/* Speed metrics row */}
          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-border/50">
            {[
              { icon: Timer, label: "Tempo", value: "2.3s" },
              { icon: CheckCircle2, label: "Campos", value: "8" },
              { icon: ArrowUpRight, label: "Prioridade", value: "Alta" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center gap-0.5 bg-muted/50 rounded-lg py-2 px-1"
              >
                <stat.icon className="h-3.5 w-3.5 text-primary-foreground mb-0.5" />
                <span className="text-xs font-bold text-foreground">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Send to CRM button mock */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2"
          >
            <Zap className="h-3.5 w-3.5 text-primary-foreground shrink-0" />
            <span className="text-xs font-semibold text-foreground">Enviado ao CRM automaticamente</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 ml-auto shrink-0" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FlowComparison() {
  const currentSteps = [
    "O lead entra no formulário",
    "Alguém tenta descobrir quem é a empresa",
    "Pesquisa site, LinkedIn e infos públicas",
    "Decide se vale a pena atender",
    "Só então começa o contato"
  ];

  const newSteps = [
    "O lead preenche o formulário",
    "A plataforma recebe os dados",
    "O sistema busca infos complementares",
    "Organiza em um brief comercial",
    "Atribui prioridade baseada em critérios",
    "Envia para o CRM pronto para contato"
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
      {/* Current Flow */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 opacity-70 grayscale"
      >
        <div className="mb-6 flex items-center justify-between">
          <h4 className="font-bold text-lg text-muted-foreground">Fluxo atual (Manual)</h4>
          <Badge variant="secondary" className="bg-muted">Lento e reativo</Badge>
        </div>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {currentSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-muted-foreground/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-semibold text-muted-foreground">{idx + 1}</span>
              </div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-muted-foreground/10 bg-muted/30 shadow-sm text-sm text-muted-foreground">
                {step}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* VS Badge in center for desktop */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-background border border-border shadow-xl font-bold text-muted-foreground">
        VS
      </div>

      {/* New Flow */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5 border-2 border-primary/20"
      >
        <div className="mb-6 flex items-center justify-between">
          <h4 className="font-bold text-lg text-foreground">Fluxo novo (ContextOps)</h4>
          <Badge className="bg-primary text-primary-foreground hover:bg-primary shadow-sm border-none">Rápido e inteligente</Badge>
        </div>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-primary/50 before:to-primary/20">
          {newSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-[0_0_15px_rgba(173,255,47,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">{idx + 1}</span>
              </div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-primary/20 bg-primary/5 shadow-sm text-sm font-medium text-foreground">
                {step}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
