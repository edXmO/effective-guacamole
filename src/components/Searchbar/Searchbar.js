import React, { Component } from 'react';

// Importar a foods and recipes, es en los componentes donde tendrá utilidad

class Searchbar extends Component {
    render() {
        return (
            <div className="ui action input">
                <input type="text" placeholder="Search..." />
                <button className="ui button">Search</button>
            </div>
        )
    }
}

export default Searchbar;