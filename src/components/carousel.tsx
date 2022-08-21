import React, { useState, useEffect, useRef } from "react";
import classes from "./carousel.module.scss";
import axiosInstance from "../lib/axios";
import { Props, CarouselItem, SliderAction } from "../types";
import CarouselDetails from "./carousel-details";
import CarouselLeftButton from "./carousel-left-button";
import CarouselRightButton from "./carousel-right-button";
import "./animations.css"
export default function Carousel(props: Props) {
  const { slides, infinite } = props;
  const [current, setCurrent] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const [items, setItems] = useState<CarouselItem[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleSlider = (action: SliderAction) => {
    if (action === SliderAction.NEXT) {
     
      if (infinite && current === items.length - 1) {
        setCurrent(0);
      } else {
        setCurrent((prev) => prev + 1);
      }
    } else {
      if (infinite && current === 0) {
        setCurrent(items.length - 1);
      } else {
        setCurrent((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get("/carousel", {
          params: { slides },
        });

        setItems(data);
      } catch (error) {
        setError(true)
      }
    })();
  }, [slides]);

  useEffect(() => {
    if (imageRef && imageRef.current) {
      imageRef.current.classList.remove("img");
      imageRef.current.classList.add("img");
    }
  }, [current]);

  return (
    <div className={classes.carouselContainer}>
      {error && (

     <div className={classes.error}>
      <h1>
      Something went wrong

      </h1>
      </div>
      )}
      {items && items.length ? (
        <div className={classes.carousel}>
          <img
            src={items[current].image}
            alt={items[current].title}
            ref={imageRef}
          />
          <CarouselDetails
            title={items[current].title}
            subTitle={items[current].subTitle}
          />

          <CarouselLeftButton
            handleSlider={handleSlider}
            hide={(current === 0 && !infinite) || items.length === 1}
          />

          <CarouselRightButton
            hide={
              (current === items.length - 1 && !infinite) || items.length === 1
            }
            handleSlider={handleSlider}
          />
        </div>
      ):null}
    </div>
  );
}
