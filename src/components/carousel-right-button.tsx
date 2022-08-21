import React from "react";
import { FaChevronRight } from "react-icons/fa";
import classes from "./carousel.module.scss";
import { ButtonProps, SliderAction } from "../types";
export default function CarouselRightButton(props: ButtonProps) {
  const { hide, handleSlider } = props;
  return (
    <FaChevronRight
      size="3rem"
      className={hide ? classes.hide : classes.next}
      color="white"
      onClick={() => handleSlider(SliderAction.NEXT)}
    />
  );
}
