import {Caveat, Glory} from "next/font/google";

export const glory = Glory({ subsets: ['latin'] })

export const caveat = Caveat({
	subsets: ['latin'],
	display: 'swap',
	variable:'--font-caveat'
})