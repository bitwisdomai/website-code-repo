import React, { useState, useEffect, useRef } from "react";
import heroVideoBack from "../../assets/Herobackgroundvideo.webm";
import heroPoster from "../../assets/HEROBACK.jpg";

const NewHero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Load and play video - optimized for mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoLoaded) return;

    const isMobile = window.innerWidth <= 768;

    // For mobile, load immediately since Hero is first section
    // For desktop, use slight delay to prioritize page render
    const loadDelay = isMobile ? 0 : 100;

    const loadTimer = setTimeout(() => {
      // Load video source
      const source = video.querySelector("source");
      if (source && !source.src && source.getAttribute("data-src")) {
        source.src = source.getAttribute("data-src");
        video.load();
      }

      // Attempt to play when ready
      const playVideo = () => {
        video.play().catch((err) => {
          console.log("Video autoplay prevented:", err);
          // Fallback: poster image will remain visible
        });
        setVideoLoaded(true);
      };

      // Use 'loadeddata' for faster start on mobile
      video.addEventListener("loadeddata", playVideo, { once: true });

      // Fallback to canplay if loadeddata doesn't fire
      const fallbackTimer = setTimeout(() => {
        if (!videoLoaded && video.readyState >= 2) {
          playVideo();
        }
      }, 3000);

      return () => clearTimeout(fallbackTimer);
    }, loadDelay);

    return () => clearTimeout(loadTimer);
  }, [videoLoaded]);

  return (
    <div className="relative bg-black overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Video with Lazy Loading - Fully Responsive */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        poster={heroPoster}
        className="hero-video-responsive"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        preload="none"
      >
        <source data-src={heroVideoBack} type="video/webm" />
      </video>
    </div>
  );
};

export default NewHero;
