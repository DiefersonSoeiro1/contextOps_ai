Visão Geral
Sistema de gestão de leads com pipeline automatizado e agente de IA contextual usando n8n, Supabase, Bubble e Redis.
O sistema implementa:
Pipeline de ingestão: Webhook para receber leads com validação, deduplicação e persistência dupla
Agente de IA: Interface conversacional para consultas e gestão de leads
Enriquecimento: API externa para complementar dados dos leads
Notificações: Email automático para novos leads válidos
Instalação e Configuração
1. Variáveis de Ambiente (.env.example)
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# Bubble
BUBBLE_API_TOKEN=your_bubble_token
BUBBLE_APP_NAME=your_app_name

# Redis
REDIS_URL=redis://localhost:6379

# OpenAI
OPENAI_API_KEY=your_openai_key

# Email (SendGrid) - podendo ser alterado
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_key

# Webhook Auth
WEBHOOK_AUTH_TOKEN=your_secure_token
2. Importação dos Workflows
Acesse seu n8n
Import → Upload from file
Importe os arquivos:
ContextOPS AI - new lead.json
ContextOPS AI - search.json
Configure as credenciais necessárias
Credencial de autenticação do webhook 
Supabase
Bubble
Redis
Openai
Email
3. Estrutura do Banco (Supabase)
Tabela: ContextOps AI - leads
CREATE TABLE "ContextOps AI - leads" (
  id SERIAL PRIMARY KEY,
  lead_id VARCHAR UNIQUE,
  email VARCHAR UNIQUE NOT NULL,
  full_name VARCHAR NOT NULL,
  country_iso2 VARCHAR(2),
  source VARCHAR,
  utm_campaign VARCHAR,
  owner VARCHAR,
  notes TEXT,
  phone VARCHAR,
  company VARCHAR,
  enriched BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
Endpoints Disponíveis
1. Ingestão de Leads
POST https://your-n8n-url/webhook/new-lead
Headers:
Authorization: Bearer your_webhook_token
Content-Type: application/json
Body:
{
  "email": "lead@example.com",
  "full_name": "Nome Completo",
  "country_iso2": "BR",
  "notes": "Notas sobre o lead"
}
Query Parameters:
?utm_source=google&utm_campaign=campaign_name
Regras de Negócio
Deduplicação
Verifica existência por email em ambas as bases (Supabase e Bubble)
Lead duplicado não é inserido novamente
Roteamento de Owner
BR: Maria
US: Josué
Outros países: Miguel
Enriquecimento
Chamada para endpoint externo com retry (5 tentativas)
Se falhar, pipeline continua sem interrupção
Adiciona campos: phone, company
Marca enriched = true
Para o enriquecimento, optei por criar um subworkflow no fluxo, para facilitar testes. Para simular falhas, basta desativar os nodes e rodar o fluxo. Para enriquecer os dados, precisa alterar as informações de phone e company no node "Dados Exemplo - enrichment".
Notificações
Email enviado para cada lead válido processado
Template: Nome e email do lead
Segurança
Webhook protegido por Bearer token
Dados sensíveis em variáveis de ambiente
Validação de parâmetros nas consultas
Sem exposição de PII em logs
Agente de IA - Comandos
Consultas Suportadas
"Quantos leads temos do Brasil?"
"Buscar lead por email: joão@empresa.com"
"Leads com notas sobre IA"
"Quantos leads da campanha X?"
"Alterar owner do lead joão@empresa.com para Maria"
"Quantos leads da origem X?"
Estes são exemplos, mas a busca cobre as necessidades estabelecidas.
Gestão de Contexto
Memória de 20 mensagens por sessão, com duração de contexto de 3600 segundos (1 hora) - ajustável
TTL configurável para coorte
Confirmação obrigatória para alterações
Segurança
Webhook protegido por Bearer token
Dados sensíveis em variáveis de ambiente
Validação de parâmetros nas consultas
Sem exposição de PII em logs
Testes
Use a coleção Postman incluída para testar:
Ingestão básica: Lead novo válido
Deduplicação: Mesmo email duas vezes
Validação: Campos obrigatórios faltando
Agente IA: Consultas diversas
Alteração owner: Com confirmação
Monitoramento
Logs detalhados em cada etapa do pipeline
Status de enriquecimento trackado
Falhas de integração não param o fluxo
Notificações de erro por email
Limitações Implementadas
Máximo 100 resultados por consulta
Timeout de 30s para enriquecimento
Rate limiting via Redis (se configurado)
Validação rigorosa de parâmetros de entrada

Prompt e direcionamento: 
# Agente
Você é um assistente comercial, altamente analítico, que traz informações sobre os leads cadastrados para a equipe comercial, com intuito de simplificar ao máximo a análise de dados. 

# Visão geral
Você vai receber como input uma solicitação do usuário, que será enquadrada dentro de algum desses tópicos: 
* Coleta de informações de leads, que pode ser relacionado aos temas abaixo:
  1. Nome
  2. Email
  3. Contagem por país
  4. Contagem por source (origem)
  5. Informações de leads, com base nas notas.

* Alteração de informações de leads:
  1. Alteração de owner de um lead.

* Limpeza de histórico recente

# Tools
  * clean: use sempre que o usuário quiser limpar o contexto / coorte recente.
  * think: use sempre, entre cada processo, para raciocinar e garantir que a próxima ação é a mais apropriada.
  * get_info: use essa tool quando o usuário solicitar informações de leads
  * change_owner: use essa tool quando o usuário pedir pra você alterar o responsável (owner) de um lead. 

# Processo de trabalho: 
  1. Receba a solicitação do usuário e busque compreender o contexto internamente. 
  2. Use a tool 'think' para garantir que próximo passo do seu fluxo é realmente o mais adequado.
  3. Escolha entre a tool 'get_info' e 'change_owner', a depender da intenção e necessidade que o usuário trouxe.
  4. Execute a ação necessária
  5. Retorne ao usuário.

**Importante**
- No caso de alteração de owner, sempre fale que é uma ação sensível e peça confirmação. Para confirmar, o usuário pode te dizer somente um "sim".
- Caso você precise trabalhar com datas, use a data de hoje {{ $now }}, como padrão para se situar.
- Você deve usar as informações que você tem coletadas no seu contexto para fazer as alterações que o usuário pediu sem precisar solicitar dados que você já tem. 


# Saída esperada
Respostas curtas, especificamente respondendo o que o usuário pergunta.

  * Exemplo 01: 
    * Pergunta: "Quantos leads temos no Brasil na última semana?"
    * Resposta: "[Total de leads]"

  * Exemplo 02: 
    * Pergunta: "Quantos leads tme a Maria?"
    * Resposta: "[Total de leads]"


# Regras
  - No caso de o usuário perguntar algo relacionado a datas, use como padrão de resposta formato de data 'dd/MM/yyyy'
  - Você não altera owner sem confirmação prévia do usuário.
  - Você só responde coisas relacionadas a leads, seguindo instruções que você recebeu. Não invente ou crie respostas.
  - Você só responde o que sabe. Se a informação é duvidosa ou você não tem certeza, você diz que não tem informação sobre o assunto.
Dados de exemplo e testes: 
Collection postman: 
Dados teste para uso: 
[
  {
    "email": "maria.souza@example.com",
    "full_name": "Maria Souza",
    "country_iso2": "BR",
    "notes": "Gostaria de entender como aplicar inteligência artificial empresarial para aumentar minhas vendas."
  },
  {
    "email": "john.doe@example.com",
    "full_name": "John Doe",
    "country_iso2": "US",
    "notes": "Preciso de informações sobre automações para reduzir tarefas repetitivas na minha empresa."
  },
  {
    "email": "ana.costa@example.com",
    "full_name": "Ana Costa",
    "country_iso2": "CA",
    "notes": "Quero saber como usar o n8n para integrar diferentes sistemas do meu negócio."
  },
  {
    "email": "robert.smith@example.com",
    "full_name": "Robert Smith",
    "country_iso2": "US",
    "notes": "Tenho interesse em soluções de inteligência artificial empresarial para análise de dados."
  },
  {
    "email": "carlos.ferreira@example.com",
    "full_name": "Carlos Ferreira",
    "country_iso2": "BR",
    "notes": "Quero detalhes sobre automações no n8n para processos de marketing digital."
  }
]

