
 let x
 function timKiem(){
    let timKiem = document.querySelector('.timKiem').value
    clearTimeout(x)
   x =  setTimeout(function(){
        alert(timKiem)
    },1000)
}

document.querySelector('.dangnhap').addEventListener('click', function(){
    
    let tag = this.EventListener.getElementsByTagName('div')
console.log(tag)
}) 