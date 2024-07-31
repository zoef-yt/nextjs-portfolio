import RatingCardClient from './RatingCardClient';

interface BetterRatingCardProps {
	header: string;
}

export default function BetterRatingCard(prop: BetterRatingCardProps) {
	const { header = 'Better Rating' } = prop || {};
	return (
		<div className='better-rating-card'>
			<h2 className='text-xl font-semibold mb-4 text-center'>{header}</h2>
			<RatingCardClient />
		</div>
	);
}
