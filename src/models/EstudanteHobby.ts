export type EstudanteHobbyDB = {
  id: string;
  hobbyId: string;
  estudanteId: string;
};

export class EstudanteHobby {
  constructor(
    private id: string,
    private hobbyId: string,
    private estudanteId: string
  ) {}

  public getId() {
    return this.id;
  }
  public getHobbyId(): string {
    return this.hobbyId;
  }
  public getEstudanteId(): string {
    return this.estudanteId;
  }
}
