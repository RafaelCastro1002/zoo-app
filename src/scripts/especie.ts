import especiesData from "../data/especie.json";
import { saveEspecie } from "../controller/EspecieController";
import { Especie } from "../models/Especie";

export const insertEspeciesOnDb = async () => {
  console.log("Insert Especies");

  const especies: Especie[] = especiesData as Especie[];

  await saveEspecie(especies);
};
