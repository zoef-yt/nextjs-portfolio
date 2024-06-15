import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	// const jsonLd = {
	// 	'@context': 'https://schema.org',
	// 	'@type': 'Product',
	// 	name: 'product.name',
	// 	image: 'product.image',
	// 	description: 'product.description',
	// };
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			{/* <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> */}
			<div>Hello</div>
		</main>
	);
}
