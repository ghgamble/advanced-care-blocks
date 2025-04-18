import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { images } = attributes;

  return (
    <div {...useBlockProps.save({ className: 'alignwide styled-img-grid' })}>
      <div className="grid-wrapper">
        {images.map((img) => (
          <figure className="styled-img-wrapper" key={img.url}>
            <div className="image-inner">
              <img src={img.url} alt={img.alt || ''} />
              {img.label && (
                <figcaption className="img-overlay">
                  <span className="img-label">{img.label}</span>
                </figcaption>
              )}
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
