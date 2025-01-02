import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0); // Progress percentage state
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Generate random duration between 15 and 30 seconds
    const randomDuration = Math.floor(Math.random() * 16) + 15; // 15 to 30 seconds
    const totalTime = randomDuration * 1000; // Convert to milliseconds

    // Define the interval for increasing the progress
    const interval = totalTime / 100; // We want to increase the progress 100 times during the total time
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId); // Clear interval when progress is 100
          setIsLoading(false); // Set loading to false when done
          return 100;
        }
        return prevProgress + 1;
      });
    }, interval);

    // Clean up the interval on component unmount or when loading is done
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Background of the progress bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-4 bg-blue-600 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Loading Text */}
      <p className="mt-2 text-center text-gray-700">{isLoading ? `Loading... ${progress}%` : 'Completed!'}</p>
    </div>
  );
};

export default LoadingBar;