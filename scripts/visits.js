window.onload = load_visits;
function load_visits() {
    var storage = localStorage.getItem('visits');
    var visits = storage == null ? 0 : parseInt(storage);
    var wrapper = document.querySelector('.wrapper');
    const new_element = document.createElement('p');
    const new_element_text = document.createTextNode('Liczba odwiedzin strony: ' + visits);
    new_element.classList.add('regular-text');
    new_element.appendChild(new_element_text);
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(new_element);
    localStorage.setItem('visits', (visits + 1).toString());
}
