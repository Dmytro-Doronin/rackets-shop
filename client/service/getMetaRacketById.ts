import {API_URL} from "@/constants/api";
import {Racket} from "@/types/rackets.type";

type Params = {
    id: string
}
export const getMetaRacketById = async (
    {id}: Params
) => {
    const result = await fetch(`${API_URL}/meta/product/${id}`)

    if (result.status === 404) {
        return {isError: false, data: undefined}
    }

    if (!result.ok) {
        return {isError: true, data: undefined}
    }

    const data : {product: Racket} = await result.json()

    return {isError: false, data: data}
}