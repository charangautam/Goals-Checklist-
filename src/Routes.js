import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GoalCentre from './components/goalCentre/GoalCentre';
import FocusCentre from './components/focusCentre/FocusCentre';
import Home from './components/home/Home';


function Routes() { 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/goalCentre' component={GoalCentre}/>
                <Route exact path='/focusCentre' component={FocusCentre}/> 
            </Switch>
        </BrowserRouter>
    )
} 

export default Routes;