const ms = 1000
const div = document.querySelectorAll('.d')

/*
@ class Timer 
*/

function Timer(ms){
	this.ms = ms
}

Timer.prototype.start = function(callback){
	setTimeout(callback, this.ms)
	return this
}

/*
@ class Game 
*/

function Game(){
	this.f = div[(Math.random()*14).toFixed(0)].id
	this.s = div[(Math.random()*14).toFixed(0)].id
}

Game.prototype.check = function(){
	if(this.f === this.s) {
		this.s == 'h'
		? this.s = 'k'
		: this.s = 'h'
		console.log('was equle', this.f, this.s)
	}
}
Game.prototype.start = function(){
	div.forEach((el) => {
		if(el.id == this.f || el.id == this.s){
			el.style.backgroundColor = 'red'
			return true
		}
	})
}
Game.prototype.def = function(){
	div.forEach(el => el.style.backgroundColor = 'grey');
}
Game.prototype.waitClick = function(arr){
		if(arr.length != 2){
		return setTimeout(() => {this.waitClick(arr)}, 500)
	} else {	
		container.dispatchEvent( new CustomEvent(
			'arrIsCompleted', {
				detail:{
					arr
				}
			}
		))
	} 
}

Game.prototype.validation = function(val){
	if(val){
	const f = this.f
	const finded = val.findIndex(function(el){
		if(el == f) return true
			return false
	})
	if(!!~finded){
		const cc = val.filter(el => el != this.f)
			console.log(cc, cc[0], this.s)
		if(cc[0] == this.s) {
			result.innerText = 'you win'
		} else {
			result.innerText = 'you lose'
		}
	} else {
		result.innerText = 'you lose'
	}		
		container.style.display='none'
		result.style.display='block'
	}	
}

function onloadFunc() {
	let arr = []
	let i = 0
	container.style.display='block'
	result.style.display='none'

	function handel(e) {
		if(!!e.target.id && e.target.id !== 'container'){
			if(i >= 2){
			return
			}
			i++
			arr.push(e.target.id)
		}	
		return arr
	}
	
	const game = new Game();
	const timer = new Timer(ms);
		game.check()
		game.start()
		timer.start(() => game.def())
		game.waitClick(arr)

function arrIsCompletedHendel(e) {
	game.validation(e.detail.arr)
}

container.addEventListener('arrIsCompleted', arrIsCompletedHendel)
container.addEventListener('click', handel)
}

btn.addEventListener('click', onloadFunc)
