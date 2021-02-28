
// Домашнее задание No1 «Линейные алгоритмы»

// 1
{
    const a = 5;
    const b = 4;

    console.log( `Answer #1: mul = ${a*b} and sum = ${ a + b };` );
}

// 2
{
    const str1 = "hello";
    const str2 = "lo";

    console.log( `Answer #2: ${str1.length + str2.length}` );
}

// 3
{
    // let result = prompt( "enter a three-digit number");
    let result = "123";
    let sum = 0;

    for ( let count = result.length; count > 0; count--)
    {
        sum += +result.charAt( count - 1 );
    }

    console.log( `Answer #3: \"${ result }\" sum = ${sum}` );
}
