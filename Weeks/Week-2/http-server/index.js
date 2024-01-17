const express = require('express');
const app=express();

const user = [{
   name:"John",
   kidney:[{
      healthy:true
   }]
}];

app.get("/test",function(req,res){
   const nfk=user[0].kidney.length;
   const nfhk=user[0].kidney[0].healthy;
   const nfuk=nfk-nfhk;

   res.json({
      nfk,
      nfhk,
      nfuk

   })
   res.send("Hello barik"); 
})
app.listen(6200);
