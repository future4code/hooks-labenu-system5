export type TurmaDB = {
   id: string,
   user_id: string,
   product_id: string,
   quantity: number,
   total_price: number
}

export class TurmaModel {
   constructor(
      private id: string,
      private turma_id: number,
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
   public getTurma_id(): number{
      return this.turma_id
   }
}