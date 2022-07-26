$(window).scroll(function(){
    if($(this).scrollTop() > 10){
        $("nav").addClass("bg-dark");
    }else{
        $("nav").removeClass("bg-dark");
    }
});