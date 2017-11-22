<body>
	<div id="gSVG">

	</div>

	<div id="formulario">
		<p><label for="rect"> Numero de cuadros </label>
			<input type="number" name="numRect" id="numRectField" min="1" max="2000"></p>
			<p><label for="circulos"> Numero de circulos: </label>
			<input type="number" name="numCircle" id="numCircleField" min "1" max="2000"></p>
			<p><button id="recreateSVGButton"> Generar </button>
				<button id="saveSVGButton"> Save </button>
				<button id="loadSVGNutton"> Load form local storage</button>
				<div>
					<?php include ('savedMenu.php'); ?>
					
					<button id="loadBD-Btn"> Load from database </button>
				</div>
			</p>
			<div id="gControls">
			</div>
		</div>
	</body>


