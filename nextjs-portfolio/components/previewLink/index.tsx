'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LinkPreviewProps = {
	children: React.ReactNode;
	url: string;
	className?: string;
	width?: number;
	height?: number;
	quality?: number;
	imageSrc: string;
	isExternal?: boolean;
};

export const LinkPreview = ({ children, url, className, width = 200, height = 125, quality = 50, imageSrc, isExternal = true }: LinkPreviewProps) => {
	const [isOpen, setOpen] = React.useState(false);
	const [hoverPosition, setHoverPosition] = React.useState({ x: 0, y: 0 });
	const previewRef = React.useRef<HTMLDivElement>(null);
	const linkRef = React.useRef<HTMLAnchorElement>(null);

	const handleMouseMove = (event: React.MouseEvent) => {
		const x = event.clientX + 15;
		const y = event.clientY + 15;
		setHoverPosition({ x, y });
	};

	React.useEffect(() => {
		if (previewRef.current) {
			const previewRect = previewRef.current.getBoundingClientRect();
			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			let newX = hoverPosition.x;
			let newY = hoverPosition.y;

			if (newX + previewRect.width > viewportWidth) {
				newX = viewportWidth - previewRect.width - 15;
			}
			if (newX < 0) {
				newX = 10;
			}
			if (newY + previewRect.height > viewportHeight) {
				newY = viewportHeight - previewRect.height - 15;
			}
			if (newY < 0) {
				newY = 10;
			}

			previewRef.current.style.left = `${newX}px`;
			previewRef.current.style.top = `${newY}px`;
		}
		return () => {
			if (previewRef.current) {
				previewRef.current.style.left = '';
				previewRef.current.style.top = '';
			}
		};
	}, [hoverPosition]);

	const handleFocus = () => {
		if (linkRef.current) {
			const rect = linkRef.current.getBoundingClientRect();
			const x = rect.right + 15;
			const y = rect.top + 15;
			setHoverPosition({ x, y });
			setOpen(true);
		}
	};

	const handleBlur = () => setOpen(false);

	return (
		<>
			<span className={`relative ${className}`}>
				<Link
					href={url}
					className='text-[#769fff] font-bold no-underline'
					onMouseEnter={() => setOpen(true)}
					onMouseLeave={() => setOpen(false)}
					onMouseMove={handleMouseMove}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={linkRef}
					target={isExternal ? '_blank' : '_self'}
					rel='noopener noreferrer'
				>
					{children}
				</Link>
				<span
					ref={previewRef}
					className={`fixed z-50 shadow-xl rounded-xl transition-[opacity,_transform] duration-300 ${
						isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'
					}  hidden md:block`}
					style={{
						left: hoverPosition.x,
						top: hoverPosition.y,
						width: `${width}px`,
						height: `${height}px`,
					}}
					role='tooltip'
					aria-hidden={!isOpen}
				>
					<span className='block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800'>
						<Image
							src={imageSrc}
							width={width}
							height={height}
							quality={quality}
							className='rounded-lg'
							alt='Preview image'
							loading='lazy'
						/>
					</span>
				</span>
			</span>
		</>
	);
};
