import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { variants } from '@/variants/variants';

export default function Blog() {
    return (
        <div className='container mx-auto py-[120px] px-4 sm:px-0 overflow-visible overflow-x-visible'>
            <h4 className='text-lg font-bold text-center'>NEWS & EVENTS</h4>
            <h1 className='text-5xl font-bold mt-4 text-center'>Check out our blog posts</h1>
            <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }} className="cards grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ">
                <motion.div variants={variants} className="card space-y-7">
                    <Image src={'/images/blog-img1.jpeg'} alt='blog' width={300} height={300} className='w-full' />
                    <h4 className='text-[#666666] font-bold'>Admin January 20, 2021</h4>
                    <p className='text-black font-bold text-3xl'>Miscovery incommode earnestly commanded</p>
                    <Link href='#' className='mt-5 flex items-center gap-4'>Continue Reading <FaArrowRight /></Link>
                </motion.div>
                <motion.div variants={variants} className="card space-y-7">
                    <Image src={'/images/blog-2.jpeg'} alt='blog' width={300} height={300} className='w-full' />
                    <h4 className='text-[#666666] font-bold'>Admin January 20, 2021</h4>
                    <p className='text-black font-bold text-3xl'>Expression acceptance imprudence particular</p>
                    <Link href='#' className='mt-5 flex items-center gap-4'>Continue Reading <FaArrowRight /></Link>
                </motion.div>
                <motion.div variants={variants} className="card space-y-7">
                    <Image src={'/images/blog-3.jpeg'} alt='blog' width={300} height={300} className='w-full' />
                    <h4 className='text-[#666666] font-bold'>Admin January 20, 2021</h4>
                    <p className='text-black font-bold text-3xl'>Considered imprudence of technical friendship.</p>
                    <Link href='#' className='mt-5 flex items-center gap-4'>Continue Reading <FaArrowRight /></Link>
                </motion.div>

            </motion.div>
        </div>
    )
}
