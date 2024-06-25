import { ExternalLinkIcon } from '@/components/svg/externalLink';

interface ExperienceTileProps {
	name: string;
	role: string;
	duration: string;
	description: string;
	skills: string[];
	link: string;
}

export function ExperienceTile({ name, role, duration, description, skills, link }: ExperienceTileProps) {
	return (
		<a className='px-10 experience-tile-line relative' href={link} target='_blank' rel='noopener noreferrer' aria-label={name} title={name}>
			<div className='flex items-center gap-2'>
				<p className='text-2xl font-bold'>{name}</p>
				<ExternalLinkIcon size={16} className='icon block md:hidden md:animate-bounce' />
			</div>
			<div className='flex gap-2 text-teal-200 font-light flex-col md:flex-row'>
				<p>{role}</p>
				<p className='hidden md:block'>&middot;</p>
				<p className='hidden md:block'>{duration}</p>
			</div>
			<div className='pl-7 text-gray-400 mt-2'>{description}</div>
			<div className='pl-7 flex gap-2 w-full flex-wrap mt-2'>
				{skills.map((name, index) => {
					return (
						<p className='p-1 px-2 bg-secondary-400 text-black rounded-md text-sm' key={index}>
							{name}
						</p>
					);
				})}
			</div>
		</a>
	);
}
