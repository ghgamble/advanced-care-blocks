import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
  return (
    <div {...useBlockProps({ className: 'career-cta-block' })}>
      <div className="cta-wrapper">
        <div className="cta-content">
          <InnerBlocks
            allowedBlocks={['core/heading', 'core/paragraph', 'core/html']}
            template={[
              ['core/heading', { placeholder: 'Join Our Team' }],
              ['core/paragraph', { placeholder: 'We’re hiring nurses, caregivers, and more.' }],
            ]}
          />
        </div>
        <div className="cta-image">
          <img
            src={`${window.acbBlockAssets?.nurseImage || '/wp-content/plugins/advanced-care-blocks/src/nurse.png'}`}
            alt=""
            role="presentation"
            aria-hidden="true"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}
