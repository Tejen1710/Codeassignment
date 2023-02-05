import React from 'react'
import Monitor from './monitor.png'
import plus_icon from './plus_icon.png'
import avatar from './avatar.png'
import folder from './folder.png'
import upload from './upload.png'
import report from './report.png'
import setting from './settings.png'
import logout from './logout.png'
import './Nav.css'

const Nav=()=>
{
    
    return(
        <table>
            <tr className='Box'>
                <div  style={{backgroundColor:"rgb(6, 187, 6)", marginTop:'2px',marginBottom:'2px'}}>
                    <img src={Monitor} alt='M'></img>
                    <h6>___</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={plus_icon} alt='M'></img>
                    <h6>New</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={avatar} alt='M'></img>
                    <h6>Patient</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={folder} alt='M'></img>
                    <h6>Folder</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={upload} alt='M'></img>
                    <h6>upload</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={report} alt='M'></img>
                    <h6>report</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={setting} alt='M'></img>
                    <h6>setting</h6>
                </div>
            </tr>
            <tr className='Box'>
                <div >
                    <img src={logout} alt='M'></img>
                    <h6>logout</h6>
                </div>
            </tr>
        </table>
    )

}

export default Nav;