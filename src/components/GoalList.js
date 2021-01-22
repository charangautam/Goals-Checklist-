import React, { useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';
import GoalDetails from './GoalDetails';

const GoalList = () => {
    const { goals } = useContext(GoalContext);
    goals.sort((a,b) => {
        let c = new Date(a.date);
        let d = new Date(b.date);
        return c-d;
    })

    return goals.length ? (
        <div className='goal-list'>
            <ul>
                { goals.map(goal => {
                    return( <GoalDetails goal={goal} key={goal.id}/> )
                }) }
            </ul>
        </div>
    ) : (
        <div className='empty'> No goals set. Add some! </div> 
    )
}

export default GoalList;