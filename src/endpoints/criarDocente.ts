import { Request, Response } from "express";
import { Docente } from "../models/Docente";
import { DocenteDatabase } from "../database/DocentesDatabase";
import transporter from "../services/mailTransporter";

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

       const send = await transporter.sendMail({
        from: process.env.NODEMAILER_USER,
        to: email,
        subject: "Criação da conta Docente!",
        text: "Parabéns, conta criada com sucesso",
        html: `<p>Parabéns ${nome}, sua conta foi criada com sucesso ❤️</p>`
        })

       res.status(201).send({
        message: 'Professor criado com sucesso!',
        docente
       })
   } catch (error: any) {
       res.send(error.message)
   }
}