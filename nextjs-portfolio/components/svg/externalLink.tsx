import React from 'react';

interface ExternalLinkIconProps {
	size?: number;
	color?: string;
}

export const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ size = 24, color = 'white' }) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size} fill={color}>
		<path d='M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70712 9.70711L12.7071 4.70711L15 7L16 6V0H10Z' fill={color} />
		<path d='M1 2H6V4H3V13H12V10H14V15H1V2Z' fill={color} />
	</svg>
);
