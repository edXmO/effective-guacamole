import React, { Component } from 'react';
// import Foodform from '../../../Foodform/Foodform';
import Searchbar from '../../../Searchbar/Searchbar';

class AddItems extends Component {

    state = {
        deployed: true
    }


    render() {
        return (
            <div className='ui dropdown'>
                <div
                    onClick={() => this.setState({ deployed: !this.state.deployed })}
                    className="ui teal button">
                    <i className={`${this.state.deployed ? 'plus' : 'minus'} icon`}></i>
                    {this.props.meal}
                </div>
                {!this.state.deployed ?
                    <div className='ui segment'>
                        <form>
                            <Searchbar />
                            <label>Proteins</label>
                        </form>
                    </div>
                    : null}
            </div>
        )
    }
}

export default AddItems;