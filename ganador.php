<!DOCTYPE html>
<html>
<head>
	<title>Has guanyat!</title>
	<script type="text/javascript" defer src="imagendelreves.js"></script>
	<link rel = "stylesheet" href = "stylequiesqui.css">

</head>
<body class='bodyganador' style="background-color:#000000; color: pink;" onload="fuegos();">
<h1 align='center'> Has guanyat!</h1>

<script language="javascript">

</script>

<canvas id="canvas"></canvas>

<script language="javascript">

	function quiere_registrar() {
	var statusConfirm = confirm("¿Desea guardar su puntuación para el Ranking? Si le da a cancelar se reiniciará la partida");
	if (statusConfirm == true) {
		//var ganador = prompt('Introduzca su nombre:','');
		//alert(ganador); 
		//document.formu.nombre=ganador;
		//ranking();
	}
	if (statusConfirm == false) {
		window.location.href = 'reves.php';
	}
	
}
setTimeout(quiere_registrar, 5000);

function ranking() {
	window.location.href = 'ranking.php';
}

	</script>

<form class='formuganador' method=post action="ranking.php">
	<p>Nombre: <input type="text" name="nombre"></p>
	<p> <input type="hidden" id="intentosganador" name="intentosganador"></p>
	<input type="submit" name="submit" value="Submit"/>

</form>

<!-- php
	$file = fopen("ranking.txt", "a");
	fwrite($file, "\n14:$ganador");
	fclose($file);
-->








</body>
</html>
