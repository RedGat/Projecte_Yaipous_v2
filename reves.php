<!DOCTYPE html>
<html>
<head>

	<title>Qui es Harry</title>
	<script type="text/javascript" defer src="imagendelreves.js"></script>
	<link rel = "stylesheet" href = "stylequiesqui.css">

<?php
//abrimos y leemos el fichero txt.
$fp = fopen("imatges.txt", "r");
//creamos un array para incluir cada linea leida.


$arraynoms=array();
$arraycaract=array();
$arrayvalores=array();
$arraylineas=array();
$arrayLineas=array();
$arrayLineasexplo=array();
while(!feof($fp)){
$delimeter=array(":",","," ");
$linea = fgets($fp);
$replace= str_replace($delimeter, $delimeter[0], $linea);
$explode=explode($delimeter[0], $replace);
array_push($arraylineas, $linea);
array_push($arraynoms, $explode[0]);

array_push($arrayvalores, $explode[4],$explode[8],$explode[12]);
}
array_push($arraycaract, $explode[3],$explode[7],$explode[11],$explode[15]);
for($i=0;$i<count($arraylineas);$i++){
$atributs=explode(":", $arraylineas[$i]);
array_push($arrayLineas, $atributs[1]);
}
for($n=0;$n<4;$n++){
$atributs1=explode(",", $arrayLineas[$n]);
array_push(($arrayLineasexplo), $atributs1[$n]);
}


$zp = fopen("config.txt", "r");
//creamos un array para incluir cada linea leida.
$arraynomsc=array();
$arraycaractc=array();
$arrayvaloresc=array();
$arraylineasc=array();
$arrayLineasc=array();
$espode=array();
$arraycaracteristiques=array();

while(!feof($zp)){
$delimeterc=array(":"," ");
$lineac = fgets($zp);
$replacec= str_replace($delimeterc, $delimeterc[0], $lineac);
$explodec=explode($delimeterc[0], $replacec);

array_push($espode, $explodec);
array_push($arraylineasc, $lineac);
array_push($arraynomsc, $explodec[0]);


}
array_push($arraycaractc, $explodec[2],$explodec[3]);

for($c=0;$c<count($arraylineasc);$c++){
$atributsc=explode(":", $arraylineasc[$c]);
array_push($arrayLineasc, $atributsc);
}


fclose($zp);
fclose($fp);







//Una mateixa imatge (nom d'arxiu) apareix dos cops a l'arxiu de configuració.



if(count($arraynoms)>count(array_unique($arraynoms))){
	header("location:personajesrepetidos.php");
}


if(count($arrayLineas)>count(array_unique($arrayLineas))){	//Dues imatges diferents tenen les mateixes característiques.
	
	header("location:errores.php");

}

//Una característica que apareix al fitxer imatges.txt no apareix al fitxer config.txt (al revés no importa)


for($v=0;$v<count($arraycaract);$v++){
	if(in_array($arraycaract[$v], $arraynomsc)){
		
	}else{
		
		header("location:atributonoexiste.php");
	}
	
}
echo "<br>";
?>

</head>
<body id="bodyprincipal" onload="mostrar_preguntes()">
	<h2 style='color:white'>Qui es Qui - Versió Harry Potter</h2>

<?php


$array_lineas = array(); //aray con las lineas del txt
$array_nombres = array(); //aray con los nombres de las fotos



//codigo para sacar el nombre de las fotos:

$fp = fopen("imatges.txt", "r");
while (!feof($fp)){
    $linea = fgets($fp);
    $linea_split = explode(":", $linea);
    array_push(($array_lineas),$linea_split);

}

for ($i=0;$i<count($array_lineas);$i++) {
	$nom_imatge = $array_lineas[$i][0];
	array_push(($array_nombres),$nom_imatge);

}


fclose($fp);

$x=rand(0,15);
echo "<img id='escollida' style='left; padding-left: 40px float: left; border:5px solid white;'  escollida='" . trim($array_nombres[$x]) . "' width='150' height='190' src='./img/" . trim($array_nombres[$x]) . "'>";
	$escogido = $arrayLineas[$x];

shuffle($array_nombres); //mezcla el array

echo "<table id='cartas' align='center'>";
echo "<tr>";

for ($i=0;$i<count($array_nombres);$i++) {
	if ($i%4==0) {
		echo "</tr>";
		echo "<br>";
		echo "<tr>";
	}
	echo "<td>";
	echo '<div class="flip-card" name="cara" onclick="girar(this)" id="' . trim($array_nombres[$i]) . '">';
		echo "<div class='front-face caracarta'>";
		echo "<img style='border:5px solid white' name=" . $array_nombres[$i] . " width='150' height='190' src='./img/" . $array_nombres[$i] . "'>";
		echo "</div>";
		echo "<div class='back-face' style='border:5px solid white'></div>";
	echo "</div>";
		echo "</td>";
}
echo "</tr> </table>";


?>

<?php


$arraycara=array();
$lineaescogido = explode(",", $escogido);
array_push(($arraycara),$lineaescogido);
echo "<br>";
echo "<p style='display:none' id='cabellorespuesta'>" . $arraycara[0][0] . "</p>";
echo "<p style='display:none' id='ulleresrespuesta'>" . $arraycara[0][1] . "</p>";
echo "<p style='display:none' id='sexerespuesta'>" . $arraycara[0][2] . "</p>";
echo "<p style='display:none' id='humarespuesta'>" . $arraycara[0][3] . "</p>";

echo "<br>";

?>

<script type="text/javascript">
    var jsvarCabell = document.getElementById('cabellorespuesta').innerHTML.trim();
    var jsvarUlleres = document.getElementById('ulleresrespuesta').innerHTML.trim();
    var jsvarSexe = document.getElementById('sexerespuesta').innerHTML.trim();
    var jsvarHuma = document.getElementById('humarespuesta').innerHTML.trim();


</script>

<div class="cartas">
	<select id="gafas" name="caracteristica">
		<option selected value="0" id='dtf_gafas'> </option>
		<option value="ulleres si">¿Porta ulleres?</option>
	</select>

	<select id="especie" name="caracteristica">
		<option selected value="0" id='dtf_hum' > </option>
		<option value="huma si">¿És humà?</option><!-- resposta "huma si"-->
	</select>

	<select id="sexualidad" name="caracteristica">
		<option selected value="0" id='dtf_sex'> </option>
		<option value="sexe mascle">¿És macle?</option>
		<option value="sexe famella">¿És femella?</option>
	</select>

	<select id="pelos" name="caracteristica">
		<option selected value="0" id='dtf_pelo'> </option>
		<option value="cabell calb">¿És calb?</option>
		<option value="cabell ros">¿És ros?</option>
		<option value="cabell castany">¿És castany?</option>
		<option value="cabell pelroig">¿És pelroig?</option>
		<option value="cabell moreno">¿És moreno?</option>
		
	</select>
	</div>
<div class="boton_pregunta">
    <input type="submit" name="submit" onclick="masdeUna();deshab_easy()" value="Fes la pregunta"/>
  </div>

<div id = "comptador">
	<label id = "preguntes">PREGUNTES</label>
	<textarea id = "ta" rows="1" cols="5" readonly></textarea>
</div>	

<button onclick="activar_easy()" id = "easy">EASY</button>
<br>

<div class="mensaje">
	<p id="texto"></p>
	<p id="mensaje" class="parpadea"></p>
	
</div>



</body>
</html>