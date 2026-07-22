import type { Metadata } from "next";
import { RacketFilters } from "@/components/racketFilters/RacketFilters";
import {Suspense} from "react";
import {RacketCardListContainer} from "@/components/racketCardList/RacketCardListContainer";
import {getSelectedBrand} from "@/utils/getSelectedBrand.util";

export const metadata: Metadata = {
  title: "All Tennis Rackets | Rackets Shop",
  description:
    "Discover professional-grade tennis rackets engineered for precision, speed, and performance.",
};

export default async function RacketsPage(props: {
  searchParams: Promise<{ brand: string }>
}) {
  const {brand} = await props.searchParams
  const selectedBrand = getSelectedBrand(brand);
  return (
    <main className="flex-1 bg-[#f7f8f5]">
      <section className="mx-auto w-full max-w-[1480px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-[1040px]">
          <h1 className="text-5xl font-extrabold leading-[0.96] tracking-tight text-[#101516] sm:text-6xl lg:text-[72px]">
            All Tennis Rackets
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#444c45] sm:mt-7 sm:text-xl sm:leading-9">
            Discover our curated collection of professional-grade tennis
            rackets. Engineered for precision, speed, and ultimate performance
            on every court surface.
          </p>
        </div>

        <div className="mt-12 border-t border-[#d8ddcb] pt-7 sm:mt-14 sm:pt-8">
          <RacketFilters selectedBrand={selectedBrand} />
        </div>
      </section>
      <div>
        <Suspense fallback={<p>Loading rackets...</p>}>
          <RacketCardListContainer brand={brand} />
        </Suspense>
      </div>
    </main>
  );
}
