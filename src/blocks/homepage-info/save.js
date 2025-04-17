import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
    stats= [],
    statNumberColor,
    statNumberFontSize,
    statNumberLineHeight,
    statNumberWeight,
    statTextColor,
    statTextFontSize,
    statTextLineHeight,
    statTextWeight,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: 'alignfull homepage-info-block',
  });

  return (
    <div {...blockProps}>
      {/* Top section */}
      <div className="top-section">
        <div className="alignwide content-row">
          <div className="image-column">
            {mediaUrl && (
              <img src={mediaUrl} alt={mediaAlt || ''} />
            )}
          </div>
          <div className="text-column">
            <RichText.Content
              tagName="h2"
              className="quote"
              value={`“${quote}”`}
              style={{
                color: quoteColor || undefined,
                fontSize: typeof quoteFontSize === 'number' ? `${quoteFontSize}px` : undefined,
                lineHeight: quoteLineHeight || undefined,
                fontWeight: quoteWeight || undefined,
              }}
            />
            <RichText.Content
              tagName="p"
              className="author"
              value={author}
              style={{
                color: authorColor || undefined,
                fontSize: typeof authorFontSize === 'number' ? `${authorFontSize}px` : undefined,
                lineHeight: authorLineHeight || undefined,
                fontWeight: authorWeight || undefined,
              }}
            />
            <RichText.Content
              tagName="p"
              className="description"
              value={description}
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
                  <RichText.Content
                    tagName="strong"
                    className="stat-number"
                    value={stat.number}
                    style={{
                      color: statNumberColor || undefined,
                      fontSize: typeof statNumberFontSize === 'number' ? `${statNumberFontSize}px` : undefined,
                      lineHeight: statNumberLineHeight || undefined,
                      fontWeight: statNumberWeight || undefined,
                    }}
                  />
                  <RichText.Content
                    tagName="p"
                    className="stat-text"
                    value={stat.text}
                    style={{
                      color: statTextColor || undefined,
                      fontSize: typeof statTextFontSize === 'number' ? `${statTextFontSize}px` : undefined,
                      lineHeight: statTextLineHeight || undefined,
                      fontWeight: statTextWeight || undefined,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
