var arrA = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sortNumberUp(a, b) {
    return a - b;
}
function sortNumberDown(a, b) {
    return b - a;
}

function massGenerated() {
    var p = document.getElementById('out1');
    var task1 = document.getElementById('task1');
    var mass = [];
    mass.length = parseInt(task1.value);
    p.innerHTML = '<b>Рандомный Массив:</b> [ ';
    for (var i = 0; i < mass.length; i++) {
        mass[i] = getRandomInt(-23, 34);
        p.innerHTML += '"' + mass[i] + '"';
        if (i >= mass.length - 1) {
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    p.innerHTML += ' ]';
}

function summMass() {
    var p = document.getElementById('out2');
    var task2 = document.getElementById('task2');
    var sumMas = [];
    var summ = 0;
    sumMas.length = parseInt(task2.value);
    p.innerHTML = '<b>Рандомный Массив:</b> [ ';
    for (var i = 0; i < sumMas.length; i++) {
        sumMas[i] = getRandomInt(-23, 35);
        summ += sumMas[i];
        p.innerHTML += '"' + sumMas[i] + '"';
        if (i >= sumMas.length - 1) {
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    p.innerHTML += ' ]<br>Сумма всех элементов = ' +
        '<b>' + summ + '</b>';
}

function midMass() {
    var p = document.getElementById('out3');
    var task3 = document.getElementById('task3');
    var midMas = [];
    var summ = 0;
    midMas.length = parseInt(task3.value);
    p.innerHTML = '<b>Рандомный Массив:</b> [ ';
    for (var i = 0; i < midMas.length; i++) {
        midMas[i] = getRandomInt(-23, 35);
        summ += midMas[i];
        p.innerHTML += '"' + midMas[i] + '"';
        if (i >= midMas.length - 1) {
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    p.innerHTML += ' ]<br>Среднее арифметическое = ' +
        '<b>' + (summ / midMas.length) + '</b>';
}

function getOddElemts() {
    var p = document.getElementById('out4');
    var oddMas = [];
    var summ = 1;
    oddMas.length = getRandomInt(4, 10);
    p.innerHTML = '<b>Рандомный Массив:</b> [ ';
    for (var i = 0; i < oddMas.length; i++) {
        oddMas[i] = getRandomInt(-19, 27);
        if (oddMas[i] %2 !== 0) {
            summ *= oddMas[i];
        }
        p.innerHTML += '"' + oddMas[i] + '"';
        if (i >= oddMas.length - 1) {
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    p.innerHTML += ' ]<br>Произведение нечетных ' +
        'элементов = <b>' + summ + '</b><br>Длина Массива - случайная: <b>' + oddMas.length + '</b> элементов';
}

function addElemToArr() {
    var p = document.getElementById('out8');
    var task8 = document.getElementById('task8');
    arrA.push(parseInt(task8.value));
    p.innerHTML = '<b>Массив <u>А</u>:</b>';
    for (var i = 0; i < arrA.length; i++) {
        p.innerHTML += ' ' + arrA[i];
    }
}

function getResult() {
    var p = document.getElementById('out8');
    p.innerHTML = 'Введите числовое значение!';
}

function failResult() {
    var p = document.getElementById('out8');
    if (arrA.length <= 0) {
        p.innerHTML = '<b>Результат: </b>';
    }
}

function getNewMass() {
    var p = document.getElementById('out8');
    var arrB = [];
    if (document.getElementById('btn8').onclick) {
        for (i = 0; i < arrA.length; i++) {
            if (arrA[i] %2 === 0) {
                arrB.push(arrA[i]);
            }
        }
    }
    p.innerHTML = '<b>Элементы массива <u>А</u>:</b>';
    for (var i = 0; i < arrA.length; i++) {
        p.innerHTML += ' ' + arrA[i];
    }
    p.innerHTML += '<br><b>Элементы массива <u>Б</u>:</b>';
    for (var i = 0; i < arrB.length; i++) {
        p.innerHTML += ' ' + arrB[i];
    }
}

function getSortMass() {
    var p = document.getElementById('out9');
    var task9 = document.getElementById('task9');
    var sortMas = [];
    var summ = 0;
    sortMas.length = parseInt(task9.value);
    p.innerHTML = '<b>Рандомный Массив:</b> [ ';
    for (var i = 0; i < sortMas.length; i++) {
        sortMas[i] = getRandomInt(0, 11);
        //summ += sortMas[i];
        p.innerHTML += '"' + sortMas[i] + '"';
        if (i >= sortMas.length - 1) {
            p.innerHTML += ' ]';
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    sortMas.sort(sortNumberUp);
    p.innerHTML += '<br><b>Отсортированный массив (по возростанию):</b> [ ';
    for (var i = 0; i < sortMas.length; i++) {
        p.innerHTML += '"' + sortMas[i] + '"';
        if (i >= sortMas.length - 1) {
            p.innerHTML += ' ]';
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
    sortMas.sort(sortNumberDown);
    p.innerHTML += '<br><b>Отсортированный массив (по убыванию):</b> [ ';
    for (var i = 0; i < sortMas.length; i++) {
        p.innerHTML += '"' + sortMas[i] + '"';
        if (i >= sortMas.length - 1) {
            p.innerHTML += ' ]';
            break;
        }
        else {
            p.innerHTML += ', ';
        }
    }
}

document.getElementById('btn1').onclick = massGenerated;
document.getElementById('btn2').onclick = summMass;
document.getElementById('btn3').onclick = midMass;
document.getElementById('btn4').onclick = getOddElemts;
document.getElementById('btn8').onclick = getNewMass;
document.getElementById('btn9').onclick = getSortMass;
document.getElementById('btnElemAdd').onclick = addElemToArr;
document.getElementById('task8').onfocus = getResult;
document.getElementById('task8').onblur = failResult;