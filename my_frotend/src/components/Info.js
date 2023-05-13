import React from 'react'
import background from '../images/bg_image.jpg'
import {Link} from 'react-router-dom'
import {useGlobalState, setGlobalState} from './Globalstates'

import {useNavigate} from 'react-router-dom'

function Info() {

const nav = useNavigate()
    const [state] = useGlobalState("infostate")
    if(state){
    return (
            <div className="home" style={{ width: '100%',
            height: '800px', backgroundImage: `url(${background})` , backgroundSize: 'cover', objectfit:'cover'}}>
                <div style={{display:'flex', justifyContent: "center"}}>
                    <h1 style={{color:'white' , marginTop:'100px'}}>Welcome to Dawood Properties!</h1><br></br>
                </div>
                <div style={{display:'flex', justifyContent: "center", marginTop:'60px'}}>
                    <p style={{color:'white'}}><b>Have an account!</b><Link to="/login"> Go to LogIn</Link></p>
                </div>
                <div style={{display:'flex', justifyContent: "center", marginTop:'10px'}}>
                <p style={{color:'white'}}><b>Donot have an account!</b><Link to="/signup"> Create One</Link></p>
            </div>
            </div>
    )}
}

export default Info