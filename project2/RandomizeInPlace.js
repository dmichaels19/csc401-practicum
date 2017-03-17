function setCellColor(cell, color) {
  document.getElementById('a'+cell).style.background = color ;
}
function stepZero() {
  var n = 16;
  a = new Array(n);
  var i;
  for (i=0; i<n; i++) {
    a[i] = i;
  }
  for (i=1; i<17; i++) {
    setElementValue('array'+i, a[i-1]) ;
  }
  for (i=1; i<17; i++) {
    document.getElementById('a'+i).style.background = "grey";
    document.getElementById('a'+i).style.color = "black" ;
    setElementValue('array'+i, a[i-1]) ;
  }
  var step = 1;
  document.getElementById("codeLine1").style.background = codeColor;
  document.getElementById("codeLine2").style.background = codeColor;
}
function stepAlgo() {
  switch(step) {
  case 1:
    document.getElementById("codeLine1").style.background = highlight;
    document.getElementById("codeLine2").style.background = codeColor;
    index++;
    setCellColor(index,'blue');
    step = 2;
    break;
  case 2:
    document.getElementById("codeLine1").style.background = codeColor;
    document.getElementById("codeLine2").style.background = highlight;
    var swapIndex = Math.floor(n*Math.random());
    setCellColor(swapIndex,'red');
    step = 3;
    break;
  case 3:
    var temp = a[index];
    a[index] = a[swapIndex];
    a[swapIndex] = a[index];
    setCellColor(index,'red');
    setCellColor(swapIndex,'blue');
    setElementValue('array'+index, a[index]); //'array' right name?
    setElementValue('array'+swapIndex, a[swapIndex]);
    step = 3;
    break;
  case 4:
    setCellColor(index,'green');
    setCellColor(swapIndex,'grey');
    step = 1;
    break;
  }
}
