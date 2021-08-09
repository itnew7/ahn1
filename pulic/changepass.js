$('button').on('click',function(){
    let id = $(".id").val();
    let oldpass = $(".oldpass").val();
    let newpass = $(".newpass").val();
    let confirm = $(".confirm").val();
    if (newpass == confirm){
        // let url ="http://localhost:4000/api/user/" +id +"?oldpass="+oldpass+"&newpass="+newpass;
        let url = "/api/user/"+id;
        $.ajax({
            url:url,
            type:"PUT" ,
            data:{
                oldpass,newpass
            }
        }).then(function(data){
          console.log(data) 
          $('.note').html(data)
        }).catch(function(err){
            console.log(err)
        })
    }else{
        $('.note').html("mk  chua khop")
    }
})
