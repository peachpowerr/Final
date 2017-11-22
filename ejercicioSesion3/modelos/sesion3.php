<?php
echo "soy el ejercicio 3";
//generar valor aleatorio
//de acuerdo al valor mando un $saludo

$opcionSaludo = rand(0,4);

$saludo = "";

switch ($opcionSaludo) {
	case 0:
		$saludo = "hola"
		break;

	case 1:
		$saludo = "ke pex"
		break;

	case 3:
		$saludo = "tengo hambre"
		break;

	case 4:
		$saludo = "amiwa"
		break;
	
	default:
		$saludo = "pq?"
		break;
}

echo $saludo;

?>

<button id="btnSaludo">Saluda!</button>