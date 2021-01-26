import React, { useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';

const Navbar = () => {
    const { goals } = useContext(GoalContext);

    return(
        <div className='navbar'>
            <h1>✨ Goals Checklist ✨</h1>
            <p>You currently have { goals.length } goals to conquer!</p>

        </div>
    )
}

export default Navbar;