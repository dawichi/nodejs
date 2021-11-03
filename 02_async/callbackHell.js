/*
	NodeJS is async by default
*/


const hello = (name, callback) => {
	setTimeout(function(){
		console.log('Hi ' + name)
		callback(name)
	}, 500)
}

const bye = (name, callback) => {
	setTimeout(function(){
		console.log('Bye ' + name)
		callback()
	}, 500)
}

const talk = (callback) => {
	setTimeout(function(){
		console.log('Text text text text')
		callback()
	}, 500)
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
hello('David', function(name) {
	converse(name, 3)
})