import React, { useState, useEffect } from 'react'
import moment from 'moment'

function Time() {
    const [time, settime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))

    const hanleTime = () => {
        settime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    useEffect(() => {
        const Timer = setInterval(hanleTime, 1000);
        return () => {
            clearInterval(Timer)
        }
    }, [])
    return (
        <div>
            {time}
        </div>
    )
}

export default Time
