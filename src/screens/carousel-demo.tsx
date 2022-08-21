import React from "react";
import Carousel from "../components/carousel";
export default function CarouselDemo() {
  return (
    <div>
      <Carousel infinite={false} slides={1} />
      <Carousel infinite={true} slides={4} />
      <Carousel infinite={false} slides={10} />
    </div>
  );
}
