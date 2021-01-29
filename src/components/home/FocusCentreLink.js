import React from 'react';
import { Link } from 'react-router-dom';

const FocusCentreLink = () => {
    return(
        <div>
            <Link to='/focusCentre' style={{ textDecoration: 'none' }}>
                <div className='focus-centre-link'>
                    <h3>Focus Centre</h3>
                    <h2>📚</h2>
                </div>
            </Link>
        </div>
    )
}

export default FocusCentreLink;
