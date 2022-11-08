import React from 'react'
import '../Home/home.css'
import Page1 from '../component/page1/Page1'
import Page2 from '../component/page2/Page2'
import Page3 from '../component/page3/Page3'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_box'>
                <div className='home_page_one'>
                    <Page1 />
                </div>
                <div className='home_page_two'>
                    <Page2 />
                </div>
                <div className='home_page_three'>
                    <Page3 />
                </div>
            </div>
        </div>
    )
}

export default Home