<?php

//use app\lib\Db;

echo '<h1 style="text-align: center;">Статьи</h1>';

//require_once __DIR__ . '/autoload.php';
require_once __DIR__ . '/classes.php';

$mArr = new ArticleList();

$news = new NewsArticle(1, 'Название 1', 'Описание NewsArticle 1');
$mArr->add($news);
$news = new NewsArticle(2, 'Название 2', 'Описание NewsArticle 2');
$mArr->add($news);
$news = new NewsArticle(3, 'Название 3', 'Описание NewsArticle 3');
$mArr->add($news);

$news = new CrossArticle(4, 'CrossArticle 1', 'Описание CrossArticle 1', 'Источник 1');
$mArr->add($news);
$news = new CrossArticle(5, 'CrossArticle 2', 'Описание CrossArticle 2', 'Источник 2');
$mArr->add($news);
$news = new CrossArticle(6, 'CrossArticle 3', 'Описание CrossArticle 3', 'Источник 3');
$mArr->add($news);

$mArr->view();

/**
 * Пример работы с базой данных
 * spl_autoload_extensions('.class.php');
 * spl_autoload_register();
 * 
 * $db = new Db(); // создали экземпляр класса
 * 
 * $sql = 'SELECT money_b, money_p FROM db_users_b WHERE id LIKE :id'; // строка выборки данных
 * 
 * $res = $db->query($sql, [':id' => 1]); // выполняем запрос к базе с параметрами
 * 
 * // выводим содержимое на экран чеерез цикл
 * foreach ($res as $i => $j) {
 *  echo '<hr>';
 *  foreach ($j as $k => $v) {
 *      echo $k . ' ---> ' . $v . '<br>';
 *  }
 * }
 * ?>
*/

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <hr><a href="/index.html">Вернуться на главную</a><hr>
</body>
</html>
