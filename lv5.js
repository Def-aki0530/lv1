$(function () {

    setInterval(function(){
        var now  = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        var time_str = hour + ":" + min + ":" + sec;

        $('#clock').text(time_str);
    }, 1000);
    
});
