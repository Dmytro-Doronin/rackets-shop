import { notFound } from 'next/navigation'

import {productResponse} from "@/types/rackets.type";
import {Suspense} from "react";
import {RacketContainer} from "@/components/racketContainer/RacketContainer";

async function getRacket(id: string):Promise<productResponse | null>  {
    const res = await fetch(`http://localhost:4000/api/product/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        return null
    }
    return res.json()
}

export default async function RacketPage(props: {
    params: Promise<{ racketId: string }>
}) {
    const { racketId } = await props.params
    const racket = await getRacket(racketId)
    if (!racket) {
        return notFound()
    }

    const product = racket.product

    return (
        <Suspense fallback={<p>Loading rackets...</p>}>
            <RacketContainer product={product} />
        </Suspense>
    )
}
