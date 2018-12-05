var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Hover Over Me!"
  headOne.style.color = 'grey';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Hover over me!"
  headOne.style.color = 'black'
})

headTwo.addEventListener('click',function(){
  headTwo.style.color = 'blue'
})


headThree.addEventListener('dblclick',function(){
  headThree.style.color = 'purple';
})
