var elInp1 = document.querySelector('.inp1')
var elInp2 =document.querySelector('.inp2')
var arr =['apple','pomegrant','quince']
arr.push('pear','kiwi')
console.log(arr);
function add(){
    if(elInp1.value.length<5){
      arr.unshift(elInp1.value)
      console.log(arr);
    }else{
      arr.push(elInp1.value)
      console.log(arr);
    }
    if(elInp2.value<4){
     arr.unshift(elInp2.value.length<3) 
     console.log('not available'); 
   }else{
    arr.push(elInp2.value)
    console.log('available');
   }
}





       
   

