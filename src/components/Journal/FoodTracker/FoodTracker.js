import React, { Component } from 'react';

// En cada segment, breakfast etc, va a haber un formulario para introducir los alimentos del día
// Components
import AddItems from './AddItems/AddItems';


class FoodTracker extends Component {
    render() {
        return (
            <div className='ui container'>
                <div className="ui segments">
                    <div className="ui segment">
                        <h3>Daily Register</h3>
                    </div>
                    <div className="ui segments">
                        <div className="ui teal segment">
                            <AddItems meal='Breakfast' />
                        </div>
                        <div className="ui teal segment">
                            {/* <AddItems meal='Lunch' /> */}
                        </div>
                        <div className="ui teal segment">
                            {/* <AddItems meal='Dinner' /> */}
                        </div>
                        <div className="ui teal segment">
                            {/* <AddItems meal='Snacks' /> */}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default FoodTracker;