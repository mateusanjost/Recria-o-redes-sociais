$(function () {

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // tres function
  $('.tres').click(function () {
    $('.configs').toggle();
    var denunciar = $(this).parents(".card");
    var srcimg = "img[src='" + $(this).parents('.card').find('.card-header img').attr('src') + "']";
    $('li:contains("Cancelar")').click(function () {
      $('.configs').hide();
    });
    $('li:contains("Denunciar")').click(function () {
      denunciar.remove();
      $('.configs').hide();
      if ($('.card').length == 1) {
        $('.posts').html("<div class='msgnofeed'>Não há conteúdo no feed.</div>")
      }
    });
    $('li:contains("Deixar de seguir")').click(function () {
      denunciar.remove();
      $(srcimg).parents('.card').remove();
      $('.configs').hide();

    });
  });

  // perfil
  $('.seta').click(function(){
    $('i.fa.fa-camera, .input-group.flex-nowrap, .card, .storys').show();
    $('.seta').hide();
});
  $('.card-header img, .storys img').click(function(){
    var srcimg = $(this).attr('src');
    $('i.fa.fa-camera, .input-group.flex-nowrap, .storys').hide();
    $('.seta').show();
    $('.posts .card').each(function(){
      var corpo = $(this);
      if($(this).find('.card-header img').attr("src") != srcimg) {
        corpo.hide();
      }
    });
  });
  
});
