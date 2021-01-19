import React, { createContext, useReducer, useEffect } from 'react';
import { goalReducer } from '../reducers/goalReducer'

export const GoalContext = createContext();

const GoalContextProvider = (props) => {
    const [ goals, dispatch ] = useReducer(goalReducer, [], () => {
        const localData = localStorage.getItem('goals');
        return localData ? JSON.parse(localData) : [];
    })


    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals))
    }, [goals])

    return(
        <GoalContext.Provider value={{ goals, dispatch}}>
            { props.children }
        </GoalContext.Provider>
    )
}

export default GoalContextProvider;