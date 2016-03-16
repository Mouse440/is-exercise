$(document).ready(function(){
  $('.menu-option').on('click', showSelectedLabel );
  
  var url = window.location.href;
  var routeName = url.match(/\#\/\w*/i)[0].match(/\w+$/)[0]; //grab the route name, this works with parameterized url as well
  var btnId = ['#',routeName,'-btn'].join('');      //construct btn id
  $(btnId).trigger('click');            //trigger click on loaded, base case
  
  function showSelectedLabel() {
    var menuOptions = document.getElementsByClassName('menu-option');
    for(var i = 0; i<menuOptions.length; i++) {
      menuOptions[i].nextSibling.nextSibling.style.display = 'none'; //hide all labels
    }
    this.nextSibling.nextSibling.style.display = 'block'; //show this label
  }
});