import React, { useState } from 'react';
import ActionBtn from '../ActionBtn/ActionBtn';
import WatchDisplay from '../WatchDisplay/WatchDisplay';
import style from "./StopWatch.module.css";

function StopWatch() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

    //status=0....actionBtn = start
    //status=1 ...actionBtn = stop
    //status = 2 ...actionBtn = resume/restart
    const [status, setStatus] = useState(0);
    const [interv, setInterv] = useState();

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {

        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }

        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }

        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }

        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    }

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));    
    }

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    }

    const resume = () => start();

    const restart = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})  
    }
    return (
        <div className={style.watch}>
            <WatchDisplay time={time}/>
            <ActionBtn status={status} start={start} stop={stop} resume={resume} restart={restart}/>
        </div>
    )
}

export default StopWatch
