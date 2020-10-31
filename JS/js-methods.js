arr.sort() Метод сортировки по уменьшению или увеличеню значения 
/* let items = [
    {id: 1, sum: 12},
    {id: 2, sum: 18},...
items.sort((a, b) => b.sum - a.sum);
arr.sort((a, b) => a.length - b.length); */
Если нужна сортировка по дате: sortByDate() {
    newsArray.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
 }

Date.parse(YYYY-MM-DD) - обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.

Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
Math.sqrt() - Возвращает положительный квадратный корень числа.

string.trim() - удаляет пробельные символы 
string.toLowerCase() - делает все символы маленькими 

concat() - сливает указанные массивы в один общий массив. Метод применяется к одному из массивов, а в параметрах метода передаются остальные массивы для слияния. /* (var c = a.concat(b);) */
map() - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. /* (let newArr = arr.map((item, index) => return item * 10)) */
filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции./*  (const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; const result = words.filter(word => word.length > 6);) */

// Методы массивов
arr.forEach(function(item, i, arr) { /code });