'use client'
import React from 'react'
import { ChevronUpIcon } from 'lucide-react'

const ButtonToTop = ({ isVisible }: { isVisible: boolean }) => {

    return (
        isVisible && (
            <ChevronUpIcon size={20} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        )
    )
}

export default ButtonToTop