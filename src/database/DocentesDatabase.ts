import { Docente } from "../models/Docente";
import { DocenteEspecialidade } from "../models/DocenteEspecialidade";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDatabase extends BaseDatabase {
  public async adicionarDocente(docente: Docente) {
    try {
      await BaseDatabase.connection("Docente").insert({
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.getDataNasc(),
        turma_id: docente.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async adicionarEspecialidadeDocente(
    docenteEspecialidade: DocenteEspecialidade
  ) {
    try {
      await BaseDatabase.connection("Docente").insert({
        id: docenteEspecialidade.getId(),
        especialidadeId: docenteEspecialidade.getEspecialidadeId(),
        docenteId: docenteEspecialidade.getDocenteId(),
      });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
