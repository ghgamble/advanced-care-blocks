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
      className: 'wp-block-advancedcare-two-column-cta alignfull',
    });
  
    return (
      <div {...blockProps}>
        <div className="two-col-cta-wrapper">
          <div className="two-col-cta-text">
            <div className="alignwide">
              <div className="inner-content">
                <InnerBlocks
                  allowedBlocks={['core/heading', 'core/paragraph', 'core/buttons']}
                  template={[
                    ['core/heading', { placeholder: 'Events & Lifestyle' }],
                    ['core/paragraph', { placeholder: 'Add description...' }],
                    ['core/buttons'],
                  ]}
                />
              </div>
            </div>
          </div>
  
          <div className="two-col-cta-image">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => setAttributes({ mediaUrl: media.url })}
                allowedTypes={['image']}
                value={mediaUrl}
                render={({ open }) => (
                  <>
                    {mediaUrl ? (
                      <div className="image-wrapper">
                        <img src={mediaUrl} alt="" />
                        <Button
                          onClick={open}
                          variant="secondary"
                          className="image-button"
                        >
                          Replace Image
                        </Button>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <Button onClick={open} variant="primary">
                          Upload Image
                        </Button>
                      </div>
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          </div>
        </div>
      </div>
    );
}
  