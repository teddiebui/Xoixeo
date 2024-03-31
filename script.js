$(document).ready(()=>{
    let cdn = "https://xoixeotv.cdn.vccloud.vn";


    console.log("hello")

    $(".hover").hover(
        function() { // Mouse enter
            $(this).addClass('hovered');
        }, 
        function() { // Mouse leave
            $(this).removeClass('hovered');
        }
    )

    let banner_prev = $(".mobile .banner .slideshow-controller a.prev")
    let banner_next = $(".mobile .banner .slideshow-controller a.next")
    $(".pc .slide").each(function()  {
        if ($(".slide").index(this) == 0) {
            html = '<span class="dot active"></span>'
        } else {
            html = '<span class="dot"></span>'
        }
        
        $(".pc .slideshow-controller-dot").append(html)
    })
    
    function slideNext() {
        //add class
        current = $(".slide.current")
        index = $(".slide").index(current)
        index < $(".slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".slide")[index]).addClass("current")
        $(".dot.active").removeClass("active")
        $($(".dot")[index]).addClass("active")


    }

    function slidePrev() {
        //add class
        current = $(".slide.current")
        index = $(".slide").index(current)
        index < $(".slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".slide")[index]).addClass("current")
    }

    banner_next.click(function() {
        clearInterval(interval)
        slideNext()
        interval = setInterval(slideNext, 3000)
    })

    banner_prev.click(function() {
        clearInterval(interval)
        slidePrev()
        interval = setInterval(slideNext, 3000)
    })

    interval = setInterval(slideNext, 3000)

})