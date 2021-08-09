const us = require("./us")


async function getdata(){
    
console.log(1)
let data =  await us.find();
console.log(data)
console.log(2)
}
getdata()

