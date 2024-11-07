import React from "react";
import Link from "next/link";
import Image from "next/image";

import homeBg from "/public/backgrounds/artistWorkshop7.jpg";
import { caveat } from "../../fonts/font";

export default function Home() {
  return (
    <div className={"w-full  h-full "}>
      <Image
        src={homeBg}
        sizes={"100vw"}
        style={{ objectFit: "cover" }}
        layout="fill"
        alt="someone stole the art :("
      />
      <div
        className={
          "h-[50px] w-[400px] z-20 flex justify-around items-center text-2xl font-medium absolute top-4 right-4"
        }
      >
        <Link className={"buttonMain"} href={"/"}>
          Log In
        </Link>
        <Link className={"buttonMain"} href={"/"}>
          Sign Up
        </Link>
        <Link className={"buttonMain"} href={"/"}>
          Try As A Guest
        </Link>
      </div>

      <div className={"flex items-center flex-col h-[100vh] justify-around "}>
        <div
          className={
            "bg-white w-[600px] h-[150px] z-20 flex items-center justify-center rounded-2xl shadow-2xl"
          }
        >
          <span className={"text-[56px]"}>
            Welcome to
            <span
              className={` ${caveat.variable} font-sans text-pink-500 ml-2  font-bold`}
            >
              FlyArt
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
