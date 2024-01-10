function square(s){
    return s*s; 
}    
function cube(s){
    return s*s*s; 
}    
    


function sumofsomething(a,b,fn){
    let q=fn(a)+fn(b);
    

    console.log(q);
    
}
sumofsomething(79,59,cube);