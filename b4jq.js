$('button').on('click',function(){
   let button = $(this).html()
   let index = button.slice(button.length - 1,button.length)- 1
    $(".sub-content").attr("id", "")

 let content =$(".sub-content")[index]
 $(content).attr("id", "active")
}) 