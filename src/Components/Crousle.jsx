import { useEffect } from "react";
import { useState } from "react";

const Crousel = () => {
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
    console.log(crouselData);
  }
  return (
    <>
      <div className="mt-6 mx-48">
        <h1 className="font-bold text-2xl">What's on your mind?</h1>
        <div className="border-2 flex gap-12 flex-wrap justify-between">
          {crouselData.map((x)=>{
            return(
              <div className="" key={x.id}>
                <div className=" ">
                  <img className="w-36" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e" alt="" />
                  <p>{x.id}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Crousel;
