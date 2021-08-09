$.ajax({
    url:'/api/user',
    type:'GET'
}).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})