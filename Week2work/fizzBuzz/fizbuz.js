//This function lists the status of only the number entered.
fzbznum = prompt("enter a number between 0 and 100");
 
var fizzedBuzzed = function(fzbznum){
if(fzbznum % 15 === 0){
    console.log("fizzbuzz");
}else if (fzbznum % 3 === 0){
    console.log("fizz");
}else if(fzbznum % 5 === 0){
    console.log("buzz");
}else{
    console.log(fzbznum);
}    
}



fizzedBuzzed(fzbznum);



//different method below lists ALL numbers to chosen number

for (var fzbznumAuto = 1; fzbznumAuto < 100; fzbznumAuto ++){
    if(fzbznumAuto % 15 === 0){
    console.log("fizzbuzzbomb");
}else if (fzbznumAuto % 3 === 0){
    console.log("fizzbomb");
}else if(fzbznumAuto % 5 === 0){
    console.log("buzzbomb");
}else{
    console.log(fzbznumAuto);
}
}
