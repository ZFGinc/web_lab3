<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
РОССИЙСКОЙ ФЕДЕРАЦИИ
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Хроменков В.А.</p>
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
Блок-схема:

    <p align = "center">
        <img src = img/scheme.png>
    </p>

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

## <img src ="img/codewars_logo.svg" height = 32px> [Codewars](https://www.codewars.com)

![7kyu](img/codewars_7kyu.png)

23.  [Highest and Lowest](https://www.codewars.com/kata/highest-and-lowest)
24. [Disemvowel Trolls](https://www.codewars.com/kata/disemvowel-trolls)
25. [Isograms](https://www.codewars.com/kata/isograms)
26. [Digits Explosion](https://www.codewars.com/kata/digits-explosion)  

![6kyu](img/codewars_6kyu.png)

27. [Handshake Problem](https://www.codewars.com/kata/handshake-problem)
28. [Duplicate Encoder](https://www.codewars.com/kata/duplicate-encoder)
29. [N-th Fibonacci](https://www.codewars.com/kata/n-th-fibonacci)
30. [Multiples of 3 or 5](https://www.codewars.com/kata/multiples-of-3-or-5)

***

# <p align = "center">Решение задач</p>

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лаб. работа 3</title>
    <script src="index.js" defer></script>
</head>

<body>
    <h1>pow(x,n)</h1>
    <label for="x">x:</label><br>
    <input type="text" id="x"><br>
    <label for="n">n:</label><br>
    <input type="text" id="n"><br>
    <input type="submit" id="input">
    <p id="out"></p>
</body>

</html>
```

## JavaScript

```js
var cssRule =
    "color: rgb(249, 162, 34);" +
    "font-weight: bold;"

//1.
console.log("%c   1. Что выведет код ниже?", cssRule);
console.log("null || 2 || undefined");
console.log("Ответ: 2");

//2.
console.log("%c   2. Что выведет код ниже?", cssRule);
console.log("alert(1) || 2 || alert(3)");
console.log("Ответ: 2");

//3.
console.log("%c   3. Что выведет код ниже?", cssRule);
console.log("1 && null && 2");
console.log("Ответ: null");

//4.
console.log("%c   4. Что выведет alert (И)?", cssRule);
console.log("alert(1) && alert(2)");
console.log("Ответ: undefined")

//5.
console.log("%c   5. Что выведет этот код?", cssRule);
console.log("null || 2 && 3 || 4");
console.log("Ответ: 3");

//6.
console.log("%c   6. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. ", cssRule);
console.log("if (age >= 14 && age <= 90)");

//7.
console.log("%c   7. Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.", cssRule);
console.log("1) if (!(age >= 14 && age <= 90))");
console.log("2) if (age < 14 || age > 90)");

//8.
console.log("%c   8. Какие из перечисленных ниже alert выполнятся", cssRule);
console.log("%c Какие конкретно значения будут результатами выражений в условиях if(...)?", cssRule);
console.log("if (-1 || 0) alert('first');");
console.log("Ответ: " + (-1 || 0));
console.log("if (-1 && 0) alert('second');");
console.log("Ответ: " + (-1 && 0));
console.log("if (null || -1 && 1) alert('third');");
console.log("Ответ: " + (null || -1 && 1));

//9.
console.log("%c   9. Проверка логина", cssRule);
var login = prompt("Введите логин:", "Админ");
if (login === null)
    alert("Отменено");
else if (login === "Админ") {
    var pass = prompt("Введите пароль:", "Я главный");
    if (pass === null)
        alert("Отменено");
    else if (pass === "Я главный")
        alert("Здравствуйте!");
    else
        alert("Неверный пароль");
}
else
    alert("Я вас не знаю");


//10.
console.log("%c   10. Какое последнее значение выведет этот код? Почему?", cssRule);

console.log("let i = 3;");
console.log("while (i) {");
console.log("    alert(i--);");
console.log("}");
console.log("   Ответ: на последней итерации выведет 1, после этого значение переменной i = 0 и цикл прекратит свое выполнение");

//11.
console.log("%c   11. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.", cssRule);
console.log("%c Оба цикла выводят alert с одинаковыми значениями или нет?", cssRule);
console.log("   1) Префиксный вариант ++i:");
console.log("let i = 0;");
console.log("while (++i < 5) alert( i );");
console.log("   Вывод: 1, 2, 3, 4");
console.log("   2) Постфиксный вариант i++");
console.log("let i = 0;");
console.log("while (i++ < 5) alert( i );");
console.log("   Вывод: 1, 2, 3, 4, 5");

//12.
console.log("%c   12. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выведут alert с одинаковыми значениями или нет?", cssRule);
console.log("   1) Постфиксная форма:");
console.log("for (let i = 0; i < 5; i++) alert( i );");
console.log("Ответ: 0, 1, 2, 3, 4")
console.log("   2) Префиксная форма:");
console.log("for (let i = 0; i < 5; ++i) alert( i );");
console.log("Ответ: 0,1, 2, 3, 4")

//13.
console.log("%c  13. При помощи цикла for выведите чётные числа от 2 до 10.", cssRule)
for (let i = 2; i < 11; i++) {
    if (i % 2 == 0)
        console.log(i);
}

//14.
console.log("%c    14. Перепишите код, заменив цикл for на while, без изменения поведения цикла.", cssRule);
console.log("for (let i = 0; i < 3; i++) {");
console.log("  alert( `number ${i}!` );");
console.log("}");
console.log("\n");
console.log("let i = -1;");
console.log("while (i++ < 2) {");
console.log("    alert(`number ${i}!`);");
console.log("}");

//15.
do {
    var num = prompt("Введите число большее 100");
} while (num <= 100 && num != null);

//16.
console.log("%c   16. Простые числа", cssRule);
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
alert("Ответ в консоли!");
console.log(primes);

//17.
console.log("%c   17. Напишите if..else, соответствующий следующему switch:", cssRule);
console.log("switch (browser) {");
console.log("  case 'Edge':");
console.log(`    alert( "You've got the Edge!" );`);
console.log("    break;");
console.log("  case 'Chrome':");
console.log("  case 'Firefox':");
console.log("  case 'Safari':");
console.log("  case 'Opera':");
console.log("    alert( 'Okay we support these browsers too' );");
console.log("    break;");
console.log("  default:");
console.log("    alert( 'We hope that this page looks ok!' );");
console.log("}");
console.log();
console.log("if (browser == 'Edge')");
console.log(`    alert( "You've got the Edge!" );`);
console.log(`else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera')`);
console.log("    alert( 'Okay we support these browsers too' );");
console.log("else");
console.log("    alert( 'We hope that this page looks ok!' );");

//18.
console.log("%c   18. Перепишите код с использованием одной конструкции switch:", cssRule);
console.log(" const number = +prompt('Введите число между 0 и 3', '');");
console.log("if (number === 0) {");
console.log("  alert('Вы ввели число 0');");
console.log("}");
console.log("if (number === 1) {");
console.log("  alert('Вы ввели число 1');");
console.log("}");
console.log("if (number === 2 || number === 3) {");
console.log("  alert('Вы ввели число 2, а может и 3');");
console.log("}");
console.log();
console.log("switch (number) {");
console.log("    case 0:");
console.log("        alert('Вы ввели число 0');");
console.log("        break;");
console.log("    case 1:");
console.log("        alert('Вы ввели число 1');");
console.log("        break;");
console.log("    case 2:");
console.log("    case 3:");
console.log("        alert('Вы ввели число 2, а может и 3');");
console.log("        break;");
console.log("    default:");
console.log("        break;");
console.log("}");

//19.
console.log("%c   19. Следующая функция возвращает true, если параметр age больше 18. В ином случае она запрашивает подтверждение через confirm и возвращает его результат:", cssRule);
console.log("function checkAge(age) {");
console.log("  if (age > 18) {");
console.log("    return true;");
console.log("  } else {");
console.log("    // ...");
console.log("    return confirm('Родители разрешили?');");
console.log("  }");
console.log("}");
console.log("%c Будет ли эта функция работать как-то иначе, если убрать else?", cssRule);
console.log("%c Есть ли хоть одно отличие в поведении этого варианта?", cssRule);
console.log("Ответ: отличий нет");

//20.
console.log("%c   20. Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.", cssRule);
console.log("%c Сделайте два варианта функции checkAge:", cssRule);
console.log("    1) Используя оператор ?");
console.log("age > 18 ? true : confirm('Родители разрешили?');");
console.log("    2) Используя оператор ||");
console.log("age > 18 || confirm('Родители разрешили?')");

//21. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
console.log("%c   21. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.", cssRule);
function min(a, b) {
    return a < b ? a : b;
}
console.log("min(2, 5) = " + min(2, 5));
console.log("min(3, -1) = " + min(3, -1));
console.log("min(1, 1) = " + min(1, 1));

//22. Напишите функцию pow(x,n)
// считает только для n - целые числа
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

document.getElementById("input").onclick = function () {
    let x = Number(document.getElementById("x").value);
    let n = Number(document.getElementById("n").value);
    document.getElementById("out").innerHTML = "Результат: " + pow(x, n);
}
```

## <img src ="img/codewars_logo.svg" name = "codewars" height = 32px> [Codewars](https://www.codewars.com) ([Profile Link](https://www.codewars.com/users/SiML))


### [Highest and Lowest](https://www.codewars.com/kata/highest-and-lowest)

```js
function highAndLow(numbers){
    numbers = numbers.split(' ');
    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        parseInt(numbers[i]) < min && (min = numbers[i]);
        parseInt(numbers[i]) > max && (max = numbers[i]);
    }

    return max + " " + min;
}
```

<p align = "center">
<img src = "img/codewars_screens/1.PNG">
</p>

### [Disemvowel Trolls](https://www.codewars.com/kata/disemvowel-trolls)

```js
function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}
```

<p align = "center">
<img src = "img/codewars_screens/2.PNG">
</p>

### [Isograms](https://www.codewars.com/kata/isograms)

```js
function isIsogram(str) {
    str = str.toLowerCase();
    let Dict = new Set();

    for (let letter of str) {
        if (Dict.has(letter))
            return false;
        Dict.add(letter);
    }

    return true;
}
```

<p align = "center">
<img src = "img/codewars_screens/3.PNG">
</p>

### [Digits Explosion](https://www.codewars.com/kata/digits-explosion)

```js
function explode(s) {
    let res = "";

    for (let x of s.split('').map(Number)) {
        res += x.toString().repeat(x);
    }

    return res;
}
```

<p align = "center">
<img src = "img/codewars_screens/4.PNG">
</p>

### [Handshake Problem](https://www.codewars.com/kata/handshake-problem)

```js
function getParticipants(handshakes) {
    if (handshakes <= 0)
        return 0;

    let p = 1;

    do {
        temp = ++p * (p - 1) / 2;
    } while (temp < handshakes);

    return p;
}

//"Сочетания" без повторений: n!/(k!(n-k)!)
// k = 2
```

<p align = "center">
<img src = "img/codewars_screens/5.PNG">
</p>

### [Duplicate Encoder](https://www.codewars.com/kata/duplicate-encoder)

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

<p align = "center">
<img src = "img/codewars_screens/6.PNG">
</p>

### [N-th Fibonacci](https://www.codewars.com/kata/n-th-fibonacci)

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

<p align = "center">
<img src = "img/codewars_screens/7.PNG">
</p>

### [Multiples of 3 or 5](https://www.codewars.com/kata/multiples-of-3-or-5)

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

<p align = "center">
<img src = "img/codewars_screens/8.PNG">
</p>

***

# <p align = "center">Вывод</p>

Выполнил *лабораторную работу №3*, продолжая вспоминать знания по языку программирования **JavaScript + HTML**. Научился работать с `git`, освоив его базовые команды: `init`, `status`, `log`, `add`, `commit`, `push` и `pull`. Создал свой первый репозиторий на платформе [**GitHub**](https:\\github.com). Также освоил язык разметки **Markdown** и оформил отчет в  `README.md` своего репозитория.
