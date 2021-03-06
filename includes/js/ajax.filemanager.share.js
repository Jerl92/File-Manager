
function filemanager_share_files($) {
    $('.btnshare').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("#errorlog").empty();	
        $("#subnav-content-share").toggleClass("subnav-content-display");
    });
    $('.newsharelink').on('click', function() {filemanager_share_link_files($)});
}

function filemanager_share_link_files($) {
    var i = 0;
    var link = location.protocol + '//' + location.host + location.pathname;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlhome = urlParams.get('home');
    const urlworkplace = urlParams.get('workplace');
    const urlpath = urlParams.get('path');
    const urlshare = urlParams.get('share');
    const urlsharepath = document.getElementById('filemanagerpath').innerHTML;
    var url_Params;

    if(urlhome != null){
        url_Params = urlhome;
    }
    if(urlworkplace != null){
        url_Params = urlworkplace;
    }
    if(urlpath != null){
        url_Params = urlpath;
    }
    if(urlsharepath != null){
        url_Params = urlsharepath;
    }

    if(i === 0) {
        jQuery.ajax({
            type: 'post',
            url: share_filemanager_ajax_url,
            data: {
                'path': url_Params,
                'action': 'share_filemanager_files'
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
                if(data[1]){
                    document.getElementById('lnameshare').value = link+'?share='+data[0]+'&sharepath='+data[1];
                } else {
                    document.getElementById('lnameshare').value = link+'?share='+data[0];
                }
                i++;
            },
            error: function(errorThrown){
                //error stuff here.text
            }
        });
    }
}

jQuery(document).ready(function($) {
    filemanager_share_files($);
});