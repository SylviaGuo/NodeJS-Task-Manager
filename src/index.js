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

const main = async () => {
    // const task = await Task.findById('5fe6f2d6f8708e5070d20f7f')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5fe6f1a0d285a35025e628bc')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()