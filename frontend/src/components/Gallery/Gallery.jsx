import React from "react";

const Gallery = () => {
  return (
    <div className="h-auto w-full bg-gray-900">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2017/02/27/23/34/college-2104580_1280.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452808_1280.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2018/01/16/10/19/man-3085686_1280.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2012/02/22/20/08/classroom-15593_1280.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
