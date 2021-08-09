$('button').on('click',function(){
    let username = $(".username").val();
    let password = $('.password').val();

    $.ajax({
        url:"/api/user?name="+ username + "&pas="+ password,
        type:'POST',
        data:{
            name:username,
            pas:password
        },
    }).then(function(data){
        console.log(data)
        $('.note').html(data)
    }).catch(function(err){
        console.log(err)
    })
})

