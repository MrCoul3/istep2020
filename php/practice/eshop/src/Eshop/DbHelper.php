<?php


namespace Eshop;


class DbHelper
{
    protected $folderPath = 'db/';
    protected $data = [];
    protected $file = '';
    protected $arrSums = [];
    public function __construct($entityName)
    {
        $path = realpath($this->folderPath . $entityName . '.json');
        if (file_exists($path)) {
            $getFileContent = file_get_contents($path);

            if (empty($getFileContent)) {
                $fileData = [];
            } else {
                $fileData = json_decode(file_get_contents($path), true);
            }

            if (is_array($fileData)) {
                $this->data = $fileData;
            } else {
                throw new \Exception('Ошибка декодирования');
            }
            $this->file = $path;
        }
        else {
            throw new \Exception('Такой файл не найден');
        }
    }

    public function getData()
    {
        return $this->data;
    }
    public function addData($info)
    {

        if(is_array($info) && !empty($info)){
            $this->arrSums[] = $info;
        }
    }
    public function save()
    {
        $array = array_merge($this->data, $this->arrSums);
        echo "<pre>";
        print_r($array);
        echo "</pre>";
        file_put_contents($this->file,json_encode($array));

    }
}