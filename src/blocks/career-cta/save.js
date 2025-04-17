import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
  return (
    <div {...useBlockProps.save({ className: 'career-cta-block' })}>
      <div className="cta-wrapper">
        <div className="cta-content">
          <InnerBlocks.Content />
        </div>
        <div className="cta-image">
          <img
            src="/wp-content/plugins/advanced-care-blocks/src/nurse.png"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
