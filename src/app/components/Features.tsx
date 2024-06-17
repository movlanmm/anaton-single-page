'use client'
import Image from 'next/image';
import React from 'react'
import { CiUser, CiStar } from "react-icons/ci";
import { SlCloudDownload } from "react-icons/sl";
import { ImFilesEmpty } from "react-icons/im";
import { TbSettingsStar } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import CountUp from 'react-countup';
import { motion } from 'framer-motion'
import { variants } from '@/variants/variants';


export default function Features() {
    const countUpRef = React.useRef(null);

    return (
        <div className='container mx-auto'>
            {/* info */}
            <div className='mx-auto w-full md:w-2/3 '>
                <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center'>
                    <li className='flex flex-col gap-4'>
                        <CountUp delay={0} enableScrollSpy={true} scrollSpyOnce={true} end={360} >
                            {({ countUpRef }) => (
                                <div className='text-6xl text-black font-bold flex'>
                                    <span ref={countUpRef} />
                                    <span>M</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='flex gap-2 '>
                            <CiUser fontSize={20} className='text-blue-500' />
                            <span className='text-[#666666] '>Worldwide Users</span>
                        </p>
                    </li>
                    <hr className=' bg-slate-400 w-full h-px md:w-px md:h-[100px]' />
                    <li className='flex flex-col gap-4 items-center'>
                        <CountUp delay={0} enableScrollSpy={true} scrollSpyOnce={true} end={615}>
                            {({ countUpRef }) => (
                                <div className='text-6xl text-black font-bold flex'>
                                    <span ref={countUpRef} />
                                    <span>K</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='flex gap-2'>
                            <SlCloudDownload fontSize={20} className='text-blue-500' />
                            <span className='text-[#666666] '>Download</span>
                        </p>
                    </li>
                    <hr className=' bg-slate-400 w-full h-px md:w-px md:h-[100px]' />
                    <li className='flex flex-col gap-4'>
                        <CountUp delay={0} enableScrollSpy={true} scrollSpyOnce={true} end={100}>
                            {({ countUpRef }) => (
                                <div className='text-6xl text-black font-bold flex'>
                                    <span ref={countUpRef} />
                                    <span>%</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='flex gap-2 '>
                            <CiStar fontSize={20} className='text-blue-500' />
                            <span className='text-[#666666] '>Positive Rating</span>
                        </p>
                    </li>
                </ul>
            </div>
            {/* info end */}

            {/* bg text */}
            <div className='w-2/3 mx-auto mb-32' >
                <h1 className='bg-text text-[60px] md:text-[100px] lg:text-[160px] text-center md:text-right font-bold'>
                    Trending  App
                </h1>
            </div>
            {/* bgtext end */}

            {/* bottom */}

            <div className='mx-auto relative'>
                <Image src={'/images/feature-bg.png'} alt='Bg' width={200} height={300} className='absolute -left-24 -top-24 -z-10' />

                <motion.div variants={variants} whileInView='visible' viewport={{ once: true }} initial='hidden' className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div variants={variants} className="card py-20 px-9 rounded-3xl border bg-white">
                        <ImFilesEmpty fontSize={80} className='text-blue-400 mb-8' />
                        <h4 className='text-2xl text-black font-bold mb-2'>Fully Secured</h4>
                        <p className='text-[#666666]'>
                            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her entertaining.
                        </p>
                    </motion.div>

                    <motion.div variants={variants} className="card py-20 px-9 rounded-3xl border bg-white">
                        <TbSettingsStar fontSize={80} className='text-blue-400 mb-8' />
                        <h4 className='text-2xl text-black font-bold mb-2'>Easy to Use</h4>
                        <p className='text-[#666666]'>
                            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her entertaining.
                        </p>
                    </motion.div>
                    <motion.div variants={variants} className="card py-20 px-9 rounded-3xl border bg-white">
                        <RxUpdate fontSize={80} className='text-blue-400 mb-8' />
                        <h4 className='text-2xl text-black font-bold mb-2'>Regular Updatess</h4>
                        <p className='text-[#666666]'>
                            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her entertaining.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            {/* end bottom  */}
        </div>
    )
}
