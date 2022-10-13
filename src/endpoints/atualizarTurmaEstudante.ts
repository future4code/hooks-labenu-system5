import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudantesDatabase"

export default async function atualizarTurmaEstudante(req:Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const turma_id = req.body.turma_id

        if(!turma_id){
            throw new Error("Favor preencher o ID da turma")
        }

        const estudanteDB = new EstudanteDatabase()
        await estudanteDB.mudarTurmaEstudante(id, turma_id)
        
        res.status(200).end('Atualizado')
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}