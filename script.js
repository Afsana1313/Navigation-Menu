//$('.bg1').css({'width': $(document).width()*'1.414' , 'height' : $(document).height() *3}); 
$('.burger-box').click(function(){
 if($('.menu').width() == '0'){
       $('.menu').css({"width":"400", "height":"450"});    
       $('.site-nav').css('opacity','1');   
    }
  else {
         $('.menu').css({"width":"0", "height":"0"});    
       $('.site-nav').css('opacity','0');       
  } 
 });

$('bg1').click(function(){
  var value = Math.random() * 10;
  for(var i=0; ;i++)
    {  var top = this.style.top;
       var left = this.style.left;
       
       top += value;
       left += value;
       if(top>= $(window).style.top ) break;
       $('.bg1').css({"top":top, "left":left});    
    }
});