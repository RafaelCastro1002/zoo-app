
export type Especime = {
    id?: number
    numSerie: string
    apelido: string
    idEspecie: number
    codigoJaula: string
}

export const getEspecimeFromDb = (jsonObj: any): Especime => {
    const { id, num_serie, apelido, id_especie, codigo_jaula } = jsonObj

    const especie: Especime = {
        id,
        numSerie: num_serie,
        apelido,
        idEspecie: id_especie,
        codigoJaula: codigo_jaula
    }

    return especie
}