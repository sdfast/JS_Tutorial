var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

headOne.addEventListener('mouseover',function(){
  headOne.style.color = 'grey';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Hover over me!"
  headOne.style.color = 'black'
})
