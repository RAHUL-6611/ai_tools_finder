import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CardDetail from "./components/CardDetail/CardDetail";
import AiToolCard from './components/AiToolCard';
import AiToolData from './Data/AiToolData';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/card" element={<CardDetail />} />
      </Routes>
    </div>
  )

}
export default App;
