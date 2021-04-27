import React, { useState, useRef } from 'react';
import './App.css';
import * as holiday_jp from '@holiday-jp/holiday_jp';

const DateDisplay = () => {
  const [count, setCount] = useState(0);
  const topPaperRef = useRef(null);

  const onMekuri = () => {
    topPaperRef.current.classList.add('__paper-fadeout');
    window.setTimeout(() => {
      topPaperRef.current.classList.remove('__paper-fadeout');
      setCount(count + 1);
    }, 200);
  }
  
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

  const dayData = (dt) => {
    return {
      yearStr: `${dt.getFullYear()}年`,
      monthStr: `${dt.getMonth() + 1}月`,
      dayStr: `${dt.getDate()}`,
      weekStr: `${['日','月','火','水','木','金','土'][dt.getDay()]}曜日`,
      weeklyColor: weeklyColor(dt),
      holidayName: holidayName(dt),
    }
  }

  const dt1 = new Date();
  const dt2 = new Date();
  dt1.setDate(dt1.getDate() + count);
  dt2.setDate(dt2.getDate() + count + 1);

  const dayData1 = dayData(dt1);
  const dayData2 = dayData(dt2);


  return (
    <div className="absolute transform -translate-x-32 left-1/2">
      <div className="absolute z-40 w-64 h-10 bg-black top-16" onClick={() => {setCount(0)}}></div>
      <div 
        className="absolute z-30 w-64 pt-10 bg-white top-16 h-96 __paper"
        ref={topPaperRef}
        onClick={onMekuri}
      >
        <div className={dayData1.weeklyColor}>
          <div className="mx-4 mt-2">
            <div className="absolute text-lg text-left">{dayData1.yearStr}</div>
            <div className="relative text-4xl text-center -top-2">{dayData1.monthStr}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-huge">{dayData1.dayStr}</div>
            <div className="mt-6 text-3xl">{dayData1.weekStr}</div>
            <div className="text-lg">{dayData1.holidayName}</div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 w-64 pt-10 bg-white top-16 h-96">
        <div className={dayData2.weeklyColor}>
          <div className="mx-4 mt-2">
            <div className="absolute text-lg text-left">{dayData2.yearStr}</div>
            <div className="relative text-4xl text-center -top-2">{dayData2.monthStr}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-huge">{dayData2.dayStr}</div>
            <div className="mt-6 text-3xl">{dayData2.weekStr}</div>
            <div className="text-lg">{dayData2.holidayName}</div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 w-64 pt-10 bg-white top-16 h-96 shadow-calendar"></div>
      <div className="__calendar-bottom"></div>
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
