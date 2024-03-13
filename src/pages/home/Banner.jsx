import React from "react";

const Banner = () => {
  return (
    <div className="my-28">
      <img
        className="w-full hidden md:block h-auto rounded-lg aspect-auto"
        src="/media/banner/banner-large.jpg"
        alt=""
      />
      <img
        className="w-full md:hidden block h-auto rounded-lg aspect-auto"
        src="/media/banner/banner-medium.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
