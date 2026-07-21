'use client'

import Image from 'next/image'
import Link from 'next/link'

import CartIcon from "@/components/icons/CartIcon";
import {Racket} from "@/types/rackets.type";

type RacketCardProps = {
    racket: Racket
    href: string
    badge?: string
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

export const RacketCard = (props: RacketCardProps) => {
    const {imageUrl, name, model, price, description} = props.racket
    const subtitle = description || model

    return (
        <article className="group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-md border border-[#dfe4dd] bg-white text-[#101516] transition-colors duration-200 hover:border-[#cfd8ca]">
            <Link
                aria-label={`View ${name}`}
                className="absolute inset-0 z-10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d6500] focus-visible:ring-offset-2"
                href={props.href}
            />

            <div className="relative h-[280px] w-full overflow-hidden bg-[#eef1eb]">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={520}
                    height={420}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {props.badge && (
                    <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-[#e6ef3f] px-3 py-1 text-[11px] font-extrabold uppercase text-[#233000]">
                        {props.badge}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div>
                    <h2 className="line-clamp-2 text-2xl font-extrabold leading-tight text-[#101516]">
                        {name}
                    </h2>
                    <p className="mt-3 line-clamp-2 min-h-[48px] text-sm font-medium leading-6 text-[#303834]">
                        {subtitle}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <span className="text-[22px] font-extrabold leading-none text-[#4d6500]">
                        {formatPrice(price)}
                    </span>
                    <button
                        aria-label={`Add ${name} to cart`}
                        className="relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4d6500] text-white transition-colors duration-200 hover:bg-[#3f5400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d6500] focus-visible:ring-offset-2"
                        type="button"
                    >
                        <CartIcon className="h-5 w-5 stroke-current stroke-[2.4] [stroke-linecap:round] [stroke-linejoin:round]" />
                        <span
                            aria-hidden="true"
                            className="absolute right-2 top-1.5 text-xs font-extrabold leading-none text-white"
                        >
                            +
                        </span>
                    </button>
                </div>
            </div>
        </article>
    );
};
