import sql from '../config/db'
import { Zelador } from '../models/Zelador'

export const saveZelador = async (zelador: Zelador | Zelador[]) => {
  const zeladorList = Array.isArray(zelador) ? zelador : [zelador]

  for (const zelador of zeladorList) {
    const { matricula, nome, dataNascimento } = zelador

    await sql`
      insert into zelador(matricula, nome, data_nascimento) values (
          ${matricula}, ${nome}, ${dataNascimento}
      ) returning matricula
    `
  }
}

export const findZeladorByEspecieId = async (especieId: number) => {
  const result = await sql`
    select * from zelador
    left join jaula_zelador on jaula_zelador.matricula_zelador = zelador.matricula
    left join especime on especime.codigo_jaula = jaula_zelador.codigo_jaula
    where especime.id_especie = ${especieId}
  `

  return result
}
