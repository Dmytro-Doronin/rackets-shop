export type Racket = {
    id: number;
    name: string,
    model: string,
    imageUrl: string,
    price: number,
    type: string,
    year: number,
    top10: boolean,
    description: string,
    brand: {
        connect: {
            id: number,
        },
    },
}

export type productResponse = {
    product: Racket
}