import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './components/Greeter.comopnent';

const middleName = 'Timothy';

ReactDom.render(
    <Greeter name={middleName} message="This is not from the component dummy"/>, document.getElementById('app'), null);
