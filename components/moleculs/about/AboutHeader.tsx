import Line from '@/components/atoms/Line'
import { NotebookIcon } from 'lucide-react'
import React from 'react'

const AboutHeader = () => {
    return (
        <header className='flex items-center justify-between overflow-hidden mt-3'>
            <h1 className='text-4xl xs:text-6xl md:text-8xl font-black uppercase'>About</h1>
            <NotebookIcon className='w-[40px] h-[40px] xs:w-[55px] xs:h-[55px] md:w-[80px] md:h-[80px]' />
        </header>
    )
}

export default AboutHeader