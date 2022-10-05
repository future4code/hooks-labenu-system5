import { Request, Response } from "express";
import { TurmaDatabase } from "../database/TurmaDatabase";

export default async function atualizarModulo(req: Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.id)
        const modulo  = req.body.modulo as string

        const turmaDB = new TurmaDatabase()
        await turmaDB.atualizarModulo(id, modulo)
        
        res.status(200).end("Atualizado!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}