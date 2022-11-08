import React, { useState } from 'react'
import '../../style/page_top.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const clockData = [
    { dates: "09", days: "Sun" },
    { dates: "12", days: "mon" },
    { dates: "15", days: "Tue" },
    { dates: "17", days: "Wed" },
    { dates: "15", days: "Thu" },
    { dates: "18", days: "Fri" },
    { dates: "20", days: "Sat" },
]


const PageTop = () => {
    const [clocksData, setClocksData] = useState(clockData)

    return (
        <div className='top3_container'>
            <div className='page_three_right'>
                <h1 className='top3_heading'>Monday 10, May 2022</h1>
                <NotificationsNoneIcon className='svg' />
            </div>
            <div className='top3_box'>
                {clocksData.map((item) => (
                    <div className='top3_box_one'>
                        <span className='top_date'>{item.dates}</span>
                        <span className='top_day'>{item.days}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PageTop