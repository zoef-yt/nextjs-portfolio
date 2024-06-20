import { About } from '@/components/aboutSection';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';

export default function Home() {
	// const jsonLd = {
	// 	'@context': 'https://schema.org',
	// 	'@type': 'Product',
	// 	name: 'product.name',
	// 	image: 'product.image',
	// 	description: 'product.description',
	// };
	return (
		<div className='mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 lg:py-0 bg-background'>
{/* 			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> */}
			<div className='lg:flex lg:justify-between lg:gap-4'>
				<Header />
				<main className='flex-1'>
					<About />
					<Section id='Experience'>
						Experience
						<a href='#Projects'> To PROJECTS</a>
					</Section>
					<Section id='Projects'>Projects</Section>
				</main>
			</div>
		</div>
	);
}
