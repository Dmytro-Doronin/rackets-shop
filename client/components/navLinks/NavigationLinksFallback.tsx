import Link from "next/link";
import {navigationLinks, navLinkClassName} from "@/components/navLinks/NavLinks";

export const NavigationLinksFallback = () => {
    return (
        <>
            {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClassName}>
                    {link.label}
                </Link>
            ))}
        </>
    );
}