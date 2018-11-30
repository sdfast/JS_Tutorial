
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
    document.write('<p id="jsons">' + (xhttp.responseText) + '</p>');
  }
}
xhttp.open("GET", "objects.json", true);
xhttp.send();
