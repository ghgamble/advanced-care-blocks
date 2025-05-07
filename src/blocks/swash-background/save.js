import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { backgroundStyle = 'linear-gradient(135deg, #34d399, #0369a1)' } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: 'swash-background alignfull',
        style: { background: `${backgroundStyle} !important` }
      })}
    >
      <div className="swash-shape" aria-hidden="true"></div>
      <div className="swash-inner alignwide">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
