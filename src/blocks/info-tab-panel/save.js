import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { label, backgroundUrl, backgroundAlt } = attributes;
  const blockProps = useBlockProps.save({
    className: 'info-tab-panel-block',
    'data-label': label
  });

  return (
    <div {...blockProps}>
      {backgroundUrl && (
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        >
          <img
            src={backgroundUrl}
            alt={backgroundAlt || ''}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}

      <div className="content-container alignwide">
        <div className="content-box">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
