# 🚀 Gerenciador de Tarefas SPA — Experiência Prática #4

Uma aplicação *Single Page Application* (SPA) desenvolvida em JavaScript vanila, otimizada para o ambiente de produção com foco rigoroso em **Controle de Versões Profissional (GitFlow)**, **Acessibilidade Web (WCAG 2.1 — Nível AA)** e **Performance**.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração e Deploy](#-demonstração-e-deploy)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estratégia de Versionamento (GitFlow)](#-estratégia-de-versionamento-gitflow)
- [Padrão de Commits Semânticos](#-padrão-de-commits-semânticos)
- [Conformidade e Acessibilidade (WCAG 2.1 AA)](#-conformidade-e-acessibilidade-wcag-21-aa)
- [Instalação e Execução Local](#-instalação-e-execução-local)
- [Estrutura de Ficheiros](#-estrutura-de-ficheiros)
- [Licença](#-licença)

---

## 💻 Sobre o Projeto

O **Gerenciador de Tarefas SPA** permite ao utilizador criar, visualizar, acompanhar resumos e eliminar tarefas de forma dinâmica, sem recarregamento de página. O objetivo principal desta etapa final foi consolidar o ciclo de desenvolvimento front-end profissional através de:

1. Separação estrutural de código e fluxo colaborativo com a estratégia **GitFlow**.
2. Garantia de inclusão digital e acessibilidade plena segundo as diretrizes **WCAG 2.1 Nível AA**.
3. Otimização de código e preparação para ambiente de hospedagem/produção.

---

## 🌐 Demonstração e Deploy

A aplicação encontra-se implantada e totalmente funcional no seguinte endereço:
- **Link do Projeto em Produção:** [https://ribeir0dev.github.io/spa-js-gerenciadordetarefas/html/index.html](https://ribeir0dev.github.io/spa-js-gerenciadordetarefas/html/index.html)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação acessível com uso de landmarks (`<header>`, `<nav>`, `<main>`).
- **CSS3 Moderno:** Estilização responsiva, gestão de contraste e estilos dedicados para `:focus-visible`.
- **JavaScript (ES6+):** Renderização dinâmica (SPA), manipulação de DOM e persistência local.
- **Web Storage API (`localStorage`):** Armazenamento local persistente das tarefas.
- **Git & GitHub:** Versionamento distribuído, Pull Requests e hospedagem do código.

---

## 🌿 Estratégia de Versionamento (GitFlow)

O projeto adota estritamente o modelo de ramificação **GitFlow**, isolando o ambiente de produção das alterações de desenvolvimento e implementação de novas funcionalidades.

### Fluxo de Branches:
- **main**: Contém o código estável, testado e pronto para produção (releases).
- **develop**: Branch principal de integração. Concentra as funcionalidades validadas que aguardam publicação.
- **feature/*** : Branches temporárias criadas a partir da develop para isolar o desenvolvimento de recursos específicos (ex.: feature/acessibilidade-wcag).
- **hotfix/*** : Branches emergenciais para correção de bugs críticos em ambiente de produção.

---

## 📝 Padrão de Commits Semânticos

Todas as alterações no histórico do Git seguem a estrutura padronizada dos Conventional Commits:

Sintaxe: tipo(escopo): descrição curta

Exemplos Aplicados no Repositório:
- chore(init): inicializacao do projeto SPA JS
- feat(a11y): adiciona suporte a navegacao por teclado e atributos ARIA na SPA
- fix(contrast): ajusta cores de feedback e adiciona focus-visible para norma WCAG AA
- docs(readme): elabora documentacao tecnica exaustiva do projeto

---

## ♿ Conformidade e Acessibilidade (WCAG 2.1 AA)

A interface passou por uma auditoria completa e atende aos seguintes critérios da norma WCAG 2.1:

| Critério WCAG | Nome | Ação Implementada no Projeto |
| :--- | :--- | :--- |
| 1.4.3 (AA) | Contraste Mínimo | Ajuste das cores de erro (#d32f2f) e sucesso (#1b5e20) para rácio >= 4.5:1 sobre fundo branco. |
| 2.1.1 (A) | Navegação por Teclado | Todos os componentes, formulários e botões são navegáveis via tecla Tab e executáveis via Enter/Espaço. |
| 2.4.4 (A) | Propósito do Link/Botão | Inclusão de aria-label="Excluir tarefa: [Título]" para diferenciar ações repetidas. |
| 2.4.7 (AA) | Foco Visível | Adição de regra CSS :focus-visible com indicador de foco de alta visibilidade. |
| 3.3.1 (A) | Identificação de Erros | Associação do campo <input> à caixa de erro via atributo aria-describedby="feedback". |
| 4.1.3 (AA) | Mensagens de Estado | Adição de aria-live="polite" na caixa de feedback para leitura automática por leitores de ecrã (NVDA/JAWS/VoiceOver). |
| 4.1.3 (AA) | Gestão de Foco em SPA | Ao navegar entre telas (navigate()), o foco é transferido automaticamente para o título <h2 tabindex="-1"> da nova página. |

---

## ⚙️ Instalação e Execução Local

Não são necessárias ferramentas complexas ou gerenciadores de pacotes de terceiros (como Node.js/NPM), pois a aplicação é desenvolvida em JavaScript nativo.

### Passo a passo:

1. Clonar o Repositório:
   git clone [https://github.com/ribeir0dev/spa-js-gerenciadordetarefas.git](https://github.com/ribeir0dev/spa-js-gerenciadordetarefas.git)

2. Acessar o Diretório do Projeto:
   cd SEU_REPOSITORIO

3. Alternar para a branch de desenvolvimento (opcional):
   git checkout develop

4. Executar a Aplicação:
   - Abra o ficheiro index.html diretamente em qualquer navegador web moderno.
   - Ou utilize extensões como Live Server no VS Code para simular um servidor local.

---

## 📁 Estrutura de Ficheiros

```text
gerenciardoretarefas/
├── css/
│   └── main.css          # Estilos globais, estados de foco e acessibilidade
├── dist/                 # Ficheiros gerados para produção (minificados)
├── html/
│   └── index.html        # Ponto de entrada HTML semântico da SPA
├── imagens/              # Diretório para recursos gráficos
├── js/
│   ├── app.js            # Inicialização e manipulação do formulário/eventos
│   ├── router.js         # Renderização dinâmica de componentes e navegação
│   ├── storage.js        # Camada de persistência (localStorage)
│   └── validation.js     # Lógica de validação de dados de entrada
├── node_modules/         # Dependências do projeto (ignorado no Git)
├── .gitignore            # Ficheiros e pastas ignorados pelo versionamento Git
├── package-lock.json     # Mapeamento de versões exatas das dependências
├── package.json          # Configurações do projeto e scripts de build
├── README.md             # Documentação técnica do repositório
└── vite.config.js        # Configuração da ferramenta de build e minificação
```

---

## 📜 Licença

Este projeto é desenvolvido para fins educacionais como parte da avaliação prática de Desenvolvimento Front-End Para Web.