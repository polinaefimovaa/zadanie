$(document).ready(function(){
    $( ".red" ).draggable();
    $(".light").click(function(){
        $(this).toggleClass("green");
    });
    $('.green').click(function () {
        $(this).addClass("anim");
        $(this).removeClass("green");
        $(this).addClass("light");
    })
});