// Домашнее задание No4 «Объекты»

// Создайте объект user, содержащий поле name со значением ‘John’



const user = { name : 'John' };

// 1.Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
// user.age = +prompt("Enter age");
user.age = +"30";
console.log( user );


// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.
const admin = Object.assign( {}, user, {"role": "admin"} );
console.log( admin );

// *Записать все значения полей объекта admin в отдельные переменные.
// Имена переменных должны совпадать с названиями полей.

// const { name, age, role} = admin;
// console.log( name, age, role);

const { age, role} = admin;
console.log( age, role);