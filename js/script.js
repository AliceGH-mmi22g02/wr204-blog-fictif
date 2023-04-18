// Récupération des éléments HTML
document.addEventListener('DOMContentLoaded', function() {
var coll = document.getElementsByClassName("collapsible");
var i;

// Ajout des événements "click" sur chaque élément du collapsible
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
});
