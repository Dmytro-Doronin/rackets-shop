'use client'

import Image from 'next/image'

import {Racket} from "@/types/rackets.type";

type RacketCardProps = { racket: Racket }

export const RacketCard = (props: RacketCardProps) => {

    const {imageUrl, name, model} = props.racket
    return (
        <div>
            <Image src={imageUrl} alt={imageUrl} width='400' height='400'/>
            <div>
                <span>{name}</span>
                <span>{model}</span>
            </div>
        </div>
    );
};