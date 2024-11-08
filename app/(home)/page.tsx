"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import homeBg from "/public/backgrounds/artistWorkshop7.jpg";
import drawing1 from "../../asets/1679518664_bogatyr-club-p-rozovaya-klyaksa-foni-vkontakte-15.png";
import drawing2 from "../../asets/1679518738_bogatyr-club-p-rozovaya-klyaksa-foni-vkontakte-46.png";
import drawing3 from "../../asets/1679518771_bogatyr-club-p-rozovaya-klyaksa-foni-vkontakte-76.png";
import drawing4 from "../../asets/1679518716_bogatyr-club-p-rozovaya-klyaksa-foni-vkontakte-44.png";

import InfoBlock from "@/app/(home)/(components)/InfoBlock";
import { HomePageConstants } from "@/constants/constants";
import HomePageFooter from "@/app/(home)/(components)/HomePageFooter";
import GoOnTopButton from "@/app/(home)/(components)/GoOnTopButton";

export default function Home() {
  const [showGoOnTopButton, setShowGoOnTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoOnTopButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={"w-full relative  h-full overflow-y-hidden hiddenScrollBar"}
    >
      <div
        className={"fixed"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Image
          src={homeBg}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          layout="fill"
          alt="someone stole the art :("
        />
      </div>

      <GoOnTopButton show={showGoOnTopButton} />

      <div
        className={
          "h-[50px] fixed top w-[400px] z-20 flex justify-around items-center text-2xl font-medium  top-4 right-4"
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
            "bg-white  w-[600px] h-[150px] z-20 flex items-center justify-center rounded-2xl shadow-2xl"
          }
        >
          <span className={"text-[76px]"}>
            Welcome to
            <span
              className={`  text-caveat font-sans text-pink-500 ml-2  font-bold`}
            >
              FlyArt
            </span>
          </span>
        </div>
      </div>

      <div className={"flex flex-col"}>
        <InfoBlock
          text={HomePageConstants.homeBuyPaintingBlock.text}
          title={HomePageConstants.homeBuyPaintingBlock.title}
          image={drawing1}
        />
        <InfoBlock
          text={HomePageConstants.homeSellYourWorksBlock.text}
          title={HomePageConstants.homeSellYourWorksBlock.title}
          toEnd={true}
          image={drawing2}
        />
        <InfoBlock
          text={HomePageConstants.homeShareYourExperienceBlock.text}
          title={HomePageConstants.homeShareYourExperienceBlock.title}
          image={drawing3}
        />
        <InfoBlock
          text={HomePageConstants.homeBuyMaterialsAndToolsBlock.text}
          title={HomePageConstants.homeBuyMaterialsAndToolsBlock.title}
          toEnd={true}
          image={drawing4}
        />
      </div>

      <HomePageFooter />
    </div>
  );
}
