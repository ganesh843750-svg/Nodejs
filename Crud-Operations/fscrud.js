const fs = require('fs')
const operation = process.argv[2]
// Creating the file
//fs.writeFileSync("./apple.txt","Tjis is a fruit")
// Deleting the file
//fs.unlinkSync("./apple.txt")

// Reading the file
// const data = fs.readFileSync('./apple.txt',"utf-8")
// console.log(data)

// Appending the text
//fs.appendFileSync("./apple.txt"," And this is a very good fruit")

if(operation === 'write'){
    const name = process.argv[3]
    const content = process.argv[4]
    fs.writeFileSync(`./${name}.txt`,content)
}
else if(operation === 'read'){
    const name = process.argv[3]
console.log(fs.readFileSync(`./${name}.txt`,"utf-8"))
}
else if(operation === "delet"){
    const name = process.argv[3]
    fs.unlinkSync(`./${name}.txt`)
}
else if(operation === 'append'){
    const name = process.argv[3]
    const content = process.argv[4]
    fs.appendFileSync(`./${name}.txt`,content)
}

