import React from 'react';
import './App.css';
import { Calendar } from 'antd';

function App() {

  return (
    <div className='App'>
      <Calendar
        onSelect={(date) => {
          console.log("Selected Date:", date);
        }}
        disabledDate={(date) => {
          if (new Date(date).getDate() > 29) {
            return true;
          } else {
            return false;
          }
        }}
        dateCellRender={(date) => {
          if (new Date(date).getDate() === new Date().getDate() ){
            return <h5>Tutorial Belajar Gih</h5>;
          }
        }}
        monthCellRender={(date) => {
          if (new Date(date).getMonth() === new Date().getMonth() ){
            return <h5>Bulan Bermain Game</h5>;
          }
        }}
       />
    </div>
  );
};
export default App;