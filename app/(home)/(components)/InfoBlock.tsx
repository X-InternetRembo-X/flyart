import React from "react";

type InfoBlockProps = {
  title: string;
  text: string;
  // bg: JSX.Element;
};

const InfoBlock = ({ title, text }: InfoBlockProps) => {
  return (
    <div
      className={`flex text-center h-[300px] flex-row gap-1  justify-center`}
    >
      <div className={"flex flex-col items-center gap-4 w-[700px]"}>
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
    </div>
  );
};

export default InfoBlock;
