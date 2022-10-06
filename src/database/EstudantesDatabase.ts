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

  public async getEstudantePorNome(nome: string) {
    try {
      const [result] = await BaseDatabase.connection("Estudante")
      .select()
      .where('nome', 'like', `%${nome}%`)

      if(result.length == 0){
        throw new Error("Nome não encontrado")
      }

      return[result]
    } catch (error: any) {
      throw new Error("Erro inesperado, verificar informações passadas")
    }
  }

  public async getAllEstudantes() {
    try {
      return await BaseDatabase.connection('Estudante')
      .select()
    } catch (error:any){
      throw new Error("Erro inesperado")
    }
  }

  public async mudarTurmaEstudante(id: any, turma_id: string) {
    try {
      await BaseDatabase.connection("Estudante")
      .update({
        turma_id: turma_id
      })
      .where("id", id)
    } catch (error: any) {
        throw new Error("Erro inesperado, verificar informações passadas")
    }
}
}
