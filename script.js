$(".replyYes ").click(function() {  
    $(".homers-reply").text("真香");
 //   $("body").css("background-color","pink");   
    $("h1").text("再吃一个？");
    $("h1").css("color","pink");
    $("p").css("color","yellow"); 
    
     $("body").css({"background-image":"url(http://img3.imgtn.bdimg.com/it/u=819273704,4080494621&fm=26&gp=0.jpg"});
     
 });
 
 //Independent Practice
 $(".replyNo").click(function() { 
    $("body").css("background-color","red");
    $("h1").text("Doh!");
    $("h1").css("color","pink");
    
    $("img").css("width",260);
    
 });