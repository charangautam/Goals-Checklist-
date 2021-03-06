import React from 'react';
import FocusContextProvider from '../../contexts/FocusContext';
import Pomodoro from './Pomodoro'
import './css/Focus.css'

const FocusCentre = () => {
    return(
        <div className='focus-centre'>
            <FocusContextProvider>
                <Pomodoro />
            </FocusContextProvider>
        </div>
        
    )
   
}

export default FocusCentre;