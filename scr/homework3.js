
// Домашнее задание No3 «Циклы»

// 1. Вывести в консоль сумму всех целых чисел от 50 до 100.
{

    let sum = 0;

    for( let count = 50; count < 100 ; count++ )
    {
        sum += count;
    }

    console.log( `Answer #1: sum = ${ sum };` );
}

// 2.Вывести в консоль таблицу умножения на 7.
{
    console.log( "Answer #2:" );

    for( let number = 1; number < 9; number++ )
    {
        console.log( `7 x ${number} = ${7 * number}` );
    }
}