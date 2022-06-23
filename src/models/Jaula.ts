
export type Jaula = {
    codigo: string
    area: number
}

export const getZeladorFromDb = (jsonObj: any): Jaula => {
    const { codigo, area } = jsonObj

    const jaula: Jaula = {
        codigo,
        area,
    }

    return jaula
}

