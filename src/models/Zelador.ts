
export type Zelador = {
    matricula: string
    nome: string
    dataNascimento: string
}

export const getZeladorFromDb = (jsonObj: any): Zelador => {
    const { matricula, nome, data_nascimento } = jsonObj

    const zelador: Zelador = {
        matricula,
        nome,
        dataNascimento: data_nascimento
    }

    return zelador
}

