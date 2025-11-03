<?php
session_start();

$form = $_SESSION['form'] ?? [
    'myname' => '',
    'place' => '',
    'email' => '',
    'tel' => ''
];
$scrollTarget = $_POST['scroll'] ?? '';
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

    <div class="slider">
        <div class="prev">
            <img src="./assets/img/slide-btn-prev.svg" alt="前へ">
        </div>
        <div class="slides">
            <img src="./assets/img/slide_1.jpg" alt="画像1">
            <img src="./assets/img/slide_2.jpg" alt="画像2">
            <img src="./assets/img/slide_3.jpg" alt="画像3">
        </div>
        <div class="next">
            <img src="./assets/img/slide-btn-next.svg" alt="次へ">
        </div>
    </div>
        
    <main>
        <div class="catchphrase">
            <p>今年も始まる<span class="highlight">夏祭り</span></p>
        </div>
        <section class="schedule" id="schedule">
            <h1 class="section-title">スケジュール</h1>
            <ul class="schedule-menu">
                <li class="schedule-menu-list active" data-menu="0">
                    <a href="">9月1日</a>
                </li>
                <li class="schedule-menu-list" data-menu="1">
                    <a href="">9月2日</a>
                </li>
                <li class="schedule-menu-list" data-menu="2">
                    <a href="">9月3日</a>
                </li>
            </ul>
            <div class="schedule-description">
                <div class="schedule-description-item active" data-text="0">
                    sample sample sample sample<br>
                    sample sample sample sample<br>
                    sample sample sample sample
                </div>
                <div class="schedule-description-item" data-text="1">
                    ssaammple sample sample sample<br>
                    sample sample sample sample<br>
                    sample sample sample sample
                </div>
                <div class="schedule-description-item" data-text="2">
                    sssaaammmple sample sample sample<br>
                    sample sample sample sample<br>
                    sample sample sample sample
                </div>
            </div>
        </section>
        

        <section class="access" id="access">
            <h1 class="section-title">アクセス</h1>
            <address>〒771-1154 徳島県徳島市応神町東貞方南川淵</address>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10165.87184153987!2d134.5098680887771!3d34.10931212623208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355373f11891368d%3A0x1a09139d44dc859f!2z5ZCJ6YeO5bed5YyX5bK46YGL5YuV5bqD5aC044K944OV44OI44Oc44O844Or5aC0Qemdog!5e0!3m2!1sja!2sjp!4v1762110290127!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <section class="reserve" id="reserve">
            <h1 class="section-title">席予約</h1>
            <form action="confirm.php" method="post">
                <div class="form-group">
                    <label for="myname">お名前<span class="required"><sup>＊</sup>必須</span></label>
                    <input type="text" id="myname" name="myname" value="<?= htmlspecialchars($form['myname'], ENT_QUOTES) ?>" placeholder="例)田中 太郎" required>
                </div>
                <div class="form-group">
                    <label for="place">席の場所<span class="required"><sup>＊</sup>必須</span></label>
                    <select name="place" id="place" required>
                    <option value="">---</option>
                    <option value="SS" <?= $form['place']==='SS'?'selected':'' ?>>SS席</option>
                    <option value="S" <?= $form['place']==='S'?'selected':'' ?>>S席</option>
                    <option value="A" <?= $form['place']==='A'?'selected':'' ?>>A席</option>
                    <option value="B" <?= $form['place']==='B'?'selected':'' ?>>B席</option>
                    <option value="C" <?= $form['place']==='C'?'selected':'' ?>>C席</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="email">メールアドレス<span class="required"><sup>＊</sup>必須</span></label>
                    <input type="email" name="email" id="email" value="<?= htmlspecialchars($form['email'], ENT_QUOTES) ?>" placeholder="例)abcd123@example.com" required>
                </div>
                <div class="form-group">
                    <label for="tel">電話番号<span class="non-required"><sup>＊</sup>任意</span></label>
                    <span id="inputError">半角数字で入力してください</span>
                    <span id="endError">入力する場合は10~11桁で入力してください</span>
                    <input type="tel" id="tel" name="tel" value="<?= htmlspecialchars($form['tel'], ENT_QUOTES) ?>" inputmode="numeric" maxlength="11" placeholder="例)09012345678">
                </div>
                <p id="hoverMessage">未入力項目があります</p>
                <button type="submit" id="button">送信</button>
            </form>
        </section>
        
    </main>

    <?php include('./includes/footer.php'); ?>

    <script src="./assets/js/app.js"></script>
</body>
</html>