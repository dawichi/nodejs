console.log('first')

let i = 0
setInterval(function() {
	console.log(i)
	if (i == 5) console.log(i+z)
	i++
}, 1000)

console.log('second')



/*

'second' is shown before the setInterval() function content, because everything is async by default

*/