import React, { Component } from 'react';


// Component imports
import FoodTracker from '../Journal/FoodTracker/FoodTracker';
import Macros from './Macros/Macros';


class Journal extends Component {
    render() {
        return (
            <div className='ui container'>
                <Macros />
                <FoodTracker />
            </div>
        )
    }
}

export default Journal;