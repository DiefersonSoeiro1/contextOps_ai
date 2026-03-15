import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Globe, Users, Target, Activity, Zap, Factory } from "lucide-react";
import { motion } from "framer-motion";

export function LeadEnrichedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="glass-panel overflow-hidden border-t-4 border-t-primary">
        <CardHeader className="bg-gradient-to-b from-primary/5 to-transparent pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary-foreground flex items-center justify-center">
                <Factory className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">TechFlow Solutions</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1 gap-1">
                  <Globe className="h-3 w-3" /> techflow.io
                </div>
              </div>
            </div>
            <Badge className="bg-primary/20 text-primary-foreground hover:bg-primary/30 border-none font-semibold shadow-none">
              Prioridade Alta
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center text-xs font-medium text-muted-foreground gap-1.5">
                <Building2 className="h-3.5 w-3.5" /> Segmento
              </div>
              <p className="text-sm font-semibold">SaaS / Automação</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center text-xs font-medium text-muted-foreground gap-1.5">
                <Users className="h-3.5 w-3.5" /> Porte
              </div>
              <p className="text-sm font-semibold">50-200 funcionários</p>
            </div>
          </div>
          
          <div className="space-y-1.5 pt-2 border-t border-border/50">
            <div className="flex items-center text-xs font-medium text-muted-foreground gap-1.5">
              <Target className="h-3.5 w-3.5" /> Resumo do Negócio
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              Plataforma em expansão. Levantou rodada Série A recente. 
              Foco atual em ganho de eficiência na operação de marketing B2B.
            </p>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-border/50">
            <div className="flex items-center text-xs font-medium text-muted-foreground gap-1.5">
              <Activity className="h-3.5 w-3.5" /> Sinais de Aderência
            </div>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Visitou página de preços 3x hoje</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>CTO interagiu com post sobre Inbound</span>
              </li>
            </ul>
          </div>
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
