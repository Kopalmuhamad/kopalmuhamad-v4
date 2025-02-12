import { cn } from '@/lib/utils'
import React from 'react'

interface IContainerProps {
    children: React.ReactNode
    fluid?: boolean
    className?: string
}

const Container = ({ children, fluid, className }: IContainerProps) => {
    return (
        <div className={cn(fluid ? 'w-full mx-auto px-2' : 'max-w-[320px] xs:max-w-[425px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-none lg:container mx-auto px-2', className)}>{children}</div>
    )
}

export default Container