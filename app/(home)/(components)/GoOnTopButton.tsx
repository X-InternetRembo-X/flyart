import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type GoOnTopButtonProps = {
  show: boolean;
};

const GoOnTopButton = ({ show }: GoOnTopButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scrollToTop()}
      className={twMerge(
        "fixed bottom-8 right-[-50px] w-[50px] h-[50px] flex items-center justify-center z-50 buttonMain cursor-pointer !rounded-full transition-all duration-700",
        show && "right-16",
      )}
    >
      <FaAngleUp size={30} />
    </button>
  );
};

export default GoOnTopButton;
