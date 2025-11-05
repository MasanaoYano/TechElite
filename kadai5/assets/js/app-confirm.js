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