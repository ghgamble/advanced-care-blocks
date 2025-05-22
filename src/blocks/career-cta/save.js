import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
  const nurseImage =
    (typeof window !== 'undefined' && window.acbBlockAssets?.nurseImage) ||
    '/wp-content/plugins/advanced-care-blocks/src/nurse.png';

  return (
    <div {...useBlockProps.save({ className: 'career-cta-block' })}>
      <div className="cta-wrapper">
        <div className="cta-content">
          <InnerBlocks.Content />
        </div>
        <div className="cta-image">
          <img
            src={nurseImage}
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
