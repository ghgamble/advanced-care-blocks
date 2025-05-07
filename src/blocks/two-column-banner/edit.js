import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
  InspectorControls
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  ColorPicker
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const {
    mediaUrl,
    mediaAlt = '',
    backgroundColor = '#007399',
    gradientEndColor = '#007399'
  } = attributes;

  const overlayGradient = `linear-gradient(
    to right,
    rgba(0, 115, 153, 0) 0%,
    rgba(0, 115, 153, 0) 59.99%,
    rgba(0, 115, 153, 0.3) 65%,
    rgba(0, 115, 153, 0.6) 72%,
    ${gradientEndColor} 100%
  )`;

  const blockProps = useBlockProps({
    className: 'wp-block-advancedcare-two-column-banner alignfull',
    role: 'region',
    'aria-label': __('Testimonial Banner', 'advancedcare')
  });

  return (
    <>
      <InspectorControls>
        {mediaUrl && (
          <PanelBody title={__('Image Accessibility', 'advancedcare')} initialOpen={false}>
            <input
              type="text"
              value={mediaAlt}
              onChange={(e) => setAttributes({ mediaAlt: e.target.value })}
              placeholder={__('Alt text', 'advancedcare')}
            />
          </PanelBody>
        )}

        <PanelBody title={__('Background Styling', 'advancedcare')} initialOpen={true}>
          <label>{__('Banner Background Color', 'advancedcare')}</label>
          <ColorPicker
            color={backgroundColor}
            onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
            disableAlpha
          />
          <div style={{ marginTop: '1rem' }}></div>
          <label>{__('Gradient Overlay End Color', 'advancedcare')}</label>
          <ColorPicker
            color={gradientEndColor}
            onChangeComplete={(value) => setAttributes({ gradientEndColor: value.hex })}
            disableAlpha
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="two-col-banner-wrapper" style={{ background: `${backgroundColor} !important` }}>
          <div className="two-col-banner-image">
            <div
              className="gradient-overlay"
              aria-hidden="true"
              style={{ background: `${overlayGradient} !important` }}
            ></div>

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
                    <Button onClick={open} variant="secondary">
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
