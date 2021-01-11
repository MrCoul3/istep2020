<?php


class HtmlWebForm
{
    public $html = '';
    public $method = '';
    public $action ='';

     function __construct($method, $action)
    {
        echo '<form method=' . $method .' action= ' .$action. ' >';
    }

    public function addHtml($elem)
    {
        $this->html .= $elem . PHP_EOL;
    }

    public function createElem($elemName, $content = false, $type = false)
    {
            $elem = '<' . $elemName . ' type=' .$type. '>';
            $this->addHtml($elem);
    }

    public function createInput($type)
    {
    $elem = '<input type='.$type.'>';
    $this->addHtml($elem);
    }

    public function createTextarea($form)
    {
        $elem = '<textarea form='.$form.'></textarea>';
        $this->addHtml($elem);

    }

    public function createSelect($name, $countOptions)
    {
        $opt ='';
        for ($i = 0; $i < $countOptions; $i++) {
            $opt .= '<option>'.($i+1).'</option>' . PHP_EOL;
        }
        $elem = '<select name='.$name.'>'.$opt.'</select>';
        $this->addHtml($elem);
    }

    public function createButton($content)
    {
        $elem = '<button>'.$content.'</button>';
        $this->addHtml($elem);
    }

    public function getHtml()
    {
        echo $this->html;
    }
}