'use client'

import Link from "next/link";
import {Racket} from "@/types/rackets.type";
import {RacketCard} from "@/components/racketCard/RacketCard";

type RacketsCardProps = { rackets: Racket[] }

export const RacketCardList = ({rackets}: RacketsCardProps) => {
    return (
        <div>
            {rackets.map((racket, index) => (
                <Link key={racket.id} href={`/racket/${racket.id}`}>
                    <RacketCard racket={racket} />
                </Link>
            ))}
        </div>
    );
};