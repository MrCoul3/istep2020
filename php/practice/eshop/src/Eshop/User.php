<?php
namespace Eshop;

class User
{
    protected $userLogin = '';

    public function __construct($login)
    {
        if (!empty($login)) {

        }
        else {
            // @todo: показать ошибку
        }
    }

    public function checkUserExist($login)
    {
        // тут нужно общаться к хранилищу пользователей
    }
}