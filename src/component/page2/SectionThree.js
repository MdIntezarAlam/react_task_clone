import React, { useState } from 'react'
import '../../styles/secThree.css'
const allData = [
    {
        image: "https://images.ctfassets.net/0oan5gk9rgbh/65TcYikbpmIEWGOyi28wem/ce3d93cb4894fca61ad7b5fd66fc129c/Girls_ed_Zainab_child_labour_1x.jpg?w=384&h=315&fit=fill&f=faces",
        name: "Weight Lose"
    },
    {
        image: "https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        name: "Muscle Gain"
    },
    {
        image: "https://i.pinimg.com/736x/d4/3e/55/d43e55a7669809580d74d371423c6f0c.jpg",
        name: "Weight Lose"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5g7uomoAMZ1pO14mMV-IsrF0DSCBEG2XVQ&usqp=CAU",
        name: "Weight Lose"
    },
    {
        image: "https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        name: "Weight Lose"
    },
    {
        image: "https://news.berkeley.edu/wp-content/uploads/2020/03/Maryam-Karimi-01-750.jpg",
        name: "Weight Lose"
    },
]
const SectionThree = () => {
    const [data, setData] = useState(allData)
    return (
        <div className='sec3'>
            <span className='sec_three_heading'>Traning   Plan</span>
            <div className='three_box'>
                {data.map((item) => (
                    <div className='sec_thee__box'>
                        <img src={item.image} alt="img" className='thee_dimg' />
                        <span className='box_heading'>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionThree