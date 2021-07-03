
var array = [
   {
   id: "1",
   createdAt: "2021-06-02T05:43:07.120Z",
   name: "Small Soft Keyboard",
   thumb: "http://placeimg.com/640/480/cats",
   listImg: "http://placeimg.com/640/480",
   mota: "Qui nostrum perspiciatis quia esse animi omnis provident commodi nesciunt.",
   phanLoai: "quas",
   gia: 61163,
   size: 23166,
   maSP: "rerum"
   },
   {
   id: "2",
   createdAt: "2021-06-01T23:15:53.894Z",
   name: "Small Fresh Soap",
   thumb: "http://placeimg.com/640/480/cats",
   listImg: "http://placeimg.com/640/480",
   mota: "Fugit omnis fugit et rem earum laudantium.",
   phanLoai: "delectus",
   gia: 51572,
   size: 11722,
   maSP: "rerum"
   },
   {
   id: "3",
   createdAt: "2021-06-02T05:29:25.755Z",
   name: "Intelligent Metal Shoes",
   thumb: "http://placeimg.com/640/480/city",
   listImg: "http://placeimg.com/640/480",
   mota: "Et optio quia est voluptates.",
   phanLoai: "omnis",
   gia: 2580,
   size: 33762,
   maSP: "ea"
   },
   {
   id: "4",
   createdAt: "2021-06-01T14:19:26.901Z",
   name: "Generic Cotton Pants",
   thumb: "http://placeimg.com/640/480/abstract",
   listImg: "http://placeimg.com/640/480",
   mota: "Doloremque dolorum qui consectetur nam aperiam deserunt.",
   phanLoai: "qui",
   gia: 43096,
   size: 91003,
   maSP: "nesciunt"
   },
   {
   id: "5",
   createdAt: "2021-06-02T10:22:44.793Z",
   name: "Incredible Granite Ball",
   thumb: "http://placeimg.com/640/480/sports",
   listImg: "http://placeimg.com/640/480",
   mota: "Sapiente et quis amet voluptatem aut magnam error.",
   phanLoai: "nemo",
   gia: 66249,
   size: 37980,
   maSP: "dignissimos"
   },
   {
   id: "6",
   createdAt: "2021-06-02T09:37:09.267Z",
   name: "Gorgeous Plastic Chair",
   thumb: "http://placeimg.com/640/480/abstract",
   listImg: "http://placeimg.com/640/480",
   mota: "Qui qui et.",
   phanLoai: "doloremque",
   gia: 11244,
   size: 97237,
   maSP: "nobis"
   },
   ]
for( var i = 0; i < array.length; i ++){
   console.log(array[i])
   let sp = `
   <div class ='sp${i}'>
   <div class = "content${i}">
    <div> tên sp : ${array[i].name}</div>
    <div> giá: ${array[i].gia}</div>
    <div> <img src = "${array[i].thumb}" alt = "lỗi ảnh"></div>
   </div>
  <div>
  <button  onclick = 'suasp(${i})'>SuaSP</button>

  <button class = 'xoa${i}' onclick = 'xoa("sp${i}")'>X</button>
  </div>
   </div>
   `
   $('.danhsach').append(sp)
   //$(`.xoa${i}`).on('click', function(){
   //   $(this).parent().parent().remove()
  // })
}

function xoa(ten){
   $(`.${ten}`).remove()
}
let thutu = array.length

function taosp(){
 let tensp =   $('#tensp').val()
 let gia =   $('#gia').val()
 let linkanh =   $('#linkanh').val()
thutu ++

 let sp = `
   <div class ='sp${thutu}'>
   <div class = "content${thutu}">
    <div> tên sp : ${tensp}</div>
    <div> giá: ${gia}</div>
    <div> <img src = "${linkanh}" alt = "lỗi ảnh"></div>
   </div>
  <div>
  <button  onclick = 'suasp(${thutu})'>SuaSP</button>

  <button class = 'xoa${thutu}' onclick = 'xoa("sp${thutu}")'>X</button>
  </div>
   </div>
   `
   $(`.danhsach`).append(sp)

}
function suasp(i){
   $('#myModal').attr('style', 'display:block');
   $('#xacnhan').attr('onclick', `xacnhan(${i})`);

}
function dongModal(){
   $('#myModal').attr('style', 'display:none');

}
window.onclick = function (event){
   if(event.targer == $('#myModal')[0]){
      $('#myModal').attr('style', 'display:none');

   }
}
function xacnhan(i){
   let tenmoi = $('#tenmoi').val()
   let giamoi = $('#giamoi').val()
   let linkmoi = $('#linkmoi').val()

   let newcontent = `
   <div class = "content${i}">
   <div> tên sp : ${tenmoi}</div>
   <div> giá: ${giamoi}</div>
   <div> <img src = "${linkmoi}" alt = "lỗi ảnh"></div>
   `
   $(`.content${i}`).html(newcontent)

   $('#myModal').attr('style', 'display:none');

}