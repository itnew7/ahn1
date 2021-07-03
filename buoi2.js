let div = `
<input type="text"  class="username">
<input type="text " class="password">

<button onclick="click()">click</button>
`
//$('body').append(div)
//console.log($('.class'))

function dangnhap(){
    let username =$('.username').val()
    let password = $('.password').val()
    console.log(username, password)


    if(username == '' || password ==''){
        $('.thongbao').html('khong de trong')
    }
    if(username !== '' && password.length <8 &&password !=='' ){
        $('.thongbao').html('mk quá ngắn')
    }
    if(username !== '' & password.length >=8 &&password !==''){
        $('.thongbao').html('dang nhap thanh công')
    }
}

$('.btn').on('click',function(){
   // $('body').css({'background':'pink','color':'red'})
   // $('.password').attr('type','password') 
   let tag = $('.password').attr('type')
   console.log(tag)

})
$('img').css('width','100%')
 let linkanh = $(`img`).attr('src')
 let newimg =`
 <a href = "https://www.facebook.com"> <img src ='${linkanh}' style ='width','100%' </a>
 `
$('img').remove()
$('body').append(newimg)