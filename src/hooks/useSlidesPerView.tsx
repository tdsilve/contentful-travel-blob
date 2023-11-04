import React from "react";
export const useSlidesPerView = () => {
  const [slidesNumber, setSlidesNumber] = React.useState(3);
  const previewNumber = (windowWidth = 1024) => {
    if (windowWidth < 640) {
      return setSlidesNumber(1); // Set the desired number of slides for smaller screens
    } else if (windowWidth < 768) {
      return setSlidesNumber(2); // Set the desired number of slides for medium screens
    } else {
      return setSlidesNumber(3); // Set the desired number of slides for larger screens
    }
  };
  React.useEffect(() => {
    const handleResize = () => {
      previewNumber(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return slidesNumber;
};
