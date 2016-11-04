var audio={
    title:"Audio Shortcode",
    id :'oscitas-form-audio',
    pluginName: 'audio',
    showprobtn: false
};
(function() {
    _create_tinyMCE_options(audio);
})();

function ebs_return_html_audio(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
		 <tr class="tr-button-link">\
                <th><label for="oscitas-button-link">'+ebsjstrans.audio+' '+ebsjstrans.embedcode+'</label></th>\
                <td><input type="text" name="link" id="oscitas-audio-link" value="#" /><br />\
                </td>\
            <tr><th><label for="oscitas-button-class">'+ebsjstrans.customclass+' for parent:</label></th>\
                <td><input type="text" name="line" id="oscitas-audio-class" value=""/><br />\
                </td>\
        </table>\
        <p class="text-support" id="insertion" style="padding-left: 10px;text-align: left;">' + ebsjstrans.audiosuport +' -> '+ ebsjstrans.audioplatforms + '\
           </p>\
        <p class="submit ebs-default-options" style="padding-right: 10px;text-align: right;">\
            <input type="button" id="oscitas-audio-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.audio+'" name="submit" />\
        </p>\
        </div>');
    console.log(form);
    return form;
}
function create_oscitas_audio(pluginObj){
    var form= jQuery(pluginObj.hashId);
    var table = form.find('table'); 
    var name =  'miaudio';
    // handles the click event of the submit button
    form.find('#oscitas-audio-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        console.log('hello');
        var miWidth , miHeight;

        var cusclass= ' class="'+table.find('#oscitas-audio-class').val()+'"';
        var audiourl= '<div style="text-align:center"'+ cusclass + '>' + table.find('#oscitas-audio-link').val() + '</div>';

        
         var shortcode = audiourl;
       

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });

}