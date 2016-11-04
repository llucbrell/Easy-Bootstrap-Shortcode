var gmaps={
    title:"Google Maps Shortcode",
    id :'oscitas-form-gmaps',
    pluginName: 'gmaps',
    showprobtn: false
};
(function() {
    _create_tinyMCE_options(gmaps);
})();

function ebs_return_html_gmaps(pluginObj){
      var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
         <tr class="tr-button-link">\
                <th><label for="oscitas-button-link">'+ebsjstrans.wmap+'</label></th>\
                <td><input type="text" name="link" id="oscitas-embed-link" value="#" /><br />\
                </td>\
            <tr><th><label for="oscitas-button-class">'+ebsjstrans.customclass+' for parent:</label></th>\
                <td><input type="text" name="line" id="oscitas-embed-class" value=""/><br />\
                </td>\
        </table>\
        <p class="text-support" id="insertion" style="padding-left: 10px;text-align: left;">\
           </p>\
        <p class="submit ebs-default-options" style="padding-right: 10px;text-align: right;">\
            <input type="button" id="oscitas-embed-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.embed+'" name="submit" />\
        </p>\
        </div>');
    console.log(form);
    return form;
}


function create_oscitas_gmaps(pluginObj){
      var form= jQuery(pluginObj.hashId);
    var table = form.find('table'); 
    // handles the click event of the submit button
    form.find('#oscitas-embed-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        console.log('hello');
        var miWidth , miHeight;

        var cusclass= ' class="'+table.find('#oscitas-embed-class').val();
        var embedurl= '<div '+ cusclass + ' iframe-container"' + '>' + table.find('#oscitas-embed-link').val() + '</div>';

        
         var shortcode = embedurl;
       

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });
}