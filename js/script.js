$( document ).ready(function() {
    $(".toRegister").hide();
    $(".account").hide();
    $("#signInbtn").click(function(){
        $(".signIn").show();
        $(".toRegister").hide();
    });
    $("#registerbtn").click(function(){
        $(".toRegister").show();
        $(".signIn").hide();
    });
    $("#exit").click(function(){
        $(".account").hide();
        $(".signIn").show();
    });
});