var giradas = 0; 
var ganador = '';
var audio = new Audio('sonido.mp3');
var cartanog = 0;
var nogiradas = 0;
var preguntes = 0;
var disabled = false;
var gira = true;
var sec;
var compt;


		document.getElementById("intentosganador").value = preguntes;


function girar(card){
	if (gira == true) {
	if (card.className == 'flip-card'){
		audio.play();
		card.classList.toggle('is-flipped');
		card.setAttribute('name', 'girada');
		contador_giradas();
			}}
}

function contador_giradas() {
	nogiradas += 1;
	giradas+=1; //cada cop que una carta es gira suma 1 al contador
	if (giradas==15) { //com son 16 cartes, quan arribem a la 15 parem i comparem cartes
		comparar_cartas();
	}

}


function comparar_cartas() {
	var ultima_carta = document.getElementsByName("cara"); //agafem la unica carta que te com a name cara
	var carta_servidor = document.getElementById('escollida'); //agafem la carta del servidor que te id escollida
	if (ultima_carta[0].id==carta_servidor.getAttribute('escollida')) {
		//comparem el id de la ultima carta, que es el nom de la carta, amb l'atribut escollida de la carta del servidor, que tambe es el nom de la carta
		alert("¡HAS GANADO! ¡FELICIDADES!");
		window.location.href = 'ganador.php';
		
	}
	else {
		alert ("HAS PERDIDO :(");
		var statusConfirm = confirm("¿Desea iniciar una nueva partida?");
	if (statusConfirm == true) {
		location.reload();
		}

	}
}

function cartanogirada(){
	cartanog += 1;
}

function toggle_gira() {
	gira = false;
} 


function temps_restant() {
	document.getElementById("segons").innerHTML = sec;
	if (sec > 0) { 
	sec = sec-1;
	}
	else if(sec == 0) {
		clearInterval(compt);
	} }


function masdeUna(){
	cartanogirada();

	sec = 20;
	gira = true;	
	setTimeout(toggle_gira,20000);
	clearInterval(compt);
	compt = setInterval(temps_restant,1000);


	
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
	
	
	if(seleccionada1!="0"){
		num1=1;
		ok1 = true;
	}
	if(seleccionada2!="0"){
		num2=1;
		ok2 = true;
	}
	if(seleccionada3!="0"){
		num3=1;
		ok3=true;
	}
	if(seleccionada4!="0"){
		num4=1;
		ok4=true;
	}
	num=num1+num2+num3+num4;
	if(num>=2){
		alert("Solo puedes escoger una pregunta");

		document.getElementById("dtf_gafas").selected = true;
		document.getElementById("dtf_pelo").selected = true;
		document.getElementById("dtf_sex").selected = true;
		document.getElementById("dtf_hum").selected = true;
	}
	else if(num<1){
		alert("Has de escoger una pregunta");
	}
	else if(cartanog > (nogiradas + 1)){
		alert("Segur que vols realitzar una altra pregunta sense girar cap carta?");
		cartanog = 0;
		nogiradas = 50000000;
	}
	else{
		preguntes+=1;
		mostrar_preguntes();
		if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
		disabled = true;
	}
		if(ok1)
		{
			if(seleccionada1==jsvarUlleres){
				document.getElementById("mensaje").style.color ="green";
				document.getElementById("texto").innerHTML = "SI";
				document.getElementById("mensaje").innerHTML="*";
			}else{
				document.getElementById("mensaje").style.color ="red";
				document.getElementById("texto").innerHTML = "NO";
				document.getElementById("mensaje").innerHTML="X";
				
			}
		}
		
		if(ok2)
		{
			if(seleccionada2==jsvarHuma){
				document.getElementById("mensaje").style.color ="green";
				document.getElementById("texto").innerHTML = "SI";
				document.getElementById("mensaje").innerHTML="*";
			}else{
				document.getElementById("mensaje").style.color ="red";
				document.getElementById("texto").innerHTML = "NO";
				document.getElementById("mensaje").innerHTML="X";
				d
			}
		}

		if(ok3)
		{
			if(seleccionada3==jsvarSexe){
				document.getElementById("mensaje").style.color ="green";
				document.getElementById("texto").innerHTML = "SI";
				document.getElementById("mensaje").innerHTML="*";
			}else{
				document.getElementById("mensaje").style.color ="red";
				document.getElementById("texto").innerHTML = "NO";
				document.getElementById("mensaje").innerHTML="X";
				
			}
		}
		
		if(ok4)
		{
			if(seleccionada4==jsvarCabell){
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
		
	
	}



function deshab_easy() {
	if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
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