'use client'

import React from 'react';
import {caveat} from "../../../fonts/font";
import {FaRegUser} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";
import {GrFavorite, GrLanguage} from "react-icons/gr";

const Header = () => {
	return (
		<div className="h-[60px] px-[150px] bg-pink-600 z-10 fixed xl:absolute top-0 right-0 w-[100%] p-2 flex flex-row gap-2 items-center justify-between  mr-2 md:mr-0 shadow-xl  ">
			<span className={`${caveat.variable} font-sans text-white text-[48px] font-bold`}>FlyArt</span>
			<div className={'flex gap-8 text-white items-center'}>
				<button className={'bg-white h-[40px] w-[200px] font-medium text-[28px] text-slate-800 rounded-2xl'}>Auctions</button>
				<button className={'bg-white h-[40px] w-[200px] font-medium text-[24px] text-slate-800 rounded-2xl'}>Sell a painting</button>
				<span className={`font-bold cursor-pointer`}><GrLanguage size={30}/></span>
				<span className={`font-bold cursor-pointer`}><GrFavorite  size={30}/></span>
				<span className={`font-bold cursor-pointer`}><BsCart3 size={30}/></span>
				<span className={`font-bold cursor-pointer`}><FaRegUser size={30}/></span>
			</div>
		</div>
	);
};

export default Header;