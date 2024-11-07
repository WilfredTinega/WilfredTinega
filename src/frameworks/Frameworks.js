$(document).ready(function(){
    $(".navigation-list").hide();
    $(".bi-list").click(function(){
        $(".bi-list").hide();
        $(".bi-list").show();
        $(".navigation-list").show();
    }) 
    
    $(".bi-x").click(function(){
        $(".bi-list").show();
        $(".bi-list").hide();
        $(".navigation-list").hide();
    })
})