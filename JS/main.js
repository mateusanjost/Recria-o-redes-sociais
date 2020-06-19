$(function () {

  // tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // tres function
  $('.tres').click(function () {
    $('.configs').toggle()
    var denunciar = $(this).parents(".card");
    $('li:contains("Cancelar")').click(function () {
      $('.configs').hide()
    });
    $('li:contains("Denunciar")').click(function () {
      denunciar.remove();
      $('.configs').hide()
      if ($('.card').length == 1) {
        $('.posts').html("<div class='msgnofeed'>Não há conteúdo no feed.</div>")
      }
    });
  });
});
$(function() {
// auto complet
  var availableTags = [
    "Damon Salvatore",
    "Bonnie Benedit",
    "Elena Gilbert",
    "Stefan Salvatore",
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
})