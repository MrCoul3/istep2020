<?php


namespace Classes;

class User
{
    protected $dbAccess = null;
    protected $requireKeys = [
        'id',
        'name',
        'password',
        'email',
        'skype'
    ];

    public function __construct()
    {
         $this->dbAccess = new DbAccess();
    }
    function getPassHash($userPassword)
    {
        $sold = 'pass23';
        $hashString = $userPassword . $sold;
        return md5($hashString);
    }

    public function addUser($request)
    {
        var_dump($request['name']);
        if (empty($request) || !is_array($request)) {
            throw new \Exception('Передали неверные данные');
        }
        else {

            foreach ($request as $k => &$val) {
                if ($k === 'password') {
                    $val = $this->getPassHash($val);
                }
                if ($val !== '') {
                    $val = "'" . $val . "'";
                }
            }

            $keys = implode(', ', array_keys($request));
            $values = implode(',', $request);
            $addUser = "INSERT INTO `users` ({$keys}) VALUES ({$values})";
            $this->dbAccess->query($addUser);
        }
    }
}