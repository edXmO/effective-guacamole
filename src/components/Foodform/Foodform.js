import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

// Components
// import Searchbar from '../Searchbar/Searchbar';

class Foodform extends Component {
    render() {
        return (
            <Form onSubmit={(formObj) => {
                console.log(formObj);
            }}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className='ui form'>
                        <Field name="ingredient">
                            {({ input }) => (
                                <input
                                    type="text"
                                    placeholder="name"
                                    {...input}
                                />
                            )}
                        </Field>
                        <button className='ui teal button' type="submit">Submit</button>
                    </form>
                )}
            </Form>
        )
    }
}

export default Foodform;
