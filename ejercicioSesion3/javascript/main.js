$(function(){
	console.log("---- DOCUMENT READY ----")

/*
	$("#btnSaludo").click(function(){
		console.log("boton");
		miURL = "models/sesion3.php";
		settings = {success : function(contenido , status, jqXHR){
						$("#contenidoSesion3").html(contenido);
						console.log(jqXHR.success);
						console.log(status);
					} ,
					error : function(){} , 
					complete : completitud() ,
					async : true
				};
		jQuery.ajax(miURL, settings);
	})
*/




function completitud(){
	console.log("completisimos");
}

//tarea3.php Ejercicio 4:

function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
$("#recreateSVGButton").click(recreateSVG);
function recreateSVG(){
	
	numeroDeCuadros = $("#numRectField").val();
	numeroDeCirculos = $("#numCircleField").val();

	loadCustomSVG(numeroDeCuadros, numeroDeCirculos);

	$("#mySVG").children().each(function(index){
			$(this).delay(500*index).animate ({opacity:1});
	})

}
function loadCustomSVG(numRects, numCircles){

	codigoCanvas = "";
	codigoCanvas+= "<svg width='600' height='300' id='mySVG'>";
	for (i = 0; i < numCircles; i++) {
	codigoCanvas+= "<circle id='elCirculo' cx='"+ generateRandomValue(50,500) +"' cy='"+ generateRandomValue(50,200) +"' r='20' stroke='#3399ff' stroke-width='3' fill='#b3d9ff' opacity='0'/>";
	}
	for (i = 0; i < numRects; i++) {
	codigoCanvas+= "<rect id='elCuadro' x='"+ generateRandomValue(50,500) +"' y='"+ generateRandomValue(50,200) +"' width='30' height='30' stroke='#99cc00' stroke-width='3' fill='#d2ff4d' opacity='0'/>";
	}
	codigoCanvas+= "</svg>";

	$("#gSVG").html(codigoCanvas);
}
$("#saveSVGButton").click(saveSVG);
function saveSVG(){
	// leer el svg que quiere salvar
		//seleccionar el elemento sgv
		theSVG = $("#mySVG");
			// empezar a guadar en json
				//	crear mi atrributo de id con su valor
				//	crea mi atributo de contenido
			idSVG = "svgNo"+ generateRandomValue(1, 9999);
			svgContent=[];
			theSVG.children().each(function(index,element){
					// por cada figura
					tagName = $(element).prop('tagName');
					if (tagName == "rect") {
						x = $(element).attr("x");
						y = $(element).attr("y");
						w = $(element).attr("width");
						h = $(element).attr("height");
					}
					if (tagName == "circle") {
						x = $(element).attr("cx");
						y = $(element).attr("cy");
						w = $(element).attr("r");
						h = $(element).attr("r");
					}
					id = $(element).attr("id");
					f = $(element).attr("fill");
					tag = tagName;
					thisFigure = {"id":id ,
									"x":x, 
									"y":y,
									"width": w ,
									"height":h,
									"fill":f,
									"tag":tag
								};
					svgContent.push(thisFigure);
					// crear un objeto para la figura
			});
			jsonToSave={"id":idSVG,"contenido":svgContent};
			stringJsonStorage = JSON.stringify(jsonToSave);
			console.log(stringJsonStorage);
			localStorage.setItem("testJSON",stringJsonStorage)

	//	mando al server
saveToDatabase(stringJsonStorage);
	//		guardar el base de datos

	// avisar al usuario

	//fin
}

// load from localstorage
$("#loadSVGButton").click(loadFromLocalStorage);
function loadFromLocalStorage(){
	myInfo = localStorage.getItem("testJSON");
	objeto = JSON.parse(myInfo);
	
	codigoCanvas = "";
	codigoCanvas += "<svg width='600' height='300' id='"+ objeto.id+"'>";
	for (var i = 0; i < objeto.contenido.length ; i++) {
		console.log(arrayDeObjetos[i]);
		esteObjeto = arrayDeObjetos[i];
		if (esteObjeto.tag == "circle") {
			codigoCanvas+= "<circle class='elCirculo' cx='"+ esteObjeto.x +"' cy='"+ esteObjeto.y +"' r='"+esteObjeto.w+"' stroke='#3399ff' stroke-width='3' fill='"+esteObjeto.fill+"' opacity='0'/>";
		}
		if (esteObjeto.tag == "rect") {
			codigoCanvas+= "<rect class='elCuadro' x='"+ esteObjeto.x +"' y='"+ esteObjeto.y +"' width='"+esteObjeto.w+"' height='"+esteObjeto.h+"' stroke='#99cc00' stroke-width='3' fill='"+esteObjeto.fill+"' opacity='0'/>";
		}
	}
	
	codigoCanvas += "</svg>";
	$("#gSVG").html(codigoCanvas);
	console.log("hola github");
	console.log("este es un xcambio que arregla un issue");
}

function saveToDataBase( theNewData ) {
$.post ("models/saveJSON.php" , {"info":theNewData}).done(function(){
	$('#theSavedDraws').load("views/savedMenu.php");
})
.fail(finction(){
	console.log("error en transmision");
})

$('selectDraw').change(loadFromDatabase);
$('#loadDBBtn').click(loadFromDatabase);

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //var myObj = JSON.parse(this.responseText);
        //document.getElementById("demo").innerHTML = myObj.name;
        console.log(this.responseText);
    }
};

//recolectar la info que deseo almacenar
//la guardo en un objeto
// le mando este objeto al server en el request


xmlhttp.open("POST", "models/saveJSON.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
	
}

function saveToDatabase (theNewData){
	jQuery.post ("models/saveJSON.php" ,theNewData).done(function(){
		console.log(this.responseText);
	}).fail(function(){console.log("error en transmision");
})
}

$('loadSVGDatabaseBtn').click(loadFromDatabase);
function loadFromDataBase(){
	console.log("cargando de DB");


	//obtener el valor de la opcion seleccionada
		selectedValue = $('#selectDraw option:selected') [0].value;
		selectedLabel = $('#selectDraw option:selected') [0].text;
	//el valor es un array y 
		arrayDeObjetos = JSON.parse(selectedValue);
	//por cada valor del arreglo voy a generar un elemento del svg

	//puede ser circulo o cuadro


		
		//TAREA NOT DONE//
		//ajustar las siguientes variables para el comportamiento descrito
		//myInfo = asignar el valor de la opcion seleccionada del <SELECT>
	//objeto = arreglar myInfo para pasarsela al bucle
	
	codigoCanvas = "";
	codigoCanvas += "<svg width='600' height='300' id='"+ objeto.id+"'>";
	for (var i = 0; i < objeto.contenido.length ; i++) {
		console.log(objeto.contenido[i]);
		esteObjeto = objeto.contenido[i];
		if (esteObjeto.tag == "circle") {
			codigoCanvas+= "<circle class='elCirculo' cx='"+ esteObjeto.x +"' cy='"+ esteObjeto.y +"' r='"+esteObjeto.w+"' stroke='#3399ff' stroke-width='3' fill='"+esteObjeto.fill+"' opacity='0'/>";
		}
		if (esteObjeto.tag == "rect") {
			codigoCanvas+= "<rect class='elCuadro' x='"+ esteObjeto.x +"' y='"+ esteObjeto.y +"' width='"+esteObjeto.w+"' height='"+esteObjeto.h+"' stroke='#99cc00' stroke-width='3' fill='"+esteObjeto.fill+"' opacity='0'/>";
		}
}

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

})