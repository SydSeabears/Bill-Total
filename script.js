var containerEle = document.body.querySelector(".container");

var bill=Number(prompt("What is the bill total?"));

var tax=(bill*.07);

var tip=((bill+tax)*.05);

var sum= (bill+tax+tip);

containerEle.innerHTML=sum;