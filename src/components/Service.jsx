import { motion } from 'framer-motion';
import React from 'react'
import { BiData } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { GiWrappedSweet } from 'react-icons/gi';
import { TbNumber100Small} from 'react-icons/tb';

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
                Kenapa Harus Romiroll?
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
                    <FaStar className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Bahan Premium</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className='flex justify-center items-center gap-2'>   
                    <TbNumber100Small className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Tekstur Sempurna</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='flex justify-center items-center gap-2'>   
                    <BiData className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Varian Rasa Unik</span>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='flex justify-center items-center gap-2'>   
                    <BsHeartFill className='text-5xl text-[#A096CF]'/>
                    <span className='text-3xl font-bold text-black'>Dibuat dengan Cinta</span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Service;