import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  InspectorControls,
} from '@wordpress/block-editor';
import { Button, TextControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl, mediaAlt = '' } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-cta alignfull',
    role: 'region',
    'aria-label': __('Two Column Call to Action Block', 'advancedcare'),
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
              help={__('Describe the image’s purpose for screen readers.', 'advancedcare')}
            />
          </PanelBody>
        )}
      </InspectorControls>

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
                onSelect={(media) =>
                  setAttributes({
                    mediaUrl: media.url,
                    mediaAlt: media.alt || '',
                  })
                }
                allowedTypes={['image']}
                value={mediaUrl}
                render={({ open }) => (
                  <>
                    {mediaUrl ? (
                      <div className="image-wrapper">
                        <img src={mediaUrl} alt={mediaAlt} />
                        <Button
                          onClick={open}
                          variant="secondary"
                          className="image-button"
                          aria-label={__('Replace image', 'advancedcare')}
                        >
                          {__('Replace Image', 'advancedcare')}
                        </Button>
                      </div>
                    ) : (
                      <div className="image-placeholder">
                        <Button
                          onClick={open}
                          variant="primary"
                          aria-label={__('Upload image', 'advancedcare')}
                        >
                          {__('Upload Image', 'advancedcare')}
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
    </>
  );
}
