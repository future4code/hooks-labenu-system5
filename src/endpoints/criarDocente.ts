import { Request, Response } from "express";
import { Docente } from "../models/Docente";
import { DocenteDatabase } from "../database/DocentesDatabase";

export default async function criarDocente(req: Request, res: Response) {
   try {
       const {nome, email, data_nasc, turma_id} = req.body

       if(!nome || !email || !data_nasc || !turma_id) {
           throw new Error("Favor preencher corretamente os campos");
       }
       
       //const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
       const docente = new Docente(Date.now().toString(), nome, email, data_nasc, turma_id)
       const docenteDB = new DocenteDatabase()
       await docenteDB.adicionarDocente(docente)

       res.status(201).send({
        message: 'Professor criado com sucesso!',
        docente
       })
   } catch (error: any) {
       res.send(error.message)
   }
}