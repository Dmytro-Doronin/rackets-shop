import {productResponse} from "@/types/rackets.type";
import {Suspense} from "react";
import {RacketContainer} from "@/app/racket/[racketId]/racketContainer/RacketContainer";
import {Metadata} from "next";
import {getMetaRacketById} from "@/service/getMetaRacketById";
import {notFound} from "next/navigation";
import {throws} from "node:assert";

export async function getRacket(id: string):Promise<productResponse | null>  {
    const res = await fetch(`http://localhost:4000/api/product/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        return null
    }
    return res.json()
}

type Props = {
    params: Promise<{racketId: string}>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const { racketId } = await params

    const result = await getMetaRacketById({id: racketId})

    if (result.isError || !result.data) {
        return {}
    }

    return {
        title: result.data.product.name
    }
}

export default async function RacketPage(props: {
    params: Promise<{ racketId: string }>
}) {
    const { racketId } = await props.params
    const {data, isError} = await getMetaRacketById({id: racketId})

    if (isError) {
        throw new Error('error')
    }

    if (!data) {
        return notFound()
    }

    return (
        <Suspense fallback={<p>Loading rackets suspense...</p>}>
            <RacketContainer racketId={racketId} />
        </Suspense>
    )
}
