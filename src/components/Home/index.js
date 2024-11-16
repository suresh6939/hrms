import Header from '../Header'
import { useState } from "react";
import './index.css'
import { Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);


const Home = () => {

   const [homeariable, setHomeVariable] = useState({
      hours: 0,
      minutes: 0,
      checkIn: '08:00',
      checkOut: '23:78'
   })

   const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]; // X-axis (days)
   const data = {
      labels: days,
      datasets: [
         {
            label: "Work Hours",
            data: [9.5, 7.5, 9, 6, 10], // Random data representing hours worked each day
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            tension: 0.4,
         },
      ],
   };

   // Chart options
   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
         title: {
            display: true,
            text: "5-Day Work Hours",
         },
      },
      scales: {
         y: {
            title: {
               display: true,
               text: "Hours",
            },
            min: 0,
            max: 10, // Y-axis maximum value
         },
         x: {
            title: {
               display: true,
               text: "Days",
            },
         },
      },
   };


   return (
      <div className="home-container">
         <Header />
         <div className='home-page-container'>
            <div className='hours-checkin-checkout'>
               <label className='heading'>Today Total Hours</label>
               <div className='hours-minutes'>
                  <label className='clock-para'>{homeariable.hours} : {homeariable.minutes}</label>
               </div>
               <button className='check-in'>
                  Check In
               </button>
               <button className='check-in'>
                  Check Out
               </button>
               <button className='check-in'>
                  Reload
               </button>

               <div className="check-in-out-container">
                  <h3>Today's Check-In and Check-Out</h3>
                  <table className="check-in-out-table">
                     <thead>
                        <tr>
                           <th>Type</th>
                           <th>Time</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Check-In</td>
                           <td>{homeariable.checkIn}</td>
                        </tr>
                        <tr>
                           <td>Check-Out</td>
                           <td>{homeariable.checkOut}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div style={{ width: "40%" }}>
               <Line data={data} options={options} />
            </div>
         </div>
      </div>
   )
}

export default Home;