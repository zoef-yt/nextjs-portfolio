import React from 'react';

interface PeerlistSVGProps {
	className?: string;
	color?: string;
	size?: number;
}

export const PeerlistSVG: React.FC<PeerlistSVGProps> = ({ className = '', color = 'black', size = 48 }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={(size * 49) / 48} // Maintain the aspect ratio
		viewBox='0 0 48 49'
		fill='none'
		className={className}
	>
		<path
			d='M18 34.5V14.5H26C27.5913 14.5 29.1174 15.1321 30.2426 16.2574C31.3679 17.3826 32 18.9087 32 20.5C32 22.0913 31.3679 23.6174 30.2426 24.7426C29.1174 25.8679 27.5913 26.5 26 26.5H18'
			stroke={color}
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M24 6C38.8 6 42.5 9.7 42.5 24.5C42.5 39.3 38.8 43 24 43C9.2 43 5.5 39.3 5.5 24.5C5.5 9.7 9.2 6 24 6Z'
			stroke={color}
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
