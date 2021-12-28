//Hides the arrows from input number field

/*input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}*/
//The above code seems not to have worked though,check later


function myfunction(form) {
    var boy = form.majorbill.value;
    alert('the number is ' + boy );
}
