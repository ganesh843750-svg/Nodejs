let ex = document.getElementById("ex")

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("plus")
let sub = document.getElementById("sub")
let pro = document.getElementById("pro")
let div = document.getElementById("div")
let equal = document.getElementById("equal")
let back = document.getElementById("back")
let  result = 0
let arr = []
let str = ""
let nums = ""
let num = 0

one.addEventListener("click", function(){
    str += "1"
    nums += "1"
    ex.textContent= str
})

two.addEventListener("click", function(){
    str += "2"
    nums += "2"
    ex.textContent= str
})


three.addEventListener("click", function(){
    str += "3"
    nums += "3"
    ex.textContent= str
})

four.addEventListener("click", function(){
    str += "4"
    nums += "4"
    ex.textContent= str
})

five.addEventListener("click", function(){
    str += "5"
    nums += "5"
    ex.textContent= str
})

six.addEventListener("click", function(){
    str += "6"
    nums += "6"
    ex.textContent= str
})

seven.addEventListener("click", function(){
    str += "7"
    nums += "7"
    ex.textContent= str
})

eight.addEventListener("click", function(){
    str += "8"
    nums += "8"
    ex.textContent= str
})

nine.addEventListener("click", function(){
    str += "9"
    nums += "9"
    ex.textContent= str
})

zero.addEventListener("click", function(){
    str += "0"
    nums += "0"
    ex.textContent= str
})

add.addEventListener("click", function(){
    str += "+"
    num = Number(nums)
    nums = ""
    arr.push(num)
    arr.push("+")
    ex.textContent= str
})

sub.addEventListener("click", function(){
    str += "-"
    num = Number(nums)
    nums = ""
    arr.push(num)
    arr.push("-")
    ex.textContent= str
})


pro.addEventListener("click", function(){
    str += "x"
    num = Number(nums)
    nums = ""
    arr.push(num)
    arr.push("x")
    ex.textContent= str
})

div.addEventListener("click", function(){
    str += "÷"
    num = Number(nums)
    arr.push(num)
    nums = ""
    arr.push("÷")
    ex.textContent= str
})

back.addEventListener("click", function(){

    if(str.length === 0) return;

    str = str.slice(0, -1)

    if(nums.length > 0){
        nums = nums.slice(0, -1)
    }
    else if(arr.length > 0){
        let last = arr.pop()

        if(typeof last === "number"){
            nums = String(last)
        }
    }

    ex.textContent = str
})


equal.addEventListener("click", function(){
 num = Number(nums)
    arr.push(num)
    nums = ""
for(let i =0; i < arr.length; i++){
    if( arr[i] === "x"){
      result =  arr[i-1]*arr[i+1]
        arr.splice(i-1,3,result)
        i -= 1
    }
   else if(arr[i]=== "÷"){
      result =  arr[i-1]/arr[i+1]
        arr.splice(i-1,3,result)
        i -= 1
    }

}
    for(let i =0; i < arr.length; i++){
    if( arr[i] === "+"){
      result =  arr[i-1]+arr[i+1]
        arr.splice(i-1,3,result)
        i -= 1
    }
   else if(arr[i]=== "-"){
      result =  arr[i-1]-arr[i+1]
        arr.splice(i-1,3,result)
        i -= 1
    }
}
    str = String(result)
    ex.textContent = result
})

reset.addEventListener("click", function(){
    str = ""
    arr.length = 0
    ex.textContent = str
    result = 0
    num = 0
    nums = ""
})