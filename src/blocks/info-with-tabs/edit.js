import {
  useBlockProps,
  InnerBlocks
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes, clientId }) {
  const { activeTabIndex = 0 } = attributes;

  const tabBlocks = useSelect(
    (select) =>
      select('core/block-editor').getBlocks(clientId).filter(
        (block) => block.name === 'acb/info-tab-panel'
      ),
    [clientId]
  );

  const blockProps = useBlockProps({ className: 'gradient-tabs-block alignfull' });

  const handleTabClick = (index) => {
    setAttributes({ activeTabIndex: index });
  };

  return (
    <div {...blockProps}>
      {/* Tabs */}
      <div className="tabs-container alignwide">
        {tabBlocks.map((block, index) => {
          const label = block.attributes.label || `Tab ${index + 1}`;
          const isActive = index === activeTabIndex;
          return (
            <div
              key={block.clientId}
              className={`tab ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Panels */}
      <div className="tab-panels">
        <InnerBlocks
          allowedBlocks={['acb/info-tab-panel']}
          templateLock={false}
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    </div>
  );
}
