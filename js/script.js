$( document ).ready(function() {
    $(".toRegister").hide();
    $(".account").hide();
    $("#signIn").click(function(){
        $(".signIn").show();
        $(".toRegister").hide();
    });
    $("#register").click(function(){
        $(".toRegister").show();
        $(".signIn").hide();
    });
    $("#account").click(function(){
        $(".account").show();
        $(".toRegister").hide();
        $(".signIn").hide();
    });
    $("#exit").click(function(){
        $(".account").hide();
        $(".toRegister").show();
        $(".signIn").show();
    });
});