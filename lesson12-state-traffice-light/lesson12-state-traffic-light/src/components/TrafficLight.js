import React from 'react';
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

function TrafficLight(props) {
    return (
        <div className="TrafficLight">
            <div className={ classNames('bulb', 'red', {
                active: props.currentColor === RED 
            })}></div>
            <div className={classNames('bulb', 'orange', {
                active: props.currentColor === ORANGE
            })}></div>
            <div className={classNames('bulb', 'green', {
                active: props.currentColor === GREEN
            })}></div>
        </div>
    );
}

export default TrafficLight;