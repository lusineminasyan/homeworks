/*1 Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.*/
    function  stepFunction(a,b,m){
     let result=[]
      for(let i=a;i<=b;i+=m){
        result.push(i)
       }
       return result
     };
     stepFunction(1,5,0.5)
 // 2Given a string and a symbol. Find the number of occurrences of the symbol in the string.
   function countSimbol(str,simbol){
    let count=0
     for(let i=0;i<str.length;i++){
      if(str[i]===simbol){
        count+=1
       } 
     }
    return count
   };
countSimbol("another string","t")
//3 Given a string. Check whether the string is palindrome or not.
function palindrome(string){
  let result= "No"
    for(let i=0;i<string.length;i++){
        if(string[i]===string[string.length-1-i]){ 
          result="Yes"
         }  
    }
    return result
};
palindrome("racecar")
//4 Given an array of numbers. Find the maximum element in array.
function maxElement(array){
 let maximum=array[0]
    for (let i=1;i<array.length;i++){
        if(array[i]>maximum){
          maximum=array[i]  
        }
    }
    return maximum
};
maxElement([1,2,3,-5,2,56])
//5 Given an array. Create the array which elements are products between two neighbours.
function productsBetween2Neighbours(array){
 let result=[]
    for(let i=0;i<array.length-1;i++){
      result.push(array[i]*array[i+1])        
    }
   return result
};
productsBetween2Neighbours([3,7,12,5,0])
//6 Given a string and symbols. Change first symbol by the second one in the string.
function replaceSimbol(string,simbol1,simbol2){
    return string.replaceAll(simbol1,simbol2)
};
replaceSimbol("does the following code","o","0")
replaceSimbol("The  result are not recorded yet","t","w")
//7 Print the following number pattern:
 function drawRow(count) {
    let row = ""
    for (let i = 1; i <= count;i++){
        row += i 
    }
    return row
 }
  function numberPuttern(num) {
    let result = ""
    for (let i = 1; i <= num;i++) {
     result+=drawRow(i)+"\n"
    }
    for(let j=num+1;j<2*num;j++){
      result+=drawRow(2*num-j)+"\n"
    }
   console.log (result)
  };
numberPuttern(5)
 