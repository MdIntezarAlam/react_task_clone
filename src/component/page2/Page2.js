import React from 'react'
import '../../styles/page2.css'
import PageTop from './PageTop'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'


const Page2 = () => {
    return (
        <div >
            <div >
                <PageTop />
                <SectionOne />
                <SectionTwo
                    cok={"Cookies"}
                    duration={"1.603 lack"}
                    Time={"Time"}
                    times={"10:30:00"} />
                <SectionThree />
            </div>
        </div>
    )
}

export default Page2