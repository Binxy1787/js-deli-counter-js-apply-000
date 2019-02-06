//takeANumber function.
function takeANumber(current, name){
  let newPerson = current.push(name);
  let position = current.indexOf(name) +1;
  let message = `Welcome, ${name}. You are number ${position} in line.`;
  
  return message;
}


//nowServing function.

//const deliLine = ["Steven", "Blake", "Avi"];
//Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(katzDeliLine){
  let message;
  for(var i =0; i<katzDeliLine.length; i++){
    let firstPerson = katzDeliLine[i];
    if(katzDeliLine.length ===0){
      message = 'There is nobody waiting to be served!';
      return message;
    }else{
      message = `Currently serving ${firstPerson}`;
      katzDeliLine.shift();
      return message;
    }
  }
}