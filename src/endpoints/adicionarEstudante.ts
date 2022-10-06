import { Request, Response } from "express";

import { Estudante } from "../models/Estudante";
import { EstudanteDatabase } from "../database/EstudantesDatabase";
import { EstudanteHobby } from "../models/EstudanteHobby";

export default async function adicionarEstudante(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id, hobbies_id } = req.body;

    if (!nome || !email || !data_nasc || !turma_id || !hobbies_id) {
      throw new Error("Body inválido.");
    }

    const estudanteId = Date.now().toString();

    const estudante = new Estudante(
      estudanteId,
      nome,
      email,
      data_nasc,
      turma_id
    );

    const estudanteDB = new EstudanteDatabase();
    await estudanteDB.adicionarEstudante(estudante);

    for (const hobby_id in hobbies_id) {
      const hobby = new EstudanteHobby(
        Date.now().toString(),
        hobby_id,
        estudanteId
      );
      await estudanteDB.adicionarHobbyEstudante(hobby);
    }

    res
      .status(201)
      .send({ message: "Estudante adicionado!", Estudante: estudante });
  } catch (error: any) {
    res.status(500).end();
  }
}
