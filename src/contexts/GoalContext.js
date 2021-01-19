import React, { createContext, useReducer } from 'react';
import { goalReducer } from '../reducers/goalReducer'

export const GoalContext = createContext();

const GoalContextProvider = (props) => {
    const [ goals, dispatch ] = useReducer(goalReducer, [])

    return(
        <GoalContext.Provider value={{ goals, dispatch}}>
            { props.children }
        </GoalContext.Provider>
    )
}

export default GoalContextProvider;