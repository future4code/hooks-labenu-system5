export type DocenteEspecialidadeDB = {
  id: string;
  especialidadeId: string;
  docenteId: string;
};

export class DocenteEspecialidade {
  constructor(
    private id: string,
    private especialidadeId: string,
    private docenteId: string
  ) {}

  public getId() {
    return this.id;
  }
  public getEspecialidadeId(): string {
    return this.especialidadeId;
  }
  public getDocenteId(): string {
    return this.docenteId;
  }
}
