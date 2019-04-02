import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login'
import Admin from './pages/admin'
import './assets/less/reset.less';

export default class About extends Component {
  render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' component={Admin}/>
            </Switch>
        </BrowserRouter>
    )
  }
}
