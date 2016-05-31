<?php

$operations = ['+', '-', '*', '/'];

if (isset($_POST['number1']) && isset($_POST['number2'])) {
    if (in_array($_POST['operation'], $operations)) {
        
        $number1 = (float)$_POST['number1'];
        $number2 = (float)$_POST['number2'];

        $operation = $_POST['operation'];
        
        switch ($operation) {
            case '+': $result = $number1 + $number2; break;
            case '-': $result = $number1 - $number2; break;
            case '*': $result = $number1 * $number2; break;
            case '/':
                if ($number2 === 0) {
                    $result = $number1 / $number2;
                } else {
                    $result = 'Деление на 0 запрещено!';
                    break;
                }
                break;
            default: $result = 'Ошибка!'; break;
        }
    } else {
        $result = 'Ошибка операции!';
    }
}

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Калькулятор</title>
</head>
<body>
    <h3>Мини-калькулятор</h3>
    <form action="calculator.php" method="post">
        <p>Выражение для вычисления:</p>
        <p>
            <input type="text" name="number1" value="<?php echo $number1; ?>" placeholder="Число 1" required>
            <select name="operation" title="Выберите операцию">
            <?php foreach ($operations as $operation): ?>
            <option value="<?php echo $operation; ?>"> <?php echo $operation; ?></option>
            <?php endforeach; ?>
            </select>
            <input type="text" name="number2" value="<?php echo $number2; ?>" placeholder="Число 2" required>
            <input type="submit" name="calculate" value="=" title="Вычислить">
            <?php if (isset($result)) echo $result; ?>
        </p>
    </form>
    <hr>
    <a href="/index.html">Вернуться на главную</a>
</body>
</html>
