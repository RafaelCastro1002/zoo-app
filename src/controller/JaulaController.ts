import sql from '../config/db'
import { Jaula } from '../models/Jaula'

export const saveJaula = async (jaulas: Jaula | Jaula[]) => {
  const jaulaList = Array.isArray(jaulas) ? jaulas : [jaulas]

  for (const jaula of jaulaList) {
    const { area, codigo } = jaula

    await sql`
      insert into jaula(codigo, area) values (
          ${codigo}, ${area}
      ) returning codigo
    `
  }
}

export const findJaulaByMatriculaZelador = async (matriculaZelador: string) => {
  const result = await sql`
    select * from jaula
    left join jaula_zelador on jaula_zelador.codigo_jaula = jaula.codigo
    where jaula_zelador.matricula_zelador = ${matriculaZelador}
  `

  return result
}
