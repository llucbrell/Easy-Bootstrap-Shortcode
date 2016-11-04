<?php

/* * *********************************************************
 * jQuery UI Video responsive insertion
 * ********************************************************* */
function osc_theme_video($params, $content = null) {
   extract(shortcode_atts(array(
                'title' => 'osCitas',
                'src' => '',
                'linkrel' => '',
                'class' => '',
                'miheight' => '',
                'miwidth' => '',
                    ), $params));

   $out = '<div class="embed-responsive embed-responsive-16by9">
  <iframe class="' . $class . ' embed-responsive-item"  src="' . $src . '" width="' . $miwidth . '" height="' . $miheight . '" frameborder="0" allowfullscreen="allowfullscreen" ></iframe>
</div>';
return $out;
}

ebs_backward_compatibility_callback('video', 'osc_theme_video');