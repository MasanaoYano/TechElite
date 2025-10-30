const $serv = document.querySelectorAll('[data-serv]');
const $desc = document.querySelectorAll('[data-desc]');

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

for (let i = 0; i < $serv.length; i++) {
    $serv[i].addEventListener('click',(e)=>handleClick(e));
};



