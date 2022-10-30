function load()
{
    const elements = document.getElementsByClassName("activity");
    for(var i = 0; i < elements.length; i++)
    {
        elements[i].style.height = "500px";
    }
}

function expand(element){
    const height = element.style.height;
    if(height === "500px")
    {
        element.style.height = "auto";
        element.style.opacity = "1";
        element.children[1].style.display = "flex";
    }
    else
    {
        element.style.height = "500px";
        element.children[1].style.display = "none";
        element.style.opacity = "0.8";
    }
}