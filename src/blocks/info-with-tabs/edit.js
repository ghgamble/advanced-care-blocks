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

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTabClick(index);
    }
  };

  return (
    <div {...blockProps}>
      {/* Tabs */}
      <div
        className="tabs-container alignwide"
        role="tablist"
        aria-label={__('Information Tabs', 'acb')}
      >
        {tabBlocks.map((block, index) => {
          const label = block.attributes.label || `Tab ${index + 1}`;
          const isActive = index === activeTabIndex;
          const tabId = `tab-${clientId}-${index}`;
          const panelId = `tabpanel-${clientId}-${index}`;

          return (
            <div
              key={block.clientId}
              id={tabId}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              aria-selected={isActive}
              aria-controls={panelId}
              className={`tab ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Panels */}
      <div className="tab-panels" role="presentation">
        <InnerBlocks
          allowedBlocks={['acb/info-tab-panel']}
          templateLock={false}
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    </div>
  );
}
