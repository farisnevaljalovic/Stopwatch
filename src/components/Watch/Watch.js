import React, { useState } from 'react';
// import style from "./Watch.module.css";

function Watch() {
    let date = new Date().toLocaleTimeString();
    const [time, setTime] = useState(date);

    const updateTime = () => {
        date = new Date().toLocaleTimeString();
        setTime(date)
    }
    setInterval(updateTime, 1000);
    return (
        <div>
            {time}
        </div>
    )
}

export default Watch
