import jaulasData from "../data/jaula.json";
import { Jaula } from "../models/Jaula";
import { saveJaula } from "../controller/JaulaController";

export const insertJaulasOnDb = async () => {
  console.log("Insert Jaulas");

  const jaulas: Jaula[] = jaulasData as Jaula[];

  await saveJaula(jaulas);
};
