const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS); // hasclass 가 CLICKED_CLASS를 갖고 있는지 판별함
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}


function init() {

    title.addEventListener("click", handleClick);
}
init();


