import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { images } = attributes;

  return (
    <div {...useBlockProps.save({ className: 'alignwide styled-img-grid' })}>
      <div className="grid-wrapper">
        {images.map((img, index) => (
          <div className="styled-img-wrapper" key={index}>
            <div className="image-inner">
              <img src={img.url} alt={img.alt || ''} />
              {img.label && (
                <div className="img-overlay">
                  <span className="img-label">{img.label}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}