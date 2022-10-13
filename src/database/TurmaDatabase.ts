import { Turma } from "../models/Turma"
import { BaseDatabase } from "./BaseDatabase"

export class TurmaDatabase extends BaseDatabase {
   public async criarTurma(turma: Turma) {
      try {
          await BaseDatabase.connection("Turma")
              .insert({
                  id: turma.getId(),
                  nome: turma.getNome(),
                  modulo: turma.getModulo()
              })
      } catch (error: any) {
          throw new Error("Erro inesperado")
      }
  }

  public async getAllTurma() {
      try {
         return await BaseDatabase.connection('Turma')
         .select('*')
         .where('modulo', '<>', `${0}`)
      } catch (error:any){
         throw new Error("Erro inesperado")
      }
   }

   public async atualizarModulo(id: number, modulo: string) {
      try {
          await BaseDatabase.connection("Turma")
          .update({
              modulo: modulo
          }).where ("id", id)
      } catch (error: any) {
          throw new Error("Erro inesperado")
      }
  }
}
