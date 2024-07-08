import React from "react";
import { useQuery } from "@tanstack/react-query";

const MidCrousel = () => {
  async function midData() {
    const first = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data2 = await first.json();
    const data3 = await data2.data?.cards[4]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

    console.log(data3);
    return data3;
  }
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["midcrousel"],
    queryFn: midData,
  });

  return (
    <>
      <div className="slider-container">
        {data.map((x) => {
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
      </div>
    </>
  );
};

export default MidCrousel;
