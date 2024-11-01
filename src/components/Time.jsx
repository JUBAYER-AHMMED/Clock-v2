import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("Interval has been setup.");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // console.log("INTERVAL HAS BEEN STOPED.");
    };
  }, []);

  return (
    <p className="fs-3 fw-normal lead">
      This is the current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default Time;
