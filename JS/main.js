$(function () {
  
  // tooltip
  $('[data-toggle="tooltip"]').tooltip()
  
  // tres function
  $('.tres').click(function(){
    $('.configs').toggle()
  });
  $('li:contains("Cancelar")').click(function(){
    $('.configs').hide()
  });
  
  })