declare var $: any;

$(function(event: any)
{
    $('#scroll-up').css('display', 'flex');
    $('#scroll-up').click(function() { event.scrollTo($('body'), 750); });
});