//TODO jQueryfy
var cb_color  = "#ffe" ; //code background
var cbh_color = "#9f7" ; //code background highlight

var step ;
var index;
var swapIndex;
var a;
var arrayMade = false;
var insertIndex = index;
var insertSwapIndex = swapIndex;

function permute(n) {
   var i ;
   a = new Array(n) ;
   for ( i=0; i<n; i++ ) a[i] = i ;
   for ( i=n-1; 0<=i; i-- ) {
      var j ;
      j = Math.floor(i*Math.random());
      var k = a[j];
      a[j] = a[i];
      a[i] = k;
   }
   return a;
}

function makeArrayElement (i) {
      $('#array').append('<div class="arraycell" id="a' + i + '"><div id="array'+i+'" class="arraytext"></div></div>');
}

function stepZero() {
  a = permute(16);
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
  document.getElementById("codeloc2").style.background = cb_color ;
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
    swapIndex = index+1;
    console.log(swapIndex);
    setCellColor(swapIndex,'red');
    setCodeColors(1);
    insertIndex = index;
    insertSwapIndex = swapIndex;
    console.log("insertIndex"+insertIndex);
    console.log("insertSwapIndex"+insertSwapIndex);
    step = 3;
    break ;
  case 3:
    setCodeColors(2);
    if(a[insertSwapIndex]>a[insertIndex] || insertIndex < 0 || insertIndex == 15){
      insertIndex=0;
      step = 4;
      break;
    }
    var temp = a[insertIndex];
    a[insertIndex] = a[insertSwapIndex];
    a[insertSwapIndex] = temp;
    setCellColor(insertIndex,'red');
    setCellColor(insertSwapIndex,'blue');
    setElementValue('array'+insertIndex, a[insertIndex]); //'array' right name?
    setElementValue('array'+insertSwapIndex, a[insertSwapIndex]);

    console.log("insertIndex"+insertIndex);
    console.log("insertSwapIndex"+insertSwapIndex);

    insertIndex--;
    insertSwapIndex--;
    console.log("insertIndex"+insertIndex);
    console.log("insertSwapIndex"+insertSwapIndex);
    break ;
  case 4:
    setCellColor(insertIndex,'green');
    // if (swapIndex < index) {
    //   setCellColor(swapIndex,'green');
    // } else {
    //   setCellColor(swapIndex,'grey');
    // }
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
    document.getElementById("codeloc2").style.background = cb_color ;
    document.getElementById("codeloc"+line).style.background = cbh_color ;
}
