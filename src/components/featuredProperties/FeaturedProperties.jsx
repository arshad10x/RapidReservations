import React from "react";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  return (
    <>
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvbWUlMjBndWVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Comfort Suites Airport</span>
          <span className="fpCity">Austin</span>
          <span className="fpPrice">Starting from $140</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGhvbWUlMjBndWVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Four Seasons Hotel</span>
          <span className="fpCity">Lisbon</span>
          <span className="fpPrice">Starting from $99</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hilton Garden Inn</span>
          <span className="fpCity">Berlin</span>
          <span className="fpPrice">Starting from $105</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
