$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];


let cupcakeTable = document.getElementById("cupcake-table");
function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    for(let i = 0; i<cup_cakes.length ; i++){
       let tr1 = document.createElement("tr");
       let td1 = document.createElement("td");
       td1.innerHTML = cup_cakes[i].name;
       let td2 = document.createElement("td");
       td2.innerHTML = cup_cakes[i].calories;
       let td3 = document.createElement("td");
       td3.innerHTML = cup_cakes[i].weight;
       tr1.append(td1);
       tr1.append(td2);
       tr1.append(td3);
       cupcakeTable.append(tr1);

       if(cup_cakes[i].calories === "high"){
        td2.style.backgroundColor = "red"
    }else if (cup_cakes[i].calories === "medium"){
     td2.style.backgroundColor = "orange"
    } else td2.style.backgroundColor = "green"
    }
    
}



let userName1 = document.querySelector("#Cname");
let orderCount = document.querySelector("#count");
let cakeType = document.querySelector("#cake-type");
let orderDeliveryTime = document.querySelector("#Dtime");
let Allergies = document.querySelector("#All1");

let customerForm = document.querySelector(".customer-form")
customerForm.addEventListener("submit", function validate(e) {
  //write code that validates the form
  e.preventDefault()
  if(userName1.value.length >= 5 && userName1.value.length <= 16){
      document.querySelector(".condition1").innerHTML = "Okay";
      document.querySelector(".condition1").style.color = "green";
      userName1.style.borderColor = "green";
      localStorage.setItem("user", JSON.stringify(userName1.value))
  }else {
    document.querySelector(".condition1").innerHTML = "The name must be between 5 and 16 character long";
    document.querySelector(".condition1").style.color = "red";
    userName1.style.borderColor = "red"
  }
  if (orderCount.value.length >= 1 && orderCount.value.length <= 15){
    document.querySelector(".condition2").innerHTML = "Okay";
    document.querySelector(".condition2").style.color = "green";
    orderCount.style.borderColor = "green";
  } else{
    document.querySelector(".condition2").innerHTML = "The count must be between 1 and 15 character long";
    document.querySelector(".condition2").style.color = "red";
    orderCount.style.borderColor = "red";
  }
  if(cakeType.value === "none"){
    document.querySelector(".condition3").innerHTML = "None is not accepted";
    document.querySelector(".condition3").style.color = "red";
    cakeType.style.borderColor = "red";
  } else {
    document.querySelector(".condition3").innerHTML = "Okay";
    document.querySelector(".condition3").style.color = "green";
    cakeType.style.borderColor = "green";
  }
  if(orderDeliveryTime.value === "none"){
    document.querySelector(".condition4").innerHTML = "None is not accepted";
    document.querySelector(".condition4").style.color = "red";
    orderDeliveryTime.style.borderColor = "red";
  } else {
    document.querySelector(".condition4").innerHTML = "Okay";
    document.querySelector(".condition4").style.color = "green";
    orderDeliveryTime.style.borderColor = "green";
  } if(orderDeliveryTime.value === "4:00pm" && cakeType.value === "chocolate"){
    document.querySelector(".condition4").innerHTML = "Unfortunately Chocolate cupcakes cannot be delivered at 4pm";
    document.querySelector(".condition4").style.color = "red";
    orderDeliveryTime.style.borderColor = "red";
  } if(Allergies.value === "dairy-free" && cakeType.value === "chocolate"){
    document.querySelector(".condition5").innerHTML = "This type of cake is not dairy-free";
    document.querySelector(".condition5").style.color = "red";
    Allergies.style.borderColor = "red";
  } else if(Allergies.value === "nut-free" && cakeType.value === "pecan"){
    document.querySelector(".condition5").innerHTML = "This type of cake is not nut-free";
    document.querySelector(".condition5").style.color = "red";
    Allergies.style.borderColor = "red"
  } else {
      document.querySelector(".condition5").innerHTML = "Okay";
document.querySelector(".condition5").style.color = "green";
Allergies.style.borderColor = "green";
  }
  
})

  



function show_storage(){
    //write code that shows the name from local storage
    let userName = JSON.parse(localStorage.getItem("user"));
    document.getElementById("welcome").innerHTML = `Welcome ${userName}`;
}