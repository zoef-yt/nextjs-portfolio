import { Section } from '../Section';
import { LinkPreview } from '../previewLink';
import { ChevronDownIcon } from '../svg/chevronDown';

export function About() {
	return (
		<Section id='About' className='lg:py-24 py-12 flex flex-col px-1'>
			<span className='mb-7'>
				My journey into the world of development began with my love for video games. Fascinated by how games like{' '}
				<LinkPreview url='https://www.minecraft.net' imageSrc='/minecraft.webp' isExternal>
					Minecraft
				</LinkPreview>{' '}
				work, I delved into the realm of coding. Starting with game development, I learned C# and used{' '}
				<LinkPreview url='https://unity.com' imageSrc='/unity.webp'>
					Unity
				</LinkPreview>{' '}
				to create my first mobile game. However, hardware limitations led me to pivot towards app development.
			</span>
			<span className='mb-7'>
				I explored mobile app development with{' '}
				<LinkPreview url='https://flutter.dev' imageSrc='/flutter.webp'>
					Flutter
				</LinkPreview>{' '}
				and Dart, creating visually appealing and interactive apps. Eventually, I transitioned to web development, honing my skills in{' '}
				<LinkPreview url='https://reactjs.org' imageSrc='/react.webp'>
					React.js
				</LinkPreview>
				,{' '}
				<LinkPreview url='https://nextjs.org' imageSrc='/nextjs.webp'>
					Next.js
				</LinkPreview>
				, and other modern web technologies.
			</span>
			<span className='mb-auto'>
				Today, I focus on building web applications that are both performant and accessible. I enjoy experimenting with new programming
				languages and playing video games.
			</span>
			<a href='#Experience' className='mt-auto text-center text-3xl flex gap-4 justify-center items-center'>
				<ChevronDownIcon color='white' /> Experience <ChevronDownIcon color='white' />
			</a>
		</Section>
	);
}
