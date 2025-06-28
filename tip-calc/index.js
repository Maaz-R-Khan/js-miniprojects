
   function showBillAmount() {
   let billAmount = document.getElementById("billAmount").value; // billAmount stores the total bill
    console.log(billAmount); 
   }




// const values can't be changed. 
// let is how variables are declared. 

   function calculateTip() {
    let billAmount = document.getElementById("billAmount").value; // billAmount stores the total bill 
   billAmount = Number(billAmount);
    let tipAmount = document.getElementById("tipAmount").value / 100; // convert tipAmount to a percent 
    let totalTip = billAmount * tipAmount; // calculate Total Tip
    

// We use Number() function in order to convert a string to a number. 
 
    

    let numPeople = document.getElementById("numPeople").value; // number of people
    numPeople = Number(numPeople); // converts numPeople string to a number. 
    let tipPerPerson = totalTip / numPeople; // tip amount per person
    let totalBill = totalTip + billAmount; // total bill with tip 
    let totalPerPerson = tipPerPerson + (billAmount / numPeople); // total tip per person

   

    

    document.getElementById("total-tip").innerHTML = totalTip; 
    document.getElementById("total-bill").innerHTML = totalBill;
    document.getElementById("tip-per-person").innerHTML = tipPerPerson; 
    document.getElementById("total-per-person").innerHTML = totalPerPerson; 


    console.log(totalTip); 
    console.log(totalBill); 
    console.log(tipPerPerson); 
    console.log(totalPerPerson); 
   }

   

  
    
   

  
