'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";


const variants = {
    hidden: {
        x: '-100%',
        clipPath: 'circle(50% at 50% 50%)'
    },
    visible: {
        x: 0,
        clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)',
        transition: {
            type: 'spring',
            staggerChildren: 0.1,
            delayChildren: 0.1,
            stiffness: 120,
        }
    }
    // exit: {
    //     x: '-100%',
    //     transition: {
    //         type: 'spring',
    //         when: 'afterChildren',
    //         staggerChildren: 0.05,
    //         staggerDirection: -1,
    //         delayChildren: 0.05,
    //         stiffness: 120
    //     }
    // }
}


export default function MobileMenu({ open, setOpen }: { open: boolean, setOpen: (b: boolean) => void }) {

    const asideRef = useRef<HTMLDivElement>(null)

    const closeLoginForm = (e: any) => {
        if (open && !asideRef.current?.contains(e.target as Node)) {
            setOpen(false)
        }
    }

    if (open) {
        window.addEventListener('mousedown', closeLoginForm)
    }


    return (
        <motion.div variants={variants} ref={asideRef} animate={open ? 'visible' : 'hidden'} initial='hidden' className={`fixed left-0 w-[70%] sm:w-1/2 p-6 overflow-scroll lg:hidden top-0 h-lvh z-20 bg-white`}>
            <div className='flex justify-between'>
                <div className=''>
                    <Image src='/images/logo-blue.png' alt='Logo' width={130} height={60} />
                </div>
                <button onClick={() => setOpen(false)}>
                    <IoIosCloseCircleOutline fontSize={40} />
                </button>
            </div>

            <div className="links mt-10 font-bold text-black">
                <ul>
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#banner'} onClick={() => setOpen(false)}>Home</Link>
                    </motion.li>
                    <hr />
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#feature'} onClick={() => setOpen(false)}>Features</Link>
                    </motion.li>
                    <hr />
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#trial'} onClick={() => setOpen(false)}>Trial</Link>
                    </motion.li>
                    <hr />
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#process'} onClick={() => setOpen(false)}>Process</Link>
                    </motion.li>
                    <hr />
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#pricing'} onClick={() => setOpen(false)}>Pricing</Link>
                    </motion.li>
                    <hr />
                    <motion.li variants={variants} className='py-3'>
                        <Link href={'/#blog'} onClick={() => setOpen(false)}>Blog</Link>
                    </motion.li>
                    <hr />
                </ul>
            </div>

        </motion.div>
    )
}