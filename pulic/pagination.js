let view = $('select').val()
render(view);


function render(view){
    //hinh nhu cho onclick chua dc anh
$.ajax({
    url:'/api/user/pagination',
    type:'GET'
}).then(data=>{
   
    let view = $('select').val()
    for(let i =0;i<view;i++){
        let dataform=`
        <div>
        <div class="username">nane:${data.data.data[i].name} 
        
        ${data.data.role ==='admin' ? `<button class ="delete${i}">X</buton>` :"" }
        </div>
        
        </div>
        `
        $('.showdata').append(dataform)
        $(`.delete${i}`).on('click',function(){
            $.ajax({
                url:'/api/user/'+data.data.data[i]._id,
                type:"DELETE"
            }).then(function(data){
                $(`.noti`).html(`xoa thanh cong`);
                $('.showdata').html("")
                $('.buttongroup').html("")
                render(view)
            }).catch(function(err){
                $(`.noti`).html(`loi`)
            })
        })
    }
  
  
    let totalpage = Math.ceil(data.data.length/view)
    for(let i = 0 ;i<totalpage; i++){
        let button = `
        <button class = "bnt${i+1}">${i+1}</button>
        `
        $('.buttongroup').append(button)
        let btn = $(`.bnt${i+1}`) // bawts sai r btn vaf bnt sai class nhe ok anh
        console.log(btn)
        btn.on('click',function(){
            $.ajax({
                url:`api/user/pagination?view=${view}&skip=${i+1}`,
                type:"GET"
            }).then(function(data){
                $('.showdata').html('')
                for(let i =0;i<view;i++){
                    let dataform=`
                    <div>
                    <div class="username">nane:${data.data[i].name}</div>
                    <div class="password">pas:${data.data[i].pas}</div>
                    </div>
                    `
                    $('.showdata').append(dataform)
                }
                
            }).catch(function(err){
                console.log(err)
            })
        })
    }
}).catch(err=>{
    console.log(err)
})
}

function changeview(){
    let view = $('select').val()
    $('.showdata').html("")
    $('.buttongroup').html("")
    render(view)
}

function signout(){
    $.ajax({
        url:"/api/user/signout",
        type:"POST"
    }).then(function(data){
        delete_cookie("user")
        window.location.href ='/signin'
    }).catch(function(err){
           console.log(err )
    })
   
}

function delete_cookie(name){
    document.cookie = name +"=; Path=/ ; Exprise=Sun,01 Jan 1970 00;00;01 GMT;";
}