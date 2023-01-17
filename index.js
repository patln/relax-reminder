let width = screen.width;


// Scroll throttler
const throttle = function (fn, delay) { 

    let time = Date.now(); 
   
    // If new time is after the past time + delay, run the function
    return () => { 
      if((time + delay - Date.now()) <= 0) { 
        
        fn(); 
        time = Date.now(); 
      } 
    } 
  } 
   
  // Here's a dummy function that we want to throttle 
  function runOnScroll(){ 
    console.log('function fired!');
    console.log(scrollY);
    let maxDelta = window.innerHeight;
    let delta = scrollY / maxDelta;
    
    if (width > 1200) {
        $(".hero-img").css("transform", `translate(0, ${(delta * -80)}%)`);
        $(".hero-sidebar-img").css("transform", `translate(0, ${(delta * -80)}%)`);
        $(".section-3-foot-img").css("transform", `translate(${(delta * -3)}%, 0`);
    }
    else {
        $(".hero-img").css("transform", `translate(0, ${(delta * -80)}%)`);
        $(".hero-sidebar-img").css("transform", `translate(0, ${(window.innerHeight * 1.5) + (delta * -1)}%)`);
        $(".section-3-foot-img").css("transform", `translate(${(window.innerHeight * 1.5) + (delta * -1)}%, 0`);
    }
  } 

   
  // This listener will run runOnScroll at most once per 250ms.
  $(document).on('scroll', throttle(runOnScroll, 100)); 



$(".mobile-nav-button-burger").on("click", function(){
    $(this).css("display", "none");
    $(".mobile-nav-button-close").css("display", "flex");
    $(".mobile-nav-list").css("display", "flex");
    setTimeout(mobileTransitionIn, 500);
});

$(".mobile-nav-button-close").on("click", function(){
    $(this).css("display", "none");
    $(".mobile-nav-button-burger").css("display", "flex");
    $(".mobile-nav-list").removeClass("mobile-nav-shown"); 
    setTimeout(mobileTransitionOut, 500);
});

function mobileTransitionIn () { 
    $(".mobile-nav-list").addClass("mobile-nav-shown");   
}

function mobileTransitionOut () {
    $(".mobile-nav-list").css("display", "none");
}


// Listener on images

$(".thumb-img").on("click", function(e) {
    let clicked = $(e.target);
    if (width > 1200) {
        $('.modal-img').attr("src", `${clicked.attr("src")}`);
        $('.modal-wrapper').css("display", "flex");
    }
});


$(".modal-button-close").on("click", function() {
    $(".modal-wrapper").css("display", "none");
});