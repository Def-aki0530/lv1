$(window).scroll(function(){
    var top1 = $(".img1").offset().top; //位置取得
    var position1 = top1 - $(window).height(); //発火位置
    var top2 = $(".img2").offset().top; //位置取得
    var position2 = top2 - $(window).height(); //発火位置
    var top3 = $(".img3").offset().top; //位置取得
    var position3 = top3 - $(window).height(); //発火位置
    var top4 = $(".img4").offset().top; //位置取得
    var position4 = top4 - $(window).height(); //発火位置
    var top5 = $(".img5").offset().top; //位置取得
    var position5 = top5 - $(window).height(); //発火位置
    
    if($(window).scrollTop() > position1){
      // 要素が見えたときの動き
      $(".img1").addClass("fadein");
      $(".img1").removeClass("fadeout");
    }else{
      // それ以外の動き
      $(".img1").removeClass("fadein");
      $(".img1").addClass("fadeout");
    }

    if($(window).scrollTop() > position2){
        // 要素が見えたときの動き
        $(".img2").addClass("fadein");
        $(".img2").removeClass("fadeout");
    }else{
        // それ以外の動き
        $(".img2").removeClass("fadein");
        $(".img2").addClass("fadeout");
    }

    if($(window).scrollTop() > position3){
        // 要素が見えたときの動き
        $(".img3").addClass("fadein");
        $(".img3").removeClass("fadeout");
    }else{
        // それ以外の動き
        $(".img3").removeClass("fadein");
        $(".img3").addClass("fadeout");
    }

    if($(window).scrollTop() > position4){
        // 要素が見えたときの動き
        $(".img4").addClass("fadein");
        $(".img4").removeClass("fadeout");
    }else{
        // それ以外の動き
        $(".img4").removeClass("fadein");
        $(".img4").addClass("fadeout");
    }

    if($(window).scrollTop() > position5){
        // 要素が見えたときの動き
        $(".img5").addClass("fadein");
        $(".img5").removeClass("fadeout");
    }else{
        // それ以外の動き
        $(".img5").removeClass("fadein");
        $(".img5").addClass("fadeout");
    }
 
  });