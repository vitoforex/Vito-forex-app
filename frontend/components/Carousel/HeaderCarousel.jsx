"use client";
import React, { useState } from "react";
import "./styles.css";
import { GenericButton } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Images = ['https://cdn.pixabay.com/photo/2021/08/06/00/37/stock-trading-6525081_1280.jpg',
'https://cdn.pixabay.com/photo/2020/11/24/04/13/finance-5771541_1280.jpg','https://cdn.pixabay.com/photo/2015/10/09/20/37/meeting-979899_1280.jpg']

const slideOneText = <div className="">
<h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
    Start Forex Trading
</h1>
<p className="text-gray-300 text-lg py-2">
    We hold your hand through out the journey!
</p>
<GenericButton
    text={"Start Learning"}
    classes={
      " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
    }
  />
</div>

const slideTwoText = <div className="">
<h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
   Trade from anywhere
</h1>
<p className="text-gray-300 text-lg py-2">
    With forex trading, you can start trading from the comfort of your home and make big bunks!
</p>
<GenericButton
    text={"Start Trading"}
    classes={
      " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
    }
  />
</div>

const slideThreeText = <div className="">
<h1 className="text-white lg:text-6xl text-3xl font-semibold py-4">
   Join Us In Our Physical Lessons
</h1>
<p className="text-gray-300 text-lg py-2">
    We have physical lessons twice a month at Speke resort.
</p>
<GenericButton
    text={"Join Live Lessons"}
    classes={
      " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
    }
  />
</div>

const text = [slideOneText, slideTwoText, slideThreeText]

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6),rgba(0,0,0,0.6) ),url(${Images[currImg]})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
        <FontAwesomeIcon size="2xl" className="text-primary" icon={faArrowAltCircleLeft}/>
         
        </div>
        <div className="center">
            {text[currImg]}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < Images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
           <FontAwesomeIcon size="2xl" className="text-primary" icon={faArrowAltCircleRight}/>
        </div>
      </div>
    </div>
  );
}

export default Carousel;