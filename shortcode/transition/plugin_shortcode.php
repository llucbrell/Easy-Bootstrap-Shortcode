<?php

/* * *********************************************************
 * jQuery UI transition no margins insertion
 * ********************************************************* */



function osc_theme_transition($params, $content = null) {
 extract(shortcode_atts(array(
                'bgcolor' => '',
                'class' => ''
                    ), $params));
    $out = '';
    $content = str_replace('<br class="osc" />', '', $content);
    $content = str_replace('<br class="osc" />\n', '', $content);
    $style=$bgcolor!=''?' style="background:'.$bgcolor.';"':'';
    $out = '</div></div></div></div></div></div></div></div></div></div>
<div class="transition center-block text-center' . $class .EBS_CONTAINER_CLASS. '"'.$style.'>' . do_shortcode($content) . '</div><div class="container new-main-content-area main-content-area"><div class="row full-width"><div class="new-main-content-inner col-sm-12 col-md-8"><div id="primary" class="new-content-area content-area"><div id="page"><div class="new-post-inner-content"><div class="entry-content"><script type="text/javascript">jQuery(document).ready(function($){
   //$(\'.main-content-inner\').addClass( "hbs-disapear" );
   //$(\'.site-content\').addClass( "hbs-disapear" );
   //$(\'.post-inner-content\').addClass( "hbs-disapear" ).addClass( "hbs-no-padding" );
   //$(\'.transition > .iframe-container\').addClass( "hbs-no-padding-bottom" );
   });
</script>';
    return $out;
}

ebs_backward_compatibility_callback('transition', 'osc_theme_transition');

//function osc_theme_header($params, $content = null) {
   // global $_oscitas_header;
   // extract(shortcode_atts(array(
   //             'title' => 'title',
   //             'class' => ''
   //                 ), $params));
   // $con = do_shortcode($content);
    //$index = count($_oscitas_header) - 1;
   // $id = isset($_oscitas_header[$index]['details'])?'details-' . $index . '-' . count($_oscitas_header[$index]['details']):'details-' . $index . '-0';
   // $const = get_defined_constants();

//}




