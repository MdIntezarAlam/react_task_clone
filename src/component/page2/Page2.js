import React from 'react'
import '../../styles/page2.css'
import Footer from '../../Footer/Footer'
import PageTop from './PageTop'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'


const Page2 = ({ cok, duration, time, ti, times }) => {
    return (
        <div className='page2_container'>
            <div className='page2_box'>
                <PageTop />
                <SectionOne />
                <SectionTwo cok={"Cookies"} duration={"1.603 lack"} Time={"Time"} times={"10:30:00"} />
                <SectionThree />
            </div>
            <Footer />
        </div>
    )
}

export default Page2