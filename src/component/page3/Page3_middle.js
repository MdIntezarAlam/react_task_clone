import React, { useState } from 'react'
import '../../style/page3_middle.css'


const listData = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKVX8G8ByXcLRdMjMDnJlWJroADit0E78mw&usqp=CAU",
        name: "Crush",
        duration: "10 setc abc crush",
        times: "06.00 AM",
    },
    {
        image: "https://5.imimg.com/data5/KF/PB/MY-66262168/cycle-500x500.jpg",
        name: "Cycling",
        duration: "10 setc abc crush",
        times: "08.00 AM",
    },
    {
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Spinach-Chicken-Dinner_EXPS_FT21_40982_F_0713_1-13.jpg",
        name: "Brakfast",
        duration: "10 setc abc crush",
        times: "01.00 AM",
    },
    {
        image: "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        name: "Lunch",
        duration: "10 setc abc crush",
        times: "06.00 AM",
    },
    {
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/vegetarian-indian-dinner-recipes.jpg",
        name: "Diiner",
        duration: "10 setc abc crush",
        times: "06.00 AM",
    },
]

const Page3_middle = () => {
    const [list, setList] = useState(listData)
    console.log(list)

    return (
        <div className='page_three_middle_container'>
            <div className='page_three_middle_heading'>
                <h1 className='activity'>Activity</h1>
                <button className='acti_btn'>Show All</button>
            </div>

            {list.map((item, i) => (
                <>
                    <div className='middle_box' key={i}>
                        <div className='midlle_left'>
                            <img src={item.image} alt="img" className='middle_img' />
                            <div className='crush'>
                                <span className='crush_title'>{item.name}</span>
                                <span className='crush_span'>{item.duration}</span>
                            </div>
                        </div>
                        <div className='midlle_right'>{item.times}</div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Page3_middle