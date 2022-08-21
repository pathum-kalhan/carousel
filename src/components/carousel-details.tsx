import React from 'react'
import classes from "./carousel.module.scss";
import {CarouselDetailsProps} from "../types"
export default function CarouselDetails(props:CarouselDetailsProps) {
    const {title,subTitle} = props;
  return (
    <div className={classes.details}>
          <h1 className={classes.title}>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
)
}
