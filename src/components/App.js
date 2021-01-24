import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// history 
import history from './history/history';
// Component imports
import Header from './Header/Header';
import Journal from './Journal/Journal';
import Foods from './Foods/Foods';
import Recipes from './Recipes/Recipes';
// Actions 
import { fetchUser } from './actions';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='ui container'>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Journal} />
                        <Route path='/bluetracker/foods' exact component={Foods} />
                        <Route path='/bluetracker/recipes' exact component={Recipes} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default connect(null, { fetchUser })(App);