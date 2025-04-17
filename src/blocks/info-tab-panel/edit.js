import {
  useBlockProps,
  MediaUpload,
  InspectorControls,
  InnerBlocks
} from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/image'];

export default function Edit({ attributes, setAttributes, clientId }) {
  const { label, backgroundUrl, backgroundAlt } = attributes;

  const { isActiveTab, isSelected } = useSelect((select) => {
    const parentId = select('core/block-editor').getBlockRootClientId(clientId);
    const siblings = select('core/block-editor').getBlocks(parentId);
    const activeTabIndex = select('core/block-editor').getBlock(parentId)?.attributes?.activeTabIndex || 0;
    const index = siblings.findIndex((block) => block.clientId === clientId);
    return {
      isActiveTab: index === activeTabIndex,
      isSelected: select('core/block-editor').isBlockSelected(clientId),
    };
  }, [clientId]);

  const blockProps = useBlockProps({
    className: `wp-block-acb-info-tab-panel info-tab-panel-block ${isActiveTab ? 'is-active-tab' : ''}`,
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Tab Settings', 'acb')} initialOpen={true}>
          <p><strong>{__('Tab Label', 'acb')}</strong></p>
          <input
            type="text"
            value={label}
            onChange={(e) => setAttributes({ label: e.target.value })}
            placeholder={__('Tab label…', 'acb')}
          />
        </PanelBody>

        <PanelBody title={__('Background Image', 'acb')} initialOpen={false}>
          <MediaUpload
            onSelect={(media) =>
              setAttributes({
                backgroundUrl: media.url,
                backgroundAlt: media.alt || ''
              })
            }
            allowedTypes={['image']}
            value={backgroundUrl}
            render={({ open }) => (
              <Button onClick={open} variant="secondary">
                {backgroundUrl
                  ? __('Replace Background Image', 'acb')
                  : __('Upload Background Image', 'acb')}
              </Button>
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} data-label={label}>
        {backgroundUrl && (
          <div className="background-image" aria-hidden="true">
            <img
              src={backgroundUrl}
              alt={backgroundAlt || ''}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        )}

        <div className="content-container alignwide">
          <div className="content-box">
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
          </div>
        </div>
      </div>
    </>
  );
}
