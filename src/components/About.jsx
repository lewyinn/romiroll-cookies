import React from 'react'
import profilePic from '../assets/Logo.png'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const About = () => {
    return (
        <div className='pb-24' id='about'>
            <div className='flex flex-wrap items-center justify-around gap-12 lg:gap-0'>
                <motion.div initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <img
                            src={profilePic} alt='Ridho Kurniawan'
                            className='w-[480px] h-auto object-cover'
                            width={650} height={350} />
                    </div>
                </motion.div>
                <div className='w-full lg:w-1/2'>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col justify-center items-start gap-8 w-auto lg:w-2xl'>
                        <h1 className='text-4xl lg:text-7xl font-semibold text-[#A096CF]'>
                            What Is Romiroll?
                        </h1>
                        <p className='text-xl font-normal text-gray-900'>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi volutpat fringilla sociosqu ipsum habitant nunc dis. 
                            Imperdiet sapien eleifend scelerisque lorem luctus in class turpis. 
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
