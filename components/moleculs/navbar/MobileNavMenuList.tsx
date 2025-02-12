import React from 'react'
import { MenuIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/atoms/Button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/atoms/Sheet'

interface IMobileNavMenuListProps {
    className?: string
}

const MobileNavMenuList = ({ className }: IMobileNavMenuListProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild className={cn(className)}>
                <Button size={'icon'} variant={'ghost'} className='p-6'>
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNavMenuList