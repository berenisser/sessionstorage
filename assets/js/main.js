function guardarDatos(){
	var name = document.getElementById("nombre").value;
	var clave = document.getElementById("password").value;
	sessionStorage.setItem(name,clave);
}

function recuperarDatos(){
	for(var i=0; i<sessionStorage.length; i++){
		var name = sessionStorage.key(i);
		var clave = sessionStorage.getItem(name);
		document.getElementById("datos").innerHTML = "<div>"+"Nombre: "+name+ "<br/> Clave: "+clave+"</div>"; 
	}
}

function cleanData(){
	document.getElementById("datos").innerHTML = "Limpio. Los datos permanecen.";
}

function borrarTodo(){
	sessionStorage.clear();
	recoverData();
}