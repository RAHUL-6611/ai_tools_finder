import React from 'react'
import './App.css';
import Header from './components/Header';
import AiToolCard from './components/AiToolCard';
import AiToolData from './Data/AiToolData';

const App = () => {
  return (
    <div>
      <Header />
      {/* Other Components Go here */}
      {/* <AiToolCard tool={AiToolData[0]}/> */}
    </div>
  )
}

export default App;

