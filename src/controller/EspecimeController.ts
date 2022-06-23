import sql from '../config/db'
import { Especime } from '../models/Especime'

export const saveEspecime = async (especies: Especime | Especime[]) => {
  const especieList = Array.isArray(especies) ? especies : [especies]

  for (const especie of especieList) {
    const { numSerie, idEspecie, codigoJaula } = especie

    await sql`
      insert into especime(num_serie, id_especie, codigo_jaula) values (
        ${numSerie}, ${idEspecie}, ${codigoJaula}
      ) returning id
    `
  }
}

export const findEspecimeByEspecieId = async (especieId: number) => {
  const result = await sql`
    select * from especime
    where id_especie = ${especieId}
  `

  return result
}

export const findEspecimeByCodigoJaula = async (codigoJaula: string) => {
  const result = await sql`
    select * from especime
    where codigo_jaula = ${codigoJaula}
  `

  return result
}

export const findEspecimeByMatriculaZelador = async (matriculaZelador: string) => {
  const result = await sql`
    select * from especime
    left join jaula_zelador on jaula_zelador.codigo_jaula = especime.codigo_jaula
    where jaula_zelador.matricula_zelador = ${matriculaZelador}
  `

  return result
}
