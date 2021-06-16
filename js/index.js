[...document.querySelectorAll(".os_link")].forEach((item => item.addEventListener("click", ({target})=>{
    const {os} = target.closest(".os_link").dataset;
    window.location.href = `./downloads.html#${os}`;
})));