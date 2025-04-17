import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { lineWidth = 'full' } = attributes;

  return (
    <div {...useBlockProps.save({ className: `heading-with-hzline-block ${lineWidth}-width` })}>
      <InnerBlocks.Content />
      <div className="horz-line" aria-hidden="true" />
    </div>
  );
}
