import React, { useState } from 'react'
import '../../styles/sectionone.css'

const data =
    [
        {
            heading: "heading ___one",
            image: "https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"
        },
        {
            heading: "heading ___one",
            image: "https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"
        },
        {
            heading: "heading ___one",
            image: "https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"
        },
    ]


const SectionOne = () => {

    const [secdata, setSecData] = useState(data)
    console.log(secdata)

    return (
        <div className='sec_one'>
            <div className='sec_head'>
                <h1 className='sec_heading'>Workout</h1>
                <button className='sec_heading_btn'>Show all</button>
            </div>
            <div className='sec_one_box'>
                {secdata.map((item) => (
                    <div className='box'>
                        <span className='span'>heading {item.heading}</span>
                        <div className='sec_img'>
                            <img src={item.image} alt="" className='sec_imgs' />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default SectionOne