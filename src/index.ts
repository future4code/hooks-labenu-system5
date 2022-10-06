import { app } from "./app";
import { ping } from "./endpoints/ping";
import criarTurma from "./endpoints/criarTurma";
import { getAllTurmas } from "./endpoints/getAllTurma";
import atualizarModulo from "./endpoints/atualizarModulo";
import adicionarEstudante from "./endpoints/adicionarEstudante";
import adicionarDocente from "./endpoints/adcionarDocente";
import { estudanteIdadePorId } from "./endpoints/getStudentAgeById";

//Teste
app.get("/ping", ping);

//Turma
app.get("/all/turmas", getAllTurmas);
app.post("/turma", criarTurma);
app.put("/turma/:id", atualizarModulo);

app.put("/estudante", adicionarEstudante);
app.put("/docente", adicionarDocente);
app.get("/estudante-idade/:id", estudanteIdadePorId);
