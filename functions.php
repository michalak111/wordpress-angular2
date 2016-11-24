<?php

    add_action( 'after_setup_theme', 'register_my_menu' );
    function register_my_menu() {
        register_nav_menu( 'primary_menu', __( 'My Primary Menu', 'theme-slug' ) );
    }

    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 50, 50);
    // Image size for single posts
    add_image_size( 'single-post-thumbnail', 590, 180 );

?>