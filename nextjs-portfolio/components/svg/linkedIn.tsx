import React from 'react';

interface LinkedInIconProps {
	className?: string;
	color?: string;
	size?: number;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = '', color = 'currentColor', size = 24 }) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size} fill={color} className={className}>
		<path d='M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46C23.21 24 24 23.22 24 22.25V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V8.98h3.56v11.47zM5.34 7.51c-1.14 0-2.06-.93-2.06-2.07 0-1.14.93-2.06 2.06-2.06 1.14 0 2.07.93 2.07 2.06-.01 1.14-.93 2.07-2.07 2.07zM20.45 20.45h-3.56v-5.63c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.73h-3.56V8.98h3.42v1.57h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.23h-.02z' />
	</svg>
);
