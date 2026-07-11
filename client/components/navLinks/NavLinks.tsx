import {NavLink} from "@/components/navLink/NavLink";
export const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/rackets", label: "All Rackets" },
    { href: "/top-10", label: "Top 10" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
];

export const navLinkClassName =
    "relative inline-flex h-10 shrink-0 items-center px-1 text-[18px] font-normal leading-none text-[#1f2528] transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:scale-x-0 after:bg-[#4d6500] after:transition-transform hover:text-[#4d6500] xl:text-[20px] 2xl:text-[24px]";

export const activeNavLinkClassName =
    "font-semibold text-[#4d6500] after:scale-x-100";

export const NavigationLinks = () => {
    return (
        <>
            {navigationLinks.map((link) => (
                <NavLink
                    key={link.href}
                    href={link.href}
                    className={navLinkClassName}
                    activeClassName={activeNavLinkClassName}
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );
}