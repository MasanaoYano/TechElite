const $serv = document.querySelectorAll('[data-serv]');
const $desc = document.querySelectorAll('[data-desc]');
const $hamburger = document.querySelector('.hamburger');
const $hamburgerMenu = document.querySelector('.hamburger-menu');
const $selectP = document.querySelector("#prefecture");
const $selectC = document.querySelector("#city");
const $tel = document.querySelector("#tel");
const $inError = document.querySelector("#inputError");
const $enError = document.querySelector("#endError");
const $form = document.querySelector("form");

//設定１：サービスボタンとコンテンツ内容
//初期状態
const init = () => {
    $serv[0].classList.add('is-active');
    $desc[0].style.display = 'block';
};
init();

//クリックイベント
const handleClick = (e) => {
    e.preventDefault();

    //全リセット
    for (let i = 0; i < $serv.length; i++) {
        $serv[i].classList.remove('is-active');
        $desc[i].style.display ='none';
    };

    //クリック対象の<li>要素,data,対応する<description-item>を取得
    const targetItem = e.target.parentElement;
    const targetVal = targetItem.dataset.serv;
    const targetDesc = document.querySelector(`[data-desc="${targetVal}"]`);

    //クリックイベント適応
    targetItem.classList.add('is-active');
    targetDesc.style.display = 'block';
};

//クリックイベントを設置
for (let i = 0; i < $serv.length; i++) {
    $serv[i].addEventListener('click',(e)=>handleClick(e));
};

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

//設定4：form調整
//都道府県・市区町村オブジェクトデータ
const data = [
  {
    prefecture: "北海道",
    city: ["札幌市", "函館市", "小樽市", "旭川市", "室蘭市", "釧路市", "帯広市", "北見市", "夕張市",
        "岩見沢市", "網走市", "留萌市", "苫小牧市", "稚内市", "美唄市", "芦別市", "江別市", "赤平市",
        "紋別市", "士別市", "名寄市", "三笠市", "根室市", "千歳市", "滝川市", "砂川市", "歌志内市", 
        "深川市", "富良野市", "登別市","恵庭市", "伊達市", "北広島市", "石狩市", "北斗市"]
  },
  {
    prefecture: "青森県",
    city: ["青森市", "弘前市", "八戸市", "黒石市", "五所川原市", "十和田市", "三沢市",
        "むつ市", "つがる市", "平川市"]
  },
  {
    prefecture: "岩手県",
    city: ["盛岡市", "宮古市", "大船渡市", "花巻市", "北上市", "久慈市",
        "遠野市", "一関市", "陸前高田市", "釜石市", "二戸市",
        "八幡平市", "奥州市", "滝沢市"]
  }
]

//都道府県をoptionに追加
for (let i = 0; i < data.length; i++) {
    const optionP = document.createElement('option');
    optionP.value = data[i].prefecture;
    optionP.textContent = data[i].prefecture;
    $selectP.append(optionP);
}

//選択都道府県「名」を取得し、市区町村を初期化
    $selectP.addEventListener('change',(e)=>{
    const valueP = e.target.value;
    while ($selectC.options.length > 1) {
        $selectC.remove(1);
    }
    //選択都道府県に応じて市区町村を追加
    const indexP = data.findIndex(item => item.prefecture === valueP);
    for (let i = 0; i < data[indexP].city.length; i++) {
        const optionC =document.createElement('option');
        optionC.value = data[indexP].city[i];
        optionC.textContent = data[indexP].city[i];
        $selectC.append(optionC);   
    }
})

//電話番号入力の文字タイプ制限
$tel.addEventListener("input", () => {
    //入力を半角数字に制限
    const origin = $tel.value;
    const filtered = origin.replace(/[^0-9]/g, "");
    $tel.value = filtered;
    //end/inputErrorの二重表示は避ける
    if ($enError.style.display === "inline") {
        $inError.style.display = "none";
    } else {
        if (origin !== filtered) {
            $inError.style.display = "inline";
        } else {
            //半角数字入力中はinErrorを非表示
            $inError.style.display = "none";
        }
    }
});

// 送信時のチェック
$form.addEventListener("submit", (e) => {
    //電話番号が入力されていて、かつ10桁か11桁でない場合
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








