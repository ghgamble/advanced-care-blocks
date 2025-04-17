import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { mediaUrl } = attributes;

  const blockProps = useBlockProps.save({
    className: 'wp-block-advancedcare-two-column-cta alignfull',
  });

  return (
    <div {...blockProps}>
      <div className="two-col-cta-wrapper">
        <div className="two-col-cta-text">
          <div className="alignwide">
            <div className="inner-content">
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
        <div className="two-col-cta-image">
          {mediaUrl && (
            <img
              src={mediaUrl}
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
