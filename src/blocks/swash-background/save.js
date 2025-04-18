import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
  return (
    <div {...useBlockProps.save({ className: 'swash-background alignfull' })}>
      <div className="swash-shape" aria-hidden="true"></div>
      <div className="swash-inner alignwide">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
