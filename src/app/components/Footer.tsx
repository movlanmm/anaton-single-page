import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


export default function Footer() {
    return (
        <footer>
            <div className='flex mx-auto flex-col lg:flex-row'>
                <div className="left px-10 py-10 text-center lg:text-left flex flex-col justify-center items-center lg:block lg:px-16 lg:py-24 bg-[#efefff]  space-y-7 w-full lg:w-2/5">
                    <Image src={'/images/logo-blue.png'} alt='Logo' width={200} height={200} />
                    <p className='text-[#666666]'>Join our subscribers list to get the instant
                        latest news and special offers.</p>
                    <div className='flex gap-3 flex-wrap'>
                        <input type="email" placeholder='Your Email' className='px-5 py-4 shadow-md rounded-lg outline-none' />
                        <button className='px-5 py-4 bg-blue-600 rounded-lg text-white '>Subscribe</button>
                    </div>
                    <p className='text-sm text-[#666666]'>Anaton WordPres Theme By <Link href='#' className='text-blue-600 font-bold'>WordPressRiver</Link></p>
                    <div className="socials flex gap-4">
                        <Link href='#' className='p-3 bg-green-950 text-white rounded-full hover:text-blue-500'><FaFacebookF /></Link>
                        <Link href='#' className='p-3 bg-green-950 text-white rounded-full hover:text-blue-500'> <FaLinkedinIn /> </Link>
                        <Link href='#' className='p-3 bg-green-950 text-white rounded-full hover:text-blue-500'> <FaTwitter /> </Link>

                    </div>
                </div>
                <div className="right w-full lg:w-3/5 bg-[#10393b] ps-16 py-24 pe-6">
                    <div className="links flex flex-col lg:flex-row gap-10 lg:gap-0  lg:justify-between text-white">
                        <div className="link-row">
                            <h4 className='font-bold text-xl mb-8'>Company</h4>
                            <ul className='text-[#d2d2d4] font-extralight text-sm space-y-6'>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                            </ul>
                        </div>
                        <div className="link-row">
                            <h4 className='font-bold text-xl mb-8'>Community</h4>
                            <ul className='text-[#d2d2d4] font-extralight text-sm space-y-6'>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                                <li>Company Profile</li>
                            </ul>
                        </div>
                        <div className="link-row  md:w-2/5">
                            <h4 className='font-bold text-xl mb-8'>Contact Info</h4>
                            <ul className='text-[#d2d2d4] font-extralight text-sm space-y-6 '>
                                <li className='flex gap-4'>
                                    <div className='bg-white/30 rounded-full text-white p-3 h-fit'>
                                        <IoHomeOutline fontSize={20} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-base font-bold text-white'>Address:</h3>
                                        <p className='text-base font-semibold text-[#dedede]'>5919 Trussville Crossings Pkwy, Birmingham</p>
                                    </div>
                                </li>
                                <li className='flex gap-4'>
                                    <div className='bg-white/30 rounded-full text-white p-3 h-fit'>
                                        <MdOutlineEmail fontSize={20} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-base font-bold text-white'>Email:</h3>
                                        <p className='text-base font-semibold text-[#dedede]'>support@gmail.com</p>
                                    </div>
                                </li>
                                <li className='flex gap-4'>
                                    <div className='bg-white/30 rounded-full text-white p-3 h-fit'>
                                        <FaPhone fontSize={20} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-base font-bold text-white'>Phone:</h3>
                                        <p className='text-base font-semibold text-[#dedede]'>+456 123 4455</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
