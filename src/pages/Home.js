import React from 'react';
import Calendar from "react-calendar";
import { useState, useEffect } from 'react';
import './Home.css';
import "react-calendar/dist/Calendar.css";
import PatentList from './PatentList.js';
function CalendarBox() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="box box-1">
      <h4>Calendar</h4>
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>



    </div>
  );
}

function Home() {
  return (
    <div className='home'>

      <div className="Patents">
        <h4>patents signed</h4>
        <PatentList />
      </div>
       <div className="alert" >
          <h4>Alert</h4>
          <ul style={{ color: "black" }}>
      pay 7nth semester fee, otherwise you will not be allowed to sit in 6th sem end term examination.
    </ul>

        </div>





      <div className="container">
        
          <CalendarBox />



        <div className="box box-3">
          <h4>
            Birthday wishes to
          </h4>
          <div className="card">
            <div className="dashboard_admin">
              <ul>
                <li>
                  <span>
                    <img src="https://punjab.chitkara.edu.in//Storage/Images/Student/43932.jpg?zz=509" style={{ width: "60px", height: "60px", border: "1px solid #ccc" }} />
                    <span style={{ fontWeight: "bold", fontSize: "12px", margin: "15px" }}>PRANSHU KUMAR SONI</span>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="https://punjab.chitkara.edu.in//Storage/Images/Student/47657.jpg?zz=631" style={{ width: "60px", height: "60px", border: "1px solid #ccc" }} />
                    <span style={{ fontWeight: "bold", fontSize: "12px", margin: "15px" }}>RIDHAM ARORA</span>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="https://punjab.chitkara.edu.in//Storage/Images/Student/2010993566.jpg?zz=400" style={{ width: "60px", height: "60px", border: "1px solid #ccc" }} />
                    <span style={{ fontWeight: "bold", fontSize: "12px", margin: "15px" }}>PANKAJ SANKHYAN</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
