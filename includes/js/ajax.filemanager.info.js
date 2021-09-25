
function filemanager_info_files($) {

    $.fn.ready();
	'use strict';

    $('.btninfo').on('click', function(event) {
        event.preventDefault();

        const path = [];
        var i = 0;

        $('.checkbox').each(function () {
            if($(this).is(':checked')){
                path[i] = $(this).attr('name');
            }
            i++;
        });

        jQuery.ajax({
            type: 'post',
            url: info_filemanager_ajax_url,
            data: {
                'path': path,
                'action': 'info_filemanager_files'
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
                document.getElementById("filemanager-wrapper").innerHTML += data;
                $( ".info-window" ).each(function () {
                    $(this).draggable();
                });
                $('.info-window-close').on('click', function(event) {
                    event.preventDefault();
                    $(this).parent().remove();
                });
                filemanager_info_files($);
                filemanager_select_files($);
            },
            error: function(errorThrown){
                //error stuff here.text
            }
        });

    });

}

jQuery(document).ready(function($) {
	filemanager_info_files($);
});