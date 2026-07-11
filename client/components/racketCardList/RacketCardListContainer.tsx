import {RacketCardList} from './RacketCardList'
import {notFound} from "next/navigation";

async function getRackets(params?: { brand?: string; limit?: number }) {
    const url = new URL('http://localhost:4000/api/products')

    if (params?.brand) url.searchParams.append('brand', params.brand)
    if (params?.limit) url.searchParams.append('limit', String(params.limit))

    const res = await fetch(url.toString(), { cache: 'no-store' })
    return res.json()
}

export const RacketCardListContainer = async ({
   brand,
   }: {
    brand?: string
}) => {
    const rackets = await getRackets({ brand, limit: 20 })

    if (!rackets) {
        return notFound()
    }

    return (
        <div>
            <RacketCardList rackets={rackets} />
        </div>
    )
}