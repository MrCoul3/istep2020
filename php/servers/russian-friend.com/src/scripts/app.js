// import './order-history';
$(document).ready(function () {
    if ($(".header")) {

    // сброс активных функций
        $(document).click(function(e){
            if (e.target.className !== "btn-change-lang") {
                $(".lang-changer").removeClass('lang-changer-active');
            } 
        });

    // HEADER
        // функция change-lange
        $(".btn-change-lang").click(function () {
            if (!$(".lang-changer").hasClass('lang-changer-active')) {
                $(".lang-changer").addClass('lang-changer-active');
            } else {
                $(".lang-changer").removeClass('lang-changer-active');
            }
        });
        
        // вызов формы Login при клике на кнопку "войти"
        $(".btn-login").click(function () {
            if (!$(".login-form").hasClass('login-form-active')) {
                $(".login-form").addClass('login-form-active');
            }
        });

        // закрытие формы лоигн или регистрация
        $(".form-close-btn").click(function(){
            if ($(".login-form").hasClass('login-form-active')) {
                $(".login-form").removeClass('login-form-active');
            }
            if ($(".register-form").hasClass('register-form-active')) {
                $(".register-form").removeClass('register-form-active');
            }
        });

        // переключение формы логин на регистрацию и обратно
        $(".reg-log-changer").click(function() {
            if ($(".login-form").hasClass('login-form-active')) {
                $(".login-form").removeClass('login-form-active');
                $(".register-form").addClass("register-form-active");
            } else {
                $(".login-form").addClass('login-form-active');
                $(".register-form").removeClass("register-form-active");
            }
        });



        // зарегистрироваться
        let registerBtn = document.querySelector(".form-submit-register");
        registerBtn.addEventListener("click", function(e) {
            e.preventDefault();

            let name = $(".form-input--username").val();
            let password = $("#reg-password").val();
            let email = $("#reg-email").val();
            let skype = $("#skype").val();

                let params = {
                    'name': name,
                    'password': password,
                    'email': email,
                    'skype': skype
                };
    // при условии  валидации формы 
            //отправка даных в БД
                let response = fetch('/handle.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(params)
                });
                
            // закрытие окна регистрации 
            $(".register-form").removeClass("register-form-active");
            //вызов окна .register-success
            $(".register-success").addClass("register-success-active");
            $(".reg-success-btn").click(function(){
                $(".register-success").removeClass("register-success-active");
            });

            // Заменить кнопку Войти на иконку User
            $(".btn-login").addClass("btn-login-hide");
            $(".user-login").addClass("user-login-active");

            });

       









    }

});
