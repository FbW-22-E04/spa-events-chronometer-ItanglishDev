import { useState, useEffect } from 'react'


function Chrono() {



  const [minutes, setMinutes] = useState((0))
  const [seconds, setSeconds] = useState(0)
  const [milliSeconds, setMilliSeconds] = useState(0)

  // const start = () => {

  function stop() {
    console.log('CLICKED');

    clearInterval()
    clearInterval()
    clearInterval()
  }
  // }

  function reset() {
    console.log('CLICKED');
    setMilliSeconds(0)
    setMinutes(0)
    setSeconds(0)
  }

  return (
    <>
      <div className='border-2 h-[45px] text-2xl'>
        {`${minutes} : ${seconds} : ${milliSeconds * 100}`
        }
      </div>
      <div className='space-around items-stretch'>
        <button className='bg-cyan-400 h-[35px] border-2 border-slate-600 w-[75px] bg-sky'>
          Start</button>
        <button onClick={stop} className='border-2 bg-lime-200 border-slate-600 h-[35px] bg-orange-300 w-[75px] bg-sky'>
          Stop</button>
        <button onClick={reset} className='bg-amber-300 h-[35px] border-2 border-slate-600 w-[75px] bg-sky'>
          Reset</button>
      </div>
    </>
  );
}

export default Chrono;