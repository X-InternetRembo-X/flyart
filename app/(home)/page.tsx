import React from "react";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

import InfoBlock from "./(components)/InfoBlock";

import blueBg from '/public/backgrounds/blue-paint_bg.webp'
import redBg from '/public/backgrounds/red_paint_bg.webp'
import orangeBg from '/public/backgrounds/orange_paint_bg.webp'
import greenBg from '/public/backgrounds/green_paint_bg.webp'
import homeBg from '/public/backgrounds/artistWorkshop7.jpg'
import {HomePageConstants} from "../../constants/constants";
import {caveat} from "../../fonts/font";

const BackgroundImg = ({image}:{image:StaticImageData}) => {
    return (
        <div className="w-full h-full object-cover shadow-2xl ">
            <Image className={'rounded-xl'}
                src={image}
                layout="fill"
                alt="someone stole the art :("
            />
        </div>
    );
}

export default function Home() {
  return (
      <div className={'w-full  h-full '}>
              <Image
                  src={homeBg}
                  sizes={'100vw'}
                  style={{objectFit:'cover'}}
                  layout="fill"
                  alt="someone stole the art :("
              />
          <div className={'h-[50px] w-[400px] z-20 flex justify-around items-center text-2xl font-medium absolute top-4 right-4'} >
              <Link className={'bg-black text-white p-2 rounded-md'} href={'/'}>Log In</Link>
              <Link className={'bg-black text-white p-2 rounded-md'} href={'/'}>Sign Up</Link>
              <Link className={'bg-black text-white p-2 rounded-md'} href={'/'}>Try As A Guest</Link>
          </div>



          <div className={'flex items-center flex-col h-[100vh] justify-around '}>

              <div className={'bg-white w-[600px] h-[150px] z-20 flex items-center justify-center rounded-2xl shadow-2xl'}>

			<span className={'text-[76px] '} >
				Welcome to <span className={` ${caveat.variable} font-sans text-pink-500  font-bold`}>FlyArt</span>
			</span>

              </div>

              <div className="grid grid-cols-2 justify-center gap-4 items-center mx-2  ">
                  <InfoBlock
                      title={HomePageConstants.homeBuyPaintingBlock.title}
                      text={HomePageConstants.homeBuyPaintingBlock.text}
                      bg={<BackgroundImg image={blueBg}/>}
                  />
                  <InfoBlock
                      title={HomePageConstants.homeSellYourWorksBlock.title}
                      text={HomePageConstants.homeSellYourWorksBlock.text}
                      bg={<BackgroundImg image={redBg}/>}
                  />
                  <InfoBlock
                      title={HomePageConstants.homeShareYourExperienceBlock.title}
                      text={HomePageConstants.homeShareYourExperienceBlock.text}
                      bg={<BackgroundImg image={orangeBg}/>}
                  />
                  <InfoBlock
                      title={HomePageConstants.homeBuyMaterialsAndToolsBlock.title}
                      text={HomePageConstants.homeBuyMaterialsAndToolsBlock.text}
                      bg={<BackgroundImg image={greenBg}/>}
                  />
              </div>
          </div>
      </div>
  )
}
