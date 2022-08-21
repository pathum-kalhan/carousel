export type Props = {
  slides: number;
  infinite: boolean;
};

export interface CarouselItem {
  image: string;
  title: string;
  subTitle: string;
}

export enum SliderAction {
  NEXT = "NEXT",
  PREVIOUS = "PREVIOUS",
}

export type CarouselDetailsProps = {
    title: string;
    subTitle: string;
  };

  export type ButtonProps = {
   hide:boolean;
    handleSlider:(action:SliderAction)=>void
  };
