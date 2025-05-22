import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
  const blockProps = useBlockProps({ className: 'career-cta-block' });

  const nurseImage =
    typeof window !== 'undefined' && window.acbBlockAssets?.nurseImage
      ? window.acbBlockAssets.nurseImage
      : '/wp-content/plugins/advanced-care-blocks/src/nurse.png';

  return (
    <div {...blockProps}>
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
            src={nurseImage}
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
