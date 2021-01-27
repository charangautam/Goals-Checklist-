import React from 'react';
import GoalContextProvider from '../../contexts/GoalContext';
import Navbar from './Navbar';
import GoalList from './GoalList';
import GoalForm from './GoalForm';


const GoalsCentre = () => {
    return(
        <GoalContextProvider>
            <Navbar />
            <GoalList />
            <GoalForm />
        </GoalContextProvider>
    )
}

export default GoalsCentre;