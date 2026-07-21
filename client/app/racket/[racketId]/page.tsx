import { notFound } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

import CartIcon from "@/components/icons/CartIcon";
import {productResponse} from "@/types/rackets.type";

async function getRacket(id: string):Promise<productResponse | null>  {
    const res = await fetch(`http://localhost:4000/api/product/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        return null
    }
    return res.json()
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

export default async function RacketPage(props: {
    params: Promise<{ racketId: string }>
}) {
    const { racketId } = await props.params
    const racket = await getRacket(racketId)
    if (!racket) {
        return notFound()
    }

    const product = racket.product
    const brandName = (product.brand as { name?: string } | undefined)?.name
    const productSpecs = [
        product.model ? { label: 'Model', value: product.model } : null,
        product.type ? { label: 'Type', value: product.type } : null,
        product.year ? { label: 'Year', value: String(product.year) } : null,
    ].filter((spec): spec is { label: string; value: string } => Boolean(spec))

    return (
        <main className="min-h-screen bg-[#f7f8f5] text-[#101516]">
            <div className="mx-auto w-full max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14">
                <Link
                    className="inline-flex text-sm font-bold uppercase tracking-[0.08em] text-[#4d6500] transition-colors hover:text-[#3f5400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d6500] focus-visible:ring-offset-2"
                    href="/rackets"
                >
                    Back to All Rackets
                </Link>

                <section className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)] lg:gap-14 xl:gap-20">
                    <div className="overflow-hidden rounded-lg border border-[#dfe4dd] bg-white">
                        <div className="flex h-[360px] items-center justify-center p-6 sm:h-[500px] sm:p-10 lg:h-[620px]">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={760}
                                height={760}
                                priority
                                sizes="(min-width: 1024px) 56vw, 100vw"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        {brandName && (
                            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#4d6500]">
                                {brandName}
                            </p>
                        )}

                        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#101516] sm:text-5xl lg:text-[64px]">
                            {product.name}
                        </h1>

                        {typeof product.price === 'number' && (
                            <p className="mt-6 text-3xl font-extrabold text-[#4d6500] sm:text-4xl">
                                {formatPrice(product.price)}
                            </p>
                        )}

                        {product.description && (
                            <p className="mt-7 max-w-[640px] text-base leading-8 text-[#38413b] sm:text-lg sm:leading-9">
                                {product.description}
                            </p>
                        )}

                        {productSpecs.length > 0 && (
                            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {productSpecs.map((spec) => (
                                    <div
                                        className="rounded-md border border-[#dfe4dd] bg-white px-4 py-4"
                                        key={spec.label}
                                    >
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#6a746e]">
                                            {spec.label}
                                        </p>
                                        <p className="mt-2 text-lg font-extrabold text-[#101516] capitalize">
                                            {spec.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#101516] px-7 py-4 text-base font-extrabold text-white transition-colors hover:bg-[#26302a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101516] focus-visible:ring-offset-2 sm:w-auto"
                            type="button"
                        >
                            <CartIcon className="h-5 w-5 stroke-current stroke-[2.4] [stroke-linecap:round] [stroke-linejoin:round]" />
                            Add to Cart
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}
