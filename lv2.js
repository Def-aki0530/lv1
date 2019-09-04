$(function(){
    $('.hello_html').addClass('show');
    $('.hello_js').addClass('hide');
    var check=0;
    document.getElementById("btn").addEventListener("click", function(){
        if(check == 0){
            $('.hello_html').removeClass('show');
            $('.hello_html').addClass('hide');
            $('.hello_js').removeClass('hide');
            $('.hello_js').addClass('show');
            check = 1;
        }else{
            $('.hello_html').removeClass('hide');
            $('.hello_html').addClass('show');
            $('.hello_js').removeClass('show');
            $('.hello_js').addClass('hide');
            check = 0;
        }
    });
    
});
