import React from 'react'
import { motion } from "framer-motion";
import image from '../assets/cookiesMenu.jpg'
import imageBites from '../assets/cookiesMenu1.jpeg'
import imageWise from '../assets/cookiesMenu2.jpeg'

const iconVariants = (duration) => ({
    initial: { y: -8 },
    animate: {
        y: [14, -16],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Menu = () => {
    return (
        <div className='py-10' id='menu'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <motion.div whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8 }} 
                    className='flex flex-col justify-center items-center text-center gap-3'>
                    <h1 className='text-5xl font-bold text-[#A096CF]'>
                        Pilihan Cookies Lezat Kami
                    </h1>
                    <p className='text-xl font-medium text-gray-800'>
                        Temukan cookies yang dibuat dengan resep spesial. Dibuat dengan cinta dan bahan terbaik!
                    </p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }} 
                    className='grid grid-cols-1 md:grid-cols-3 text-center gap-6'>
                    <div className="relative w-auto md:w-96 text-center overflow-hidden">
                        <motion.img
                            src={image}
                            alt='Cookies'
                            className="w-64 lg:w-72 h-auto absolute top-14 lg:top-6 left-1/2 transform -translate-x-1/2 rounded-full object-cover z-20"
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                        />
                        <div className="mt-48 bg-[#A096CF] shadow-xl px-6 pb-6 pt-36 rounded-2xl z-0">
                            <span className="text-yellow-500 font-bold text-lg">⭐⭐⭐⭐⭐</span>
                            <h2 className="font-bold text-4xl text-white">Choco Brownies</h2>
                            <p className="text-gray-200 text-xl mt-2">Brownies Rasa coklat nikmat</p>
                            <p className="text-2xl font-bold mt-2 text-gray-100">Rp. 3.000</p>
                        </div>
                    </div>
                    <div className="relative w-auto md:w-96 text-center overflow-hidden">
                        <motion.img
                            src={imageBites}
                            alt='Cookies'
                            className="w-64 lg:w-72 h-auto absolute top-14 lg:top-6 left-1/2 transform -translate-x-1/2 rounded-full object-cover z-20"
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                        />
                        <div className="mt-48 bg-[#A096CF] shadow-xl px-6 pb-6 pt-36 rounded-2xl z-0">
                            <span className="text-yellow-500 font-bold text-lg">⭐⭐⭐⭐⭐</span>
                            <h2 className="font-bold text-4xl text-white">Brownies Bites</h2>
                            <p className="text-gray-200 text-xl mt-2">Brownies Bites yang melezatkan </p>
                            <p className="text-2xl font-bold mt-2 text-gray-100">Rp. 3.000</p>
                        </div>
                    </div>
                    <div className="relative w-auto md:w-96 text-center overflow-hidden">
                        <motion.img
                            src={imageWise}
                            alt='Cookies'
                            className="w-64 lg:w-72 h-auto absolute top-14 lg:top-6 left-1/2 transform -translate-x-1/2 rounded-full object-cover z-20"
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                        />
                        <div className="mt-48 bg-[#A096CF] shadow-xl px-6 pb-6 pt-36 rounded-2xl z-0">
                            <span className="text-yellow-500 font-bold text-lg">⭐⭐⭐⭐⭐</span>
                            <h2 className="font-bold text-4xl text-white">Hard Cookies</h2>
                            <p className="text-gray-200 text-xl mt-2">-</p>
                            <p className="text-2xl font-bold mt-2 text-gray-100">Rp. 3.000</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Menu
