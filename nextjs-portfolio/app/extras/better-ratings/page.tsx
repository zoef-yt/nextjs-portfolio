import { Metadata } from 'next';
import Link from 'next/link';

import BetterRatingCard from './components/BetterRatingCard';
import './components/styles.css';
import { LinkedInIcon } from '@/components/svg/linkedIn';
import { GitHubIcon } from '@/components/svg/github';
import { PeerlistSVG } from '@/components/svg/peerlistSVG';
import { TwitterIcon } from '@/components/svg/twitter';

interface SearchParamsInterface {
	searchParams: {
		header: string;
	};
}

export const metadata: Metadata = {
	title: 'Better Rating | Zoef.dev',
	description:
		'Discover a playful and interactive rating experience with the Better Rating app! Hover over the stars to see the card shift and change, adding a unique twist to the traditional rating system.',
};

export default function BetterRating(prop: SearchParamsInterface) {
	const { searchParams } = prop || {};
	return (
		<div className='flex flex-col items-center text-white relative min-h-dvh justify-between'>
			<BetterRatingCard {...searchParams} />
			<div className='flex gap-6 mb-10'>
				<Link href='/'>Home</Link>
				<p>|</p>
				<Link href='https://www.linkedin.com/in/zoef-shaikh/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
					<LinkedInIcon size={24} color='white' />
				</Link>
				<Link href='https://github.com/zoef-yt/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
					<GitHubIcon size={24} color='white' />
				</Link>
				<Link href='https://peerlist.io/zoefshaikh/' target='_blank' rel='noopener noreferrer' aria-label='Peerlist'>
					<PeerlistSVG size={24} color='white' />
				</Link>
				<Link href='https://twitter.com/zoef_yt/' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
					<TwitterIcon size={24} color='white' />
				</Link>
			</div>
		</div>
	);
}
