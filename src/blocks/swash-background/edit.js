import {
  useBlockProps,
  InnerBlocks,
  InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const DEFAULT_GRADIENT = 'linear-gradient(135deg, #34d399, #0369a1)';
  const { backgroundStyle = DEFAULT_GRADIENT } = attributes;

  const [inputValue, setInputValue] = useState(backgroundStyle);
  const [isValid, setIsValid] = useState(true);

  // ✅ Validate CSS using test element
  useEffect(() => {
    const testEl = document.createElement('div');
    testEl.style.background = '';
    testEl.style.background = inputValue;
    const success = testEl.style.background !== '';
    setIsValid(success);
    if (success) {
      setAttributes({ backgroundStyle: inputValue });
    }
  }, [inputValue]);

  const blockProps = useBlockProps({
    className: 'swash-background alignfull',
    style: {
      backgroundImage: inputValue.includes('gradient') ? `${inputValue} !important` : 'none',
      backgroundColor: !inputValue.includes('gradient') ? `${inputValue} !important` : 'transparent'
    }
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Background Gradient', 'acb')} initialOpen={true}>
          <TextControl
            label={__('CSS Background Value')}
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            help={__('Enter a valid CSS background value, like linear-gradient(...) or a solid color.')}
          />
          {!isValid && (
            <Notice status="error" isDismissible={false}>
              {__('Invalid CSS background. Please enter a valid value like linear-gradient(...) or a hex color.', 'acb')}
            </Notice>
          )}
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="swash-shape" aria-hidden="true"></div>
        <div className="swash-inner alignwide">
          <InnerBlocks />
        </div>
      </div>
    </>
  );
}
