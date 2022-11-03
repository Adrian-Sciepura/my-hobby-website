window.onload = load;
sessionStorage.setItem('active_item', '-1')

function expand(element)
{
    var active = sessionStorage.getItem('active_item');
    var width = window.screen.width;
    var element_height = '';
    if(width > 500)
    {
        element_height = '500px';
    }
    else
    {
        element_height = '200px';
    }

    if(active != element.id)
    {
        element.style.height = "auto";
        element.style.opacity = "1";
        element.children[1].style.display = "flex";
        sessionStorage.setItem('active_item', element.id);
    }
    else
    {
        element.style.height = element_height;
        element.children[1].style.display = "none";
        element.style.opacity = "0.8";
        sessionStorage.setItem('active_item', '-1')
    }
}

function load()
{
    let elements = document.getElementsByClassName("activity");
    for(i = 0; i < elements.length; i++)
    {
        elements[i].id = 'a'+i;
    }
}