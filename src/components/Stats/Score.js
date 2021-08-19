import React, { useState } from "react";
import { CircularProgressWithLabel } from "./CircularProgress";
export default function Score({ value, text }) {
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress === value) {
        return;
      } else {
        setProgress((prevProgress) =>
          prevProgress >= value ? prevProgress : prevProgress + 1
        );
      }
      return () => clearInterval(timer);
    }, 100);
  }, []);
  return (
    <div className="score_component">
      <CircularProgressWithLabel value={progress} />
      <span className="text">{text}</span>
    </div>
  );
}
