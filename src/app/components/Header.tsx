'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu'

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const [scroll, setscroll] = useState<number>(0)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setscroll(latest)
    })

    const variants = {
        hidden: {
            opacity: 0,
            y: '-100%'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    useEffect(() => {
        open ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    }, [open])


    return (
        <>
            <motion.header variants={variants} animate='visible' initial='hidden' className={`lg:fixed w-full z-10  ${scroll > 150 && 'lg:bg-white transition-all shadow-md duration-500'}`}>
                <div className='container mx-auto px-5 sm:px-0 flex  sm:justify-between items-center relative bg-transparent h-20 py-14'>
                    <div className="modile-menu lg:hidden" onClick={() => { setOpen(true) }}>
                        <RxHamburgerMenu fontSize={30} />
                    </div>
                    <div className='lg:hidden w-full sm:w-fit flex justify-center'>
                        <Image src='/images/logo-blue.png' alt='Logo' width={150} height={60} className='w-1/2 sm:w-full h-16 object-scale-down' />
                    </div>
                    <div className='hidden lg:block'>
                        {scroll > 150 ? (
                            <Image src='/images/logo-blue.png' alt='Logo' width={160} height={60} className='w-full h-16' />
                        ) : (<Image src='/images/logo-light.png' alt='Logo' width={160} height={60} className='w-full h-16' />

                        )}

                    </div>
                    <nav className='hidden lg:block'>
                        <ul className={`text-sm lg:text-base font-medium flex justify-between items-center gap-5 ${scroll > 150 ? 'text-black' : 'text-white'}`}>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#banner'}>Home</Link>
                            </motion.li>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#feature'}>Feature</Link>
                            </motion.li>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#trial'}>Trial</Link>
                            </motion.li>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#process'}>Process</Link>
                            </motion.li>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#pricing'}>Pricing</Link>
                            </motion.li>
                            <motion.li variants={variants} className='hover:text-orange-500'>
                                <Link href={'/#blog'}>Blog</Link>
                            </motion.li>
                        </ul>
                    </nav>
                    <button className={`btn border hidden sm:block py-3 px-10 rounded-lg text-base font-medium  text-white ${scroll > 150 ? 'lg:bg-blue-700' : 'lg:bg-transparent'}`}>
                        Get Consultant
                    </button>
                </div>
            </motion.header>
            <MobileMenu open={open} setOpen={setOpen} />
            <div className={`fixed top-0 lg:hidden left-0 w-screen h-screen bg-slate-300/25 z-10 ${open ? 'block' : 'hidden'}`} ></div>
        </>

    )
}
