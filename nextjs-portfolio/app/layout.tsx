import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zoef Shaikh',
	description: 'Zoef Shaikh is a full-stack developer crafting visually stunning, scalable, and high-performance digital pages.',
	keywords: ['Zoef Shaikh', 'Full-stack Developer', 'developer', 'portfolio', 'Web Development', 'React.js', 'Next.js'],
	openGraph: {
		title: 'Zoef Shaikh',
		description: 'Crafting visually stunning, scalable, and high-performance digital pages.',
		url: 'https://zoef.dev',
		siteName: 'Zoef Shaikh',
		images: [
			{
				url: 'https://yourwebsite.com/og-image.png', // Add an image URL
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`${inter.className} bg-background-900 text-text-50`}>{children}</body>
		</html>
	);
}
