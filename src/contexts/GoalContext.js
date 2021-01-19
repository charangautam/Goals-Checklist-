import React, { createContext, useState } from 'react';


export const GoalContext = createContext();

const GoalContextProvider = (props) => {
    const [ goals, setGoals ] = useState([
        { title: 'Proper full stack developer', date: 'March 2021', id:1 },
        { title: '3rd major project completed', date: 'May 2021', id:2 }
    ])

    const addGoal = (title, date) => {
        setGoals([...goals, { title, date, id: (Math.random()) }]);
    }

    const removeGoal = (id) => {
        setGoals( goals.filter(goal => goal.id !== id) )
    }

    return(
        <GoalContext.Provider value={{ goals, addGoal, removeGoal }}>
            { props.children }
        </GoalContext.Provider>
    )
}

export default GoalContextProvider;