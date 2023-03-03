import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PackageCard from "./PackageCard";

const PackageSlider = ({ packages }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable="true"
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="py-8"
    >
      {packages ? (
        packages?.map((mentor) => (
          <PackageCard key={mentor?._id} mentor={mentor} />
        ))
      ) : (
        <div />
      )}
    </Carousel>
  );
};

export default PackageSlider;

/**
 * Loading data in react-multi-carousel using .map function gives 'length' of undefined error
 * https://stackoverflow.com/questions/69002765/loading-data-in-react-multi-carousel-using-map-function-gives-length-of-undef
 */
