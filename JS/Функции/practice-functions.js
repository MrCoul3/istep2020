
	function show5Blocks()
	{
		for (let i = 1; i <= 5; i++) {
			document.write('<h2>Header ' + i + '</h2>');
		}
	}
	
	
	
	function incAndLog(x) {
	   x = x + 1;
	   alert("inc x = " + x);
	   Log.innerHTML += "<br>inc x = " + x;
	}
	
	
	function cube(x) {
	   return x*x*x;
	}
	
	
	
	
	//1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
	
	function min(a, b){
		return (a > b)? b: a;
	}
	
	//alert(min(-90, 4));
	
	//2. Написать функцию, которая возводит переданное число в указанную степень
	
	function power(x, y){
		let result = 1;
		while (y > 0) {
			result = result * x;
			y--;
		}
		
		return result;
	}
	
	//alert(power(2, 9));
	
	//3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
	 
	function calc(a, b, operator){
		switch (operator) {
			case '+':
			return a + b;
			case '-':
			return a - b;
			case '*':
			return a * b;
			case '/':
			return a / b;
		}
	}
	
	//alert(calc(10, 15, '+'));
	//alert(calc(10, 15, '-'));
	//alert(calc(10, 15, '*'));
	//alert(calc(10, 15, '/'));
	
	//4. Написать функцию, которая проверяет, является ли переданное ей число простым.
	
	function isSimple(x){
		for (let i = x - 1; i > 1; i--) {
			if ((x % i) == 0) {
				return 'Число не простое';
			}
		}
		
		return 'Число простое';
	}
	
	//alert(isSimple(7));
	//alert(isSimple(16));
	
	//5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
	
	function table(x){
		for (let i = 1; i <= 10; i++) {
			document.write(x + ' * ' + i + ' = ' + x * i + '<br>');
		}
		document.write('<hr>');
	}
	
	//for (let i = 2; i <= 9; i++) {
		//table(i);
	//}
	
	//6. Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать. 
	
	function rest(a, b){
		let div = parseInt(a / b);
		return a - b * div;
	}
	
	//alert(rest(5, 2)); // 1
	//alert(rest(15, 3)); // 0
	//alert(rest(37, 8)); // 5
	
	//7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму
	
	function summ(){
		let result = 0;
		for (let i = 0; i < arguments.length; i++) {
			if (i > 4) {
				break;
			}
		    result += arguments[i];
		}
		
		return result;
	}
	
	//alert(summ(10, 7, 11, 90, 10, 20, 100000));
	
	//8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
	
	function max(){
		let max = arguments[0];
		for (let i = 0; i < arguments.length; i++) {
			if (i > 4) {
				break;
			}
			if (arguments[i] > max) {
				max = arguments[i];
			}
		}
		
		return max;
	}
	
	//alert(max(1,2,3,4,5,6,7,8,9,10));
	
	//9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
	
	function showNumbers(a, b, even){
		for (let i = a; i <= b; i++) {
			if (even) {
				if ((i % 2) == 0) {
					document.write(i + '<br>');
				}
			} else {
				if ((i % 2) != 0) {
					document.write(i + '<br>');
				}
			}
		}
	}
	//showNumbers(5, 50, true);
	//document.write('<hr>');
	//showNumbers(40, 79, false);
	
	//10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.
	
	function getNextDate(day, month, year){
		let maxDay = 30;
		if (month == 2) {
			maxDay = isLeapYear(year)? 29: 28;
		} else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
			maxDay = 31;
		}
		
		if (day == maxDay) {
			day = 1;
			
			if (month == 12) {
				month = 1;
				year++;
			} else {
				month++;
			}
			
		} else {
			day++;
		}
		
		if (day < 10) {
			day = '0' + day;
		}
		
		if (month < 10) {
			month = '0' + month;
		}
		
		return day + '.' + month + '.' + year;
	}
	
	function isLeapYear(year){
		return ((year % 400) == 0 || ((year % 4) == 0 && (year % 100) != 0));
	}
	
	alert(getNextDate(23, 9, 2020));
	alert(getNextDate(28, 2, 2020));
	alert(getNextDate(29, 2, 2020));
	
	
	
	
	