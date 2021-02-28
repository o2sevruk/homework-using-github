// Домашнее задание No5 «Массивы»

// Создайте массив целых чисел из 10 элементов

const tenNumbers = [ 10, 20, 30, 40, 50, 1, 1, 1, 2 ];



// 1.Выведите в консоль сумму всех элементов массива.
{
    let sum = 0;
    tenNumbers.forEach( (el) => {
        sum += el;
    });

    console.log( sum );
}

// 2.Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

{
    const newArray = [];

    tenNumbers.forEach( (el) => {
        newArray.push( el << 1);
    });

    console.log( newArray );
}



// 3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.

{
    let min = tenNumbers[0] ;
    let max = min ;

    tenNumbers.forEach( (el) => {
        if (el > max) {
            max = el;
        }
        if( el < min ) {
            min = el;
        }        
    });

    console.log( max, min );
}