
export type Especie = {
    id: number
    nomeCientifico: string
    nomePopular: string
    habitat: string
    familia: string
    ordem: string
}

export const getEspecieFromDb = (jsonObj: any): Especie => {
    const { id, nome_cientifico, nome_popular, habitat, familia, ordem } = jsonObj

    const especie: Especie = {
        id,
        nomeCientifico: nome_cientifico,
        nomePopular: nome_popular,
        habitat,
        familia,
        ordem
    }

    return especie
}
