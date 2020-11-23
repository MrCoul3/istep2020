http://jquery.page2page.ru/index.php5/Ajax-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81
$.ajax({
    url: 'ajax/test.html',
    setting: 
    }
  });

async
data
datatype
type   GET передает параметры в url POST ПАРАМЕТРЫ В ТЕЛЕ ЗАПРОСА

Обработчики событий
( ОСНОВНЫЕ success  beforeSend)

[beforeSend происходит непосредственно перед отправкой запроса на сервер.
error происходит в случае неудачного выполнения запроса.
dataFilter происходит в момент прибытия данных с сервера. Позволяет обработать "сырые" данные, присланные сервером.
success происходит в случае удачного завершения запроса.
complete происходит в случае любого завершения запроса.]

$.ajax({
    url: 'ajax/test.html',
    success: function(){
      alert('Load was performed.');
    }
  });