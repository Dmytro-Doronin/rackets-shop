import Link from "next/link";
import clsx from "clsx";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

type RacketFiltersProps = {
  selectedBrand?: string;
};

const brands = [
  { label: "All", href: "/rackets" },
  { label: "Wilson", href: "/rackets?brand=Wilson", value: "Wilson" },
  { label: "Babolat", href: "/rackets?brand=Babolat", value: "Babolat" },
  { label: "Head", href: "/rackets?brand=Head", value: "Head" },
  { label: "Yonex", href: "/rackets?brand=Yonex", value: "Yonex" },
];

export function RacketFilters({ selectedBrand }: RacketFiltersProps) {
  const normalizedSelectedBrand = selectedBrand?.toLowerCase();

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="shrink-0 text-xs font-bold tracking-[0.18em] text-[#5f6957]">
          FILTER BRANDS:
        </span>

        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => {
            const isActive = brand.value
              ? normalizedSelectedBrand === brand.value.toLowerCase()
              : !normalizedSelectedBrand;

            return (
              <Link
                key={brand.label}
                href={brand.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition-colors sm:text-base",
                  isActive
                    ? "border-[#4d6500] bg-[#a7d129] text-[#17200f]"
                    : "border-[#d8ddcb] bg-[#fcfdf8] text-[#202722] hover:bg-[#edf3df]",
                )}
              >
                {brand.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex w-fit items-center gap-3 rounded-full border border-[#d8ddcb] bg-[#fcfdf8] px-5 py-3 text-sm text-[#202722] shadow-[0_1px_0_rgba(77,101,0,0.06)] sm:text-base">
        <span className="text-[#697366]">Sort by:</span>
        <span className="font-semibold">Featured</span>
        <ChevronDownIcon />
      </div>
    </div>
  );
}
