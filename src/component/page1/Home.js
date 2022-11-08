import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home.css'
const Home = () => {
    return (
        <div className='home_container'>
            <h1 className='home'>A Healyhy mind in a Healthy Body</h1>
            <div className='btn'>
                <Link to="/">
                    <button className='home_btn_1'>Skip</button>
                </Link>
                <Link to="/page2">
                    <button className='home_btn_2'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Home