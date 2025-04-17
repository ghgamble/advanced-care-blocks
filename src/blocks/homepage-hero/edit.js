import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl, mediaType } = attributes;

  const onSelectMedia = (media) => {
    if (!media || !media.url) return;
    setAttributes({
      mediaUrl: media.url,
      mediaType: media.mime.startsWith('video') ? 'video' : 'image',
    });
  };

  const blockProps = useBlockProps({
    className: 'acb-hero alignfull',
  });

  return (
    <div {...blockProps}>
      <MediaUploadCheck>
        <MediaUpload
          allowedTypes={['image', 'video']}
          onSelect={onSelectMedia}
          render={({ open }) => (
            <>
              {!mediaUrl ? (
                <Placeholder
                  label={__('Homepage Hero Media')}
                  instructions={__('Upload a video or image to display as homepage hero.')}
                >
                  <Button variant="primary" onClick={open}>
                    {__('Upload Media')}
                  </Button>
                </Placeholder>
              ) : (
                <div className="acb-hero-preview">
                  {mediaType === 'video' ? (
                    <video
                      src={mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="acb-hero-video"
                      aria-hidden="true"
                    />
                  ) : (
                    <img src={mediaUrl} alt="" className="acb-hero-image" aria-hidden="true" />
                  )}
                  <Button variant="secondary" onClick={open}>
                    {__('Replace Media')}
                  </Button>
                </div>
              )}
            </>
          )}
        />
      </MediaUploadCheck>
    </div>
  );
}
