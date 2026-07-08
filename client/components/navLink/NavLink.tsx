'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import {ComponentProps, ReactNode} from 'react'

type NavLinkProps = ComponentProps<typeof Link> & {
    children: ReactNode
    className?: string
    activeClassName?: string
}


export const NavLink = ({
    href,
    children,
    className = '',
    activeClassName = '',
    ...props
}: NavLinkProps) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const isObjectHref = typeof href !== 'string'
    const targetPath = isObjectHref ? href.pathname : href
    const targetQuery = isObjectHref && href.query ? href.query : {}

    const currentParams = Object.fromEntries(searchParams.entries())

    const isActive =
        pathname === targetPath &&
        Object.entries(targetQuery).every(([key, value]) => currentParams[key] === value)

    return (
        <Link href={href} className={clsx(className, isActive && activeClassName)} {...props}>
            {children}
        </Link>
    )
}