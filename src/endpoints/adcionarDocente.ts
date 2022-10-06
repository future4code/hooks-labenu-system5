import { Request, Response } from "express";

import { Docente } from "../models/Docente";
import { DocenteDatabase } from "../database/DocentesDatabase";
import { DocenteEspecialidade } from "../models/DocenteEspecialidade";

export default async function adicionarDocente(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id, especialidades_id } = req.body;

    if (!nome || !email || !data_nasc || !turma_id || !especialidades_id) {
      throw new Error("Body inválido.");
    }

    const docenteId = Date.now().toString();

    const docente = new Docente(docenteId, nome, email, data_nasc, turma_id);

    const docenteDB = new DocenteDatabase();
    await docenteDB.adicionarDocente(docente);

    for (const especialidade_id in especialidades_id) {
      const especialidade = new DocenteEspecialidade(
        Date.now().toString(),
        especialidade_id,
        docenteId
      );
      await docenteDB.adicionarEspecialidadeDocente(especialidade);
    }

    res.status(201).send({ message: "Docente adicionado!", Docente: docente });
  } catch (error: any) {
    res.status(500).end();
  }
}
