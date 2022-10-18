<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
РОССИЙСКОЙ ФЕДЕРАЦИИ
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Хроменков Владимир Александрович</p>
<br><br><br>
<p align = "center">Лабораторная работа №3<br>«Основы языка <strong>JavaScript</strong>»<br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2022 г.</p>

***
# <p align = "center">Оглавление</p>

- [Цели и задачи](#цели-и-задачи)
- [Решение задач](#решение-задач)
    - [HTML](#html)
    - [JavaScript](#javascript)
    - [Codewars](#codewars)
- [Вывод](#вывод)

***

# <p align = "center">Цели и задачи</p>

1. Что выведет код ниже?

    ```js
    alert( null || 2 || undefined );
    ```

2. Что выведет код ниже?  
    ```js
    alert( alert(1) || 2 || alert(3) );
    ```

3. Что выведет код ниже?  
    ```js
    alert( 1 && null && 2 );
    ```

4. Что выведет `alert(И)`?  
    ```js
    alert( alert(1) && alert(2) );
    ```

5. Что выведет этот код?  
    ```js
    alert( null || 2 && 3 || 4 );
    ```

6. Напишите условие `if` для проверки, что переменная `age` находится в диапазоне между `14` и `90` включительно. «Включительно» означает, что значение переменной `age` может быть равно `14` или `90`.

7. Напишите условие `if` для проверки, что значение переменной `age` НЕ находится в диапазоне `14` и `90` включительно. Напишите два варианта: первый с использованием оператора НЕ `!`, второй – без этого оператора.

8. Какие из перечисленных ниже `alert` выполнятся?  
Какие конкретно значения будут результатами выражений в условиях `if(...)`?

    ```js
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third'
    ```

9. Проверка логина  
важность: 3  
Напишите код, который будет спрашивать логин с помощью `prompt`.  
Если посетитель вводит `Админ`, то `prompt` запрашивает пароль, если ничего не введено или нажата клавиша `Esc` – показать `Отменено`, в противном случае отобразить `Я вас не знаю`.  
Пароль проверять так:  
Если введён пароль `Я главный`, то выводить `Здравствуйте!`, Иначе – `Неверный пароль`, При отмене – `Отменено`.  

10. Какое последнее значение выведет этот код? Почему?

    ```js
    let i = 3;
    while (i) {
        alert( i-- );
    }
    ```

11. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.  
Оба цикла выводят `alert` с одинаковыми значениями или нет?  
    Префиксный вариант `++i`:

    ```js
    let i = 0;
    while (++i < 5) alert( i );
    ```

    Постфиксный вариант `i++`:

    ```js
    let i = 0;
    while (i++ < 5) alert( i );
    ```

12. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.  
Оба цикла выведут `alert` с одинаковыми значениями или нет?

    Постфиксная форма:

    ```js
    for (let i = 0; i < 5; i++) alert( i );
    ```

    Префиксная форма:

    ```js
    for (let i = 0; i < 5; ++i) alert( i );
    ```

13. При помощи цикла `for` выведите чётные числа от `2` до `10`.

14. Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

    ```js
    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
    ```

15. Напишите цикл, который предлагает `prompt` ввести число, большее `100`. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее `100`, либо не нажмёт кнопку Отмена `ESC`. Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

16. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток. Например, 5 — это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

    Напишите код, который выводит все простые числа из интервала от `2` до `n`. Для `n = 10` результат должен быть `2`,`3`,`5`,`7`.

17. Напишите `if..else`, соответствующий следующему `switch`:

    ```js
    switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;

        default:
            alert( 'We hope that this page looks ok!' );
    }
    ```

18. Перепишите код с использованием одной конструкции `switch`:

    ```js
    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
        alert('Вы ввели число 0');
    }

    if (number === 1) {
        alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
    }
    ```

19. Следующая функция возвращает `true`, если параметр `age` больше `18`. В ином случае она запрашивает подтверждение через `confirm` и возвращает его результат:

    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm('Родители разрешили?');
        }
    }
    ```
    Будет ли эта функция работать как-то иначе, если убрать `else`?

    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm('Родители разрешили?');
    }
    ```

    Есть ли хоть одно отличие в поведении этого варианта?

20. Следующая функция возвращает `true`, если параметр `age` больше `18`. В ином случае она задаёт вопрос `confirm` и возвращает его результат.

    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Родители разрешили?');
        }
    }
    ```

    Перепишите функцию, чтобы она делала то же самое, но без `if`, в одну строку.

    Сделайте два варианта функции `checkAge`:

    - Используя оператор `?`
    - Используя оператор `||`

21. Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.  
Пример вызовов:

    ```js
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
    ```

22. Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.

    ```js
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
    ```

    Создайте страницу, которая запрашивает `x` и `n`, а затем выводит результат `pow(x,n)`.


23. [Highest and Lowest](https://www.codewars.com/kata/highest-and-lowest)
24. [Disemvowel Trolls](https://www.codewars.com/kata/disemvowel-trolls)
25. [Isograms](https://www.codewars.com/kata/isograms)
26. [Digits Explosion](https://www.codewars.com/kata/digits-explosion)  

27. [Handshake Problem](https://www.codewars.com/kata/handshake-problem)
28. [Duplicate Encoder](https://www.codewars.com/kata/duplicate-encoder)
29. [N-th Fibonacci](https://www.codewars.com/kata/n-th-fibonacci)
30. [Multiples of 3 or 5](https://www.codewars.com/kata/multiples-of-3-or-5)

***

# <p align = "center">Решение задач</p>

## HTML

```html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8" />
        <title>Лабораторная 3</title>
    </head>
    <body>
        <script>
            document.addEventListener("DOMContentLoaded", function(){
                zad1();
                zad2();
                zad3();
                zad4();
                zad5();
                zad6();
                zad7();
                zad8();
                zad9();
                zad10();
                zad11();
                zad12();
                zad13();
                zad14();
                zad15();
                zad16();
                zad17();
                zad18();
                zad19();
                zad20();
                zad21();
            });
        </script>
        <h2>Задание 1</h2>
        <div id="insert-1"></div><br>

        <h2>Задание 2</h2>
        <div id="insert-2"></div><br>

        <h2>Задание 3</h2>
        <div id="insert-3"></div><br>

        <h2>Задание 4</h2>
        <div id="insert-4"></div><br>

        <h2>Задание 5</h2>
        <div id="insert-5"></div><br>

        <h2>Задание 6</h2>
        <div id="insert-6"></div><br>

        <h2>Задание 7</h2>
        <div id="insert-7"></div><br>

        <h2>Задание 8</h2>
        <div id="insert-8"></div><br>

        <h2>Задание 9</h2>
        <div id="insert-9"></div><br>

        <h2>Задание 10</h2>
        <div id="insert-10"></div><br>

        <h2>Задание 11</h2>
        <div id="insert-11"></div><br>

        <h2>Задание 12</h2>
        <div id="insert-12"></div><br>

        <h2>Задание 13</h2>
        <div id="insert-13"></div><br>

        <h2>Задание 14</h2>
        <div id="insert-14"></div><br>

        <h2>Задание 15</h2>
        <div id="insert-15"></div><br>

        <h2>Задание 16</h2>
        <div id="insert-16"></div><br>

        <h2>Задание 17</h2>
        <div id="insert-17"></div><br>

        <h2>Задание 18</h2>
        <div id="insert-18"></div><br>

        <h2>Задание 19</h2>
        <div id="insert-19"></div><br>

        <h2>Задание 20</h2>
        <div id="insert-20"></div><br>

        <h2>Задание 21</h2>
        <div id="insert-21"></div><br>

        <h2>Задание 22</h2>
        <label for="x">x:    </label>
        <input type="number" id="x"><br>
        <label for="n">n:    </label>
        <input type="number" id="n"><br><br>
        <button type="button" onclick="zad22()">Посчитать</button><br>
        <div id="insert-22"></div><br><br><br>

        <script src="index.js"></script>   
    </body>
</html>
```

## JavaScript

```js
//Дополнительные функции вывода
function insertInPage(where, that, isBr = true){
    if(isBr) document.getElementById(where).innerHTML = that + "<br>";
    else document.getElementById(where).innerHTML = that;
}
function appendInPage(where, that, isBr = true){
    if(isBr) document.getElementById(where).innerHTML += that + "<br>";
    else document.getElementById(where).innerHTML += that;
}
//<--------------------------->//

function zad1(){
    //alert(null || 2 || undefined);

    insertInPage("insert-1", "Что выведет код ниже?");
    appendInPage("insert-1", "alert(null || 2 || undefined);");
    appendInPage("insert-1", "Ответ: 2");
}

function zad2(){
    //alert(alert(1) || 2 || alert(3));

    insertInPage("insert-2", "Что выведет код ниже?");
    appendInPage("insert-2", "alert(alert(1) || 2 || alert(3));");
    appendInPage("insert-2", "Ответ: 2");
}

function zad3(){
    //alert(1 && null && 2);

    insertInPage("insert-3", "Что выведет код ниже?");
    appendInPage("insert-3", "alert(1 && null && 2);");
    appendInPage("insert-3", "Ответ: null");
}

function zad4(){
    //alert(alert(1) && alert(2));

    insertInPage("insert-4", "Что выведет код ниже?");
    appendInPage("insert-4", "alert(alert(1) && alert(2));");
    appendInPage("insert-4", "Ответ: undefined");
}

function zad5(){
    //alert(null || 2 && 3 || 4);

    insertInPage("insert-5", "Что выведет код ниже?");
    appendInPage("insert-5", "alert(null || 2 && 3 || 4);");
    appendInPage("insert-5", "Ответ: 3");
}

function zad6(){
    var ages = [13, 14, 46, 90, 91];
    insertInPage("insert-6", "Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.");
    appendInPage("insert-6", "Ответ: if (age >= 14 && age <= 90)");
    
    ages.forEach(function(age, i, ages) {
        appendInPage("insert-6", age, false);
        if (age >= 14 && age <= 90)
            appendInPage("insert-6", " - Подходит");
        else
            appendInPage("insert-6", " - Не подходит");
    });
}

function zad7(){
    var ages = [13,14,46,90,91];
    insertInPage("insert-7", "Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.");
    appendInPage("insert-7", "Ответ 1: if (!(age >= 14 && age <= 90))");
    appendInPage("insert-7", "Ответ 2: if (age < 14 || age > 90)");
    
    ages.forEach(function(age, i, ages) {
        appendInPage("insert-7", age, false);
        if (age < 14 || age > 90)
            appendInPage("insert-7", "Вне диапозона");
        else
            appendInPage("insert-7", "В диапозоне");
    });
}

function zad8(){
    insertInPage("insert-8", "Какие из перечисленных ниже alert выполнятся");
    appendInPage("insert-8", "Какие конкретно значения будут результатами выражений в условиях if(...)?");
    
    appendInPage("insert-8", "if (-1 || 0) alert('first');");
    appendInPage("insert-8", "Ответ 1: " + (-1 || 0));

    appendInPage("insert-8", "if (-1 && 0) alert('second');");
    appendInPage("insert-8", "Ответ 2: " + (-1 && 0));

    appendInPage("insert-8", "if (null || -1 && 1) alert('third');");
    appendInPage("insert-8", "Ответ 3: " + (null || -1 && 1));
}

function zad9(){
    insertInPage("insert-9", "Проверка логина");
    appendInPage("insert-9", "login: " + login);
    appendInPage("insert-9", "pass: " + pass);

    var login = prompt("Введите логин:", "Админ");
    if (login === null){
        alert("Отменено");
        appendInPage("insert-9", "Отменено");
    }
    else if (login === "Админ") {
        var pass = prompt("Введите пароль:", "Я главный");
        if (pass === null){
            alert("Отменено");
            appendInPage("insert-9", "Отменено");
        }
        else if (pass === "Я главный"){
            alert("Здравствуйте!");
            appendInPage("insert-9", "Здравствуйте!");
        }
        else{
            alert("Неверный пароль");
            appendInPage("insert-9", "Неверный пароль");
        }
    }
    else {
        alert("Я вас не знаю");
        appendInPage("insert-9", "");
    }
}

function zad10(){
    insertInPage("insert-10", "Какое последнее значение выведет этот код? Почему?");
    appendInPage("insert-10", "let i = 3;");
    appendInPage("insert-10", "while (i) {");
    appendInPage("insert-10", "    alert(i--);");
    appendInPage("insert-10", "}");
    appendInPage("insert-10", "Ответ: на последней итерации выведет 1, после");
    appendInPage("insert-10", "этого значение переменной i = 0 и цикл прекратит свое выполнение");
}

function zad11(){
    //11.
    insertInPage("insert-11", "Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.");
    appendInPage("insert-11", "Оба цикла выводят alert с одинаковыми значениями или нет?");

    appendInPage("insert-11", "1) Префиксный вариант ++i:");
    appendInPage("insert-11", "let i = 0;");
    appendInPage("insert-11", "while (++i < 5) alert( i );");
    appendInPage("insert-11", "   Вывод: 1, 2, 3, 4");

    appendInPage("insert-11", "<br>",false);

    appendInPage("insert-11", "2) Постфиксный вариант i++");
    appendInPage("insert-11", "let i = 0;");
    appendInPage("insert-11", "while (i++ < 5) alert( i );");
    appendInPage("insert-11", "   Вывод: 1, 2, 3, 4, 5");

}

function zad12(){
    insertInPage("insert-12", "Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. ");
    appendInPage("insert-12", "Оба цикла выведут alert с одинаковыми значениями или нет?");
    
    appendInPage("insert-12", "1) Постфиксная форма:");
    appendInPage("insert-12", "for (let i = 0; i < 5; i++) alert( i );");
    appendInPage("insert-12", "Ответ: 0, 1, 2, 3, 4")

    appendInPage("insert-12", "<br>",false);

    appendInPage("insert-12", "2) Префиксная форма:");
    appendInPage("insert-12", "for (let i = 0; i < 5; ++i) alert( i );");
    appendInPage("insert-12", "Ответ: 0,1, 2, 3, 4")
}

function zad13(){
    insertInPage("insert-13", "При помощи цикла for выведите чётные числа от 2 до 10.");

    for (let i = 2; i < 11; i++) {
        if (i % 2 == 0)
            appendInPage("insert-13", i + "    ", false);
    }

    appendInPage("insert-13", "<br>", false);
}

function zad14(){
    insertInPage("insert-14", "Перепишите код, заменив цикл for на while, без изменения поведения цикла.");

    appendInPage("insert-14", "for (let i = 0; i < 3; i++) {");
    appendInPage("insert-14", "  alert( `number ${i}!` );");
    appendInPage("insert-14", "}");

    appendInPage("insert-14", "<br>", false);

    appendInPage("insert-14", "let i = -1;");
    appendInPage("insert-14", "while (i++ < 2) {");
    appendInPage("insert-14", "    alert(`number ${i}!`);");
    appendInPage("insert-14", "}");
}

function zad15(){
    var num = null;
    do {
        num = prompt("Введите число большее 100");
    } while (num <= 100 && num != null);

    insertInPage("insert-15", "Вы ввели число " + num);
}

function zad16(){
    insertInPage("insert-16", "Простые числа");

    const primes = [];
    var n = prompt("16. Простые числа. Введите n:", 10);
    for (let i = 2; i < n; i++) {
        flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0)
                flag = false;
        }
        if (flag === true)
            primes.push(i);
    }

    appendInPage("insert-16", primes);
}

function zad17(){
    insertInPage("insert-17", "Напишите if..else, соответствующий следующему switch:");
    appendInPage("insert-17", "switch (browser) {");
    appendInPage("insert-17", "  case 'Edge':");
    appendInPage("insert-17", `    alert( "You've got the Edge!" );`);
    appendInPage("insert-17", "    break;");
    appendInPage("insert-17", "  case 'Chrome':");
    appendInPage("insert-17", "  case 'Firefox':");
    appendInPage("insert-17", "  case 'Safari':");
    appendInPage("insert-17", "  case 'Opera':");
    appendInPage("insert-17", "    alert( 'Okay we support these browsers too' );");
    appendInPage("insert-17", "    break;");
    appendInPage("insert-17", "  default:");
    appendInPage("insert-17", "    alert( 'We hope that this page looks ok!' );");
    appendInPage("insert-17", "}");
    
    appendInPage("insert-17", "<br>Ответ:<br>");

    appendInPage("insert-17", "if (browser == 'Edge')");
    appendInPage("insert-17", `    alert( "You've got the Edge!" );`);
    appendInPage("insert-17", `else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera')`);
    appendInPage("insert-17", "    alert( 'Okay we support these browsers too' );");
    appendInPage("insert-17", "else");
    appendInPage("insert-17", "    alert( 'We hope that this page looks ok!' );");
}

function zad18(){
    insertInPage("insert-18", "Перепишите код с использованием одной конструкции switch:");
    appendInPage("insert-18", " const number = +prompt('Введите число между 0 и 3', '');");
    appendInPage("insert-18", "if (number === 0) {");
    appendInPage("insert-18", "  alert('Вы ввели число 0');");
    appendInPage("insert-18", "}");
    appendInPage("insert-18", "if (number === 1) {");
    appendInPage("insert-18", "  alert('Вы ввели число 1');");
    appendInPage("insert-18", "}");
    appendInPage("insert-18", "if (number === 2 || number === 3) {");
    appendInPage("insert-18", "  alert('Вы ввели число 2, а может и 3');");
    appendInPage("insert-18", "}");
    
    appendInPage("insert-18", "<br>Ответ:<br>");

    appendInPage("insert-18", "switch (number) {");
    appendInPage("insert-18", "    case 0:");
    appendInPage("insert-18", "        alert('Вы ввели число 0');");
    appendInPage("insert-18", "        break;");
    appendInPage("insert-18", "    case 1:");
    appendInPage("insert-18", "        alert('Вы ввели число 1');");
    appendInPage("insert-18", "        break;");
    appendInPage("insert-18", "    case 2:");
    appendInPage("insert-18", "    case 3:");
    appendInPage("insert-18", "        alert('Вы ввели число 2, а может и 3');");
    appendInPage("insert-18", "        break;");
    appendInPage("insert-18", "    default:");
    appendInPage("insert-18", "        break;");
    appendInPage("insert-18", "}");
}

function zad19(){
    insertInPage("insert-19", "Следующая функция возвращает true, если параметр age больше 18.");
    appendInPage("insert-19", "В ином случае она запрашивает подтверждение через confirm и возвращает его результат:");
    appendInPage("insert-19", "function checkAge(age) {");
    appendInPage("insert-19", "  if (age > 18) {");
    appendInPage("insert-19", "    return true;");
    appendInPage("insert-19", "  } else {");
    appendInPage("insert-19", "    // ...");
    appendInPage("insert-19", "    return confirm('Родители разрешили?');");
    appendInPage("insert-19", "  }");
    appendInPage("insert-19", "}");

    appendInPage("insert-19", "<br>",false);
    
    appendInPage("insert-19", "Будет ли эта функция работать как-то иначе, если убрать else?");
    appendInPage("insert-19", "Есть ли хоть одно отличие в поведении этого варианта?");
    appendInPage("insert-19", "Ответ: отличий нет");
}

function zad20(){
    insertInPage("insert-20", "Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.");
    appendInPage("insert-20", "Сделайте два варианта функции checkAge:");
    
    appendInPage("insert-20", "1) Используя оператор ?");
    appendInPage("insert-20", "age > 18 ? true : confirm('Родители разрешили?');");

    appendInPage("insert-20", "2) Используя оператор ||");
    appendInPage("insert-20", "age > 18 || confirm('Родители разрешили?')");
}

function min(a, b) {
    return a < b ? a : b;
}
function zad21(){
    insertInPage("insert-21", "Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.");
    appendInPage("insert-21","min(2, 5) = " + min(2, 5));
    appendInPage("insert-21","min(3, -1) = " + min(3, -1));
    appendInPage("insert-21","min(1, 1) = " + min(1, 1));
}

function pow(x, n) {
    if (n === 0)
        return 1;

    if (Math.abs(n) < 1 || isNaN(n))
        return "не поддерживается";

    let res = 1;

    for (let i = 0; i < Math.abs(n); i++) {
        res *= x;
    }

    if (n < 0)
        res = 1 / res;

    return res;
}

function zad22(){
    let x = Number(document.getElementById("x").value);
    let n = Number(document.getElementById("n").value);
    insertInPage("insert-22", "Результат: " + pow(x, n));
}
```

## Codewars
### [Профиль CodeWars](https://www.codewars.com/users/ZFGinc)

Highest and Lowest
```js
function highAndLow(numbers){
  var nums = numbers.split(` `).map(x => +x)
  var min = nums[0];
  var max = nums[0];
  
  for(let i = 1; i < nums.length; i++){
    if(nums[i] < min) min = nums[i];
    if(nums[i] > max) max = nums[i];
  }
  
  return max+" "+min;
}
```

Disemvowel Trolls
```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

Isograms
```js
function isIsogram(str){
  str = str.toLowerCase();
  let arr = [];
  
  for (let letter of str) {
    if (arr.indexOf(letter) === -1) {
      arr.push(letter)
    }
  }
  
   return arr.join("") === str;
}
```

Digits Explosion
```js
function explode(s) {
  var res = "";
  for(let i = 0; i < s.length; i++){
    let a = Number(s[i]);
    for(let j = 0; j < a; j++){
      res+=s[i];
    }
  }
  return res;
}
```

Handshake Problem
```js
function getParticipants(handshakes) {
    let p = 1;
    if (handshakes <= 0)
        return 0;
    do {
        temp = ++p * (p - 1) / 2;
    } while (temp < handshakes);
    return p;
}
```

Duplicate Encoder
```js
function duplicateEncode(word) {
    word = word.toLowerCase().split('');
    counter = new Map()

    let res = "";
    for (const letter of word) {
        if (counter.get(letter))
            counter.set(letter, 2)
        else
            counter.set(letter, 1)
    }

    for (const letter of word) {
        counter.get(letter) == 1 ? res += '(' : res += ')';
    }

    return res;
}
```

N-th Fibonacci
```js
function nthFibo(n) {
    if (n === 1)
        return 0;

    if (n === 2)
        return 1;

    let one = 0, two = 1;
    for (let i = 0; i < n - 2; i++) {
        two += one;
        one = two - one;
    }

    return two;
}
```

Multiples of 3 or 5
```js
function solution(number) {
    if (number < 3)
        return 0;

    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    }

    return sum;
}
```

***

# <p align = "center">Вывод</p>

Выполнил *лабораторную работу №3*, продолжая вспоминать знания по языку программирования **JavaScript + HTML**. Научился работать с `git`, освоив его базовые команды: `init`, `status`, `log`, `add`, `commit`, `push` и `pull`. Создал свой первый репозиторий на платформе [**GitHub**](https:\\github.com). Также освоил язык разметки **Markdown** и оформил отчет в  `README.md` своего репозитория.
