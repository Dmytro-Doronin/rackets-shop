import Link from "next/link";
import { Suspense } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";
import CartIcon from "@/components/icons/CartIcon";
import {NavigationLinksFallback} from "@/components/navLinks/NavigationLinksFallback";
import {NavigationLinks} from "@/components/navLinks/NavLinks";
import {Button} from "@/components/button/Button";

export const Header = ()=> {
  return (
    <header className="w-full border-b border-[#d9ddc9] bg-[#f3f4f6] font-[Inter,Arial,sans-serif]">
      <div className="flex min-h-[96px] flex-wrap items-center gap-y-4 px-5 py-4 sm:px-8 xl:h-[110px] xl:flex-nowrap xl:px-16 xl:py-0">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap font-[Montserrat,Arial,sans-serif] text-[30px] font-extrabold leading-none text-[#071017] transition-colors hover:text-[#4d6500] xl:w-[280px] xl:text-[34px] 2xl:w-[244px]"
        >
          Rackets Shop
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center gap-8 overflow-x-auto pb-1 xl:order-none xl:w-auto xl:flex-1 xl:justify-center xl:overflow-visible xl:pb-0 2xl:gap-[64px]"
        >
          <Suspense fallback={<NavigationLinksFallback />}>
            <NavigationLinks />
          </Suspense>
        </nav>

        <div className="ml-auto flex shrink-0 items-center justify-end gap-4 text-[#4d6500] sm:gap-5 xl:ml-0 xl:w-[156px] xl:gap-6">
          <Button type="button" variant="link" aria-label="Search">
            <SearchIcon className="h-7 w-7 stroke-current stroke-[2.1]" />
          </Button>
          <Button type="button" variant="link" aria-label="Card">
            <CartIcon className="h-8 w-8 stroke-current stroke-[2.1] [stroke-linecap:round] [stroke-linejoin:round]" />
          </Button>
          <Button type="button" variant="link" aria-label="User">
            <UserIcon className="h-8 w-8 stroke-current stroke-[2.1] [stroke-linecap:round] [stroke-linejoin:round]" />
          </Button>
        </div>
      </div>
    </header>
  );
}