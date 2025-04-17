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
      className: 'wp-block-advancedcare-two-column-banner-simple alignfull',
    });
  
    return (
      <div {...blockProps}>
        <div className="two-col-banner-simple-wrapper">
          <div className="two-col-banner-simple-image">
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
  
          <div className="two-col-banner-simple-text">
  
            <div className="alignwide">
              <div className="inner-content">
                <InnerBlocks
                  allowedBlocks={['core/heading']}
                  template={[
                    ['core/heading', { placeholder: 'Add banner text' }]
                  ]}
                />
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  