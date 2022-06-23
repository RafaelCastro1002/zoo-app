import especimesData from "../data/especime.json";
import { saveEspecime } from "../controller/EspecimeController";
import { Especime } from "../models/Especime.js";

export const insertEspecimesOnDb = async () => {
  console.log("Insert Especimes");

  const especimes: Especime[] = especimesData as Especime[];

  await saveEspecime(especimes);
};
