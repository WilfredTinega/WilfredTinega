$(document).ready(function(){
    $(".bi-circle-half").click(function(){
        $("header").toggleClass("header");
        $("main").toggleClass("main");
        $("footer").toggleClass("footer");
        $(".nav").toggleClass("header")
    })
})