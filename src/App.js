import React, { useEffect, useState } from 'react';
import './App.css';
import * as holiday_jp from '@holiday-jp/holiday_jp';

const DateDisplay = () => {
  const [count, setCount] = useState(0);
  const weeklyColor = (dt) => {
    if (holiday_jp.isHoliday(dt)) {
      return 'text-red-600';
    }
    switch (dt.getDay()) {
      case 0: return 'text-red-600';
      case 6: return 'text-blue-600';
      default: return 'text-black';
    }
  }
  const holidayName = (dt) => {
    if (holiday_jp.isHoliday(dt)) {
      return holiday_jp.between(dt, dt)[0]['name'];
    }
  }

  const dt = new Date();
  dt.setDate(dt.getDate() + count);
  const yearStr = `${dt.getFullYear()}年`;
  const monthStr = `${dt.getMonth() + 1}月`;
  const dayStr = `${dt.getDate()}`;
  const weekStr = `${['日','月','火','水','木','金','土'][dt.getDay()]}曜日`;
  
  return (
    <div className="relative w-64 mx-auto bg-white shadow-calendar top-14 h-96">
      <div className="w-auto h-10 bg-black" onClick={() => setCount(0)}></div>
      <div onClick={() => setCount(count + 1)}>
        <div className={`__font-gothic ${weeklyColor(dt)}`}>
          <div className="mx-4 mt-2">
            <div className="absolute text-lg text-left">{yearStr}</div>
            <div className="relative text-4xl text-center -top-2">{monthStr}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-huge">{dayStr}</div>
            <div className="mt-6 text-3xl">{weekStr}</div>
            <div className="text-lg">{holidayName(dt)}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

function App() {
  return (
    <React.Fragment>
      <div className="__bg-image"></div>
      <DateDisplay />
    </React.Fragment>
  )
}

export default App;
