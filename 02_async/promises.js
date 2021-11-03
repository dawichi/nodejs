const hello = (name) => {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('Hi ' + name)
			resolve(name)
		}, 500)
	})
}

const bye = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('Bye ' + name)
			resolve()
		}, 500)
	})
}

const talk = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('Text text text text')
			// resolve()
			reject('There is an error')
		}, 500)
	})
}

const converse = (name, times, callback) => {
	if (times >= 0) {
		talk(function(){
			converse(name, --times, callback)
		})
	} else {
		bye(name, function(){
			console.log('Ending process...')
		})
	}
}


console.log('-------------')

console.log('Starting process...')
hello('David')
	.then(talk)
	.then(talk)
	.then(bye)
	.catch(error => {
		console.log('Oh no')
		console.log(error)
	})