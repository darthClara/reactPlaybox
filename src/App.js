import React from 'react';
import './App.scss';
import Calcolatrice from './components/calcolatrice/Calcolatrice';
import Tris from './components/tris/Tris';


export default function App() {
  return (
    <div className="appWrapper">
      <Calcolatrice/>
      <Tris/>
    </div>
  );
}

