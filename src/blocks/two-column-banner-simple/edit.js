import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  InspectorControls
} from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DEFAULT_COLOR = '#007399';

export default function Edit({ attributes, setAttributes }) {
  const {
    mediaUrl,
    mediaAlt = '',
    backgroundColor = DEFAULT_COLOR,
    gradientStopColor = DEFAULT_COLOR,
  } = attributes;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-banner-simple alignfull',
    style: {
      '--base-color': backgroundColor,
      '--gradient-stop': gradientStopColor
    },
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
        <PanelBody title="Colors" initialOpen={true}>
          <ColorPalette
            label="Base Background Color"
            value={backgroundColor}
            onChange={(color) => setAttributes({ backgroundColor: color })}
          />
          <ColorPalette
            label="Gradient Stop Color"
            value={gradientStopColor}
            onChange={(color) => setAttributes({ gradientStopColor: color })}
          />
        </PanelBody>
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
                    <Button onClick={open} variant="secondary">
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
                  template={[['core/heading', { placeholder: __('Add banner text', 'advancedcare') }]]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
