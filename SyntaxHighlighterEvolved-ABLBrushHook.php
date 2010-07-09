<?php
/*
Plugin Name: SyntaxHighlighter Evolved: Progress/ABL/OpenEdge Brush
Description: Adds support for the Progress/ABL/OpenEdge language to the SyntaxHighlighter Evolved plugin.
     Author: Abe Voelker
    Version: 1.0.0
 Author URI: http://abevoelker.com
*/

// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_abl_regscript' );

// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_abl_addlang' );

// Register the brush file with WordPress
function syntaxhighlighter_abl_regscript() {
	wp_register_script( 'syntaxhighlighter-brush-abl', plugins_url( 'shBrushABL.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.3' );
}

// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_abl_addlang( $brushes ) {
	$brushes['progress'] = 'abl';
	$brushes['abl']      = 'abl';
	$brushes['openedge'] = 'abl';

	return $brushes;
}

?>
