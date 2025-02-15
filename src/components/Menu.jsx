import React from 'react'
import { motion } from "framer-motion";
import image from '../assets/cookiesMenu.jpg'

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
            <div className='flex flex-col justify-center items-center'>
                <motion.div whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8 }} 
                    className='flex flex-col justify-center items-center text-center gap-3'>
                    <h1 className='text-5xl font-bold text-[#A096CF]'>
                        Top List
                    </h1>
                    <p className='text-xl font-medium text-gray-800'>
                        Our Mainstay menu
                    </p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }} 
                    className='grid grid-cols-1 text-center'>
                    <div className="relative w-96 text-center overflow-hidden">
                        <motion.img
                            src={image}
                            alt='Cookies'
                            className="w-72 h-auto absolute top-6 left-1/2 transform -translate-x-1/2 rounded-full object-cover z-20"
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                        />
                        <div className="mt-48 bg-[#A096CF] shadow-xl px-6 pb-6 pt-36 rounded-2xl z-0">
                            <span className="text-yellow-500 font-bold text-lg">⭐⭐⭐⭐⭐</span>
                            <h2 className="font-bold text-4xl text-white">Cookies</h2>
                            <p className="text-gray-200 text-xl mt-2">Spicy boil with seafood and pork in hot pot</p>
                            <p className="text-2xl font-bold mt-2 text-gray-100">Rp. 5.000</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Menu
