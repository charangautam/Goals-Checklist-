import React from 'react';
import GoalContextProvider from '../../contexts/GoalContext';
import Heading from './Heading';
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import './css/goals.css';


const GoalCentre = () => {
    return(
        <div className='goal-centre'>
        <GoalContextProvider>
            <Heading />
            <GoalList />
            <GoalForm />
        </GoalContextProvider>
        </div>
        
    )
}

export default GoalCentre;