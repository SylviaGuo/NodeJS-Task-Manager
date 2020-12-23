const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = () => {
    const token = jwt.sign({_id:'sylvia123'}, 'syvliawebsite', {expiresIn: '1 seconds'})
    console.log(token)

    const data = jwt.verify(token, 'syvliawebsite')
    console.log(data)
}
