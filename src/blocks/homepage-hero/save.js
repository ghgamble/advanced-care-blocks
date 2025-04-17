import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { mediaUrl, mediaType } = attributes;
  const blockProps = useBlockProps.save({
    className: 'acb-hero alignfull',
  });

  return (
    <div {...blockProps}>
      {mediaUrl &&
        (mediaType === 'video' ? (
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
        ))}
    </div>
  );
}
