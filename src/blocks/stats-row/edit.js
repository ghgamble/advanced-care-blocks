import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
  ['core/group', {}, [
    ['core/heading', { placeholder: 'Stat value (e.g. 212)' }],
    ['core/paragraph', { placeholder: 'Stat label (e.g. Total Staff)' }]
  ]],
  ['core/group', {}, [
    ['core/heading', { placeholder: 'Stat value (e.g. 3.2)' }],
    ['core/paragraph', { placeholder: 'Stat label (e.g. Patient to staff ratio)' }]
  ]]
];

export default function Edit() {
  return (
    <div {...useBlockProps({ className: 'stats-row' })}>
      <InnerBlocks
        allowedBlocks={['core/group']}
        template={TEMPLATE}
        templateLock={false}
      />
    </div>
  );
}
