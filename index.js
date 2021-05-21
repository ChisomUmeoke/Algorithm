function convertFahrToCelsius (fahrenheit) {

   
    if(Array.isArray(fahrenheit)){
    return`${JSON.stringify(fahrenheit)} is not a valid number but a/an array`
  }

  if(typeof(fahrenheit) === "boolean"){
    return `${JSON.stringify(fahrenheit)} is not a valid number but a/an boolean`
  }


  if(isNaN(fahrenheit)) {	
    return(`${JSON.stringify(fahrenheit)} is not a valid number but a/an ${typeof fahrenheit}`)
		//return(JSON.stringify(fahrenheit) + " is not a valid number but a/an " + (Array.isArray(fahrenheit) ? 'array' : typeof fahrenheit));
}
  else{
    let celsius=((fahrenheit-32)*5/9);
  return (celsius.toFixed(4));

  }
   
}

    console.log(convertFahrToCelsius (62))
    console.log(convertFahrToCelsius("62"))
    console.log(convertFahrToCelsius({temp:0}))
    console.log(convertFahrToCelsius([2,5,8]))
    console.log(convertFahrToCelsius ("rty"))
    console.log(convertFahrToCelsius (true))
 
  




function checkYuGiOh(n) {

let ans = [];
	for (let i = 1; i <= n; i++) {
		ans.push(i);
  }

  if(isNaN(n)) {
    return `invalid parameter:${JSON.stringify(n)}`
  }

ans.forEach(function(n,index){
     let arr = [];//array to store factors
      if(n % 2 == 0){
        arr.push("Yu")
      }
      if(n % 3 ==0){
        arr.push("Gi")
      }
      if (n % 5 == 0){
        arr.push("Oh")
      }
      if (arr.length > 0){
         ans[index] = arr.join('-');// using - as a seperator for numbers with multiple factors
      }
    })
    return ans;

   
}


console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))
