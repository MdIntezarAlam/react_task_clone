import React from 'react'
import '../styles/footer.css'
import AppsIcon from '@material-ui/icons/Apps';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_box'>
                <div>
                    <AppsIcon />
                </div>
                <div>
                    <SyncAltIcon />
                </div>
                <div>
                    <Link to="/page3">
                        <TimerOffIcon />
                    </Link>
                </div>
                <div>
                    <PersonOutlineIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer