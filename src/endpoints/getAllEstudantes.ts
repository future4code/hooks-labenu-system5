import { Request, Response } from "express"
import { EstudanteDatabase } from "../database/EstudantesDatabase"

export const getAllEstudantes = async (req: Request, res: Response) => {
   let errorCode = 400
   try {
       const estudanteDatabase = new EstudanteDatabase()
       const result = await estudanteDatabase.getAllEstudantes()
       res.status(200).send({ estudantes: result })
   } catch (error) {
       res.status(errorCode).send({ message: error.message })
   }
}