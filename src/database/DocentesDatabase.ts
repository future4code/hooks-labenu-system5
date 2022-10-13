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

  public async getAllDocentes(){
    try {
      const result = await BaseDatabase.connection("Docente")
      .select()
      return result
    } catch (error: any) {
      throw new Error("Erro inesperado, verificar requisição")
    }
  }

  public async mudarDocenteTurma(id: number, turma_id: string) {
    try {
        await BaseDatabase.connection("Docente")
        .update({
            turma_id: turma_id
        }).where("id", id)
    } catch (error: any) {
        throw new Error("Erro inesperado, verificar informações passadas")
    }
}
}
