# ContextOps AI - Lead Management System

Sistema de gestão de leads com pipeline automatizado e agente de IA contextual usando n8n, Supabase, Bubble e Redis.

## Visão Geral

O sistema implementa:
- **Pipeline de ingestão**: Webhook para receber leads com validação, deduplicação e persistência dupla
- **Agente de IA**: Interface conversacional para consultas e gestão de leads
- **Enriquecimento**: API externa para complementar dados dos leads
- **Notificações**: Email automático para novos leads válidos

## Instalação e Configuração

### 1. Variáveis de Ambiente (.env.example)

```bash
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
```

### 2. Importação dos Workflows

1. Acesse seu n8n
2. Import → Upload from file
3. Importe os arquivos:
   - `ai_agent_search.json`
   - `new_lead.json`
4. Configure as credenciais necessárias:
   - Credencial de autenticação do webhook
   - Supabase
   - Bubble
   - Redis
   - OpenAI
   - Email

### 3. Estrutura do Banco (Supabase)

Tabela: `ContextOps AI - leads`

```sql
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
```

## Endpoints Disponíveis

### 1. Ingestão de Leads

**POST** `https://your-n8n-url/webhook/new-lead`

Headers:
```
Authorization: Bearer your_webhook_token
Content-Type: application/json
```

Body:
```json
{
  "email": "lead@example.com",
  "full_name": "Nome Completo",
  "country_iso2": "BR",
  "notes": "Notas sobre o lead"
}
```

Query Parameters:
```
?utm_source=google&utm_campaign=campaign_name
```

### 2. Agente de IA

**Chat Interface**: Integrada nos workflows do n8n via LangChain

## Regras de Negócio

### Deduplicação
- Verifica existência por email em ambas as bases (Supabase e Bubble)
- Lead duplicado não é inserido novamente

### Roteamento de Owner
- **BR**: Maria
- **US**: Josué  
- **Outros países**: Miguel

### Enriquecimento
- Chamada para endpoint externo com retry (5 tentativas)
- Se falhar, pipeline continua sem interrupção
- Adiciona campos: phone, company
- Marca `enriched = true`
- **Implementação**: Subworkflow no fluxo para facilitar testes
- **Para simular falhas**: Desative os nodes e execute o fluxo
- **Para enriquecer dados**: Altere informações no node "Dados Exemplo - enrichment"

### Notificações
- Email enviado para cada lead válido processado
- Template: Nome e email do lead

## Agente de IA

### Prompt e Direcionamento

Assistente comercial analítico focado em informações de leads para equipe comercial.

**Funcionalidades:**
- Coleta de informações de leads (nome, email, contagem por país/origem)
- Consultas baseadas em notas
- Alteração de owner de leads
- Limpeza de histórico recente

**Tools disponíveis:**
- `clean`: Limpar contexto/coorte recente
- `think`: Raciocínio entre processos
- `get_info`: Consultar informações de leads
- `change_owner`: Alterar responsável por lead

### Consultas Suportadas
```
"Quantos leads temos do Brasil?"
"Buscar lead por email: joão@empresa.com"
"Leads com notas sobre IA"
"Quantos leads da campanha X?"
"Alterar owner do lead joão@empresa.com para Maria"
"Quantos leads da origem X?"
```

### Gestão de Contexto
- Memória de 20 mensagens por sessão
- Duração de contexto: 3600 segundos (1 hora) - ajustável
- TTL configurável para coorte
- Confirmação obrigatória para alterações

**Regras:**
- Confirmação necessária para alteração de owner
- Respostas concisas e diretas
- Formato de data: dd/MM/yyyy
- Apenas informações relacionadas a leads
- Não inventa dados desconhecidos

## Segurança

- Webhook protegido por Bearer token
- Dados sensíveis em variáveis de ambiente
- Validação de parâmetros nas consultas
- Sem exposição de PII em logs

## Testes

Use a coleção Postman incluída para testar:
1. Ingestão básica: Lead novo válido
2. Deduplicação: Mesmo email duas vezes
3. Validação: Campos obrigatórios faltando
4. Agente IA: Consultas diversas
5. Alteração owner: Com confirmação

### Dados de Teste

```json
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
```

## Monitoramento

- Logs detalhados em cada etapa do pipeline
- Status de enriquecimento trackado
- Falhas de integração não param o fluxo
- Notificações de erro por email

## Limitações Implementadas

- Máximo 100 resultados por consulta
- Timeout de 30s para enriquecimento
- Rate limiting via Redis (se configurado)
- Validação rigorosa de parâmetros de entrada
