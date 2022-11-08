import React, { useState } from 'react'
import '../../styles/secThree.css'
import Footer from '../../Footer/Footer'


const allData = [
    {
        image: "https://i.pinimg.com/736x/d4/3e/55/d43e55a7669809580d74d371423c6f0c.jpg",
        name: "Weight Lose"
    },
    {
        image: "https://images.ctfassets.net/0oan5gk9rgbh/65TcYikbpmIEWGOyi28wem/ce3d93cb4894fca61ad7b5fd66fc129c/Girls_ed_Zainab_child_labour_1x.jpg?w=384&h=315&fit=fill&f=faces",
        name: "Weight Lose"
    },
    {
        image: "https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/09/beautiful-girls-images-wallpapers-7.jpg?resize=520%2C641&ssl=1",
        name: "Muscle Gain"
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
            <Footer />
        </div>
    )
}

export default SectionThree