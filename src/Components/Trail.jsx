import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const [crouselData, setCrouselData] = useState([]);
  useEffect(() => {
    crouselfetch();
  }, []);

  async function crouselfetch() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const one = await data.json();
    const finaldata = await one.data?.cards[0]?.card?.card?.imageGridCards
      ?.info;
    setCrouselData(finaldata);
    console.log(finaldata);
  }
  return (
    <div className="mt-6 mx-48">
      <h1 className="font-bold text-2xl">What's on your mind?</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {crouselData.map((x) => {
            return (
              <div className="" key={x.id}>
                <div className=" ">
                  <img
                    className="w-36"
                    src={
                      `https://media-assets.swiggy.com/swiggy/image/upload/` +
                      x.imageId
                    }
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Crousel;
