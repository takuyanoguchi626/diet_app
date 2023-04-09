import React, { useState } from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const CalendarComp = () => {
    const [initialDate, setInitialDate] = useState(new Date())

    return (
        <Calendar
            onChange={() => setInitialDate}
            value={initialDate}
            onClickDay={() => console.log("ddd")}
            calendarType={"US"}
            className={"calendar"}
        ></Calendar>
    )
}

export default CalendarComp