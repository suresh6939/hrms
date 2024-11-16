import Header from '../Header'
import { useState } from "react";
import './index.css'

const Home = () => {

    const [homeariable ,setHomeVariable] = useState({
        hours : 0,
        minutes : 0,
        checkIn:'08:00',
        checkOut:'23:78'
    })

    return(
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
            </div>
        </div>
     </div>
    )
}

export default Home;