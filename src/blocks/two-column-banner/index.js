import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';
import ACBIcon from '../../acb-icon';

registerBlockType(metadata.name, {
  ...metadata,
  icon: ACBIcon,
  edit,
  save,
});
