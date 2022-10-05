import { Request, Response } from 'express'
import { Turma } from '../models/Turma'
import { TurmaDatabase } from '../database/TurmaDatabase'

export default async function criarTurma(req: Request, res: Response): Promise<void> {
    try {
        const nome = req.body.nome
        const modulo = req.body.modulo

        if (!nome || !modulo) {
            throw new Error("Body inválido.")
        }

        const turma = new Turma(
            Date.now().toString(),
            nome, 
            modulo)
        const turmaDB = new TurmaDatabase()
        await turmaDB.criarTurma(turma)
        res.status(201).send({ message: "Turma criada!", Turma: turma })

    } catch (error: any) {
        res.status(500).end()
    }
}