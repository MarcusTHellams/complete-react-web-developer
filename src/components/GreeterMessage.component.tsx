import React from 'react';

const GreeterMessage = React.createClass({
    render: function () {
        const name = this.props.name;
        const message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

export default GreeterMessage;