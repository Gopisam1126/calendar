import "../compStyles/header.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Header() {

    const [currentDate, setCurrentDate] = useState(new Date());

    const days = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const daysInMonth = [];

    for (let day = 1; day < endOfMonth.getDate(); day++) {
        daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }

    function goToPrevMonth() {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    }

    function goToNextMonth() {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    }
    
    return <>
        <section className="header-main-sec">
            <div className="current-date-c">
                <div className="prevMothIcon-c" onClick={goToPrevMonth}>
                    <KeyboardArrowLeftIcon style={{
                        cursor: "pointer",
                        fontSize: "3rem"
                    }}/>
                </div>
                <div className="current-date">
                    <h2 className="date">{currentDate.getDate()}</h2>
                    <h2 className="month">{currentDate.toLocaleString("default", {month: "long"})}</h2>
                    <h2 className="year">{currentDate.getFullYear()}</h2>
                </div>
                <div className="nextMonth-c" onClick={goToNextMonth}>
                    <KeyboardArrowRightIcon style={{
                        cursor: "pointer",
                        fontSize: "3rem"
                    }}/>
                </div>
            </div>
            <div className="calendar-grid">
                {
                    days.map((day, i) => (
                        <div className="day-header" key={i}>
                            {day}
                        </div>
                    ))
                }

                {
                    Array(startOfMonth.getDay()).fill(null).map((_, i) => (
                        <div key={`empty-${i}`} className="calendar-day empty"></div>
                    ))
                }

                {
                    daysInMonth.map((day, i) => (
                        <div key={i} className="calendar-day">
                            <span>{day.getDate()}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
}

export default Header;
