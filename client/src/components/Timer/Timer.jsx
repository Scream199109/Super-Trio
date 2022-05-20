import { useEffect, useState } from "react";

export default function Timer({ handleClose }) {
  const [timer, setTimer] = useState(5);
  console.log("🚀 ~ Timer ~ timer", timer)

  useEffect(() => {
    if (timer === 0) handleClose();
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {

    setTimer(10);

  }, []);
  return timer;
}
