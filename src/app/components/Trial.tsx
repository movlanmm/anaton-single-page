import Image from 'next/image'
import React from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion'
import { variants } from '@/variants/variants';


export default function Trial() {
    return (
        <div className='container mx-auto flex items-center flex-col lg:flex-row space-y-7'>
            <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }} className="left w-full flex items-center justify-center lg:justify-start lg:w-1/2">
                <Image src={'/images/trial.png'} alt='Image' className='w-4/5  h-full object-contain' width={1000} height={1000} />
            </motion.div>

            <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }} className="right w-full lg:w-1/2 text-white space-y-9">
                <motion.h1 variants={variants} className='text-5xl font-bold leading-tight'>
                    Subscribe and get <br />
                    15 days free trial
                </motion.h1>
                <motion.p variants={variants} >Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</motion.p>
                <ul className='font-bold space-y-2'>
                    <motion.li variants={variants} className='flex gap-2 items-center'>
                        <IoIosCheckboxOutline />
                        <span>Ticketing system</span>
                    </motion.li>
                    <motion.li variants={variants} className='flex gap-2 items-center'>
                        <IoIosCheckboxOutline />
                        <span>Automated ticket distribution</span>
                    </motion.li>
                    <motion.li variants={variants} className='flex gap-2 items-center'>
                        <IoIosCheckboxOutline />
                        <span>Social media integration</span>
                    </motion.li>
                </ul>

                <motion.div variants={variants} className='border rounded-full w-3/4 flex justify-between items-center ps-5 pe-1 py-1 whitespace-nowrap'>
                    <input type="email" placeholder='Your Email' className='bg-transparent flex-1 outline-none' />
                    <button className='bg-blue-700 rounded-full p-4'>
                        <FaTelegramPlane />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
