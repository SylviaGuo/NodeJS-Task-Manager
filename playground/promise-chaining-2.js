require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fda7254a1796b2a7bff1b87').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}
deleteTaskAndCount('5fdfde2e34227c39d4f6134d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
