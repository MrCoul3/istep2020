<?php
//BITRIX
//-------------------------------------------------------------------

// !!!административная и публичная часть сайта!!!

//Контент-менеджер
//https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=34&INDEX=Y

//Специальные константы
//https://dev.1c-bitrix.ru/api_help/main/general/constants.php



//-------------------------------------------------------------------

// сделать excluded в phpstorm  для папки bitrix: file->setting->directories
// на картинке excluded.jpg
//-------------------------------------------------------------------
//войти в админку root/bitrix admin 532256
//-------------------------------------------------------------------
// ПАПКА lOCAL root/local
//https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2705&LESSON_PATH=3913.4776.2483.2705
//Папка для своих доработок

    // Чтобы сделать жизнь разработчиков проектов удобнее,
    // в рамках работ по новому ядру D7 с версии главного
    // модуля 14.0.1 основные файлы проекта вынесены из
    // папки /bitrix в папку /local. Это позволит изолировать
    // изменяющиеся файлы проекта от папки продукта.
    // По сути, в исключения достаточно будет добавить одну папку /bitrix.

//  root/local
//      /components - компонент
//          / web (namespace)
//                / compName (имя компонента)
//                      / templates - шаблон компонента
//                      / component.php
//                          /.default
//templates - папка шаблона сайта
// иерархия в файле Local.png

// если в папке local/templates создать templates/temp_name/
// в нем созздать файлы footer.php и header.php
// в алминистративной части сайта выбрать Настройки -> настр продукта->сайты->список сайтов
// выбрать сайт, и внизу в Шаблон сайта выбрать свой щаблон
// Подключить header И footer в Index.php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");

// для подключения компонента из папки  local / compName (имя компонента)
// в файле index.php выполнить код:
global $APPLICATION;
$APPLICATION->IncludeComponent('namespace: component', "my_template", [
    'параметры' => 'параметры',
],
    false);
// в файле component.php вставить код
$this->IncludeComponentTemplate();
// в файле template.php можно писать html разметку

// $arParams и $arResult
// index.php ['PAR'=>'VAL'] -> $arParam -> component.php -> $arResult -> template.php
// файл component.php (\bitrix\local\components\coul_namespace\coul_component\component.php)  принимает
//  параметры, переданные в
// $APPLICATION->IncludeComponent(':', "", ['параметры' => 'параметры', 'COLOR' => 'red',],
// с помощью глобальной переменной $arParams.
     $color = $arParams['COLOR']; // var_dump($color) // 'red';
// в component.php данные обрабатываются (бизнес логика) и отправляются в template.php в переменной
// $arResult, где эти данные могут применяться как угодно


// result_modifier.php
// находится bitrix\local\components\coul_namespace\coul_component\templates\my_template/result_modifier.php
// с его помощью можно перехватывать $arResult для конкретного шаблона например:
    //result_modifier.php code
    $arResult['SIZE'] = $arParams['SIZE'] * 10; // в template.php придет значение, вычислинное в result_modifier

// ПРИОРИТЕТЫ у шаблона сайта.
// Приоритеты -
//1 local/templates
//2 Local/components/../../templates
//3 bitrix/components/
//-------------------------------------------------------------------
    //  статические методы
//статические методы :: https://www.php.net/manual/ru/language.oop5.static.php
//Объявление свойств и методов класса статическими позволяет обращаться к ним без создания
//экземпляра класса. Свойство класса, объявленное как статическое, не может быть доступно
//посредством экземпляра класса (но статический метод может быть вызван).
//-------------------------------------------------------------------


        //Bitrix Framework - технологическое ядро (платформа) для создания
//и управления проектами (веб-сайтами и корпоративными порталами).
//Платформа позволяет создавать неограниченное количество проектов с
//применением одной копии (лицензии) продукта, размещая ядро и базу данных
//системы в единственном экземпляре на сервере.
//https://dev.1c-bitrix.ru/api_help/

//-------------------------------------------------------------------




                                //ИЗУЧИТЬ
    //Теория. component_epilog.php
//https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2975
//Файл component_epilog.php - инструмент для модификации
//данных работы компонента с включенным кешированием.
//Создается разработчиком самостоятельно. (Доступен с версии 9.0.)

    //Контент-менеджер
//https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=34&INDEX=Y




// ?>
 
 
 
 
 
 











<?php

//-------------------------------------------------------------------------------
//решил проблему с неотображением верстки в административной части битрикса. Дело было в open server.
// Необходимо зайти в OpenServer\userdata\config найти там файл Apache_2.4-PHP_7.0-7.1_server.conf и в нем строки
//<LocationMatch "/\.(?!well-known)">
//    Require             all denied
//</LocationMatch>
//и закоментить их # без этого не получится работать с ифноблоками.
//-------------------------------------------------------------------------------
?>