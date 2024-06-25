import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://zoef.dev'),
	title: 'Zoef Shaikh',
	description:
		'Zoef Shaikh is a software engineer specializing in full-stack development, known for improving web performance and creating scalable digital solutions.',
	keywords: [
		'Zoef Shaikh',
		'Full-stack Developer',
		'Software Engineer',
		'portfolio',
		'Web Development',
		'React.js',
		'Next.js',
		'Cypress',
		'GraphQL',
		'MongoDB',
	],
	openGraph: {
		title: 'Zoef Shaikh',
		description: 'Crafting visually stunning, scalable, and high-performance digital pages.',
		url: 'https://zoef.dev',
		siteName: 'Zoef Shaikh',
		images: [
			{
				url: 'https://www.zoef.dev/me.jpg',
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zoef Shaikh',
		description: 'Crafting visually stunning, scalable, and high-performance digital pages.',
		images: [
			{
				url: 'https://www.zoef.dev/me.jpg',
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<link rel='manifest' href='/site.webmanifest' />
			<body className={`${inter.className} bg-background-900 text-text-50`}>{children}</body>
		</html>
	);
}
