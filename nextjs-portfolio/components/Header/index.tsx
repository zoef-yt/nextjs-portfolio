import Link from 'next/link';

import { ChevronDownIcon } from '../svg/chevronDown';
import { ExternalLinkIcon } from '../svg/externalLink';
import { LinkedInIcon } from '../svg/linkedIn';
import { GitHubIcon } from '../svg/github';
import { PeerlistSVG } from '../svg/peerlistSVG';
import { TwitterIcon } from '../svg/twitter';

export function Header() {
	return (
		<header className='sticky top-0 flex min-h-screen max-h-screen lg:w-1/2 flex-col justify-between lg:py-24 py-12 sm:py-6' role='banner'>
			<div>
				<h1 className='text-6xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
					<Link href='/'>Zoef Shaikh</Link>
				</h1>
				<h2 className='mt-4 text-2xl font-medium tracking-tight text-slate-200 sm:text-xl'>Full-Stack Developer</h2>
				<p className='mt-6 max-w-xs leading-normal text-accent-300'>
					Transforming complex problems into elegant, scalable, and high-performance digital solutions.
				</p>
				<div className='mt-10 flex gap-7 items-center'>
					<Link
						href='mailto:shaikhzoef36@gmail.com'
						className='px-6 py-2 mt-6 text-lg font-semibold text-white bg-accent-500 rounded-md shadow-md hover:bg-accent-400'
					>
						Contact Me
					</Link>
					<Link
						href='/resume.pdf'
						className='mt-6 text-teal-200 flex gap-1 items-center justify-center [&:hover_.icon]:animate-bounce hover:underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						Resume <ExternalLinkIcon size={18} className='icon' />
					</Link>
				</div>
				<div className='flex gap-6 mt-10'>
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
			<a href='#About' className='mt-auto mb-11 md:mb-0'>
				<p className='text-center text-3xl flex gap-4 justify-center items-center lg:hidden'>
					<ChevronDownIcon color='white' /> About Me <ChevronDownIcon color='white' />
				</p>
			</a>
		</header>
	);
}
