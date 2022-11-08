import React from 'react'
import '../../style/page3.css'
import Page3_middle from './Page3_middle'
import PageTop from './PageTop'
import Footer from '../../Footer/Footer'
const Page3 = () => {
    return (
        <div className='page3_container'>
            <div className='page3_box'>
                <PageTop />
                <Page3_middle />
            </div>
            <Footer />
        </div>
    )
}

export default Page3