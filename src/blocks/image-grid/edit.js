import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Edit({ attributes, setAttributes }) {
  const { images } = attributes;
  const [dragging, setDragging] = useState(false);

  const onSelectImages = (media) => {
    const newImages = media.map((img) => ({
      url: img.url,
      label: '',
      alt: img.alt || '',
      id: img.id || img.url, // Use for stable draggable keys
    }));
    setAttributes({ images: newImages });
  };

  const updateImageField = (index, field, value) => {
    const updated = [...images];
    updated[index][field] = value;
    setAttributes({ images: updated });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(images);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setAttributes({ images: reordered });
  };

  const blockProps = useBlockProps({ className: 'alignwide styled-img-grid' });

  return (
    <div {...blockProps}>
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImages}
          allowedTypes={['image']}
          multiple
          gallery
          value={images.map((img) => img.id)}
          render={({ open }) => (
            <Button onClick={open} variant="secondary">
              {images.length > 0 ? 'Edit Images' : 'Upload Images'}
            </Button>
          )}
        />
      </MediaUploadCheck>

      <DragDropContext onDragEnd={onDragEnd} onDragStart={() => setDragging(true)} onDragUpdate={() => setDragging(false)}>
        <Droppable droppableId="image-grid" direction="vertical">
          {(provided) => (
            <div className="grid-wrapper" ref={provided.innerRef} {...provided.droppableProps}>
              {images.map((img, index) => (
                <Draggable key={img.id || `img-${index}`} draggableId={`${img.id || `img-${index}`}`} index={index}>
                  {(provided) => (
                    <div
                      className="styled-img-wrapper"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="image-inner">
                        <img src={img.url} alt={img.alt || ''} />
                        <div className="img-overlay always-visible">
                          <input
                            type="text"
                            value={img.label || ''}
                            placeholder="Overlay label"
                            aria-label={`Overlay label for image ${index + 1}`}
                            onChange={(e) => updateImageField(index, 'label', e.target.value)}
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="alt-input"
                        value={img.alt || ''}
                        placeholder="Alt text"
                        aria-label={`Alt text for image ${index + 1}`}
                        onChange={(e) => updateImageField(index, 'alt', e.target.value)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
