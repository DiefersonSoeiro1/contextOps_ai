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
  Workflow,
  Clock,
  Target,
  LineChart,
  BrainCircuit,
  CheckCircle2,
  Building2,
  Users,
  Database,
  Briefcase,
  XCircle,
  Menu,
  Bot,
  Focus
} from "lucide-react";
import { LeadEnrichedCard, FlowComparison } from "@/components/ui-mockups";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight">ContextOps</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#produto" className="hover:text-foreground transition-colors">Produto</a>
            <a href="#funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#para-quem" className="hover:text-foreground transition-colors">Para quem</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold text-foreground hover-elevate">
              Entrar
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold hover-elevate shadow-lg shadow-primary/20">
              Agendar demonstração
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <main className="pt-16">
        
        {/* 2. HERO SECTION */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 px-4 overflow-hidden">
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
                Mais contexto para vender
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 gradient-text">
                Seu time comercial recebe o lead já <span className="text-foreground">pesquisado</span> e <span className="text-foreground">priorizado</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Quando um lead entra no formulário do seu site, a plataforma busca contexto da empresa, organiza as informações mais relevantes e envia tudo para o CRM com mais clareza para a equipe agir rápido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base h-14 px-8 shadow-xl shadow-primary/20 hover-elevate">
                  Agendar demonstração <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 font-semibold text-base bg-white hover-elevate border-border/80">
                  Ver como funciona
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Mais contexto para vender</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Menos pesquisa manual</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Melhor priorização</span>
              </div>
            </motion.div>

            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent rounded-3xl blur-2xl opacity-50" />

              {/* Floating stat: speed */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-6 top-10 z-20 flex items-center gap-2 bg-white border border-border shadow-lg rounded-full px-3 py-1.5 text-xs font-semibold"
              >
                <Zap className="w-3.5 h-3.5 text-primary-foreground" />
                Enriquecido em 2.3s
              </motion.div>

              {/* Floating stat: sent to CRM */}
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

        {/* 3. WHAT IT IS SECTION */}
        <section id="produto" className="py-24 bg-white px-4 border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma camada de inteligência para leads inbound</h2>
              <p className="text-lg text-muted-foreground">
                A solução fica entre o formulário do seu site e o CRM da sua operação. Ela recebe o lead, busca dados complementares, organiza um resumo comercial e ajuda sua equipe a entender mais rápido quem vale atenção primeiro.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: Zap, title: "Captura instantânea", desc: "Captura o lead assim que ele entra no formulário do site." },
                { icon: Search, title: "Enriquecimento", desc: "Busca informações complementares da empresa automaticamente." },
                { icon: ListFilter, title: "Contexto objetivo", desc: "Organiza o contexto comercial de forma clara e direta." },
                { icon: Target, title: "Classificação", desc: "Classifica o lead conforme critérios definidos pela sua operação." },
                { icon: SendToBack, title: "Integração CRM", desc: "Envia o resultado enriquecido para o CRM ou fluxo comercial." }
              ].map((feature, i) => (
                <motion.div key={i} variants={itemAnim}>
                  <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow bg-background/50 hover:bg-white">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. WHAT THE TEAM RECEIVES SECTION */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">O que sua operação passa a receber</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Em vez de trabalhar apenas com nome, email e telefone, seu time pode receber o lead com mais contexto para decidir a abordagem inicial.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Nome da empresa", "Site e Presença online", 
                    "Segmento de atuação", "Porte estimado", 
                    "Links relevantes", "Resumo objetivo do negócio", 
                    "Critérios de priorização", "Prioridade do lead"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/5 transform rotate-3 rounded-3xl" />
                <LeadEnrichedCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. PROBLEM SECTION */}
        <section id="funciona" className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O problema não é falta de lead. É falta de contexto no momento certo.</h2>
              <p className="text-lg text-muted-foreground">
                Em muitas operações, o lead entra e o time precisa parar para pesquisar manualmente antes de agir. Isso consome tempo, atrasa o contato e reduz a qualidade da priorização.
              </p>
            </motion.div>
            
            <FlowComparison />
          </div>
        </section>

        {/* 6. BENEFITS SECTION */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center">O ganho para a operação</h2>
            </motion.div>

            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: Clock, title: "Menos tempo gasto", desc: "Reduza drasticamente o tempo gasto pesquisando leads manualmente." },
                { icon: Zap, title: "Mais velocidade", desc: "Aumente a velocidade no primeiro contato com as informações na mão." },
                { icon: Filter, title: "Melhor triagem", desc: "Triagem comercial mais assertiva baseada em dados reais e atualizados." },
                { icon: BrainCircuit, title: "Mais contexto", desc: "Abordagem inicial personalizada e relevante desde o primeiro email." },
                { icon: Target, title: "Foco no potencial", desc: "Energia da equipe direcionada para os leads com maior potencial de fechamento." },
                { icon: Workflow, title: "Consistência", desc: "Um processo de inbound mais padronizado, escalável e consistente." }
              ].map((benefit, i) => (
                <motion.div key={i} variants={itemAnim}>
                  <Card className="h-full bg-white border-border/50 hover-elevate">
                    <CardContent className="p-6">
                      <benefit.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 7. FOR WHOM SECTION */}
        <section id="para-quem" className="py-24 px-4 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Para quem faz sentido</h2>
                <div className="space-y-6">
                  {[
                    { icon: Building2, text: "Empresas B2B que geram leads pelo site" },
                    { icon: Users, text: "Times comerciais com inbound recorrente" },
                    { icon: Database, text: "Operações que usam CRM e querem enriquecer o lead na entrada" },
                    { icon: Briefcase, text: "Empresas com venda consultiva" },
                    { icon: LineChart, text: "Times que precisam priorizar melhor sem aumentar trabalho manual" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="font-medium text-lg text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block relative"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <Card className="bg-white/10 border-white/10 backdrop-blur text-white p-6 shadow-xl">
                      <Building2 className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-bold text-xl mb-2">B2B Focus</h4>
                      <p className="text-white/70 text-sm">Ideal para vendas complexas</p>
                    </Card>
                    <Card className="bg-white/10 border-white/10 backdrop-blur text-white p-6 shadow-xl">
                      <LineChart className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-bold text-xl mb-2">Escala</h4>
                      <p className="text-white/70 text-sm">Sem gargalos manuais</p>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-white/10 border-white/10 backdrop-blur text-white p-6 shadow-xl">
                      <Database className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-bold text-xl mb-2">Integração</h4>
                      <p className="text-white/70 text-sm">Conecta com seu CRM</p>
                    </Card>
                    <Card className="bg-primary border-primary backdrop-blur text-primary-foreground p-6 shadow-xl">
                      <Bot className="w-10 h-10 mb-4 opacity-80" />
                      <h4 className="font-bold text-xl mb-2">Inteligência</h4>
                      <p className="text-primary-foreground/80 text-sm">Contexto acionável</p>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. HOW IT ENTERS SECTION */}
        <section className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Como entra na sua operação</h2>
              <p className="text-lg text-muted-foreground">
                A implantação é pensada para se encaixar no processo atual, sem exigir uma mudança completa de ferramenta.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                "Mapeamos como os leads entram hoje",
                "Definimos quais informações são relevantes",
                "Conectamos formulário, webhook ou CRM",
                "Configuramos a lógica de enriquecimento e prioridade",
                "Validamos os primeiros leads processados",
                "Ajustamos os critérios antes de escalar"
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col gap-4 p-6 bg-muted/30 rounded-2xl border border-border/50 h-full hover:bg-white hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg shadow-sm">
                      {i + 1}
                    </div>
                    <p className="font-medium text-foreground">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div {...fadeIn} className="text-center">
              <div className="inline-block bg-primary/10 text-primary-foreground font-medium px-6 py-3 rounded-full text-sm border border-primary/20">
                🎯 O objetivo é colocar o fluxo para rodar com o menor atrito possível.
              </div>
            </motion.div>
          </div>
        </section>

        {/* 9 & 10. WHAT IT IS NOT / DIFFERENTIATOR */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            
            {/* What it is not */}
            <motion.div {...fadeIn} className="bg-white p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">O que isso <span className="text-destructive">não</span> é</h2>
              <p className="text-muted-foreground mb-8">
                A proposta aqui não é substituir toda a sua stack comercial, nem vender uma promessa genérica de dados.
              </p>
              <div className="space-y-4">
                {[
                  "Não é um CRM",
                  "Não é uma ferramenta de prospecção outbound",
                  "Não é uma base massiva de contatos",
                  "Não substitui o processo comercial da sua equipe",
                  "Não gera demanda por conta própria",
                  "Não promete volume de leads, e sim mais contexto e triagem"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Differentiator */}
            <motion.div {...fadeIn} className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Não é só dado. É contexto para decisão comercial.</h2>
              <p className="text-lg text-muted-foreground mb-10">
                A diferença não está apenas em adicionar campos ao lead. Está em ajudar sua equipe a entender mais rápido com quem está falando e como priorizar o atendimento.
              </p>
              
              <div className="grid gap-6">
                <Card className="border-border/50 shadow-sm hover-elevate">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="text-muted-foreground font-medium strike">Menos dado solto</div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                    <div className="text-primary-foreground font-bold flex items-center gap-2">
                      <Focus className="w-5 h-5 text-primary" />
                      Mais contexto organizado
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 shadow-sm hover-elevate">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="text-muted-foreground font-medium strike">Menos esforço manual</div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                    <div className="text-primary-foreground font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Mais clareza para agir
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section id="faq" className="py-24 px-4 bg-white border-y border-border/40">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Perguntas frequentes</h2>
            </motion.div>

            <motion.div {...fadeIn}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Isso substitui meu CRM?",
                    a: "Não. A solução complementa o CRM, enviando o lead com mais contexto e prioridade para que sua equipe trabalhe na ferramenta que já domina."
                  },
                  {
                    q: "Preciso trocar meu formulário atual?",
                    a: "Não necessariamente. A integração pode ser feita com o fluxo que você já usa, através de webhooks ou integrações nativas."
                  },
                  {
                    q: "Isso serve para prospecção outbound?",
                    a: "Não é o foco principal. A solução foi pensada para qualificar melhor os leads inbound que já entram na sua operação."
                  },
                  {
                    q: "Isso funciona para qualquer empresa?",
                    a: "Funciona melhor em operações B2B com inbound e processo comercial consultivo, onde entender o contexto da empresa faz diferença no fechamento."
                  },
                  {
                    q: "O objetivo é enriquecer dado ou qualificar lead?",
                    a: "Os dois, mas o valor principal está em transformar informação dispersa em contexto útil para decisão comercial."
                  }
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

        {/* 12. FINAL CTA */}
        <section className="py-32 px-4 relative overflow-hidden bg-foreground text-background text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/80" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl mb-8">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                Se seu time ainda pesquisa manualmente cada lead que entra, já existe uma forma melhor de operar.
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Veja como sua operação pode receber leads inbound com mais contexto, mais prioridade e mais clareza desde o primeiro momento.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-16 px-10 rounded-full shadow-[0_0_40px_rgba(173,255,47,0.3)] hover:shadow-[0_0_60px_rgba(173,255,47,0.4)] hover:-translate-y-1 transition-all duration-300">
                Agendar demonstração <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer className="bg-foreground text-white/60 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-lg tracking-tight">ContextOps</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#produto" className="hover:text-white transition-colors">Produto</a>
            <a href="#" className="hover:text-white transition-colors">Sobre</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </nav>
          
          <div className="text-sm">
            © {new Date().getFullYear()} ContextOps AI. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon helper for section 6 benefit grid
function Filter(props: any) {
  return <ListFilter {...props} />;
}
