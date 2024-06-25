interface SectionProps {
	children: React.ReactNode;
	id: string;
	className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
	return (
		<section id={id} className={`sticky top-0 min-h-screen ${className} bg-background-900`} aria-labelledby={`${id}-heading`} role='region'>
			{children}
		</section>
	);
}
