import React from "react";
import ProfileData from "../data/profile";

const Footer = () => {
  return (
    <div className="text-white bg-darkblue text-center py-4 mt-2 font-normal text-md md:text-lg md:p-5 md:mt-4">
      <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
        Made with ❤️ by <span className="font-bold"> {ProfileData.name}</span>
      </p>
    </div>
  );
};

export default Footer;