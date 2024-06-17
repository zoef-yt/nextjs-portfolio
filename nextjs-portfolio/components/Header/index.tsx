import Link from 'next/link';

import { ChevronDownIcon } from '../svg/chevronDown';
import { ExternalLinkIcon } from '../svg/externalLink';

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
						className='px-6 py-2 mt-6 text-lg font-semibold text-white bg-accent-500 rounded-md shadow-md hover:bg-accent-400 dark:hover:bg-accent-600'
					>
						Contact Me
					</Link>

					<Link
						href='/resume.pdf'
						className='mt-6 text-accent-300 hover:text-accent-500 dark:hover:text-accent-400 flex gap-1 items-center justify-center'
						target='_blank'
						rel='noopener noreferrer'
					>
						Resume <ExternalLinkIcon size={16} />
					</Link>
				</div>
			</div>
			<a href='#About' className='mt-auto'>
				<p className='text-center text-3xl flex gap-4 justify-center items-center lg:hidden'>
					<ChevronDownIcon color='white' /> About Me <ChevronDownIcon color='white' />
				</p>
			</a>
		</header>
	);
}
