import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
  return (
    <div {...useBlockProps({ className: 'swash-background alignfull' })}>
      <div className="swash-shape"></div>
      <div className="swash-inner alignwide">
        <InnerBlocks />
      </div>
    </div>
  );
}
