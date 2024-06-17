interface SectionProps {
	children: React.ReactNode;
	id: string;
	className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
	return (
		<section id={id} className={`sticky top-0 min-h-screen ${className} bg-background-900`} aria-labelledby={`${id}-heading`} role='region'>
			<h2 id={`${id}-heading`} className='lg:sr-only text-3xl font-bold text-center mb-9'>
				{id}
			</h2>
			{children}
		</section>
	);
}
