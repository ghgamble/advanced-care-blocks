import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  InspectorControls
} from '@wordpress/block-editor';
import { Button, TextControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl, mediaAlt = '' } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-banner-simple alignfull',
    role: 'region',
    'aria-label': __('Simple Two-Column Banner', 'advancedcare'),
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
        <div className="two-col-banner-simple-wrapper">
          <div className="two-col-banner-simple-image">
            {mediaUrl ? (
              <img src={mediaUrl} alt={mediaAlt} />
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
                          ? __('Replace banner image', 'advancedcare')
                          : __('Upload banner image', 'advancedcare')
                      }
                    >
                      {mediaUrl ? __('Replace Image', 'advancedcare') : __('Upload Image', 'advancedcare')}
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
                    ['core/heading', { placeholder: __('Add banner text', 'advancedcare') }]
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
