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

    let banner_prev = $(".pc .slideshow-container .slideshow-controller>a.next")
    let banner_next = $(".pc .slideshow-container .slideshow-controller>a.prev")

    let m_banner_prev = $(".mobile .slideshow-container .slideshow-controller>a.next")
    let m_banner_next = $(".mobile .slideshow-container .slideshow-controller>a.prev")

    $(".pc .slide").each(function()  {
        if ($(".pc .slide").index(this) == 0) {
            html = '<span class="dot active"></span>'
        } else {
            html = '<span class="dot"></span>'
        }
        
        $(".slideshow-controller-dot").append(html)
    })
    
    function slideNext() {
        //add class
        current = $(".pc .slide.current")
        index = $(".pc .slide").index(current)
        index < $(".pc .slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".pc .slide")[index]).addClass("current")
        $(".pc .dot.active").removeClass("active")
        $($(".pc .dot")[index]).addClass("active")
    }

    function mSlideNext() {
        //add class
        current = $(".mobile .slide.current")
        index = $(".mobile .slide").index(current)
        index < $(".mobile .slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".mobile .slide")[index]).addClass("current")
        $(".mobile .dot.active").removeClass("active")
        $($(".mobile .dot")[index]).addClass("active")
    }

    function slidePrev() {
        //add class
        current = $(".pc .slide.current")
        index = $(".pc .slide").index(current)
        index < $(".pc .slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".pc .slide")[index]).addClass("current")
        $(".pc .dot.active").removeClass("active")
        $($(".pc .dot")[index]).addClass("active")
    }

    function mSlidePrev() {
        //add class
        current = $(".mobile .slide.current")
        index = $(".mobile .slide").index(current)
        index < $(".mobile .slide").length-1 ? index++ : index=0
        current.removeClass("current")
        $($(".mobile .slide")[index]).addClass("current")
        $(".mobile .dot.active").removeClass("active")
        $($(".mobile .dot")[index]).addClass("active")
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

    m_banner_next.click(function() {
        clearInterval(m_interval)
        mSlideNext()
        m_interval = setInterval(mSlideNext, 3000)
    })
    m_banner_prev.click(function() {
        clearInterval(m_interval)
        mSlidePrev()
        m_interval = setInterval(mSlidePrev, 3000)
    })

    interval = setInterval(slideNext, 3000)
    m_interval = setInterval(mSlideNext, 3000)

    $("video")[0].play();
    $("video")[0].muted = false;


    //floating video
    $(".abs.zz").click(function() {
        $("#thuong-hieu-video").show()
        $("#thuong-hieu-video video")[0].play()
        $('html').keyup(function(e) {
            if (e.key === "Escape") {
                console.log("keypress Yeah")
                $("#thuong-hieu-video").hide()
                $(this).unbind("keyup")
                $("#thuong-hieu-video video")[0].video.pause()
            }
        })
        $('html, body').css({
            overflow: 'hidden',
        });

        //close button
        $(".my-modal .cancel").click(function() {
            $("#thuong-hieu-video").hide()
            $('html, body').css({
                overflow: 'auto',
            });
            $("#thuong-hieu-video video")[0].pause()
        })
    })
})