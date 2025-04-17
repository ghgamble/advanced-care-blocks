import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	ColorPalette
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DEFAULT_BG = '#282B35';

export default function Edit({ attributes, setAttributes }) {
	const { backgroundColor = DEFAULT_BG } = attributes;

	const blockProps = useBlockProps({
		className: 'contact-section-block alignfull',
		style: { backgroundColor }
	});

	const template = [
		[
			'core/group',
			{ className: 'contact-left' },
			[
				['core/heading', { placeholder: 'Contact us' }],
				['core/paragraph', { placeholder: 'Write a short intro paragraph...' }]
			]
		],
		[
			'core/group',
			{ className: 'contact-right', layout: { type: 'default' } },
			[
				['contact-form-7/contact-form-selector']
			]
		]
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Background Color', 'acb')} initialOpen={true}>
					<ColorPalette
						value={backgroundColor}
						onChange={(color) => setAttributes({ backgroundColor: color })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} as="section" aria-label="Contact Section">
				<div className="o-container contact-section-inner">
					<InnerBlocks
						template={template}
						templateLock={false}
					/>
				</div>
			</div>
		</>
	);
}
