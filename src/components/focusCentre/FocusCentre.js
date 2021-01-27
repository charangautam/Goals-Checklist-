import React from 'react';
import FocusContextProvider from '../../contexts/FocusContext';
import Pomodoro from './Pomodoro'

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