import type { Metadata } from "next";
import {RacketCardList} from "@/components/racketCardList/RacketCardList";
import {notFound} from "next/navigation";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: "Top 10 Tennis Rackets | Rackets Shop",
    description:
        "Explore the highest-ranked tennis rackets selected for performance, control, power, and overall player value.",
};

async function getRackets(params?: { limit?: number }) {
    const url = new URL('http://localhost:4000/api/top-10')

    if (params?.limit) url.searchParams.append('limit', String(params.limit))

    const res = await fetch(url.toString(), {
        cache: 'no-store',
    })

    return res.json()
}

export default async function Top10Page() {
    const rackets = await getRackets ({limit: 10 })

    if (!rackets || rackets.length === 0) {
        return notFound()
    }

    return (
        <main className="flex-1 bg-[#f7f8f5]">
            <section className="mx-auto w-full max-w-[1480px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
                <div className="max-w-[1040px]">
                    <h1 className="text-5xl font-extrabold leading-[0.96] tracking-tight text-[#101516] sm:text-6xl lg:text-[72px]">
                        Top 10 Tennis Rackets
                    </h1>
                    <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#444c45] sm:mt-7 sm:text-xl sm:leading-9">
                        Explore the highest-ranked rackets selected for performance, control, power, and overall player value.
                    </p>
                </div>
            </section>

            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <RacketCardList rackets={rackets} showRank />
                </Suspense>

            </div>
        </main>
    );
};