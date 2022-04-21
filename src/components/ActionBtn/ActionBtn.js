import React from 'react';
import style from "../StopWatch/StopWatch.module.css";

function ActionBtn({status, start, stop, resume, restart}) {
    return (
        <div className={style.actionBtn}>
            {status === 0 ? (<button className={style.btn} onClick={start}>Start</button>) : null}
            {status === 1 ? (<button className={`${style.btn} ${style.stopBtn}`} onClick={stop}>Stop</button>) : null}
            {status === 2 ? (
                <div>
                    <button className={`${style.btn} ${style.resumeBtn}`} onClick={resume}>Resume</button>
                    <button className={`${style.btn} ${style.restartBtn}`} onClick={restart}>Restart</button>
                </div>
            ) : null}
        </div>
    )
}

export default ActionBtn
