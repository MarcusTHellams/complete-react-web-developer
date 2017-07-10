import React, {Component} from 'react';
import Nav from './Nav.Component';
import Weather from './Weather.component';

const Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav></Nav>
                <h2>
                    Main Component
                </h2>
                {this.props.children}
            </div>
        );
    }
});

export default Main;