export type TurmaDB = {
   id: string,
   nome: string,
   modulo: string
}

export class Turma {
   constructor(
      private id: string,
      private nome: string,
      private modulo: string
   ) { }
  
   public getId() {
      return this.id
   }
   public getNome(): string {
      return this.nome
   }
   public getModulo(): string {
      return this.modulo
   }
}