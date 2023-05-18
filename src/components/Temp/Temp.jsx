import React from 'react'
import "./Temp.css"
import CloudImg from "../../assets/1.png"
import City from '../City'

function Temp() {
    return (
        <div className='weather_temp'>
            <span> 37 C</span> 
            <img className='temp_cloud' src={CloudImg} alt="" />
            <City /> 
            <br />

        </div>
    )
}

export default Temp
