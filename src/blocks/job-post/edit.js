import {
	useBlockProps,
	RichText,
	InspectorControls,
	URLInput
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	ColorPicker
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { title, date, buttonUrl, openInNewTab, buttonColor = '#52b79a' } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Apply Button Link" initialOpen={true}>
					<URLInput
						label="Button URL"
						value={buttonUrl}
						onChange={(url) => setAttributes({ buttonUrl: url })}
					/>
					<ToggleControl
						label="Open in new tab"
						checked={openInNewTab}
						onChange={(value) => setAttributes({ openInNewTab: value })}
					/>
				</PanelBody>
				<PanelBody title="Button Color" initialOpen={false}>
					<ColorPicker
						color={buttonColor}
						onChangeComplete={(value) => setAttributes({ buttonColor: value.hex })}
						disableAlpha
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps({ className: 'job-post-block' })}>
				<div className="job-post-inner">
					<RichText
						tagName="span"
						className="job-title"
						placeholder="Role Title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<div className="job-meta">
						<RichText
							tagName="span"
							className="job-date"
							placeholder="Date Posted"
							value={date}
							onChange={(value) => setAttributes({ date: value })}
						/>
						<a
							href={buttonUrl || '#'}
							target={openInNewTab ? '_blank' : undefined}
							rel={openInNewTab ? 'noopener noreferrer' : undefined}
							className="job-button"
							style={{ backgroundColor: buttonColor }}
						>
							Apply
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
