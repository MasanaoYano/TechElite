const $hamburger = document.querySelector('.hamburger');
const $hamburgerMenu = document.querySelector('.hamburger-menu');

//設定2：スクロール
//各リンク元を取得
document.querySelectorAll('a[href^="#js-ltarget"]').forEach(link => {
    //クリックイベント
    link.addEventListener('click', (e) => {
        e.preventDefault();
        //ハンバーガーメニューを閉じる
        $hamburger.classList.remove('is-active');
        $hamburgerMenu.classList.remove('is-active');
        //それぞれのターゲットを設定
        const target = document.querySelector(`#${link.hash.slice(1)}`);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

//設定3：ハンバーガーメニュー
//クリックイベント
$hamburger.addEventListener('click',()=>{
    $hamburger.classList.toggle('is-active');
    $hamburgerMenu.classList.toggle('is-active');
});

//ウインドウ拡大時にハンバーガーメニューを閉じる
const checkWidth = () => {
  if (window.innerWidth > 500) {
    $hamburger.classList.remove('is-active');
    $hamburgerMenu.classList.remove('is-active');
  } 
}
window.addEventListener("resize", checkWidth);
