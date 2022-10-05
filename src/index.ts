import { app } from "./app"
import { ping } from './endpoints/ping'
import criarTurma from "./endpoints/criarTurma"
import {getAllTurmas} from "./endpoints/getAllTurma"
import atualizarModulo from "./endpoints/atualizarModulo"

//Teste
app.get("/ping", ping)

//Turma
app.get("/all/turmas", getAllTurmas)
app.post("/turma", criarTurma)
app.put("/turma/:id", atualizarModulo)




