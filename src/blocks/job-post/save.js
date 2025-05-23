import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, date, buttonUrl, openInNewTab, buttonColor = '#52b79a' } = attributes;

	const relAttr = openInNewTab ? 'noopener noreferrer' : undefined;
	const targetAttr = openInNewTab ? '_blank' : undefined;

	return (
		<div {...useBlockProps.save({ className: 'job-post-block' })}>
			<div className="job-post-inner">
				<RichText.Content tagName="span" className="job-title" value={title} />
				<div className="job-meta">
					<RichText.Content tagName="span" className="job-date" value={date} />
					{buttonUrl && (
						<a
							href={buttonUrl}
							className="job-button"
							style={{ backgroundColor: buttonColor }}
							target={targetAttr}
							rel={relAttr}
							aria-label={`Apply for ${title || 'this position'}`}
						>
							Apply
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
