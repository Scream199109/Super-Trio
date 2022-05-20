import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(5);
  console.log("🚀 ~ Timer ~ timer", timer)

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {

    setTimer(5);

  }, []);
  return timer;
}
