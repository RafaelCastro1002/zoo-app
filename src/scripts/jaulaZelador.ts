import jaulaZeladorData from "../data/jaulaZelador.json";
import sql from "../config/db";

export const insertJaulaRelationZeladorOnDb = async () => {
  console.log("Insert Relation");

  for (const relation of jaulaZeladorData) {
    const { codigo_jaula, matricula_zelador } = relation;

    await sql`
          insert into jaula_zelador(codigo_jaula, matricula_zelador) values (
              ${codigo_jaula}, ${matricula_zelador}
          ) returning codigo_jaula
        `;
  }
};
