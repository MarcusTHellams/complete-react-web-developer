import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/Main.component';
import {Route, Router, IndexRoute, browserHistory, hashHistory} from 'react-router';
import Weather from './components/Weather.component';
import About from './components/About.component';
import Example from './components/Examples.component';

ReactDom.render(
    <Router history={browserHistory}>
    <div>
        <Route path='/' component={Main}>
            <Route path="about" component={About}/>
            <Route path="example" component={Example}/>
            <IndexRoute component={Weather}></IndexRoute>
        </Route>
    </div>

</Router>, document.getElementById('app'), null);