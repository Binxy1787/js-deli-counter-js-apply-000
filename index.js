//takeANumber function.
function takeANumber(current, name){
  let newPerson = current.push(name);
  let position = current.indexOf(name) +1;
  let message = `Welcome, ${name}. You are number ${position} in line.`;
  
  return message;
}


//nowServing function.

//const deliLine = ["Steven", "Blake", "Avi"];

function nowServing(katzDeliLine){
  let message;
  let currentPerson = katzDeliLine.forEach(function(value){ 
    if(katzDeliLine.length === 0){
      message = "There is nobody waiting to be served!";
      return message;
    }else{
      //message = `Currently serving ${value}.`;
      katzDeliLine.shift();
    }
  });
}