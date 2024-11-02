"use client"

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'

import ArrowRight  from '@/assets/arrow-right.svg'
import StarImage from '@/assets/star.png'
import SpringImage from '@/assets/spring.png'


export const CallToAction = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })
    
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
    
    return (
        <section ref={sectionRef} className="bg-gradient-b from-white to-[#D2DCFF] py-24">
            <div className="container">
                <div className="section-heading relative">
                    <h2 className="section-title">Sign up for free today</h2>
                    <p className="section-description mt-5">Celebrate the joy of accomplishment with an app 
                        designed to track your progress and motivate your efforts
                    </p>
                    <motion.img 
                        src={StarImage.src} 
                        alt='Star Image' 
                        width={360} 
                        className='absolute -left-[350px] -top-[137px]' 
                        style={{
                            translateY,
                        }}
                        />
                    
                    <motion.img 
                        src={SpringImage.src} 
                        alt='Star Image' 
                        width={360} 
                        className='absolute -right-[331px] -top-[19px]' 
                        style={{
                            translateY,
                        }}
                        />

                </div>
                <div className="flex gap-2 mt-10 justify-center">
                    <button className="btn btn-primary p-2">Get for free</button>
                    <button className="btn btn-text">
                        <span>Learn more</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
