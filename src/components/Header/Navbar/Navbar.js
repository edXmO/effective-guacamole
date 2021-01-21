import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="ui three item menu">
            <Link to='/' className="active item">Journal</Link>
            <Link to='/bluetracker/foods' className="item">Foods</Link>
            <Link to='/bluetracker/recipes' className="item">Recipes</Link>
        </div>
    )
}

export default Navbar;