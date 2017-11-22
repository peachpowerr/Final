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
	//		guardar el base de datos
	// avisar al usuario
	//tan tan
}

// load from localstorage
$("#loadSVGButton").click(loadFromLocalStorage);
function loadFromLocalStorage(){
	myInfo = localStorage.getItem("testJSON");
	objeto = JSON.parse(myInfo);
	
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
	
	codigoCanvas += "</svg>";
	$("#gSVG").html(codigoCanvas);
	console.log("hola github");
	console.log("este es un xcambio que arregla un issue");
}

})