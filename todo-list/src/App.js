import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';

function App() {
    let todoItems = [
        { title: 'Mua Bim Bim', isComplete: true },
        { title: 'Di Da Bong', isComplete: false },
        { title: 'Di do xang', isComplete: false },
    ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
            todoItems.map((item, index) => 
                <TodoItem item={item} key={index}/> 
            )
        }
      </header>
    </div>
  );
}

export default App;
