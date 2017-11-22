<select name = "selectDraw" id="selectDraw">
						<?php

						$conn = new mysqli("localhost","root", "", "parasvg");
						if($conn->connect_error){
							die("connection failed:".$conn->connect_error);
						}
						$results = $conn->real_query("SELECT * from thedraws");

						if($conn->connection_error){
							die("connection failed: ".$conn->connect_error);
						}

						if ($conn->field_count){
							$results = $conn->store_result();
							foreach ($results as $result) {
								$obj = json_decode ($result['content'], false);
								$cadenaTextoDelJson = json_encode($obj->contenido);
								
								echo "<option value='value'" .$cadenaTextoDelJson."'>".$obj->id;"</option>";
							}
								echo "<option value='value'> hay resultados </option>"
							}
						}else{
							echo "<option value='value'> no hay resultados </option>"
						?>

					</select>