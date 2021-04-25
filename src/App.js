import React, { useEffect, useState } from 'react';
import './App.css';

const DateDisplay = () => {
  const textColor = (n) => {
    switch (n) {
      case 0: return 'text-red-600';
      case 6: return 'text-blue-600';
      default: return 'text-black';
    }
  }

  const date = new Date();
  const yearStr = `${date.getFullYear()}年`;
  const monthStr = `${date.getMonth()}月`;
  const dayStr = `${date.getDate()}`;
  const weekStr = `${['日','月','火','水','木','金','土'][date.getDay()]}曜日`;
  const strColor = `${textColor(date.getDay())}`;
  
  return (
    <div className="relative">
      <div className="w-auto h-10 bg-black"></div>
      <div className={`${strColor} text-center`}>
        <div className="mt-2 ml-4 text-left">{yearStr}</div>
        <div className="text-4xl">{monthStr}</div>
        <div className="mt-2 font-bold text-huge">{dayStr}</div>
        <div className="mt-6 text-2xl">{weekStr}</div>
      </div>
    </div>
  )
};

function App() {
  return (
    <React.Fragment>
      <div className="__bg-image"></div>
      <div className="relative w-64 mx-auto bg-white shadow-calendar top-14 h-96">
        <DateDisplay />
      </div>
    </React.Fragment>
  )
}

export default App;
