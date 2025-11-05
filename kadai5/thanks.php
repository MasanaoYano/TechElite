<?php
session_start();
$form = $_SESSION['form'] ?? [];
session_destroy(); 
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>第5回TechElite課題</title>
    <meta name="description" content="第5回TechEliteの課題を作成しました。">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/sanitize.css">
    <!-- <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" /> -->
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>

    <?php include('./includes/header.php'); ?>

    <main>
        <div class="thanks-word">
            お問い合わせありがとうございました
        </div>

    </main>

    <?php include('./includes/footer.php'); ?>

    <script src="./assets/js/app-thanks.js"></script>
</body>
</html>
