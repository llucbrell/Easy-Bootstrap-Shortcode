var video={
    title:"Video Shortcode",
    id :'oscitas-form-video',
    pluginName: 'video',
    showprobtn: false
};
(function() {
    _create_tinyMCE_options(video);
})();

function ebs_return_html_video(pluginObj){
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
           <tr class="tr-button-link">\
                <th><label for="oscitas-button-link">'+ebsjstrans.url+' '+ebsjstrans.video+'</label></th>\
                <td><input type="text" name="link" id="oscitas-video-link" value="#" /><br />\
                </td>\
            <tr><th><label for="oscitas-button-class">'+ebsjstrans.customclass+':</label></th>\
                <td><input type="text" name="line" id="oscitas-video-class" value=""/><br />\
                </td>\
		</table>\
        <p class="text-support" id="insertion" style="padding-left: 10px;text-align: left;">' + ebsjstrans.videosuport +' -> '+ ebsjstrans.videoplatforms + '\
           </p>\
        <p class="submit ebs-default-options" style="padding-right: 10px;text-align: right;">\
            <input type="button" id="oscitas-video-submit" class="button-primary" value="'+ebsjstrans.insert+' '+ebsjstrans.video+'" name="submit" />\
        </p>\
		</div>');
    console.log(form);
    return form;
}
function create_oscitas_video(pluginObj){
    var form= jQuery(pluginObj.hashId);
    var table = form.find('table'); 
    var name =  'video';
    // handles the click event of the submit button
    form.find('#oscitas-video-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        console.log('hello');
        var miWidth , miHeight;

        var cusclass= ' class="'+table.find('#oscitas-video-class').val()+'"';
        var videourl= table.find('#oscitas-video-link').val();

        //for youtube videos url
        var youmatch = /https:\/\/www.youtube.com\/watch\?v=/;
            
        
        if(videourl.match(youmatch)){    
        var basicyoutube2 = videourl.replace(youmatch, "https://www.youtube.com/embed/");     
        var finalurl = ' src="'+ basicyoutube2 + '?"';
        miWidth= ' miwidth="560""';
        miHeight= ' miheight="315"';  
        }
        //for youtube videos share option
        youmatch = /https:\/\/youtu.be\//;
       
        if(videourl.match(youmatch)){    
        var basicyoutube= videourl.replace(youmatch, "https://www.youtube.com/embed/");         
        var finalurl = ' src="'+ basicyoutube + '?"';
        miWidth= ' miwidth="560"';
        miHeight= ' miheight="315"';   
        }
        
        //for vimeo videos url
        youmatch = /https:\/\/vimeo.com\//;
          
        if(videourl.match(youmatch)){    
        var basicvimeo = videourl.replace(youmatch, "https://player.vimeo.com/video/");   
        var finalurl = ' src="'+ basicvimeo + '"';
        miWidth= ' miwidth="640"';
        miHeight= ' miheight="269"';        
        }

        //for vine veideos url
        youmatch = /https:\/\/vine.co\//;
          
        if(videourl.match(youmatch)){    
        var basicvine = videourl;   
        var finalurl = ' src="'+ basicvine + '/embed/simple"';
        miWidth= ' miwidth="600"';
        miHeight= ' miheight="600"';        
        }

        //for dailimotion videos share short url style http://dai.ly/x4xjuwj
        youmatch = /http:\/\/dai.ly\//;
          
        if(videourl.match(youmatch)){    
        var basicdaily = videourl.replace(youmatch, "http://www.dailymotion.com/embed/video/");   
        var finalurl = ' src="'+ basicdaily + '"';
        miWidth= ' miwidth="480"';
        miHeight= ' miheight="270"';        
        }
        
        //for dailimotion videos share url 
        youmatch = /http:\/\/dai.ly\//;
          
        if(videourl.match(youmatch)){    
        var basicdaily = videourl.replace(youmatch, "http://www.dailymotion.com/embed/video/");   
        var finalurl = ' src="'+ basicdaily + '"';
        miWidth= ' miwidth="480"';
        miHeight= ' miheight="270"';        
        }

      /*  else {
            var finalurl= '****There is no support for this url****';
            name = 'No Video';
        }*/

         var shortcode = '['
                            +$ebs_prefix 
                            + name
                            + cusclass 
                            + finalurl 
                            + miWidth 
                            + miHeight 
                            + ']';
       

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes fancybox
        close_dialogue(pluginObj.hashId);
    });

}