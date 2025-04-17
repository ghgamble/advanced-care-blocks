import { useBlockProps } from '@wordpress/block-editor';
import starURL from './star.svg';

const Star = ({ filled }) => (
  <img
    src={starURL}
    alt={filled ? 'Filled star' : 'Empty star'}
    className={`star ${filled ? 'filled' : 'outline'}`}
  />
);

export default function Save({ attributes }) {
  const { testimonials } = attributes;

  return (
    <div {...useBlockProps.save({ className: 'testimonial-slider' })}>
      <button className="prev" aria-label="Previous testimonial">‹</button>

      <div className="slides">
        {testimonials.map((item, index) => (
          <div className="testimonial" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < item.stars} />
              ))}
            </div>
            <blockquote>{item.quote}</blockquote>
            <cite>{item.author}</cite>
          </div>
        ))}
      </div>

      <button className="next" aria-label="Next testimonial">›</button>

      <div className="dots">
        {testimonials.map((_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>
    </div>
  );
}
