$.getJSON("https://api-alquranid.herokuapp.com/surah", function(value){

    // console.log(value);

    $.each(value.data, function(i, value){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6 mb-4"><div class="card"><div class="card-body"><h6><a onClick="sessionStorage.somekey = '+ value.nomor +'; console.log(sessionStorage.somekey);" data-fajax="false" href="isi-ayat.html" data-transition="slidefade">'+ value.nomor +'. '+ value.nama +'</a></h6></div></div></div>');
    });

});

let data = sessionStorage.getItem('somekey');

$.getJSON("https://api-alquranid.herokuapp.com/surah/"+data, function(value){
    // console.log(value.data);

        $.each(value.data, function(i, value){
            $('#isi-ayat').append('<div class="ayat text-center mb-5"><h5 class="fw-bolder">'+ value.nomor +' '+ value.ar +' </h5)<p>' + value.tr +'</p><i>' + value.id +'</i></div>');
        });

});