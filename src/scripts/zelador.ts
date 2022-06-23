import zeladoresData from "../data/zelador.json";
import { Zelador } from "../models/Zelador";
import { saveZelador } from "../controller/ZeladorController";

export const insertZeladoresOnDb = async () => {
  console.log("Insert Zeladores");

  const zeladores: Zelador[] = zeladoresData as Zelador[];

  await saveZelador(zeladores);
};
