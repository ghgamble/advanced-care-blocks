import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  MediaUpload,
  RichText,
  PanelColorSettings,
  InspectorControls,
  InnerBlocks
} from '@wordpress/block-editor';
import {
  Button,
  PanelBody,
  SelectControl,
  RangeControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const {
    mediaUrl,
    mediaAlt,
    quote,
    quoteColor,
    quoteFontSize,
    quoteLineHeight,
    quoteWeight,
    author,
    authorColor,
    authorFontSize,
    authorLineHeight,
    authorWeight,
    description,
    descriptionColor,
    descriptionFontSize,
    descriptionLineHeight,
    descriptionWeight,
    backgroundGradient
  } = attributes;

  const blockProps = useBlockProps({ className: 'alignfull homepage-info-block' });

  return (
    <>
      <InspectorControls>
        {/* Background Gradient */}
        <PanelBody title="Background Gradient" initialOpen={false}>
          <textarea
            value={backgroundGradient}
            onChange={(e) => setAttributes({ backgroundGradient: e.target.value })}
            placeholder="e.g. linear-gradient(to right, #036938, #8DC43F)"
            rows={3}
            style={{ width: '100%', fontFamily: 'monospace' }}
          />
        </PanelBody>

        {/* Quote */}
        <PanelBody title="Quote Text Settings" initialOpen={false}>
          <RangeControl
            label="Font Size (px)"
            value={quoteFontSize}
            onChange={(size) => setAttributes({ quoteFontSize: size })}
            min={12}
            max={80}
            step={1}
          />
          <RangeControl
            label="Line Height"
            value={quoteLineHeight || 1.4}
            onChange={(val) => setAttributes({ quoteLineHeight: val })}
            min={1}
            max={2.5}
            step={0.1}
          />
          <SelectControl
            label="Font Weight"
            value={quoteWeight}
            options={[
              { label: 'Default (700)', value: '' },
              { label: 'Normal (400)', value: '400' },
              { label: 'Light (300)', value: '300' },
              { label: 'Bold (700)', value: '700' }
            ]}
            onChange={(val) => setAttributes({ quoteWeight: val })}
          />
          <PanelColorSettings
            title="Text Color"
            colorSettings={[{
              value: quoteColor,
              onChange: (color) => setAttributes({ quoteColor: color }),
              label: 'Quote Color'
            }]}
          />
        </PanelBody>

        {/* Author */}
        <PanelBody title="Author Text Settings" initialOpen={false}>
          <RangeControl
            label="Font Size (px)"
            value={authorFontSize}
            onChange={(size) => setAttributes({ authorFontSize: size })}
            min={12}
            max={80}
            step={1}
          />
          <RangeControl
            label="Line Height"
            value={authorLineHeight || 1.4}
            onChange={(val) => setAttributes({ authorLineHeight: val })}
            min={1}
            max={2.5}
            step={0.1}
          />
          <SelectControl
            label="Font Weight"
            value={authorWeight}
            options={[
              { label: 'Default (600)', value: '' },
              { label: 'Normal (400)', value: '400' },
              { label: 'Light (300)', value: '300' },
              { label: 'Bold (700)', value: '700' }
            ]}
            onChange={(val) => setAttributes({ authorWeight: val })}
          />
          <PanelColorSettings
            title="Text Color"
            colorSettings={[{
              value: authorColor,
              onChange: (color) => setAttributes({ authorColor: color }),
              label: 'Author Color'
            }]}
          />
        </PanelBody>

        {/* Description */}
        <PanelBody title="Description Text Settings" initialOpen={false}>
          <RangeControl
            label="Font Size (px)"
            value={descriptionFontSize}
            onChange={(size) => setAttributes({ descriptionFontSize: size })}
            min={12}
            max={80}
            step={1}
          />
          <RangeControl
            label="Line Height"
            value={descriptionLineHeight || 1.4}
            onChange={(val) => setAttributes({ descriptionLineHeight: val })}
            min={1}
            max={2.5}
            step={0.1}
          />
          <SelectControl
            label="Font Weight"
            value={descriptionWeight}
            options={[
              { label: 'Default (400)', value: '' },
              { label: 'Normal (400)', value: '400' },
              { label: 'Light (300)', value: '300' },
              { label: 'Bold (700)', value: '700' }
            ]}
            onChange={(val) => setAttributes({ descriptionWeight: val })}
          />
          <PanelColorSettings
            title="Text Color"
            colorSettings={[{
              value: descriptionColor,
              onChange: (color) => setAttributes({ descriptionColor: color }),
              label: 'Description Color'
            }]}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="top-section" style={{ background: backgroundGradient }}>
          <div className="alignwide content-row">
            <div className="image-column">
              <MediaUpload
                onSelect={(media) => setAttributes({ mediaUrl: media.url, mediaAlt: media.alt || '' })}
                type="image"
                value={mediaUrl}
                render={({ open }) => (
                  <div
                    onClick={open}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
                    role="button"
                    tabIndex={0}
                    className="image-upload"
                    aria-label={__('Upload or edit image', 'homepage-info')}
                  >
                    {mediaUrl ? <img src={mediaUrl} alt={mediaAlt} /> : <Button variant="secondary">{__('Upload Image', 'homepage-info')}</Button>}
                  </div>
                )}
              />
            </div>
            <div className="text-column">
              <RichText
                tagName="h2"
                className="quote"
                value={quote}
                onChange={(value) => setAttributes({ quote: value })}
                placeholder={__('“Quote”', 'homepage-info')}
                aria-label="Quote text"
                style={{ color: quoteColor, fontSize: quoteFontSize ? `${quoteFontSize}px` : undefined, lineHeight: quoteLineHeight, fontWeight: quoteWeight }}
              />
              <RichText
                tagName="p"
                className="author"
                value={author}
                onChange={(value) => setAttributes({ author: value })}
                placeholder={__('Author, Title', 'homepage-info')}
                aria-label="Author name and title"
                style={{ color: authorColor, fontSize: authorFontSize ? `${authorFontSize}px` : undefined, lineHeight: authorLineHeight, fontWeight: authorWeight }}
              />
              <RichText
                tagName="p"
                className="description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder={__('Add a paragraph about your facility...', 'homepage-info')}
                aria-label="Description text"
                style={{ color: descriptionColor, fontSize: descriptionFontSize ? `${descriptionFontSize}px` : undefined, lineHeight: descriptionLineHeight, fontWeight: descriptionWeight }}
              />

              {/* InnerBlocks go directly under the description */}
              <div className="custom-content">
                <InnerBlocks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}