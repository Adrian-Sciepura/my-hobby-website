window.onload = load;
sessionStorage.setItem('active_item', '-1')
var element_height = '';

function expand(element)
{
    element.style.height = "auto";
    element.style.opacity = "1";
    element.children[1].style.display = "flex";
}

function collapse(element)
{
    element.style.height = element_height;
    element.children[1].style.display = "none";
    element.style.opacity = "0.8";
}

function activity_click()
{
    var active = sessionStorage.getItem('active_item');
    var width = window.screen.width;
    if(width > 500)
    {
        element_height = '500px';
    }
    else
    {
        element_height = '200px';
    }

    if(active != this.id)
    {
        expand(this);
        sessionStorage.setItem('active_item', this.id);
        if(active != '-1')
        {
            const prev = document.getElementById(active);
            collapse(prev);
        }
    }
    else
    {
        collapse(this);
        sessionStorage.setItem('active_item', '-1')
    }
}

function load()
{
    const elements = document.getElementsByClassName("activity");
    for(i = 0; i < elements.length; i++)
    {
        elements[i].addEventListener('click', activity_click);
        elements[i].children[1].style.display = "none";
        elements[i].style.cursor = 'pointer';
        elements[i].id = 'a'+i;
    }
}