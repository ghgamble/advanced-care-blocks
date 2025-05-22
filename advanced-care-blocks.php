<?php
/**
 * Plugin Name: Advanced Care Blocks
 * Description: Custom Gutenberg blocks for the Advanced Care website.
 * Version: 2.0.2
 * Author: GG Dev
 * Author URI: https://gg-dev.co/
 * GitHub Plugin URI: https://github.com/ghgamble/advanced-care-blocks
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function acb_register_blocks() {
    foreach ( glob( __DIR__ . '/build/blocks/*' ) as $block_dir ) {
        register_block_type( $block_dir );
    }
}
add_action( 'init', 'acb_register_blocks' );

function acb_enqueue_editor_assets() {
    wp_register_script(
        'acb-block-globals',
        '', // no src needed, we're only injecting inline vars
        [],
        null,
        true
    );

    wp_add_inline_script(
        'acb-block-globals',
        'window.acbBlockAssets = {
            nurseImage: "' . esc_url( plugins_url( 'src/nurse.png', __FILE__ ) ) . '"
        };'
    );

    wp_enqueue_script('acb-block-globals');
}
add_action('enqueue_block_editor_assets', 'acb_enqueue_editor_assets');

