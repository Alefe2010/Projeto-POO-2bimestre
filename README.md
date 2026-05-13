
# 🛸 Sistema de Controle de Entregas com Drones

Este projeto é um **módulo de inteligência logística** focado na orquestração de entregas autónomas. O sistema funciona como um centro de controlo que une a procura (pedidos) à capacidade operacional (drones), garantindo que o fluxo de transporte seja eficiente, rastreável e seguro.

---

## 📖 Descrição do Projeto

O sistema foi concebido para resolver a complexidade da logística de última milha utilizando tecnologia aérea. Ele atua na camada de gestão, transformando pedidos de entrega em missões coordenadas, onde cada drone é alocado de acordo com a sua capacidade técnica e disponibilidade em tempo real. 

A solução integra hardware, logística e supervisão humana, permitindo que operadores monitorizem o ciclo de vida completo de cada entrega, desde o registo inicial até a conclusão do voo e libertação do ativo para a próxima missão. 🚀

---

## 📌 Resumo das Funcionalidades

O ecossistema está estruturado em quatro pilares fundamentais para garantir a máxima performance:

* **🛸 Gestão de Frota:** Registo detalhado de drones, monitorizando identificadores únicos, limites de carga útil e estados operacionais.
* **📦 Pipeline de Pedidos:** Sistema de entrada de encomendas com descrições detalhadas e destinos geográficos.
* **🔗 Orquestrador de Entregas:** O "cérebro" do módulo, que realiza a associação inteligente entre o drone ideal e o pedido pendente.
* **🔄 Sincronização Dinâmica:** Atualização contínua de status, garantindo visibilidade total sobre o progresso das entregas e a prontidão dos operadores.

---

## ⚙️ Requisitos de Engenharia (Backlog)

| Código | Requisito | Impacto no Sistema |
| :--- | :--- | :--- |
| **RF01** | **Cadastro de Drones** | Garante que apenas drones autorizados e com capacidade conhecida entrem na frota. |
| **RF02** | **Registo de Pedidos** | Cria a fila de procura com especificações de destino e prioridade. |
| **RF03** | **Associação de Ativos** | Cria o vínculo formal entre o hardware e o pacote para a execução da missão. |
| **RF04** | **Atualização de Status** | Mantém a telemetria do sistema atualizada, libertando recursos pós-entrega. |

---

## 🏗️ Estrutura do Módulo

Para manter o nível profissional, o sistema organiza-se através de elementos chave:
- **Drones:** Ativos físicos com limites de carga.
- **Pedidos:** A procura do cliente final.
- **Entregas:** O evento de união entre pedido e transporte.
- **Operadores:** Supervisores responsáveis pela segurança da operação.
- **Disponibilidade:** Motor de estados que dita o ritmo da operação.

---
**Status do Projeto:** 🟢 Ativo & Operacional
