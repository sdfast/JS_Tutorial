var newCss = {
    'color':'white',
    'background':'black',
    'border-style':'dotted',
    'border-color':'red'}


var elem_h1 = $('h1')

elem_h1.css(newCss)
elem_h1.css('margin-top', '20px')

var listItems = $('li')
// .eq selects number of item's index
listItems.css('color','pink')
listItems.eq(0).css('color','red')
listItems.eq(0).css('font-family','Courier New')

var inp = $('input')

inp.eq(0).val('new value!')

// adding a class to an element
$('h1').addClass('changed1')
$('li').addClass('all_lists')
$('p').addClass('turnRed')

$('p').removeClass('turnRed')
// removing a class$

$('li').removeClass('all_lists')

var parag = $('p')

//Events

$('h1').click(function(){
  $(this).text("Changed Changed")
})

$('li').click(){
  console.log("Was clicked");
}
