//Hides the arrows from input number field

/*input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}*/
//The above code seems not to have worked though,check later


function myfunction() {
    /*var billAmount = form.majorbill.value; 
    var numberAmount = form.majornumber.value;*/
    let billAmount = document.getElementById('billl').value;
    let numberAmount = document.getElementById('numberr').value;

    window.billy = Number(billAmount);
    window.numy = Number(numberAmount);
    console.log(billy);
    if(isNaN(billy)){
      document.getElementById('check').innerHTML = 'Input a valid amount';
    }
    if(numy==0){
      document.getElementById('check2').innerHTML = "Can't be zero";
    }
    
}

//Creating the function to run the 5% program assuming it has all the variables from myfunction in it
function fivepercent() {
    myfunction();
    var chuks = (5/100)* window.billy;
    var onoj = chuks/window.numy;
    document.getElementById("tpp").innerHTML= onoj;
}
//fivepercent();