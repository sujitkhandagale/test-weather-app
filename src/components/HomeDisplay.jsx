import React from 'react'
import "./HomeDisplay.css"
import Temp from './Temp/Temp';
import SearchCity from './SearchCity';
import Date from './date/Date';

function HomeDisplay() {
    return (
     <>
     <Date />
        <div className='postion_center'>
            <Temp />
            <SearchCity />
        </div>
     </>
    )
}


export default HomeDisplay
