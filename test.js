const fs = require('fs')


const read = (path, callback) => {
	fs.readFile(path, (err, data) => {
		console.log(data.toString())
	})
}

const write = (path, content, callback) => {
	fs.writeFile(path, content, function(error) {
		error
		? console.log('Error')
		: console.log('Written correctly')
	})
}

read(__dirname + '/test.txt', console.log)
write(__dirname + '/test.txt', 'hi this is a tsdasdadest')

