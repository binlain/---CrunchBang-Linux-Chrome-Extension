$(document).ready(function() {
  //Mark as read to the top!
  var head=$('.main-head .options');
  head.append(' ');
  head.append($('.main-foot .options').children().clone());
  
  //Enforce dark colorscheme
  document.cookie = "forum_inverted_theme=false;-1; path=/";
  //$('.button-colours').remove();
});
