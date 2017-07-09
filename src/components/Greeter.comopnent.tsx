import React from 'react';
import GreeterForm from './GreaterForm.component';
import GreeterMessage from './GreeterMessage.component';

const Greeter = React.createClass({
    getDefaultProps: function () {
        return {name: 'React', message: 'This is from the component'}
    },
    getInitialState: function () {
        return {name: this.props.name, message: this.props.message};
    },
    render: function () {
        const name : String = this.state.name;
        const message : String = this.state.message
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    },
    handleNewName: function (name) {
        this.setState(name);
    }
});

export default Greeter;