import React, { Component } from 'react';

// En cada segment, breakfast etc, va a haber un formulario para introducir los alimentos del día
// Components
import AddItems from './AddItems/AddItems';
import ItemList from './ItemList/ItemList';

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
                            <ItemList />
                        </div>
                        <div className="ui teal segment">
                            <AddItems meal='Lunch' />
                            <ItemList />
                        </div>
                        <div className="ui teal segment">
                            <AddItems meal='Dinner' />
                            <ItemList />
                        </div>
                        <div className="ui teal segment">
                            <AddItems meal='Snacks' />
                            <ItemList />
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default FoodTracker;