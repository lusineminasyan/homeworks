///1 Given an array․ Compute the length of the array. (without using .length)
function qanak(arr=[]){
 return arr.length
};
qanak([1,12,4]) 
//2//Given an array․ Compute the length of the array. (without using .length)
function sumElements(arr=[]){
let sum=0
for(let i=0;i<arr.length;i++){
sum+=+arr[i]
}
return sum
}
sumElements([-1,0,1,2])
//3Given two numbers. Print powers of 3 between that numbers.(without using Math.pow
 function powersOf3 (a,b){
  let result=[]
   for(let j=1;j<b-a;j++){
     if (Math.pow(3,j)>a && Math.pow(3,j)<b){
        result.push(Math.pow(3,j))
    }
  }return result
};
powersOf3(7,45)
///44.Given a number as input, insert dashes (-) between each two even numbers.
function evenNumbers (a){
    let number=""
    let i=a%10
    let j=(a%100-i)/10//naxaverjin tiv@
      while(a!=0){
          if(i%2===0 && j%2===0){
              a=(a-i)/10
            number = number +j+(_i) 
          }
         a=(a-i)/10
      }
      return number
  }
///5.Insert a n positive number. Print the n-st prime number.
function primeNumber(n){
 let prime=[]
  for(let m=2;m<Math.pow(10,n);m++){
   let isPrime=true
      for(let i=2;i<m;i++){
        if(m%i===0){
        isPrime=false
         break;
         }
      }
     if(isPrime){
        prime.push(m)
    }
   } return prime[n-1]
 }