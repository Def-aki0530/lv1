$(function(){
    document.getElementById("equal").addEventListener("click", function(){
        var x = parseFloat($("#x").val());
        var y = parseFloat($("#y").val());
        
        if(x.toString() == "NaN"){
            x=0;
        }
        if(y.toString() == "NaN"){
            y=0;
        }
        
        $("#answer").html(x+y);
        
    });
});