import { insertEspeciesOnDb } from "./scripts/especie";
import { createTables } from "./config/db";
import { insertJaulasOnDb } from "./scripts/jaula";
import { insertZeladoresOnDb } from "./scripts/zelador";
import { insertEspecimesOnDb } from "./scripts/especime";
import { insertJaulaRelationZeladorOnDb } from "./scripts/jaulaZelador";
import {
  findEspecimeByEspecieId,
  findEspecimeByCodigoJaula,
  findEspecimeByMatriculaZelador,
} from "./controller/EspecimeController";
import { findJaulaByMatriculaZelador } from "./controller/JaulaController";
import { findZeladorByEspecieId } from "./controller/ZeladorController";
import {
  getByNomeCientifico,
  listEspecie,
} from "./controller/EspecieController";

const bootDB = async () => {
  await createTables();

  await insertEspeciesOnDb();

  await insertJaulasOnDb();

  await insertZeladoresOnDb();

  await insertEspecimesOnDb();

  await insertJaulaRelationZeladorOnDb();
};

const consultsFromEspecie = async () => {
  const especiesFilterHabitat = await listEspecie({
    habitatFilter: "floresta",
  });

  console.log(especiesFilterHabitat);

  const especieOnca = await getByNomeCientifico("panthera onca");

  console.log(especieOnca);
};

const consultsFromEspecime = async () => {
  const especimesFromEspecie = await findEspecimeByEspecieId(1);

  console.log(especimesFromEspecie);

  const especimesOnJaula = await findEspecimeByCodigoJaula("00001");

  console.log(especimesOnJaula);

  const especimesByZelador = await findEspecimeByMatriculaZelador("12001");

  console.log(especimesByZelador);
};

const consultsFromJaula = async () => {
  const jaulasByZelador = await findJaulaByMatriculaZelador("12001");

  console.log(jaulasByZelador);
};

const consultsFromZelador = async () => {
  const zeladores = await findZeladorByEspecieId(1);

  console.log(zeladores);
};

const run = async () => {
  await bootDB();

  await consultsFromEspecie();

  // await consultsFromEspecime();

  // await consultsFromJaula()

  // await consultsFromZelador()
};

run();
