<?php
$received = $_POST["info"];
 $obj =json_decode ($_POST["info"],false);
 $conn = new mysqli("localhost", "root", "parasvg");
 if($conn->connect_error){
 	die("connection failed:" .$conn->connect_error);
 }
 $query = "INSERT INTO theDraw (content) VALUES (".$received.")";
 if($conn->query($query)===TRUE){
 	echo "insert failed"
 }

 $conn->close();

