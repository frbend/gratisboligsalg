function search_listing() {
    let input = document.getElementById('js-search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("wrapper");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "wrap";
        }
    }
}