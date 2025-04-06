# 💻 Desafio Final - React Básico: Lista de Tarefas com Interatividade

## 🎯 Objetivo Geral

Criar uma **mini aplicação de Lista de Tarefas (To-Do List)** utilizando apenas **React e JavaScript puro**, sem bibliotecas externas. O desafio é dividido em três níveis (Fácil, Intermediário, Avançado), cada um construindo sobre o anterior.

---

## 🛠 Tecnologias Permitidas

- React (Componentes, useState, Props)
- JavaScript
- HTML/CSS (opcional para estilização)
- Sem bibliotecas de terceiros (ex: nada de Redux, Tailwind, etc.)

---

## 🟢 Nível 1 – Fácil: Estrutura Básica da Lista

### ✅ Requisitos

- Criar o componente principal `App`
- Criar um input + botão para adicionar tarefas
- Criar um componente `TaskList` que recebe as tarefas como props
- Criar um componente `TaskItem` que exibe o nome da tarefa

### 🧠 Conceitos Envolvidos

- Componentes
- Props
- useState (estado local)

---

## 🟡 Nível 2 – Intermediário: Marcar e Remover Tarefas

### ✅ Requisitos

- Marcar tarefa como "concluída" (checkbox)
- Remover tarefa da lista (botão de deletar)
- Mostrar contador de tarefas pendentes
- Utilizar `children` para customizar botões ou elementos

### 💡 Dica

- Use `className` condicional para aplicar estilos diferentes às tarefas concluídas

### 🧠 Conceitos Envolvidos

- `useState` + manipulação de eventos
- Elevação de estado (lifting state up)
- Children
- Comunicação entre componentes via props

---

## 🔴 Nível 3 – Avançado: Filtros e Prop Drilling

### ✅ Requisitos

- Criar um componente `FilterBar` com os filtros:
  - Todas
  - Pendentes
  - Concluídas
- Adicionar o estado dos filtros no `App`
- Filtrar as tarefas antes de passá-las ao `TaskList`
- Passar props por vários níveis (App → FilterBar → TaskList → TaskItem)

### 🧠 Conceitos Envolvidos

- Prop Drilling
- Estado compartilhado
- Filtros + renderização condicional

---

## 🗂 Estrutura Sugerida de Componentes

