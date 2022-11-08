import React, { useState } from 'react'
import '../../styles/sectiontwo.css'


const Details = [
    { span: <span></span>, day: "Sun" },
    { span: <span></span>, day: "Mon" },
    { span: <span></span>, day: "Tue" },
    { span: <span></span>, day: "Wed" },
    { span: <span></span>, day: "Thu" },
    { span: <span></span>, day: "Fri" },
    { span: <span></span>, day: "Sat" },
]


const SectionTwo = ({ cok, duration, time, times }) => {
    const [data, setData] = useState(Details)

    return (
        <div className='sec_two'>
            <div className='sec_two_head'>
                <h1 className='two_heading '>Satisfication</h1>
                <button className='sec_two_heading_btn'>Show all</button>
            </div>
            <div className='sec_two_box'>
                <div className='two_left'>
                    <div className='two_cook'>{cok}</div>
                    <div className='two_qun'>{duration}</div>
                    <div className='time'>{time}</div>
                    <div className='time_s'>{times}</div>
                </div>
                <div className='two_right'>
                    {data.map((item) => (
                        <div className='lines'>
                            <span className='line_one'></span>
                            <span className='line_one__'>{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo