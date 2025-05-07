import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    tabColor = '#007399',
    activeTabColor = '#2c944b'
  } = attributes;

  const blockProps = useBlockProps.save({
    className: 'gradient-tabs-block alignfull info-tabs-block',
    role: 'presentation',
    'data-tab-color': tabColor,
    'data-active-tab-color': activeTabColor
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
