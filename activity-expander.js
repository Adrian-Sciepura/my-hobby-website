var page = window.screen.width;
var start_height = "";
window.load = load;
window.onresize = resize;

function size()
{
    if(page > 500)
    {
        start_height = "500px";
    }
    else
    {
        start_height = "200px";
    }

    const elements = document.getElementsByClassName("activity");
    for(var i of elements)
    {
        i.style.height = start_height;
    }
}

function resize()
{
    page = window.screen.width;
    size();

}

function expand(element){
    const height = element.style.height;
    if(height == start_height)
    {
        element.style.height = "auto";
        element.style.opacity = "1";
        element.children[1].style.display = "flex";
    }
    else
    {
        element.style.height = start_height;
        element.children[1].style.display = "none";
        element.style.opacity = "0.8";
    }
}

function load()
{
    size();
}