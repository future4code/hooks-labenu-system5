import { Request, Response } from 'express'
import { EstudanteDatabase } from "../database/EstudantesDatabase"

export default async function getEstudantePorNome(req: Request, res: Response): Promise<void> {
   try {
      const nome = req.query.nome as string
      const studentDB = new EstudanteDatabase()
      const student = await studentDB.getEstudantePorNome(nome)
      res.status(200).send(student)
   } catch (error: any) {
      res.send(error.message).status(404)
   }
}