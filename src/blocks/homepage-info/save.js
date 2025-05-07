import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		mediaUrl,
		mediaAlt,
		quote,
		quoteColor,
		quoteFontSize,
		quoteLineHeight,
		quoteWeight,
		author,
		authorColor,
		authorFontSize,
		authorLineHeight,
		authorWeight,
		description,
		descriptionColor,
		descriptionFontSize,
		descriptionLineHeight,
		descriptionWeight,
		backgroundGradient,
	} = attributes;

	return (
		<div {...useBlockProps.save({ className: 'homepage-info-block alignfull' })}>
			{/* Top section */}
			<section
				className="top-section"
				style={{ background: backgroundGradient }}
				role="region"
				aria-labelledby="homepage-info-quote"
			>
				<div className="alignwide content-row">
					<div className="image-column">
						{mediaUrl && <img src={mediaUrl} alt={mediaAlt || ''} />}
					</div>
					<div className="text-column">
						<RichText.Content
							tagName="h2"
							id="homepage-info-quote"
							className="quote"
							value={quote}
							style={{
								color: quoteColor || undefined,
								fontSize: quoteFontSize ? `${quoteFontSize}px` : undefined,
								lineHeight: quoteLineHeight || undefined,
								fontWeight: quoteWeight || undefined,
							}}
						/>
						<RichText.Content
							tagName="p"
							className="author"
							value={author}
							style={{
								color: authorColor || undefined,
								fontSize: authorFontSize ? `${authorFontSize}px` : undefined,
								lineHeight: authorLineHeight || undefined,
								fontWeight: authorWeight || undefined,
							}}
						/>
						<RichText.Content
							tagName="p"
							className="description"
							value={description}
							style={{
								color: descriptionColor || undefined,
								fontSize: descriptionFontSize ? `${descriptionFontSize}px` : undefined,
								lineHeight: descriptionLineHeight || undefined,
								fontWeight: descriptionWeight || undefined,
							}}
						/>
					</div>
				</div>
			</section>

			{/* Bottom section */}
			<section className="bottom-section" role="region" aria-label="Additional Content Section">
				<div className="alignwide">
					<div className="custom-content">
						<InnerBlocks.Content />
					</div>
				</div>
			</section>
		</div>
	);
}
