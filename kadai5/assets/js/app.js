// --- 設定1：ハンバーガーメニュー ---
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
})

// --- 設定2：スクロール ---
const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return; // #がない場合は無視
    
    const targetId = href.slice(hashIndex);
    const target = document.querySelector(targetId);
    
    if (target && (link.pathname === location.pathname || link.pathname.endsWith('index.php'))) {
      e.preventDefault();
      document.querySelector('.hamburger').classList.remove('active');
      document.querySelector('.hamburger-menu').classList.remove('active');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- 設定3：メイン画像のスクロール ---
const slidesContainer = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let isAnimating = false;
const gap = 15; // CSSでの設定値

//ページネーション作成
const pagination = document.createElement('div');
pagination.classList.add('pagination');
document.querySelector('.slider').appendChild(pagination);

slideImages.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => moveToSlide(index));
  pagination.appendChild(dot);
});
const dots = pagination.querySelectorAll('.dot');

//ループ対応処理
const firstClone = slideImages[0].cloneNode(true);
const lastClone = slideImages[slideImages.length - 1].cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slideImages[0]);

//再取得
const allSlides = document.querySelectorAll('.slides img');

//幅設定
function getSlideWidth() {
  return slideImages[0].clientWidth + gap;
}

//初期位置
function initPosition() {
  slidesContainer.style.transition = 'none';
  slidesContainer.style.justifyContent = 'flex-start';
  slidesContainer.style.transform = `translateX(${-getSlideWidth()}px)`;
}
initPosition();

//スライド移動
function moveToSlide(index) {
  if (isAnimating) return;
  isAnimating = true;
  slidesContainer.style.transition = 'transform 0.5s ease';
  slidesContainer.style.transform = `translateX(${-(index + 1) * getSlideWidth()}px)`;
  currentIndex = index;
  updateDots();
}

//ページネーション更新
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex % slideImages.length].classList.add('active');
}

//トランジション終了時 
slidesContainer.addEventListener('transitionend', () => {
  slidesContainer.style.transition = 'none';
  if (currentIndex === -1) {
    currentIndex = slideImages.length - 1;
    slidesContainer.style.transform = `translateX(${- (currentIndex + 1) * getSlideWidth()}px)`;
  } else if (currentIndex === slideImages.length) {
    currentIndex = 0;
    slidesContainer.style.transform = `translateX(${-getSlideWidth()}px)`;
  }
  updateDots();
  isAnimating = false;
});

//ボタン操作
nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

//リサイズ
window.addEventListener('resize', () => {
  slidesContainer.style.transition = 'none';
  slidesContainer.style.transform = `translateX(${-(currentIndex + 1) * getSlideWidth()}px)`;
});

// --- 設定4：スケジュールボタンと内容 ---
const $ScheMenu = document.querySelectorAll('[data-menu]');
const $ScheDesc = document.querySelectorAll('[data-text]');

//クリックイベント関数
function handleClick(e) {
    e.preventDefault();
    //全リセット
    $ScheMenu.forEach(item => item.classList.remove('active'));
    $ScheDesc.forEach(item => item.classList.remove('active'));
    //クリックイベント適応 
    this.classList.add('active');
    const targetVal = this.dataset.menu;
    document.querySelector(`[data-text="${targetVal}"]`).classList.add('active');
}
//イベント関数を設置
$ScheMenu.forEach(item => item.addEventListener('click', handleClick));

// --- 設定５：formボタン ---
const form = document.querySelector('form');
const button = document.getElementById('button');
const requiredFields = form.querySelectorAll('[required]');
const hoverMessage = document.getElementById('hoverMessage');

button.classList.add('disabled');

// 入力チェック関数
function checkFormValidity() {
  const allFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
  if (allFilled) {
    button.classList.remove('disabled');
    button.style.cursor = 'pointer'; 
  } else {
    button.classList.add('disabled');
    button.style.cursor = 'default'; 
  }
}

// 入力イベントで常に確認
requiredFields.forEach(field => {
  field.addEventListener('input', checkFormValidity);
});

// ページ読み込み時にもチェック
window.addEventListener('load', checkFormValidity);

button.addEventListener('mouseenter', () => {
  const allFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
  if (!allFilled) {
    hoverMessage.classList.add('active');
  } else {
    hoverMessage.classList.remove('active');
  }
});

button.addEventListener('mouseleave', () => {
  hoverMessage.classList.remove('active');
});

// 電話番号入力の文字タイプ制限
const $tel = document.querySelector("#tel");
const $inError = document.querySelector("#inputError");
const $enError = document.querySelector("#endError");

$tel.addEventListener("input", () => {
  const origin = $tel.value;
  const filtered = origin.replace(/[^0-9]/g, "");
  $tel.value = filtered;

  if ($enError.style.display === "inline") {
    $inError.style.display = "none";
  } else {
    if (origin !== filtered) {
      $inError.style.display = "inline";
    } else {
      $inError.style.display = "none";
    }
  }
});

// 送信時のチェック
form.addEventListener("submit", (e) => {
  if ($tel.value !== "" && !/^\d{10,11}$/.test($tel.value)) {
    e.preventDefault(); 
    if ($inError.style.display === "inline") {
      $inError.style.display = "none";
      $enError.style.display = "inline";
    } else {
      $enError.style.display = "inline";
    }
  }
});
