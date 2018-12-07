var newCss = {
    'color':'white',
    'background':'black',
    'border':'blue'}


var elem_h1 = $('h1')
var listItems = $('li')

elem_h1.css(newCss)
listItems.css('color','pink')
listItems.eq(0).css('color','red')
listItems.eq(0).css('font-family','Courier New')
