import React from "react";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullScreen from "lightgallery/plugins/FullScreen";

const images = [
  {
    id: 1,
    url: "/media/gallery/1.jpg",
  },
  {
    id: 2,
    url: "/media/gallery/2.jpg",
  },
  {
    id: 3,
    url: "/media/gallery/3.jpg",
  },
  {
    id: 4,
    url: "/media/gallery/4.jpg",
  },
  {
    id: 5,
    url: "/media/gallery/5.jpg",
  },
  {
    id: 6,
    url: "/media/gallery/6.jpg",
  },
  {
    id: 7,
    url: "/media/gallery/7.jpg",
  },
  {
    id: 8,
    url: "/media/gallery/8.jpg",
  },
];

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  return (
    <div id="gallery" className="my-28">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
      Chuijhal Gallery
      </h1>
      <div>
        <div className="App">
          <div className="App ">
            <LightGallery
              onInit={onInit}
              speed={400}
              plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullScreen]}
              mode="lg-slide"
              startClass="lg-start-zoom"
              elementClassNames="grid grid-cols-2 md:grid-cols-4 w-full gap-5 "
              onBeforeSlide={onBeforeSlide}
              download={false}
            >
              {images.map((image) => (
                <a
                  key={image.id}
                  href={image.url}
                  className={`gallery-item basis-1/4 mx-auto  hover:opacity-90 ease-in duration-75 ${image.id > 4 ? "hidden md:block" : " "}`}
                >
                  <img
                    className="w-full h-full rounded-lg aspect-square"
                    src={image.url}
                  />
                </a>
              ))}
              
            </LightGallery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
