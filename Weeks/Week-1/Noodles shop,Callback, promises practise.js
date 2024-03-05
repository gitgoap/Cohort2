//This is made to pratise callback and promises, inspired from icecream shop of freecodecamp promises article

//Instant Noodles Shop
//noodle_type - Maggie, chings, Yippee
//Masala_type - Simple, Teekha, Chatpata

//Steps
//1. Order received, select the Noodle_type
//2. Put water in a pan 
//3. Select Masala 
//4. Chop Vegetables
//5. Boil water ~wait 5 minutes
//6. Serve order ready

stock={noodles:["Maggie", "chings", "Yippee"],
       Masala_type: ["Simple", "Teekha", "Chatpata"],
       vege:["carrot","capsicum"]
  
}


setTimeout(water=(type,item)=>{
  console.log(`${stock.type[item]} choosen and put together in water`);

},2000);

let ready=()=>{
  console.log("Ready to serve hot!");
};



let order=()=>{
  console.log("Order Placed, Hurray!");
  setTimeout(()=>call_production(),1000);
}
order();
letcall_production();
water(noodles,1);
setTimeout(water(Masala_type,2),2000);




setTimeout(water(vege,1),2000);

setTimeout(let boil=()=>{
  console.log("Water is boiling, wait!")
  setTimeout(ready(),2000);
},6000);

