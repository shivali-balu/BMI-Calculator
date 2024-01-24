function calculate() { 
    event.preventDefault(); 
    let weight =  +document.getElementById("user-weight").value ; 
    let height = +document.getElementById("user-height").value ; 

    let heightinmeters = height / 100 ; //cm to m 
   let bmi = weight / Math.pow(heightinmeters,2) ; 
   document.getElementById("bmi").innerHTML = bmi.toFixed(2) ;  

   if(bmi<18.5) {
    document.getElementById("bmi-message").innerHTML = "You are underweight !" ; 
   } 
   else if(bmi>=18.5 && bmi<24.9) {
    document.getElementById("bmi-message").innerHTML = "You are normal !" 
   } 
   else if( bmi>=24.9 && bmi<29.9 ){ 
    document.getElementById("bmi-message").innerHTML = "You are overweight !"
   } 
   else{
    document.getElementById("bmi-message").innerHTML = "You are obese!"
   }


} 