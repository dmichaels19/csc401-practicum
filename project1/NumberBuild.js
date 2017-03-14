var a =  ['field1','field2','field3','field4','field5','field6','field7','field8'];
var b = [1, 2, 4, 8, 16, 32, 64, 128];

function compute() {
   var sum = 0;
   for (var i=0; i<b.length; i++ ) {
      if ( document.NumberBuild[a[i]].checked ) {
         sum = sum + b[i];
      }
   }
   document.NumberBuild.theResult.value=sum;
   if (sum==25){
     $('#campusPhoto').show();
     $('#theResultParent').addClass("has-success");
     $('#theResult').addClass("form-control-success");
   } else {
     $('#campusPhoto').hide();
     $('#theResultParent').removeClass("has-success");
     $('#theResult').removeClass("form-control-success");
   }
}
function makeCheckbox (i) {
      $('#binaryAdder').append('<div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" name="' + a[i] + '" value="" onClick=compute()>' + b[i] + '</label></div>');
}
for (i=0; i<a.length; i++) {
   makeCheckbox(i);
}
$('#binaryAdder').append('<div class="form-group row" id="theResultParent"><label for="theResult" class="col-2 col-form-label">Total</label><div class="col-10"><input class="form-control" type="text" id="theResult"></div></div>');
$('#campusPhoto').hide();
