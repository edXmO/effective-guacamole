import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIngredient } from '../actions';

// Importar a foods and recipes, es en los componentes donde tendrá utilidad
import ItemList from '../Journal/FoodTracker/ItemList/ItemList';

class Searchbar extends Component {

    state = { searchTerm: '', deploySearch: false }

    handleValidation = ingredient => {
        if (!ingredient) {
            return;
        } else {
            this.props.fetchIngredient(ingredient);
        }
    }

    onSearchHandler = ingr => {
        this.handleValidation(ingr);
        this.setState({ deploySearch: true });
    }
    render() {
        return (
            <div >
                <div className="ui action input">
                    <input
                        onChange={(e) => this.setState({ searchTerm: e.target.value })}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search..."
                    />
                    <button
                        onClick={() => this.onSearchHandler(this.state.searchTerm)}
                        className="ui teal button"
                    >
                        Search
                    </button>
                </div>

                <ItemList ingredients={this.props.ingredients} />

            </div >
        )
    }
}

const mapStateToProps = ({ ingredients }) => {
    return { ingredients: ingredients.hints }
}

export default connect(
    mapStateToProps,
    { fetchIngredient }
)(Searchbar);