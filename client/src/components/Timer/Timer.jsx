import { useEffect, useState } from "react";

export default function Timer({ handleClose, buttonDisable }) {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer === 0) {
      handleClose();
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    buttonDisable()
  }, [handleClose])

  useEffect(() => {

    setTimer(30);

  }, []);
  return timer;
}
