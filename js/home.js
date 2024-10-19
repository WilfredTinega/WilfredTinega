$(document).ready(function(){
    $(".bi-list").click(function(){
        $(this).hide();        
        $(".bi-x").show();
        $(".nav").css({
            "left" : "0",
        });

    });

    $(".bi-x").click(function(){
        $(this).hide();
        $(".bi-list").show();
        $(".nav").css({
            "left" : "-30%",
        });
    });
})