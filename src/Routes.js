import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GoalsCentre from './components/goalsetting/GoalsCentre';


function Routes() { 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={GoalsCentre}/>
            </Switch>
        </BrowserRouter>
    )
} 

export default Routes;