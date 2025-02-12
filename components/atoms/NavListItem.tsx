'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavListItem = ({ title, href }: { title: string, href: string }) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={cn('text-sm font-bold capitalize', pathname === `${href}` ? 'text-second-accent' : 'text-foreground')}>{title}</Link>
    )
}

export default NavListItem