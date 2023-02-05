import React from 'react'
import './Info.css'
const Info=()=>{
    return(
        <>
        <div className='Big'>
            <div className='small'>
                <h4>Gender</h4>
                <h3>Female</h3>
            </div>
            <div className='small'>
                <h4>Birth Date</h4>
                <h3>Feb,24th 1997</h3>
            </div>
            <div className='small'>
                <h4>Phone number</h4>
                <h3>(239) 555-0108</h3>
            </div>
            <div className='small'>
                <h4>Registered Date</h4>
                <h3>Feb 24th, 1997</h3>
            </div>
            <div className='small'>
                <h4>Street Address</h4>
                <h3>JL.DiponegoroNo.21</h3>
            </div>
            <div className='small'>
                <h4>City</h4>
                <h3>Cilacap</h3>
            </div>
            <div className='small'>
                <h4>Zip Code</h4>
                <h3>655849</h3>
            </div>
            <div className='small'>
                <h4>Member Status</h4>
                <h3>Active Member</h3>
            </div>

            <div style={{display:'inline-block' ,marginTop:'2cm', background:'rgb(179, 179, 179)',borderRadius:'10px'}}>
              <div className='blocks' style={{display:'inline-block' , marginRight:'2cm',  margin:'5px', marginRight:'20px',marginLeft:'20px', borderRadius:'10px'}}>  <p style={{color:'rgb(85, 85, 85)',display:'inline-block', paddingLeft:'0.5cm',paddingRight:'0.5cm',textAlign:'center'}}>Upcoming Events</p></div>              
              <div className='blocks' style={{display:'inline-block' , marginRight:'2cm',  margin:'5px', marginRight:'20px',marginLeft:'20px', borderRadius:'10px'}}>  <p style={{color:'rgb(85, 85, 85)',display:'inline-block', paddingLeft:'0.5cm',paddingRight:'0.5cm',textAlign:'center'}}>Past Appointments</p></div>
              <div className='blocks' style={{display:'inline-block' , marginRight:'2cm',  margin:'5px', marginRight:'20px',marginLeft:'20px', borderRadius:'10px'}}>  <p style={{color:'rgb(85, 85, 85)',display:'inline-block', paddingLeft:'0.5cm',paddingRight:'0.5cm',textAlign:'center'}}>Medical Records</p></div>            
            </div>
            
        </div>
        </>
    )
}

export default Info