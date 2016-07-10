<?php

/**
 * @param $class_name
 * Example: App\Models\User => ./App/Models/User.php
 */
function __autoload($class_name)
{
    require __DIR__ . '/' . str_replace('\\', '/', $class_name) . '.php';
}

/**
 --- 2 вариант ---

spl_autoload_extensions('.class.php');
spl_autoload_register();
*/
