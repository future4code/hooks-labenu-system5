import { Request, Response } from 'express'
import { Estudante } from '../models/Estudante'
import {EstudanteDatabase} from '../database//EstudantesDatabase'
import transporter from "../services/mailTransporter";

export default async function criarEstudante(req: Request, res: Response): Promise<void> {
    try {
      const { nome, email, data_nasc, turma_id} = req.body
     
      if(!nome || !email || !data_nasc || !turma_id){
         throw new Error("Favor preencher os campos corretamente")
      }
        
      //const newDate = data_nasc.substr(0, 10).split('/').reverse().join('-')
      const estudante = new Estudante(Date.now().toString(), nome, email, data_nasc, turma_id )
      const estudanteDB = new EstudanteDatabase()
      await estudanteDB.adicionarEstudante(estudante)

      const send = await transporter.sendMail({
         from: process.env.NODEMAILER_USER,
         to: email,
         subject: "Criação da conta Estante!",
         text: "Parabéns, conta criada com sucesso",
         html: `<p>Parabéns ${nome}, sua conta foi criada com sucesso ❤️</p>`
      })

      res.status(201).send({
         message:'Estudante criado com sucesso!',
         estudante         
         })
   } catch (error: any) {
      res.status(500).send(error.message)
   }
}