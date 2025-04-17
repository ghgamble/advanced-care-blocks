import {
    useBlockProps,
    InnerBlocks,
    InspectorControls
  } from '@wordpress/block-editor';
  import { PanelBody, SelectControl } from '@wordpress/components';
  import { __ } from '@wordpress/i18n';
  
  export default function Edit({ attributes, setAttributes }) {
    const { lineWidth = 'full' } = attributes;
  
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Line Settings', 'acb')}>
            <SelectControl
              label={__('Line Width')}
              value={lineWidth}
              options={[
                { label: 'Full Width', value: 'full' },
                { label: 'Half Width', value: 'half' },
              ]}
              onChange={(value) => setAttributes({ lineWidth: value })}
            />
          </PanelBody>
        </InspectorControls>
  
        <div {...useBlockProps({ className: `heading-with-hzline-block ${lineWidth}-width` })}>
          <InnerBlocks
            allowedBlocks={['core/heading']}
            template={[
              ['core/heading', { placeholder: 'Add your heading' }]
            ]}
          />
          <div className="horz-line"></div>
        </div>
      </>
    );
}
  