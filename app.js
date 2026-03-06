// core Modules in Node js

var  fs = require("fs");
    fs.writeFileSync("hello.txt","Heello world");
    console.log("File created successfully");

    var  os = require("os");
    console.log(os.platform())// returns os platforn
    console.log(os.arch())// returns os architecture
    console.log(os.cpus())// returns detaild information about each cpu/core installed
    console.log(os.freemem())// returns free memory in bytes
    console.log(os.totalmem())// returns total memory in bytes
    console.log(os.homedir())// returns home directory of current user
    console.log(os.tmpdir())// returns temporary directory of current user
    console.log(os.hostname())// returns hostname of current system
    console.log(os.networkInterfaces())// returns network interfaces of current system
    console.log(os.release())// returns os release
    console.log(os.type())// returns os type
    console.log(os.uptime())// returns os uptime in seconds
    console.log(os.userInfo())// returns user information of current user

    var  path = require("path");
    console.log(path.dirname("C:/Users/HP/Desktop/nodejs/app.js"))// returns directory name of the path
    console.log(path.extname("C:/Users/HP/Desktop/nodejs/app.js"))// returns extension name of the path
    console.log(path.basename("C:/Users/HP/Desktop/nodejs/app.js"))// returns base name of the path
    console.log(path.parse("C:/Users/HP/Desktop/nodejs/app.js"))// returns an object with properties root, dir, base, ext, name
    console.log(path.join("C:/Users/HP/Desktop/nodejs/app.js"))// joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path
    console.log(path.resolve("C:/Users/HP/Desktop/nodejs/app.js"))// resolves a sequence of paths or path segments into an absolute path
    console.log(path.isAbsolute("C:/Users/HP/Desktop/nodejs/app.js"))// returns true if the path is an absolute path, otherwise returns false
    console.log(path.sep)// returns platform specific path segment separator
    console.log(path.delimiter)// returns platform specific path delimiter
    console.log(path.format({
        root: "C:/",
        dir: "C:/Users/HP/Desktop/nodejs",
        base: "app.js",
        ext: ".js",
        name: "app"
    }))// returns a path string from an object, the opposite of path.parse() method



    //  Objects in Node
    // -> Global Object is an object that is available in all modules
    // -> You do not need to import or require it to use it
// ex
console.log("abc")
console.log(process.cwd)
console.log(process.pid)

//Using colors modules
const colors = require('colors')
console.log(colors.green("Hello world"))

