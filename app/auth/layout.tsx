import React from "react";
import type { Metadata } from 'next'
import Image from "next/image";

import {caveat} from "../../fonts/font";
import authBg from "../../public/backgrounds/artspace1.jpg";

export const metadata: Metadata = {
	title: 'FlyArt',
	description: 'Welcome to FlyArt',
}

export default function AuthLayout({
									   children,
								   }: {
	children: React.ReactNode
}) {
	return (
		<div className={'w-full h-full flex'}>
			<div>
				<Image className={'z-20'}
					   src={authBg}
					   alt="someone stole the picture :("
					   sizes={'100vw'}
					   style={{objectFit:'cover'}}
					   fill
				/>
				<div className={'absolute top-1/2 left-[5%] transform -translate-y-1/2 w-[600px] h-[600px] shadow-2xl bg-white text-white z-20 flex flex-col items-center rounded-xl'}>
					<span className={` ${caveat.variable} font-sans text-pink-500 text-[52px] font-bold z-20 pt-3`}>FlyArt</span>
					{children}
				</div>
			</div>
		</div>
	)
}
