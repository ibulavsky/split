import React from "react";

import { Switch, Route } from 'react-router-dom'
import {Events} from './events/Events';
import {Home} from './home/Home';
import {Result} from './result/Result';
import {Users} from './users/Users';

// The Main component renders one of the four provided Routes (provided that one matches).
export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={Users}/>
            <Route path='/events' component={Events}/>
            <Route path='/result' component={Result}/>
        </Switch>
    </main>
)