import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from '@wordpress/block-editor';
import { Button, TextControl, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl, mediaAlt = '' } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-banner alignfull',
    role: 'region',
    'aria-label': __('Testimonial Banner', 'advancedcare'),
  });

  return (
    <>
      <InspectorControls>
        {mediaUrl && (
          <PanelBody title={__('Image Accessibility', 'advancedcare')} initialOpen={true}>
            <TextControl
              label={__('Alt text (alternative text)', 'advancedcare')}
              value={mediaAlt}
              onChange={(val) => setAttributes({ mediaAlt: val })}
              help={__('Describe the purpose of the image for screen readers.', 'advancedcare')}
            />
          </PanelBody>
        )}
      </InspectorControls>

      <div {...blockProps}>
        <div className="two-col-banner-wrapper">
          <div className="two-col-banner-image">
            {mediaUrl ? (
              <img src={mediaUrl} alt={mediaAlt || ''} />
            ) : (
              <div className="image-placeholder">
                <p>{__('No image selected', 'advancedcare')}</p>
              </div>
            )}

            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({ mediaUrl: media.url, mediaAlt: media.alt || '' })
                }
                allowedTypes={['image']}
                value={mediaUrl}
                render={({ open }) => (
                  <div className="image-controls">
                    <Button
                      onClick={open}
                      variant="secondary"
                      aria-label={
                        mediaUrl
                          ? __('Replace testimonial image', 'advancedcare')
                          : __('Upload testimonial image', 'advancedcare')
                      }
                    >
                      {mediaUrl ? __('Replace Image', 'advancedcare') : __('Upload Image', 'advancedcare')}
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
    </>
  );
}
