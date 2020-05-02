const express = require('express')

const app = express()

const port = 8989

// app.get('/cakes', (req, res)) {
//  res.send()
// }

app.listen(port, ()=>{
    console.log('Server started at' + port )
})
