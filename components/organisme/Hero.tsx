import React from 'react'
import HeroImage from '../moleculs/hero/HeroImage'
import HeroName from '../moleculs/hero/HeroName'
import { ParallaxTextWithVelocity } from '../atoms/ParallaxTextWithVelocity'
import HeroDomicilies from '../moleculs/hero/HeroDomicilies'

export const Hero = () => {
    return (
        <section id='hero' className='relative overflow-hidden h-screen w-full flex items-center justify-center flex-col'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <HeroImage containerWidth='md:w-[400px] md:h-[400px]' imageWidth='w-[200px] md:w-[250px]' imageHeight='h-[200px] md:h-[250px]' />
            </div>
            <HeroName text="Muhamad Kopal Aljamili" containerClassName='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' textClassName='text-[80px] xs:text-[90px] sm:text-[100px] md:text-[120px] tracking-widest uppercase font-bold font-bebas' />
            <ParallaxTextWithVelocity duration={1} delay={1.5} containerClassName='absolute bottom-0 left-0 right-0'>Frontend Developer</ParallaxTextWithVelocity>
            <HeroDomicilies />
        </section>
    )
}