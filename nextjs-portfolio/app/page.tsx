import { About } from '@/components/aboutSection';
import { ExperienceSection } from '@/components/experienceSection';
import { Header } from '@/components/Header';
import { ProjectSection } from '@/components/projectSection';

export default function Home() {
	const jsonLd = {
		'@context': 'http://schema.org',
		'@type': 'Person',
		name: 'Zoef Shaikh',
		jobTitle: 'Software Engineer',
		email: 'shaikhzoef36@gmail.com',
		alternateName: 'Zoef Yt',
		url: 'https://www.zoef.dev/',
		sameAs: [
			'https://github.com/zoef-yt',
			'https://www.fullness.io/',
			'https://www.linkedin.com/in/zoef-shaikh',
			'https://instagram.com/zoef_yt',
			'https://x.com/zoef_yt',
			'https://www.facebook.com/zoefshaikh05/',
			'https://gamers-connect.zoef.dev/',
			'https://game-plex.zoef.dev/',
			'https://need-games.zoef.dev/',
			'https://peerlist.io/zoefshaikh',
			'https://www.youtube.com/@zoefgames',
			'https://www.youtube.com/@zoefyt',
			'https://www.twitch.tv/zoef_games',
			'https://www.pinterest.com/zoefyt/',
			'https://in.pinterest.com/zoefyt/',
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Mumbai',
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Valia College of Arts, Commerce And Science',
			sameAs: 'https://valiacollege.co.in/',
		},
		worksFor: {
			'@type': 'Organization',
			name: 'Fullness Web Solutions',
			url: 'https://www.fullness.io',
		},
		knowsAbout: [
			'React.js',
			'Next.js',
			'Cypress',
			'TypeScript',
			'GraphQL',
			'MongoDB',
			'Express.js',
			'KeystoneJS',
			'Remix.js',
			'Styled-components',
			'TailwindCSS',
			'Flutter',
			'Dart',
			'Firebase',
			'Node.js',
			'JavaScript',
			'HTML',
			'CSS',
			'Git',
			'GitHub',
		],
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Full-stack Developer',
			description:
				'Improved Core Web Vitals (CWV) metrics, implemented structured data using Schema.org, authored Cypress end-to-end test cases, assisted in migrating the codebase to Next.js 14, revamped UI for product iframes, and contributed to RateCity website.',
			occupationLocation: [
				{
					'@type': 'City',
					name: 'Mumbai',
				},
			],
			estimatedSalary: {
				'@type': 'MonetaryAmountDistribution',
				name: 'Estimated Salary',
				currency: 'INR',
				median: 0,
				unitText: 'YEAR',
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': 'https://www.fullness.io',
				url: 'https://www.fullness.io',
				description: 'Fullness Web Solutions official website',
				lastReviewed: '2024-06-25',
			},
		},
		mainEntityOfPage: [
			{
				'@type': 'WebPage',
				url: 'https://gamers-connect.zoef.dev/',
				name: 'Gamers Connect',
				description:
					'A social media app with features such as Create, Edit, Delete posts, Likes, Chat, Search, Explore page, Filtering, User Profile, Authentication.',
			},
			{
				'@type': 'WebPage',
				url: 'https://game-plex.zoef.dev/',
				name: 'Game plex',
				description:
					'A video library app with features such as Search, Like, History, Watch Later, Playlist management, Infinite scroll, Authentication.',
			},
			{
				'@type': 'WebPage',
				url: 'https://need-games.zoef.dev/',
				name: 'Need Games',
				description: 'An e-commerce app with features such as Search, Sort & Filter, Wishlist, Cart, Payment Integration, Authentication.',
			},
		],
	};

	return (
		<div className='mx-auto min-h-dvh max-w-screen-xl px-6 font-sans md:px-12 lg:px-24 lg:py-0'>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<div className='lg:flex lg:justify-between lg:gap-4'>
				<Header />
				<main className='lg:w-1/2'>
					<About />
					<ExperienceSection />
					<ProjectSection />
				</main>
			</div>
		</div>
	);
}
