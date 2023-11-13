'use client'
import React from 'react';

type InfoBlockProps = {
	title:string,
	text:string,
	bg:JSX.Element,
}

const InfoBlock = ({ title, bg, text }: InfoBlockProps) => {
	return (
		<div className={`flex text-center h-[300px] flex-row gap-1  bg-white w-[700px]`}>
			<div className="w-[700px] h-[300px] relative  ">
				<div className={'text-white absolute top-0 left-0 w-full h-full z-20 m-2 font-bold'}>
					<h1 className={'text-[42px] mb-3 drop-shadow-2xl'}>{title}</h1>
					<p className="  mx-5 text-2xl drop-shadow-2xl">{text}</p>
				</div>
				{bg}
			</div>
		</div>
	);
};


export default InfoBlock;