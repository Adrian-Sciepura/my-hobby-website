window.onload = load;

function load()
{
    var visits = localStorage.getItem('visits');
    if(visits==null) visits = 0;
    
    const element = document.getElementsByTagName('footer');
    element[0].innerHTML = '<p>Adrian Ściepura nr. indeksu: 193350   |    Liczba odwiedzin: '+visits+'</p>';
    localStorage.setItem('visits', parseInt(visits, 10)+1);
}