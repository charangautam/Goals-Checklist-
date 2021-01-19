import React, { useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';

const Navbar = () => {
    const { goals } = useContext(GoalContext);

    return(
        <div className='navbar'>
            <h1> Goals List</h1>
            <p>You currently have { goals.length } goals to conquer, get em done!</p>

        </div>
    )
}

export default Navbar;