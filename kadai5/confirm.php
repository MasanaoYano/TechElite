<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_SESSION['form'] = [
    'myname' => $_POST['myname'] ?? '',
    'place'  => $_POST['place'] ?? '',
    'email'  => $_POST['email'] ?? '',
    'tel'    => $_POST['tel'] ?? ''
  ];
}
$form = $_SESSION['form'] ?? [];
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
        <section class="confirm">
            <h1 class="section-title">
                お問い合わせ内容確認
            </h1>
            <table class="confirm-table">
                <tr>
                    <th>お名前</th>
                    <td>
                        <?= htmlspecialchars($form['myname'], ENT_QUOTES) ?>
                    </td>
                </tr>
                <tr>
                    <th>希望席</th>
                    <td>
                        <?= htmlspecialchars($form['place'], ENT_QUOTES) ?><span>席</span>
                    </td>
                </tr>
                <tr>
                    <th>メールアドレス</th>
                    <td class="confirm-table-mail">
                        <?= htmlspecialchars($form['email'], ENT_QUOTES) ?>
                    </td>
                </tr>
                <tr>
                    <th>電話番号</th>
                    <td>
                        <?= htmlspecialchars($form['tel'], ENT_QUOTES) ?>
                    </td>
                </tr>
            </table>
            <div class="confirm-button">
                 <form action="./index.php#reserve" method="post">
                    <button type="submit" class="reverse">戻る</button>
                </form>
                <form action="./thanks.php" method="post">
                    <button type="submit" class="submit">送信する</button>
                </form>
            </div>
        </section>

    </main>
    
    <?php include('./includes/footer.php'); ?>

    <script src="./assets/js/app.js"></script>
</body>
</html>