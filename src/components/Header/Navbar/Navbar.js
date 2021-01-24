import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="ui red google button">
                        <i className="google plus icon"></i>
                                Login With Google
                    </a>
                )
            default:
                return (
                    <a href="/api/logout" className="ui red google button">
                        <i className="google plus icon"></i>
                        Logout
                    </a>
                )
        }
    }

    render() {
        return (
            <div className="ui four item menu">
                <Link to='/' className="active item">Journal</Link>
                <Link to='/bluetracker/foods' className="item">Foods</Link>
                <Link to='/bluetracker/recipes' className="item">Recipes</Link>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Navbar);