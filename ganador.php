<!DOCTYPE html>
<html>
<head>
	<title>Has guanyat!</title>
	<script type="text/javascript" defer src="imagendelreves.js"></script>
	<link rel = "stylesheet" href = "stylequiesqui.css">

</head>
<body class='bodyganador' style="background-color:#000000; color: pink;" onload="fuegos();">
<h1 align='center'> Has guanyat!</h1>

<form hidden="true" id="nom" class='formuganador' method=post action="ranking.php">
	<p>Nombre: <input type="text" name="nombre"></p>
	<p><input type="hidden" value="0" id="intentosformulario" name="intentosganador"></p>
	<input type="submit" name="submit" value="Submit"/>

</form>


<?php 

$intentosdelganador = $_POST['intentosganador'];

echo "<span hidden='true' id='pasar_intentos'>".$intentosdelganador."</span>";

?>

<canvas id="canvas"></canvas>

<script language="javascript">

	function quiere_registrar() {
	var statusConfirm = confirm("¿Desea guardar su puntuación para el Ranking? Si le da a cancelar se reiniciará la partida");
	if (statusConfirm == true) {
		//document.getElementById("nom").type="text";
		document.getElementById("nom").hidden=false;
	}
	if (statusConfirm == false) {
		location.href="redirigir.php";
	}
	
}
setTimeout(quiere_registrar, 3000);

function ranking() {
	window.location.href = 'ranking.php';
}
var intentosdelganador_js = document.getElementById("pasar_intentos").innerHTML;
document.getElementById("intentosformulario").value=intentosdelganador_js;

	</script>

<!-- php
	$file = fopen("ranking.txt", "a");
	fwrite($file, "\n14:$ganador");
	fclose($file);
-->








</body>
</html>
