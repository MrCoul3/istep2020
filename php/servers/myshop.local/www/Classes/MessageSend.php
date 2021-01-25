<?php


namespace Classes;


class MessageSend
{
    protected $dbAccess = null;

    public function __construct()
    {
        $this->dbAccess = new MyShopDbAccess();
    }
    public function addMessage($request)
    {
        if (empty($request)) {
            throw new \Exception('Передали неверные данные');
        }
        else {
            $request = "'" . $request . "'";
            $addMessage = "INSERT INTO `messages` (`message`) VALUES ({$request})";
            $this->dbAccess->query($addMessage);
        }
    }
    public function messageOutput()
    {
        $query = "SELECT message FROM messages WHERE id> 0";
        return $this->dbAccess->query($query);
    }

    public function clearDB()
    {
        $query = "DELETE FROM `messages` WHERE id > 0;";
        return $this->dbAccess->query($query);
    }
}