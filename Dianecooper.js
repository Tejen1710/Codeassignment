import React from 'react'
import diana from './diana.jpg'
import text from './text.png'
import './Dianecooper.css'
const Dianecooper = () => {
    return (
        <>
            <div className='col'>
                <img style={{ height: '3.5cm', width: '3.5cm', borderRadius: "50%", boxShadow: "5px 6px 6px #888888", display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={diana} ></img>
                <h2 style={{ textAlign: "center" }}>Diane cooper</h2>
                <p style={{fontSize: 'small',color: 'gray', marginTop: '5px',textAlign: 'center'}}>diana.cooper@example.com</p>
                <div style={{  float: 'left', height: '2.5cm', width: '3.25cm' }}>
                    <h2 style={{ textAlign: "center" }}>15</h2>
                    <p style={{}}>past</p>
                </div>
                <div style={{float: 'right', height: '2.5cm', width: '3.25cm' }}>
                    <h2 style={{ textAlign: "center" }}>02</h2>
                    <p>Upcoming</p>
                </div>
                <div>
                        <p style={{ fontSize: '14px', color: 'black', marginTop:'3.5cm',marginBottom:'1cm',border:'1px solid black',borderRadius:'5px',padding:'8px'}}><b>send message</b></p>

                </div>

                <div>
                    <p style={{ fontSize:'18px', textAlign:'left',color:'black', marginTop:'0.5cm', marginBottom:'1cm'}}>Files/Documents</p>
                </div>
                <div>
                <p style={{background: 'rgb(235, 235, 235)',fontSize: '14px', color: 'black', padding:'8px', textAlign:'left',margin:'0.6cm'}}><img src={text} style={{height:'17px',width:'17px'}}></img>Check Up Result.pdf</p>
                <p style={{background: 'rgb(235, 235, 235)',fontSize: '14px', color: 'black', padding:'8px', textAlign:'left',margin:'0.6cm'}}><img src={text} style={{height:'17px',width:'17px'}}></img>Check Up Result.pdf</p>
                <p style={{background: 'rgb(235, 235, 235)',fontSize: '14px', color: 'black', padding:'8px', textAlign:'left',margin:'0.6cm'}}><img src={text} style={{height:'17px',width:'17px'}}></img>Check Up Result.pdf</p>
                <p style={{background: 'rgb(235, 235, 235)',fontSize: '14px', color: 'black', padding:'8px', textAlign:'left',margin:'0.6cm'}}><img src={text} style={{height:'17px',width:'17px'}}></img>Check Up Result.pdf</p>
                </div>
            </div>
            
                    
        
        </>
    )
}

export default Dianecooper;