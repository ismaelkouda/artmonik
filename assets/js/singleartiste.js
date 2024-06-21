const header = document.querySelector("#menu");

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 130) {
            if (!header.classList.contains("sticky")) {
                header.classList.add("sticky");
            }
        } else {
            if (header.classList.contains("sticky")) {
                header.classList.remove("sticky");
            }
        }
    });
}