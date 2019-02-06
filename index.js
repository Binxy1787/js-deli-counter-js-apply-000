//takeANumber function.
function takeANumber(current, name){
  let newPerson = current.push(name);
  let position = current.indexOf(name) +1;
  let message = `Welcome, ${name}. You are number ${position} in line.`;
  
  return message;
}


//nowServing function.
function nowServing(katzDeliLine){
  let message;
  let firstPerson = katzDeliLine[0];
  
  if(katzDeliLine.length ===0){
    message = 'There is nobody waiting to be served!';
    return message;
  }else{
    message = `Currently serving ${firstPerson}.`;
    katzDeliLine.shift();
    return message;
  }
}

//currentLine function.
function currentLine(katzDeliLine){
  let message;
  if(katzDeliLine.length ===0){
    message = "The line is currently empty.";
    return message;
  }else{
    message = `The line is currently: 1. ${katzDeliLine[0]}, 2. ${}, 3. ${}`;
    return message;
  }
}