//let tag = document.getElementsByTagName('div')

//let classname = document.getElementsByClassName('div1')
  //classname[0].innerHTML = 'đã chỉnh sửa'
  //classname[0].outerHTML = 'xin chào'
//let id = document.getElementById("divId")
//id.innerHTML = 'thay đổi nội dung'
//id.append
 //let container =document.getElementsByClassName("container")
 //let div =container[0].getElementsByTagName("div")
 //let list =document.querySelector('div')
 //let alllist = document.querySelectorAll('div')
 //let allclass = document.querySelectorAll('.div1')
 //let allid =document.querySelectorAll('#divId')

 //let body = document.querySelector('body')
 //body.append ( 'abcc')

 
//let div = container[0]
 //let taodiv = document.createElement('div')
 //console.log(taodiv);
 //taodiv.innerHTML = ' tạo thẻ div'
// div.append(taodiv)
 let h1 = document.createElement('h1')
 h1.innerHTML = 'tiêu đề'
 let body = document.querySelector('body')
 console.log(body)  ;
 body.prepend(h1)
function indexClick() {
    let input =document.querySelector('input')
    let inputText = input.value

   console.log(inputText)
  
   let div = document.createElement('div')
   div.innerHTML = inputText
   
   let body = document.querySelector('body')
   body.append(div)

 //  let body = document.querySelector('.list')
  // body.append(div)
}
function doimau (){
 // c1 sửa thẻ style
  //let style = document.querySelector('style')
 // style.append('body{color:red;background:green}')
    
 //c2 sửa attribute style
 //let body = document.querySelector('body')
  //body.setAttribute('style','color:pink')

  //c3 sửa class hoặc id

  let body = document.querySelector('body')
  body.classList.toggle('color')
  //body.setAttribute('id','colorId')
}

let DoiMau = document.querySelector('.doiMau')
DoiMau.addEventListener('click',doimau)