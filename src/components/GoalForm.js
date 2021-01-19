import React, { useState, useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';

const GoalForm = () => {
    const { addGoal } = useContext(GoalContext)

    const [ title, setTitle ] = useState('')
    const [ date, setDate ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addGoal(title, date);
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
                type='text'
                placeholder='Enter goal deadline date'
                onChange={ (e) => setDate(e.target.value) }
                value={date}
                required
            />
            <button type='submit'> ADD </button>
        </form>
    )
}

export default GoalForm;