import React, { useState, useEffect } from "react";
import desktopImg from "../images/image-hero-desktop.jpg";
import mobileImg from "../images/image-hero-mobile.jpg";

const TopImage = (props) => {
  const initialBgImage = () => {
    if (window.innerWidth > 768) {
      return desktopImg;
    } else {
      return mobileImg;
    }
  };
  const [bgImage, setBgImage] = useState(initialBgImage);
  const resizeHandler = () => {
    if (window.innerWidth > 768) {
      return setBgImage(desktopImg);
    } else {
      return setBgImage(mobileImg);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });
  return <img className="desktopImg absolute t-0 w-full  " src={bgImage} alt="top" />;
};

export default TopImage;
