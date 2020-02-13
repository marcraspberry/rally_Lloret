document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
  navbarLink.addEventListener('click', function(){
    navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
  })
});

function submit(){
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var missatge = document.getElementById("missatge").value;
  var si = document.getElementById("si").checked;
  console.log(si);

  if( si && nom.length >2 && email.length >6 && missatge.length>10 ){
    alert("missatge enviat correctament")
    document.getElementById("nom").value="";
    document.getElementById("email").value="";
    document.getElementById("missatge").value="";
  }
  else if(si){
    alert("El nom, email o missatge són massa curts per enviar-se")
  }
}

function cancel(){
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var missatge = document.getElementById("missatge").value;
  var si = document.getElementById("si").checked;
  console.log(si);

  if( si ){
    alert("missatge borrat")
    document.getElementById("nom").value="";
    document.getElementById("email").value="";
    document.getElementById("missatge").value="";
  }
}