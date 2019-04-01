function calculate(element){
  const points = element.innerHTML;
  element.innerHTML= parseInt(element.innerHTML) + 1;

  const dinos = document.getElementsByClassName('score');
  
  console.log(element.parent);
}

