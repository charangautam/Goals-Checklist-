import React from 'react';

const Pomodoro = () => {

    return(
        <div className='pomodoro'> 
            <h1>Pomodoro Technique</h1>
            <p>The Pomodoro Technique is a time management system that encourages people to work with the time they have—rather than against it. Using this method, you break your workday into small chunks separated by smaller breaks. These intervals are referred to as pomodoros. After about four pomodoros, you take a longer break before starting the cycle again.</p>
            <hr className='yerr' />
            <h2>Start being productive using this ancient & proven technique!</h2>
            <ul>
                <li>Decide on the task you want done.</li>
                <li>Set the pomodoro timer below (traditionally 25 minutes).</li>
                <li>Work on the task.</li>
                <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
                <li>If you have fewer than four checkmarks, take a short break (5 minutes) and then return to step 2; otherwise continue to step 6.</li>
                <li>After four pomodoros, take a longer break (20–30 minutes), reset your checkmark count to zero, then go back to step 1.</li>
            </ul>
        </div>
    )
}

export default Pomodoro;