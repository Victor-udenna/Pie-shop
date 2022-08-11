
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
}

// creating the function and adding the hiding content

let x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;

    // adding the click btn in the variable and calling the function that contains the content
