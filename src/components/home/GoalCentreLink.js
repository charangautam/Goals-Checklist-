import React from 'react';
import { Link } from 'react-router-dom';

const GoalCentreLink = () => {
    return(
        <div>
            <Link to='/goalCentre' style={{ textDecoration: 'none' }} >
                <div className='goal-centre-link'>
                    <h3><strong>Goal Centre</strong></h3> 
                    <h2>🎯</h2>
                </div>
            </Link>
        </div>
    )
}

export default GoalCentreLink;
