import React from 'react';
import ReactDom from 'react-dom';

const Greeter = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello React!!</h1>
                <p>This is from the component</p>
            </div>

        );
    }
});

ReactDom.render(
    <Greeter/>, document.getElementById('app'), null);
