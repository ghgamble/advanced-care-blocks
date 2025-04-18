import { useBlockProps } from '@wordpress/block-editor';
import {
  Button,
  TextControl,
  TextareaControl,
  RangeControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { testimonials } = attributes;

  const updateTestimonial = (index, field, value) => {
    const updated = [...testimonials];
    updated[index][field] = value;
    setAttributes({ testimonials: updated });
  };

  const addTestimonial = () => {
    setAttributes({
      testimonials: [
        ...testimonials,
        { stars: 5, quote: '', author: '' }
      ]
    });
  };

  const removeTestimonial = (index) => {
    const updated = [...testimonials];
    updated.splice(index, 1);
    setAttributes({ testimonials: updated });
  };

  return (
    <div {...useBlockProps()}>
      <h3>Testimonials</h3>
      {testimonials.map((item, index) => (
        <div key={index} className="testimonial-entry" aria-label={`Testimonial ${index + 1}`}>
          <h4>{`Testimonial ${index + 1}`}</h4>
          <RangeControl
            label="Stars"
            value={item.stars}
            onChange={(val) => updateTestimonial(index, 'stars', val)}
            min={1}
            max={5}
          />
          <TextareaControl
            label="Quote"
            value={item.quote}
            onChange={(val) => updateTestimonial(index, 'quote', val)}
          />
          <TextControl
            label="Author"
            value={item.author}
            onChange={(val) => updateTestimonial(index, 'author', val)}
          />
          <Button
            variant="secondary"
            onClick={() => removeTestimonial(index)}
            isDestructive
            aria-label={`Delete testimonial ${index + 1}`}
          >
            Delete
          </Button>
          <hr />
        </div>
      ))}
      <Button variant="primary" onClick={addTestimonial}>
        + Add Testimonial
      </Button>
    </div>
  );
}
