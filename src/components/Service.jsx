import { motion } from 'framer-motion';
import React from 'react'
import { GiWrappedSweet } from 'react-icons/gi';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Service = () => {
    return (
        <div className='pb-24' id='service'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-bold text-[#A096CF]'>
                Our Services
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-8'>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)}
                    className='flex justify-center items-center gap-2'>   
                    <GiWrappedSweet className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Sweet Tasty</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className='flex justify-center items-center gap-2'>   
                    <GiWrappedSweet className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Sweet Tasty</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='flex justify-center items-center gap-2'>   
                    <GiWrappedSweet className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Sweet Tasty</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='flex justify-center items-center gap-2'>   
                    <GiWrappedSweet className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Sweet Tasty</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Service;