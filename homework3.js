///1 Given an array․ Compute the length of the array. (without using .length)
function qanak(arr=[]){
 return arr.length
}
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
 let  arr=[]
function powersOf3 (a,b){
for(let j=1;a<Math.pow(3,j)&&Math.pow(3,j)<b;j++){
 arr.push(Math.pow(3,j))
}return arr
};
powersOf3(7,45)
///4
function gic(a){
 let i=a%10
 let number=""
 let j=a%10
    while(a!=0){
        if(i/2){
            a=(a-i)/10;number=${a}${i}
        }else {
         a=(a-i)/2 ;
          if(i/2==0){
            number=${a}${i}${-}${j}
        }     
      }
  }return number
}
//5//
function primeNumber(n){
    let m=+prompt()
    let prime=[]
for(let i=2;i<m;i++){
    if(m%i==0){
        break;
    }else prime.push(m)
    
    return prime[n-1]
}