const bcrypt = require("bcrypt")

let salt = 13;
async function mahoa(mk){
    let pass = await bcrypt.hash(mk,salt);
    console.log(pass);

}
  //mahoa("anh")
  let password = "$2b$13$iMU.uaCjCcA5uUoFTd3YuOcL..fbTCiif4Dr9U5Vg/DtHRxOVET7S"

bcrypt.compare("anh",password,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})