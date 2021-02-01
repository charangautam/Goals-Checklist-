import React from 'react';
import './css/Home.css';
import GoalCentreLink from './GoalCentreLink';
import FocusCentreLink from './FocusCentreLink';

const Home = () => {
    return(
        <div className='home'>
            <div className='intro'>
                <h1>Welcome to Insula</h1>
                <p>The mission of this application is to provide you with a variety of tools that works to manage, construct and ultilize your time to your liking. Time is valuable, get to it!</p>
            </div>
            <h2>Here are some of the tools available today</h2>
            <div className='flex-container container-fluid'>
                <div className='flex-child first'>
                    <GoalCentreLink />
                </div>
                <div className='flex-child second'>
                    <FocusCentreLink />
                </div>

            </div>
           
            
        </div>
    )
}

export default Home;