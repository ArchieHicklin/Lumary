$(document).ready(function() {
	   
   
    
   $(document).on('click','#tab1',function(e){
      
      
         $('.popup.tab1').addClass("active");
         $('.popup.tab2').removeClass("active");
         
         
     })
   
   
       
   $(document).on('click','#tab2',function(e){
      
      $('.popup.tab2').addClass("active");
         $('.popup.tab1').removeClass("active");
         
         
     })
   
     $(document).on('click','.close',function(e){
     
      $('.popup.tab2').removeClass("active");
         $('.popup.tab1').removeClass("active");
         
         
     })



    
    /* 03-08-2017 add slick here  slick slider */
			$('.slider').slick({
  centerMode: false,
 arrows:false,                
  centerPadding: '0',
  slidesToShow: 3,
  slideSpeed:10000,
  autoplay:false,
  autoplaySpeed: 20000,
  infinite:true,
   dots:false,
  draggable:false,
  speed: 1000,
                
                responsive: [
    {
      breakpoint:992,
      settings: {
        //arrows: false,
        centerMode: false,
        slidesToShow: 3,
		
      }
    },
	{
      breakpoint: 768,
      settings: {
        //arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2,
		
      }
    },
    {
      breakpoint: 599,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1,
		 draggable:true,
           autoplay:true,
		
      }
    }
  ]
   
 
});
    
    
    	$('.slider2').slick({
  centerMode: false,
 arrows:true,                
  centerPadding: '0',
  slidesToShow: 1,
  slideSpeed:10000,
  autoplay:false,
  autoplaySpeed: 1000,
  infinite:true,
   dots:false,
  speed: 1000,
                
               
   
 
});
/* slick slider end   03-08-2017 */
          
          
});