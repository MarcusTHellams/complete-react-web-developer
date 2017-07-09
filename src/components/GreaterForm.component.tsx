import React from 'react';

const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        const name = this.refs.name;
        const val = name.value;
        const message = this.refs.message;
        const messageVal = message.value;
        const updates = {};
        if (val.length > 0) {
            name.value = '';
            updates['name'] = val;
        }

        if (messageVal.length > 0) {
            message.value = '';
            updates['message'] = messageVal;
        }

        this
            .props
            .onNewName(updates);

    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input placeholder="Enter a name" type="text" name="name" id="name" ref="name"/>
                    <br/>
                    <br/>

                    <textarea
                        name="message"
                        id="mesage"
                        cols="30"
                        rows="10"
                        ref="message"
                        placeholder="Enter a Message"></textarea>
                    <br/>
                    <br/>
                    <button type="submit">Set Name</button>
                </form>
            </div>
        );
    }
});

export default GreeterForm;