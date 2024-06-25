import { Section } from '../Section';
import { LinkPreview } from '../previewLink';
import { GitHubIcon } from '../svg/github';
import './index.css';

export function ProjectSection() {
	const projects = [
		{
			name: 'Gamers Connect',
			description:
				'A vibrant social media platform designed for gamers to connect, share experiences, and engage in real-time discussions. Features include user profiles, posting, commenting, and live likes count.',
			link: 'https://gamers-connect.zoef.dev',
			githubLink: 'https://github.com/zoef-yt/gamers-connect',
			imgURL: '/gamers-connect.png',
		},
		{
			name: 'Game Plex',
			description:
				'A comprehensive video library app that offers a seamless experience with features such as search, like, history, watch later, playlist management, infinite scroll, and user authentication.',
			link: 'https://game-plex.zoef.dev/videos',
			githubLink: 'https://github.com/zoef-yt/game-plex-react',
			imgURL: '/game-plex.png',
		},
		{
			name: 'Need Games',
			description:
				'A robust e-commerce platform tailored for gaming products, featuring advanced search, sorting and filtering options, wishlist, cart, payment integration, and secure user authentication.',
			link: 'https://need-games.zoef.dev',
			githubLink: 'https://github.com/zoef-yt/e-commerce',
			imgURL: '/need-games.png',
		},
	];

	return (
		<Section className='lg:py-24 py-12 relative flex flex-col gap-2' id='Projects'>
			<h2 id={`Projects-heading`} className='lg:sr-only text-3xl font-bold text-center mb-9'>
				Projects
			</h2>
			<div className='flex flex-1 flex-col justify-around'>
				{projects.map(({ name, description, link, githubLink, imgURL }, index) => {
					return (
						<ProjectTile
							key={index}
							name={name}
							description={description}
							link={link}
							githubLink={githubLink}
							imgURL={imgURL}
							className={index > 1 ? 'hidden md:block' : ''}
						/>
					);
				})}
			</div>
			<div className='projects-line' />
		</Section>
	);
}

interface ProjectTileProps {
	name: string;
	description: string;
	link: string;
	githubLink: string;
	imgURL: string;
	className?: string;
}

function ProjectTile({ name, description, link, githubLink, imgURL, className = '' }: ProjectTileProps) {
	return (
		<div className={`flex flex-col px-10 relative project-tile-line ${className}`}>
			<a
				href={link}
				className='text-2xl font-semibold text-text-50 hover:underline'
				target='_blank'
				rel='noopener noreferrer'
				aria-label={name}
				title={name}
			>
				{name}
			</a>
			<p className='text-accent-300 text-xs md:text-base'>{description}</p>
			<div className='w-full flex gap-3 mt-4'>
				<a
					href={githubLink}
					className='text-accent-300 hover:underline flex-1 flex items-center justify-center gap-2 py-2 bg-accent-500 rounded-md shadow-md hover:bg-accent-400 text-white text-base md:text-lg'
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`${name} GitHub`}
					title={`${name} GitHub`}
				>
					View Code <GitHubIcon size={24} />
				</a>

				<LinkPreview
					imageSrc={imgURL}
					url={link}
					className='flex-1 text-center w-full flex justify-center items-center text-lg text-teal-200 hover:underline'
				>
					<p className='text-teal-200'>Live Demo</p>
				</LinkPreview>
			</div>
		</div>
	);
}
