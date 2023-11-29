import React from "react";
import type { Metadata } from 'next'

import Header from "./(components)/Header";

export const metadata: Metadata = {
	title: 'FlyArt Market',
	description: 'FlyArt Market',
}

export default function MarketLayout({
									   children,
								   }: {
	children: React.ReactNode
}) {
	return (
		<div className={'min-h-screen w-full bg-white flex'}>
			<div >
				<Header/>
				{children}
			</div>
		</div>
	)
}