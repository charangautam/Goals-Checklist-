import React, { useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';
import GoalDetails from './GoalDetails';

const GoalList = () => {
    const { goals } = useContext(GoalContext);

    return goals.length ? (
        <div className='goal-list'>
            <ul>
                { goals.map(goal => {
                    return( <GoalDetails goal={goal} key={goal.id}/> )
                }) }
            </ul>
        </div>
    ) : (
        <div className='empty'> No more goals left. Set some more! </div> 
    )
}

export default GoalList;