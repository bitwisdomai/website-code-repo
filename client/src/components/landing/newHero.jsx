import React from "react";
import heroVideoBack from "../../assets/herovideoback.mp4";

const NewHero = () => {
  return (
    <div className="relative bg-black overflow-hidden w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
      >
        <source src={heroVideoBack} type="video/mp4" />
      </video>
    </div>
  );
};

export default NewHero;
