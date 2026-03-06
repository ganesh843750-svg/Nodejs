const path = require('path')

const file = "hello.txt"

console.log(path.extname(file))
console.log(path.dirname(file))
console.log(path.basename(file))

console.log(path.resolve("text",file))
console.log(path.isAbsolute(file))
console.log(__dirname)
console.log(__filename)