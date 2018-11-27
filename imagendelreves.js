var giradas = 0; 
var ganador = '';
var audio = new Audio('clic.mp3');
var audio_victoria = new Audio('victoria.mp3');
var audio_fracaso = new Audio('fracaso.mp3');
var modo = 'normal'; //nuevo para juntar

var cartanog = 0;
var nogiradas = 0;
var preguntes = 0;
var disabled = false;
var clics = 0;

function girar(card){
	if (modo=='normal') { //nuevo para juntar
		if (card.className == 'flip-card'){
			audio.play();
			card.classList.toggle('is-flipped');
			card.setAttribute('name', 'girada');
			contador_giradas();
				}
	}
}


function contador_giradas() {
	nogiradas += 1;
	giradas+=1; //cada cop que una carta es gira suma 1 al contador
	if (giradas==15) { //com son 16 cartes, quan arribem a la 15 parem i comparem cartes
		comparar_cartas();
	}

}


function comparar_cartas() {
	document.getElementById("intentosganador").value = preguntes ;
	var formuintents = document.getElementById("formuintentos");
	var ultima_carta = document.getElementsByName("cara"); //agafem la unica carta que te com a name cara
	var carta_servidor = document.getElementById('escollida'); //agafem la carta del servidor que te id escollida
	if (ultima_carta[0].id==carta_servidor.getAttribute('escollida')) {
		//comparem el id de la ultima carta, que es el nom de la carta, amb l'atribut escollida de la carta del servidor, que tambe es el nom de la carta
		audio_victoria.play();
		alert("¡HAS GANADO! ¡FELICIDADES!");
		formuintents.submit();
	}
	else {
		audio_fracaso.play();
		alert ("HAS PERDIDO :(");
		var statusConfirm = confirm("¿Desea iniciar una nueva partida?");
	if (statusConfirm == true) {
		location.href="redirigir.php";
		//location.reload();
		}

	}
}

function girarTodas(texto){
	var vgirar=document.getElementById(texto);
	vgirar.classList.toggle('is-flipped');
	vgirar.setAttribute('name', 'girada');
}

function cartanogirada(){
	cartanog += 1;
}


function masdeUna(){
	cartanogirada();
	
	var seleccionada1=document.getElementById('gafas').value;
	var seleccionada2=document.getElementById('especie').value;
	var seleccionada3=document.getElementById('sexualidad').value;
	var seleccionada4=document.getElementById('pelos').value;


	var num=0;
	var num1=0;
	var num2=0;
	var num3=0;
	var num4=0;

	//comprobar los select
	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	
	
	if(seleccionada!="0"){
		ok1=true;
		//alert(jsvarLineasimagenes);
		for(var n=0;n<16;n++){

			var jsvarComparar = document.getElementById('todoslosatributos['+n+']').innerHTML.trim();
			console.log(jsvarComparar);
			
			for(var i=0;i<jsvarResposta.length;i++){

					
				var jsvarComparar2 = document.getElementById('resposta['+i+']').innerHTML.trim();
				
				var jsvarSoloCaracteristicas = document.getElementById('solo_caracteristicas['+i+']').innerHTML.trim();
				//console.log(jsvarComparar)
				//alert(jsvarComparar);
				
				var jsvarcabello=jsvarSoloCaracteristicas+" "+seleccionada;
				
				if (seleccionada+" si"==jsvarComparar2){
					document.getElementById("mensaje").style.color ="green";
					document.getElementById("texto").innerHTML = "SI";
					document.getElementById("mensaje").innerHTML="*";
					ok1=false;

					//document.getElementById('seleccionada['+i+']').style.display = "none";
					
				} 
				else if(seleccionada+" no"==jsvarComparar2){
					document.getElementById("mensaje").style.color ="red";
					document.getElementById("texto").innerHTML = "NO";
					document.getElementById("mensaje").innerHTML="X";
					//alert(jsvarComparar2);
					ok1=false;
					
					//document.getElementById('seleccionada['+i+']').style.display = "none";
				
					
				}

				else if(jsvarcabello==jsvarComparar2){
					document.getElementById("mensaje").style.color ="green";
					document.getElementById("texto").innerHTML = "SI";
					document.getElementById("mensaje").innerHTML="*";
					//alert(jsvarComparar2);
					ok1=false;
					
					//document.getElementById('seleccionada['+i+']').style.display = "none";
					
					
				}
				
				if(ok1){
					document.getElementById("mensaje").style.color ="red";
					document.getElementById("texto").innerHTML = "NO";
					document.getElementById("mensaje").innerHTML="X";
					texto=document.getElementById('solonombres['+i+']').innerHTML.trim();
					girarTodas(texto);





					//document.getElementById('seleccionada['+i+']').style.display = "none";
					
					/*function girarSola(){
						//alert("hola")
						var cartagirar=document.getElementById('giradas').innerHTML.trim();
						girar(cartagirar);
					}
					for(e=0;e<jsvarLineasimagenes;e++){
						alert("entra");
						var cartaelegida=document.getElementById('cartasescogida').innerHTML.trim();
						var cartanoelegida=document.getElementById('cartasTablero['+e+']').innerHTML.trim();

						alert(cartanoelegida);
						alert(cartaelegida);
						
					}
					
					*/
					

				}
				
			}
		}
	}	
	
	for(var n=0;n<jsvarCombo.length;n++){
		var jsvarOcultar=document.getElementById('seleccionada['+n+']').innerHTML.trim();
		if(seleccionada==jsvarOcultar){
			document.getElementById('seleccionada['+n+']').style.display = "none";
		}

	}
	document.getElementById('select').value="0";
}

/*		
for(var i=0;i<jsvarResposta.length;i++){
	
	alert("hola");

	var jsvarComparar = document.getElementById('comparar['+i+']').innerHTML.trim();
	var jsvarCompararCabello = document.getElementById('comparar_pelo['+i+']').innerHTML.trim();
	
	//alert(jsvarComparar+" si");
	if(seleccionada==jsvarComparar){
		var jsvaracomparar=jsvarComparar+" si";

		var jsvarComparar2 = document.getElementById('resposta['+i+']').innerHTML.trim();
		//alert(jsvarComparar2);
		//alert(jsvaracomparar);
	
		//var jsvarComparar3 = document.getElementById('compara_respuesta['+i+']').innerHTML;
		//alert(jsvarComparar3);

		if(jsvarComparar2==jsvaracomparar){
			document.getElementById("mensaje").style.color ="green";
			document.getElementById("texto").innerHTML = "SI";
			document.getElementById("mensaje").innerHTML="*";
			alert("SI");
		}else{
			document.getElementById("mensaje").style.color ="red";
			document.getElementById("texto").innerHTML = "NO";
			document.getElementById("mensaje").innerHTML="X";
			alert("NO");
	}
	
		//alert(jsvarResposta2);

		document.getElementById("mensaje").style.color ="green";
		document.getElementById("texto").innerHTML = "SI";
		document.getElementById("mensaje").innerHTML="*";
		
	}else{
		document.getElementById("mensaje").style.color ="red";
		document.getElementById("texto").innerHTML = "NO";
		document.getElementById("mensaje").innerHTML="X";
		
		
}
}

}
*/


function deshab_easy() {
	if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
		disabled = true;
	}
}
function deshab_VeryEasy() {
	if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
		disabled = true;
	}
}
function activar_VeryEasy() {
	document.getElementById("easy").disabled = true;
	if(disabled == false) {
		document.getElementById("easy").style.backgroundColor = "#b38f00";
		document.getElementById("easy").style.fontWeight = "bold";
		document.getElementById("easy").style.borderColor = "#ff0000";
		document.getElementById("easy").style.borderWidth = "6px";
		disabled = true;
	}
	
}

function activar_easy() {
	document.getElementById("easy").disabled = true;
	if(disabled == false) {
		document.getElementById("easy").style.backgroundColor = "#b38f00";
		document.getElementById("easy").style.fontWeight = "bold";
		document.getElementById("easy").style.borderColor = "#ff0000";
		document.getElementById("easy").style.borderWidth = "6px";
		disabled = true;
	}
	
}

function mostrar_preguntes() {
	document.getElementById("ta").value = preguntes;
	//document.getElementById("intentosganador").value=preguntes;
}



function fuegos() {
	let canvas, width, height, ctx;
	let fireworks = [];
	let particles = [];

	function setup() {
		canvas = document.getElementById("canvas");
		setSize(canvas);
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		fireworks.push(new Firework(Math.random()*(width-200)+100));
		window.addEventListener("resize",windowResized);
		document.addEventListener("click",onClick);
	}

	setTimeout(setup,1);

	function loop(){
		ctx.globalAlpha = 0.1;
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		ctx.globalAlpha = 1;

		for(let i=0; i<fireworks.length; i++){
			let done = fireworks[i].update();
			fireworks[i].draw();
			if(done) fireworks.splice(i, 1);
		}

		for(let i=0; i<particles.length; i++){
			particles[i].update();
			particles[i].draw();
			if(particles[i].lifetime>80) particles.splice(i,1);
		}

		if(Math.random()<1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));
	}
	setInterval(loop, 1/60);
	class Particle{
		constructor(x, y, col){
			this.x = x;
			this.y = y;
			this.col = col;
			this.vel = randomVec(2);
			this.lifetime = 0;
		}

		update(){
			this.x += this.vel.x;
			this.y += this.vel.y;
			this.vel.y += 0.02;
			this.vel.x *= 0.99;
			this.vel.y *= 0.99;
			this.lifetime++;
		}

		draw(){
			ctx.globalAlpha = Math.max(1-this.lifetime/80, 0);
			ctx.fillStyle = this.col;
			ctx.fillRect(this.x, this.y, 2, 2);
		}
	}

	class Firework{
		constructor(x){
			this.x = x;
			this.y = height;
			this.isBlown = false;
			this.col = randomCol();
		}

		update(){
			this.y -= 3;
			if(this.y < 350-Math.sqrt(Math.random()*500)*40){
				this.isBlown = true;
				for(let i=0; i<60; i++){
					particles.push(new Particle(this.x, this.y, this.col))
				}
			}
			return this.isBlown;
		}

		draw(){
			ctx.globalAlpha = 1;
			ctx.fillStyle = this.col;
			ctx.fillRect(this.x, this.y, 2, 2);
		}
	}

	function randomCol(){
		var letter = '0123456789ABCDEF';
		var nums = [];

		for(var i=0; i<3; i++){
			nums[i] = Math.floor(Math.random()*256);
		}

		let brightest = 0;
		for(var i=0; i<3; i++){
			if(brightest<nums[i]) brightest = nums[i];
		}

		brightest /=255;
		for(var i=0; i<3; i++){
			nums[i] /= brightest;
		}

		let color = "#";
		for(var i=0; i<3; i++){
			color += letter[Math.floor(nums[i]/16)];
			color += letter[Math.floor(nums[i]%16)];
		}
		return color;
	}

	function randomVec(max){
		let dir = Math.random()*Math.PI*2;
		let spd = Math.random()*max;
		return{x: Math.cos(dir)*spd, y: Math.sin(dir)*spd};
	}

	function setSize(canv){
		canv.style.width = (innerWidth) + "px";
		canv.style.height = (innerHeight) + "px";
		width = innerWidth;
		height = innerHeight;

		canv.width = innerWidth*window.devicePixelRatio;
		canv.height = innerHeight*window.devicePixelRatio;
		canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
	}

	function onClick(e){
		fireworks.push(new Firework(e.clientX));
	}

	function windowResized(){
		setSize(canvas);
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
	}
}


function activar_modo_easy() {

}


function never() {
	//pone un gif como easter egg sin el hidden cuando lleva 3 clics en una foto no utilizable en el juego
	clics+=1;
	if (clics==3){
		document.getElementById("nevergif").hidden=false;
  		clics=0;
  		setTimeout(always,3000);

  	}
}

function always() {
	//pone el gif oculto de nuevo
	document.getElementById("nevergif").hidden=true;
}