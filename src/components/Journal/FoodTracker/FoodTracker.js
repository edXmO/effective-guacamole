import React, { Component } from 'react';

// En cada segment, breakfast etc, va a haber un formulario para introducir los alimentos del día

class FoodTracker extends Component {
    render() {
        return (
            <div className='ui container'>
                <div className="ui segments">
                    <div className="ui segment">
                        <h3>Food Tracking</h3>
                    </div>
                    <div className="ui segments">
                        <div className="ui teal segment">
                            <h4>Breakfast</h4>
                            <div class="ui teal pointing label">
                                Add Item
                            </div>
                        </div>
                        <div className="ui teal segment">
                            <h4>Lunch</h4>
                            <div class="ui teal pointing label">
                                Add Item
                            </div>
                        </div>
                        <div className="ui teal segment">
                            <h4>Dinner</h4>
                            <div class="ui teal pointing label">
                                Add Item
                            </div>
                        </div>
                        <div className="ui teal segment">
                            <h4>Snacks</h4>
                            <div class="ui teal pointing label">
                                Add Item
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default FoodTracker;