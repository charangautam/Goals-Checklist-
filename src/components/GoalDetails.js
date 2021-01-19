import React, { useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';

const GoalDetails = ({ goal }) => {
    const { dispatch } = useContext(GoalContext);

    return(
        <li onClick ={() => dispatch({ type: 'REMOVE_GOAL', id: goal.id })}>
            <div className='title'> { goal.title } </div>
            <div className='date'> { goal.date } </div>
        </li>
    )
}

export default GoalDetails;