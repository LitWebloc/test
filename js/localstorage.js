$(document).ready(function(){
    if(localStorage.getItem('online') == null){
        var online ={
            sensor:false
        }
    }else if(JSON.parse(localStorage.getItem('online')).sensor == true){
        $(".account").show();
        $(".toRegister").hide();
        $(".signIn").hide();
        $("#name").text((JSON.parse(localStorage.getItem('register')).name));
    }else{
        $(".account").hide();
        $(".signIn").show();
    }
    $("#toRegisterbtn").click(function(){
        var loginReg = $("input[name='loginReg']").val();
        var passwordReg = $("input[name='passwordReg']").val();
        var passwordRepeat = $("input[name='passwordRepeatReg']").val();
        console.log(loginReg, passwordReg, passwordRepeat);
        if(passwordRepeat == passwordReg){
            var passwordidentification = true;
        }else{
            var passwordidentification = false;
        }
        console.log(passwordidentification);
        if(passwordidentification == true && loginReg!="" && loginReg!=" "){

            var register = {
                name: loginReg,
                passwordaccount: passwordReg
            }
            localStorage.setItem('register', JSON.stringify(register));
            alert("Вы успешно зарегестрированны");
            $(".signIn").show();
            $(".toRegister").hide();
        }else{
            console.log("falsereg");
            alert("Заполните поля или введите одинаково пароль!");
        }
    });
    $("#accountbtn").click(function(){
            if(localStorage.getItem('register') == null){
                alert("Нет кабинетов");
            }else{
                var login;
                var passwordsign;
                console.log(login, passwordsign);
                if(login = $("input[name='login']").val() == JSON.parse(localStorage.getItem('register')).name){
                    login = true;
                }else{
                    login = false;
                }
                if(passwordsign=$("input[name='password']").val() == JSON.parse(localStorage.getItem('register')).passwordaccount){
                    passwordsign = true;
                }else{
                    passwordsign = false;
                }
                console.log(login, passwordsign);
                if( login == true && passwordsign == true){
                    $(".account").show();
                    $(".toRegister").hide();
                    $(".signIn").hide();
                    var online ={
                        sensor:true
                    }
                    localStorage.setItem('online', JSON.stringify(online));
                }else if( login == false && passwordsign == false){
                    alert("Такого кабинета не существует");
                }else{
                    alert("Введено неверно");
                }
            }
    });
    $("#signIn").click(function(){
        if(localStorage.getItem('register') == null){
            $("#name").text(0);
        }else{
            $("#name").text((JSON.parse(localStorage.getItem('register')).name));
        }
    });
    $("#exit").click(function(){
        localStorage.removeItem('online');
    });
});