import React from "react";
import { useQuery } from "@tanstack/react-query";

const MidCrousel = () => {
  async function midData() {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );

   const data2 = await data1.json();
   const data3 = await data2.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    console.log(data3);
    return data3;
  }
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["midcrousel"],
    queryFn: midData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message + "Hello"}</div>;
  }

  // Check if data is available and not empty
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="slider-container">
        {data.map((x) => {
          return (
            <div className="" key={x.info.id}>
              <div className=" ">
                <h1>{x.info.id}</h1>
                <img
                  className="w-36"
                  src={
                    `https://media-assets.swiggy.com/swiggy/image/upload/` +
                    x.info.imageId
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
