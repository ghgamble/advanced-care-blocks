import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  const blockProps = useBlockProps.save({
    className: 'gradient-tabs-block alignfull info-tabs-block'
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
