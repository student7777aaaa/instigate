const http=require('http');
const array=[11,4,6,7,6,9,89]  

http.createServer((req,res) => {
    console.log(req.method,'aaaa')
  if (req.method==='POST') {
    console.log(array)
    array.push(req.url)
    res.write(JSON.stringify(array));
 }
 if (req.method==='GET'){
    console.log(array)
    res.write(JSON.stringify(array));
 }
 if  (req.method==='DELETE'){
    console.log(array)
  array.splice(2,1)
  res.write(JSON.stringify(array));
  
 }
   
 if  (req.method==='PUT'){
 array[3]=1000000
 console.log(array)
 res.write(JSON.stringify(array));
}
res.end()

}).listen(1000)


    