//TODO jQueryfy
var cb_color  = "#ffe" ; //code background
var cbh_color = "#9f7" ; //code background highlight

var step ;
var index;
var swapIndex;
var a;
var arrayMade = false;

function makeArrayElement (i) {
      $('#array').append('<div class="arraycell" id="a' + i + '"><div id="array'+i+'" class="arraytext"></div></div>');
}

function stepZero() {
  a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  if(!arrayMade){
    for (i=0; i<a.length; i++) {
       makeArrayElement(i);
    }
  }
  arrayMade=true;
  for (var i=0; i<16;i++ ) {
    //document.getElementById('a'+i).style.background = "grey";//needed when reset
    document.getElementById('a'+i).style.background = "grey";
    document.getElementById('a'+i).style.color = "black";//needed when reset
    setElementValue('array'+i, a[i]) ;
  }
  step = 1 ;
  index = -1;
  swapIndex = 0;
  document.getElementById("codeloc0").style.background = cb_color ;
  document.getElementById("codeloc1").style.background = cb_color ;
  setCodeColors(0) ;
}

function stepAlgo() {
  switch (step) {
  case 1:
    index++;
    setCellColor(index,'blue');
    setCodeColors(0) ;
    step = 2;
    break ;
  case 2:
    do {
        swapIndex = Math.floor(16*Math.random());
    } while (swapIndex == index);
    setCellColor(swapIndex,'red');
    setCodeColors(1);
    step = 3;
    break ;
  case 3:
    var temp = a[index];
    a[index] = a[swapIndex];
    a[swapIndex] = temp;
    setCellColor(index,'red');
    setCellColor(swapIndex,'blue');
    setElementValue('array'+index, a[index]); //'array' right name?
    setElementValue('array'+swapIndex, a[swapIndex]);
    step = 4;
    break ;
  case 4:
    setCellColor(index,'green');
    if (swapIndex < index) {
      setCellColor(swapIndex,'green');
    } else {
      setCellColor(swapIndex,'grey');
    }
    step = 1;
    if (index==15) {
      step = 5;
      break ;
    }
    break ;
  case 5: //this should be case zero where we dont increase index
    break;
  }
}

function setElementValue(elementId, value) {
  if (document.getElementById(elementId).innerText!=undefined) {
    document.getElementById(elementId).innerText = value ;
  } else {
    document.getElementById(elementId).textContent = value ;
  }
}

function setCellColor(cell, color) {
  document.getElementById('a'+cell).style.background = color ;
}

function setCodeColors(line) {
    document.getElementById("codeloc0").style.background = cb_color ;
    document.getElementById("codeloc1").style.background = cb_color ;
    document.getElementById("codeloc"+line).style.background = cbh_color ;
}
