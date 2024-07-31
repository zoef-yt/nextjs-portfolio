'use client';

import React, { useState } from 'react';

export default function RatingCardClient() {
	const [shiftClass, setShiftClass] = useState('');
	const [reverse, setReverse] = useState(false);

	const handleMouseEnter = (index: number) => {
		if (index === 4) {
			setReverse(false);
			setShiftClass('-translate-x-[14rem] btn');
		} else if (index === 3) {
			setReverse(true);
			setShiftClass('-translate-x-[1rem] btn');
		} else if (index === 2) {
			setReverse(true);
			setShiftClass('translate-x-[-5rem] btn');
		} else if (index === 1) {
			setReverse(true);
			setShiftClass('btn');
		} else {
			setShiftClass('btn');
			setReverse(false);
		}
	};

	const handleMouseLeave = () => {
		setShiftClass('');
		setReverse(false);
	};

	return (
		<div className='transform transition-transform duration-100 relative overflow-hidden p-3'>
			<div
				className={`flex gap-[1rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 -z-10 ${shiftClass} opacity-100`}
			>
				{Array.from({ length: 5 })
					.map((_, index) => (reverse ? 4 - index + 1 : index + 1))
					.map((value, index) => (
						<button key={index} className='rounded-full w-8 h-8 rating-icon rating-icon-selected flex items-center justify-center'>
							{value}
						</button>
					))}
			</div>
			<div className={`flex gap-[1rem] justify-center opacity-0`}>
				{Array.from({ length: 5 }).map((_, index) => (
					<button
						key={index}
						className='rounded-full w-8 h-8 rating-icon'
						onMouseEnter={() => handleMouseEnter(index + 1)}
						onMouseLeave={handleMouseLeave}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
}
