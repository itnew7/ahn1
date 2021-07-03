
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

//   for (var i = 0; i < array.length; i ++ ){
 //   let mota = `
  //   <div> mô tả: sản phẩm này tên là ${array[i].name} thuộc loại ${array[i].phanLoai} </div>
    
 //    `
  //   $(`.ab`).append(mota)
  // }

    newarr = array.map(function(ele){
        let ngaytao = new Date(ele.createdAt);
        let hientai = new Date();
        let somu = hientai.getMonth() - ngaytao.getMonth();
        let giamoi= Math.round(ele.gia * Math.pow(0.98,somu));
        ele.gia = giamoi
        return ele;
    })
    console.log(newarr)
    
     
