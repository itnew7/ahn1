$('button').on('click',function(){
    let username = $(".username").val();
    let password = $('.password').val();
    console.log(username,password)
    $.ajax({
        url:"/api/user/signin?name="+ username + "&pas="+ password,
        type:'POST',
        data:{
            name:username,
            pas:password
        },
    }).then(function(data){
       
        console.log(data)
       if(data.status == 200){
        setCookie('user',data.data,30)
        window.location.href = '/pagination'
       }
        $('.note').html(data.mess)
    }).catch(function(err){
        console.log(err)
    })
})

$.ajax({
    url:'/api/user/checklogin',
    type:'GET'
}).then(function(data){
   if(data.status ==200){
       window.location.href ='/pagination'
   }
}).catch(function(err){
    console.log(err)
})


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }