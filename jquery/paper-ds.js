





var call = function(elem){
    elem.innerHTML = "correct";
    elem.style.visibility="visible";
    // $("#d").css("display","inline");
 }
 var recall = function(elem2){
    elem2.style.visibility="visible";        
}
var call_ans = function(temp){
    temp.style.display = "inline";
}
var attempt=0;
var total=10;

$(document).ready(function(){
    
    $("#btn1").click(function(){
        if(document.getElementById("a12").checked==true)
         {
             call(document.getElementById('lbl1'));
             call_ans(document.getElementById('div_ans1'));
             $("#btn11").click(function(){
              $("#show_ans1").slideToggle(700);              
            });
            attempt++;                        
         }
         else{
             recall(document.getElementById('lbl1'));
                     
         }
     });
    
     $("#btn2").click(function(){
        if(document.getElementById("a21").checked==true)
         {
             call(document.getElementById('lbl2'));
             call_ans(document.getElementById('div_ans2'));
             $("#btn22").click(function(){
                 $("#show_ans2").slideToggle(700);
             });
             attempt++;                        

         }
         else{
             recall(document.getElementById('lbl2'));

         }
     });

// start
$("#btn3").click(function(){
    if(document.getElementById("a34").checked==true)
     {
         call(document.getElementById('lbl3'));
         call_ans(document.getElementById('div_ans3'));
         $("#btn33").click(function(){
          $("#show_ans3").slideToggle(700);              
        });                        
        attempt++;                        

     }
     else{
         recall(document.getElementById('lbl3'));
                     
     }
 });

 $("#btn4").click(function(){
    if(document.getElementById("a44").checked==true)
     {
         call(document.getElementById('lbl4'));
         call_ans(document.getElementById('div_ans4'));
         $("#btn44").click(function(){
             $("#show_ans4").slideToggle(700);
         });
         attempt++;                        

     }
     else{
         recall(document.getElementById('lbl4'));

     }
 });
// end

    
$("#btn5").click(function(){
    if(document.getElementById("a52").checked==true)
     {
         call(document.getElementById('lbl5'));
         call_ans(document.getElementById('div_ans5'));
         $("#btn55").click(function(){
          $("#show_ans5").slideToggle(700);              
        });                        
        attempt++;                        

     }
     else{
         recall(document.getElementById('lbl5'));
                 
     }
 });

 $("#btn6").click(function(){
    if(document.getElementById("a64").checked==true)
     {
         call(document.getElementById('lbl6'));
         call_ans(document.getElementById('div_ans6'));
         $("#btn66").click(function(){
             $("#show_ans6").slideToggle(700);
         });
         attempt++;                        

     }
     else{
         recall(document.getElementById('lbl6'));

     }
 });

// start
$("#btn7").click(function(){
if(document.getElementById("a74").checked==true)
 {
     call(document.getElementById('lbl7'));
     call_ans(document.getElementById('div_ans7'));
     $("#btn77").click(function(){
      $("#show_ans7").slideToggle(700);              
    });                        
    attempt++;                        

 }
 else{
     recall(document.getElementById('lbl7'));
                 
 }
});

$("#btn8").click(function(){
if(document.getElementById("a83").checked==true)
 {
     call(document.getElementById('lbl8'));
     call_ans(document.getElementById('div_ans8'));
     $("#btn88").click(function(){
         $("#show_ans8").slideToggle(700);
     });
     attempt++;                        

 }
 else{
     recall(document.getElementById('lbl8'));

 }
});
// end
$("#btn9").click(function(){
    if(document.getElementById("a93").checked==true)
     {
         call(document.getElementById('lbl9'));
         call_ans(document.getElementById('div_ans9'));
         $("#btn99").click(function(){
             $("#show_ans9").slideToggle(700);
         });
         attempt++;                        
    
     }
     else{
         recall(document.getElementById('lbl9'));
    
     }
    });
    $("#btn10").click(function(){
        if(document.getElementById("a101").checked==true)
         {
             call(document.getElementById('lbl10'));
             call_ans(document.getElementById('div_ans10'));
             $("#btn1010").click(function(){
                 $("#show_ans10").slideToggle(700);
             });
             attempt++;                        
        
         }
         else{
             recall(document.getElementById('lbl10'));
        
         }
        });

});
function showResult()
{
    document.getElementById("result").innerHTML = attempt;
}
 
