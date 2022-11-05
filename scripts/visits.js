window.onload = load;
function load() {
    var storage = localStorage.getItem('visits');
    var visits = storage == null ? 0 : parseInt(storage);
    var wrapper = document.querySelector('.wrapper');
    var new_element = document.createElement('p');
    var new_element_text = document.createTextNode('Liczba odwiedzin strony: ' + visits);
    new_element.classList.add('regular-text');
    new_element.appendChild(new_element_text);
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(new_element);
    localStorage.setItem('visits', (visits + 1).toString());
}
