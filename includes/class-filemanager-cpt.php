<?php

function create_posttype_filemanager() {
    register_post_type( 'shares',
      array(
        'labels' => array(
          'name' => __( 'Share files' ),
          'singular_name' => __( 'Share' )
        ),
            'rewrite' => array('slug' => 'shares'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => false,
            'menu_position'         => 5,
            'show_in_admin_bar'     => false,
            'show_in_nav_menus'     => false,
            'can_export'            => false,
            'has_archive'           => false,		
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'supports'      => array( 'title', 'page-attributes', 'editor'),
      )
    );
    register_post_type( 'workplace',
      array(
        'labels' => array(
          'name' => __( 'Workplace path' ),
          'singular_name' => __( 'Workplace' )
        ),
            'rewrite' => array('slug' => 'workplace'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => false,
            'menu_position'         => 5,
            'show_in_admin_bar'     => false,
            'show_in_nav_menus'     => false,
            'can_export'            => false,
            'has_archive'           => false,		
            'exclude_from_search'   => false,
            'publicly_queryable'    => false,
            'supports'      => array( 'title', 'page-attributes', 'editor'),
      )
    );
    register_post_type( 'disk',
    array(
      'labels' => array(
        'name' => __( 'disk path' ),
        'singular_name' => __( 'disk' )
      ),
          'rewrite' => array('slug' => 'disk'),
          'hierarchical'          => false,
          'public'                => true,
          'show_ui'               => true,
          'show_in_menu'          => false,
          'menu_position'         => 5,
          'show_in_admin_bar'     => false,
          'show_in_nav_menus'     => false,
          'can_export'            => false,
          'has_archive'           => false,		
          'exclude_from_search'   => false,
          'publicly_queryable'    => false,
          'supports'      => array( 'title', 'page-attributes', 'editor'),
    )
  );
}
add_action( 'init', 'create_posttype_filemanager' );

function share_force_template( $template ) {	
	if( is_singular( 'shares' ) ) {
    $template = plugin_dir_path( dirname( __FILE__ ) ) .'/templates/shares-page-template.php';
	}
  if( is_singular( 'workplace' ) ) {
    $template = plugin_dir_path( dirname( __FILE__ ) ) .'/templates/workplace-page-template.php';
  }
  return $template;
}
add_filter( 'template_include', 'share_force_template' );

?>