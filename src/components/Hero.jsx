import React from 'react'
import { Link } from 'react-scroll'
import profilePic from '../assets/cookies.jpg'
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

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [15, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Hero = () => {
    return (
        <div className='mt-32 pb-4 lg:mb-36' id='home'>
            <div className='flex flex-wrap items-center justify-around gap-12 lg:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col justify-center items-start gap-8 w-auto lg:w-2xl'>
                        <motion.h1 variants={childVariants}
                            className='text-4xl lg:text-[84px] font-semibold text-[#A096CF]'>
                            Nikmati Kelezatan Romiroll Cookies!
                        </motion.h1>
                        <motion.p initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 }} 
                            variants={childVariants} 
                            className='text-xl font-normal text-gray-900'>
                            Kami menghadirkan cookies premium dengan bahan berkualitas dan rasa yang menggoda. 
                            Setiap gigitan memberikan pengalaman manis yang tak terlupakan!
                        </motion.p>
                        <motion.div 
                            variants={childVariants}
                            className='flex justify-center items-center gap-3 lg:gap-6'>
                            <Link to='menu' spy={true} smooth={true} offset={-200} 
                                className='cursor-pointer text-base lg:text-xl font-semibold text-white bg-[#A096CF] hover:bg-[#968acc] px-6 py-3 rounded-2xl'>
                                Food Menu
                            </Link>
                            <Link to='about' spy={true} smooth={true} offset={-200} 
                                className='cursor-pointer text-base lg:text-xl font-semibold text-[#A096CF] bg-white hover:text-white hover:bg-[#A096CF] border-2 border-[#A096CF] px-6 py-3 rounded-2xl'>
                                See More
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='w-full lg:w-xl'>
                    <motion.div className='flex justify-center lg:p-8'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}>
                        <motion.img
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                            src={profilePic} alt='Ridho Kurniawan'
                            className='w-[650px] h-[540px] object-cover border-2 border-[#A096CF] rounded-3xl'
                            width={650} height={350} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero