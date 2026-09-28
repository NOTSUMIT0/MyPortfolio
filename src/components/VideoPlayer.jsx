import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!isDragging && videoRef.current && videoRef.current.duration > 0) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const updateProgressFromEvent = (e) => {
    if (!timelineRef.current || !videoRef.current || !videoRef.current.duration) return;
    const rect = timelineRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const newProgress = (x / rect.width) * 100;
    setProgress(newProgress);
    return newProgress;
  };

  const handlePointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateProgressFromEvent(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updateProgressFromEvent(e);
    }
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      const newProgress = updateProgressFromEvent(e);
      if (newProgress !== undefined && videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
      }
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="w-full bg-[#e5e5e5] rounded-3xl overflow-hidden relative flex flex-col items-center shadow-[0_20px_30px_rgba(0,0,0,0.15)]">
      {/* Video element */}
      <div 
        className="w-full relative cursor-pointer"
        onClick={togglePlay}
      >
        {poster && (
          <img 
            src={poster} 
            alt="poster-layout" 
            className="w-full h-auto block opacity-0 pointer-events-none" 
          />
        )}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={`w-full ${poster ? 'absolute top-0 left-0 h-full object-cover' : 'h-auto block'}`}
          onTimeUpdate={handleTimeUpdate}
          playsInline
          preload="metadata"
        />
      </div>

      {/* Custom Controls Area */}
      <div className="w-full bg-[#e5e5e5] pt-8 pb-8 px-12 sm:px-16 md:px-24 flex flex-col items-center gap-6">
        
        {/* Timeline Bar */}
        <div 
          ref={timelineRef}
          className="w-full h-1.5 bg-[#c2c2c2] rounded-full relative cursor-pointer"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Progress fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-[#9b0000] rounded-full pointer-events-none"
            style={{ width: `${progress}%` }}
          />
          {/* Progress handle (dot) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#9b0000] rounded-full pointer-events-none"
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>

        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className="focus:outline-none flex items-center justify-center w-12 h-12 group"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <div className="flex gap-[6px]">
              <div className="w-[5px] h-[18px] bg-[#333333] rounded-[1px] group-hover:bg-black transition-colors" />
              <div className="w-[5px] h-[18px] bg-[#333333] rounded-[1px] group-hover:bg-black transition-colors" />
            </div>
          ) : (
            <svg 
              className="w-7 h-7 text-[#333333] group-hover:text-black transition-colors ml-1" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
