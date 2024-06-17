import React from 'react'
import { GoSignOut } from "react-icons/go";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { motion } from 'framer-motion'
import { variants } from '@/variants/variants';

export default function Process() {
    return (
        <div className='container mx-auto py-[120px] overflow-visible overflow-x-visible'>
            <h4 className='text-gradient text-lg font-bold text-center'>WORKING PROCESS</h4>
            <h1 className='text-5xl font-bold mt-4 text-center'>How does this App Work?</h1>
            <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }} className="cards grid grid-cols-1 lg:grid-cols-3 relative gap-20 overflow-visible mt-12 after:content-[''] after:w-[100%] after:border-b-2 after:border-dashed after:border-slate-400 after:absolute after:h-2 after:top-8 after:-z-10">
                <motion.div variants={variants} className="card flex flex-col items-center justify-center lg:block">
                    <div className=' border w-fit p-4 rounded-full border-blue-500 border-t-white mb-6 bg-white'>
                        <GoSignOut fontSize={35} />
                    </div>
                    <h4 className='text-black font-bold mb-4 text-xl'>SignUp Free</h4>
                    <p className='text-[#666666]'>Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                </motion.div>
                <motion.div variants={variants} className="card flex flex-col items-center justify-center lg:block">
                    <div className=' border w-fit p-4 rounded-full border-blue-500 border-b-white mb-6 bg-white'>
                        <AiOutlineCloudDownload fontSize={35} />
                    </div>
                    <h4 className='text-black font-bold mb-4 text-xl'>Download App</h4>
                    <p className='text-[#666666]'>Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                </motion.div>
                <motion.div variants={variants} className="card flex flex-col items-center justify-center lg:block">
                    <div className=' border w-fit p-4 rounded-full border-blue-500 border-t-white mb-6 bg-white'>
                        <MdSecurity fontSize={35} />
                    </div>
                    <h4 className='text-black font-bold mb-4 text-xl'>Enjoy the feature</h4>
                    <p className='text-[#666666]'>Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}
