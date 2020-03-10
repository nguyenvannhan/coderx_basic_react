import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';

function App() {
    let todoItems = [
        'Mua Bim Bim',
        'Di Da Bong',
        'Di do xang',
    ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
            todoItems.map((item, index) => 
                <TodoItem title={item} key={index}/> 
            )
        }
      </header>
    </div>
  );
}

export default App;
