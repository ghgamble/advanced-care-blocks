import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  MediaUpload,
  RichText,
  PanelColorSettings,
  InspectorControls
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
    stats = [],
    statNumberColor,
    statNumberFontSize,
    statNumberLineHeight,
    statNumberWeight,
    statTextColor,
    statTextFontSize,
    statTextLineHeight,
    statTextWeight,
  } = attributes;

  const updateStat = (index, key, value) => {
    const updated = [...stats];
    updated[index][key] = value;
    setAttributes({ stats: updated });
  };

  const addStat = () => {
    const updated = [
      ...stats,
      { number: __('Stat Number', 'homepage-info'), text: __('Stat description', 'homepage-info') },
    ];
    setAttributes({ stats: updated });
  };

  const removeStat = (index) => {
    const updated = stats.filter((_, i) => i !== index);
    setAttributes({ stats: updated });
  };

  const blockProps = useBlockProps({ className: 'alignfull homepage-info-block' });

  return (
    <>
      <InspectorControls>

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
            colorSettings={[
              {
                value: quoteColor,
                onChange: (color) => setAttributes({ quoteColor: color }),
                label: 'Quote Color'
              }
            ]}
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
            onChange={(val) => setAttributes({ quoteWeight: val })}
          />

          <PanelColorSettings
            title="Text Color"
            colorSettings={[
              {
                value: authorColor,
                onChange: (color) => setAttributes({ authorColor: color }),
                label: 'Author Color'
              }
            ]}
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
            colorSettings={[
              {
                value: descriptionColor,
                onChange: (color) => setAttributes({ descriptionColor: color }),
                label: 'Description Color'
              }
            ]}
          />
        </PanelBody>

        {/* Stat Number */}

        <PanelBody title="Stat Number Settings" initialOpen={false}>
          <RangeControl
            label="Font Size (px)"
            value={statNumberFontSize}
            onChange={(size) => setAttributes({ statNumberFontSize: size })}
            min={12}
            max={80}
            step={1}
          />

          <RangeControl
            label="Line Height"
            value={statNumberLineHeight || 1.4}
            onChange={(val) => setAttributes({ statNumberLineHeight: val })}
            min={1}
            max={2.5}
            step={0.1}
          />

          <SelectControl
            label="Font Weight"
            value={statNumberWeight}
            options={[
              { label: 'Default (700)', value: '' },
              { label: 'Normal (400)', value: '400' },
              { label: 'Light (300)', value: '300' },
              { label: 'Bold (700)', value: '700' }
            ]}
            onChange={(val) => setAttributes({ statNumberWeight: val })}
          />

          <PanelColorSettings
            title="Text Color"
            colorSettings={[
              {
                value: statNumberColor,
                onChange: (color) => setAttributes({ statNumberColor: color }),
                label: 'Stat Number Color'
              }
            ]}
          />
        </PanelBody>

        {/* Stat Text */}
        <PanelBody title="Stat Text Settings" initialOpen={false}>
          <RangeControl
            label="Font Size (px)"
            value={statTextFontSize}
            onChange={(size) => setAttributes({ statTextFontSize: size })}
            min={12}
            max={80}
            step={1}
          />

          <RangeControl
            label="Line Height"
            value={statTextLineHeight || 1.4}
            onChange={(val) => setAttributes({ statTextLineHeight: val })}
            min={1}
            max={2.5}
            step={0.1}
          />

          <SelectControl
            label="Font Weight"
            value={statTextWeight}
            options={[
              { label: 'Default (300)', value: '' },
              { label: 'Normal (400)', value: '400' },
              { label: 'Light (300)', value: '300' },
              { label: 'Bold (700)', value: '700' }
            ]}
            onChange={(val) => setAttributes({ statTextWeight: val })}
          />

          <PanelColorSettings
            title="Text Color"
            colorSettings={[
              {
                value: statTextColor,
                onChange: (color) => setAttributes({ statTextColor: color }),
                label: 'Stat Text Color'
              }
            ]}
          />
        </PanelBody>

      </InspectorControls>

      <div {...blockProps}>
        {/* Top section */}
        <div className="top-section">
          <div className="alignwide content-row">
            <div className="image-column">
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    mediaUrl: media.url,
                    mediaAlt: media.alt || '',
                  })
                }
                type="image"
                value={mediaUrl}
                render={({ open }) => (
                  <div onClick={open} className="image-upload">
                    {mediaUrl ? (
                      <img src={mediaUrl} alt={mediaAlt} />
                    ) : (
                      <Button variant="secondary">{__('Upload Image', 'homepage-info')}</Button>
                    )}
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
                style={{
                  color: quoteColor || undefined,
                  fontSize: typeof quoteFontSize === 'number' ? `${quoteFontSize}px` : undefined,
                  lineHeight: quoteLineHeight || undefined,
                  fontWeight: quoteWeight || undefined,
                }}
              />
              <RichText
                tagName="p"
                className="author"
                value={author}
                onChange={(value) => setAttributes({ author: value })}
                placeholder={__('Author, Title', 'homepage-info')}
                style={{
                  color: authorColor || undefined,
                  fontSize: typeof authorFontSize === 'number' ? `${authorFontSize}px` : undefined,
                  lineHeight: authorLineHeight || undefined,
                  fontWeight: authorWeight || undefined,
                }}
              />
              <RichText
                tagName="p"
                className="description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder={__('Add a paragraph about your facility...', 'homepage-info')}
                style={{
                  color: descriptionColor || undefined,
                  fontSize: typeof descriptionFontSize === 'number' ? `${descriptionFontSize}px` : undefined,
                  lineHeight: descriptionLineHeight || undefined,
                  fontWeight: descriptionWeight || undefined,
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bottom-section">
          <div className="alignwide">
            <div className="stat-inner">
              <div className="stat-grid">
                {stats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    <RichText
                      tagName="strong"
                      className="stat-number"
                      value={stat.number}
                      onChange={(value) => updateStat(index, 'number', value)}
                      placeholder={__('Number', 'homepage-info')}
                      style={{
                        color: statNumberColor || undefined,
                        fontSize: typeof statNumberFontSize === 'number' ? `${statNumberFontSize}px` : undefined,
                        lineHeight: statNumberLineHeight || undefined,
                        fontWeight: statNumberWeight || undefined,
                      }}
                    />
                    <RichText
                      tagName="p"
                      className="stat-text"
                      value={stat.text}
                      onChange={(value) => updateStat(index, 'text', value)}
                      placeholder={__('Description', 'homepage-info')}
                      style={{
                        color: statTextColor || undefined,
                        fontSize: typeof statTextFontSize === 'number' ? `${statTextFontSize}px` : undefined,
                        lineHeight: statTextLineHeight || undefined,
                        fontWeight: statTextWeight || undefined,
                      }}
                    />
                    <Button
                      isDestructive
                      onClick={() => removeStat(index)}
                      className="remove-stat"
                      size="small"
                    >
                      {__('Remove', 'homepage-info')}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="primary" onClick={addStat}>
              {__('+ Add Stat', 'homepage-info')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
