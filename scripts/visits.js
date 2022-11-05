window.onload = load;

function load()
{
    var visits = localStorage.getItem('visits');
    if(visits==null) visits = 0;
    
    var wrapper = document.getElementsByClassName('wrapper');
    const new_element = document.createElement('p');
    new_element.classList.add('regular-text')
    const new_element_text = document.createTextNode('Liczba odwiedzin strony: ' + visits);
    new_element.appendChild(new_element_text);
    wrapper[0].appendChild(new_element);
    localStorage.setItem('visits', parseInt(visits)+1);
}