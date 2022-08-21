import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import classes from "./carousel.module.scss";
import { ButtonProps, SliderAction } from "../types";
export default function CarouselLeftButton(props: ButtonProps) {
  const { hide, handleSlider } = props;
  return (
    <FaChevronLeft
      size="3rem"
      className={hide ? classes.hide : classes.previous}
      color="white"
      onClick={() => handleSlider(SliderAction.PREVIOUS)}
    />
  );
}
