var array = [
    {
    ten: "Thai",
    ho: "Hoang",
    tuoi: 25,
    nha: "so 9 - Nguyen Trai - Quan Thanh Xuan",
    thamgia: "1994-12-26T17:00:00.000Z",
    },
    {
    ten: "Hung",
    ho: "Nguyen",
    tuoi: 20,
    nha: "so 15 - Lang - Quan Cau Giay",
    thamgia: "1990-10-26T17:00:00.000Z",
    },
    {
    ten: "Phong",
    ho: "Nguyen",
    tuoi: 21,
    nha: "so 100 - Giai Phong - Quan Hoang Mai",
    thamgia: "1990-12-26T17:00:00.000Z",
    },
    {
    ten: "Phuc",
    ho: "Nguyen",
    tuoi: 23,
    nha: "so 109 - Minh Khai - Quan Hai Ba Trung",
    thamgia: "1991-12-26T17:00:00.000Z",
    },
    {
    ten: "Ha",
    ho: "Le",
    tuoi: 24,
    nha: "so 150 - Mai Dich - Quan Bac Tu Liem",
    thamgia: "1992-12-26T17:00:00.000Z",
    },
    ];
    // 1. xử lý array trả về array chứa Quận của tất cả mọi người
    newar = array.map(function(a){
        let b = a.nha.split("-")
        return b[2]
        
    })


    // 2. xử lý array sắp xếp array theo thứ tự tuổi tăng dần
    array.sort(function(a, b){
        return a.tuoi - b.tuoi
    })

    // 3. xử lý array thêm năm sinh cho từng phần tử, năm nay là 2021
    newarr = array.map(function(a){
        let namsinh = new Date().getFullYear() - a.tuoi
        a.namsinh = namsinh
        return a
    })
    
    // 4. xử lý array trả về array chưa họ tên // ['Hoang Thai', 'Nguyen Hung', ...]
     let arrr = array.map(function(a){
         return a.ho +" "+ a.ten
     })
     
    // 5. xử lý array sắp xếp theo thứ tự ngày tham gia
     array.sort(function(a,b){
        return new Date(a.thamgia )- new Date(b.thamgia)
     })
     
    // 6. xử lý array loại bỏ những người tuổi từ 20 trở xuống

     let aar = array.filter(function(a){
         if(a.tuoi > 20){
             return true
         }else{
             return false
         }
     })
    console.log(aar)