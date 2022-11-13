declare var $: any;

$( function() 
{
    $('#questions__text').tooltip(
      {
        position: { my: "left+15", at: "right center" }
      });
    
    $('#dialog').dialog(
      {
      autoOpen: false,
      width: 400,
      height: 150,
      buttons: 
      [
        {
          text: 'TAK',
          click: function() 
          {
            $('.questions')[0].reset();
            $(this).dialog('close');
          }
        },
        {
          text: 'NIE',
          click: function() 
          {
            $(this).dialog('close');
          }
        }
      ]
    });
    
    $('#reset__button').click(function (event: Event)
    {
      event.preventDefault();
      $("#dialog").dialog('open');
    });
});