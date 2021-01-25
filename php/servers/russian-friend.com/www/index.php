<?php
require ("vendor/autoload.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Главная</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <link href="styles/app.css" rel="stylesheet" integrity="sha384-tAvSUlnsgLwGoDaVCPC/Qb+wJYyQB5Nnhk6CsM7S4bsHFxajInyJz7I1eqLZl1FQ" crossorigin="anonymous"></head>
<body id="mysite">
<section class="login-form authorization-forms">
    <div class="form-frame">
        <div class="container">
            <h3 class="form-title">Вход</h3><img class="form-close-btn form-close-btn--login-form" src="/images/icons/close-btn.svg" alt="close">
        </div><img class="decor-line" src="/images/icons/form-decor-line.svg" alt="line">
        <form class="form">
            <input class="form__elem form-input form-input--email" type="email" placeholder="email" id="email">
            <label class="label-email" for="email"></label>
            <input class="form__elem form-input form-input--password" type="password" placeholder="пароль" id="password">
            <label class="label-password" for="password"></label>
            <p class="reg-log-changer form__elem">У вас нет аккаунта? Регистрация</p><img class="decor-line" src="/images/icons/form-decor-line.svg" alt="line">
            <input class="form__elem form-submit form-submit-login button" type="submit" value="войти">
        </form>
    </div>
</section>
<section class="register-form authorization-forms">
    <div class="form-frame">
        <div class="container">
            <h3 class="form-title">Регистрация</h3><img class="form-close-btn form-close-btn--register-form" src="/images/icons/close-btn.svg" alt="close">
        </div><img class="decor-line" src="/images/icons/form-decor-line.svg" alt="line">
        <form class="form" method="post">
            <input class="form__elem form-input form-input--username" type="text" placeholder="имя пользователя" id="username" name="username">
            <label for="username"></label>
            <input class="form__elem form-input form-input--password" type="password" placeholder="пароль" id="reg-password" name="password">
            <label class="label-password" for="password"></label>
            <input class="form__elem form-input form-input--re-password" type="password" placeholder="повторите пароль" id="re-password">
            <label class="label-re-password" for="re-reg-password"></label>
            <input class="form__elem form-input form-input--email" type="email" placeholder="email" id="reg-email" name="email">
            <label class="label-email" for="email"></label>
            <input class="form__elem form-input form-input--skype" type="text" placeholder="skype" id="skype" name="skype">
            <label for="skype"></label>
            <p class="reg-log-changer form__elem">Уже зарегестрированы? Войти</p><img class="decor-line" src="/images/icons/form-decor-line.svg" alt="line">
            <input class="form__elem form-submit form-submit-register button" type="submit" value="зарегестрироваться">
        </form>
    </div>
</section>
<section class="register-success">
    <div class="register-success__frame"> <img src="/images/icons/succes.svg" alt="success">
        <h2>Поздравляем, <br> Вы успешно зарегистрировались!</h2>
        <h3>Теперь вы можете полностью использовать функционал сайта. <br> Что бы забронировать урок - перейдите в раздел<br>  <a href="">“Занятие с преподавателем” </a></h3>
        <div class="button reg-success-btn">далее</div>
    </div>
</section>
<header class="header">
    <div class="header__overhead">
        <div class="social-net-btns"><a class="social-net-btns__elem social-net-btns__elem--instagram" href="/"></a><a class="social-net-btns__elem social-net-btns__elem--tiktok" href="/"></a></div><a href=""> <img src="images/icons/logo.svg" alt="logo"></a>
        <div class="service-btns">
            <div class="btn-change-lang">
                <div class="lang-changer">
                    <div class="lang-changer__elem lang-changer__elem--btn-rus"></div>
                    <div class="lang-changer__elem lang-changer__elem--btn-en"></div>
                </div>
            </div>
            <div class="btn-login">Войти</div>
            <div class="user-login"> <img src="images/icons/user-ico.svg" alt="">
                <p>Иван Иванов</p><img src="images/icons/user-arrow.svg" alt="">
                <div class="user-login-menu"> </div>
            </div>
        </div>
    </div>
    <div class="header__lower"></div>
</header>
<main class="main-page">
    <section class="top-index"></section>
</main>
<script type="text/javascript" src="scripts/app.js" integrity="sha384-R2Rn3SGcj5inKY15Vj+S/sdhhyEJDMNG4vcyd8c//QHhorzBlndegm+fu/Pv2aBV" crossorigin="anonymous"></script></body>
</html>
