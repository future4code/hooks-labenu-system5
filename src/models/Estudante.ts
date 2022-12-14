export type EstudanteDB = {
   id: string,
   nome: string,
   email: string, 
   data_nasc: Date,
   turma_id: number
}


export class Estudante {
   constructor(
      private id: string,
      private nome: string,
      private email: string, 
      private data_nasc: Date,
      private turma_id: number
   ) { }
  
   public getId() {
      return this.id
  }
   public getNome(): string {
      return this.nome
   }
   public getEmail(): string {
      return this.email
   }
   public getDataNasc(): Date {
      return this.data_nasc
   }
   public getIdTurma(): number {
      return this.turma_id
   }
}