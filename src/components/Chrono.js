import { useState, useEffect } from 'react'


function Chrono() {



  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [milliSeconds, setMilliSeconds] = useState(0)

  useEffect(() => {

    setInterval(() => {
      setMilliSeconds(milliSeconds + 0.001)
    }, 1000)

    setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)

    setInterval(() => {
      setMinutes(minutes + 1)
    }, 60000)

  }, [])




  return (
    <div></div>
  );
}

export default Chrono;