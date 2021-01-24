import React, { Component } from 'react';
import Item from './Item/Item';

class ItemList extends Component {

    state = {
        ingredients: []
    }

    componentDidMount() {
        this.setState({ ingredients: this.props.ingredients })
        console.log(this.state.ingredients);
    }

    render() {
        if (!this.state.ingredients) {
            return null;
        }
        const renderList = this.state.ingredients.map((item, idx) => {
            return (
                <Item
                    key={item.food.foodId + idx}
                    name={item.food.label}
                    calories={item.food.nutrients.ENERC_KCAL}
                    proteins={item.food.nutrients.PROCNT}
                    carbs={item.food.nutrients.CHOCDF}
                    fats={item.food.nutrients.FAT}
                />
            )
        });
        return (
            <table className="ui teal table">
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Calories (kCal)</th>
                        <th>Proteins (gr/100gr)</th>
                        <th>Carbs (gr/100gr)</th>
                        <th>Fats (gr/100gr)</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
        )
    }
}

export default ItemList;