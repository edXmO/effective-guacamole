import React from 'react';

// Items pillan info 

const Item = (props) => {
    return (
        <tr>
            <td style={{ textTransform: 'capitalize' }}>{props.name}</td>
            <td>{props.calories.toFixed(2)} </td>
            <td>{props.proteins.toFixed(2)}</td>
            <td>{props.carbs.toFixed(2)}</td>
            <td>{props.fats.toFixed(2)}</td>
        </tr >
    )
}

export default Item;