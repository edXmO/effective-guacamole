import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Foodform extends Component {
    render() {
        return (
            <form className='ui form'>
                <Field />
                <Field />
            </form>
        )
    }
}

export default Foodform;