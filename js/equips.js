var usuari_correcte = "pilot1234";
var contrasenya_correcte = "1234"

window.onload = function () {
 	
	 	document.getElementsByTagName('form')[0].addEventListener('submit', function validar( e ){
		e.preventDefault();
		var username = document.getElementById("name").value;
		var password = document.getElementById("pswd").value;
		console.log("usuari", username);
		console.log("contrassenya ", password);

		if(username != usuari_correcte || password != contrasenya_correcte){
			alert("Nom o contrassenya incorrectes");
			document.getElementById("answer").style.visibility = "visible";

		}
		else{
			window.location = "../html/pilot.html";
			return false;

		}
	} )


}


function back(){
	window.location = "../index.html";
}

