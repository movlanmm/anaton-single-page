'use client'

import Header from './components/Header'
import Banner from './components/Banner'
import Features from './components/Features'
import Trial from './components/Trial'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Footer from './components/Footer'


export default function Home() {

    return (
        <>
            <Header />
            <section id='banner' className='h-fit pt-32 lg:pt-52 bg-no-repeat bg-cover border-b px-4 sm:px-0' style={{ backgroundImage: 'url(/images/banner-10.png)', backgroundPosition: 'center' }}>
                <Banner />
            </section>
            <section id='feature' className='pt-32 pb-24 px-4 sm:px-0'>
                <Features />
            </section>
            <section id='trial' className='bg-no-repeat bg-blue-950 py-[120px] px-4 sm:px-0' style={{ backgroundImage: 'url(/images/trial-bg.png)', backgroundPosition: 'left' }} >
                <Trial />
            </section>
            <section id='process' className='px-4 sm:px-0'>
                <Process />
            </section>
            <section id='pricing' className=' bg-no-repeat bg-cover bg-[#efefff] px-4 sm:px-0' style={{ backgroundImage: 'url(/images/pricing-bg.png)', backgroundPosition: 'bottom-left' }}>
                <Pricing />
            </section>
            <section id='blog'>
                <Blog />
            </section>
            <Footer />
        </>
    );
}
