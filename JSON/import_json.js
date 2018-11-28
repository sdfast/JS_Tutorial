'use strict';

fetch("objects.json")
  .then(function(resp){
  return resp.json();
})
.then(function(data) {
  createelement()
})
