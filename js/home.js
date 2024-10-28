$(document).ready(function(){
    $(".bi-list").click(function(){
        $(this).hide();        
        $(".bi-x").show();
        $(".nav").css({
            "left" : "0"
        });

    });

    //.about, .experience,.education, .skills

    $(".bi-x").click(function(){
        $(this).hide();
        $(".bi-list").show();
        $(".nav").css({
            "left" : "-100%"
        });
    });

    $(".about,.experience,.education, .skills").click(function(){
        $(".nav").css({
            "left" : "-100%"
        });        
        $(".bi-list").show();
        $(".bi-x").hide();
    })
})