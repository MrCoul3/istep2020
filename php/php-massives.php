in_array ( $needle , array $haystack , bool $strict = false ) : bool  Проверяет, присутствует ли в массиве значение
    Если третий параметр strict установлен в true, тогда функция in_array() также проверит соответствие типов параметра needle и соответствующего значения массива haystack.
    if (in_array("Irix", $os)) {
    echo "Нашёл Irix";
    }

array_key_exists — Проверяет, присутствует ли в массиве указанный ключ или индекс