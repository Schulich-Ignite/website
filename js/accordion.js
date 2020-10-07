/** This function opens and closes the accordions */
function openAnswer(content) {
  var x = content;
  if (x.className.indexOf("hide") == -1) {
    x.className += " hide";
  } else { 
    x.className = x.className.replace(" hide", " ");
  }
}