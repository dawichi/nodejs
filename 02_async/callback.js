/*
	NodeJS is async by default
*/


const hello = (name, callback) => {
	setTimeout(function(){
		console.log('Hi ' + name)
		callback()
	}, 1500)
}

const bye = (name, callback) => {
	setTimeout(function(){
		console.log('Bye ' + name)
		callback()
	}, 1000)
}

console.log('Starting process...')
hello('David', function() {
	bye('David', function() {
		console.log('Ending process...')
	})
})

console.log('-------------')

hello('David', function(){})
bye('David', function(){})
