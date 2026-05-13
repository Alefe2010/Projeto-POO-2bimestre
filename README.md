# 🏙️ TechCity Control — Módulo 5: Sistema de Chamados Urbanos

Projeto desenvolvido para a disciplina de **Programação Orientada a Objetos (POO)** do curso Técnico em Desenvolvimento de Sistemas do **IFAL – Campus Maceió**.

## 👨‍💻 Integrantes da Equipe

- **Vinícius Rodrigues da Silva**
- **Vitor Miguel Rocha Calheiros**
- **Álefe Matheus Silva dos Santos**

---
## 👨‍🏫 Professor Orientador

**Prof. MSc. Ricardo Nunes**
---

# 📚 Sobre o Projeto

O **TechCity Control** é uma plataforma criada para auxiliar na administração de serviços urbanos da cidade fictícia **TechCity**.

Nossa equipe ficou responsável pelo **Módulo 5 — Sistema de Chamados Urbanos**, que tem como objetivo registrar, organizar e acompanhar problemas urbanos reportados pelos moradores, permitindo que equipes responsáveis sejam acionadas para atendimento.

Exemplos de chamados:

- Buracos em vias públicas
- Falta de iluminação
- Vazamentos
- Problemas de limpeza urbana
- Sinalização danificada

---

# 🎯 Objetivos do Sistema

O sistema permite:

- Registrar chamados urbanos
- Organizar categorias de problemas
- Cadastrar equipes de atendimento
- Associar equipes aos chamados
- Registrar histórico das operações realizadas
- Controlar o andamento dos atendimentos

---

# ⚙️ Funcionalidades Obrigatórias

## RF01 — Registro de Chamados

Permite cadastrar chamados contendo:

- Identificador
- Descrição
- Categoria
- Localização
- Status

---

## RF02 — Cadastro de Equipes

Permite registrar equipes contendo:

- Identificador
- Nome
- Disponibilidade

---

## RF03 — Associação de Equipes

O controlador do sistema realiza:

- Identificação de equipes disponíveis
- Associação da equipe ao chamado
- Atualização do status do atendimento

---

## RF04 — Histórico de Atendimentos

Permite registrar:

- Operações realizadas
- Alterações de status
- Equipe responsável
- Data e hora das operações

---

# 🚀 Requisitos Adicionais Implementados

## RF05 — Definição de Prioridade

Cada chamado pode receber níveis de prioridade:

- Baixa
- Média
- Alta
- Emergencial

### Justificativa:
Permite que problemas críticos sejam atendidos primeiro.

---

## RF06 — Encerramento com Relatório

Ao finalizar um atendimento, a equipe deverá registrar:

- Solução aplicada
- Data de conclusão
- Responsável pelo atendimento

### Justificativa:
Melhora a rastreabilidade e auditoria das operações.

---

# 🧱 Estrutura do Projeto

```bash
src/
│
├── models/
│   ├── Usuario.js
│   ├── Chamado.js
│   ├── Equipe.js
│   ├── Historico.js
│   └── RegistroOperacao.js
│
├── controllers/
│   ├── SistemaController.js
│   └── ChamadoController.js
│
└── index.js
