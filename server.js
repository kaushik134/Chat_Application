const express = require('express')
const app = express()

const PORT = 3000

let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static("public"));


// Socket 
const io = require('socket.io')(server)


io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
  console.log("Websocket Connected", socket.id);

})