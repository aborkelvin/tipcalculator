
function myfunction() {
    /*var billAmount = form.majorbill.value; 
    var numberAmount = form.majornumber.value;*/
    let billAmount = document.getElementById('billl').value;
    let numberAmount = document.getElementById('numberr').value;

    window.billy = Number(billAmount);
    window.numy = Number(numberAmount);
    console.log(billy);
}

function calculate(percent) {
  var chuks = (percent/100)* window.billy;
  var onoj = chuks/window.numy;
  var onojas = onoj.toFixed(2);
  document.getElementById("tpp").innerHTML= "$" + onojas;
  var chidi = window.billy/window.numy;
  var ebuka = chidi + onoj;
  var ebukas = ebuka.toFixed(2);
  document.getElementById("Ttpp").innerHTML = "$" + ebukas;
}

//Creating the function to run the 5% program assuming it has all the variables from myfunction in it
function fivepercent() {
    myfunction();
    if(isNaN(billy)){
      document.getElementById('check').innerHTML = 'Input a valid amount';
      return;
    }
    if(numy==0){
      document.getElementById('check2').innerHTML = "Can't be zero";
      document.getElementById('numberr').className = "badnumber";
      return;
    }
    /*Since the check above was run on all the percent functions, it would have been best to put it in a function
      and just call the function in all of them but then the return value that stops the program(function) from
      continuing would just stop the function containing the check thus it would be left like this till it can 
      be improved*/
    calculate(5);
    /*The code above will be put in a function with a parameter, the parameter will be the percentage which
      can be changed for the different percentages*/
}

function tenpercent() {
    myfunction();
    if(isNaN(billy)){
      document.getElementById('check').innerHTML = 'Input a valid amount';
      return;
    }
    if(numy==0){
      document.getElementById('check2').innerHTML = "Can't be zero";
      document.getElementById('numberr').className = "badnumber";
      return;
    }
    calculate(10);
}

function fifteenpercent() {
  myfunction();
  if(isNaN(billy)){
    document.getElementById('check').innerHTML = 'Input a valid amount';
    return;
  }
  if(numy==0){
    document.getElementById('check2').innerHTML = "Can't be zero";
    document.getElementById('numberr').className = "badnumber";
    return;
  }
  calculate(15);
}

function twentyfivep() {
  myfunction();
  if(isNaN(billy)){
    document.getElementById('check').innerHTML = 'Input a valid amount';
    return;
  }
  if(numy==0){
    document.getElementById('check2').innerHTML = "Can't be zero";
    document.getElementById('numberr').className = "badnumber";
    return;
  }
  calculate(25);
}

function fiftyp() {
  myfunction();
  if(isNaN(billy)){
      document.getElementById('check').innerHTML = 'Input a valid amount';
      return;
    }
  if(numy==0){
    document.getElementById('check2').innerHTML = "Can't be zero";
    document.getElementById('numberr').className = "badnumber";
    return;
  }
  calculate(50);
}


function customize(){
  document.getElementById('ugbo').style.display= "none";
  document.getElementById('fada').style.display = "inherit";
}

function ishi(){
  let udoka = document.getElementById('fada').value;
  console.log(udoka);
  myfunction();
  if(isNaN(billy)){
    document.getElementById('check').innerHTML = 'Input a valid amount';
    return;
  }
  if(numy==0){
    document.getElementById('check2').innerHTML = "Can't be zero";
    document.getElementById('numberr').className = "badnumber";
    return;
  }
  if(isNaN(udoka)||udoka == 0) {
    document.getElementById('teej').innerHTML = "Input a valid percentage";
    return;
  }
  calculate(udoka);
}
