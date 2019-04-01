function calculate(element){
  const points = element.innerHTML;
  element.innerHTML= parseInt(element.innerHTML) + 1;

  const parentElement = element.parentElement;
  console.log(parentElement)
  const dinoName = parentElement.getElementsByTagName("dino").innerHTML
  console.log(dinoName)

  // console.log(element.parent);
}

