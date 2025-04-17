import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-banner alignfull',
  });

  return (
    <div {...blockProps}>
      <div className="two-col-banner-wrapper">
        <div className="two-col-banner-image">
          {mediaUrl ? (
            <img src={mediaUrl} alt="" />
          ) : (
            <div className="image-placeholder">
              <p>No image selected</p>
            </div>
          )}

          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ mediaUrl: media.url })}
              allowedTypes={['image']}
              value={mediaUrl}
              render={({ open }) => (
                <div className="image-controls">
                  <Button onClick={open} variant="secondary">
                    {mediaUrl ? 'Replace Image' : 'Upload Image'}
                  </Button>
                </div>
              )}
            />
          </MediaUploadCheck>
        </div>

        <div className="two-col-banner-text">
          <div className="quote-icon top" aria-hidden="true">“</div>

          <div className="alignwide">
            <div className="inner-content">
              <InnerBlocks
                allowedBlocks={['core/paragraph']}
                template={[
                  ['core/paragraph', { placeholder: 'Add quote' }],
                  ['core/paragraph', { placeholder: 'Add author' }],
                ]}
              />
            </div>
          </div>

          <div className="quote-icon bottom" aria-hidden="true">”</div>
        </div>
      </div>
    </div>
  );
}
