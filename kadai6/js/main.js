document.addEventListener("DOMContentLoaded", () => {
    const $Schedule = document.querySelector(".schedule");
    const $Button = document.querySelector(".readmore-button");
    const $MenuList = document.querySelectorAll(".schedule .menu li");
    
    if (!$Schedule || !$Button) return;

    if ($MenuList.length <= 3) {
        $Button.style.display = "none";
        return;
    }

    let isOpen = false;

    $Button.addEventListener("click", () => {
        if (!isOpen) {
            $MenuList.forEach(li => li.classList.add("open"));
            $Button.textContent = "Close";

        } else {
            $MenuList.forEach(li => li.classList.remove("open"));
            $Button.textContent = "Read more";

            const y = $Schedule.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            })
        }
        isOpen = !isOpen;
    })
})



