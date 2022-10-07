<h1 align="center">
    <br>
    <p align="center"> 🚀 Projeto LabenuSystem<p>
</h1>
<br>

## 🧠 Contexto

O objetivo foi criar uma API de um sistema que represente o básico da nossa organização.

- 🔗 Link Documentaçãp Postman
- ✨ Funcionalidades
- 🎯 Requesitos Mínimos
- 📚 Aprendizado
- 🛠️ Tecnologias Utilizadas
- 📦 Pacotes Utilizados
- ⚙️ Como rodar o projeto localmente
- 🔃 Rotas
- 👨‍💻 Desenvolvedores

<br>

## 🔗 Link Documentaçãp Postman

https://documenter.getpostman.com/view/22901544/2s83zgt4tx

<br>

## ✨ Funcionalidades

Você estuda na Labenu\_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização.

Ele deve possuir, ao menos, as 3 entidades importantes:

**1. Estudantes**

Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele.

**2. Docente**

Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

**3. Turma**

Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

O módulo pode assumir os valores de 1 a 7 ou undefined, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com -na-night.

<br>

## 🎯 Requisitos Mínimos

**→ Criar turma;**

<aside>
💡 Para criar uma turma, os dados enviados ao banco precisam ser uma **instância de classe** Turma;

</aside>

**→ Buscar turmas ativas;**

**→ Mudar turma de módulo**

**→ Criar estudante;**

<aside>
💡 Para criar um estudante, os dados enviados ao banco precisam ser uma **instância de classe** Estudante;

</aside>

**→ Buscar estudantes através do nome;**

**→ Mudar estudante de turma;**

**→ Criar docente;**

<aside>
💡 Para criar um estudante, os dados enviados ao banco precisam ser uma **instância de classe** Docente;

</aside>

**→ Buscar todas as pessoas docentes;**

**→ Mudar docente de turma;**

<br>

## 📚 Aprendizado

> ⚠️ O projeto final consiste em uma API fundamentada no CRUD. O CRUD é um acrônimo para Create(CRIAR), Read(LER-CONSULTAR), Update(ATUALIZAR) e Delete(DELETAR).

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [TypeScript](https://www.typescriptlang.org/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)

## 📦 Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## ⚙️ Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                   | Comando/informação        |
| ----------------------- | ------------------------- |
| Faça o fork             | `botão de forkar`         |
| Faça o clone            | `git clone`               |
| Instale as dependências | `npm i`                   |
| Adicionar as inf. .env  | `Dados do banco de dados` |

E divirta-se :)

<br>

## 🔃 Rotas:

| Método HTTP | Endpoint               | Descrição                         |
| ----------- | ---------------------- | --------------------------------- |
| GET         | `/all/turmas`          | Retorna todas as turmas ativas    |
| POST        | `/turma`               | Cria/cadastra uma nova turma      |
| PUT         | `/turma/:id`           | Mudar turma de módulo             |
| GET         | `/all/estudantes`      | Retorna todos os estudantes       |
| GET         | `/estudante`           | Buscar estudantes através do nome |
| GET         | `/estudante-idade/:id` | Retorna idade estudante pelo id   |
| POST        | `/estudante`           | Criar estudante                   |
| PUT         | `/estudante/:id`       | Mudar estudante de turma          |
| GET         | `/all/docentes`        | Buscar todas as pessoas docentes  |
| POST        | `/docente`             | Criar docente                     |
| PUT         | `/docente/:id`         | Mudar docente de turma            |

<br>

## 📊 Dados criar uma Turma

- id: autogerado e obrigatório
- nome: texto e obrigatório
- modulo: texto e obrigatório default 0

<br>

## 📊 Dados criar um Estudante

- id: autogerado e obrigatório
- name: texto e obrigatório
- email: texto e obrigatório
- data_nasc: número e obrigatório
- turma_id: texto e obrigatório

## 📊 Dados criar um Docente

- id: autogerado e obrigatório
- name: texto e obrigatório
- email: texto e obrigatório
- data_nasc: número e obrigatório
- turma_id: texto e obrigatório

<br>

<h1>
    <br>
    <p style=" font-weight: bold;">👨‍💻 Desenvolvedores</p>
</h1>

<table>

_Caso queira contribuir com o projeto, será totalmente bem-vindx!!!_

_Qualquer dúvida ou sugestão, chama no contatinho!_

  <tr>  
    <td align="center"><a href="https://github.com/elisabetealves"><img style="border-radius: 50%;" src="https://unavatar.now.sh/github/elisabetealves" width="100px;" alt=""/><br /><sub><b>Elisabete Alves</b></sub></a><br /><a href="https://www.linkedin.com/in/elisabete-a-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> </td>  
    <td align="center"><a href="https://github.com/natashagomesr"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98358842?v=4" width="100px;" alt=""/><br /><sub><b>Natasha Gomes</b></sub></a><br /> <a href="https://www.linkedin.com"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a></td>    
  </tr>
  
</table>

<br>

<h2>
  <a href='#top'>🔝 Voltar para o topo.</a>
</h2>

<br>

### Feito com 💕 e muita dedicação
