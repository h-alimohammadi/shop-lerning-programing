import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CounterTime({ time }) {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <>
        <CountdownCircleTimer
        {...timerProps}
        colors="#7995D5"
        size={180}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}>
        {({ elapsedTime, color }) => (
          <span style={{ color : '#fff' ,fontSize: '18px' }}>
            {renderTime("ثانیه", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
     
      <CountdownCircleTimer
        {...timerProps}
        colors="#ACC742"
        size={180}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}>
        {({ elapsedTime, color }) => (
          <span style={{ color : '#fff' ,fontSize: '18px' }}>
            {renderTime("دقیقه", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    <CountdownCircleTimer
        {...timerProps}
        colors="#155879"
        size={180}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}>
        {({ elapsedTime, color }) => (
          <span style={{ color : '#fff' ,fontSize: '18px' }}>
            {renderTime("ساعت", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
       <CountdownCircleTimer
        {...timerProps}
        colors="#FF9900"
        size={180}
        duration={daysDuration}
        initialRemainingTime={remainingTime}>
        {({ elapsedTime, color }) => (
          <span style={{ color : '#fff' ,fontSize: '18px' }}>
            {renderTime("روز", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </>
  );
}
