import { Section } from '../Section';
import { ChevronDownIcon } from '../svg/chevronDown';
import { ExperienceTile } from './experienceTile';
import './index.css';

export const ExperienceSection = () => {
	const experience = [
		{
			name: 'Fullness Web Solutions',
			role: 'Full-stack Developer',
			duration: 'July 2022 - Present',
			description: 'Improved web performance and SEO, enhanced user interfaces, and ensured code stability with end-to-end testing.',
			skills: [
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
			],
			link: 'https://www.fullness.io',
		},
		{
			name: 'Kudosware',
			role: 'Flutter Mobile App - Intern',
			duration: 'April 2021 - Sep 2021',
			description:
				'Developed and maintained mobile applications using Flutter and Dart, integrated Firebase for authentication, and managed state using BLoC.',
			skills: ['Flutter', 'Dart', 'Firebase', 'GitHub', 'Facebook API'],
			link: 'https://kudosware.com',
		},
	];

	return (
		<Section className='lg:py-24 py-12 relative flex flex-col gap-2' id='Experience'>
			<h2 id={`Experience-heading`} className='lg:sr-only text-3xl font-bold text-center mb-9'>
				Experience
			</h2>
			<div className='flex flex-1 flex-col justify-around'>
				{experience.map(({ name, description, duration, role, skills, link }, index) => {
					return (
						<ExperienceTile
							name={name}
							description={description}
							duration={duration}
							role={role}
							skills={skills}
							link={link}
							key={index}
						/>
					);
				})}
			</div>
			<a
				href='#Projects'
				className='mt-auto text-3xl flex gap-4 justify-center items-center mb-10 md:mb-0'
				aria-label='Scroll to Projects section'
			>
				<ChevronDownIcon color='white' />
				Projects
				<ChevronDownIcon color='white' />
			</a>
			<div className='experience-line' />
		</Section>
	);
};
