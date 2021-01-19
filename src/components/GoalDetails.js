import React, { useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';

const GoalDetails = ({ goal }) => {
    const { removeGoal } = useContext(GoalContext);

    return(
        <li onClick ={() => removeGoal(goal.id)}>
            <div className='title'> { goal.title } </div>
            <div className='date'> { goal.date } </div>
        </li>
    )
}

export default GoalDetails;