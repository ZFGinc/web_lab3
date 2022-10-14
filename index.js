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