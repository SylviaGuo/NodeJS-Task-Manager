require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fda8998e45f8b2bd0a4ea88', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })
const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5fda8998e45f8b2bd0a4ea88', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})