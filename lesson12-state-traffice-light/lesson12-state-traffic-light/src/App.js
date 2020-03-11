import React, { useState } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

function App() {
    const [currentColor, setCurrentColor] = useState(RED);

    setInterval(() => {
        setCurrentColor(getNextColor(currentColor));
        console.log(currentColor);
    }, 1000);

  return (
    <div className="App">
          <TrafficLight currentColor={currentColor} />
    </div>
  );
}

function getNextColor(color) {
    switch (color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
}

export default App;
