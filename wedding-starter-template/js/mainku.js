

$(window).on("load",function(){
    
    // home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        // console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

$(document).ready(function(){
    
    // people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        // if($(this).hasClass("active")){
        //     return;
        // }
        // else{
        //     peopleFilter($(this).attr("data-target"))   
        // }
        if(!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"))   
        }
    })
    function peopleFilter(target){
        // console.log(target)
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();
    }
    
    // gallery popup
    const wHeight = $(window).height();
    // console.log(wHeight)
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");
    
    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    // console.log(totalGalleryItems)
    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        // console.log(itemIndex)
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
         gpSlideShow();
    })
    
    
    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }
    
})