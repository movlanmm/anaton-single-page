import React from 'react'
import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";
import { motion } from 'framer-motion'
import { variants } from '@/variants/variants';


export default function Pricing() {
    return (
        <div className='container mx-auto py-[120px] overflow-visible overflow-x-visible'>
            <h4 className='text-gradient text-lg font-bold text-center'>BEST PRICING</h4>
            <h1 className='text-5xl font-bold mt-4 text-center'>No hidden & extra charges! <br />
                choose your plan.</h1>
            <motion.div variants={variants} whileInView='visible' viewport={{ once: true }} initial='hidden' className="cards grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0  mt-16 ">
                <motion.div variants={variants} className="card lg:border-r-2 h-full">
                    <div className="card-header bg-[#10393b] py-14 px-8 text-white lg:rounded-tl-xl">
                        <p className='text-xl font-bold'>Basic Plan</p>
                        <span>Low cost & affordable services to get you started very soon.</span>
                    </div>
                    <div className="card-content bg-white  py-14 px-8 lg:rounded-bl-xl">
                        <h4 className='text-5xl font-bold mb-4'>Free</h4>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Increase traffic 130%
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Backlink analysis
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCloseCircleLine />
                                10 Free Optimization
                            </li>
                        </ul>
                        <button className='border py-3 px-10 rounded-full mt-6 hover:bg-[#10393b] hover:text-white ease-in-out duration-300'>
                            Purchase Plan
                        </button>
                    </div>
                </motion.div>
                <motion.div variants={variants} className="card">
                    <div className="card-header bg-[#10393b] py-14 px-8 text-white">
                        <p className='text-xl font-bold'>Premium Plan</p>
                        <span>Increased processing power with multiple sites, storage.</span>
                    </div>
                    <div className="card-content bg-white  py-14 px-8">
                        <h4 className='text-5xl font-bold mb-4'>
                            <sup>$</sup>
                            29
                            <sub className='font-thin text-base'>/ Monthly</sub>
                        </h4>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                1,300 Keywords
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                SEO Optimized
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCloseCircleLine />
                                Live Support
                            </li>
                        </ul>
                        <button className='border py-3 px-10 rounded-full mt-6 hover:bg-[#10393b] hover:text-white ease-in-out duration-300'>
                            Purchase Plan
                        </button>
                    </div>
                </motion.div>
                <motion.div variants={variants} className="card">
                    <div className="card-header lg:rounded-t-xl border-2 border-blue-700 bg-blue-700 py-14 lg:py-20 lg:-mt-8 px-8 text-white ">
                        <p className='text-xl font-bold'>Advanced Plan</p>
                        <span>Target is processing power with multiple sites, storage.</span>
                    </div>
                    <div className="card-content border-2 border-blue-700 bg-white lg:rounded-b-xl  py-14 px-8">
                        <h4 className='text-5xl font-bold mb-4'>
                            <sup>$</sup>
                            58
                            <sub className='font-thin text-base'>/ Monthly</sub>
                        </h4>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Increase traffic 130%
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Backlink analysis
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCloseCircleLine />
                                10 Free Optimization
                            </li>
                        </ul>
                        <button className='border py-3 px-10 rounded-full mt-6 bg-blue-700 text-white hover:opacity-85'>
                            Purchase Plan
                        </button>
                    </div>
                </motion.div>
                <motion.div variants={variants} className="card">
                    <div className="card-header bg-[#10393b] py-14 px-8 text-white lg:rounded-tr-xl">
                        <p className='text-xl font-bold'>Business Plan</p>
                        <span>Mentionling processing power with multiple sites, storage.</span>
                    </div>
                    <div className="card-content bg-white  py-14 px-8 lg:rounded-br-xl">
                        <h4 className='text-5xl font-bold mb-4'>
                            <sup>$</sup>
                            89
                            <sub className='font-thin text-base'>/ Monthly</sub>
                        </h4>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Increase traffic 130%
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCheckboxCircleLine />
                                Increase traffic 130%
                            </li>
                            <li className='flex items-center gap-2'>
                                <RiCloseCircleLine />
                                10 Free Optimization
                            </li>
                        </ul>
                        <button className="border py-3 px-10 rounded-full mt-6 hover:bg-[#10393b] hover:text-white ease-in-out duration-300 ">
                            Purchase Plan
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
