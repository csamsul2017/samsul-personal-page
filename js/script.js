// Wvwnt pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 800, 'easeInOutExpo');
      
    e.preventDefault();
});
    // console.log($('body').scrollTop());

    
    // console.log(elemenTujuan.offset().top);
    // console.log($('body').scrollTop());
    
    // // pindahkan scroll
    // $('body').scrollTop(700);

    // e.preventDefault();