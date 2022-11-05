$(function(e)
{
    $('#scroll-up').css('display', 'flex');
    $('#scroll-up').click(function() { e.scrollTo($('body'), 750); });
});