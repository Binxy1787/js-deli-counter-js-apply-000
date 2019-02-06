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
  for(var i =0; i<katzDeliLine.length; i++){
    let firstPerson = katzDeliLine[i];
    if(katzDeliLine.length ===0){
      message = `Currently serving ${firstPerson}`;
    }
  }
  
}