import sql from "../config/db";
import { Especie } from "../models/Especie";

export const saveEspecie = async (especies: Especie | Especie[]) => {
  const especieList = Array.isArray(especies) ? especies : [especies];

  for (const especie of especieList) {
    const { id, nomeCientifico, nomePopular, habitat, familia, ordem } =
      especie;

    await sql`
      insert into especie(id, nome_cientifico, nome_popular, habitat, familia, ordem) values (
          ${id}, ${nomeCientifico}, ${nomePopular}, ${habitat}, ${familia}, ${ordem}
      ) returning id
    `;
  }
};

type ListParams = {
  habitatFilter?: string;
};

export const listEspecie = ({ habitatFilter }: ListParams = {}) => {
  return sql`
    select * from especie
    where habitat like ${"%" + habitatFilter.toLowerCase() + "%"}
  `;
};

export const getByNomeCientifico = async (name: string) => {
  return (
    await sql`
    select * from especie
    where LOWER(nome_cientifico) like LOWER(${"%" + name.toLowerCase() + "%"})
  `
  )[0];
};
