# RiverGuard - Frontend React

Frontend refatorado do sistema de gerenciamento de apólices de seguro de eletrônicos.

## 🚀 Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **react-router-dom** (roteamento)
- **react-hook-form** + **zod** (validação)
- **Shadcn/ui** + **Radix UI** (componentes)
- **Tailwind CSS 4** (estilos)
- **Axios** (requisições HTTP)
- **Sonner** (toasts)

## 📋 Estrutura de Pastas (Domain-Based)

```
src/
├── domains/
│   ├── auth/
│   │   ├── components/      (LoginForm)
│   │   ├── pages/           (Login)
│   │   ├── services/        (authService)
│   │   └── models/          (Usuario)
│   ├── apolice/
│   │   ├── components/      (ApoliceTable, ApoliceForm, ApoliceModal, DeleteApoliceModal, ClienteSearch)
│   │   ├── pages/           (Dashboard)
│   │   ├── services/        (apoliceService)
│   │   └── models/          (Apolice)
│   ├── cliente/
│   │   ├── services/        (clienteService)
│   │   └── models/          (Cliente)
│   └── shared/
│       └── (componentes compartilhados)
├── pages/                   (páginas públicas: Home, About, NotFound)
├── components/ui/           (shadcn/ui components)
├── contexts/                (ThemeContext)
├── App.tsx                  (rotas com react-router-dom)
└── main.tsx                 (entry point)
```

## 🔧 Instalação

```bash
# Instalar dependências
pnpm install
# ou npm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

O servidor estará em `http://localhost:5173`

## 🔐 Autenticação

- **Rota:** `/user-login`
- **Validação:** Real via API (`https://seguro-eletronicos.onrender.com`)
- **Armazenamento:** localStorage (usuário logado)
- **Redirecionamento:** Após login, vai para `/dashboard`

### Credenciais de Teste
Consulte o backend para credenciais válidas.

## 📊 Dashboard

- **Rota:** `/dashboard`
- **Requer:** Usuário logado
- **Funcionalidades:**
  - Tabela de apólices do usuário
  - Criar nova apólice (modal)
  - Editar apólice (modal)
  - Deletar apólice (com confirmação)
  - Aba de pesquisa de clientes (filtro por nome/CPF)
  - Autocomplete de clientes ao criar/editar apólice

## 🔌 Endpoints da API

A aplicação consome os seguintes endpoints:

### Autenticação
- `GET /usuarios/buscar/:usuario` - Buscar usuário por nome

### Clientes
- `GET /clientes` - Listar todos
- `GET /clientes/:id` - Obter por ID
- `GET /clientes/buscarnome/:nome` - Buscar por nome
- `GET /clientes/buscarcpf/:cpf` - Buscar por CPF
- `POST /clientes` - Criar
- `PUT /clientes` - Atualizar
- `DELETE /clientes/:id` - Deletar

### Apólices
- `GET /apolices` - Listar todas
- `GET /apolices/apolice/:id` - Obter por ID
- `GET /apolices/dispositivos/:dispositivo` - Buscar por tipo
- `GET /apolices/buscar/:min/:max` - Buscar por faixa de preço
- `POST /apolices` - Criar
- `PUT /apolices` - Atualizar
- `DELETE /apolices/:id` - Deletar

## 📝 Validações

- **CPF:** 11 dígitos
- **Telefone:** 11 dígitos
- **Strings:** Mínimo 5 caracteres
- **Datas:** Formato ISO (YYYY-MM-DD)

## 🎨 Design

- **Tema:** Dark mode (azul/cyan)
- **Componentes:** Shadcn/ui + Radix UI
- **Estilos:** Tailwind CSS 4 com OKLCH
- **Tipografia:** Sem Inter (evitando "AI slop")

## 🚀 Próximos Passos

1. Implementar PrivateRoute para proteger /dashboard
2. Adicionar filtro de apólices por usuário logado
3. Implementar refresh token para melhor segurança

## 📞 Suporte

Para dúvidas sobre a estrutura ou funcionalidades, consulte a documentação do projeto ou os comentários no código.
