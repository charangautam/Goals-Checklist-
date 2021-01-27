import React, { useState, useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';


const GoalForm = () => {
    const { dispatch } = useContext(GoalContext)

    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_GOAL', title, date });
        setTitle('');
        setDate('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Enter your goal'
                onChange={ (e) => setTitle(e.target.value) }
                value={title}
                required
            />
            <input 
                type='date'
                placeholder='Enter date deadline:'
                onChange={ (e) => setDate(e.target.value) }
                value={date}
                required
            />
            <button type='submit'> ADD </button>
           
        </form>
    )
}

export default GoalForm;