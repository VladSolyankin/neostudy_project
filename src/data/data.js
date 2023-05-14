import { nanoid } from 'nanoid'

const headphones = [
	{
		id: nanoid(),
		img: 'src/assets/headphones_1.png',
		title: 'Apple Random AirPods',
		price: 3000,
		rate: 5.0
	},
	{
		id: nanoid(),
		img: 'src/assets/headphones_2.png',
		title: 'Samsung Cool EarPods',
		price: 2825,
		rate: 4.3
	},
	{
		id: nanoid(),
		img: 'src/assets/headphones_3.png',
		title: 'Xiaomi BadPods',
		price: 1230,
		rate: 3.1
	},
	{
		id: nanoid(),
		img: 'src/assets/headphones_1.png',
		title: 'Apple Random AirPods',
		price: 3000,
		rate: 5.0
	},
	{
		id: nanoid(),
		img: 'src/assets/headphones_2.png',
		title: 'Samsung Cool EarPods',
		price: 2825,
		rate: 4.3
	},
	{
		id: nanoid(),
		img: 'src/assets/headphones_3.png',
		title: 'Xiaomi BadPods',
		price: 1230,
		rate: 3.1
	},
]

const wirelessHeadphones = [
	{
		id: nanoid(),
		img: 'src/assets/wireless_1.png',
		title: 'Apple Random AirPods',
		price: 3000,
		rate: 5.0
	},
	{
		id: nanoid(),
		img: 'src/assets/wireless_2.png',
		title: 'Samsung Cool EarPods',
		price: 2825,
		rate: 4.3
	},
	{
		id: nanoid(),
		img: 'src/assets/wireless_3.png',
		title: 'Xiaomi BadPods',
		price: 1230,
		rate: 3.1
	},
]
export const products = {
	headphones,
	wirelessHeadphones
}