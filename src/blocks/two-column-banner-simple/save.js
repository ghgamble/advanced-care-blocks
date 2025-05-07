import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const {
    mediaUrl,
    mediaAlt = '',
    backgroundColor = '#007399',
    gradientStopColor = '#007399'
  } = attributes;

  const blockProps = useBlockProps.save({
    className: 'wp-block-advancedcare-two-column-banner-simple alignfull',
    style: {
      '--base-color': backgroundColor,
      '--gradient-stop': gradientStopColor
    },
    role: 'region',
    'aria-label': 'Simple Two-Column Banner',
  });

  return (
    <div {...blockProps}>
      <div className="two-col-banner-simple-wrapper">
        <div className="two-col-banner-simple-image">
          <div className="gradient-overlay" aria-hidden="true"></div>
          {mediaUrl && (
            <img
              src={mediaUrl}
              alt={mediaAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
        <div className="two-col-banner-simple-text">
          <div className="alignwide">
            <div className="inner-content">
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
