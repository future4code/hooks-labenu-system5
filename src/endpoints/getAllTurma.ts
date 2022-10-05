import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const getAllTurmas = async (req: Request, res: Response) => {
   let errorCode = 400
   try {
       const turmaDatabase = new TurmaDatabase()
       const result = await turmaDatabase.getAllTurma()
       res.status(200).send({ turmas: result })
   } catch (error) {
       res.status(errorCode).send({ message: error.message })
   }
}
