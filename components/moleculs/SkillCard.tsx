import React from 'react'
import SpotlightCard from '../atoms/SpotlightCard'

const SkillCard = ({ title, children: icon }: { title: string, children: React.ReactNode }) => {
    return (
        <SpotlightCard className='w-[150px] aspect-square flex flex-col items-center justify-center gap-2 bg-secondary rounded-xl px-3 border border-border'>
            <div className='w-[50px] h-[50px]'>
                {icon}
            </div>
            <p className='text-sm font-bold text-secondary-foreground'>{title}</p>
        </SpotlightCard>
    )
}

export default SkillCard