import React from 'react';

const Macros = () => {
    return (
        <div className='ui horizontal segments'>
            <div className='ui segment'>
                <i className="calendar alternate outline icon"></i>
                    Tuesday, 20th, 2021</div>
            <div className='ui center aligned segment'>
                <div className="ui blue image label" >
                    Fats
                            <div className="detail">
                        0 gr
                            </div>
                </div>
                <div className="ui teal image label" >
                    Carbs
                            <div className="detail">
                        0 gr
                            </div>
                </div>
                <div className="ui yellow image label">
                    Prot
                            <div className="detail">
                        0 gr
                            </div>
                </div>
                <div className='ui center aligned segment'>
                    <h4>Total Calories: 2000Kcal</h4>
                </div>
            </div>
        </div>
    )
}

export default Macros;