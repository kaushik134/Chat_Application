const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static("public"));


// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
  console.log("Websocket Connected", socket.id);

})