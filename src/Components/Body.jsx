// import "./App.css";

import { useEffect, useState } from "react";

const Body = () => {
  const [bodyCard, setbodyCard] = useState([]);

  useEffect(() => {
    bodyData();
    console.log("render");
  }, []);

  async function bodyData() {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data2 = await data1.json();
    const data3 = await data2.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // ?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;
    // const data3 = await data2.data?.cards[0]?.card?.card?.imageGridCards?.info; ............../// For Top

    setbodyCard(data3);
    console.log(data3);
  }

  return (
    <>
      <div className="filtter_buttons">
        <button className="btn">Filter</button>
        <button className="btn">Sort By</button>
        <button className="btn">Fast Delivery</button>
        <button className="btn">New on Swiggy</button>
        <button className="btn">Ratting 4.0+</button>
        <button className="btn">Pure Veg</button>
        <button className="btn">Offers</button>
        <button className="btn">Rs. 300-Rs. 600</button>
      </div>
      <div className="master">
        {bodyCard.map((x) => {
          return (
            <div className="card" key={x.info.id}>
              <img
                className="card_image"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/noc7ieivirqxtpujhsgl"
                src={
                  `https://media-assets.swiggy.com/swiggy/image/upload/` +
                  x.info.cloudinaryImageId
                }
                alt=""
              />
              <div className="details">
                <h2>
                  <b>{x.info.name}</b>
                </h2>
                <p className="star">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      role="img"
                      aria-hidden="true"
                      strokeColor="rgba(2, 6, 12, 0.92)"
                      fillColor="rgba(2, 6, 12, 0.92)"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                      ></circle>
                      <path
                        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                        fill="white"
                      ></path>
                      <defs>
                        <linearGradient
                          id="StoreRating20_svg__paint0_linear_32982_71567"
                          x1="10"
                          y1="1"
                          x2="10"
                          y2="19"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#21973B"></stop>
                          <stop offset="1" stop-color="#128540"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span>
                    <b>{x.info.avgRatingString} {x.info.sla.slaString}</b>
                  </span>
                </p>
                <p className="light_font">{x.info.cuisines[0]} {x.info.cuisines[1]}</p>
                <p className="light_font">{x.info.locality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
