// Домашнее задание No6 «Функции»


// 1.Напишите функцию diff, которая получает в качестве параметров 2 числа 
// и возвращает разницу между наибольшим и наименьшим.

function diff(a, b) {
    return a > b ? a - b : b - a;
}

console.log( diff(8, 3) );

// 2.Напишите функцию isWord, которая принимает на вход текстовую строку.
// Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.

function isWord(str){
    return String( str ).trim().indexOf(' ') === -1;
}

console.log( isWord( " oneString " ) );
console.log( isWord( "two string" ) );

// *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.

function pow( a, x ){
    return a ** x;
}

console.log( pow(2, 3) );