
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingMessages = [
      "Initializing...",
      "Loading assets...",
      "Scanning for viruses...",
      "Defragmenting hard drive...",
      "Connecting to internet...",
      "Starting Windows...",
    ];

    let currentIndex = 0;
    const messageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[currentIndex]);
    }, 800);

    const timer = setTimeout(() => {
      clearInterval(messageInterval);
      onLoadComplete();
    }, 4000);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="windows-load-screen">
      <div className="text-2xl font-bold mb-4">Rounak Paul's Portfolio</div>
      
      <div className="windows-logo">
        <div className="windows-square bg-red-500"></div>
        <div className="windows-square bg-green-500"></div>
        <div className="windows-square bg-blue-500"></div>
        <div className="windows-square bg-yellow-500"></div>
      </div>
      
      <div className="loading-bar-container mb-4">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="text-sm mb-2">{loadingText}</div>
      <div className="text-sm animate-blink">Do not turn off your computer</div>
      
      <div className="absolute bottom-4 text-xs opacity-50">© Microsoft Corporation 2003</div>
    </div>
  );
};

export default LoadingScreen;
