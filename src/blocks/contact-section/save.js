import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { backgroundColor = '#282B35' } = attributes;

	return (
		<>
			<div
				{...useBlockProps.save({
					className: 'contact-section-block alignfull',
					style: { backgroundColor }
				})}
			>
				<div className="o-container contact-section-inner">
					{/* This will output both groups */}
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
