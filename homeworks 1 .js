//xndir 1
let a=+prompt("number 1")
let b=+prompt("number 2")
if (a>b){
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
}
//
let a=+prompt("number 1")
let b=+prompt("number 2")
switch (a>b){
	case (true):
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
}
//xndir 2
let name=prompt("anun");
let age =+prompt("tariq");
console.log(("My name is " +name )+(". I am "+age ))
//xndir 3
let a=+prompt("Grel tiv");
if (a%2==0){
	console.log("no")
}else{
	console.log("yes")
}
//mek ayl dzevov
let a=+prompt("Grel tiv")
console.log(((a%2)==0)?"no":"yes")
//mek ayl dzevov
let a=+prompt("Grel tiv")
switch(a%2==0){
	case(true):console.log("no");break;
case (false):console.log("yes")
}
//xndir 4
let a=+prompt("Grel tiv")
 if(a<0){
	console.log("yes")
}else{
	console.log("no")
}
//
let a=+prompt("Grel tiv")
console.log(a<0?"yes":"no")
//
let a=+prompt("Grel tiv")
switch(a<0) {
	case(true):console.log("yes");break;
default:
console.log("no")}
//xndir 5
let a=+prompt("number 1")
let b=+prompt("number 2")
if (a%b==0||b%a==0){
	console.log("1")
}else {
	console.log("0")}
//
let a=+prompt("number 1")
let b=+prompt("number 2")
switch (a%b==0||b%a==0){
case(true):console.log("1");break;
 default:console.log("0")}
 //
 let a=+prompt("number 1")
let b=+prompt("number 2")
console.log((a%b==0||b%a==0)?"1":"0")
//xndir 6
let a=+prompt("number")
if (a==1){console.log("January")}
else if (a==2){console.log("February")}
else if (a==3){console.log("March")}
else if (a==4){console.log("April")}
else if (a==5){console.log("May")}
else if (a==6){console.log("June")}
else if(a==7){console.log("July")}
else if (a==8){console.log("August")}
else if(a==9){console.log("September")}
else if(a==10){console.log("October")}
else if (a==11){console.log("November")}
else if (a==12){console.log("December")}
//
let a=+prompt("number")
switch (1<=a<=12){
case a==1:console.log("January");break;
case a==2:console.log("February");break;
case a==3:console.log("March");break;
case a==4:console.log("April");break;
case a==5:console.log("May");break;
case a==6:console.log("June");break;
case a==7:console.log("July");break;
case a==8:console.log("August");break;
case a==9:console.log("September");break;
case a==10:console.log("October");break;
case a==11:console.log("November");break;
case a==12:console.log("December")}
//xndir 7
let a=+prompt("tiv 1");
let b=+prompt("tiv 2");
let c=+prompt("tiv 3");
if (a<=c && b<=c){
console.log("c is maximum");}
else if (a<=b && c<=b){
	console.log("b is maximum");
}else if (b<=a && c<=a){console.log("a is maximum")}
// 
let a=+prompt("tiv 1")
let b=+prompt("tiv 2")
let c=+prompt("tiv 3")
switch (true){
case (a<=c && b<=c):
	console.log('c is maximum');break;
case(a<=b && c<=b):
	console.log('b is maximum');break;
default:
	console.log('a is maximum')
}
