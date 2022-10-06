import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudantesDatabase";

function getAgeByDateString(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const estudanteIdadePorId = async (req: Request, res: Response) => {
  let errorCode = 400;

  const { id } = req.params;

  try {
    const estudanteDatabase = new EstudanteDatabase();
    const result = await estudanteDatabase.getStudentAgeById(id);

    const studentAge = getAgeByDateString(result[0]);

    res.status(200).send(studentAge);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
