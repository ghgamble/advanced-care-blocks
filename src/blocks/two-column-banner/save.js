import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { mediaUrl, mediaAlt = '' } = attributes;

  const blockProps = useBlockProps.save({
    className: 'wp-block-advancedcare-two-column-banner alignfull',
    role: 'region',
    'aria-label': 'Testimonial Banner',
  });

  return (
    <div {...blockProps}>
      <div className="two-col-banner-wrapper">
        <div className="two-col-banner-image">
          <div className="gradient-overlay" aria-hidden="true"></div>
          {mediaUrl && (
            <img
              src={mediaUrl}
              alt={mediaAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        <div className="two-col-banner-text">
          <div className="quote-icon top" aria-hidden="true">“</div>

          <div className="alignwide">
            <div className="inner-content">
              <InnerBlocks.Content />
            </div>
          </div>

          <div className="quote-icon bottom" aria-hidden="true">”</div>
        </div>
      </div>
    </div>
  );
}
