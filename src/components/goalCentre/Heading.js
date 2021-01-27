import React, { useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';

const Heading = () => {
    const { goals } = useContext(GoalContext);

    return(
        <div className='heading'>
            <h1>✨ Goals Checklist ✨</h1>
            <p>You currently have { goals.length } goals to conquer!</p>

        </div>
    )
}

export default Heading;