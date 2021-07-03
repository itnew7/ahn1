var array = [
  {
    id: "1",
    name: "Small Soft Keyboard",
    gia: 61163,
    doanhSo: 1000000,
  },
  {
    id: "2",
    name: "Small Fresh Soap",
    gia: 51572,
    doanhSo: 2000000,
  },
  {
    id: "3",
    name: "Intelligent Metal Shoes",
    gia: 2580,
    doanhSo: 7800000,
  },
  {
    id: "4",
    name: "Generic Cotton Pants",
    gia: 43096,
    doanhSo: 3300000,
  },
  {
    id: "5",
    name: "Incredible Granite Ball",
    gia: 66249,
    doanhSo: 4400000,
  },
  {
    id: "6",
    name: "Gorgeous Plastic Chair",
    gia: 11244,
    doanhSo: 5600000,
  },
];

// 1  sắp xếp array theo doanh số tăng dần
 array.sort(function(a,b){
   return (a.doanhSo)- (b.doanhSo)
 })

// 2  thêm trường doanhThu cho từng sản phẩm biết doanhThu = doanhSo * gia
 newarr = array.map(function(ele){
  let doanhThu = ele.doanhSo * ele.gia

 ele.doanhThu = doanhThu
   return ele
 })
 

 


// 3  Tính tổng doanh thu của tất cả sp
let tong = 0
for ( i = 0; i < array.length ; i++){
tong  = tong + newarr[i].doanhThu
}

// 4  dùng filter loại bỏ 2 sp có doanhThu nhỏ nhất

 let arr = newarr.filter(function(ele){
   let count = 0;
   for( i = 0 ; i < newarr.length ; i ++){
     if(ele.doanhThu < newarr[i].doanhThu){
       count ++;
     }
    }
    if(count < newarr.length - 2){
       return true;
     }
     else{
       return false;
     }
   
});

// 5  viết function ngauNhien có đầu vào là 1 số x, function trả ra 1 số random có x chữ số
//    VD ngauNhien(3) trả ra 1 số ngẫu nhiên có 3 chữ số
function ngauNhien(x){
  let mucsan = Math.pow(10, x-1)
  let muctran= Math.pow(10, x)
   return Math.floor(   Math.random()*(muctran -mucsan ) + mucsan
  )
}
/////console.log(ngauNhien(3))
// 6  viết function taoFile có đầu vào là 1 đường dẫn file,
//    function trả ra tên file = tên file cũ + ngày tạo + đuôi file
//    vd taoFile('G:/K8-nodemy/K13/JS/index.js') => index20210622.js
function taoFile(string){
  let arr = string.split("/");
  let a = arr[arr.length-1].split(".")
  let today = new Date()
  return a[0] + today.getFullYear() + today.getMonth() + today.getDate() + '.'+a[1]

}
//console.log(taoFile ('G:/K8-nodemy/K13/JS/index.js'))
taoFile ('G:/K8-nodemy/K13/JS/index.js')

//7   viết function findDate có đầu vào là 1 số x
//    và trả về ngày tháng năm của hôm nay + x ngày
//    VD findDate(1)    trả về ngày tháng năm của ngày mai
function finDate(x){
  let today = new Date()
  today.setDate(today.getDate()+ x)
  return today
}

//console.log(finDate(3))
let nhanVien = [
  {
    ten: "Tung",
    khuVuc: 30,
    chucVu: "sale",
    luong: 1000,
  },
  {
    ten: "Nam",
    khuVuc: 10,
    chucVu: "ke toan",
    luong: 800,
  },
  {
    ten: "Thanh",
    khuVuc: 20,
    chucVu: "van Chuyen",
    luong: 1200,
  },
  {
    ten: "Lam",
    khuVuc: 10,
    chucVu: "truong phong",
    luong: 1500,
  },
  {
    ten: "Trung",
    khuVuc: 40,
    chucVu: "nhanVien",
    luong: 1100,
  },
];

let chiNhanh = [
  {
    khuVuc: 10,
    tinh: "Ha Noi",
    boPhan: "Tru so",
    thuong: 100,
  },
  {
    khuVuc: 20,
    tinh: "Ha Nam",
    boPhan: "kho",
    thuong: 200,
  },
  {
    khuVuc: 30,
    tinh: "bac ninh",
    boPhan: "chi nhanh1",
    thuong: 50,
  },
  {
    khuVuc: 40,
    tinh: "HCM",
    boPhan: "chi nhanh2",
    thuong: 150,
  },
];

//    cho array nhanVien và chiNhanh
// 8  Tìm nhân viên tên Lam trong danh sách nhân viên
//    dựa vào mã khu vực, tìm xem nhân viên này thuộc bộ phận nào

for ( i = 0 ; i <nhanVien.length ; i ++){
  if(nhanVien[i].ten == "Lam"){
    lam = nhanVien[i]
    break
  }
}
console.log(lam)
let kvlam = lam.khuVuc
for(i = 0; i < chiNhanh.length; i++ ){
 if(kvlam == chiNhanh[i].khuVuc){
   console.log(chiNhanh[i].boPhan)
 }
}
console.log("khu vuc lam", kvlam)

// 9  dựa vào mã khuVuc hay them trường tỉnh và boPhan cho từng nhân viên
let newnv = nhanVien.map(function(ele){
  for(i = 0 ;i< chiNhanh.length; i++){
    if(ele.khuVuc == chiNhanh[i].khuVuc){
      ele.tinh = chiNhanh[i].tinh;
      ele.boPhan = chiNhanh[i].boPhan
    }
  }
  return ele
})
console.log(newnv)

// 10  từ kết quả bài trên hãy tạo array chứa tên chi nhánh và số nhân viên từng chi nhánh
//    [{chiNhanh:'kho', nhanVien:1},{chiNhanh:'Tru so', nhanVien:2},{chiNhanh:'chi nhanh1', nhanVien:1},{chiNhanh:'chi nhanh2', nhanVien:1},]
