<?php
/**
 * Plugin Name: Advanced Care Blocks
 * Description: Custom Gutenberg blocks for the Advanced Care website.
 * Version: 1.0.0
 * Author: GG Dev
 * Author URI: https://gg-dev.co/
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function acb_register_blocks() {
    foreach ( glob( __DIR__ . '/build/blocks/*' ) as $block_dir ) {
        register_block_type( $block_dir );
    }
}
add_action( 'init', 'acb_register_blocks' );
