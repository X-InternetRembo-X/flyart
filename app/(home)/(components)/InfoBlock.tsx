import React from "react";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";
import Image from "next/image";

type InfoBlockProps = {
  title: string;
  text: string;
  // bg: JSX.Element;
  toEnd?: boolean;
  image: StaticImageData | string;
  isVisible: boolean;
};

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  text,
  toEnd,
  image,
  isVisible,
}) => {
  return (
    <div
      className={twMerge(
        `flex text-center items-center justify-center relative flex-row gap-2 w-full  p-2`,
        toEnd ? "flex-row-reverse" : "flex-row",
        isVisible ? "bg-amber-400" : "",
      )}
    >
      <div
        className={twMerge(
          "flex  flex-col items-center gap-4  w-1/2",
          toEnd ? "mr-[200px]" : "ml-[200px]",
        )}
      >
        <h4
          className={
            "text-[42px] font-semibold bg-white bg-opacity-70 p-2 rounded-xl"
          }
        >
          {title}
        </h4>
        <p
          className={
            "bg-white bg-opacity-70 p-2 rounded-xl text-[18px] font-semibold"
          }
        >
          {text}
        </p>
      </div>
      <Image className={"!w-fit"} src={image} alt={title} layout="intrinsic " />
    </div>
  );
};

export default InfoBlock;
