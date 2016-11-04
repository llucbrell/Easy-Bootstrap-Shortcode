var header={
    title:"Header Shortcode",
    id :'oscitas-form-header',
    pluginName: 'header',
    showprobtn: false
};
(function() {
    _create_tinyMCE_options(header);
})();

function ebs_return_html_header(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table ebs-default-options">\
               <tr>\
        <th><label for="oscitas-header-bgcolor">'+ebsjstrans.bgcolor+'</label></th>\
        <td><input type="text" class="color" name="bgcolor" id="oscitas-header-bgcolor" value="">\
        </tr>\
        <tr>\
            <th><label for="oscitas-header-class">'+ebsjstrans.customclass+'</label></th>\
            <td><input type="text" name="class" id="oscitas-header-class" value=""/>\
           </td>\
        </tr>\
        </table>\
        <p class="text-support" id="insertion" style="padding-left: 10px;text-align: left;"> Good for insert images, videos or other things. ***at this moment doest\'t work with maps\
           </p>\
        <p class="submit ebs-default-options">\
            <input type="button" id="oscitas-header-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.header+'" name="submit" />\
        </p>\
        <div class="pro-version-image aligncenter" style="display: none;"><img src="'+ebs_url+'shortcode/jumbotron/screenshot.jpg"/></div>\
        </div>');
    return form;
}
function create_oscitas_header(pluginObj){
var form = jQuery(pluginObj.hashId);

    var table = form.find('table');

    //ebs_color_picker(form.find('.color'));
    // handles the click event of the submit button
    form.find('#oscitas-header-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-header-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-header-class').val()+'"';
        }
        if(table.find('#oscitas-header-bgcolor').val()!=''){
            cusclass+= ' bgcolor="'+table.find('#oscitas-header-bgcolor').val()+'"';
        }
        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content)
            var selected_content = 'Your Content';
        var shortcode = '['+$ebs_prefix+'header'+cusclass+']<br class="osc"/>';
        shortcode +=selected_content+'<br class="osc"/>';
        shortcode += '[/'+$ebs_prefix+'header]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });



  /*  
       var form = jQuery(pluginObj.hashId);

    var table = form.find('table');

    //ebs_color_picker(form.find('.color'));

    // handles the click event of the submit button
    form.find('#oscitas-oscitasheader-submit').click(function(){
        var shortcode = '['+$ebs_prefix+'header class="yourcustomclass header hbs-header no-margins"]<br/>'
        +ebsjstrans.header
        +' '
        +ebsjstrans.content
        +' '
        +ebsjstrans.goes
        +' '
        +ebsjstrans.here
        +'<br/>[/'
        +$ebs_prefix
        +'header]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });*/
}