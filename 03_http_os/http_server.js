const { createServer } = require('http')

const port = 3000

const router = (req, res) => {
	switch (req.url) {
		case '/':
			res.end('<h1>Hi, Index page</h1>')
			break
		default:
			res.write('404!')
			res.end()
	}
}

const server = createServer(router)

server.listen(port, err => {
	if (err) {
		console.info('Could not entablish a connection to the server')
		console.error(err.message)
	}
	console.info(`> Ready on http://localhost:${port}`)
})