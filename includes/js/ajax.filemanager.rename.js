
function filemanager_rename_files($) {
    $('.btnrename').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const path = [];
        var i = 1;
        var x = 1;

        $('.checkbox').each(function () {
            if($(this).is(':checked')){
                path[i] = $(this).attr('name');
            }
            i++;
        });

        $('.filemanager-table').each(function () {
            if(path[x] != null){
                console.log(path[x]);
                var filename = path[x].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g,'&#039');
                $(this).empty();
                $(this).append("<input type='text' id='filename_"+x+"' name='filename' value='"+filename.split('/').reverse()[0]+"'><button class='rename_btn' data-object-id='"+x+"' data-path='"+path[x]+"'>save</button></input>");
            }
            x++;
        });

        $('.rename_btn').on('click', function(event) {
            event.preventDefault();
            $("#errorlog").empty();	
        
            var this_ = $(this);
            var object_id = $(this).attr('data-object-id');
            var path_id = $(this).attr('data-path');
            var filename_value = $("#filename_"+object_id).val();
            var cell = document.getElementById('file-table').rows[object_id].cells; 
            var link = location.protocol + '//' + location.host + location.pathname;
            var Cookie = getCookie('uniqid');

            console.log(cell);

            jQuery.ajax({
                type: 'post',
                url: rename_filemanager_ajax_url,
                data: {
                    'filename': filename_value,
                    'path': path_id,
                    'link': link,
                    'uniqid': Cookie,   
                    'action': 'rename_filemanager_files'
                },
                dataType: 'json',
                success: function(data){
                    console.log(data);
                    console.log(object_id);
                    console.log(cell[0].innerHTML = data[0]);
                    console.log(cell[1].innerHTML = data[1]);
                    filemanager_rename_files($);
                },
                error: function(errorThrown){
                    //error stuff here.text
                }
            });
        });

    });

}

jQuery(document).ready(function($) {
	filemanager_rename_files($);
});