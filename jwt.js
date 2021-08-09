const jwt =require("jsonwebtoken")
 let id = 123456;
//let token = jwt.sign({ id:id, name:"anh"},"anh",{expiresIn:40});
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2LCJuYW1lIjoiYW5oIiwiaWF0IjoxNjI3NjMxOTU0LCJleHAiOjE2Mjc2MzE5OTR9.3nULaFCy_fyC8bvMRRQwcC7K4P1NltysPi0lzQ0Bfvo"
 let data =jwt.verify(token,"anh")
 console.log(data)
