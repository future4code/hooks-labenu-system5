import { Estudante } from "../models/Estudante";
import { EstudanteHobby } from "../models/EstudanteHobby";
import { BaseDatabase } from "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase {
  public async adicionarEstudante(estudante: Estudante) {
    try {
      await BaseDatabase.connection("Estudante").insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getDataNasc(),
        turma_id: estudante.getIdTurma(),
      });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async adicionarHobbyEstudante(estudanteHobby: EstudanteHobby) {
    try {
      await BaseDatabase.connection("Estudante").insert({
        id: estudanteHobby.getId(),
        hobbyId: estudanteHobby.getHobbyId(),
        estudanteId: estudanteHobby.getEstudanteId(),
      });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async getStudentAgeById(id: string) {
    try {
      return await BaseDatabase.connection("Estudante")
        .select("data_nasc")
        .where("id", "=", id);
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
