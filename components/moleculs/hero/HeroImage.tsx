'use client'
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import React, { useRef, useEffect } from 'react'

interface IHeroImageProps {
    containerClassName?: string;
    containerWidth?: string;
    containerHeight?: string;
    imageClassName?: string;
    imageWidth?: string;
    imageHeight?: string;
}

const HeroImage = (props: IHeroImageProps) => {
    const {
        containerClassName = "",
        containerHeight = "h-[300px]",
        containerWidth = "w-[300px]",
        imageClassName = "",
        imageHeight = "h-[300px]",
        imageWidth = "w-[300px]"
    } = props

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [10, -10]);
    const rotateY = useTransform(x, [0, 400], [-10, 10]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    const animation = {
        hidden: {
            opacity: 0,
            scale: 0.4
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                delay: 1.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className={cn(containerClassName, containerHeight, containerWidth, 'overflow-hidden flex place-items-center place-content-center rounded-[30px] [perspective:300px]')}
            onMouseMove={handleMouse}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.4}
        >
            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                variants={animation}
                className={cn(imageClassName, imageWidth, imageHeight, 'cursor-grab active:cursor-grabbing bg-[url("/images/20250118_221100_099.jpg")] bg-cover bg-center rounded-[30px]')}
                style={{
                    rotateX,
                    rotateY
                }}
            />
        </motion.div>
    )
}

export default HeroImage