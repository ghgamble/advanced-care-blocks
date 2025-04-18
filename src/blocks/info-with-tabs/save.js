import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  const blockProps = useBlockProps.save({
    className: 'gradient-tabs-block alignfull info-tabs-block',
    role: 'presentation'
  });

  return (
    <div {...blockProps}>
      {/* Tabs and panels are rendered by inner blocks (info-tab-panel),
          which handle role="tabpanel" and aria attributes. */}
      <InnerBlocks.Content />
    </div>
  );
}
