///1
let a=+prompt(Number)
let sum=0
    while(a!=0){
        sum=sum+a%10
     a=(a-a%10)/10
 }console.log(sum)
 //
 let a=+prompt(Number)
let sum=0
    for(;a!=0;a=(a-a%10)/10){
        sum=sum+a%10
     }console.log(sum)
 //2
 let a=+prompt("number1")
let b=+prompt("number2")
let c=+prompt("number3")
if (a+b>c||b+c>a||a+c>b){
    console.log("yes")
}else {
    console.log("no")
}
//3
let a=+prompt("number")
let qanak=0
while(a!=0){
    if(a%10==9){
    qanak=qanak+1}
    a=(a-a%10)/10
}console.log(qanak)
//
let a=+prompt("number")
let qanak=0
for(;a!=0;a=(a-a%10)/10){
    if(a%10==9){
    qanak=qanak+1}  
}console.log(qanak)
//4
let a=+prompt("number")
let b=""
while(a!=0){
    b=b+a%10
   a=(a-a%10)/10
}console.log(b)
//
let a=+prompt("number")
let b=""
for(;a!=0;a=(a-a%10)/10){
    b=b+a%10
   }console.log(b)
//5
let a=+prompt()
do{
if(a%2!==0){
console.log("false") 
break;
}else  if (a%2==0){
    a=a/2}
    console.log("true")}
    while(a!=1)