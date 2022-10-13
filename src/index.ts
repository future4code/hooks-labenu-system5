import { app } from "./app";
import { ping } from "./endpoints/ping";
import criarTurma from "./endpoints/criarTurma";
import { getAllTurmas } from "./endpoints/getAllTurma";
import atualizarModulo from "./endpoints/atualizarModulo";
import adicionarEstudante from "./endpoints/adicionarEstudante";
import criarEstudante from "./endpoints/criarEstudante"
import { estudanteIdadePorId } from "./endpoints/getStudentAgeById";
import getEstudantePorNome from "./endpoints/getEstudantePorNome";
import { getAllEstudantes } from "./endpoints/getAllEstudantes";
import atualizarTurmaEstudante from "./endpoints/atualizarTurmaEstudante";
import adicionarDocente from "./endpoints/adcionarDocente";
import criarDocente from "./endpoints/criarDocente";
import getAllDocentes from "./endpoints/getAllDocentes";
import atualizarDocenteTurma from "./endpoints/atualizarDocenteTurma";

//Teste
app.get("/ping", ping);

//Turma
app.get("/all/turmas", getAllTurmas);
app.post("/turma", criarTurma);
app.put("/turma/:id", atualizarModulo);

//Estudante
app.post("/estudante", criarEstudante);
app.put("/estudante", adicionarEstudante);
app.get("/all/estudantes", getAllEstudantes)
app.get("/estudante-idade/:id", estudanteIdadePorId);
app.get("/estudante", getEstudantePorNome);
app.put("/estudante/:id", atualizarTurmaEstudante);

//Docente
app.post("/docente", criarDocente);
app.put("/docente", adicionarDocente);
app.put("/docente/:id", atualizarDocenteTurma);
app.get("/all/docentes", getAllDocentes);