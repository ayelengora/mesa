window.onload = function() {

	const sillas = document.querySelectorAll(".silla")
	const mas = document.querySelector('#botonmas')
	const menos = document.querySelector('#botonmenos')
	let eleccionComputadora = " "
	const usado = []
	let silla = {}
	let i =  0
	let j = 0
	let k = 0

	function sumarsilla () {
		if ( i <= 7) {
			sillas[i].classList.remove('visible')
			i++
			j++
		} 
	}		
	
	function restarsilla () {
		if (  j >= 0 ){
			sillas[i-1].classList.add('visible')
			j--
			i--
		}
			
	
	}

	mas.addEventListener("click", sumarsilla);
	menos.addEventListener("click", restarsilla);

 
	const azar = (elemento) => {
		const libres = !usado
		let numero = Math.floor(Math.random() * !usado.includes.length)
		if (!usado.includes(numero)){
			if (numero == 0 ){
				elemento = document.querySelector("#silla1")
			} else if (numero === 1 ){
				elemento = document.querySelector("#silla2")
			}else if (numero === 2 ){
				elemento = document.querySelector("#silla3")
			} else if (numero === 3){
				elemento = document.querySelector("#silla4")
			}else if (numero === 4){
				elemento = document.querySelector("#silla5")
			}else if (numero ===5){
				elemento = document.querySelector("#silla6")
			}else if (numero === 6){
				elemento = document.querySelector("#silla7")
			}else if (numero === 7){
				elemento= document.querySelector("#silla8")
			}
			usado.push(numero)
			return element
		}
		
	}




}