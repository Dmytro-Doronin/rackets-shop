'use client'

import {Racket} from "@/types/rackets.type";
import {RacketCard} from "@/components/racketCard/RacketCard";

type RacketsCardProps = {
    rackets: Racket[]
    showRank?: boolean
}

const getBadgeLabel = (index: number) => {
    if (index === 0) {
        return 'NEW ARRIVAL'
    }
    if (index === 2) {
        return 'BEST SELLER'
    }
    return undefined
}

export const RacketCardList = ({rackets, showRank = false}: RacketsCardProps) => {
    return (
        <div className="mx-auto grid w-full max-w-370 grid-cols-1 gap-6 px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-16">
            {rackets.map((racket, index) => (
                <RacketCard
                    key={racket.id}
                    racket={racket}
                    href={`/racket/${racket.id}`}
                    badge={showRank ? undefined : getBadgeLabel(index)}
                    rank={showRank ? index + 1 : undefined}
                />
            ))}
        </div>
    );
};
