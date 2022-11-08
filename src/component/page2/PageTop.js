import React from 'react'
import '../../styles/pagetop.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const PageTop = () => {
    return (
        <div className='top'>
            <div className='top_box'>
                <div className='left'>
                    <img className='left_img' src="https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg" alt="top img" />
                    <div className='top_heading'>
                        <h1>Welcome</h1>
                        <h2>Intezar Alam</h2>
                    </div>
                </div>
                <div className='right'>
                    <NotificationsNoneIcon className='svg' />
                </div>
            </div>
        </div>
    )
}

export default PageTop