<?php
/**
 * Plugin Name: Widget to show Posts with React
 */

/*https://www.ibenic.com/how-to-create-a-wordpress-widget-with-reactjs-rest-api/*/


add_action( 'wp_enqueue_scripts', 'react_posts_scripts');
function react_posts_scripts() {
	if ( is_active_widget( false, false, 'react_posts_widget', true ) ) {
		wp_enqueue_script( 'react-js', plugins_url( 'react.min.js', __FILE__ ), array(), false, true );
		wp_enqueue_script( 'reactdom-js', plugins_url( 'react-dom.min.js', __FILE__ ), array(), false, true );
		wp_register_script( 'reactposts-js', plugins_url( 'react_posts.js', __FILE__ ), array('react-js', 'reactdom-js', 'jquery' ), '1', true );
		wp_localize_script( 'reactposts-js', 'wpReactPosts', array( 'root' => esc_url_raw( rest_url() ), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );
		wp_enqueue_script( 'reactposts-js');
	}
}