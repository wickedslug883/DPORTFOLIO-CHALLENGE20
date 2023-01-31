import React,  { useRef, useState  } from 'react';

function WorkItem({src}) {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const handleEnded = () => {
      videoRef.current.load();
      videoRef.current.pause();
    };
    
  const handleClick = () => {
    window.location.href = "https://www.example.com";
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
  };

  const videoStyles = {
    width: "300px",
    height: "200px",
    cursor: "pointer",
    transform: isHovered ? "scale(1.15)" : "scale(1)",
    boxShadow: isHovered
      ? "0 0 10px yellow"
      : "0 0 0 rgba(255, 0, 0, 0)"
  };

    return (
        
       <div className='portJam'> <h3 className='portH3'>Example</h3>  
       <div
       className = 'portJammer'
      style={videoStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
      className='portVideo'
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        onEnded={handleEnded}
        loop
        muted
        src={src}
      />
    </div>
    </div> 
    )
}

function Work() {
  return (
    <div className='portContainer'> 
      <h2 className='portH2'> portfolio </h2>
      <WorkItem src='gif4.mp4' />
      <WorkItem src='gif3.mp4' />
      <WorkItem src='gif2.mp4' />
      <WorkItem src='gif1.mp4' />
      <WorkItem src='gif2.mp4' />
      <WorkItem src='gif3.mp4' />
      <WorkItem src='gif3.mp4' />
      <WorkItem src='gif3.mp4' />
    </div>
  )
}

export default Work;
