import React from 'react'
import profilePic from '../assets/Logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
                            Apa Itu Romiroll
                        </h1>
                        <p className='text-xl font-normal text-gray-900'>
                            Romiroll berawal dari kecintaan terhadap cookies berkualitas.
                            Kami berkomitmen untuk menghadirkan camilan lezat yang sehat, renyah, dan penuh rasa dalam setiap gigitan.
                        </p>
                        <a href='https://wa.me/628'
                            className='cursor-pointer text-base lg:text-xl font-semibold text-[#A096CF] bg-white hover:text-white hover:bg-[#A096CF] border-2 border-[#A096CF] px-6 py-3 rounded-xl'>
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
